# PtX-Systemrechner

**Techno-ökonomischer Rechner für grünen Wasserstoff (LCOH) und Grünstrom (LCOE)**

Ein eigenständiges, vollständig browserbasiertes Simulations- und Wirtschaftlichkeitstool für Power-to-X-Systeme. Alle Berechnungen laufen lokal im Browser – keine Server, keine Datenübertragung, keine Installation.

[➜ **Rechner direkt im Browser öffnen**](https://USERNAME.github.io/ptx-rechner/)

> Ersetze `USERNAME` in der URL nach dem Hochladen durch deinen GitHub-Benutzernamen.

---

## Funktionsumfang

- **Stündliche Dispatch-Simulation** über 8.760 Stunden (ein volles Jahr) mit fünf Betriebsstrategien (A–E).
- **Zwei Betriebsmodi:** LCOH (Wasserstoff via Elektrolyse) und LCOE (Grünstrom aus PV/Wind/Batterie).
- **Komponenten:** Photovoltaik, Wind (On-/Offshore), Wasserkraft, Batteriespeicher, Elektrolyseur (AEL/PEM/AEM/SOEC), H₂-Speicher, Onsite-Lastgang.
- **Wirtschaftlichkeit:** VDI-2067-Annuität, NPV, IRR, Cashflow-Wasserfall, Amortisation, Sensitivitätsanalyse, Baseline-Vergleich gegen reinen Netzbezug.
- **Degradation:** getrennt schaltbar für Elektrolyse-Stack und Batterie.
- **CO₂-Bilanz** mit Äquivalenzdarstellung.
- **PowerPoint-Export** (11 Folien, modusabhängig, bankfähig) direkt aus dem Browser.
- **Standortprofile** (Würzburg-Referenz oder per Koordinaten via Open-Meteo).
- **Zweisprachig** Deutsch / Englisch.
- **Projekt speichern/laden** als JSON-Datei.

---

## Nutzung

### Online (empfohlen)
Über die GitHub-Pages-URL oben – nichts zu installieren.

### Lokal
1. Repository herunterladen (grüner **Code**-Button → **Download ZIP**) oder klonen:
   ```bash
   git clone https://github.com/USERNAME/ptx-rechner.git
   ```
2. Die Datei `index.html` (oder `PtX_Rechner_v1_30.html`) per Doppelklick im Browser öffnen.

Es wird **kein** Webserver benötigt – die Datei läuft direkt aus dem Dateisystem. Eine Internetverbindung ist nur optional nötig, falls Standortprofile per Koordinaten von Open-Meteo abgerufen werden sollen.

---

## Technik

- **Single-File-Architektur:** Die gesamte Anwendung steckt in einer einzigen HTML-Datei (~1,5 MB) inklusive aller Bibliotheken (Chart.js, PptxGenJS, Lucide, PapaParse als eingebettete Bundles). Kein Build-Schritt, keine Abhängigkeiten zur Laufzeit.
- **Datenschutz:** Alle Eingaben und Berechnungen bleiben im Browser. Es findet keine Übertragung an Dritte statt (Ausnahme: optionaler Open-Meteo-Wetterabruf auf ausdrückliche Nutzeraktion).

---

## Versionierung

Die jeweils aktuelle Version ist als `index.html` eingebunden und zusätzlich versioniert abgelegt (`PtX_Rechner_v1_30.html`). Siehe [CHANGELOG.md](CHANGELOG.md) für die Versionshistorie.

---

## Lizenz

Siehe [LICENSE](LICENSE).

---

*Entwickelt im Rahmen von faktor2 Engineering. Alle Ergebnisse sind Orientierungswerte auf Basis stündlicher Dispatch-Simulation und ersetzen keine ingenieurtechnische Fachplanung.*
