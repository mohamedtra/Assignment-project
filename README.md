# Assignment-project

# Identifiant de connection pour le prof
email : michelbuffa@gmail.com
Mot de Passe : michelbuffa

# Travail fait par :
- Mohamed TRAORE
- Lys Ciella NITEKA

# Le Contexte :
Le but de ce mini projet était d'améliorer le rendu des assignments.

# Architecture
Fonctionnalités de l'application :

## 1. Gestion des login/password : Avant de pouvoir utiliser l'application, il faut commencer par s'authentifier. 
Pour le faire, il faut : 
- Cliquer sur le bouton se connecter et après entrer vos identifiants et votre mot de passe 
- Si vous n'êtes pas inscrit, vous avez la possibilité de vous inscrire en cliquant sur s'inscrire

## 2. Ajout de nouvelles Assignments :
Une fois que vous êtes authentifier, il vous suffit de :
- Ajouter un nouveaux assignments --> Un Formulaire de type Stepper :
    Step 1 - Nom du devoir :
	* Titre : Le tritre du devoir rendu
	* Auteur : Entrer le nom de l'auteur du devoir
	* Date de rendu : Choisir la date de rendu du devoir 
	* Cliquer sur Next
    Step 2 - Compléments du devoir
	* Image de la matière : Image correspondant à la matière que vous voulez rendre (Base de données, Grails,...)
	* Image di prof : Image du prof titulaire de la matière (c'est celui qui constituera l'avatar)
	* Note sur 20
	* Remarques
    Step 3 - Ajout du devoir
	Arriver à cette étape, vous pouvez soit :
	* Back : revenir en arrière 
	* Reset : Tout abandonner 
	* Submit : Soumettre votre travail

## 3. Home : affichage de la liste des Assignments :
	Dans le home on retrouve un récapitulatif de toute les assigment qui on été rendus :
	* Le titre, la date, l'élève, une image illustrant la matière, photo avatar du prof en petit en haut à gauche.
	* Le bouton Show detail assigment : La vue détails montrera en plus les remarques, la note s'il a été rendu.
