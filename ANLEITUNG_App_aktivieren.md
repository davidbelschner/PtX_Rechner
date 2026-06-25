# App-Installation aktivieren — Dateien hochladen

Diese 6 Dateien machen aus deiner Seite eine **installierbare App** (Icon auf Laptop & Handy, Offline-Betrieb).

## Was du tun musst

1. Geh zu deinem Repository auf GitHub (`PtX_Rechner`).
2. **„Add file"** (Datei hinzufügen) → **„Upload files"** (Dateien hochladen).
3. Diese Dateien aus dem Ordner ins Browserfenster ziehen:
   - `index.html`  ← **ersetzt die alte** (enthält jetzt den App-Code)
   - `PtX_Rechner_v1_30.html`  ← ebenfalls aktualisiert
   - `manifest.json`  ← **neu**
   - `service-worker.js`  ← **neu**
   - `icon-192.png`  ← **neu** (App-Icon)
   - `icon-512.png`  ← **neu** (App-Icon)
4. Unten **„Commit changes"**.

GitHub fragt beim Hochladen, ob die bestehenden Dateien (`index.html`, `PtX_Rechner_v1_30.html`) überschrieben werden sollen — **ja**, das ist gewollt.

5. Nach 1–2 Minuten baut GitHub Pages neu (Reiter **Aktionen** → grüner Haken).

## Danach: App installieren

**Laptop (Chrome / Edge):**
- Seite öffnen: `https://davidbelschner.github.io/PtX_Rechner/`
- Rechts in der Adressleiste erscheint ein **Installations-Symbol** (Bildschirm mit Pfeil) → anklicken → **Installieren**.
- Die App liegt dann im Startmenü und öffnet in eigenem Fenster ohne Browser-Leiste.

**Handy (Android Chrome):**
- Seite öffnen → unten/oben kommt automatisch **„App installieren"** bzw. Menü ⋮ → **„App installieren"**.

**Handy (iPhone Safari):**
- Seite öffnen → **Teilen-Symbol** (Quadrat mit Pfeil) → **„Zum Home-Bildschirm"**.

Nach der Installation funktioniert die App auch **offline** (im Flugmodus), weil der Service Worker die Dateien lokal speichert. Nur der optionale Wetterabruf (Open-Meteo) braucht weiterhin Internet.

## Wichtig bei künftigen Updates

Wenn du später eine neue Rechner-Version hochlädst, in `service-worker.js` die Zeile
```
const CACHE = 'ptx-rechner-v1-30';
```
auf eine neue Nummer ändern (z. B. `v1-31`). Sonst behalten installierte Apps die alte Version im Cache.
