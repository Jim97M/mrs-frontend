import axios from "axios";
const STUDENT_BASE_URL = "http://localhost:8081/api/v1/club";
class StudentService{
   saveStudent(student){
       return axios.post(
           STUDENT_BASE_URL, student
       )
   }

   getAllStudents(){
       return axios.get(STUDENT_BASE_URL)
   }
   deleteStudents(id) {
    return axios.delete(STUDENT_BASE_URL + "/" + id);
  }

  getStudentById(id) {
    return axios.get(STUDENT_BASE_URL + "/" + id);
  }

}

export default new StudentService();