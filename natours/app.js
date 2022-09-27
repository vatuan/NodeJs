const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoutes");
const courseRouter = require("./routes/courseRoutes");
const tourRouter = require("./routes/tourRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./middleware/errorMiddleware");

const app = express();

// 1) MIDDLE WARE
//  implement morgan middleware when acctualy in development evironment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// this is middle ware to transfrom data to json (for post,... method)
app.use(express.json());

// serving static files
// try http://localhost:3001/template-overview.html in your browser
// all file, image have on public folder can show when type correct path
// example http://localhost:3001/avatar.png (avatar image has already in public folder)
app.use(express.static(`${__dirname}/public`));

// this is my middleware,
app.use((req, res, next) => {
  // console.log("-----Hello from middleware-----");
  next();
});

// this is middleware add requestTime to req, then you can get in req, something like req.requestTime
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use("/api/v1/products", productRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/tours", tourRouter);

// Handing unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error middleware

app.use(globalErrorHandler);

module.exports = app;
