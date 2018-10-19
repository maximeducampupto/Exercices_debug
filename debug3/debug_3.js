/**
 * Created by sstienface on 15/10/2018.
 */

document.getElementById('main').innerHTML = "test";

var boucle = 0;
while(boucle < 5)
{
    boucle += 5;
}


try {
    document.getElementById('divInconnuAuBataillon').innerHTML = "ttttttttttttttttt";
    alert('connue');
} catch (e) {
    console.log(e);
    alert('inconnue');
}


alert("Penser à ne pas oublier...");


alert("certaines choses");





