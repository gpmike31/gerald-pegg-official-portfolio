//input function
const profileDataArgs = process.argv.slice(2, process.argv.length);
const userName = profileDataArgs[0];
const githubName = profileDataArgs[1];
const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    Github: ${githubName}
  `;
};
console.log(generatePage('Gerald', 'geraldhub'));

//output function
//const printProfileData = profileDataArr => {
    //This....
    //for (let i = 0; i < profileDataArr.length; i++) {
      //console.log(profileDataArr[i]);
   // }

  //  console.log('================');

    // Is the same as this...
  //  profileDataArr.forEach(profileItem => console.log(profileItem));
//};





