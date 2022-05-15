import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateComponent implements OnInit {
  
  form!: any;  

  constructor(
    public postService: PostService,
    private router: Router
  ) { }  

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),      
    });
  }   

  get f(){
    return this.form.controls;
  }   

  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(() => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
}