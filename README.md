# gentrif.ai
Inspiration
At one point or another in our lives, we've seen gentrification in some way. The scary thing about gentrification is how inconspicuously it can creep up on you, and how many people don't recognize it.
Gentrification is often hard to see coming before it's too late, and we wanted to create a way in which policymakers and local shareholders could be alerted to the problem while there's still time left to address it. Doing so could help entire communities from being split apart. Thus, gentrif.ai was born.

What it does
Gentrif.ai is a tool for predicting gentrification in the future. It takes a zip code that is input by the user, and then displays whether or not that zip code is in danger of gentrification. A map on the page also displays the areas we had in the dataset, with specific markings for those at risk of gentrification and those who are likely safe.

How we built it
We used Jupiter notebook and scikit-learn to clean, train, and test the datasets and associated models. We used HTML, CSS, and JavaScript on the frontend, with Google Maps to display the map.

Challenges we ran into
Getting Data - Getting quality data that was useful was extremely hard as all of the datasets with good formatting and the variables that we wanted were under paywalls. On the other side, datasets that were free would usually only have one, if any, of the variables we were looking for, and a lot of the data would be missing.

Creating a Model - None of us were too familiar with scikit-learn when starting out, and it was a steep learning curve. Figuring out what kind of machine learning model, along with evaluation metrics and hyperparameter tuning were all new problems to us.

Accomplishments that we're proud of
We're proud of our ability to keep preserving when the data wasn't making any sense and it didn't seem like we would be able to find any datasets that would give us an accurate picture into future gentrification. As this was also most of our first hackathons, we are proud of the fact that we stuck with it until we reached a finished project at the end.

What we learned
We learned how difficult machine learning can be, even with intuitive frameworks like scikit-learn that make it so much easier to work with machine learning models. The thing that we took away most was the common sense that was used in created machine learning models, as focusing on inputs that should have a high correlation to your output is of paramount importance

What's next for Gentrif.ai
More and better data! Good quality, high importance data is hard to come by (at least freely), as we found out during this project. The next step would almost certainly include getting our hands on better data so we can make a better model. This could also include moving down in area size from zip codes to neighborhoods, as individual neighborhoods often see gentrification the most from adjacent neighborhoods where the influx of wealthy residents spills over.
