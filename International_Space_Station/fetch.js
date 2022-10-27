//3. make a variable for the url:

let url = 'https://api.wheretheiss.at/v1/satellites/25544'

//4. find the span elements in the javascript (on the HTML page):

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

//5. Use the fetch method call, expect just one argument (url):
//fetch doesn't use callback functions, it returns a promise
//a promise is a javascript object
//- two things may happen:
//  a. will be fulfilled and provide data (do the task it's expected to do)
//- b. OR will be rejected -something went wrong or there was an error.
// **in case there is an error, we need to add a
// "then" chain onto to the fetch function call, will return a response from
// the server

//6. this sets up the page:
//fetch will get the data, and if the works, it will proceed to .then
// (otherwise will error out using catch (below)
// fetch(url).then((res) => {
//     //return the response in JSON
//     //(if you look in devtools, you can look in the network tab to see
//     // what other data is there besides JSON data)
//     //sometimes a large JSON response will take a while.
//     return res.json()
// //    once the data is extracted in a JSON format from the URL
// //    .then (process the json response)
// }).then((issData) => {
//     console.log(issData)
// //    what happens if either the fetch or the then function has an error?
// //    use catch to handle the errors:
// } ).catch((err) => {
//     console.log('ERROR!', err)
// })

//more concise version:
// fetch(url).then(res => res.json() )
// .then((issData) => {
//     console.log(issData)
// }).catch((err) => {
//     console.log('ERROR!', err)
// })

//7. If you open dev tools, you can see if the data is being properly
//fetched, even if it isn't yet applied to our page yet.
fetch(url).then((res) => {
    return res.json() //process response into JSON
}).then((issData) => {
    console.log(issData)
//    this will move data found in devtools onto the page.
    let lat = issData.latitude
    let long = issData.longitude
    //issLat/issLong is the span element on the html page
    // (so we send the above info to our page)
    issLat.innerHTML = lat
    issLong.innerHTML = long
} ).catch((err) => {
    console.log('ERROR!', err)
})
//8. Now go look at the html file on the browser (iss_location.html)
//and check devtools to make sure the data there is showing
//on the page now.

//optional reading on promises:

// https://javascript.info/promise-basics

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises


