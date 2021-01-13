function toggleSidebar() {
    let sidebarOpened = document.getElementById('sidebar').classList.length > 0 ? true : false;
    if(sidebarOpened)
        document.getElementById('sidebar').classList.remove('open');
    else
        document.getElementById('sidebar').classList.add('open');
}