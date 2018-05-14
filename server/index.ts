import {createClient, print} from 'redis'

export const doShit = () => {
	const client = createClient({host: "10.211.55.4"})

	client.on("error", function (err) {
		console.log("Error " + err);
	});
	client.set("string key", "string val", print);
	client.hset("hash key", "hashtest 1", "some value", print);
//	client.hset(["hash key", "hashtest 2", "some other value"], print);
	client.hkeys("hash key", function (err, replies) {
		console.log(replies.length + " replies:");
		replies.forEach(function (reply, i) {
			console.log("    " + i + ": " + reply);
		});
		client.quit();
	});
	console.log('Hello')
}