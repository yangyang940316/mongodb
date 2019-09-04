const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/app-1907')
  .then(res => {
    console.log(res);
    console.log('连接成功');
  })
  .catch(err => {
    console.log(err);
  });
//这个添加cat的表功能实现了，先注销下，实现查找之前建的people中的数据
// const Cat = mongoose.model('Cat', { name: String }); //创建一个模型叫cat
// const helloGeffried = new Cat({
//   name: '加菲猫'
// });
// helloGeffried
//   .save()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//这个查询的功能实现了，把它注销掉，以便下边再练习一个添加book的数据
// const people = mongoose.model('person', {
//   name: String,
//   age: Number,
//   skill: String,
//   dec: String
// });
// people
//   .find({})
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//练习一个添加book的数据model
const book = mongoose.model('book', {
  title: String,
  price: Number,
  author: String,
  coverImg: String
});

let b = new book({
  title: '红高粱',
  price: 21,
  author: '莫言',
  coverImg: ''
});

b.save()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
