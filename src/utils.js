
const api = {
  baseuri: "http://127.0.0.1:5000/api/v1/",
  endpoints: {
    login: "login",
    user: "user",
    parametersSet:"parameters/set",
    recipeSet:"recipe/set",
    recipesGet:"recipes/get",
    templatesSet:"templates/set",
    parametersGet:"parameters/get",
    fullTemplatesGet:"fulltemplates/get",
    templatesGet:"templates/get",
    registerSet:"register/set",
    fileTemplateSet:"fileTemplate/set",
    fileTemplateGet:"fileTemplate/get",

  },
};

function Encode2Url(obj) {
  var str = [];
  for(var p in obj)
     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
}

export const ENV = {
    login:()=> api.baseuri+api.endpoints.login,
    user:()=> api.baseuri+api.endpoints.user,
    setParameters: () => api.baseuri + api.endpoints.parametersSet,
    setRecipe: () => api.baseuri + api.endpoints.recipeSet,
    getRecipes:()=> api.baseuri+api.endpoints.recipesGet,
    setTemplates:()=> api.baseuri+api.endpoints.templatesSet,
    getParameters:()=>api.baseuri+api.endpoints.parametersGet,
    getFullTemplates:()=>api.baseuri+api.endpoints.fullTemplatesGet,
    getTemplates:()=>api.baseuri+api.endpoints.templatesGet,
    setRegister:()=>api.baseuri+api.endpoints.registerSet,
    setFileTemplate:()=>api.baseuri+api.endpoints.fileTemplateSet,
    getFileTemplate:()=>api.baseuri+api.endpoints.fileTemplateGet,

}; 