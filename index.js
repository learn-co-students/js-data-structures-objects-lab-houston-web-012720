// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  let newObject = Object.assign({}, driver)
  return destructivelyUpdateDriverWithKeyAndValue(newObject, key, value)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  let newObject = Object.assign({}, driver)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}