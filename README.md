# Touch Tribe Pension App

<a alt="DA-DESK logo" href="https://yousry2.github.io/touchtribe" target="_blank" rel="noreferrer"><img src="https://yousry2.github.io/touchtribe/static/screenshot.jpg" width="800"></a>

## ✨ ** [Check Live Demo](https://yousry2.github.io/touchtribe/).✨ **

<br>

> [!CAUTION]
> Please note this demo is published on static github pages so in order to refresh the app please **Always** navigate back to the root page https://yousry2.github.io/touchtribe and **DON'T** use the homepage url https://yousry2.github.io/touchtribe/homepage/ **OR** the refresh button

<br>

## Tasks to be completed

1- E2E tests using playwright using several device sizes

2- [[Done]] ~~Add Unit Testing for parsing functionlities~~

3- [[Done]] ~~Add responsive design for mobile and tablet screens~~

4- [[Done]] ~~Add input signals to main components (Signup Page)~~

5- [[Done]] ~~Implement the new Signal Store~~

6- [[Done]] ~~Use the new ViewTransition API~~

7- Generate JsDocs

8- Add GraphJs library

<br>

## Run Application locally

1- Make sure you have the latest npm installed in your machine [Download NPM ](https://nodejs.org/en/download).

2- Clone the application repository in your machine and using your operating system termminal navigate to the repository root file path

3- Install app libraries using npm

```
npm i
```

4- Run Pension App

```
npm run start-pension
```

<br>

## App Architecture

<img src="https://yousry2.github.io/touchtribe/static/graph.jpg" width="800">

Run the following command in repository root path and then navigate open your browser to http://127.0.0.1:4211/projects/all to check application dependencies and architecture

```
nx graph
```

The application consists of the following applications/libraries :

**1- Pension** : Scaffold application which will import all libraries features along with their dependencies and integrate them

**2- Pension-Details** : Feature library that contains all pages/components related to the the pension details module

**3- Pension-Auth** : Feature library that contains all pages/components related to the the user auth module

**4- Pension-Data-Access** : Services Library will handle all domain models, api services, store

**5- Util-Common** : Utility library to handle all common services : Form Validations/Controls handling component cycle(onDestroy) etc

**6- Tailwind-Presets** : Contains all tailwild configurations, presets, themes and fonts

**7- Util-environments** : Utility library to contain environment configuration files for all projects

<br>

## Tests

### 1- [To Be deployed soon] E2E Testing (Playwright) :

Check the latest e2e report on this link https://yousry2.github.io/touchtribe/playwright-report.html

### 2- Unit Testing (Jest) :

```
npm run test-pension
```

<br>

## Dependencies :

1- Nx monorepo 17.1

2- Angular 17.2

3- Angular Signals

4- Angular Signals store NGRX/store

5- Tailwindcss

6- Daisy UI

7- Jest

8- Playwright

7- [[To be added later on]] canvasjs/angular-charts 1.0
