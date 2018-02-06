var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
<<<<<<< HEAD

function deleteFromObjectByKey(object, key) {
  var tempObj = Object.assign({}, object);
  delete tempObj[key];
  return tempObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
=======
>>>>>>> 63aa94a3b58a03a319e14807083c502c27965331
