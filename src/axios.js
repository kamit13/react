import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-reactjs-54304.cloudfunctions.net/api"
	//"http://localhost:5001/reactjs-54304/us-central1/api"
				 
});

export default instance;
