"use strict";
//@ts-check
/* globals reset: true */
/* globals savedata: true */
// voit tutkia käsiteltävää dataa suoraan osoitteesta
// https://appro.mit.jyu.fi/cgi-bin/tiea2120/randomize.cgi
// data muuttuu hieman jokaisella latauskerralla

// jos reset == true, ladataan aina uusi data. jos reset == false, käytetään
// localStorageen tallennettua versiota, jossa näkyvät omat lisäykset
// testaa sovellusta molemmilla arvoilla
// localStoragen voi myös itse tyhjentää Storage-välilehden kautta

reset = false;

function start(data) {
	// tästä eteenpäin omaa koodia
        // vinkki: muunna data ensimmäisen viikkotehtävän tyyppiseksi rakenteeksi
        // jolloin saat siitä helpommin ja tehokkaammin käsiteltävää
	console.log(data);
	console.log(data.documentElement);
	console.log(data.documentElement.getElementsByTagName("joukkue"));
        // savedata tallentaa datan selaimen LocalStorageen. Tee tämä aina, kun
        // ohjelmasi on muuttanut dataa. Seuraavalla sivun latauskerralla
        // saat käyttöösi muuttamasi datan
	savedata(data);
}
