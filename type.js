// 1 to 10 number
// loop
// 1. Recursive Function
// const printTillTen = (i) => {
//   if (i <= 10) {
//     console.log(i);
//     i++;
//     printTillTen(i);
//   }
// };
// printTillTen(1);

// Function to print multiplication table of a single number
// const printTable = (num, i = 1) => {
//   if (i <= 10) {
//     console.log(`${num} x ${i} = ${num * i}`);
//     printTable(num, i + 1);
//   }
// };

// // Function to print tables from 'start' to 'end'
// const printTablesTillTen = (start, end) => {
//   if (start <= end) {
//     printTable(start);
//     console.log("************************************");
//     printTablesTillTen(start + 1, end);
//   }
// };

// // Start from 10 and go till 20
// printTablesTillTen(10, 20);

// const categories = [
//   {
//     name: "Category 1",
//     children: [
//       {
//         name: "Category 1.1.",
//         children: [
//           { name: "Category 1.1.1.", children: null },
//           {
//             name: " Category 1.1.1.",
//             children: [{ name: "Category 1.1.1.1.", children: null }],
//           },
//         ],
//       },
//     ],
//   },

//   { name: "Category 2", children: null },
//   { name: "Category 3", children: [{ name: "Category 3.1", children: null }] },
// ];
// console.log("   ".repeat(0), "hello");

// const printCat = (catData, space = 0) => {
//   for (let cat of catData) {
//     console.log("   ".repeat(space) + cat.name);
//     if (cat.children) {
//       printCat(cat.children, space + 1);
//     }
//   }
// };
// printCat(categories);
