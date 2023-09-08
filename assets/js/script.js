"use strict";

//JSON WITH INFORMATION ABOUT CHARACTERS
let json = `[
  {
    "name": "Batman",
    "id": "batman",
    "image": "assets/img/batman",
    "universe": "DC Comics",
    "alterego": "Bruce Wayne",
    "activity": "Crime fighter, philanthropist, billionaire",
    "friends": "Robin, Batgirl",
    "superpowers": "Intelligence, extensive knowledge, martial arts skills, agility",
    "moreinfo": "<br>By popularity, Batman can only be compared to Superman. His image seems very mystical and dark: a black suit with a flowing cape, an intimidating Batmobile, a headquarters in a damp cave. His biography is as dark as his image. In his childhood, he witnessed the murder of his parents, and the young Bruce vowed to protect his hometown of Gotham from crime with all his might. <br><br>Bruce is famous, despite his old age: the first issue with his participation was released way back in 1939. With each passing year, his popularity only grows. The films 'The Dark Knight', the series 'Gotham' and several films with the same name played a big role in this. The main reason for such love among fans is the idea that anyone can become Batman. <br><br>If you think about it, he is one of the few heroes who achieved his position through intelligence and perseverance, not mutations."
  },
  {
    "name": "Superman",
    "id": "superman",
    "image": "assets/img/superman",
    "universe": "DC Comics",
    "alterego": "Clark Kent",
    "activity": "Fighter for justice",
    "friends": "Crypto the Superdog",
    "superpowers": "Invulnerability, super strength, flight, self-healing, super vision and super hearing, cool suit",
    "moreinfo": "<br>The complete opposite of his opponent Batman. If Bruce Wayne was an ordinary person who became a hero, then Superman was born a hero, but had to pretend to be from a poor Kansas family. The last representative of the planet Krypton was sent to Earth just before his homeland was destroyed. <br><br>Superman is a kind of chameleon from the world of comics. In his first issue in 1938, he was just a huge muscle man who could only break walls and knock down doors. Later, the ability to fly was added to his skills. In the numerous incarnations of Clark, from a teenager in 'Smallville' to the majestic 'Man of Steel', the level and number of superpowers vary. His vulnerability to Kryptonite, a radioactive substance from his home planet, remains unchanged."
  },
  {
    "name": "Black Widow",
    "id": "blackwidow",
    "image": "assets/img/blackwidow",
    "universe": "Marvel Comics",
    "alterego": "Natasha Romanoff",
    "activity": "Superhero, spy",
    "friends": "The Avengers",
    "superpowers": "Peak human physical potential, slowed aging, knowledge of many languages",
    "moreinfo": "<br>A superhero of Russian descent, who was born around 1928 in Stalingrad. During World War II, she lost her parents and was saved from a burning house by a Soviet soldier. He became her guardian for some time. Growing up, Natasha joined the organization 'Red Room', where she underwent numerous training sessions, specifically as part of a spy program. <br><br>There, she was also injected with the Super Soldier Serum—similar to Captain America, but in the Soviet version. Thanks to it, Natasha can use the maximum capabilities of her body: strength, flexibility, speed, agility, etc. The serum also provides the effect of slowed aging. According to fans, the most important advantage of Black Widow is that she was played by the beauty Scarlett Johansson :)"
  },
  {
    "name": "Wonder Woman",
    "id": "wonderwoman",
    "image": "assets/img/wonderwoman",
    "universe": "DC Comics",
    "alterego": "Diana Prince",
    "activity": "Superhero, secretary",
    "friends": "Justice League, Batman, Superman",
    "superpowers": "Superhuman strength, speed, endurance, flight",
    "moreinfo": "<br>It's time to spice up this boys' party with a really cool girl :) The Amazon Princess was born on the mystical island of Themyscira, located in the center of the Bermuda Triangle, where planes disappear. Her real name is Diana, named after the ancient Greek goddess of hunting, and her superpowers come from the goddess of love, Aphrodite. She was raised in an all-female society, which is why Wonder Woman often appears in culture as a symbol of feminism. <br><br>Diana has super gear: the lasso of truth and the tiara. The first one was forged by the god of fire, Hephaestus, and it never misses. Anyone caught in its loop will inevitably reveal their secrets, remember forgotten things, and even obey commands. The tiara works as a throwing weapon capable of cutting through anything. The crown with a star in the center symbolizes the patriotism of the American heroine and serves as a stylish accessory :)"
  },
  {
    "name": "Captain America",
    "id": "captainamerica",
    "image": "assets/img/captainamerica",
    "universe": "Marvel Comics",
    "alterego": "Steve Rogers",
    "activity": "Super Soldier",
    "friends": "The Avengers",
    "superpowers": "Strength, endurance, immortality, fast regeneration, stealth and combat skills",
    "moreinfo": "<br>Captain America is a character specifically created to embody the ideals of patriotism. Therefore, he was particularly popular during World War II. In the comics, the title 'Captain America' is applied to anyone chosen by the US government. However, it is most commonly associated with Steve Rogers. <br><br>Steve was born in 1917 to Irish immigrants Sarah and Joseph Rogers. In his youth, he was very weak and constantly subjected to ridicule by other boys. His Irish roots prevented him from getting into fights. At the beginning of World War II, Steve aspired to join the front lines, but due to his health, he was rejected. <br><br>By fate, he was offered to participate in a top-secret defense project aimed at creating super soldiers. Despite the difficulties during the experiment, the result was successful. Rogers transformed from a frail young man into a true Apollo. Actor Chris Evans did a great job with this role :)"
  },
  {
    "name": "Iron Man",
    "id": "ironman",
    "image": "assets/img/ironman",
    "universe": "Marvel Comics",
    "alterego": "Tony Stark",
    "activity": "Genius, billionaire, playboy, philanthropist",
    "friends": "The Avengers",
    "superpowers": "High level of intelligence, extensive knowledge of science and technology, connection to the worldwide web, armored suits",
    "moreinfo": "<br>Perhaps the most popular modern superhero. He has a lot in common with the Dark Knight Batman: both lost their parents in childhood, became crime fighters without any special superpowers, and are incredibly wealthy. However, while Batman is admired, Tony Stark is adored :) It may be due to Robert Downey Jr.'s brilliant acting, who won the role over Nicolas Cage and Tom Cruise, or it may be due to the well-developed character. <br><br>The prototype for the character was Elon Musk and the inventor Howard Hughes. <br><br>Iron Man didn't always wear a red fashionable suit: in its early versions in 1963, it was modestly gray. Unfortunately, in the movie adaptation, the armor was not even made of metal - it was made of plastic and fiberglass."
  },
  {
    "name": "Hulk",
    "id": "hulk",
    "image": "assets/img/hulk",
    "universe": "Marvel Comics",
    "alterego": "Bruce Banner",
    "activity": "Superhero, fighter for justice, biochemist",
    "friends": "The Avengers",
    "superpowers": "Superhuman strength, speed, endurance, and flight",
    "moreinfo": "<br>The idea of creating Hulk as a character can be attributed to the science fiction novella 'Strange Case of Dr Jekyll and Mr Hyde', in which a scientist cannot reconcile with his demonic alter ego. Hulk's past is as bad as it gets: Bruce's father suffered from alcoholism and bouts of rage, while his mother tried her best to protect her son from her husband's anger. She died defending her only child from his beatings. <br><br>Carrying the heavy psychological burden throughout his childhood, Bruce grew up as an extremely gifted but introverted young man. Although Bruce couldn't respect his father, he followed in his footsteps in the field of science and chose nuclear physics. During an experiment, he injected himself with a trial serum and exposed himself to a large amount of gamma radiation. Banner transformed into an uncontrollable giant with bulging muscles, smashing everything around him and not understanding what was happening. Thus, the name Hulk became synonymous with people who cannot control themselves."
  },
  {
    "name": "Thor",
    "id": "thor",
    "image": "assets/img/thor",
    "universe": "Marvel Comics",
    "alterego": "None; full name - Thor Odinson",
    "activity": "Fighter for justice, Scandinavian god",
    "friends": "Avengers",
    "superpowers": "Everything a god can do, plus Mjolnir hammer",
    "moreinfo": "<br>The character of Thor is based on the image of the Scandinavian god of the same name. Thor in the Marvel universe is the native son of Odin and the ancient goddess Gaea. After the birth of his son, Odin took him to Asgard, where he was raised with his wife, the goddess Frigga. Thor always considered her his real mother and only much later learned the truth about his birth. <br><br>It is worth mentioning that before the current Thor played by Chris Hemsworth, there were several incarnations of the superhero. In one of them, he died in a battle with the mythical serpent Midgard. This led to Ragnarok - a kind of apocalypse in Norse mythology."
  },
  {
    "name": "Deadpool",
    "id": "deadpool",
    "image": "assets/img/deadpool",
    "universe": "Marvel Comics",
    "alterego": "Wade Winston Wilson",
    "activity": "Anti-hero, mercenary",
    "friends": "Partially Avengers, Spider-Man, Wolverine",
    "superpowers": "High pain threshold, regeneration and immortality, superhuman immune system",
    "moreinfo": "<br>Like Wolverine from the X-Men, Deadpool was subjected to experiments as part of the 'Weapon X' program. Scientists tried to cure his cancer by giving his cells the ability to regenerate. As always in the comics, something went wrong, and Deadpool was left disfigured and mentally unstable. <br><br>He is the only superhero on the list who is definitely not on the side of good. Deadpool enjoys violence. Initially appearing in the mainstream Marvel Universe, he got alternative versions in other Multiverse realities. What remained unchanged was his cynical, dark sense of humor: for this, Deadpool was nicknamed 'The Merc with a Mouth'."
  },
  {
    "name": "Spider-Man",
    "id": "spiderman",
    "image": "assets/img/spiderman",
    "universe": "Marvel Comics",
    "alterego": "Peter Parker",
    "activity": "Fighter for justice, student, photographer",
    "friends": "Avengers, Fantastic Four, X-Men",
    "superpowers": "Superhuman reflexes, 'spider-sense', ability to stick to solid surfaces, web production",
    "moreinfo": "<br>Spider-Man was born out of the need for Marvel Comics to create a teenage hero. Other superheroes like Batman and Superman are adult men, and the target audience did not see them as role models. Fifteen-year-old Peter Parker made it clear to all teenagers on Earth that they could both defeat villains and marry a beauty. You don't even have to be super handsome! You just need a spider bite:). <br><br>Peter didn't immediately use his powers for good: initially, he wanted to make money by participating in illegal no-rules fights. Then his beloved Uncle Ben died at the hands of a robber, and the teenager vowed to rid his native New York of evil. However, over time, the teenager realized that one oath was not enough and that 'with great power comes great responsibility'. <br><br>By the way, not all of Peter's superpowers came from mutation: the guy independently hacked Tony Stark's technology, after which he earned his recognition."
  }
]`;

//CREATING CHARACTER CARD (on page load)
document.addEventListener("DOMContentLoaded", function () {
  let characters = JSON.parse(json);
  let charactersContent = "";

  for (const character of characters) {
    charactersContent += `<div class="character__item">
      <picture class="character__image">
        <source
          srcset="${character.image}.webp"
          type="image/webp"
        />
        <img
          src="${character.image}.jpg"
          srcset="${character.image}.jpg"
          alt="${character.id}"
        />
      </picture>
      <h2 class="character__name" id="${character.id}">${character.name}</h2>
      <div class="character__rating rating rating_set">
          <div class="rating__body">
              <div class="rating__active"></div>
              <div class="rating__items">
                  <input type ="radio" class="rating__item" value="1" name="rating_${character.id}" aria-label="star-rating: 1 star"></input>
                  <input type ="radio" class="rating__item" value="2" name="rating_${character.id}" aria-label="star-rating: 2 stars"></input>
                  <input type ="radio" class="rating__item" value="3" name="rating_${character.id}" aria-label="star-rating: 3 stars"></input>
                  <input type ="radio" class="rating__item" value="4" name="rating_${character.id}" aria-label="star-rating: 4 stars"></input>
                  <input type ="radio" class="rating__item" value="5" name="rating_${character.id}" aria-label="star-rating: 5 stars"></input>
                  <input type ="radio" class="rating__item" value="6" name="rating_${character.id}" aria-label="star-rating: 6 stars"></input>
                  <input type ="radio" class="rating__item" value="7" name="rating_${character.id}" aria-label="star-rating: 7 stars"></input>
                  <input type ="radio" class="rating__item" value="8" name="rating_${character.id}" aria-label="star-rating: 8 stars"></input>
                  <input type ="radio" class="rating__item" value="9" name="rating_${character.id}" aria-label="star-rating: 9 stars"></input>
                  <input type ="radio" class="rating__item" value="10" name="rating_${character.id}" aria-label="star-rating: 10 stars"></input>
              </div>
          </div>
          <div class="rating__value" id="value_${character.id}"></div>
      </div>
      <div class="character__info">
          <div><span>Universe:</span> ${character.universe}</div>
          <div><span>Alter Ego:</span> ${character.alterego}</div>
          <div><span>Activity:</span>  ${character.activity}</div>
          <div><span>Friends:</span> ${character.friends}</div>
          <div><span>Super Powers:</span> ${character.superpowers}</div>
          <div><span>More Details:</span> ${character.moreinfo}</div>
      </div>
    </div>`;
  }

  document.getElementById("characters__container").innerHTML =
    charactersContent; //Display the cards on the screen
  renewRatings(); //Retrieve rating values from local storage and display them on the card

  //WORKING WITH RATING (star formatting)
  const ratings = document.querySelectorAll(".rating");

  if (ratings.length > 0) {
    initRatings();
  }

  //Main rating function
  function initRatings() {
    let ratingActive;
    let ratingValue;

    //Loop through all ratings on the page
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }

    //Loop through all ratings on the page
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains("rating_set")) {
        setRating(rating);
      }
    }

    //Initialize variables
    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }

    //Change the width of active stars
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.1;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    //Allow rating to be set
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".rating__item");

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];

        ratingItem.addEventListener("mouseenter", function () {
          //Update variables
          initRatingVars(rating);
          //Update active stars
          setRatingActiveWidth(ratingItem.value);
        });

        ratingItem.addEventListener("mouseleave", function () {
          //Update active stars
          setRatingActiveWidth();
        });

        ratingItem.addEventListener("click", function () {
          //Update variables
          initRatingVars(rating);
          //Write data to local storage
          localStorage.setItem(`${ratingItem.name}`, ratingItem.value);
          //Update rating values on the page.
          renewRatings();
        });
      }
    }
  }

  //RENEWING RATINGS VISIBLE ON THE PAGE  UPON RATING CHANGES IN LOCAL STORAGE
  function renewRatings() {
    for (const [index] of characters.entries()) {
      document.getElementById(`value_${characters[index].id}`).innerHTML =
        localStorage.getItem(`rating_${characters[index].id}`);
    }
  }
});
