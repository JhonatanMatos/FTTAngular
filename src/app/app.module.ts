import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToasterComponent } from './component/toaster/toaster.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { ModalComponent } from './component/dialog/modal/modal.component';
import { HomeComponent } from './component/home/home.component';
import { SelectComponent } from './component/select/select.component';
import { InputComponent } from './component/input/input.component';
import { ButtonComponent } from './component/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './component/post/post.module';
import { LinkComponent } from './component/link/link.component';
import { DividerComponent } from './component/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    DialogComponent,
    ModalComponent,
    HomeComponent,
    SelectComponent,
    InputComponent,
    ButtonComponent,
    LinkComponent,
    DividerComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    PostModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
