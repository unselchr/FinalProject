import axios from "axios";
export default {
  isLoggedIn:function(){
    return axios.get("/isLoggedIn");
  },
  email:function(){
    return axios.get("/email")
  }
};