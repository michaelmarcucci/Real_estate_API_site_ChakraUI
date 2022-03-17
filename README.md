## NextJS Real Estate API site built w/ ChakraUI

Built to practice developing Next.js apps using 3rd-party API plugins and responsive design tools like Chakra UI. Certain comments were left in the code as a reminder of my troubleshooting efforts/experimentation, while others indicate innovations I made over the original project from Javascript Mastery. The most notable being that my project fixes an issue where a boolean value 'FurnishingStatus' could be left blank by the submitter thus providing nothing to render for that element on the property details page. This was fixed on line 46 in [id].js in the 'property' sub-folder of pages with a ternary expression.

## Tech Used & Learning Takeaways

Tech: Next.js, Chakra UI, Bayut API from RapidAPI, CSS, HTML

Takeaways: Documentation research and integration of 3rd-party API endpoints, component & module libraries, building, using async data-fetching in Next.js, using optional-chaining methods(?.) and other es6+ conditionals to render and execute code,

## Why I Built This Project

This project is intended as a learning experience for assembling and properly styling a NextJS app using a styled React component library (ChakraUI) and doing a thorough documentation dive into new tools: Chakra UI, Next.js, and the Bayut API endpoint details retrieved from an axios GET request with RapidAPI.

## How the File Structure is Setup

This project was created using the standard npx create-next-app command. There are two kinds of react component folders ( components and containers ) with each containing a folder for the jsx component listed and its corresponding css file. 

## Improvements to be Made With More Time/Experience

The current mobile view on smartphones does not effectively scale down the images on the property details page. I also want to add a snap to image functionality in the property details page scroll view to improve its behavior when used in conjunction with the image arrow buttons.