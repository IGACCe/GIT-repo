Login form
User should be able to enter email and password at the specified fields. You should check whether the email format is correct. So, first, you should check if user have provided valid email. Second, you should check whether the both of the login fields aren't empty.
Since we don't have a location or database where we could store user data, we just skip the actual sign in phase. When user clicks the Sign in button, then the previously specified validation should happen, if something fails, then you should inform user about it. If user passes the validation then you just redirect user to home.html page.

Register button
When user clicks on the register button then the following should appear:
LoginWRegisterPage

Register form
Same as before with login form you should perform input validation:

Name field should contain two or more letters and cannot be empty
Surname field should contain two or more letters and can be empty
Email field should be in valid email format and cannot be empty
Email again should be the same as the Email field and cannot be empty
Password should be 8 or more symbols long and cannot be empty
Password again should match the password field and cannot be empty
When user clicks register button, if all the validation is passed then you redirect user to home.html. If validation fails then you should inform user about it and not redirect him anywhere.

Home page (home.html)
When user is redirected to the home page then it should look like this.
HomePage

Movie list
The movie list should be generated from JavaScript list or array. You should create a JavaScript array out of 8 different movies by your choice. The array should contain information about the movie name, genre, rental price and count in stock. Then generate the available movie list from JavaScript. If the movie count in stock number is 0 then you should show the corresponding cross icon in Is in stock column, if the count in stock is greater than 0, then you should show check icon.

The Rent button
When user clicks Rent button, the movie should be added to yourMovies array in JavaScript. After the movie is added to the array you should reduce the count in stock for the movie that was displayed in home.html page. If for the movie count in stock number is 0, then you should not give to user rent options (No behaviour).
Note: if user rents a movie and the count in stock decrements to 0, then you should display to user that movie is not in stock with the cross icon in the "Is in stock" column.

Your movies page (yourMovies.html)
When you navigate to Your movies you should display the movies that user have rented. It should look with already populated list like this:
YourMoviesPage

Time column
The user should have option regulate for how long does he want to rent the movie. The smallest possible amount for renting a movie is 12 hours (12h) and the biggest possible amount is for a week (i.e. 168h). If user wishes to increment or decrement rent time it can be done with step 12 hours (12h). For instance, if currently user is renting a movie for 12 hours and he wishes to increment the time then it can be done only by incrementing time by 12 hours i.e. to 24 hours. User can regulate rent time using left and right arrows. Left arrow decrements time by 12h, right arrow increments time by 12h.

Remove button
If user clicks remove button, then the movie is completely removed from the yourMovies list and added back to home page movie list by incrementing the count in stock value.

Profile page (profile.html)
When user navigates to profile page it should look like this:
ProfilePage

You should hardcode in JavaScript name, surname and email values. And then display these values from JavaScript accordingly.

Reset password button
This button at the moment won't have any functionality. For now make sure when you hover over the button, the cursor turns to pointer :)

Reset email button
When you click this button, then the browser should prompt (with prompt()) you a pop up window asking to input a new value for email. When confirmed the previously hardcoded email should change to the newly entered value. (Remember to validate the new email, if the new email doesn't pass the validation, you should inform user and not change the current email)