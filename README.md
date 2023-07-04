# POKEMON

<img width="1641" alt="Screenshot 2023-06-30 at 20 36 14" src="https://res.cloudinary.com/do3dbemlj/image/upload/v1688507820/Paula/Screenshot_2023-07-04_at_18.56.13_uilhuc.png">
<!-- [Visit the webpage](https://my-videogame.vercel.app/) -->
<br>

Project Documentation <br/>
This documentation provides an overview of the Pokemon project, which consists of a client-side and server-side application for managing and displaying video games.
<br/>
## Table of Contents
- [Introduction](#Introduction)
- [Installation](#Installation)
- [Usage](#Usage)
- [API Endpoints](#API-Endpoints)
- [Contributing](#Contributing)
- [License](#License)
- [Images](#images)

  <br/>
## Introduction
  <br/>
The Pokemon project is designed to help users manage and view pokemon cards. It consists of a client-side application built with React and a server-side application built with Express. The client-side application allows users to browse and search pokemon cards, while the server-side application provides the necessary APIs to interact with the database. <br/>
API used: https://pokeapi.co/

 <br/>
## Installation
 <br/>
To run the Videogames project locally, follow these steps:

1. Clone the repository from the [Frontend Repository](https://github.com/pcelman/Pokemon-front.git) and [Backend Repository](https://github.com/pcelman/Pokemon-back.git).
2. Set up a PostgreSQL database named pokemon.
3. Create an .env file inside the api folder of the backend repository with the following information:
<br/>
<code>
DB_USER=[your PostgreSQL username]
DB_PASSWORD=[your PostgreSQL password]
DB_HOST=localhost
</code>
<br/>
4. Open a terminal inside the api folder and run the following commands:

* npm install to install the dependencies.
* npm start to start the server.

5. Open another terminal inside the client folder and run the following commands:


* npm install to install the dependencies.
* npm run dev to start the client application.
6. Access the client application by visiting [http://127.0.0.1:5173](http://127.0.0.1:5173) in your web browser.


## Usage
<br/>
Once the Pokemon project is up and running, you can use the client application to browse and search for video games. The server-side API provides the following endpoints for interacting with the application:
<br/><br/>

## API Endpoints
<br/><br/>
GET /pokemon
* Description: Retrieves a list of all pokemones in the database.
* Query Parameters:
  * page (optional): Specifies the page number for pagination.
  * limit (optional): Specifies the number of results per page.
* Example Response:
  <br/>
<code>
[
  {
    "id": 1,
    "name": "bulbasaur",
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "speed": 45,
    "height": 7,
    "weight": 69,
    "types": [
      {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      },
      {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
  },
  {
    "id": 2,
    "name": "ivysaur",
    "hp": 60,
    "attack": 62,
    "defense": 63,
    "speed": 60,
    "height": 10,
    "weight": 130,
    "types": [
      {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      },
      {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png"
  },
  ...
  ]
  //more games...
</code>
  <br/>
GET /api/pokemon/:id
Description: Retrieves a specific pokemon by its ID.
Path Parameters:
id: The ID of the pokemon.
Example Response:
<br/>
<code>
[
    {
        "id": 1,
        "name": "bulbasaur",
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "speed": 45,
        "height": 7,
        "weight": 69,
        "types": [
            {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            },
            {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
    }
]
</code>
<br/><br/>
POST /api/pokemon
<br/>
Description: Creates a new pokemon entry.
Request Body:
* name (string, required): The name of the pokemon.
* hp (number, required): The health power of the pokemon.
* attack (number, optional): it´s attack power.
* defense (number, optional): it´s defense power.
* image (string): must be the url of an image.
*  height and weight (float, optional)
 <br/>

<br/><br/>

## Contributing
<br/>
I welcome ontributions to the Pokemon project! Whether you want to report a bug, suggest new features, or submit code changes, your contributions are highly appreciated.
<br/><br/>

## License
<br/><br/>
<code>
  MIT License

Copyright (c) [year] [project owner]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

[License terms and conditions]


</code>
<br/><br/>

## Images
<br/><br/>
  

<br>
Home page:
On small screens the menue appears on hover
<br>
<img width="1248" alt="Screenshot 2023-06-30 at 20 39 44" src="https://github.com/pcelman/Pokemon-old/assets/100241036/d2a60343-2d2a-4aae-a493-2567c26caa36">


<br>
Detail of a card <br><br>
<img width="551" alt="Screenshot 2023-06-30 at 20 40 17" src="https://github.com/pcelman/Pokemon-old/assets/100241036/b85184be-b221-48dd-9dfd-af1b84a61cbd">

<br>Form for the creation of a custom POKEMON with a preview card<br>


<img width="864" alt="Screenshot 2023-06-30 at 20 40 59" src="https://github.com/pcelman/Pokemon-old/assets/100241036/9bab4bb9-2abc-4df3-950a-e5b0098b955b">

<br>Custom pokemon search result:<br>
<img width="1146" alt="Screenshot 2023-06-30 at 20 51 39" src="https://github.com/pcelman/Pokemon-back/assets/100241036/2314c4da-7bf1-4015-87f1-fc3f95311b07">
<br>Alphabetical order<br>
<img width="1028" alt="Screenshot 2023-06-30 at 20 52 57" src="https://github.com/pcelman/Pokemon-back/assets/100241036/451a7560-f5c7-4618-abe7-9bb755392e35">
<br>
404 page: 
<br>
<img width="1114" alt="Screenshot 2023-06-30 at 21 02 22" src="https://github.com/pcelman/Pokemon-front/assets/100241036/c5d66881-e2d6-43d5-8cc0-f7b6b7004b4b">
<br><br>

