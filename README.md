# Royal Cigarette Factory "La Honradez" (Client)
### CATALOG OF CIGARETTE PACKS
by Yadira Calzadilla

## Description of the project
The project consists of a demo of a catalog of collector's items (cigarette packs), belonging to the La Honradez factory. Each piece belongs to a series, and it deals with different topics. In addition, there are articles that delve into this topic and that can be consulted on the internet. The application also provides access to them.

## Agile Methodologies
For the implementation of the project, guidelines of the agile methodology were followed. For more information you can consult the following trello scheme: https://trello.com/b/69DxjPM4/la-honradez-final-proyect. 

For this demo only the following user stories were taken into account in the backlog:
- As an unregistered user I can access the main page and consult general information about the La Honradez factory and its cigarette packs. 
- As a registered user I can access the collection of cigarette packs and carry out searches filtered by the name of the series to which they belong and by topic.
- As a registered user I can access the list of articles published on the internet that delve into the subject.
- As an administrator I can add, delete and modify cigarette packs.
- As an administrator I can add, delete and modify articles.

## Technologies
The project has been developed in React with the use of the following plugins: Router, Axios, Boostrap, React Player, Image Magnify and Sweet Alert 2. Have a SPA frontend and multiple views and implementation of CRUD actions.

## Wireframes
The app has three access permissions. An unregistered user can only access the home page, where the information that can be accessed as a user is explained in a general way. 

![homepage_edited](https://user-images.githubusercontent.com/100872227/174090513-e7d2acce-b44d-44c8-96f4-71f9e5964ea9.jpg)

Hence, the site has a page to register and another to log in.

![singUp-Login_edited](https://user-images.githubusercontent.com/100872227/174091145-5499ac60-33a6-4d82-b1d0-b3471477231a.jpg)

A registered user also has access to the other two pages of content: Collection, where you can find the collection of packs, from which you can also access to see its details. In the case of the admin, he can access the same as the registered user, but he has modification permissions, so these options will appear visible to him.

![cig pack- details_edited_edited](https://user-images.githubusercontent.com/100872227/174091824-53a30ea5-e931-41dc-9920-423b9b33919e.jpg)

If you are an admin you can access the page to add a new pack.

![add cig pack_edited](https://user-images.githubusercontent.com/100872227/174092540-77382cc5-ddf6-40be-9cd6-0de8d485efc3.jpg)

And the last page is Articles, where the same occurs, only the administrator has permissions for modifications enabled, and if you want to make them, the options are displayed.

![article_edited_edited](https://user-images.githubusercontent.com/100872227/174093242-75d430ad-09a4-4b15-b234-2dc8ef263744.jpg)

## Pages --> Components         
1. All pages --> Navbar
2. SignUpPage
3. LoginPage
4. HomePage
5. CollectionPage --> SerieFilter, TopicFilter, CigPackCard, AddCigPackCard
6. CigPackDetailsPage --> CigPackDetailsCard, EditCigPack
7. ArticlesPage --> ArticleCard, AddArticle, EditArticle

SignUpPage:

![SignUpPage](https://user-images.githubusercontent.com/100872227/174095715-78767fb4-c0c6-4756-83f9-594dc060448d.jpg)

LoginPage:

![LoginPage](https://user-images.githubusercontent.com/100872227/174096146-e0e2418c-f6d3-4490-84d0-1a91fc011331.jpg)

All pages use the componet Navbar.

![Navbar](https://user-images.githubusercontent.com/100872227/174096604-62d154c3-813b-4aed-ae4d-3aa90c7af0e4.jpg)

HomePage

![HomePagePage](https://user-images.githubusercontent.com/100872227/174096914-ea6eceaa-3659-4ef0-ab77-7fb13d4d3c08.jpg)

CollectionPage. This uses two filter, that appear at top, there are components: SerieFilter and TopicFilter. And CigPackCard for each piece and the data: Title, Series and Description. 

![CollectionPage](https://user-images.githubusercontent.com/100872227/174100710-1dfae8fb-8913-4b81-a1cb-578d1e6bc251.jpg)

The option of ADD A CIGARETTE PACK only is showed if the user is admin. It uses the component AddCigPack.

![AddCigPack](https://user-images.githubusercontent.com/100872227/174127742-8ac16a69-9f93-483d-82e1-8d9ba94f0931.jpg)

CigPackDetailsPage. This page uses the component CigPackDetailsCard.

![CigPackDetails](https://user-images.githubusercontent.com/100872227/174114327-8d7be5e8-d272-4be7-bc16-139b2ce5c92e.jpg)
 
In case the admin edit the piece, appers the component EditCigPack.

![EditCigPack](https://user-images.githubusercontent.com/100872227/174126185-404961c9-e298-4e50-af87-f26dd0c462c6.jpg)

ArticlePage. This page uses the component ArticleCard for each article. Same as cigarette packs case, the admind has options for edit, add and delete.

![ArticlePage](https://user-images.githubusercontent.com/100872227/174126450-2bf481b2-9cf3-4f53-9995-3bf6b8292dba.jpg)

In case of Add, the component AddArticle appears.

![AddArticle](https://user-images.githubusercontent.com/100872227/174128164-89034b89-e6f6-4f69-aaa7-3f33c29d6da1.jpg)

And if the admin put Edit, the EditArticle componet is showed.

![EditArticle](https://user-images.githubusercontent.com/100872227/174128507-3cca2edc-878b-46a5-a508-56f83482b682.jpg)

## Future Work
Continue with the development of the application, adding more options, endpoints to add series and topics, as well as the possibility of editing them.

Opt for a responsive design that allows a better user experience from devices of various sizes.

## Acces to the Server Aplication
https://github.com/Openbank-Java-Bootcamp/YADIRA_La_Honradez_Catalog_of_Cigarette_Packs_Server
