# Quincaillerie Le Combattant

Site vitrine d'une page pour la **Quincaillerie Le Combattant**, quartier Poola à
Nkongsamba (Cameroun). Il présente les rayons de la boutique, les horaires
d'ouverture et les coordonnées. Aucune vente en ligne, aucun formulaire.

Le design reprend les couleurs de l'enseigne physique du magasin (rouge, bleu
marine, or) avec un bandeau façon panneau d'enseigne en haut de page.

## Contenu

| Fichier      | Rôle                                                        |
| ------------ | ------------------------------------------------------------ |
| `index.html` | Structure et contenu de la page                               |
| `styles.css` | Mise en forme, palette, typographie                           |
| `script.js`  | Met à jour l'année affichée dans le pied de page              |

Aucune dépendance ni étape de build : les polices *Alfa Slab One* et *Barlow*
sont chargées depuis Google Fonts, le reste est du HTML, CSS et JavaScript natifs.

## Lancer en local

Ouvrez simplement `index.html` dans un navigateur, ou servez le dossier :

```sh
python3 -m http.server 8000
```

Puis rendez-vous sur <http://localhost:8000>.

## Publier avec GitHub Pages

Dans le dépôt GitHub : **Settings → Pages → Source : Deploy from a branch**,
branche `main`, dossier `/ (root)`. Le site est ensuite servi à l'adresse
`https://<utilisateur>.github.io/<depot>/`.

## Modifier les informations

- **Horaires** : affichés dans la section « Heures d'ouverture » d'`index.html`.
- **Téléphones et e-mail** : présents dans l'en-tête, le panneau d'enseigne, la
  section contact et le pied de page d'`index.html`. Les liens `tel:` utilisent
  le format international sans espaces (`tel:+237696053699`).
- **Rayons** : les descriptions d'articles sont indicatives ; adaptez-les à ce que
  la boutique tient réellement en stock.
- **Couleurs** : toutes définies comme variables CSS en haut de `styles.css`
  (bloc `:root`).
