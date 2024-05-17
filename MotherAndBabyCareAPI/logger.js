import pino from "pino";
const dirname = "./logs";
const fileTransport = pino.transport({
  target: "pino/file",
  options: { destination: `${dirname}/app.log` },
});

export default pino({}, fileTransport);
