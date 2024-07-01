# desafio1-compass

This project is a exercise sent by the Compass.UOL group, where the expected final result are two pages of a fictional game store website.

## Challenge requirements:

### Mandatory:

- deadline: July 1st, 5:30 pm (UTC-3)
- Create the pages presented in the Figma prototype, keeping them as close as possible to the original design in the prototype;
- Must use only HTML, CSS and Javascript, no external libraries allowed;
- Must create a private repository and add the instructors as project collaborators;
- Must validate all the form fields within the contact page:
  - Enabling the submition button only when all fields are filled;
  - Alphabet characters only for _First name_ and _Last Name_ fields;
  - Email must be validated using a RegEx;
  - The _Message_ field must have at least 10 characters;
  - Redirect to a success page once the submit button is pressed, the success page must receive and present the data from the contact page form;
- Use localStorage to save the form data;
- Create an error page, which will be accessed in case the user gets an error while browsing within the project;
- Add a README file to the project;
- Make small commits;
- Use conventional commits;

### Optional

- Apply responsive web design;
- Apply Hover effects;

## Results

### Pages:

The project currently has four pages:

- **Index**: The main page with most of the content, the buttons and images have some hover effects, the "SEE ALL" buttons redirect to the error page and the mailing section at the end of the page will validate the email and send an alert in confirmation;

- **Contact**: The page that contains a form to be filled and stored, the form has a validation script event started once the _"Get in touch"_ button is pressed, in which will only be enabled once all fields are filled, the script will verify the name fields with a RegEx to validate only if their values contain only alphabet characters, while the email field will be validated if the RegEx confirms it is a valid mail, the textbox will only have a valid value if the message has at least 10 characters;

- **Success**: A page that receives the stored form data and displays it as a means to confirm the data was received;

- **Error**: A page to be redirected when any other link or button is interacted;

It's also noteworthy that all pages have the same header and footer applied to them, the header being fully interactive, while the footer interactions are limited to the _About us_ section and the social media icons (which will each redirect to their respective home page)

## Styling

The project has five stylesheets, one for each page and one exclusively for the hader and footer elements, most of the pages share some elements in which could be separated in its own stylesheet.

## Project flow

Even though the remote repository has a single branch, the local was worked through 2 branches, a main branch that only received confirmed working features and would push the working commits to the remote repository; and a Dev branch the was used to work on the project, when the feature was complete and it was working as planned, the main would receive the commits made in the dev and then push them.

## Considerations

Most certainly the git flow is incorrect and in this aspect there is a lot of room for improvement, but for a first project it felt fulfilling. I could get to learn firsthand how to structure pages, how to validate with RegEx, how styling can be very time consuming and it can be frustrating at times, how commit conventions are very confusing, but most of all, I got to learn that there is always lots of study and experimenting when developing.
