export default function handleResponseFromAPI(promise) {
	return promise
		.then((resolve) => {
			return { status: 200, body: "success"};
		})
		.catch((Error) => {
			return (new Error());
		})
		.finally(() => {
			console.log("Got a response from the API");
		})
}
