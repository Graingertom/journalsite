const server = require("./server");

const port = process.env.PORT || 3000; // if there is no PORT env variable, 3000 will be used
server.listen(port, () => console.log(`\n Express is running on ${port}`));
console.log(process.env)
