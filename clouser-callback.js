// clouser or lexical funciton HOF
// const fun1 = () => {
//   console.log("I am inside fun1");

//   const fun2 = (arg) => {
//     console.log("I am inside fun2, with arguement:", arg);
//   };
//   fun2(true);
// };
// return true

// Call back
// call back hell
// const fun1 = () => {    //1
//   console.log("I am inside fun1");
//   cb((cb2) => { //3
//     console.log("I am inside cb2");
//     cb2(() => {
//       console.log("I am inside cb4");
//     });
//   });
// };
// fun1((cb1) => {
//   console.log("Iam inside cb1");
//   cb1((cb3) => {
//     console.lof("I am inside cb3");
//     cb3((cb5) => {
//       console.log("I am inside cb5");
//     });
//   });
// });

const fun1 = (cb1) => {
  console.log(1);
  cb1((cb3) => {
    console.log(3);
    cb3((cb5) => {
      console.log(5);
      cb5();
    });
  });
};
fun1((cb2) => {
  console.log(2);
  cb2((cb4) => {
    console.log(4);
    cb4(() => {
      console.log(6);
    });
  });
});
