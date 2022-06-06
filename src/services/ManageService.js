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
   deleteManager(id) {
    return axios.delete(MANAGE_BASE_URL + "/" + id);
  }

  getManagerById(id) {
    return axios.get(MANAGE_BASE_URL + "/" + id);
  }

  updateManage(manager, id) {
    return axios.put(MANAGE_BASE_URL + "/" + id, manager);
  }
}

export default new ManageService();