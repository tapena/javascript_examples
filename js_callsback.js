function firstTask() {
  console.log("First first task");
}

function secondTask() {
  console.log("Second Task Complete");
}

function thirdTask() {
  console.log("third task complete");
}

setTimeout(function() {} 2000);
setTimeout(secondTask, 2000);
setTimeout(thirdTask, 2000);