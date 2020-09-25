function Word() {
    var testV = 1;
    var pass1 = prompt('Veuillez entrer le mot de passe','');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "vapeisloading100%") {
    window.open('http://over44.byethost7.com/Mes%20sites/Tristan%20et%20Joris/biote.html');
    break ;
    }
    testV+=1;
    var pass1 =
    prompt('Erreur','Mot de passe');
    }
    if (pass1.toLowerCase()!="sesame" & testV ==3)
    history.go(-1);
    return " ";
    }