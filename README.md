# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#Ping coming soon page)

- [My process](#With this small challanege i focused on the layout of the page as i could tell from the get go that the process of styling would be down to having text-align: center in my main body class. alot of the process was down to a well structured html looking at the challenge from top to bottom.

- By scanning the challenge it allows me to process how everything will be laid out. In simple we have a header then a section with a class heading to specify the bulk of the page when applying the styles.
- By applying a heading section it enabled me to place ther main h1,p,input form and button in one section to help allign the page as they are all in the "center"
- The image came after which allowed me to create a seperate class to add specific styles to it before the footer section so that the icons could be individually targeted.
- I also set my primary colours and fonts in a :root folder to allow me to easily input them and is a constant practise now to improve workflow and saves time.
- In this prooject i played around with some gradients for the background and :hover on buttons to add a different style to the page that could give people ideas of how to set the background.

- An example of workflow for the input:

- things like margin-bottom, width and padding being key to creating a nice flow to then use on the button to match. padding-bottom also helped when i targeted .heading p to have a nice space in-between.

.heading .form-container input{
width: 100%;
margin-bottom: 10px;
padding: 8px;
font-family: var(--ff-libre);
font-size: 14px;
color: var(--clr-primary-blue);
border: 1px solid var(--clr-secondary-pale-blue);
border-radius: 30px;
outline: none;
}

- I was learning some JavcaScipt for the project that still needs to be worked on but i will add a commit shortly.

)

- [Built with](#VScode, HTML, CSS, JavaScript)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<section class="heading">
  <h1>We are launching<span> soon!</span></h1>
  <p>Subscribe and get notified</p>

  <form class="form-container" id="form">
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Your email address"
      autocomplete="off"
      required
    />
    <button type="submit" id="button">Notify Me</button>
  </form>
</section>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
}

h1,
p {
  color: hsl(210, 19%, 29%);
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```
# ping-coming-soon-page-master.github.io
