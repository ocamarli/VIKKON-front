export async function authenticate(data) {
  try {
    const response = await postData("http://127.0.0.1:5000/api/v1/login", data);
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not retrieve user data" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}
export async function setRegister(data, token) {
  try {
    const response = await postData("http://127.0.0.1:5000/api/v1/user", data, token);
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not retrieve user data" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}
export async function setParameters(data, token) {
  try {
    const response = await postData(
      "http://127.0.0.1:5000/api/v1/parameters/set",
      data,
      token
    );
    console.log(data)
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not set parameters" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}
export async function setParametersTemplate(data, token) {
  try {
    const response = await postData(
      "http://127.0.0.1:5000/api/v1/templates/set",
      data,
      token
    );
    console.log(data)
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not set parameters" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}

export async function getParameters(token) {
  try {
    const response = await getData(
      "http://127.0.0.1:5000/api/v1/parameters/get",
      token
    );

    if (response.status === 200) {
      return await response.json();
    } else {
      return {
        parameters: [],
        status: false,
        msg: "Could not retrieve parameters",
      };
    }
  } catch (error) {
    return { parameters: [], status: false, msg: error.message};
  }
}
export async function getTemplates(token) {
  try {
    const response = await getData(
      "http://127.0.0.1:5000/api/v1/templates/get",
      token
    );

    if (response.status === 200) {
      return await response.json();
    } else {
      return {
        parameters: [],
        status: false,
        msg: "Could not retrieve parameters",
      };
    }
  } catch (error) {
    return { parameters: [], status: false, msg: error.message};
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
      Authorization: token !== undefined ? "Bearer " + token : "0",
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
      Authorization: token !== undefined ? "Bearer " + token : "0",
    }),
    body: null,
  });

  return response;
}
