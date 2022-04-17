function addUser() {
    player1_name= document.getElementById("Mathlayer1name_input").value;
    player2_name= document.getElementById("Mathlayer2name_input").value;

    localStorage.setItem("Username1", "Mathlayer2name_input");
    localStorage.setItem("Username2", "Mathlayer2name_input");
    window.location="maths_quiz.html";
    
}