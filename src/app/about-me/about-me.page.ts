import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonList, IonItem, IonLabel, IonChip, IonNote, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about-me',
  templateUrl: 'about-me.page.html',
  styleUrls: ['about-me.page.scss'],
  standalone: true,
  imports: [IonHeader,
           IonToolbar, 
           IonTitle, 
           IonContent, 
           IonCard,
           IonCardTitle,
           IonCardSubtitle,
           IonCardContent,
           IonCardHeader,
           IonList,
           IonItem,
           IonLabel,
           IonChip,
           IonNote,
           IonIcon
          ],
})
export class AboutMePage {
  constructor() {}
}
