# Logo-Generator
An app that can create a small logo with text and colour.

## Description

This application is designed to generate an SVG file that looks like a simple logo image. You can create your own logo simply by inputting text into the prompts in your terminal.

To do this, please invoke the application by entering the following command into your terminal: node .\index.js

You can also run tests by entering the following command into your terminal: npm run test

Be mindful that jest must be installed first before you can run tests!


## What was the motivation?

Testing the code you've written is a major part of any software dev's workflow. This project has helped me understand how to perform tests on my code, and the usefulness it has in telling me why a test has passed or failed. If it has failed, the terminal shows what part of my code has an error, which has helped me iron any errors I would've otherwise missed.


## What problems does it solve?

Any user that's after a simple and short logo can achieve this through this application. For example, a freelance web developer may want to use this so that they don't have to pay a graphic designer to create a simple logo for their projects.

However, it is limited in the shape, colours and text you can use for your logo. There are 3 choices for shapes, 3 choices for the colour of your text, and 3 choices for the colour of your shape. There are no other options to add to your logo.


## What did you learn?

Tests are very important in showing that your code is able to work or not. I've learnt that you can make your tests as specific or broad as you like, as long as they prove to you that your code is functional. Much like the readme generator I created in my previous project, I've learnt that commands can be executed through the terminal by invoking with node, and similarly, you can run tests as well.

Now I also know what svg files are and how they work, they basically follow the exact same language as html. 

Classes have been a huge hurdle for me to overcome, but I understand their purpose much better now than compared to before this project, albeit not completely yet. They serve to contain all kinds of code, and can extend this code (such as functions for example) down to subclasses, so that code is not repeated, and only unique code is required for the subclasses. I have also learnt that the super keyword is used to invoke the constructor from a parent class, down to the child class, so that information is passed down.


## Link to Demo Video

Below is a 1 minute video demonstrating how the application is invoked in the CLI, what a logo.svg looks like, and what tests are run:

https://drive.google.com/file/d/18Le94zHGBU2DN9mXwFos5g-hzkKLGZG8/view?usp=sharing