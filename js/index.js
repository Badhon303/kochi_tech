function activeChange(e) {
  if (document.querySelector("#navbarNav a.active") !== null) {
    document.querySelector("#navbarNav a.active").classList.remove("active")
  }
  e.target.className = "active"
}
