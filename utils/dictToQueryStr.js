function transition(args){
  var queryStr = ''
  var index = 1
  for (var key in args) {
    if(index ==1){
      queryStr += key + '=' + args[key]
    }else if (Object.keys(args).length >= index){
        queryStr += '&'+key + '=' + args[key]
    }
    index +=1
  }
  console.info('queryStr', queryStr)
  return queryStr
}
module.exports = {
  transition: transition
}