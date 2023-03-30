# First Help Financial Challenge

<div>
    <h2>How to start application</h2>
    <ul>
        <li>
        First, clone this repository to your local machine. Make sure you are cloning from the main branch. 
        </li>
        <li>
        Next, open the repository in a code editor of your choice. 
        </li>
        <li>
        Navigate to the root directory of the cloned repo and execute the following command to install all dependencies: 
        <pre>npm install</pre>
        </li>
        <li>
        Next, you'll want to create a file titled <b>.env</b> to hold the MongoDB URI (IMPORTANT: Make sure this is in the root directory of your cloned repo or else the application will not run correctly). Name your key <b>MONGO_URI_LINK</b> and set its value as the database URI link (provided in the Coderbyte submission as well as emailed to you ahead of time).
        </li>
        <li>
        Next, run the following command to spin up application (this program runs on localhost:3000 and localhost:8080 so ensure that no other programs are running on these ports!)
        <pre>npm run dev</pre>
        </li>
    </ul>
<br>
    <h2>Troubleshooting</h2>
    <ul>
         <li>If show/concert details are not loading on the page, ensure that the database URI is accurate, that it is named correctly in the .env file, and is in string format without any trailing semicolons after the URI in the .env file. </li> 
        <li>Also be aware that the .env file MUST be in the root directory in order to ensure proper functionality. </li>
         <li>If this does not resolve issues, try refreshing the page itself or restart the application completely by killing both localhost:3000 and localhost:8080 and re-running 
         <pre>npm run dev</pre>
         </li>
    </ul>
    </p>
    </div>
