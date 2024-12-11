import { makeAutoObservable } from "mobx";
import { makePersistable, hydrateStore } from "mobx-persist-store";

class Store {

   constructor() {
     makeAutoObservable(this);
   
     // makePersistable bilan saqlashni sozlash
     makePersistable(this, {
       name: "authStore",
       properties: ["isAuth", "userData", "token"],
       storage: window.localStorage 
     });
   }

  isAuth = false;
  userData = {};
  token = {
    access_token: "",
    refresh_token: "",
  };

  setIsAuth(value) {
    this.isAuth = value;
  }

  login(data) {
    this.isAuth = true;
    this.userData = data.user;
    this.token = {
      access_token: data.tokens.accessToken,
      refresh_token: data.tokens.refreshToken,
    };
  }

  logout() {
    this.isAuth = false;
    this.userData = {};
    this.token = {
      access_token: "",
      refresh_token: "",
    };
  }
}

// AuthStore-ni yaratish
const authStore = new Store();
export default authStore;
