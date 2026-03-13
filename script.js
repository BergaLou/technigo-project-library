const yoga = [
  {
    title: 'Sunrise Chi Flow',
    level: 'Beginner',
    focus: 'Energy',
    duration: 30,
    description:
      'A gentle flow to invite positive energy into your day. This sequence combines breathwork and movement to awaken your body and mind.',
    image: 'yoga-images/yoga2.jpg'
  },
  {
    title: 'Evening Relaxation',
    level: 'Beginner',
    focus: 'Relaxation',
    duration: 45,
    description:
      'A gentle flow to help you unwind and relax after a long day. This sequence focuses on releasing tension and promoting a sense of calm.',
    image: 'yoga-images/yoga3.jpg'
  },
  {
    title: 'Power Vinyasa',
    level: 'Intermediate',
    focus: 'Strength',
    duration: 60,
    description:
      'A dynamic flow that builds heat and strength through a series of vinyasas.',
    image: 'yoga-images/yoga4.jpg'
  },
  {
    title: 'Gentle Hatha',
    level: 'Beginner',
    focus: 'Flexibility',
    duration: 30,
    description:
      'A gentle flow to improve flexibility and promote a sense of calm.',
    image: 'yoga-images/yoga5.jpg'
  },
  {
    title: 'Core Strength',
    level: 'Intermediate',
    focus: 'Strength',
    duration: 45,
    description:
      'A dynamic flow that builds heat and strength through a series of vinyasas.',
    image: 'yoga-images/yoga4.jpg'
  },
  {
    title: 'Restorative Flow',
    level: 'Beginner',
    focus: 'Relaxation',
    duration: 45,
    description:
      'A gentle flow to help you unwind and relax after a long day. This sequence focuses on releasing tension and promoting a sense of calm.',
    image: 'yoga-images/yoga3.jpg'
  },
  {
    title: "Sun Salutation Series",
    level: 'Beginner',
    focus: 'Energy',
    duration: 30,
    description:
      'A gentle flow to invite positive energy into your day. This sequence combines breathwork and movement to awaken your body and mind.',
    image: "yoga-images/yoga2.jpg"
  },
  {
    title: 'Vinyasa Flow',
    level: 'Intermediate',
    focus: 'Strength',
    duration: 60,
    description:
      'A dynamic flow that builds heat and strength through a series of vinyasas.',
    image: 'yoga-images/yoga4.jpg'
  },
  {
    title: 'Yin Yoga',
    level: 'Beginner',
    focus: 'Flexibility',
    duration: 40,
    description:
      'A gentle flow to improve flexibility and promote a sense of calm.',
    image: 'yoga-images/yoga3.jpg'
  },
  {
    title: 'Bedtime Bliss',
    level: 'Beginner',
    focus: 'Relaxation',
    duration: 45,
    description:
      "A gentle flow to help you unwind and relax after a long day. This sequence focuses on releasing tension and promoting a sense of calm.",
    image: 'yoga-images/yoga2.jpg'
  },
  {
    title: 'Morning Flow',
    level: 'Advanced',
    focus: 'Energy',
    duration: 30,
    description:
      'A gentle flow to start your day with energy and vitality.',
    image: 'yoga-images/yoga5.jpg'
  },
  {
    title: 'Power Yoga',
    level: 'Intermediate',
    focus: 'Strength',
    duration: 60,
    description:
      'A dynamic flow that builds heat and strength through a series of vinyasas.',
    image: 'yoga-images/yoga3.jpg'
  },
  {
    title: 'Flexibility Flow',
    level: 'Beginner',
    focus: 'Flexibility',
    duration: 40,
    description:
      'A gentle flow to improve flexibility and promote a sense of calm.',
    image: 'yoga-images/yoga5.jpg'
  },
  {
    title: 'Relaxation Flow',
    level: 'Advanced',
    focus: 'Relaxation',
    duration: 30,
    description:
      "A gentle flow to help you unwind and relax after a long day. This sequence focuses on releasing tension and promoting a sense of calm.",
    image: 'yoga-images/yoga2.jpg'
  },
  {
    title: 'Sunset Serenity',
    level: 'Beginner',
    focus: 'Relaxation',
    duration: 35,
    description:
      'A gentle flow to help you unwind and relax after a long day. This sequence focuses on releasing tension and promoting a sense of calm.',
    image: 'yoga-images/yoga4.jpg'
  },
  {
    title: 'Core Power',
    level: 'Advanced',
    focus: 'Strength',
    duration: 45,
    description:
      'A dynamic flow that builds heat and strength through a series of vinyasas.',
    Link: '',
    image: 'yoga-images/yoga3.jpg'
  },
  {
    title: "Full Body Flow",
    level: 'Intermediate',
    focus: 'Strength',
    duration: 60,
    description:
      "A dynamic flow that builds heat and strength through a series of vinyasas.",
    Link: '',
    image: 'yoga-images/yoga4.jpg'
  },
  {
    title: 'Gentle Stretch',
    level: 'Beginner',
    focus: 'Flexibility',
    duration: 30,
    description:
      'A gentle flow to improve flexibility and promote a sense of calm.',
    image: 'yoga-images/yoga3.jpg'
  }
]

const container = document.getElementById("yoga-container");

const displayYogaclasses = (yogaArray) => {
  container.innerHTML = "";
  yogaArray.forEach((yogaCard) => {
    container.innerHTML += `
      <div class="yoga-card">
        <img src="${yogaCard.image}" alt="${yogaCard.title}">
        <h3>${yogaCard.title}</h3>
        <p><strong>Level:</strong> ${yogaCard.level}</p>
        <p><strong>Focus:</strong> ${yogaCard.focus}</p>
        <p><strong>Duration:</strong> ${yogaCard.duration} minutes</p>
        <p>${yogaCard.description}</p>
      </div>
    `;
  });
};

const allBtn = document.getElementById("all-btn");
const beginnerBtn = document.getElementById("beginner-btn");
const intermediateBtn = document.getElementById("intermediate-btn");
const advancedBtn = document.getElementById("advanced-btn");
const timeBtn = document.getElementById("time-btn");
const surprisemeBtn = document.getElementById("surpriseme-btn");

allBtn.addEventListener("click", () => displayYogaclasses(yoga)); 

beginnerBtn.addEventListener("click", () => {
  const filtered = yoga.filter((yogaCard) => yogaCard.level ===
  "Beginner");
  displayYogaclasses(filtered);
});

intermediateBtn.addEventListener("click", () => {
  const filtered = yoga.filter((yogaCard) => yogaCard.level ===
  "Intermediate");
  displayYogaclasses(filtered);
});

advancedBtn.addEventListener("click", () => {
  const filtered = yoga.filter((yogaCard) => yogaCard.level ===
  "Advanced");
  displayYogaclasses(filtered);
});

timeBtn.addEventListener("click", () => {
  const sorted = [...yoga].sort((a, b) => a.duration - b.duration);
  displayYogaclasses(sorted);
});

surprisemeBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * yoga.length);
  const randomSelection = [yoga[randomIndex]];
  displayYogaclasses(randomSelection);
});

displayYogaclasses(yoga);