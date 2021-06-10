import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Water from '../components/Water';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>水庫及時資訊</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">水庫及時資訊</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Water/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
