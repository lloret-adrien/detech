# Documentation Detech

* **Application web :** https://webinfo.iutmontp.univ-montp2.fr/~lloreta/detech/
* **Participant(s) :** [Adrien Lloret](mailto:adrien.lloret@etu.umontpellier.fr)


Pour lancer le projet en local sur votre ordinateur il vous suffit de récupérer le dossier [ici](https://drive.google.com/drive/folders/1zVPusRM1gxtIxP5ijYjcGr6yRmNpjkdk?usp=sharing) et de le placer à la racine d'un de vos Disque, ouvrez ensuite le fichier index.html sur votre navigateur :smile:



```javascript
alert("Retenez bien ce que vous faîtes");
var reponse = prompt("Choisis un entier au hasard", "");
if( reponse == null ){
    alert("Relancer le programme");
} else {
    let firstNumber = reponse;
    var reponse = prompt("Multiplie par 2 le nombre", "");
    if(firstNumber*2 == reponse) {
      var reponse = prompt("Ajoute 12", "");
      let double = firstNumber*2 + 12;
      if(double == reponse) {
        var reponse = prompt("Divise par 2", "");
        double = double / 2;
        if(double == reponse) {
          var reponse = prompt("Soustrait le nombre choisis au départ", "");
          double -= firstNumber;
          if(double == reponse) {
            alert("Decrypt this with the code : GAIATK LUTIZOUTTGROZK TGK ZKJ KZKIZKXO, RB GL GRRUOXY KI UTZKTZKX JA BOYAKR.");
          }else {
            alert("Il semblerait y avoir une erreur de calcul");
          }
        }
      }
    }
}
```
<details>
    <summary>Fonctions Cesar</summary>

```javascript
//check if letter is uppercase
function isUpperCase(str) {
    return str === str.toUpperCase();
}
//decipher the string
let ceaserCipher = (str, key) => {
  let decipher = '';
  
  //decipher each letter
  for(let i = 0; i < str.length; i++){
    
    //if letter is uppercase then add uppercase letters
    if(isUpperCase(str[i])){
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    }else{
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  return decipher;
}
```
* Pour coder une chaine : console.log(chaine,code);
* Pour decoder une chaine : console.log(chaine,26-code);

</details>


<p>Sinon il suffit de suivre les étapes de commandes ci-dessous : </p>

### Clonage du projet

```
git clone https://github.com/lloret-adrien/detech
```

### Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
