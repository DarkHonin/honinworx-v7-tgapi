const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res)=>{
	res.json({status : "OK"})
})

module.exports = () => {
	return app.listen(PORT, ()=>{
		console.log("API test server online...");
	})
}
