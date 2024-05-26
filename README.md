Backend Project with Node.js, Express, and MongoDB
This repository contains a backend project built using Node.js, Express, and MongoDB. The steps below will guide you through setting up and running the project on your local machine.

Prerequisites
Before you begin, make sure you have the following installed on your system:

Node.js
npm
MongoDB
Getting Started
Follow these steps to set up the project:

1. Clone the Repository
First, clone this repository to your local machine using Git:


git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
2. Install Dependencies
Navigate to the project directory and install the necessary dependencies using npm:


npm install
3. Set Up Environment Variables
Create a .env file in the root of the project and add the following environment variables:


PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.zbbpems.mongodb.net/<databasename>?retryWrites=true&w=majority&appName=Cluster0
Replace all the variables with your local enviroment credentials

4. Start MongoDB
Make sure your MongoDB server is running. You can start MongoDB using the following command:

mongod
5. Start the Development Server
Once the dependencies are installed and MongoDB is running, you can start the development server:


node server.js
The application will be available at http://localhost:3000.


-- Here you will find all cURLS available for all the APIs.

GET Dogs

curl --location 'http://localhost:3000/dogs' \
--header 'Content-Type: application/json' \
--data ''

CREATE New Dog

curl --location 'http://localhost:3000/dogs' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Chihuahua",
    "breed_group": "Toy",
    "size": "Tiny",
    "lifespan": "12-20 years",
    "origin": "Mexico",
    "temperament": "Lively, Alert, Courageous",
    "colors": [
      "Fawn",
      "Black & Tan",
      "White",
      "Chocolate",
      "Blue"
    ],
    "description": "The Chihuahua is a tiny toy breed known for its lively and courageous nature. They are alert dogs that form strong bonds with their owners. Chihuahuas are one of the smallest dog breeds in the world.",
    "image": "https://fakeimg.pl/500x500/cc6647"
  }'


  UPDATE A Single Dog

  curl --location --request PUT 'http://localhost:3000/dogs/{id}' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Chihuahua New",
    "breed_group": "Toy",
    "size": "Tiny",
    "lifespan": "12-20 years",
    "origin": "Mexico",
    "temperament": "Lively, Alert, Courageous",
    "colors": [
      "Fawn",
      "Black & Tan",
      "White",
      "Chocolate",
      "Blue"
    ],
    "description": "The Chihuahua is a tiny toy breed known for its lively and courageous nature. They are alert dogs that form strong bonds with their owners. Chihuahuas are one of the smallest dog breeds in the world.",
    "image": "https://fakeimg.pl/500x500/cc6647"
  }'

  DELETE a Single Dog


  curl --location --request DELETE 'http://localhost:3000/dogs/{id}' \
--data ''

Search Dogs by name

curl --location 'http://localhost:3000/dogs/search?name=' \
--header 'Content-Type: application/json' \
--data ''

GET Cats

curl --location 'http://localhost:3000/cats' \
--header 'Content-Type: application/json' \
--data ''

CREATE New Cat

curl --location 'http://localhost:3000/cats' \
--header 'Content-Type: application/json' \
--data ' {
        "name": "Persian",
        "origin": "Iran",
        "temperament": "Sweet, Gentle, Quiet",
        "colors": [
            "White",
            "Black",
            "Blue",
            "Cream"
        ],
        "description": "The Persian cat is a long-haired breed known for its luxurious coat and sweet personality. They are calm and affectionate cats that enjoy a relaxed indoor lifestyle.",
        "image": "https://fakeimg.pl/500x500/cc5500",
        "__v": 0
    }'


    UPDATE single Cat
curl --location --request PUT 'http://localhost:3000/cats/{id}' \
--header 'Content-Type: application/json' \
--data ' {
        "name": "Persian",
        "origin": "Iran",
        "temperament": "Sweet, Gentle, Quiet",
        "colors": [
            "White",
            "Black",
            "Blue",
            "Cream"
        ],
        "description": "The Persian cat is a long-haired breed known for its luxurious coat and sweet personality. They are calm and affectionate cats that enjoy a relaxed indoor lifestyle.",
        "image": "https://fakeimg.pl/500x500/cc5500",
        "__v": 0
    }'

    DELETE Single Cat

      curl --location --request DELETE 'http://localhost:3000/cats/{id}' \
--data ''

SEARCH Cats by name

curl --location 'http://localhost:3000/cats/search?name=' \
--header 'Content-Type: application/json'

GET Birds

curl --location 'http://localhost:3000/birds' \
--header 'Content-Type: application/json' \
--data ''

CREATE New Bird

curl --location 'http://localhost:3000/birds' \
--header 'Content-Type: application/json' \
--data '{
        "name": "Penguin",
        "species": "Spheniscidae",
        "family": "Spheniscidae",
        "habitat": "Antarctica",
        "place_of_found": "Antarctic Region",
        "diet": "Carnivore",
        "description": "Penguins are flightless birds known for their distinctive black and white plumage.",
        "weight_kg": 25,
        "image": "https://fakeimg.pl/500x500/cc7705",
        "__v": 0
    }'


UPDATE a Single Bird

curl --location --request PUT 'http://localhost:3000/birds/{id}' \
--header 'Content-Type: application/json' \
--data '{
        "name": "Penguin",
        "species": "Spheniscidae",
        "family": "Spheniscidae",
        "habitat": "Antarctica",
        "place_of_found": "Antarctic Region",
        "diet": "Carnivore",
        "description": "Penguins are flightless birds known for their distinctive black and white plumage.",
        "weight_kg": 25,
        "image": "https://fakeimg.pl/500x500/cc7705",
        "__v": 0
    }'


    DELETE a Single Bird

    curl --location --request DELETE 'http://localhost:3000/birds/{id}' \
--header 'Content-Type: application/json' \
--data ''


SEARCH Birds by name

curl --location 'http://localhost:3000/birds/search?name=' \
--header 'Content-Type: application/json' \
--data ''

Replase {id} with an existing id on database
