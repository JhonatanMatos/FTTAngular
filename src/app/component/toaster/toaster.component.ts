import { Component } from '@angular/core';

import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: []
})
export class ToasterComponent {

  title = 'toaster-not';

  constructor(private notifyService : NotificationService) { }
   
  showToasterSuccess(){
      this.notifyService.showSuccess("Sucesso", "")
  }
   
  showToasterError(){
      this.notifyService.showError("Erro", "")
  }
   
  showToasterInfo(){
      this.notifyService.showInfo("Info", "")
  }
   
  showToasterWarning(){
      this.notifyService.showWarning("Atenção", "")
  }

}
