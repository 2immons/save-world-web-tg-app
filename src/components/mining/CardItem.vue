<script setup lang="ts">
import { defineProps, ref } from "vue";
import { cardsStore } from "@/store/cards";
import CardPopup from "@/components/mining/CardPopup.vue";
import MiningSelect from "@/components/mining/MiningSelect.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const cardsStoreInstance = cardsStore();

const props = defineProps<{
  card: {
    title: string;
    price: number;
    level: number;
    isActive: boolean;
  };
}>();

const isCardPopupVisible = ref(false);

const openCardPopup = () => {
  isCardPopupVisible.value = true;
};
</script>

<template>
  <div class="card-item" @click="openCardPopup">
    <div
      class="card-item--inactive"
      v-if="!card.isActive"
      @click="openCardPopup"
    >
      <button>
        <img src="../../assets/svg/tasks/locked-card.svg" alt="" />
      </button>
      <img
        src="../../assets/svg/bg-vectors-card.svg"
        alt=""
        class="bg-vectors"
      />
    </div>
    <CardPopup
      @click.stop
      :card="card"
      :modelValue="isCardPopupVisible"
      @update:modelValue="isCardPopupVisible = $event"
    />
    <div class="photo">
      <img src="../../assets/images/card-test.png" alt="" />
    </div>
    <div class="content">
      <div class="info">
        <p class="card__title">{{ card.title }}</p>
        <p class="card__boost">
          {{ t("boost") }}: + 0.5
          <img
            src="../../assets/svg/stats/green-coin--light-green.svg"
            alt=""
          />
          {{ t("h") }}
        </p>
        <!--        <button @click="openCardPopup">+</button>-->
      </div>
      <hr />
      <div class="footer">
        <div class="footer__item footer__item--level">
          <img src="../../assets/svg/stats/green-coin.svg" alt="" />
          <p>Lvl {{ card.level }}</p>
        </div>
        <div class="footer__item footer__item--price">
          <p>{{ t("price") }}: {{ card.price }}</p>
          <img src="../../assets/svg/stats/green-coin.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../../styles/variables"
.card-item
  position: relative
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  width: 100%
  height: fit-content
  color: $c-light-text
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(180deg, rgba(21, 23, 21, 0) 49.96%, rgba(34, 240, 125, 0.26) 112.51%)
  border: 1px solid $c-border-color
  border-radius: 18px

.card-item--inactive
  background: #151715AD
  border: 1px solid #57575747
  width: 100%
  height: 100%
  position: absolute
  display: flex
  justify-content: center
  align-items: center
  z-index: 10
  backdrop-filter: blur(4px)

  button
    z-index: 12

  .bg-vectors
    position: absolute
    right: 0
    top: 0
    height: 100%

.photo
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 161px
  overflow: hidden
  border: 1px solid $c-border-color
  border-radius: 18px

  img
    height: 100%
    width: 120%
    object-fit: cover
    object-position: center

.content
  display: flex
  flex-direction: column
  width: 100%
  padding: 10px
  height: fit-content
  align-items: center
  justify-content: space-between

  .info
    position: relative
    display: flex
    flex-direction: column
    gap: 12px
    width: 100%
    padding: 10px 0

    .card__title
      font-size: 14px

    .card__boost
      color: $c-light-element
      font-size: 12px
      display: flex
      align-items: center
      gap: 4px

      img
        height: 10px

    button
      position: absolute
      right: 0
      top: 50%
      transform: translateY(-50%)
      height: 25px
      width: 25px
      border-radius: 50px
      color: white
      background: #FFFFFF1A

  hr
    border: 1px solid $c-border-color
    width: 100%

  .footer
    display: flex
    justify-content: space-between
    width: 100%
    padding: 12px 0
    text-align: left
    white-space: nowrap

    .footer__item
      border-radius: 50px
      padding: 5px 9px
      display: flex
      justify-content: center
      gap: 3px
      border: 1px solid $c-border-color

      p
        font-size: 9px

      img
        height: 9px

    .footer__item--level
      background: #FFFFFF24

    .footer__item--price
      background: #FFFFFF08

  .income
    display: flex
    align-items: center
    justify-content: center
    gap: 3px
    opacity: 60%

    p
      font-size: 12px
      font-weight: 600
      line-height: 16.39px

  h3
    font-size: 14px
    font-weight: 600
    line-height: 19.12px

  p
    font-size: 18px
    text-align: start
    display: -webkit-box
    -webkit-line-clamp: 4
    -webkit-box-orient: vertical
    overflow: hidden
    text-overflow: ellipsis
</style>
