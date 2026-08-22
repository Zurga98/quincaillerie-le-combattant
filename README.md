# Quincaillerie Le Combattant

Site vitrine d'une page pour la **Quincaillerie Le Combattant**, quartier Poola à
Nkongsamba (Cameroun). Il présente les rayons de la boutique, les horaires
d'ouverture et les coordonnées. Aucune vente en ligne, aucun formulaire.

## Contenu

| Fichier      | Rôle                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `index.html` | Structure et contenu de la page                                       |
| `styles.css` | Mise en forme, palette (thème clair et sombre), typographie           |
| `script.js`  | Indicateur « ouvert / fermé » calculé sur l'heure du Cameroun         |

Aucune dépendance ni étape de build : les polices *Bevan* et *Archivo* sont
chargées depuis Google Fonts, le reste est du HTML, CSS et JavaScript natifs.

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

- **Horaires** : la table dans `index.html` (section « Heures d'ouverture ») **et**
  l'objet `HORAIRES` en haut de `script.js` doivent rester cohérents.
- **Téléphones et e-mail** : présents dans l'en-tête, la section contact et le
  pied de page d'`index.html`. Les liens `tel:` utilisent le format international
  sans espaces (`tel:+237696053699`).
- **Rayons** : les descriptions d'articles sont indicatives ; adaptez-les à ce que
  la boutique tient réellement en stock.
- **Couleurs** : toutes définies comme variables CSS en haut de `styles.css`
  (bloc `:root`, puis les deux blocs du thème sombre).
