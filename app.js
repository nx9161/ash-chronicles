"use strict";

const chapters = [
  {id:"kanto",label:"Kanto",title:"A boy. A partner. A promise.",kicker:"CHAPTER 01 / KANTO",location:"WHERE IT ALL BEGAN",image:"journey",description:"A late start in Pallet Town puts a stubborn Pikachu at Ash's side. Trust takes time, but the two find it on the road with Misty and Brock. The Indigo League ends in the top 16—an early lesson that wanting a dream and growing into it are different things.",companions:"Misty, Brock & Pikachu",milestone:"Indigo League · Top 16"},
  {id:"orange",label:"Orange Islands",title:"Finding his sea legs.",kicker:"CHAPTER 02 / ORANGE ISLANDS",location:"BEYOND THE FAMILIAR SHORE",image:"journey",description:"With Misty and Tracey along for the ride, Ash trades familiar roads for an island adventure. Lapras carries the friends between challenges, and Ash learns to adapt. A victory over Drake at the Orange League is a hard-earned sign of how far he and his partners have come.",companions:"Misty, Tracey & Lapras",milestone:"Orange League · Defeats Drake"},
  {id:"johto",label:"Johto",title:"A rivalry. A turning point.",kicker:"CHAPTER 03 / JOHTO",location:"OLD FRIENDS, NEW HORIZONS",image:"journey",description:"Reunited with Brock and Misty, Ash discovers a new region without leaving his old rivalries behind. At the Silver Conference, his long-awaited battle against Gary becomes a milestone of its own. Ash reaches the top eight, carrying greater patience and respect into the road ahead.",companions:"Misty, Brock & his growing team",milestone:"Silver Conference · Top 8"},
  {id:"hoenn",label:"Hoenn & Frontier",title:"More ways to be strong.",kicker:"CHAPTER 04 / HOENN & BATTLE FRONTIER",location:"THE COURAGE TO START AGAIN",image:"journey",description:"May, Max, and Brock share a journey that makes room for more than one kind of dream. After a top-eight finish in Hoenn, Ash returns to Kanto for the Battle Frontier. Seven Frontier Symbols mark a new level of skill—but the next adventure still calls louder than settling down.",companions:"May, Max & Brock",milestone:"Hoenn · Top 8 / Seven Frontier Symbols"},
  {id:"sinnoh",label:"Sinnoh",title:"Strength built on trust.",kicker:"CHAPTER 05 / SINNOH",location:"BELIEVE IN THE PARTNER BESIDE YOU",image:"storm",description:"Dawn's ambitions grow alongside Ash's, while Paul's harsh training philosophy challenges everything Ash believes. Infernape's journey gives that conflict a personal heart. Ash's victory over Paul and top-four finish in the Sinnoh League show the power of patience, trust, and refusing to give up on a partner.",companions:"Dawn, Brock & Infernape",milestone:"Lily of the Valley Conference · Top 4"},
  {id:"unova",label:"Unova",title:"A whole new world.",kicker:"CHAPTER 06 / UNOVA",location:"STAY CURIOUS",image:"journey",description:"Unfamiliar Pokémon and new friends make Unova feel like another fresh start. Iris and Cilan bring their own perspectives as Ash learns through surprises, mistakes, and spirited battles. A top-eight finish at the Vertress Conference becomes another chapter—not the last word on his dream.",companions:"Iris, Cilan & Pikachu",milestone:"Vertress Conference · Top 8"},
  {id:"kalos",label:"Kalos",title:"A bond beyond words.",kicker:"CHAPTER 07 / KALOS",location:"WHEN THE WORLD NEEDS YOU",image:"storm",description:"With Serena, Clemont, and Bonnie, Ash grows into a trainer others look up to. His connection with Greninja becomes extraordinary, carrying them to runner-up at the Kalos League. When Team Flare threatens the region, the friends' courage matters far beyond the stadium.",companions:"Serena, Clemont, Bonnie & Greninja",milestone:"Kalos League · Runner-up"},
  {id:"alola",label:"Alola",title:"A place to call home.",kicker:"CHAPTER 08 / ALOLA",location:"FAMILY IS PART OF THE JOURNEY",image:"journey",description:"Life at the Pokémon School gives Ash something new: a home base and a whole circle of friends. Everyday adventures with his school family become as meaningful as the battles. At the Manalo Conference, Ash becomes the first Alola League Champion, with an entire community cheering him on.",companions:"Kukui, his school friends & his Alola team",milestone:"First Alola League Champion"},
  {id:"journeys",label:"Journeys",title:"The world is watching.",kicker:"CHAPTER 09 / POKÉMON JOURNEYS",location:"FROM PALLET TOWN TO THE WORLD",image:"champion",description:"Traveling with Goh, Ash reconnects with familiar faces and takes on the World Coronation Series. A remarkable team of six carries him into the Masters Eight. Against Leon, with Pikachu at his side, years of friendship and perseverance culminate in a world championship victory.",companions:"Goh & his world championship team",milestone:"World Coronation Series · Champion"},
  {id:"farewell",label:"The road ahead",title:"A dream with no finish line.",kicker:"CHAPTER 10 / TO BE A POKÉMON MASTER",location:"SOMEWHERE, ANOTHER ADVENTURE",image:"journey",description:"Misty and Brock return for one more stretch of road. After the trophies and titles, Ash keeps thinking about what being a Pokémon Master means to him. His answer points toward friendship with Pokémon, and a world still full of possibilities. His story leaves us with an open road.",companions:"Misty, Brock & Pikachu",milestone:"The adventure continues"}
];

const team = [
  {name:"Pikachu",types:["Electric"],symbol:"ϟ",kicker:"01 / THE PARTNER FROM DAY ONE",story:"A reluctant first partner became the constant at the center of Ash's world. From protecting each other on the first day to facing Leon's Charizard, Pikachu carries a bond built over countless small acts of trust.",bond:"THE HEART OF THE JOURNEY."},
  {name:"Dragonite",types:["Dragon","Flying"],symbol:"✧",kicker:"02 / A HEART AS BIG AS ITS WINGS",story:"Warm, affectionate, and always ready for a hug, Dragonite brings gentleness and formidable strength to the same team. That generous spirit is part of what makes Ash's championship partners feel like a family.",bond:"KINDNESS HAS STRENGTH OF ITS OWN."},
  {name:"Gengar",types:["Ghost","Poison"],symbol:"◒",kicker:"03 / A NEW REASON TO TRUST",story:"After being abandoned by a previous Trainer, Gengar finds a fresh start with Ash. Mischief, loyalty, and a powerful Gigantamax form become parts of a story about being seen, welcomed, and trusted again.",bond:"EVERY PARTNER DESERVES A FRESH START."},
  {name:"Lucario",types:["Fighting","Steel"],symbol:"✦",kicker:"04 / CONNECTED BY AURA",story:"Beginning as a Riolu drawn to Ash's aura, Lucario grows alongside its Trainer. Their connection deepens into Mega Evolution, giving Ash a partner whose greatest strength begins with understanding.",bond:"SOME CONNECTIONS NEED NO WORDS."},
  {name:"Sirfetch’d",types:["Fighting"],symbol:"⚔",kicker:"05 / THE STEADFAST KNIGHT",story:"A determined Galarian Farfetch'd becomes a proud Sirfetch'd through training and persistence. With leek and shield in hand, it meets formidable opponents with the same resolve that keeps Ash moving forward.",bond:"STAND TALL. GIVE IT EVERYTHING."},
  {name:"Dracovish",types:["Water","Dragon"],symbol:"≈",kicker:"06 / WONDERFULLY UNEXPECTED",story:"A revived Fossil Pokémon with an exuberant personality, Dracovish adds an unexpected spark to Ash's team. Its unusual style and wholehearted enthusiasm prove there is no single way to belong among champions.",bond:"THERE IS MORE THAN ONE WAY TO BE GREAT."}
];

const moments = {
  bond:{title:"I'll choose you. Every time.",kicker:"THE FIRST BOND / KANTO",image:"storm",alt:"Original scene-inspired artwork of Ash and Pikachu in a storm",paragraphs:["Their first day together is anything but easy. Pikachu has no interest in following the boy who arrived late, and Ash has no idea how much he still has to learn. A partnership cannot be demanded simply because a journey has begun.","When danger closes in, Ash puts himself between Pikachu and the threat. The bravado falls away. What remains is a child willing to protect a partner who has barely accepted him. Pikachu answers with a courage of his own.","That first act of trust becomes the foundation beneath every badge, every goodbye, and every victory to come. Before they are champions, they learn to stand together."]},
  road:{title:"Get up. Go again.",kicker:"THE LONG ROAD / EVERY REGION",image:"journey",alt:"Original scene-inspired artwork of an open landscape at sunrise",paragraphs:["Ash's story has room for disappointment. Tournaments end before he wants them to. Strategies fail. New regions bring challenges that experience alone cannot solve. Each loss asks the same quiet question: what happens tomorrow?","He keeps traveling. Friends offer new ways of seeing the world. Rivals make him rethink his approach. Pokémon remind him that listening can be as important as commanding. Growth rarely arrives all at once.","Across the years, that willingness to begin again becomes a defining strength. The road matters because it changes the person walking it—and because there is always someone worth meeting around the next bend."]},
  champion:{title:"A champion. Still a dreamer.",kicker:"THE WORLD CHAMPIONSHIP / JOURNEYS",image:"champion",alt:"Symbolic pixel-art championship stadium with a golden trophy, teal spotlights, and confetti",paragraphs:["The World Coronation Series brings Ash face to face with the strongest Trainers he has ever challenged. His team is new, but the values holding it together have been there from the start: trust your partners, learn from the struggle, and give the moment everything you have.","The final against Leon comes down to the partner who has shared the whole road. Pikachu faces Charizard, and a dream that once seemed impossibly distant becomes real. Ash wins the world championship.","The title is a milestone, not the boundary of his curiosity. There are still Pokémon to meet, friendships to make, and places to discover. The boy from Pallet Town has become a champion without losing the part of himself that wanted to set out in the first place."]}
};

const byId = id => document.getElementById(id);
let currentChapter = 0;
let visited = new Set();
try {
  const stored = JSON.parse(localStorage.getItem("ash-chronicles-visited") || "[]");
  if (Array.isArray(stored)) visited = new Set(stored.filter(id => chapters.some(chapter => chapter.id === id)));
} catch { /* Browsing stays available when storage is unavailable. */ }

chapters.forEach((chapter,index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "chapter-tab";
  button.setAttribute("aria-pressed","false");
  button.setAttribute("aria-controls","chapter-title");
  const number = document.createElement("span");
  number.textContent = String(index+1).padStart(2,"0");
  button.append(number,document.createTextNode(chapter.label));
  button.addEventListener("click",() => selectChapter(index,true));
  byId("chapter-tabs").append(button);
});

function selectChapter(index,announce=false){
  currentChapter=index;
  const chapter=chapters[index];
  byId("chapter-title").textContent=chapter.title;
  byId("chapter-kicker").textContent=chapter.kicker;
  byId("chapter-description").textContent=chapter.description;
  byId("chapter-companions").textContent=chapter.companions;
  byId("chapter-milestone").textContent=chapter.milestone;
  byId("chapter-location").textContent=chapter.location;
  byId("chapter-art-number").textContent=String(index+1).padStart(2,"0");
  byId("chapter-counter").textContent=`CHAPTER ${String(index+1).padStart(2,"0")} / 10`;
  byId("chapter-image").src=`assets/${chapter.image}.jpg`;
  byId("chapter-image").alt="Atmospheric scene-inspired fan artwork illustrating the spirit of Ash's journey";
  const buttons=[...byId("chapter-tabs").children];
  buttons.forEach((button,i)=>button.setAttribute("aria-pressed",String(i===index)));
  byId("chapter-prev").disabled=index===0;
  byId("chapter-next").disabled=index===chapters.length-1;
  visited.add(chapter.id);
  try { localStorage.setItem("ash-chronicles-visited",JSON.stringify([...visited])); } catch { /* Optional local progress only. */ }
  byId("progress-label").textContent=`YOUR JOURNEY · ${visited.size} OF 10 CHAPTERS EXPLORED`;
  byId("progress-fill").style.width=`${visited.size*10}%`;
  if(announce){
    byId("chapter-announcement").textContent=`Chapter ${index+1}: ${chapter.label}. ${chapter.title}`;
    const container=byId("chapter-tabs"),button=buttons[index];
    const containerRect=container.getBoundingClientRect(),buttonRect=button.getBoundingClientRect();
    if(buttonRect.left<containerRect.left || buttonRect.right>containerRect.right){
      container.scrollTo({left:container.scrollLeft+buttonRect.left-containerRect.left-10,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
    }
  }
}
byId("chapter-prev").addEventListener("click",()=>selectChapter(Math.max(0,currentChapter-1),true));
byId("chapter-next").addEventListener("click",()=>selectChapter(Math.min(chapters.length-1,currentChapter+1),true));
selectChapter(0);

team.forEach((partner,index)=>{
  const button=document.createElement("button");
  button.type="button";
  button.className="team-selector";
  button.setAttribute("aria-pressed","false");
  const number=document.createElement("span");
  number.textContent=String(index+1).padStart(2,"0");
  button.append(number,document.createTextNode(partner.name));
  button.addEventListener("click",()=>selectPartner(index));
  byId("team-selectors").append(button);
});
function selectPartner(index){
  const partner=team[index];
  byId("team-name").textContent=partner.name;
  byId("team-kicker").textContent=partner.kicker;
  byId("team-story").textContent=partner.story;
  byId("team-bond").textContent=partner.bond;
  byId("team-symbol").textContent=partner.symbol;
  byId("team-types").replaceChildren(...partner.types.map(type=>{const badge=document.createElement("span");badge.textContent=type;return badge;}));
  [...byId("team-selectors").children].forEach((button,i)=>button.setAttribute("aria-pressed",String(i===index)));
}
selectPartner(0);

const dialog=byId("scene-dialog");
let dialogTrigger=null;
document.querySelectorAll("[data-moment]").forEach(button=>button.addEventListener("click",()=>{
  const scene=moments[button.dataset.moment];
  dialogTrigger=button;
  byId("scene-title").textContent=scene.title;
  byId("scene-kicker").textContent=scene.kicker;
  byId("scene-image").src=`assets/${scene.image}.jpg`;
  byId("scene-image").alt=scene.alt;
  byId("scene-story").replaceChildren(...scene.paragraphs.map(text=>{const p=document.createElement("p");p.textContent=text;return p;}));
  dialog.showModal();
  dialog.scrollTop=0;
  document.body.style.overflow="hidden";
  dialog.querySelector("button").focus();
}));
dialog.querySelector("button").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener("close",()=>{document.body.style.overflow="";dialogTrigger?.focus({preventScroll:true});});

let audioContext=null;
let soundEnabled=false;
let soundTimer=null;
let audioBusy=false;
const tones=[261.63,329.63,392,523.25,392,329.63];
let toneIndex=0;
function playTone(frequency,duration=.9,volume=.025){
  if(!soundEnabled || !audioContext || audioContext.state!=="running") return;
  const oscillator=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;
  oscillator.type="sine";oscillator.frequency.value=frequency;
  gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(volume,now+.06);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
  oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(now);oscillator.stop(now+duration);
  oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
}
function startMusic(){
  clearInterval(soundTimer);
  playTone(tones[toneIndex++%tones.length],1.4,.019);
  soundTimer=setInterval(()=>playTone(tones[toneIndex++%tones.length],1.4,.019),1800);
}
byId("sound-toggle").addEventListener("click",async()=>{
  if(audioBusy)return;
  audioBusy=true;
  const button=byId("sound-toggle");
  try{
    if(soundEnabled){soundEnabled=false;clearInterval(soundTimer);await audioContext.suspend();}
    else{
      const Audio=window.AudioContext||window.webkitAudioContext;
      if(!Audio)throw new Error("Audio unavailable");
      audioContext??=new Audio();
      await audioContext.resume();
      soundEnabled=true;startMusic();
    }
    button.setAttribute("aria-pressed",String(soundEnabled));
    button.querySelector("span").textContent=soundEnabled?"Sound on":"Sound off";
  }catch{soundEnabled=false;clearInterval(soundTimer);button.setAttribute("aria-pressed","false");button.querySelector("span").textContent="Sound unavailable";}
  finally{audioBusy=false;}
});
document.addEventListener("visibilitychange",()=>{
  if(!audioContext||!soundEnabled)return;
  if(document.hidden){clearInterval(soundTimer);audioContext.suspend().catch(()=>{});}
  else audioContext.resume().then(()=>{if(soundEnabled)startMusic();}).catch(()=>{});
});

let charges=0;
let fired=false;
function renderCharge(){
  byId("charge-label").textContent=`CHARGE ${charges} / 5`;
  document.querySelectorAll(".charge-bars>i").forEach((bar,index)=>bar.classList.toggle("charged",index<charges));
  byId("charge-button").disabled=charges===5&&!fired;
  byId("thunder-button").disabled=charges!==5||fired;
}
byId("charge-button").addEventListener("click",()=>{
  if(fired){fired=false;charges=0;byId("battle-game").classList.remove("fired");byId("charge-button").replaceChildren(document.createTextNode("Charge up ϟ"));byId("battle-message").textContent="Fresh start. Ready when you are.";}
  else if(charges<5){charges++;playTone(330+charges*90,.25,.035);byId("battle-message").textContent=charges===5?"Fully charged. Let that Thunderbolt fly!":`${charges} charged. Keep going, partner!`;}
  renderCharge();
  if(charges===5)byId("thunder-button").focus();
});
byId("thunder-button").addEventListener("click",()=>{
  if(charges!==5||fired)return;
  fired=true;
  byId("battle-game").classList.add("fired");
  byId("battle-message").textContent="Thunderbolt! That's the power of a great partnership.";
  byId("charge-button").textContent="Play again ↻";
  playTone(1046.5,.8,.05);
  renderCharge();
  byId("charge-button").focus();
});
