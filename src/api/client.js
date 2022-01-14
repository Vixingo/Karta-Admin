import axios from "axios";


const base = process.env.REACT_APP_BASE;
const x_api_key = process.env.REACT_X_API_KEY;
const x_api_secret = process.env.REACT_X_API_SECRET;


const client = axios.create({
	baseURL: base
});




export function _request  (config) {


	axios({
		method: "get",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		url: "http://localhost:3001/users/",
	  })
			.then(function (response) {
				console.log(response.data);
			  })
			  .catch(function (error) {
				console.log(error);
			  });

}


