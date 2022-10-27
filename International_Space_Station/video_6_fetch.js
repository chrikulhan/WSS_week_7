//video 4-3. make a variable for the url:

let url = 'https://api.wheretheiss.at/v1/satellites/25544'

//4. find the span elements in the javascript (on the HTML page):

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#time')

//video 5-8b:
let update = 10000

//video 5-9a need a variable to represent the ISS marker:
let issMarker

//video 5-10a (download the icon you want and save it in the same place as the other files:)
//video 5-10b: make a variable for the icon (iss_icon.png)
//make a leaflet icon, configure it with iss URL (will be file name)
let icon = L.icon({
    iconUrl: 'iss_icon.png',
    //    size: height and width:
    iconSize: [50, 50],
//        icon anchor: where is the icon marker relative to the place on the map?
//    center of the icon will be where the ISS actually is:
    iconAnchor: [25, 25]
})

//video 5-4 (copy tile layer from last weeks (week 6, leaflet notes, maps.js)
//want to show the whole world, so set at ([0,0],1) (latitude zero, longitude zero, zoom level one)
let map = L.map('iss-map').setView([0,0],1)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

//video 4-5. Use the fetch method call, expect just one argument (url):
//fetch doesn't use callback functions, it returns a promise
//a promise is a javascript object
//- two things may happen:
//  a. will be fulfilled and provide data (do the task it's expected to do)
//- b. OR will be rejected -something went wrong or there was an error.
// **in case there is an error, we need to add a
// "then" chain onto to the fetch function call, will return a response from
// the server

//video4-6. this sets up the page:
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

//video 4-7. If you open dev tools, you can see if the data is being properly
//fetched, even if it isn't yet applied to our page yet.
// fetch(url).then((res) => {
//     return res.json() //process response into JSON
// }).then((issData) => {
//     console.log(issData)
// //    this will move data found in devtools onto the page.
//     let lat = issData.latitude
//     let long = issData.longitude
//     //issLat/issLong is the span element on the html page
//     // (so we send the above info to our page)
//     issLat.innerHTML = lat
//     issLong.innerHTML = long
// } ).catch((err) => {
//     console.log('ERROR!', err)
// })
//video 4-8. Now go look at the html file on the browser (iss_location.html)
//and check devtools to make sure the data there is showing
//on the page now.

//optional reading on promises:

// https://javascript.info/promise-basics
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises


//video 5-7
iss() // call function one time to start (otherwise user will need to wait
// 10 seconds before anything is visible.

//video 5-6 call the iss function using set interval:
//(function, interval) interval = time between checking
// setInterval(iss, 10000) // 10 seconds, not faster because it doesn't move that quickly

//video 5-8a: move update into a variable (from above)
setInterval(iss,update) //defined above the map definition WAY above^^^.


//video 5-5
//take the fetch portion above and put it into a function so it can be run
// every 10 seconds, without re-writing the code:
function iss() {
    fetch(url).then((res) => {
        return res.json() //process response into JSON
    }).then((issData) => {
        console.log(issData)
//    this will move data found in devtools onto the page.
        let lat = issData.latitude
        let long = issData.longitude
        let dateAndTime =
        //issLat/issLong is the span element on the html page
        // (so we send the above info to our page)
        issLat.innerHTML = lat
        issLong.innerHTML = long

    //     //video 5-9b //before creating the specialized marker
    // //    create marker if it doesn't exist (not marker)
    //     if (!issMarker) {
    //         //create marker: (parenthesis describe where it is, array of the lat,long)
    //         issMarker = L.marker([lat,long]).addTo(map)
    //     //    if there is NO issMarker, create one:
    //     } else {
    //         issMarker.setLatLng([lat,long])
    //     }

        //video 5-10c after creating the specialized marker:
        //    create marker if it doesn't exist (not marker)
        if (!issMarker) {
            //create marker: (parenthesis describe where it is, array of the lat,long)
            issMarker = L.marker([lat,long], {icon : icon}).addTo(map)
            //    if there is NO issMarker, create one:
        } else {
            issMarker.setLatLng([lat,long])
        }
    //    move marker if it does exist
        let now = Date()
        timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`
    }).catch((err) => {
        console.log('ERROR!', err)
    })
}

// Your turn
//Make sure your map works and updates every 10 seconds
// Can you add an element to the page that shows the date and time the position was updated?
// Update it from inside the iss() function
//
// Can you display an ISS icon, instead of the default marker?
