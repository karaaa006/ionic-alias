<template>
  <ion-page>
    <ion-content class="ion-padding content" :fullscreen="true">
      <div class="title">Alias Game</div>
      <IonList class="menu-list">
        <IonItem>
          <VButton block fullHeight router-link="/new-game">New game</VButton>
        </IonItem>
        <IonItem>
          <VButton block fullHeight router-link="/settings">Settings</VButton>
        </IonItem>
        <IonItem>
          <VButton block fullHeight router-link="/about">About</VButton>
        </IonItem>
        <IonItem>
          <VButton block fullHeight @click="handleExit">Exit</VButton>
        </IonItem>
      </IonList>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonList, IonItem } from "@ionic/vue";
import { App } from "@capacitor/app";
import VButton from "@/components/MainPage/common/VButton.vue";

const handleExit = () => {
  App.exitApp();
};
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 20px;

  text-align: center;
  font-size: 42px;
  font-weight: 600;
}

.content {
  &::part(scroll) {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }
}

.menu-list {
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
}

ion-item {
  &::part(native) {
    height: 100%;
  }
}
</style>
