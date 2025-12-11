import Container from "../Container/Container";

import css from "./Reviews.module.css";

const data = [
  {
    name: "Maria Tkachuk",
    testimonial:
      "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sergey Rybachok",
    testimonial:
      "I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.",
    photo:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Natalia Chatuk",
    testimonial:
      "I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Reviews = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Reviews</h2>
        <p className={css.subtitle}>
          Search for Medicine, Filter by your location
        </p>
        <ul className={css.list}>
          {data.map((item) => (
            <li className={css.item} key={item.testimonial}>
              <div className={css.thumb}>
                <img className={css.img} src={item.photo} alt={item.name} />
              </div>
              <h3 className={css.name}>{item.name}</h3>
              <p className={css.testimonial}>{item.testimonial}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Reviews;
