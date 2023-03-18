import {
  IonHeader,
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { FC } from "react";

const Login: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Lets go</IonContent>
    </IonPage>
  );
};

export default Login;
