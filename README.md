# Github Resume

This project is a React + Vite application that consists of two functional screens: "Home page" and "Resume". The home page allows users to input a GitHub username and submit it to view the user's resume. The resume page displays information about the GitHub user and their repositories.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn install` to install the dependencies.
4. Run `yarn dev` to start the development server.
5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Screens

## Home Page

The landing page features an input field where users can enter a GitHub username and a submit button to view the user's resume.

## Resume Page

The resume page displays information about the GitHub user and their repositories. It includes details such as the user's first and last name, the number of public repositories, and when they became a member. Additionally, it shows the list of programming languages used in the user's public repositories along with their percentages. The page also lists the 10 most recently updated public repositories with active links to their respective GitHub repositories.

### Programming Languages

The list of programming languages used in the user's public repositories along with their percentages is calculated only for the 10 repositories displayed on the page. This approach is chosen because fetching and processing data for all the user's repositories on the frontend is inefficient and may lead to performance issues, especially if the user has a large number of repositories. Therefore, limiting the calculation to the repositories currently visible on the page ensures a smooth and responsive user experience.

## Technologies Used

-   React.js
-   Vite
-   Octokit (for fetching user and repository data)
-   React Router (for routing)
-   Material-UI (for UI components)
-   Tailwind CSS (for styling)

## Styling Approach

Material-UI and Tailwind CSS were chosen for styling the application for their flexibility and ease of use. Material-UI provides a wide range of pre-designed components that can be easily customized to create a modern and consistent user interface. Tailwind CSS complements Material-UI by offering utility classes that allow for quick and efficient styling without the need for writing custom CSS. This combination provides a powerful and efficient way to create visually appealing interfaces.
