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
