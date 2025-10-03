const express = require("express");
const cors = require("cors");
const limiter = require("../server/Middlewares/rateLimiter");
const employeeRouter = require("./Routes/employee");
const { reqLogger } = require("../server/Middlewares/requestLogger");
const app = express();
const PORT = 3000;
app.use(
  cors({
    origin: "http://localhost:4200", // Allow only your Angular frontend
    // methods: ["GET", "POST", "PATCH", "DELETE"], // Allow these HTTP methods
    // allowedHeaders: ["Content-Type", "Authorization"], // Allow custom headers if needed
  })
);
app.use(express.json());
app.use(limiter);
app.use(reqLogger);
app.use("/", employeeRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});
