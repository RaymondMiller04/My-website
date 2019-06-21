//comments this is a whole function making stuff work
function toggleProjects(){
  var projectList = document.getElementById("projectList");
  if(projectList.style.display == 'none'){
    projectList.style.display = 'block'
    //The display property sets or returns the element's display type.
  }
  else{
    projectList.style.display = 'none'
  }
}
//
function toggleTech(){
  var techList = document.getElementById("techList");
  if(techList.style.display == 'none'){
    techList.style.display = 'block'
  }
  else{
    techList.style.display = 'none'
  }
}
