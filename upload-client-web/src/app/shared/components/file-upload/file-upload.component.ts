import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileToUpload: File = null;
  @Output() sendFileEvent = new EventEmitter<File>();
  @ViewChild('fileUploadElement') fileUploadElement;

  constructor() { }

  ngOnInit(): void {
  }

  fileChange(event): any {
    const file: File = event.target.files[0];
    if (file) {
      if (this.validateFileType(file)) {
        this.fileToUpload = file;
      }
      return false;
    }
  }

  sendFile(): void {
    this.sendFileEvent.emit(this.fileToUpload);
    this.clearElementValue();
  }

  validateFileType(file: File): boolean {
    if (file.type !== 'application/json') {
      Swal.fire({
        title: 'Error!',
        text: 'You must input only JSON files all right?',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else {
      return true;
    }
  }

  clearElementValue(): void {
    this.fileToUpload = null;
    this.fileUploadElement.nativeElement.value = '';
  }

}
