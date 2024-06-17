function filterProjects() {
    const searchBox = document.getElementById('searchBox');
    const filter = searchBox.value.toLowerCase();
    const projectList = document.getElementById('projectList');
    const projects = projectList.getElementsByTagName('p');

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const txtValue = project.textContent || project.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    }
}
