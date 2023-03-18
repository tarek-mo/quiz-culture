import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { InputChangeEventDetail } from "@ionic/core";

import { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from "react";

const Signup: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const signup = (e: FormEvent) => {
    e.preventDefault();
    console.log("formdata", formData);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={arrowBack} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol size="12">
              <IonCardTitle>Inscrivez</IonCardTitle>
              <h5>Inscrivez-vous, répondez et gagnez des cadeaux</h5>
            </IonCol>
          </IonRow>
          <form onSubmit={signup}>
            <IonList className="ion-margin-top ion-padding-top">
              <IonItem>
                <IonLabel position="floating">Full Name</IonLabel>
                <IonInput name="fullName" placeholder="Full Name" />
              </IonItem>
              <IonItem className="ion-margin-top">
                <IonLabel position="floating">Email</IonLabel>
                <IonInput placeholder="Enter email" type="email"></IonInput>
              </IonItem>
              <IonItem className="ion-margin-top">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput placeholder="Password" type="password"></IonInput>
              </IonItem>
              <IonItem className="ion-margin-top">
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput
                  placeholder="Confirm Password"
                  type="password"
                ></IonInput>
              </IonItem>

              <IonButton
                className="ion-margin-top"
                expand="block"
                type="submit"
              >
                Create account
              </IonButton>
            </IonList>
          </form>
        </IonGrid>
      </IonContent>

      <IonFooter>
        <IonGrid className="ion-no-margin ion-no-padding">
          <IonRow className="ion-text-center ion-justify-content-center">
            <IonCol size="12">
              <p>
                Already Got an account?
                <IonRouterLink className="custom-link" routerLink="/login">
                  Login &rarr;
                </IonRouterLink>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Signup;
