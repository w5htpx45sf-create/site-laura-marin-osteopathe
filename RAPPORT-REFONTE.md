# Rapport de refonte — Laura Marin

## Portée et base de travail

La copie préparée reprend les fichiers texte accessibles à la révision du dépôt au commit `345d1038d898427a33cdad69cb76b1936e8bc3e9`. Le terminal n’a pas pu cloner le dépôt et cette copie ne contient pas de métadonnées Git : l’état des modifications locales de la véritable copie de travail n’a donc pas pu être contrôlé. Les fichiers ont été transmis au dépôt GitHub après vérification du compte et de la branche principale.

Le lot a été publié sur la branche principale dans le commit `0739ae10a01e22f70ae4e2197f2fe23a22d0b65d`. Le workflow GitHub Pages (`39587742530`) s’est terminé avec succès. L’accueil et la page locale de Reignier-Ésery ont été ouverts après publication le 21 octobre 2026.

## Problèmes détectés

- Les pages locales reprenaient une phrase artificielle listant des variantes de recherches et mentionnaient une « urgence » sans service d’urgence confirmé.
- Les pages répétaient les mêmes avis et la même note Google.
- La navigation n’avait pas de menu mobile activable au clavier.
- Des titres, descriptions, balises Open Graph et URL canoniques étaient absents ou incohérents sur plusieurs pages.
- Les images référencées dans le dépôt source n’étaient pas toutes présentes dans la copie locale récupérée.
- Les mentions légales ne permettent pas de confirmer le statut, l’adresse professionnelle, l’hébergeur réel, ni toutes les informations nécessaires sur les traitements de données.

## Corrections appliquées

- Réécriture des titres et descriptions des 13 pages ; la description de Reignier-Ésery conserve exactement le texte demandé précédemment.
- Ajout ou uniformisation des URL canoniques et des cinq métadonnées Open Graph.
- Nouveau H1 d’accueil annonçant l’ostéopathie à domicile et la zone principale.
- Suppression des formulations SEO artificielles et des avis clonés sur les six pages locales.
- Reformulation des questions sur les créneaux afin de ne pas promettre de prise en charge urgente.
- Ajout d’un menu mobile piloté par JavaScript, d’un contrôle clavier Échap, d’un état ARIA et d’un lien « Aller au contenu » sur toutes les pages.
- Conservation de la palette vert, sauge et crème ; ajustement de la hiérarchie, des espacements, du contraste et des dispositions sur petit écran ; prise en compte de la préférence de réduction des animations.
- Conversion de la photo réelle de Laura disponible en WebP (environ 65 Ko) et ajout de dimensions explicites. Comme les fichiers image PNG du dépôt n’ont pas pu être récupérés dans cette copie, leurs emplacements ont été remplacés par la photo réelle de Laura, sans image générée.
- Remplacement du favicon par un monogramme SVG léger.
- Les URL de pages existantes, le sitemap et le fichier robots.txt ont été conservés.
- Aucun balisage d’avis ou de note n’est produit dans le JSON-LD. La note et les citations restent affichées uniquement sur l’accueil comme dans la source ; leur actualité doit être confirmée.

## Fichiers modifiés ou ajoutés

- Pages HTML : accueil, ostéopathie, motifs, à propos, contact, mentions légales, coaching nutrition et les six pages locales.
- `styles.css`, `site.js`, `README.md`, `assets/favicon.svg`.
- Ajout de `assets/laura-marin.webp`.
- Ajout de ce rapport.

`CNAME`, `robots.txt` et `sitemap.xml` restent inchangés.

## Contrôles effectués

- Audit statique des 13 pages HTML.
- Une balise title, une méta-description et un seul H1 par page.
- Les cinq champs Open Graph sont présents sur chaque page.
- Aucun lien local, fichier image référencé ou identifiant d’ancre manquant dans la copie.
- Les 13 URL HTML sont dans le sitemap.
- 13 commandes de menu mobile et 13 liens d’évitement vers le contenu.
- Syntaxe JavaScript analysée avec le moteur Node ; accolades CSS équilibrées.
- Aucun JSON-LD invalide détecté. Aucun balisage JSON-LD n’est actuellement conservé dans la copie.

## Limites des vérifications

- Le clonage terminal a échoué faute d’accès réseau ; le statut Git et les changements non validés de la copie de travail réelle restent inconnus.
- Le navigateur a refusé l’ouverture des fichiers locaux et le serveur d’aperçu local n’a pas pu écouter sur le port demandé. L’accueil publié a été contrôlé visuellement sur ordinateur ; les rendus mobile et tablette n’ont pas été vérifiés.
- Lighthouse, lecteurs d’écran et contraste mesuré par outil n’ont pas été exécutés.
- La comparaison avec le site public est incomplète ; aucun test d’interaction réel de téléphone/SMS n’a été fait.
- Les mentions légales ont été auditées, mais pas déclarées conformes.

## Informations à confirmer par Laura avant validation

1. Statut professionnel exact, identité légale à afficher, adresse ou domiciliation légalement utilisable, identifiant professionnel requis selon ce statut.
2. Hébergeur réel et coordonnées à publier, selon la configuration effective du domaine et de GitHub Pages.
3. Politique exacte de confidentialité : données reçues par téléphone/SMS/email, objectifs, base légale, destinataires, conservation, droits et canal de demande ; ressources tierces chargées (notamment Google Fonts).
4. Actualité de la note Google « 5,0 / 5 – 3 avis », des citations, des noms affichés et du lien d’avis.
5. Validité actuelle de l’offre de coaching à 50 €, 180 € et 350 € ; durée de séance mentionnée dans les FAQ ; cinq années d’études ; villes supplémentaires La Roche-sur-Foron et Saint-Julien-en-Genevois ; contenu clinique sur l’approche lymphatique.
6. Photos originales de la table et du coaching, si Laura souhaite leur présence plutôt que la photo réelle de portrait utilisée en remplacement dans cette copie.

## Améliorations ultérieures recommandées

- Priorité haute : confirmer les données légales et réviser la page Mentions légales / confidentialité en conséquence.
- Priorité haute : confirmer les avis et les éléments sensibles relatifs aux prestations de santé avant publication.
- Priorité moyenne : réintégrer les photos originales et contrôler le cadrage sur appareils réels.
- Priorité moyenne : tester le rendu responsive et l’accessibilité au clavier dans un navigateur, puis lancer Lighthouse.
- Après déploiement autorisé : inspecter l’indexation et les extraits dans Search Console, sans présumer d’un gain de classement ou de clics.
