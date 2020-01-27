//Jsonp(JSON with Padding) 是 json 的一种"使用模式"，
// 可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
// 为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？
// 这是因为同源策略。
// 同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。


let count = 1;
export default function originPJSONP(option) {
  //提取url
  const url = option.url;

  //在body中创造script标签
  const body = document.getElementsByTagName('body')[0];
  const script = document.createElement('script');

  //内部产生不重复的callback
  const callback = 'jsonp' + count++;

  //监听window 上的jsonp 调用
  return new Promise(((resolve, reject) => {
    try {
      window[callback] = function (result) {
        body.removeChild(script);
        resolve(result);
      }
      const params = handleParam(option.date);
      script.src = url + "?callback=" + callback + params;
      body.appendChild(script);
    } catch (e) {
      body.removeChild(script);
      reject(e);
    }
  }));
}

function handleParam(data) {
  let url = '';
  for (let key in data) {
    let value = data[key] !== undefined ? data[key] : '';
    url += `&${key}=${encodeURIComponent(value)}`;
  }

  return url;
}
