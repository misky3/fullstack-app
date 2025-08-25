## Simple Budget App
This is a small project I did to show off my skills in making a website. 

The Application gets the income, name, and goal of the user before being led to the dashboard where they can record their expenses, 
calculate their remaining balance, and easily add in their subscriptions

However, the app does not remember the user so each entry into the app is entirely new.

To use the application, go to terminal and use "npm start" on the terminal on the directory fullstack-app/frontend. This would open the client side of the app.

Use ".venv/Scripts/activate" then use "python app.py" pn the terminal under the directory fullstack-app/backend/algorithms. This would open the backend side of the app.

## UI/UX

For the UI/UX, I have use uxuiconexioncreativa's personal Budget Tracking figma design file. 
https://www.figma.com/community/file/1205442742432724503

<img width="1708" height="960" alt="image" src="https://github.com/user-attachments/assets/51861296-2e9d-40ae-af69-3dc0e8eae9c6" />

I do not take credit for their work. I use their design to create the website and added in some other stuff that would otherwise not be able to make the app work such as the add-expense modal.

## Landing Page
<img width="1425" height="770" alt="image" src="https://github.com/user-attachments/assets/e51b340b-27e3-4c93-b25a-04df7e4c0026" />

This is the landing page. On the left is a quote I have gotten from pinterest. On the right is where the user will be asked for their income, name and goal.
All 3 will be checked for their validity. Income can only be in digits, while both name and goal must be in alphabet characters. 

After putting in the necessary information and clicking on the button will the user be sent to the dashboard

## Dashboard
<img width="1425" height="736" alt="image" src="https://github.com/user-attachments/assets/a849c78c-7dd1-423e-aa6b-300bde012690" />

This will be what the user see when they first enter the dashboard

On top is the danshboard layout. It holds the name of the app, the add-expense button, and a greeting from the app.
<img width="1438" height="165" alt="image" src="https://github.com/user-attachments/assets/4734a50b-80cc-4ddd-b22f-dbc713f93344" />

The add-expense button will take in the category of the expense, the date it was purchased, and its amount. The app will check the inputs for validity. 
For the date, it will not input expenses made in the future. It will only take account of the ones taken in the past or at the present moment.
<img width="692" height="556" alt="image" src="https://github.com/user-attachments/assets/d5e043c5-b94e-49e2-9eeb-84b141d8eb64" />

Below the dashboard layout will be the dashboard itself. On the very left is the list of expenses. Each time a new expense is added, the user has to refresh the expense list to get it up to date.
The list will only contain a total of 7 items before being put into a new page. The newest expense will always be on the top of the 1st page of expenses.
<img width="664" height="411" alt="image" src="https://github.com/user-attachments/assets/e2bbe2b0-39d4-4ed9-8fa3-f5bb3037aecd" />
There is a filter that allows the user to easily find the expense they want.

Each row of the expense list also contain an "edit" and "delete" button. Clicking on the row of the expense will open up options for the user to edit or delete their expense.
<img width="653" height="339" alt="image" src="https://github.com/user-attachments/assets/4b66ce71-8839-4131-a7c2-8985ea67ddfb" />

In the middle of the dashboard is the calculation. THe calculation takes account for the expense and income of the user according to their given expense and the expense list.
<img width="396" height="609" alt="image" src="https://github.com/user-attachments/assets/bc97e094-71ec-432f-ae60-f08b5a8b43bb" />

The doughnut chart will give visual factor for the user to see their expense against thier income. Below are the availability and total expense amount to show if they still have any available
funds or how much in total is their expense.

The button below that says "reset Expense" will reset the entire chart and will rid itself of the previous expense. Adding new expense after the reset will work as intended before being reset.

To the very left is the subscription options. The point of this feature is to allow the user to quick-add subscription expense into the expense list to be taken into account.
<img width="352" height="599" alt="image" src="https://github.com/user-attachments/assets/d6cd9c65-d3bb-4340-8c72-1c68db04e76b" />

The subscription selected won't automatically add itself to the expense list and it is up to the user to click on the button to be able to add the charge of their subscription.

Below the subscription is the Goals area. It will show the goal of the user that they have inputed from the landing page.

## Ending

That is all for the simple budget app. I have used react.js, python, and sqlit3 for making this app. 

Thank you
