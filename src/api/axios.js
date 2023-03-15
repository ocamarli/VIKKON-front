export async function authenticate(data) {
  const response = await postData("http://127.0.0.1:5000/api/v1/login", data);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Could not retrieve user data");
  }
}

export async function setParameters(data, token){
  const response = await postData("http://127.0.0.1:5000/api/v1/parameters/set", data, token);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Could not set parameters");
  }
}

export async function getParameters(token){
  const response = await getData("http://127.0.0.1:5000/api/v1/parameters/get",token);

  if (response.status === 200) {
    return response;
  } else {
    throw new Error("Could not get parameters");
  }
}

async function postData(url = "", data = {}, token = undefined) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Length": JSON.stringify(data).length,
      "Access-Control-Allow-Origin": "*",
      "Authorization": token !== undefined ? "Bearer " + token : "0"
    }),
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response;
}
async function getData(url = "", token = undefined) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": token !== undefined ? "Bearer " + token : "0"
    }),
    body: null
  });

  return response;
}
