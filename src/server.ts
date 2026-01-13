import express from 'express'

import type { Request, Response } from 'express';
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

 app.get('/test', (req, res) => {
        // res.send('Hello World! 3')
        let returnObj = {
            name: 'test',
            age: 20,
            address: 'Thai'
        }
        res.send(returnObj);

  })

  app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;   
    const output = `id: ${id}`;
    res.send(output);
  })

    app.get("/events", (req, res) => {
    if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter((event) => event.category === category);
    res.json(filteredEvents);
    } else {
    res.json(events);
    }
});

app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);
    if (event) {
    res.json(event);
    } else {
    res.status(404).send("Event not found");
    }
});  


app.post("/events", (req, res) => {
    const newEvent: Event = req.body;
    newEvent.id = events.length + 1;
    events.push(newEvent);
    res.json(newEvent);
});



  interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

const events: Event[] = [
  {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
  {
    id: 2,
    category: "Art",
    title: "Gallery Opening",
    description: "Contemporary art exhibition opening night",
    location: "New York",
    date: "2021-08-12",
    time: "18:30",
    petsAllowed: false,
    organizer: "Modern Arts Co",
  },
  {
    id: 3,
    category: "Sports",
    title: "Charity Run",
    description: "5K run for charity",
    location: "Sydney",
    date: "2021-09-05",
    time: "07:00",
    petsAllowed: true,
    organizer: "Run4Good",
  },
  {
    id: 4,
    category: "Education",
    title: "Tech Workshop",
    description: "Full-day workshop on web development",
    location: "Berlin",
    date: "2021-10-20",
    time: "09:00",
    petsAllowed: false,
    organizer: "CodeLabs",
  },
  {
    id: 5,
    category: "Food",
    title: "Street Food Festival",
    description: "A weekend of international street food",
    location: "Bangkok",
    date: "2021-11-14",
    time: "12:00",
    petsAllowed: true,
    organizer: "TasteWorld",
  },

  {
    id: 6,
    category: "Wellness",
    title: "Yoga in the Park",
    description: "Morning community yoga session",
    location: "Amsterdam",
    date: "2021-12-02",
    time: "08:30",
    petsAllowed: false,
    organizer: "GreenWell",
  },
  {
    id: 7,
    category: "Networking",
    title: "Startup Mixer",
    description: "An evening for founders and investors",
    location: "San Francisco",
    date: "2022-01-15",
    time: "18:00",
    petsAllowed: false,
    organizer: "Founders Hub",
  },
  {
    id: 8,
    category: "Family",
    title: "Kids Science Fair",
    description: "Interactive science exhibits for children",
    location: "Toronto",
    date: "2022-02-20",
    time: "10:00",
    petsAllowed: true,
    organizer: "Discovery Centre",
  },

  ]




