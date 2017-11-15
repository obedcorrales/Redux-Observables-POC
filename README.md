# Redux Observables Proof of Concept

This is a POC that aims at putting together a powerful stack to develop React Apps.

It consists of 3 exercises which are meant to give us a feel for Async Operations.

The **Ping Pong** exercises both use Redux, but one goes through a Function which has to be called directly in order to handle Actions, while the other uses the power of Redux-Observables to catch Action calls through a store middleware in order to handle the flow.

The **last exercise is an implementation of the following exercise**:

A site showing the 3 most recent photo albums is required.
From each album the last two photographs should be displayed.

Taking into account that the greater id indicates that it is newer than a smaller id.

In the container you must show the title and the image. The photo container must have a color border according to the album.

Albumin-color criterion:
Border 1 border: Green.
Border 2 border: Blue.
Albúm 3 border: Purple.

API to get album list: https://jsonplaceholder.typicode.com/photos



# React Slingshot

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3129129/22811426/bb69dc06-ef0c-11e6-8092-a0bea9060b35.png"/></p>

React Slingshot is a comprehensive starter kit for rapid application development using React. 

![React Slingshot Repo](https://github.com/coryhouse/react-slingshot)

Why Slingshot?

1. **One command to get started** - Type `npm start` to start development in your default browser.
2. **Rapid feedback** - Each time you hit save, changes hot reload and linting and automated tests run.
3. **One command line to check** - All feedback is displayed on a single command line.
4. **No more JavaScript fatigue** - Slingshot uses the most popular and powerful libraries for working with React.
5. **Working example app** - The included example app shows how this all works together.
6. **Automated production build** - Type `npm run build` to do all this:

[![React Slingshot Production Build](https://img.youtube.com/vi/qlfDLsX-J0U/0.jpg)](https://www.youtube.com/watch?v=qlfDLsX-J0U)

# Redux Act

An opinionated lib to create actions and reducers for [Redux](https://github.com/rackt/redux). The main goal is to use actions themselves as references inside the reducers rather than string constants.

![Redux Act Repo](https://github.com/pauldijou/redux-act)

# Redux Observables

<img title="logo" src="https://github.com/redux-observable/redux-observable/tree/master/logo/logo-small.gif" width="16.5%">
<img title="redux-observable" src="https://github.com/redux-observable/redux-observable/tree/master/logo/logo-text-small.png" width="72%">

[RxJS 5](http://github.com/ReactiveX/RxJS)-based middleware for
[Redux](http://github.com/reactjs/redux). Compose and cancel async actions to create side effects and more.

[https://redux-observable.js.org](https://redux-observable.js.org)

[https://redux-observable-cn.js.org](https://redux-observable-cn.js.org) 中文版(非官方)
