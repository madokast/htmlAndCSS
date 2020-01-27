import axios from 'axios';

export function request(config) {
  //通用设置
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  });

  //拦截器
  //拦截请求
  instance.interceptors.request.use(config => {
      //拦截成功请求
      console.log(config);

      //可以修改config

      //显示动画

      return config;
    },
    error => {
      //拦截失败请求
      console.log(error);
    }
  );

  //拦截响应
  instance.interceptors.response.use(res => {
    //可以修改结果等
    return res;
  }, error => {

    return error;
  });


  //发送网络请求
  return instance(config);
}


//-----------------方法二
// export function request(config) {
//   return new Promise(((resolve, reject) => {
//     //创建axios实例
//     const instance = axios.create({
//       baseURL: '',
//       timeout: 5000
//     });
//
//     //发送网络请求
//     instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(e => {
//         reject(e);
//       });
//   }));
// }
