// importing dependencies
const express = require('express');
const app = express();
const mysql = require('mysql2');
const  cors = require('cors');
const dotenv = require('dotenv');
// loading environment variables
dotenv.config();

// connecting to database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// TESTING DATABASE CONNECTION
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database');
    } else {
        console.log('Connected to database');
    }
});

// sending a message to browser 
app.get('/', (req, res) => {
  res.send('i am Godslove, a musicologist and a profame gospel minister, call me for an event')
  });


// const express = require('express')
// const app = express()

// QUESTION 1. Retrieve all patients
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
                                                                                                          

app.get('/patients', (req, res) => {
    db.query("SELECT patient_id first_name, last_name, date_of_birth FROM patients  ", (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).send("Failed to retrieve patients", err)
        }
        else {
            res.render('patients', { data: data })
        }
    });
}); // end of get endpoint


// // // Question 2 goes here
// Retrieve all providers
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/providers', (req, res) => {
  db.query("SELECT first_name, last_name, provider_specialty FROM providers  ", (err, data) => {
      if (err) {
          console.error(err);
          res.status(400).send("Failed to retrieve providers", err)
      }
      else {
          res.render('providers', { data: data })
      }
  });
}); 
// end of get endpoint

// Question three

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/patient_firstname', (req, res) => {
    db.query("SELECT first_name FROM patients", (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).send("Failed to retrieve first names", err);
        } else {
            return res.render('patient_firstname', { data: data });
        }
    });
}); // end of get endpoint


// QUESTION 4. Retrieve all providers by their specialty
// a pediatric specialty
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/specialty/pediatrics', (req, res) => {
    db.query("SELECT first_name, last_name, provider_specialty FROM providers where provider_specialty = 'pediatrics'", (err, results) => {
        if (err) {
            console.error(err);
            res.status(400).send("Failed to retrieve specialties", err);
        } else {
            return res.render('specialty', { results: results });
        }
    });
}); // end of get endpoint

// b surgical specialty


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/specialty/surgery', (req, res) => {
    db.query("SELECT first_name, last_name, provider_specialty FROM providers where provider_specialty = 'surgery'", (err, results) => {
        if (err) {
            console.error(err);
            res.status(400).send("Failed to retrieve specialties", err);
        } else {
            return res.render('specialty', { results: results });
        }
    });
}); // end of get endpoint

// c cardiology specialty


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/specialty/cardiology', (req, res) => {
    db.query("SELECT first_name, last_name, provider_specialty FROM providers where provider_specialty = 'cardiology'", (err, results) => {
        if (err) {
            console.error(err);
            res.status(400).send("Failed to retrieve specialties", err);
        } else {
            return res.render('specialty', { results: results });
        }
    });
}); // end of get endpoint

// d primary care specialty

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/specialty/primaryCare', (req, res) => {
    db.query("SELECT first_name, last_name, provider_specialty FROM providers where provider_specialty = 'primaryCare'", (err, results) => {
        if (err) {
            console.error(err);
            res.status(400).send("Failed to retrieve specialties", err);
        } else {
            return res.render('specialty', { results: results });
        }
    });
}); // end of get endpoint



// listen to the server
const PORT = 7000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})

