import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class EditNoteModalComponent  implements OnInit {

  @Input() note!: Note;
  public noteS: NoteService;
  constructor(noteS: NoteService,private modalController: ModalController) {
    this.noteS= noteS;
  }
  ngOnInit(): void {
  }

  saveChanges() {
  
    this.noteS.updateNote(this.note)
      .then(() => {
        this.modalController.dismiss();
      })
      .catch((error) => {
        console.error("Error al actualizar la nota:", error);
      });
  }

  close() {
    this.modalController.dismiss();
  }

  public async takePic() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    if (image.webPath) {
      const base64Image = await this.convertToBase64(image.webPath);
      this.note.img = base64Image;
    } else {
      console.error('No se pudo obtener el webPath de la imagen');
    }
    
  }  private convertToBase64(webPath : string) {
    return new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        const reader = new FileReader();
        reader.onloadend = function() {
          resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = reject;
      xhr.open('GET', webPath);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }
}