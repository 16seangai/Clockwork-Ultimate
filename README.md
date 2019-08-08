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

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
