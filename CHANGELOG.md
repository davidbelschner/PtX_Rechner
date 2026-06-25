# Changelog

Alle nennenswerten Änderungen am PtX-Systemrechner.

## v1.30
- **Jährliche Einsparung in t€/a:** Die jährliche Einsparung auf der Investitionsentscheidungs-Folie (PowerPoint Folie 7) und im HTML-Ausgabefenster wird nun in Tausend Euro pro Jahr (t€/a) dargestellt. Bei Werten über 999.999 t€/a (≥ 1 Mrd. €/a) erfolgt automatisch der Rückfall auf die Mio€/a-Darstellung. Negative Werte und Nullwerte werden korrekt formatiert.

## v1.29
- **Degradation neu strukturiert:** Die Stack-Degradation (%/10.000 h) ist nun dem Elektrolyse-Fenster zugeordnet, die Batterie-Degradation (%/100 Zyklen) dem Batterie-Fenster. Statt eines globalen Schalters gibt es jetzt zwei getrennte Aktiv-Schalter – je einer für Elektrolyse und Batterie.
- Migration: alte Projektdateien und Permalinks werden automatisch auf die neue Schalterlogik übertragen.
- Projektdatei-Name beim Speichern auf `PtX_Rechner_Projekt.json` geändert.

## v1.28 (intern)
- Folien-Neuordnung der PowerPoint: Technik → Wirtschaft → Zusammenfassung.
- Cashflow-Darstellung als Kombigrafik (Jahresbalken + kumulierte Linie + Break-even-Markierung).
- Sensitivitätsanalyse: korrekte Behandlung wirtschaftlicher Abschaltung der Elektrolyse (Lücke statt irreführender Null bei LCOH).

## v1.27 und früher
- Aufbau des PowerPoint-Exports (11 Folien, modusabhängig).
- Fünf Dispatch-Strategien, LCOH/LCOE-Dualmodus, VDI-2067-Annuität, NPV/IRR, CO₂-Bilanz.
- Bilinguale Oberfläche (DE/EN), Würzburg-Klimaprofil, Elektrolyseur-Presets.
