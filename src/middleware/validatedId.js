const postModel = require('../models/posts');

module.exports = function(req,res,next){
  let {id} = req.params; //1
  id = Number(id);  //2
  if(postModel.getPostIndexById(id) === -1){
    return res.sendStatus(404);
  }
  req.params.id = id;  //3.保持类型转换的结果  这三行应该单独写一个 middleware的
  next();
};