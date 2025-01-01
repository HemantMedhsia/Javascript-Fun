function exampleExecutionContext() {
    console.log("Global Execution Context");
    function inner() {
        console.log("Function Execution Context");
    }
    inner();
}

module.exports = { exampleExecutionContext };