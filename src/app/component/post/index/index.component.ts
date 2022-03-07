import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService} from 'src/app/services/notification.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  closeResult!: string;
  posts: Post[] = [];
  form!: any;

  constructor(public postService: PostService, private modalService: NgbModal, private router: Router,private notifyService : NotificationService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    }),
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required]),
      });
  }
  get f() {
    return this.form.controls;
  }
  refresh(): void {
    window.location.reload();
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  submit() {
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
      console.log('Post created successfully!');
      this.notifyService.showSuccess("Post created successfully", "")
      this.router.navigateByUrl('post/index');
      this.refresh();
      
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}