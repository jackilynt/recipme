// module.exports = {
//     // the helper method 'format_time' will take in a timestamp and return a custom formatted string
//     format_time: (date) => {
//         //'toLocaleTimeString()' method to format the time with custom parameters
//         return date.toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//             hour: "numeric",
//             minute: "numeric",
//         });
//     },
//     //cuts the length of blog content down for front page/index
//     format_summary: (content) => {
//         if (content.length > 300) {
//             return content.substring(0, 300) + "...";
//         } else {
//             return content;
//         }
//     },
// };

// function format_time(date) {
//     if (!date || isNaN(Date.parse(date))) {
//       return ""; // Return an empty string if the input is undefined or not a valid date
//     }
    
//     return date.toLocaleDateString(); // Format the valid date using toLocaleDateString
//   }
  
//   module.exports = { format_time };
  

// module.exports = {
//     // The helper method 'format_time' will take in a timestamp and return a custom formatted string
//     format_time: (date) => {
//       if (!(date instanceof Date)) {
//         return ""; // Return an empty string or handle the error appropriately
//       }
//       // 'toLocaleDateString()' method to format the time with custom parameters
//       return date.toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//       });
//     },
//     // Cuts the length of blog content down for the front page/index
//     format_summary: (content) => {
//       if (content.length > 300) {
//         return content.substring(0, 300) + "...";
//       } else {
//         return content;
//       }
//     },
//   };
  
module.exports = {
  // The helper method 'format_time' will take in a timestamp and return a custom formatted string
  format_time: (date) => {
    if (!(date instanceof Date)) {
      return ""; // Return an empty string or handle the error appropriately
    }
    // 'toLocaleDateString()' method to format the time with custom parameters
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  },
  format_instructions: (instructions) => {
    //console.log(typeof instructions);
    //instructions = instructions.join("<br/>");

    instructions = instructions + "";
    instructions = instructions.replace("2. ", "<br/>2. ")
    instructions = instructions.replace("3. ", "<br/>3. ")
    instructions = instructions.replace("4. ", "<br/>4. ")
    instructions = instructions.replace("5. ", "<br/>5. ")
    instructions = instructions.replace("6. ", "<br/>6. ")
    instructions = instructions.replace("7. ", "<br/>7. ")
    instructions = instructions.replace("8. ", "<br/>8. ")
    instructions = instructions.replace("9. ", "<br/>9. ")
    instructions = instructions.replace("10. ", "<br/>10. ")
    instructions = instructions.replace("11. ", "<br/>11. ")
    instructions = instructions.replace("12. ", "<br/>12. ")
    instructions = instructions.replace("13. ", "<br/>13. ")
    instructions = instructions.replace("14. ", "<br/>14. ")
    instructions = instructions.replace("15. ", "<br/>15. ")
    instructions = instructions.replace("16. ", "<br/>16. ")
    instructions = instructions.replace("17. ", "<br/>17. ")
    instructions = instructions.replace("18. ", "<br/>18. ")
    instructions = instructions.replace("19. ", "<br/>19. ")
    instructions = instructions.replace("20. ", "<br/>20. ")
    instructions = instructions.replace("11. ", "<br/>21. ")
    // TODO: 7-20.

    return instructions;
  },
  // Cuts the length of blog content down for the front page/index
  format_summary: (content) => {
    if (!content) {
      return ""; // Return an empty string or handle the error appropriately
    }
    if (content.length > 300) {
      return content.substring(0, 300) + "...";
    } else {
      return content;
    }
  },
};
