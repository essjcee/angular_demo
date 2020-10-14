import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompactDiskService } from './compact-disk.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompactDisksComponent } from './compact-disks/compact-disks.component';
import { CompactDiskComponent } from './compact-disk/compact-disk.component';
import { CompactDiskAddEditComponent } from './compact-disk-add-edit/compact-disk-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CompactDisksComponent,
    CompactDiskComponent,
    CompactDiskAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CompactDiskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
