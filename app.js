const express = require("express")
const app = express()

app.get("/getData", (req, res) => {

	res.json({
	"GitHub" : "TripleYei",
	"Blog": "blogtriple.netlify.app"
	})
})


app.listen(3000, () => console.log("Ejecutando app en el puerto 3000"))