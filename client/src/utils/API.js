import axios from "axios";
export default {
  isLoggedIn:function(){
    axios.get("/isLoggedIn")
      .then((res)=>{
        console.log(res.data);
        return(res.data);
      })
      .catch(err=>console.log(err));
  },
  email:function(){
    return axios.get("/email")
  }
};