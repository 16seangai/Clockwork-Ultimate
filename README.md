# Clockwork-Ultimate
Team website for Clockwork, the club ultimate team for Princeton University

## Updating the Roster

Update the roster by editing the roster.js file in the js directory.

The naming conventions for the rosters and leadership positions are given below:

```
const a_roster      | a-team roster
const b_roster      | b-team roster
const a_captains    | a-team captains
const b_captains    | b-team captains
const presidents    | presidents
const social_chairs | social chairs
```

The format for adding players to ```a_roster``` and ```b_roster``` is to add an object with ```name```, ```number```, and ```class_year``` properties to the corresponding roster.

```name```: a string usually formatted as ```"First Last"```\
```number```: player's number\
```class_year```: a string for the player's class year specified by ```"fr", "so", "jr", "sr", "gr"```

```
{ name: "Ashlin Joye", number: 27, year: "gr" }
```

To add captains to ```a_captains``` and ```b_captains```, simply add their names to the desired list formatted as ```"First Last"```.

Updating ```presidents``` and ```social_chairs``` follows the same process (add ```"First Last"``` to corresponding list).

## Built With

* [Bootstrap](http://getbootstrap.com/) - Used for the image gallery and sizing/styling
* [jQuery](http://jquery.com/) - Used for scrolling animations and roster transitions

## Authors

* **Sean Gai**

## Acknowledgments

* W3Schools - Parallax demo
* @TuOfTimes - [McGill Ultimate Site](http://mcgillultimate.ca/)