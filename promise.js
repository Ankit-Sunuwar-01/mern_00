// 3 stages of a promis
// Pending
// fullfill(resolve)/Reject
// Settlement

// const promise = new Promise((resolve, reject) => {
//   // Logic
//   //   resolve({
//   //     msg: "I am resolve of Promise",
//   //   });
//   reject("I am reject of promise");
// });

// // console.log(promise.msg);
// promise
//   .then((resolveData) => {
//     console.log(resolveData);
//     console.log(resolveData.msg);
//   })
//   .catch((exception) => {
//     console.log("Error: ");
//     console.log(exception);
//   })
//   // finally optional ho.
//   .finally(() => {
//     console.log("Finally");
//   });

// console.log("I am last line");

// const validation = async (x) => {
//   if (x) {
//     return "I am resolve of validation";
//   } else {
//     throw "I am reject of validation";
//   }
// };

// const login = async (x) => {
//   if (x) {
//     return "I am resolve of login";
//   } else {
//     throw "I am reject of login";
//   }
// };

// const giveAccess = async (x) => {
//   if (x) {
//     return "I am resolve of giveAccess";
//   } else {
//     throw "I am reject of giveAccess";
//   }
// };

// const handelDashboard = async (x) => {
//   if (x) {
//     return "I am resolve of handelDashboard";
//   } else {
//     throw "I am reject of handelDashboard";
//   }
// };

// validation(true)
//   .then((res1) => {
//     console.log(res1);
//     return login(false);
//   })
//   .then((res2) => {
//     console.log(res2);
//     return giveAccess(true);
//   })
//   .then((res3) => {
//     console.log(res3);
//     return handelDashboard(true);
//   })
//   .then((res4) => {
//     console.log(res4);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   })
//   .finally(() => {
//     console.log("I am Finally");
//   });

//
// fun1(true)
//   .then((res1) => {
//     console.log(res1);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });
// fun2(true)
//   .then((res2) => {
//     console.log(res2);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });
// fun3(true)
//   .then((res3) => {
//     console.log(res3);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });

// console.log("I am the first");

//await
const validation = async (x) => {
  if (x) {
    return "I am resolve of validation";
  } else {
    throw "I am reject of validation";
  }
};

const login = async (x) => {
  if (x) {
    return "I am resolve of login";
  } else {
    throw "I am reject of login";
  }
};

const giveAccess = async (x) => {
  if (x) {
    return "I am resolve of giveAccess";
  } else {
    throw "I am reject of giveAccess";
  }
};

const handelDashboard = async (x) => {
  if (x) {
    return "I am resolve of handelDashboard";
  } else {
    throw "I am reject of handelDashboard";
  }
};
const handleAsync = async () => {
  try {
    const validationRes = await validation(true); // this will throw
    const loginRes = await login(true);
    const giveAccessRes = await giveAccess(true);
    const handleDashboardRes = await handelDashboard(true);

    console.log(validationRes);
    console.log(loginRes);
    console.log(giveAccessRes);
    console.log(handleDashboardRes);
  } catch (exception) {
    console.log(exception);
  }
};

handleAsync();

