# Anleitung: Auf GitHub hochladen & online stellen

Dieses Verzeichnis ist ein **fertiges Git-Repository**. Du musst es nur noch zu GitHub hochladen. Zwei Wege – wähle einen.

---

## Weg A — Ohne Kommandozeile (am einfachsten)

1. Auf [github.com](https://github.com) einloggen → oben rechts **+** → **New repository**.
2. Namen vergeben, z. B. `ptx-rechner`. **Nicht** „Add README" ankreuzen (ist schon dabei). → **Create repository**.
3. Auf der nächsten Seite den Link **„uploading an existing file"** anklicken.
4. **Alle** Dateien aus diesem Ordner per Drag & Drop ins Browserfenster ziehen:
   `index.html`, `PtX_Rechner_v1_30.html`, `README.md`, `CHANGELOG.md`, `LICENSE`, `.gitignore`, `.nojekyll`
   *(Tipp: Falls die versteckten Dateien `.gitignore`/`.nojekyll` im Datei-Dialog nicht auftauchen, sind sie unkritisch – `.nojekyll` kann auch später direkt auf GitHub über „Add file → Create new file" mit dem Namen `.nojekyll` und leerem Inhalt angelegt werden.)*
5. Unten **Commit changes**.

→ Weiter bei **„Online stellen (GitHub Pages)"** unten.

---

## Weg B — Mit Git (Kommandozeile)

Im entpackten Ordner:

```bash
git init
git add -A
git commit -m "PtX-Systemrechner v1.30"
git branch -M main
git remote add origin https://github.com/USERNAME/ptx-rechner.git
git push -u origin main
```

`USERNAME` durch deinen GitHub-Namen ersetzen. Das Repo `ptx-rechner` muss vorher auf GitHub leer angelegt sein (New repository, ohne README).

---

## Online stellen (GitHub Pages)

1. Im Repository auf **Settings** → links **Pages**.
2. Unter **Build and deployment** → **Source**: „Deploy from a branch".
3. **Branch**: `main`, Ordner `/ (root)` → **Save**.
4. Nach 1–2 Minuten erscheint oben die öffentliche Adresse:
   `https://USERNAME.github.io/ptx-rechner/`

Da die Datei `index.html` heißt, wird der Rechner automatisch als Startseite ausgeliefert. Fertig.

---

## Danach

- In `README.md` die beiden Stellen `USERNAME` durch deinen GitHub-Namen ersetzen, damit der Link in der Projektbeschreibung stimmt.
- Neue Versionen: einfach die neue `PtX_Rechner_vX_XX.html` hinzufügen, als `index.html` kopieren, `CHANGELOG.md` ergänzen, committen/pushen.
