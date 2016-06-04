
## Description

I plan to re-work my earlier [TennisKataJavaScript](https://github.com/taylorjg/TennisKataJavaScript)
repo as a vehicle for learning/practising the following technologies: 

* [React](https://facebook.github.io/react/)
* [RxJS](https://github.com/Reactive-Extensions/RxJS)
* [MongoDB](https://docs.mongodb.com/ecosystem/drivers/node-js/)
* Node.js / Express
* REST APIs
* [ES2015](https://babeljs.io/docs/learn-es2015/)

## TODO

Following is an outline of what I intend to implement.

### Phase 1

* Very basic UI that can display a single game/points
* A couple of buttons to manually score points for player 1 / player 2
* Support the ability to enter a series of points and then click a button to replay them
* Use of RxJS to replay the points

### Phase 2

* Extend the UI to support sets
* Populate MongoDB with archived point-by-point data for a bunch of real matches
* Add REST APIs to make this data available to the client
* Support the ability to choose a match and replay it
* Support the ability to enter the names of the players
* Support the ability to enter the length of the match (3 or 5 sets)

### Phase 3

* Extend the UI to indicate the current server, break points, set points, match points, new balls, etc.
* Add support for theming e.g. Wimbledon theme, Roland Garros theme, etc.
* Add support for searching for a match (by tour, player, date, etc)  

## Links

* [Grand Slam Point-by-Point Data, 2011-15](https://github.com/JeffSackmann/tennis_slam_pointbypoint)
* [Sequential point-by-point data for tens of thousands of pro matches](https://github.com/JeffSackmann/tennis_pointbypoint)
* https://www.jayway.com/2015/03/04/using-react-with-ecmascript-6/
* https://github.com/clauderic/react-infinite-calendar
* https://github.com/taylorjg/TennisKataJavaScript
