<template>
  <div>
    <h2>promise 125 13:55 - 14:33</h2>
    <p>
      异步编程的解决方案。<br/>
      网络请求不会立即拿到结果，所以把函数也传入，这样请求回来时会自动回调这个函数。<br/>
      开启一个异步任务。<br/>
      回调地狱。<br/>
      promise 用于解决回调地狱 用于优化异步处理<br/>
    </p>

    <h2>promise 1440 1447</h2>
  </div>
</template>

<script>
  //以下是同步过程
  const name = 'why';
  console.log(name);

  const result = 3 + 5;


  //setTimeout
  // setTimeout(()=>{
  //   console.log('hello word')},1000);

  //resolve解决
  //reject拒绝
  //这两个本身也是函数

  new Promise(((resolve, reject) => {
    setTimeout(resolve, 1000);
  })).then(() => {
    console.log('hello world');
    new Promise(((resolve, reject) => {
      setTimeout(resolve, 1000);
    })).then(() => {
      console.log('hello js');
      new Promise(((resolve, reject) => {
        setTimeout(resolve, 1000);
      })).then(() => {
        console.log('hello vue')
      })
    })
  });

  console.log('-----------------------------');

  //什么时候使用？
  //有异步操作时
  new Promise(((resolve, reject) => {
    //这里发送网络请求
    //请求结束后，调用resolve(data)，就会跳到then
    setTimeout(() => resolve('hello world!!!'), 1000);
  })).then((data) => {
    //这里处理请求的结果
    console.log(data);
    console.log(data);
  });

  new Promise(((resolve, reject) => {
    //这里发送网络请求
    //请求结束后，调用resolve(data)，就会跳到then
    setTimeout(() => reject('hello world!!!err'), 1000);
  })).then((data) => {
    //这里处理请求的结果
    console.log(data);
  }).catch(err => {
    //处理失败
    console.log(err);
  });

  new Promise(((resolve, reject) => {
    setTimeout(() => {
      // resolve('H');
      reject('HH');
    }, 1000)
  })).then(data => {
    console.log(data)
  }, err => {
    console.log(err);
  });


  // new Promise((resolve, reject) => {
  //
  //   //模拟异步操作
  //   setTimeout(() => {
  //
  //     //一秒后打印
  //     console.log('hello word');
  //
  //     //再过一秒后打印
  //     setTimeout(()=>{
  //       console.log('hello js');
  //
  //       //再过一秒后打印
  //       setTimeout(()=>{
  //         console.log('hello vue');
  //
  //       },1000);
  //
  //     },1000);
  //
  //   }, 1000);
  //
  // });

  //链式调用
  new Promise(resolve => {
    let data = 'aaa';
    resolve(data);
  }).then(data => {
    console.log(data);
    return new Promise(resolve => {
      resolve(data + '111')
    });
  }).then(data => {
    console.log(data);
    return new Promise(resolve => {
      resolve(data + 'bbb')
    });
  }).then(data => {
    console.log(data);
    return new Promise(resolve => {
      resolve(data + 'bbb')
    });
  }).then(data => {
    console.log(data);
  });

  new Promise(resolve => {
    let data = 'aaa';
    resolve(data);
  }).then(data => {
    console.log(data);
    return Promise.resolve(data + '222');
  }).then(data => {
    console.log(data);
    return Promise.resolve(data + 'ccc');
  }).then(data => {
    console.log(data);
    return Promise.resolve(data + 'ddd');
  }).then(data => {
    console.log(data);
  });

  new Promise(resolve => {
    console.log("简单链式调用");
    resolve('zzz');
  }).then(data => {
    console.log(data);
    return data + 'qqq';
  }).then(data => {
    console.log(data);
    return data + 'qqq';
  }).then(data => {
    console.log(data);
    return data + 'qqq';
  }).then(data => {
    console.log(data);
  });

  new Promise(resolve => {
    console.log("简单链式调用");
    resolve('zzz');
  }).then(data => {
    console.log(data);
    return Promise.reject("err172");
    // return data + 'qqq';
  }).then(data => {
    console.log(data);
    return data + 'qqq';
  }).then(data => {
    console.log(data);
    return data + 'qqq';
  }).then(data => {
    console.log(data);
  }).catch(err=>{
    console.log(err);
  });


  // new Promise(resolve => {
  //   setTimeout(resolve,1000);
  // }).then(()=>{
  //   setTimeout(()=>{
  //     return new Promise()
  //   },1000)
  // })

  export default {
    name: "PromiseLearn"
  }
</script>

<style scoped>

</style>
