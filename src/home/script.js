const ageConfirmationDialog = document.getElementById("age-confirmation-dialog");

window.addEventListener("load", () => {
    ageConfirmationDialog.showModal();
    disableScrollbars();
});

function enableScrollbars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

function disableScrollbars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

function redirectUser() {
    window.location.href = "//google.com" ;
}

function closeDialog() {
    ageConfirmationDialog.close();
    enableScrollbars();
}
