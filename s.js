const { get } = require('axios').default; //这个插件用于请求数据
const iconv = require('iconv-lite'); //这个插件解决用于中文乱码
const cheerio = require('cheerio'); //cheerio这个插件用来解析HTML内容

get(
  'http://bang.dangdang.com/books/newhotsales/01.00.00.00.00.00-recent7-0-0-1-1',
  {
    responseType: 'arraybuffer'
  }
).then(res => {
  const $ = cheerio.load(iconv.decode(res.data, 'GB2312'));
  var books = [];
  $('.bang_list li').each(function() {
    var book = {};
    book.name = $(this)
      .find('.name a')
      .text()
      .trim();
    book.coverImg = $(this)
      .find('.pic img')
      .attr('src')
      .trim();
    book.price = $(this)
      .find('.price_n')
      .eq(0)
      .text()
      .trim()
      .replace('¥', '');
    book.author = $(this)
      .find('.publisher_info a')
      .eq(0)
      .text()
      .trim();
    book.publishTime = $(this)
      .find('.publisher_info span')
      .text()
      .trim();
    books.push(book); //把这本book添加到books数组中
  });
  console.log(books);
});
