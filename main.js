function login(){
    p1name= document.getElementById("player1").value;
    p2name= document.getElementById("player2").value;
    localStorage.setItem("p1_name", p1name);
    localStorage.setItem("p2_name", p2name);
    window.location="game_page.html";
}
