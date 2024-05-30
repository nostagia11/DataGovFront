import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  file: any;
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  target!: HTMLInputElement & EventTarget;
 constructor(private fileService: UploadFileService) {}
 
  // onUploadFiles(files: any): void {
    
   // const formData = new FormData();
   // for (const file of files) { formData.append('files', file, file.name); }
   // this.fileService.upload(formData).subscribe(
   //   event => {
    //    console.log(event);
    //    this.resportProgress(event);
    //  },
      //(error: HttpErrorResponse) => {
      //  console.log(error);
     // }
   // );
  //}

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      ////case HttpEventType.DownloadProgress:
       // this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
       // break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
         // saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  //{type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

 
  
  scanExcel(event :any){
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file',file,file.name);
  

    this.fileService.scanExcel(formData)
      .subscribe(
        response => {
          console.log('Scan successful:', response);
          // Handle response as needed
        },
        error => {
          console.error('Error scanning Excel:', error);
          // Handle error appropriately
        }
      );
  }

}
