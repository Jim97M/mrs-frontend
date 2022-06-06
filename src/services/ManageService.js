import axios from "axios";
const MANAGE_BASE_URL = "http://localhost:8081/api/v1/manager";
class ManageService{
   saveManage(manage){
       return axios.post(
           MANAGE_BASE_URL, manage
       )
   }

   getAllManagers(){
       return axios.get(MANAGE_BASE_URL)
   }
}

export default new ManageService();