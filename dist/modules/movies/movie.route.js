"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const review_controller_1 = require("../reviews/review.controller");
const router = express_1.default.Router();
router.post("/", movie_controller_1.MovieControllers.createMovie);
router.get("/:slug", movie_controller_1.MovieControllers.getMovieBySlug);
router.get("/", movie_controller_1.MovieControllers.getAllMovies);
router.post("/:slug/review", review_controller_1.ReviewControllers.addReview);
router.get("/:slug/reviews", review_controller_1.ReviewControllers.getAllReviews);
router.get("/:id/single-review", review_controller_1.ReviewControllers.getReviewById);
router.patch("/:slug/review", review_controller_1.ReviewControllers.updateReview);
// router.delete("/:slug/review", ReviewControllers.deleteReview);
exports.MovieRoutes = router;
