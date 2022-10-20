import express from "express"
import fs from "fs/promises"

const router = express.Router();

router.get("/get", async (req, res, next) => {

    try {
      const products = await fs.readFile('https://raw.githubusercontent.com/tomthethird/cocojam/main/server/api/bestsellers.json', {encoding:'utf-8'});
      let data = JSON.parse(products);
      res.status(201).json(data);

    } catch (err) {
        console.log(err)
    }
  });

  export default router;