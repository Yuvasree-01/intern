import React, { useEffect, useState } from "react";

const LearningSite = () => {
  const [lessons, setLessons] = useState([]);
  const [showMoreContent, setShowMoreContent] = useState(null);

  useEffect(() => {
    // Fetch lessons from the backend API
    fetch("/api/lessons")
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowMoreClick = (content) => {
    setShowMoreContent(content);
  };

  return (
    <div className="container py-5">
      <div className="text-center">
        <h1>Lifestyle Module: Promoting Healthy Habits</h1>
        <h2>Sub Topic: Nutrition</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id} className="mb-4">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </li>
            ))}
          </ul>
          <div>
            <p>For more sub-topics:</p>
            <button
              className="btn btn-primary"
              onClick={() => handleShowMoreClick("Vitamins Content")}
            >
              Show More: Vitamins
            </button>
            {showMoreContent === "Vitamins Content" && (
              <div className="mt-4">
                <h3>Vitamins</h3>
                <img
                  src="https://static.toiimg.com/thumb/msid-70990864,imgsize-137067,width-400,resizemode-4/70990864.jpg"
                  alt="Vitamins"
                  className="img-fluid"
                />
                <p>
                Vitamins are organic molecules (or a set of closely related molecules called vitamers) that are essential to an organism in small quantities for proper metabolic function. 
                Essential nutrients cannot be synthesized in the organism in sufficient quantities for survival, and therefore must be obtained through the diet. 
                For example, Vitamin C can be synthesized by some species but not by others; it is not considered a vitamin in the first instance but is in the second.
                Most vitamins are not single molecules, but groups of related molecules called vitamers.
                For example, there are eight vitamers of vitamin E: four tocopherols and four tocotrienols.
                Major health organizations list thirteen vitamins:

                Vitamin A (all-trans-retinols, all-trans-retinyl-esters, as well as all-trans-beta-carotene and other provitamin A carotenoids)
                Vitamin B1 (thiamine)
                Vitamin B2 (riboflavin)
                Vitamin B3 (niacin)
                Vitamin B5 (pantothenic acid)
                Vitamin B6 (pyridoxine)
                Vitamin B7 (biotin)
                Vitamin B9 (folic acid and folates)
                Vitamin B12 (cobalamins)
                Vitamin C (ascorbic acid and ascorbates)
                Vitamin D (calciferols)
                Vitamin E (tocopherols and tocotrienols)
                Vitamin K (phylloquinones, menaquinones, and menadiones)

                Some sources include a fourteenth, choline.[6]

                Vitamins have diverse biochemical functions. Vitamin A acts as a regulator of cell and tissue growth and differentiation. 
                Vitamin D provides a hormone-like function, regulating mineral metabolism for bones and other organs. 
                The B complex vitamins function as enzyme cofactors (coenzymes) or the precursors for them. Vitamins C and E function as antioxidants.
                Both deficient and excess intake of a vitamin can potentially cause clinically significant illness, although excess intake of water-soluble vitamins is less likely to do so.
                All the vitamins were discovered between 1913 and 1948. Historically, when intake of vitamins from diet was lacking, the results were vitamin deficiency diseases. 
                Then, starting in 1935, commercially produced tablets of yeast-extract vitamin B complex and semi-synthetic vitamin C became available.This was followed in the 1950s by the mass production and marketing of vitamin supplements, including multivitamins, to prevent vitamin deficiencies in the general population.
                Governments have mandated the addition of some vitamins to staple foods such as flour or milk, referred to as food fortification, to prevent deficiencies.
                Recommendations for folic acid supplementation during pregnancy reduced risk of infant neural tube defects.
                </p>
              </div>
            )}
            <br />
            <button
              className="btn btn-primary"
              onClick={() => handleShowMoreClick("Nutrition Content")}
            >
              Show More: Nutrition
            </button>
            {showMoreContent === "Nutrition Content" && (
              <div className="mt-4">
                <h3>Nutrition</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-Yv5QkUIoi6KHMd3mQjva17Ah-oieKnXOuXhSSrSR3BxbKXLJ-IwnL70hxlq61beqPs&usqp=CAU"
                  alt="Nutrition"
                  className="img-fluid"
                />
                <p>
                Nutrition is the biochemical and physiological process by which an organism uses food to support its life.
                It provides organisms with nutrients, which can be metabolized to create energy and chemical structures.
                Failure to obtain sufficient nutrients causes malnutrition. Nutritional science is the study of nutrition, though it typically emphasizes human nutrition.
                The type of organism determines what nutrients it needs and how it obtains them. Organisms obtain nutrients by consuming organic matter, consuming inorganic matter, absorbing light, or some combination of these. 
                Some can produce nutrients internally by consuming basic elements, while some must consume other organisms to obtain pre-existing nutrients.
                All forms of life require carbon, energy, and water as well as various other molecules. 
                Animals require complex nutrients such as carbohydrates, lipids, and proteins, obtaining them by consuming other organisms.Humans have developed agriculture and cooking to replace foraging and advance human nutrition.
                Plants acquire nutrients through the soil and the atmosphere. Fungi absorb nutrients around them by breaking them down and absorbing them through the mycelium.
                Nutrients are substances that provide energy and physical components to the organism, allowing it to survive, grow, and reproduce. Nutrients can be basic elements or complex macromolecules. Approximately 30 elements are found in organic matter, with nitrogen, carbon, and phosphorus being the most important. 
                Macronutrients are the primary substances required by an organism, and micronutrients are substances required by an organism in trace amounts. 
                Organic micronutrients are classified as vitamins, and inorganic micronutrients are classified as minerals.
                Nutrients are absorbed by the cells and used in metabolic biochemical reactions. 
                These include fueling reactions that create precursor metabolites and energy, biosynthetic reactions that convert precursor metabolites into building block molecules, polymerizations that combine these molecules into macromolecule polymers, and assembly reactions that use these polymers to construct cellular structures.
                Some of the types are:
                # Nutritional groups
                # Diet
                # Nutrient cycle
                # Foraging
                </p>
              </div>
            )}
            <br />
            <button
              className="btn btn-primary"
              onClick={() => handleShowMoreClick("Yoga Content")}
            >
              Show More: Yoga
            </button>
            {showMoreContent === "Yoga Content" && (
              <div className="mt-4">
                <h3>Yoga</h3>
                <img
                  src="https://images.indianexpress.com/2023/03/yoga-for-beginners.jpg"
                  alt="Yoga"
                  className="img-fluid"
                />
                <p>
                Yoga is an old discipline of Hindu philosophy from India. It is both spiritual and physical. 
                Yoga uses breathing techniques, exercise and meditation. It helps to improve health and happiness.
                Yoga is the Sanskrit word for union. Patanjali was a pioneer of classical yoga. He defined yoga as "the cessation of the modification of the mind" (stopping changing the mind).
                A person doing yoga will move from one posture (called asana) to another, but there are also other aspects which are important in yoga, such as breath-work, mantras, mudras (postures of the hands and fingers), meditation and much more (for more information, check out the Yoga Sutras). 
                For example, the "sun-salutation" contains 12 poses of asanas, one after the other, and is said to help balance body and soul. There is a specific mantra for each asana. The "sun-salutation" is popularly known as "Suryanamaska".
                History:
                Yoga was introduced by Indian Ascetic. Ascetic practices (tapas) are referenced in the Brāhmaṇas (900 to 500 BC), early commentaries on the Vedas. Several seals discovered at Indus Valley Civilization (~3300–1700 B.C.) sites in Pakistan depict figures in positions resembling a common yoga or meditation pose. 
                The pose shows "a form of ritual discipline, suggesting a precursor of yoga", according to archaeologist Gregory Possehl. Scholars think there must be some type of connection between the Indus Valley seals and later yoga and meditation practices, though there is no conclusive evidence.

                Important yoga words
                    Yama: Positive Rules of meditations.
                    Niyama: Prohibitory Rules of meditations.
                    Asanas: Physical postures and movements.
                    Pranayama: Breathing techniques
                    Pratyahara: Controlling the mind.
                    Dharana: Gazing inward.
                    Dhyana: Meditation with object.
                    Samadhi: Meditation without object.
                Types of yoga
                    Classification based on mind and body.
                        Rajayoga: Raja yoga focuses on meditation and contemplation in order to fully realize the self.
                        Hathayoga: Hatha yoga is the practice of yoga postures, or asana, using the body as a vehicle for self-transformation.
                    Classification based on way of spiritual life.
                        Gyanyoga: It is a way of knowledge.
                        Karmayoga: It is a way of work.
                        Bhaktiyoga: It is a way of worship.
                    Classification based on a way of other things.
                        Swaryoga: Emphasizes the most on breathing.
                        Kriyayoga: Emphasizes the most on blending Karmayoga (Tapa), Gyanyoga (Swadhyay) and Bhaktiyoga (Ishwar Pranidhan).
                Some popular Yogasana:
                        Pawanmuktasana :(gas release pose) used generally to release the gases in the stomach
                        Ushtrasana: A yogasana is a pose in which a person can sit. The intention of yogasana is to exercise the body and make it free of pains and problems.
                        Pawanmuktasana: This yogasana helps to release gas in the stomach.
                        Ushtrasana: This yogasana makes the spine more relaxed.
                </p>
              </div>
            )}
            <br />
            <button
              className="btn btn-primary"
              onClick={() => handleShowMoreClick("Meditation Content")}
            >
              Show More: Meditation
            </button>
            {showMoreContent === "Meditation Content" && (
              <div className="mt-4">
                <h3>Meditation</h3>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Meditation"
                  className="img-fluid"
                />
                <p>
                Meditation tries to get past the "thinking" mind and aims to go into a deeper state of relaxation or awareness.
                Meditation is a practice where an individual trains attention and awareness to get to a clearer and calmer state.
                Scholars have found meditation difficult to define. The practices vary both between traditions and within them.
                It is a common practice in many religions including Buddhism, Christianity (sometimes), Taoism, Hinduism (where Yoga is important) and other religions.
                Meditation has now become a modern trend, showing many health benefits.The initial origin of meditation is from the Vedic times of India.
                Buddhist meditation
                In Buddhism, three things are very important: being a good person, making the mind stronger, and understanding (Insight or Wisdom) about why people are in pain (Dukkha). 
                For Buddhists, meditation is used to calm the mind so that the mind can better see the cause of pain. 
                Buddhists believe that this type of seeing can end pain.
                Buddhist meditation is not just used for spiritual reasons. Research shows that Buddhist meditation lowers stress, anxiety and depression.
                Most types of Buddhist meditation focus on something. The most popular things to focus on include breath, metta or Loving-Kindness towards all, other recollections, situational mindfulness and religious images and sounds.
                Christian meditation:
Christians sometimes meditate by thinking about small parts of the Bible, or by saying the words of a prayer to themselves over and over. Meditation is an expression of Christian prayer. In the Catechism of the Catholic Church is specified that by means of meditation "The mind seeks to understand the why and how of the Christian life, in order to adhere and respond to what the Lord is asking"; 
also it is pointed out that "meditation engages thought, imagination, emotion, and desire. This mobilization of faculties is necessary in order to deepen our convictions of faith, prompt the conversion of our heart, and strengthen our will to follow Christ".
Meditation is principally made on the Sacred Scriptures with the Gospels, liturgical texts, writings of the spiritual fathers, and meditative devotions.
Meditation is a significant part of the devotion of the Rosary; "by virtue of its meditative character, with the tranquil succession of Hail Marys, the Rosary has a peaceful effect on those who pray it, disposing them to receive and experience in their innermost depths, and to spread around them, that true peace which is the special gift of the Risen Lord 

Hindu meditation
Meditation has a long tradition in Hinduism. It comes in many different styles. Here is a short list:

Transcendental Meditation
Yoga Meditation
Self-punishment
Fasting

Meditation in Hinduism is used for different reasons. Some of the reasons are:
Deeper understanding of scriptural subjects
Evolvement of the soul
Cleaning the mind
To change the life situation of a person
Related pages
Hare Krishna
Inner peace
Zen
Yoga
Spirituality.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSite;
