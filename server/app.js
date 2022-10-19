import express from "express"
import cors from "cors"
import apiRoute from "./api/bestsellers.js"
const PORT = process.env.PORT || 8000;

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", apiRoute)

app.listen(PORT, () => {
    console.log(`Server has started on http://localhost:${PORT}`)
})