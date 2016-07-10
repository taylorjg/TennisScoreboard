
## Description

I plan to re-work my earlier [TennisKataJavaScript](https://github.com/taylorjg/TennisKataJavaScript)
repo as a vehicle for learning/practising the following technologies: 

* [React](https://facebook.github.io/react/)
* Data flow architectures:
    * [Flux](https://facebook.github.io/react/docs/flux-overview.html)
    * [Redux](http://redux.js.org/)
    * [RxJS](https://github.com/Reactive-Extensions/RxJS)
* [MongoDB](https://docs.mongodb.com/ecosystem/drivers/node-js/)
* Node.js / Express
* REST APIs
* [ES2015](https://babeljs.io/docs/learn-es2015/)

## TODO

Following is an outline of what I intend to implement.

### Phase 1

* ~~Very basic UI that can display points for a single game (e.g. 1, 2, 3, etc.)~~
* ~~Add a couple of buttons to manually score points for player 1 / player 2~~
* ~~Show correct game points (e.g. 15, 30, 40 instead of 1, 2, 3)~~ 
* ~~Support the ability to enter a series of points and then click a button to replay them~~
* ~~Use RxJS to replay the points~~

### Phase 2

* Extend the UI to support games
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
* http://michalzalecki.com/use-rxjs-with-react/
* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [File and folder naming convention for React.js components](https://gist.github.com/koistya/d7a507438c741ee6adb5)
* http://redux.js.org/
* http://redux.js.org/docs/basics/UsageWithReact.html
* http://babeljs.io/docs/plugins/preset-stage-2/
* http://stackoverflow.com/questions/36327096/vscode-linter-es6-es7-babel-linter
* https://github.com/redux-observable/redux-observable
* https://medium.com/@benlesh/redux-observable-ec0b00d2eb52
* http://reactivex.io/rxjs/
