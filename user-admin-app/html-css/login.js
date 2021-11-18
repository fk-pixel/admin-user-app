const { login } = require("../api/controllers/user");

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "root" && password === "test") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        console.log("Error occured!")
    }
})

//Test function for login
function login() {
    if(this.username != "" && this.password != ""){
        this.axios.post(`http://localhost:8080/api/user/:id`, {params:{}})
        .then((res) => {
            this.$store.commit("role", res.data);
            this.axios.get(`http://localhost:8080/api/user/:id`,{params:{where:{"role":"admin"}}})
        })
    }
}
login();