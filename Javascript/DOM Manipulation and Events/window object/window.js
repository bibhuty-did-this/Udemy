// `window` METHODS/ OBJECTS/ PROPERTIES

/*
// Alert
window.alert('Hello World');
*/

/*
// Prompt
const input=prompt();
alert(input);
*/

/*
// Confirm
if(confirm('Are you sure ?')){
    console.log('Yes');
}else{
    console.log('No');
}
*/


// Outer height and width
console.log(`Outer height is ${window.outerHeight}`);
console.log(`Outer width is ${window.outerWidth}`);

/*
// Inner height and width
console.log(`Inner height is ${window.innerHeight}`);
*/
console.log(`Inner width is ${window.innerWidth}`);

// Scroll points
console.log(`Scroll point in y-axis is  ${window.scrollY}`);

// Location object
console.log(`Location object with host name ${window.location.host} is `);
console.log(window.location);

// Redirect
/*
window.location.href="http://google.com";
*/

// Reload
/*
window.location.reload();
*/

// History object
/*
window.history.go();
*/

// Navigator object(have to do with actual browser)
console.log(window.navigator);
