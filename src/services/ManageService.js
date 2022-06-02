import axios from "axios";
const MANAGE_BASE_URL = "http://localhost/api/manage";
class ManageService{
   saveManage(manage){
       return axios.post(
           MANAGE_BASE_URL, manage
       )
   }
}

export default new ManageService();