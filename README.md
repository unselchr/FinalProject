# Week One
  - Purpose
  The wargaming tabletop game Warhammer 40K is one of the most popular tabletop games in the world today. With Warhammer 40K's parent company, Games Workshop, is about to open it's 500th store worldwide. The company, in it's annual report, saw pre-tax profits rise from 38.4m euros to 74.5m euros. The company also seen a rise in revenue from 158m euros to 220m euros. A key missing piece that we have identified is that the game lacks a quality roster builder. There are many options when creating a roster and we would like to create a roster builder that brings ease to the process.

  - UI flow
At the home page, simplicity in a squad builder is important. A focus on functionality is the best approach. We have decided on a header with a logo and a dropdown menu with links to a sign up page, sign in page, create roster and saved roster page. Below the header, we decided that a single column down the middle with content for each page with empty columns with empty space on each side is the way to go. This will make an easy tranisition for the mobile side as well. The client log in pages will have forms for the client to enter information, while the roster builder page will feature expandable and collaspible sections of information. There will be selectible weapons to add for each character and point totals for each character and for the total roster will be updated on each selection.

Google Link for layout: https://docs.google.com/document/d/17w4fFhUvMmEvEYqLQPRqEGTkd431Q7zKrV5ASSaQHK4/edit?usp=sharing

  - Data flow
We have access to Repos of current roster information that others have compiled onto the internet. However, they are formatted from the Dark Ages and are to be resurrected to today's standards. We are currently considering rewritting all of the code into a more serviceable standard if we are not able to convert the code to something workable.

  - Responsiblities
  Matt will work on the layout for the client UI side. Chris is working on the data structure and how to probably implement it. Routing and other back end duties will be tackled in unison after that.

#Week Two

  -We have added Passport functionality with forms ready for signing in and signing up. We have an indicator to show sign in status. We have added accordion functionality in showing off what can be added to your roster. Each page is represented, but still needs styling in relation to what we have added and subtracted.
  
  -Some squad building features were taken away as an array of options were too overwhelming. We narrowed our focus to a specific faction. Focusing on a single faction opens up more time for more functionality, testing and styling.

  #Functionality
  -Home Page: Welcome Page with description about the app. Links in the main <div> with links to Sign Up and Sign in. The Nav features a dropdown with links to Sign Up, Sign In, Create Roster and View Rosters. 
  -Sign in page has a form to sign in with email and password.
  -Sign up has forms for email, password and confirm password. 
  -Create Roster has an accordion with opening functionality that reveals unit information. Above that the user has an option of selecting different tab factions. We might be limiting those to one, but they look great.
  -NoMatch page has a div with a 404 message.
  -Saved Rosters page has yet to be worked on since we are in the process of adding content to the Roster page that generates information to this page.
  
  #Screenshots
  App visibility
  -https://drive.google.com/drive/folders/1Bg8mVKJdCM8tZgWb3Pf7nfZBuUMZY_T6?usp=sharing
  
  
  -Remaining responsibilities
  https://drive.google.com/file/d/1qgu_adeToUA25w2HhPikxiXYQWo0xyqt/view?usp=sharing

