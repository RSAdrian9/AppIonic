import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonList, IonItem, IonLabel, IonChip, IonNote } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-about-me',
  templateUrl: 'about-me.page.html',
  styleUrls: ['about-me.page.scss'],
  standalone: true,
  imports: [IonHeader,
           IonToolbar, 
           IonTitle, 
           IonContent, 
           ExploreContainerComponent,
           IonCard,
           IonCardTitle,
           IonCardSubtitle,
           IonCardContent,
           IonCardHeader,
           IonList,
           IonItem,
           IonLabel,
           IonChip,
           IonNote
          ],
})
export class AboutMePage {
  constructor() {}
}
