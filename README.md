<div id="top"></div>
<h1 align="center">
  <br>
    OfferZen - Clone
</h1>

<h4 align="center">Technical Assessment.</h4>

<p align="center">
   <a href="https://s-makhutja-offerzen.vercel.app/">View Demo</a>
</p>

--- 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#technologies">Tech Stack</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#enhancements">Future Enhancements</a> </li>
    <li><a href="#wins">Wins</a> </li>
    <li><a href="#challenges">Challenges</a> </li>
    <li><a href="#questions">Questions</a> </li>
  </ol>
</details>

---

## overview

### basic requirements
1. Implement designs as shown.
2. Use the data in from the interviewRequests.json file.
3. No need to create a fake backend.
4. Add a searchbar for filtering the table.
5. Add an archiving action for the table.
6. toggle show archived items.

## Technologies
some of the tools / frameworks i used to build out the solution.
- [Javascript/Typescript]()
- [React]()
- [ChakraUI](https://chakra-ui.com/guidesgetting-started/cra-guide)
- [Styled Components](https://emotion.sh/docs/typescript)

## Installation
##### Downloading and installation steps:
* This project was bootstrapped with: 
    * [Create React App](https://github.com/facebook/create-react-app).
    * [ChakraUI Typescript Template](https://chakra-ui.com/guidesgetting-started/cra-guide)

##### Available Scripts

In the project directory, you can run:

```sh
yarn start
```

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

```sh 
yarn test
```

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

```sh 
yarn build
```

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

## 📸 Screenshots

#### Home view showing archived column
![Alt text - Desktop View](/public/Screenshot%202022-04-04%20at%2023.25.56.png?raw=true "Home View Light Mode")
#### Home view hiding archived column
![Alt text - Desktop View expanded](/public/Screenshot%202022-04-04%20at%2023.26.06.png?raw=true)

#### Searching 
![Alt text - Mobile View](/public/Screenshot%202022-04-04%20at%2023.12.38.png?raw=true)

![Alt text - Mobile View Form](/public/Screenshot%202022-04-04%20at%2023.13.16.png?raw=true)


## Enhancements
- [ ] add mobile responsiveness
- [ ] add a dark mode
- [ ] improve test coverage and accessibility
- [ ] render the table fields dynamically based on the keys from the json file.
- [ ] sort table by various column headers.
- [ ] hide other columns similar to the show archived toggle.

## Wins
- project runs smoothly, no console errors or warnings.
- deployed project and it is live in production.
- learnt a lot more working with tables.
- ended up implementing a custom row component.
## Challenges
- getting the archive button to archive the items, although the show/hide works.
- did not get the dates to render by days - not really a challenge just didn't get to it.

## Task D: Questions
1. assessment took me about 2h30mins to complete to my satisfaction.
2. What I would do differently is maybe use a table library like react-table or react-virtualized. just to speed up development time as well as add other enhancements such as mobile responsiveness, sorting and paging a lot more easily.
3. feedback on the project?
    - overall it was a fun small project to work on.
    - maybe add a backend for the data? just to use an api, that way more data can be pushed and another task like pagination can be added.
    - the one aspect that was a bit unclear was the archiving feature, after clicking on archive is the item removed from the table, or just the text should change to unarchive?
## License
[author - Segopotso Makhutja]()
<p align="right">(<a href="#top">back to top</a>)</p>