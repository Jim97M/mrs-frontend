import axios from "axios";
const TOURNAMENT_BASE_URL = "http://localhost:8081/api/v1/club";
class TournamentService{
   saveTournament(tournament){
       return axios.post(
           TOURNAMENT_BASE_URL, tournament
       )
   }

   getAllTournaments(){
       return axios.get(TOURNAMENT_BASE_URL)
   }
   deleteTournament(id) {
    return axios.delete(TOURNAMENT_BASE_URL + "/" + id);
  }

  getTournamentById(id) {
    return axios.get(TOURNAMENT_BASE_URL + "/" + id);
  }


}

export default new TournamentService();
 