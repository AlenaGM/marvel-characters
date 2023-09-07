"use strict";

//JSON WITH INFORMATION ABOUT CHARACTERS
let json = `[{
  "name": "Batman",
  "id": "batman",
  "image": "assets/img/batman.jpg",
  "universe": "DC Comics",
  "alterego": "Bruce Wayne",
  "activity": "Crime fighter, philanthropist, billionaire",
  "friends": "Robin, Batgirl",
  "superpowers": "Intelligence, extensive knowledge, martial arts skills, agility",
  "moreinfo": "<br>By popularity, Batman can only be compared to Superman. His image seems very mystical and dark: a black suit with a flowing cape, an intimidating Batmobile, a headquarters in a damp cave. His biography is as dark as his image. In his childhood, he witnessed the murder of his parents, and the young Bruce vowed to protect his hometown of Gotham from crime with all his might. <br><br>Bruce is famous, despite his old age: the first issue with his participation was released way back in 1939. With each passing year, his popularity only grows. The films 'The Dark Knight', the series 'Gotham' and several films with the same name played a big role in this. The main reason for such love among fans is the idea that anyone can become Batman. <br><br>If you think about it, he is one of the few heroes who achieved his position through intelligence and perseverance, not mutations."
  },{
  "name": "Superman",
  "id": "superman",
  "image": "assets/img/superman.jpg",
  "universe": "DC Comics",
  "alterego": "Clark Kent",
  "activity": "Fighter for justice",
  "friends": "Crypto the Superdog",
  "superpowers": "Invulnerability, super strength, flight, self-healing, super vision and super hearing, cool suit",
  "moreinfo": "<br>The complete opposite of his opponent Batman. If Bruce Wayne was an ordinary person who became a hero, then Superman was born a hero, but had to pretend to be from a poor Kansas family. The last representative of the planet Krypton was sent to Earth just before his homeland was destroyed. <br><br>Superman is a kind of chameleon from the world of comics. In his first issue in 1938, he was just a huge muscle man who could only break walls and knock down doors. Later, the ability to fly was added to his skills. In the numerous incarnations of Clark, from a teenager in 'Smallville' to the majestic 'Man of Steel', the level and number of superpowers vary. His vulnerability to Kryptonite, a radioactive substance from his home planet, remains unchanged."
  },{
  "name": "Black Widow",
  "id": "blackwidow",
  "image": "assets/img/blackwidow.jpg",
  "universe": "Marvel Comics",
  "alterego": "Natasha Romanoff",
  "activity": "Superhero, spy",
  "friends": "The Avengers",
  "superpowers": "Peak human physical potential, slowed aging, knowledge of many languages",
  "moreinfo": "<br>A superhero of Russian descent, who was born around 1928 in Stalingrad. During World War II, she lost her parents and was saved from a burning house by a Soviet soldier. He became her guardian for some time. Growing up, Natasha joined the organization 'Red Room', where she underwent numerous training sessions, specifically as part of a spy program. <br><br>There, she was also injected with the Super Soldier Serum—similar to Captain America, but in the Soviet version. Thanks to it, Natasha can use the maximum capabilities of her body: strength, flexibility, speed, agility, etc. The serum also provides the effect of slowed aging. According to fans, the most important advantage of Black Widow is that she was played by the beauty Scarlett Johansson :)"
  },{
  "name": "Wonder Woman",
  "id": "wonderwoman",
  "image": "assets/img/wonderwoman.jpg",
  "universe": "DC Comics",
  "alterego": "Diana Prince",
  "activity": "Superhero, secretary",
  "friends": "Justice League, Batman, Superman",
  "superpowers": "Superhuman strength, speed, endurance, flight",
  "moreinfo": "<br>It's time to spice up this boys' party with a really cool girl :) The Amazon Princess was born on the mystical island of Themyscira, located in the center of the Bermuda Triangle, where planes disappear. Her real name is Diana, named after the ancient Greek goddess of hunting, and her superpowers come from the goddess of love, Aphrodite. She was raised in an all-female society, which is why Wonder Woman often appears in culture as a symbol of feminism. <br><br>Diana has super gear: the lasso of truth and the tiara. The first one was forged by the god of fire, Hephaestus, and it never misses. Anyone caught in its loop will inevitably reveal their secrets, remember forgotten things, and even obey commands. The tiara works as a throwing weapon capable of cutting through anything. The crown with a star in the center symbolizes the patriotism of the American heroine and serves as a stylish accessory :)"
},{
  "name": "Captain America",
  "id": "captainamerica",
  "image": "assets/img/captainamerica.jpg",
  "universe": "Marvel Comics",
  "alterego": "Steve Rogers",
  "activity": "Super Soldier",
  "friends": "The Avengers",
  "superpowers": "Strength, endurance, immortality, fast regeneration, stealth and combat skills",
  "moreinfo": "<br>Captain America is a character specifically created to embody the ideals of patriotism. Therefore, he was particularly popular during World War II. In the comics, the title 'Captain America' is applied to anyone chosen by the US government. However, it is most commonly associated with Steve Rogers. <br><br>Steve was born in 1917 to Irish immigrants Sarah and Joseph Rogers. In his youth, he was very weak and constantly subjected to ridicule by other boys. His Irish roots prevented him from getting into fights. At the beginning of World War II, Steve aspired to join the front lines, but due to his health, he was rejected. <br><br>By fate, he was offered to participate in a top-secret defense project aimed at creating super soldiers. Despite the difficulties during the experiment, the result was successful. Rogers transformed from a frail young man into a true Apollo. Actor Chris Evans did a great job with this role :)"
},{
  "name": "Iron Man",
  "id": "ironman",
  "image": "assets/img/ironman.jpg",
  "universe": "Marvel Comics",
  "alterego": "Tony Stark",
  "activity": "Genius, billionaire, playboy, philanthropist",
  "friends": "The Avengers",
  "superpowers": "High level of intelligence, extensive knowledge of science and technology, connection to the worldwide web, armored suits",
  "moreinfo": "<br>Perhaps the most popular modern superhero. He has a lot in common with the Dark Knight Batman: both lost their parents in childhood, became crime fighters without any special superpowers, and are incredibly wealthy. However, while Batman is admired, Tony Stark is adored :) It may be due to Robert Downey Jr.'s brilliant acting, who won the role over Nicolas Cage and Tom Cruise, or it may be due to the well-developed character. <br><br>The prototype for the character was Elon Musk and the inventor Howard Hughes. <br><br>Iron Man didn't always wear a red fashionable suit: in its early versions in 1963, it was modestly gray. Unfortunately, in the movie adaptation, the armor was not even made of metal - it was made of plastic and fiberglass."
},{
  "name": "Hulk",
  "id": "hulk",
  "image": "assets/img/hulk.jpg",
  "universe": "Marvel Comics",
  "alterego": "Bruce Banner",
  "activity": "Superhero, fighter for justice, biochemist",
  "friends": "The Avengers",
  "superpowers": "Superhuman strength, speed, endurance, and flight",
  "moreinfo": "<br>The idea of creating Hulk as a character can be attributed to the science fiction novella 'Strange Case of Dr Jekyll and Mr Hyde', in which a scientist cannot reconcile with his demonic alter ego. Hulk's past is as bad as it gets: Bruce's father suffered from alcoholism and bouts of rage, while his mother tried her best to protect her son from her husband's anger. She died defending her only child from his beatings. <br><br>Carrying the heavy psychological burden throughout his childhood, Bruce grew up as an extremely gifted but introverted young man. Although Bruce couldn't respect his father, he followed in his footsteps in the field of science and chose nuclear physics. During an experiment, he injected himself with a trial serum and exposed himself to a large amount of gamma radiation. Banner transformed into an uncontrollable giant with bulging muscles, smashing everything around him and not understanding what was happening. Thus, the name Hulk became synonymous with people who cannot control themselves."
},{
  "name": "Тор",
  "id": "thor",
  "image": "assets/img/thor.jpg",
  "universe": "Marvel Comics",
  "alterego": "Нет; полное имя — Тор Одинсон",
  "activity": "Борец за справедливость, скандинавский бог",
  "friends": "Мстители",
  "superpowers": "Все, что может бог, плюс молот Мьелнир",
  "moreinfo": "<br>Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. <br><br>Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии."
},{
  "name": "Дэдпул",
  "id": "deadpool",
  "image": "assets/img/deadpool.jpg",
  "universe": "Marvel Comics",
  "alterego": "Уэйд Уинстон Уилсон",
  "activity": "Антигерой, наемник",
  "friends": "Частично Мстители, Человек-паук, Росомаха",
  "superpowers": "Высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  "moreinfo": "<br>Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. <br><br>Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником»."
},{
  "name": "Человек-паук",
  "id": "spiderman",
  "image": "assets/img/spiderman.jpg",
  "universe": "Marvel Comics",
  "alterego": "Питер Паркер",
  "activity": "Борец за справедливость, студент, фотограф",
  "friends": "Мстители, Фантастическая четверка, Люди Икс",
  "superpowers": "Сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  "moreinfo": "<br>Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:). <br><br>Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». <br><br>Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание."
}]`;

//CREATING CHARACTER CARD (on page load)
document.addEventListener("DOMContentLoaded", function () {
  let characters = JSON.parse(json);
  let charactersContent = "";

  for (let character of characters) {
    charactersContent += `<div class="character__item">
                <img class="character__image" src="${character.image}" alt="${character.id}"></img>
                <h2 class="character__name" id="${character.id}">${character.name}</h2>
                <div class="character__rating rating rating_set">
                    <div class="rating__body">
                        <div class="rating__active"></div>
                        <div class="rating__items">
                            <input type ="radio" class="rating__item" value="1" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="2" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="3" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="4" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="5" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="6" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="7" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="8" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="9" name="rating_${character.id}"></input>
                            <input type ="radio" class="rating__item" value="10" name="rating_${character.id}"></input>
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

  //RENEWING RATINGS VISIBLE ON THE PAGE  UPON RATING CHANGE IN LOCAL STARAGE
  function renewRatings() {
    for (const [index] of characters.entries()) {
      document.getElementById(`value_${characters[index].id}`).innerHTML =
        localStorage.getItem(`rating_${characters[index].id}`);
    }
  }
});
