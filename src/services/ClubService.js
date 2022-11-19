import axios from "axios";
const CLUB_BASE_URL = "http://localhost:8081/api/v1/club";
class ClubService{
   saveClub(club){
       return axios.post(
           CLUB_BASE_URL, club
       )
   }

   getAllClub(){
       return axios.get(CLUB_BASE_URL)
   }
   deleteClub(id) {
    return axios.delete(CLUB_BASE_URL + "/" + id);
  }

  getClubById(id) {
    return axios.get(CLUB_BASE_URL + "/" + id);
  }

}

export default new ClubService();
