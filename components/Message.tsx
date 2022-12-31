import React from "react";
import styles from "../styles/Message.module.scss";
const Message = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>
        Cooking the perfect meal for you have never been so easy!
      </h2>
      <div className={styles["paragraphs"]}>
        <p>Hello there !</p>
        <p>
          I’m Harshit , leading Cook.AI , a startup which aims to revolutionize
          the way we , the humans consume food. We are bringing Artificial
          Intelligence and Digital technologies to personalize diets. With
          advancement of technology in almost every aspect of our life , it is
          now a need to modernize the very fundamental part of our life ,
          eating!{" "}
        </p>
        <p>
          My friends , Diet is a very important part of our life , every
          molecules that goes into our body decides how the body is going to
          function. A healthy diet is the stepping stone for a beautiful life.
          All of us have different nutritional requirements , so thus different
          taste requirements. We want to assure , that our users form a habit of
          meal planning using our super simplified application, that lets you
          decide what you eat based your personalized body requirements. With a
          database of 50,000 + Recipees from around the world , create the
          perfect meal plan for the week tracking every nutritional values that
          you want your body to consume. We will make sure that every
          ingredients of the recipes you’ve in you meal plan is delivered to
          you.
        </p>
        <p>Thank You</p>
      </div>
    </div>
  );
};

export default Message;
