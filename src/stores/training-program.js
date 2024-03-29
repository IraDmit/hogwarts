import { defineStore } from 'pinia'

export const useProgramStore = defineStore({
  id: 'training-program',
  state: () => ({
    firstYear: [
      {
        subject: 'Astronomy',
        image: 'src/assets/img/astronomy.jpg',
        desc: 'Ever wonder what is beyond this Earth? Yes, the night sky may be beautiful, but knowledge of the heavens will also help you become a better witch or wizard. In Year One, you will observe the skies with a magical telescope, learn about our solar system neighbors, and discover how magic reflected off astronomical objects can affect us all on Earth. '
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'Year One of Charms presents an overview of the basics of spellcasting. Beginning with essential wizarding laws and touching briefly upon wandlore, we then discuss the components that are present within spells. Along the way you’ll learn of and practice the basic spells that all beginning witches and wizards should know. We’ll explore how such basic spells as the Severing Charm, the Levitation Charm and the Sunlight Charm demonstrate these fundamental aspects of spellcasting.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'Defense Against the Dark Arts Year One will serve as an introduction that will set the foundation for your magical education and properly prepare you for future work in Defense Against the Dark Arts. Here, we will explore what the Dark Arts are, some basic defensive and offensive spells, and low ranking dark creatures that will allow you to develop an understanding about how we discuss and defend against dark creatures.'
      },
      {
        subject: 'Flying',
        image: 'src/assets/img/FLYING_COURSE_BANNER.png',
        desc: 'Welcome to Magical Transportation! This year we take to the skies as we learn basic broom handling, the history of broomflight, and even a few more advanced maneuvers! To spice things up, you’ll also learn about other flight-related magical transportation, with a few surprise guests. Come see what’s in store!'
      },
      {
        subject: 'Herbology',
        image: 'src/assets/img/herb.gif',
        desc: 'In the First Year of Herbology, you will be introduced to the basics of the discipline, including the kinds of plants, how to classify them, the difference between a magical and non-magical plant, and how to care for both kinds of flora. Additionally, First Year Herbology students will learn about a selection of easy-to-care-for plants.'
      },
      {
        subject: 'History of Magic',
        image: 'src/assets/img/history.jpg',
        desc: 'History of Magic is a basic introduction to the history of the wizarding world. Topics covered include the various theories on the origins of magic, the Olmec and Clovis people, ancient Egyptian priests, and more. Students will work to understand larger topics in history and connect major events to people, places, and their own lives.'
      },
      {
        subject: 'Potions',
        image: 'src/assets/img/potions_J5YQA1O.jpg',
        desc: 'This course provides an introduction to potions and potioneering. First Years will learn safety and fundamental potions usage, terms, brewing, and basic theory. We will cover major ingredients as well as some history of potions.'
      },
      {
        subject: 'Transfiguration',
        image: 'src/assets/img/transfiguration_WfYlMBX.jpg',
        desc: 'An introduction to the science of transfiguration. This will cover what transfiguration is, its branches and laws, and basic inanimate transformations.'
      }
    ],
    secondYear: [
      {
        subject: 'Alchemy ',
        image: 'src/assets/img/alchemy_WLOFa23.jpg',
        desc: 'Would you like to learn about everlasting life? Would you like to understand how to tap into your spiritual psyche? Alchemy is based off the ancient magic that some have read about. We will learn about famous alchemists such as Nicolas Flamel; and attempt to follow in his footsteps as well as open up your spiritual awareness while fulfilling your inner desires.'
      },
      {
        subject: 'Ancient Runes',
        image: 'src/assets/img/Rune_Stone.jpg',
        desc: 'Have you ever come across strange markings in old, worn books and wondered what they said? Do you have a love for languages and writing? Would you like to learn some of the world’s oldest magic? The study of Ancient Runes is a course concerning itself with ancient magical scripts from around the world, their history, their linguistics, and the spells they were used to compose. This year, prepare to enter the world of the Nords, the councils of the magi, and the halls of Valhalla.'
      },
      {
        subject: 'Astronomy',
        image: 'src/assets/img/astronomy.jpg',
        desc: 'This year, we will be learning more about some very exciting topics relating to the Moon.  We will learn about how tides, phases, and eclipses work and will discuss the magic behind a syzygy, which is an alignment of three astronomical bodies.  A good portion of the year will be focused on studying beasts and plants that are affected by the Moon’s cycles as well as other effects of lunar magic, and believe me, there are quite a few!  We will also discuss some of the moons of the other planets of the solar system, and finally, some folk tales and scientific theories about the origin of the Moon.'
      },
      {
        subject: 'Care of Magical Creatures',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'Care of Magical Creatures is the course for any beast lover. During your first year in the course, we will discuss the Ministry of Magic, the Department for the Regulation and Control of Magical Creatures, and of course, the creatures of our magical world.'
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'Students will focus upon charmable objects and how they are bewitched. This course begins with an overview of object charming and basic temporary charms before moving on to discuss various types of charmed objects (triggered, permanent and activated). We will cover different magical and mundane materials as well as several special topics (such as the extradimensional “Wizard Space” and cursed items). The successful student will be expected to identify and understand how several magical items function, know how to properly cast year-appropriate charms, and understand the basic principles of bewitching an object.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'Defense Against the Dark Arts Year Two will continue building upon the foundation set in Year One. We will continue our exploration of spellwork, covering more offensive spells and getting into the basics of curse theory. We also will look at creatures with practical defensive uses.'
      },
      {
        subject: 'Divination',
        image: 'src/assets/img/Tarot_Cards_Course_Image_njE9Y1R.jpg',
        desc: 'Open the gateway to the future with your Inner Eye! The magic of the tarot and so much more is waiting to be uncovered in Second Year Divination.'
      },
      {
        subject: 'Herbology',
        image: 'src/assets/img/herb.gif',
        desc: 'Get ready to get your hands dirty! In the Second Year of the subject, you will learn about common problems affecting plants, a more detailed account of the caring and tending process, as well as learning about some specialized plants that require slightly more skill, like nocturnal or underwater blooms, finishing with a guest lecture about using magic to grow plants.'
      }
    ],
    thirdYear: [
      {
        subject: 'Alchemy ',
        image: 'src/assets/img/alchemy_WLOFa23.jpg',
        desc: 'Venturing across the world and traveling through time are two great aspirations. Why not do both? This year we will be observing Alchemy in different cultures and how it evolved over time. We will be looking at places such as Egypt, China, Europe, and more! Come join us in a hypothetical vacation away from the castle.'
      },
      {
        subject: 'Ancient Runes',
        image: 'src/assets/img/Rune_Stone.jpg',
        desc: 'This year, we will delve into the later variations of the Germanic runes, studying the Younger Futhark and the Anglo-Saxon Futhork. We will also look at enchanted items and discuss the use of runes in literature.'
      },
      {
        subject: 'Astronomy',
        image: 'src/assets/img/astronomy.jpg',
        desc: 'Our Big Blue Marble - Earth is the only planet we call home; it is what gives us life and security even as we look to the heavens all around us. In order to study the heavens, however, it is first necessary to understand ourselves. What makes the Earth so special and why are we the only planet in our whole Solar System known to contain life? This year is intended to give Astronomy students a foundation in our Earth even as we seek to compare ourselves to others. Students will leave this class with a better understanding of their own place in the universe, the ability to compare Earth with other planets, knowledge of the origins of magic in our near universe, and an appreciation for the uniqueness of the planet we call home.'
      },
      {
        subject: 'Care of Magical Creatures',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'In your second year of Care of Magical Creatures, we will explore and discover thirteen different creatures. These creatures range from pests to mythological creatures. A wide variety of creatures will be studied, from wizarding pets to demons. Different aspects of the creatures, like genetics and disease information will also be covered.'
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'Charms Year Three will delve into the body and mind. We will spend the year discussing personal spellcasting and how spells can be cast upon other willing people. We begin with physical magic, discussing healing briefly, and then explore how Charms can affect the mind. Each lesson will include spells to practice and there will be a midterm and final exam.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'Defense Against the Dark Arts Year Three will take us on a global expedition as we learn about the various Dark creatures that inhabit our world. We will be exploring what the creatures are and why they are considered Dark, covering a small amount of the lore that exists around them, and learning proper spells and techniques in order to defend ourselves against them.'
      },
      {
        subject: 'Divination',
        image: 'src/assets/img/Tarot_Cards_Course_Image_njE9Y1R.jpg',
        desc: 'Unlock the secrets of your Inner Eye in Year Three of Divination. This year focuses on the more natural forms for divination, such as runecasting and astrology. A glimpse into the future awaits..'
      },
      {
        subject: 'Herbology',
        image: 'src/assets/img/herb.gif',
        desc: 'Have you ever thought about becoming a healer? In the Third Year of Herbology, you will learn about healing herbs, their properties, and how to plant and care for them. You will also learn about Herbology from a more historical perspective, touring around the world while we discover the most interesting plants. Join me in this marvellous trip!'
      }
    ],
    fourthYear: [
      {
        subject: 'Alchemy ',
        image: 'src/assets/img/alchemy_WLOFa23.jpg',
        desc: 'Alchemy isnt strictly scientific, its spiritual too! This year will mainly focus on a branch of Alchemy developed from the teachings of Hermes Trismegistus. Learn how to seek your inner self and about the magnum opus itself!'
      },
      {
        subject: 'Ancient Runes',
        image: 'src/assets/img/Rune_Stone.jpg',
        desc: 'Fascinated by the symbols of ancient cultures? Then come on in and learn about Ancient Runes, the scripts these cultures used to record their knowledge! This year, we will begin our journey into the world of Ancient Egypt. We will learn to decipher the hieroglyphs and find out what life was like along the Nile, several thousand years ago!'
      },
      {
        subject: 'Ancient Studies',
        image: 'src/assets/img/ancient_studies.jpg',
        desc: 'Ever wondered what magic was like in ancient times? A time when everyone knew and often worshiped magical practitioners? Did they use wands and potions? Are the Ancient Wonders of the World really gone? This year, we will be learning about magic in the ancient societies of Africa and the Middle East. Be prepared to immerse yourself in a world where magic was common place in both the highest palaces and dustiest hovels. Brace yourself for the exploration of some of the most dangerous and secret places in our world.'
      },
      {
        subject: 'Astronomy',
        image: 'src/assets/img/astronomy.jpg',
        desc: 'Interstellar Travel will focus on the literature of space travel. We will discuss how astronomical discoveries fueled curiosity and interest about outer space as well as the impact of space-related fiction works have affected society. Quarks, Quasars, and Cosmology will introduce the concepts of Cosmology. We will discuss universal scale, formation and geometry. Although this class will contain many Muggle science concepts, they will be taught in a way that appeals to students of all educational interests and strengths. Both classes are open to all students who have completed Year Three, and both classes are taught on the third week of every rotation.'
      },
      {
        subject: 'Care of Magical Creatures',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'In your third year of Care of Magical Creatures, you will learn about twelve different creatures classified as XXX by the Ministry of Magic. Additionally, a year long project on a specialty topic will be completed. We address the supernatural, the almost-mundane, and those known for their dangerous attributes.'
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'We will delve into Intermediate spellcasting this year. We will start with an exploration of Counter-Charms, then move on to Substantive Charms (i.e. charms dealing with thermal and electromagnetic energy and with the three states of matter). The course will be very heavy in spell memorization, covering approximately 30 new spells.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'Defense Against the Dark Art Year Four will force students to face the unknown. Equipped with nothing more than their wand and a few cryptic clues to guide them through the Year, students will be expected to use logic, skill, and their defensive skills to succeed. Through exploration of a combination of both defensive spells and dark creatures, students will be prepared to face a variety of situations, both in the classroom and beyond.'
      },
      {
        subject: 'Divination',
        image: 'src/assets/img/Tarot_Cards_Course_Image_njE9Y1R.jpg',
        desc: 'In Year Four of Divination, we will be exploring the various methods of physical divination. Enter, and discover more than you thought possible from one glance at the person across the room.'
      }
    ],
    fifthYear: [
      {
        subject: 'Alchemy ',
        image: 'src/assets/img/alchemy_WLOFa23.jpg',
        desc: 'Have you ever aspired to be a healer? Alchemy is and has been a tremendous influence on medicinal practices throughout the ages. We will be looking at topics such as the universal cure, herbal medicines, spiritual healing, psychological and therapeutic effects, and maybe we’ll get our hands dirty with a bit of laboratory work. Time to mix up some tinctures, tonics, and elixirs!'
      },
      {
        subject: 'Ancient Runes',
        image: 'src/assets/img/Rune_Stone.jpg',
        desc: 'Delve deeper into the world of Egyptian hieroglyphs! This year, we will unravel the complex layers of meaning in hieroglyphic inscriptions as well as study their use in powerful magical enchantments.'
      },
      {
        subject: 'Ancient Studies',
        image: 'src/assets/img/ancient_studies.jpg',
        desc: 'Our studies of magic use in ancient civilizations continues this year with our examination of several European groups, including the ancient Romans, Greeks, Celts, Norse, and more! It will be a year filled with curious enigmas and amusing occurrences.'
      },
      {
        subject: 'Care of Magical Creatures',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'In your fourth year of Care of Magical Creatures, you will learn about ten different creatures, varying from XXX to XXXX in classification. You will learn about creatures that are owed respect, inspired iconic inventions, and have incredible uses in the wizarding world. Throughout the year, you will also be forced to consider animal welfare as we develop your year long project. In your final lesson, we will return to previous years, reviewing the creatures covered up to this point in your education, before you sit your O.W.L.s.'
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'Charms Year Five will discuss more practical areas of spellcasting that can be used on your home. We will discuss ways of keeping your home safe as well as touch upon methods of keeping yourself safe from intruders. We will end the year discussing methods of keeping yourself hidden in the Muggle world and touch upon some more advanced spellcasting. This year of Charms aims to prepare you for your OWLs at the end of the year.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'Defense Against the Dark Arts Year Five takes your education to a new level as we prepare for you O.W.L. examinations. We begin to cover offensive spell theory, covering concepts such as the structure of Combination Spellcasting, the technique and practice behind casting without the wand movement, spells that are most commonly cast offensively, and creatures that require offensive tactics in order to defend yourself against. We also will be covering more practical information that delves into the background of what we are learning. By the end of this term, you will be ready to sit your O.W.L. examinations.'
      },
      {
        subject: 'Divination',
        image: 'src/assets/img/Tarot_Cards_Course_Image_njE9Y1R.jpg',
        desc: 'Have you ever had such vivid dreams that they still feel real when you wake? Can you speak to those who have passed? If so, Year Five of Divination will excite and explain the finer details. This year, we are focusing on clairvoyance and true dreaming, two fascinating subjects with endless possibilities...'
      },
      {
        subject: 'Herbology ',
        image: 'src/assets/img/herb.gif',
        desc: 'If you cant take the heat, get out of the Greenhouses! In the final year of Herbology for many students, this course will cover the various classes of W.H.I.P.S. plants in significant detail, as well as how to grow many of them.'
      }
    ],
    sixthYear: [
      {
        subject: 'Alchemy ',
        image: 'src/assets/img/alchemy_WLOFa23.jpg',
        desc: 'Tales of immortality, artificial life, transmutation, and other unexplained phenomena shroud the study of alchemy in mystery. Can creating synthetic life forms such as homunculi be achieved? What goes into the creation of the Philosopher’s Stone? In Year Six of this course, we will be addressing these mysteries and whether or not they are true to the study of alchemy in the wizarding world. We will also be discussing other traditions and organizations that have influenced alchemy and vice versa.'
      },
      {
        subject: 'Ancient Runes',
        image: 'src/assets/img/Rune_Stone.jpg',
        desc: 'In the first year of your N.E.W.T. studies in Ancient Runes, we will explore the Mediterranean, Oceania, and an assortment of associated scripts. We will also begin to explore the topic of recently revived or discovered magical scripts and the issues that surround their use and study.'
      },
      {
        subject: 'Ancient Studies',
        image: 'src/assets/img/ancient_studies.jpg',
        desc: 'Year Six of Ancient Studies takes us across the ocean to the Americas. Our studies will focus on familiar civilizations such as the Maya, Inca, Aztec, and Navajo, as well as the lesser known - but equally fascinating - cultures of the Nazca, Mikmaq and Salish. We may trade Muggles for No Majs, however an in depth look at these civilizations and their magical practices will reveal very similar practices to those found in our own European history.'
      },
      {
        subject: 'Arithmancy',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'In this introductory course, you will learn the basics of arithmancy in preparation for the Year 7 course. Emphasis will be placed on the numerical operations required for the successful application of Arithmantical principles in the magical world.'
      },
      {
        subject: 'Care of Magical Creatures',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'In your fifth year of Care of Magical Creatures, we will cover fifteen different creatures that are popular in both the wizarding and Muggle worlds. We will be building off of your previous knowledge of these creatures from popular culture, and helping you understand why they are seen in both worlds. Some of these creatures are considered cryptids or mythological in the Muggle world, whereas others have Muggle counterparts. Additionally, a year long that follows these themes will be completed.'
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'In Year Six of Charms, we will deal with theoretical aspects and more complex spells than you have learned about in your first five years of magical education. We will shortly discuss career opportunities and focus on magical concepts such as non-verbal casting, as well as theoretical distinctions of different types of magic and enchanting.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'Year Six Defense Against the Dark Arts becomes more theory heavy as students begin their work at the N.E.W.T. level. This year focuses on mental magic, defense of the mind, and application of logic in order to overcome challenges. Sixth Year students will come face to face with their inner demons and be challenged to perform magic more difficult than they have thus far, all while proving their ability to grapple with the heavy theories behind their spellwork and defending themselves against the Dark Arts.'
      },
      {
        subject: 'Divination',
        image: 'src/assets/img/Tarot_Cards_Course_Image_njE9Y1R.jpg',
        desc: 'Venture into the world of omens and explore methods of divination dating back thousands of years! Together we will learn ancient techniques to use the phenomena of today to decipher the secrets of tomorrow.'
      }
    ],
    seventhYear: [
      {
        subject: 'Ancient Runes',
        image: 'src/assets/img/Rune_Stone.jpg',
        desc: 'For your final year in Ancient Runes, prepare to open yourself up to the remaining mysteries of the world. After your N.E.W.T. studies, any script you encounter -- whether familiar or not -- will be within your grasp.'
      },
      {
        subject: 'Ancient Studies',
        image: 'src/assets/img/ancient_studies.jpg',
        desc: 'Year Seven of Ancient Studies takes us once again across an ocean - this time the Pacific, to Asia and Oceania. Our studies will focus on familiar civilizations such as the Japanese, Chinese, Indian, and Australian Aborigine, as well as the lesser known - but equally fascinating - cultures of the Maori and Rapa Nui. These civilizations all have a history interwoven with magical practice and beliefs, and will round out our discussions on the major civilizations of the planet.'
      },
      {
        subject: 'Care of Magical Creatures',
        image: 'src/assets/img/hagrid_hut.jpg',
        desc: 'In your final year of Care of Magical Creatures, fifteen magical creatures will round out your education. These creatures are some of the most dangerous and interesting that we have covered to date. Additionally, creatures you may not be familiar with, as they are not categorized by the Ministry of Magic, will be discussed to ensure you gain a thorough understanding of the types of creatures you may encounter. Finally, the last year-long project will be completed.'
      },
      {
        subject: 'Charms',
        image: 'src/assets/img/charms_ZBoDbCX.jpg',
        desc: 'Year Seven of Charms covers advanced charms theory and its applications. We will deal with theoretical aspects like the limits of magic and experimental charms. Practical work will focus on larger scale enchantments and self-inflicting charms. This course also aims to prepare you for your N.E.W.T. at the end of the year.'
      },
      {
        subject: 'Defense Against the Dark Arts',
        image: 'src/assets/img/dada2.jpg',
        desc: 'In this final course for Defense Against the Dark Arts, we will be exploring the worst aspects of the Dark Arts. Using the lens of human rights, we will be looking at the most evil Dark Arts, exploring why they violate basic human rights, and how to defend ourselves against them if it is at all possible. This will be the most rigorous term in Defense Against the Dark Arts, so do not enter the classroom lightly or with a faint heart.'
      },
      {
        subject: 'Mythology',
        image: 'src/assets/img/MYTH.jpg',
        desc: 'In this final year of Mythology, journey to the East and explore the vast variety it has to offer. So begins your whirlwind tour of Asian myths and folklore.'
      }
    ]
  })
})
