// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// })
// .then(function (response) {
//     return response.json();
// })
// .then(function (object) {
//     console.log(object);
// })
// .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
// });

function submitData(username, useremail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: useremail,
        }) ,
    })
    .then((res) => res.json())
    .then((data) => document.body.append(data.id))
    .catch(function (error) {;
        document.body.append(error);
    });
}
submitData("steve", "steve@gmail.com")