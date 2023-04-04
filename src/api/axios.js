import { ENV } from "../utils";
export async function authenticate(data) {
  try {
    const response = await postData(ENV.login(), data);
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
    const response = await postData(ENV.setRegister(), data, token);
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not retrieve user data" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}
export async function setFileTemplate(data, token) {
  try {
    const response = await postData(ENV.setFileTemplate(), data, token);
    console.log("data")
    console.log(data)
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not retrieve file data" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}
export async function setParameters(data, token) {
  try {
    const response = await postData(
      ENV.setParameters(),
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
export async function setRecipe(data, token) {
  try {
    const response = await postData(
     ENV.setRecipe(),
      data,
      token
    );
    console.log(data)
    if (response.status === 200) {
      return await response.json();
    } else {
      return { status: false, msg: "Could not set recipe" };
    }
  } catch (error) {
    return { status: false, msg: error.message };
  }
}
export async function setParametersTemplate(data, token) {
  try {
    const response = await postData(
     ENV.setTemplates(),
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
      ENV.getParameters(),
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
export async function getRecipes(token) {
  try {
    const response = await getData(
     ENV.getRecipes(),
      token
    );

    if (response.status === 200) {
      return await response.json();
    } else {
      return {
        recipes: [],
        status: false,
        msg: "Could not retrieve recipes",
      };
    }
  } catch (error) {
    return { recipes: [], status: false, msg: error.message};
  }
}
export async function getParametersTemplate(id_template,token) {
  try {
    const response = await postData(
    ENV.getFullTemplates(),
      {id_template},
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
      ENV.getTemplates(),
      token
    );

    if (response.status === 200) {
      return await response.json();
    } else {
      return {
        templates: [],
        status: false,
        msg: "Could not retrieve templates",
      };
    }
  } catch (error) {
    return { templates: [], status: false, msg: error.message};
  }
}
export async function getFileTemplate(id_template,token) {
  try {
    const response = await postData(
      ENV.getFileTemplate(),
      {id_template},
      token
    );

    if (response.status === 200) {
      return await response.json();
    } else {
      return {
        text:"",
        status: false,
        msg: "Could not retrieve templates",
      };
    }
  } catch (error) {
    return { text: "", status: false, msg: error.message};
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
  console.log(JSON.stringify(data))
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


  });

  return response;
}
