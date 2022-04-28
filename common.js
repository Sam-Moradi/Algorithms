async function prompt(questions) {
  const number = questions.length;
  const stdin = process.stdin,
    stdout = process.stdout;
  var counter = number;
  const responce = [];
  const resolvers = [];

  return await deliverResult(
    resolvers,
    questions,
    responce,
    stdin,
    stdout,
    number,
    counter
  );
}
async function deliverResult(
  resolvers,
  questions,
  responce,
  stdin,
  stdout,
  number,
  counter
) {
  process.stdout.cursorTo(0);
  stdin.resume();
  stdout.write(questions[number - counter] + ": ");
  return new Promise(async (res) => {
    resolvers.push(res);
    stdin.once("data", function (data) {
      responce.push(parseInt(data.toString().trim()));
      counter--;
      if (counter === 0) {
        for (let i = resolvers.length - 1; i > -1; i--) {
          resolvers[i](responce);
        }
      } else {
        stdin.resume();
        stdout.write(questions[number - counter] + ": ");
        deliverResult(
          resolvers,
          questions,
          responce,
          stdin,
          stdout,
          number,
          counter
        );
      }
    });
  });
}
module.exports = prompt;
