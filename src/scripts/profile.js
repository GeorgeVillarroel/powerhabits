function doorCloseEventList() {
    const logoutButton = document.getElementsByClassName(`logout`)[0];
    
    logoutButton.addEventListener('mouseenter', () => {
        logoutClose();
    })
    
    logoutButton.addEventListener('mouseleave', () => {
        logoutOpen();
    })

    logoutButton.addEventListener(`click`, () => {
        window.location.href = '../index.html';
    })
}

function logoutClose() {
    document.getElementsByClassName(`logout`)[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-closed-fill logout-button" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>`;
    doorCloseEventList();
}

function logoutOpen() {
    document.getElementsByClassName(`logout`)[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill logout-button" viewBox="0 0 16 16">
    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
    </svg>`;
    doorCloseEventList();
}

doorCloseEventList();