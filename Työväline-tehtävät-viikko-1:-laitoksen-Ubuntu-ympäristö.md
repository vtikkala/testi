Terve! Tässä kurssin ensimmäisen viikon tehtävät. Ne on parasta tehdä pajassa. Ne myös kannattaa tehdä laitoksen koneilla, omalla koneella joutuu toisinaan soveltamaan. Mutta jos omalla koneella on Ubuntu, pitäisi mennä aika kivuttomasti.

**TÄRKEÄÄ**

Tehtävien suoritus merkitään itse [LapioStats-palveluun](https://lapiostats.heroku.com). Jokaisen opiskelijan tulee luoda itselleen tunnus sivulle käyttäen omaa opiskelijanumeroa. Tämä on tärkeää, sillä kurssin tulokset (arvostelut, yms) merkitään lapiostatsin kautta.

Ohjelma on [avointa lähdekoodia](https://fi.wikipedia.org/wiki/Avoin_l%C3%A4hdekoodi), ja sitä voi katsella ja parantaa [Githubissa](https://github.com/coolnesss/lapio-stats). Ei tarvitse vielä tietää mitä tämä tarkoittaa.

Apua tehtäviin löytyy internetistä. Erityisesti [TKO-älyn fuksiwiki](http://fuksiwiki.tko-aly.fi/Fuksiwiki) ja laitoksen [tietotekniikka-sivut](https://www.cs.helsinki.fi/tietotekniikka/) ovat hyödyllisiä.

Tarkoitus ei ole, että ohjeissa kerrotaan kaikki. Opiskelemme **Tietojenkäsittelytiedettä**, ja siksi
hakukone on todella tärkeä, ei pelkästään tällä, vaan kaikilla laitoksen kursseilla. Ei pidä kuitenkaan
panikoida jos ei löydä haluamaansa asiaa internetistä, pajasta saa apua. Osa tehtävistä on kuitenkin
sen verran yksinkertaisia, että ohjaajan voi olla tosi vaikea antaa niihin vinkkiä ilman että paljastaa
ratkaisun!

**Jos on jotain ohjaajiin liittyvää palautetta tai kommenttia, niin se on erittäin tervetullutta Chang Rajanille tai Joni Salmelle, chra (ät) cs.helsinki.fi tai josalmi (ät) cs.helsinki.fi**

Tehtävät on numeroinnin sijaan nimetty [näin], jolloin niihin voi yksikäsitteisesti viitata ja etsiä selaimen hakutoiminnolla (<kbd>ctrl</kbd> + <kbd>f</kbd>).

# [ubuntu]

Boottaa kone Ubuntuun, jos se on Windowsissa. Tai laita kone päälle jos ei ole.

# [ktunnus]

Aktivoi käyttäjätunnuksesi :)

[http://www.cs.helsinki.fi/tietotekniikka/k-ytt-luvat](http://www.cs.helsinki.fi/tietotekniikka/k-ytt-luvat) ja [fuksiwikin ohjeet](http://fuksiwiki.tko-aly.fi/K%C3%A4ytt%C3%B6lupien_aktivointi).

# [email]

Asenna (jatkossa konffaa) laitoksen (ja yliopiston) sähköpostisi Thunderbirdiin, tai haluamaasi sähköpostiohjelmaan, mutta webmail ei käy.

Ainakin laitoksen posti autokonffautuu Thunderbirdiin (myös kotikoneeseen) kun laitat sähköpostiosoitteeksi tunnus@cs.helsinki.fi. Voit halutessasi myöhemmin vaihtaa osoitteeksi (jonka sähköpostiesi vastaanottajat näkevät) etu.suku@[cs.]helsinki.fi.

Ks. [laitoksen](http://www.cs.helsinki.fi/tietotekniikka/s-hk-posti) ja [fuksiwikin ohjeet](http://fuksiwiki.tko-aly.fi/S%C3%A4hk%C3%B6postitilit). Testaa lähettämällä itsellesi postia.

Myöhemmin tehtävässä [email-ohjaus](#email-ohjaus) ohjataan helsinki.fi -postit cs.helsinki.fi -postilaatikkoon.

> HUOM: Mappi-postin kanssa saattaa joutua hiukan tapella, mutta fuksiwikin ohjeista löytyy mappi-postipalvelimen osoite (ml.mappi.helsinki.fi), ja kertomalla se Thunderbirdille pitäisi toimia. Myös postin lähetys onnistuu, mutta lähetetyn viestin kopiointi Sent-kansioon ei välttämättä.

# [terminal]

Avaa pääte (Dash→kirjoita "Terminal") (tai vaihtoehtoisesti paina <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>T</kbd> ).

> Dash on vasemman yläkulman Ubuntu-logolla varustettu käynnistin. Sen saa esiin myös Windows-näppäimellä.

Komenna `ls -l`.

Hae internetistä [satunnainen lolcat](http://icanhas.cheezburger.com/?random) ja tallenna kuva kotihakemistossasi olevaan Downloads-hakemistoon (johon selain oletuksena tallentaa). Toista `ls -l`. Näkyykö lolcat?

Ei pitäisi näkyä, joskin Downloads-hakemiston aikaleima on muuttunut. Vaihda hakemistoon komennolla `cd Downloads`. Toista `ls -ls`. Joko näkyy?

Avaa myös tiedostoselain kotihakemistoosi (vasemman reunan Home Folder -käynnistin/launcher). Etsi lolcat näkyviin tiedostoselaimella.

*Pääte listaa kotihakemistosi tiedostot komennolla ls; samoin tekee graafinen tiedostoselain (Ubuntussa/Gnomessa Nautilus). Tietojenkäsittelytieteessä hyödylliset työkalut ovat usein komentorivillä, ja se onkin Työväline-kurssin kiinnostavinta asiaa!*

# [mkdir]

Luo kotihakemistoosi työväline-hakemisto, johon voit esim. tallentaa kurssin ohessa syntyviä shell-skriptejä.

Tutoriaali: https://help.ubuntu.com/community/UsingTheTerminal

Päätteessä on taikaa. Ylös/alas <kbd>↑</kbd> / <kbd>↓</kbd> nuolinäppäimet selaavat vanhoja komentoja. Tabulaattori <kbd>Tab ↹</kbd> (<kbd>q</kbd>-kirjaimen vasemmalla) täydentää komentoja ja tiedostonimiä. Ja koska <kbd>ctrl</kbd> + <kbd>c</kbd> ja <kbd>ctrl</kbd> + <kbd>v</kbd> ovat päätteessä erityisiä, copy-paste on <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>c</kbd> sekä <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>v</kbd>.

Kaikista komennoista saa ohjeen komennolla `man komento` tai `help komento`. Man ei oo mikään hupiohje, vaan sisältää kaiken, mitä kyseinen komento osaa tehdä!

Man on manuaalisivujen selain. Se näyttää erikoisia [groff-formatoituja](http://en.wikipedia.org/wiki/Man_page) tekstitiedostoja. Itse selaukseen man käyttää [less](http://en.wikipedia.org/wiki/Less_(Unix))-komentoa, ja näillä onkin samat näppäinkomennot. Tärkeimmät:

| Komento | Selite |
| ------- | ------ |
| <kbd>↓</kbd> / <kbd>↑</kbd> | Selaa alas/ylöspäin |
| <kbd>pagedown</kbd> / <kbd>pageup</kbd> | selaa alas/ylöspäin sivu kerrallaan |
| <kbd><</kbd> <kbd>></kbd> | siirry alkuun/loppuun |
| <kbd>/</kbd> | hae tekstiä (kysyy mitä etsitään) |
| <kbd>n</kbd> | hae seuraava hakutuloks aiemmalla hakusanalla |
| <kbd>h</kbd> | ohje |
| <kbd>q</kbd> | poistu man/less -selaimesta |

# [ssh]

Avaa toinen pääte. Ota tekstipohjainen etäyhteys palvelimelle shell: `ssh shell.cs.helsinki.fi`. Anna kysyttäessä laitoksen salasanasi. Jos teet tehtävää kotikoneeltasi, oikea komento on `ssh <käyttäjätunnus>@shell.cs.helsinki.fi` missä tekstin `<käyttäjätunnus>`tilalla on oma yliopiston käyttäjätunnuksesi. Komenna `ls -l`.

Windowsissa käytetään ohjelmaa [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

*Jatkossa tulee lisää ssh-etäyhteystehtäviä.*

*Laitoksella on kolme opiskelijoiden yleiskäyttöön tarkoitettua etä-ssh-linux-palvelinta: melkki, melkinpaasi ja melkinkari (.cs.helsinki.fi). Periaatteessa shell.cs.helsinki.fi saisi ohjata näistä vähiten ruuhkaiseen, mutta nykyisellään se ohjaa aina melkinpaasiin.*

# [kotihakemistot]

Käytössäsi on kaksi eri kotihakemistoa.

- Helsingin yliopiston (AD) kotihakemisto (mikroluokkien tietokoneilla ja laitoksen palvelimilla) polussa `/home/<käyttäjätunnus>`
- CSFS (CS) kotihakemisto polussa `/cs/home/<käyttäjätunnus>`


Luo Helsingin yliopiston (AD) kotihakemistoon [symbolinen linkki](http://linux.fi/wiki/Symbolinen_linkki) CSFS kotihakemistoon komennolla `ln -s ......... ...`

Tutustu ln-komennon ohjeeseen komentamalla `man ln` ja selvitä kuinka symbolinen linkki luodaan.

# [rdesktop]

Ota etäyhteys laitoksen Windows-etäpalvelimeen (winserver.cs.helsinki.fi).

Laitoksen [ohjesivu](http://www.cs.helsinki.fi/tietotekniikka/windows-et-k-ytt-palvelin).

Ubuntulla esim. seuraava:

`rdesktop -D -g workarea -xp -d TKTL -u tunnus winserver.cs.helsinki.fi`

Kirjaudu sisään laitoksen tunnuksilla. Kirjautuminen saattaa kestää useita minuutteja.

> `man rdesktop` kertoo mitä parametrit tekevät. `-D -g workarea` antaa huijauskokoruututilan, jossa Ubuntu-palkit jäävät näkyviin, koska virallisesta `-f` kokoruututilasta ei pääse pois. Komennolla `less $(which windows)` voit vakoilla, mitä laitoksen windows-komento tekee.

*Windowsissa etäwindows-ohjelma löytyy nimellä "Remote Desktop Connection". OS X:ään saa Microsoftin tarjoaman etäwindowsin, tai hyväksi havaitun ilmaisen CoRDin.*

# [ubuntu-launcher]

Lisää pääte/Terminal Unity-käynnistimeksi (vasemman reunan pikakuvakkeeksi). [Ohjeet](https://help.ubuntu.com/12.04/ubuntu-help/shell-apps-favorites.html).

Lisää satunnaisiin windows-tarpeisiin kätevä etäwindows käynnistimeksi.

Uusissa Ubuntuissa omien käynnistimien tekeminen on [ihanan (tai siis järjettömän) vaikeaa](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles). Laitoksella toimii  suoraan lopussa kerrottu gnome-desktop-item-edit -komento. Huom. luomasi käynnistin menee työpöydälle, josta se pitää vielä lisätä Unity-käynnistimeksi.

**HUOM!** **Älä suorita** laitoksen koneilla mitään komentoa joka alkaa komennolla `sudo`. sudo-komennolla yritetään suorittaa toista komentoa järjestelmänvalvojan oikeuksin. Sinulla ei ole näitä oikeuksia, ja jokaisesta yrityksestä lähtee viesti väärinkäyttöyrityksestä ylläpidolle.

Mainion skaalautuvan Windows-kuvakkeen käynnistintä varten saat täältä: http://www.cs.helsinki.fi/u/skaipiai/windows.svg

# [gedit]

Avaa *gedit*-tekstieditori. Määritä ainakin seuraavat asetukset

- [x] Näytä rivinumerot / Display line numbers
- [x] Korosta nykyinen rivi / Highlight current line
- [x] Korosta vastaava sulku / Highlight matching brackets

Laita myös hyödyllinen sivupaneelin tiedostoselain näkyviin.

Raportoi editoriin päivän fiiliksesi ja tallenna tekstitiedosto tehtävässä [mkdir](#mkdir) luomaasi työväline-hakemistoon nimellä perjantai.

Bonus: Mikä on ohpe-kurssin toivoma Java-koodin sarkainleveys (tab width)?

> Muita tekstieditoreja: [Atom](https://atom.io/) ja [Sublime Text](http://www.sublimetext.com/3). Molemmat tukevat Macejä, Linuxia ja Windowsia.

# [nano]

Mainio tekstipohjainen tekstieditori pieniin muokkauksiin on [nano](http://www.nano-editor.org/). Se löytyy laitoksen tietokoneilta valmiina, ja sen voi käynnistää kirjoittamalla päätteeseen komennon `nano`. Kokeile sitä luomalla tiedosto `Moi.java`, jonka sisältönä on seuraava [hello world](http://www.roesler-ac.de/wolfram/hello.htm) -lokalisointi:

```Java
public class Moi {

    public static void main(String[] args) {

        System.out.println("Moi Kumpula!");

    }

}
```

Komenna `nano Moi.java`. Copy-paste, tallenna ja poistu nanosta: <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>y</kbd>, <kbd>enter</kbd>.

Käännä ja suorita luomasi java-tiedosto: `javac Moi.java`, `java Moi`.

> Nanon komentoja: <kbd>ctrl</kbd> + <kbd>x</kbd> lopettaa (ja kysyy tallennetaanko, jos teit muutoksia tiedostoon). <kbd>ctrl</kbd> + <kbd>o</kbd> tallentaa, muttei poistu nanosta. Lisää komentoja nanon alareunassa.

*Ps. Putty-ssh:lla ja nanolla voit ohjelmoida Javaa kotiwindowsista: avaa kaksi Putty-ssh:ta. Toisessa `nano moi.java`, <kbd>ctrl</kbd> + <kbd>o</kbd> tallentaa. Toisessa `javac moi.java && java moi`. Tosin ohpe-kurssilla tämä tehdään paremmin, käyttämällä [NetBeansia](https://netbeans.org/).*

# [nano-2]

Konffaa nanoon ohjelmoinnissa hyödyllinen autoindent. Tarpeelliset komennot: `man nanorc`, `nano .nanorc`.

# [alias]

Tee seuraavat aliakset (apukomennot). Ks. `help alias` tai internetistä. Esim. Wikipediassa on tästäkin hyvä artikkeli.

- alias manh, joka suorittaa komennon "man --html=chromium-browser" (eli avaa pyydetyn man-sivun Chromium-selaimessa). Mukavampi katsella man-sivuja selaimessa!

   *Bonus: myös seuraava saattaa kiinnostaa: `man -t bash | ps2pdf - bash.pdf`. Tästä ei voi tehdä aliasta, koska muuttuja/parametri "bash" esiintyy muuallakin kuin komentorimpsun lopussa. Sen sijaan voi tehdä shell-skriptin (korvaa "bash"→"$1"), ja pian tehdäänkin!*

- alias ls, joka suorittaa komennon `ls --color=auto`, eli korvaa oletus-ls-komennon komennolla, joka värittää tiedostot/hakemistot niiden tyypin (tiedostopäätteen) mukaan!
- alias o, joka suorittaa komennon `ls -latr`, eli listaa tiedostot...
  * l: pitkässä muodossa,
  * a: myös pisteellä “.” alkavat "piilotetut" tiedostot,
  * t: aikaleiman (muokkausajan) mukaan järjestettynä,
  * r: käänteisessä järjestyksessä, eli uusimmat tiedostot alimmaksi.

> Monet käyttävät o-aliasta lähes aina komennon ls sijaan, koska usein kiinnostaa juuri uusimmat tiedostot. Nimi on “o” historiallisista DOS-syistä; voit tietenkin antaa omankin nimen.

# [alias-2]

Tallenna kaikki aliakset ad-kotihakemistoosi tiedostoon .bash_aliases (huomaa piste alussa). Komento `alias` listaa nykyiset aliakset, niin voit kopioida. Tallennetut aliakset toimivat jatkossa kaikissa päätteissä joita käytät. Joudut kuitenkin määrittämään asetukset erikseen laitoksen ssh palvelimille. **Seuraa tehtävän loppupäässä olevia ohjeita jos `alias` ei toimi.**

Testaa: avaa uusi pääte, komenna `o` (myös värit pitäisi näkyä), `manh nano`.

> .bash_aliases on aivan tavallinen tekstitiedosto. Sen tiedostonimen alussa oleva piste tekee tiedostosta piilotetun useissa normaaleissa käyttötilanteissa. Noin yleensä linuxissa kaikki konfiguraatiotiedostot ovat piste-alkuisia, ja moni niistä sijaitsee kotihakemistossasi. Tiedostoselain eikä `ls` eivät oletuksena näytä piste-alkuisia tiedostoja, mutta parametrilla `-a` ls näyttää: `ls -la`. Myös tiedostoselaimen saa näyttämään "piilotiedostot": View > Show hidden files.

**OBS!** Laitoksen koneilla joudut vielä lisäämään kotihakemistoosi tiedoston .bashrc (huomaa piste) ja sinne seuraavan oletus-ubuntussa valmiiksi olevan rivin (huomaa piste rivin alussa):  
`. ~/.bash_aliases`.  
**Joudut avaamaan uuden terminaalin jotta muutokset tulevat voimaan.**

**OBS2!** Ja jotta toimii myös ssh-yhteyksillä, pitää kotihakemistoon lisätä .bash_aliases ja lisäksi vielä tiedosto .profile (huomaa piste), ja sinne seuraava rivi (huomaa piste rivin alussa):  
`. "$HOME/.bash_aliases"`.  
**Joudut avata uuden etäyhteyden jotta muutokset tulevat voimaan.**

> Lisää tietoa yllä OBS-sivutusta aiheesta (login- ja non-login-shell).
>
> http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html
> http://stefaanlippens.net/bashrc_and_others

# [email-ohjaus]

Sähköpostin ohjausta.

Sinulla on yliopistolla tarjolla n. seuraavat sähköpostiosoitteet:

Kts. <http://fuksiwiki.tko-aly.fi/S%C3%A4hk%C3%B6postitilit>

1. etu.suku@helsinki.fi (alias) → ohjautuu oletuksena Office 365 -sähköpostijärjestelmään.
2. tunnus@mappi.helsinki.fi (uusilla opiskelijoilla ei ole enää mappi-sähköpostilaatikkoa)
3. tunnus@cc.helsinki.fi (uusilla opiskelijoilla ei ole enää cc-tunnuksia)
4. etu.suku@cs.helsinki.fi (alias) → ohjautuu tunnus@cs.helsinki.fi
5. tunnus@cs.helsinki.fi (tktl)

etu.suku -osoitteista on myös versio, jossa alkukirjaimet ovat isoja (Etu.Suku)

Office 365 -postille on www-käyttöliittymä <http://www.helsinki.fi/office365/>, tktl-postille  [webmail.cs.helsinki.fi](https://webmail.cs.helsinki.fi). Molemmat postit myös aiemmin konffattiin Thunderbirdiin.

**Itse tehtävä**: valitse, miten haluat ohjata postisi ja seuraa [ohjeita](http://fuksiwiki.tko-aly.fi/S%C3%A4hk%C3%B6postitilit).

Myös tästä voi olla hyötyä <http://www.cs.helsinki.fi/o365/o365-kirje.html>

**Ja hei! Älä tee uudelleenohjauslooppia :)**

Testaa lähettämällä postia osoitteeseen, jonka ohjasit toiseen osoitteeseen.

# [http]
  Käytetään `wget` komentoa ja ladataan [MOOCin ensimmäinen viikko](http://2016-ohjelmointi.mooc.fi/viikko1/) koneellemme. (Muista `man wget`!)
  Avaa ensin tiedosto haluamallasi tekstieditorilla (nano, gedit). Mitä huomaat? Avaa nyt sivu selaimessa komennolla `firefox <tiedoston nimi>`  (Tiedosto on luultavasti nimeltään index.html). Nyt näyttää paremmalta, mutta jotain on vieläkin hassusti.

  Tämä johtuu siitä, että latasimme ainoastaan sivun HTML-koodin. Kuitenkin olellinen osa nettisivuja on myös Javascript ja CSS, joita emme saaneet ladattua mukaan. Perehdymme näihin syvällisemmin ensi viikolla.


# [ssh-irc]

IRC on todella hyödyllinen työkalu opinnoissasi, sillä sieltä löytää lähes kaikkiin kursseihin apua. Sinne pääsy tehdään helpoksi näillä ohjeilla.

1. Noudata [fuksiwikin ohjeita](http://fuksiwiki.tko-aly.fi/IRC-ohjeet) irkin päälle laittamiseksi ja käy ainakin kääntymässä kanavalla #lapio2016 IRCnetissä. Kanavalla ei tarvitse sanoa mitään.

2. Tee `.bash_aliases` -tiedostoon alias irc, joka ottaa laitokselle (melkki.cs.helsinki.fi) ssh-yhteyden ja ajaa suoraan komennon `screen -dr`. ssh-komento vaatii parametrin `-t`, jotta se suostuu avaamaan screenin "pseudo-tty":lle (ks. man ssh).

# [public_html]

Laita testikotisivu internetiin: http://cs.helsinki.fi/u/tunnus (korvaa tunnus omallasi). Ks. [laitoksen ohjeet](http://www.cs.helsinki.fi/tietotekniikka/kotisivu-laitoksen-palvelimella) (mutta älä noudata niitä).

1. Tee [**cs**-kotihakemistoosi](#kotihakemistot) uusi hakemisto `public_html`.
2. Tee sinne tiedosto `index.html`, jonka sisältö on aluksi `moikka moi` tms.
3. Aseta **cs-kotihakemiston**, *public_html*:n ja *index.html*:n oikeudet niin, että menemällä selaimella osoitteeseen http://cs.helsinki.fi/u/tunnus näet tiedoston index.html sisällön.
4. Oikeuksien asettamiseen: `man chmod`.
5. Periaate: tiedostoille oikeudet `go+r`, hakemistoille `go+x`.
6. Todennäköisesti oikeudet ovat muuten itsestään oikein, mutta cs-kotihakemistolta (~) puuttuu `go+x`.

Oikeuksien säätämiseen ks. [Wikipedia](http://en.wikipedia.org/wiki/Chmod). Tee näin:
- Siirry päätteessä hakemistoon **public_html**, jolloin `ls -la` näyttää kerralla kaikki tiedostot ja hakemistot, joiden oikeuksia pitää muuttaa.
- . (piste) viittaa nykyiseen hakemistoon (public_html) ja .. (pistepiste) yhtä hakemistotasoa "ylöspäin" (kotihakemiston juuri eli ~).

Lopputilanne. Ei (välttämättä) haittaa jos on enemmän oikeuksia kuin alla.

```
tunnus@melkinkari:~/public_html$ ls -la
drwx--x--x  9 tunnus tkol    4096 elo   24 12:38 .
drwx--x--x 52 tunnus tkol    4096 elo   25 21:59 ..
-rw-r--r--  1 tunnus tkol      18 touko 21 18:22 index.html
```

> Kun luot tiedostoja laitoksen koneilla tai ylipäätään Ubuntulla, oikeudet ovat oletuksena `-rw-r--r--`: sinulla on luku- ja kirjoitusoikeus, lisäksi ryhmällä (group) ja muilla (others) on lukuoikeus. Oletusoikeudet voi halutessaan vaihtaa komennolla [umask](http://en.wikipedia.org/wiki/Umask).

# [git]

Git on erittäin hyödyllinen työkalu jota käytetään todella monella laitoksen kurssilla, sekä työelämässä. Lisäksi on olemassa palvelu nimeltä Github, jota myös käytetään hyvin laajasti. Pikakatsaus siihen mitä git ja Github ovat löytyy [täältä](http://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/). Teemme kurkistuksen gitin toimintaan kloonaamalla repositorion. Ylläoleva linkki selventää myös tätä. Kloonaaminen tarkoittaa, että kopioimme jonkin projektin koko sisällön (koodin) omalle koneellemme.

Git löytyy laitoksen koneilta ja kaikista Ubuntu-asennuksista valmiiksi. Kloonaa (muista `man git` tai `git --help`!) haluamasi repositorio koneellesi ja käy vilkaisemassa sen sisältöä. Esimerkkejä Java-repositorioista on [JUnit](https://github.com/junit-team/junit) ja [Google Guava](https://github.com/google/guava).

# [plan]

Luo [ad-kotihakemistoosi](#kotihakemistot) `.plan`-tiedosto (huom. piste) haluamallasi tekstieditorilla tai vaikka komennolla echo, jonka tulostuksen ohjaat tiedostoon [uudelleenohjaus-operaattorilla >](http://en.wikipedia.org/wiki/Redirection_(computing)). Laita tiedostoon MAAILMANVALLOITUSSUUNNITELMASI.

Komenna ssh-palvelimella `cat .plan`, tulostaa (näytölle) tiedoston sisällön. Komenna `chmod a+r .plan` ja `finger tunnus` (korvaa omalla käyttäjätunnuksellasi). Pitäisi näkyä maailmanvalloitussuunnitelmasi.

Voit myös urkkia vieressä istuvien maailmanvalloitussuunnitelmia fingerillä. Kysy käyttäjätunnusta ja koklaa. Tämä toimii vasta kun edellisessä [public_html](#public_html) -tehtävässä on lisätty kotihakemistoon `a+x` -oikeudet.

# [montako-tehtävää]

Laske automatisoidusti (eli komentoriviltä), montako tehtävää tässä html-dokumentissa on.

Tarvittavat työkalut: `curl -L`, [tämän sivun markdown-koodi](https://raw.githubusercontent.com/wiki/HY-TKTL/lapio2016/Ty%C3%B6v%C3%A4line-teht%C3%A4v%C3%A4t-viikko-1%3A-laitoksen-Ubuntu-ymp%C3%A4rist%C3%B6.md), [grep](http://en.wikipedia.org/wiki/Grep), [putki |](http://en.wikipedia.org/wiki/Unix_pipe) ja [wc](http://en.wikipedia.org/wiki/Wc_(Unix)).

Vinkki: kaikki rivin alussa olevat [...] -tekstipätkät merkkaavat yhtä tehtävää.

> PS. ei tarvii vielä osaa, tää oli viikon vika tehtävä!