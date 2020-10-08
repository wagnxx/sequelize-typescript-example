import { Router } from "express";
import { Movie } from "../models/Movie";
// import ProductModel from "../models/product.model";
import { Team } from "../models/Team";

export const movies = Router();

movies.get("/product", async (req, res, next) => {
  try {
    // let result = await ProductModel.scope(req.query["scope"]).findAll({
    //   logging: true,
    //   raw: true,
    //   nest:true
    // });
    let result = await Team.scope(req.query["scope"]).findAll({
      raw:true,
      // nest:true
    });
    console.log("请求过来了,怎么反应啊 ", result);

    // res.json(await ProductModel.findAll());
    res.json(result);
  } catch (e) {
    next(e);
  }
});

movies.post("/", async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (e) {
    next(e);
  }
});

movies.get("", async (req, res, next) => {
  try {
    res.json(await Movie.scope(req.query["scope"]).findAll());
  } catch (e) {
    next(e);
  }
});

movies.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.scope(req.query["scope"]).findByPk(
      req.params["id"]
    );
    res.json(movie);
  } catch (e) {
    next(e);
  }
});

movies.put("/:id", async (req, res, next) => {
  try {
    await Movie.update<Movie>(req.body, { where: { id: req.params["id"] } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

// ======================================= test =====================================================
