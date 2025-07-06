import { useState } from "react";
import daniel from "./assets/image-daniel.jpg";
import jonathan from "./assets/image-jonathan.jpg";
import jeanette from "./assets/image-jeanette.jpg";
import kira from "./assets/image-kira.jpg";
import patrick from "./assets/image-patrick.jpg";
import "./App.css";
import { Card } from "./components/card";
import { colors, type IPerson } from "./interfaces";

function App() {
  const [cards] = useState<Array<IPerson>>([
    {
      title:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      description:
        "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”",
      avatar: daniel,
      name: "Daniel Clifford",
      verified: true,
    },
    {
      title: "The team was very supportive and kept me motivated",
      description:
        "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “",
      avatar: jonathan,
      name: "Jonathan Walters",
      verified: true,
    },
    {
      title: "Such a life-changing experience. Highly recommended!",
      description:
        "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”",
      avatar: kira,
      name: "Kira Whittle",
      verified: true,
    },
    {
      title: "An overall wonderful and rewarding experience",
      description:
        "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
      avatar: jeanette,
      name: "Jeanette Harmon",
      verified: true,
    },
    {
      title:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      description:
        "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”",
      avatar: patrick,
      name: "Patrick Abrams",
      verified: true,
    },
  ]);

  return (
    <div className="grid md:grid-cols-2 md:grid-rows-4  lg:grid-cols-4 lg:grid-rows-2 gap-0 m-4">
      <div className="m-4 md:col-span-2 lg:col-span-2">
        <Card person={cards[0]} color={colors[0]} />
      </div>
      <div className="m-4 md:row-start-2 lg:row-start-1 lg:col-start-3">
        <Card person={cards[1]} color={colors[1]} />
      </div>
      <div className="m-4 md:col-span-2 md:col-start-1 md:row-start-4 lg:row-span-2 lg:col-start-4">
        <Card person={cards[2]} color={colors[2]} />
      </div>
      <div className="m-4 md:col-start-2 md:row-start-2  lg:col-start-1 ">
        <Card person={cards[3]} color={colors[3]} />
      </div>
      <div className="m-4 md:col-span-2 md:col-start-1 md:row-start-3 lg:col-span-2 lg:row-start-2">
        <Card person={cards[4]} color={colors[4]} />
      </div>
    </div>
  );
}

export default App;
