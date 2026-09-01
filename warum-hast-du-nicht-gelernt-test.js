/* ============================================================
   1. HIER ANPASSEN — deine Selektoren
   ============================================================ */
const SEL_FRAGE = ".card.mt-2 .card-header.f-100.user-select-none"; // Element mit dem Fragetext
const SEL_OPTIONEN = ".table.table-striped.mb-0.f-85 label"; // alle Antwortmöglichkeiten
const SEL_CONTAINER = null; // optional: Container, in dem beides liegt

/* ============================================================
   2. Wissenstext — dein Regeltext, komplett
   ============================================================ */
const REGELTEXT = `

OFFIZIELLES REGELWERK VOLLEYBALL

Regel 1 Spielfläche
1
Die Spielfläche umfasst das Spielfeld und die Freizone. Sie muss rechteckig und symmetrisch sein.
1.1Abb. 1aAbb. 1b
1.1
Abmessungen
Das Spielfeld ist ein Rechteck von 18 m x 9 m und an allen Seiten von einer mindestens 3 m breiten Freizone umgeben.
Der freie Spielraum ist der Raum oberhalb der Spielfläche, der frei von jedem Hindernis ist. Er ist mindestens 7 m hoch, gemessen von der Spielfläche.
FIVB
Abb. 2
1.2
Oberfläche des Spielfeldes
1.2.1
Die Oberfläche des Spielfeldes muss eben, waagerecht und gleichmäßig sein. Sie darf für die Spieler keinerlei Verletzungsgefahr aufweisen. Es ist verboten, auf rauen oder rutschigen Oberflächen zu spielen.
FIVB
1.2.2
In Hallen muss die Spielfläche von heller Farbe sein.
FIVB
1.11.3
1.2.3
Spielfelder im Freien dürfen ein Gefälle von 5 mm je Meter haben. Spielfeldlinien aus harten Materialien sind verboten.
1.3
1.3
Linien auf dem Spielfeld
Abb. 2
1.3.1
Alle Linien sind 5 cm breit. Sie müssen von heller Farbe sein und sich farblich vom Boden und eventuell anderen Linien unterscheiden.
1.2.2
1.3.2
Begrenzungslinien
Zwei Seitenlinien und zwei Grundlinien begrenzen das Spielfeld und gehören zu ihm.
1.1
1.3.3
Mittellinie
Die Achse der Mittellinie teilt das Spielfeld in zwei gleiche Felder von je 9 m x 9 m. Die gesamte Linie wird in voller Breite als zu beiden Spielfeldhälften gehörend betrachtet. Sie erstreckt sich unter dem Netz von der einen Seitenlinie zur anderen.
Abb. 2
1.3.4
Angriffslinie
In jeder Spielfeldhälfte wird im Abstand von 3 m von der Achse der Mittellinie eine Angriffslinie gezogen.
FIVB
1.3.31.4.1Abb. 2
1.4
Zonen und Flächen
Abb. 1bAbb. 2
1.4.1
Vorderzone
Die Vorderzone wird in jeder Spielfeldhälfte begrenzt durch die Achse der Mittellinie und die Angriffslinie, die in voller Breite zu dieser Zone gehört.
Die Vorderzone erstreckt sich seitlich über die Seitenlinien hinaus bis zum Ende der Freizone.
19.3.1.423.3.2.3eAbb. 21.3.31.3.419.3.1.423.3.2.3e1.11.3.2
1.4.2
Aufschlagzone
Die Aufschlagzone ist eine 9 m breite Fläche hinter jeder Grundlinie.
Sie ist seitlich begrenzt durch zwei 15 cm lange Linien, die im Abstand von 20 cm hinter der Grundlinie in Verlängerung der Seitenlinien angebracht sind und zur Aufschlagzone gehören.
In der Tiefe erstreckt sich die Aufschlagzone bis zum Ende der Freizone.
1.3.212Abb. 1b1.1
1.4.3
Wechselzone
Die Wechselzone wird von der Verlängerung beider Angriffslinien bis zum Schreibertisch begrenzt.
1.3.415.10.1Abb. 1b
1.4.4
Libero-Austauschzone
Die Libero-Austauschzone ist der Teil der Freizone auf der Seite der Mannschaftsbänke zwischen den Verlängerungen der Angriffslinie und der Grundlinie.
19.3.2.7Abb. 1b
1.4.5
Aufwärmfläche
FIVB
24.2.5Abb. 1aAbb. 1b
1.5
Temperatur
Die Temperatur darf nicht weniger als 10 °C (50 °F) betragen.
FIVB
1.6
Beleuchtung
Die Lichtstärke darf 300 Lux nicht unterschreiten.
FIVB



Regel 2 Netz und Pfosten
Abb. 3
2.1
Netzhöhe
2.1.1
Senkrecht über der Mittellinie befindet sich ein Netz mit Oberkante in einer Höhe von 2,43 m für Männer und 2,24 m für Frauen.
1.3.32.1.2
2.1.2
Die Höhe wird in der Mitte des Spielfeldes gemessen. Die Netzhöhe über den beiden Seitenlinien muss genau gleich sein und darf die vorgeschriebene Höhe nicht um mehr als 2 cm überschreiten.
2.2 
Beschaffenheit des Netzes
Das Netz ist 1,00 m (± 3 cm) breit und 9,50 bis 10,00 m lang (auf jeder Seite 25 bis 50 cm außerhalb der Seitenbänder). Es besteht aus quadratischen Maschen von schwarzem Material mit 10 cm Seitenlänge.
An seiner Oberkante befindet sich ein waagerechtes, auf 7 cm Breite umgefaltetes und über die ganze Länge zusammengenähtes weißes Band. An beiden Enden ist eine Öffnung, durch die ein Seil gezogen wird, welches das Band an den Pfosten befestigt und seine Oberkante straff hält.
Innerhalb des Bandes verläuft ein flexibles Seil, mit dem das Netz an den Pfosten befestigt wird und seine Oberkante straff hält.
An der Unterkante befindet sich ein anderes waagerechtes, 5 cm breites Band, ähnlich wie das obere, mit einem durchgefädelten Seil. Dieses Seil befestigt das Netz an den Pfosten und hält den unteren Teil des Netzes straff.
FIVB
Abb. 3
2.3
Seitenbänder
Zwei weiße Bänder werden am Netz senkrecht über den Seitenlinien befestigt.
Sie sind 5 cm breit und 1 m lang und gehören zum Netz.
1.3.2Abb. 3
2.4 
Antennen
Eine Antenne ist ein flexibler Stab, 1,80 m lang und 10 mm im Durchmesser, aus Fiberglas oder einem ähnlichen Material.
Eine Antenne wird an der äußeren Kante eines jeden Seitenbandes befestigt. Die Antennen befinden sich auf gegenüberliegenden Seiten des Netzes.
Die oberen 80 cm der Antennen ragen über das Netz hinaus und sind in Abschnitten von je 10 cm in kontrastierenden Farben markiert, vorzugsweise rot und weiß.
Die Antennen werden als zum Netz gehörig betrachtet und begrenzen seitlich den Überquerungssektor.
2.3Abb. 310.1.1Abb. 3Abb. 5aAbb. 5b
2.5
Pfosten
2.5.1
Die Pfosten, die das Netz halten, befinden sich in einem Abstand von 0,50 bis 1,00 m außerhalb der Seitenlinien. Sie sind 2,55 m hoch und vorzugsweise verstellbar.
FIVB
Abb. 3
2.5.2
Die Pfosten müssen abgerundet und glatt sein. Zu ihrer Befestigung am Boden dürfen keine Spannseile verwendet werden. Alle gefährlichen und behindernden Konstruktionen sind zu vermeiden.
2.6
Zusatzausrüstung
Jegliche Zusatzausrüstung wird durch Vorschriften der FIVB festgelegt.


Regel 3 Bälle
3.1
Merkmale
Der Ball muss kugelförmig sein und aus einer weichen Leder- oder Kunstlederhülle bestehen, die eine Blase aus Gummi oder ähnlichem Material enthält.
Der Ball kann einfarbig und hell oder mit einer Kombination von Farben gestaltet sein.
Das Material des Kunstleders und die Farbkombinationen der Bälle, die in internationalen offiziellen Wettbewerben benutzt werden, müssen FIVB-Standards erfüllen.
Der Umfang muss 65 bis 67 cm und das Gewicht 260 bis 280 g betragen.
Der Innendruck beträgt 0,30 bis 0,325 kgcm² (4,26 bis 4,61 psi; 294,3 bis 318,82 mbar bzw. hPa).
3.2
Gleichartigkeit der Bälle
Die während des Wettkampfes verwendeten Bälle müssen dieselben Merkmale bezüglich Umfang, Gewicht, Druck, Fabrikat, Farbe usw. haben.
FIVB
3.1
3.3
Ballholer-System
FIVB



Regel 4 Mannschaften
4.1
Zusammensetzung
4.1.1 
Eine Mannschaft besteht pro Spiel aus höchstens 12 Spielern sowie
- dem Trainerstab: ein Trainer und höchstens zwei Co-Trainer;
- dem medizinischen Personal: ein Physiotherapeut und ein Arzt.
Nur im Spielberichtsbogen eingetragene Teilnehmer dürfen im Normalfall den Wettkampfbereich betreten und am offiziellen Aufwärmen sowie am Spiel teilnehmen.
FIVB
5.25.3Abb. 1a7.2.1
4.1.2
Einer der Spieler ist der Mannschaftskapitän, der im Spielberichtsbogen kenntlich gemacht wird.
5.1
4.1.3
Nur die im Spielberichtsbogen eingetragenen Spieler dürfen das Feld betreten und am Spiel teilnehmen. Sobald der Trainer und der Mannschaftskapitän den Spielberichtsbogen (bzw. die Mannschaftsliste im elektronischen Spielberichtsbogen) unterzeichnet haben, dürfen die eingetragenen Spieler nicht mehr geändert werden.
14.1.15.1.15.2.2
4.2
Plätze für die Mannschaften
4.2.1
Die nicht im Spiel befindlichen Spieler müssen entweder auf ihrer Mannschaftsbank sitzen oder sich auf ihrer Aufwärmfläche aufhalten. Der Trainer und die anderen Mannschaftsmitglieder sitzen auf der Mannschaftsbank, dürfen diese aber vorübergehend verlassen.
Die Mannschaftsbänke befinden sich seitlich neben dem Schreibertisch außerhalb der Freizone.
1.4.55.2.37.3.3Abb. 1aAbb. 1b
4.2.2
Nur den Mannschaftsmitgliedern ist es gestattet, die Spielfläche zu betreten, während des Spiels auf der Mannschaftsbank zu sitzen und am offiziellen Aufwärmen teilzunehmen.
4.1.17.2
4.2.3
Die nicht im Spiel befindlichen Spieler dürfen sich ohne Bälle wie folgt aufwärmen:
4.2.3.1
während des Spiels: auf den Aufwärmflächen;
1.4.5Abb. 1aAbb. 1b
4.2.3.2
während der Auszeiten: in der Freizone hinter ihrem Feld.
1.3.315.4
4.2.4
Während der Satzpausen dürfen die Spieler zum Aufwärmen in ihrer eigenen Freizone Bälle benutzen.
18.1
4.3
Kleidung
Die Kleidung besteht aus Trikot, Hose, Socken (Spielerkleidung) und Sportschuhen.
4.3.1
Farbe und Gestaltung der Trikots, Hosen und Socken müssen für eine Mannschaft einheitlich sein (ausgenommen für die Liberos). Die Spielerkleidung muss sauber sein.
4.119.2
4.3.2
Die Schuhe müssen leicht und geschmeidig, mit Sohlen aus Gummi oder zusammengesetzten Materialien und ohne Absätze sein.
4.3.3
Die Trikots der Spieler müssen von 1 bis 20 nummeriert sein.
FIVB
4.3.3.2
4.3.3.1
Die Nummern befinden sich auf dem Trikot vorne und hinten jeweils in der Mitte. Sie müssen sich farblich und in ihrer Hell-Dunkeltönung deutlich von den Trikots abheben.
4.3.3.2
Die Nummern müssen auf der Brust mindestens 15 cm und auf dem Rücken mindestens 20 cm hoch sein. Der Streifen, aus dem die Nummern bestehen, muss mindestens 2 cm breit sein.
4.3.4
Der Mannschaftskapitän muss auf seinem Trikot unter der Nummer auf der Brust einen Streifen von 8 cm x 2 cm haben.
5.1
4.3.5
Es ist verboten, Spielerkleidung von anderer Farbe als die anderen Spieler (ausgenommen die Liberos) undoder ohne ordnungsgemäße Nummern zu tragen.
19.2
4.4
Veränderung der Kleidung
Der 1. Schiedsrichter kann einem oder mehreren Spielern gestatten:
23
4.4.1
barfuß zu spielen;
4.4.2
durchnässte oder beschädigte Spielerkleidung zwischen den Sätzen oder nach einem Wechsel zu tauschen, vorausgesetzt, dass die neue Spielerkleidung in Farbe, Modell und Nummerierung gleich ist;
4.315.5
4.4.3
bei kühlem Wetter in Trainingsanzügen zu spielen, vorausgesetzt, dass diese bei der gesamten Mannschaft in Farbe und Modell gleich (ausgenommen die Liberos) sowie gemäß Regel 4.3.3 nummeriert sind.
4.1.119.2
4.5
Verbotene Gegenstände
4.5.1
Es ist untersagt, Gegenstände zu tragen, die Verletzungen verursachen oder dem Spieler einen künstlichen Vorteil bringen können.
4.5.2
Die Spieler dürfen auf ihr eigenes Risiko Brillen oder Kontaktlinsen tragen.
4.5.3
Kompressionshilfsmittel dürfen zum Schutz oder zur Unterstützung getragen werden.


Regel 5 Mannschaftsführung
5
Sowohl der Mannschaftskapitän als auch der Trainer sind für das Verhalten und die Disziplin ihrer Mannschaftsmitglieder verantwortlich.
Die Liberos können sowohl Mannschafts- als auch Spielkapitän sein.
20
5.1
Kapitän
5.1.1
VOR DEM SPIEL vertritt der Mannschaftskapitän seine Mannschaft bei der Auslosung und unterschreibt dann den Spielberichtsbogen.
7.127.2.1.1
5.1.2
WÄHREND DES SPIELS fungiert der Mannschaftskapitän als Spielkapitän, wenn er sich auf dem Feld befindet. Ist er nicht auf dem Feld, muss er oder der Trainer einen anderen Spieler auf dem Feld benennen, der die Aufgaben des Spielkapitäns übernimmt. Der Spielkapitän behält seine Zuständigkeiten so lange, bis er gewechselt wird, der Mannschaftskapitän wieder spielt oder der Satz endet.
Nur dem Spielkapitän ist es gestattet, mit den Schiedsrichtern zu sprechen, wenn sich der Ball nicht im Spiel befindet:
15.3.18.2
5.1.2.1
um Erläuterungen über die Anwendung oder Auslegung der Regeln zu erbitten und auch Bitten und Fragen seiner Mannschaftsmitglieder zu übermitteln. Wenn der Spielkapitän mit der Erläuterung des 1. Schiedsrichters nicht einverstanden ist, kann er gegen die Entscheidung protestieren. Er muss dem 1. Schiedsrichter sofort mitteilen, dass er sich das Recht vorbehält, am Ende des Spiels einen offiziellen Protest im Spielberichtsbogen einzutragen;
23.2.4
5.1.2.2
um zu beantragen:
a) die Spielerkleidung ganz oder teilweise wechseln zu dürfen;
b) die Aufstellung der Mannschaften zu überprüfen;
c) den Boden, das Netz, den Ball usw. zu überprüfen;
4.34.4.27.47.61.223
5.1.2.3
um bei Abwesenheit des Trainers (außer die Mannschaft hat einen Co-Trainer, der die Aufgaben des Trainers übernommen hat) Auszeiten und Wechsel zu beantragen.
5.25.315.3.115.4.115.5.2
5.1.3
NACH DEM SPIEL hat der Mannschaftskapitän:
6.3
5.1.3.1
den Schiedsrichtern zu danken und den Spielberichtsbogen zur Bestätigung des Resultats zu unterschreiben;
27.2.3.3
5.1.3.2
die Möglichkeit, falls der 1. Schiedsrichter rechtzeitig darüber in Kenntnis gesetzt wurde, einen offiziellen Protest hinsichtlich der Regelanwendung oder -interpretation zu bestätigen und im Spielberichtsbogen einzutragen.
5.1.2.127.2.3.2
5.2
Trainer
5.2.1
Während des Spiels leitet der Trainer das Spiel seiner Mannschaft von außerhalb des Spielfeldes. Er bestimmt die Startaufstellungen, die Wechselspieler und beantragt Auszeiten. Für diesen Aufgabenbereich ist der 2. Schiedsrichter sein Ansprechpartner.
1.17.3.215.4.115.5.2
5.2.2
VOR DEM SPIEL trägt der Trainer die Namen und Nummern der Spieler in die Mannschaftsliste ein oder überprüft den Eintrag und unterschreibt sie.
4.119.1.227.2.1.1
5.2.3
WÄHREND DES SPIELS hat der Trainer:
5.2.3.1
vor jedem Satz dem 2. Schiedsrichter oder dem Schreiber das ordnungsgemäß ausgefüllte und unterschriebene Aufstellungsblatt zu übergeben; im Fall der Nutzung von Tablets gilt die elektronische Übermittlung der Aufstellung automatisch als offiziell;
7.3.27.47.6
5.2.3.2
auf der Mannschaftsbank am nächsten zum Schreiber zu sitzen – er darf diese aber verlassen;
4.2
5.2.3.3
das Recht, Auszeiten und Wechsel zu beantragen;
15.415.5
5.2.3.4
ebenso wie die anderen Mannschaftsmitglieder das Recht, den auf dem Feld befindlichen Spielern Anweisungen zu erteilen. Dazu darf er innerhalb der Freizone im Bereich vor seiner Mannschaftsbank von der Verlängerung der Angriffslinie bis zur Aufwärmfläche stehen oder sich dort bewegen, wenn sich die Aufwärmfläche in der Ecke des Wettkampfbereichs befindet. Er darf dabei das Spiel nicht beeinträchtigen oder verzögern. Befindet sich die Aufwärmfläche hinter der Mannschaftsbank, darf der Trainer sich von der Verlängerung der Angriffslinie bis zum Ende des Feldes der eigenen Mannschaft bewegen. Er darf dabei die Sicht der Linienrichter nicht behindern.
1.3.41.4.5Abb. 1aAbb. 1bAbb. 2
5.3
Co-Trainer
5.3.1
Ein Co-Trainer sitzt auf der Mannschaftsbank, hat aber nicht das Recht, in das Spiel einzugreifen.
4.2.1
5.3.2
Falls der Trainer seine Mannschaft aus irgendeinem Grund, eingeschlossen Sanktionen, verlassen muss, darf ein Co-Trainer die Aufgaben des Trainers für die Dauer der Abwesenheit übernehmen. Dies gilt nicht, wenn der Trainer das Feld als Spieler betritt. Der Spielkapitän hat den Aufgabenwechsel dem Schiedsrichter anzuzeigen.



Regel 6 Punkt-, Satz- und Spielgewinn
6.1
Punktgewinn
6.1.1
Punkt
Eine Mannschaft erhält einen Punkt:
6.1.1.1
wenn es ihr gelingt, den Ball auf den Boden des gegnerischen Feldes zu spielen;
8.3
6.1.1.2
wenn die gegnerische Mannschaft einen Fehler begeht;
6.1.2
6.1.1.3
wenn die gegnerische Mannschaft eine Bestrafung erhält.
16.2.321.3.1
6.1.2
Fehler
Eine Mannschaft begeht einen Fehler, wenn sie eine nicht regelgerechte Spielaktion ausführt (oder die Regeln auf andere Weise verletzt). Die Schiedsrichter bewerten die Fehler und setzen entsprechend den Regeln die Folgen fest:
6.1.2.1
werden zwei oder mehrere Fehler nacheinander begangen, wird nur der Erste geahndet;
6.1.2.2
werden zwei oder mehrere Fehler von Gegnern gleichzeitig begangen, wird auf DOPPELFEHLER entschieden und der Spielzug wiederholt.
Abb. 11 (23)
6.1.3 
Spielzug und vollendeter Spielzug
Ein SPIELZUG ist die Folge von Spielaktionen vom Moment des Aufschlags bis der Ball aus dem Spiel ist. Ein VOLLENDETER SPIELZUG ist die Folge von Spielaktionen, die mit der Erteilung eines Punktes endet.
Dies beinhaltet:
- das Verhängen einer Bestrafung;
- den Verlust des Aufschlagrechts aufgrund von Zeitüberschreitung beim Aufschlag.
8.18.212.2.2.115.2.315.11.1.319.3.2.119.3.2.921.3.112.4.4
6.1.3.1
Gewinnt die aufschlagende Mannschaft einen Spielzug, erhält sie einen Punkt und schlägt weiter auf.
6.1.3.2
Gewinnt die annehmende Mannschaft einen Spielzug, erhält sie einen Punkt und schlägt danach auf.
6.2
Satzgewinn
Gewinner eines Satzes (ausgenommen des Entscheidungssatzes) ist die Mannschaft, die zuerst 25 Punkte mit einem Vorsprung von mindestens zwei Punkten erzielt. Im Falle des Gleichstandes von 24 : 24 wird das Spiel fortgesetzt, bis ein Vorsprung von zwei Punkten erreicht ist (26:24; 27:25; …).
Abb. 11 (9)6.3.2
6.3
Spielgewinn
Abb. 11 (9)
6.3.1
Gewinner des Spiels ist die Mannschaft, die drei Sätze gewinnt.
6.2
6.3.2
Im Falle eines 2:2-Gleichstandes wird der Entscheidungssatz bis 15 Punkte gespielt, wobei ein Vorsprung von zwei Punkten zu erreichen ist.
7.1
6.4
Nichtantreten und unvollständige Mannschaft
6.4.1
Wenn sich eine Mannschaft trotz Aufforderung weigert zu spielen, wird sie als nicht angetreten erklärt und verliert mit dem Ergebnis 0:3 für das Spiel und 0:25 für jeden Satz.
6.26.3
6.4.2
Eine Mannschaft, die sich ohne triftigen Grund nicht rechtzeitig auf dem Spielfeld einfindet, wird mit dem gleichen Ergebnis wie in Regel 6.4.1 als nicht angetreten erklärt.
6.4.3
Eine für den Satz oder das Spiel für UNVOLLSTÄNDIG erklärte Mannschaft verliert den Satz oder das Spiel. Der gegnerischen Mannschaft werden die zum Satz- bzw. Spielgewinn fehlenden Punkte und Sätze zuerkannt. Die unvollständige Mannschaft behält ihre Punkte und Sätze.



Regel 7 Aufbau des Spiels
7.1
Auslosung
Vor dem Spiel vollzieht der 1. Schiedsrichter eine Auslosung, um über den ersten Aufschlag und die Spielfeldseiten im ersten Satz zu entscheiden.
Für einen Entscheidungssatz wird eine neue Auslosung durchgeführt.
12.1.16.3.2
7.1.1
Die Auslosung findet im Beisein der beiden Mannschaftskapitäne statt.
5.1
7.1.2
Der Gewinner der Auslosung wählt:
ENTWEDER
7.1.2.1
das Recht, den ersten Aufschlag auszuführen oder ihn anzunehmen,
ODER
12.1.1
7.1.2.2
die Spielfeldseite.
Der Verlierer nimmt die verbleibende Auswahl vor.
7.2
Offizielles Aufwärmen
7.2.1 
Vor dem Spiel dürfen sich die Mannschaften gemeinsam sechs Minuten am Netz offiziell aufwärmen, wenn sie vorher ein anderes Spielfeld zur allei­nigen Verfügung hatten; andernfalls erhalten sie zehn Minuten.
FIVB
7.2.2
Wenn einer der Mannschaftskapitäne getrenntes (aufeinanderfolgendes) Aufwärmen beantragt, stehen den Mannschaften gemäß Regel 7.2.1 je drei oder je fünf Minuten zur Verfügung.
7.2.1
7.2.3
Erfolgt das Aufwärmen nacheinander, steht das Netz zuerst derjenigen Mannschaft zur Verfügung, die den ersten Aufschlag hat.
FIVB
7.1.2.17.2.2
7.3
Startaufstellung der Mannschaften
7.3.1
Es müssen immer sechs Spieler einer Mannschaft im Spiel sein.
Die Startaufstellung der Mannschaft gibt die Rotationsfolge der Spieler auf dem Feld an. Diese muss während des Satzes beibehalten werden.
6.4.37.6
7.3.2
Vor Beginn jedes Satzes muss der Trainer die Startaufstellung seiner Mannschaft auf einem Aufstellungsblatt oder, falls verwendet, mittels elektronischem Hilfsmittel festlegen. Dieses ordnungsgemäß ausgefüllte und unterschriebene Blatt ist dem 2. Schiedsrichter oder dem Schreiber zu übergeben oder direkt elektronisch an den Schreiber (eScorer) zu übermitteln.
5.2.3.124.3.127.2.1.2
7.3.3
Die Spieler, die in einem Satz nicht zur Startaufstellung gehören, sind für diesen Satz Wechselspieler (ausgenommen die Liberos).
7.3.215.5
7.3.4
Nach der Übergabe des Aufstellungsblattes an den 2. Schiedsrichter oder Schreiber ist eine Änderung der Aufstellung nur durch einen normalen Wechsel möglich.
15.3.215.5Abb. 11 (5)
7.3.5
Abweichungen zwischen den Positionen der Spieler auf dem Feld und dem Aufstellungsblatt werden wie folgt behandelt:
24.3.1
7.3.5.1
wird eine Abweichung vor Satzbeginn festgestellt, müssen die Positionen der Spieler entsprechend dem Aufstellungsblatt berichtigt werden – es folgt keine Sanktion;
7.3.2
7.3.5.2
befindet sich vor Satzbeginn ein Spieler auf dem Feld, der auf dem Aufstellungsblatt dieses Satzes nicht eingetragen ist, muss dieser Spieler entsprechend dem Aufstellungsblatt ersetzt werden – es folgt keine Sanktion;
7.3.2
7.3.5.3
falls der Trainer jedoch wünscht, dass der/die nicht eingetragene/n Spieler auf dem Feld verbleibt/verbleiben, muss er mittels offiziellem Handzeichen normale Wechsel beantragen, die im Spielberichtsbogen eingetragen werden.
Wird eine Abweichung zwischen der Startaufstellung und dem Aufstellungsblatt erst später festgestellt, muss die betreffende Mannschaft die korrekten Positionen einnehmen. Alle Punkte, die diese Mannschaft seit dem genauen Moment des Fehlers erzielt hat, werden aberkannt. Der Gegner behält seine Punkte und erhält zusätzlich einen Punkt und den Aufschlag.
15.3.2Abb. 11 (5)
7.3.5.4
Wird festgestellt, dass sich ein Spieler auf dem Feld befindet, der nicht in der Mannschaftsliste eingetragen ist, erhält der Gegner einen Punkt und das Aufschlagsrecht und behält alle seine Punkte. Der Mannschaft, die den Fehler begangen hat, werden alle Punkte und/oder Sätze (0:25, falls erforderlich) aberkannt, die sie seit dem Moment erhalten hat, an dem der nicht eingetragene Spieler das Feld betreten hat. Sie muss ein korrigiertes Aufstellungsblatt abgeben und einen neuen, in der Mannschaftsliste eingetragenen Spieler auf die Position des nicht eingetragenen Spielers stellen.
6.1.27.3.2
7.4 
Positionen
In dem Moment, in dem der Aufschlagspieler den Ball schlägt, muss jede Mannschaft in ihrem eigenen Feld aufgestellt sein (ausgenommen der Aufschlagspieler). Die Spieler der annehmenden Mannschaft müssen im Moment des Aufschlags entsprechend der Rotationsfolge aufgestellt sein.

Den Spielern der aufschlagenden Mannschaft steht es jedoch frei, im Moment des Aufschlags eine beliebige Position einzunehmen.
Abb. 47.6.18.112.4
7.4.1
Die Positionen der Spieler werden wie folgt nummeriert:
7.4.1.1
die drei Spieler am Netz sind Vorderspieler und nehmen die Positionen 4 (vorne-links), 3 (vorne-Mitte) und 2 (vorne-rechts) ein;
7.4.1.2
die anderen drei Spieler sind Hinterspieler und besetzen die Positionen 5 (hinten-links), 6 (hinten-Mitte) und 1 (hinten-rechts).
7.4.2
Die Positionen der Spieler untereinander:
7.4.2.1
jeder Hinterspieler muss sich weiter entfernt von der Mittellinie befinden als der entsprechende Vorderspieler;
7.4.2.2
die jeweiligen Vorderspieler und Hinterspieler müssen sich seitlich entsprechend der in der Regel 7.4.1 bestimmten Reihenfolge aufstellen.
7.4.3
Die Positionen der Spieler werden durch die Stellung der den Boden berührenden Füße wie folgt bestimmt und kontrolliert (der letzte Kontakt mit dem Boden bestimmt die Position):
Abb. 4
7.4.3.1
jeder Hinterspieler muss sich auf gleicher Höhe oder zumindest mit einem Teil eines Fußes weiter von der Mittellinie entfernt befinden als der vordere Fuß des jeweiligen Vorderspielers;
1.3.37.4.2.17.4.3
7.4.3.2
jeder rechte oder linke Spieler muss sich auf gleicher Höhe oder zumindest mit einem Teil eines Fußes näher an der rechten bzw. linken Seitenlinie befinden als ein Fuß von jedem anderen Spieler der entsprechenden Reihe.
1.3.27.4.1.17.4.1.27.4.2.27.4.3
7.4.4 
Nach dem Aufschlag dürfen die Spieler beider Mannschaften ihre Positionen verlassen und jeden beliebigen Platz auf ihrem Feld und in der Freizone einnehmen.
7.5
Positionsfehler
Abb. 4Abb. 11 (13)
7.5.1
Eine Mannschaft begeht einen Positionsfehler, wenn ein Spieler im Moment, in dem der Aufschlagspieler den Ball schlägt, sich nicht auf seiner richtigen Position befindet. Wenn sich ein Spieler aufgrund eines unrechtmäßigen Wechsels auf dem Feld befindet und der Spielzug begonnen hat, wird dies als ein Positionsfehler mit den Folgen eines unrechtmäßigen Wechsels gewertet.
7.37.415.9
7.5.2
Wenn der Aufschlagspieler im Moment des Schlagens einen Fehler begeht, gilt dieser in Bezug auf einen Positionsfehler als der zuerst begangene.
12.412.7.1
7.5.3
Wenn der Aufschlag nach dem Schlagen des Balles fehlerhaft wird, ist der Positionsfehler zu ahnden.
12.7.2
7.5.4
Ein Positionsfehler führt zu folgenden Konsequenzen:
7.5.4.1
die Mannschaft wird mit einem Punkt und Aufschlag für den Gegner bestraft;
6.1.3
7.5.4.2
die Positionen der Spieler werden berichtigt.
7.37.4
7.6
Rotation
7.6.1
Die Rotationsfolge wird durch die Startaufstellung der Mannschaft festgelegt und anhand der Aufschlagreihenfolge sowie der Positionen der Spieler während des gesamten Satzes überprüft.
7.3.17.4.112.2
7.6.2
Hat die annehmende Mannschaft das Aufschlagrecht gewonnen, rücken die Spieler um eine Position im Uhrzeigersinn weiter: der Spieler auf der Position 2 zur Position 1 zum Aufschlag, der Spieler auf der Position 1 zur Position 6 usw.
12.2.2.2
7.7
Rotationsfehler
Abb. 11 (13)
7.7.1
Ein Rotationsfehler wird begangen, wenn der AUFSCHLAG nicht entsprechend der Rotationsfolge erfolgt. Er führt zu folgenden Konsequenzen in der Reihenfolge:
7.6.112
7.7.1.1
Der Schreiber unterbricht den Spielzug mit einem akustischen Signal; der Gegner gewinnt einen Punkt und erhält das Aufschlagrecht.
Falls der Rotationsfehler erst nach Beendigung des Spielzuges, der mit dem Rotationsfehler begonnen wurde, festgestellt wird, erhält der Gegner nur einen Punkt, unabhängig vom Ausgang des gespielten Spielzuges.
6.1.3
7.7.1.2
Die Rotationsfolge der fehlerhaften Mannschaft wird berichtigt.
7.6.1
7.7.2
Zusätzlich muss der Schreiber feststellen, zu welchem Zeitpunkt der Fehler begangen wurde.Alle durch die schuldige Mannschaft danach erzielten Punkte werden annulliert. Die Punkte des Gegners bleiben erhalten.
Kann dieser Zeitpunkt nicht ermittelt werden, werden keine Punkte aberkannt. Ein Punkt und Aufschlag für den Gegner ist die einzige Strafe.


Regel 8 Spielsituationen
8.1
Ball im Spiel
Der Ball ist im Spiel von dem Moment an, in dem der vom 1. Schiedsrichter genehmigte Aufschlag ausgeführt ist.
1212.3
8.2
Ball aus dem Spiel
Der Ball ist in dem Moment aus dem Spiel, in dem ein von einem der Schiedsrichter gepfiffener Fehler begangen wird. Liegt kein Fehler vor, ist der Zeitpunkt des Pfiffs maßgebend.
8.3
Ball „in“
Der Ball ist „in“, wenn ein Teil des Balles in irgendeinem Moment während seines Kontakts mit dem Boden das Feld einschließlich der Begrenzungslinien berührt.
Abb. 11 (14)Abb. 12 (1)1.11.3.2
8.4
Ball „aus“
Der Ball ist „aus“, wenn:
8.4.1
sich alle Teile des Balles, die den Boden berühren, vollständig außerhalb der Begrenzungslinien befinden;
1.3.2Abb. 11 (15)Abb. 12 (2)
8.4.2
er einen Gegenstand außerhalb des Feldes, die Decke oder eine außerhalb des Spiels befindliche Person berührt;
Abb. 11 (15)Abb. 12 (4)
8.4.3
er die Antennen, Seile, Pfosten oder das Netz außerhalb der Seitenbänder berührt;
2.3Abb. 3Abb. 5aAbb. 11 (15) Abb. 12 (4)
8.4.4
er die senkrechte Ebene des Netzes entweder teilweise oder vollständig außerhalb des Überquerungssektors durchquert, ausgenommen im Fall der Regel 10.1.2;
Abb. 5aAbb. 5bAbb. 11 (15)Abb. 12 (4)
8.4.5 
er den unteren Sektor vollständig durchquert.



Regel 9 Das Spielen des Balles
9
Jede Mannschaft muss innerhalb der eigenen Spielfläche und des eigenen Spielraumes spielen (ausgenommen Regel 10.1.2). Der Ball darf aber von außerhalb der eigenen Freizone und über die gesamte Länge des Schreibertisches zurückgespielt werden.
Abb. 1b
9.1 
Berührungen pro Mannschaft
Jeder Kontakt eines Spielers mit dem Ball wird als Berührung bezeichnet.
Jede Mannschaft hat das Recht auf höchstens drei Berührungen (zusätzlich zum Block), um den Ball zurückzuspielen. Werden mehr ausgeführt, begeht die Mannschaft den Fehler „VIER BERÜHRUNGEN“.
14.4.1
9.1.1
Aufeinanderfolgende Berührungen
Ein Spieler darf den Ball nicht zweimal direkt nacheinander berühren (ausgenommen Regeln 9.2.3, 14.2 und 14.4.2).
9.2.314.214.4.2
9.1.2
Gleichzeitige Berührungen
Zwei oder drei Spieler dürfen den Ball gleichzeitig berühren.
9.1.2.1
Wenn zwei (drei) Mitspieler den Ball gleichzeitig berühren, so zählt dies als zwei (drei) Berührungen (außer beim Block). Wenn mehrere Spieler versuchen, den Ball zu erreichen, aber nur einer berührt ihn, zählt dies als eine Berührung. Ein Zusammenprall von Spielern stellt keinen Fehler dar.
9.1.2.2
Wenn zwei Gegner den Ball oberhalb des Netzes gleichzeitig berühren und der Ball im Spiel bleibt, hat die Mannschaft, auf deren Seite der Ball fällt, das Recht auf drei weitere Berührungen. Geht ein solcher Ball „aus“, ist dies ein Fehler der Mannschaft auf der gegenüberliegenden Seite.
9.1.2.3 
Führen gleichzeitige Ballberührungen von zwei Gegnern oberhalb des Netzes zu einer länger andauernden Berührung, läuft das Spiel weiter, auch wenn der Kontakt über dem gegnerischen Feld abgeschlossen wird.
9.1.3
Berührung mit Hilfestellung
Innerhalbder Spielfläche darf ein Spieler weder von einem Mitspieler noch durch irgendein Gerät oder einen Gegenstand Unterstützung erhalten, um den Ball zu spielen.
Ist jedoch ein Spieler im Begriff, einen Fehler zu begehen (das Netz zu berühren oder die Mittellinie zu überqueren), darf er von einem Mitspieler daran gehindert oder zurückgehalten werden.
11.3.311.4.4
9.2
Merkmale der Ballberührung
9.2.1
Der Ball darf jeden Körperteil berühren.
9.2.2
Der Ball darf nicht gefangen und/oder geworfen werden. Er darf in jede Richtung zurückprallen.
9.3.3Abb. 11 (16)
9.2.3
Der Ball darf mehrere Körperteile berühren, wenn dies gleichzeitig geschieht.
AUSNAHMEN:
9.2.3.1
beim Blocken sind aufeinanderfolgende Ballberührungen eines oder mehrerer Spieler/s erlaubt, wenn diese innerhalb derselben Aktion geschehen;
14.1.114.2
9.2.3.2
bei der ersten Berührung einer Mannschaft darf der Ball mehrere Körperteile nacheinander berühren, wenn dies innerhalb derselben Aktion erfolgt.
9.114.4
9.3
Fehler beim Spielen des Balles
9.3.1
VIER BERÜHRUNGEN: Eine Mannschaft berührt den Ball viermal, bevor er zurückgespielt wird.
9.1Abb. 11 (18)
9.3.2
BERÜHRUNG MIT HILFESTELLUNG: Ein Spieler bedient sich innerhalb der Spielfläche der Hilfe eines Mitspielers oder eines Gerätes/ Gegenstandes, um den Ball zu spielen.
9.1.3
9.3.3
GEHALTENER BALL: Der Ball wird gefangen und/oder geworfen, er prallt nach der Berührung nicht zurück.
9.2.2Abb. 11 (16)
9.3.4
DOPPELBERÜHRUNG: Ein Spieler berührt den Ball zweimal direkt nacheinander, oder der Ball berührt mehrere Körperteile nacheinander.
9.2.3Abb. 11 (17)



Regel 10 Ball am Netz
10.1
Ball überquert das Netz
10.1.1
Der zum Feld des Gegners gespielte Ball muss innerhalb des Überquerungssektors über das Netz fliegen. Der Überquerungssektor ist der Teil der senkrechten Ebene des Netzes, der begrenzt wird:
2.410.2Abb. 5a
10.1.1.1
unten durch die Oberkante des Netzes;
2.2
10.1.1.2
seitlich durch die Antennen und deren gedachte Verlängerung;
2.4
10.1.1.3
oben durch die Decke.
10.1.2 
Nach der ersten Berührung durch die Mannschaft darf ein Ball, der die Netzebene vollständig oder teilweise im Bereich des Außensektors in die Freizone des Gegners durchquert hat, im Rahmen der drei Berührungen zurückgespielt werden, vorausgesetzt, dass
9.1Abb. 5b
10.1.2.1 
das Feld des Gegners vom Spieler nicht berührt wird (ausgenommen Regel 11.2.2.1);
11.2.2
10.1.2.2 
der Ball beim Zurückspielen die Netzebene wieder vollständig oder teilweise im Bereich des Außensektors auf derselben Seite des Netzes durchquert - wenn nicht, ist er „aus“. Die gegnerische Mannschaft darf diese Aktion nicht behindern.
11.4.4Abb. 5b
10.1.2.3 
der Ball, der nach der zweiten oder dritten Berührung der Mannschaft vollständig oder teilweise im Bereich des Außensektors in die Freizone des Gegners gespielt wird, darf nicht zurückgespielt werden und wird als „aus“ betrachtet, sobald er die Netzebene durchquert.
10.1.3
Der Ball, der unter dem Netz in Richtung gegnerisches Feld fliegt, ist so lange spielbar, bis er den unteren Sektor vollständig durchquert hat.
23.3.2.3fAbb. 5aAbb. 11 (22)
10.2
Ball berührt das Netz
Der Ball darf das Netz beim Überqueren berühren.
10.1.1
10.3
Ball im Netz
10.3.1
Ein ins Netz gespielter Ball darf im Rahmen der drei Berührungen der Mannschaft weitergespielt werden.
9.1
10.3.2
Wenn durch den Ball die Maschen des Netzes beschädigt werden oder das Netz heruntergerissen wird, ist der Spielzug zu annullieren und zu wiederholen.



Regel 11 Spieler am Netz
11.1
Über das Netz reichen
11.1.1
Ein Spieler darf beim Blocken den Ball auf der gegnerischen Seite berühren, vorausgesetzt, dass er das Spiel des Gegners nicht vor dessen Angriffsschlag behindert.
14.114.3
11.1.2 
Nach dem Angriffsschlag darf ein Spieler seine Hände über das Netz führen, wenn der auslösende Ballkontakt im eigenen Spielraum stattgefunden hat und der Ball nicht gefangen oder geworfen wird.
11.2
Eindringen unterhalb des Netzes
11.2.1
Das Eindringen in den gegnerischen Raum unterhalb des Netzes ist erlaubt, wenn dabei das gegnerische Spiel nicht beeinflusst wird.
11.2.2
Eindringen in das gegnerische Feld über die Mittellinie:
1.3.311.2.2.1Abb. 11 (22)
11.2.2.1
Die Berührung des gegnerischen Feldes mit einem Fuß (beiden Füßen) ist gestattet, wenn ein Teil des (der) übertretenden Fußes (Füße) sich auf der Mittellinie oder direkt über ihr befindet (befinden) und diese Aktion das gegnerische Spiel nicht beeinflußt.
1.3.3Abb. 11 (22)
11.2.2.2
Das Berühren des gegnerischen Feldes mit jedem Körperteil oberhalb der Füße ist erlaubt, sofern dadurch das Spiel des Gegners nicht beeinflusst wird.
1.3.311.2.2.1Abb. 11 (22)
11.2.3
Nachdem der Ball aus dem Spiel ist, darf ein Spieler in das gegnerische Feld eindringen.
8.2
11.2.4
Spieler dürfen in die gegnerische Freizone eindringen, vorausgesetzt, dass sie das gegnerische Spiel nicht beeinflussen.
11.3
Kontakt mit dem Netz
11.3.1
Der Kontakt eines Spielers mit dem Netz zwischen den Antennen während der Spielaktion ist ein Fehler.
Die Spielaktion umfasst u. a. Absprung, Ballberührung (oder Versuch) und sichere Landung, bereit für eine neue Aktion.
11.4.423.3.2.3c24.3.2.3Abb. 3
11.3.2
Spieler dürfen Pfosten, Seile oder jeden anderen Gegenstand einschließlich des Netzes selbst außerhalb der Antennen berühren, vorausgesetzt, dass das Spiel dadurch nicht beeinflusst wird (ausgenommen Regel 9.1.3).
Abb. 3
11.3.3
Es ist kein Fehler, wenn der Ball gegen das Netz gespielt wird und es dadurch einen Gegner berührt.
11.4 
Spielerfehler am Netz
11.4.1 
Ein Spieler berührt den Ball oder den Gegner im gegnerischen Raum vor dem gegnerischen Angriffsschlag.
11.1.1Abb. 11 (20)
11.4.2
Ein Spieler dringt in den gegnerischen Raum unterhalb des Netzes ein und beeinflusst das Spiel des Gegners.
11.2.1
11.4.3
Ein Spieler dringt mit seinem Fuß/seinen Füßen vollständig in das gegnerische Feld ein.
11.2.2.2Abb. 11 (22)
11.4.4 
Ein Spieler beeinflusst das Spiel u. a. durch:
- Berührung des Netzes zwischen den Antennen oder der Antenne selbst während seiner Spielaktion;
- Benutzen des Netzes zwischen den Antennen als Hilfestellung oder um Halt zu bekommen;
- Erlangung eines unfairen Vorteils gegenüber dem Gegner durch eine Netzberührung;
- Aktionen, die den Gegner bei dessen erlaubtem Versuch, den Ball zu spielen, behindern;
- Festhalten am Netz.
Ein Spieler, der sich in der Nähe des Balles befindet, während dieser gespielt wird, und der selbst versucht, den Ball zu spielen, wird als an der Spielaktion beteiligt angesehen, auch wenn er den Ball nicht berührt.
Die Berührung des Netzes außerhalb der Antennen wird nicht als Fehler betrachtet (ausgenommen Regel 9.1.3).



Regel 12 Aufschlag
12
Der Aufschlag ist die Handlung, durch die der in der Aufschlagzone befindliche rechte Hinterspieler den Ball ins Spiel bringt.
1.4.28.112.4.1
12.1
Erster Aufschlag im Satz
6.3.27.1
12.1.1
Der erste Aufschlag im ersten Satz und im Entscheidungssatz wird von der Mannschaft ausgeführt, die bei der Auslosung das Recht dazu erlangt hat.
12.1.2
Die anderen Sätze werden durch den Aufschlag derjenigen Mannschaft begonnen, die im vorangegangenen Satz nicht zuerst aufgeschlagen hat.
12.2
Aufschlagreihenfolge
12.2.1
Die Spieler müssen die im Aufstellungsblatt eingetragene Aufschlagreihenfolge einhalten.
7.3.17.3.2
12.2.2
Nach dem ersten Aufschlag in einem Satz wird der nächste Aufschlagspieler wie folgt bestimmt:
12.1
12.2.2.1
wenn die aufschlagende Mannschaft den Spielzug gewinnt, schlägt der Spieler, der zuvor aufgeschlagen hat (bzw. ein für ihn eingewechselter Spieler), erneut auf;
6.1.315.5
12.2.2.2
wenn die annehmende Mannschaft den Spielzug gewinnt, erhält sie das Recht zum Aufschlag und rotiert vor dem Aufschlag um eine Position. Der Spieler, der von der vorne-rechts-Position zur hinten-rechts-Position wechselt, führt den Aufschlag aus.
6.1.37.6.2
12.3 
Genehmigung des Aufschlags
Der 1. Schiedsrichter genehmigt den Aufschlag, nachdem er sich davon überzeugt hat, dass die beiden Mannschaften spielbereit sind und der Aufschlagspieler im Ballbesitz ist.
12Abb. 11 (1)
12.4
Ausführung des Aufschlags
Abb. 11 (10)
12.4.1
Der Ball muss mit einer Hand oder einem beliebigen Teil des Armes geschlagen werden, nachdem er zuvor aus der Hand (den Händen) hochgeworfen oder losgelassen wurde.
12.4.2
Der Ball darf nur einmal hochgeworfen (bzw. losgelassen) werden. Das Auftippen oder das Hin-und Her-Bewegen des Balles in den Händen ist erlaubt.
12.4.3
Im Moment des Schlags oder des Absprungs zu einem Sprungaufschlag darf der Aufschlagspieler weder das Feld (einschließlich der Grundlinie) noch den Boden außerhalb der Aufschlagzone berühren.
Nach dem Schlag darf er außerhalb der Aufschlagzone oder innerhalb des Feldes aufkommen bzw. dorthin treten.
1.4.229.2.1.4Abb. 11 (22)Abb. 12 (4)
12.4.4
Der Aufschlagspieler muss den Ball nach dem Pfiff des 1. Schiedsrichters zum Aufschlag binnen 8 Sekunden schlagen.
12.3Abb. 11 (11)
12.4.5
Ein vor dem Pfiff des Schiedsrichters ausgeführter Aufschlag wird annulliert und wiederholt.
12.3
12.5
Sichtblock
Abb. 6Abb. 11 (12)
12.5.1
Die Spieler der aufschlagenden Mannschaft dürfen dem Gegner die Sicht auf den Aufschlag und auf die Flugbahn des Balles nicht durch einen individuellen oder durch einen Gruppensichtblock verdecken.
12.5.2
12.5.2
Ein Spieler oder eine Gruppe von Spielern der aufschlagenden Mannschaft bilden einen Sichtblock, wenn sie während der Ausführung des Aufschlags die Arme hin und her schwenken, springen, sich seitwärts bewegen oder zusammenstehen, um sowohl den Aufschlag als auch die Flugbahn des Balles zu verdecken, bis der Ball die senkrechte Ebene des Netzes erreicht hat. Sollte eines für die annehmende Mannschaft sichtbar sein, ist es kein Sichtblock.
12.4Abb. 6
12.5.3 
Jedem Spieler der aufschlagenden Mannschaft ist es untersagt, während des Aufschlags seine Hände über den Kopf zu heben, solange der Ball nicht über das Netz geflogen ist.
Der 1. Schiedsrichter darf eine Mannschaft über den Spielkapitän vorwarnen (darauf hinweisen), wenn er davon ausgeht, dass sie gezielt die Sicht verdeckt.
12.6
Fehler beim Aufschlag
12.6.1
Aufschlagfehler
Folgende Fehler führen zu einem Aufschlagwechsel, selbst wenn der Gegner einen Positionsfehler begeht. Der Aufschlagspieler:
12.2.2.212.7.1
12.6.1.1
hält die Aufschlagreihenfolge nicht ein;
12.2
12.6.1.2
führt den Aufschlag nicht korrekt aus.
12.4
12.6.2
Fehler nach dem Schlagen des Balles
Nach dem korrekten Schlagen des Balles wird der Aufschlag als Fehler geahndet (es sei denn, ein Spieler begeht einen Positionsfehler), wenn der Ball:
12.412.7.2
12.6.2.1 
einen Spieler der aufschlagenden Mannschaft berührt oder die senkrechte Ebene des Netzes nicht vollständig innerhalb des Überquerungssektors durchquert;
8.4.48.4.510.1.1Abb. 11 (19)
12.6.2.2
„aus“ geht;
8.4Abb. 11 (15)
12.6.2.3
über einen Sichtblock fliegt.
12.5Abb. 11 (12)
12.7
Aufschlagfehler und Positionsfehler
12.7.1
Begeht der Aufschlagspieler im Moment des Schlagens des Balles einen Fehler (nicht ordnungsgemäße Ausführung, falsche Rotationsfolge usw.) und der Gegner einen Positionsfehler, wird der Aufschlagfehler geahndet.
7.5.17.5.212.6.1
12.7.2
War jedoch die Ausführung des Aufschlags korrekt und der Aufschlagfehler entstand erst danach (der Ball geht „aus“, Sichtblock usw.), wird der Positionsfehler als der zuerst begangene Fehler geahndet.



Regel 13 Angriffsschlag
13.1
Merkmale des Angriffsschlags
1214.1.1
13.1.1
Alle Aktionen, bei denen der Ball in Richtung des Gegners gespielt wird, ausgenommen Aufschlag und Block, gelten als Angriffsschläge.
13.1.2
Bei einem Angriffsschlag sind Lob-Bälle nur dann erlaubt, wenn der Ball sauber gespielt und nicht gefangen oder geworfen wird.
9.2.2
13.1.3
Ein Angriffsschlag gilt in dem Moment als ausgeführt, in dem der Ball die senkrechte Ebene des Netzes vollständig durchquert hat oder von einem Gegner berührt wird.
13.2
Einschränkungen für den Angriffsschlag
13.2.1
Ein Vorderspieler darf einen Angriffsschlag in jeder Höhe ausführen, wenn der Kontakt mit dem Ball in seinem eigenen Spielraum erfolgt (ausgenommen die Regeln 13.2.4 und 13.3.6).
7.4.1.1
13.2.2
Ein Hinterspieler darf einen Angriffsschlag in jeder Höhe ausführen, wenn dieser hinter der Vorderzone erfolgt:
1.4.17.4.1.219.3.1.2Abb. 8
13.2.2.1
beim Absprung darf/dürfen der Fuß/die Füße des Spielers die Angriffslinie weder berührt noch überschritten haben;
1.3.4
13.2.2.2
nach dem Schlag darf der Spieler in der Vorderzone landen.
1.4.1
13.2.3
Ein Hinterspieler darf einen Angriffsschlag auch innerhalb der Vorderzone ausführen, wenn sich im Moment der Ballberührung ein Teil des Balles unterhalb der Netzoberkante befindet.
1.4.17.4.1.2Abb. 8
13.2.4
Kein Spieler darf direkt nach dem Aufschlag des Gegners einen Angriffsschlag ausführen, wenn sich der Ball dabei in der Vorderzone und vollständig oberhalb der Netzoberkante befindet.
1.4.1
13.3
Fehler beim Angriffsschlag
13.3.1
Ein Spieler schlägt den Ball im Spielraum der gegnerischen Mannschaft.
13.2.1Abb. 11 (20)
13.3.2
Ein Spieler schlägt den Ball „aus“.
8.4Abb. 11 (15)
13.3.3
Ein Hinterspieler führt einen Angriffsschlag innerhalb der Vorderzone aus, wobei sich der Ball beim Schlag vollständig oberhalb der Netzoberkante befindet.
1.4.17.4.1.213.2.3Abb. 11 (21)
13.3.4
Ein Spieler führt einen Angriffsschlag direkt nach dem Aufschlag des Gegners aus, wobei sich der Ball in der Vorderzone und vollständig oberhalb der Netzoberkante befindet.
1.4.113.2.4Abb. 11 (21)
13.3.5
Ein Libero führt einen Angriffsschlag aus, wobei sich beim Schlag der Ball vollständig oberhalb der Netzoberkante befindet.
19.3.1.223.3.2.3dAbb. 11 (21)
13.3.6
Ein Spieler führt nach einem oberen Fingerzuspiel des in der eigenen Vorderzone befindlichen Liberos einen Angriffsschlag aus, wobei sich beim Schlag der Ball vollständig oberhalb der Netzoberkante befindet.



Regel 14 Block
14.1
Blocken
14.1.1
Das Blocken ist eine Aktion von in der Nähe des Netzes befindlichen und über die Netzoberkante reichenden Spielern, um den vom Gegner kommenden Ball abzuwehren, unabhängig von der Höhe des Ballkontakts. Nur Vorderspieler dürfen einen Block ausführen, aber im Moment des Ballkontakts muss sich ein Teil des Körpers oberhalb der Netzoberkante befinden.
7.4.1.1
14.1.2
Blockversuch
Ein Blockversuch ist eine Blockaktion ohne Ballberührung.
14.1.3
Ausgeführter Block
Ein Block ist ausgeführt, wenn der Ball von einem Blockspieler berührt wird.
Abb. 7
14.1.4
Gruppenblock
Ein Gruppenblock wird von zwei oder drei nahe beieinander befindlichen Spielern vollzogen und ist ausgeführt, wenn einer von ihnen den Ball berührt.
14.2
Blockberührung
Aufeinander folgende Ballkontakte (schnell und nacheinander) dürfen von einem oder mehreren am Block beteiligten Spieler/n erfolgen, wenn diese Berührungen innerhalb einer Aktion stattfinden.
9.1.19.2.3
14.3
Blocken im gegnerischen Raum
Beim Blocken darf der Spieler seine Arme und Hände über das Netz führen, wenn diese Aktion das Spiel des Gegners nicht behindert. Deshalb ist es nicht erlaubt, den Ball jenseits des Netzes zu berühren, bevor der Gegner einen Angriffsschlag vollzogen hat.
Abb. 11 (20)13.1.1
14.4
Block und Anzahl der Berührungen einer Mannschaft
14.4.1
Eine Blockberührung wird nicht als Berührung für die Mannschaft angerechnet. Folglich hat die Mannschaft nach einer Blockberührung Anspruch auf drei Berührungen, um den Ball zurückzuspielen.
9.114.4.2
14.4.2
Die erste Berührung nach dem Block darf durch jeden Spieler erfolgen, einschließlich desjenigen, der den Ball während des Blocks berührt hat.
14.4.1
14.5
Blocken des Aufschlags
Der Aufschlag des Gegners darf nicht geblockt werden.
12Abb. 11 (12)
14.6
Fehler beim Blocken
Abb. 11 (20)
14.6.1
Der Blockspieler berührt den Ball im gegnerischen Raum vor dem Angriffsschlag des Gegners.
14.3
14.6.2
Ein Hinterspieler oder ein Libero führt einen Block aus oder ist an einem ausgeführten Block beteiligt.
14.114.519.3.1.3
14.6.3
Der gegnerische Aufschlag wird geblockt.
14.5Abb. 11 (12)
14.6.4
Der Ball wird vom Block „aus“ gespielt.
8.4
14.6.5
Der Ball wird im gegnerischen Raum außerhalb der Antenne geblockt.
14.6.6
Ein Libero unternimmt einen Blockversuch oder ist an einem solchen beteiligt.



Regel 15 Unterbrechungen
15
Eine Unterbrechung ist die Zeit zwischen einem vollendeten Spielzug und dem Pfiff des 1. Schiedsrichters zum nächsten Aufschlag.
Die einzigen regulären Spielunterbrechungen sind AUSZEITEN und WECHSEL.
6.1.38.18.215.415.524.2.6
15.1
Anzahl der regulären Spielunterbrechungen
Jede Mannschaft darf in jedem Satz höchstens zwei Auszeiten und sechs Wechsel beantragen.
6.215.415.5
15.2
Reihenfolge der regulären Spielunterbrechungen
15.2.1
Jede Mannschaft darf während derselben Unterbrechung Anträge auf eine oder zwei Auszeiten und einen Wechsel nacheinander stellen.
15.415.5
15.2.2
Eine Mannschaft darf während derselben Unterbrechung jedoch keine aufeinanderfolgenden Anträge auf Wechsel stellen. Im Rahmen eines Antrages können zwei oder mehr Spieler gleichzeitig gewechselt werden.
15.515.6.1
15.2.3
Zwischen zwei Anträgen auf Wechsel durch dieselbe Mannschaft muss ein vollendeter Spielzug liegen (Ausnahme: ein durch Verletzung oder Hinausstellung/Disqualifikation erzwungener Wechsel (15.5.2, 15.7, 15.8)).
6.1.315.5
15.2.4 
Es ist nicht erlaubt, innerhalb derselben Spielunterbrechung nach einem Antrag, der zurückgewiesen und mit einer Verwarnung wegen Verzögerung geahndet wurde, eine reguläre Spielunterbrechung zu beantragen (das heißt vor dem Ende des nächsten vollendeten Spielzuges).
16.1.2
15.3
Anträge auf reguläre Spielunterbrechungen
15.3.1
Reguläre Spielunterbrechungen dürfen ausschließlich vom Trainer (bzw. in dessen Abwesenheit vom Co-Trainer oder vom Spielkapitän) beantragt werden.
5.1.2.35.2.3.35.3.215
15.3.2
Ein Wechsel vor Satzbeginn ist möglich und wird als Wechsel in diesem Satz protokolliert.
7.3.4
15.4
Auszeiten
15.4.1
Anträge auf Auszeiten werden durch Zeigen des entsprechenden Handzeichens gestellt, wenn der Ball aus dem Spiel ist und bevor der Pfiff zum Aufschlag erfolgt ist. Alle beantragten Auszeiten dauern 30 Sekunden.
FIVB
6.1.38.212.3Abb. 11 (4)
15.4.2
Während der Auszeiten müssen sich die im Spiel befindlichen Spieler in die Freizone nahe ihrer Mannschaftsbank begeben.
Abb. 1a
15.5
Wechsel
15.5.1
Der Wechsel ist die Handlung, bei der ein Spieler (ausgenommen der Libero oder dessen Austauschspieler), nachdem er vom Schreiber im Spielberichtsbogen eingetragen wurde, ins Spiel kommt und die Position eines anderen Spielers einnimmt, der seinerseits das Feld verlassen muss.
19.3.2.1Abb. 11 (5)
15.5.2
Wenn der Wechsel durch eine Verletzung eines im Spiel befindlichen Spielers notwendig geworden ist, darf er vollzogen werden, indem der Trainer (bzw. der Spielkapitän) das entsprechende Handzeichen ausführt.
5.1.2.35.2.3.36.1.38.212.3Abb. 11 (5)
15.6
Wechselbeschränkung
15.6.1
Ein Spieler der Startaufstellung kann das Spiel nur einmal pro Satz verlassen und wieder eingewechselt werden, letzteres nur auf seine ursprüngliche Position in der Rotationsfolge.
7.3.1
15.6.2
Ein Wechselspieler darf in einem Satz nur einmal für einen Spieler der Startaufstellung eingewechselt werden, und er kann nur gegen diesen wieder ausgewechselt werden.
7.3.1
15.7
Ausnahmsweiser Wechsel
Ein Spieler (außer der Libero), der wegen Verletzung/Krankheit oder Hinausstellung/Disqualifikation das Spiel nicht fortsetzen kann, muss normal gewechselt werden. Ist dies nicht möglich, darf die Mannschaft ihn AUSNAHMSWEISE, über die Beschränkungen von Regel 15.6 hinaus, wechseln.
Ein ausnahmsweiser Wechsel bedeutet, dass jeder Spieler, der sich im Moment der Verletzung/Krankheit/Hinausstellung/Disqualifikation nicht auf dem Feld befindet (ausgenommen der Libero, der zweite Libero oder deren Austauschspieler), für den verletzten/kranken/hinausgestellten/disqualifizierten Spieler ins Spiel kommen darf. Der ausnahmsweise gewechselte verletzte/kranke/hinausgestellte Spieler darf nicht ins Spiel zurückkehren.
Ein ausnahmsweiser Wechsel wird in keinem Fall als normaler Wechsel gezählt. Er wird aber im Spielberichtsbogen vermerkt und im Ergebnisfeld in der Summe der Wechsel des betreffenden Satzes und des Spiels mitgezählt.
15.619.4.321.3.221.3.3Abb. 11 (5)
15.8
Wechsel bei Hinausstellung oder Disqualifikation
Ein HINAUSGESTELLTER oder DISQUALIFIZIERTER Spieler muss sofort normal gewechselt werden. Ist dies nicht möglich, hat die Mannschaft das Recht auf einen ausnahmsweisen Wechsel. Falls auch dies nicht möglich ist, wird die Mannschaft für UNVOLLSTÄNDIG erklärt.
6.4.37.3.115.615.721.3.221.3.3Abb. 11 (5)
15.9
Unrechtmäßiger Wechsel
15.9.1
Ein Wechsel ist unrechtmäßig, wenn er die Einschränkungen von Regel 15.6 überschreitet (ausgenommen der Fall von Regel 15.7) oder wenn ein nicht im Spielberichtsbogen eingetragener Spieler daran teilnimmt.
15.9.2
Wenn eine Mannschaft einen unrechtmäßigen Wechsel ausgeführt hat und das Spiel fortgeführt wurde, muss wie folgt verfahren werden:
8.115.6
15.9.2.1
die Mannschaft wird mit einem Punkt und Aufschlag für den Gegner bestraft;
6.1.3
15.9.2.2
der Wechsel wird rückgängig gemacht;
15.9.2.3
die von der Mannschaft seit dem unrechtmäßigen Wechsel erzielten Punkte werden gestrichen. Die Punkte der gegnerischen Mannschaft bleiben erhalten.
15.10
Durchführung des Wechsels
15.10.1
Ein Wechsel muss in der Wechselzone stattfinden.
1.4.3Abb. 1b
15.10.2
Ein Wechsel soll nur so lange dauern, wie für das Eintragen in den Spielberichtsbogen und den Wechselvorgang selbst benötigt wird.
15.1024.2.627.2.2.3
15.10.3.1
Der eigentliche Antrag auf Wechsel ist das Betreten der Wechselzone durch den/die spielbereiten Wechselspieler während einer Unterbrechung. Der Trainer braucht kein entsprechendes Handzeichen zu machen, es sei denn, es handelt sich um einen Wechsel infolge einer Verletzung oder vor Satzbeginn.
15.10.3.2
Ist der Wechselspieler im Moment des Antrages auf Wechsel nicht spielbereit, wird der Wechsel zurückgewiesen, und die Mannschaft erhält eine Sanktion wegen Verzögerung.
16.2Abb. 9
15.10.3.3
Der Antrag auf Wechsel wird vom Schreiber oder vom 2. Schiedsrichter angenommen und durch die Benutzung eines Summers oder einer Pfeife angezeigt. Der 2. Schiedsrichter genehmigt den Wechsel.
FIVB
24.2.6
15.10.4
Beabsichtigt eine Mannschaft, gleichzeitig mehr als einen Wechsel durchzuführen, müssen alle Wechselspieler zur selben Zeit die Wechselzone betreten, um zum selben Antrag zu gehören. Die Wechsel werden dann nacheinander – ein Paar nach dem anderen – durchgeführt. Ist einer dieser Wechsel unrechtmäßig, so werden die rechtmäßigen Wechsel genehmigt und der unrechtmäßige Wechsel mit einer Sanktion wegen Verzögerung zurückgewiesen.
1.4.315.2.2
15.11
Unberechtigte Anträge
15.11.1
Jeder Antrag auf reguläre Spielunterbrechungen ist unberechtigt:
15
15.11.1.1
während eines Spielzuges, im Moment des Pfiffs zum Aufschlag oder nach diesem;
12.3
15.11.1.2
durch ein nicht berechtigtes Mannschaftsmitglied;
5.1.2.35.2.3.3
15.11.1.3
für einen zweiten Wechsel derselben Mannschaft während derselben Unterbrechung (das heißt vor dem Ende des nächsten vollendeten Spielzuges), außer im Falle der Verletzung/Krankheit/Hinausstellung/Disqualifikation eines im Spiel befindlichen Spielers;
15.2.215.2.315.816.127.2.2.6
15.11.1.4
wenn die erlaubte Anzahl der jeweiligen Spielunterbrechungen überschritten wird.
15.1
15.11.2
Der erste unberechtigte Antrag wird ohne weitere Folgen zurückgewiesen, wenn er zu keiner Spielverzögerung führt. Er ist jedoch im Spielberichtsbogen ohne weitere Konsequenzen zu vermerken.
16.127.2.2.6
15.11.3
Jeder weitere unberechtigte Antrag durch dieselbe Mannschaft stellt eine Spielverzögerung dar.



Regel 16 Spielverzögerungen
16.1
Arten von Verzögerungen
Eine unberechtigte Handlung einer Mannschaft, die davon abhält, das Spiel wieder aufzunehmen, ist eine Verzögerung. Dazu gehört u. a.:
16.1.1
die Verzögerung einer regulären Spielunterbrechung;
15.10.2
16.1.2
die Verlängerung von Unterbrechungen nach der Aufforderung, das Spiel fortzusetzen;
15
16.1.3
die Beantragung eines unrechtmäßigen Wechsels;
15.9
16.1.4
die Wiederholung eines unberechtigten Antrages;
15.11.3
16.1.5
die Verzögerung des Spiels durch ein Mannschaftsmitglied.
16.2
Sanktionen wegen Verzögerungen
Abb. 9
16.2.1
„Verwarnung wegen Verzögerung“ oder „Bestrafung wegen Verzögerung“ sind Mannschaftssanktionen.
16.2.1.1
Alle Sanktionen wegen Verzögerung sind über das ganze Spiel wirksam.
6.3
16.2.1.2
Alle Sanktionen wegen Verzögerung werden im Spielberichtsbogen eingetragen.
27.2.2.6
16.2.2
Die erste Verzögerung durch ein Mannschaftsmitglied in einem Spiel wird mit einer „VERWARNUNG WEGEN VERZÖGERUNG“ geahndet.
4.1.1Abb. 11 (25)
16.2.3
Die zweite und die folgenden Verzögerungen jeglicher Art durch irgendein Mitglied derselben Mannschaft werden als Fehler mit einer „BESTRAFUNG WEGEN VERZÖGERUNG“ geahndet, mit der Folge Punkt und Aufschlag für den Gegner.
6.1.3Abb. 11 (25)
16.2.4
Sanktionen wegen Verzögerung vor und zwischen den Sätzen werden im folgenden Satz wirksam.



Regel 17 Spielunterbrechungen in Ausnahmefällen
17.1
Verletzung/Krankheit
8.1
17.1.1
Wenn sich ein ernsthafter Unfall ereignet, während der Ball im Spiel ist, muss der Schiedsrichter das Spiel sofort unterbrechen und der medizinischen Hilfe gestatten, das Feld zu betreten.
Der Spielzug wird anschließend wiederholt.
6.1.3
17.1.2
Kann ein verletzter oder erkrankter Spieler weder normal noch ausnahmsweise gewechselt werden, wird dem Spieler eine Wiederherstellungszeit von drei Minuten gewährt, jedoch nur einmal pro Spieler während des gesamten Spiels.
Kann der Spieler nicht weiterspielen, wird seine Mannschaft für unvollständig erklärt.
15.615.724.2.86.4.37.3.1
17.2
Äußere Einflüsse
Tritt während des Spiels eine äußere Beeinträchtigung auf, wird das Spiel unterbrochen und der Spielzug wiederholt.
6.1.3Abb. 11 (23)
17.3
Längere Spielunterbrechungen
17.3.1 
Wenn durch unvorhergesehene Umstände das Spiel unterbrochen wird, entscheiden der 1. Schiedsrichter, der Ausrichter und, falls vorhanden, die Wettkampfleitung, welche Maßnahmen zu treffen sind, um wieder normale Bedingungen herzustellen.
23.2.3
17.3.2
Falls die Gesamtdauer einer oder mehrerer Unterbrechungen vier Stunden nicht überschreitet, so ist:
17.3.1
17.3.2.1
wenn das Spiel auf demselben Spielfeld wieder aufgenommen wird, der Satz mit demselben Punktestand, denselben Spielern (ausgenommen hinausgestellte oder disqualifizierte) und denselben Positionen fortzusetzen. Die Resultate der vorangegangenen Sätze bleiben bestehen.
17.3
17.3.2.2
wenn das Spiel auf einem anderen Spielfeld wieder aufgenommen wird, der unterbrochene Satz zu annullieren und mit denselben Spielern (ausgenommen hinausgestellten oder disqualifizierten) und derselben Startaufstellung zu wiederholen. Alle ausgesprochenen Sanktionen bleiben bestehen. Die Resultate der vorangegangenen Sätze bleiben bestehen.
7.321.4.1Abb. 9
17.3.3
Bei einer oder mehreren Unterbrechung/en mit einer Gesamtdauer von mehr als vier Stunden ist das ganze Spiel zu wiederholen.



Regel 18 Satzpausen und Seitenwechsel
18.1
Satzpausen
Eine Satzpause ist die Zeit zwischen den Sätzen. Alle Satzpausen dauern drei Minuten.
Während dieser Zeit werden der Seitenwechsel vorgenommen und die Aufstellungen im Spielberichtsbogen eingetragen.
Die Pause zwischen dem zweiten und dem dritten Satz kann auf Antrag des Ausrichters durch das zuständige Gremium bis auf zehn Minuten verlängert werden.
4.2.47.3.218.227.2.1.2
18.2
Seitenwechsel
Abb. 11 (3)
18.2.1
Nach jedem Satz, außer vor dem Entscheidungssatz, wechseln die Mannschaften die Felder.
7.1
18.2.2
Im Entscheidungssatz wechseln die Mannschaften unverzüglich die Felder, sobald die führende Mannschaft 8 Punkte erzielt hat. Die Positionen der Spieler bleiben unverändert.
Wird der Seitenwechsel nicht vollzogen, wenn die führende Mannschaft 8 Punkte erzielt hat, muss er ausgeführt werden, sobald der Irrtum bemerkt wird. Der Punktestand im Moment des Seitenwechsels bleibt unverändert.



Regel 19 Der Libero
19.1
Benennung des Liberos
5
19.1.1
Jede Mannschaft hat das Recht, aus ihrer Spielerliste bis zu zwei spezialisierte Defensivspieler, die Liberos, zu benennen.
FIVB
4.1.1
19.1.2
Alle Liberos müssen vor dem Spiel im Spielberichtsbogen in die dafür vorgesehenen speziellen Zeilen eingetragen werden.
5.2.227.2.1.128.2.1.1
19.1.3
Der Libero auf dem Feld ist der aktive Libero. Gibt es einen weiteren Libero, ist er der zweite Libero.
Es darf sich zu jedem Zeitpunkt nur ein Libero auf dem Feld befinden.
19.2
Ausrüstung
Die Liberos müssen eine Spielerkleidung (oder der neu benannte Libero eine Weste oder ein Leibchen) tragen, deren vorherrschende Farbe sich von der der anderen Mannschaftsmitglieder abhebt. Die Spielerkleidung muss sich deutlich von der Kleidung der restlichen Mannschaft unterscheiden. Beide Liberos können unterschiedliche Spielerkleidung tragen.
Die Spielerkleidung der Liberos muss auf die gleiche Art nummeriert sein wie die der anderen Mannschaftsmitglieder.
FIVB
4.3
19.3
Aktionen mit Beteiligung des Liberos
19.3.1
Spielaktionen
19.3.1.1
Der Libero darf für jeden Hinterspieler eingetauscht werden.
7.4.1.2
19.3.1.2
Er darf nur als Hinterspieler agieren, und es ist ihm nicht erlaubt, einen Angriffsschlag, von wo auch immer (einschließlich Spielfeld und Freizone), auszuführen, wenn sich der Ball im Moment der Berührung vollständig oberhalb der Netzoberkante befindet.
13.2.213.2.313.3.523.3.2.3d
19.3.1.3
Er darf weder aufschlagen, blocken noch einen Blockversuch durchführen.
12.4.114.6.214.6.6Abb. 11 (12)
19.3.1.4
Ein Spieler darf nach einem oberen Fingerzuspiel des in seiner Vorderzone befindlichen Liberos keinen Angriffsschlag ausführen, wenn sich der Ball beim Schlagen vollständig oberhalb der Netzoberkante befindet. Erfolgt die gleiche Aktion des Liberos außerhalb seiner Vorderzone, bestehen beim Angriffsschlag keine Einschränkungen.
1.4.113.3.623.3.2.3eAbb. 1b
19.3.2
Libero-Austauschaktionen
19.3.2.1
Libero-Austauschaktionen zählen nicht als Wechsel.
Sie sind in ihrer Anzahl unbeschränkt, es muss aber ein vollendeter Spielzug zwischen zwei Libero-Austauschaktionen liegen (es sei denn, der Libero müsste aufgrund einer durch eine Bestrafung verursachte Rotation auf die Position 4 rotieren oder wenn der aktive Libero spielunfähig wird und der Spielzug dadurch unvollständig geworden ist).
6.1.315.5
19.3.2.2
Ein Austauschspieler kann für und gegen jeden Libero ausgetauscht werden. Der aktive Libero darf entweder durch den Spieler, für den er eingetauscht wurde, oder durch den zweiten Libero ausgetauscht werden.
19.3.2.3
Am Anfang eines jeden Satzes darf der Libero das Feld erst dann betreten, nachdem der 2. Schiedsrichter die Startaufstellung kontrolliert und die Libero-Austauschaktion mit einem Startspieler genehmigt hat.
7.3.212.1
19.3.2.4
Andere Libero-Austauschaktionen dürfen nur stattfinden, während der Ball aus dem Spiel ist und bevor der Pfiff zur Ausführung des Aufschlags erfolgt ist.
8.212.3
19.3.2.5
Eine Libero-Austauschaktion nach dem Pfiff zur Ausführung des Aufschlags, aber vor dessen Ausführung, soll nicht zurückgewiesen werden. Nach dem Ende des Spielzuges muss der Spielkapitän darauf hingewiesen werden, dass dies so kein korrekter Ablauf ist und es im Wiederholungsfall zu einer Sanktion wegen Verzögerung kommen wird.
12.312.4Abb. 9
19.3.2.6
Bei wiederholten verspäteten Libero-Austauschaktionen muss das Spiel sofort unterbrochen und eine Sanktion wegen Verzögerung erteilt werden. Die als nächstes aufschlagende Mannschaft ergibt sich aus der Folge dieser Sanktion.
16.2Abb. 9
19.3.2.7
Der Libero und der Austauschspieler dürfen das Feld nur durch die Libero-Austauschzone betreten oder verlassen.
1.4.4Abb. 1b
19.3.2.8
Libero-Austauschaktionen müssen im Libero-Kontrollbogen (sofern einer verwendet wird) oder im elektronischen Spielberichtsbogen protokolliert werden.
19.3.2.9
Eine unrechtmäßige Libero-Austauschaktion liegt (unter anderem) vor, wenn
– kein vollendeter Spielzug zwischen zwei Austauschaktionen liegt;
– der Libero durch einen anderen Spieler als den zweiten Libero oder den ursprünglich ausgetauschten Spieler ausgetauscht wird.
Eine unrechtmäßige Libero-Austauschaktion wird wie ein unrechtmäßiger Wechsel behandelt:
Sofern die unrechtmäßige Libero-Austauschaktion noch vor Beginn des nächsten Spielzuges bemerkt wird, wird die Aktion durch die Schiedsrichter korrigiert und die Mannschaft erhält eine Sanktion wegen Verzögerung.
Wird die unrechtmäßige Libero-Austauschaktion erst nach der Ausführung des Aufschlags bemerkt, sind die Konsequenzen dieselben wie bei einem unrechtmäßigen Wechsel.
6.1.315.915.9Abb. 915.9
19.4
Neubenennung eines neuen Liberos
19.4.1
Ein Libero IST SPIELUNFÄHIG, wenn er sich verletzt, erkrankt, hinausgestellt oder disqualifiziert wird.
Ein Libero kann durch den Trainer (bzw. in dessen Abwesenheit durch den Co-Trainer oder den Spielkapitän) aus jedem beliebigen Grund FÜR SPIELUNFÄHIG ERKLÄRT werden.
21.3.221.3.3Abb. 95.1.2.15.1.2.35.2.1
19.4.2
Mannschaft mit einem Libero
19.4.2.1
Wenn eine Mannschaft aufgrund der Regel 19.4.1 nur noch einen Libero zur Verfügung hat oder wenn sie nur einen Libero im Spielberichtsbogen eingetragen hat und dieser Libero spielunfähig ist oder für spielunfähig erklärt wird, darf der Trainer (bzw. in dessen Abwesenheit der Co-Trainer oder Spielkapitän) für den Rest des Spiels jeden anderen Spieler (ausgenommen den Libero-Austauschspieler), der im Moment der Neubenennung nicht auf dem Feld ist, als Libero neu benennen.
5.1.2.319.419.4.1
19.4.2.2
Wenn der aktive Libero spielunfähig wird, kann er entweder durch seinen Austauschspieler oder direkt und unmittelbar auf dem Feld durch den neu benannten Libero ersetzt werden. Ein Libero, der durch eine Neubenennung ersetzt wurde, darf für den Rest des Spiels nicht mehr am Spiel teilnehmen.
Befindet sich der Libero nicht auf dem Feld, wenn er für spielunfähig erklärt wird, darf er ebenfalls durch eine Neubenennung ersetzt werden. Der für spielunfähig erklärte Libero darf für den Rest des Spiels nicht mehr am Spiel teilnehmen.
19.4.2.3
Der Trainer (bzw. in dessen Abwesenheit der Co-Trainer oder der Spielkapitän) informiert den 2. Schiedsrichter über die Neubenennung.
5.1.2.15.1.2.35.2.1
19.4.2.4
Wenn der neu benannte Libero spielunfähig ist oder für spielunfähig erklärt wird, sind weitere Neubenennungen erlaubt.
19.4.1
19.4.2.5
Falls der Trainer beantragt, den Mannschaftskapitän zum neuen Libero zu benennen, so wird dies zugelassen.
5.1.219.4.1
19.4.2.6
Im Falle der Neubenennung eines Liberos muss dessen Spielernummer in die Rubrik „Bemerkungen“ des Spielberichtsbogens sowie im Libero-Kontrollbogen (oder, falls benutzt, im elektronischen Spielberichtsbogen) eingetragen werden.
27.2.2.728.2.2.1
19.4.3
Mannschaft mit zwei Liberos
19.4.3.1
Sind zwei Liberos für eine Mannschaft im Spielberichtsbogen eingetragen und einer davon ist spielunfähig, darf die Mannschaft mit nur einem Libero weiterspielen.
Eine Neubenennung ist erst möglich, wenn auch der verbleibende Libero das Spiel nicht mehr fortsetzen kann.
4.1.119.1.119.4
19.5
[Hinausstellung und Disqualifikation von Liberos]
Wenn ein Libero hinausgestellt oder disqualifiziert wird, darf er sofort durch den zweiten Libero ersetzt werden. Hat die Mannschaft nur einen Libero, darf sie eine Neubenennung vornehmen.



Regel 20 Anforderungen an das Verhalten
20.1
Sportliches Verhalten
20.1.1
Die Teilnehmer müssen die „Offiziellen Spielregeln Volleyball“ kennen und sie befolgen.
20.1.2
Die Entscheidungen der Schiedsrichter sind in sportlichem Geist widerspruchslos anzuerkennen.
Im Zweifelsfall darf nur der Spielkapitän eine Erläuterung verlangen.
5.1.2.1
20.1.3
Die Teilnehmer haben Handlungen oder Haltungen zu unterlassen, die darauf abzielen, Entscheidungen der Schiedsrichter zu beeinflussen oder von der eigenen Mannschaft begangene Fehler zu vertuschen.
20.2
Fair Play
20.2.1
Die Teilnehmer haben sich im Geiste des FAIR PLAY respektvoll und höflich nicht nur gegenüber den Schiedsrichtern, sondern auch gegenüber anderen Offiziellen, Gegnern, Mitspielern und Zuschauern zu verhalten.
20.2.2
Kommunikation zwischen allen Mannschaftsmitgliedern während des Spiels ist erlaubt.



Regel 21 Fehlverhalten und seine Sanktionen
21.1
Geringfügiges Fehlverhalten
Geringfügiges Fehlverhalten wird nicht mit Sanktionen belegt. Der 1. Schiedsrichter hat die Aufgabe vorzubeugen, dass das Fehlverhalten nicht ein Ausmaß erreicht, das Sanktionen zur Folge hat.
Dies geschieht in zwei Stufen:
STUFE 1: durch eine verbale Verwarnung über den Spielkapitän;
STUFE 2: durch Zeigen der GELBEN KARTE an das betreffende Mannschaftsmitglied.
Diese formelle Verwarnung ist keine Sanktion, sondern ein Zeichen, dass das Fehlverhalten des Mannschaftsmitgliedes (und damit auch das der gesamten Mannschaft) für das Spiel ein Ausmaß erreicht hat, das Sanktionen zur Folge hat. Sie wird im Spielberichtsbogen eingetragen, hat aber keine unmittelbaren Konsequenzen.
5.1.221.3Abb. 9Abb. 11 (6a)
21.2
Fehlverhalten, das Sanktionen zur Folge hat
Fehlverhalten eines Mannschaftsmitgliedes gegenüber Offiziellen, Gegnern, Mitspielern oder Zuschauern wird je nach Schwere des Vergehens in drei Kategorien unterteilt:
4.1.1
21.2.1
UNANGEMESSENES VERHALTEN: Überschreiten anerkannter und gesitteter Umgangsformen.
21.2.2
AUSFALLENDES VERHALTEN: Diffamierende oder beleidigende Äußerungen oder Gesten, einschließlich jeglicher Art verächtlicher Handlungen.
21.2.3 
AGGRESSION: Tatsächlicher physischer Angriff sowie aggressives oder bedrohendes Verhalten.
21.3
Skala der Sanktionen
Je nach Schwere des Vergehens sind nach dem Urteil des 1. Schiedsrichters folgende Sanktionen anzuwenden und im Spielberichtsbogen einzutragen: BESTRAFUNG, HINAUSSTELLUNG ODER DISQUALIFIKATION.
Abb. 921.227.2.2.6
21.3.1
Bestrafung
Das erste unangemessene Verhalten eines beliebigen Mannschaftsmitgliedes im Spiel wird mit einem Punkt und Aufschlag für den Gegner bestraft.
Abb. 11 (6b)4.1.121.2.1
21.3.2
Hinausstellung
Abb. 11 (7)
21.3.2.1
Ein hinausgestelltes Mannschaftsmitglied, sofern es sich auf dem Feld befindet, muss sofort normal/ausnahmsweise gewechselt werden, darf für den Rest des Satzes nicht mehr am Spiel teilnehmen und muss sich bis zum Abschluss des laufenden Satzes in die Umkleidekabine der Mannschaft begeben.
Ein hinausgestellter Trainer verliert sein Recht, in diesem Satz einzugreifen, und muss sich bis zum Abschluss des laufenden Satzes in die Umkleidekabine der Mannschaft begeben.
4.1.15.2.15.3.2Abb. 1aAbb. 1b5.2.3.3
21.3.2.2
Das erste ausfallende Verhalten eines Mannschaftsmitgliedes wird mit einer Hinausstellung geahndet. Es gibt keine weiteren Sanktionen für die Mannschaft.
4.1.121.2.2
21.3.2.3
Das zweite unangemessene Verhalten desselben Mannschaftsmitgliedes im selben Spiel wird mit einer Hinausstellung geahndet. Es gibt keine weiteren Sanktionen für die Mannschaft.
4.1.121.2.1
21.3.3
Disqualifikation
Abb. 11 (8)
21.3.3.1
Ein disqualifiziertes Mannschaftsmitglied muss sofort normal/ausnahmsweise gewechselt werden, sofern es sich auf dem Feld befindet, und muss sich für den Rest des Spiels in die Umkleidekabine der Mannschaft begeben. Es gibt keine weiteren Sanktionen für die Mannschaft.
4.1.1Abb. 1a
21.3.3.2 
Der erste physische Angriff oder die erste angedeutete oder angedrohte Aggression wird mit einer Disqualifikation geahndet. Es gibt keine weiteren Sanktionen für die Mannschaft.
21.2.3
21.3.3.3
Das zweite ausfallende Verhalten desselben Mannschaftsmitgliedes im selben Spiel wird mit einer Disqualifikation geahndet. Es gibt keine weiteren Sanktionen für die Mannschaft.
4.1.121.2.2
21.3.3.4
Das dritte unangemessene Verhalten desselben Mannschaftsmitgliedes im selben Spiel wird mit einer Disqualifikation geahndet. Es gibt keine weiteren Sanktionen für die Mannschaft.
4.1.121.2.1
21.4
Anwendung der Sanktionen für Fehlverhalten
21.4.1
Alle Sanktionen für Fehlverhalten sind für das gesamte Spiel gültige persönliche Sanktionen und werden im Spielberichtsbogen eingetragen.
21.327.2.2.6
21.4.2
Wiederholtes Fehlverhalten durch dasselbe Mannschaftsmitglied im selben Spiel wird stufenweise geahndet (für jedes weitere Vergehen erhält das Mannschaftsmitglied eine höhere Sanktion).
4.1.121.221.3Abb. 9
21.4.3
Eine Hinausstellung oder eine Disqualifikation nach einem ausfallenden Verhalten bzw. nach einer Aggression erfordert keine vorausgegangene Sanktion.
21.221.3
21.5
Fehlverhalten vor und zwischen den Sätzen
Jedes Fehlverhalten vor und zwischen den Sätzen wird gemäß Regel 21.3 geahndet, und die Sanktionen werden im folgenden Satz wirksam.
18.121.221.3
21.6 
Zusammenfasssung von Fehlverhalten und Karten
Verwarnung (keine Sanktion):
- Stufe 1: verbale Verwarnung
- Stufe 2: gelbe Karte
Bestrafung (Sanktion): rote Karte
Hinausstellung (Sanktion): gelbe und rote Karte zusammen
Disqualifikation (Sanktion): gelbe und rote Karte getrennt



Regel 22 Schiedsgericht und Verfahrensweisen
22.1
Zusammensetzung
Das Schiedsgericht für ein Spiel setzt sich aus folgenden Offiziellen zusammen:
- dem 1. Schiedsrichter
- dem 2. Schiedsrichter
- dem Challenge-Schiedsrichter
- dem Reserve-Schiedsrichter
- dem Schreiber
- vier (zwei) Linienrichtern
Ihr Standort ist in Abbildung 10 dargestellt.
FIVB
23242526272829252628
22.2
Verfahrensweisen
22.2.1
Während des Spiels dürfen nur der 1. und der 2. Schiedsrichter Pfeifsignale geben:
22.2.1.1 
der 1. Schiedsrichter gibt das Signal zum Aufschlag, der den Spielzug eröffnet;
6.1.312.3Abb. 11 (1)
22.2.1.2
der 1. oder der 2. Schiedsrichter pfeifen das Ende des Spielzuges, wenn sie sicher sind, dass ein Fehler begangen wurde und sie die Art des Fehlers erkannt haben.
22.2.2
Ist der Ball aus dem Spiel, pfeifen sie, um anzuzeigen, dass sie einen Antrag einer Mannschaft genehmigen oder zurückweisen.
5.1.28.2
22.2.3
Unverzüglich nach dem Pfiff eines Schiedsrichters zur Beendigung eines Spielzuges muss mit offiziellen Handzeichen Folgendes angezeigt werden:
22.2.1.230.1
22.2.3.1
Pfeift der 1. Schiedsrichter den Fehler, zeigt er nacheinander an:
a) die Mannschaft, die aufschlagen wird;
b) die Art des Fehlers;
c) falls erforderlich den Spieler, der den Fehler begangen hat.
12.2.2Abb. 11 (2)
22.2.3.2
Pfeift der 2. Schiedsrichter den Fehler, zeigt er an:
a) die Art des Fehlers;
b) falls erforderlich den Spieler, der den Fehler begangen hat;
c) (nach dem 1. Schiedsrichter) die Mannschaft, die aufschlagen wird.
In diesem Fall zeigt der 1. Schiedsrichter nur die Mannschaft an, die aufschlagen wird, aber weder die Art des Fehlers noch den Spieler, der den Fehler begangen hat.
12.2.2Abb. 11 (2)
22.2.3.3
Bei einem fehlerhaften Angriff oder bei einem Blockfehler eines Hinterspielers oder Liberos zeigen beide Schiedsrichter entsprechend den Regeln 22.2.3.1 bzw. 22.2.3.2 an.
12.2.213.3.313.3.519.3.1.223.3.2.3d23.3.2.3eAbb. 11 (21)
22.2.3.4
Im Falle eines Doppelfehlers zeigen beide Schiedsrichter nacheinander an:
a) die Art des Fehlers;
b) falls erforderlich die Spieler, die die Fehler begangen haben.
Anschließend zeigt der 1. Schiedsrichter die Mannschaft, die als nächstes aufschlagen wird.



Standort
Der 1. Schiedsrichter übt seine Tätigkeit stehend auf einem Schiedsrichterstuhl aus, der sich auf einer Seite in der Verlängerung des Netzes befindet. Seine Augenhöhe muss sich ungefähr 50 cm über der Netzoberkante befinden.
Abb. 1aAbb. 1bAbb. 10
23.2
Befugnisse
23.2.1
Der 1. Schiedsrichter leitet das Spiel von Anfang bis Ende mit Entscheidungsbefugnis über alle Mitglieder des Schiedsgerichts und über die Mannschaftsmitglieder.
Während des Spiels sind seine Entscheidungen endgültig. Er ist berechtigt, die Entscheidungen der anderen Mitglieder des Schiedsgerichts aufzuheben, wenn er feststellt, dass diese sich geirrt haben.
Er kann ein Mitglied des Schiedsgerichts, das seine Aufgaben nicht ordnungsgemäß erfüllt, ersetzen lassen
4.1.16.3
23.2.2
Er kontrolliert auch die Arbeit der Ballholer und Wischer.
3.3
23.2.3
Er hat das Recht, über alles zu entscheiden, was das Spiel betrifft, auch über alles, was in den Regeln nicht festgelegt ist.
23.2.4
Er erlaubt keine Diskussionen über seine Entscheidungen.
Der 1. Schiedsrichter gibt jedoch dem Spielkapitän auf dessen Verlangen eine Erläuterung über die Anwendung oder Auslegung der Regeln, die seiner Entscheidung zugrunde liegen.
Ist der Spielkapitän mit dieser Erläuterung nicht einverstanden und entscheidet sich, gegen diese Entscheidung zu protestieren, so muss er sofort das Recht anmelden, am Ende des Spiels diesen Protest in den Spielberichtsbogen einzutragen.
Der 1. Schiedsrichter muss dies zulassen.
20.1.25.1.2.15.1.2.15.1.3.227.2.3.2
23.2.5
Der 1. Schiedsrichter muss vor und während des Spiels beurteilen, ob die Spielfläche, die Ausrüstung und die äußeren Bedingungen den Spielerfordernissen entsprechen.
Kapitel 123.3.1.1
23.3
Zuständigkeiten
23.3.1
Vor dem Spiel hat der 1. Schiedsrichter:
23.3.1.1
den Zustand der Spielfläche, der Bälle und der weiteren Ausrüstung zu überprüfen;
Kapitel 123.2.5
23.3.1.2
mit den Mannschaftskapitänen die Auslosung durchzuführen;
7.1
23.3.1.3
das Aufwärmen der Mannschaften zu überwachen.
7.2
23.3.2 
Während des Spiels hat er die Befugnis:
23.3.2.1
gegenüber den Mannschaften Verwarnungen auszusprechen;
21.1
23.3.2.2
Fehlverhalten und Verzögerungen zu ahnden;
16.221.2Abb. 9Abb. 11 (6a, 6b, 7, 8, 25)
23.3.2.3 
Entscheidungen zu treffen über:
a) Fehler des Aufschlagspielers und Positionsfehler der aufschlagenden Mannschaft, einschließlich Sichtblock;
b) Fehler beim Spielen des Balles;
c) Fehler oberhalb des Netzes und fehlerhafte Netzberührungen durch Spieler, in erster Linie (aber nicht ausschließlich) auf der Seite des Angreifers;
d) Fehler bei Angriffsschlägen von Libero und Hinterspielern;
e) ausgeführte Angriffsschläge eines Spielers nach einem oberen Fingerzuspiel des in der eigenen Vorderzone befindlichen Liberos, wenn sich der Ball bei der Berührung mit vollem Umfang oberhalb der Netzoberkante befindet;
f) Bälle, die den unteren Sektor vollständig durchqueren;
g) den ausgeführten Block von Hinterspielern oder den Blockversuch des Liberos;
h) den Ball, der das Netz vollständig oder teilweise außerhalb des Überquerungssektors zum gegnerischen Feld überquert oder der die Antenne auf seiner Seite des Spielfeldes berührt;
i) den Aufschlag und den Ball nach der zweiten oder dritten Berührung, der über die oder außerhalb der Antenne auf seiner Seite des Spielfeldes fliegt.
23.3.3
Nach Spielende überprüft und unterschreibt er den Spielberichtsbogen.



Regel 24 2. Schiedsrichter
24.1
Standort
Der 2. Schiedsrichter übt seine Tätigkeit stehend außerhalb des Spielfeldes in der Nähe des Pfostens auf der dem 1. Schiedsrichter gegenüberliegenden Seite und ihm zugewandt aus.
Abb. 1aAbb. 1bAbb. 10
24.2
Befugnisse
24.2.1
Der 2. Schiedsrichter ist der Assistent des 1. Schiedsrichters, hat aber auch seine eigenen Zuständigkeiten.
Falls der 1. Schiedsrichter nicht mehr in der Lage ist, seine Tätigkeit fortzusetzen, kann ihn der 2. Schiedsrichter ersetzen.
24.3
24.2.2
Er kann ohne zu pfeifen auch Fehler außerhalb seiner Zuständigkeit anzeigen, darf aber gegenüber dem 1. Schiedsrichter nicht darauf beharren.
24.3
24.2.3
Er überwacht die Arbeit des Schreibers (der Schreiber).
27.228.2
24.2.4
Er überwacht die Mannschaftsmitglieder auf der Mannschaftsbank und meldet deren Fehlverhalten dem 1. Schiedsrichter.
4.2.1
24.2.5
Er überwacht die Spieler auf den Aufwärmflächen.
4.2.3
24.2.6
Er genehmigt reguläre Spielunterbrechungen, kontrolliert deren Dauer und weist unberechtigte Anträge zurück.
1515.1127.2.2.3
24.2.7
Er kontrolliert die Anzahl der von jeder Mannschaft in Anspruch genommenen Auszeiten und Wechsel und zeigt bei der zweiten Auszeit sowie beim fünften und sechsten Wechsel die entsprechende Anzahl dem 1. Schiedsrichter und dem betreffenden Trainer an.
15.127.2.2.3
24.2.8
Im Falle einer Verletzung eines Spielers genehmigt er einen ausnahmsweisen Wechsel oder bewilligt eine Wiederherstellungszeit von drei Minuten.
15.717.1.2
24.2.9 
Er überprüft den Zustand des Bodens, vor allem in der Vorderzone. Während des Spiels überprüft er, ob die Bälle noch den Vorgaben der Regularien entsprechen.
1.2.13
24.2.10
FIVB
26.2.6
24.3
Zuständigkeiten
24.3.1
Zu Beginn jedes Satzes, beim Seitenwechsel im Entscheidungssatz und immer, wenn es erforderlich ist, überprüft der 2. Schiedsrichter, ob die jeweiligen Positionen der Spieler auf dem Feld mit den auf den Aufstellungsblättern vermerkten übereinstimmen.
5.2.3.17.3.27.3.518.2.2
24.3.2
Während des Spiels entscheidet der 2. Schiedsrichter, pfeift und zeigt an:
24.3.2.1
das Eindringen in die gegnerische Spielfeldhälfte und in den gegnerischen Raum unter dem Netz;
1.3.311.2Abb. 5aAbb. 11 (22)
24.3.2.2
Positionsfehler der annehmenden Mannschaft;
7.5Abb. 4Abb. 11 (23)
24.3.2.3
durch Spieler begangene fehlerhafte Netzberührungen, in erster Linie (aber nicht ausschließlich) auf der Blockseite, und Antennenberührungen auf seiner Seite des Spielfeldes;
11.3.1
24.3.2.4
den ausgeführten Block von Hinterspielern, den Blockversuch eines Liberos oder den fehlerhaften Angriff von Hinterspielern oder des Liberos;
13.3.314.6.214.6.623.3.2.3d, e, gAbb. 8Abb. 11 (12, 21)
24.3.2.5
den Kontakt des Balles mit einem fremden Gegenstand;
8.4.28.4.3Abb. 11 (15)
24.3.2.6
den Kontakt des Balles mit dem Boden, falls der 1. Schiedsrichter nicht in der Lage ist, diese Berührung zu sehen;
8.3
24.3.2.7
den Ball, der die senkrechte Ebene des Netzes ganz oder teilweise außerhalb des Überquerungssektors durchquert oder die Antenne auf seiner Seite des Spielfeldes berührt;
8.4.38.4.4Abb. 5aAbb. 11 (15)
24.3.2.8 
den Aufschlag und den Ball nach der zweiten oder dritten Berührung, der über die oder außerhalb der Antenne auf seiner Seite des Spielfeldes fliegt.
Abb. 11 (15)
24.3.3
Nach Spielende überprüft und unterschreibt er den Spielberichtsbogen.



Regel 25 Challenge-Schiedsrichter
FIVB
25.1
Standort
Der Challenge-Schiedsrichter führt seine Aufgaben an einem eigenständig für die Video Challenge vorgesehenen Platz aus. Der Platz wird durch den Technischen Delegierten der FIVB festgelegt.
25.2
Zuständigkeiten
25.2.1
Er überwacht den Ablauf der Video Challenge und stellt sicher, dass der Ablauf den geltenden Video Challenge-Regularien entspricht.
25.2.2
Er trägt offizielle Schiedsrichterkleidung, während er die Aufgaben des Challenge-Schiedsrichters ausübt.
25.2.3
Nach der Video-Analyse berät er den 1. Schiedsrichter in Bezug auf die Art des Fehlers.
25.2.4
Am Ende des Spiels unterschreibt er den Spielberichtsbogen.



Regel 26 Reserve-Schiedsrichter
FIVB
26.1
Standort
Der Reserve-Schiedsrichter übt seine Aufgaben an dem im FIVB Court Layout vorgesehenen eigenen Platz aus.
26.2
Zuständigkeiten
Der Reserve-Schiedsrichter ist verpflichtet:
26.2.1
bei der Ausübung seiner Aufgaben offizielle Schiedsrichterkleidung zu tragen;
26.2.2
den 2. Schiedsrichter zu ersetzen, falls dieser abwesend oder nicht in der Lage ist, seine Aufgaben weiterzuführen, oder falls dieser die Aufgaben des 1. Schiedsrichters übernehmen muss;
26.2.3
die Wechseltafeln (falls verwendet) vor Spielbeginn und zwischen den Sätzen zu überprüfen;
26.2.4
bei Problemen die Funktionsfähigkeit der Team-Tablets vor und zwischen den Sätzen zu überprüfen;
26.2.5
den 2. Schiedsrichter zu unterstützen, die Freizone frei zu halten;
1.1
26.2.6
den 2. Schiedsrichter dabei zu unterstützen, hinausgestellte oder disqualifizierte Mannschaftsmitglieder anzuweisen, dass sie sich in die Umkleidekabine der Mannschaft begeben;
21.3.2.121.3.3.1
26.2.7
die Wechselspieler in der Aufwärmfläche und auf der Mannschaftsbank zu kontrollieren;
1.4.524.2.524.2.10
26.2.8
dem 2. Schiedsrichter direkt nach der Vorstellung der Startspieler vier Spielbälle zu übergeben und dem 2. Schiedsrichter einen Spielball zu übergeben, nachdem dieser die Positionen der Spieler überprüft hat;
24.3.1
26.2.9
den 1. Schiedsrichter bei der Arbeit mit den Wischern zu unterstützen.



Regel 27 Schreiber
27.1
Standort
Der Schreiber erfüllt seine Aufgaben am Schreibertisch auf der dem 1. Schiedsrichter gegenüberliegenden Seite des Feldes und ihm zugewandt.
Abb. 1aAbb. 1bAbb. 10
27.2
Zuständigkeiten
Er füllt den Spielberichtsbogen entsprechend den Regeln aus, wobei er mit dem 2. Schiedsrichter zusammenarbeitet.
Er benutzt einen Summer oder ein anderes akustisches Gerät, um im Rahmen seiner Zuständigkeiten den Schiedsrichtern Zeichen zu geben oder Regelwidrigkeiten anzuzeigen.
27.2.1
Vor dem Spiel bzw. Satz hat der Schreiber:
27.2.1.1
die Angaben über das Spiel und die Mannschaften einschließlich der Namen und der Nummern der Liberos entsprechend den gültigen Regeln einzutragen und die Unterschriften der Mannschaftskapitäne und Trainer einzuholen;
4.15.1.15.2.27.3.219.1.219.4.2.6
27.2.1.2
die Startaufstellung jeder Mannschaft vom Aufstellungsblatt zu übertragen (bzw. die elektronisch übermittelten Daten zu überprüfen).
Wenn er das Aufstellungsblatt nicht rechtzeitig erhält, teilt er dies unverzüglich dem 2. Schiedsrichter mit.
5.2.3.17.3.25.2.3.1
27.2.2
Während des Spiels hat der Schreiber:
27.2.2.1
die erzielten Punkte zu vermerken;
6.1
27.2.2.2
die Aufschlagreihenfolge jeder Mannschaft zu kontrollieren und die Schiedsrichter auf einen diesbezüglichen Fehler sofort nach Ausführung des Aufschlags aufmerksam zu machen;
12.2
27.2.2.3
das Recht, Anträge auf Wechsel zu bestätigen und akustisch anzuzeigen, die Wechsel und Auszeiten einzutragen und den 2. Schiedsrichter darüber zu informieren;
15.115.4.115.10.3.324.2.624.2.7
27.2.2.4
den Schiedsrichtern einen unberechtigten Antrag auf eine reguläre Spielunterbrechung anzuzeigen;
15.11
27.2.2.5
den Schiedsrichtern das Ende der Sätze und das Erreichen des 8. Punktes im entscheidenden Satz anzusagen;
6.215.4.118.2.2
27.2.2.6
alle formellen Verwarnungen, Sanktionen und unberechtigten Anträge einzutragen;
15.11.316.221.3
27.2.2.7
nach den Anweisungen des 2. Schiedsrichters alle anderen Vorkommnisse einzutragen, wie z. B. ausnahmsweise Wechsel, Wiederherstellungszeiten, längere Unterbrechungen, äußere Beeinträchtigungen, Neubenennungen von Liberos usw.;
15.717.1.217.217.319.4
27.2.2.8
die Satzpausen zu kontrollieren.
18.1
27.2.3
Nach Spielende hat der Schreiber:
27.2.3.1
das Endresultat einzutragen;
6.3
27.2.3.2
im Falle eines Protestes nach der Zustimmung des 1. Schiedsrichters eine Erklärung über den Vorfall, der Anlass für den Protest ist, im Spielberichtsbogen einzutragen oder dem Mannschafts- bzw. Spielkapitän zu erlauben, dies selbst zu tun;
5.1.2.15.1.3.223.2.4
27.2.3.3 
den Spielberichtsbogen zu unterschreiben, bevor er die Unterschriften der Mannschaftskapitäne und danach der Schiedsrichter einholt.



Regel 28 Schreiberassistent
28.1
Standort
Der Schreiberassistent sitzt zur Ausübung seiner Aufgaben neben dem Schreiber.
FIVB
22.1Abb. 1aAbb. 1bAbb. 10
28.2
Zuständigkeiten
Er vermerkt die Libero-Austauschaktionen.
Er hilft dem Schreiber bei der Erfüllung seiner Aufgaben.
Sollte der Schreiber nicht mehr in der Lage sein, seine Arbeit fortzusetzen, ersetzt ihn der Schreiberassistent.
19.3
28.2.1 
Vor dem Spiel bzw. Satz hat der Schreiberassistent:
28.2.1.1
den Libero-Kontrollbogen vorzubereiten;
28.2.1.2
den Reserve-Spielberichtsbogen vorzubereiten.
28.2.2
Während des Spiels hat der Schreiberassistent:
28.2.2.1
die Daten der Libero-Austauschaktionen und Neubenennungen von Liberos festzuhalten;
19.3.1.119.4
28.2.2.2
die Schiedsrichter mittels eines akustischen Signalgeräts über alle Fehler bei Libero-Austauschaktionen zu informieren;
19.3.2
28.2.2.3
die manuelle Anzeigetafel am Schreibertisch zu bedienen;
28.2.2.4
darauf zu achten, dass die Anzeigetafeln übereinstimmen;
27.2.2.1
28.2.2.5
im Notfall den Reserve-Spielberichtsbogen auf den aktuellen Stand zu bringen und ihn dem Schreiber zu übergeben.
27.2.1.1
28.2.3
Nach Spielende hat der Schreiberassistent:
28.2.3.1 
den Libero-Kontrollbogen zu unterschreiben und zur Kontrolle zu übergeben;
28.2.3.2 
den Spielberichtsbogen zu unterschreiben.
FIVB




Regel 29 Linienrichter
29.1
Standort
Beim Einsatz von nur zwei Linienrichtern stehen diese an den beiden den Schiedsrichtern auf deren rechten Seite nähergelegenen Spielfeldecken, diagonal in 1 bis 2 m Abstand von der Ecke.
Jeder kontrolliert die auf seiner Seite befindliche Grund- und Seitenlinie.
FIVB
Abb. 1aAbb. 1bAbb. 10Abb. 10
29.2
Zuständigkeiten
29.2.1
Die Linienrichter führen ihre Aufgaben durch Zeichen mit einer Fahne (40 cm x 40 cm) gemäß Abbildung 12 aus, um anzuzeigen:
Abb. 12
29.2.1.1
Ball „in“ oder „aus“, wenn der Ball in der Nähe ihrer Linie(n) zu Boden fällt;
8.38.4Abb. 12 (1, 2)
29.2.1.2
Berührungen der annehmenden Mannschaft von Bällen, die „aus“ sind;
8.4Abb. 12 (3)
29.2.1.3 
wenn der Ball die Antenne berührt, der Ball nach dem Aufschlag und der zweiten oder dritten Ballberührung das Netz außerhalb des Überquerungssektors überfliegt usw.;
8.4.38.4.410.1.1Abb. 5aAbb. 12 (4)
29.2.1.4 
wenn ein Spieler (ausgenommen der Aufschlagspieler) im Moment des Aufschlags aus seinem Feld tritt;
7.412.4.3Abb. 12 (4)
29.2.1.5
Fußfehler des Aufschlagspielers;
12.4.3
29.2.1.6 
jede auf ihrer Seite des Feldes stattfindende Berührung der oberen 80 cm der Antenne durch einen Spieler während seiner Ballspielaktion oder wenn dies das Spielgeschehen beeinflusst.
11.3.111.4.4Abb. 3Abb. 12 (4)
29.2.1.7
den Ball, der das Netz außerhalb des Überquerungssektors Richtung gegnerisches Feld überfliegt oder die Antenne auf seiner Seite des Feldes berührt.
10.1.1Abb. 5aAbb. 12 (4)
29.2.2 
Auf Verlangen des 1. Schiedsrichters muss ein Linienrichter sein Zeichen wiederholen.




Regel 30 Offizielle Zeichen
30.1 
Handzeichen der Schiedsrichter
Die Schiedsrichter müssen den Grund für ihren Pfiff (Art des gepfiffenen Fehlers oder die Art der genehmigten Unterbrechung) durch das offizielle Handzeichen anzeigen. Das Zeichen wird für einen Moment beibehalten. Wenn es mit einer Hand ausgeführt wird, dann mit derjenigen auf der Seite der Mannschaft, die den Fehler begangen oder den Antrag gestellt hat.
Abb. 11
30.2
Fahnenzeichen der Linienrichter
Die Linienrichter müssen die Art des begangenen Fehlers durch die offiziellen Fahnenzeichen anzeigen und das Zeichen für einen Moment beibehalten.
Abb. 12


WEITERE ANGABEN ZU REGELN DES WESTDEUTSCHEN VOLLEYBALLVERBANDS

1. Aufgaben schiedsrichter vor dem Spiel:
Zeit vor Spielbeginn 	Beteiligte 	Aufgaben
(in Minuten) 	  	 
30 	1.SR/2.SR/Schreiber/LR 	Anwesenheit in Halle in SR-Kleidung (sofern vorgeschrieben)
29 	1.SR/2.SR 	Vorstellung, Begrüßung bei Mannschaftsleitungen
28-15 	1.SR/2.SR 	Kontrolle der Spielerpässe (Gültigkeit, Mannschaft, Identität, Spielklasse)
28 	Schreiber 	Ausfüllen: Kopf des Spielberichtsbogens
23 	Schreiber 	Ausfüllen der Mannschaftslisten
  	1.SR/2.SR 	Netzhöhen kontrollieren und ggf. korrigieren lassen
  	  	Höhe des SR-Stuhls, Position der Antennen
  	  	Spielball bestimmen (Luftdruck messen, ggf. korrigieren)
  	  	Mannschaftsbänke/Zuschauerbereich festlegen
  	  	sonstige Anforderungen an Spielfläche und Umgebungsbedingen kontrollieren (Abweichungen sind ggf. von dem Spiel einzutragen und Absprachen ggf. von Kapitänen zu bestätigen)
18 	2.SR/Schreiber 	Kontrolle der Mannschaftslisten durch Trainer, ggf. Eintragen der Spielernummern durch den Trainer, Unterschriften der Trainer einholen
  	1.SR/2.SR/Schreiber/LR 	Abstimmung, Einweisung in Handzeichen der LR
  	2.SR/Schreiber 	Wechselprozedur, Verfahren bei Rotationsfehler mit Schreiber absprechen
15 	1.SR 	Pfiff zur Auslosung
  	1.SR/2.SR 	Durchführung der Auslosung
  	  	Festlegen gemeinsames oder getrenntes Einspielen
  	  	ggf. Bekanntgabe von Besonderheiten an Mannschaftsführer
  	  	Kontrolle der Mannschaftslisten durch Mannschaftsführer und Unterschriften einholen
13 	1. SR 	Anpfiff zu 10-Minuten Einspielzeit
  	2. SR 	Kontrolle zu Eintragungen der Auslosung im Spielberichtsbogen
  	1.SR/2.SR 	Beobachten des Einspielens, ggf. Eingreifen bei Aggressionen
4 	1. SR 	Signalisieren der letzten Minute der Einspielzeit (evtl. Pfiff)
3 	1. SR 	Pfiff zur Beendigung der Einspielzeit
2 	1.SR/2.SR/LR 	Einnehmen der Schiedsrichterpositionen
1 	1.SR 	Pfiff zur Aufstellung der Mannschaften auf Spielfeld
  	2.SR 	Kontrolle der Aufstellungen mit Eintragungen im Spielberichtsbogen
  	  	Kontrolle der Mannschaftsbänke, Plätze der Offiziellen und Wechselspieler
  	  	Handzeichen an 1.SR über Beendigung der vorgenannten Aufgaben
0 	1.SR 	Blickkommunikation zu LR und 2.SR
  	Schreiber 	Eintragung des Spielbeginns in „Beginn“ für 1. Satz
  	1.SR 	Anpfiff zur Bewilligung des 1. Aufschlags 

2.  Aufschlag

Der Aufschlag ist eine Handlung, mit der der Ball vom rechten, in der Aufschlagzone befindlichen Hinterspieler ins Spiel gebracht wird.
Erster Aufschlag im Satz

    Wird im 1. und 5. Satz durch Auslosung entschieden
    In Satz 2 bis 4 beginnt die Mannschaft, die im vorangegangenen Satz nicht zu Satzbeginn aufgeschlagen hat

Aufschlagreihenfolge

    Wird im Spielberichtsbogen eingetragen und muss eingehalten werden, Rotation im Uhrzeigersinn 

Genehmigung des Aufschlags

    Durch Pfiff und Handzeichen (Bewilligung des Aufschlags) des 1. SR, nachdem er sich von der Spielbereitschaft beider Mannschaften überzeugt hat und der Aufschlagspieler im Ballbesitz ist

Ausführung des Aufschlags

    Schlag mit Hand oder einem beliebigen Teil des Armes
    Ball muss zuvor hochgeworfen oder fallengelassen werden (nur 1 Versuch); Ballprellen oder Bewegen in den Händen zur Aufschlagvorbereitung ist erlaubt
    Im Moment des Schlages oder Absprungs (Sprungaufschlag) muss sich der Aufschlagspieler innerhalb der Aufschlagzone befinden, die Grundlinie darf nicht be- oder übertreten werden
    Nach dem Schlagen des Balles darf der Aufschlagspieler den Bereich außerhalb der Aufschlagzone betreten bzw. dort landen
    Der Aufschlag muss innerhalb von 8 Sekunden nach Bewilligung (Pfiff) durch den 1. SR ausgeführt werden
    Ein Aufschlag, der vor dem Pfiff des 1. SR ausgeführt wird, wird nicht gewertet und wiederholt (Doppelfehler)

Sichtblock

    Weder der Aufschlagspieler noch die Flugbahn des Balles dürfen dem Gegner verdeckt werden (individueller oder Gruppen-Sichtblock)
    Ein oder mehrere Spieler der aufschlagenden Mannschaft bilden einen Sichtblock, wenn sie im Moment der Ausführung des Aufschlags mit den Armen hin- und herschwenken, springen, sich seitwärts bewegen oder so zusammenstehen, dass dem Gegner die Sicht auf den Aufschlagspieler und/oder die Flugbahn des Balles verdeckt wird

Fehler beim Aufschlag

Aufschlagfehler

Fehler, die zu einem Aufschlagwechsel führen – auch, wenn der Gegner einen Positionsfehler begeht:

    Die Aufschlagreihenfolge wurde nicht eingehalten
    Der Aufschlag wird nicht korrekt ausgeführt (z.B. Übertreten der Grundlinie im Moment des Aufschlags, Ball berührt beim Anwurf einen fremden Gegenstand)

Aufschlag wird fehlerhaft nach Schlagen des Balles, wenn der Ball:

    Einen Spieler der aufschlagenden Mannschaft berührt
    Die Netzebene nicht überquert
    "Aus" geht
    Einen Sichtblock überfliegt

Hier wird der Positionsfehler der annehmenden Mannschaft zuerst geahndet.
Aufschlagfehler und Positionsfehler

    Begeht im Moment des Aufschlags der Aufschlagspieler einen Fehler (z.B. Übertritt an der Grundlinie, falscher Aufschlagspieler) und die gegnerische Mannschaft einen Positionsfehler, wird der Aufschlagfehler geahndet
    Wird der Aufschlag nach der korrekten Ausführung fehlerhaft (z.B. der Ball überquert das Netz nicht, geht "Aus", Sichtblock) und die gegnerische Mannschaft begeht einen Positionsfehler, wird der Positionsfehler als der zuerst begangene Fehler geahndet


3.  Befugnisse und Zuständigkeiten des Schiedsgerichts 
 1. Schiedsrichter

Befugnisse:

    Leitet das Spiel von Anfang bis Ende
    Trifft endgültige Entscheidungen (Überstimmung möglich)
    Kann Mitglieder des Schiedsgerichtes bei nicht ordnungsgemäßer Erfüllung ihrer Aufgaben ersetzen lassen
    Erläutert Regelauslegung gegenüber dem Spielkapitän
    Prüft vor und während des Spiels die Spielfläche, Bälle, weitere Ausrüstung und äußere Bedingungen (als Team mit dem 2. SR gemeinsam)

 

Zuständigkeiten:

    Führt in Anwesenheit des 2. SR die Auslosung mit beiden Mannschaftskapitänen durch
    Überwacht das Einspielen ("10-Minuten") der Mannschaften
    Bewilligt den Aufschlag
    Beendet den Satz
    Spricht Verwarnungen und Sanktionen aus
    Gibt den Seitenwechsel frei
    Hat bei allen Entscheidung (bei unvorhergesehenen Vorkommnissen - Verletzung, Besonderheiten während des Spiels) die endgültige Entscheidungsgewalt

 

Entscheidet, pfeift und zeigt:

    Fehler des Aufschlagspielers: Fehlerhafter Aufschlag, Übergetreten, 8 Sekunden
    Positionsfehler der aufschlagenden Mannschaft einschließlich Sichtblock
    Fehler beim Spielen des Balles (Doppelberührung, gehobener Ball)-Vier Ballberührungen
    Den fehlerhaften Angriff eines Hinterspielers oder Liberos
    Das Übergreifen eines Spielers in den gegnerischen Raum oberhalb des Netzes
    Fehlerhafte Netzberührung (vorwiegend Angriffsseite) und Antennenberührung eines Spielers oder Balles auf seiner Seite
    Ball überquert die senkrechte Ebene des Netzes ganz oder teilweise außerhalb des Überquerungssektors
    Ball überquert die Mittellinie vollständig unter dem Netz
    Ball berührt einen fremden Gegenstand ("aus")-Fehler des Liberos
    Blockversuch, Block, Angriff oberhalb der Netzoberkante, oberes Zuspiel in der
    Vorderzone mit anschließendem Angriff oberhalb der Netzoberkante, …

2. Schiedsrichter

Befugnisse:

    Unterstützt 1. SR und kann ihn im Notfall ersetzen
    Überwacht die Arbeit des Schreibers
    Überwacht die Mannschaftsmitglieder und Spieler auf den Mannschaftsbänken bzw. auf den Aufwärm- und Strafflächen
    Genehmigt Spielunterbrechungen und kontrolliert deren Dauer und Anzahl
    Weist unberechtigte Anträge zurück
    Zeigt dem entsprechenden 1. SR sowie dem Trainer die 2. Auszeit bzw. den 5. und 6. Spielerwechsel an
    Informiert 1. SR über evtl. unkorrektes Verhalten der Mannschaftsmitglieder
    genehmigt ausnahmsweisen Wechsel sowie die Wiederherstellungszeit (bei Verletzung eines Spielers)

 

Zuständigkeiten:
Entscheidet, pfeift und zeigt:

    Rotationsfehler (nach Ansage des Schreibers)
    Positionsfehler der annehmenden Mannschaft
    Fehlerhafte Netz- und Antennenberührung eines Spielers (vorwiegend Blockseite)
    Eindringen eines Spielers in die gegnerische Spielfeldhälfte mit dem ganzen Fuß oder dem Teil eines/beider Füße, die das Spiel beeinflussen bzw. den Gegner behindern
    Den ausgeführten Block eines Hinterspielers, den Blockversuch des Liberos oder den fehlerhaften Angriff des Hinterspielers
    Ball berührt die Antenne auf seiner Seite
    Ball überquert die senkrechte Ebene des Netzes ganz oder teilweise außerhalb des Überquerungssektors auf seiner Seite
    Kontakt des Balles mit einem fremden Gegenstand
    Ball berührt den Boden (sollte der 1. SR dies nicht sehen können)

Schreiber/Scorer

Zuständigkeiten:

    Protokollieren des Spiels
    Kontrolle der Aufschlagreihenfolge (Fehler meldet er erst nach dem Aufschlag dem Schiedsrichter)
    Anträge auf Wechsel/Auszeiten anzeigen, protokollieren und die Anzahl überprüfen - den 2. Schiedsrichter über die Anzahl informieren
    Anzeigen von unberechtigten Anträgen

Schreiberassitent

Zuständigkeiten:

    Kontrolle der Libero-Austauschaktionen
    Signalisieren des Anfangs/ Ende einer technischen Auszeit
    Bedienen der Anzeigetafel

Linienrichter

Zuständigkeiten:

zeigt an:

    Ball „in”/ „aus” oder „berührt” , wenn der Ball den Boden berührt
    fehlerhafte Antennenberührungen durch Ball/ Spieler
    Ball durchquert nach den Aufschlag/ der 3. Ballberührung nicht den Überquerungssektor
    Fußfehler des Aufschlagspielers


4.  Besonderheiten bei der Spielleitung 

 Spielberechtigung

    Der SR prüft vor Spielbeginn die Eintragungen in SAMS.
    Identitätskontrolle (Lichtbild mit Spieler abgleichen) durchführen
    Fehlender Spieler → Eintragung in SAMS liegt vor, der Spieler kann sich bei verspätetem Eintreffen beim 2. Schiedsrichter anmelden, Identitätskontrolle durchführen lassen und regulär am Spiel teilnehmen
    Ein Spieler gilt erst als eingesetzt, wenn er in der Rotationsfolge aufgeführt ist (Ausnahme Libero – Eintrag Liberofeld)
    Bei Vereinswechsel oder Wechsel in eine niedrigere Spielklasse innerhalb eines Vereins wird durch den Staffelleiter eine Sperre ausgesprochen
    Kein Höherspielen an den ersten beiden Spieltagen möglich
    Nach dem dritten Mal Höherspielen ist der Spieler festgespielt (d. h. er darf nur noch in der höheren Klasse aktiv am Spielbetrieb teilnehmen)
    Höherspielen wird iunter Bemerkungen im Spielbericht eingetragen, wenn der Spieler eingesetzt wurde
    Jugendspieler erhalten keinen Eintrag i, unbegrenztes Höherspielen ab dem 3. Spieltag möglich – dies wird im Spielbericht unter Bemerkungen eingetragen (nicht im Spielerpass!)

Verspätung einer Mannschaft

Wartezeiten und Fristen

    eine Mannschaft gilt als nicht angetreten, wenn sie spätestens 15 Minuten nach der im Spielplan oder der Einladung angegebenen Anfangszeit mit weniger als sechs spielbereiten Spielern anwesend ist
    eine Mannschaft eines zweiten Spiels gilt als nicht angetreten, wenn sie 30 Minuten nach dem Ende des ersten Spiels mit weniger als sechs spielbereiten Spielern anwesend ist; jedoch frühestens 75 Minuten nach der laut Spielplan oder Einladung offiziellen Anfangszeit des ersten Spiels
    eine Mannschaft eines dritten Spiels gilt als nicht angetreten, wenn sie 30 Minuten nach dem Ende des zweiten Spiels mit weniger als sechs spielbereiten Spielern anwesend ist; jedoch frühestens 150 Minuten nach der laut Spielplan oder Einladung offiziellen Anfangszeit des ersten Spiels
    verspätet sich eine Mannschaft und ist deren Gegner bereit, das Spiel dennoch am selben Tag auszutragen, so ist dieses von beiden Mannschaften vor Spielbeginn im Spielberichtsbogen zu vermerken

Nichtantreten / Unvollständigkeit einer Mannschaft

    tritt eine Mannschaft zu einem Pflichtspiel nicht an, so hat der 1. Schiedsrichter die Spielberechtigung von sechs anwesenden, in der Mannschaftsliste eingetragenen Spielern der anderen Mannschaft festzustellen, das Nichtantreten im Spielberichtsbogen zu vermerken und auf Spielverlust für die nicht angetretene Mannschaft zu erkennen (Satzwertung 0:3, 0:25, 0:25, 0:25). Die Entscheidung ist vom Staffelleiter aufzuheben, wenn das Nichtantreten nachweislich unverschuldet war
    eine Mannschaft, die sich nicht rechtzeitig auf dem Spielfeld einfindet (siehe Wartezeiten und Fristen) oder sich (trotz Aufforderung und ohne triftigen Grund) weigert, (weiter) zu spielen, verliert das Spiel (0:3; 0:25, 0:25, 0:25) – bei vorausgegangenen ausgespielten Punkten bleiben diese bei der sich weigernden Mannschaft erhalten, die andere Mannschaft erhält die zum Satz- und Spielgewinn fehlenden Punkte zuerkannt
    eine durch Sanktion(en) (Hinausstellung / Disqualifikation) oder Verletzung(en) unvollständige Mannschaft verliert entsprechend den Satz oder das Spiel – die Punkte der unvollständigen Mannschaft bleiben erhalten, die andere Mannschaft erhält die zum Satz- und Spielgewinn fehlenden Punkte zuerkannt

Spielunterbrechungen

    Beeinträchtigung durch äußere Umstände (Lichtausfall, Ball im Feld) führt zu Doppelfehler und Wiederholung des Spielzugs
    Bei längeren Spielunterbrechungen (Netz reißt o.ä.) werden durch Schiedsrichter und Ausrichter nach Möglichkeit die normalen Bedingungen wiederhergestellt
    Bei einer Unterbrechung von weniger als 4 Stunden:
        Spiel kann auf demselben Spielfeld fortgesetzt werden: Es werden die identischen Spieler, Positionen und Punkte beibehalten
        Spiel muss auf einem anderen Spielfeld fortgesetzt werden: Der laufenden Satz wird mit identischer Startaufstellung wiederholt (Punktestand 0:0), alle bereits gespielten Sätze bleiben bestehen
    Bei einer Unterbrechung von mehr als 4 Stunden wird das Spiel abgebrochen und neu angesetzt

Proteste

    Müssen vom Mannschafts- bzw. Spielkapitän beim 1. SR zum Zeitpunkt des Protestgrundes angekündigt werden
    Werden im Spielberichtsbogen unter Bemerkungen eingetragen
    Vor dem Spiel: Protest gegen Schiedsgericht, Mängel an Spielanlage oder Spielhalle – muss vor dem Spiel in den Spielberichtsbogen eingetragen und vom Mannschaftskapitän unterschrieben werden, besteht keine Gefährdung für die Spieler, wird das Spiel durchgeführt
    Während des Spiels: Regelauslegung des Schiedsgerichts wird nicht akzeptiert – muss während des Spiels direkt nach der jeweiligen Situation angekündigt und nach dem Spiel in den Spielberichtsbogen eingetragen und unterschrieben werden
    Nach Abschluss des Spielberichtsbogens (Unterschrift der Kapitäne und Schiedsrichter) darf kein Protest mehr eingetragen werden

Verletzungen

    Verletzt sich ein Spieler während eines Spielzugs, wird dieser sofort durch das Schiedsgericht unterbrochen (Doppelfehler)
    Bei schweren Verletzungen wird eine Erstversorgung auf dem Spielfeld ermöglicht
    Ein verletzter Spieler muss regulär gewechselt werden
    Ist kein regulärer Wechsel möglich, kann der Spieler ausnahmsweise gewechselt werden (nicht gegen den Libero!)
    Ist kein ausnahmsweiser Wechsel möglich, erhält der Spieler eine Wiederherstellungszeit von 3 Minuten (nur einmal pro Spieler im ganzen Spiel)
    Ist der Spieler dann nicht wieder spielfähig, wird die Mannschaft als unvollständig erklärt und der Satz geht verloren (die bisher gespielten Sätze werden gewertet wie gespielt, im aktuellen Satz erhält sie gegnerische Mannschaft die erforderlichen Punkte zum Satzgewinn)

5.  Ausrüstung und Auftreten eines Volleyball-Schiedsrichters 

 Korrekte Schiedsrichterkleidung

    weißes Poloshirt
    blaue Stoffhose
    weißer Gürtel
    weiße Socken
    Sportschuhe mit Hauptfarbe weiß

Ausrüstung eines Volleyballschiedsrichters

    Pfeife mit Pfeifenband
    Gelbe und rote Karte
    Uhr mit Sekundenzeiger
    Wählmünze
    Aktuelles Regelwerk

Normalerweise beim Ausrichter

    Zollstock 
    Ballmanometer

Auftreten eines Volleyballschiedsrichters

    Selbstsicher, aber nicht arrogant
    Regelkundig, aber nicht überheblich
    Neutral, aber nicht abweisend
    Geschlossenes Auftreten von 1. u. 2. Schiedsrichter und Linienrichtern (Teamwork) 
    Gepflegtes Äußeres
    Nüchtern und in guter physischer Verfassung
    Pünktlich (mind. 30 bis 45 Minuten vor Spielbeginn)


6.  Der Libero 

Der Libero ist ein spezialisierter Defensivspieler.
Benennung des/der Liberos

    Es dürfen maximal zwei Liberos pro Mannschaft benannt werden
    Alle Liberos müssen vor dem Spiel in der Mannschaftsliste (oben) sowie in den dafür vorgesehenen Zeilen (unten) vermerkt werden
    Auf dem Spielfeld darf nur ein Libero zur gleichen Zeit agieren
    Libero darf seit der Saison 2022/23 auch Mannschafts-/Spielkapitän sein

Kleidung

    Trikot(s) in deutlich anderer Farbe die Trikots der Mannschaft
    Trikotnummern erforderlich

Aktionen mit Libero

    Libero darf auf jeder Hinterfeldposition (I, V, VI) eingetauscht werden
    Libero darf nur als Hinterspieler agieren, aber keinen Angriffsschlag ausführen, wenn sich der Ball im Moment der Berührung vollständig oberhalb der Netzoberkante befindet (egal aus welcher Zone)
    Libero darf nicht aufschlagen, nicht blocken und keinen Blockversuch ausführen
    Nach oberem Zuspiel aus der Vorderzone (Stand- oder Absprungort der Füße) durch den Libero darf darauffolgender Angriffsschlag nicht vollständig oberhalb der Netzoberkante ausgeführt werden

Austausch von Spielern:

    Die Libero-Austauschaktionen zählen nicht als normale Wechsel und sind in ihrer Anzahl unbeschränkt
    Zwischen 2 Libero-Austauschaktionen muss mindestens ein vollendeter Spielzug liegen (Ausnahme: Rotation des Liberos aufgrund einer Bestrafung auf Position 4 oder Verletzung während des Spielzugs)
    Alle anderen Libero-Austauschaktionen dürfen nur stattfinden, wenn der Ball aus dem Spiel ist und der 1. SR noch nicht zur Bewilligung des Aufschlags gepfiffen hat
    Die Libero-Austauschaktion darf nur in der Libero-Austauschzone (zwischen verlängerter Angriffs- und Grundlinie) erfolgen
    Jeder Hinterfeldspieler kann durch jeden des oder der beiden Libero(s) ausgetauscht werden
    Der auf dem Feld stehende Libero kann nur gegen seinen Austauschspieler oder gegen den anderen Libero (sofern vorhanden) getauscht werden
    Tauscht ein auf dem Feld stehender Libero mit einem falschen Spieler ist wie folgt zu verfahren: Wird die Aktion vor der Bewilligung des nächsten Aufschlags bemerkt, muss dies korrigiert und die Mannschaft wegen Verzögerung sanktioniert werden. Wird die Aktion erst danach bemerkt, sind die Konsequenzen die eines unrechtmäßigen Wechsels

Beachte

    Zu Satzbeginn darf der Libero erst nach Überprüfung der Aufstellung (durch den 2. SR) mit dem Austauschspieler der Startaufstellung wechseln
    Erfolgt der Tausch nach Bewilligung, aber vor Ausführung des Aufschlags, erfolgt nach dem Spielzug eine mündliche Ermahnung, welche im Wiederholungsfall eine Sanktion wegen Verzögerung zur Folge hat (in diesem Fall wird der Spielzug sofort nach dem Aufschlag unterbrochen)
    Sobald ein Libero eingesetzt wurde, muss dieser auf dem Spielberichtsbogen angegeben werden – Achtung: bei zwei Liberos jeden entsprechend vermerken

Benennung eines neuen Liberos

    Libero kann vom Trainer (oder Mannschaftskapitän, wenn Trainer abwesend) aus jedem Grund für spielunfähig erklärt werden, auch wenn er sich zu diesem Zeitpunkt nicht auf dem Spielfeld befindet
    Unabhängig vom Moment der Spielunfähigkeit kann ein neuer Libero zu jedem Zeitpunkt im Spiel neubenannt werden
    Wird ein Libero für spielunfähig erklärt / ist ein Libero spielunfähig, so darf er für den Rest des Spiels nicht mehr eingesetzt werden
    Der neubenannte Libero muss sich ein von der Farbe der übrigen Trikots der Mannschaft unterscheidendes Trikot überziehen
    Libero kann auch nach Hinausstellung oder Disqualifikation für spielunfähig erklärt werden

Mannschaft mit 1 Libero

    Jeder Spieler, der zum Zeitpunkt der Libero-Neubenennung nicht in der Rotationsreihenfolge vermerkt ist, darf als neuer Libero benannt werden. Eine Libero-Neubenennung muss nicht zum Zeitpunkt der Spielunfähigkeit des bisherigen Liberos erfolgen, sondern kann zu jedem beliebigem Zeitpunkt nachgeholt werden – Mitteilung durch Trainer (ggf. Mannschaftskapitän, falls Trainer nicht anwesend) an 2. SR
    Sollte der neubenannte Libero spielunfähig werden (durch Verletzung) oder für spielunfähig erklärt werden, sind weitere Neubenennungen zulässig. Im Fall einer Verletzung (also: spielunfähig werden) darf der Libero auch direkt auf dem Feld durch einen neubenannten Libero ersetzt werden
    Wird der Mannschaftskapitän als neuen Libero benannt, muss ein neuer Mannschaftskapitän benannt werden

Mannschaft mit 2 Liberos

    Wenn ein Team auf dem Spielberichtsbogen 2 Liberos eingetragen hat und einer spielunfähig wird, verbleibt der andere Libero als einziger Libero. Wird auch dieser für spielunfähig erklärt, ist eine Neubenennung möglich


7. Sanktionen

 Sanktionen

Beachte:

    Alle Verwarnungen & Sanktionen wirken für das gesamte Spiel
    Verwarnungen & Sanktionen für persönliches Fehlverhalten sind unabhängig von Mannschaftsverwarnungen & -sanktionen (Verzögerungen)
    Alle Sanktionen werden den Regeln entsprechend im Spielberichtsbogen im Sanktionsfeld eingetragen

Persönliches Fehlverhalten

Verwarnung (Gelbe Karte)

    bei geringfügiger Unkorrektheit
    keine Sanktion; Vorbeugung durch Schiedsrichter, ohne direkte Auswirkung
    (Achtung: maximal eine Verwarnung pro Mannschaft in einem Spiel)

Bestrafung (ROTE KARTE)

    bei unangemessenen Verhalten
    führt zu Spielzugverlust (Punktgewinn für den Gegner)

Hinausstellung (GELBE + ROTE KARTE zusammen)

    beim 2. unangemessenen Verhalten oder 1. ausfallenden Verhalten
    führt zu dem Verlassen der Spielfläche für den Rest des Satzes (kein Spielzugverlust)

Disqualifikation (GELBE + ROTE KARTE getrennt)

    bei dem 3. unangemessenen Verhalten/
    bei dem 2. ausfallenden Verhalten/
    bei dem 1. aggressiven/bedrohenden Verhalten
    führt zu dem Verlassen des Wettkampfbereichs für den Rest des Spiels (kein Spielzugverlust)

Verzögerungen/ Verwarnung & Sanktion für die Mannschaft

Verwarnung wegen Verzögerung (GELBE KARTE gegen das Handgelenk)

    bei der ersten Verzögerung durch ein oder mehrere Mitglieder einer Mannschaft
    führt zu keiner direkten Auswirkung – aber Eintragung im Spielberichtsbogen

Bestrafung wegen Verzögerung (ROTE KARTE gegen das Handgelenk)

    bei jeder weiteren Verzögerung durch ein oder mehrere Mitglieder dieser Mannschaft
    führt zu Spielzugverlust (Punktgewinn für den Gegner)



8. Spielberichtsbogen

 Nach der Auslosung

Schreiber erhält direkt nach der Auslosung folgende Informationen vom 1. Schiedsrichter:

    Die Mannschaft, die zuerst aufschlägt
    Die Spielfeldseite jeder Mannschaft im ersten Satz

Der Schreiber füllt nun die entsprechenden Informationen aus: 

    Spielbegegnung: Kreise mit A oder B ausfüllen (je nach dem, welche Mannschaft links vom Schreiber (A) oder rechts (B) beginnt)
    Im Feld Satz 1: Kürzel der Mannschaften neben "A" oder "B" eintragen
    Entsprechend S (Service = Aufschlag) oder R (Reception = Annahme) ankreuzen 
    Im ersten Feld der 1. Rotationsreihenfolge (Position I) die Hochzahl 1 bei der Mannschaft abstreichen, die den ersten Aufschlag ausführt
    Im ersten Feld der 1. Rotationsreihenfolge (Position I) das Käschen mit der Hochzahl 1 mit einem großen X bei der Mannschaft versehen, die den ersten Aufschlag annimmt

Diese 5 Punkte wiederholt der Schreiber jeweils vor jedem Satz.

Vor dem ersten Satz bittet der erste Schiedsrichter die Mannschaften (Pfiff), das Feld zu betreten. In den folgenden Sätzen übernimmt dies der 2. Schiedsrichter.
Nachdem die Mannschaften das Feld betreten haben, teilen die Spielkapitäne bzw. Trainer beider Mannschaften dem 2. Schiedsrichter/Schreiber die Startaufstellungen mit. Danach genehmigt der 2. Schiedsrichter einen etwaigen Liberoaustausch.

Der Schreiber trägt die Trikotnummern unter den entsprechenden Positionen I bis VI ein und überprüft, ob jede Trikotnummer in der Mannschaftsliste aufgeführt ist.
Während des Spiels

Der Schreiber geht wie folgt vor:

    Im oberen Teil des Feldes "Satz 1": Eintragung der Anfangszeit
    Vor jedem Aufschlag: Überprüfung des Aufschlagspielers (Trikotnummer) – bei falschem Aufschlagspieler wird direkt nach dem Aufschlag der 2. SR informiert
    Nach der Kontrolle des Aufschlagspielers wird die niedrigste Hochzahl in entsprechender Spalte abgestrichen – dieses bedeutet, dass dieser Spieler aktuell am Aufschlag ist
    Erzielt die aufschlagende Mannschaft einen Punkt, so wird in der Spalte "Punkte" der erste Punkt abgestrichen, bei einem weiteren Punkt der nächste noch nicht abgestrichene usw.
    Verliert die Mannschaft das Aufschlagrecht, so wird in dieses Kästchen der aktuelle Punktestand eingetragen
    Der Schreiber wechselt nun in den Bereich der anderen Mannschaft und streicht zunächst den ersten Punkt in der Spalte "Punkte" ab
    Das Kästchen für den Spieler auf Position I ist bereits mit einem großen X durchgestrichen, da diese Mannschaft nun rotieren muss
    Der Schreiber kontrolliert den Aufschlagspieler und streicht die niedrigste Hochzahl ab
    Für jeden gewonnenen Spielzug streicht der Schreiber die jeweiligen Punkte in der Punkte-Spalte ab
    Verliert die Mannschaft das Aufschlagrecht, wird die aktuelle Punktzahl in das Kästchen mit der abgestrichenen Hochzahl eingetragen
    Bis zum Satzende wiederholt sich dieses Schema: aktuelle Punktzahl der Mannschaft in das Kästchen mit der abgestrichenen Hochzahl des entsprechenden Aufschlagspielers eintragen, den nächsten Punkt für die nun aufschlagende Mannschaft abstreichen, die kleinste Hochzahl in der Spalte des aktuellen Aufschlagspielers abstreichen – für jeden in Folge erzielten Punkt einer Mannschaft wird nach diesem Schritt nur der nächste Punkt abgestrichen (solange, bis diese das Aufschlagrecht verliert)
    Die Sätze 1 bis 4 enden, sobald eine Mannschaft 25 Punkte mit einem Vorsprung von mindestens 2 Punkten erzielt hat. Der 5. Satz (Entscheidungssatz) endet bei 15 Punkten mit einem Vorsprung von mindestens 2 Punkten. Sollte der zum Satzgewinn erforderliche Punkt beim Aufschlagsrecht der gegnerischen Mannschaft erzielt werden, wird nur der Punkt in der Punkte-Spalte abgestrichen und die Punktezahl in das Kästchen mit der niedrigsten Hochzahl des Aufschlagspielers, der als nächstes aufgeschlagen hätte, eingetragen – die kleine Hochzahl wird in diesem Fall nicht abgestrichen
    Im oberen Teil des Feldes "Satz 1" wird die Uhrzeit das Satzendes eingetragen
    Alle nicht erzielten Punkte werden in den Spalten "Punkte" senkrecht durchgestrichen (entwertet)
    Die endgültig erreichten Punkte im Satz, welche in die Kästchen unterhalb der Rotationsfolge eingetragen wurden, werden eingekreist

Der Entscheidungssatz

    Der Schreiber trägt nach der Auslosung die Mannschaftskürzel entsprechend in die mit "A" oder "B" gekennzeichneten Felder ein
    Es werden aktuell nur die ersten beiden Bereiche (vor dem Seitenwechsel) genutzt - die Startaufstellung der linken Mannschaft wird zusätzlich in den 3. Bereich eingetragen
    Die Spielfeldseiten werden gewechselt, sobald eine Mannschaft den 8. Punkt erreicht hat
    Wird vor dem 8. Punkt ein Spielerwechsel der linken Mannschaft durchgeführt, notiert der Schreiber die Trikotnummer des Wechselspielers auch im 3. Bereich, ohne dort den Punktestand einzutragen - dieses geschieht nur im 1. Bereich. Wird der Spieler nach dem Seitenwechsel wieder gewechselt, ist der Spielstand nur im unteren Feld des 3. Bereiches einzutragen
    Nach dem Seitenwechsel werden im 1. Bereich keine weiteren Eintragungen vorgenommen
    Der aktuelle Punktestand der Mannschaft, die nun auf die rechte Seite wechselt, wird im oberen rechten Bereich eingetragen
    Die Eintragungen der Mannschaft werden im rechten Bereich fortgeführt (Feld "Punkte bei Seitenwechsel")
    Der Satz endet, sobald die eine Mannschaft midestens 15 Punkte mit 2 Punkten Abstand erzielt hat

Spielerwechsel

Spielerwechsel werden in den Feldern unterhalb der bereits eingetragenen Spielers der Startaufstellung vermerkt

Spielerwechsel eines Spielers aus der Startaufstellung

    Beim Betreten der Wechselzone überprüft der Schreiber, ob
        die Trikotnummer in der Mannschaftsliste aufgeführt ist und
        der einzuwechselnde Spieler in diesem Satz an keinem anderen Wechsel beteilt gewesen ist
    Er hebt einen Arm, um dem 2. SR zu signalisieren, dass der Wechsel regulär ist (jetzt gestattet der 2. SR den Wechsel)
    Er notiert die Trikotnummer des einwechselnden Spielers in das Feld unter dem Spieler der Startaufstellung, der das Feld verlässt
    Im Feld darunter trägt er den aktuellen Spielstand aus Sicht der wechselnden Mannschaft ein
    Danach hebt der Schreiber beide Arme, um dem 2. SR zu signalisieren, dass die Eintragungen abgeschlossen sind
    Bei mehreren Spielerwechseln wird das Verfahren je Spielerwechsel durchgeführt

Spielerwechsel eines bereits eingewechselten Spielers

        Wird ein eingewechselter Spieler wieder ausgewechselt, so darf das nur mit dem Spieler, gegen den er vorher eingewechselt wurde, erfolgen (Ausnahme: Ausnahmsweiser Wechsel)
        Nach Überprüfung und Signalisieren zum 2. SR, dass der Wechsel regulär (Heben eines Arms) ist, kreist der Schreiber die Trikotnummer des auswechselnden Spielers ein (unteres Feld) und notiert den Spielstand
        Danach hebt der Schreiber beide Arme, um dem 2. SR zu signalisieren, dass die Eintragungen abgeschlossen sind

Wird ein verletzter Spieler ausnahmsweise gewechselt oder ein Libero neu benannt, ist dies unter "Bemerkungen" einzutragen.
Auszeiten

Auszeitenwerden in den dafür vorgesehen Bereich unterhalb der Spalte "Punkte" eingetragen

    Für die erste Auszeit einer Mannschaft im Satz wird im oberen Feld der aktuelle Spielstand aus Sicht der beantragenden Mannschaft eingetragen, eine etwaige 2. Auszeit in dem Feld darunter
    Die zweite Auszeit pro Satz einer Mannschaft teilt der 2. Schiedsrichter dem 1. Schiedsrichter sowie dem Trainer durch das entsprechende Handzeichen mit

Eintragungen im Sanktionsfeld

Unberechtigte Anträge

Der jeweils erste unberechtigte Antrag ohne Verzögerung wird durch Ankreuzen der Felder A oder B (jeweilige Mannschaft) im Bereich "Unberechtigter Antrag" eingetragen.

Sanktionen für Fehlverhalten

Werden im linken Bereich (Spalten Verwarnung, Bestrafung, Hinausstellung, Disqualifikation) des Sanktionsfeldes wie folgt vermerkt:

    In der Spalte der jeweiligen Sanktion wird die Trikotnummer des Spielers oder das Kürzel des Offiziellen eingetragen, gegen den die Sanktion ausgesprochen wird:

    T: Trainer

    TA1: 1. Trainerassistent (Co-Trainer)

    TA2: 2. Trainerassistent (Co-Trainer)

    P: Physiotherapheut

    A: Arzt

    In der Spalte "Spielstand" wird der Spielstand aus Sicht der sanktionierten Mannschaft eingetragen

    In der Spalte "Satz" wird eingetragen, in welchem Satz die Sanktion ausgesprochen wurde (also 1, 2, 3, 4 oder 5)

    In der Spalte "A oder B" wird die Mannschaft des sanktionierten Mannschaftsmitgliedes benannt

Sanktionen für Verzögerungen

Werden im linken Bereich (Spalten Verwarnung, Bestrafung) des Sanktionsfeldes vermerkt:

    Die erste Stufe (Verwarnung wegen Verzögerung) wird mit einem V in der Spalte "Verwarnung" eingetragen

    Die zweite Stufe (Bestrafung wegen Verzögerung) wird mit einem V in der Spalte "Bestrafung" eingetragen

    In der Spalte "A oder B" wird die Mannschaft gekennzeichnet, die sanktioniert wird

    In der Spalte "Satz" wird eingetragen, in welchem Satz die Sanktion ausgesprochen wurde (also 1, 2, 3, 4 oder 5)

    In der Spalte "Spielstand" wird der Spielstand aus Sicht der sanktionierten Mannschaft eingetragen

 

Beachte

Nach Bestrafungen für Fehlverhalten und Bestrafungen für Verzögerungen erhält der Gegner das Aufschlagrecht sowie einen Punkt. Dieser Punkt wird in der entsprechenden Spalte "Punkte" wie üblich abgestrichen und zusätzlich umgekreist!
Nach dem Spiel

Das Feld "Ergebnisse" wird nach jedem Satz sowie nach dem Spiel vom Schreiber aktualisiert:

    In die Felder "Mannschaft" wird das Mannschaftskürzel der entsprechend seiner Zuordnung ("A" oder "B") eingetragen

    In die Felder der Spalte "Dauer" wird die Satzdauer der jeweiligen Sätze in Minuten vermerkt

    In die Felder der Spalte "Punkte" werden die Punkte eingetragen, die jede Mannschaft in diesem Satz erzielt hat

    In die Felder der Spalte "W" wird bei einem Satzgewinn eine 1, bei Satzverlust eine 0 geschrieben

    In die Felder der Spalte "S" trägt der Schreiber die Anzahl der Spielerwechsel der jeweiligen Teams im Satz ein (ausnahmsweise Wechsel, die nicht zu den 6 erlaubten Wechseln zählen, werden hier trotzdem hinzugezählt)

    In die Felder der Spalte "T" werden die Anzahl der in Anspruch genommenen Auszeiten pro Team festgehalten

    Sind für alle gespielten Sätze die entsprechenden Felder vollständig ausgefüllt, addiert der Schreiber in der entsprechenden Zeile die jeweiligen Einträge in den Spalten (6. Zeile)

    Die Zeiten für Spielbeginn und Spielende werden eingetragen und die Gesamtspieldauer errechnet (Achtung: Die Gesamtspieldauer beinhaltet die Satzpausen von jeweils 3 Minuten, während die Addition der Minutenangaben in der Spalte "Dauer" die Spieldauer OHNE die Satzpausen wiedergibt)

    In der letzten Zeile wird der Sieger sowie das Spielergebnis vermerkt

 

Im Falle von angekündigten Protesten werden diese unter Bemerkungen eingetragen (der Mannschaftskapitän der betreffenden Mannschaft diktiert den Protest, der 1. SR genehmigt die Eintragung)

Im Bestätigungsfeld werden abschließend die Unterschriften in folgender Reihenfolge geleistet:

    Schreiber (ggf. Schreiberassistent)

    Mannschaftskapitäne

    2. Schiedsrichter

    1. Schiedsrichter
`;

/* ============================================================
   3. Ab hier musst du nichts mehr ändern
   ============================================================ */
const MODELL = "gemini-3.6-flash";
const URL =
  "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";

const SYSTEM =
  REGELTEXT.trim() +
  `

Du beantwortest Multiple-Choice-Fragen ausschliesslich auf Basis des obenstehenden Textes.

Antworte ausschliesslich mit einem JSON-Objekt, ohne Markdown, ohne Backticks, in genau diesem Format:
{"antwort":"<Buchstabe oder Nummer>","begruendung":"<max 20 Woerter>","gedeckt":<true|false>}

Setze gedeckt auf true, wenn die Antwort direkt aus dem Text hervorgeht.
Setze gedeckt auf false, wenn du sie aus Allgemeinwissen erschliesst oder raetst.
Rate niemals, ohne gedeckt auf false zu setzen.`;

function leiste(inhalt, farbe) {
  document.getElementById("kiantwort")?.remove();
  const d = document.createElement("div");
  d.id = "kiantwort";
  d.style.cssText = `
    position:fixed; left:0; right:0; bottom:0; z-index:2147483647;
    background:#1b1b1b; color:#fff; padding:16px 20px;
    font:16px/1.45 system-ui,sans-serif; box-shadow:0 -2px 12px rgba(0,0,0,.35);
    border-top:4px solid ${farbe}; max-height:45vh; overflow:auto;`;
  d.innerHTML = inhalt;
  const x = document.createElement("button");
  x.textContent = "Schliessen";
  x.style.cssText =
    "margin-top:12px;padding:8px 14px;font:inherit;border:0;border-radius:4px;background:#444;color:#fff;";
  x.onclick = () => d.remove();
  d.appendChild(x);
  document.body.appendChild(d);
  return d;
}

async function los() {
  const wurzel = SEL_CONTAINER
    ? document.querySelector(SEL_CONTAINER)
    : document;
  if (!wurzel) return leiste("Container nicht gefunden.", "#c0392b");

  const frageEl = wurzel.querySelector(SEL_FRAGE);
  const optEls = [...wurzel.querySelectorAll(SEL_OPTIONEN)];
  if (!frageEl || !optEls.length) {
    return leiste(
      "Frage oder Optionen nicht gefunden. Selektoren pruefen.",
      "#c0392b",
    );
  }

  const frage = frageEl.innerText.trim();
  const optionen = optEls
    .map((e, i) => String.fromCharCode(65 + i) + ") " + e.innerText.trim())
    .join("\n");

  leiste("Frage wird geprueft &hellip;", "#888");

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.__KEY,
      },
      body: JSON.stringify({
        model: MODELL,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: "Frage: " + frage + "\n" + optionen },
        ],
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      return leiste(
        "HTTP " + res.status + "<br><small>" + t.slice(0, 300) + "</small>",
        "#c0392b",
      );
    }

    const daten = await res.json();
    const a = JSON.parse(daten.choices[0].message.content);

    leiste(
      '<div style="font-size:30px;font-weight:600;margin-bottom:6px">' +
        a.antwort +
        "</div>" +
        '<div style="margin-bottom:8px">' +
        a.begruendung +
        "</div>" +
        '<div style="opacity:.7;font-size:14px">' +
        (a.gedeckt
          ? "Aus dem Regeltext belegt"
          : "Nicht im Regeltext — geraten") +
        "</div>",
      a.gedeckt ? "#27ae60" : "#e67e22",
    );
  } catch (e) {
    leiste("Fehler: " + e.message, "#c0392b");
  }
}

los();
