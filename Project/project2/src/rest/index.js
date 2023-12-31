export function getCharacters() {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
  let promise = fetch("/api/characters", myInit);
  return promise.then((response) => {
    return response.json();
  });
}

export function getCharacter(id) {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
  let promise = fetch(`/api/characters/:${id}`, myInit);
  return promise.then((response) => {
    return response.text();
  });
}
