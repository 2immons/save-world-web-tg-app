import { defineStore } from "pinia";
import axios from "axios";
import { config } from "./config";

export const cardsStore = defineStore("cards", {
  state: () => ({
    cards: [
      {
        title: "Title",
        price: 10,
        level: 20,
        isActive: false,
      },
      {
        title: "Title",
        price: 10,
        level: 20,
        isActive: true,
      },
      {
        title: "Title",
        price: 10,
        level: 20,
        isActive: false,
      },
      {
        title: "Title",
        price: 10,
        level: 20,
        isActive: true,
      },
      {
        title: "Title",
        price: 10,
        level: 20,
        isActive: true,
      },
      {
        title: "Title",
        price: 10,
        level: 20,
        isActive: true,
      },
    ],

    promoTasks: [
      {
        title: "Quest Name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper.",
      },
      {
        title: "Quest Name 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper.",
      },
      {
        title: "Quest Name 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper.",
      },
      {
        title: "Quest Name 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper.",
      },
    ],
  }),

  actions: {
    fetchQuests() {
      return this.promoTasks;
    },

    async joinQuest(quest: any) {
      const response = await axios.post(
        config.backendURL + "/orders/join-quest",
        {
          quest,
          withCredentials: true,
        }
      );

      if (response.status !== 201) {
        throw new Error(
          "Не удалось создать обращение. Неправильный статус ответа от сервера: " +
            response.status
        );
      }
    },
  },

  getters: {},
});
