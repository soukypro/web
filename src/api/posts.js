import axios from "axios";

export default {
    getPosts(cb){
        axios.get(window.SETTINGS.API_BASE_PATH + 'posts/?per_page=8')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
    }
}