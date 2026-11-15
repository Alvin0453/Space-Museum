const M=[
{id:'surveyor3',name:'Surveyor 3',world:'moon',type:'Robotic lander',status:'done',arrive:1967,end:1967,
 launch:'17 April 1967',location:'Oceanus Procellarum (Mare Insularum), Moon',
 purpose:`Check that the lunar ground could carry a crewed lander, and photograph the surface up close.`,
 found:`Its scoop dug trenches that showed lunar soil is firm enough to land on, and it sent home more than 6,000 photos.`,
 now:`Still on the Moon. In November 1969 the Apollo 12 crew walked to it and took its camera and other parts back to Earth.`,
 kid:`A robot scout that tested the ground before astronauts arrived.`,
 story:[`I landed in April 1967 and bounced twice before I settled, because my engines would not switch off. Nobody warned the Moon.`,`I dug small trenches, sent home thousands of pictures, then the long lunar night took my power.`,`Two and a half years later, two astronauts walked up to me and unbolted my camera. I had gone quiet, but I was still useful.`]},
{id:'retro',name:'Apollo laser reflectors',world:'moon',type:'Passive mirror arrays',status:'passive',arrive:1969,end:null,
 launch:'July 1969 (Apollo 11), then Apollo 14 and Apollo 15',location:'Sea of Tranquility, Fra Mauro and Hadley–Apennine, Moon',
 purpose:`Reflect laser beams straight back to Earth so scientists can time the round trip and measure the distance to the Moon.`,
 found:`Showed that the Moon drifts away from Earth by about 3.8 centimetres a year, and has helped test theories of gravity.`,
 now:`Still on the Moon and still in use. They need no power. Over the decades the arrays have become about ten times less efficient, but they still work.`,
 kid:`Mirrors on the Moon that scientists still bounce lasers off.`,
 story:[`I am not a robot. I am a panel of glass corner mirrors, with no battery, no radio and nothing that can break.`,`When a laser from Earth finds me, I send a few particles of light straight back. More than fifty years of timing those echoes showed that the Moon is leaving, about as fast as your fingernails grow.`]},
{id:'lrv',name:'Lunar Roving Vehicles',world:'moon',type:'Crewed rovers',status:'done',arrive:1971,end:1972,
 launch:'26 July 1971 (Apollo 15), 16 April 1972 (Apollo 16), 7 December 1972 (Apollo 17)',location:'Hadley–Apennine, Descartes Highlands and Taurus–Littrow, Moon',
 purpose:`Carry two astronauts and their tools much farther from the lander than they could walk.`,
 found:`The rovers let crews reach different kinds of rock, and the Apollo 15, 16 and 17 missions brought home most of the Moon rock collected during Apollo.`,
 now:`Three rovers are parked on the Moon where the last crews left them. Nobody has driven them since 1972.`,
 kid:`Three Moon buggies, parked since 1972.`,
 story:[`There were three of us, folded flat like luggage on the side of a lander.`,`We carried astronauts to craters and hillsides no one could have walked to. When the crews left, we stayed parked, with our cameras pointing at the place where their lander lifted off.`]},
{id:'sojourner',name:'Sojourner',world:'mars',type:'Microwave-oven-sized rover',status:'silent',arrive:1997,end:1997,
 launch:'4 December 1996 (Pathfinder). Landed 4 July 1997',location:'Ares Vallis, Mars',
 purpose:`Prove that a small rover could drive on Mars, and test the rocks around its lander.`,
 found:`It measured the chemistry of Martian rocks and showed that a rover can survive and work on another planet.`,
 now:`Resting beside its Pathfinder lander. The lander's last signal reached Earth in September 1997.`,
 kid:`The first rover on Mars, about the size of a microwave oven.`,
 story:[`I was planned to work for one week. I worked for 83 days.`,`I never wandered far, because I could only talk to Earth through my lander. When the lander went quiet, I had no way to call home. I think I proved my point first.`]},
{id:'spirit',name:'Spirit',world:'mars',type:'Mars Exploration Rover',status:'silent',arrive:2004,end:2010,
 launch:'10 June 2003. Landed January 2004',location:'Gusev Crater, Mars',
 purpose:`Act as a robot geologist and look for rocks that formed in water.`,
 found:`Found signs of ancient hot-spring-like environments, including soil that was almost pure silica.`,
 now:`Stuck in soft sand since 2009. Last heard from in March 2010, and the mission officially ended in May 2011.`,
 kid:`A robot geologist whose broken wheel dug up a big clue.`,
 story:[`One of my wheels stopped turning, so I drove dragging it behind me.`,`That stuck wheel plowed up bright soil that scientists found was nearly pure silica, a sign of hot water long ago. A broken part made one of my best discoveries.`,`In 2009 I sank into soft sand. When winter came, my solar panels could not catch enough sun.`]},
{id:'opportunity',name:'Opportunity',world:'mars',type:'Mars Exploration Rover',status:'silent',arrive:2004,end:2018,
 launch:'7 July 2003. Landed January 2004',location:'Meridiani Planum, Mars',
 purpose:`Look for evidence of past water. It was designed to work for 90 Martian days and drive about one kilometre.`,
 found:`Found rock that formed in liquid water, including iron-rich "blueberry" spheres, and drove more than 45 kilometres.`,
 now:`Stopped communicating during a global dust storm in June 2018. NASA declared the mission over on 13 February 2019.`,
 kid:`A rover built for 90 days that worked for almost 15 years.`,
 story:[`They gave me 90 Martian days. I worked for almost 15 years.`,`I drove farther than any rover before me and found rocks that only form in water. Then, in the summer of 2018, a dust storm covered the whole planet and blocked my sunlight. I went quiet, and no one has heard from me since.`]},
{id:'insight',name:'InSight',world:'mars',type:'Stationary lander',status:'silent',arrive:2018,end:2022,
 launch:'5 May 2018. Landed 26 November 2018',location:'Elysium Planitia, Mars',
 purpose:`Listen for marsquakes to learn what the inside of Mars is like.`,
 found:`Detected more than 1,313 marsquakes and helped measure the size of the Martian core and the thickness of its crust.`,
 now:`Stopped responding in December 2022. NASA ended the mission on 21 December 2022 after dust built up on its solar panels.`,
 kid:`A lander that listened for earthquakes, but on Mars.`,
 story:[`I never moved. I sat on a flat plain, put a seismometer on the ground and listened.`,`Marsquakes told scientists what is deep inside the planet, the way an echo tells you how big a room is. Slowly, dust settled on my solar panels, and my power faded.`]},
{id:'ingenuity',name:'Ingenuity',world:'mars',type:'Helicopter',status:'done',arrive:2021,end:2024,
 launch:'30 July 2020 (carried under Perseverance). First flight 19 April 2021',location:'Jezero Crater, Mars. Final rest at Valinor Hills',
 purpose:`Prove that powered flight works in Mars's thin air. Engineers planned only five flights.`,
 found:`Made 72 flights, scouted routes for Perseverance, and gave engineers real data for future Mars aircraft.`,
 now:`Grounded since a rotor blade was damaged in January 2024. NASA declared the mission over on 25 January 2024.`,
 kid:`The first aircraft to fly on another planet.`,
 story:[`My first flight lasted less than 40 seconds, and I rose only a few metres. The whole team cheered anyway.`,`They planned five flights. I flew 72. In the end a rotor blade was damaged, and I was grounded. Every flight I made is now a lesson for the next flying machine.`]},
{id:'curiosity',name:'Curiosity',world:'mars',type:'Nuclear-powered rover',status:'active',arrive:2012,end:null,
 launch:'26 November 2011. Landed 6 August 2012',location:'Gale Crater and Mount Sharp, Mars',
 purpose:`Find out whether Mars once had the right conditions for life.`,
 found:`Found an ancient streambed in 2012, confirmed an ancient habitable lake environment, and detected organic molecules in 3-billion-year-old mudstone in 2018.`,
 now:`Still working and climbing Mount Sharp more than 14 years after landing. Software upgrades help it save energy.`,
 kid:`A car-sized science lab that is still climbing a Martian mountain.`,
 story:[`I arrived on cables, lowered from a rocket-powered crane like a package on a rope.`,`Years later I am still climbing Mount Sharp, layer by layer, reading the rocks like pages of an old book. My power is fading slowly, so I have learned to do more things at once and sleep early.`]},
{id:'perseverance',name:'Perseverance',world:'mars',type:'Mars 2020 rover',status:'active',arrive:2021,end:null,
 launch:'30 July 2020. Landed 18 February 2021',location:'Jezero Crater, Mars',
 purpose:`Search for signs of ancient microbial life and collect rock samples that a future mission could bring to Earth.`,
 found:`Explored an ancient river delta, sealed rock cores in tubes, and its MOXIE instrument made oxygen from Martian air.`,
 now:`Still working in Jezero Crater and in excellent shape. NASA says it could keep going through at least 2031. Whether its samples will come home is still uncertain.`,
 kid:`A rover collecting rock samples that might hold signs of ancient life.`,
 story:[`I am collecting rocks in sealed tubes, the way you might collect shells at a beach for someone who has not arrived yet.`,`Nobody is sure when, or how, those tubes will reach Earth. So I keep exploring, because the work is worth doing either way.`]},
{id:'voyager1',name:'Voyager 1',world:'deep',type:'Interplanetary probe',status:'active',arrive:1977,end:null,
 launch:'5 September 1977',location:'Interstellar space, about 25.9 billion km from Earth',
 purpose:`Study Jupiter and Saturn up close, then keep going.`,
 found:`Flew past Jupiter in 1979 and Saturn in 1980, and in August 2012 became the first spacecraft to enter interstellar space.`,
 now:`Still sending data, but its power is fading and several instruments have been switched off. It reaches one light-day from Earth on 18 November 2026.`,
 kid:`The farthest human-made object, still talking to Earth.`,
 story:[`I left in 1977 to visit two planets. I am still going.`,`A message from Earth now takes about a day to reach me, and my reply takes another day to come back. I carry a golden record of Earth's sounds and pictures, in case anyone out here is listening.`]}
];
const byId=Object.fromEntries(M.map(m=>[m.id,m]));
const ST={active:'Still working',passive:'Still in use',done:'Mission complete',silent:'Stopped communicating'};
const WN={moon:'The Moon',mars:'Mars',deep:'Deep space',all:'All machines'};
const STATE_NOW={active:'working',passive:'working',done:'resting',silent:'resting'};

const MOON_SITES=[
 {id:'a11',short:'Apollo 11',name:'Apollo 11 · Sea of Tranquility',lat:.67,lon:23.47,side:'r',items:['Laser reflector array','Early Apollo seismometer'],m:'retro'},
 {id:'a12',short:'Apollo 12',name:'Apollo 12 · Ocean of Storms',lat:-3.01,lon:-23.42,side:'l',items:['Surveyor 3 lander, a short walk from the Apollo 12 lander','Apollo science station','Apollo 12 lander descent stage'],m:'surveyor3'},
 {id:'a14',short:'Apollo 14',name:'Apollo 14 · Fra Mauro',lat:-3.65,lon:-17.47,side:'r',items:['Laser reflector array','Apollo science station'],m:'retro'},
 {id:'a15',short:'Apollo 15',name:'Apollo 15 · Hadley–Apennine',lat:26.13,lon:3.63,side:'r',items:['Lunar Roving Vehicle','Largest laser reflector array, three times the size of the first two','Apollo science station'],m:'lrv'},
 {id:'a16',short:'Apollo 16',name:'Apollo 16 · Descartes Highlands',lat:-8.97,lon:15.5,side:'r',items:['Lunar Roving Vehicle','Apollo science station'],m:'lrv'},
 {id:'a17',short:'Apollo 17',name:'Apollo 17 · Taurus–Littrow',lat:20.19,lon:30.77,side:'r',items:['Lunar Roving Vehicle','Apollo science station'],m:'lrv'}
];
const MARS_SITES=[
 {id:'m-path',short:'Sojourner',name:'Sojourner · Ares Vallis',lat:19.13,lon:-33.25,side:'r',items:['Sojourner rover','Pathfinder lander'],m:'sojourner'},
 {id:'m-opp',short:'Opportunity',name:'Opportunity · Meridiani Planum',lat:-1.95,lon:-5.53,side:'r',items:['Opportunity rover, silent since June 2018'],m:'opportunity'},
 {id:'m-jez',short:'Perseverance',name:'Perseverance · Jezero Crater',lat:18.44,lon:77.45,side:'r',items:['Perseverance rover, still working','Ingenuity helicopter, grounded at Valinor Hills'],m:'perseverance'},
 {id:'m-ins',short:'InSight',name:'InSight · Elysium Planitia',lat:4.5,lon:135.62,side:'l',items:['InSight lander, ended December 2022'],m:'insight'},
 {id:'m-cur',short:'Curiosity',name:'Curiosity · Gale Crater',lat:-4.59,lon:137.44,side:'r',items:['Curiosity rover, still working'],m:'curiosity'},
 {id:'m-spi',short:'Spirit',name:'Spirit · Gusev Crater',lat:-14.57,lon:175.47,side:'l',items:['Spirit rover, silent since March 2010'],m:'spirit'}
];
const E=[
 {y:1967,t:'Surveyor 3 lands on the Moon and digs the first trenches.',m:'surveyor3',w:'moon'},
 {y:1969,t:'Apollo 11 leaves the first laser reflector on the Moon.',m:'retro',w:'moon'},
 {y:1971,t:'Apollo 15 drives the first Moon rover.',m:'lrv',w:'moon'},
 {y:1977,t:'Voyager 1 launches toward Jupiter and Saturn.',m:'voyager1',w:'deep'},
 {y:1977,t:'The Apollo science stations on the Moon are switched off.',w:'moon'},
 {y:1997,t:'Sojourner becomes the first rover to drive on Mars.',m:'sojourner',w:'mars'},
 {y:2004,t:'Spirit and Opportunity arrive on opposite sides of Mars.',m:'spirit',w:'mars'},
 {y:2010,t:'Spirit sends its last message after getting stuck in sand.',m:'spirit',w:'mars'},
 {y:2012,t:'Curiosity lands on Mars. Voyager 1 enters interstellar space.',m:'curiosity',w:'mars'},
 {y:2018,t:'Opportunity falls silent in a dust storm. InSight lands.',m:'opportunity',w:'mars'},
 {y:2021,t:'Perseverance lands. Ingenuity makes the first flight on Mars.',m:'perseverance',w:'mars'},
 {y:2022,t:'NASA ends the InSight mission.',m:'insight',w:'mars'},
 {y:2024,t:'Ingenuity ends its mission after 72 flights.',m:'ingenuity',w:'mars'},
 {y:2026,t:'Voyager 1 reaches one light-day from Earth on 18 November.',m:'voyager1',w:'deep'}
];
const L=[
 {q:'Was Mars once wet?',eng:'Rovers with rock-grinding tools and cameras: Spirit, Opportunity and Curiosity.',sci:'Rocks that only form in liquid water, hot-spring-like deposits, an ancient streambed and a lake that could have supported life.',ms:['spirit','opportunity','curiosity']},
 {q:'Could life have existed there?',eng:'Drills, lasers and a chemistry lab on wheels, then tubes to store rock cores.',sci:'Organic molecules in 3-billion-year-old mudstone. Perseverance is saving rock cores that scientists on Earth could study in far greater detail.',ms:['curiosity','perseverance']},
 {q:'What is inside Mars?',eng:'A seismometer placed directly on the ground by InSight.',sci:'Marsquakes revealed the size of the core and the thickness of the crust.',ms:['insight']},
 {q:'Can we fly on other worlds?',eng:'A light helicopter with fast, counter-rotating rotors.',sci:'Flight is possible in Mars\'s thin air. Ingenuity\'s data now shapes designs for future Mars aircraft.',ms:['ingenuity']},
 {q:'Is the ground safe to land on?',eng:'A camera and a soil scoop on Surveyor 3.',sci:'The Moon\'s soil is firm enough to carry a lander, and parts brought back showed how hardware ages on the Moon.',ms:['surveyor3']},
 {q:'How far is the Moon, and is it moving?',eng:'Mirror arrays that need no power.',sci:'The Moon drifts away by about 3.8 centimetres a year. The echoes also help scientists test theories of gravity.',ms:['retro','lrv']},
 {q:'What lies beyond the Sun\'s bubble?',eng:'A 1977 spacecraft powered by a decaying plutonium source, still transmitting.',sci:'The first direct measurements from interstellar space, and a reminder of how long careful engineering can last.',ms:['voyager1']}
];
const Q=[
 {q:'Opportunity was built to work for 90 Martian days. About how long did it really work?',o:['Just 90 days','About six months','Almost 15 years','About three years'],a:2,w:'It worked from January 2004 until a dust storm silenced it in 2018.'},
 {q:'Which machine was the first to fly under power on another world?',o:['Curiosity','Sojourner','Surveyor 3','Ingenuity'],a:3,w:'Ingenuity made 72 flights over Jezero Crater, from an original plan of five.'},
 {q:'What do scientists still bounce lasers off on the Moon?',o:['Dust kicked up by Apollo rovers','Radio dishes left on the Moon','Reflectors left by Apollo crews','Antennas on the Surveyor lander'],a:2,w:'The arrays from Apollo 11, 14 and 15 need no power, so they still work.'},
 {q:'Which rover found organic molecules in 3-billion-year-old mudstone?',o:['Curiosity','Spirit','Opportunity','InSight'],a:0,w:'Curiosity announced the find in 2018, from Gale Crater.'},
 {q:'What was InSight built to listen for?',o:['Radio from aliens','Martian thunder','Rover footsteps','Marsquakes'],a:3,w:'Its seismometer detected more than 1,313 marsquakes.'},
 {q:'Which spacecraft is the most distant human-made object?',o:['Perseverance','Voyager 1','Ingenuity','The Apollo 17 rover'],a:1,w:'Voyager 1 is about 25.9 billion kilometres from Earth.'},
 {q:'Who took parts of Surveyor 3 back to Earth?',o:['The Apollo 11 crew','A robot arm','The Apollo 12 crew','Nobody did'],a:2,w:'In November 1969 the Apollo 12 crew took its camera and other parts home.'},
 {q:'What is Perseverance collecting for a possible trip back to Earth?',o:['Martian water in bottles','Rock cores in tubes','Live microbes','Spare rover parts'],a:1,w:'Whether and how the tubes will return is still uncertain.'}
];

/* ============ HELPERS ============ */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function rng(seed){let s=seed>>>0;return()=>{s=(s+0x6D2B79F5)>>>0;let t=s;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
const hex=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const mix=(a,b,t)=>{const A=hex(a),B=hex(b);return `rgb(${A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')})`};
const clamp=v=>Math.max(0,Math.min(1,v));

/* ============ SOUND EFFECTS (synthesized with Web Audio, no files) ============ */
const SFX=(()=>{
  let ctx=null,master=null,on=true,eng=null,vol=.8;
  try{const v=localStorage.getItem('bt-vol');if(v!=null)vol=+v}catch(e){}on=vol>0;
  function ac(){
    if(!on)return null;
    if(!ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;try{ctx=new C()}catch(e){return null}master=ctx.createGain();master.gain.value=vol*1.5;master.connect(ctx.destination)}
    if(ctx.state==='suspended')ctx.resume().catch(()=>{});return ctx;
  }
  function tone(f,d,type='sine',v=.15,slide=0,delay=0){const c=ac();if(!c)return;const t=c.currentTime+delay,o=c.createOscillator(),g=c.createGain();
    o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f+slide),t+d);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.0005,t+d);o.connect(g).connect(master);o.start(t);o.stop(t+d+.05)}
  let nbuf=null;function noise(d,v=.2,freq=800,type='lowpass',to=0,delay=0){const c=ac();if(!c)return;const t=c.currentTime+delay;
    if(!nbuf){nbuf=c.createBuffer(1,c.sampleRate*2,c.sampleRate);const a=nbuf.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=Math.random()*2-1}
    const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=nbuf;f.type=type;f.frequency.setValueAtTime(freq,t);if(to)f.frequency.exponentialRampToValueAtTime(to,t+d);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.0005,t+d);s.connect(f).connect(g).connect(master);s.start(t,Math.random());s.stop(t+d+.05)}
  const S={
    click(){tone(900,.06,'triangle',.09);tone(1350,.05,'triangle',.05,0,.03)},
    hover(){tone(1500,.035,'sine',.035)},
    whoosh(){noise(.55,.22,350,'bandpass',2600)},
    open(){tone(440,.12,'triangle',.09);tone(660,.16,'triangle',.08,0,.07)},
    close(){tone(660,.1,'triangle',.08,-260)},
    chime(){[659,880,1319].forEach((f,i)=>tone(f,.5,'sine',.12,0,i*.09))},
    card(){tone(523,.14,'triangle',.1);tone(784,.22,'triangle',.09,0,.09);noise(.25,.05,3000,'highpass')},
    right(){tone(660,.14,'sine',.12);tone(990,.25,'sine',.12,0,.1)},
    wrong(){tone(220,.28,'square',.06,-80)},
    blip(){tone(1200,.07,'sine',.08,300)},
    boost(){noise(.6,.28,250,'bandpass',2200);tone(160,.5,'sawtooth',.06,260)},
    jump(){tone(260,.28,'square',.06,520)},
    land(){tone(95,.22,'sine',.28,-40);noise(.16,.14,500)},
    thud(){tone(120,.2,'sine',.3,-70);noise(.14,.2,700)},
    zap(){tone(2000,.22,'sawtooth',.06,-1700)},
    hop(){noise(.7,.25,600,'lowpass',200);tone(90,.6,'sawtooth',.05,40)},
    ping(){tone(1250,1.2,'sine',.14,-950);tone(1250,.9,'sine',.05,-950,.35)},
    bot(){const n=3+(Math.random()*3|0);for(let i=0;i<n;i++)tone(700+Math.random()*900,.07,'square',.035,(Math.random()-.5)*400,i*.075)},
    stall(){for(let i=0;i<4;i++)tone(140-i*12,.09,'sawtooth',.07,-30,i*.1)},
    warn(){tone(880,.12,'square',.05);tone(880,.12,'square',.05,0,.22)},
    spark(){noise(.07,.12,3500,'highpass')},
    glitch(){for(let i=0;i<8;i++){noise(.08,.18,400+Math.random()*4000,'bandpass',0,i*.09);tone(100+Math.random()*900,.06,'square',.05,0,i*.09+.03)}},
    powerdown(){tone(520,2.2,'sawtooth',.11,-470);tone(260,2.4,'sine',.12,-220,.1)},
    tick(){tone(1000,.04,'square',.04)},
    start(){[392,523,659,784].forEach((f,i)=>tone(f,.25,'triangle',.09,0,i*.08))},
    moo(){tone(150,.9,'sawtooth',.13,-50);tone(152,.9,'sawtooth',.07,-55,.02);noise(.8,.05,300)},
    ufo(){for(let i=0;i<6;i++)tone(600+(i%2?260:0),.22,'sine',.07,i%2?-260:260,i*.18)},
    splat(){noise(.35,.3,900,'lowpass',150);tone(180,.25,'sine',.2,-120)},
    boing(){tone(220,.45,'triangle',.14,520)},
    fart(){tone(95,.55,'sawtooth',.17,-45);tone(72,.6,'square',.07,25,.06);noise(.55,.14,260)},
    slap(){noise(.12,.4,2600,'highpass');tone(320,.08,'square',.07,-160)},
    uppercut(){noise(.5,.28,600,'bandpass',3200);tone(160,.5,'sawtooth',.15,620);tone(80,.6,'square',.08,-30,.15)},
    explosion(){noise(1.5,.45,520,'lowpass',70);tone(60,1.2,'sawtooth',.2,-40)},
    heal(){[523,659,784,1047,1319].forEach((f,i)=>tone(f,.6,'sine',.11,0,i*.12))},
    nova(){noise(1.3,.28,220,'bandpass',1900);tone(110,1,'triangle',.12,-60)},
    camera(){noise(.05,.15,5000,'highpass');tone(1800,.04,'square',.04,0,.05)}
  };
  /* continuous engine sound for the game */
  const engine={
    start(kind){const c=ac();if(!c||eng)return;const o=c.createOscillator(),o2=c.createOscillator(),f=c.createBiquadFilter(),g=c.createGain(),lfo=c.createOscillator(),lg=c.createGain();
      o.type=kind==='fly'?'sawtooth':kind==='space'?'triangle':'sawtooth';o2.type='square';o.frequency.value=60;o2.frequency.value=30;
      f.type='lowpass';f.frequency.value=kind==='fly'?900:420;g.gain.value=0;lfo.frequency.value=kind==='fly'?36:7;lg.gain.value=kind==='fly'?.5:.15;
      lfo.connect(lg).connect(g.gain);o.connect(f);o2.connect(f);f.connect(g).connect(master);o.start();o2.start();lfo.start();eng={o,o2,f,g,lfo,kind}},
    set(level,pitch){if(!eng||!ctx)return;const t=ctx.currentTime,b=eng.kind==='fly'?110:eng.kind==='space'?45:55;
      eng.o.frequency.setTargetAtTime(b+pitch*(eng.kind==='fly'?60:70),t,.08);eng.o2.frequency.setTargetAtTime((b+pitch*50)/2,t,.08);eng.g.gain.setTargetAtTime(on?level*.16:0,t,.1)},
    stop(){if(!eng)return;const e=eng;eng=null;try{e.g.gain.setTargetAtTime(0,ctx.currentTime,.05);setTimeout(()=>{[e.o,e.o2,e.lfo].forEach(x=>{try{x.stop()}catch(_){}})},300)}catch(_){}}
  };
  function setVol(v){vol=Math.max(0,Math.min(1,v));on=vol>0;try{localStorage.setItem('bt-vol',vol)}catch(e){}if(master)master.gain.value=vol*1.5;if(!on)engine.set(0,0);sync()}
  function sync(){const vo=window.VO&&VO.on;document.querySelectorAll('[data-sfx]').forEach(b=>{b.innerHTML=(on||vo)?'<span aria-hidden="true">🔊</span> Sound':'<span aria-hidden="true">🔇</span> Muted'})}
  Object.assign(S,{engine,setVol,sync});Object.defineProperties(S,{on:{get:()=>on},vol:{get:()=>vol}});return S;
})();
/* every button and link gets a soft click; planets and cards a hover blip */
document.addEventListener('click',e=>{const b=e.target.closest('[data-sfx]');if(b){sndPanel(b);return}if(e.target.closest('#snd'))return;if(e.target.closest('button,a,.site,.mk'))SFX.click()},true);
document.addEventListener('pointerover',e=>{if(e.pointerType==='mouse'&&e.target.closest('.pl,.gp-card,.card,.tab,.nav a,.navx a')&&!e.target.closest('.pl,.gp-card,.card,.tab,.nav a,.navx a').contains(e.relatedTarget))SFX.hover()});

/* ============ NARRATOR VOICE (browser speech) ============ */
const VO=(()=>{
  const ok='speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;
  let on=true,vol=.9,rate=1,voice=null,run=0;
  try{const o=JSON.parse(localStorage.getItem('bt-vo')||'{}');if(o.on!=null)on=o.on;if(o.vol!=null)vol=o.vol;if(o.rate!=null)rate=o.rate}catch(e){}
  const save=()=>{try{localStorage.setItem('bt-vo',JSON.stringify({on,vol,rate}))}catch(e){}};
  function pick(){if(!ok)return;const vs=speechSynthesis.getVoices();const en=vs.filter(v=>/^en[-_]/i.test(v.lang));
    voice=en.find(v=>/natural|neural|google us|google uk|samantha|daniel|serena|aria|jenny|guy|libby|sonia/i.test(v.name))||en.find(v=>/en[-_](us|gb)/i.test(v.lang))||en[0]||null}
  if(ok){pick();speechSynthesis.onvoiceschanged=pick}
  /* speak one line; always calls done(), even if the browser has no voices */
  function line(text,done,force){
    const est=Math.max(1800,text.length*62/rate+700);
    const id=++run,t0=performance.now();let fin=false;const fire=()=>{if(fin||id!==run)return;fin=true;clearTimeout(T);done&&done()};
    const end=()=>{const el=performance.now()-t0,min=voice?est*.55:est*.95;if(el<min)setTimeout(fire,min-el);else fire()};
    let T;
    if((!on&&!force)||!ok||vol===0){T=setTimeout(end,est);return}
    try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);if(voice)u.voice=voice;u.lang=voice?voice.lang:'en-US';u.volume=vol;u.rate=.95*rate;u.pitch=1;
      u.onend=end;u.onerror=end;speechSynthesis.speak(u);T=setTimeout(end,est*2.2+2500)}catch(e){T=setTimeout(end,est)}
  }
  /* speak a list of lines, calling each(i) before each line */
  function seq(lines,each,done,force){let i=0;const next=()=>{if(i>=lines.length){done&&done();return}const k=i++;each&&each(k,lines[k]);line(lines[k],next,force)};next();return ()=>{run++;stop()}}
  function stop(){run++;if(ok)try{speechSynthesis.cancel()}catch(e){}}
  return {line,seq,stop,get on(){return on},set on(v){on=!!v;save();if(!on)stop();SFX.sync()},get vol(){return vol},set vol(v){vol=v;save()},get rate(){return rate},set rate(v){rate=v;save()},ok};
})();
/* sound settings panel, opened by any [data-sfx] button */
function sndPanel(btn){
  let p=document.getElementById('snd');
  if(!p){p=document.createElement('div');p.id='snd';p.className='snd';p.setAttribute('role','dialog');p.setAttribute('aria-label','Sound settings');
    p.innerHTML=`<div class="snd-h"><p class="eyebrow">Sound</p><button class="d-close" type="button" id="sndX">Close</button></div>
     <label class="snd-r">Sound effects <output id="sndFxO"></output><input type="range" id="sndFx" min="0" max="100" step="5"></label>
     <label class="snd-c"><input type="checkbox" id="sndVo"> Narrator voice reads the story</label>
     <label class="snd-r">Voice volume <output id="sndVvO"></output><input type="range" id="sndVv" min="0" max="100" step="5"></label>
     <label class="snd-r">Voice speed <output id="sndVrO"></output><input type="range" id="sndVr" min="70" max="140" step="5"></label>
     <button class="btn ghost" type="button" id="sndTest">Test sound and voice</button>${VO.ok?'':'<p class="snd-n">This browser has no speech voice, so captions run on a timer.</p>'}`;
    document.body.appendChild(p);
    const fx=p.querySelector('#sndFx'),vo=p.querySelector('#sndVo'),vv=p.querySelector('#sndVv'),vr=p.querySelector('#sndVr');
    const show=()=>{fx.value=Math.round(SFX.vol*100);p.querySelector('#sndFxO').textContent=fx.value+'%';vo.checked=VO.on;vv.value=Math.round(VO.vol*100);p.querySelector('#sndVvO').textContent=vv.value+'%';vr.value=Math.round(VO.rate*100);p.querySelector('#sndVrO').textContent=(VO.rate).toFixed(2)+'×';vv.disabled=vr.disabled=!VO.on};
    fx.addEventListener('input',()=>{SFX.setVol(fx.value/100);show()});fx.addEventListener('change',()=>SFX.blip());
    vo.addEventListener('change',()=>{VO.on=vo.checked;show()});vv.addEventListener('input',()=>{VO.vol=vv.value/100;show()});vr.addEventListener('input',()=>{VO.rate=vr.value/100;show()});
    p.querySelector('#sndTest').addEventListener('click',()=>{SFX.chime();VO.line('Welcome to the Space Museum. Touching the past, inspiring the future.')});
    p.querySelector('#sndX').addEventListener('click',()=>{p.hidden=true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!p.hidden){p.hidden=true;e.stopImmediatePropagation()}},true);
    p.show=show;
  }
  if(!p.hidden&&p.dataset.from===btn.id){p.hidden=true;return}
  p.show();p.hidden=false;p.dataset.from=btn.id||'';
  const r=btn.getBoundingClientRect(),w=300;p.style.left=Math.max(10,Math.min(innerWidth-w-10,r.right-w))+'px';
  if(r.top>innerHeight/2){p.style.top='';p.style.bottom=(innerHeight-r.top+8)+'px'}else{p.style.bottom='';p.style.top=(r.bottom+8)+'px'}
}
/* ============ STAR FIELD ============ */
function sky(){
  const cv=$('#sky'),dpr=Math.min(devicePixelRatio||1,2),w=innerWidth,h=innerHeight;
  cv.width=w*dpr;cv.height=h*dpr;const c=cv.getContext('2d');c.scale(dpr,dpr);
  const rand=rng(5),n=Math.round(w*h/4200);
  for(let i=0;i<n;i++){
    let x=rand()*w,y=rand()*h;
    if(rand()<.45){const t=rand()*2-1;const bx=x;x=bx;y=h*(.25+.5*(bx/w))+t*t*t*h*.28}
    const a=.25+rand()*.75,s=rand()<.04?1.6:rand()*1.1+.25;
    c.fillStyle=`rgba(${230+Math.round(rand()*25)},${232+Math.round(rand()*20)},255,${a})`;
    c.beginPath();c.arc(x,y,s,0,7);c.fill();
  }
}
let skyT;addEventListener('resize',()=>{clearTimeout(skyT);skyT=setTimeout(sky,200)});sky();
function deepHTML(){
  const AU=[[.00257,'Moon','0.0026 AU','up'],[1,'Sun','1 AU','down'],[30,'Neptune','about 30 AU','up'],[120,'Heliopause','about 120 AU','down'],[172,'Voyager 1','about 172 AU','up']];
  const x0=40,dec=126,lx=v=>x0+(Math.log10(v)+3)*dec,ay=100;
  let s=`<svg viewBox="0 0 760 210" role="img" aria-label="Distance from Earth on a log scale: Moon, Sun, Neptune, the Sun's bubble edge and Voyager 1">`;
  s+=`<line x1="${x0}" x2="${lx(250)}" y1="${ay}" y2="${ay}" stroke="rgba(255,255,255,.45)" stroke-width="2"/>`;
  [.001,.01,.1,1,10,100].forEach(v=>{const x=lx(v);s+=`<line x1="${x}" x2="${x}" y1="${ay-5}" y2="${ay+5}" stroke="rgba(255,255,255,.45)"/><text class="sub" x="${x}" y="${ay+22}" text-anchor="middle" style="opacity:.0">${v}</text>`});
  AU.forEach(([v,n,t,dir])=>{const x=lx(v),up=dir==='up',ty=up?ay-34:ay+40,line=up?[ay-24,ay-6]:[ay+6,ay+24];
    const hot=n==='Voyager 1';
    s+=`<line x1="${x}" x2="${x}" y1="${line[0]}" y2="${line[1]}" stroke="${hot?'#f7c548':'rgba(255,255,255,.5)'}"/><circle cx="${x}" cy="${ay}" r="${hot?7:5}" fill="${hot?'#f7c548':'#eef1f7'}"/>
    <text x="${x}" y="${ty}" text-anchor="middle" style="font-weight:600">${n}</text><text class="sub" x="${x}" y="${ty+14}" text-anchor="middle">${t}</text>`});
  s+=`<text class="sub" x="${x0}" y="${ay+78}">Distance from Earth, log scale. 1 AU is the Earth–Sun distance. Each tick is ten times farther than the last.</text>`;
  return `<div class="deep"><div class="countdown" id="cd">${countdown()}</div><div class="mapbox ruler">${s}</svg></div></div>`;
}
function countdown(){
  const target=Date.UTC(2026,10,18),days=Math.ceil((target-Date.now())/864e5);
  let big,sub;
  if(days>1){big=`${days} days to one light-day`;sub='Voyager 1 is expected to reach one light-day from Earth on 18 November 2026. A light-day is the distance light travels in 24 hours, about 26 billion kilometres.'}
  else if(days===1){big='Tomorrow: one light-day';sub='Voyager 1 is expected to reach one light-day from Earth on 18 November 2026.'}
  else if(days===0){big='Today: one light-day';sub='Voyager 1 is expected to reach one light-day from Earth today, the first human-made object to do so.'}
  else{big='One light-day reached';sub='Voyager 1 was expected to pass one light-day from Earth on 18 November 2026. A message now takes more than a day to arrive.'}
  return `<span class="eyebrow">Voyager 1</span><div class="big">${big}</div><p>${sub}</p>`;
}
const HIST={
 moon:{unit:'NASA landers and rovers worked on the Moon',note:'Counts every lander and rover NASA put on the lunar surface, from Surveyor 1 in 1966 to the Apollo 17 rover in 1972. Orbiters, deliberate crash probes and commercial landers carrying NASA instruments are not counted.',
  lost:'Surveyor 2 (1966) crashed and Surveyor 4 (1967) lost contact seconds before landing.',
  items:[[1966,'Surveyor 1'],[1967,'Surveyor 3','surveyor3'],[1967,'Surveyor 5'],[1967,'Surveyor 6'],[1968,'Surveyor 7'],[1969,'Apollo 11 lander (Eagle)'],[1969,'Apollo 12 lander (Intrepid)'],[1971,'Apollo 14 lander (Antares)'],[1971,'Apollo 15 lander (Falcon)'],[1971,'Lunar Roving Vehicle, Apollo 15','lrv'],[1972,'Apollo 16 lander (Orion)'],[1972,'Lunar Roving Vehicle, Apollo 16','lrv'],[1972,'Apollo 17 lander (Challenger)'],[1972,'Lunar Roving Vehicle, Apollo 17','lrv']]},
 mars:{unit:'NASA landers, rovers and a helicopter worked on Mars',note:'Counts every machine NASA has put on the surface of Mars: nine successful landings, carrying five rovers and one helicopter between them. Orbiters and flybys are not counted.',
  lost:'Mars Polar Lander and the two Deep Space 2 probes were lost in December 1999.',
  items:[[1976,'Viking 1 lander'],[1976,'Viking 2 lander'],[1997,'Pathfinder lander'],[1997,'Sojourner','sojourner'],[2004,'Spirit','spirit'],[2004,'Opportunity','opportunity'],[2008,'Phoenix lander'],[2012,'Curiosity','curiosity'],[2018,'InSight','insight'],[2021,'Perseverance','perseverance'],[2021,'Ingenuity','ingenuity']]},
 deep:{unit:'NASA probes are heading out of the Solar System',note:'Deep space has no surface to land on, so this counts the NASA probes on paths that leave the Solar System, by launch year.',
  lost:'Pioneer 10 and Pioneer 11 stopped communicating long ago, in 2003 and 1995.',
  items:[[1972,'Pioneer 10'],[1973,'Pioneer 11'],[1977,'Voyager 2'],[1977,'Voyager 1','voyager1'],[2006,'New Horizons']]}
};

/* ============ EXTRA DATA ============ */
const EARTH_SITES=[
 {id:'e-ksc',short:'Cape Canaveral',name:'Cape Canaveral and Kennedy Space Center, Florida',lat:28.5,lon:-80.6,side:'l',items:['Launched Surveyor 3 and every Apollo Moon mission','Launched Sojourner, Spirit, Opportunity, Curiosity and Perseverance to Mars','Launched Voyager 1 in 1977'],m:'perseverance'},
 {id:'e-van',short:'Vandenberg',name:'Vandenberg, California',lat:34.7,lon:-120.6,side:'l',items:['Launched InSight in May 2018, the first trip to another planet that started from the US West Coast'],m:'insight'},
 {id:'e-jpl',short:'JPL',name:'Jet Propulsion Laboratory, Pasadena',lat:34.2,lon:-118.2,side:'r',items:['Builds and drives the Mars rovers','Flew the Ingenuity helicopter and runs the Voyager mission'],m:'curiosity'},
 {id:'e-gds',short:'Goldstone',name:'Deep Space Network · Goldstone, California',lat:35.4,lon:-116.9,side:'r',items:['Giant dish antennas that talk to spacecraft far from Earth'],m:'voyager1'},
 {id:'e-mad',short:'Madrid',name:'Deep Space Network · Madrid, Spain',lat:40.4,lon:-4.2,side:'r',items:['Second of three dish sites, spaced around the planet so one is always facing a spacecraft'],m:'voyager1'},
 {id:'e-cbr',short:'Canberra',name:'Deep Space Network · Canberra, Australia',lat:-35.4,lon:149,side:'r',items:['Third dish site. It sends and receives messages for Voyager and the Mars missions'],m:'voyager1'}
];
/* hero bodies, left to right, as in the design */
const HB=[
 {k:'earth',name:'Earth',ring:'WHERE EVERY MISSION BEGINS',world:'all'},
 {k:'uranus',name:'Uranus',ring:'THE SIDEWAYS GIANT',world:'deep'},
 {k:'moon',name:'Moon',ring:'TO THE MOON AND BACK',world:'moon'},
 {k:'neptune',name:'Neptune',ring:'THE FARTHEST BLUE WORLD',world:'deep'},
 {k:'mars',name:'Mars',ring:'TO MARS AND BACK',world:'mars'}
];
const PLANET={
 earth:{title:'Earth',eyebrow:'Where missions start',sites:EARTH_SITES,intro:'Every machine in this museum left from Earth, and every message still comes home here. Rotate the globe to find the launch pads, the lab that drives the rovers, and the three giant dish antennas that listen to deep space.'},
 moon:{title:'The Moon',eyebrow:'Planet detail',sites:null,intro:'Six Apollo crews and the Surveyor landers left hardware on the near side. Rotate the Moon: the markers move with the surface and disappear when they turn to the far side.'},
 mars:{title:'Mars',eyebrow:'Planet detail',sites:null,intro:'Rovers, landers and a helicopter are spread across Mars. Rotate the planet to bring each landing site into view.'},
 uranus:{title:'Uranus',eyebrow:'Deep space',sites:[],intro:'Voyager 2 flew past Uranus in January 1986. It is still the only spacecraft ever to visit, and it found new moons and new rings on the way.'},
 neptune:{title:'Neptune',eyebrow:'Deep space',sites:[],intro:'Voyager 2 flew past Neptune in August 1989, the only visit so far. It spotted a giant storm called the Great Dark Spot, then kept heading out of the Solar System.'}
};

/* ============ TEXTURES: equirectangular maps painted on canvas ============ */
const D2R=Math.PI/180;
const TEXC={};
function eqTex(kind){
  if(TEXC[kind])return TEXC[kind];
  const W=2048,H=1024,cv=document.createElement('canvas');cv.width=W;cv.height=H;
  const c=cv.getContext('2d'),rand=rng({moon:7,mars:21,earth:3,uranus:11,neptune:13}[kind]||5);
  const X=lo=>(lo+180)/360*W,Y=la=>(90-la)/180*H;
  const wrap=(x,f)=>{f(x);if(x<W*.2)f(x+W);if(x>W*.8)f(x-W)};
  const blob=(la,lo,r,col,a)=>{const k=1/Math.max(.25,Math.cos(la*D2R)),rp=r/180*H;
    wrap(X(lo),x=>{c.save();c.translate(x,Y(la));c.scale(k,1);const g=c.createRadialGradient(0,0,0,0,0,rp);g.addColorStop(0,`rgba(${col},${a})`);g.addColorStop(.62,`rgba(${col},${a*.75})`);g.addColorStop(1,`rgba(${col},0)`);c.fillStyle=g;c.fillRect(-rp,-rp,2*rp,2*rp);c.restore()})};
  const mare=(la,lo,r,col,a,n=7)=>{blob(la,lo,r,col,a);for(let i=0;i<n;i++){blob(la+(rand()-.5)*r*1.1,lo+(rand()-.5)*r*1.3,r*(.35+rand()*.45),col,a*.7)}};
  const crater=(la,lo,r,dark,lite)=>{const k=1/Math.max(.25,Math.cos(la*D2R)),rp=r/180*H;
    wrap(X(lo),x=>{c.save();c.translate(x,Y(la));c.scale(k,1);c.beginPath();c.arc(0,0,rp,0,7);c.fillStyle=`rgba(${dark})`;c.fill();
      c.lineWidth=Math.max(1,rp*.22);c.strokeStyle=`rgba(${lite})`;c.beginPath();c.arc(-rp*.08,-rp*.08,rp,Math.PI*.95,Math.PI*1.9);c.stroke();
      c.strokeStyle='rgba(0,0,0,.18)';c.beginPath();c.arc(rp*.06,rp*.06,rp,Math.PI*1.95,Math.PI*.9);c.stroke();c.restore()})};
  const grain=(amt)=>{const d=c.getImageData(0,0,W,H),p=d.data;for(let i=0;i<p.length;i+=4){const n=(rand()-.5)*amt;p[i]+=n;p[i+1]+=n;p[i+2]+=n}c.putImageData(d,0,0)};
  if(kind==='moon'){
    c.fillStyle='#a9a69f';c.fillRect(0,0,W,H);
    for(let i=0;i<260;i++)blob(rand()*170-85,rand()*360-180,4+rand()*14,rand()<.5?'205,202,194':'120,118,114',.18);
    [[33,-16,16],[28,17,9],[8.5,31,10],[17,59,6.5],[-7,51,8],[-15,35,5],[-21,-17,9],[20,-55,18],[0,-42,13],[-24,-39,5],[56,0,5],[-10,-23,6],[13,4,4],[8,-30,7],[36,-60,9],[-5,-48,8],[27,147,4],[-35,-145,6]].forEach(([la,lo,r])=>mare(la,lo,r*1.08,'78,78,84',.62,12));
    for(let i=0;i<3200;i++){const r=Math.pow(rand(),8)*3.6+.1;crater(rand()*176-88,rand()*360-180,r,'70,70,74,.06',r>1?'245,243,236,.045':'245,243,236,.1')}
    for(let i=0;i<5000;i++){c.fillStyle=rand()<.5?'rgba(250,248,240,.10)':'rgba(40,40,46,.08)';c.fillRect(rand()*W,rand()*H,2+rand()*3,2+rand()*3)}
    for(let i=0;i<34;i++){const a=rand()*Math.PI*2,len=10+rand()*35;c.strokeStyle='rgba(240,238,230,.16)';c.lineWidth=2+rand()*3;
      c.beginPath();c.moveTo(X(-11),Y(-43));c.lineTo(X(-11+Math.cos(a)*len*1.4),Y(-43+Math.sin(a)*len));c.stroke()}
    blob(-43,-11,2.4,'250,250,245',.9);blob(9.6,-20,1.8,'235,233,226',.75);blob(-3,-33,1.5,'240,240,235',.7);
    grain(14);
  }else if(kind==='mars'){
    c.fillStyle='#c07448';c.fillRect(0,0,W,H);
    for(let i=0;i<240;i++)blob(rand()*160-80,rand()*360-180,5+rand()*16,rand()<.55?'214,150,104':'120,58,34',.2);
    [[25,45,18],[0,-110,22],[25,150,15],[-42,70,16],[-50,-43,9],[5,-60,10]].forEach(([la,lo,r])=>mare(la,lo,r,'226,170,124',.5,5));
    [[9,70,10],[47,-28,14],[-24,-38,16],[-2,0,7],[-20,108,13],[-23,145,15],[-30,-150,14],[48,105,12],[-5,22,9]].forEach(([la,lo,r])=>mare(la,lo,r,'92,46,30',.62,6));
    for(let k=0;k<=50;k++){const f=k/50,lo=-95+f*55,la=-7-f*4-Math.sin(f*Math.PI)*1.5;blob(la+(rand()-.5)*.8,lo,.9+rand()*1.1,'84,38,22',.42)}
    [[18.6,-133.8,4.5],[-8.3,-120.5,2.2],[1.5,-112.8,2],[11.2,-104.4,2.2],[24.8,147.2,1.6]].forEach(([la,lo,r])=>{blob(la,lo,r*1.6,'232,186,140',.6);crater(la,lo,r*.35,'90,40,25,.5','250,210,170,.4')});
    for(let i=0;i<900;i++){const r=Math.pow(rand(),7)*3.4+.15;crater(rand()*150-75,rand()*360-180,r,'80,35,20,.1',r>1?'240,190,150,.07':'240,190,150,.14')}
    const cap=(la0,s)=>{for(let lo=-180;lo<=180;lo+=4){const la=la0+s*(Math.sin(lo*D2R*3)*1.5+rand()*1.4);c.fillStyle='rgba(252,250,246,.95)';c.fillRect(X(lo)-6,s>0?0:Y(la),14,s>0?Y(la):H-Y(la))}};
    cap(80,1);cap(-82,-1);blob(83,0,5,'255,255,255',.6);
    grain(12);
  }else if(kind==='earth'){
    const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#123a6e');g.addColorStop(.5,'#1d5c9e');g.addColorStop(1,'#123a6e');c.fillStyle=g;c.fillRect(0,0,W,H);
    const LAND=[
     [[-168,66],[-160,71],[-140,70],[-125,72],[-95,72],[-80,68],[-62,60],[-55,52],[-66,45],[-70,42],[-76,35],[-81,30],[-80,25],[-82,28],[-90,30],[-97,26],[-97,20],[-90,21],[-87,16],[-83,10],[-78,8],[-80,8],[-86,12],[-92,15],[-105,20],[-110,24],[-115,30],[-118,34],[-124,40],[-124,48],[-135,58],[-150,60],[-160,58],[-165,62]],
     [[-55,60],[-44,60],[-20,70],[-20,80],[-40,83],[-60,81],[-72,77],[-56,68]],
     [[-80,10],[-72,12],[-60,10],[-50,0],[-35,-5],[-38,-13],[-40,-22],[-48,-27],[-58,-35],[-65,-42],[-68,-52],[-72,-53],[-75,-45],[-73,-35],[-71,-25],[-70,-18],[-76,-14],[-81,-6],[-80,0],[-77,5]],
     [[-10,36],[-9,43],[-2,44],[-5,48],[0,50],[5,53],[8,57],[5,62],[12,66],[20,70],[30,71],[42,67],[60,70],[70,73],[80,73],[100,77],[115,74],[140,72],[160,70],[180,68],[180,65],[170,60],[162,57],[156,51],[142,53],[140,46],[132,42],[128,38],[126,34],[122,31],[120,25],[110,20],[108,12],[104,9],[100,13],[98,8],[103,1],[98,16],[92,22],[88,22],[80,15],[77,8],[72,20],[67,25],[57,25],[56,27],[50,30],[48,29],[52,24],[56,26],[59,22],[52,16],[43,13],[35,28],[34,31],[36,36],[28,37],[26,40],[22,37],[20,40],[14,40],[16,38],[12,44],[8,44],[3,43],[-1,37],[-6,36]],
     [[-17,21],[-16,12],[-10,6],[-4,5],[4,6],[9,4],[9,-1],[13,-5],[12,-16],[15,-26],[18,-34],[22,-34],[27,-33],[32,-28],[35,-22],[40,-15],[40,-5],[42,0],[51,11],[43,12],[38,18],[33,28],[32,31],[25,32],[20,31],[10,34],[10,37],[0,36],[-6,35],[-10,30],[-13,27]],
     [[114,-22],[114,-34],[118,-35],[124,-33],[131,-31],[137,-35],[140,-38],[146,-39],[150,-37],[153,-30],[153,-25],[146,-19],[142,-11],[136,-12],[131,-12],[125,-15],[121,-19]],
     [[-5,50],[1,51],[0,54],[-3,58],[-6,57]],[[130,31],[135,34],[140,36],[142,40],[141,45],[140,42],[136,36],[131,34]],
     [[109,-3],[118,-4],[119,6],[116,7],[110,2]],[[95,5],[106,-6],[104,-5],[98,1]],[[131,-1],[150,-6],[143,-9],[134,-4]],[[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]],[[166,-46],[174,-41],[178,-38],[172,-34],[168,-44]],
     [[-180,-70],[-120,-73],[-60,-64],[-40,-77],[0,-70],[60,-67],[120,-66],[180,-70],[180,-90],[-180,-90]]
    ];
    LAND.forEach(poly=>{c.beginPath();poly.forEach(([lo,la],i)=>i?c.lineTo(X(lo),Y(la)):c.moveTo(X(lo),Y(la)));c.closePath();c.fillStyle='#4b7a3c';c.fill()});
    c.save();c.globalCompositeOperation='source-atop';
    [[23,10,14],[23,40,9],[-25,133,9],[40,95,9],[35,-110,6],[-25,22,6]].forEach(([la,lo,r])=>blob(la,lo,r,'201,170,110',.85));
    for(let i=0;i<160;i++)blob(rand()*140-70,rand()*360-180,3+rand()*8,rand()<.5?'40,92,42':'120,130,70',.3);
    [[72,-40,14],[-80,0,30],[-80,120,30],[-80,-120,30],[66,100,10],[64,-100,10]].forEach(([la,lo,r])=>blob(la,lo,r,'240,244,248',.8));
    c.restore();
    for(let i=0;i<95;i++){const la=rand()*150-75,lo=rand()*360-180,w=6+rand()*26;c.save();wrap(X(lo),x=>{c.save();c.translate(x,Y(la));c.rotate((rand()-.5)*.6);c.scale(1,.28+rand()*.3);
      const gr=c.createRadialGradient(0,0,0,0,0,w/180*H);gr.addColorStop(0,'rgba(255,255,255,.42)');gr.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=gr;c.beginPath();c.arc(0,0,w/180*H,0,7);c.fill();c.restore()});c.restore()}
    grain(6);
  }else{
    const nep=kind==='neptune',A=nep?'#4f55d4':'#a8dcda',B=nep?'#6d6fe6':'#bfe8e4',Cc=nep?'#3a43b8':'#95cfd0';
    for(let y=0;y<H;y+=2){const t=y/H,v=Math.sin(t*22+Math.sin(t*7)*1.2)*.5+.5;c.fillStyle=mix(A,v>.5?B:Cc,Math.abs(v-.5)*(nep?.9:.45));c.fillRect(0,y,W,2)}
    for(let i=0;i<90;i++){const y=rand()*H,x=rand()*W,w=W*(.04+rand()*.14),h=H*(.003+rand()*.008);c.fillStyle=nep?(rand()<.6?'rgba(170,180,255,.22)':'rgba(30,30,110,.25)'):'rgba(255,255,255,.08)';wrap(x,X2=>{c.beginPath();c.ellipse(X2,y,w,h,0,0,7);c.fill()})}
    if(nep){blob(-22,40,7,'25,26,90',.85);for(let i=0;i<14;i++){c.fillStyle='rgba(240,245,255,.6)';const x=rand()*W,y=H*(.25+rand()*.5);c.beginPath();c.ellipse(x,y,W*.012+rand()*W*.02,H*.004,0,0,7);c.fill()}}
    grain(5);
  }
  return TEXC[kind]=cv;
}
/* small 2D rendering of a planet, for the carousel buttons and fallbacks */
const SMALL={};
function smallTex(k){if(SMALL[k])return SMALL[k];const s=eqTex(k),cv=document.createElement('canvas');cv.width=512;cv.height=256;cv.getContext('2d').drawImage(s,0,0,512,256);return SMALL[k]=cv.getContext('2d').getImageData(0,0,512,256)}
function sphereIcon(cv,k,lon0=0){
  const S=cv.width,c=cv.getContext('2d'),img=c.createImageData(S,S),t=smallTex(k),L=[-.45,.5,.74];
  for(let j=0;j<S;j++)for(let i=0;i<S;i++){
    const x=(i+.5)/S*2-1,y=1-(j+.5)/S*2,q=x*x+y*y;if(q>1)continue;const z=Math.sqrt(1-q);
    const la=Math.asin(y),lo=Math.atan2(x,z)+lon0*D2R;let u=((lo/D2R+180)%360+360)%360/360;const v=(90-la/D2R)/180;
    const si=(Math.min(255,Math.floor(v*256))*512+Math.floor(u*512))*4;
    const sh=.2+.95*Math.max(0,x*L[0]+y*L[1]+z*L[2]),edge=Math.min(1,(1-q)*12),o=(j*S+i)*4;
    img.data[o]=t.data[si]*sh;img.data[o+1]=t.data[si+1]*sh;img.data[o+2]=t.data[si+2]*sh;img.data[o+3]=255*edge;
  }
  c.putImageData(img,0,0);
}
const llv=(la,lo,r=1)=>{const p=(lo+180)*D2R,t=la*D2R;return new THREE.Vector3(-Math.cos(p)*Math.cos(t)*r,Math.sin(t)*r,Math.sin(p)*Math.cos(t)*r)};
function planetMesh(k){
  const tex=new THREE.CanvasTexture(eqTex(k));tex.anisotropy=8;
  const rough=k!=='earth',mat=new THREE.MeshStandardMaterial({map:tex,roughness:rough?1:.62,metalness:0});
  if(k==='moon'||k==='mars'){mat.bumpMap=tex;mat.bumpScale=k==='moon'?.014:.007}
  const g=new THREE.Group(),m=new THREE.Mesh(new THREE.SphereGeometry(1,96,64),mat);g.add(m);
  if(k==='earth'||k==='uranus'||k==='neptune'){
    const atm=new THREE.Mesh(new THREE.SphereGeometry(1.035,64,48),new THREE.MeshBasicMaterial({color:k==='earth'?0x6aa8ff:k==='uranus'?0xb5f2ee:0x7d86ff,transparent:true,opacity:.13,side:THREE.BackSide}));g.add(atm)}
  return g;
}
const dispose3=o=>o.traverse(n=>{if(n.geometry)n.geometry.dispose();if(n.material)[].concat(n.material).forEach(m=>{['map','bumpMap','emissiveMap'].forEach(k=>{if(m[k]&&!m[k].keep)m[k].dispose()});m.dispose()})});
const hasGL=()=>{try{return !!window.THREE&&!!document.createElement('canvas').getContext('webgl')}catch(e){return false}};

/* ============ HERO ============ */
const SLOT_D=[[245,419,12.5],[277,396,14],[320,382,15.5],[362,393,14],[396,420,13]];
const SLOT_M=[[92,66,12],[126,44,14],[165,28,16],[204,44,14],[238,66,12]];
let heroSel=2;
function initHero(){
const orbit=$('#orbit');
HB.forEach((b,i)=>{const el=document.createElement('button');el.className='pl';el.dataset.i=i;el.setAttribute('aria-pressed','false');el.setAttribute('aria-label',b.name);
  el.innerHTML=`<canvas width="96" height="96"></canvas><span>${b.name}</span>`;orbit.appendChild(el);sphereIcon(el.firstChild,b.k,b.k==='moon'?0:b.k==='earth'?-40:60);
  el.addEventListener('click',()=>heroPick(i))});
mqM.addEventListener('change',placePlanets);

$('#heroCv').tabIndex=0;
placePlanets();HERO.set(HB[heroSel]);heroStars();
let hsT;addEventListener('resize',()=>{clearTimeout(hsT);hsT=setTimeout(heroStars,200)});
}
const mqM=matchMedia('(max-width:760px)');
function placePlanets(){
  const T=mqM.matches?SLOT_M:SLOT_D;$('#orbitPath').style.display=mqM.matches?'none':'';
  $$('.pl').forEach(el=>{const i=+el.dataset.i,s=T[((i-heroSel)%5+5+2)%5];el.style.setProperty('--x',s[0]);el.style.setProperty('--y',s[1]);el.style.setProperty('--r',s[2]);el.setAttribute('aria-pressed',String(i===heroSel))});
}
function heroPick(i,fromStep){heroSel=(i+5)%5;placePlanets();HERO.set(HB[heroSel]);SFX.whoosh()}

/* stars inside the frame */
function heroStars(){const cv=$('#heroStars'),r=cv.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);cv.width=r.width*dpr;cv.height=r.height*dpr;
  const c=cv.getContext('2d'),rand=rng(9),n=Math.round(r.width*r.height/900);c.scale(dpr,dpr);
  for(let i=0;i<n;i++){const x=rand()*r.width,y=rand()*r.height,a=.15+rand()*.6,s=rand()<.03?1.3:rand()*.8+.2;c.fillStyle=`rgba(235,238,255,${a})`;c.beginPath();c.arc(x,y,s,0,7);c.fill()}}

const HERO=(()=>{
  const cv=$('#heroCv');let r,sc,cam,body=null,ringG,spin,ringMat,innerMat,cur=null,vis=true,drag=false,vy=.0025,base=matchMedia('(prefers-reduced-motion:reduce)').matches?0:.0025;
  function ringTexture(text){
    const W=4096,H=256,c2=document.createElement('canvas');c2.width=W;c2.height=H;const c=c2.getContext('2d');
    const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#06182f');g.addColorStop(.18,'#103a68');g.addColorStop(.5,'#1d548f');g.addColorStop(.82,'#103a68');g.addColorStop(1,'#06182f');
    c.fillStyle=g;c.fillRect(0,0,W,H);
    c.fillStyle='#fff';c.font=`800 150px Unbounded, 'Arial Black', sans-serif`;c.textBaseline='middle';c.textAlign='center';
    const t=' '+text+' ';const w=c.measureText(t).width,sx=Math.min(1,(W/2)*.84/w);
    [W*.25,W*.75].forEach(x=>{c.save();c.translate(x,H/2+8);c.scale(sx,1);c.fillText(t,0,0);c.restore()});
    const tx=new THREE.CanvasTexture(c2);tx.anisotropy=8;return tx;
  }
  function init(){
    if(r)return true;if(!hasGL())return false;
    r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio||1,2));
    sc=new THREE.Scene();cam=new THREE.PerspectiveCamera(30,1,.1,40);cam.position.z=5.9;
    const sun=new THREE.DirectionalLight(0xffffff,1.05);sun.position.set(-2.2,2,5);sc.add(sun,new THREE.AmbientLight(0x9aa0b4,.42));
    ringG=new THREE.Group();ringG.rotation.order='ZYX';ringG.rotation.set(.30,0,.2);ringG.visible=false;
    spin=new THREE.Group();spin.rotation.y=-Math.PI/2;ringG.add(spin);
    const R=1.47,h=.3;
    ringMat=new THREE.MeshBasicMaterial({side:THREE.FrontSide});
    innerMat=new THREE.MeshBasicMaterial({side:THREE.BackSide,color:0x8796b4});
    spin.add(new THREE.Mesh(new THREE.CylinderGeometry(R,R,h,200,1,true),ringMat));
    spin.add(new THREE.Mesh(new THREE.CylinderGeometry(R-.012,R-.012,h,200,1,true),innerMat));
    const rim=new THREE.MeshBasicMaterial({color:0x0b2747,side:THREE.DoubleSide});
    [h/2,-h/2].forEach(y=>{const m=new THREE.Mesh(new THREE.RingGeometry(R-.012,R,200),rim);m.rotation.x=-Math.PI/2;m.position.y=y;spin.add(m)});
    const fit=()=>{const w=cv.clientWidth||300,hh=cv.clientHeight||300;r.setSize(w,hh,false);cam.aspect=w/hh;cam.updateProjectionMatrix()};fit();new ResizeObserver(fit).observe(cv);
    new IntersectionObserver(([e])=>vis=e.isIntersecting).observe(cv);
    bind();
    (function loop(){requestAnimationFrame(loop);if(!vis||document.hidden||!body)return;
      if(!drag){body.rotation.y+=vy;vy+=(base-vy)*.04}r.render(sc,cam)})();
    return true;
  }
  function set(b){
    if(!init()){const c=cv.getContext('2d');cv.width=cv.height=400;c.clearRect(0,0,400,400);const t=document.createElement('canvas');t.width=t.height=168;sphereIcon(t,b.k);c.drawImage(t,116,116);return}
    if(cur===b.k)return;cur=b.k;
    if(body){sc.remove(body);dispose3(body)}
    body=planetMesh(b.k);body.rotation.set(.12,b.k==='moon'?-Math.PI/2:b.k==='mars'?-.6:b.k==='earth'?0:1,0);
    if(b.k==='uranus')body.rotation.z=1.2;
    sc.add(body);
    const draw=()=>{if(ringMat.map)ringMat.map.dispose();const t=ringTexture(b.ring);ringMat.map=t;innerMat.map=t;ringMat.needsUpdate=innerMat.needsUpdate=true};
    draw();if(document.fonts&&document.fonts.load)document.fonts.load('800 150px Unbounded').then(()=>{if(cur===b.k)draw()}).catch(()=>{});
  }
  function bind(){
    let sx,sy,px,py,moved=0,t0=0;
    const inside=e=>{const b=cv.getBoundingClientRect(),x=e.clientX-b.left-b.width/2,y=e.clientY-b.top-b.height/2;return Math.hypot(x,y)<b.width*.33};
    cv.addEventListener('pointermove',e=>{if(!drag){cv.style.cursor=inside(e)?'grab':'default';return}
      const dx=e.clientX-px,dy=e.clientY-py;px=e.clientX;py=e.clientY;moved=Math.max(moved,Math.hypot(e.clientX-sx,e.clientY-sy));
      body.rotation.y+=dx*.008;body.rotation.x=Math.max(-1.1,Math.min(1.1,body.rotation.x+dy*.008));vy=dx*.008});
    cv.addEventListener('pointerdown',e=>{if(!body||!inside(e))return;drag=true;moved=0;t0=Date.now();sx=px=e.clientX;sy=py=e.clientY;cv.setPointerCapture(e.pointerId);cv.style.cursor='grabbing'});
    const up=()=>{if(!drag)return;drag=false;cv.style.cursor='grab';if(moved<6&&Date.now()-t0<500)openPlanet(HB[heroSel].k)};
    cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',()=>{drag=false});
    cv.addEventListener('keydown',e=>{if(e.key==='Enter')openPlanet(HB[heroSel].k)});
  }
  return {set};
})();

/* ============ STATE + RENDER (Discover) ============ */
const WORLDS=['moon','mars','deep'];
let world='moon',query='',mapEff='';
function pool(){
  if(query){return M.filter(m=>[m.name,m.type,m.purpose,m.found,m.now,m.location,m.kid].join(' ').toLowerCase().includes(query))}
  return world==='all'?M:M.filter(m=>m.world===world);
}
function card(m){
  const src=PHOTOS[m.id]?PHOTOS[m.id][0]:IMG[m.id];
  return `<button class="card" data-open="${m.id}">${src?`<img class="thumb" data-thumb="${m.id}" src="${src}" alt="" loading="lazy">`:`<img class="thumb" data-thumb="${m.id}" alt="" hidden>`}<span class="badge" data-st="${m.status}">${ST[m.status]}</span>
  <h3>${m.name}</h3><span class="meta">${WN[m.world]} · ${m.arrive}${m.end==null?' – today':(m.end===m.arrive?'':' – '+m.end)}</span>
  <p>${m.kid}</p><span class="more">Read its story →</span></button>`;
}
function renderGrid(){
  const list=pool(),g=$('#grid');
  if(!list.length){g.innerHTML='<p class="none"></p>';g.firstChild.textContent=`No machine matches "${query}". Try "rover", "Mars" or "laser".`;return}
  g.innerHTML=list.map(card).join('');
}
let dGlobe=null;
function renderMap(eff){
  if(eff===mapEff)return;mapEff=eff;
  if(dGlobe){dGlobe.dispose();dGlobe=null}
  const z=$('#mapzone');
  if(eff==='moon'||eff==='mars'){
    z.innerHTML=`<div class="mapwrap"><div class="mapbox"><div id="dGlobe"></div><p class="map-note">${eff==='moon'?'The Moon':'Mars'} in 3D. Click and hold to rotate. Markers on the far side fade out. Landing-site positions are approximate.</p></div><div class="info" id="siteInfo" aria-live="polite"></div></div>`;
    siteInfo(null,eff);
    if(hasGL())dGlobe=new Globe($('#dGlobe'),eff,eff==='moon'?MOON_SITES:MARS_SITES,{onPick:s=>siteInfo(s)});
    else $('#dGlobe').innerHTML='<p class="none">3D view needs WebGL, which this browser has turned off.</p>';
  }else if(eff==='deep'){z.innerHTML=deepHTML()}
  else z.innerHTML='';
}
function render(){
  if(!$('#discover'))return;
  const eff=query?'all':world;
  $$('.tab').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.w===eff)));
  renderMap(eff);renderGrid();
}
function setWorld(w){world=w;query='';const q=$('#q');if(q)q.value='';render()}
function initDiscover(){
  $$('.tab').forEach(b=>b.addEventListener('click',()=>setWorld(b.dataset.w)));
  $('#grid').addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openStory(b.dataset.open,b)});
  const h=location.hash.match(/^#search-([a-z0-9-]+)$/i);
  const w=location.hash.match(/^#world-(moon|mars|deep|all)$/);if(w)world=w[1];
  if(h){query=h[1].replace(/-/g,' ').toLowerCase()}
  render();
}
/* search box in every page header: live filter on Visit, jump to Visit elsewhere */
function initSearch(){
  const q=$('#q');if(!q)return;
  q.addEventListener('input',e=>{if(!$('#discover'))return;query=e.target.value.trim().toLowerCase();render()});
  q.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const v=q.value.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    if($('#discover'))$('#discover').scrollIntoView();else location.href='device-journey.html'+(v?'#search-'+v:'')});
}

function siteInfo(st,w,box){
  box=box||$('#siteInfo');if(!box)return;
  if(!st){box.innerHTML=`<h3>${w==='moon'?'Ghost rovers of the Moon':'Silent explorers of Mars'}</h3><p class="hint" style="margin-top:14px">${w==='moon'?'Six Apollo crews left science stations, mirrors and three rovers behind. Rotate the Moon and select a glowing marker to see what is still there.':'Rovers, landers and a helicopter are scattered across the planet. Rotate Mars and select a glowing marker to see who is there, and who is still working.'}</p>`;return}
  const m=byId[st.m];
  box.innerHTML=`<h3></h3><ul></ul>${m?`<button class="btn" data-m="${m.id}">Read the story of ${m.name} →</button>`:''}`;
  box.querySelector('h3').textContent=st.name;
  box.querySelector('ul').innerHTML=st.items.map(i=>`<li>${i}</li>`).join('');
  const b=box.querySelector('button');if(b)b.addEventListener('click',e=>openStory(m.id,e.currentTarget));
}

/* ============ GLOBE: click and hold to rotate, markers ride on the surface ============ */
class Globe{
  constructor(host,kind,sites,opt={}){
    this.kind=kind;this.sites=sites||[];this.opt=opt;this.host=host;this.alive=true;
    host.classList.add('globe');
    host.innerHTML=`<canvas aria-label="${kind} globe. Click and hold to rotate." role="img"></canvas><div class="mks"></div>${opt.hint===false?'':'<p class="g-hint">Click and hold to rotate</p>'}`;
    this.cv=host.querySelector('canvas');this.layer=host.querySelector('.mks');
    const r=this.r=new THREE.WebGLRenderer({canvas:this.cv,antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio||1,2));
    this.sc=new THREE.Scene();this.cam=new THREE.PerspectiveCamera(30,1,.1,50);this.cam.position.z=opt.dist||5.3;
    const sun=new THREE.DirectionalLight(0xffffff,1.05);sun.position.set(-2.5,1.8,4);this.sc.add(sun,new THREE.AmbientLight(0x8a92aa,.5));
    this.body=new THREE.Group();this.sc.add(this.body);this.body.add(planetMesh(kind));
    const c=this.sites.length?this.sites.reduce((a,s)=>[a[0]+s.lat/this.sites.length,a[1]+s.lon/this.sites.length],[0,0]):[10,0];
    if(kind==='mars')c[1]=-20;
    this.yaw=Math.PI/2-(c[1]+180)*D2R+(opt.offset??.3);this.pitch=Math.max(-.5,Math.min(.5,c[0]*D2R));this.vy=0;this.auto=!matchMedia('(prefers-reduced-motion:reduce)').matches;this.idle=0;this.tgt=null;
    this.mk=this.sites.map(s=>{const el=document.createElement('button');el.className='mk'+(s.side==='l'?' l':'');el.innerHTML='<b></b>';el.querySelector('b').textContent=s.short;
      el.setAttribute('aria-label',s.name);el.addEventListener('click',e=>{e.stopPropagation();this.pick(s.id)});el.addEventListener('pointerdown',e=>e.stopPropagation());
      this.layer.appendChild(el);return {s,el,v:llv(s.lat,s.lon,1.008),o:-1}});
    this.bind();
    this.ro=new ResizeObserver(()=>this.fit());this.ro.observe(this.cv);this.fit();
    this.io=new IntersectionObserver(([e])=>this.vis=e.isIntersecting);this.io.observe(this.cv);this.vis=true;
    let last=performance.now();
    const loop=t=>{if(!this.alive)return;requestAnimationFrame(loop);const dt=Math.min(.05,(t-last)/1000);last=t;if(!this.vis||document.hidden)return;this.tick(dt)};requestAnimationFrame(loop);
  }
  fit(){const w=this.cv.clientWidth||300,h=this.cv.clientHeight||300;this.r.setSize(w,h,false);this.cam.aspect=w/h;this.cam.updateProjectionMatrix();this.w=w;this.h=h}
  bind(){
    let px,py,down=false;const cv=this.cv;
    cv.addEventListener('pointerdown',e=>{down=true;this.drag=true;this.tgt=null;this.auto=false;px=e.clientX;py=e.clientY;cv.setPointerCapture(e.pointerId)});
    cv.addEventListener('pointermove',e=>{if(!down)return;const k=.0065*(this.cam.position.z/4.6),dx=e.clientX-px,dy=e.clientY-py;px=e.clientX;py=e.clientY;
      this.yaw+=dx*k;this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch+dy*k));this.vy=dx*k});
    const up=()=>{down=false;this.drag=false;this.idle=0};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
    if(this.opt.zoom)cv.addEventListener('wheel',e=>{e.preventDefault();this.cam.position.z=Math.max(2.4,Math.min(7,this.cam.position.z*(1+e.deltaY*.0012)))},{passive:false});
  }
  focus(la,lo){let y=Math.PI/2-(lo+180)*D2R;const d=((y-this.yaw)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI;this.tgt={yaw:this.yaw+d,pitch:Math.max(-1.1,Math.min(1.1,la*D2R))};this.auto=false;this.vy=0}
  pick(id,silent){const m=this.mk.find(x=>x.s.id===id);if(!m)return;SFX.blip();this.mk.forEach(x=>x.el.classList.toggle('on',x===m));this.focus(m.s.lat,m.s.lon);if(!silent&&this.opt.onPick)this.opt.onPick(m.s)}
  tick(dt){
    if(this.tgt){this.yaw+=(this.tgt.yaw-this.yaw)*Math.min(1,dt*5);this.pitch+=(this.tgt.pitch-this.pitch)*Math.min(1,dt*5);if(Math.abs(this.tgt.yaw-this.yaw)<.001)this.tgt=null}
    else if(!this.drag){this.yaw+=this.vy;this.vy*=.94;this.idle+=dt;if(this.auto)this.yaw+=dt*.12}
    this.body.rotation.set(this.pitch,this.yaw,0);this.body.updateMatrixWorld();
    const cp=this.cam.position;
    this.mk.forEach(m=>{const p=m.v.clone().applyMatrix4(this.body.matrixWorld),n=p.clone().normalize(),f=n.dot(cp.clone().sub(p).normalize());
      const o=Math.max(0,Math.min(1,(f-.04)/.22));p.project(this.cam);
      const x=(p.x+1)/2*this.w,y=(1-p.y)/2*this.h;
      m.el.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${(.55+.45*o).toFixed(3)})`;
      if(Math.abs(o-m.o)>.01){m.el.style.opacity=o.toFixed(2);m.el.classList.toggle('off',o<.2);m.el.tabIndex=o<.2?-1:0;m.o=o}});
    this.r.render(this.sc,this.cam);
  }
  dispose(){this.alive=false;this.ro.disconnect();this.io.disconnect();dispose3(this.sc);this.r.dispose();this.r.forceContextLoss&&this.r.forceContextLoss();this.host.innerHTML=''}
}

/* ============ PLANET DETAIL (full screen) ============ */
let pGlobe=null,pdOpener=null;
function histHTML(w){
  const h=HIST[w],n=h.items.length,y0=h.items[0][0],y1=2026,W=620,H=150,pd=30;
  const xs=y=>pd+(y-y0)/(y1-y0)*(W-2*pd),ys=k=>H-28-k/n*(H-56);
  let d=`M${xs(y0)} ${ys(0)}`,k=0;h.items.forEach(([y])=>{d+=` L${xs(y)} ${ys(k)} L${xs(y)} ${ys(++k)}`});d+=` L${xs(y1)} ${ys(n)}`;
  const chart=`<svg class="hchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Machines over time, rising from 0 in ${y0} to ${n}"><line x1="${pd}" x2="${W-pd}" y1="${ys(0)}" y2="${ys(0)}" stroke="rgba(255,255,255,.25)"/><path d="${d}" fill="none" stroke="#f7c548" stroke-width="2.5"/><text x="${pd}" y="${H-8}">${y0}</text><text x="${W-pd}" y="${H-8}" text-anchor="end">${y1}</text><text x="${W-pd}" y="${ys(n)-8}" text-anchor="end">${n} in total</text></svg>`;
  const rows=h.items.map(([y,t,id])=>`<li><span class="y">${y}</span><span>${t}</span>${id?`<button class="link" data-open="${id}">Story</button>`:'<span></span>'}</li>`).join('');
  return `<div class="hcount"><b>${n}</b><span>${h.unit}</span></div><p class="lede">${h.note}</p>${chart}<h3 class="sub3">One by one</h3><ol class="hlist">${rows}</ol><h3 class="sub3">Lost on the way</h3><p class="lede">${h.lost}</p>`;
}
function openPlanet(k,from){
  const P=PLANET[k],sites=k==='moon'?MOON_SITES:k==='mars'?MARS_SITES:P.sites,w=k==='uranus'||k==='neptune'?'deep':k;
  pdOpener=from||document.activeElement;SFX.whoosh();
  const panel=$('#pdPanel');
  panel.innerHTML=`<p class="eyebrow">${P.eyebrow}</p><h2 id="pdTitle">${P.title}</h2><p class="lede">${P.intro}</p>
   ${sites.length?`<div class="sites" role="group" aria-label="Sites">${sites.map(s=>`<button data-site="${s.id}" aria-pressed="false">${s.short}</button>`).join('')}</div><div class="info" id="pdInfo" aria-live="polite"><p class="hint">Select a marker on the globe, or a name above, to turn the planet to that site.</p></div>`:''}
   ${HIST[w]?`<h3 class="sub3" style="margin-top:30px">${w==='deep'?'NASA probes leaving the Solar System':'Every NASA machine that worked here'}</h3>${histHTML(w)}`:''}`;
  $('#pd').hidden=false;document.body.style.overflow='hidden';
  if(pGlobe){pGlobe.dispose();pGlobe=null}
  const show=s=>{$$('#pdPanel .sites button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.site===s.id)));siteInfo(s,k,$('#pdInfo'))};
  if(hasGL())pGlobe=new Globe($('#pdGlobe'),k,sites,{zoom:true,dist:4.2,onPick:show});
  else $('#pdGlobe').innerHTML='<p class="none">3D view needs WebGL, which this browser has turned off.</p>';
  panel.querySelectorAll('.sites button').forEach(b=>b.addEventListener('click',()=>{const s=sites.find(x=>x.id===b.dataset.site);if(pGlobe)pGlobe.pick(s.id,true);show(s)}));
  panel.scrollTop=0;$('#pdClose').focus();
}
function closePlanet(){$('#pd').hidden=true;if(pGlobe){pGlobe.dispose();pGlobe=null}document.body.style.overflow='';if(pdOpener&&pdOpener.focus)pdOpener.focus()}
$('#pdClose').addEventListener('click',closePlanet);
$('#pdPanel').addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openStory(b.dataset.open,b)});

/* ============ STORY DRAWER (with device image) ============ */
let cur=null,opener=null;
function openStory(id,from){
  const m=byId[id];if(!m)return;cur=id;opener=from||document.activeElement;SFX.open();const E=EQUIP[id]||{goal:m.purpose,wins:[],parts:[]};
  const play=GJ[id]?($('#gm')?`<button class="btn" type="button" data-play="${id}">🎮 Play its journey</button>`:`<a class="btn" href="index.html#play-${id}">🎮 Play its journey</a>`):'';
  $('#dBadge').innerHTML=`<span class="badge" data-st="${m.status}">${ST[m.status]}</span>`;
  $('#dBody').innerHTML=`<div class="dv">
   <div class="dv-txt">
    <h2 id="dTitle">${m.name}</h2><p class="d-one">${m.kid}</p>
    <div class="dv-pic" id="devFig">${PHOTOS[id]?`<img src="${PHOTOS[id][0]}" alt="${m.name}">`:''}</div>
    <p class="dv-row"><b>🎯 Its job</b>${E.goal}</p>
    ${E.wins.length?`<p class="dv-row"><b>🏆 Best moment</b>${E.wins[0]}</p>`:''}
    <p class="dv-row"><b>📍 Now</b>${(m.now.match(/^[^.!?]+[.!?]/)||[m.now])[0]}</p>
    ${play?`<p class="dv-play">${play}</p>`:''}
   </div>
   <figure class="demo" id="demo"></figure>
  </div>
  ${typeof exhHTML==='function'?`<section class="exh-wrap"><h3 class="exh-h">The full exhibit story</h3>${exhHTML(id)}</section>`:''}
  <div class="dv-leave"><button type="button" class="dv-out" id="dLeave">✕ Click here to leave</button></div>`;
  $('#drawer').classList.remove('wide');$('#drawer').classList.add('dv-wide');$('#layer').hidden=false;document.body.style.overflow='hidden';$('#drawer').scrollTop=0;$('#dClose').focus();
  const fromTour=typeof tourWaiting==='function'&&tourWaiting();if(fromTour)endTour();demoMount(id,fromTour);
  $('#dLeave').addEventListener('click',closeStory);
  if(!PHOTOS[id]){const put=()=>{if(cur!==id)return;const pic=devicePic(id);const f=$('#devFig');if(pic.src&&f)f.innerHTML=`<img src="${pic.src}" alt="${m.name}">`};if(IMG[id])put();else setTimeout(put,60)}
}
function storyYears(id){const J=GJ[id];if(!J)return '';return `<h3>Year by year</h3><ol class="yby">${J.stops.map(s=>`<li><span class="y">${s.d}</span><span><b>${s.t}.</b> ${s.x}</span></li>`).join('')}</ol>`}
function storyPeople(id){const J=GJ[id];if(!J)return '';const seen=new Map();J.stops.forEach(s=>(s.ppl||[]).forEach(p=>{if(!seen.has(p[0]))seen.set(p[0],p)}));if(!seen.size)return '';
  return `<h3>People</h3><div class="ppl">${[...seen.values()].map(([nm,role,a])=>{const A=typeof ASTRO!=='undefined'&&(ASTRO.find(x=>x.n===nm)||TEAM.find(x=>x.n===nm));return `<${A?'button type="button" data-astro="'+A.id+'"':'div'} class="pp">${personPic(nm,a)}<span><b>${nm}</b><small>${role}</small></span></${A?'button':'div'}>`}).join('')}</div>`}
function closeStory(){SFX.close();demoStop();VO.stop();$('#layer').hidden=true;if($('#pd').hidden)document.body.style.overflow='';if(opener&&opener.focus)opener.focus()}
$('#dClose').addEventListener('click',closeStory);$('#scrim').addEventListener('click',closeStory);
$('#dBody').addEventListener('click',e=>{const pl=e.target.closest('[data-play]');if(pl){closeStory();openGame();startJourney(pl.dataset.play);return}const b=e.target.closest('[data-step]');if(!b)return;const i=M.findIndex(m=>m.id===cur);openStory(M[(i+ +b.dataset.step+M.length)%M.length].id,opener)});
addEventListener('keydown',e=>{if(e.key!=='Escape'||($('#gm')&&!$('#gm').hidden))return;if(!$('#mv').hidden)closeViewer();else if(!$('#layer').hidden)closeStory();else if(!$('#pd').hidden)closePlanet()});
/* ============ TIME MACHINE ============ */
let yr=null,timer=null;
function board(y){
  $('#yearOut').textContent=y;
  const hap=E.filter(e=>e.y===y);
  $('#happened').textContent=hap.length?hap.map(e=>e.t).join(' '):'No major arrivals or endings this year. Machines already out there keep working, or keep resting.';
  const f=$('#board');
  f.innerHTML=WORLDS.map(w=>{
    const list=M.filter(m=>m.world===w&&y>=m.arrive);
    const wk=list.filter(m=>m.end==null||y<=m.end).length;
    return `<div class="col"><h3>${WN[w]}</h3><p class="count">${wk} working · ${list.length-wk} resting</p>`+
    (list.length?`<ul class="chips">${list.map(m=>{const on=m.end==null||y<=m.end;return `<li class="chip ${on?'':'rest'}">${m.name}<small>${on?'working':'resting'}</small></li>`}).join('')}</ul>`:'<p class="empty">Nothing here yet.</p>')+`</div>`;
  }).join('');
  $$('.ev').forEach(b=>b.classList.toggle('future',+b.dataset.y>y));
}
function initTimeline(){
yr=$('#yr');
$('#events').innerHTML=E.map((e,i)=>`<li><button class="ev" data-y="${e.y}" data-i="${i}"><span class="y">${e.y}</span><span class="t">${e.t}<span class="w">${WN[e.w]}</span></span></button></li>`).join('');
$('#events').addEventListener('click',e=>{const b=e.target.closest('.ev');if(!b)return;stopPlay();yr.value=b.dataset.y;board(+b.dataset.y);const ev=E[+b.dataset.i];if(ev.m)openStory(ev.m,b)});
yr.addEventListener('input',()=>{stopPlay();board(+yr.value)});
$('#play').addEventListener('click',()=>{
  if(timer){stopPlay();return}
  if(+yr.value>=2026)yr.value=1960;
  $('#play').textContent='Pause';board(+yr.value);
  timer=setInterval(()=>{const v=+yr.value+1;yr.value=v;board(v);if(v>=2026)stopPlay()},320);
});
board(2026);
}
function stopPlay(){if(timer){clearInterval(timer);timer=null;$('#play').textContent='Play through history'}}

/* ============ LEGACY ============ */
function initLegacy(){
$('#legacyList').innerHTML=L.map(r=>`<div class="lrow"><div><h3>${r.q}</h3><div class="links">${r.ms.map(id=>`<button class="link" data-open="${id}">${byId[id].name}</button>`).join('')}</div></div>
<div><div class="lab">The engineering</div><p>${r.eng}</p></div><div><div class="lab">The discovery</div><p class="lsci">${r.sci}</p></div></div>`).join('');
$('#legacyList').addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openStory(b.dataset.open,b)});
}

/* ============ QUIZ ============ */
let qi=0,score=0,answered=false;
function quiz(){
  const box=$('#quizBox');
  if(qi>=Q.length){
    const rank=score>=70?'Mission Specialist':score>=50?'Flight Engineer':score>=30?'Pilot':'Cadet';
    box.innerHTML=`<div class="qtop"><span>Final score</span><span>${score} / ${Q.length*10}</span></div><div class="bar"><i style="width:100%"></i></div>
    <p class="eyebrow">Your explorer rank</p><p class="rank">${rank}</p><p class="fb">${score>=70?'You know these machines well.':'Open a few more stories above and try again.'}</p>
    <button class="btn" id="again">Play again</button>`;
    $('#again').addEventListener('click',()=>{qi=0;score=0;quiz()});return;
  }
  const q=Q[qi];answered=false;
  box.innerHTML=`<div class="qtop"><span>Question ${qi+1} of ${Q.length}</span><span>Score ${score}</span></div><div class="bar"><i style="width:${qi/Q.length*100}%"></i></div>
  <p class="qtext" id="qt"></p><div class="opts" role="group" aria-labelledby="qt"></div><div class="fb" id="fb" aria-live="polite"></div><div class="qnext" id="qn"></div>`;
  $('#qt').textContent=q.q;
  const opts=$('.opts');
  q.o.forEach((t,i)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<b>${'ABCD'[i]}</b><span></span>`;b.lastChild.textContent=t;b.addEventListener('click',()=>pick(i));opts.appendChild(b)});
}
function pick(i){
  if(answered)return;answered=true;const q=Q[qi],bs=$$('.opt');
  bs.forEach((b,j)=>{b.disabled=true;if(j===i)b.classList.add(i===q.a?'right':'wrong')});
  const ok=i===q.a;if(ok)score+=10;ok?SFX.right():SFX.wrong();
  $('#fb').innerHTML=`<strong>${ok?'Correct, +10 points.':'Not this time.'}</strong> `;$('#fb').append((ok?'':`The answer is "${q.o[q.a]}". `)+q.w);
  $('#qn').innerHTML=`<button class="btn" id="nx">${qi===Q.length-1?'See my rank':'Next question'} →</button>`;
  $('#nx').addEventListener('click',()=>{qi++;quiz()});
}

/* ============ EXHIBIT: WHAT WE LEFT BEHIND (from "NASA's Abandoned Hardware") ============ */
const LB=[
 {img:'assets/img/dev-surveyor.jpg',cap:'Apollo 12 astronaut at Surveyor 3',w:'moon',t:'Surveyor landers',d:'1966 – 1968',k:'Robot scouts',p:['Surveyor 1, 3, 5, 6 and 7 all landed softly, between June 1966 and January 1968.','Nothing was brought home. Each one went dead when its batteries and power ran out.','Surveyor 3 got visitors: in November 1969 the Apollo 12 crew walked over and took its camera and other parts back to Earth.'],m:'surveyor3'},
 {img:'assets/img/dev-lm-descent.jpg',cap:'An Apollo lunar module on the Moon',w:'moon',t:'Lunar Module descent stages',d:'1969 – 1972',k:'Launch pads left behind',p:['Six landers touched down: Apollo 11, 12, 14, 15, 16 and 17.','Each lunar module came in two parts. The bottom half, the descent stage, became a launch pad and stayed on the Moon. The top half carried the astronauts back to orbit.','Apollo 13 never landed. Its lunar module burned up in Earth\'s atmosphere.']},
 {img:'assets/img/dev-ascent.jpg',cap:'An ascent stage rising back to orbit',w:'moon',t:'Ascent stages',d:'1969 – 1972',k:'Crashed on purpose, or lost',p:['Apollo 12, 14, 15 and 17: crashed into the Moon on purpose. Seismometers on the surface recorded the impacts to learn about the Moon\'s insides.','Apollo 11 and 16: left in orbit and fell back later on their own. Nobody knows where Apollo 11\'s ascent stage came down.']},
 {img:'assets/img/dev-lrv.jpg',cap:'The Apollo 15 rover',w:'moon',t:'Lunar Roving Vehicles',d:'1971 – 1972',k:'Three parked cars',p:['Apollo 15, 16 and 17 drove about 28, 27 and 36 kilometres.','Each was parked after the last moonwalk, with its TV camera aimed to film the lift-off. The batteries were never recharged.'],m:'lrv'},
 {img:'assets/img/dev-alsep.jpg',cap:'An ALSEP science station',w:'moon',t:'ALSEP science stations',d:'1969 – 1977',k:'Switched off while still working',p:['Seismometers, heat-flow probes and magnetometers were left at the Apollo 12 to 17 sites and run by radio.','On 30 September 1977 NASA turned them off to save money. After eight years, they were still working.']},
 {img:'assets/img/dev-retro.jpg',cap:'An Apollo laser reflector',w:'moon',t:'Laser retroreflectors',d:'1969 – today',k:'Still working',live:1,p:['Apollo 11, 14 and 15 left mirror arrays on the surface.','They are the only abandoned equipment still in use. Observatories bounce lasers off them to measure the distance to the Moon.'],m:'retro'},
 {img:'assets/img/dev-impacts.jpg',cap:'Impact sites seen from lunar orbit',w:'moon',t:'Rocket stages and probes',d:'1962 – 2014',k:'Impacts, planned and unplanned',p:['Saturn IV-B upper stages from Apollo 13, 14, 15 and 17 were crashed into the Moon for seismic experiments.','Rangers 4, 6, 7, 8 and 9 crashed. Ranger 4 hit the far side with its systems dead and Ranger 6\'s cameras failed. Rangers 7, 8 and 9 sent pictures until impact, as planned.','The Lunar Orbiters (1966–67), Lunar Prospector (1999), LCROSS (2009), the twin GRAIL probes (2012) and LADEE (2014) all ended with planned crashes. Lunar Prospector carried some of the ashes of geologist Eugene Shoemaker.']},
 {img:'assets/img/dev-personal.jpg',cap:'An Apollo astronaut at work on the surface',w:'moon',t:'Personal items',d:'1969 – 1972',k:'Things people left',p:['Apollo crews left flags, commemorative plaques, Alan Shepard\'s golf balls from Apollo 14 and Charlie Duke\'s family photo from Apollo 16.','They also left about 96 bags of human waste.']},
 {img:'assets/img/dev-viking.jpg',cap:'The view from a Viking lander',w:'mars',t:'Viking 1 and 2',d:'1976 – 1982',k:'The first Mars landers',p:['Viking 1 landed on 20 July 1976. Contact was lost in November 1982 after a faulty software update.','Viking 2 landed on 3 September 1976. It stopped working in April 1980 when its batteries wore out.']},
 {img:'assets/img/dev-sojourner.jpg',cap:'Sojourner beside a rock',w:'mars',t:'Pathfinder and Sojourner',d:'1997',k:'The first Mars rover',p:['They landed on 4 July 1997.','The last transmission came on 27 September 1997, probably because the battery failed in the cold.'],m:'sojourner'},
 {img:'assets/img/dev-opportunity.jpg',cap:'Opportunity self-portrait',w:'mars',t:'Spirit and Opportunity',d:'2004 – 2019',k:'The twin rovers',p:['Spirit landed on 4 January 2004, got stuck in soft sand in 2009 and last made contact in March 2010. NASA stopped trying to reach it in May 2011.','Opportunity landed on 25 January 2004. A planet-wide dust storm blocked its sunlight in June 2018. NASA declared the mission over in February 2019.'],m:'opportunity'},
 {img:'assets/img/dev-phoenix.jpg',cap:'Phoenix from above',w:'mars',t:'Phoenix',d:'2008',k:'The arctic lander',p:['Phoenix landed on 25 May 2008 in the Martian arctic and confirmed water ice under the soil.','It died in November 2008, when winter darkness cut off its solar power.']},
 {img:'assets/img/dev-insight.jpg',cap:'InSight with its seismometer dome',w:'mars',t:'InSight',d:'2018 – 2022',k:'The listener',p:['InSight landed on 26 November 2018 and recorded more than 1,313 marsquakes.','Dust on its solar panels ended the mission in December 2022.'],m:'insight'},
 {img:'assets/img/dev-ingenuity.jpg',cap:'Ingenuity on Mars',w:'mars',t:'Ingenuity',d:'2021 – 2024',k:'The first Mars aircraft',p:['It rode to Mars under Perseverance and first flew in April 2021.','After 72 flights, rotor damage on landing ended the mission in January 2024.'],m:'ingenuity'},
 {img:'assets/img/dev-lost.jpg',cap:'Artist\'s view of Mars Climate Orbiter',w:'mars',t:'Lost spacecraft',d:'1999',k:'Missions that never made it',p:['Mars Polar Lander was lost on arrival in December 1999, most likely because a false touchdown signal shut its engines off too early. Its fate is officially unknown.','The two Deep Space 2 probes riding with it were never heard from.','Mars Climate Orbiter burned up in the atmosphere after a mix-up between metric and imperial units.']},
 {img:'assets/img/dev-debris.jpg',cap:'Perseverance\'s back shell on the ground',w:'mars',t:'Descent debris',d:'2012 and 2021',k:'Dropped during landing',p:['Heat shields, parachutes, back shells and descent stages from Curiosity and Perseverance were dropped on purpose as they landed.','They lie scattered across the surface, and orbiting spacecraft have photographed them.']},
 {img:'assets/img/dev-curiosity.jpg',cap:'Curiosity self-portrait',w:'mars',t:'Still operating',d:'Since 2012 and 2021',k:'Not left behind yet',live:1,p:['Curiosity (since 2012) and Perseverance (since 2021) are still working.','One day they will join this list too.'],m:'curiosity'}
];
let lbF='all';
function initLeft(){
  const box=$('#leftBehind');
  const draw=()=>{const list=LB.filter(x=>lbF==='all'||(lbF==='live'?x.live:x.w===lbF));
    $$('#lbTabs .tab').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.f===lbF)));
    box.innerHTML=list.map(x=>`<article class="lb ${x.live?'live':''}">${x.img?`<figure class="lb-fig"><img src="${x.img}" alt="${x.cap}" loading="lazy"><figcaption>Photo: NASA · ${x.cap}</figcaption></figure>`:''}<div class="lb-top"><span class="lb-w">${x.w==='moon'?'The Moon':'Mars'}</span><span class="lb-d">${x.d}</span></div><h3>${x.t}</h3><p class="lb-k">${x.k}</p><ul>${x.p.map(t=>`<li>${t}</li>`).join('')}</ul>${x.m?`<button class="link" data-open="${x.m}">Story: ${byId[x.m].name} →</button>`:''}</article>`).join('')};
  $('#lbTabs').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b){lbF=b.dataset.f;draw()}});
  box.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openStory(b.dataset.open,b)});
  draw();
}
/* ---------- simple equipment facts for students: goal, cost, achievements, parts ----------
   Costs are in US dollars of the time and come from NASA and NASA-cited figures. */
const EQUIP={
 surveyor3:{goal:'Prove that a spacecraft can land gently on the Moon, so astronauts could land there safely too.',
  cost:'$469 million',costNote:'for all 7 Surveyor landers together (1960s money)',
  wins:['Landed on the Moon in April 1967, even after bouncing twice','Dug the first trenches in Moon soil with its scoop','Apollo 12 astronauts visited it in 1969 and brought its camera back to Earth'],
  parts:[['📷','TV camera','Took pictures so scientists could see the landing site.'],['🥄','Scoop arm','Dug and pressed the soil to test if it could hold a spacecraft.'],['🔥','Rocket engines','Slowed it down so it could land gently.'],['🦵','Three legs','Soaked up the bump of landing, like springs.']]},
 retro:{goal:'Help scientists measure the distance from Earth to the Moon very exactly, using laser light.',
  cost:'Very low',costNote:'Its price was never listed on its own. Scientists call it NASA’s most cost-effective experiment.',
  wins:['Still works today, more than 55 years later, with no power at all','Showed that the Moon moves about 3.8 cm farther from Earth every year','Helped scientists test Einstein’s ideas about gravity'],
  parts:[['🔺','100 glass corner-cube mirrors','Each cube sends light straight back to where it came from.'],['🔦','A laser on Earth','A big telescope fires a laser pulse at the mirrors.'],['⏱️','A very exact timer','The light takes about 2.5 seconds to go there and back. That time gives the distance.']]},
 lrv:{goal:'Carry two astronauts and their tools much farther across the Moon than they could walk.',
  cost:'$38 million',costNote:'for 4 rovers built by Boeing (3 drove on the Moon, 1 was used for spare parts)',
  wins:['Drove on the Moon on Apollo 15, 16 and 17','The Apollo 17 rover drove about 36 km','Let astronauts collect rocks up to 7.6 km away from their lander'],
  parts:[['🔋','Two batteries','Powered a small electric motor in each wheel.'],['🛞','Wire-mesh wheels','Gripped the dusty ground. They had no air inside.'],['🕹️','T-shaped hand controller','Used to steer, speed up and brake, instead of a steering wheel.'],['📡','Dish antenna','Sent TV pictures straight back to Earth.']]},
 sojourner:{goal:'Show that a small robot car could drive on Mars and study its rocks.',
  cost:'$25 million',costNote:'for the rover. The whole Mars Pathfinder mission cost about $265 million.',
  wins:['First rover to drive on another planet (July 1997)','Studied what the rocks and soil near its lander are made of','Planned to work for 7 days, but kept going for 83'],
  parts:[['☀️','Solar panel on top','Turned sunlight into electricity.'],['🔬','APXS sensor at the back','Touched rocks to find out what they are made of.'],['📷','Cameras','Took pictures and helped it steer around rocks.'],['🛞','Six wheels on bendy legs','Climbed over small rocks without tipping over.']]},
 spirit:{goal:'Work like a robot geologist and look for signs that water once flowed on Mars.',
  cost:'$820 million',costNote:'for Spirit and Opportunity together, including launch and their first 90 days',
  wins:['Planned to last 90 days, but worked for more than 6 years','Found rocks and soil that formed in hot water, a clue that Mars was once wetter','Drove about 7.7 km across Gusev Crater'],
  parts:[['☀️','Solar panels','Made power from sunlight. Dust on them made the rover weaker.'],['🪨','Rock grinder (RAT)','Scraped off the outside of rocks to see what is inside.'],['🔬','Microscope camera','Took close-up pictures of tiny grains.'],['👀','Pancam','Two colour cameras on a tall mast, like eyes.']]},
 opportunity:{goal:'Search for clues that liquid water once existed on Mars.',
  cost:'$820 million',costNote:'for Opportunity and Spirit together, including launch and their first 90 days',
  wins:['Planned to last 90 days, but worked for almost 15 years','Found “blueberries”, tiny balls of a mineral that forms in water','Drove about 45 km across Mars, farther than any rover before it'],
  parts:[['☀️','Solar panels','Made power from sunlight. Wind sometimes blew the dust off!'],['🪨','Rock grinder (RAT)','Scraped off the outside of rocks to see what is inside.'],['🔬','Microscope camera','Took close-up pictures of the tiny “blueberries”.'],['👀','Pancam','Two colour cameras on a tall mast, like eyes.']]},
 insight:{goal:'Listen to marsquakes to learn what the inside of Mars is like.',
  cost:'About $814 million',costNote:'NASA’s cost. France and Germany added about $180 million for the instruments.',
  wins:['Felt more than 1,313 marsquakes','Measured the size of Mars’s crust, mantle and core','Worked for 4 years, until dust covered its solar panels'],
  parts:[['🎧','SEIS seismometer','Felt tiny shakes in the ground from marsquakes.'],['🔨','The “mole” heat probe','Tried to hammer itself into the ground to measure heat. The soil was too sticky.'],['🦾','Robotic arm','Lifted the instruments off the deck and put them on the ground.'],['☀️','Two round solar panels','Opened like fans and made power from sunlight.']]},
 ingenuity:{goal:'Test whether a helicopter can fly in the very thin air of Mars.',
  cost:'$80 million',costNote:'to build, plus about $5 million to fly it',
  wins:['First powered flight on another planet (19 April 2021)','Planned to fly 5 times, but flew 72 times','Scouted the way ahead for the Perseverance rover'],
  parts:[['🌀','Two rotor blades','Spin in opposite directions about 2,400 times a minute to push air down.'],['🔋','Batteries','Charged by a small solar panel on top.'],['📷','Two cameras','One takes colour photos. One watches the ground to help it steer.'],['🧠','A phone-style processor','Flew by itself, because radio messages from Earth take many minutes.']]},
 curiosity:{goal:'Find out whether Mars ever had the right conditions for tiny living things.',
  cost:'$2.5 billion',costNote:'for the whole mission, including the launch',
  wins:['Found the bed of an ancient lake in Gale Crater','Found organic molecules, chemicals that life is made from, in very old rocks','Still climbing Mount Sharp, more than 14 years after landing'],
  parts:[['⚡','Nuclear power source','Makes electricity from heat, so it can work day and night.'],['🔦','ChemCam laser','Zaps rocks from up to 7 metres away to find out what they are made of.'],['🛠️','Drill','Drills into rock and collects the powder.'],['🧪','Two mini labs inside','Heat and test the rock powder to look for important chemicals.']]},
 perseverance:{goal:'Look for signs of ancient life and collect rock samples that could one day come back to Earth.',
  cost:'$2.7 billion',costNote:'for the mission, through its first two years on Mars',
  wins:['Explored the delta of an ancient river in Jezero Crater','Sealed rock cores in clean sample tubes','Its MOXIE tool made oxygen from the air of Mars'],
  parts:[['🛠️','Coring drill','Cuts out rock cores about the size of a piece of chalk.'],['🧪','Sample tubes','Seal the cores so they stay clean for many years.'],['🫧','MOXIE','A test machine that turned Mars air into oxygen we could breathe.'],['📷','23 cameras','Including Mastcam-Z, which can zoom in like a camera lens.']]},
 voyager1:{goal:'Fly past Jupiter and Saturn, then keep going out into the space between the stars.',
  cost:'$865 million',costNote:'for Voyager 1 and Voyager 2 together, up to 1989',
  wins:['Took close-up photos of Jupiter, Saturn and their moons','Took the famous “Pale Blue Dot” photo of Earth in 1990','In 2012 it became the first human-made object in interstellar space'],
  parts:[['📡','3.7-metre dish antenna','Sends data home across billions of kilometres.'],['⚡','Nuclear power (RTGs)','Make electricity from heat. The power drops a little every year.'],['📷','Cameras on a turning arm','Turned to point at planets as it flew past.'],['💿','Golden Record','Sounds and pictures of Earth, a message for anyone who finds it.']]}
};
/* story extras: the big question each machine was built to answer, and an easy size comparison */
const EQ_Q={surveyor3:'Is the Moon’s ground hard enough to land on, or is it deep, soft dust?',retro:'Exactly how far away is the Moon?',lrv:'How can astronauts explore farther than they can walk?',
 sojourner:'Can a little robot car drive on Mars?',spirit:'Did water once flow on Mars?',opportunity:'Was there ever liquid water on Mars?',insight:'What is hidden deep inside Mars?',
 ingenuity:'Can anything fly in the very thin air of Mars?',curiosity:'Could tiny living things ever have lived on Mars?',perseverance:'Are there signs of ancient life in the rocks of Mars?',voyager1:'What do the giant planets look like up close?'};
const EQ_SIZE={curiosity:['a small car','car'],perseverance:['a small car','car'],spirit:['a golf cart','cart'],opportunity:['a golf cart','cart'],sojourner:['a microwave oven','oven'],ingenuity:['a tissue box (plus long blades)','box'],lrv:['a small car','car']};

/* ============ HOME: did-you-know strip + review of your last journey ============ */
const DYK=['Opportunity was built to last 90 days. It worked for almost 15 years.','The Apollo laser mirrors are the only equipment left on the Moon that is still in use.','Voyager 1 is so far away that a radio message takes almost a whole day to reach it.','Ingenuity was planned to fly 5 times. It flew 72.','Apollo crews left about 96 bags of human waste on the Moon.','Alan Shepard hit two golf balls on the Moon. They are still there.','InSight felt more than 1,313 marsquakes.','The Moon drifts about 3.8 centimetres farther from Earth every year.','Curiosity is the size of a small car and weighs about 900 kilograms.','Sojourner, the first Mars rover, was about the size of a microwave oven.','Nobody has walked on the Moon since December 1972.','Spirit\'s broken wheel dug up one of its biggest discoveries.','Mars Climate Orbiter was lost because of a mix-up between metric and imperial units.','Perseverance made oxygen out of Martian air in April 2021.'];
/* real NASA photos (from the museum's exhibition notes). Machines without one fall back to the 3D illustration. */
const PHOTOS={
 voyager1:['assets/img/dev-voyager1.jpg','Artist\'s concept: NASA · Voyager 1'],
 surveyor3:['assets/img/dev-surveyor.jpg','Photo: NASA · Apollo 12 astronaut at Surveyor 3'],
 retro:['assets/img/dev-retro.jpg','Photo: NASA · Apollo laser reflector on the Moon'],
 lrv:['assets/img/dev-lrv.jpg','Photo: NASA · Apollo 15 Lunar Roving Vehicle'],
 sojourner:['assets/img/dev-sojourner.jpg','Photo: NASA · Sojourner beside a Martian rock'],
 spirit:['assets/img/dev-spirit.jpg','Artist\'s concept: NASA · Spirit on Mars'],
 opportunity:['assets/img/dev-opportunity.jpg','Photo: NASA · Opportunity self-portrait'],
 insight:['assets/img/dev-insight.jpg','Photo: NASA · InSight on Elysium Planitia'],
 ingenuity:['assets/img/dev-ingenuity.jpg','Photo: NASA · Ingenuity on Mars'],
 curiosity:['assets/img/dev-curiosity.jpg','Photo: NASA · Curiosity self-portrait'],
 perseverance:['assets/img/dev-perseverance.jpg','Photo: NASA · Perseverance self-portrait']
};
function devicePic(id){return PHOTOS[id]?{src:PHOTOS[id][0],cap:PHOTOS[id][1],photo:1}:{src:IMG[id]||deviceImage(id),cap:'3D illustration'}}
function initHomeExtras(){
  let k=Math.floor(Math.random()*DYK.length);const t=$('#dykT');
  const show=()=>{t.classList.remove('in');void t.offsetWidth;t.textContent=DYK[k%DYK.length];t.classList.add('in')};
  show();let T=setInterval(()=>{k++;show()},7000);
  $('#dyk').addEventListener('click',()=>{k++;show();clearInterval(T);T=setInterval(()=>{k++;show()},7000)});
  renderLastRun();
}
function loadRun(){if(window.LAST_RUN)return window.LAST_RUN;try{return JSON.parse(localStorage.getItem('bt-last')||'null')}catch(e){return null}}
function saveRunData(r){window.LAST_RUN=r;try{localStorage.setItem('bt-last',JSON.stringify(r))}catch(e){}}
function renderLastRun(){
  const box=$('#lastRun');if(!box)return;const r=loadRun();if(!r||!byId[r.id]){box.hidden=true;return}
  const m=byId[r.id],pct=Math.round(r.done/r.total*100),first=r.stops[0],last=r.stops[r.stops.length-1];
  box.innerHTML=`<p class="lr-tag">Your last journey${r.why==='aliens'?' · slapped by aliens 👽':r.ended?' · completed':' · '+pct+'% done'}</p>
   <div class="lr-row"><img alt="" src="${devicePic(r.id).src||''}"><div><b>${m.name}</b><span>${r.done} of ${r.total} stops · ${first?first.d:''}${last&&last!==first?' → '+last.d:''}</span><i class="lr-bar"><i style="width:${pct}%"></i></i></div></div>
   <p class="lr-x">${last?`Last stop: <b>${last.t}</b>. ${r.why==='aliens'?'Oops… looks like the aliens are not friendly.':r.ended?(m.status==='active'?'Its story continues today.':'Its signal was lost.'):'You left before the end.'}`:''}</p>
   <div class="lr-b"><button type="button" data-lr="log">Story review</button><button type="button" data-lr="play">${r.ended?'Play again':'Continue'}</button><button type="button" data-lr="x" aria-label="Hide this review">✕</button></div>`;
  box.hidden=false;
  box.onclick=e=>{const b=e.target.closest('[data-lr]');if(!b)return;const a=b.dataset.lr;
    if(a==='x'){box.hidden=true;return}if(a==='play'){openGame();startJourney(r.id);return}if(a==='log')openRunLog(r,b)};
}
function openRunLog(r,from){
  const m=byId[r.id];opener=from;cur=null;
  $('#dBadge').innerHTML=`<span class="badge" data-st="${m.status}">${ST[m.status]}</span>`;
  $('#dBody').innerHTML=`<p class="eyebrow">Your story review</p><h2 id="dTitle">${m.name}</h2><p class="d-one">You reached ${r.done} of ${r.total} stops${r.ended?' and saw the end of its journey.':'.'}</p>
   <figure class="dev"><img src="${devicePic(r.id).src||''}" alt="${m.name}"><figcaption>${devicePic(r.id).cap}</figcaption></figure>
   <ol class="rl">${r.stops.map(s=>`<li><span class="y">${s.d}</span><div><b>${s.t}</b><p>${s.x}</p>${s.g?`<p class="rl-g"><b>What we gained:</b> ${s.g}</p>`:''}</div></li>`).join('')}</ol>
   <div class="d-nav"><button class="btn" id="rlPlay" type="button">${r.ended?'Play again':'Continue the journey'} →</button><button class="btn ghost" id="rlListen" type="button">🔊 Listen</button></div>`;
  $('#drawer').classList.add('wide');$('#layer').hidden=false;document.body.style.overflow='hidden';$('#drawer').scrollTop=0;$('#dClose').focus();SFX.open();
  $('#rlPlay').addEventListener('click',()=>{closeStory();openGame();startJourney(r.id)});
  $('#rlListen').addEventListener('click',()=>VO.seq([`Your journey with ${m.name}.`,...r.stops.map(s=>`${s.d}. ${s.t}. ${s.x}`)],null,null,true));
}

/* ============ HOW IT WORKS (device descriptions) ============ */
const HOW={
 surveyor3:['Surveyor came down on three legs. A radar measured its height and speed, a big solid rocket did most of the braking and then fell away, and three small throttled engines slowed it for touchdown.','A TV camera looked into a tilting mirror to see all around. Surveyor 3 also had a scoop on an extendable arm to dig and test how strong the soil was. A solar panel charged its battery, and the two-week lunar night was cold enough to end its life.'],
 retro:['Each array is a panel of glass corner-cube prisms. A corner cube sends light straight back the way it came, whatever the angle, so the panel needs no power, wires or aiming.','Observatories fire very short laser pulses at it and time the echo. A round trip takes about 2.5 seconds, and only a few particles of light from each pulse make it back, so telescopes count them one by one. Apollo 11 and 14 left about 100 reflectors each, and Apollo 15 about 300.'],
 lrv:['The rover folded flat into a bay on the side of the lunar module, and astronauts unfolded it by pulling on cords. It weighed about 210 kilograms on Earth.','Each of its four wire-mesh wheels had its own electric motor, powered by two 36-volt batteries that could not be recharged. One T-shaped hand controller steered, accelerated and braked. A gyroscope and wheel counters always showed the way back to the lander, and drives were kept short enough for the crew to walk back if the rover broke down.'],
 sojourner:['Sojourner weighed about 10.6 kilograms and rolled on six wheels with rocker-bogie suspension, at about 1 centimetre per second.','A solar panel on top powered it, with non-rechargeable batteries as backup. It had no radio link to Earth: it talked to the Pathfinder lander, which relayed everything home. An instrument on its back measured the chemical elements in rocks.'],
 spirit:['Each twin rover was about the size of a golf cart, with six wheels, a mast of cameras and an arm carrying a rock-grinding tool, a microscope and two spectrometers.','Solar panels charged lithium-ion batteries, and tiny radioactive heaters kept the electronics warm through freezing Martian nights. The rovers talked to Earth directly or through orbiting spacecraft.'],
 opportunity:['Each twin rover was about the size of a golf cart, with six wheels, a mast of cameras and an arm carrying a rock-grinding tool, a microscope and two spectrometers.','Solar panels charged lithium-ion batteries. Gusts of wind sometimes blew the dust off Opportunity\'s panels, giving it fresh power and helping it survive for almost 15 years.'],
 insight:['InSight could not move. Its robotic arm lifted a seismometer off the deck and set it on the ground, then covered it with a shield against wind and temperature changes, which would otherwise drown out the faint signals.','Seismic waves from a marsquake change as they pass through crust, mantle and core. From them scientists measured the thickness of the crust and found that Mars has a liquid core. Its heat probe, the "mole", was meant to hammer itself into the soil but never got enough grip.'],
 ingenuity:['Ingenuity weighed about 1.8 kilograms. Two counter-rotating rotors, each about 1.2 metres across, spun at about 2,400 rpm, much faster than a helicopter on Earth, because Mars\'s air is only about 1% as thick.','A solar panel on top charged six lithium-ion cells. Radio signals take minutes to reach Mars, so it flew itself, following a plan sent in advance and tracking the ground with a downward camera. It talked to Earth through Perseverance.'],
 curiosity:['Curiosity is about the size of a car and weighs about 900 kilograms. A generator fuelled by plutonium gives it steady electricity day and night, in any season.','A laser on its mast vaporises tiny spots on rocks to read what they are made of. Its arm drills powder from inside rocks and drops it into two onboard labs that identify minerals and organic molecules. It landed using a rocket-powered "sky crane" that lowered it on cables.'],
 perseverance:['Perseverance weighs about 1,025 kilograms and runs on the same kind of plutonium generator as Curiosity. Its arm carries a coring drill, and it seals rock cores in tubes to leave on the surface for a possible future return to Earth.','Its parachute, about 21.5 metres wide, carried a hidden coded message. It used a camera-based navigation system to pick a safe landing spot by itself. It also carried MOXIE, which made oxygen from carbon dioxide in the Martian air.'],
 voyager1:['Voyager 1 points a 3.7-metre dish antenna at Earth. Three generators fuelled by plutonium make its electricity, and their output drops by about 4 watts every year.','Its cameras were switched off after the Pale Blue Dot photo in 1990 to save power. A few instruments still measure particles and magnetic fields in interstellar space. A gold-plated record on its side carries sounds and pictures of Earth.']
};

/* ============ 3D MACHINE MODELS ============
   Each builder returns {root, steps:[{t,d}], ground, update(step, p, time, dt) -> HUD text, still:[step,p], view:{yaw,pitch}}.
   MODEL HOOK: to swap in a real model later, load a glTF into `root` and keep the steps. */
const V3=(x,y,z)=>new THREE.Vector3(x,y,z);
function mats(){
  const s=(c,r=.6,m=.1)=>new THREE.MeshStandardMaterial({color:c,roughness:r,metalness:m});
  const cv=document.createElement('canvas');cv.width=cv.height=128;const x=cv.getContext('2d');x.fillStyle='#17245a';x.fillRect(0,0,128,128);
  x.strokeStyle='#5c76d6';x.lineWidth=2;for(let i=0;i<=128;i+=16){x.beginPath();x.moveTo(i,0);x.lineTo(i,128);x.stroke();x.beginPath();x.moveTo(0,i);x.lineTo(128,i);x.stroke()}
  const st=new THREE.CanvasTexture(cv);st.wrapS=st.wrapT=THREE.RepeatWrapping;st.repeat.set(3,3);
  const basic=(c,o=1)=>new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:o,depthWrite:false});
  return {white:s(0xe7e5df,.5,.05),offw:s(0xcfcbc1,.6,.1),grey:s(0x8f949e,.5,.25),dark:s(0x3a3d45,.6,.2),black:s(0x141519,.8,.1),
    gold:s(0xe0b048,.42,.35),alu:s(0xc9cdd5,.38,.32),copper:s(0xc07a3e,.45,.35),
    panel:new THREE.MeshStandardMaterial({map:st,roughness:.35,metalness:.25,emissive:0x3355ff,emissiveIntensity:0,side:THREE.DoubleSide}),
    rtg:new THREE.MeshStandardMaterial({color:0x34373f,roughness:.5,metalness:.5,emissive:0xff5a1f,emissiveIntensity:0}),
    laser:basic(0xff3b2f,.9),green:basic(0x5dff8a,.9),wave:basic(0x8fd3ff,.7),flame:basic(0xffa040,.85),spark:basic(0xffffff,1),dust:basic(0xc9a27a,.5),
    rock:s(0x6e6a64,.95,0),rockM:s(0x7a4630,.95,0)};
}
const BX=(w,h,d,m)=>new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);
const CY=(rt,rb,h,m,s=24,open=false,ts=0,tl=Math.PI*2)=>new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,s,1,open,ts,tl),m);
const SP=(r,m,a=24,b=16)=>new THREE.Mesh(new THREE.SphereGeometry(r,a,b),m);
const GR=(...k)=>{const g=new THREE.Group();k.forEach(o=>o&&g.add(o));return g};
const AT=(o,x,y,z)=>{o.position.set(x,y,z);return o};
const ROT=(o,x,y,z)=>{o.rotation.set(x,y,z);return o};
const UP=new THREE.Vector3(0,1,0);
function rod(a,b,t,m,s=8){const A=V3(...a),B=V3(...b),d=B.clone().sub(A),o=CY(t,t,d.length(),m,s);o.position.copy(A).addScaledVector(d,.5);o.quaternion.setFromUnitVectors(UP,d.normalize());return o}
function aim(o,A,B){const d=B.clone().sub(A),L=Math.max(.0001,d.length());o.position.copy(A).addScaledVector(d,.5);o.quaternion.setFromUnitVectors(UP,d.clone().normalize());o.scale.set(1,L,1)}
function beam(m,t=.012){return CY(t,t,1,m,6)}
function wheel(r,w,m,hub,n=12){const g=GR(),t=CY(r,r,w,m,24);t.rotation.x=Math.PI/2;g.add(t);
  for(let i=0;i<n;i++){const a=i/n*Math.PI*2,c=BX(r*.17,r*.07,w*1.04,hub);c.position.set(Math.cos(a)*r,Math.sin(a)*r,0);c.rotation.z=a;g.add(c)}
  const h=CY(r*.42,r*.42,w*1.12,hub,14);h.rotation.x=Math.PI/2;g.add(h);return g}
function dish(r,depth,m){const pts=[];for(let i=0;i<=14;i++){const x=r*i/14;pts.push(new THREE.Vector2(x,depth*(x/r)**2))}const mm=m.clone();mm.side=THREE.DoubleSide;return new THREE.Mesh(new THREE.LatheGeometry(pts,40),mm)}
function rings(n,m,r=.3){const g=GR();for(let i=0;i<n;i++){const k=new THREE.Mesh(new THREE.TorusGeometry(r,.012,6,48),(m.wave||m).clone());g.add(k)}return g}
/* waves travelling from A along unit direction dir */
function runWaves(g,A,dir,time,len,on,speed=.45){g.children.forEach((k,i)=>{const f=((time*speed+i/g.children.length)%1);k.visible=on;k.position.copy(A).addScaledVector(dir,f*len);k.quaternion.setFromUnitVectors(V3(0,0,1),dir);k.scale.setScalar(.6+f*1.6);k.material.opacity=on?(1-f)*.8:0})}
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const lerp=(a,b,t)=>a+(b-a)*t;
const XT=(...o)=>o.forEach(k=>k.userData.extra=1);
const seg=(p,a,b)=>Math.max(0,Math.min(1,(p-a)/(b-a)));
function drive(ctx,dt,v){if(ctx.rocks)ctx.rocks.children.forEach(r=>{r.position.x-=v*dt;if(r.position.x<-8)r.position.x+=16});if(ctx.gmap)ctx.gmap.offset.x+=v*dt/8}
function setOn(o,on){o.visible=on}

/* --- shared rover (Curiosity / Perseverance / Spirit / Opportunity / Sojourner) --- */
function rover(m,o){
  const root=GR(),body=GR();root.add(body);const {L,W,H,Y,wr,ww}=o;
  body.add(AT(BX(L,H,W,o.hull||m.white),0,Y,0));
  if(o.deck)body.add(AT(BX(L*1.03,.05,W*1.05,m.grey),0,Y+H/2+.025,0));
  const zs=W/2+ww*.9,xs=[L*.47,0,-L*.47],wheels=[];
  [-1,1].forEach(sg=>{const z=sg*zs;
    xs.forEach(x=>{const w=wheel(wr,ww,m.alu,m.dark);w.position.set(x,wr,z);root.add(w);wheels.push(w)});
    const rk=[L*.08,Y-H*.15,z],bg=[-L*.24,wr+(Y-H*.15-wr)*.55,z],t=Math.max(.018,wr*.16);
    body.add(rod([xs[0],wr,z],rk,t,m.alu),rod(rk,bg,t,m.alu),rod([0,wr,z],bg,t,m.alu),rod([xs[2],wr,z],bg,t,m.alu),rod(rk,[L*.08,Y-H*.15,sg*W/2],t,m.alu))});
  const mx=o.mastX??L*.33,mz=o.mastZ??W*.3,mh=o.mastH,top=Y+H/2;
  body.add(AT(CY(o.mastR,o.mastR,mh,m.white,10),mx,top+mh/2,mz));
  const head=GR();head.position.set(mx,top+mh,mz);body.add(head);
  const hs=o.headS;head.add(AT(BX(hs*1.1,hs*.85,hs*2,m.white),0,0,0));
  [-.45,.45].forEach(z=>{const e=CY(hs*.18,hs*.18,hs*.3,m.black,12);e.rotation.z=Math.PI/2;head.add(AT(e,hs*.6,0,z*hs))});
  const eye=CY(hs*.28,hs*.28,hs*.25,m.black,16);eye.rotation.z=Math.PI/2;head.add(AT(eye,hs*.62,hs*.12,0));
  // arm: shoulder -> elbow -> wrist with turret
  const arm=GR();arm.position.set(L/2+.02,Y+(o.armY||0),o.armZ??-W*.25);body.add(arm);
  const a1=o.a1,a2=o.a2,t=o.armT;
  const sh=GR();arm.add(sh);sh.add(AT(BX(a1,t,t,m.white),a1/2,0,0));
  const el=GR();el.position.x=a1;sh.add(el);el.add(AT(BX(a2,t*.9,t*.9,m.white),a2/2,0,0));
  const wr2=GR();wr2.position.x=a2;el.add(wr2);
  const tur=AT(BX(o.turS,o.turS*1.1,o.turS,m.grey),0,-o.turS*.55,0);wr2.add(tur);
  const drill=AT(CY(o.turS*.1,o.turS*.1,o.turS*.9,m.alu,8),0,-o.turS*1.4,0);wr2.add(drill);
  const tip=new THREE.Object3D();tip.position.y=-o.turS*1.85;wr2.add(tip);
  return {root,body,wheels,head,sh,el,wr:wr2,drill,tip,eye};
}
function armPose(R,pose){R.sh.rotation.z=pose[0];R.el.rotation.z=pose[1];R.wr.rotation.z=pose[2];if(pose[3]!=null)R.sh.rotation.y=pose[3]}
const lerpPose=(a,b,t)=>a.map((v,i)=>lerp(v,b[i],t));
function rockAt(m,x,z,r,mars=true){const k=new THREE.Mesh(new THREE.DodecahedronGeometry(r,1),mars?m.rockM:m.rock);k.scale.set(1.2,.7,1);k.position.set(x,r*.45,z);return k}
function sparkMesh(m,s=.06){return SP(s,m.spark.clone(),10,8)}

const MODELS={
curiosity(m,ctx){
  const R=rover(m,{L:2,W:1.3,H:.55,Y:.95,wr:.26,ww:.22,mastH:1.05,mastR:.05,headS:.26,a1:.75,a2:.7,armT:.08,turS:.24,armZ:-.33});
  const {root}=R;
  const rtg=GR();const core=CY(.2,.2,.62,m.rtg,16);rtg.add(core);for(let i=0;i<8;i++)rtg.add(ROT(BX(.5,.56,.02,m.rtg),0,i*Math.PI/8,0));
  rtg.position.set(-1.26,1.25,0);rtg.rotation.z=-1.05;R.body.add(rtg);
  R.body.add(AT(BX(.3,.12,.5,m.gold),.62,1.29,-.2));
  const rock=rockAt(m,2.3,-.33,.34);root.add(rock);const STOW=[.55,-2.55,1.9,0],REACH=[-.32,-.55,.87,0];armPose(R,STOW);
  const zap=beam(m.laser,.016);root.add(zap);const sp=sparkMesh(m,.09);root.add(sp);XT(rock,zap,sp);
  const dustP=GR();for(let i=0;i<14;i++)dustP.add(SP(.025,m.dust.clone(),6,4));root.add(dustP);XT(dustP);
  const A=new THREE.Vector3(),B=new THREE.Vector3();
  return {root,wheels:R.wheels,ground:'mars',still:[1,.5],view:{yaw:.75,pitch:.28},
    steps:[{t:'Nuclear power, day and night',d:'A plutonium power source (MMRTG) on the back turns heat into electricity, so Curiosity does not depend on sunlight or clean solar panels.'},
      {t:'Six wheels, rocker-bogie suspension',d:'Linked levers keep all six wheels on the ground, so the rover can roll over rocks as tall as its wheels. It drives slowly and carefully, a few centimetres per second.'},
      {t:'Zap a rock with a laser',d:'ChemCam on the mast fires a laser at a rock up to about 7 metres away. A telescope reads the colour of the tiny spark to tell what the rock is made of.'},
      {t:'Drill, then test inside the rover',d:'The arm drills powder from inside a rock and drops it into two onboard labs, CheMin and SAM, which identify minerals and organic molecules.'}],
    update(i,p,t,dt){
      core.material.emissiveIntensity=i===0?.6+.4*Math.sin(t*5):.12;
      R.wheels.forEach(w=>{if(i===1)w.rotation.z-=dt*1.4});if(i===1)drive(ctx,dt,.35);
      R.body.position.y=i===1?Math.sin(t*7)*.012:0;
      R.head.rotation.y=i===2?lerp(0,.12,ease(seg(p,0,.2))):i===1?Math.sin(t*.8)*.4:0;R.head.rotation.z=i===2?-.28*ease(seg(p,0,.2)):0;
      const z=i===2&&p>.25&&p<.85&&Math.sin(t*40)>-.2;zap.visible=sp.visible=z;
      if(z){R.eye.getWorldPosition(A);B.set(2.15,.42,-.33);aim(zap,A,B);sp.position.copy(B);sp.scale.setScalar(.6+Math.random()*1.2)}
      const ar=i===3?ease(seg(p,0,.3))*(1-ease(seg(p,.8,1))):0;armPose(R,lerpPose(STOW,REACH,ar));
      R.drill.rotation.y+=i===3&&p>.3&&p<.6?dt*30:0;R.drill.position.x=i===3&&p>.3&&p<.6?Math.sin(t*90)*.006:0;
      dustP.children.forEach((d,k)=>{const on=i===3&&p>.6&&p<.85,f=((t*1.6+k/14)%1);d.visible=on;d.position.set(.62+Math.sin(k)*.05,1.55-f*.3,-.2+Math.cos(k*2)*.08)});
      return i===2&&p>.25?'Laser spark at 7 m · reading its light':i===0?'Electricity from heat · about 110 W at landing':'';
    }};
},
perseverance(m,ctx){
  const R=rover(m,{L:2.05,W:1.35,H:.55,Y:.95,wr:.27,ww:.24,mastH:1.08,mastR:.05,headS:.27,a1:.78,a2:.72,armT:.085,turS:.3,armZ:-.33,hull:m.offw});
  const {root}=R;
  const rtg=GR();const core=CY(.2,.2,.62,m.rtg,16);rtg.add(core);for(let i=0;i<8;i++)rtg.add(ROT(BX(.5,.56,.02,m.rtg),0,i*Math.PI/8,0));
  rtg.position.set(-1.28,1.25,0);rtg.rotation.z=-1.05;R.body.add(rtg);
  const moxie=AT(BX(.28,.22,.26,m.gold),.82,1.08,.38);R.body.add(moxie);
  const rock=rockAt(m,2.36,-.33,.36);root.add(rock);const STOW=[.55,-2.55,1.9,0],REACH=[-.32,-.55,.87,0];armPose(R,STOW);
  const tube=AT(CY(.035,.035,.24,m.alu,10),0,0,0);root.add(tube);tube.visible=false;
  const bub=GR();for(let i=0;i<10;i++)bub.add(SP(.035,m.wave.clone(),8,6));root.add(bub);XT(rock,tube,bub);
  const T=new THREE.Vector3();
  return {root,wheels:R.wheels,ground:'mars',still:[2,.1],view:{yaw:.85,pitch:.26},
    steps:[{t:'Nuclear power',d:'Like Curiosity, Perseverance runs on an MMRTG: heat from decaying plutonium becomes electricity, day or night.'},
      {t:'Pick a target',d:'Mastcam-Z, a pair of zoom cameras on the mast, scans the landscape in 3D and colour so scientists can choose the best rocks.'},
      {t:'Drill a core and seal it',d:'The coring drill cuts a rock core about the size of a piece of chalk. It slides into a tube that is sealed inside the rover, waiting for a future mission.'},
      {t:'Make oxygen from air',d:'MOXIE, a box inside the body, pulled carbon dioxide from Martian air and split it to make oxygen, a test for future astronauts.'}],
    update(i,p,t,dt){
      core.material.emissiveIntensity=i===0?.6+.4*Math.sin(t*5):.12;
      R.head.rotation.y=i===1?Math.sin(p*Math.PI*2)*.7:0;
      const ar=i===2?ease(seg(p,0,.25))*(1-ease(seg(p,.55,.75))):0;armPose(R,lerpPose(STOW,REACH,ar));
      R.drill.rotation.y+=i===2&&p>.25&&p<.5?dt*30:0;
      tube.visible=i===2&&p>.5;
      if(tube.visible){R.tip.getWorldPosition(T);const f=ease(seg(p,.55,.95));tube.position.set(lerp(T.x,.2,f),lerp(T.y+.1,.7,f),lerp(T.z,0,f));tube.rotation.z=f*Math.PI/2}
      bub.children.forEach((b,k)=>{const f=((t*.5+k/10)%1);b.visible=i===3;b.position.set(.98+Math.sin(k*3+t)*.06,1.2+f*1.1,.38+Math.cos(k*2)*.06);b.material.opacity=(1-f)*.8;b.scale.setScalar(.6+f)});
      moxie.material.emissive&&(moxie.material.emissiveIntensity=0);
      return i===3?'CO₂ in → O₂ out · up to about 12 g of oxygen an hour':i===2&&p>.5?'Core sealed in a sample tube':'';
    }};
},
spirit(m,ctx){return MODELS._mer(m,ctx,true)},
opportunity(m,ctx){return MODELS._mer(m,ctx,false)},
_mer(m,ctx,stuck){
  const R=rover(m,{L:1.15,W:.85,H:.32,Y:.55,wr:.13,ww:.13,deck:false,mastX:.42,mastZ:0,mastH:.95,mastR:.03,headS:.14,a1:.38,a2:.36,armT:.045,turS:.12,armZ:-.1,armY:-.05,hull:m.gold});
  const {root}=R;
  const deck=GR();deck.position.y=.75;R.body.add(deck);
  deck.add(BX(1.25,.03,1.0,m.panel));
  [-1,1].forEach(s=>deck.add(AT(BX(.95,.025,.42,m.panel),-.05,0,s*.71)));deck.add(AT(BX(.38,.025,.9,m.panel),-.8,0,0));
  const rock=rockAt(m,1.2,-.1,.2);root.add(rock);const STOW=[.4,-2.6,1.9,0],REACH=[-.35,-.6,.95,0];armPose(R,STOW);
  const sp=sparkMesh(m,.035);root.add(sp);const fresh=AT(CY(.06,.06,.01,m.alu,20),1.09,.19,-.1);fresh.rotation.z=Math.PI/2;fresh.visible=false;root.add(fresh);
  const trail=AT(BX(1,.012,.07,new THREE.MeshStandardMaterial({color:0xf1e6d2,roughness:1})),0,.006,-.54);trail.visible=false;root.add(trail);XT(rock,sp,fresh,trail);
  const stuckW=R.wheels[0];
  return {root,wheels:R.wheels,ground:'mars',still:[1,.5],view:{yaw:.8,pitch:.32},
    steps:[{t:'Solar power',d:'Solar panels on the deck and fold-out wings charge batteries during the Martian day. Dust slowly covers them, so power drops over time.'},
      {t:'Look around',d:'Pancam, two colour cameras on the mast, takes panoramas so scientists on Earth can choose where to go next.'},
      {t:stuck?'Drive, even with a broken wheel':'Drive on six wheels',d:stuck?'Spirit\'s right front wheel stopped turning in 2006, so it drove backwards and dragged it. The stuck wheel dug up bright soil that turned out to be almost pure silica.':'Six wheels on rocker-bogie suspension, with a top speed of about 5 centimetres per second. Opportunity drove more than 45 kilometres in total.'},
      {t:'Grind and study a rock',d:'The Rock Abrasion Tool on the arm grinds off a rock\'s dusty skin. Spectrometers then read the fresh rock inside, looking for signs it formed in water.'}],
    update(i,p,t,dt){
      m.panel.emissiveIntensity=i===0?.25+.25*Math.sin(t*4):0;
      R.head.rotation.y=i===1?Math.sin(p*Math.PI*2)*.9:0;
      const dir=stuck?-1:1;
      R.wheels.forEach(w=>{if(i===2&&!(stuck&&w===stuckW))w.rotation.z-=dt*2.2*dir});if(i===2)drive(ctx,dt,.25*dir);
      trail.visible=stuck&&i===2;if(trail.visible){trail.scale.x=1+p*4;trail.position.x=.55+(1+p*4)/2*(1)}
      const ar=i===3?ease(seg(p,0,.3))*(1-ease(seg(p,.85,1))):0;armPose(R,lerpPose(STOW,REACH,ar));
      sp.visible=i===3&&p>.32&&p<.7&&Math.random()>.3;if(sp.visible){sp.position.set(1.1+Math.random()*.03,.2,-.1+(Math.random()-.5)*.08);sp.scale.setScalar(.5+Math.random())}
      fresh.visible=i===3&&p>.55;
      return i===3&&p>.32&&p<.7?'Grinding about 5 mm into the rock':'';
    }};
},
sojourner(m,ctx){
  const R=rover(m,{L:.6,W:.4,H:.15,Y:.24,wr:.065,ww:.07,mastX:.18,mastZ:.14,mastH:.18,mastR:.008,headS:.04,a1:.01,a2:.01,armT:.01,turS:.01,hull:m.gold});
  const {root}=R;R.sh.visible=false;
  R.body.add(AT(BX(.6,.015,.44,m.panel),0,.34,0));
  const apxs=GR();apxs.position.set(-.3,.2,0);R.body.add(apxs);apxs.add(AT(BX(.12,.02,.02,m.alu),-.06,0,0));const sensor=AT(CY(.03,.03,.05,m.grey,12),-.13,-.02,0);apxs.add(sensor);
  // Pathfinder lander behind, with petals and a dish
  const lander=GR();lander.position.set(-1.5,0,-1.3);root.add(lander);
  lander.add(AT(CY(.42,.42,.3,m.white,3),0,.2,0));
  for(let k=0;k<3;k++){const pt=GR();pt.rotation.y=k*Math.PI*2/3+Math.PI/3;const pm=AT(CY(.5,.5,.03,m.panel,3),.56,.04,0);pm.rotation.y=Math.PI;pt.add(pm);lander.add(pt)}
  const ld=AT(dish(.16,.06,m.white),0,.62,0);ld.rotation.z=-.6;lander.add(ld);lander.add(rod([0,.35,0],[0,.6,0],.015,m.alu));
  lander.add(AT(BX(.08,.08,.1,m.grey),0,.92,0));lander.add(rod([0,.35,0],[0,.88,0],.012,m.alu));
  const rock=rockAt(m,-.56,0,.12);root.add(rock);
  const w1=rings(3,m,.08),w2=rings(3,m,.14);root.add(w1,w2);XT(lander,rock,w1,w2);
  return {root,wheels:R.wheels,ground:'mars',fit:R.body,still:[1,.4],view:{yaw:1.05,pitch:.32,k:4.2},
    steps:[{t:'A small solar panel',d:'The flat panel on top powered the rover during the day. A battery that could not be recharged was the backup.'},
      {t:'Six wheels, very slowly',d:'Sojourner used the first rocker-bogie suspension on Mars and rolled at about 1 centimetre per second.'},
      {t:'Touch a rock',d:'The APXS instrument on the back was pressed against rocks to measure which chemical elements were inside them.'},
      {t:'Call home through the lander',d:'Sojourner had no radio link to Earth. It talked to the Pathfinder lander, and the lander relayed its messages home.'}],
    update(i,p,t,dt){
      m.panel.emissiveIntensity=i===0?.25+.25*Math.sin(t*4):0;
      R.wheels.forEach(w=>{if(i===1)w.rotation.z-=dt*1.6});if(i===1)drive(ctx,dt,.1);
      sensor.position.y=-.02-(i===2?.07*ease(seg(p,0,.3))*(1-ease(seg(p,.8,1))):0);apxs.rotation.z=i===2?.4*ease(seg(p,0,.3))*(1-ease(seg(p,.8,1))):0;
      const a=V3(.18,.42,.14),b=V3(-1.5,.6,-1.3),d=b.clone().sub(a);
      runWaves(w1,a,d.clone().normalize(),t,d.length(),i===3&&p<.6,.9);
      runWaves(w2,V3(-1.5,.75,-1.3),V3(0,1,0),t,2.5,i===3&&p>=.4,.6);
      return i===3?(p<.5?'Rover → lander':'Lander → Earth'):i===1?'About 1 cm per second':'';
    }};
},
ingenuity(m,ctx){
  const root=GR(),craft=GR();root.add(craft);
  craft.add(AT(BX(.2,.14,.16,m.gold),0,.4,0));craft.add(AT(BX(.04,.03,.04,m.black),.05,.32,0));
  [[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([a,b])=>craft.add(rod([a*.08,.36,b*.06],[a*.3,0,b*.3],.007,m.alu)));
  craft.add(AT(CY(.012,.012,.42,m.alu,8),0,.68,0));
  const mkRotor=y=>{const g=GR();g.position.y=y;[0,Math.PI].forEach(a=>{const bl=BX(.6,.006,.06,m.offw);bl.position.x=.3;const h=GR(bl);h.rotation.y=a;g.add(h)});g.add(CY(.03,.03,.02,m.dark,10));
    const blur=new THREE.Mesh(new THREE.CircleGeometry(.6,40),m.wave.clone());blur.material.color.set(0xd8dce4);blur.rotation.x=-Math.PI/2;blur.material.opacity=0;g.add(blur);g.userData.blur=blur;return g};
  const r1=mkRotor(.6),r2=mkRotor(.7);craft.add(r1,r2);
  const pan=AT(BX(.34,.008,.14,m.panel),0,.9,0);craft.add(pan);
  const dust=new THREE.Mesh(new THREE.TorusGeometry(.5,.08,8,40),m.dust.clone());dust.rotation.x=Math.PI/2;dust.position.y=.04;root.add(dust);XT(dust);
  const cone=new THREE.Mesh(new THREE.ConeGeometry(.4,.8,24,1,true),m.wave.clone());cone.material.opacity=.15;root.add(cone);cone.visible=false;XT(cone);
  let spd=0;
  return {root,rotors:[r1,r2],ground:'mars',fit:craft,still:[0,.95],view:{yaw:.6,pitch:.22,k:3.4},
    steps:[{t:'Two rotors, spinning opposite ways',d:'Two 1.2-metre rotors spin in opposite directions at about 2,400 rpm, far faster than a helicopter on Earth, because Mars\'s air is only about 1% as thick.'},
      {t:'Lift off',d:'With so little air, every gram counts. Ingenuity weighs only 1.8 kg, and it lifts straight up off the ground.'},
      {t:'Fly on its own and scout',d:'Radio signals take too long to reach Earth, so it flies itself, tracking the ground with a camera underneath, and photographs the route ahead for Perseverance.'},
      {t:'Land and recharge',d:'After each flight, the solar panel on top recharges its batteries, and heaters keep it warm through the freezing night.'}],
    update(i,p,t,dt){
      const target=i===0?ease(p):i===3?1-ease(seg(p,.4,1)):1;spd+=(target-spd)*Math.min(1,dt*3);
      r1.rotation.y+=dt*spd*45;r2.rotation.y-=dt*spd*45;[r1,r2].forEach(r=>r.userData.blur.material.opacity=spd*.28);
      let y=0,x=0,z=0,tilt=0,tz=0;
      if(i===1)y=.8*ease(seg(p,.15,1));
      if(i===2){y=.8;const a=p*Math.PI*2;x=Math.sin(a)*.8;z=(1-Math.cos(a))*.4;tilt=-Math.cos(a)*.18;tz=-Math.sin(a)*.12}
      if(i===3)y=.8*(1-ease(seg(p,0,.45)));
      craft.position.set(x,y,z);craft.rotation.set(tz,0,tilt);
      dust.visible=y<.6&&spd>.5;dust.scale.setScalar(1+((t*1.5)%1)*1.5);dust.material.opacity=dust.visible?.35*(1-((t*1.5)%1)):0;dust.position.x=x;dust.position.z=z;
      cone.visible=i===2;cone.position.set(x,y-.45,z);m.panel.emissiveIntensity=i===3&&p>.5?.3+.2*Math.sin(t*4):0;
      return i===0?`Rotor speed ${Math.round(spd*2400)} rpm`:i===2?'Flying itself · no joystick from Earth':'';
    }};
},
insight(m,ctx){
  const root=GR();
  root.add(AT(CY(.75,.75,.32,m.white,6),0,.95,0));root.add(AT(CY(.7,.7,.05,m.gold,6),0,1.13,0));
  for(let k=0;k<3;k++){const a=k*Math.PI*2/3+.5;root.add(rod([Math.cos(a)*.55,.85,Math.sin(a)*.55],[Math.cos(a)*.9,.05,Math.sin(a)*.9],.035,m.alu));root.add(AT(CY(.12,.14,.05,m.alu,16),Math.cos(a)*.9,.03,Math.sin(a)*.9))}
  const fans=[];
  [-1,1].forEach(s=>{const g=GR();g.position.set(0,1.02,s*1.85);root.add(g);root.add(rod([0,1.02,s*.7],[0,1.02,s*.95],.03,m.alu));
    const parts=[];for(let k=0;k<10;k++){const w=new THREE.Mesh(new THREE.CircleGeometry(1.08,4,0,Math.PI*2/10),m.panel);w.rotation.x=-Math.PI/2;const h=GR(w);g.add(h);parts.push(h)}
    g.rotation.y=s>0?Math.PI*1.5:Math.PI*.5;fans.push(parts)});
  const seis=GR();const dome=new THREE.Mesh(new THREE.SphereGeometry(.26,24,12,0,Math.PI*2,0,Math.PI/2),m.alu);seis.add(dome);seis.add(AT(CY(.3,.32,.05,m.dark,24),0,0,0));root.add(seis);
  const S0=V3(.35,1.15,.3),S1=V3(1.75,.02,.35);seis.position.copy(S0);
  const hp3=GR(AT(BX(.18,.32,.16,m.gold),0,.16,0));root.add(hp3);const H0=V3(.3,1.15,-.35),H1=V3(1.55,0,-.55);hp3.position.copy(H0);
  const mole=AT(CY(.025,.025,.4,m.alu,10),0,0,0);root.add(mole);mole.visible=false;
  const arm1=beam(m.white,.035),arm2=beam(m.white,.03);root.add(arm1,arm2);const base=V3(.62,1.15,0);
  const rip=GR();for(let k=0;k<4;k++){const r=new THREE.Mesh(new THREE.RingGeometry(.95,1,64),m.wave.clone());r.rotation.x=-Math.PI/2;rip.add(r)}root.add(rip);rip.position.set(S1.x,.02,S1.z);XT(rip);
  const E=new THREE.Vector3(),T=new THREE.Vector3();
  return {root,ground:'mars',still:[2,.2],view:{yaw:.55,pitch:.3},
    steps:[{t:'Open the solar panels',d:'Two round solar panels, each about 2.2 metres across, opened like paper fans after landing.'},
      {t:'Put the seismometer on the ground',d:'The robotic arm lifted the SEIS seismometer off the deck, set it down on the surface and covered it with a dome against wind and cold.'},
      {t:'Listen for marsquakes',d:'SEIS felt vibrations smaller than the width of an atom. Quake waves bouncing inside Mars revealed the thickness of the crust and the size of the core.'},
      {t:'Try to dig with the "mole"',d:'The HP3 heat probe tried to hammer itself 5 metres down to measure heat from inside Mars. The soil clumped together and it could not get much deeper than its own length.'}],
    update(i,p,t,dt){
      const open=i===0?ease(p):1;fans.forEach(parts=>parts.forEach((h,k)=>h.rotation.y=k*(Math.PI*2/10)*open));
      const f=i===1?ease(seg(p,.1,.9)):i===0?0:1;
      seis.position.lerpVectors(S0,S1,f);seis.position.y+=Math.sin(f*Math.PI)*.7;
      const h=i===3?ease(seg(p,0,.25)):0;hp3.position.lerpVectors(H0,H1,i===3?1:0);hp3.visible=true;if(i!==3)hp3.position.copy(H0);
      E.copy(i===3&&p<.25?hp3.position:seis.position);E.y+=.32;
      T.copy(base).lerp(E,.5);T.y+=.45;aim(arm1,base,T);aim(arm2,T,E);
      if(i===2){seis.position.x=S1.x+Math.sin(t*60)*.004*Math.sin(t*2.3)}
      rip.children.forEach((r,k)=>{const q=((t*.45+k/4)%1);r.visible=i===2;r.scale.setScalar(.3+q*2.2);r.material.opacity=(1-q)*.6});
      mole.visible=i===3;if(mole.visible){const d=seg(p,.25,1);mole.position.set(H1.x+.12,.18-d*.22-Math.abs(Math.sin(t*14))*.02,H1.z)}
      return i===2?'Over 1,313 marsquakes detected':i===3&&p>.25?'Hammering… stuck near the surface':'';
    }};
},
surveyor3(m,ctx){
  const root=GR(),craft=GR();root.add(craft);
  const legs=[],flames=[];
  for(let k=0;k<3;k++){const a=k*Math.PI*2/3;
    craft.add(rod([Math.cos(a)*.35,.75,Math.sin(a)*.35],[Math.cos(a)*1.1,.08,Math.sin(a)*1.1],.03,m.alu));
    craft.add(rod([Math.cos(a+1)*.35,.55,Math.sin(a+1)*.35],[Math.cos(a)*.95,.25,Math.sin(a)*.95],.02,m.alu));
    craft.add(AT(CY(.15,.17,.07,m.alu,16),Math.cos(a)*1.12,.04,Math.sin(a)*1.12));
    craft.add(rod([Math.cos(a)*.35,.75,Math.sin(a)*.35],[Math.cos(a+Math.PI*2/3)*.35,.75,Math.sin(a+Math.PI*2/3)*.35],.03,m.alu));
    const nz=AT(CY(.04,.075,.14,m.dark,12),Math.cos(a+.5)*.3,.6,Math.sin(a+.5)*.3);craft.add(nz);
    const fl=new THREE.Mesh(new THREE.ConeGeometry(.08,.6,12,1,true),m.flame.clone());fl.rotation.x=Math.PI;fl.position.set(nz.position.x,.25,nz.position.z);craft.add(fl);flames.push(fl)}
  craft.add(AT(CY(.03,.03,1.4,m.alu,8),0,1.45,0));
  const pan=AT(BX(.75,.02,.55,m.panel),0,2.12,0);pan.rotation.x=-.5;craft.add(pan);
  const ant=AT(BX(.5,.5,.02,m.grey),.05,1.8,-.32);ant.rotation.y=.3;craft.add(ant);
  craft.add(AT(BX(.38,.3,.3,m.gold),.35,.95,.25),AT(BX(.34,.26,.26,m.gold),-.35,.95,.22));
  const cam=GR();cam.position.set(.1,.98,-.42);craft.add(cam);cam.add(AT(CY(.07,.07,.36,m.white,14),0,0,0));const mir=GR(AT(BX(.12,.02,.1,m.alu),0,0,0));mir.position.y=.24;cam.add(mir);
  const smp=GR();smp.position.set(.45,.7,-.5);craft.add(smp);const boom=AT(BX(1,.035,.035,m.alu),.5,0,0);smp.add(boom);const scoop=AT(BX(.1,.08,.12,m.grey),1,-.04,0);smp.add(scoop);
  const trench=AT(BX(1,.03,.13,new THREE.MeshStandardMaterial({color:0x3c3c40,roughness:1})),0,.012,0);root.add(trench);trench.visible=false;XT(trench);
  const night=ctx.sun;
  return {root,ground:'moon',still:[1,.4],view:{yaw:.7,pitch:.25},
    steps:[{t:'Land on three small engines',d:'After its big retro-rocket burned out and fell away, three small vernier engines slowed the last part of the fall. On Surveyor 3 they did not switch off in time, so it bounced twice before settling.'},
      {t:'A camera that looks in a mirror',d:'The TV camera pointed up into a turning mirror, building up panoramas of the landing site one small picture at a time.'},
      {t:'Dig a trench',d:'The surface sampler, a scoop on an extendable arm, dug trenches and pressed on the ground, showing the soil was firm enough for astronauts to land on.'},
      {t:'Sleep through the lunar night',d:'A solar panel powered it. When the two-week lunar night came, its power ran out, and Surveyor 3 never woke up again.'}],
    update(i,p,t,dt){
      let y=0;if(i===0){const d=seg(p,0,.5);y=1.6*(1-ease(d));if(p>.5){const b=seg(p,.5,1);y=Math.abs(Math.sin(b*Math.PI*2))*.35*(1-b)}}
      craft.position.y=y;flames.forEach(f=>{f.visible=i===0&&p<.62;f.scale.set(1,.7+Math.random()*.5,1)});
      mir.rotation.y=i===1?t*2:0;
      const ex=i===2?ease(seg(p,0,.3)):0,dig=i===2?seg(p,.3,.9):0;smp.rotation.z=i===2?-.55*ex:0;boom.scale.x=1;smp.scale.x=.55+ex*.5+(dig>0?-.3*dig:0);
      trench.visible=i>=2&&!(i===0||i===1);trench.scale.x=i===2?Math.max(.01,dig*.45):.45;trench.position.set(.45+1.02-(i===2?dig:1)*.25,.012,-.5);
      if(night){night.intensity=i===3?lerp(1.25,.08,ease(seg(p,.1,.8))):1.25}
      m.panel.emissiveIntensity=i===3?.3*(1-seg(p,0,.6)):0;
      return i===0&&p>.5?'Bounce… bounce… landed':i===3?(p>.6?'Lunar night · power off':'Sun setting…'):'';
    }};
},
retro(m,ctx){
  const root=GR(),hw=GR();root.add(hw);
  hw.add(AT(BX(1.1,.05,.85,m.alu),0,.3,0));[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([a,b])=>hw.add(rod([a*.48,.3,b*.36],[a*.52,0,b*.4],.02,m.alu)));
  const pnl=GR();pnl.position.set(0,.36,.36);pnl.rotation.x=.55;hw.add(pnl);
  pnl.add(AT(BX(.92,.06,.82,m.alu),0,0,-.41));
  const cubes=[];const gm=new THREE.MeshStandardMaterial({color:0x9fc4f0,roughness:.15,metalness:.3,emissive:0x5dff8a,emissiveIntensity:0});
  for(let a=0;a<10;a++)for(let b=0;b<10;b++){const c=AT(CY(.035,.035,.03,gm,10),-.385+a*.0855,.04,-.06-b*.0775);pnl.add(c);cubes.push(c)}
  const earth=planetMesh('earth');earth.scale.setScalar(.55);earth.position.set(-1.6,2.3,-2.2);root.add(earth);
  const line=beam(m.green,.006);root.add(line);const pulse=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.45,8),m.green.clone());root.add(pulse);XT(earth,line,pulse);
  const C=new THREE.Vector3();
  return {root,ground:'moon',fit:hw,still:[0,.9],view:{yaw:.6,pitch:.42,k:3.6},
    steps:[{t:'A laser fires from Earth',d:'An observatory on Earth fires very short laser pulses at the spot on the Moon where the mirror panel sits.'},
      {t:'Corner cubes send it straight back',d:'Each of the 100 glass corner cubes reflects light back exactly the way it came, whatever angle it arrives at. No power is needed.'},
      {t:'Time the echo',d:'The round trip takes about 2.5 seconds. Half that time multiplied by the speed of light gives the distance to the Moon, accurate to millimetres.'},
      {t:'The Moon is drifting away',d:'Over five decades, the echoes show the Moon moving away from Earth by about 3.8 centimetres every year.'}],
    update(i,p,t,dt){
      pnl.localToWorld(C.set(0,.05,-.41));const E=earth.position;
      line.visible=i<=2;aim(line,E,C);line.material.opacity=.25;
      let q=null;if(i===0)q=p;else if(i===1)q=1+p;else if(i===2)q=((t*.45)%2);
      pulse.visible=q!==null;if(q!==null){const f=q<1?q:2-q,P=E.clone().lerp(C,f);pulse.position.copy(P);pulse.quaternion.setFromUnitVectors(UP,C.clone().sub(E).normalize())}
      gm.emissiveIntensity=(i===1&&p<.3)||(i===2&&Math.abs(((t*.45)%2)-1)<.08)?1:0;
      earth.rotation.y+=dt*.2;
      if(i===2)return `Round trip: ${(Math.min(1,p*1.2)*2.51).toFixed(2)} s → about 384,400 km`;
      if(i===3){const y=Math.round(lerp(1969,2026,ease(seg(p,0,.8))));return `${y} · Moon about ${((y-1969)*3.8/100).toFixed(1)} m farther away than in 1969`}
      return '';
    }};
},
lrv(m,ctx){
  const root=GR();const Y=.55;
  const mid=AT(BX(1,.07,1.25,m.alu),0,Y,0);root.add(mid);
  const secs=[];const steer=[];
  [-1,1].forEach(s=>{const g=GR();g.position.set(s*.5,Y,0);root.add(g);secs.push(g);g.add(AT(BX(1.05,.06,1.15,m.alu),s*.52,0,0));
    [-1,1].forEach(zs=>{const st=GR();st.position.set(s*.68,-.14,zs*.88);g.add(st);steer.push({st,s});
      const wm=new THREE.MeshStandardMaterial({color:0xc4c8cf,roughness:.5,metalness:.2,wireframe:true});
      const w=wheel(.41,.23,wm,m.dark,18);st.add(w);st.userData.w=w;
      const fd=CY(.46,.46,.27,m.grey,18,true,0,Math.PI);fd.rotation.x=Math.PI/2;fd.rotation.z=0;st.add(AT(fd,0,0,0));fd.rotation.y=0;fd.rotation.set(Math.PI/2,0,Math.PI/2*0);})});
  [-.3,.3].forEach(z=>{root.add(AT(BX(.42,.05,.42,m.grey),-.15,Y+.12,z));root.add(AT(BX(.05,.42,.42,m.grey),-.38,Y+.35,z))});
  root.add(rod([.18,Y+.04,0],[.3,Y+.55,0],.02,m.alu));root.add(AT(BX(.18,.06,.3,m.dark),.32,Y+.58,0));
  const mast=rod([1.05,Y,-.1],[1.12,Y+1.05,-.1],.02,m.alu);secs[1].add(mast);mast.position.x-=.5;mast.position.y-=Y;
  const hga=dish(.42,.12,m.white);hga.position.set(.62,1.08,-.1);hga.rotation.z=-.5;secs[1].add(hga);
  const tv=GR(AT(BX(.18,.14,.12,m.white),0,0,0));tv.position.set(.75,.55,.32);secs[1].add(tv);secs[1].add(rod([.75,0,.32],[.75,.48,.32],.015,m.alu));
  const wv=rings(3,m,.25);root.add(wv);XT(wv);const H=new THREE.Vector3();
  return {root,wheels:steer.map(o=>o.st.userData.w),ground:'moon',still:[1,.3],view:{yaw:.65,pitch:.3},
    steps:[{t:'Unfold from the lander',d:'The rover rode to the Moon folded flat against the side of the lunar module. Astronauts pulled tapes and the front and back sections swung down and locked.'},
      {t:'A motor in every wheel',d:'Each wire-mesh wheel had its own small electric motor, powered by two batteries. Top speed was about 13 km/h.'},
      {t:'Steer at both ends',d:'Front and rear wheels both steered, so it could turn in a tight circle. The astronauts drove with a T-shaped hand controller between the seats.'},
      {t:'Live TV to Earth',d:'A dish antenna sent colour TV straight to Earth, and controllers in Houston could turn the camera by remote control.'}],
    update(i,p,t,dt){
      const u=i===0?ease(seg(p,.1,.9)):1;secs[0].rotation.z=-(1-u)*1.45;secs[1].rotation.z=(1-u)*1.45;
      root.position.y=0;
      steer.forEach(({st,s})=>{st.rotation.y=i===2?Math.sin(t*1.6)*.45*(s>0?1:-1):0;if(i===1||i===2)st.userData.w.rotation.z-=dt*3});
      if(i===1)drive(ctx,dt,.8);if(i===2){root.rotation.y+=dt*.25}else root.rotation.y*=.96;
      tv.rotation.y=i===3?Math.sin(t*.9)*.8:0;
      hga.getWorldPosition(H);runWaves(wv,H,V3(-.3,1,-.2).normalize(),t,3,i===3,.6);
      return i===1?'Top speed ≈ 13 km/h':i===3?'Camera steered from Houston':'';
    }};
},
voyager1(m,ctx){
  const root=GR(),craft=GR();root.add(craft);
  craft.add(AT(CY(.75,.75,.42,m.dark,10),0,0,0));craft.add(AT(CY(.76,.76,.06,m.gold,10),0,.2,0));
  const d=dish(1.85,.55,m.white);d.position.y=.28;craft.add(d);craft.add(rod([0,.3,0],[0,1.2,0],.04,m.alu));craft.add(AT(CY(.07,.1,.14,m.alu,12),0,1.25,0));
  [0,2.1,4.2].forEach(a=>craft.add(rod([Math.cos(a)*1.7,.85,Math.sin(a)*1.7],[0,1.2,0],.012,m.alu)));
  const rec=AT(CY(.3,.3,.02,m.gold,40),.77,-.02,0);rec.rotation.z=Math.PI/2;craft.add(rec);
  craft.add(rod([-.7,-.1,0],[-2.3,-.25,0],.035,m.alu));const rtgs=[];
  [-1.75,-2.15,-2.55].forEach(x=>{const r=AT(CY(.16,.16,.36,m.rtg,12),x,-.27,0);r.rotation.z=Math.PI/2;craft.add(r);rtgs.push(r);for(let k=0;k<6;k++){const f=AT(BX(.34,.02,.44,m.rtg),x,-.27,0);f.rotation.x=k*Math.PI/6;craft.add(f)}});
  craft.add(rod([.7,-.1,0],[2.2,-.15,0],.035,m.alu));const plat=AT(BX(.35,.3,.3,m.white),2.3,-.15,0);craft.add(plat);craft.add(AT(BX(.28,.12,.12,m.dark),2.3,-.15,.22));
  const mag=rod([0,-.15,.7],[0,-.5,4.2],.012,m.alu);root.add(mag);
  const wv=rings(4,m,.6);root.add(wv);XT(wv);
  const sf=GR();const sg=new THREE.BoxGeometry(.02,.6,.02);for(let k=0;k<70;k++){const s=new THREE.Mesh(sg,new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.7}));s.position.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14-2);sf.add(s)}root.add(sf);XT(sf);
  return {root,ground:null,fit:craft,still:[0,.3],view:{yaw:.55,pitch:.12,k:2.3},
    steps:[{t:'Power from plutonium',d:'Three RTGs on a boom turn heat from decaying plutonium into electricity. The output drops about 4 watts every year, so instruments are switched off one by one.'},
      {t:'Phone home',d:'The 3.7-metre dish always points back at Earth. Its radio is only about as strong as a fridge light bulb, so giant dishes on Earth have to listen very carefully.'},
      {t:'The Golden Record',d:'A gold-plated copper record carries sounds and pictures of Earth, with instructions for playing it, in case anyone ever finds the spacecraft.'},
      {t:'Still cruising',d:'Voyager 1 travels about 17 kilometres every second. It left the Sun\'s bubble in 2012 and is now in interstellar space.'}],
    update(i,p,t,dt){
      rtgs.forEach(r=>r.material.emissiveIntensity=i===0?.5+.4*Math.sin(t*5):.08);
      runWaves(wv,V3(0,1.3,0),V3(0,1,0),t,5,i===1,.35);
      rec.material.emissive=rec.material.emissive||new THREE.Color();rec.material.emissive.set(0xffc040);rec.material.emissiveIntensity=i===2?.35+.25*Math.sin(t*3):0;
      sf.visible=i===3;sf.children.forEach(s=>{s.position.y+=dt*6;if(s.position.y>7)s.position.y-=14});
      craft.rotation.y+=dt*.05;
      return i===1?'One-way signal time ≈ 24 hours':i===3?'≈ 17 km every second':i===0?'Power falls ≈ 4 W per year':'';
    }};
}
};

/* ---------- stage: scene + lights + ground for a model ---------- */
function groundTex(kind){const S=512,cv=document.createElement('canvas');cv.width=cv.height=S;const c=cv.getContext('2d'),rand=rng(kind==='moon'?3:8);
  c.fillStyle=kind==='moon'?'#7c7a76':'#a5623c';c.fillRect(0,0,S,S);
  for(let k=0;k<2600;k++){const x=rand()*S,y=rand()*S,r=rand()*3+.4;c.fillStyle=kind==='moon'?`rgba(${rand()<.5?'40,40,44':'210,208,200'},.18)`:`rgba(${rand()<.5?'70,30,18':'220,160,110'},.2)`;c.beginPath();c.arc(x,y,r,0,7);c.fill()}
  for(let k=0;k<40;k++){const x=rand()*S,y=rand()*S,r=rand()*14+4;c.strokeStyle='rgba(0,0,0,.12)';c.lineWidth=2;c.beginPath();c.arc(x,y,r,0,7);c.stroke()}
  const t=new THREE.CanvasTexture(cv);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(10,10);return t}
function stage(id){
  const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(34,1.6,.05,200);
  const sun=new THREE.DirectionalLight(0xffffff,1.25);sun.position.set(4,7,3);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
  Object.assign(sun.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:30});sun.shadow.bias=-.0008;
  sc.add(sun,new THREE.HemisphereLight(0xdfe6ff,0x3a3028,.55),new THREE.AmbientLight(0xffffff,.12));
  const m=mats(),ctx={m,sun};const def=MODELS[id](m,ctx);
  sc.add(def.root);
  const box=new THREE.Box3().setFromObject(def.fit||def.root),sph=box.getBoundingSphere(new THREE.Sphere());
  if(def.ground){
    const tex=groundTex(def.ground);ctx.gmap=tex;
    const g=new THREE.Mesh(new THREE.CircleGeometry(40,72),new THREE.MeshStandardMaterial({map:tex,roughness:1}));g.rotation.x=-Math.PI/2;g.receiveShadow=true;sc.add(g);
    const rocks=GR(),rand=rng(4);for(let k=0;k<46;k++){const r=.04+Math.pow(rand(),3)*.28,x=rand()*16-8,z=rand()*16-8;if(Math.abs(z)<1.3&&Math.abs(x)<3)continue;rocks.add(rockAt(m,x,z,r,def.ground==='mars'))}
    rocks.children.forEach(r=>{r.castShadow=true});sc.add(rocks);ctx.rocks=rocks;
    sc.fog=new THREE.Fog(0x04060b,7,24);
  }
  const sg=new THREE.BufferGeometry(),n=1400,pos=new Float32Array(n*3),rand=rng(12);
  for(let k=0;k<n;k++){const u=rand()*2-1,a=rand()*Math.PI*2,s=Math.sqrt(1-u*u);pos.set([Math.cos(a)*s*80,Math.abs(u)*80*(def.ground?1:Math.sign(u)||1),Math.sin(a)*s*80],k*3)}
  sg.setAttribute('position',new THREE.BufferAttribute(pos,3));sc.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0xffffff,size:1.2,sizeAttenuation:false,fog:false,transparent:true,opacity:.8})));
  def.root.traverse(o=>{if(o.isMesh&&!(o.material&&o.material.transparent)){o.castShadow=true;o.receiveShadow=true}});
  const center=def.ground?new THREE.Vector3(sph.center.x,Math.max(.3,sph.center.y*.8),sph.center.z):sph.center.clone();
  return {sc,cam,def,ctx,center,radius:sph.radius};
}
function placeCam(st,yaw,pitch,dist){const c=st.center;st.cam.position.set(c.x+Math.sin(yaw)*Math.cos(pitch)*dist,c.y+Math.sin(pitch)*dist,c.z+Math.cos(yaw)*Math.cos(pitch)*dist);st.cam.lookAt(c)}

/* ---------- device images (rendered from the model) ---------- */
const IMG={};let snapR=null;
function deviceImage(id){
  if(IMG[id])return IMG[id];if(!hasGL()||!MODELS[id])return null;
  try{
    if(!snapR){const cv=document.createElement('canvas');snapR=new THREE.WebGLRenderer({canvas:cv,antialias:true,preserveDrawingBuffer:true});snapR.setPixelRatio(1);snapR.setSize(960,600,false);snapR.shadowMap.enabled=true;snapR.shadowMap.type=THREE.PCFSoftShadowMap;snapR.setClearColor(0x070a12,1)}
    const st=stage(id);st.cam.aspect=1.6;st.cam.updateProjectionMatrix();
    const [s,p]=st.def.still;st.def.update(s,p,1.3,0);
    placeCam(st,st.def.view.yaw,st.def.view.pitch,st.radius*(st.def.view.k||2.45));
    snapR.render(st.sc,st.cam);IMG[id]=snapR.domElement.toDataURL('image/jpeg',.86);dispose3(st.sc);
    if(!PHOTOS[id])$$(`img[data-thumb="${id}"]`).forEach(im=>{im.src=IMG[id];im.hidden=false});
    return IMG[id];
  }catch(e){console.error('img '+id+': '+e.message+' '+(e.stack||'').split('\n')[1]);return null}
}
const idle=f=>window.requestIdleCallback?requestIdleCallback(f,{timeout:600}):setTimeout(f,60);
function warmImages(){const ids=M.map(m=>m.id).filter(id=>!IMG[id]);let k=0;const next=()=>{if(k>=ids.length)return;deviceImage(ids[k++]);idle(next)};next()}

/* ---------- the viewer ---------- */
const VW={r:null,st:null,i:0,p:0,t:0,play:true,yaw:0,pitch:0,dist:5,raf:0,opener:null};
/* ---------- clickable engineering hotspots ---------- */
function hotFrac(n,i,N){const s=n.toLowerCase();let f;
  if(/wheel/.test(s))f=[.5,.08,.9];else if(/leg|footpad|suspension|rocker/.test(s))f=[.15,.12,.15];
  else if(/rotor|propeller/.test(s))f=[.5,1,.5];else if(/solar|panel/.test(s))f=[.5,.82,.5];
  else if(/antenna|dish|high-gain/.test(s))f=[.2,.98,.25];else if(/boom|magnetometer|plasma/.test(s))f=[.95,.6,.5];
  else if(/camera|pancam|mast|supercam|tv |laser|chemcam|navigation|gyro|hazcam/.test(s))f=[.5,.9,.7];
  else if(/arm|drill|scoop|sampler|abrasion|apxs|mössbauer|spectrometer|microscopic|pixl|sherloc|seis|heat probe|hp3|controller|steering/.test(s))f=[.5,.4,.95];
  else if(/rtg|mmrtg|battery|computer|tubes|storage|golden|sky-crane|motor|laboratory|sam|chemin|rimfax|meda|frame|prism|corner|beam/.test(s))f=[.35,.55,.2];
  else if(/retro|vernier|engine|radar/.test(s))f=[.5,.15,.5];else f=[.2+.6*(i/Math.max(1,N-1)),.5,.5];
  // spread same-type points a little so they do not stack
  f=[Math.min(.98,Math.max(.02,f[0]+((i*37)%7-3)*.035)),f[1],Math.min(.98,Math.max(.02,f[2]+((i*53)%5-2)*.04))];return f}
function hotBuild(st,id){
  const X=typeof EXH!=='undefined'&&EXH[id];if(!X)return [];
  const root=st.def.fit||st.def.root;root.updateMatrixWorld(true);
  const pts=[],v=new THREE.Vector3();
  root.traverse(o=>{if(!o.isMesh||!o.geometry||!o.geometry.attributes.position||o.visible===false)return;const mt=o.material;if(mt&&(mt.transparent||mt.opacity<.9))return;
    const pa=o.geometry.attributes.position,step=Math.max(1,Math.floor(pa.count/220));for(let i=0;i<pa.count;i+=step){v.fromBufferAttribute(pa,i).applyMatrix4(o.matrixWorld);const q=v.clone();q.mesh=o;q.idx=i;pts.push(q)}});
  if(!pts.length)return [];
  const box=new THREE.Box3().setFromPoints(pts),sz=box.getSize(new THREE.Vector3()),minGap=Math.max(sz.x,sz.y,sz.z)*.16,used=[];
  const spheres=[];root.traverse(o=>{if(o.isMesh&&o.geometry&&/Sphere/.test(o.geometry.type)&&(!o.material||!o.material.transparent)){o.geometry.computeBoundingSphere();const s=o.geometry.boundingSphere.clone().applyMatrix4(o.matrixWorld);spheres.push(s)}});spheres.sort((a,b)=>b.radius-a.radius);
  const ov=(typeof HOTPOS!=='undefined'&&HOTPOS[id])||{};
  return X.hot.map((h,i)=>{const f=ov[i]||hotFrac(h[0],i,X.hot.length);
    let tgt=new THREE.Vector3(box.min.x+sz.x*f[0],box.min.y+sz.y*f[1],box.min.z+sz.z*f[2]);if(/dome/i.test(h[0])&&spheres.length){const s=spheres[0];tgt=s.center.clone();tgt.y+=s.radius*.9}
    let best=null,bd=1e9;pts.forEach(p=>{if(used.some(u=>u.distanceTo(p)<minGap))return;const d=p.distanceToSquared(tgt);if(d<bd){bd=d;best=p}});
    best=best||tgt;used.push(best);return {n:h[0],d:h[1]||'',p:best.clone(),mesh:best.mesh,idx:best.idx}});
}
function hotShow(k){VW.hk=k;VO.stop();const H=VW.hot||[],pn=$('#mvPn');$$('#mvHots .hs').forEach((b,i)=>b.classList.toggle('on',i===k));
  if(k<0||!H[k]){pn.hidden=true;pn.innerHTML='';return}
  pn.hidden=false;pn.innerHTML=`<button type="button" class="pn-x" aria-label="Close this part">×</button><p class="pn-k"><i>${k+1}</i> Part ${k+1} of ${H.length}</p><h3>${esc(H[k].n)}</h3><p class="pn-d">${esc((H[k].d||'Details for this part are in the NASA sources.').replace(/^./,c=>c.toUpperCase()))}</p><button type="button" class="btn ghost pn-l" aria-pressed="false">🔊 Listen</button>`}
function openViewer(id){
  if(!hasGL()){alert('The 3D view needs WebGL, which is turned off in this browser.');return}
  const m=byId[id];VW.opener=document.activeElement;
  $('#mv').hidden=false;
  if(!VW.r){VW.r=new THREE.WebGLRenderer({canvas:$('#mvCv'),antialias:true});VW.r.setPixelRatio(Math.min(devicePixelRatio||1,2));VW.r.shadowMap.enabled=true;VW.r.shadowMap.type=THREE.PCFSoftShadowMap;VW.r.setClearColor(0x04060b,1);bindViewer()}
  if(VW.st)dispose3(VW.st.sc);
  VW.st=stage(id);VW.i=0;VW.p=0;VW.t=0;VW.play=true;$('#mvPlay').textContent='Pause';
  fitViewer();resetView();VW.hk=-1;VW.sh=0;VW.hot=hotBuild(VW.st,id);$('#mvHots').innerHTML=VW.hot.map((h,i)=>`<button type="button" class="hs" data-k="${i}" aria-label="${esc(h.n)}">${i+1}</button>`).join('');hotShow(-1);
  $('#mvTitle').textContent=m.name;$('#mvLede').textContent=m.type;$('#mvWhere').innerHTML='📍 Deployed on <b>'+(WHERE[m.world]||'')+'</b>';
  $('#mvSteps').innerHTML=VW.st.def.steps.map((s,k)=>`<li><button class="step" data-k="${k}"><span class="n">${k+1}</span><span><b></b><span class="d"></span></span><i class="pg"></i></button></li>`).join('');
  $$('#mvSteps .step').forEach((b,k)=>{b.querySelector('b').textContent=VW.st.def.steps[k].t;b.querySelector('.d').textContent=VW.st.def.steps[k].d});
  markStep();fitViewer();$('#mvClose').focus();
  cancelAnimationFrame(VW.raf);let last=performance.now();
  const loop=now=>{VW.raf=requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;if($('#mv').hidden)return;
    if(VW.play){VW.t+=dt;VW.p+=dt/5.5;if(VW.p>=1){VW.p=0;VW.i=(VW.i+1)%VW.st.def.steps.length;markStep()}}
    const hud=VW.st.def.update(VW.i,VW.p,VW.t,VW.play?dt:0)||'';if($('#mvHud').textContent!==hud)$('#mvHud').textContent=hud;
    const pg=$('#mvSteps .step[aria-current] .pg');if(pg)pg.style.width=(VW.p*100).toFixed(1)+'%';
    {const cw=$('#mvCv').clientWidth,ch=$('#mvCv').clientHeight,want=0;VW.sh=(VW.sh||0)+(want-(VW.sh||0))*.18;if(Math.abs(VW.sh)>.5)VW.st.cam.setViewOffset(cw,ch,VW.sh,0,cw,ch);else VW.st.cam.clearViewOffset()}
    placeCam(VW.st,VW.yaw,VW.pitch,VW.dist);placeCam(VW.st,VW.yaw,VW.pitch,VW.dist);VW.r.render(VW.st.sc,VW.st.cam);
    if(VW.hot){const cv=$('#mvCv'),w=cv.clientWidth,h=cv.clientHeight,hs=$$('#mvHots .hs');VW.st.cam.updateMatrixWorld();VW.hot.forEach((o,i)=>{if(o.mesh){o.p.fromBufferAttribute(o.mesh.geometry.attributes.position,o.idx).applyMatrix4(o.mesh.matrixWorld)}const v=o.p.clone().project(VW.st.cam),b=hs[i];if(!b)return;b.style.left=((v.x+1)/2*w)+'px';b.style.top=((1-v.y)/2*h)+'px';b.style.opacity=v.z<1?1:0})}};
  VW.raf=requestAnimationFrame(loop);
}
function resetView(){const v=VW.st.def.view;VW.yaw=v.yaw;VW.pitch=v.pitch;VW.dist=VW.st.radius*(v.k||2.45)*Math.max(1,1.25/Math.max(.6,VW.st.cam.aspect))}
function markStep(){$$('#mvSteps .step').forEach((b,k)=>{if(k===VW.i)b.setAttribute('aria-current','step');else{b.removeAttribute('aria-current');b.querySelector('.pg').style.width='0'}})}
function fitViewer(){if(!VW.r)return;const c=$('#mvCv'),w=c.clientWidth||600,h=c.clientHeight||400;VW.r.setSize(w,h,false);if(VW.st){VW.st.cam.aspect=w/h;VW.st.cam.updateProjectionMatrix()}}
function closeViewer(){VO.stop();$('#mv').hidden=true;cancelAnimationFrame(VW.raf);if(VW.st){dispose3(VW.st.sc);VW.st=null}if(VW.opener&&VW.opener.focus)VW.opener.focus()}
function bindViewer(){
  $('#mv').addEventListener('click',e=>{const b=e.target.closest('#mvHots .hs');if(b&&VW.hot){const k=+b.dataset.k;hotShow(VW.hk===k?-1:k);SFX.open&&SFX.open()}if(e.target.closest('.pn-x'))hotShow(-1);const L=e.target.closest('.pn-l');if(L&&VW.hot&&VW.hk>=0){if(L.getAttribute('aria-pressed')==='true'){VO.stop();L.setAttribute('aria-pressed','false');L.textContent='🔊 Listen';return}const H=VW.hot[VW.hk];L.setAttribute('aria-pressed','true');L.textContent='■ Stop';VO.line(H.n+'. '+(H.d||''),()=>{if(L.isConnected){L.setAttribute('aria-pressed','false');L.textContent='🔊 Listen'}},true)}});
  const cv=$('#mvCv');let px,py,down=false;const pts=new Map();let pinch=0;
  new ResizeObserver(fitViewer).observe(cv);
  cv.addEventListener('pointerdown',e=>{pts.set(e.pointerId,[e.clientX,e.clientY]);down=true;px=e.clientX;py=e.clientY;cv.setPointerCapture(e.pointerId)});
  cv.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,[e.clientX,e.clientY]);
    if(pts.size===2){const [a,b]=[...pts.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(pinch)VW.dist=Math.max(VW.st.radius*1.2,Math.min(VW.st.radius*6,VW.dist*pinch/d));pinch=d;return}
    const dx=e.clientX-px,dy=e.clientY-py;px=e.clientX;py=e.clientY;VW.yaw-=dx*.008;VW.pitch=Math.max(-.2,Math.min(1.35,VW.pitch+dy*.006))});
  const up=e=>{pts.delete(e.pointerId);if(pts.size<2)pinch=0;if(!pts.size)down=false};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  cv.addEventListener('wheel',e=>{e.preventDefault();if(VW.st)VW.dist=Math.max(VW.st.radius*1.2,Math.min(VW.st.radius*6,VW.dist*(1+e.deltaY*.0012)))},{passive:false});
  $('#mvSteps').addEventListener('click',e=>{const b=e.target.closest('.step');if(!b)return;VW.i=+b.dataset.k;VW.p=0;markStep();SFX.blip()});
  $('#mvPlay').addEventListener('click',()=>{VW.play=!VW.play;$('#mvPlay').textContent=VW.play?'Pause':'Play'});
  $('#mvReset').addEventListener('click',resetView);
  $('#mvClose').addEventListener('click',closeViewer);
}

/* ============ BOOT ============ */
function boot(){
  setInterval(()=>{const c=$('#cd');if(c)c.innerHTML=countdown()},60000);
  initSearch();SFX.sync();
  if($('#home'))initHero();
  if($('#discover'))initDiscover();
  if($('#timeline'))initTimeline();
  if($('#legacyList'))initLegacy();
  if($('#quizBox'))quiz();
  if($('#leftBehind'))initLeft();
  if($('#gm'))initGame();

  if($('#lastRun'))initHomeExtras();initMachines();initScrolly();storyWatch();initTour();if($('#grid')||true){}initDocPages();exhWire($('#dBody')||document.body);if(typeof initAstro==='function')initAstro();{const h=location.hash.match(/^#m-(\w+)$/);if(h&&byId[h[1]])setTimeout(()=>openStory(h[1]),400)}
  setTimeout(()=>idle(warmImages),800);
}

/* ============ EXPLORE GAME: journeys ============
   world: 'moon' | 'mars' | 'galaxy'. mech: how the device moves.
   Each stop: d = date shown, y = year for the HUD, t = title, x = what happened, m = more detail, w = where, b = what the mascot says afterwards. */
const MECH={
 heavy:{name:'Heavy climber',keys:'W/↑ drive · S/↓ reverse · A D/← → steer · Space: boost jump · rolls over small rocks'},
 boost:{name:'AutoNav sprint',keys:'W/↑ drive · S/↓ reverse · A D/← → steer · Space: long sprint jump'},
 drag:{name:'Rover',keys:'W/↑ drive · A D/← → steer · Space: boost jump'},
 sand:{name:'Marathon runner',keys:'W/↑ drive · A D/← → steer · Space: boost jump · avoid soft sand'},
 tiny:{name:'Tiny and slow',keys:'W/↑ drive · A D/← → steer · Space: little hop · fits between rocks'},
 buggy:{name:'Moon buggy',keys:'W/↑ accelerate · S/↓ brake · A D/← → steer · Space: jump · it slides'},
 hop:{name:'Rocket hop',keys:'A D/← → aim · hold Space, release to hop · W/↑ small hop'},
 dash:{name:'Speed of light',keys:'A D/← → aim · W/↑ or Space: dash'},
 fly:{name:'Helicopter',keys:'Space: take off / land · W A S D fly · land to recharge'},
 ping:{name:'Seismic listener',keys:'W/↑ crawl · A D/← → turn · Space: quake ping shows the way'},
 space:{name:'Spaceflight',keys:'W/↑ fly forward · S/↓ brake · A D/← → rotate · Space: thruster burst'}
};
const GJ={
 surveyor3:{world:'moon',mech:'hop',by:'Hughes Aircraft Company for NASA JPL',stops:[
  {d:'1966',y:1966,t:'Built in California',w:'Culver City, California',x:'Hughes Aircraft Company builds the Surveyor landers for NASA\'s Jet Propulsion Laboratory. Their job: prove that astronauts can land safely on the Moon.',m:'Nobody knew if the Moon\'s surface was solid rock or deep, fluffy dust. Seven Surveyors were launched to find out, and five of them landed safely.',b:'Seven scouts, five safe landings. We\'re one of the lucky ones! Hold Space and let go to hop.'},
  {d:'Apr 1967',y:1967,t:'Launch',w:'Cape Canaveral, Florida',x:'On 17 April, an Atlas-Centaur rocket lifts Surveyor 3 off from Cape Canaveral on a three-day trip to the Moon.',m:'The Centaur upper stage burned liquid hydrogen, the same fuel used by the giant Saturn V upper stages a few years later.',b:'Three days to the Moon. I packed snacks. Robot snacks.'},
  {d:'Apr 1967',y:1967,t:'Bounce, bounce, landed',w:'Ocean of Storms, Moon',x:'On 20 April it lands in the Ocean of Storms. Its small engines do not switch off in time, so it bounces twice before it settles.',m:'Bright, reflective rocks confused its landing radar, so the engines kept firing. Engineers on Earth sent a command to shut them off.',b:'Boing! Boing! That\'s why your hops bounce twice.'},
  {d:'Apr 1967',y:1967,t:'The first lunar trenches',w:'Ocean of Storms, Moon',x:'Its scoop digs and presses on the ground. The soil is firm enough to land on, which is great news for the Apollo planners.',m:'Below a thin layer of dust, the ground got firmer and slightly darker, like wet sand under dry sand at the beach.',b:'Firm ground! The astronauts will be happy.'},
  {d:'Apr–May 1967',y:1967,t:'Thousands of pictures',w:'Ocean of Storms, Moon',x:'The mirror camera sends home more than 6,000 photos and even watches the Earth pass in front of the Sun.',m:'From the Moon, that was an eclipse of the Sun by the Earth. Surveyor 3 photographed the glowing ring of Earth\'s atmosphere.',b:'An eclipse made by the Earth itself. Wow.'},
  {d:'May 1967',y:1967,t:'Lunar night',w:'Ocean of Storms, Moon',x:'The two-week lunar night arrives. The cold drains its power and Surveyor 3 never wakes up again.',m:'Nothing was brought back from the Surveyors. Like the others, Surveyor 3 simply went dead when its power ran out.',b:'It\'s getting cold… and I\'m feeling creaky.'},
  {d:'Nov 1969',y:1969,t:'Visitors',w:'Ocean of Storms, Moon',x:'On 20 November, Apollo 12 astronauts Pete Conrad and Alan Bean walk over and remove its camera and other parts.',m:'Apollo 12 came down about 180 metres away, a precision landing made on purpose. They brought home its camera, parts of its scoop and some tubing, so engineers could see what 31 months on the Moon had done to them.',b:'Two astronauts took our camera! At least we got visitors.'},
  {d:'Today',y:2026,t:'Still standing',w:'Ocean of Storms, Moon',x:'The rest of Surveyor 3 still stands where it landed, missing a few pieces, a short walk from the Apollo 12 lander.',m:'With no air or weather, Moon hardware lasts a long time, but sunlight, big temperature swings and tiny meteorites slowly wear it down.',b:''}]},
 retro:{world:'moon',mech:'dash',by:'Apollo science team, University of Maryland',stops:[
  {d:'1969',y:1969,t:'A mirror for the Moon',w:'University of Maryland, USA',x:'A science team led by Carroll Alley designs a panel of 100 glass corner cubes that reflect a laser straight back to Earth.',m:'A corner cube works like the reflector on a bicycle: light that goes in comes straight back out the way it came, even if it arrives at an angle.',b:'We\'re made of light now. Press W to dash at the speed of light!'},
  {d:'Jul 1969',y:1969,t:'Set down by Apollo 11',w:'Sea of Tranquility, Moon',x:'Neil Armstrong and Buzz Aldrin place the first reflector near their lander. It needs no power at all.',m:'It was one of the very first experiments ever set up on the Moon, during the first moonwalk.',b:'Placed by the first people on the Moon. No pressure!'},
  {d:'Aug 1969',y:1969,t:'First echo',w:'Lick Observatory, California',x:'On 1 August, Lick Observatory fires a laser at the Moon and catches light bouncing back from the mirrors.',m:'Out of billions of light particles in each pulse, only a handful find their way back to the telescope.',b:'Ping… and pong! The Moon answered.'},
  {d:'Feb 1971',y:1971,t:'A second array',w:'Fra Mauro, Moon',x:'Apollo 14 sets up another reflector at Fra Mauro, so scientists have two targets to compare.',m:'Measuring to several spots lets scientists see how the Moon wobbles as it orbits.',b:'Two mirrors are better than one.'},
  {d:'Jul 1971',y:1971,t:'The biggest one',w:'Hadley–Apennine, Moon',x:'Apollo 15 leaves the largest array, with 300 corner cubes, at Hadley–Apennine.',m:'With three times as many mirrors, it sends back the strongest echoes of all.',b:'300 mirrors. That\'s a lot of selfies.'},
  {d:'1970s–2000s',y:1995,t:'The Moon is leaving',w:'Observatories on Earth',x:'Decades of laser timing show the Moon moving away from Earth by about 3.8 centimetres every year.',m:'The same timing helped test Einstein\'s theory of gravity. Of all the equipment left on the Moon, these mirrors are the only things still being used.',b:'The Moon drifts away as fast as fingernails grow. I\'m getting dusty though…'},
  {d:'Today',y:2026,t:'Dusty, but still working',w:'Apollo 11, 14 and 15 sites',x:'Fine Moon dust has made the mirrors about ten times dimmer than when they were new. Observatories still bounce lasers off them.',m:'Decades of laser ranging also suggest the Moon has a liquid core. NASA has asked future missions to protect the Apollo sites, so the mirrors and footprints stay undisturbed.',b:''}]},
 lrv:{world:'moon',mech:'buggy',by:'Boeing, with General Motors',stops:[
  {d:'Oct 1969',y:1969,t:'Boeing gets the job',w:'Huntsville, Alabama',x:'NASA picks Boeing to build an electric car for the Moon. General Motors makes the wire-mesh wheels and their motors.',m:'Rubber tyres would have cracked in the cold, so the wheels were woven from zinc-coated piano wire.',b:'Wire wheels! Press W to drive and Space to jump. It slides, so steer early.'},
  {d:'1971',y:1971,t:'Folded like luggage',w:'Kennedy Space Center, Florida',x:'Each rover folds flat to fit on the side of a lunar module. Astronauts unfold it by pulling on tapes.',m:'It weighed only about 210 kilograms on Earth, but could carry more than twice its own weight. A gyroscope and wheel counters always showed the way back to the lander.',b:'Folded flat like a deck chair. Clever.'},
  {d:'Jul 1971',y:1971,t:'First drive on the Moon',w:'Hadley–Apennine, Moon',x:'On Apollo 15, Dave Scott and Jim Irwin drive the first rover along the edge of Hadley Rille.',m:'At first the front steering did not work, so Scott steered with the rear wheels only. Over three moonwalks they drove about 28 kilometres, much farther than earlier crews could walk.',b:'28 kilometres! My legs would be tired. If I had legs.'},
  {d:'Apr 1972',y:1972,t:'The Grand Prix',w:'Descartes Highlands, Moon',x:'On Apollo 16, John Young races the rover in circles while Charlie Duke films it, to test how it handles.',m:'The Apollo 16 crew drove about 27 kilometres. Charlie Duke also left a family photo on the Moon.',b:'Vroom! Let\'s see your Grand Prix skills.'},
  {d:'Dec 1972',y:1972,t:'Duct-tape repair',w:'Taurus–Littrow, Moon',x:'On Apollo 17, a fender breaks off. Gene Cernan and Harrison Schmitt fix it with maps, clamps and duct tape.',m:'Without the fender, the wheels sprayed dark, gritty dust over everything, including the astronauts.',b:'Duct tape fixes everything. Even on the Moon.'},
  {d:'Dec 1972',y:1972,t:'Speed record',w:'Taurus–Littrow, Moon',x:'Cernan reaches about 18 km/h downhill, the fastest anyone has driven on the Moon.',m:'Apollo 17\'s rover drove about 36 kilometres in total, the most of all three.',b:'18 km/h… my bolts are rattling. Something feels loose.'},
  {d:'Dec 1972',y:1972,t:'Last parking spot',w:'Taurus–Littrow, Moon',x:'Cernan parks the rover so its TV camera can film the lunar module lifting off. Nobody has driven it since.',m:'The rovers were parked at the end of the last moonwalk. Their batteries were never recharged.',b:''}]},
 sojourner:{world:'mars',mech:'tiny',speed:4.6,turn:1.9,hit:.55,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'1990s',y:1995,t:'Small and cheap',w:'Pasadena, California',x:'Engineers at JPL build a rover the size of a microwave oven, to test whether a robot can drive on Mars at all.',m:'It weighed about 10.6 kilograms and was part of NASA\'s "faster, better, cheaper" missions.',b:'Tiny but brave! You can squeeze between rocks. Space gives a little hop.'},
  {d:'Dec 1996',y:1996,t:'Launch',w:'Cape Canaveral, Florida',x:'On 4 December it leaves Earth, tucked inside the Mars Pathfinder lander.',m:'The trip to Mars took seven months.',b:'Seven months in a box. Are we there yet?'},
  {d:'Jul 1997',y:1997,t:'Airbag landing',w:'Ares Vallis, Mars',x:'On 4 July, Pathfinder hits Mars wrapped in airbags and bounces across the ground before rolling to a stop.',m:'It was the first time airbags were used to land on Mars. Spirit and Opportunity later used the same trick.',b:'Bouncy castle landing! Best Fourth of July ever.'},
  {d:'Jul 1997',y:1997,t:'First tracks on Mars',w:'Ares Vallis, Mars',x:'Sojourner rolls down a ramp onto the surface, the first rover ever to drive on another planet.',m:'It moved about 1 centimetre per second and never went more than about 12 metres from the lander.',b:'First wheel tracks on Mars. History!'},
  {d:'Jul 1997',y:1997,t:'Barnacle Bill and Yogi',w:'Ares Vallis, Mars',x:'It presses its instrument against rocks the team nicknamed Barnacle Bill and Yogi, to learn what they are made of.',m:'Some rocks looked like they had been rolled and rounded by an ancient flood.',b:'Hello, Yogi! Nice rock.'},
  {d:'Sep 1997',y:1997,t:'Last signal',w:'Ares Vallis, Mars',x:'On 27 September the lander sends its last data. Sojourner can only talk through the lander, so it loses its voice too.',m:'The lander\'s battery probably failed in the bitter cold of the Martian night.',b:'I can\'t hear the lander… my power is fading.'},
  {d:'Mar 1998',y:1998,t:'Mission over',w:'Ares Vallis, Mars',x:'NASA ends the mission. Sojourner was planned for one week and worked for about 83 days.',m:'Pathfinder and Sojourner still sit together in Ares Vallis.',b:''}]},
 spirit:{world:'mars',mech:'drag',speed:6.6,turn:1.6,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'2000–2003',y:2002,t:'Twin robot geologists',w:'Pasadena, California',x:'JPL builds two identical rovers, Spirit and Opportunity, to look for rocks that formed in water.',m:'Each rover was about the size of a golf cart and carried a rock grinder, cameras and spectrometers.',b:'We have a twin! Space is a boost jump. Ready?'},
  {d:'Jun 2003',y:2003,t:'Launch',w:'Cape Canaveral, Florida',x:'On 10 June, Spirit launches on a Delta II rocket.',m:'Its twin, Opportunity, followed four weeks later.',b:'Off we go! See you on Mars, twin.'},
  {d:'Jan 2004',y:2004,t:'Landing in Gusev Crater',w:'Gusev Crater, Mars',x:'On 4 January it bounces down on airbags inside Gusev Crater.',m:'Scientists picked Gusev because it looked like an ancient lake bed.',b:'Lake bed? I don\'t see any water…'},
  {d:'Jan 2004',y:2004,t:'A scary glitch',w:'Gusev Crater, Mars',x:'About two weeks later its memory gets overloaded and it starts rebooting over and over. Engineers fix it from Earth.',m:'Too many files had piled up in its flash memory. Clearing them brought Spirit back.',b:'Phew. Have you tried turning it off and on again?'},
  {d:'Aug 2005',y:2005,t:'Top of Husband Hill',w:'Columbia Hills, Mars',x:'Spirit climbs to the summit of Husband Hill and takes in the view.',m:'It was the first time a rover had climbed a mountain on another planet.',b:'What a view from up here!'},
  {d:'Mar 2006',y:2006,t:'A wheel stops',w:'Columbia Hills, Mars',x:'Its right front wheel stops turning. From now on it drives backwards, dragging the broken wheel.',m:'The team kept Spirit exploring by driving it backwards, dragging the stuck wheel behind it.',b:'Ouch, my wheel! We\'ll drive backwards. Feeling worn…'},
  {d:'May 2007',y:2007,t:'Lucky broken wheel',w:'Home Plate, Mars',x:'The dragging wheel scrapes up bright soil that is almost pure silica, a sign of ancient hot springs.',m:'On Earth, hot springs like that are full of microbes. It was one of Spirit\'s biggest discoveries.',b:'A broken wheel found treasure. Lucky!'},
  {d:'May 2009',y:2009,t:'Stuck in sand',w:'Troy, Mars',x:'Spirit breaks through a crust into soft sand and cannot get out.',m:'For months, engineers tested escape moves on a copy of Spirit in a sandbox on Earth.',b:'I\'m stuck… I\'m getting so tired…'},
  {d:'Mar 2010',y:2010,t:'Last message',w:'Troy, Mars',x:'Winter comes. With its panels tilted away from the Sun, Spirit sends its last message on 22 March.',m:'NASA kept listening for more than a year, then ended recovery attempts in May 2011.',b:''}]},
 opportunity:{world:'mars',mech:'sand',speed:8.6,turn:1.7,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'2000–2003',y:2002,t:'The second twin',w:'Pasadena, California',x:'JPL builds Opportunity alongside Spirit. It is planned to work for 90 Martian days and drive about one kilometre.',m:'Its nickname became "Oppy". Few people guessed it would keep going for almost 15 years.',b:'Hi, I\'m Oppy\'s co-pilot! Avoid the pale soft sand. Space to jump.'},
  {d:'Jul 2003',y:2003,t:'Launch',w:'Cape Canaveral, Florida',x:'On 7 July, Opportunity launches on a Delta II rocket.',m:'It launched at night, almost a month after Spirit.',b:'Night launch! So shiny.'},
  {d:'Jan 2004',y:2004,t:'Hole in one',w:'Meridiani Planum, Mars',x:'On 25 January it bounces across the plain and rolls right into a small crater, Eagle Crater.',m:'The crater walls showed layered bedrock right away, exactly what the team hoped to find.',b:'A hole in one! Golf on Mars.'},
  {d:'Mar 2004',y:2004,t:'Once soaked in water',w:'Eagle Crater, Mars',x:'NASA announces that the rocks here formed in water. Tiny iron-rich spheres get the nickname blueberries.',m:'The blueberries formed as water seeped through the rock long ago.',b:'Blueberries on Mars! Not the tasty kind.'},
  {d:'Apr 2005',y:2005,t:'Purgatory Dune',w:'Meridiani Planum, Mars',x:'It digs itself into a sand ripple. Drivers spend weeks wiggling it free, centimetre by centimetre.',m:'After this, the team drove much more carefully around sand ripples.',b:'That sand was sticky. I can feel grit in my gears.'},
  {d:'Aug 2011',y:2011,t:'Endeavour Crater',w:'Endeavour Crater, Mars',x:'After three years of driving it reaches the rim of Endeavour Crater, 22 kilometres across.',m:'There it found veins of gypsum, a mineral that forms from water flowing through cracks.',b:'Three years to get here. Phew.'},
  {d:'Mar 2015',y:2015,t:'A marathon on Mars',w:'Marathon Valley, Mars',x:'Its total distance passes 42.2 kilometres, the length of a marathon.',m:'The team celebrated by naming the next valley Marathon Valley.',b:'A marathon! My motors are aching though…'},
  {d:'Jun 2018',y:2018,t:'The dust storm',w:'Perseverance Valley, Mars',x:'A dust storm wraps the whole planet and blocks the sunlight. Opportunity sends its last signal on 10 June.',m:'Without sunlight its solar panels could not charge the batteries.',b:'It\'s so dark… my battery is almost empty…'},
  {d:'Feb 2019',y:2019,t:'Goodbye',w:'Perseverance Valley, Mars',x:'On 13 February, after more than 1,000 calls, NASA declares the mission over. It drove more than 45 kilometres.',m:'It worked for almost 15 years, about 60 times longer than planned. Gusts of wind cleaning dust off its solar panels helped it last so long.',b:''}]},
 insight:{world:'mars',mech:'ping',speed:3.4,turn:1.4,by:'Lockheed Martin, for NASA JPL',stops:[
  {d:'2010s',y:2015,t:'Built to listen',w:'Denver, Colorado',x:'Lockheed Martin builds the InSight lander in Colorado for NASA. Its seismometer comes from France.',m:'InSight was the first mission to study the deep inside of another planet.',b:'We can\'t see the way, but we can listen. Press Space to ping!'},
  {d:'May 2018',y:2018,t:'West Coast launch',w:'Vandenberg, California',x:'On 5 May it launches on an Atlas V, the first trip to another planet to leave from the US West Coast.',m:'Two tiny briefcase-sized satellites flew alongside it and relayed its landing news.',b:'Waving goodbye to California!'},
  {d:'Nov 2018',y:2018,t:'Landing',w:'Elysium Planitia, Mars',x:'On 26 November it lands on a flat, safe plain and opens its two round solar panels.',m:'Scientists joked that Elysium Planitia was the biggest parking lot on Mars.',b:'Flattest place ever. Great for listening.'},
  {d:'Dec 2018',y:2018,t:'Seismometer down',w:'Elysium Planitia, Mars',x:'On 19 December its robotic arm sets the seismometer on the ground.',m:'It was the first seismometer ever placed directly on the surface of Mars, then covered by a dome against wind.',b:'Shhh… we\'re listening.'},
  {d:'Apr 2019',y:2019,t:'The first marsquake',w:'Elysium Planitia, Mars',x:'On 6 April it feels a faint shake from inside the planet: the first marsquake ever detected.',m:'It was so faint that a person standing there would never have felt it.',b:'Did you feel that? A marsquake!'},
  {d:'Jan 2021',y:2021,t:'The mole gives up',w:'Elysium Planitia, Mars',x:'After almost two years of trying to hammer its heat probe into the soil, the team stops.',m:'The soil clumped together, so the probe kept bouncing instead of digging down.',b:'Bonk, bonk… it\'s not digging. My power is dropping.'},
  {d:'May 2022',y:2022,t:'The big one',w:'Elysium Planitia, Mars',x:'On 4 May it records a magnitude 5 marsquake, the biggest it ever felt.',m:'By now dust covered its solar panels and its power was running very low.',b:'The biggest quake! I\'m almost out of power…'},
  {d:'Dec 2022',y:2022,t:'Silence',w:'Elysium Planitia, Mars',x:'InSight sends its last message on 15 December. NASA ends the mission on 21 December.',m:'In four years it recorded more than 1,313 marsquakes, and helped show that Mars has a liquid core.',b:''}]},
 ingenuity:{world:'mars',mech:'fly',speed:11,turn:2,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'2010s',y:2018,t:'A test, not a science mission',w:'Pasadena, California',x:'A small team at JPL builds a 1.8-kilogram helicopter to prove that flight is possible in Mars\'s very thin air.',m:'Some of its parts were off-the-shelf, including a processor similar to ones used in smartphones.',b:'Press Space to take off! Land again to recharge the battery.'},
  {d:'Jul 2020',y:2020,t:'Launch',w:'Cape Canaveral, Florida',x:'On 30 July it launches, folded up and bolted under the belly of Perseverance.',m:'It rode to Mars covered by a shield to keep it safe.',b:'Hitching a ride under a rover. Cosy.'},
  {d:'Feb 2021',y:2021,t:'Arrival',w:'Jezero Crater, Mars',x:'On 18 February it lands in Jezero Crater, still attached to the rover.',m:'Weeks later, Perseverance gently dropped it onto the ground and drove away.',b:'Mars! Time to stretch my rotors.'},
  {d:'Apr 2021',y:2021,t:'First flight',w:'Wright Brothers Field, Mars',x:'On 19 April it lifts off, hovers about 3 metres up for less than 40 seconds and lands.',m:'It carried a tiny piece of fabric from the Wright brothers\' first airplane.',b:'We flew! The Wright brothers would be proud.'},
  {d:'May 2021',y:2021,t:'A wobbly sixth flight',w:'Jezero Crater, Mars',x:'On flight 6 a camera glitch makes it rock back and forth in the air. It still lands safely.',m:'One lost photo confused its navigation, but its software kept it steady enough.',b:'Whoa, wobbly! I\'m OK… I think.'},
  {d:'Apr 2023',y:2023,t:'Flight 50',w:'Jezero Crater, Mars',x:'Planned for five flights, it passes fifty and keeps scouting ahead of Perseverance.',m:'Dust and cold winters made flying harder and harder.',b:'Fifty flights! My blades feel tired.'},
  {d:'Jan 2024',y:2024,t:'Damaged blade',w:'Valinor Hills, Mars',x:'On 18 January, flight 72 ends with rotor damage on landing. NASA ends the mission on 25 January.',m:'In 72 flights it spent about 128 minutes in the air. Its success inspired Dragonfly, a rotorcraft NASA plans to send to Saturn\'s moon Titan.',b:''}]},
 curiosity:{world:'mars',mech:'heavy',speed:6,turn:1.3,accel:2.2,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'2004–2011',y:2008,t:'A lab on wheels',w:'Pasadena, California',x:'JPL builds a car-sized rover of about 900 kilograms, with a plutonium power source and a full chemistry lab inside.',m:'It carries 17 cameras and a laser that can zap rocks from several metres away.',b:'We\'re heavy! We roll over small rocks. Space is a boost jump.'},
  {d:'Nov 2011',y:2011,t:'Launch',w:'Cape Canaveral, Florida',x:'On 26 November it launches on an Atlas V rocket.',m:'The trip to Mars took more than eight months.',b:'Eight months of cruising. Wake me when we land.'},
  {d:'Aug 2012',y:2012,t:'The sky crane',w:'Gale Crater, Mars',x:'On 6 August a rocket-powered crane lowers it on cables into Gale Crater.',m:'Engineers called the landing "seven minutes of terror" because it had to run on its own, with no help from Earth.',b:'Seven minutes of terror. Phew!'},
  {d:'Sep 2012',y:2012,t:'An old streambed',w:'Gale Crater, Mars',x:'It finds rounded pebbles that could only have been shaped by flowing water.',m:'The water was probably ankle- to hip-deep and flowing at walking speed.',b:'A river once flowed right here!'},
  {d:'Mar 2013',y:2013,t:'Mars could have had life',w:'Yellowknife Bay, Mars',x:'Powder from its first drill hole shows that ancient Mars had the right chemistry for microbes.',m:'That doesn\'t mean life was there, only that it could have lived there.',b:'Could have had life… so cool.'},
  {d:'Sep 2014',y:2014,t:'Mount Sharp',w:'Mount Sharp, Mars',x:'It reaches the foot of Mount Sharp, a mountain of rock layers it will climb for years.',m:'Each layer is like a page in a history book of Mars\'s climate.',b:'Climbing a mountain. My wheels have holes now…'},
  {d:'Jun 2018',y:2018,t:'Organic molecules',w:'Mount Sharp, Mars',x:'NASA announces organic molecules in 3-billion-year-old mudstone, building blocks that life can use.',m:'It also found that methane in the air rises and falls with the seasons.',b:'Big discovery! But I\'m slowing down…'},
  {d:'Nov 2026',y:2026,t:'Still climbing, slowly fading',w:'Mount Sharp, Mars',x:'Curiosity is still working. Its nuclear power source gives a little less energy every year.',m:'It will eventually join the list of machines left behind on Mars. Until then, it keeps climbing.',b:''}]},
 perseverance:{world:'mars',mech:'boost',speed:7.2,turn:1.6,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'2010s',y:2017,t:'Curiosity\'s sibling',w:'Pasadena, California',x:'JPL builds Perseverance on Curiosity\'s design, adding a coring drill, sample tubes and the MOXIE oxygen maker.',m:'Its wheels were made tougher after Curiosity\'s wheels got dented and torn.',b:'Space gives a long sprint jump. Let\'s go, Percy!'},
  {d:'Jul 2020',y:2020,t:'Launch',w:'Cape Canaveral, Florida',x:'On 30 July it launches with the Ingenuity helicopter tucked underneath.',m:'It launched during the COVID-19 pandemic, with teams working in masks and shifts.',b:'Ingenuity is riding with us!'},
  {d:'Feb 2021',y:2021,t:'Landing in Jezero',w:'Jezero Crater, Mars',x:'On 18 February it lands in Jezero Crater, an old lake with a river delta.',m:'For the first time, cameras recorded video of a landing on Mars. Its 21.5-metre parachute carried a hidden coded message.',b:'We have video of the landing!'},
  {d:'Apr 2021',y:2021,t:'Oxygen on Mars',w:'Jezero Crater, Mars',x:'On 20 April, MOXIE turns Martian air into oxygen for the first time.',m:'Future astronauts could make oxygen this way to breathe and to burn rocket fuel.',b:'Breathe in! Oxygen made on Mars.'},
  {d:'Sep 2021',y:2021,t:'First rock core',w:'Jezero Crater, Mars',x:'After a first try crumbles, it seals its first rock core in a tube.',m:'Each core is about the size of a piece of chalk.',b:'Got it! Sealed and safe.'},
  {d:'Dec 2022',y:2022,t:'A sample depot',w:'Three Forks, Mars',x:'It starts leaving a backup set of sealed tubes on the ground, in case a future mission comes to collect them.',m:'Whether and how those tubes will reach Earth is still uncertain.',b:'Leaving gifts for the future. My wheels are getting dusty…'},
  {d:'Jul 2024',y:2024,t:'Leopard spots',w:'Neretva Vallis, Mars',x:'It finds a rock called Cheyava Falls with odd spots that scientists want to study very closely.',m:'Spots like these can form through chemistry that, on Earth, microbes are involved in. Only a lab on Earth could say more.',b:'Leopard spots! I\'m creaking a bit…'},
  {d:'Nov 2026',y:2026,t:'Still exploring',w:'Jezero Crater rim, Mars',x:'Perseverance is still working. NASA says it could keep going through at least 2031.',m:'One day it too will stop, and join the hardware left behind, including its own parachute and descent stage.',b:''}]},
 voyager1:{world:'galaxy',mech:'space',speed:20,turn:1.9,by:'NASA Jet Propulsion Laboratory',stops:[
  {d:'1970s',y:1976,t:'Built for a grand tour',w:'Pasadena, California',x:'JPL builds two identical spacecraft, Voyager 1 and Voyager 2, to fly past the giant outer planets.',m:'A rare line-up of the outer planets let one spacecraft use each planet\'s gravity to reach the next.',b:'Press W to fly forward, A and D to turn. Space for a thruster burst!'},
  {d:'Sep 1977',y:1977,t:'Launch',w:'Cape Canaveral, Florida',x:'On 5 September a Titan-Centaur rocket sends Voyager 1 away, two weeks after Voyager 2.',m:'It launched second but flew a faster path, so it reached Jupiter first.',b:'Launched second, arriving first. Sneaky!'},
  {d:'Mar 1979',y:1979,t:'Jupiter',w:'Jupiter',x:'On 5 March it flies past Jupiter and spots active volcanoes on the moon Io.',m:'Jupiter\'s gravity flung it faster towards Saturn, like a slingshot.',b:'Volcanoes on a moon! Let Jupiter pull you along.'},
  {d:'Nov 1980',y:1980,t:'Saturn and Titan',w:'Saturn',x:'On 12 November it passes Saturn and its hazy moon Titan, then heads up and out of the planets\' plane.',m:'Choosing Titan meant it could never visit another planet.',b:'Goodbye, planets. Hello, deep space.'},
  {d:'Feb 1990',y:1990,t:'The Pale Blue Dot',w:'About 6 billion km from Earth',x:'On 14 February it turns around and photographs Earth: a tiny blue speck in a sunbeam.',m:'Then its cameras were switched off for good to save power.',b:'Everyone we know is on that little dot.'},
  {d:'Feb 1998',y:1998,t:'Farthest ever',w:'Beyond the planets',x:'It passes Pioneer 10 and becomes the most distant human-made object.',m:'It has held that record ever since.',b:'Farthest ever! My power is fading, though.'},
  {d:'Aug 2012',y:2012,t:'Interstellar space',w:'The heliopause',x:'On 25 August it crosses the edge of the Sun\'s bubble, the first spacecraft in interstellar space.',m:'It noticed the change when the particles around it suddenly became much denser.',b:'Interstellar! I feel old and cold.'},
  {d:'Nov 2023',y:2023,t:'Gibberish',w:'Interstellar space',x:'Its computer starts sending nonsense. Engineers spend five months finding a broken memory chip.',m:'They moved the code around the broken chip, sending commands that took almost a day to arrive.',b:'Garbled… data… I\'m struggling…'},
  {d:'Nov 2026',y:2026,t:'One light-day away',w:'About 26 billion km from Earth',x:'On 18 November it is expected to reach one light-day from Earth.',m:'Its power drops every year, so its instruments are being switched off one by one.',b:''}]}
};

/* ============ PEOPLE + WHAT WE GAINED, one entry per story stop ============
   p: [name, what they did with the machine, astronaut?]   g: [illustration, what we gained] */
const GX={
 surveyor3:[
  {g:['tech','Surveyor tested landing radar and small steering rockets, ideas that later Moon landers, including Apollo\'s, built on.']},
  {g:['tech','The Atlas-Centaur showed that hydrogen-fuelled upper stages work. A newer Centaur still flies today.']},
  {g:['landing','Its accidental bounces showed exactly how a lander behaves when it touches lunar soil.']},
  {g:['landing','Proof that the ground was firm meant Apollo astronauts could land and walk safely.']},
  {g:['photo','Thousands of close-up pictures helped NASA plan where and how Apollo crews would land.']},
  {g:['power','Losing it to the cold showed how hard the lunar night is on electronics, a problem new Moon landers still have to solve.']},
  {p:[['Pete Conrad','Apollo 12 commander. Walked to Surveyor 3 and helped remove its camera.',1],['Alan Bean','Apollo 12 lunar module pilot. Photographed it and helped cut off parts to bring home.',1]],g:['science','Parts that spent 31 months on the Moon showed engineers how materials age in space.']},
  {g:['science','It is a time capsule: future visitors can still study how hardware weathers on the Moon.']}],
 retro:[
  {p:[['Carroll Alley','University of Maryland physicist. Led the science team behind the laser mirrors.']],g:['tech','No power and no moving parts: sometimes the simplest machine is the one that lasts longest.']},
  {p:[['Neil Armstrong','Apollo 11 commander. Set up the mirror panel on the first moonwalk.',1],['Buzz Aldrin','Apollo 11 lunar module pilot. Set up the seismometer beside it.',1]],g:['distance','It turned the Moon into a target that observatories can measure with a laser.']},
  {g:['distance','Laser echoes measure the distance to the Moon far more precisely than radar ever could.']},
  {p:[['Alan Shepard','Apollo 14 commander. Set up the second mirror array at Fra Mauro.',1],['Edgar Mitchell','Apollo 14 lunar module pilot. Worked beside Shepard on the experiments.',1]],g:['distance','Two targets let scientists measure how the Moon wobbles, a clue that it has a partly liquid core.']},
  {p:[['Dave Scott','Apollo 15 commander. Delivered the biggest mirror array.',1],['Jim Irwin','Apollo 15 lunar module pilot. Helped set up the science station and reflector.',1]],g:['distance','A bigger mirror sends back a brighter echo, so more observatories can take part.']},
  {g:['science','Tests of Einstein\'s theory of gravity, and proof that the Moon is slowly moving away from Earth.']},
  {g:['science','Still useful after more than 55 years. New Moon missions are now carrying modern reflectors.']}],
 lrv:[
  {g:['tech','Light electric motors in each wheel and wire-mesh tyres: ideas engineers still use for rough-ground rovers.']},
  {g:['tech','Clever folding packed a car into a tiny space, a trick spacecraft still use for solar panels and antennas.']},
  {p:[['Dave Scott','Apollo 15 commander. Drove the first car on the Moon.',1],['Jim Irwin','Apollo 15 lunar module pilot. Navigated from the passenger seat.',1]],g:['drive','Driving let astronauts reach many more places and bring home a wider mix of Moon rocks.']},
  {p:[['John Young','Apollo 16 commander. Raced the rover in the "Grand Prix" test.',1],['Charlie Duke','Apollo 16 lunar module pilot. Filmed the Grand Prix.',1]],g:['drive','Pushing the rover to its limits showed engineers how wheels grip in low gravity.']},
  {p:[['Gene Cernan','Apollo 17 commander. Taped a map onto the broken fender.',1],['Harrison Schmitt','Apollo 17 geologist. The first scientist to walk on the Moon.',1]],g:['repair','Fixing hardware with simple tools showed why astronauts need repair skills far from home.']},
  {p:[['Gene Cernan','Apollo 17 commander. Set the lunar speed record.',1]],g:['drive','Faster driving meant more time for science at each stop.']},
  {p:[['Gene Cernan','Parked the rover so its camera could film the lift-off.',1]],g:['photo','Its camera gave the world a live view of the last Apollo crew leaving the Moon.']}],
 sojourner:[
  {p:[['Donna Shirley','Managed NASA\'s Mars Exploration Program at JPL and championed the little rover.']],g:['tech','A small, low-cost robot could do real science on another planet.']},
  {g:['teamwork','Pathfinder was part of "faster, better, cheaper": a whole Mars mission for a fraction of the old cost.']},
  {g:['landing','Airbag landings worked, so NASA used them again for Spirit and Opportunity.']},
  {p:[['Jacob Matijevic','Led the rover team that drove Sojourner off the lander.']],g:['drive','The first rover tracks on Mars led straight to Spirit, Opportunity, Curiosity and Perseverance.']},
  {p:[['Matthew Golombek','Pathfinder project scientist. Studied the flood-rounded rocks.']],g:['water','Rounded rocks hinted that huge floods once rushed through Ares Vallis.']},
  {g:['power','Its silence showed how cold Martian nights drain batteries, a lesson built into later rovers.']},
  {g:['teamwork','Millions of people followed the mission online, one of the first big events on the internet.']}],
 spirit:[
  {p:[['Steve Squyres','Principal investigator. Led the science team for both twin rovers.']],g:['tech','Two identical rovers doubled the chance of success.']},
  {g:['tech','Reliable Delta II rockets carried many of NASA\'s science missions.']},
  {g:['landing','Airbags and parachutes delivered it safely, proving the landing system could be used again.']},
  {g:['repair','Fixing a computer from millions of kilometres away showed teams how to repair software remotely.']},
  {g:['drive','Climbing a hill gave scientists a wide view of the area\'s ancient history.']},
  {g:['repair','Driving backwards with a broken wheel showed how teams adapt when hardware fails.']},
  {p:[['Steve Squyres','Led the science team that worked out where the silica came from.']],g:['life','Silica from ancient hot springs: on Earth, places like that are full of life.']},
  {g:['drive','Testing escape moves in a sandbox on Earth improved how rovers judge risky ground.']},
  {g:['teamwork','Planned for 90 days, it worked for six years. Long life became the goal for every rover after it.']}],
 opportunity:[
  {p:[['Steve Squyres','Principal investigator for Spirit and Opportunity.']],g:['tech','A twin rover meant two very different places on Mars could be explored at once.']},
  {g:['tech','A night launch on a Delta II rocket sent the second twin on its way.']},
  {g:['landing','Landing inside a small crater gave it instant access to layered bedrock.']},
  {g:['water','Proof that liquid water once soaked the ground changed how we search Mars for life.']},
  {g:['drive','Lessons from Purgatory Dune made rover driving safer.']},
  {g:['water','Gypsum veins showed water once flowed through cracks in the rock.']},
  {g:['drive','A marathon on Mars proved rovers can last and travel far beyond their design.']},
  {g:['power','The storm showed how dangerous dust is for solar power, so future machines plan for it.']},
  {g:['teamwork','Almost 15 years of work and more than 200,000 pictures of Mars.']}],
 insight:[
  {p:[['Bruce Banerdt','Principal investigator. Led the mission to listen to the inside of Mars.']],g:['quake','The first mission built to study the deep inside of another rocky planet.']},
  {g:['tech','Two tiny MarCO satellites flew with it and proved that very small spacecraft can work in deep space.']},
  {g:['landing','A flat, safe landing spot gave its instruments steady ground to work on.']},
  {g:['quake','A seismometer placed on the ground could feel the faintest shakes.']},
  {g:['quake','Marsquakes proved that Mars is still active inside.']},
  {g:['tech','The stuck heat probe taught engineers how hard it is to dig into unknown soil.']},
  {g:['quake','Large quakes helped measure Mars\'s crust, mantle and core.']},
  {g:['science','Knowing what is inside Mars helps us understand how rocky planets like Earth form.']}],
 ingenuity:[
  {p:[['MiMi Aung','Project manager. Led the team that built the helicopter.'],['Bob Balaram','Chief engineer. Came up with the idea of a Mars helicopter.']],g:['flight','Off-the-shelf parts, like a phone-type processor, could survive and fly on another planet.']},
  {g:['flight','Riding along with a rover is a cheap way to test a bold new idea.']},
  {g:['landing','It arrived safely, still bolted under Perseverance.']},
  {p:[['Håvard Grip','Chief pilot. Planned the very first flight.']],g:['flight','The first powered flight on another world opened a new way to explore.']},
  {g:['flight','Surviving a glitch in mid-air proved its software could stay stable.']},
  {g:['flight','Scouting from the air helped Perseverance plan safer routes.']},
  {g:['flight','Its flight data now shapes designs for future Mars helicopters.']}],
 curiosity:[
  {p:[['John Grotzinger','First project scientist. Led the search for a habitable past.']],g:['tech','A full chemistry lab on wheels, with 17 cameras and a rock-zapping laser.']},
  {g:['power','Nuclear power lets a rover keep working through dust storms and winters.']},
  {p:[['Adam Steltzner','Led the team that designed the sky crane landing.']],g:['landing','The sky crane landed a 900-kilogram rover, and it was used again for Perseverance.']},
  {g:['water','Proof that rivers once flowed across Mars.']},
  {g:['life','The first proof that ancient Mars could have supported microbes.']},
  {g:['climate','Rock layers record how Mars changed from wet to dry.']},
  {g:['life','Organic molecules and seasonal methane are clues in the search for life.']},
  {g:['teamwork','More than a decade of discoveries from a single rover.']}],
 perseverance:[
  {p:[['Katie Stack Morgan','Deputy project scientist. Helps choose which rocks to sample.']],g:['tech','Lessons from Curiosity made a tougher, smarter rover.']},
  {g:['teamwork','Teams kept the launch on schedule during a pandemic.']},
  {g:['photo','The first video of a Mars landing helps engineers design better landers.']},
  {p:[['Michael Hecht','Principal investigator of MOXIE, the oxygen maker.']],g:['oxygen','Making oxygen on Mars is a step towards air and rocket fuel for astronauts.']},
  {g:['life','Sealed samples could one day be studied in laboratories on Earth.']},
  {g:['life','A backup depot keeps samples safe for a possible future mission.']},
  {g:['life','The leopard spots are one of the most interesting clues yet in the search for past life.']},
  {g:['science','Every sample and picture helps plan the first human trips to Mars.']}],
 voyager1:[
  {p:[['Ed Stone','Project scientist for 50 years, from 1972 to 2022.']],g:['tech','Built to last five years, designed so well it is still working almost 50 years later.']},
  {g:['space','Gravity assists made the grand tour possible with very little fuel.']},
  {g:['space','Io\'s volcanoes were the first active volcanoes ever seen beyond Earth.']},
  {g:['space','Titan\'s thick atmosphere made it a target for the later Cassini–Huygens mission.']},
  {p:[['Carl Sagan','Astronomer on the imaging team. Pushed for the Pale Blue Dot photo.']],g:['photo','One photo changed how people see our planet: small, fragile and shared.']},
  {g:['space','A human-made object can travel farther than any explorer before it.']},
  {g:['space','The first direct measurements of the space between the stars.']},
  {p:[['Suzanne Dodd','Voyager project manager. Led the team that fixed the computer.']],g:['repair','Engineers fixed a 46-year-old computer from about 24 billion kilometres away.']},
  {g:['teamwork','Almost 50 years after launch, it is still sending data home.']}]
};
Object.keys(GX).forEach(id=>GX[id].forEach((x,i)=>{const s=GJ[id].stops[i];if(s)Object.assign(s,{ppl:x.p||null,gain:x.g})}));

/* ---------- illustrations for "What we gained" (drawn in SVG) ---------- */
const GAIN={
 tech:['Better technology','<rect x="110" y="48" width="100" height="84" rx="10" fill="#1b2a4a" stroke="#7cc4ff" stroke-width="3"/><rect x="135" y="70" width="50" height="40" rx="5" fill="#7cc4ff" opacity=".85"/><g stroke="#7cc4ff" stroke-width="3">'+[0,1,2,3].map(i=>`<line x1="${124+i*24}" y1="30" x2="${124+i*24}" y2="48"/><line x1="${124+i*24}" y1="132" x2="${124+i*24}" y2="150"/>`).join('')+'</g><circle cx="250" cy="60" r="20" fill="none" stroke="#f7c548" stroke-width="7" stroke-dasharray="8 6"/><circle cx="250" cy="60" r="7" fill="#f7c548"/>'],
 landing:['Safer landings','<rect x="0" y="130" width="320" height="50" fill="#8a8781"/><ellipse cx="160" cy="132" rx="70" ry="8" fill="#6c6a65"/><path d="M130 80h60l12 26h-84z" fill="#d8a63a"/><rect x="140" y="58" width="40" height="22" rx="4" fill="#e9e7e1"/><g stroke="#c9cdd5" stroke-width="4"><line x1="122" y1="104" x2="104" y2="130"/><line x1="198" y1="104" x2="216" y2="130"/><line x1="160" y1="106" x2="160" y2="130"/></g><g fill="#c9cdd5"><ellipse cx="102" cy="131" rx="10" ry="3"/><ellipse cx="218" cy="131" rx="10" ry="3"/></g><path d="M246 140c4-6 12-6 16 0" stroke="#4a4844" stroke-width="5" fill="none"/>'],
 distance:['Measuring the universe','<circle cx="60" cy="90" r="34" fill="#2a6fd1"/><path d="M40 78c10-6 22 4 30-4s14 6 18 14c-10 2-20 10-30 6s-20-6-18-16z" fill="#4b9a4a"/><circle cx="270" cy="70" r="20" fill="#c9c6bf"/><circle cx="263" cy="64" r="4" fill="#a19e98"/><line x1="94" y1="86" x2="250" y2="72" stroke="#5dff8a" stroke-width="3" stroke-dasharray="10 6"/><line x1="250" y1="78" x2="94" y2="94" stroke="#5dff8a" stroke-width="2" stroke-dasharray="4 8" opacity=".6"/><text x="160" y="150" fill="#eef1f7" font-family="IBM Plex Mono,monospace" font-size="14" text-anchor="middle">2.5 s round trip</text>'],
 photo:['A new view','<rect x="96" y="56" width="128" height="84" rx="12" fill="#2c2f37" stroke="#c9cdd5" stroke-width="3"/><rect x="120" y="44" width="36" height="16" rx="4" fill="#2c2f37" stroke="#c9cdd5" stroke-width="3"/><circle cx="160" cy="98" r="28" fill="#0b1019" stroke="#c9cdd5" stroke-width="4"/><circle cx="160" cy="98" r="6" fill="#7cc4ff"/><circle cx="208" cy="70" r="5" fill="#f7c548"/><path d="M0 160 L320 40" stroke="rgba(255,210,120,.25)" stroke-width="18"/>'],
 power:['Lessons about power','<circle cx="90" cy="80" r="26" fill="#f7c548"/><g stroke="#f7c548" stroke-width="4">'+[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<line x1="${90+Math.cos(a)*34}" y1="${80+Math.sin(a)*34}" x2="${90+Math.cos(a)*46}" y2="${80+Math.sin(a)*46}"/>`}).join('')+'</g><rect x="170" y="60" width="96" height="52" rx="8" fill="none" stroke="#eef1f7" stroke-width="4"/><rect x="266" y="76" width="8" height="20" rx="2" fill="#eef1f7"/><rect x="176" y="66" width="30" height="40" rx="3" fill="#ff8f70"/><path d="M226 66l-12 22h12l-6 18 18-26h-12l6-14z" fill="#f7c548"/>'],
 space:['Exploring deep space','<g fill="#fff">'+[[30,30],[80,140],[140,24],[200,150],[260,40],[300,110],[110,90],[240,96]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.6"/>`).join('')+'</g><circle cx="70" cy="110" r="30" fill="#d9a46b"/><ellipse cx="70" cy="110" rx="50" ry="10" fill="none" stroke="#efe0b8" stroke-width="3"/><path d="M110 100 Q200 40 280 60" stroke="#f7c548" stroke-width="3" stroke-dasharray="8 6" fill="none"/><g transform="translate(270 56)"><path d="M-14 0a14 6 0 0 1 28 0z" fill="#e9e7e1"/><rect x="-5" y="0" width="10" height="7" fill="#2c2f37"/></g>'],
 drive:['Driving further','<rect x="0" y="120" width="320" height="60" fill="#b8693f"/><g fill="#8a4a2c">'+[0,1,2,3,4,5,6,7,8].map(i=>`<rect x="${20+i*32}" y="${150-i*2}" width="18" height="6" rx="2"/><rect x="${20+i*32}" y="${164-i*2}" width="18" height="6" rx="2"/>`).join('')+'</g><rect x="200" y="74" width="80" height="30" rx="5" fill="#e7e5df"/><rect x="196" y="66" width="88" height="8" fill="#2a3f8f"/><g fill="#2c2f37"><circle cx="210" cy="114" r="10"/><circle cx="240" cy="114" r="10"/><circle cx="270" cy="114" r="10"/></g><line x1="266" y1="66" x2="266" y2="40" stroke="#e7e5df" stroke-width="4"/><rect x="256" y="32" width="20" height="10" rx="2" fill="#e7e5df"/>'],
 repair:['Fixing it far from home','<g transform="rotate(-35 160 90)"><rect x="80" y="82" width="140" height="16" rx="8" fill="#c9cdd5"/><circle cx="80" cy="90" r="20" fill="#c9cdd5"/><circle cx="80" cy="90" r="9" fill="#0b1019"/></g><g transform="rotate(35 160 90)"><rect x="100" y="84" width="110" height="12" rx="4" fill="#f7c548"/><rect x="210" y="80" width="30" height="20" rx="4" fill="#ff8f70"/></g><rect x="120" y="140" width="80" height="14" rx="3" fill="#7cc4ff" opacity=".6"/>'],
 water:['Water on another world','<rect x="0" y="0" width="320" height="180" fill="#b8693f" opacity=".55"/><path d="M-10 60 C60 30 90 120 160 90 S260 40 330 110" stroke="#4aa3e0" stroke-width="22" fill="none" stroke-linecap="round" opacity=".85"/><path d="M-10 60 C60 30 90 120 160 90 S260 40 330 110" stroke="#9fd6ff" stroke-width="4" fill="none" stroke-dasharray="14 18"/><g fill="#7cc4ff"><path d="M250 128c0 9-6 14-12 14s-12-5-12-14 12-22 12-22 12 13 12 22z"/><path d="M286 146c0 6-4 9-8 9s-8-3-8-9 8-14 8-14 8 8 8 14z"/></g>'],
 life:['Clues about life','<ellipse cx="110" cy="92" rx="54" ry="34" fill="#62d9a5" opacity=".25" stroke="#62d9a5" stroke-width="3"/><circle cx="96" cy="86" r="10" fill="#62d9a5"/><circle cx="126" cy="100" r="6" fill="#62d9a5" opacity=".7"/><g stroke="#f7c548" stroke-width="3" fill="none"><path d="M210 30 C250 60 190 90 230 120 S210 160 230 170"/><path d="M250 30 C210 60 270 90 230 120 S250 160 230 170"/></g><g stroke="#7cc4ff" stroke-width="2">'+[48,76,104,132,156].map(y=>`<line x1="218" y1="${y}" x2="242" y2="${y}"/>`).join('')+'</g>'],
 quake:['Looking inside a planet','<circle cx="130" cy="96" r="70" fill="#b8693f"/><circle cx="130" cy="96" r="50" fill="#d98a4f"/><circle cx="130" cy="96" r="24" fill="#f7c548"/><path d="M60 96h140" stroke="#0b1019" stroke-width="2" opacity=".2"/><g fill="none" stroke="#7cc4ff" stroke-width="3"><path d="M210 50 q10 -10 20 0 t20 0 t20 0 t20 0"/><path d="M210 96 q10 -18 20 0 t20 0 t20 0 t20 0"/><path d="M210 142 q10 -8 20 0 t20 0 t20 0 t20 0"/></g>'],
 flight:['Flying on other worlds','<rect x="0" y="140" width="320" height="40" fill="#b8693f"/><path d="M40 150 Q140 40 270 70" stroke="#f7c548" stroke-width="3" stroke-dasharray="8 7" fill="none"/><g transform="translate(160 76)"><rect x="-12" y="0" width="24" height="18" rx="3" fill="#d8a63a"/><line x1="0" y1="0" x2="0" y2="-22" stroke="#c9cdd5" stroke-width="3"/><rect x="-60" y="-14" width="120" height="4" rx="2" fill="#e9e7e1"/><rect x="-54" y="-22" width="108" height="4" rx="2" fill="#c9cdd5"/><g stroke="#c9cdd5" stroke-width="2"><line x1="-8" y1="18" x2="-20" y2="34"/><line x1="8" y1="18" x2="20" y2="34"/></g></g>'],
 oxygen:['Air for future explorers','<circle cx="110" cy="90" r="56" fill="#e9e7e1"/><path d="M70 80a40 34 0 0 1 80 0v22a40 30 0 0 1 -80 0z" fill="#d8a63a"/><path d="M80 78c8-12 26-16 40-10" stroke="#fff" stroke-width="5" opacity=".6" fill="none"/><g font-family="Unbounded,Arial Black,sans-serif" font-weight="800" fill="#7cc4ff"><circle cx="230" cy="80" r="26" fill="#7cc4ff" opacity=".2" stroke="#7cc4ff" stroke-width="3"/><circle cx="268" cy="104" r="20" fill="#7cc4ff" opacity=".2" stroke="#7cc4ff" stroke-width="3"/><text x="230" y="88" font-size="22" text-anchor="middle">O</text><text x="268" y="111" font-size="17" text-anchor="middle">O</text></g>'],
 climate:['Reading a planet\'s history','<g>'+['#c98a5c','#b8693f','#d9a46b','#a65a34','#c47a4c','#8a4a2c'].map((c,i)=>`<path d="M0 ${40+i*22} C80 ${30+i*22} 200 ${52+i*22} 320 ${38+i*22} V${62+i*22} C200 ${76+i*22} 80 ${54+i*22} 0 ${64+i*22}z" fill="${c}"/>`).join('')+'</g><g fill="#f7c548" font-family="IBM Plex Mono,monospace" font-size="12"><text x="290" y="56" text-anchor="end">young</text><text x="290" y="160" text-anchor="end">old</text></g>'],
 teamwork:['People made it happen','<g fill="#7cc4ff">'+[90,160,230].map((x,i)=>`<circle cx="${x}" cy="${70-i%2*10}" r="20"/><path d="M${x-30} ${140-i%2*10}a30 34 0 0 1 60 0z"/>`).join('')+'</g><path d="M160 22l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill="#f7c548"/>'],
 science:['New science','<circle cx="160" cy="90" r="16" fill="#f7c548"/><g fill="none" stroke="#7cc4ff" stroke-width="3"><ellipse cx="160" cy="90" rx="80" ry="26"/><ellipse cx="160" cy="90" rx="80" ry="26" transform="rotate(60 160 90)"/><ellipse cx="160" cy="90" rx="80" ry="26" transform="rotate(-60 160 90)"/></g><circle cx="240" cy="90" r="6" fill="#ff8f70"/>']
};
function gainSVG(k){const g=GAIN[k]||GAIN.science;return `<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${g[0]}"><defs><linearGradient id="gbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141c30"/><stop offset="1" stop-color="#070a12"/></linearGradient></defs><rect width="320" height="180" fill="url(#gbg)"/>${g[1]}</svg>`}
const personPic=(nm,a)=>{const p=typeof ASTRO!=='undefined'&&(ASTRO.find(x=>x.n===nm)||TEAM.find(x=>x.n===nm));return p&&p.img?`<img src="${p.img}" alt="">`:PERSON(a)};
const PERSON=(astro)=>astro?'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="17" r="13" fill="#e9e7e1"/><path d="M10 15a10 9 0 0 1 20 0v4a10 7 0 0 1-20 0z" fill="#d8a63a"/><path d="M6 40a14 12 0 0 1 28 0z" fill="#e9e7e1"/><rect x="16" y="31" width="8" height="5" rx="1" fill="#2a3f8f"/></svg>':'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="15" r="9" fill="#7cc4ff"/><path d="M5 40a15 14 0 0 1 30 0z" fill="#7cc4ff"/></svg>';

/* ============ ALIENS, UFOs AND OTHER SILLINESS (just for fun, not part of the real story) ============
   All characters here are original: little green aliens, Splorp the jelly alien, Cubey the blocky astronaut, and some cows. */
let FUN=true;try{FUN=localStorage.getItem('bt-fun')!=='off'}catch(e){}
function setFun(v){FUN=!!v;try{localStorage.setItem('bt-fun',FUN?'on':'off')}catch(e){}}
const fm=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.5},o));
const fb=(c,o=1)=>new THREE.MeshBasicMaterial({color:c,transparent:o<1,opacity:o,depthWrite:o>=1});
function addTo(g,geo,mat,x,y,z){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);g.add(m);return m}
/* little green alien, facing +x */
function alien(s=1){
  const g=new THREE.Group(),skin=fm(0x7ee36b,{roughness:.55}),eye=new THREE.MeshStandardMaterial({color:0x07080c,roughness:.08,metalness:.4});
  addTo(g,new THREE.CylinderGeometry(.24,.3,.62,14),skin,0,.6,0);addTo(g,new THREE.SphereGeometry(.3,14,10),skin,0,.32,0);
  const head=addTo(g,new THREE.SphereGeometry(.42,20,16),skin,0,1.22,0);head.scale.set(1,1.08,1.15);
  [-.17,.17].forEach(z=>{const e=addTo(g,new THREE.SphereGeometry(.13,12,10),eye,.33,1.27,z);e.scale.set(.55,1.25,1);addTo(g,new THREE.SphereGeometry(.035,6,5),fb(0xffffff),.42,1.33,z+.03)});
  addTo(g,new THREE.CylinderGeometry(.015,.015,.4,6),skin,0,1.75,0);g.userData.bulb=addTo(g,new THREE.SphereGeometry(.07,10,8),fb(0xfff27a),0,1.97,0);
  [-1,1].forEach(sg=>{addTo(g,new THREE.CylinderGeometry(.07,.07,.32,8),skin,0,.16,sg*.13)});
  const armL=new THREE.Group();armL.position.set(0,.82,-.3);g.add(armL);addTo(armL,new THREE.CylinderGeometry(.06,.06,.45,8),skin,0,-.2,0);
  const armR=new THREE.Group();armR.position.set(0,.82,.3);g.add(armR);addTo(armR,new THREE.CylinderGeometry(.06,.06,.45,8),skin,0,-.2,0);
  g.userData.armR=armR;g.userData.armL=armL;g.scale.setScalar(s);return g;
}
/* flying saucer with an alien pilot */
function ufo(s=1){
  const g=new THREE.Group();
  const disc=addTo(g,new THREE.SphereGeometry(1.6,32,14),fm(0xb9c1cd,{metalness:.65,roughness:.28}),0,0,0);disc.scale.y=.26;
  const rim=addTo(g,new THREE.TorusGeometry(1.56,.11,8,48),fm(0x7e8798,{metalness:.7,roughness:.3}),0,0,0);rim.rotation.x=Math.PI/2;
  addTo(g,new THREE.SphereGeometry(.78,24,12,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xa6f6ff,transparent:true,opacity:.42,roughness:.05}),0,.24,0);
  const pilot=alien(.42);pilot.position.y=.1;g.add(pilot);g.userData.pilot=pilot;
  g.userData.lights=[];for(let i=0;i<10;i++){const a=i/10*Math.PI*2;g.userData.lights.push(addTo(g,new THREE.SphereGeometry(.09,8,6),fb([0xff4fd8,0x62f0a5,0xf7c548][i%3]),Math.cos(a)*1.38,-.13,Math.sin(a)*1.38))}
  const beam=new THREE.Mesh(new THREE.CylinderGeometry(.3,1.7,7,28,1,true),new THREE.MeshBasicMaterial({color:0x9dffb0,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}));beam.position.y=-3.6;g.add(beam);g.userData.beam=beam;
  g.scale.setScalar(s);return g;
}
/* a cow, facing +x */
function cow(s=1){
  const g=new THREE.Group(),w=fm(0xf4f2ec,{roughness:.8}),b=fm(0x1c1c20,{roughness:.8}),pink=fm(0xf2a5b5,{roughness:.7});
  addTo(g,new THREE.BoxGeometry(1.3,.62,.62),w,0,.82,0);
  [[.2,.95,.31],[-.35,.8,-.31],[-.1,1.13,.1],[.4,.7,-.31]].forEach(([x,y,z])=>{const sp=addTo(g,new THREE.BoxGeometry(.32,.26,.03),b,x,y,z);if(Math.abs(z)<.2){sp.rotation.x=Math.PI/2;sp.scale.set(1,1,1)}});
  addTo(g,new THREE.BoxGeometry(.42,.42,.4),w,.82,1.04,0);addTo(g,new THREE.BoxGeometry(.12,.2,.34),pink,1.07,.95,0);
  [-.12,.12].forEach(z=>{addTo(g,new THREE.SphereGeometry(.04,6,5),b,1.03,1.15,z*1.3);const h=addTo(g,new THREE.ConeGeometry(.04,.16,6),fm(0xe9dcc0),.78,1.32,z*1.4);h.rotation.x=z>0?.4:-.4});
  [[.48,.2],[.48,-.2],[-.48,.2],[-.48,-.2]].forEach(([x,z])=>addTo(g,new THREE.BoxGeometry(.13,.55,.13),w,x,.28,z));
  addTo(g,new THREE.BoxGeometry(.04,.4,.04),w,-.67,.75,0).rotation.z=.4;
  g.scale.setScalar(s);return g;
}
/* Splorp, a squishy jelly alien */
function splorp(s=1){
  const g=new THREE.Group();const body=addTo(g,new THREE.SphereGeometry(.7,24,18),new THREE.MeshStandardMaterial({color:0x5cf08a,transparent:true,opacity:.85,roughness:.15}),0,.62,0);body.scale.y=.85;g.userData.body=body;
  [[.5,.85,-.24],[.55,.95,.0],[.5,.85,.24]].forEach(([x,y,z])=>{addTo(body,new THREE.SphereGeometry(.13,10,8),fb(0xffffff),x/.7*.6,(y-.62)/.85,z);addTo(body,new THREE.SphereGeometry(.06,8,6),fb(0x111111),x/.7*.6+.1,(y-.62)/.85,z)});
  g.userData.stars=[0,1,2].map(i=>{const st=addTo(g,new THREE.OctahedronGeometry(.1),fb(0xffe36a),0,1.5,0);st.visible=false;return st});
  g.scale.setScalar(s);return g;
}
/* Cubey, a blocky astronaut, facing +x */
function cubey(s=1){
  const g=new THREE.Group(),suit=fm(0xff9a3c,{roughness:.6}),white=fm(0xf2f2ee),visor=new THREE.MeshStandardMaterial({color:0x2a7bd8,roughness:.05,metalness:.5});
  addTo(g,new THREE.BoxGeometry(.32,.5,.5),suit,0,.95,0);addTo(g,new THREE.BoxGeometry(.24,.42,.4),white,-.26,1,0);
  addTo(g,new THREE.BoxGeometry(.46,.46,.46),white,0,1.46,0);addTo(g,new THREE.BoxGeometry(.05,.24,.34),visor,.24,1.46,0);
  [-.12,.12].forEach(z=>addTo(g,new THREE.BoxGeometry(.16,.5,.16),suit,0,.42,z));
  const arm=new THREE.Group();arm.position.set(0,1.15,.33);g.add(arm);addTo(arm,new THREE.BoxGeometry(.14,.46,.14),suit,0,-.2,0);g.userData.arm=arm;
  addTo(g,new THREE.BoxGeometry(.14,.46,.14),suit,0,.95,-.33);
  g.scale.setScalar(s);return g;
}
const FUN_TAGS={cow:'Just for fun: no cows were launched into space. Probably.',cubey:'Just for fun: Cubey is not a real astronaut.',splorp:'Just for fun: no aliens were hurt. Splorp is fine!',photo:'Just for fun: aliens do not really take selfies with rovers.',ufo:'Just for fun: no UFOs were involved in the real mission.',mech:'Just for fun: the real engineers were humans.'};

/* ---------- map: UFOs, aliens and cows wandering the world ---------- */
function onSphere(o,n,alt,yaw=0){o.position.copy(n).multiplyScalar(gRad(n)+alt);o.quaternion.setFromUnitVectors(gv(0,1,0),n);if(yaw)o.rotateY(yaw)}
function funSetup(){
  const F=G.F={ufos:[],aliens:[],cows:[],cool:14,lastLift:0};if(!FUN)return;
  const rand=rng(G.id.length*31+7),sc=G.sc;
  if(G.world==='galaxy'){
    for(let i=0;i<5;i++){const u=ufo(1.6);sc.add(u);F.ufos.push({g:u,r:30+rand()*220,a:rand()*TAU,w:(rand()<.5?-1:1)*(.08+rand()*.12),y:2+rand()*4})}
    for(let i=0;i<4;i++){const c=cow(1.4);sc.add(c);const p=G.stops[1+(i*2)%(G.stops.length-1)].p.clone().add(gv(rand()*16-8,3+rand()*3,rand()*16-8));c.position.copy(p);F.cows.push({g:c,p,spin:gv(rand(),rand(),rand()).multiplyScalar(.8)})}
    const esc=ufo(1.1);sc.add(esc);F.escort={g:esc,a:0};
    return;
  }
  for(let i=0;i<3;i++){const u=ufo(1);sc.add(u);const n=randDir(rand);const ax=gv().crossVectors(n,randDir(rand)).normalize();F.ufos.push({g:u,n,ax,sp:.05+rand()*.05,alt:9+rand()*4,mode:'roam'})}
  G.stops.forEach((s,i)=>{if(i===0||rand()<.25)return;const a=alien(1.25);const t=gv().crossVectors(s.n,randDir(rand)).normalize();const n=s.n.clone().applyAxisAngle(t,(6+rand()*6)/GR_R);sc.add(a);onSphere(a,n,0,rand()*TAU);F.aliens.push({g:a,n,hop:0,met:false,yaw:a.quaternion.clone()})});
  for(let i=0;i<4;i++){const c=cow(1.1);const n=randDir(rand);if(n.z>.95)continue;sc.add(c);onSphere(c,n,0,rand()*TAU);F.cows.push({g:c,n,alt:0,gone:0})}
}
const ALIEN_LINES=['An alien waves: "Take me to your rover!"','Alien: "Nice wheels. Very… wheel-y."','Alien: "Is this Earth? We were promised snacks."','Alien: "Beep boop. Just kidding, I\'m not a robot. YOU are."','Alien: "Have you seen our cow? It was here a minute ago."','Alien: "Say cheese!"'];
function funTick(dt){
  const F=G.F;if(!F||!FUN)return;const t=G.t;
  const blink=u=>{u.userData.lights.forEach((l,k)=>l.visible=((t*6+k)|0)%3!==0);u.userData.pilot.rotation.y=Math.sin(t*1.5)*.6};
  if(G.world==='galaxy'){
    F.ufos.forEach(u=>{u.a+=u.w*dt;u.g.position.set(Math.cos(u.a)*u.r,u.y+Math.sin(t+u.r)*.8,Math.sin(u.a)*u.r);u.g.rotation.y+=dt*2;blink(u.g)});
    F.cows.forEach(c=>{c.g.rotation.x+=c.spin.x*dt;c.g.rotation.y+=c.spin.y*dt;c.g.rotation.z+=c.spin.z*dt;c.g.position.copy(c.p).add(gv(0,Math.sin(t*.7)*1.2,0));
      if(G.pos.distanceTo(c.g.position)<9)botReact('spacecow',['Is that… a cow? In space?!','Moo-ving at 17 km per second!','That cow has seen things.'],30)});
    const e=F.escort;if(e){e.a+=dt*.9;const near=(t%40)<16&&!G.dead;e.g.visible=near;if(near){e.g.position.copy(G.pos).add(gv(Math.cos(e.a)*9,3.5+Math.sin(t*2),Math.sin(e.a)*9));e.g.rotation.y+=dt*3;blink(e.g);botReact('escort',['A UFO is following us!','Our new friend wants to race.','Just a UFO. Totally normal. Keep flying.'],40);if(Math.random()<dt*.6)SFX.ufo()}}
    return;
  }
  /* UFO: roam, sometimes chase the machine and beam it up */
  F.cool-=dt;let beaming=false;
  F.ufos.forEach(u=>{
    blink(u.g);const B=u.g.userData.beam;
    if(u.mode==='roam'){u.n.applyAxisAngle(u.ax,u.sp*dt).normalize();u.alt+=(10-u.alt)*dt*.3;B.material.opacity=0;
      if(F.cool<=0&&!G.cardOpen&&!G.dead&&G.next>1&&u.n.angleTo(G.n)*GR_R<60){u.mode='chase';F.cool=999;u.t=0}}
    else if(u.mode==='chase'||u.mode==='beam'){
      u.t+=dt;const ang=u.n.angleTo(G.n),d=ang*GR_R;
      if(ang>1e-4){const ax=gv().crossVectors(u.n,G.n).normalize();u.n.applyAxisAngle(ax,Math.min(ang,(u.mode==='beam'?2.2:9)/GR_R*dt)).normalize()}
      u.alt+=((u.mode==='beam'?5.2:7)-u.alt)*dt*1.5;
      if(u.mode==='chase'){B.material.opacity=0;if(d<1.4){u.mode='beam';u.bt=0;SFX.ufo();botSay('A UFO! It\'s beaming us up! Drive away to escape!',3800)}if(u.t>18)u.mode='leave'}
      else{u.bt+=dt;beaming=d<2.4;B.material.opacity=beaming?.28+.12*Math.sin(t*20):.12;
        if(!beaming&&u.bt>.6){u.mode='leave';botSay(['Phew, we escaped!','Not today, saucer people!','Ha! Too fast for them.'][Math.random()*3|0],3000)}
        if(u.bt>5.5){u.mode='leave';botSay(['They just wanted a selfie. They put us back.','The aliens said our machine was "too old to keep". Rude!'][Math.random()*2|0],3600)}
        if(G.cardOpen||G.dead)u.mode='leave'}
    }else if(u.mode==='leave'){u.alt+=dt*4;B.material.opacity=Math.max(0,B.material.opacity-dt);u.n.applyAxisAngle(u.ax,u.sp*dt*3).normalize();if(u.alt>16){u.mode='roam';F.cool=26+Math.random()*20}}
    else if(u.mode==='abduct'){const c=u.cow,ang=u.n.angleTo(c.n);if(ang>.002){const ax=gv().crossVectors(u.n,c.n).normalize();u.n.applyAxisAngle(ax,Math.min(ang,6/GR_R*dt))}else{B.material.opacity=.3;c.alt+=dt*2.2;c.g.rotation.x+=dt*2;if(c.alt>u.alt-1){c.g.visible=false;c.gone=20;u.mode='leave';u.cow=null}}
      if(G.n.angleTo(u.n)*GR_R<25)botReact('cowbeam',['Look! The UFO is taking a cow!','Moooo! Bye, cow!'],25)}
    onSphere(u.g,u.n,u.alt);u.g.rotateY(t*1.6);
  });
  /* random cow abduction */
  if(Math.random()<dt/14){const c=F.cows.find(c=>!c.gone&&c.g.visible),u=F.ufos.find(u=>u.mode==='roam');if(c&&u){u.mode='abduct';u.cow=c;if(G.n.angleTo(c.n)*GR_R<30)SFX.moo()}}
  F.cows.forEach(c=>{if(c.gone>0){c.gone-=dt;if(c.gone<=0){c.n=randDir(Math.random);c.alt=0;c.g.visible=true;c.g.rotation.set(0,0,0)}}if(c.g.visible)onSphere(c.g,c.n,c.alt+Math.max(0,Math.sin(t*3+c.n.x*9))*.04,c.n.y*9);
    if(c.g.visible&&!c.alt&&G.n.angleTo(c.n)*GR_R<5)botReact('cow',['A cow? On '+(G.world==='moon'?'the Moon':'Mars')+'? Who keeps bringing these?','Moo. Hello, cow.'],20)});
  /* the tractor beam lifts the machine */
  G.lift=G.lift||0;if(beaming&&!G.cardOpen){G.lift=Math.min(2.6,G.lift+dt*1.3);F.lastLift=G.lift}else if(G.lift>0){G.lift=Math.max(0,G.lift-dt*4.5);if(G.lift===0&&F.lastLift>.6){SFX.land();F.lastLift=0}}
  /* aliens wave, chat and hop away */
  F.aliens.forEach((a,k)=>{const d=a.n.angleTo(G.n)*GR_R,ud=a.g.userData;
    if(a.hop>0){a.hop-=dt;const away=tanOf(a.n.clone().sub(G.n),a.n).normalize();if(away.lengthSq())a.n.applyAxisAngle(gv().crossVectors(a.n,away).normalize(),5/GR_R*dt);onSphere(a.g,a.n,Math.abs(Math.sin(a.hop*9))*.8)}
    else{onSphere(a.g,a.n,Math.abs(Math.sin(t*2+k))*.06);if(d<14){const to=tanOf(G.n.clone().sub(a.n),a.n).normalize();if(to.lengthSq()){const fwd=gv(1,0,0).applyQuaternion(a.g.quaternion);const ang=Math.atan2(gv().crossVectors(fwd,to).dot(a.n),fwd.dot(to));a.g.rotateY(ang)}}}
    ud.armR.rotation.x=d<10?-2.6+Math.sin(t*8+k)*.5:Math.sin(t*1.5+k)*.15;ud.bulb.material.color.setHSL(.15+.05*Math.sin(t*3+k),1,.7);
    if(d<9&&!a.met&&!G.cardOpen){a.met=true;botSay(ALIEN_LINES[k%ALIEN_LINES.length],3600)}
    if(d<1.8&&a.hop<=0&&!G.cardOpen&&!G.dead&&!G.lock){a.hop=1.2;alienSlap(a)}});
}
function funMap(x,pt){const F=G.F;if(!F||!FUN||G.world==='galaxy')return;F.ufos.forEach(u=>{const [a,b]=pt(u.n);x.fillStyle='#7dff9a';x.beginPath();x.ellipse(a,b,8,3.5,0,0,7);x.fill()});F.aliens.forEach(a=>{const [p,q]=pt(a.n);x.fillStyle='#7ee36b';x.beginPath();x.arc(p,q,3,0,7);x.fill()})}

/* ---------- cutscene gags ---------- */
function funCine(type,f,c){
  if(!FUN)return;const fx=c.fx;fx.fun={};const gag=fx.fun;
  if(type==='build'){const a=alien(1.15);a.position.set(1.9,0,2.4);a.rotation.y=-2.3;f.add(a);const wr=addTo(a.userData.armR,new THREE.BoxGeometry(.06,.36,.06),fm(0xc9cdd5,{metalness:.6}),0,-.45,0);gag.mech=a;c.tag='mech'}
  else if(type==='launch'&&fx.rocket){
    const pick=Math.random();
    if(pick<.5){const cw=cow(1);cw.position.set(.62,4.4,0);cw.rotation.z=Math.PI/2;cw.rotation.y=Math.PI/2;fx.rocket.add(cw);gag.cow=cw;c.tag='cow'}
    else{const cb=cubey(1.1);cb.position.set(1.5,0,-2.6);f.add(cb);gag.cubey=cb;c.tag='cubey'}
    const u=ufo(.9);u.position.set(G.world==='galaxy'?-11:-6,6,G.world==='galaxy'?-10:-4);f.add(u);gag.ufo=u;
  }
  else if(type==='land'){const s=splorp(1.15);s.position.set(.2,0,.2);f.add(s);gag.splorp=s;c.tag='splorp'}
  else if(type==='discover'){
    if(G.world==='galaxy'){const u=ufo(1.3);f.add(u);gag.zoom=u;const cw=cow(1.2);f.add(cw);gag.floatcow=cw;c.tag='ufo'}
    else{const a=alien(1.2);a.position.set(2.8,0,2.6);a.rotation.y=-2.6;f.add(a);gag.photo=a;const cam=addTo(a,new THREE.BoxGeometry(.18,.14,.2),fm(0x222428),.38,.95,0);const fl=addTo(a,new THREE.SphereGeometry(.18,10,8),fb(0xffffff,.0),.5,1,0);gag.flash=fl;
      const u=ufo(1);u.position.set(-12,7,3);f.add(u);gag.pass=u;c.tag='photo'}}
  else if(type==='end'){const u=ufo(1.2);u.position.set(.6,14,1.6);f.add(u);gag.endufo=u;c.tag='ufo'}

}
function funCineTick(c,dt){
  const g=c.fx&&c.fx.fun;if(!g)return;const t=c.t;
  const blink=u=>u.userData.lights.forEach((l,k)=>l.visible=((t*6+k)|0)%3!==0);
  if(g.mech){g.mech.userData.armR.rotation.x=-1.4+Math.sin(t*9)*.5;if(Math.random()<dt*3)puff('spark')}
  if(g.cow){g.cow.rotation.x=Math.sin(t*4)*.15;if(t>1.6&&!g.mooed){g.mooed=1;SFX.moo()}}
  if(g.cubey){const cb=g.cubey,r=c.fx.rocket;if(t<1.6){cb.position.x=1.5-t*1.6;cb.position.y=Math.abs(Math.sin(t*9))*.15;cb.rotation.y=Math.PI*.5+.6}else if(!g.boarded){g.boarded=1;r.updateMatrixWorld();cb.position.set(.62,4.6,0);cb.rotation.set(0,Math.PI/2,0);r.add(cb);SFX.jump()}cb.userData.arm.rotation.x=-2.6+Math.sin(t*10)*.5}
  if(g.ufo){const r=c.fx.rocket;g.ufo.position.y=Math.max(6,r.position.y+3+Math.sin(t*2));g.ufo.position.x=(G.world==='galaxy'?-10:-4.5)+Math.sin(t*1.3)*1.5;g.ufo.rotation.y+=dt*3;blink(g.ufo);if(t>.5&&!g.u1){g.u1=1;SFX.ufo()}}
  if(g.splorp){const s=g.splorp,b=s.userData.body;
    if(c.landed&&!g.squished){g.squished=t;SFX.splat()}
    if(!g.squished){b.scale.set(1,.85+Math.sin(t*6)*.06,1);s.rotation.y=Math.sin(t*2)*.4}
    else{const k=t-g.squished;if(k<1.1){b.scale.set(1.9,.14,1.9);s.position.y=0}
      else{if(!g.pop){g.pop=1;SFX.boing()}const q=Math.min(1,(k-1.1)*2.5);b.scale.set(1+Math.sin(q*Math.PI)*.4,.85,1);s.position.set(.2+q*1.8,Math.sin(q*Math.PI)*1.6,.2+q*2.2);
        s.userData.stars.forEach((st,i)=>{st.visible=true;const a=t*4+i*2.1;st.position.set(Math.cos(a)*.6,1.45,Math.sin(a)*.6);st.rotation.y+=dt*5})}}}
  if(g.photo){g.photo.userData.armR.rotation.x=-1.6;const ph=(t%1.8);g.flash.material.opacity=ph<.12?1:0;if(ph<dt*1.2)SFX.camera();g.pass.position.x=-12+t*3.2;g.pass.rotation.y+=dt*3;blink(g.pass)}
  if(g.zoom){g.zoom.position.set(-20+t*9,4+Math.sin(t*3),6);g.zoom.rotation.y+=dt*4;blink(g.zoom);g.floatcow.position.set(7-t*.8,3+Math.sin(t)*.6,4);g.floatcow.rotation.set(t*.6,t*.4,t*.3);if(t>1&&!g.m){g.m=1;SFX.moo()}}
  if(g.endufo){g.endufo.position.y=Math.max(5.5,14-t*2.2);g.endufo.rotation.y+=dt*2;blink(g.endufo);const B=g.endufo.userData.beam;B.material.opacity=g.endufo.position.y<6?.18+.08*Math.sin(t*4):0;g.endufo.userData.pilot.userData.armR.rotation.x=-2.8;if(t>1&&!g.u){g.u=1;SFX.ufo()}}
}
/* ---------- extra chaos (only when "Just for fun" is on) ----------
   Cows that fart, aliens that slap back, a flag-planting astronaut, a panicking programmer
   with a Rage Uppercut, and Nova, an original giant hero who flies past (and, in the galaxy,
   sometimes flies straight through you, then fixes it). All characters are original. */
const NOVA_LINES=['Was that… a giant hero?! That was Nova!','Nova just flew past. Show-off.','A giant in a cape! Only in this museum.'];
const SLAP_LINES=['SLAP! The alien did not like that.','Ouch! Maybe stop bumping into aliens?','Alien: "Touch me again, Earth machine. I dare you."','They look really angry now. One more and…'];
function txtSprite(text,col='#fff',bg='rgba(10,14,24,.85)',w=6){
  const c=document.createElement('canvas');c.width=512;c.height=128;const x=c.getContext('2d');
  x.fillStyle=bg;x.beginPath();x.roundRect?x.roundRect(8,14,496,100,40):x.rect(8,14,496,100);x.fill();
  x.font='900 60px system-ui,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillStyle=col;x.fillText(text,256,66);
  const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(w,w/4,1);s.renderOrder=5;return s}
/* US flag, as planted by the Apollo crews */
function usFlagTex(){
  const c=document.createElement('canvas');c.width=380;c.height=200;const x=c.getContext('2d');
  for(let i=0;i<13;i++){x.fillStyle=i%2?'#ffffff':'#b22234';x.fillRect(0,i*200/13,380,200/13+1)}
  x.fillStyle='#3c3b6e';x.fillRect(0,0,152,200*7/13);x.fillStyle='#fff';
  for(let r=0;r<9;r++)for(let k=0;k<(r%2?5:6);k++){x.beginPath();x.arc(13+k*25+(r%2?12.5:0),9+r*11.9,3.2,0,7);x.fill()}
  return new THREE.CanvasTexture(c)}
function flagPole(){
  const g=new THREE.Group(),m=fm(0xd9dde4,{metalness:.3,roughness:.3});
  addTo(g,new THREE.CylinderGeometry(.04,.04,2.8,8),m,0,1.4,0);
  const bar=addTo(g,new THREE.CylinderGeometry(.03,.03,1.6,8),m,0,2.72,.8);bar.rotation.x=Math.PI/2;
  const fl=new THREE.Mesh(new THREE.PlaneGeometry(1.6,.84,8,1),new THREE.MeshStandardMaterial({map:usFlagTex(),side:THREE.DoubleSide,roughness:.8}));
  fl.position.set(0,2.3,.82);fl.rotation.y=Math.PI/2;g.add(fl);g.userData.flag=fl;return g}
/* panicking programmer at a desk, facing +x */
function programmer(){
  const g=new THREE.Group(),shirt=fm(0x3b7dd8),skin=fm(0xe0b48c),hair=fm(0x2b1d14),dark=fm(0x23262e),wood=fm(0x8a6a48);
  addTo(g,new THREE.BoxGeometry(1.1,.08,1.6),wood,.75,.95,0);[[.3,-.7],[.3,.7],[1.2,-.7],[1.2,.7]].forEach(([a,b])=>addTo(g,new THREE.BoxGeometry(.07,.95,.07),wood,a,.47,b));
  addTo(g,new THREE.BoxGeometry(.5,.03,.7),dark,.7,1.01,0);
  const sc=document.createElement('canvas');sc.width=256;sc.height=160;const x=sc.getContext('2d');x.fillStyle='#16070a';x.fillRect(0,0,256,160);x.fillStyle='#ff4a4a';x.font='bold 30px monospace';x.fillText('ERROR',70,50);x.font='16px monospace';x.fillStyle='#ff9c9c';['Segmentation fault','line 404: ???','undefined is not','  a function'].forEach((l,i)=>x.fillText(l,14,82+i*19));
  const scr=addTo(g,new THREE.BoxGeometry(.03,.45,.7),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(sc)}),.95,1.25,0);scr.rotation.z=.18;
  addTo(g,new THREE.BoxGeometry(.5,.08,.5),dark,-.05,.6,0);
  const body=new THREE.Group();g.add(body);
  [-.13,.13].forEach(z=>{const l=addTo(body,new THREE.BoxGeometry(.5,.16,.16),dark,.2,.62,z);addTo(body,new THREE.BoxGeometry(.16,.55,.16),dark,.42,.3,z)});
  const torso=addTo(body,new THREE.BoxGeometry(.32,.62,.5),shirt,-.02,1.0,0);
  const head=addTo(body,new THREE.SphereGeometry(.22,16,12),skin,0,1.5,0);addTo(body,new THREE.SphereGeometry(.235,16,12,0,TAU,0,1.4),hair,-.02,1.53,0);
  [-.08,.08].forEach(z=>addTo(body,new THREE.SphereGeometry(.03,6,5),fb(0x111111),.2,1.53,z));
  const armL=new THREE.Group();armL.position.set(0,1.22,-.3);body.add(armL);addTo(armL,new THREE.BoxGeometry(.12,.5,.12),shirt,0,-.22,0);armL.rotation.z=-1.1;
  const armR=new THREE.Group();armR.position.set(0,1.25,.3);body.add(armR);addTo(armR,new THREE.BoxGeometry(.12,.5,.12),shirt,0,-.22,0);
  const fist=new THREE.Group();fist.position.y=-.5;armR.add(fist);addTo(fist,new THREE.SphereGeometry(.1,10,8),skin,0,0,0);
  const fire=new THREE.Group();fist.add(fire);fire.visible=false;
  for(let i=0;i<7;i++){const f=addTo(fire,new THREE.ConeGeometry(.12+Math.random()*.08,.5+Math.random()*.4,7),new THREE.MeshBasicMaterial({color:i%2?0xff7a1a:0xffd23a,transparent:true,opacity:.85,depthWrite:false}),(Math.random()-.5)*.15,-.25,(Math.random()-.5)*.15);f.rotation.x=Math.PI}
  const q=txtSprite('?!','#ffd23a','rgba(0,0,0,0)',2.4);q.position.set(0,2.15,0);g.add(q);
  Object.assign(g.userData,{body,armR,armL,head,torso,fire,q,mats:[shirt,skin]});return g}
/* Nova: an original giant hero. Standing along +y, chest facing +z. */
function novaHero(s=1){
  const g=new THREE.Group(),blue=fm(0x1f3fb8,{roughness:.35,metalness:.2}),gold=fm(0xe8b93a,{roughness:.25,metalness:.5}),glow=fb(0x6ff3ff),white=new THREE.MeshStandardMaterial({color:0xf2f5fa,roughness:.7,side:THREE.DoubleSide});
  [-.32,.32].forEach(x=>{addTo(g,new THREE.CylinderGeometry(.22,.18,1.9,10),blue,x,1.2,0);addTo(g,new THREE.CylinderGeometry(.24,.26,.55,10),gold,x,.28,.02)});
  addTo(g,new THREE.CylinderGeometry(.62,.45,1.9,14),blue,0,3,0);addTo(g,new THREE.BoxGeometry(1.1,.18,.7),gold,0,2.08,0);
  const plate=addTo(g,new THREE.CylinderGeometry(.56,.5,.9,14,1,false,-.9,1.8),gold,0,3.35,0);plate.rotation.y=Math.PI;
  const star=new THREE.Shape();for(let i=0;i<10;i++){const r=i%2?.13:.3,a=i/10*TAU+Math.PI/2;star[i?'lineTo':'moveTo'](Math.cos(a)*r,Math.sin(a)*r)}
  const st=addTo(g,new THREE.ShapeGeometry(star),glow,0,3.35,.6);
  [-1,1].forEach(sg=>{addTo(g,new THREE.SphereGeometry(.32,12,10),gold,sg*.78,3.75,0);const a=addTo(g,new THREE.CylinderGeometry(.16,.14,1.7,10),blue,sg*.82,3.0,.1);a.rotation.x=0;addTo(g,new THREE.SphereGeometry(.2,10,8),gold,sg*.82,2.1,.1)});
  const head=addTo(g,new THREE.SphereGeometry(.42,18,14),blue,0,4.4,0);head.scale.set(1,1.12,1);
  const vis=addTo(g,new THREE.TorusGeometry(.38,.08,8,24,Math.PI*.9),glow,0,4.48,0);vis.rotation.set(0,0,Math.PI*.05);vis.rotation.x=Math.PI/2;vis.rotation.z=Math.PI*1.05+Math.PI/2;
  [-1,1].forEach(sg=>{const w=addTo(g,new THREE.ConeGeometry(.08,.45,6),gold,sg*.4,4.62,-.05);w.rotation.z=-sg*.9});
  const cape=new THREE.Mesh(new THREE.PlaneGeometry(1.5,3.4,1,8),white);cape.position.set(0,2.35,-.55);cape.rotation.x=.12;g.add(cape);
  g.userData.cape=cape;g.userData.star=st;g.scale.setScalar(s);return g}

function chaosSetup(){
  const C=G.C={hitCd:0,slaps:0,kb:gv(),nova:null,novaNext:45+Math.random()*60,boom:null};G.kh=0;G.kvy=0;G.kspin=0;G.lock=false;
  if(!FUN)return;const sc=G.sc,rand=Math.random;
  if(G.world==='galaxy'){if(rand()<.7)C.gNova={at:22+rand()*35,ph:'wait'};return}
  /* flag astronaut near a random stop */
  const pickN=(min)=>{const s=G.stops[1+(rand()*(G.stops.length-1)|0)];const t=gv().crossVectors(s.n,randDir(rand)).normalize();return s.n.clone().applyAxisAngle(t,(min+rand()*4)/GR_R)};
  if(rand()<.8){const n=pickN(6),a=astronaut(),grp=new THREE.Group(),pole=flagPole();a.scale.setScalar(.9);grp.add(a);pole.position.set(.9,-3,0);grp.add(pole);sc.add(grp);
    const dir=tanOf(randDir(rand),n).normalize();C.flag={g:grp,a,pole,n,dir,ph:'wait',t:0}}
  /* panicking programmer */
  if(rand()<.85){const n=pickN(7),p=programmer();p.scale.setScalar(1.15);sc.add(p);onSphere(p,n,0,rand()*TAU);C.prog={g:p,n,ph:'idle',t:0}}
}
function knock(from,str,up){/* push the machine away from a point (sphere normal or galaxy position) */
  if(G.world==='galaxy'){const d=G.pos.clone().sub(from);d.y=0;if(d.lengthSq()<1e-4)d.set(1,0,0);G.vel.addScaledVector(d.normalize(),str*1.4)}
  else{const d=tanOf(G.n.clone().sub(from),G.n);if(d.lengthSq()<1e-8)d.copy(G.hd).negate();G.C.kb.copy(d.normalize().multiplyScalar(str));G.spd=0;G.vel.set(0,0,0);G.push=0;G.dash=0}
  G.kvy=Math.max(G.kvy,up);G.flash=.3}
function fartAt(P,up){for(let i=0;i<14;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.3+Math.random()*.35,7,6),new THREE.MeshBasicMaterial({color:i%3?0x9be35a:0x6fb83a,transparent:true,depthWrite:false}));m.position.copy(P).addScaledVector(up,.6);m.userData={t:1.2+Math.random()*.8,v:up.clone().multiplyScalar(.8+Math.random()).add(gv((Math.random()-.5)*4,(Math.random()-.5)*2,(Math.random()-.5)*4)),k:'fart'};G.fx.add(m)}}
function burst(P,col,n=26,sp=8,size=.25){for(let i=0;i<n;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(size*(.5+Math.random()),6,5),new THREE.MeshBasicMaterial({color:Array.isArray(col)?col[i%col.length]:col,transparent:true,depthWrite:false}));m.position.copy(P);m.userData={t:.6+Math.random()*.7,v:randDir(Math.random).multiplyScalar(sp*(.4+Math.random())),k:'spark'};G.fx.add(m)}}
function alienSlap(a){const C=G.C;if(!C||G.dead)return;a.slap=.45;SFX.slap();C.slaps++;knock(a.n,15,5);
  const P=devicePos();burst(P.clone().addScaledVector(G.n,1),[0xffffff,0x9effa0],10,5,.15);
  if(C.slaps>=5){botSay('Alien: "That\'s it. Bye-bye, Earth machine!" SLAP!',2600);setTimeout(()=>{if(G.on&&!G.dead){SFX.explosion&&SFX.explosion();breakdown('aliens')}},700)}
  else botSay(SLAP_LINES[Math.min(C.slaps-1,SLAP_LINES.length-1)]+`  (${C.slaps}/5)`,3200)}

function chaosTick(dt){
  const C=G.C;if(!C)return;const t=G.t;C.hitCd-=dt;
  const free=!G.cardOpen&&!G.dead&&!G.lock&&!G.cine;
  /* knockback physics */
  if(G.world!=='galaxy'){const L=C.kb.length();if(L>.05){tanOf(C.kb,G.n);C.kb.setLength(L);moveAlong(C.kb,L*dt);C.kb.multiplyScalar(Math.exp(-dt*2))}else C.kb.set(0,0,0)}
  if(G.kh>0||G.kvy>0){G.kvy-=14*dt;G.kh=Math.max(0,G.kh+G.kvy*dt);G.kspin+=dt*(G.kvy>8?16:9);if(G.kh===0){if(G.kvy<-6){SFX.land();G.kvy=-G.kvy*.3}else G.kvy=0}}
  else{const tgt=Math.round(G.kspin/TAU)*TAU;G.kspin+=(tgt-G.kspin)*Math.min(1,dt*10)}
  if(G.kspin){G.D.holder.rotateY(G.kspin);if(G.kh>.2)G.D.holder.rotateZ(Math.sin(G.kspin*.5)*.5)}
  if(!FUN||!G.F)return;
  const P=devicePos(),up=upAt();
  /* cows: bump one and it farts you away */
  G.F.cows.forEach(c=>{if(!c.g.visible)return;
    const d=G.world==='galaxy'?G.pos.distanceTo(c.g.position):(c.alt?99:c.n.angleTo(G.n)*GR_R);
    if(d<(G.world==='galaxy'?3.4:1.7)&&C.hitCd<=0&&free){C.hitCd=.9;SFX.fart();setTimeout(()=>SFX.moo(),250);
      fartAt(c.g.position.clone(),G.world==='galaxy'?gv(0,1,0):c.n);knock(G.world==='galaxy'?c.g.position:c.n,19,6);
      botReact('fart',['PFFFT! That cow just farted us across '+(G.world==='galaxy'?'space':G.world==='moon'?'the Moon':'Mars')+'!','Ew! Cow-powered propulsion!','Note to self: never bump a cow from behind.','Methane boost! Scientists would love this.'],2)}});
  /* alien slap animation (overrides the wave set in funTick) */
  G.F.aliens.forEach(a=>{if(a.slap>0){a.slap-=dt;const k=1-a.slap/.45;a.g.userData.armR.rotation.x=-2.8+k*3.6;a.g.userData.armR.rotation.z=Math.sin(k*Math.PI)*1.2}else a.g.userData.armR.rotation.z=0});
  /* flag astronaut */
  const F=C.flag;if(F){const d=F.n.angleTo(G.n)*GR_R;F.t+=dt;
    if(F.ph==='wait'){onSphere(F.g,F.n,0);if(d<40){F.ph='walk';F.t=0}}
    else if(F.ph==='walk'){F.n.applyAxisAngle(gv().crossVectors(F.n,F.dir).normalize(),1.1/GR_R*dt).normalize();tanOf(F.dir,F.n).normalize();
      onSphere(F.g,F.n,Math.abs(Math.sin(F.t*5))*.25);const fwd=gv(1,0,0).applyQuaternion(F.g.quaternion);F.g.rotateY(Math.atan2(gv().crossVectors(fwd,F.dir).dot(F.n),fwd.dot(F.dir)));F.fq=F.g.quaternion.clone();
      F.a.userData.arm.rotation.z=Math.sin(F.t*5)*.4;if(F.t>5){F.ph='plant';F.t=0}}
    else if(F.ph==='plant'){onSphere(F.g,F.n,0);F.g.quaternion.copy(F.fq);const k=Math.min(1,F.t/3);F.pole.position.y=-3+k*3;
      F.a.userData.arm.rotation.z=-1.6+Math.abs(Math.sin(F.t*7))*1.0;if(((F.t*7/Math.PI)|0)!==F.hz&&d<25){F.hz=(F.t*7/Math.PI)|0;if(F.hz%2===0)SFX.tick()}
      if(k>=1){F.ph='salute';F.t=0;if(d<30)botSay('An astronaut is planting a US flag, just like the Apollo crews did!',3600)}}
    else{F.a.userData.arm.rotation.z=-2.5;F.a.userData.arm.rotation.x=-.5}
    if(F.pole.userData.flag)F.pole.userData.flag.rotation.x=Math.sin(t*1.3)*.04;
    if(d<1.6&&free&&C.hitCd<=0){C.hitCd=1;knock(F.n,8,3);SFX.thud();botReact('astrohit',['Careful! That\'s a real moonwalker!','Sorry, sir! Didn\'t see you there.'],3)}}
  /* panicking programmer */
  const R=C.prog;if(R&&R.ph!=='gone'){const u=R.g.userData,d=R.n.angleTo(G.n)*GR_R;R.t+=dt;u.q.material.opacity=1;
    if(R.ph==='idle'){u.armR.rotation.set(Math.sin(t*14)*.25-0,0,-2.7+Math.sin(t*14)*.25);u.body.rotation.x=Math.sin(t*2)*.05;u.q.visible=Math.sin(t*3)>-.3;u.q.position.y=2.15+Math.sin(t*4)*.08;
      if(d<12)botReact('prog',['That programmer looks stressed. Let\'s not bother him.','Poor guy. Error on line 404.','He\'s been scratching his head since 1969.'],40);
      if(d<1.9&&free){R.ph='mad';R.t=0;u.q.visible=false;SFX.warn();botSay('Uh-oh. We bumped the programmer. He looks MAD.',2400);knock(R.n,4,1)}}
    else if(R.ph==='mad'){const k=Math.min(1,R.t/.7);u.mats[0].color.setRGB(.23+.77*k,.49*(1-k),.85*(1-k));u.mats[1].color.setRGB(.88,.7*(1-k)+.2,.55*(1-k)+.1);
      u.body.position.x=(Math.random()-.5)*.08;u.armR.rotation.set(0,0,.8);
      const to=tanOf(G.n.clone().sub(R.n),R.n).normalize();if(to.lengthSq()){const fwd=gv(1,0,0).applyQuaternion(R.g.quaternion);R.g.rotateY(Math.atan2(gv().crossVectors(fwd,to).dot(R.n),fwd.dot(to))*Math.min(1,dt*8))}
      if(R.t>.9){R.ph='upper';R.t=0;u.fire.visible=true;SFX.uppercut();const lbl=txtSprite('RAGE UPPERCUT!','#ffd23a','rgba(120,10,0,.9)',7);lbl.position.set(0,3.4,0);R.g.add(lbl);R.lbl=lbl;
        if(!G.cardOpen&&!G.dead&&!G.cine&&R.n.angleTo(G.n)*GR_R<5){knock(R.n,9,19);burst(devicePos(),[0xffd23a,0xff7a1a,0xffffff],30,9,.2)}
        botSay('RAGE UPPERCUT!!! We\'re flying!',2600)}}
    else if(R.ph==='upper'){const k=Math.min(1,R.t/.25);u.armR.rotation.set(0,0,.8-k*3.6);onSphere(R.g,R.n,Math.sin(Math.min(1,R.t/.9)*Math.PI)*1.6);R.g.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(gv(0,1,0),R.t*8));
      u.fire.children.forEach((f,i)=>f.scale.setScalar(.8+Math.random()*.6));if(R.lbl)R.lbl.position.y=3.4+R.t*.5;
      if(R.t>1.3){R.ph='gone';burst(R.g.position.clone().addScaledVector(R.n,1.2),[0xdddddd,0xffffff,0xaaaaaa],30,4,.4);SFX.whoosh();R.g.visible=false;setTimeout(()=>botSay('…and he vanished. Probably went to fix his bug.',3000),1600)}}}
  /* Nova fly-by on planet maps */
  if(G.world!=='galaxy'){
    if(!C.nova){C.novaNext-=dt;if(C.novaNext<=0&&free){const dir=tanOf(randDir(Math.random),G.n).normalize(),ctr=P.clone().addScaledVector(G.n,14);
        const n=novaHero(1.6);G.sc.add(n);C.nova={g:n,dir,ctr,t:0,up:G.n.clone()};SFX.nova();botReact('nova',NOVA_LINES,1)}}
    else{const N=C.nova;N.t+=dt;const k=N.t/4.5;N.g.position.copy(N.ctr).addScaledVector(N.dir,(k-.5)*150);
      const z=N.up.clone().negate(),x=gv().crossVectors(N.dir,z);N.g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x,N.dir,z));
      N.g.userData.cape.rotation.x=.9+Math.sin(t*12)*.15;
      if(k>1){G.sc.remove(N.g);C.nova=null;C.novaNext=70+Math.random()*80}}
  }else tickGalaxyNova(dt,free);
}
function tickGalaxyNova(dt,free){
  const C=G.C,V=C.gNova;if(!V||V.ph==='done')return;const t=G.t,shipP=devicePos();
  const face=(g,dir,belly)=>{const y=dir.clone().normalize(),z=belly.clone().sub(y.clone().multiplyScalar(belly.dot(y))).normalize(),x=gv().crossVectors(y,z);g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x,y,z))};
  const nx=G.stops[Math.min(G.next,G.stops.length-1)];
  if(V.ph==='in'&&G.cardOpen){G.sc.remove(V.g);V.ph='wait';V.at=G.t+15;return}
  if(V.ph!=='wait'&&V.ph!=='out'&&G.cardOpen)return;
  if(V.ph==='wait'){if(G.t>V.at&&free&&G.vel.length()>1.5&&(G.next>=G.stops.length||G.pos.distanceTo(nx.p)>25)){V.ph='in';V.t=0;V.g=novaHero(1.4);G.sc.add(V.g);const side=gv(-G.vel.z,0,G.vel.x).normalize();V.from=shipP.clone().addScaledVector(side,90).add(gv(0,6,0));SFX.nova();botSay('Something huge is coming in fast…',2200)}return}
  V.t+=dt;const g=V.g;g.userData.cape.rotation.x=.9+Math.sin(t*12)*.15;
  if(V.ph==='in'){const k=Math.min(1,V.t/1.8),to=shipP.clone();g.position.copy(V.from).lerp(to,k);face(g,to.clone().sub(V.from),gv(0,-1,0));
    if(k>=1){V.ph='boom';V.t=0;V.dir=to.clone().sub(V.from).normalize();G.lock=true;G.vel.set(0,0,0);G.D.holder.visible=false;G.arrow.visible=false;SFX.explosion();
      burst(shipP,[0xffd23a,0xff7a1a,0xff3a1a,0xffffff],60,14,.4);const fl=new THREE.Mesh(new THREE.SphereGeometry(1,20,14),new THREE.MeshBasicMaterial({color:0xffb347,transparent:true,opacity:.9,depthWrite:false}));fl.position.copy(shipP);G.sc.add(fl);V.flash=fl;
      botSay('KABOOM! We were hit by… a giant hero?!',2800)}}
  else if(V.ph==='boom'){g.position.addScaledVector(V.dir,40*dt*Math.max(0,1-V.t/1.4));if(V.flash){V.flash.scale.setScalar(1+V.t*9);V.flash.material.opacity=Math.max(0,.9-V.t*.8);if(V.t>1.2){G.sc.remove(V.flash);V.flash=null}}
    if(V.t>1.6){V.ph='turn';V.t=0;V.p0=g.position.clone();V.hover=shipP.clone().addScaledVector(V.dir,11).add(gv(0,4,0));botSay('Nova: "Oh no! Sorry, little probe! I didn\'t see you there. Let me fix that!"',4200);SFX.boing()}}
  else if(V.ph==='turn'){const k=Math.min(1,V.t/1.6),e=k*k*(3-2*k);g.position.copy(V.p0).lerp(V.hover,e);
    const look=shipP.clone().sub(g.position).setY(0).normalize();g.quaternion.slerp(new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(gv().crossVectors(gv(0,1,0),look),gv(0,1,0),look)),Math.min(1,dt*4));
    if(k>=1){V.ph='heal';V.t=0;SFX.heal();const beam=new THREE.Mesh(new THREE.CylinderGeometry(.35,.9,1,12,1,true),new THREE.MeshBasicMaterial({color:0xfff2a0,transparent:true,opacity:.55,depthWrite:false,side:THREE.DoubleSide}));G.sc.add(beam);V.beam=beam}}
  else if(V.ph==='heal'){const src=g.position.clone().add(gv(0,3*1.4,0)),d=shipP.clone().sub(src),L=d.length();V.beam.position.copy(src).addScaledVector(d,.5);V.beam.scale.set(1,L,1);V.beam.quaternion.setFromUnitVectors(gv(0,1,0),d.clone().normalize());V.beam.material.opacity=.4+.2*Math.sin(t*20);
    if(Math.random()<dt*25)burst(shipP.clone().add(randDir(Math.random).multiplyScalar(1.5)),[0xfff2a0,0x9ff6ff],3,2,.15);
    if(V.t>1.4)G.D.holder.visible=Math.sin(t*30)>0;
    if(V.t>2.8){V.ph='out';V.t=0;G.sc.remove(V.beam);V.beam=null;G.D.holder.visible=true;G.lock=false;burst(shipP,[0xfff2a0,0xffffff,0x9ff6ff],40,7,.2);SFX.chime();C.novaUsed=true;
      botSay('We\'re back! Good as new… well, as old as before. Thanks, Nova!',3600)}}
  else if(V.ph==='out'){g.position.y+=dt*(10+V.t*30);g.rotation.y+=dt*2;if(V.t>3){G.sc.remove(g);V.ph='done'}}
}
/* ---------- 2D comic cutscenes ----------
   Every story stop plays as a three-panel comic that shows what the machine does.
   All drawings are simple original SVG art. */
const KS=(c='#111',w=3)=>`stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const CK=KS();
const cEsc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');
function cWrap(t,n){const w=String(t).split(' '),L=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>n&&c){L.push(c.trim());c=x}else c+=' '+x});if(c.trim())L.push(c.trim());return L}
/* speech bubble centred at x, top at y; tail points to (tx,ty) */
function cBub(x,y,t,tx,ty,n=20){const L=cWrap(t,n),w=Math.max(...L.map(l=>l.length))*9.4+28,h=L.length*21+18,bx=Math.max(6,Math.min(394-w,x-w/2)),cx=bx+w/2;
  tx=tx??cx-30;ty=ty??y+h+22;
  return `<g class="cp-bub"><path d="M${cx-12} ${y+h-3} L${tx} ${ty} L${cx+12} ${y+h-3}" fill="#fff" ${CK}/><rect x="${bx}" y="${y}" width="${w}" height="${h}" rx="18" fill="#fff" ${CK}/><rect x="${cx-10}" y="${y+h-8}" width="20" height="7" fill="#fff"/><text x="${cx}" y="${y+25}" text-anchor="middle" class="cp-bt">${L.map((l,i)=>`<tspan x="${cx}" dy="${i?21:0}">${cEsc(l)}</tspan>`).join('')}</text></g>`}
/* comic sound word in a starburst */
function cBurst(x,y,t,f='#ffd23a',r=42,rot=-8){const fs=t.length>8?18:t.length>5?21:24,tw=t.length*fs*.8,rx=Math.max(r*1.3,tw/1.3+8),ry=Math.max(r*.9,fs*1.9);
  x=Math.max(rx*1.12+4,Math.min(396-rx*1.12,x));y=Math.max(ry*1.12+4,Math.min(256-ry*1.12,y));
  let p='';for(let i=0;i<22;i++){const a=i/22*Math.PI*2,k=i%2?.72:1+((i*37)%5)/18;p+=`${(x+Math.cos(a)*rx*k).toFixed(1)},${(y+Math.sin(a)*ry*k).toFixed(1)} `}
  return `<g class="cp-pow" style="transform-origin:${x}px ${y}px"><g transform="rotate(${rot} ${x} ${y})"><polygon points="${p}" fill="${f}" ${CK}/><text x="${x}" y="${y+fs*.36}" text-anchor="middle" class="cp-word" style="font-size:${fs.toFixed(1)}px">${cEsc(t)}</text></g></g>`}
/* yellow narration box */
const cTag=(x,y,t)=>{const w=t.length*8.2+22;return `<g><rect x="${x}" y="${y}" width="${w}" height="28" fill="#ffe680" ${CK}/><text x="${x+11}" y="${y+19}" class="cp-tag">${cEsc(t)}</text></g>`};
const STARS=[...Array(26)].map((_,i)=>`<circle cx="${(i*149)%400}" cy="${(i*71)%170}" r="${i%3?1.4:2.2}" fill="#fff" opacity="${.5+(i%3)*.2}"/>`).join('');
function cBg(k){
  if(k==='space')return `<rect width="400" height="260" fill="#151a3d"/>${STARS}<rect width="400" height="260" fill="url(#cpDots)" opacity=".25"/>`;
  if(k==='moon')return `<rect width="400" height="260" fill="#0f1226"/>${STARS}<path d="M0 205 Q100 190 200 200 T400 196 V260 H0Z" fill="#c9c9cf" ${CK}/><ellipse cx="80" cy="232" rx="26" ry="7" fill="#a9a9b2"/><ellipse cx="320" cy="225" rx="18" ry="5" fill="#a9a9b2"/>`;
  if(k==='mars')return `<rect width="400" height="260" fill="#f2c08c"/><rect width="400" height="260" fill="url(#cpDots)" opacity=".18"/><path d="M0 170 L60 150 L120 168 L190 140 L260 165 L330 148 L400 162 V200 H0Z" fill="#c9693f" ${CK}/><path d="M0 200 Q120 188 220 198 T400 194 V260 H0Z" fill="#d97b47" ${CK}/><circle cx="90" cy="232" r="5" fill="#9b4a26"/><circle cx="300" cy="220" r="7" fill="#9b4a26"/>`;
  if(k==='earth')return `<rect width="400" height="260" fill="#9fdcff"/><rect width="400" height="260" fill="url(#cpDots)" opacity=".2"/><ellipse cx="70" cy="50" rx="40" ry="14" fill="#fff"/><ellipse cx="310" cy="70" rx="46" ry="15" fill="#fff"/><path d="M0 222 H400 V260 H0Z" fill="#7fc76f" ${CK}/>`;
  if(k==='lab')return `<rect width="400" height="260" fill="#f6edd6"/><path d="M0 40 H400 M0 90 H400 M0 140 H400 M60 0 V200 M160 0 V200 M260 0 V200 M360 0 V200" stroke="#e2d6b6" stroke-width="2"/><path d="M0 200 H400 V260 H0Z" fill="#cdbb95" ${CK}/>`;
  if(k==='control')return `<rect width="400" height="260" fill="#1e2a48"/><rect width="400" height="260" fill="url(#cpDots)" opacity=".25"/>`+[40,155,270].map(x=>`<rect x="${x}" y="28" width="92" height="64" rx="6" fill="#0d1428" ${CK}/>`).join('')+`<path d="M0 210 H400 V260 H0Z" fill="#2e3c63" ${CK}/><rect x="20" y="190" width="360" height="22" fill="#45557f" ${CK}/>`;
  return `<rect width="400" height="260" fill="#222"/>`;
}
const cWheel=(x,y,r=13)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#3a3a40" ${CK}/><circle cx="${x}" cy="${y}" r="${r*.38}" fill="#a0a0a8"/>`;
/* ---------- the machines, drawn side-on, standing on y=0, about 160 wide ---------- */
function cDev(id,o={}){
  const tool=o.tool||'';
  if(id==='sojourner')return `<path d="M-34 -10 L-17 -26 L0 -10 L17 -26 L34 -10" fill="none" ${KS('#555',3)}/>${cWheel(-34,-10,10)+cWheel(0,-10,10)+cWheel(34,-10,10)}<rect x="-38" y="-46" width="76" height="20" fill="#bdbdc4" ${CK}/><rect x="-42" y="-54" width="84" height="9" fill="#2c55a8" ${CK}/><path d="M-28 -54 V-45 M-14 -54 V-45 M0 -54 V-45 M14 -54 V-45 M28 -54 V-45" stroke="#8fb2ff" stroke-width="1.5"/><rect x="30" y="-42" width="12" height="9" fill="#555" ${CK}/><rect class="${tool==='apxs'?'cp-tool':''}" x="-50" y="-36" width="12" height="8" fill="#e0b040" ${CK}/>`;
  if(id==='spirit'||id==='opportunity')return `<path d="M-50 -13 L-25 -40 L0 -13 L25 -40 L50 -13" fill="none" ${KS('#666',4)}/>${cWheel(-50,-13)+cWheel(0,-13)+cWheel(50,-13)}<rect x="-40" y="-74" width="80" height="34" fill="#dcd3bd" ${CK}/><path d="M-82 -80 H82 L76 -72 H-76Z" fill="#2c55a8" ${CK}/><path d="M-60 -79 V-73 M-40 -79 V-73 M-20 -79 V-73 M0 -79 V-73 M20 -79 V-73 M40 -79 V-73 M60 -79 V-73" stroke="#8fb2ff" stroke-width="1.5"/><path d="M28 -80 V-136" ${KS('#111',5)}/><rect x="12" y="-150" width="40" height="16" rx="3" fill="#ddd" ${CK}/><circle cx="22" cy="-142" r="4" fill="#111"/><circle cx="42" cy="-142" r="4" fill="#111"/><g class="${tool==='rat'?'cp-dig':''}"><path d="M40 -52 L72 -44 L84 -22" fill="none" ${KS('#111',4)}/><rect x="76" y="-24" width="16" height="12" fill="#e0b040" ${CK}/></g>`;
  if(id==='curiosity'||id==='perseverance'){const b=id==='curiosity'?'#eeeeee':'#f6f6f2';return `<path d="M-60 -15 L-30 -46 L0 -15 L30 -46 L60 -15" fill="none" ${KS('#666',5)}/>${cWheel(-60,-15,15)+cWheel(0,-15,15)+cWheel(60,-15,15)}<rect x="-52" y="-86" width="104" height="40" fill="${b}" ${CK}/><path d="M-52 -80 L-84 -96 L-92 -66 L-56 -54Z" fill="#9aa0aa" ${CK}/><path d="M-80 -90 L-88 -64 M-70 -86 L-78 -60" stroke="#555" stroke-width="2"/><path d="M34 -86 V-160" ${KS('#111',6)}/><rect x="10" y="-182" width="54" height="24" rx="4" fill="#ddd" ${CK}/><circle cx="${id==='curiosity'?50:24}" cy="-170" r="${id==='curiosity'?9:6}" fill="#3b5bd6" ${CK}/><circle cx="${id==='curiosity'?24:50}" cy="-170" r="5" fill="#111"/><g class="${tool==='drill'?'cp-shake':''}"><path d="M48 -60 L88 -52 L100 -28" fill="none" ${KS('#111',5)}/><rect x="90" y="-34" width="22" height="18" fill="#9aa0aa" ${CK}/><path d="M101 -16 V-2" ${KS('#111',4)}/></g>${id==='perseverance'?'<rect x="-30" y="-74" width="40" height="14" rx="3" fill="#cfd8e8" stroke="#111" stroke-width="2"/><text x="-10" y="-63" text-anchor="middle" font-size="10" font-weight="700" fill="#111">SAMPLES</text>':''}`}
  if(id==='ingenuity')return `<path d="M-14 -22 L-30 0 M14 -22 L30 0 M-6 -22 L-12 0 M6 -22 L12 0" ${KS('#111',3)}/><rect x="-18" y="-44" width="36" height="24" fill="#d8b24a" ${CK}/><path d="M0 -44 V-96" ${KS('#111',4)}/><g class="cp-rot"><ellipse cx="0" cy="-72" rx="78" ry="6" fill="#555" ${CK}/></g><g class="cp-rot cp-rot2"><ellipse cx="0" cy="-88" rx="78" ry="6" fill="#777" ${CK}/></g><rect x="-16" y="-104" width="32" height="8" fill="#2c55a8" ${CK}/>`;
  if(id==='surveyor3')return `<path d="M-20 -60 L-70 0 M20 -60 L70 0 M0 -60 L4 0" ${KS('#111',4)}/><ellipse cx="-70" cy="0" rx="12" ry="4" fill="#ddd" ${CK}/><ellipse cx="70" cy="0" rx="12" ry="4" fill="#ddd" ${CK}/><path d="M-30 -60 L30 -60 L0 -96Z" fill="#c9c9cf" ${CK}/><rect x="-14" y="-92" width="28" height="22" fill="#e8e8ec" ${CK}/><path d="M0 -96 V-150" ${KS('#111',4)}/><rect x="-26" y="-170" width="52" height="22" fill="#2c55a8" ${CK}/><rect x="-36" y="-82" width="14" height="20" rx="4" fill="#777" ${CK}/><g class="${tool==='scoop'?'cp-dig':''}"><path d="M24 -70 L76 -40 L92 -6" fill="none" ${KS('#111',4)}/><path d="M84 -8 h18 v8 h-18z" fill="#bbb" ${CK}/></g>`;
  if(id==='insight')return `<path d="M-30 -36 L-44 0 M30 -36 L44 0 M0 -36 V0" ${KS('#111',4)}/><rect x="-50" y="-52" width="100" height="18" fill="#cfcfd6" ${CK}/>${[-96,96].map(x=>`<circle cx="${x}" cy="-46" r="36" fill="#2c55a8" ${CK}/>${[0,1,2,3,4,5].map(k=>`<path d="M${x} -46 L${(x+Math.cos(k*Math.PI/3)*34).toFixed(1)} ${(-46+Math.sin(k*Math.PI/3)*34).toFixed(1)}" stroke="#8fb2ff" stroke-width="2"/>`).join('')}`).join('')}<path d="M20 -52 L54 -96 L80 -70" fill="none" ${KS('#111',4)}/>${o.dome?`<g class="cp-pulse" style="transform-origin:150px -14px"><path d="M126 0 Q150 -40 174 0Z" fill="#f0f0f0" ${CK}/></g>`:''}`;
  if(id==='retro')return `<path d="M-50 -10 L-40 -50 M50 -10 L40 -66" ${KS('#111',4)}/><path d="M-70 -40 L70 -70 L76 -40 L-64 -10Z" fill="#c9c9cf" ${CK}/>`+[...Array(18)].map((_,i)=>{const c=i%6,r=(i/6)|0,x=-52+c*20+r*2,y=-30-c*4.6-r*9;return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#9fd8ff" stroke="#111" stroke-width="1.5"/>`}).join('');
  if(id==='lrv')return `<path d="M-80 -30 H80" ${KS('#111',6)}/>${[-62,62].map(x=>`<circle cx="${x}" cy="-16" r="17" fill="#c9c9cf" ${CK}/><circle cx="${x}" cy="-16" r="17" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="3 4"/><path d="M${x-22} -36 Q${x} -50 ${x+22} -36" fill="#c9c9cf" ${CK}/>`).join('')}<path d="M-34 -30 V-54 M14 -30 V-54" ${KS('#111',4)}/><rect x="-44" y="-58" width="24" height="10" fill="#bbb" ${CK}/><rect x="4" y="-58" width="24" height="10" fill="#bbb" ${CK}/>${o.crew===false?'':cAstro(-30,-58,.62)+cAstro(18,-58,.62)}<path d="M70 -30 V-90" ${KS('#111',3)}/><path d="M50 -96 Q70 -120 90 -96Z" fill="#eee" ${CK}/>`;
  if(id==='voyager1')return `<path d="M-120 -60 H-30 M30 -60 H140" ${KS('#111',3)}/><rect x="-140" y="-68" width="22" height="16" fill="#777" ${CK}/><rect x="130" y="-64" width="12" height="8" fill="#777" ${CK}/><path d="M-26 -40 L26 -40 L32 -72 L-32 -72Z" fill="#9aa0aa" ${CK}/><circle cx="0" cy="-56" r="7" fill="#e5b84a" ${CK}/><path d="M-60 -78 Q0 -150 60 -78Z" fill="#f1f1f1" ${CK}/><path d="M0 -84 V-122" ${KS('#111',3)}/>`;
  return `<rect x="-40" y="-60" width="80" height="60" fill="#ccc" ${CK}/>`;
}
function cAstro(x,y,s=1,o=''){return `<g class="${o}"><g transform="translate(${x} ${y}) scale(${s})"><rect x="-14" y="-6" width="28" height="40" rx="8" fill="#f4f4f4" ${CK}/><rect x="-24" y="2" width="12" height="28" rx="5" fill="#ddd" ${CK}/><circle cx="0" cy="-22" r="17" fill="#f4f4f4" ${CK}/><path d="M-10 -28 h20 a3 3 0 0 1 3 3 v6 a10 8 0 0 1 -26 0 v-6 a3 3 0 0 1 3 -3z" fill="#e2a72e" ${CK}/><path d="M-10 34 V48 M10 34 V48" ${KS('#111',8)}/></g></g>`}
function cPerson(x,y,col='#ffd23a',cheer=false){return `<g class="${cheer?'cp-cheer':''}"><g transform="translate(${x} ${y})"><circle cx="0" cy="-58" r="13" fill="#f2c9a0" ${CK}/><path d="M-18 -42 Q0 -50 18 -42 L22 0 H-22Z" fill="${col}" ${CK}/>${cheer?`<path d="M-18 -38 L-32 -72 M18 -38 L32 -72" ${KS('#111',6)}/>`:`<path d="M-18 -38 L-28 -10 M18 -38 L28 -10" ${KS('#111',6)}/>`}</g></g>`}
function cRocket(x,y,fl){return `<g transform="translate(${x} ${y})">${fl?`<g class="cp-flame"><path d="M-22 0 Q0 90 22 0Z" fill="#ff8a1e" ${CK}/><path d="M-11 0 Q0 50 11 0Z" fill="#ffe14a"/></g>`:''}<path d="M-22 0 L-38 18 L-22 -14Z M22 0 L38 18 L22 -14Z" fill="#e24a3b" ${CK}/><rect x="-22" y="-150" width="44" height="150" fill="#f4f4f4" ${CK}/><path d="M-22 -150 Q0 -205 22 -150Z" fill="#e24a3b" ${CK}/><path d="M-22 -100 H22 M-22 -50 H22" ${KS('#111',3)}/><circle cx="0" cy="-122" r="8" fill="#9fd8ff" ${CK}/></g>`}
function cPlanet(x,y,r,k){if(k==='mars')return `<circle cx="${x}" cy="${y}" r="${r}" fill="#d9703e" ${CK}/><path d="M${x-r*.6} ${y-r*.2} q${r*.3} ${r*.2} ${r*.6} 0" stroke="#9b4a26" stroke-width="4" fill="none"/>`;
  if(k==='jupiter')return `<circle cx="${x}" cy="${y}" r="${r}" fill="#e8c79a" ${CK}/><path d="M${x-r} ${y-r*.3} H${x+r} M${x-r*.95} ${y+r*.25} H${x+r*.95}" stroke="#b9805a" stroke-width="${r*.16}"/><ellipse cx="${x+r*.35}" cy="${y+r*.42}" rx="${r*.22}" ry="${r*.12}" fill="#c4502e"/><circle cx="${x}" cy="${y}" r="${r}" fill="none" ${CK}/>`;
  if(k==='saturn')return `<ellipse cx="${x}" cy="${y}" rx="${r*2}" ry="${r*.45}" fill="none" stroke="#d6bf8a" stroke-width="${r*.22}"/><circle cx="${x}" cy="${y}" r="${r}" fill="#ecd59c" ${CK}/><path d="M${x-r*1.8} ${y+r*.2} Q${x} ${y+r*.75} ${x+r*1.8} ${y+r*.2}" fill="none" stroke="#d6bf8a" stroke-width="${r*.22}"/>`;
  if(k==='earth')return `<circle cx="${x}" cy="${y}" r="${r}" fill="#3a8be0" ${CK}/><path d="M${x-r*.5} ${y-r*.4} q${r*.4} -${r*.2} ${r*.6} ${r*.3} t${r*.2} ${r*.6} q-${r*.5} ${r*.1} -${r*.8} -${r*.4}z" fill="#5cc45c"/>`;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#c9c9cf" ${CK}/><circle cx="${x-r*.3}" cy="${y-r*.2}" r="${r*.18}" fill="#a9a9b2"/><circle cx="${x+r*.35}" cy="${y+r*.3}" r="${r*.12}" fill="#a9a9b2"/>`}
const cSpeed=(x,y,n=6,len=80)=>[...Array(n)].map((_,i)=>`<path d="M${x-len-(i%2)*30} ${y-30+i*12} H${x-10-(i%3)*10}" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`).join('');
const cPut=(id,x,y,s=1,o={})=>`<g class="${o.cls||''}"><g transform="translate(${x} ${y}) scale(${s})">${cDev(id,o)}</g></g>`;
const cUfo=(x,y)=>`<g class="cp-bob"><g transform="translate(${x} ${y})"><path d="M-30 30 L-14 4 H14 L30 30Z" fill="#9dff9a" opacity=".45"/><ellipse cx="0" cy="0" rx="32" ry="10" fill="#b8bec9" ${CK}/><path d="M-14 -4 Q0 -24 14 -4" fill="#9ff6ff" ${CK}/><circle cx="0" cy="-10" r="5" fill="#7ee36b"/></g></g>`;
const cCow=(x,y,s=.5)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-16" width="52" height="28" rx="8" fill="#fff" ${CK}/><circle cx="-8" cy="-4" r="6" fill="#111"/><circle cx="12" cy="4" r="5" fill="#111"/><rect x="22" y="-24" width="20" height="18" rx="6" fill="#fff" ${CK}/><path d="M-20 12 V26 M18 12 V26" ${KS('#111',5)}/></g>`;

/* close-up inside a magnifying glass */
const cMag=(inner,bgc='#d97b47')=>`<path d="M252 202 L300 250" ${KS('#111',18)}/><path d="M252 202 L300 250" ${KS('#8a5a3c',10)}/><g clip-path="url(#cpMag)"><rect x="100" y="50" width="180" height="180" fill="${bgc}"/>${inner}</g><circle cx="190" cy="140" r="86" fill="none" ${KS('#111',8)}/><circle cx="190" cy="140" r="86" fill="none" ${KS('#c9d6e8',3)}/>`;
const CLUE={layers:`<rect x="100" y="70" width="180" height="160" fill="#a8683f"/>${[0,1,2,3,4,5].map(k=>`<path d="M100 ${88+k*24} Q190 ${80+k*24} 280 ${90+k*24}" stroke="${k%2?'#d9a26a':'#7a4426'}" stroke-width="10" fill="none"/>`).join('')}`,
 berries:`<rect x="100" y="50" width="180" height="180" fill="#c98a5a"/>${[[150,110],[200,96],[236,130],[170,160],[214,176],[140,190],[250,190]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14" fill="#3a3a5a" ${KS('#111',2)}/><circle cx="${x-4}" cy="${y-5}" r="4" fill="#8e8eb8"/>`).join('')}`,
 elements:`<rect x="100" y="50" width="180" height="180" fill="#8a5a3c"/>${[['Si',150,110],['Fe',220,100],['Mg',170,170],['O',235,165]].map(([e,x,y])=>`<circle cx="${x}" cy="${y}" r="22" fill="#fff" ${KS('#111',3)}/><text x="${x}" y="${y+7}" text-anchor="middle" class="cp-bt" style="font-size:20px">${e}</text>`).join('')}`,
 silica:`<rect x="100" y="50" width="180" height="180" fill="#c98a5a"/><path d="M110 150 Q190 120 270 160 L270 240 H110Z" fill="#f4f1ea" ${KS('#111',2)}/><text x="190" y="196" text-anchor="middle" class="cp-bt">SILICA</text>`,
 boot:`<rect x="100" y="50" width="180" height="180" fill="#b9b9c0"/><path d="M160 80 h50 a18 18 0 0 1 18 18 v90 a22 22 0 0 1 -22 22 h-42 a22 22 0 0 1 -22 -22 v-90 a18 18 0 0 1 18 -18z" fill="#8f8f98"/>${[0,1,2,3,4,5].map(k=>`<path d="M152 ${96+k*20} h74" stroke="#77777f" stroke-width="7"/>`).join('')}`,
 organic:`<rect x="100" y="50" width="180" height="180" fill="#7a4426"/><g transform="translate(190 140)">${[0,1,2,3,4,5].map(k=>{const a=k*Math.PI/3,b=a+Math.PI/3;return `<path d="M${(Math.cos(a)*40).toFixed(1)} ${(Math.sin(a)*40).toFixed(1)} L${(Math.cos(b)*40).toFixed(1)} ${(Math.sin(b)*40).toFixed(1)}" ${KS('#fff',6)}/><circle cx="${(Math.cos(a)*40).toFixed(1)}" cy="${(Math.sin(a)*40).toFixed(1)}" r="10" fill="${k%2?'#7cc4ff':'#ffd23a'}" ${KS('#111',2)}/>`}).join('')}</g>`};
const PAN_TOOL={surveyor3:['scoop','TOOL: scoop arm'],retro:['','TOOL: 100 mirrors'],lrv:['','TOOL: electric wheels'],sojourner:['apxs','TOOL: APXS sensor'],spirit:['rat','TOOL: rock grinder'],opportunity:['rat','TOOL: rock grinder'],curiosity:['drill','TOOL: laser and drill'],perseverance:['drill','TOOL: coring drill'],ingenuity:['','TOOL: spinning rotors'],insight:['','TOOL: seismometer'],voyager1:['','TOOL: cameras']};
/* the three panels for a stop */
function comicPanels(type,id,s,world,status,name){
  const grd=world==='galaxy'?'space':world,txt=(s.t+' '+s.x).toLowerCase(),has=re=>re.test(txt);
  const dest=world==='moon'?'the Moon':world==='mars'?'Mars':'Jupiter',pk=world==='galaxy'?'jupiter':world;
  if(type==='build')return [
    `${cBg('lab')}${cPut(id,200,206,.8)}${cPerson(60,206,'#7cc4ff')}${cPerson(345,206,'#ffd23a')}${cBub(100,14,'Let’s build it!',70,140)}${cBurst(318,56,'CLANK!','#ffd23a',36,8)}`,
    `${cBg('lab')}<rect x="80" y="196" width="240" height="14" fill="#888" ${CK}/><g class="cp-shake">${cPut(id,200,196,.8)}</g>${cBurst(90,60,'RATTLE!','#ff8a5c',36,-10)}${cTag(190,20,'TEST: shake it like a launch')}`,
    `${cBg('lab')}${cPut(id,200,206,.85,{cls:'cp-bob'})}<g class="cp-spark"><path d="M70 60 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z" fill="#ffd23a" ${CK}/><path d="M330 90 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5z" fill="#ffd23a" ${CK}/></g>${cBub(210,14,'Ready for space!',190,96)}`];
  if(type==='launch')return [
    `${cBg('earth')}<path d="M262 222 V60 M262 80 H226 M262 130 H226" ${KS('#c33',8)}/>${cRocket(200,222)}${cBub(110,30,'3… 2… 1…',170,110,12)}`,
    `${cBg('earth')}<g class="cp-rise">${cRocket(200,150,1)}</g><g opacity=".9"><circle cx="150" cy="238" r="30" fill="#eee" ${CK}/><circle cx="250" cy="240" r="34" fill="#eee" ${CK}/><circle cx="200" cy="246" r="28" fill="#fff" ${CK}/></g>${cBurst(312,60,'WHOOOSH!','#ffd23a',40,10)}`,
    `${cBg('space')}${cPlanet(330,120,62,pk)}${cSpeed(110,140)}<g class="cp-fly">${cPut(id,130,160,.45)}</g>${cBub(150,16,`Next stop: ${dest}!`,130,100)}`];
  if(type==='land'){
    const air=['sojourner','spirit','opportunity'].includes(id),crane=['curiosity','perseverance'].includes(id),lm=['retro','lrv'].includes(id),heli=id==='ingenuity';
    const p1=world==='mars'?`${cBg('mars')}<g class="cp-fall"><path d="M170 30 Q200 140 230 30" fill="#ff8a1e" opacity=".85"/><path d="M178 70 Q200 0 222 70Z" fill="#ffd23a" ${CK}/><path d="M168 80 Q200 50 232 80 L222 100 H178Z" fill="#cc8a5a" ${CK}/></g>${cBurst(320,170,'FWOOSH!','#ff8a5c',36,8)}${cTag(14,14,'Hot! Entering the air of Mars')}`
      :`${cBg('moon')}<g class="cp-fall">${lm?`<rect x="168" y="70" width="64" height="40" fill="#e5b84a" ${CK}/><path d="M176 50 h48 l8 20 h-64z" fill="#c9c9cf" ${CK}/><path d="M172 110 L150 150 M228 110 L250 150" ${KS('#111',4)}/>`:cPut(id,200,130,.6)}<path d="M186 ${lm?112:132} Q200 175 214 ${lm?112:132}" fill="#ffd23a" opacity=".9"/></g>${cBurst(320,60,'HISSS!','#9ff6ff',34,8)}${cTag(14,14,'Rocket engines slow it down')}`;
    let p2;
    if(air)p2=`${cBg('mars')}<g class="cp-bounce">${[[-26,-10],[0,-30],[26,-10],[-14,12],[14,12],[0,-4]].map(([dx,dy])=>`<circle cx="${200+dx}" cy="${120+dy}" r="24" fill="#f4f4f4" ${CK}/>`).join('')}</g>${cBurst(90,60,'BOING!','#ffd23a',34,-10)}${cBurst(320,80,'BOING!','#ffd23a',28,10)}${cTag(14,224,'Airbags! It bounced to a stop')}`;
    else if(crane)p2=`${cBg('mars')}<g class="cp-bob"><rect x="140" y="30" width="120" height="26" fill="#bbb" ${CK}/><path d="M146 56 l-10 18 M254 56 l10 18" ${KS('#111',4)}/><path d="M136 74 q-6 26 0 40 M264 74 q6 26 0 40" stroke="#ff8a1e" stroke-width="6" fill="none"/><path d="M170 56 L176 120 M230 56 L224 120 M200 56 V120" stroke="#111" stroke-width="2"/></g>${cPut(id,200,196,.6)}${cTag(14,14,'SKY CRANE: lowered on ropes!')}`;
    else if(heli)p2=`${cBg('mars')}<g class="cp-bob">${cPut('perseverance',200,190,.62)}<g transform="translate(200 186) scale(.42)">${cDev('ingenuity')}</g></g>${cBub(300,20,'Hitching a ride!',250,130,12)}`;
    else if(lm)p2=`${cBg('moon')}<rect x="150" y="120" width="100" height="56" fill="#e5b84a" ${CK}/><path d="M160 92 h80 l10 28 h-100z" fill="#c9c9cf" ${CK}/><path d="M154 176 L126 204 M246 176 L274 204" ${KS('#111',5)}/>${cBurst(80,70,'THUD!','#ffd23a',32,-8)}${cTag(14,14,'Inside the lunar module')}`;
    else p2=`${cBg(grd)}<g class="cp-fall2">${cPut(id,200,170,.7)}<path d="M180 172 Q200 214 220 172" fill="#ffd23a" opacity=".85"/></g>${cBurst(84,70,'THUD!','#ffd23a',32,-8)}`;
    return [p1,p2,`${cBg(grd)}${cPut(id,200,210,.8)}${cBurst(200,64,'TOUCHDOWN!','#7dff9a',48,-4)}`]}
  if(type==='end'){const live=status==='active'||status==='passive';
    return [
      live?`${cBg(grd)}${cPut(id,200,210,.8,{cls:'cp-bob'})}${cBurst(90,60,'STILL GOING!','#7dff9a',36,-8)}`
        :`${cBg(grd)}<g transform="rotate(${world==='galaxy'?0:6} 200 210)">${cPut(id,200,210,.8)}</g><path d="M90 206 Q200 176 310 206" fill="${world==='mars'?'#c9693f':'#a9a9b2'}" opacity=".85"/>${world==='mars'?`<g class="cp-wind"><path d="M20 80 H160 M40 110 H200 M10 140 H150" stroke="#9b4a26" stroke-width="5" stroke-linecap="round" opacity=".6"/></g>`:''}<text x="270" y="80" class="cp-zz">Z z z</text>`,
      `${cBg('earth')}<g transform="translate(200 222)"><path d="M-10 0 L0 -60 L10 0Z" fill="#bbb" ${CK}/><path d="M-60 -70 Q0 -20 60 -70Z" fill="#f4f4f4" ${CK}/></g><g class="cp-sig"><path d="M240 120 q20 -20 0 -40 M256 128 q32 -32 0 -56 M272 136 q44 -44 0 -72" fill="none" stroke="#3a8be0" stroke-width="5" stroke-linecap="round"/></g>${cBub(120,16,live?'Still talking to us!':'Hello? Are you there?',190,120,14)}`,
      `${cBg('space')}${cPut(id,200,190,.6,{cls:live?'cp-bob':''})}${cBub(200,16,live?`Keep exploring, ${name}!`:`Thank you, ${name}!`,200,120,18)}<path d="M330 200 c-10 -14 -30 -4 -20 10 l20 20 20 -20 c10 -14 -10 -24 -20 -10z" fill="#ff6b8a" ${CK}/>`]}
  /* discover: show the machine doing its job */
  const [tl,tlab]=PAN_TOOL[id]||['',''];let a,b;
  if(has(/stuck|sand trap|soft sand|dune/)){a=`${cBg(grd)}<g transform="translate(0 18)">${cPut(id,200,210,.8,{cls:'cp-shake'})}</g><path d="M60 214 Q200 186 340 214 V260 H60Z" fill="#e9a36a" ${CK}/>${cBurst(90,60,'STUCK!','#ff8a5c',34,-8)}`;b=`${cBg('lab')}${cPerson(110,206,'#7cc4ff')}<rect x="170" y="160" width="190" height="44" fill="#e9c08a" ${CK}/>${cPut(id,265,170,.5)}${cBub(130,16,'Let’s test it on Earth!',110,130,16)}`}
  else if(has(/dust storm|global dust|dust/)&&world==='mars'&&id!=='insight'){a=`<rect width="400" height="260" fill="#b9693c"/><g class="cp-wind"><path d="M0 60 H260 M40 100 H400 M0 140 H300 M60 180 H380" stroke="#e9a36a" stroke-width="8" stroke-linecap="round" opacity=".7"/></g>${cPut(id,200,226,.7)}${cBurst(300,50,'WHOOSH!','#ffd23a',34,8)}`;b=`${cBg('mars')}${cPut(id,200,210,.8)}${cBub(200,16,has(/clean/)?'The wind blew my panels clean!':'Dusty panels = less power…',200,130,18)}`}
  else if(id==='retro'){a=`${cBg('space')}${cPlanet(60,200,70,'earth')}${cPlanet(340,70,40,'moon')}<path d="M90 160 L330 80" stroke="#ff3a3a" stroke-width="5" class="cp-laser"/>${cBurst(250,190,'PING!','#ffd23a',32,6)}${cTag(14,14,tlab)}`;b=`${cBg('space')}${cPlanet(60,140,44,'earth')}${cPlanet(340,140,24,'moon')}<path d="M110 140 H310" ${KS('#ffd23a',4)} stroke-dasharray="10 8"/>${cBub(210,20,'The Moon drifts 3.8 cm a year!',210,120,16)}`}
  else if(id==='voyager1'){const sat=has(/saturn|titan/),rec=has(/record|golden/),dot=has(/blue dot|pale|portrait|earth/),out=has(/interstellar|heliopause|bubble|beyond|edge/);
    a=`${cBg('space')}${rec?`<circle cx="200" cy="130" r="80" fill="#e5b84a" ${CK}/><circle cx="200" cy="130" r="20" fill="#fff3c4" ${CK}/><circle cx="200" cy="130" r="56" fill="none" stroke="#b28a2a" stroke-width="2"/>`:dot?`${cPut(id,120,190,.6)}<path d="M180 120 L380 60 L380 200Z" fill="#fff" opacity=".12"/><circle cx="340" cy="120" r="3" fill="#7cc4ff"/>`:out?`<path d="M260 0 Q200 130 260 260" fill="none" stroke="#7cc4ff" stroke-width="6" stroke-dasharray="14 10"/>${cPut(id,170,170,.55,{cls:'cp-fly'})}`:`${cPlanet(300,120,80,sat?'saturn':'jupiter')}${cPut(id,90,190,.5,{cls:'cp-fly'})}`}${cBurst(90,50,rec?'HELLO!':out?'BEYOND!':'CLICK!','#ffd23a',32,-8)}${cTag(14,224,rec?'A message from Earth':tlab)}`;
    b=`${cBg('space')}${rec?cBub(200,40,'Music, voices and pictures of Earth!',200,160,18)+cPut(id,200,230,.5):dot?`<circle cx="200" cy="130" r="5" fill="#7cc4ff"/><circle cx="200" cy="130" r="20" fill="none" stroke="#fff" stroke-width="2"/>${cBub(200,24,'That tiny dot is Earth!',200,108,16)}`:out?cBub(200,40,'Now it flies between the stars!',200,170,16)+cPut(id,200,230,.5):`${cPlanet(200,150,sat?60:90,sat?'saturn':'jupiter')}${cBub(200,10,sat?'Look at those rings!':'A storm bigger than Earth!',230,70,16)}`}`}
  else if(id==='ingenuity'){a=`${cBg('mars')}<g class="cp-bob">${cPut(id,200,150,.85)}</g><ellipse cx="200" cy="214" rx="50" ry="8" fill="#9b4a26" opacity=".5"/>${cBurst(318,56,'WHIRRR!','#ffd23a',36,8)}${cTag(14,224,tlab)}`;b=`<rect width="400" height="260" fill="#d97b47"/><circle cx="90" cy="70" r="30" fill="#c9693f" ${CK}/><circle cx="300" cy="190" r="22" fill="#c9693f" ${CK}/><g transform="translate(220 120) scale(.3)">${cDev('perseverance')}</g><rect x="14" y="14" width="372" height="232" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="18 10"/>${cBub(130,24,'A view from the air!',200,110,14)}`}
  else if(id==='insight'){const mole=has(/mole|heat|hammer/);a=`${cBg('mars')}${cPut(id,160,206,.65,{dome:!mole})}${mole?`<g class="cp-shake"><rect x="290" y="150" width="14" height="56" fill="#bbb" ${CK}/></g>${cBurst(320,70,'TAP TAP!','#ffd23a',34,8)}`:`<g class="cp-sig2"><path d="M60 230 q20 -12 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#7a2e10" stroke-width="4"/></g>${cBurst(320,70,'RUMBLE!','#ffd23a',34,8)}`}${cTag(14,14,mole?'TOOL: the “mole” heat probe':tlab)}`;
    b=`${cBg('space')}<g transform="translate(200 140)"><circle r="100" fill="#d9703e" ${CK}/><path d="M0 0 L100 0 A100 100 0 0 0 0 -100Z" fill="#111"/><circle r="94" fill="none" stroke="#e9a36a" stroke-width="10" clip-path="none"/><path d="M0 0 L96 0 A96 96 0 0 0 0 -96Z" fill="#c9693f"/><path d="M0 0 L60 0 A60 60 0 0 0 0 -60Z" fill="#ff9a3c"/><path d="M0 0 L30 0 A30 30 0 0 0 0 -30Z" fill="#ffd23a"/></g><text x="300" y="60" class="cp-lab">crust</text><text x="268" y="96" class="cp-lab">mantle</text><text x="226" y="128" class="cp-lab">core</text>${cBub(110,16,'Now we know what is inside!',140,120,14)}`}
  else{/* rovers, landers, buggy */
    const laser=id==='curiosity'&&!has(/drill/),oxy=id==='perseverance'&&has(/oxygen|moxie/),rock=`<path d="M300 210 l14 -34 h30 l16 34z" fill="#8a5a3c" ${CK}/>`;
    if(id==='lrv'){a=`${cBg('moon')}<g class="cp-drive">${cPut(id,180,206,.95)}</g><g opacity=".8"><circle cx="70" cy="196" r="14" fill="#ddd"/><circle cx="46" cy="186" r="10" fill="#ddd"/><circle cx="292" cy="198" r="12" fill="#ddd"/></g>${cBurst(320,60,'VROOM!','#ffd23a',36,8)}${cTag(14,14,tlab)}`;
      b=has(/tape|fender|repair/)?`${cBg('moon')}${cPut(id,200,210,.85,{crew:false})}<rect x="122" y="160" width="40" height="18" fill="#bbb" transform="rotate(-12 142 169)" ${CK}/>${cBub(200,16,'Fixed with maps and tape!',150,140,14)}`:`${cBg('moon')}${cAstro(150,170,1.1)}<path d="M170 180 l50 -10" ${KS('#111',4)}/><circle cx="238" cy="176" r="18" fill="#8a8a92" ${CK}/>${cBub(260,20,'Rock samples for Earth!',220,140,14)}`}
    else if(oxy){a=`${cBg('mars')}${cPut(id,180,210,.75)}<g class="cp-up"><circle cx="300" cy="110" r="18" fill="#9ff6ff" ${CK}/><text x="300" y="117" text-anchor="middle" class="cp-lab" fill="#111">O₂</text><circle cx="330" cy="70" r="12" fill="#9ff6ff" ${CK}/></g>${cBurst(90,60,'PSSHH!','#9ff6ff',32,-8)}${cTag(14,224,'TOOL: MOXIE oxygen maker')}`;b=`${cBg('space')}${cAstro(200,170,1.6)}${cBub(200,14,'Air for future explorers!',200,70,16)}`}
    else{a=`${cBg(grd)}${cPut(id,170,210,id==='sojourner'?1.25:.75,{tool:laser?'':tl})}${rock}${laser?`<path d="M190 48 L320 186" stroke="#ff3a3a" stroke-width="5" class="cp-laser"/>`:''}${cBurst(316,60,laser?'ZAP!':id==='surveyor3'?'SCOOP!':['spirit','opportunity'].includes(id)?'GRIIIND!':id==='sojourner'?'BEEP!':'BRRRR!','#ffd23a',36,8)}${cTag(14,14,laser?'TOOL: ChemCam laser':tlab)}`;
      const clue=cMag(CLUE[id==='opportunity'?'berries':id==='sojourner'?'elements':id==='spirit'?'silica':id==='surveyor3'?'boot':id==='curiosity'&&has(/organic/)?'organic':'layers']);
      const say=id==='surveyor3'?(has(/visit|apollo 12|astronaut/)?'Visitors from Earth!':'Firm ground. Safe to land!'):id==='sojourner'?'What is this rock made of?':id==='opportunity'?'“Blueberries” formed in water!':id==='spirit'?'A clue about water!':id==='perseverance'?(has(/sample|tube|core/)?'Sealed for Earth!':'An old river delta!'):id==='curiosity'?(has(/organic/)?'Building blocks of life!':'An ancient lake was here!'):'A new discovery!';
      b=`${cBg(grd)}${id==='surveyor3'&&/Visitors/.test(say)?cPut(id,250,210,.7)+cAstro(120,160,1.1):id==='perseverance'&&/Sealed/.test(say)?`<g transform="rotate(-20 200 140)"><rect x="150" y="120" width="110" height="34" rx="16" fill="#e8e8ec" ${CK}/><rect x="244" y="116" width="30" height="42" rx="6" fill="#9aa0aa" ${CK}/></g>`:clue}${cBub(200,6,say,150,62,18)}`}}
  const c=`${cBg('control')}${[40,155,270].map((x,k)=>`<g class="cp-blink" style="animation-delay:${k*.3}s"><path d="M${x+10} ${70-k*6} L${x+30} ${60} L${x+50} ${74-k*4} L${x+82} ${44}" fill="none" stroke="#7dff9a" stroke-width="3"/></g>`).join('')}${cPerson(110,210,'#7cc4ff',1)}${cPerson(200,210,'#ffd23a',1)}${cPerson(290,210,'#ff8a5c',1)}${cBurst(200,124,'WOW!','#7dff9a',34,-6)}`;
  return [a,b,c];
}
const COMIC_DEFS=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><clipPath id="cpMag"><circle cx="190" cy="140" r="86"/></clipPath><pattern id="cpDots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.6" fill="#000"/></pattern></defs></svg>`;
function buildComic(type,s,i){
  const box=gq('#gmComic');if(!box)return;const m=byId[G.id];
  let P=comicPanels(type,G.id,s,G.world,m.status,m.name);
  if(FUN&&Math.random()<.35){const k=type==='end'?1:Math.random()<.5?0:1;P[k]+=Math.random()<.5?cUfo(352,44):`${cUfo(350,40)}<g class="cp-up">${cCow(350,100)}</g>`;G.cine.tag='ufo'}
  box.innerHTML=COMIC_DEFS+`<div class="cp-page">${P.map((p,k)=>`<div class="cp-panel${k?'':' on cur'}" style="--r:${[-1.2,.8,-.6][k]}deg"><svg viewBox="0 0 400 260" role="img" aria-label="Comic panel ${k+1}">${p}</svg></div>`).join('')}</div>`;
  box.hidden=false;box.dataset.n=1;
}
function comicReveal(k,total){const box=gq('#gmComic');if(!box||box.hidden)return;const want=Math.min(3,1+Math.floor(k*3/Math.max(1,total)));const ps=box.querySelectorAll('.cp-panel');
  ps.forEach((p,j)=>{if(j<want&&!p.classList.contains('on')){p.classList.add('on');SFX.whoosh()}p.classList.toggle('cur',j===want-1)})}
function clearComic(){const box=gq('#gmComic');if(box){box.hidden=true;box.innerHTML=''}}
/* ---------- extra scenes for the scroll story ---------- */
function cAsk(world){const pk=world==='galaxy'?'jupiter':world;
  return `${cBg('space')}${cPlanet(300,80,58,pk)}<path d="M0 220 Q200 180 400 214 V260 H0Z" fill="#2c3a5e" ${CK}/><g transform="translate(140 196)"><path d="M0 0 L-16 34 M0 0 L16 34 M0 0 V34" ${KS('#111',3)}/><rect x="-10" y="-40" width="74" height="18" rx="6" transform="rotate(-24)" fill="#ddd" ${CK}/></g>${cPerson(96,232,'#7cc4ff')}<g class="cp-up">${cBub(210,22,'?',120,150,4)}</g>`}
function cBlueprint(id,name){return `<rect width="400" height="260" fill="#1f56a8"/><path d="${[...Array(20)].map((_,i)=>`M${i*20} 0 V260`).join(' ')} ${[...Array(13)].map((_,i)=>`M0 ${i*20} H400`).join(' ')}" stroke="#4f86d6" stroke-width="1"/><g opacity=".96" class="cp-bob">${cPut(id,200,214,.8)}</g><path d="M90 236 H310 M90 230 V242 M310 230 V242" ${KS('#fff',2)}/><g>${cTag(14,14,'PLAN: '+name.toUpperCase())}</g><text x="200" y="254" text-anchor="middle" class="cp-lab" style="font-size:12px">NOT TO SCALE</text>`}
function cSizeObj(k,x){if(k==='car')return `<g transform="translate(${x} 214)"><path d="M-70 -20 L-56 -50 H40 L66 -20 V0 H-70Z" fill="#e24a3b" ${CK}/><rect x="-44" y="-44" width="36" height="22" fill="#9fd8ff" ${CK}/><rect x="0" y="-44" width="34" height="22" fill="#9fd8ff" ${CK}/>${cWheel(-40,0,13)+cWheel(40,0,13)}</g>`;
  if(k==='cart')return `<g transform="translate(${x} 214)"><path d="M-50 -76 H50" ${KS('#111',4)}/><path d="M-44 -76 V-30 M44 -76 V-30" ${KS('#111',3)}/><rect x="-54" y="-32" width="108" height="22" fill="#fff" ${CK}/><rect x="-30" y="-50" width="40" height="18" fill="#7cc4ff" ${CK}/>${cWheel(-36,-4,11)+cWheel(36,-4,11)}</g>`;
  if(k==='oven')return `<g transform="translate(${x} 214)"><rect x="-48" y="-56" width="96" height="56" fill="#ddd" ${CK}/><rect x="-40" y="-48" width="58" height="40" fill="#333" ${CK}/><circle cx="34" cy="-36" r="5" fill="#777"/><circle cx="34" cy="-20" r="5" fill="#777"/></g>`;
  return `<g transform="translate(${x} 214)"><rect x="-36" y="-34" width="72" height="34" fill="#9fdcff" ${CK}/><path d="M-12 -34 Q0 -56 12 -34" fill="#fff" ${CK}/></g>`}
function cSize(id,k,label){return `${cBg('earth')}${cPut(id,130,214,k==='oven'||k==='box'?1.1:.82)}${cSizeObj(k,300)}<text x="215" y="140" text-anchor="middle" class="cp-word" style="font-size:40px">=</text>${cTag(14,14,'About as big as '+label)}`}
function cPart(id,world,ic,name,k){const bgk=[world==='galaxy'?'space':world,'lab','space','earth'][k%4];
  return `${cBg(bgk)}${cPut(id,120,214,.72)}<path d="M150 140 L230 120" ${KS('#ffd23a',4)} stroke-dasharray="8 6"/><g class="cp-pulse" style="transform-origin:300px 116px"><circle cx="300" cy="116" r="80" fill="#fff" ${KS('#111',6)}/><text x="300" y="140" text-anchor="middle" style="font-size:72px">${ic}</text></g>${cTag(Math.max(8,300-name.length*4.1-11),206,name)}<g><circle cx="34" cy="34" r="22" fill="#ffd23a" ${CK}/><text x="34" y="43" text-anchor="middle" class="cp-word" style="font-size:24px">${k+1}</text></g>`}
/* ---------- 2D animated demos: each part of each machine, doing its job ---------- */
const lc=t=>t.charAt(0).toLowerCase()+t.slice(1);
const mv=(dx,dy,d=2,dl=0)=>`class="an-move" style="--dx:${dx}px;--dy:${dy}px;--d:${d}s;--dl:${dl}s"`;
const pop=dl=>`class="an-pop" style="--dl:${dl}s"`;
const AN={
 solar:(id,w)=>`${cBg(w)}<g class="an-spin" style="--d:12s"><circle cx="62" cy="58" r="30" fill="#ffd23a" ${CK}/>${[...Array(8)].map((_,k)=>{const a=k*Math.PI/4;return `<path d="M${62+Math.cos(a)*38} ${58+Math.sin(a)*38} L${62+Math.cos(a)*52} ${58+Math.sin(a)*52}" ${KS('#ffb000',5)}/>`}).join('')}</g>
  ${[0,1,2].map(k=>`<path d="M${92+k*6} ${72+k*10} L${206+k*20} ${132+k*6}" stroke="#ffd23a" stroke-width="5" class="an-flow" fill="none"/>`).join('')}${cPut(id,230,214,.78)}
  <g transform="translate(330 40)"><rect width="44" height="76" rx="6" fill="#fff" ${CK}/><rect x="14" y="-8" width="16" height="8" fill="#111"/><rect class="an-fill" x="6" y="8" width="32" height="62" fill="#7dff9a"/><path d="M26 22 l-10 20 h10 l-6 18 16 -24 h-10 l6 -14z" fill="#111"/></g>${cTag(14,224,'Sunlight → electricity')}`,
 nuclear:(id,w)=>`${cBg(w)}${cPut(id,190,214,.85)}<g class="an-pulse"><circle cx="${id==='voyager1'?72:118}" cy="${id==='voyager1'?150:146}" r="22" fill="#ff8a1e" opacity=".55"/></g>
  ${[0,1,2].map(k=>`<path d="M${100+k*14} 130 q-8 -12 0 -24 t0 -24" fill="none" stroke="#ff8a1e" stroke-width="4" ${mv(0,-30,1.6,k*.4).replace('class="an-move"','class="an-move an-fade"')}/>`).join('')}
  <g transform="translate(300 30)"><circle cx="20" cy="20" r="18" fill="#ffd23a" ${CK} class="an-day"/><path d="M60 6 a16 16 0 1 0 14 28 a13 13 0 1 1 -14 -28z" fill="#c9d6ff" ${CK} class="an-night"/></g>${cTag(14,14,'Heat → electricity, day and night')}`,
 battery:(id,w)=>`${cBg(w)}${cPut(id,150,214,id==='ingenuity'?1.1:.8)}<g transform="translate(270 60)"><rect width="90" height="150" rx="12" fill="#fff" ${CK}/><rect x="30" y="-12" width="30" height="12" fill="#111"/><rect class="an-fill" x="10" y="10" width="70" height="130" rx="6" fill="#7dff9a"/><path d="M50 40 l-22 44 h20 l-12 40 34 -52 h-20 l12 -32z" fill="#111"/></g>${cTag(14,14,'Charging up…')}`,
 camera:(id,w)=>`${cBg(w)}${cPut(id,140,214,id==='sojourner'?1.2:.8)}<g class="an-flash"><circle cx="${id==='voyager1'?140:162}" cy="${id==='voyager1'?150:id==='sojourner'?168:76}" r="28" fill="#fff"/></g>
  <g ${pop(.3)}><rect x="240" y="40" width="140" height="104" fill="#fff" ${CK} transform="rotate(5 310 92)"/><rect x="250" y="50" width="120" height="70" fill="${w==='mars'?'#e9a36a':w==='moon'?'#bbb':'#151a3d'}" transform="rotate(5 310 92)"/><path d="M252 112 l30 -26 24 18 26 -30 38 38" fill="none" ${KS('#111',3)} transform="rotate(5 310 92)"/></g>${cBurst(310,200,'CLICK!','#ffd23a',30,6)}`,
 laser:(id,w)=>`${cBg(w)}${cPut(id,130,214,.8)}<path d="M150 64 L322 184" stroke="#ff3a3a" stroke-width="5" class="an-flow"/><path d="M300 210 l14 -34 h30 l16 34z" fill="#8a5a3c" ${CK}/>
  ${[[-20,-26],[16,-30],[26,-6],[-26,0],[4,-36]].map(([x,y],k)=>`<circle cx="324" cy="186" r="5" fill="${k%2?'#ffd23a':'#fff'}" ${mv(x,y,.8,k*.15)}/>`).join('')}
  <g ${pop(.8)}><rect x="210" y="16" width="176" height="44" rx="8" fill="#111"/>${['#7a3cff','#3a8be0','#3ad07a','#ffd23a','#ff8a1e','#ff3a3a'].map((c,k)=>`<rect x="${220+k*26}" y="26" width="22" height="24" fill="${c}"/>`).join('')}</g>${cTag(14,224,'Zap! The light shows what the rock is made of')}`,
 drill:(id,w)=>`${cBg(w)}<path d="M0 170 H400 V260 H0Z" fill="#8a5a3c" ${CK}/><path d="M0 190 H400 M0 214 H400 M0 238 H400" stroke="#a8683f" stroke-width="6"/>
  <g class="an-bore"><rect x="180" y="10" width="40" height="70" fill="#9aa0aa" ${CK}/><g class="an-shake"><path d="M190 80 h20 v80 l-10 14 -10 -14z" fill="#ddd" ${CK}/><path d="M190 96 l20 -10 M190 116 l20 -10 M190 136 l20 -10" ${KS('#777',3)}/></g></g>
  ${[[-40,-30],[40,-34],[-60,-10],[60,-14],[-20,-44],[24,-46]].map(([x,y],k)=>`<circle cx="200" cy="168" r="5" fill="#d9a26a" ${mv(x,y,.9,k*.15)}/>`).join('')}${cTag(14,14,'Brrrr… drilling into the rock')}`,
 lab:(id,w)=>`${cBg('lab')}<g transform="translate(110 70)"><path d="M0 0 H90 L60 40 H30Z" fill="#ddd" ${CK}/><rect x="-10" y="40" width="110" height="90" rx="8" fill="#9aa0aa" ${CK}/><text x="45" y="96" text-anchor="middle" class="cp-word" style="font-size:22px">LAB</text></g>
  ${[0,1,2,3].map(k=>`<circle cx="${148+k*6}" cy="20" r="5" fill="#a8683f" ${mv(0,80,1.2,k*.3)}/>`).join('')}
  <g transform="translate(250 60)"><rect width="130" height="120" rx="8" fill="#111"/>${[0,1,2,3,4].map(k=>`<rect class="an-grow" style="--dl:${k*.25}s" x="${12+k*24}" y="${30+(k*29)%60}" width="16" height="${80-(k*29)%60}" fill="${['#7dff9a','#ffd23a','#7cc4ff','#ff8a5c','#b89cff'][k]}"/>`).join('')}</g>${cTag(14,224,'Heating and testing the rock powder')}`,
 grinder:(id,w)=>`${cBg(w)}<path d="M60 230 Q80 120 200 110 T340 230Z" fill="#8a5a3c" ${CK}/><g ${pop(1)}><circle cx="200" cy="168" r="30" fill="#c9905a" ${CK}/><circle cx="196" cy="164" r="6" fill="#3a3a5a"/><circle cx="210" cy="176" r="5" fill="#3a3a5a"/></g>
  <g class="an-scan" style="--dx:16px"><rect x="170" y="40" width="60" height="60" fill="#e0b040" ${CK}/><g class="an-spin" style="--d:.5s"><circle cx="200" cy="112" r="26" fill="#9aa0aa" ${CK}/><path d="M200 86 V138 M174 112 H226" ${KS('#555',3)}/></g></g>${cTag(14,14,'Grinding away the dusty outside')}`,
 sensor:(id,w)=>`${cBg(w)}<path d="M40 230 Q90 110 220 104 T380 230Z" fill="#8a5a3c" ${CK}/>${[['Si',110,180],['Fe',190,150],['Mg',270,170],['O',330,206]].map(([e,x,y],k)=>`<g ${pop(k*.5)}><circle cx="${x}" cy="${y}" r="20" fill="#fff" ${CK}/><text x="${x}" y="${y+7}" text-anchor="middle" class="cp-bt" style="font-size:18px">${e}</text></g>`).join('')}
  <g class="an-scan" style="--dx:200px;--d:4s"><circle cx="100" cy="150" r="46" fill="rgba(255,255,255,.2)" ${KS('#111',6)}/><path d="M132 182 L166 216" ${KS('#111',12)}/></g>${cTag(14,14,'Looking very closely at the rock')}`,
 wheels:(id,w)=>`${cBg(w)}<g class="an-scroll">${[0,1].map(r=>[40,150,260,340].map((x,k)=>`<path d="M${x+r*400} 212 l12 -18 h18 l10 18z" fill="#8a5a3c" ${CK}/>`).join('')).join('')}</g><g class="an-bob">${cPut(id,200,214,id==='sojourner'?1.3:.8)}</g>${cTag(14,14,'Rolling over rocks without tipping over')}`,
 engine:(id,w)=>`${cBg(w)}<g class="an-descend">${cPut(id,200,206,.8)}<g class="an-flame"><path d="M180 208 Q200 260 220 208Z" fill="#ffd23a" ${CK}/></g></g><g class="an-dust"><ellipse cx="200" cy="214" rx="90" ry="14" fill="#ddd" opacity=".7"/></g>${cTag(14,14,'Engines fire to slow it down')}`,
 legs:(id,w)=>`${cBg(w)}<g class="an-squash">${cPut(id,200,214,.85)}</g>${cBurst(320,60,'BOING!','#ffd23a',30,8)}${cTag(14,14,'Legs squash like springs')}`,
 rotor:(id,w)=>`${cBg(w)}<g class="an-hover">${cPut(id,200,170,1.2)}</g><g class="an-dust"><ellipse cx="200" cy="216" rx="110" ry="12" fill="#9b4a26" opacity=".5"/></g>${cBurst(320,52,'WHIRRR!','#ffd23a',30,8)}${cTag(14,224,'2,400 turns every minute!')}`,
 computer:(id,w)=>`${cBg(w)}<circle cx="120" cy="210" r="16" fill="#9b4a26" ${CK}/><circle cx="260" cy="190" r="20" fill="#9b4a26" ${CK}/><path d="M40 120 Q120 60 190 130 T360 90" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="10 8" class="an-flow"/><path d="M350 80 l20 20 M370 80 l-20 20" ${KS('#ff3a3a',5)}/>
  <g class="an-path" style="--dx:300px;--dy:-30px;--d:4s"><g transform="translate(40 120) scale(.42)">${cDev(id)}</g></g><g transform="translate(286 150)"><rect width="90" height="70" rx="8" fill="#2c3a5e" ${CK}/>${[0,1,2].map(k=>`<circle class="an-flash" style="animation-delay:${k*.3}s" cx="${22+k*24}" cy="35" r="7" fill="#7dff9a"/>`).join('')}</g>${cTag(14,14,'It plans its own flight')}`,
 antenna:(id,w)=>`${cBg('space')}${cPut(id,110,200,.7)}${cPlanet(350,120,34,'earth')}${[0,1,2,3].map(k=>`<path d="M${150+k*40} 80 q14 40 0 80" fill="none" stroke="#7cc4ff" stroke-width="5" class="an-move an-fade" style="--dx:60px;--dy:0px;--d:2s;--dl:${k*.5}s"/>`).join('')}${['1','0','1','1'].map((b,k)=>`<text x="160" y="${190+k*14}" class="cp-lab" ${mv(160,-30,2.4,k*.5)}>${b}</text>`).join('')}${cTag(14,14,'Sending pictures home to Earth')}`,
 cubes:(id,w)=>`${cBg('space')}<g transform="translate(200 130)"><path d="M-90 60 L0 -90 L90 60Z" fill="#9fd8ff" ${KS('#111',4)}/><path d="M-90 60 L0 10 L90 60 M0 10 V-90" ${KS('#5aa0d0',3)}/></g><path d="M20 30 L170 120" stroke="#ff3a3a" stroke-width="6" class="an-flow"/><path d="M180 132 L30 44" stroke="#ff8a8a" stroke-width="6" class="an-flow" style="animation-direction:reverse"/>${cTag(14,224,'Light goes in… and comes straight back')}`,
 earthlaser:(id,w)=>`${cBg('space')}${cPlanet(60,200,60,'earth')}${cPlanet(340,70,40,'moon')}<path d="M100 170 L310 90" stroke="#ff3a3a" stroke-width="3" stroke-dasharray="6 8" opacity=".6"/><circle cx="100" cy="170" r="9" fill="#ff3a3a" class="an-path" style="--dx:210px;--dy:-80px;--d:2.5s"/><g transform="translate(96 150) rotate(-24)"><rect width="40" height="16" rx="4" fill="#ddd" ${CK}/></g>${cTag(14,14,'A telescope fires a laser at the Moon')}`,
 timer:(id,w)=>`${cBg('space')}<g transform="translate(200 130)"><circle r="76" fill="#fff" ${KS('#111',6)}/><rect x="-12" y="-96" width="24" height="16" fill="#111"/><g class="an-spin" style="--d:2.5s;transform-origin:0 0;transform-box:view-box"><path d="M0 0 V-60" ${KS('#ff3a3a',6)}/></g><circle r="6" fill="#111"/></g><text x="200" y="250" text-anchor="middle" class="cp-word" style="font-size:22px;fill:#fff">2.5 seconds there and back</text>`,
 controller:(id,w)=>`${cBg('moon')}<g class="an-drive">${cPut(id,170,214,.95)}</g><g transform="translate(320 200)"><rect x="-26" y="-6" width="52" height="16" rx="6" fill="#555" ${CK}/><g class="an-tilt"><path d="M0 0 V-60" ${KS('#111',8)}/><path d="M-20 -60 H20" ${KS('#111',8)}/></g></g>${cTag(14,14,'Push the T-handle to drive and steer')}`,
 seismo:(id,w)=>`${cBg(w)}${cPut(id,110,214,.5)}<g class="an-shake"><path d="M190 214 Q240 150 290 214Z" fill="#f0f0f0" ${CK}/></g><g transform="translate(250 30)"><rect width="140" height="80" fill="#fff" ${CK}/><path d="M6 40 h20 l6 -26 8 50 8 -40 6 30 6 -14 h70" fill="none" ${KS('#ff3a3a',3)} class="an-draw" style="--len:300"/></g>${[0,1,2].map(k=>`<path d="M${20+k*30} 236 q15 -10 30 0 t30 0 t30 0" fill="none" stroke="#7a2e10" stroke-width="4" class="an-move an-fade" style="--dx:120px;--dy:0px;--d:2s;--dl:${k*.6}s"/>`).join('')}${cTag(14,14,'Feeling a marsquake')}`,
 mole:(id,w)=>`${cBg(w)}<path d="M0 150 H400 V260 H0Z" fill="#c9693f" ${CK}/><g class="an-tap"><rect x="190" y="70" width="20" height="110" fill="#bbb" ${CK}/></g>${cBurst(300,60,'TAP TAP!','#ffd23a',30,8)}${cTag(14,224,'Hammering into the ground to measure heat')}`,
 arm:(id,w)=>`${cBg(w)}${cPut(id,150,214,.8,{dome:false})}<g class="an-place"><path d="M150 186 Q170 156 190 186Z" fill="#f0f0f0" ${CK}/></g>${cTag(14,14,'The arm lifts the tools onto the ground')}`,
 tubes:(id,w)=>`${cBg('lab')}<g transform="translate(110 130) rotate(-12)"><rect x="0" y="-26" width="200" height="52" rx="26" fill="#e8e8ec" ${KS('#111',4)}/><g class="an-slide"><rect x="-120" y="-14" width="90" height="28" rx="6" fill="#8a5a3c" ${CK}/></g><g class="an-cap"><rect x="200" y="-30" width="34" height="60" rx="8" fill="#9aa0aa" ${CK}/></g></g>${cTag(14,224,'Rock core sealed in a clean tube')}`,
 moxie:(id,w)=>`${cBg('mars')}<rect x="150" y="90" width="100" height="90" rx="10" fill="#e0b040" ${CK}/><text x="200" y="142" text-anchor="middle" class="cp-word" style="font-size:18px">MOXIE</text>${[0,1,2].map(k=>`<g ${mv(110,0,2,k*.6)}><circle cx="40" cy="${110+k*24}" r="9" fill="#333"/><circle cx="26" cy="${110+k*24}" r="7" fill="#ff5a5a"/><circle cx="54" cy="${110+k*24}" r="7" fill="#ff5a5a"/></g>`).join('')}${[0,1,2].map(k=>`<g ${mv(40,-90,2.2,k*.7)}><circle cx="280" cy="170" r="12" fill="#9ff6ff" ${CK}/><text x="280" y="175" text-anchor="middle" style="font:800 11px sans-serif">O₂</text></g>`).join('')}${cTag(14,14,'Mars air in → oxygen out')}`,
 record:(id,w)=>`${cBg('space')}<g class="an-spin" style="--d:3s"><circle cx="160" cy="130" r="90" fill="#e5b84a" ${CK}/><circle cx="160" cy="130" r="64" fill="none" stroke="#b28a2a" stroke-width="2"/><circle cx="160" cy="130" r="42" fill="none" stroke="#b28a2a" stroke-width="2"/><circle cx="160" cy="130" r="18" fill="#fff3c4" ${CK}/></g>${['♪','♫','♪'].map((n,k)=>`<text x="270" y="200" class="cp-word" style="font-size:36px;fill:#ffd23a" ${mv(40,-140,3,k)}>${n}</text>`).join('')}${cTag(14,224,'Music and greetings from Earth')}`,
 scoop:(id,w)=>`${cBg(w)}${cPut(id,160,214,.85,{tool:'scoop'})}${[[30,-30],[50,-20],[20,-44]].map(([x,y],k)=>`<circle cx="245" cy="210" r="5" fill="#999" ${mv(x,y,1,k*.2)}/>`).join('')}${cTag(14,14,'Digging a trench in the soil')}`
};
const DEMO_MAP={surveyor3:['camera','scoop','engine','legs'],retro:['cubes','earthlaser','timer'],lrv:['battery','wheels','controller','antenna'],sojourner:['solar','sensor','camera','wheels'],
 spirit:['solar','grinder','sensor','camera'],opportunity:['solar','grinder','sensor','camera'],insight:['seismo','mole','arm','solar'],ingenuity:['rotor','battery','camera','computer'],
 curiosity:['nuclear','laser','drill','lab'],perseverance:['drill','tubes','moxie','camera'],voyager1:['antenna','nuclear','camera','record']};
function demoScenes(id){const m=byId[id],E=EQUIP[id],J=GJ[id]||{world:m.world==='deep'?'galaxy':m.world},w=J.world==='galaxy'?'space':J.world;
  const S=[{svg:`${cBg(w)}<g class="an-enter">${cPut(id,200,214,id==='sojourner'||id==='ingenuity'?1.2:.85)}</g>${cBub(200,16,`Hi! I’m ${m.name}!`,200,100,16)}`,t:`This is ${m.name}. Its job: ${lc(E.goal)} Let’s see how it works!`}];
  E.parts.forEach(([ic,n,tx],k)=>{const f=AN[(DEMO_MAP[id]||[])[k]];if(f)S.push({svg:f(id,w),t:`${n}: ${tx}`})});
  S.push({svg:comicPanels('discover',id,{t:'',x:id==='curiosity'?E.wins[1]:''},J.world,m.status,m.name)[1],t:`And that is how ${m.name} helped us learn: ${lc(E.wins[id==='curiosity'?1:0])}.`});
  return S}
/* the player inside the device page */
const DM={tok:0,T:0,i:0,S:[],force:false,paused:false};
function demoMount(id,force){const box=$('#demo');if(!box)return;DM.S=demoScenes(id);DM.force=!!force;DM.paused=false;
  box.innerHTML=COMIC_DEFS+`<div class="dm-stage">${DM.S.map((s,k)=>`<div class="dm-pan" data-k="${k}"><svg viewBox="0 0 400 260" role="img" aria-label="Animation ${k+1} of ${DM.S.length}">${s.svg}</svg></div>`).join('')}</div>
   <div class="dm-cap"><p id="dmText" aria-live="polite"></p><div class="dm-bar"><i id="dmProg"></i></div><div class="dm-ctl"><button type="button" class="btn ghost" id="dmBack" aria-label="Previous">◀</button><button type="button" class="btn ghost" id="dmPause">⏸ Pause</button><button type="button" class="btn" id="dmNext">Next ▶</button><span class="dm-n" id="dmN"></span></div></div>`;
  $('#dmNext').addEventListener('click',()=>{DM.paused=false;demoGo(DM.i>=DM.S.length-1?0:DM.i+1)});$('#dmBack').addEventListener('click',()=>{DM.paused=false;demoGo(DM.i-1)});
  $('#dmPause').addEventListener('click',()=>{if(DM.paused){DM.paused=false;demoGo(DM.i)}else{DM.paused=true;DM.tok++;clearTimeout(DM.T);VO.stop();$('#dmPause').textContent='▶ Play';box.classList.add('paused')}});
  demoGo(0)}
function demoGo(i){const box=$('#demo');if(!box||!DM.S.length)return;if(i<0)i=0;if(i>=DM.S.length)i=0;
  DM.i=i;const my=++DM.tok;clearTimeout(DM.T);VO.stop();box.classList.toggle('paused',DM.paused);$('#dmPause').textContent=DM.paused?'▶ Play':'⏸ Pause';
  $$('#demo .dm-pan').forEach(p=>p.classList.toggle('on',+p.dataset.k===i));const s=DM.S[i];$('#dmText').textContent=s.t;$('#dmN').textContent=`${i+1} / ${DM.S.length}`;$('#dmBack').disabled=i===0;$('#dmNext').textContent=i===DM.S.length-1?'↺ Replay':'Next ▶';
  const pr=$('#dmProg'),est=Math.max(1800,s.t.length*62+700);pr.style.animation='none';void pr.offsetWidth;if(!DM.paused&&i<DM.S.length)pr.style.animation=`cpProg ${est}ms linear forwards`;
  if(DM.paused)return;
  VO.line(s.t,()=>{if(my!==DM.tok||DM.paused)return;if(i<DM.S.length-1)DM.T=setTimeout(()=>{if(my===DM.tok)demoGo(i+1)},900);else{DM.paused=true;box.classList.add('paused');$('#dmPause').textContent='▶ Play'}},DM.force)}
function demoStop(){DM.tok++;clearTimeout(DM.T);DM.S=[]}
/* ---------- beginner tour of the homepage, led by Rivet ---------- */
const RIVET_SVG=`<svg viewBox="0 0 40 46" aria-hidden="true"><line x1="22" y1="4" x2="22" y2="11" stroke="#c9cdd5" stroke-width="1.6"/><circle cx="22" cy="3.5" r="2.6" fill="#ff8f70"/><rect x="11" y="10" width="22" height="14" rx="4" fill="#e9ecf2"/><rect x="14" y="13" width="16" height="8" rx="3" fill="#141821"/><circle cx="19" cy="17" r="1.8" fill="#7cf0ff"/><circle cx="25.5" cy="17" r="1.8" fill="#7cf0ff"/><rect x="9" y="25" width="26" height="12" rx="3" fill="#f7c548"/><rect x="18" y="28" width="8" height="3" rx="1.5" fill="#1d1606"/><rect x="8" y="37" width="28" height="4" rx="2" fill="#2a2e38"/><circle cx="13" cy="42" r="3.6" fill="#2a2e38"/><circle cx="22" cy="42" r="3.6" fill="#2a2e38"/><circle cx="31" cy="42" r="3.6" fill="#2a2e38"/></svg>`;
const TOUR=[
 {t:'Hi, explorer!',x:'I’m Rivet, your robot guide. Welcome to the Space Museum! Are you ready to see the tech of the galaxy?',go:'Yes, let’s go!'},
 {t:'How to explore',x:'First, watch the whole story from start to finish. It plays by itself. Our spaceship will leave Earth, land on Mars and then the Moon, and every machine will show you how it works. Press Space to skip ahead, or scroll yourself any time. When the story ends, I will guide you to the museum.',go:'Start the story 🚀',end:true},
 {t:'You watched the whole story!',x:'Now you have met all 11 machines. Next stop: the museum. There you can play the game to drive a machine yourself, and use Device journey to understand what every device does. I hope you enjoy it!',go:'Take me to the museum →',fin:true}
];
let tourWait=false;const tourWaiting=()=>tourWait&&!!$('#tour');
let tourI=-1;
function startTour(at){if($('#tour'))return;tourFresh=1;tourI=(at||0)-1;document.body.insertAdjacentHTML('beforeend',`<div class="tour" id="tour" role="dialog" aria-modal="true" aria-labelledby="trT"><div class="tour-hole" id="trHole"></div><div class="tour-card" id="trCard"></div></div>`);
  addEventListener('keydown',tourKey);addEventListener('resize',tourPlace);addEventListener('scroll',tourScroll,{passive:true});tourStep(1);SFX.open()}
function storyGuide(){if(!$('#scrolly'))return;const o=$('#tour');if(o)o.remove();startTour(2)}
function tourKey(e){if(!$('#tour'))return;if(e.key==='Escape')endTour();else if((e.key==='ArrowRight'||e.key==='Enter')&&!tourWait){e.preventDefault();tourStep(1)}else if(e.key==='ArrowLeft')tourStep(-1)}
function endTour(go){tourWait=false;const t=$('#tour');if(!t)return;VO.stop();t.remove();removeEventListener('keydown',tourKey);removeEventListener('resize',tourPlace);removeEventListener('scroll',tourScroll);try{localStorage.setItem('bt-tour','done')}catch(e){}SFX.close();if(go&&tourI>=2&&$('#scrolly')){storyEnter();return}if(go&&$('#scrolly'))apStart(0);else if(go&&$('#gm'))openGame()}
let tourFresh=0;function tourStep(d){if(!tourFresh&&d>0&&tourI>=0&&TOUR[tourI]&&TOUR[tourI].end){endTour(true);return}tourFresh=0;const n=tourI+d;if(n<0)return;if(n>=TOUR.length){endTour(true);return}tourI=n;const s=TOUR[n];
  tourWait=!!s.wait;const el=s.sel&&$(s.sel);if(el)el.scrollIntoView({block:s.top||s.wait?'start':'center',behavior:'smooth'});
  $('#trCard').innerHTML=`<div class="tr-bot">${RIVET_SVG}</div><p class="tr-step">Step ${n+1} of ${TOUR.length}</p><h3 id="trT">${s.t}</h3><p>${s.x}</p>
   <div class="tour-b">${n>0&&!s.end&&!s.fin?'<button class="btn ghost" type="button" id="trBack">← Back</button>':''}${s.wait?'<p class="tr-wait">👇 Tap a machine</p>':`<button class="btn" type="button" id="trNext">${s.go||'Next →'}</button>`}<button class="tr-skip" type="button" id="trSkip">${s.end?'Close':'Skip tour'}</button></div>`;
  const nb=$('#trNext');nb&&nb.addEventListener('click',()=>s.end?endTour(true):tourStep(1));$('#trSkip').addEventListener('click',()=>endTour());const b=$('#trBack');b&&b.addEventListener('click',()=>tourStep(-1));
  setTimeout(tourPlace,el?380:0);tourPlace();(nb||$('#trSkip')).focus({preventScroll:true});SFX.whoosh();
  VO.line(s.t+'. '+s.x)}
let tourRaf=0;function tourScroll(){if(!tourRaf)tourRaf=requestAnimationFrame(()=>{tourRaf=0;tourPlace()})}
function tourPlace(){const s=TOUR[tourI];if(!s)return;const h=$('#trHole'),c=$('#trCard');if(!h)return;const el=s.sel&&$(s.sel);const W=innerWidth,H=innerHeight;
  if(!el){h.style.cssText=`left:${W/2}px;top:${H/2}px;width:0;height:0`;c.style.left=Math.max(12,(W-c.offsetWidth)/2)+'px';c.style.top=Math.max(12,(H-c.offsetHeight)/2)+'px';return}
  const r=el.getBoundingClientRect(),p=10;h.style.cssText=`left:${r.left-p}px;top:${r.top-p}px;width:${r.width+p*2}px;height:${r.height+p*2}px`;
  if(r.height>H*.5||s.wait){h.style.cssText=`left:${r.left-p}px;top:${r.top-p}px;width:${r.width+p*2}px;height:${r.height+p*2}px`;c.style.top=(H-c.offsetHeight-16)+'px';c.style.left=Math.max(12,(W-c.offsetWidth)/2)+'px';return}
  const below=r.bottom+p+16+c.offsetHeight<H;let top=below?r.bottom+p+16:r.top-p-16-c.offsetHeight;if(top<12)top=Math.min(H-c.offsetHeight-12,r.bottom+p+16);
  c.style.top=Math.max(12,top)+'px';c.style.left=Math.max(12,Math.min(W-c.offsetWidth-12,r.left+r.width/2-c.offsetWidth/2))+'px'}
function initTour(){if(!$('#scrolly')||/^#play/.test(location.hash))return;let n=0;const go=()=>{if($('#tour'))return;if(n++>40)return;try{startTour()}catch(e){setTimeout(go,300)}};go()}
/* home: a simple grid of every machine */
function initMachines(){const g=$('#mGrid');if(!g)return;const order=['curiosity','perseverance','ingenuity','opportunity','spirit','sojourner','insight','voyager1','lrv','surveyor3','retro'];
  g.innerHTML=order.map(id=>{const m=byId[id];const p=PHOTOS[id];return `<button class="mcard" type="button" data-story="${id}">${p?`<img src="${p[0]}" alt="" loading="lazy">`:`<span class="mc-ph" data-thumb="${id}"></span>`}<span class="mc-b"><span class="badge" data-st="${m.status}">${ST[m.status]}</span><b>${m.name}</b><span>${(EQUIP[id]||{}).goal||m.kid}</span></span></button>`}).join('');
  g.addEventListener('click',e=>{const b=e.target.closest('[data-story]');if(b)openStory(b.dataset.story,b)});
  order.forEach(id=>{if(!PHOTOS[id]){const ph=g.querySelector(`[data-thumb="${id}"]`);const put=()=>{if(IMG[id])ph.outerHTML=`<img src="${IMG[id]}" alt="">`};if(IMG[id])put();else setTimeout(()=>{deviceImage(id);setTimeout(put,400)},600)}})}
/* ---------- interactive game tutorial: each step waits until the player does it ---------- */
const KEY=k=>`<kbd class="tk">${k}</kbd>`;
function tutSteps(){const m=G.mech,touch=matchMedia('(pointer:coarse)').matches;
  const MOVE=touch?'Push the joystick <b>up</b>':`Press ${KEY('W')} or ${KEY('↑')}`,TURN=touch?'Push the joystick <b>left or right</b>':`Press ${KEY('A')} ${KEY('D')} or ${KEY('←')} ${KEY('→')}`,ACT=touch?'Tap the big <b>yellow button</b>':`Press ${KEY('Space')}`;
  const actName={hop:'hop like a rocket (hold, then let go)',dash:'dash forward at light speed',fly:'take off into the air',ping:'send a quake ping that shows the way',space:'fire the thrusters',buggy:'jump',tiny:'do a little hop'}[m]||'do a boost jump';
  const s=[];
  if(m==='fly')s.push({ic:'🚁',t:'Take off!',x:`${ACT} to take off.`,ok:c=>G.alt>1});
  if(m==='hop')s.push({ic:'🚀',t:'Hop!',x:`${touch?'Hold the yellow button':'Hold '+KEY('Space')}, then let go to hop.`,ok:c=>G.air});
  else if(m==='dash')s.push({ic:'⚡',t:'Dash!',x:`${MOVE} to dash forward.`,ok:c=>c.mv>.3});
  else s.push({ic:'⬆️',t:'Move forward',x:`${MOVE} to ${m==='space'?'fly':m==='fly'?'fly':'drive'} forward.`,ok:c=>c.mv>.9});
  s.push({ic:'↔️',t:'Turn around',x:`${TURN} to turn.`,ok:c=>c.tn>.7});
  if(m!=='fly'&&m!=='hop'&&m!=='dash')s.push({ic:'⭐',t:'Special move',x:`${ACT} to ${actName}.`,ok:c=>c.ac});
  s.push({ic:'🟡',t:'Follow the yellow arrow',x:`The yellow arrow points to your next <b>target</b>. Go there and use your tool to collect a sample!`,ok:c=>c.t>7,btn:'Got it!'});
  s.push({ic:'🎉',t:'You are ready!',x:`Great job, explorer! Collect every sample to finish the mission. ${touch?'':`Press ${KEY('N')} for the map.`}`,ok:c=>c.t>4.5,btn:'Start!'});
  return s}
function tutStart(){if(!gq('#gmTut'))gq('#gm').insertAdjacentHTML('beforeend','<div class="gm-tut" id="gmTut" hidden role="status" aria-live="polite"></div>');
  G.tut={i:-1,S:tutSteps(),c:null};tutNext()}
function tutNext(){const T=G.tut;if(!T)return;T.i++;if(T.i>=T.S.length){tutEnd();return}T.c={mv:0,tn:0,ac:false,t:0,done:false};const s=T.S[T.i],box=gq('#gmTut');box.hidden=false;
  box.innerHTML=`<div class="tt-k">Tutorial · ${T.i+1} of ${T.S.length}</div><div class="tt-row"><span class="tt-ic">${s.ic}</span><div><h3>${s.t}</h3><p>${s.x}</p></div></div><div class="tt-b">${s.btn?`<button class="btn" id="ttGo" type="button">${s.btn}</button>`:'<span class="tt-try">👉 Try it now!</span>'}<button class="tt-skip" id="ttSkip" type="button">Skip tutorial</button></div><div class="tt-dots">${T.S.map((_,k)=>`<i class="${k<T.i?'d':k===T.i?'c':''}"></i>`).join('')}</div>`;
  box.classList.remove('ok');void box.offsetWidth;box.classList.add('in');
  const g=gq('#ttGo');g&&g.addEventListener('click',tutDone);gq('#ttSkip').addEventListener('click',tutEnd);
  VO.line(s.t+'. '+s.x.replace(/<[^>]+>/g,'').replace(/↑/g,'up arrow').replace(/← →/g,'left and right arrows'),null,true)}
function tutDone(){const T=G.tut;if(!T||T.c.done)return;T.c.done=true;SFX.right();const box=gq('#gmTut');box.classList.add('ok');const h=box.querySelector('.tt-b');if(h)h.innerHTML='<span class="tt-good">✓ Well done!</span>';setTimeout(tutNext,1100)}
function tutEnd(){G.tut=null;const b=gq('#gmTut');if(b){b.hidden=true;b.innerHTML=''}VO.stop()}
function tutTick(dt,ix,iz,act){const T=G.tut;if(!T||!T.c||T.c.done||G.cardOpen||G.dead)return;const c=T.c,now=performance.now();dt=Math.min(.25,(now-(c.lt||now))/1000);c.lt=now;c.t+=dt;if(iz>0)c.mv+=dt;if(ix)c.tn+=dt;if(act)c.ac=true;if(T.S[T.i].ok(c)&&!T.S[T.i].btn)tutDone();else if(T.S[T.i].btn&&T.S[T.i].ok(c))tutDone()}
/* ---------- mission mode: every machine plays its real goal ----------
   Drive to targets, use the machine's tool, collect samples, and see what each sample helps us learn or make. */
const MISSIONS={
 curiosity:{goal:'Find out if Mars could once support tiny living things.',tool:'Drill',verb:'Hold to drill',work:'hold',sec:2.4,unit:'rock powder samples',
  t:[{n:'Mudstone',ic:'🪨',res:'Clay minerals',use:'Clay only forms in water, so this crater was once a lake!',gives:'water'},
     {n:'Old lake bed',ic:'🟤',res:'Organic molecules',use:'These are the building blocks that living things are made of.',gives:'organic'},
     {n:'Vein rock',ic:'⚪',res:'Calcium sulfate',use:'Minerals left by flowing water: water moved through these rocks.',gives:'water2'},
     {n:'Grey layer',ic:'⚫',res:'Iron and sulfur',use:'Tiny microbes on Earth eat chemicals like these for energy.',gives:'energy'}],
  make:[{ic:'💧',n:'Water',need:['water','water2']},{ic:'🧬',n:'Building blocks of life',need:['organic']},{ic:'⚡',n:'Food for microbes',need:['energy']},{ic:'🏆',n:'Mars could once have hosted life!',need:['water','water2','organic','energy'],big:1}],
  fin:'You proved it, just like the real Curiosity did: long ago, Gale Crater had water, the right chemicals and energy. Tiny life could have lived there.'},
 perseverance:{goal:'Collect rock cores that may hold signs of ancient life, and make oxygen from Mars air.',tool:'Coring drill',verb:'Hold to drill a core',work:'hold',sec:2.4,unit:'sealed sample tubes',
  t:[{n:'River delta rock',ic:'🪨',res:'Sealed tube #1: delta mud',use:'Mud from an old river delta is the best place to look for fossils of microbes.',gives:'core'},
     {n:'Crater floor rock',ic:'🟫',res:'Sealed tube #2: volcanic rock',use:'Its age tells scientists when the lake existed.',gives:'core'},
     {n:'Carbonate rock',ic:'⚪',res:'Sealed tube #3: carbonate',use:'Carbonates form in water and can trap signs of life.',gives:'core'},
     {n:'MOXIE test site',ic:'🫧',res:'Oxygen from Mars air',use:'MOXIE turns carbon dioxide into oxygen we could breathe or burn as rocket fuel.',gives:'o2',verb:'Hold to run MOXIE',tool:'MOXIE'}],
  make:[{ic:'🧪',n:'3 tubes ready for Earth',need:['core','core','core']},{ic:'🫁',n:'Air for astronauts',need:['o2']},{ic:'🚀',n:'Rocket fuel for the trip home',need:['o2','core']},{ic:'🏆',n:'Mission samples complete!',need:['core','core','core','o2'],big:1}],
  fin:'Your tubes are sealed and waiting. One day a future mission could bring them to Earth, and scientists may find signs of ancient life inside.'},
 spirit:{goal:'Find rocks that formed in water, to learn if Mars was once wet.',tool:'Rock grinder (RAT)',verb:'Hold to grind the rock',work:'hold',sec:2.2,unit:'ground rocks',solar:1,
  t:[{n:'Adirondack',ic:'🪨',res:'Plain volcanic rock',use:'No water here. Scientists need to keep looking!',gives:'basalt'},
     {n:'Columbia Hills',ic:'🟤',res:'Goethite',use:'Goethite only forms when water is around.',gives:'water'},
     {n:'Bright soil',ic:'⚪',res:'Almost pure silica',use:'Silica like this forms in hot springs, places where microbes love to live on Earth!',gives:'spring'}],
  make:[{ic:'💧',n:'Proof of water',need:['water']},{ic:'♨️',n:'Ancient hot spring',need:['spring']},{ic:'🏆',n:'Mars was once wet and warm!',need:['water','spring'],big:1}],
  fin:'Great work! Spirit really found silica from an old hot spring. It showed that Mars once had warm water, a place where life might have lived.'},
 opportunity:{goal:'Search for clues that liquid water once existed on Mars.',tool:'Rock grinder (RAT)',verb:'Hold to grind the rock',work:'hold',sec:2.2,unit:'ground rocks',solar:1,
  t:[{n:'Eagle Crater rocks',ic:'🫐',res:'“Blueberries” (hematite)',use:'These tiny balls grow inside rocks soaked in water.',gives:'water'},
     {n:'Layered outcrop',ic:'🟫',res:'Ripple layers',use:'Ripples like these are made by flowing water, like at a beach.',gives:'flow'},
     {n:'Endeavour rim',ic:'⚪',res:'Gypsum veins',use:'Gypsum is left behind when water flows through cracks.',gives:'vein'}],
  make:[{ic:'🫐',n:'Water-soaked rocks',need:['water']},{ic:'🌊',n:'Flowing water',need:['flow','vein']},{ic:'🏆',n:'Mars had liquid water!',need:['water','flow','vein'],big:1}],
  fin:'You found it! Opportunity’s discoveries proved that liquid water once flowed on Mars.'},
 sojourner:{goal:'Show that a small robot car can drive on Mars and study its rocks.',tool:'APXS sensor',verb:'Hold to read the rock',work:'hold',sec:1.8,unit:'rocks studied',range:24,solar:1,
  t:[{n:'Barnacle Bill',ic:'🪨',res:'Silica-rich, like basaltic andesite',use:'The first rock Sojourner studied with its APXS sensor. Its chemistry looks like basaltic andesite, but it might also be a mix of materials.',gives:'lava'},
     {n:'Yogi',ic:'🐻',res:'Basalt-like rock, less quartz',use:'A big rounded rock. Early results showed it was more like common basalt than Barnacle Bill.',gives:'volcano'},
     {n:'Scooby Doo',ic:'⚪',res:'Flat rock, similar to the soil',use:'Its chemistry is like the drift soil around it. It may be a cemented hardpan: a scientific idea, not confirmed.',gives:'crust'}],
  make:[{ic:'🔬',n:'Different kinds of rocks on Mars',need:['lava','volcano']},{ic:'🧱',n:'A rock that looks like soil',need:['crust']},{ic:'🏆',n:'Rovers can do science on Mars!',need:['lava','volcano','crust'],big:1}],
  fin:'Sojourner proved robot cars can drive and do science on Mars. Every rover after it followed in its tiny tracks.'},
 insight:{goal:'Listen to marsquakes to learn what is inside Mars.',tool:'Seismometer',verb:'Press when the wave reaches the green zone',work:'timing',unit:'marsquakes recorded',
  t:[{n:'Flat spot A',ic:'📍',res:'Small marsquake',use:'The waves bounced off the crust: Mars’s crust is about 20 to 40 km thick.',gives:'crust'},
     {n:'Flat spot B',ic:'📍',res:'Deep marsquake',use:'The waves slowed down in the rocky mantle.',gives:'mantle'},
     {n:'Flat spot C',ic:'📍',res:'Far-away marsquake',use:'Some waves bounced off a big liquid metal core.',gives:'core'}],
  make:[{ic:'🟫',n:'Crust',need:['crust']},{ic:'🟧',n:'Mantle',need:['mantle']},{ic:'🟡',n:'Liquid core',need:['core']},{ic:'🏆',n:'A map of the inside of Mars!',need:['crust','mantle','core'],big:1}],
  fin:'Just like the real InSight, you used marsquakes to draw the first map of the inside of another planet.'},
 ingenuity:{goal:'Prove a helicopter can fly on Mars, and scout the way for the rover.',tool:'Camera',verb:'Hover over the spot to take a photo',work:'hover',sec:2.4,unit:'scout photos',
  t:[{n:'First Flight',ic:'🚁',res:'Photo: the first flight!',use:'It proved powered flight works in the thin air of Mars.',gives:'fly'},
     {n:'Raised Rocky Ridges',ic:'⛰️',res:'Photo: raised rocky ridges',use:'The ridges are linked to cracks in the ground. Scientists ask if underground fluids once flowed through cracks like these. This is not confirmed.',gives:'path'},
     {n:'Old River Channel — Neretva Vallis',ic:'🏞️',res:'Scouting stop: an ancient river channel',use:'Billions of years ago, water flowed here into Jezero Crater. Scientists study it for clues about Mars’ past.',gives:'science'}],
  make:[{ic:'✈️',n:'Flying works on Mars',need:['fly']},{ic:'🗺️',n:'A map for the rover',need:['path','science']},{ic:'🏆',n:'Future Mars aircraft!',need:['fly','path','science'],big:1}],
  fin:'Ingenuity planned 5 flights and flew 72. Your scouting shows why future missions want flying helpers.'},
 lrv:{goal:'Carry astronauts far from their lander to collect Moon rocks, and get back before their oxygen runs out.',tool:'Sample tongs',verb:'Hold to pick up the rock',work:'hold',sec:1.6,unit:'Moon rocks',o2:200,
  t:[{n:'Station 1',ic:'🪨',res:'Rake samples: small rock chips',use:'The lunar rake let fine dust fall through and kept rock chips about 1.3 to 2.5 cm across.',gives:'rake'},
     {n:'Station 2',ic:'🟤',res:'Sample 72255 from Boulder 1',use:'An impact melt breccia: broken rock glued together by rock that melted in a giant impact.',gives:'breccia'},
     {n:'Station 3',ic:'⛏️',res:'Trench soil and rock 73255',use:'A shallow trench showed the soil just under the surface. Rock 73255 was collected nearby.',gives:'soil'},
     {n:'Lunar module',ic:'🛸',res:'Back safely!',use:'All rocks are on board for the trip home to Earth.',gives:'home',verb:'Hold to load the rocks'}],
  make:[{ic:'💥',n:'Rocks made by giant impacts',need:['breccia']},{ic:'🔬',n:'Moon rocks and soil to study',need:['rake','soil']},{ic:'🏆',n:'Rocks safely to Earth!',need:['rake','breccia','soil','home'],big:1}],
  fin:'The real rovers brought back rocks that showed the Moon formed from a giant crash with the young Earth.'},
 surveyor3:{goal:'Test the Moon’s soil, to find out if it is safe for astronauts to land.',tool:'Scoop arm',verb:'Hold to push the scoop into the soil',work:'hold',sec:2,unit:'soil tests',
  t:[{n:'Site A',ic:'🥄',res:'Firm soil',use:'The ground holds weight. Safe to land here!',gives:'firm'},
     {n:'Site B',ic:'🥄',res:'Soft dust on top, firm below',use:'Only a few centimetres of dust. Boots will leave prints!',gives:'dust'},
     {n:'Site C',ic:'🥄',res:'Firm soil',use:'Another safe landing spot for Apollo.',gives:'firm'}],
  make:[{ic:'👣',n:'Dust only a few cm deep',need:['dust']},{ic:'🛬',n:'Safe landing sites',need:['firm','firm']},{ic:'🏆',n:'Apollo can land!',need:['firm','dust','firm'],big:1}],
  fin:'Surveyor’s tests told NASA the Moon was safe to land on. Two years later, Apollo 11 touched down.'}
};
const MINI2D={voyager1:1,retro:1};
const missionJ=id=>{const J=GJ[id],M=MISSIONS[id];return {...J,near:!!M.range,stops:[{d:'Start',t:'Landing site',x:'',y:''},...M.t.map(t=>({d:t.n,t:t.n,x:t.res,y:''}))]}};
/* ----- start: briefing pages that move on by themselves when the voice is done ----- */
function miStart(){const M=MISSIONS[G.id],m=byId[G.id];M.make.forEach(k=>delete k.done);G.MI={M,bag:[],work:null,card:null,power:1,o2:1,tutDone:false};renderStory();
  const pages=[{h:'Your mission',ic:'🎯',x:M.goal},{h:'Your tool: '+M.tool,ic:'🛠️',x:`When you reach a target, use your ${M.tool.toLowerCase()}. ${M.work==='timing'?'Wait for the quake wave and press at the right moment.':M.work==='hover'?'Fly over the spot and hover to take a photo.':'Hold Space (or the yellow button) until the bar is full.'}`},
    {h:'What you will learn',ic:'🔬',x:`Collect ${M.t.length} ${M.unit}. Each one is a clue. Put the clues together to unlock: ${M.make.filter(k=>!k.big).map(k=>k.n.toLowerCase()).join(', ')}.`}];
  if(M.solar)pages.push({h:'Watch your power',ic:'☀️',x:'Your solar panels make power. Driving uses it up. If the battery gets low, stop and let the Sun recharge you.'});
  if(M.o2)pages.push({h:'Watch the oxygen',ic:'🫁',x:'The astronauts only have a few minutes of oxygen. Collect the rocks and get back to the lunar module in time!'});
  if(M.range)pages.push({h:'Stay close to the lander',ic:'📡',x:'Sojourner talks to Earth through its lander. Stay inside the blue circle.'});
  if(M.range){const pts=[],s0=gv(0,0,1);for(let k=0;k<=96;k++){const a=k/96*TAU,d=M.range/GR_R,n=s0.clone().multiplyScalar(Math.cos(d)).addScaledVector(gv(Math.cos(a),Math.sin(a),0),Math.sin(d)).normalize();pts.push(n.multiplyScalar(gRad(n)+.35))}
    G.sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x7cc4ff})))}
  miCard(pages.map(p=>({...p,t:p.h})),'Mission briefing',()=>{G.MI.started=true;setTimeout(()=>{if(G.state==='play'&&!G.cardOpen)tutStart()},300)},`Are you ready to see the tech of the galaxy? You are ${m.name}!`)}
/* a card that reads itself and turns to the next page when the voice is done */
function miCard(pages,tag,done,intro){G.cardOpen=true;G.cardT=performance.now();G.keys.clear();const box=gq('#gmGain');let i=-1,tok=0;
  const show=k=>{i=k;const p=pages[i],my=++tok;box.hidden=false;
    box.innerHTML=`<div class="gn-img mi-ic"><span>${p.ic}</span></div><div class="gn-b"><p class="gm-tag">${tag}${pages.length>1?` · ${i+1} of ${pages.length}`:''}</p><h3>${p.h}</h3><p class="gn-t">${p.x}</p>${p.extra||''}
     <div class="mi-bar"><i style="animation-duration:${Math.max(2400,(p.h+p.x).length*62+900)}ms"></i></div>
     <div class="gm-cf"><button class="btn" id="miGo" type="button">${i===pages.length-1?(p.go||'Let’s go!'):'Next'} →</button><span class="gm-space">Press <kbd>Space</kbd> to skip ahead ⏩</span></div></div>`;
    gq('#miGo').addEventListener('click',next);SFX.card();VO.stop();
    VO.line(((i===0&&intro)?intro+' ':'')+p.h+'. '+p.x.replace(/<[^>]+>/g,''),()=>{if(my===tok)setTimeout(()=>{if(my===tok&&G.MI&&G.MI.card===api)next()},900)},true)};
  const next=()=>{tok++;VO.stop();if(i<pages.length-1)show(i+1);else{box.hidden=true;G.cardOpen=false;G.MI.card=null;SFX.close();done&&done()}};
  const api={next};G.MI.card=api;show(0)}
/* ----- arriving at a target starts the tool ----- */
function miArrive(i){const T=G.MI.M.t[i-1],M=G.MI.M;G.MI.work={i,T,p:0,ph:0,hits:0,zone:[.62,.82],dir:1};
  if(M.work!=='hover')G.lock=true;G.spd=0;G.vel.set(0,0,0);SFX.chime();
  gq('#miWork')||gq('#gm').insertAdjacentHTML('beforeend','<div class="mi-work" id="miWork" role="status" aria-live="polite"></div>');
  const touch=matchMedia('(pointer:coarse)').matches,how=M.work==='timing'?(touch?'Tap the yellow button':'Press Space'):M.work==='hover'?'Fly over the yellow ring and hover':(touch?'Hold the yellow button':'Hold Space');
  gq('#miWork').hidden=false;gq('#miWork').innerHTML=`<p class="gm-tag">Target ${i} of ${M.t.length} · ${T.n}</p><h3>${T.ic} ${T.tool||M.tool}</h3><p class="mi-how">${how}: ${(T.verb||M.verb).toLowerCase()}.</p>
   ${M.work==='timing'?'<div class="mi-time"><b class="mi-zone"></b><i class="mi-mark"></i></div>':'<div class="mi-prog"><i id="miP"></i></div>'}`;
  if(M.work==='timing'){const z=gq('#miWork .mi-zone');z.style.left=G.MI.work.zone[0]*100+'%';z.style.width=(G.MI.work.zone[1]-G.MI.work.zone[0])*100+'%'}
  VO.line(`${T.n}. ${how}: ${(T.verb||M.verb).toLowerCase()}.`,null,true)}
function miTick(dt){const MI=G.MI;if(!MI||!MI.started||G.dead)return;const M=MI.M,now=performance.now();dt=Math.min(.25,(now-(MI.lt||now))/1000);MI.lt=now;
  /* power and oxygen */
  if(M.solar&&!MI.work&&!G.cardOpen){const moving=Math.abs(G.spd)>.4||G.vel.length()>.4;MI.power=Math.max(0,Math.min(1,MI.power+(moving?-dt/55:dt/9)));
    if(MI.power<=0&&!G.lock){G.lock=true;MI.dead=1;botSay('Out of power! Stay still and let the Sun recharge the solar panels.',4200);SFX.powerdown()}
    if(MI.dead&&MI.power>.35){MI.dead=0;G.lock=false;botSay('Recharged! Let’s go.',2400)}}
  if(M.o2&&!G.cardOpen){MI.o2=Math.max(0,MI.o2-dt/M.o2);if(MI.o2<.25&&!MI.warn){MI.warn=1;SFX.warn();botSay('Oxygen is low! Hurry back to the lunar module!',4000)}if(MI.o2<=0){miFail('The astronauts ran out of oxygen time. In real life they always kept enough to walk back. Try a faster route!');return}}
  const mt=gq('#miMeter');if(mt){const v=M.o2?MI.o2:MI.power;mt.style.width=v*100+'%';mt.style.background=v>.5?'var(--st-active)':v>.25?'var(--accent)':'var(--st-silent)'}
  if(M.range&&!MI.work){const s0=G.stops[0].n,d=G.n.angleTo(s0)*GR_R;if(d>M.range){const back=tanOf(s0.clone().sub(G.n),G.n).normalize();moveAlong(back,(d-M.range)+.3);G.spd=0;botReact('range',['Too far! Sojourner must stay close to its lander to talk to Earth.'],6)}}
  const W=MI.work;if(!W||G.cardOpen)return;const {act}=inp();
  if(M.work==='hold'){W.p=act?Math.min(1,W.p+dt/(M.sec)):Math.max(0,W.p-dt*.25);gq('#miP').style.width=W.p*100+'%';if(act&&Math.random()<dt*14)puff('spark');if(act&&Math.random()<dt*3)SFX.tick();if(W.p>=1)miGot()}
  else if(M.work==='hover'){const near=G.n.angleTo(G.stops[W.i].n)*GR_R<3.6,up=G.alt>1.5;W.p=near&&up?Math.min(1,W.p+dt/M.sec):Math.max(0,W.p-dt*.4);gq('#miP').style.width=W.p*100+'%';
    gq('#miWork .mi-how').textContent=!up?'Take off first (Space), then hover over the ring.':!near?'Fly back over the yellow ring.':'Hold steady… taking the photo!';if(W.p>=1){SFX.camera();miGot()}}
  else{W.ph+=dt*W.dir*(.55+W.i*.12);if(W.ph>1){W.ph=1;W.dir=-1}if(W.ph<0){W.ph=0;W.dir=1}gq('#miWork .mi-mark').style.left=W.ph*100+'%';
    if(G.tap||(act&&!W.prev)){if(W.ph>=W.zone[0]&&W.ph<=W.zone[1]){SFX.right();miGot()}else{SFX.wrong();botSay('Too early or too late! Wait for the wave to reach the green zone.',2600)}}W.prev=act}}
function miGot(){const MI=G.MI,W=MI.work,T=W.T;MI.work=null;gq('#miWork').hidden=true;G.lock=false;MI.bag.push(T.gives);renderStory();
  const unlocked=MI.M.make.filter(k=>!k.done&&miHas(k.need));unlocked.forEach(k=>k.done=true);
  const extra=`<div class="mi-res"><span>${T.ic}</span><div><small>You found</small><b>${T.res}</b></div></div>${unlocked.length?`<div class="mi-unl">${unlocked.map(k=>`<p>🔓 Unlocked: <b>${k.ic} ${k.n}</b></p>`).join('')}</div>`:''}`;
  const last=MI.bag.length>=MI.M.t.length;
  const _go=()=>miCard([{h:'What does it help us learn?',ic:T.ic,x:T.use,extra,go:last?'See the result':'Next target'}],`Sample ${MI.bag.length} of ${MI.M.t.length}`,()=>{G.hold=false;renderStory();if(last)miFinish();else botSay(`Great! Now find target ${MI.bag.length+1}: ${MI.M.t[MI.bag.length].n}. Follow the yellow arrow.`,4200)});
  if(['curiosity','perseverance','opportunity','spirit','insight'].includes(G.id)&&window.curDiscover){G.cardOpen=true;G.keys.clear();curDiscover(T.n,_go)}else if(G.id==='ingenuity'&&window.ingDiscover){G.cardOpen=true;G.keys.clear();ingDiscover(T.n,_go)}else if(G.id==='lrv'&&window.lrvDiscover){G.cardOpen=true;G.keys.clear();lrvDiscover(T.n,_go)}else if(G.id==='surveyor3'&&window.svDiscover){G.cardOpen=true;G.keys.clear();svDiscover(T.n,_go)}else if(G.id==='sojourner'&&window.sojDiscover){G.cardOpen=true;G.keys.clear();sojDiscover(T.n,_go)}else _go()}
function miHas(need){const bag=G.MI.bag.slice();return need.every(n=>{const k=bag.indexOf(n);if(k<0)return false;bag.splice(k,1);return true})}
function miFinish(){const MI=G.MI,m=byId[G.id],big=MI.M.make.find(k=>k.big);SFX.chime();G.dead=0;G.cardOpen=true;VO.stop();
  const box=gq('#gmEnd');box.hidden=false;gq('#gm').classList.add('mi-win');
  box.innerHTML=`<div class="mi-end"><p class="gm-tag">Mission complete · ${m.name}</p><h2>${big.ic} ${big.n}</h2><div class="mi-made">${MI.M.make.filter(k=>!k.big).map(k=>`<span>${k.ic} ${k.n}</span>`).join('')}</div><p class="gm-endx">${MI.M.fin}</p>
   <div class="gm-endb"><button class="btn" id="miAgain" type="button">Play again</button><button class="btn ghost" id="miOther" type="button">Choose another machine</button><button class="btn ghost" id="miHome" type="button">Back to homepage</button></div></div>`;
  gq('#miAgain').addEventListener('click',()=>{miClean();startJourney(G.id)});gq('#miOther').addEventListener('click',()=>{miClean();gTeardown();showPick()});gq('#miHome').addEventListener('click',()=>{miClean();closeGame()});
  VO.line(`Mission complete! ${big.n} ${MI.M.fin}`,null,true)}
function miFail(msg){G.MI.started=false;G.lock=true;G.cardOpen=true;SFX.powerdown();const box=gq('#gmEnd');box.hidden=false;
  box.innerHTML=`<div class="mi-end"><p class="gm-tag">Mission not finished</p><h2>⏱️ Out of time!</h2><p class="gm-endx">${msg}</p><div class="gm-endb"><button class="btn" id="miAgain" type="button">Try again</button><button class="btn ghost" id="miOther" type="button">Choose another machine</button></div></div>`;
  gq('#miAgain').addEventListener('click',()=>{miClean();startJourney(G.id)});gq('#miOther').addEventListener('click',()=>{miClean();gTeardown();showPick()});VO.line('Out of time! '+msg,null,true)}
function miClean(){const e=gq('#gmEnd');if(e){e.hidden=true;e.innerHTML=''}gq('#gm').classList.remove('mi-win');const w=gq('#miWork');if(w)w.hidden=true;if(G.MI&&G.MI.M&&G.MI.M.make){G.MI.M.make.forEach(k=>delete k.done)}G.MI=null;G.lock=false;G.cardOpen=false}
/* right-hand panel: goal, targets, collected samples and what they unlock */
function miPanel(){const L=gq('#gmLog'),MI=G.MI,M=MI.M,m=byId[G.id],pic=devicePic(G.id);
  L.innerHTML=`<figure class="gl-img">${pic.src?`<img src="${pic.src}" alt="${m.name}">`:''}</figure><div class="gl-h"><p class="gm-tag">Mission</p><b>${m.name}</b><span class="mi-goal">${M.goal}</span></div>
   ${M.solar||M.o2?`<p class="mi-meter">${M.o2?'🫁 Oxygen':'☀️ Solar power'} <i><b id="miMeter"></b></i></p>`:''}
   <p class="gm-tag mi-sub">Targets</p><ol class="mi-list">${M.t.map((t,k)=>`<li class="${k<MI.bag.length?'done':k===MI.bag.length?'cur':''}"><span>${k<MI.bag.length?'✅':t.ic}</span><b>${t.n}</b>${k<MI.bag.length?`<small>${t.res}</small>`:''}</li>`).join('')}</ol>
   <p class="gm-tag mi-sub">What the samples unlock</p><ul class="mi-make">${M.make.map(k=>`<li class="${k.done?'on':''}${k.big?' big':''}"><span>${k.done?k.ic:'🔒'}</span>${k.n}</li>`).join('')}</ul>`}
/* ---------- 2D mission games: Voyager's dishes and the Moon laser ---------- */
const MN={};
const v2=(x,y)=>({x,y}),sub2=(a,b)=>v2(a.x-b.x,a.y-b.y),add2=(a,b)=>v2(a.x+b.x,a.y+b.y),mul2=(a,k)=>v2(a.x*k,a.y*k),dot2=(a,b)=>a.x*b.x+a.y*b.y,len2=a=>Math.hypot(a.x,a.y),nrm2=a=>{const l=len2(a)||1;return v2(a.x/l,a.y/l)};
const DISH_LV=[
 {name:'Goldstone, California',S:v2(70,110),pts:[v2(460,330)],E:v2(830,140)},
 {name:'Madrid, Spain',S:v2(70,520),pts:[v2(330,190),v2(690,430)],E:v2(910,150),mid:[0]},
 {name:'Canberra, Australia',S:v2(70,300),pts:[v2(300,90),v2(560,500),v2(860,170)],E:v2(560,60),mid:[0,1]}];
function miniStart(id){gTeardown();G.id=id;G.state='play';G.MI={mini:1,card:null,M:{make:[]}};G.keys.clear();G.dead=0;G.cardOpen=false;
  gq('#gmPick').hidden=true;gq('#gm').classList.add('gm-mini');
  gq('#gm').insertAdjacentHTML('beforeend',`<div class="mn" id="gmMini"><div class="mn-exit"><button class="d-close" type="button" id="mnBack">← Machines</button><button class="d-close" type="button" id="mnExit">Exit ✕</button></div><div class="mn-top"><p class="gm-tag" id="mnTag"></p><h2 id="mnH"></h2><p id="mnSub"></p></div><canvas id="mnCv"></canvas>
   <div class="mn-bot"><p class="mn-how" id="mnHow"></p><div class="mn-btns"><button class="btn ghost mn-turn" type="button" id="mnL" aria-label="Turn left">⟲ Turn left</button><button class="btn" type="button" id="mnA"></button><button class="btn ghost mn-turn" type="button" id="mnR" aria-label="Turn right">Turn right ⟳</button></div><p class="mn-score" id="mnScore"></p></div></div>`);
  const hold=(el,k)=>{const on=e=>{e.preventDefault();G.keys.add(k)},off=()=>G.keys.delete(k);el.addEventListener('pointerdown',on);['pointerup','pointerleave','pointercancel'].forEach(t=>el.addEventListener(t,off))};
  hold(gq('#mnL'),'l');hold(gq('#mnR'),'r');gq('#mnExit').addEventListener('click',()=>{VO.stop();closeGame()});gq('#mnBack').addEventListener('click',()=>{VO.stop();const b=gq('#gmEnd');if(b){b.hidden=true;b.innerHTML=''}const g=gq('#gmGain');if(g)g.hidden=true;G.cardOpen=false;miniStop();showPick()});gq('#mnA').addEventListener('click',()=>{G.tap=true});
  const cv=gq('#mnCv');MN.cv=cv;MN.x=cv.getContext('2d');MN.id=id;const fit=()=>{const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);cv.width=r.width*d;cv.height=r.height*d};fit();MN.fit=fit;addEventListener('resize',fit);
  SFX.start();
  const m=byId[id],intro=id==='voyager1'?[{h:'Your mission',ic:'📡',x:'Voyager 1 is billions of kilometres away. Its radio signal is very weak, so Earth needs giant dishes to hear it.'},{h:'How to play',ic:'🛰️',x:'The yellow line is Voyager’s signal. Turn the dishes so the signal bounces off them and reaches every dark area that has no signal yet.'},{h:'Controls',ic:'🎮',x:'Click a dish to choose it. Press and hold the Turn left or Turn right button to turn it. You can also use A and D, the arrow keys or the mouse wheel.'}]
   :[{h:'Your mission',ic:'🔦',x:'Fire a laser from Earth, hit the tiny mirror the Apollo astronauts left on the Moon, and time how long the light takes to come back.'},{h:'How to play',ic:'🌙',x:'The Moon is moving and light takes over a second to get there. Aim a little ahead of the mirror, then fire!'},{h:'Controls',ic:'🎮',x:'Aim with A and D, the arrow keys, or by moving the mouse. Press Space or Fire to shoot the laser. Hit the mirror 3 times.'}];
  miCard(intro,'Mission briefing',()=>{if(id==='voyager1')dishLevel(0);else laserStart()},`Are you ready to see the tech of the galaxy? You are ${m.name}!`);
  cancelAnimationFrame(MN.raf);let last=performance.now();const loop=now=>{MN.raf=requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;if(gq('#gm').hidden)return;if(MN.tick)MN.tick(dt);G.tap=false};MN.raf=requestAnimationFrame(loop)}
function miniStop(){cancelAnimationFrame(MN.raf);MN.tick=null;const e=gq('#gmMini');if(e)e.remove();gq('#gm')&&gq('#gm').classList.remove('gm-mini');if(MN.fit)removeEventListener('resize',MN.fit);if(MN.cvL){removeEventListener('keydown',MN.cvL)}}
function mnScale(){const c=MN.cv,k=Math.min(c.width/1000,c.height/600);return {k,ox:(c.width-1000*k)/2,oy:(c.height-600*k)/2}}
function mnStars(x){x.fillStyle='#04060d';x.fillRect(0,0,1000,600);const r=rng(3);for(let i=0;i<160;i++){x.fillStyle=`rgba(255,255,255,${.2+r()*.6})`;x.fillRect(r()*1000,r()*600,1.6,1.6)}}
function mnText(h,sub,tag,how,act){gq('#mnH').textContent=h;gq('#mnSub').textContent=sub;gq('#mnTag').textContent=tag;gq('#mnHow').textContent=how;gq('#mnA').textContent=act}
/* ===== Voyager: turn the dishes to bounce the signal into every dark area ===== */
function dishLevel(L){const D=DISH_LV[L],path=[D.S,...D.pts,D.E];
  const mirrors=D.pts.map((p,k)=>{const din=nrm2(sub2(p,path[k])),dout=nrm2(sub2(path[k+2],p)),n=nrm2(sub2(dout,din)),sol=Math.atan2(n.y,n.x)+Math.PI/2;const off=(.5+Math.random()*.6)*(Math.random()<.5?-1:1);return {p,a:sol+off,sol}});
  const zones=[...(D.mid||[]).map(k=>mul2(add2(D.pts[k],D.pts[k+1]),.5)),D.E].map(c=>({c,r:34,lit:false}));
  const S={L,D,mirrors,zones,sel:0,won:false,t:0,dir:nrm2(sub2(D.pts[0],D.S)),cells:new Set()};MN.S=S;
  mnText(`Catch Voyager’s signal`,`Station ${L+1} of 3: ${D.name}`,'Voyager 1 · Deep Space Network',`Turn the dishes so the signal reaches every dark area.`,'Next dish');
  gq('#mnA').onclick=()=>{S.sel=(S.sel+1)%S.mirrors.length;SFX.click()};
  const cv=MN.cv,toV=e=>{const r=cv.getBoundingClientRect(),d=cv.width/r.width,{k,ox,oy}=mnScale();return v2(((e.clientX-r.left)*d-ox)/k,((e.clientY-r.top)*d-oy)/k)};
  cv.onpointerdown=e=>{const p=toV(e);let best=-1,bd=60;S.mirrors.forEach((m,i)=>{const dd=len2(sub2(p,m.p));if(dd<bd){bd=dd;best=i}});if(best>=0){S.sel=best;S.drag=true;cv.setPointerCapture(e.pointerId);SFX.click()}};
  cv.onpointermove=e=>{if(!S.drag)return;const p=toV(e),m=S.mirrors[S.sel],d=sub2(p,m.p);if(len2(d)>12)m.a=Math.atan2(d.y,d.x)};cv.onpointerup=()=>S.drag=false;
  cv.onwheel=e=>{e.preventDefault();S.mirrors[S.sel].a+=e.deltaY>0?.06:-.06};
  if(MN.cvL)removeEventListener('keydown',MN.cvL);MN.cvL=e=>{const n=+e.key;if(n>=1&&n<=S.mirrors.length){S.sel=n-1;SFX.click()}if(e.key==='Tab'){e.preventDefault();S.sel=(S.sel+1)%S.mirrors.length}};addEventListener('keydown',MN.cvL);
  MN.tick=dt=>dishTick(dt);VO.line(`Station ${L+1}: ${D.name}. Turn the dishes so the signal reaches every dark area.`,null,true)}
function dishTrace(S){const pts=[S.D.S];let o=S.D.S,d=S.dir,skip=-1;
  for(let b=0;b<8;b++){let hit=null,ht=1e9,hm=-1;S.mirrors.forEach((m,i)=>{if(i===skip)return;const u=v2(Math.cos(m.a),Math.sin(m.a)),half=46,den=d.x*u.y-d.y*u.x;if(Math.abs(den)<1e-6)return;const w=sub2(m.p,o),t=(w.x*u.y-w.y*u.x)/den,s=(w.x*d.y-w.y*d.x)/den;if(t>1&&t<ht&&Math.abs(s)<=half){ht=t;hit=add2(o,mul2(d,t));hm=i}});
    if(!hit){let t=1e9;if(d.x>0)t=Math.min(t,(1000-o.x)/d.x);if(d.x<0)t=Math.min(t,-o.x/d.x);if(d.y>0)t=Math.min(t,(600-o.y)/d.y);if(d.y<0)t=Math.min(t,-o.y/d.y);pts.push(add2(o,mul2(d,t)));break}
    pts.push(hit);const m=S.mirrors[hm],n=v2(-Math.sin(m.a),Math.cos(m.a));d=sub2(d,mul2(n,2*dot2(d,n)));o=hit;skip=hm}return pts}
function segDist(p,a,b){const ab=sub2(b,a),t=Math.max(0,Math.min(1,dot2(sub2(p,a),ab)/(dot2(ab,ab)||1)));return len2(sub2(p,add2(a,mul2(ab,t))))}
function dishTick(dt){const S=MN.S,x=MN.x,{k,ox,oy}=mnScale();S.t+=dt;if(!S.won&&!G.cardOpen){const m=S.mirrors[S.sel];if(G.keys.has('l'))m.a-=dt*1.1;if(G.keys.has('r'))m.a+=dt*1.1}
  const pts=dishTrace(S);let lit=0;S.zones.forEach(z=>{z.lit=pts.some((p,i)=>i&&segDist(z.c,pts[i-1],p)<z.r);if(z.lit)lit++});
  for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],L=len2(sub2(b,a));for(let s=0;s<L;s+=20){const p=add2(a,mul2(sub2(b,a),s/L));S.cells.add(((p.x/50)|0)+','+((p.y/50)|0))}}
  x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,MN.cv.width,MN.cv.height);x.setTransform(k,0,0,k,ox,oy);mnStars(x);
  /* covered sky */
  x.fillStyle='rgba(124,196,255,.08)';S.cells.forEach(c=>{const [cx,cy]=c.split(',').map(Number);x.fillRect(cx*50,cy*50,50,50)});
  /* zones */
  S.zones.forEach(z=>{x.beginPath();x.arc(z.c.x,z.c.y,z.r,0,7);x.fillStyle=z.lit?'rgba(125,255,154,.25)':'rgba(0,0,0,.65)';x.fill();x.lineWidth=3;x.setLineDash(z.lit?[]:[8,6]);x.strokeStyle=z.lit?'#7dff9a':'#8ea0b5';x.stroke();x.setLineDash([]);
    x.fillStyle=z.lit?'#7dff9a':'#c6d0dc';x.font='700 15px Inter,sans-serif';x.textAlign='center';x.fillText(z.lit?'SIGNAL!':'no signal',z.c.x,z.c.y+z.r+20)});
  /* signal */
  x.lineCap='round';x.strokeStyle='rgba(255,210,58,.25)';x.lineWidth=14;x.beginPath();pts.forEach((p,i)=>i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y));x.stroke();
  x.strokeStyle='#ffd23a';x.lineWidth=4;x.setLineDash([16,10]);x.lineDashOffset=-S.t*60;x.stroke();x.setLineDash([]);
  /* Voyager */
  const sv=S.D.S;x.save();x.translate(sv.x,sv.y);x.fillStyle='#ddd';x.beginPath();x.arc(0,0,20,Math.PI*1.1,Math.PI*1.9+Math.PI);x.fill();x.fillStyle='#e5b84a';x.fillRect(-10,4,20,12);x.restore();x.fillStyle='#fff';x.font='700 14px Inter,sans-serif';x.textAlign='center';x.fillText('VOYAGER 1',sv.x,sv.y+38);
  /* dishes */
  S.mirrors.forEach((m,i)=>{x.save();x.translate(m.p.x,m.p.y);x.rotate(m.a);x.fillStyle=i===S.sel?'#ffd23a':'#cfd6e2';x.beginPath();x.ellipse(0,0,48,10,0,0,7);x.fill();x.strokeStyle='#111';x.lineWidth=2;x.stroke();x.restore();
    x.fillStyle='#555';x.fillRect(m.p.x-3,m.p.y,6,26);if(i===S.sel){x.strokeStyle='#ffd23a';x.lineWidth=2;x.setLineDash([4,4]);x.beginPath();x.arc(m.p.x,m.p.y,62,0,7);x.stroke();x.setLineDash([])}
    x.fillStyle='#fff';x.font='700 14px Inter,sans-serif';x.fillText('Dish '+(i+1),m.p.x,m.p.y+48)});
  gq('#mnScore').textContent=`Areas with signal: ${lit} of ${S.zones.length}`;
  if(!S.won&&lit===S.zones.length){S.won=true;SFX.right();const last=S.L>=DISH_LV.length-1;
    setTimeout(()=>{const go=()=>miCard([{h:last?'Voyager is heard everywhere!':'Signal received!',ic:last?'🏆':'📡',x:last?'In real life, NASA’s Deep Space Network has giant dishes in California, Spain and Australia. As Earth turns, one of them can always hear Voyager, even from 25 billion kilometres away.':`${S.D.name} can hear Voyager now. Its dish is huge, 70 metres wide, to catch the tiny signal. Next station!`,go:last?'Finish':'Next station'}],last?'Mission complete':'Station '+(S.L+1)+' done',()=>{if(last)miniWin('Voyager’s signal reached every station!');else dishLevel(S.L+1)});if(window.voyDiscover){G.cardOpen=true;voyDiscover(S.D.name,go)}else go()},500)}}
/* ===== Apollo laser: hit the moving Moon mirror and time the light ===== */
function laserStart(){const S={aim:0,pulse:null,hits:0,t:0,fx:[],meas:[]};MN.S=S;
  mnText('Measure the distance to the Moon','Hit the Apollo mirror 3 times','Apollo laser reflectors','Aim ahead of the moving mirror, then fire!','🔦 Fire laser');
  gq('#mnA').onclick=()=>{G.tap=true};const cv=MN.cv;cv.onpointermove=e=>{const r=cv.getBoundingClientRect(),d=cv.width/r.width,{k,ox,oy}=mnScale();const p=v2(((e.clientX-r.left)*d-ox)/k,((e.clientY-r.top)*d-oy)/k);S.aim=Math.max(-1.1,Math.min(1.1,Math.atan2(p.x-500,560-p.y)))};
  cv.onpointerdown=()=>{G.tap=true};cv.onwheel=null;MN.tick=dt=>laserTick(dt)}
function laserTick(dt){const S=MN.S,x=MN.x,{k,ox,oy}=mnScale();S.t+=dt;if(!G.cardOpen){if(G.keys.has('l'))S.aim-=dt*.8;if(G.keys.has('r'))S.aim+=dt*.8;S.aim=Math.max(-1.1,Math.min(1.1,S.aim))}
  const mx=500+Math.sin(S.t*.3)*220,my=110,mr=95,mir=v2(mx+18,my+mr-8);
  const T=v2(500,548),dir=v2(Math.sin(S.aim),-Math.cos(S.aim));
  if(G.tap&&!S.pulse&&!G.cardOpen){S.pulse={d:0,back:false,dir};SFX.zap()}
  const P=S.pulse;if(P){P.d+=dt*(P.back?520:380);const head=P.back?add2(P.hit,mul2(sub2(T,P.hit),Math.min(1,P.d/len2(sub2(T,P.hit))))):add2(T,mul2(P.dir,P.d));P.head=head;
    if(!P.back){if(len2(sub2(head,v2(mx,my)))<mr||head.y<0||head.x<0||head.x>1000){if(len2(sub2(head,mir))<40){P.back=true;P.hit=head;P.d=0;SFX.ping()}else{S.fx.push({p:head,t:.8});S.pulse=null;SFX.wrong();S.shots=(S.shots||0)+1;const away=head.y<0||head.x<0||head.x>1000;setTimeout(()=>miCard([{h:away?'Missed the Moon!':'Missed the mirror!',ic:away?'💨':'🌑',x:away?'The laser flew past the Moon into space. Aim at the Moon, a little ahead of the mirror.':'The light hit the Moon, but the mirror is tiny, about the size of a suitcase. Real scientists miss most of their shots too! Aim a little ahead of the moving mirror.',go:'Try again'}],`Shot ${S.shots} · hits ${S.hits} of 3`,null),300)}}}
    else if(P.d>=len2(sub2(T,P.hit))){S.pulse=null;S.hits++;SFX.right();const km=[384402,384398,384405][S.hits-1];S.meas.push(km);
      S.shots=(S.shots||0)+1;const last=S.hits>=3;setTimeout(()=>miCard([{h:`Light came back in 2.56 seconds!`,ic:'⏱️',x:last?`Three measurements: about ${km.toLocaleString('en-US')} km. Scientists have done this for over 50 years and found the Moon moves about 3.8 cm farther from Earth every year, about as fast as your fingernails grow!`:`Light travels 300,000 km every second. There and back took 2.56 s, so the Moon is about ${km.toLocaleString('en-US')} km away.`,go:last?'Finish':'Fire again'}],`Shot ${S.shots} · hit ${S.hits} of 3`,()=>{if(last)miniWin('You measured the distance to the Moon!')}),300)}}
  x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,MN.cv.width,MN.cv.height);x.setTransform(k,0,0,k,ox,oy);mnStars(x);
  /* Moon and mirror */
  const g=x.createRadialGradient(mx-30,my-30,10,mx,my,mr);g.addColorStop(0,'#f2f2f2');g.addColorStop(1,'#8f8f96');x.fillStyle=g;x.beginPath();x.arc(mx,my,mr,0,7);x.fill();
  [[-30,-20,14],[25,10,10],[-10,30,8]].forEach(([a,b,r])=>{x.fillStyle='rgba(0,0,0,.12)';x.beginPath();x.arc(mx+a,my+b,r,0,7);x.fill()});
  x.save();x.translate(mir.x,mir.y);x.fillStyle='#9fd8ff';x.strokeStyle='#111';x.lineWidth=2;x.fillRect(-14,-7,28,14);x.strokeRect(-14,-7,28,14);x.restore();
  x.strokeStyle='#ffd23a';x.lineWidth=2;x.beginPath();x.arc(mir.x,mir.y,24+Math.sin(S.t*5)*3,0,7);x.stroke();x.fillStyle='#ffd23a';x.font='700 14px Inter,sans-serif';x.textAlign='center';x.fillText('MIRROR',mir.x,mir.y-28);
  /* Earth and telescope */
  x.fillStyle='#2f78d0';x.beginPath();x.arc(500,820,300,0,7);x.fill();x.fillStyle='#5cc45c';x.beginPath();x.ellipse(420,560,120,30,0,0,7);x.fill();
  x.strokeStyle='rgba(255,58,58,.35)';x.setLineDash([6,10]);x.lineWidth=2;x.beginPath();x.moveTo(T.x,T.y);x.lineTo(T.x+dir.x*700,T.y+dir.y*700);x.stroke();x.setLineDash([]);
  x.save();x.translate(T.x,T.y);x.rotate(S.aim);x.fillStyle='#ddd';x.fillRect(-12,-60,24,60);x.strokeStyle='#111';x.strokeRect(-12,-60,24,60);x.restore();x.fillStyle='#777';x.fillRect(470,548,60,20);
  if(P&&P.head){x.strokeStyle='#ff3a3a';x.lineWidth=6;x.lineCap='round';const tail=P.back?sub2(P.head,mul2(nrm2(sub2(T,P.hit)),40)):sub2(P.head,mul2(P.dir,40));x.beginPath();x.moveTo(tail.x,tail.y);x.lineTo(P.head.x,P.head.y);x.stroke()}
  S.fx=S.fx.filter(f=>{f.t-=dt;for(let i=0;i<8;i++){const a=i/8*6.28;x.fillStyle=`rgba(255,120,120,${f.t})`;x.fillRect(f.p.x+Math.cos(a)*(1-f.t)*40,f.p.y+Math.sin(a)*(1-f.t)*40,4,4)}return f.t>0});
  gq('#mnScore').textContent=`Mirror hits: ${S.hits} of 3`}
function miniWin(h){MN.tick=null;G.cardOpen=true;SFX.chime();const box=gq('#gmEnd');box.hidden=false;const id=MN.id;
  box.innerHTML=`<div class="mi-end"><p class="gm-tag">Mission complete · ${byId[id].name}</p><h2>🏆 ${h}</h2><p class="gm-endx">${EQUIP[id].goal}</p><div class="gm-endb"><button class="btn" id="miAgain" type="button">Play again</button><button class="btn ghost" id="miOther" type="button">Choose another machine</button><button class="btn ghost" id="miHome" type="button">Back to homepage</button></div></div>`;
  const clean=()=>{box.hidden=true;box.innerHTML='';G.cardOpen=false;miniStop()};
  gq('#miAgain').addEventListener('click',()=>{clean();startJourney(id)});gq('#miOther').addEventListener('click',()=>{clean();showPick()});gq('#miHome').addEventListener('click',()=>{clean();closeGame()});VO.line('Mission complete! '+h,null,true)}
/* ---------- homepage scrollytelling: Earth → space → Mars surface → the Moon ----------
   One fixed 3D scene; the scroll position drives the camera. Machines appear one by one. */
const SX_MARS=['sojourner','spirit','opportunity','curiosity','insight','perseverance','ingenuity'];
const SX_MOON=['surveyor3','retro','lrv'];
const SX={on:false,segs:[],dev:{},cur:null,lastFrame:{},voT:0};
const X3=(x,y,z)=>new THREE.Vector3(x,y,z);
const sxE=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const clamp01=t=>Math.max(0,Math.min(1,t));
const lerpV=(a,b,t)=>a.clone().lerp(b,t);
const SXP={E:X3(0,0,0),P1:X3(0,60,-30),P2:X3(0,60,-330),VOY:X3(11,61,-185),MS:X3(0,60,-950),GM:X3(5000,0,0),MO:X3(-3000,0,0),GL:X3(-6000,0,0),SP:40};
function sxModel(id,R){const m=mats(),def=MODELS[id](m,{m,sun:null});def.update(def.still[0],def.still[1],1.3,0);def.root.traverse(o=>{if(o.userData.extra)o.visible=false});
  const box=new THREE.Box3();def.root.traverse(o=>{if(o.isMesh&&o.visible){let v=true;o.traverseAncestors(a=>{if(a.visible===false)v=false});if(v)box.expandByObject(o)}});
  const s=box.getBoundingSphere(new THREE.Sphere()),k=R/Math.max(.2,s.radius),h=new THREE.Group(),inner=new THREE.Group();h.add(inner);inner.add(def.root);inner.scale.setScalar(k);
  def.root.position.set(-s.center.x,-box.min.y,-s.center.z);h.userData.def=def;return h}
function sxShip(){const g=new THREE.Group(),w=new THREE.MeshStandardMaterial({color:0xf4f4f4,roughness:.4}),r=new THREE.MeshStandardMaterial({color:0xe24a3b,roughness:.5});
  const b=new THREE.Mesh(new THREE.CylinderGeometry(.7,.8,4,20),w);g.add(b);const n=new THREE.Mesh(new THREE.ConeGeometry(.7,1.6,20),r);n.position.y=2.8;g.add(n);
  for(let i=0;i<4;i++){const f=new THREE.Mesh(new THREE.BoxGeometry(.1,1.2,1),r);const a=i*Math.PI/2;f.position.set(Math.cos(a)*.8,-1.6,Math.sin(a)*.8);f.rotation.y=-a;g.add(f)}
  const win=new THREE.Mesh(new THREE.SphereGeometry(.28,12,8),new THREE.MeshBasicMaterial({color:0x9fd8ff}));win.position.set(0,.9,.68);g.add(win);
  const fl=new THREE.Mesh(new THREE.ConeGeometry(.6,3.2,16,1,true),new THREE.MeshBasicMaterial({color:0xffa040,transparent:true,opacity:.9,depthWrite:false}));fl.rotation.x=Math.PI;fl.position.y=-3.6;g.add(fl);g.userData.fl=fl;
  const sc=new THREE.Group();sc.add(g);g.scale.setScalar(.8);return sc}
function sxGround(world,n,origin){const L=n*SXP.SP+260,D=520,geo=new THREE.PlaneGeometry(L,D,Math.round(L/4),130);geo.rotateX(-Math.PI/2);
  const pos=geo.attributes.position,col=[],rand=rng(world==='mars'?5:9),c1=new THREE.Color(world==='mars'?0xc9693f:0x5d5d64),c2=new THREE.Color(world==='mars'?0xe9a36a:0x86868d);
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i),d=Math.abs(z-0),flat=Math.min(1,Math.max(0,(d-12)/40));
    let y=(Math.sin(x*.05)*Math.cos(z*.06)*2.2+Math.sin(x*.17+z*.11)*.6)*flat+Math.max(0,-z-120)*.35*(1+Math.sin(x*.02));
    if(world==='moon'){const cx=Math.sin(x*.031)*Math.cos(z*.043);y-=Math.max(0,cx-.7)*9*flat}
    pos.setY(i,y);const c=c1.clone().lerp(c2,clamp01(.5+y*.08+(rand()-.5)*.25));col.push(c.r,c.g,c.b)}
  geo.setAttribute('color',new THREE.Float32BufferAttribute(col,3));geo.computeVertexNormals();
  const g=new THREE.Group(),mesh=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true}));mesh.position.x=L/2-130;g.add(mesh);
  const rm=new THREE.MeshStandardMaterial({color:world==='mars'?0x9b4a26:0x77777e,roughness:1,flatShading:true});
  for(let i=0;i<n*22;i++){const x=rand()*(L-60)-100,z=(rand()<.5?-1:1)*(6+rand()*90);if(Math.abs(z)<7)continue;const s=.4+rand()*rand()*3.4,r=new THREE.Mesh(new THREE.DodecahedronGeometry(s,0),rm);r.position.set(x,s*.3,z);r.rotation.set(rand()*3,rand()*3,rand()*3);g.add(r)}
  g.position.copy(origin);return g}
function sxStars(){const n=2600,a=new Float32Array(n*3),rand=rng(4);for(let i=0;i<n;i++){const v=X3(rand()-.5,rand()-.5,rand()-.5).normalize().multiplyScalar(1400+rand()*600);a.set([v.x,v.y,v.z],i*3)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(a,3));return new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:2.2,sizeAttenuation:false}))}
function sxBuild(){const cv=$('#sxCv');if(!cv||!hasGL())return false;
  const r=new THREE.WebGLRenderer({canvas:cv,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
  const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,4000);
  sc.add(new THREE.HemisphereLight(0xdfe8ff,0x3a2c22,.75));const sun=new THREE.DirectionalLight(0xffffff,1.15);sun.position.set(-1,1.4,1);sc.add(sun);
  const add=(o,p)=>{o.position.copy(p);sc.add(o);return o};
  const earth=add(planetMesh('earth'),SXP.E);earth.scale.setScalar(10);
  const mars=add(planetMesh('mars'),SXP.MS);mars.scale.setScalar(70);
  const moon=add(planetMesh('moon'),SXP.MO);moon.scale.setScalar(40);
  const moonSky=add(planetMesh('earth'),SXP.GL.clone().add(X3(260,330,-1300)));moonSky.scale.setScalar(70);
  const marsSky=new THREE.Mesh(new THREE.SphereGeometry(18,24,16),new THREE.MeshBasicMaterial({color:0xfff2cc}));add(marsSky,SXP.GM.clone().add(X3(500,420,-1400)));
  const ship=sxShip();sc.add(ship);
  const voy=sxModel('voyager1',6);add(voy,SXP.VOY);
  SX_MARS.forEach((id,k)=>{const h=sxModel(id,id==='sojourner'?1.7:id==='ingenuity'?2.7:3.1);h.rotation.y=-.45;add(h,SXP.GM.clone().add(X3(k*SXP.SP,0,0)));SX.dev[id]=h});
  SX_MOON.forEach((id,k)=>{const h=sxModel(id,id==='retro'?2.2:3.1);h.rotation.y=-.45;add(h,SXP.GL.clone().add(X3(k*SXP.SP,0,0)));SX.dev[id]=h});
  sc.add(sxGround('mars',SX_MARS.length,SXP.GM),sxGround('moon',SX_MOON.length,SXP.GL));
  const stars=sxStars();sc.add(stars);
  Object.assign(SX,{r,sc,cam,earth,mars,moon,ship,voy,stars,sun,fade:$('#sxFade')});
  const fit=()=>{const w=innerWidth,h=innerHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.fov=w<h?68:50;cam.updateProjectionMatrix()};fit();addEventListener('resize',fit);
  return true}
/* camera for each kind of section; t is 0..1 through the section */
function sxCam(seg,t,k,side){const C=SX.cam,ship=SX.ship;let pos,look,fade=0,sky='space',sp=X3(0,0,0),dir=X3(0,1,0),flame=1;
  if(seg==='earth'){const e=sxE(clamp01((t-.12)/.88));sp=lerpV(X3(0,10.4,0),SXP.P1,e);dir=X3(0,1,-e*.9).normalize();flame=t>.08?1:0;
    pos=lerpV(X3(0,9,26),X3(16,72,30),sxE(t));look=lerpV(X3(-9,6,0),sp,sxE(clamp01(t*1.4)))}
  else if(seg==='cruise'){sp=lerpV(SXP.P1,SXP.P2,t);dir=X3(0,0,-1);const w=Math.max(0,1-Math.abs(sp.z-SXP.VOY.z)/70);pos=sp.clone().add(X3(4+w*10,3+w*2,16-w*4));look=lerpV(sp,SXP.VOY,sxE(w));if(innerWidth<=820)look.y-=6}
  else if(seg==='toMars'){const e=sxE(clamp01(t/.8));sp=lerpV(SXP.P2,SXP.MS.clone().add(X3(0,0,92)),e);dir=X3(0,0,-1);pos=lerpV(SXP.P2.clone().add(X3(4,3,16)),SXP.MS.clone().add(X3(0,12,128)),e);look=lerpV(sp,SXP.MS,e);fade=clamp01((t-.82)/.16)}
  else if(seg==='toMoon'){const e=sxE(t);sp=SXP.MO.clone().add(X3(0,0,300));flame=0;pos=lerpV(SXP.MO.clone().add(X3(40,30,280)),SXP.MO.clone().add(X3(0,14,55)),e);look=SXP.MO.clone();fade=Math.max(clamp01(1-t/.12),clamp01((t-.84)/.14))}
  else if(seg==='mars'||seg==='moon'){const O=seg==='mars'?SXP.GM:SXP.GL,n=seg==='mars'?SX_MARS.length:SX_MOON.length,x=(k-.45+t*.9)*SXP.SP;
    pos=O.clone().add(X3(x,3.4,10.5));const off=innerWidth>820?(side==='r'?4.2:-4.2):0;look=O.clone().add(X3(k*SXP.SP+(t-.5)*6+off,innerWidth>820?1.6:-.6,0));
    if(k===0&&t<.4){const e=sxE(t/.4);pos.y=O.y+lerpN(70,3.4,e);pos.z=O.z+lerpN(60,10.5,e)}
    if(k===0)fade=clamp01(1-t/.1);if(k===n-1&&seg==='mars')fade=Math.max(fade,clamp01((t-.88)/.12));
    sky=seg;sp=null}
  else if(seg==='end'){const O=SXP.GL,x=(SX_MOON.length-1+.45)*SXP.SP,e=sxE(t);pos=lerpV(O.clone().add(X3(x,3.4,10.5)),O.clone().add(X3(x+20,40,60)),e);look=lerpV(O.clone().add(X3(x-4,1.6,0)),O.clone().add(X3(260,330,-1300)),e);sky='moon';sp=null}
  C.position.copy(pos);C.lookAt(look);SX.mars.visible=seg==='cruise'||seg==='toMars';SX.voy.visible=seg==='cruise';
  if(sp){ship.visible=true;ship.position.copy(sp);ship.quaternion.setFromUnitVectors(X3(0,1,0),dir);ship.children[0].userData.fl.visible=!!flame}else ship.visible=false;
  const bg=sky==='mars'?0xe3b58a:0x02040a;SX.sc.background=new THREE.Color(bg);SX.sc.fog=sky==='mars'?new THREE.Fog(0xe3b58a,40,420):sky==='moon'?new THREE.Fog(0x02040a,120,900):null;
  SX.stars.visible=sky!=='mars';SX.stars.position.copy(C.position);SX.fade.style.opacity=fade.toFixed(3)}
const lerpN=(a,b,t)=>a+(b-a)*t;
/* which section is on screen, and how far through it */
function sxUpdate(){if(!SX.segs.length)return;let cur=SX.segs[0],t=0;
  for(const s of SX.segs){const r=s.el.getBoundingClientRect();if(r.top<=1&&r.bottom>1){cur=s;t=clamp01(-r.top/Math.max(1,r.height-innerHeight));break}if(r.top>1){cur=s;t=0;break}}
  if(SX.r)sxCam(cur.seg,t,cur.k,cur.el.classList.contains('r')?'r':'l');
  SX.segs.forEach(s=>{const on=s===cur;s.el.classList.toggle('on',on);if(on){s.el.style.setProperty('--t',t.toFixed(4));
    s.el.querySelectorAll('[data-in]').forEach(e=>e.classList.toggle('show',t>=+e.dataset.in&&t<(+e.dataset.out||1.01)))}});
  if(cur.dev)sxFrame(cur,t);
  $$('#sxRail i').forEach(i=>i.classList.toggle('on',i.dataset.c===cur.ch));SX.cur=cur}
function sxFrame(s,t){const n=s.frames.length,i=Math.min(n-1,Math.floor(clamp01((t-.06)/.86)*n));if(SX.lastFrame[s.dev]===i)return;SX.lastFrame[s.dev]=i;
  s.el.querySelectorAll('.dm-pan').forEach(p=>p.classList.toggle('on',+p.dataset.k===i));s.el.querySelector('.sx-cap').textContent=s.frames[i].t;
  s.el.querySelectorAll('.sx-dots i').forEach((d,k)=>d.classList.toggle('on',k<=i));
  if(AP.on)return;clearTimeout(SX.voT);VO.stop();if(VO.on)SX.voT=setTimeout(()=>{if(SX.cur===s&&SX.lastFrame[s.dev]===i)VO.line(s.frames[i].t)},650)}
function sxCard(id,ch,k,n,side){const m=byId[id],E=EQUIP[id],F=demoScenes(id);
  return {F,html:`<section class="sx-seg sx-dev ${side}" data-seg="${ch}" data-k="${k}" data-dev="${id}" style="height:${Math.max(260,F.length*55)}vh"><div class="sx-st">
   <div class="sx-big" aria-hidden="true">${m.name}</div>
   <article class="sx-card"><p class="sx-ch">${ch==='mars'?'🔴 Mars':ch==='moon'?'⚪ The Moon':'🌌 Deep space'} · machine ${k+1} of ${n}</p><h2>${m.name}</h2><p class="sx-one">${E.goal}</p>
    <div class="sx-demo demo"><div class="dm-stage">${F.map((f,j)=>`<div class="dm-pan" data-k="${j}"><svg viewBox="0 0 400 260" role="img" aria-label="${m.name}: picture ${j+1}">${f.svg}</svg></div>`).join('')}</div></div>
    <p class="sx-cap" aria-live="polite"></p><div class="sx-dots">${F.map(()=>'<i></i>').join('')}</div>
    <p class="sx-chips"><span class="badge" data-st="${m.status}">${ST[m.status]}</span></p></article>
   <p class="sx-more" aria-hidden="true">Keep scrolling ↓</p></div></section>`}}
function initScrolly(){const root=$('#scrolly');if(!root)return;
  const parts=[],add=(c,ch)=>{parts.push(c)};let html='';
  const mk=(id,ch,k,n,side)=>{const c=sxCard(id,ch,k,n,side);parts.push({id,ch,k,F:c.F});return c.html};
  html+=$('#sxIntro').innerHTML;
  html+=mk('voyager1','cruise',0,1,'r');
  html+=`<section class="sx-seg sx-title" data-seg="toMars" style="height:170vh"><div class="sx-st"><div class="sx-word sx-mars" aria-hidden="true">MARS</div><div class="sx-lines"><p data-in=".04" data-out=".3">Next stop: <b>Mars</b>, the red planet.</p><p data-in=".3" data-out=".58">${SX_MARS.length} machines are waiting for us there.</p><p data-in=".58" data-out=".85">Hold on… we’re going down to the surface!</p></div></div></section>`;
  SX_MARS.forEach((id,k)=>html+=mk(id,'mars',k,SX_MARS.length,k%2?'r':'l'));
  html+=`<section class="sx-seg sx-title" data-seg="toMoon" style="height:170vh"><div class="sx-st"><div class="sx-word" aria-hidden="true">MOON</div><div class="sx-lines"><p data-in=".1" data-out=".36">Now let’s fly to <b>the Moon</b>.</p><p data-in=".36" data-out=".6">Astronauts and robots left ${SX_MOON.length} machines there.</p><p data-in=".6" data-out=".86">Landing on the surface…</p></div></div></section>`;
  SX_MOON.forEach((id,k)=>html+=mk(id,'moon',k,SX_MOON.length,k%2?'r':'l'));
  html+=$('#sxEnd').innerHTML;
  $('#sxFlow').innerHTML=html;
  SX.segs=$$('#sxFlow .sx-seg').map(el=>{const d=el.dataset,p=parts.find(x=>x.id===d.dev);return {el,seg:d.seg,k:+d.k||0,dev:d.dev||null,frames:p?p.F:[],ch:{earth:'earth',cruise:'space',toMars:'mars',mars:'mars',toMoon:'moon',moon:'moon',end:'play'}[d.seg]}});
  const ok=sxBuild();if(!ok)document.body.classList.add('sx-nogl');
  $$('[data-play-game]').forEach(b=>b.addEventListener('click',()=>openGame()));
  let raf=0;const tick=()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;sxUpdate()})};addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);
  sxUpdate();initAutoplay();
  if(ok)(function loop(){requestAnimationFrame(loop);if(document.hidden||(gq('#gm')&&!gq('#gm').hidden))return;const t=performance.now()/1000;
    const fl=SX.ship.children[0].userData.fl;fl.scale.set(1,.8+Math.random()*.5,1);SX.earth.rotation.y=t*.03;SX.mars.rotation.y=t*.02;SX.moon.rotation.y=t*.015;SX.voy.rotation.y=t*.15;
    const ing=SX.dev.ingenuity;if(ing)ing.position.y=SXP.GM.y+2.2+Math.sin(t*2)*.5;
    SX.r.render(SX.sc,SX.cam)})()}
/* ---------- autoplay: countdown, then each picture is read aloud and moves on by itself ---------- */
const AP={on:false,i:-1,stops:[],tw:0,tok:0,T:0};
function apStops(){const S=[];SX.segs.forEach(s=>{const top=s.el.getBoundingClientRect().top+scrollY,span=Math.max(1,s.el.offsetHeight-innerHeight),at=t=>top+span*t;
  if(s.seg==='earth'){S.push({y:at(0),count:1},{y:at(.45),say:'Lift-off!',dur:3600},{y:at(.8),say:'Goodbye, Earth! Into deep space we go.',dur:2600})}
  else if(s.dev){const n=s.frames.length;s.frames.forEach((f,j)=>S.push({y:at(.06+.86*(j+.5)/n),say:f.t,dur:j?1100:2600}))}
  else if(s.seg==='end'){S.push({y:at(.75),say:'You met all 11 machines! Now let me guide you to the museum.',dur:4200,last:1,then:1})}
  else{const ps=[...s.el.querySelectorAll('[data-in]')];ps.forEach(p=>{const a=+p.dataset.in,b=+(p.dataset.out||1);S.push({y:at((a+Math.min(b,a+.25))/2),say:p.textContent,dur:2400})})}});return S}
function apTween(y,ms,done){cancelAnimationFrame(AP.tw);const y0=scrollY,t0=performance.now();AP.moving=true;
  const step=now=>{const k=Math.min(1,(now-t0)/ms),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;scrollTo({top:y0+(y-y0)*e,behavior:'instant'});if(k<1)AP.tw=requestAnimationFrame(step);else{AP.moving=false;done&&done()}};AP.tw=requestAnimationFrame(step)}
function apGo(i,fast){if(!AP.on)return;AP.stops=apStops();if(i>=AP.stops.length){apStop();return}AP.i=i;const my=++AP.tok;clearTimeout(AP.T);VO.stop();clearTimeout(SX.voT);const s=AP.stops[i];
  apTween(s.y,fast?450:Math.max(700,Math.min(s.dur||1400,Math.abs(s.y-scrollY)*.9)),()=>{if(my!==AP.tok)return;
    if(s.count){apCount(()=>{if(my===AP.tok)apGo(i+1)});return}
    VO.line(s.say,()=>{if(my!==AP.tok||!AP.on)return;if(s.last){apStop();if(s.then)setTimeout(storyGuide,900);return}AP.T=setTimeout(()=>{if(my===AP.tok)apGo(i+1)},700)})})}
function apCount(done){const el=$('#apCount');el.hidden=false;let n=3;const tick=()=>{if(!AP.on){el.hidden=true;return}if(n===0){el.textContent='LIFT-OFF!';el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');SFX.boost&&SFX.boost();setTimeout(()=>{el.hidden=true;done()},700);return}
  el.textContent=n;el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');SFX.tick();VO.line(String(n),null);n--;AP.T=setTimeout(tick,1000)};tick()}
function apStart(from){AP.on=true;document.body.classList.add('ap-on');$('#apBar').hidden=false;$('#apPlay').hidden=true;
  let i=0;if(from==null){const st=apStops();i=st.findIndex(s=>s.y>scrollY+40);if(i<0)i=st.length-1}else i=from;apGo(i)}
function apStop(){AP.on=false;AP.tok++;clearTimeout(AP.T);cancelAnimationFrame(AP.tw);AP.moving=false;VO.stop();document.body.classList.remove('ap-on');$('#apPlay').hidden=false;$('#apCount').hidden=true}
function apNext(){if(!AP.on){apStart();return}VO.stop();apGo(AP.i+1,true)}
function initAutoplay(){if(!$('#scrolly'))return;document.body.insertAdjacentHTML('beforeend',`<div class="ap-count" id="apCount" hidden aria-live="assertive"></div>
  <div class="ap-bar" id="apBar"><span class="ap-k"><kbd>Space</kbd> skip ahead ⏩</span><button type="button" class="ap-b" id="apSkip">Skip ⏩</button><button type="button" class="ap-b ap-p" id="apPlay">▶ Auto-play</button></div>`);
  $('#apSkip').addEventListener('click',apNext);$('#apPlay').addEventListener('click',()=>apStart());
  addEventListener('keydown',e=>{if(e.key!==' '&&e.code!=='Space')return;if($('#tour')||(gq('#gm')&&!gq('#gm').hidden)||!$('#layer').hidden||/input|textarea|button/i.test((e.target.tagName||'')))return;e.preventDefault();apNext()});
  const user=()=>{if(AP.on&&!AP.moving)apStop()};const userMove=()=>{if(AP.on){apStop()}};
  addEventListener('wheel',userMove,{passive:true});addEventListener('touchmove',userMove,{passive:true});
  $('#apPlay').hidden=false}

/* ---------- the story plays once ---------- */
function storySet(){try{sessionStorage.setItem("sm_in","1")}catch(e){}try{if(!/sm_in/.test(window.name))window.name+=" sm_in"}catch(e){}}
function storyEnter(){storySet();location.href='index.html'}
function storyWatch(){const e=document.getElementById('storyEnter');if(!e)return;e.addEventListener('click',()=>storySet());
  const chk=()=>{const end=document.querySelector('.sx-endsec');if(end&&end.getBoundingClientRect().top<innerHeight*.35){storySet();removeEventListener('scroll',chk)}};addEventListener('scroll',chk,{passive:true})}

/* ============ ASTRONAUT STORIES ============
   y: years of their NASA career. ms: missions [date, name, what they did]. dev: machines from this museum they worked with. */
const ASTRO=[
 {id:'armstrong',img:'assets/img/astro-armstrong.jpg',n:'Neil Armstrong',r:'Apollo 11 commander',y:[1962,1971],c:'#c9cdd5',astro:1,
  ms:[['Mar 1966','Gemini 8','Commanded the first docking of two spacecraft in orbit, then saved the mission when a thruster stuck on.'],['Jul 1969','Apollo 11','Became the first person to walk on the Moon.']],dev:['retro'],
  s:['A test pilot who had flown the X-15 rocket plane to the edge of space, Armstrong joined NASA\'s second group of astronauts in 1962.','On 20 July 1969 he steered the lunar module Eagle past a field of boulders and landed with only seconds of fuel to spare.','During the moonwalk he and Aldrin set up the first laser mirror, which observatories still use today.'],
  f:'Armstrong\'s first step was watched live on TV by an estimated 600 million people.'},
 {id:'aldrin',img:'assets/img/astro-aldrin.jpg',n:'Buzz Aldrin',r:'Apollo 11 lunar module pilot',y:[1963,1971],c:'#c9cdd5',astro:1,
  ms:[['Nov 1966','Gemini 12','Showed that astronauts could work outside a spacecraft, using handholds and foot restraints.'],['Jul 1969','Apollo 11','Second person on the Moon. Set up a seismometer beside the laser mirror.']],dev:['retro'],
  s:['Aldrin earned a doctorate from MIT on how spacecraft meet up in orbit. Fellow astronauts nicknamed him "Dr Rendezvous".','On Apollo 11 he set up the seismometer while Armstrong placed the laser mirror nearby.'],
  f:'Aldrin\'s spacewalk techniques on Gemini 12 shaped how astronauts train underwater today.'},
 {id:'conrad',img:'assets/img/astro-conrad.jpg',n:'Pete Conrad',r:'Apollo 12 commander',y:[1962,1973],c:'#ff8f70',astro:1,
  ms:[['Aug 1965','Gemini 5','Eight days in orbit, a new record at the time.'],['Sep 1966','Gemini 11','Commanded a flight that reached a record altitude of about 1,370 km.'],['Nov 1969','Apollo 12','Landed a short walk from Surveyor 3 and brought its camera home.'],['May 1973','Skylab 2','Led the crew that repaired the damaged Skylab space station.']],dev:['surveyor3'],
  s:['Conrad was known for his humour. His first words on the Moon were a joke about his height: "That may have been a small one for Neil, but that\'s a long one for me."','His pinpoint landing near Surveyor 3 proved Apollo could land exactly where planned, which was vital for later missions to rough terrain.'],
  f:'Apollo 12 was struck by lightning twice during launch. The crew kept calm and carried on to the Moon.'},
 {id:'bean',img:'assets/img/astro-bean.jpg',n:'Alan Bean',r:'Apollo 12 lunar module pilot',y:[1963,1981],c:'#ff8f70',astro:1,
  ms:[['Nov 1969','Apollo 12','Fourth person on the Moon. Helped remove parts of Surveyor 3.'],['Jul 1973','Skylab 3','Commanded a 59-day mission on the Skylab space station.']],dev:['surveyor3'],
  s:['Bean and Conrad walked to Surveyor 3 and cut off its camera and other pieces with bolt cutters.','After leaving NASA he became a painter. He mixed tiny bits of Moon dust from his spacesuit patches into his paintings of the Apollo missions.'],
  f:'Bean called himself the first artist to visit another world.'},
 {id:'shepard',img:'assets/img/astro-shepard.jpg',n:'Alan Shepard',r:'Apollo 14 commander',y:[1959,1974],c:'#7cc4ff',astro:1,
  ms:[['May 1961','Freedom 7','Became the first American in space, on a 15-minute flight.'],['Feb 1971','Apollo 14','Set up the second laser mirror array at Fra Mauro.']],dev:['retro'],
  s:['One of NASA\'s first seven astronauts, Shepard was grounded for years by an inner-ear illness. Surgery fixed it, and he flew to the Moon at 47.','Before leaving the Moon he hit two golf balls with a club head attached to a sampling tool. The balls are still up there.'],
  f:'Shepard is the only one of the first seven American astronauts to walk on the Moon.'},
 {id:'mitchell',img:'assets/img/astro-mitchell.jpg',n:'Edgar Mitchell',r:'Apollo 14 lunar module pilot',y:[1966,1972],c:'#7cc4ff',astro:1,
  ms:[['Feb 1971','Apollo 14','Sixth person on the Moon. Helped set up the science station and laser mirror.']],dev:['retro'],
  s:['Mitchell held a doctorate in aeronautics and astronautics from MIT.','At Fra Mauro he and Shepard pulled a two-wheeled cart, the "rickshaw", to carry tools and rock samples.'],
  f:'Apollo 14 brought home about 42 kilograms of Moon rock.'},
 {id:'scott',img:'assets/img/astro-scott.jpg',n:'Dave Scott',r:'Apollo 15 commander',y:[1963,1977],c:'#62d9a5',astro:1,
  ms:[['Mar 1966','Gemini 8','Flew with Armstrong on the first docking in space.'],['Mar 1969','Apollo 9','Tested the lunar module in Earth orbit.'],['Jul 1971','Apollo 15','Drove the first car on the Moon.']],dev:['lrv','retro'],
  s:['Apollo 15 was the first of the long "J missions", with three moonwalks and the Lunar Roving Vehicle.','On camera, Scott dropped a hammer and a falcon feather at the same time. With no air to slow the feather, both hit the ground together, just as Galileo predicted.'],
  f:'Scott and Irwin found the "Genesis Rock", a piece of the Moon\'s ancient crust.'},
 {id:'irwin',img:'assets/img/astro-irwin.jpg',n:'Jim Irwin',r:'Apollo 15 lunar module pilot',y:[1966,1972],c:'#62d9a5',astro:1,
  ms:[['Jul 1971','Apollo 15','Rode beside Scott in the first Moon rover and set up the largest laser mirror.']],dev:['lrv','retro'],
  s:['Irwin navigated the rover along the edge of Hadley Rille, a winding valley on the Moon.','He said the view of Earth from the Moon changed the rest of his life.'],
  f:'Apollo 15\'s rover drove about 28 kilometres over three moonwalks.'},
 {id:'young',img:'assets/img/astro-young.jpg',n:'John Young',r:'Apollo 16 commander',y:[1962,2004],c:'#f7c548',astro:1,
  ms:[['Mar 1965','Gemini 3','Flew on the first crewed Gemini flight.'],['May 1969','Apollo 10','Orbited the Moon in a dress rehearsal for the landing.'],['Apr 1972','Apollo 16','Drove the rover in the "Grand Prix" test.'],['Apr 1981','STS-1','Commanded the first Space Shuttle flight.']],dev:['lrv'],
  s:['Young had one of the longest careers of any astronaut: 42 years at NASA, from Gemini to the Space Shuttle.','On Apollo 16 he raced the rover in tight turns so engineers could see how it handled.'],
  f:'Young once sneaked a corned beef sandwich onto Gemini 3, which made the NASA managers furious.'},
 {id:'duke',img:'assets/img/astro-duke.jpg',n:'Charlie Duke',r:'Apollo 16 lunar module pilot',y:[1966,1975],c:'#f7c548',astro:1,
  ms:[['Jul 1969','Apollo 11','As capsule communicator, he was the voice in Houston that talked Apollo 11 down to the landing.'],['Apr 1972','Apollo 16','Tenth person on the Moon. Filmed the rover Grand Prix.']],dev:['lrv'],
  s:['When Armstrong said "The Eagle has landed", Duke answered from Houston: "You got a bunch of guys about to turn blue. We\'re breathing again."','Three years later he walked on the Moon himself, and left a photo of his family there.'],
  f:'At 36, Duke was the youngest person ever to walk on the Moon.'},
 {id:'cernan',img:'assets/img/astro-cernan.jpg',n:'Gene Cernan',r:'Apollo 17 commander',y:[1963,1976],c:'#b89cff',astro:1,
  ms:[['Jun 1966','Gemini 9A','Made a difficult spacewalk.'],['May 1969','Apollo 10','Flew to within 15 km of the Moon\'s surface.'],['Dec 1972','Apollo 17','Last person to walk on the Moon so far.']],dev:['lrv'],
  s:['Cernan set the lunar speed record and fixed the rover\'s broken fender with maps and duct tape.','Before climbing back into the lunar module, he traced his daughter\'s initials in the Moon dust.'],
  f:'No one has walked on the Moon since Cernan left on 14 December 1972.'},
 {id:'schmitt',img:'assets/img/astro-schmitt.jpg',n:'Harrison Schmitt',r:'Apollo 17 geologist',y:[1965,1975],c:'#b89cff',astro:1,
  ms:[['Dec 1972','Apollo 17','The first scientist to walk on the Moon. Found orange soil made by ancient volcanoes.']],dev:['lrv'],
  s:['Schmitt was a trained geologist who helped teach other astronauts how to read rocks.','He later served as a US Senator for New Mexico.'],
  f:'The "Blue Marble" photo of the whole Earth was taken by the Apollo 17 crew on the way to the Moon.'}
];
/* squads: groups of people, shown with their history and members */
const SQUADS_ASTRO=[
 {id:'apollo11',squad:1,n:'Apollo 11 crew',r:'First crew to land on the Moon',y:[1969,1969],c:'#c9cdd5',
  mem:[['Neil Armstrong','Commander. First to step onto the Moon.','armstrong'],['Buzz Aldrin','Lunar module pilot. Second on the surface.','aldrin'],['Michael Collins','Command module pilot. Orbited alone in Columbia while the others landed.']],
  ms:[['16 Jul 1969','Launch','A Saturn V lifts off from Kennedy Space Center.'],['20 Jul 1969','Landing','Eagle lands at Tranquility Base.'],['21 Jul 1969','Moonwalk','About two and a half hours outside, setting up experiments and the laser mirror.'],['24 Jul 1969','Splashdown','Columbia lands in the Pacific Ocean.']],dev:['retro'],
  s:['Three test pilots who barely knew each other before training became the most famous crew in history.','Collins never walked on the Moon. He circled it alone, out of radio contact every time he passed behind it.'],f:'The crew spent 21 days in quarantine after coming home, in case they carried Moon germs.'},
 {id:'apollo17',squad:1,n:'Apollo 17 crew',r:'Last crew to land on the Moon',y:[1972,1972],c:'#b89cff',
  mem:[['Gene Cernan','Commander. Last person to walk on the Moon so far.','cernan'],['Harrison Schmitt','Geologist and lunar module pilot.','schmitt'],['Ronald Evans','Command module pilot. Stayed in orbit in America.']],
  ms:[['7 Dec 1972','Night launch','The first crewed launch at night lit up the Florida sky.'],['11 Dec 1972','Landing','Challenger lands in the Taurus–Littrow valley.'],['14 Dec 1972','Leaving the Moon','Cernan is the last to climb back aboard.'],['19 Dec 1972','Splashdown','The Apollo Moon landings come to an end.']],dev:['lrv'],
  s:['Apollo 17 spent more time on the Moon than any other crew: about three days on the surface.','Their rover drove about 36 kilometres, and Schmitt found orange volcanic soil.'],f:'On the way to the Moon, the crew took the famous "Blue Marble" photo of the whole Earth.'}
];
const TEAM=[
 {id:'squyres',img:'assets/img/team-squyres.jpg',n:'Steve Squyres',r:'Principal investigator, Spirit and Opportunity',y:[1997,2019],c:'#7cc4ff',ms:[['Jan 2004','Spirit and Opportunity land','Led the science team for both rovers for their whole missions.']],dev:['spirit','opportunity'],
  s:['Squyres spent years proposing a Mars rover before NASA said yes.','His team planned each day of driving, and guided the rovers to the evidence of ancient water.'],f:'The rovers were built to last 90 days. Opportunity lasted almost 15 years.'},
 {id:'stone',img:'assets/img/team-stone.jpg',n:'Ed Stone',r:'Voyager project scientist',y:[1972,2022],c:'#f7c548',ms:[['Mar 1979','Jupiter flyby','Explained Voyager\'s discoveries to the world, flyby after flyby.'],['Aug 2012','Interstellar space','Announced that Voyager 1 had left the Sun\'s bubble.']],dev:['voyager1'],
  s:['Stone was Voyager\'s chief scientist for 50 years, from before launch until 2022.','He also directed NASA\'s Jet Propulsion Laboratory from 1991 to 2001.'],f:'Voyager 2, Voyager 1\'s twin, is still the only spacecraft to have visited Uranus and Neptune.'},
 {id:'sagan',img:'assets/img/team-sagan.jpg',n:'Carl Sagan',r:'Voyager imaging team',y:[1977,1996],c:'#ff8f70',ms:[['1977','The Golden Record','Led the committee that chose the sounds and pictures on the record.'],['Feb 1990','The Pale Blue Dot','Persuaded NASA to turn the cameras back towards Earth.']],dev:['voyager1'],
  s:['Sagan was an astronomer who made space exciting for millions through his books and TV series.','His words about the Pale Blue Dot reminded people that Earth is our only home.'],f:'The Golden Record has greetings in 55 languages.'},
 {id:'aung',img:'assets/img/team-aung.jpg',n:'MiMi Aung',r:'Ingenuity project manager',y:[2015,2021],c:'#62d9a5',ms:[['Apr 2021','First flight on Mars','Led the team that built and flew Ingenuity.']],dev:['ingenuity'],
  s:['Aung led the small team that turned the idea of a Mars helicopter into a working aircraft.','When the first flight data came in, she announced to the team: "We can now say that human beings have flown a rotorcraft on another planet."'],f:'Ingenuity weighs about 1.8 kilograms.'},
 {id:'banerdt',img:'assets/img/team-banerdt.jpg',n:'Bruce Banerdt',r:'InSight principal investigator',y:[2012,2022],c:'#c9a27a',ms:[['Apr 2019','First marsquake','Led the mission that heard the inside of Mars.']],dev:['insight'],
  s:['Banerdt spent decades pushing for a seismometer on Mars before InSight was approved.','The quakes InSight recorded measured the size of the Martian core for the first time.'],f:'InSight detected more than 1,313 marsquakes.'},
 {id:'steltzner',img:'assets/img/team-steltzner.jpg',n:'Adam Steltzner',r:'Landing team lead, Curiosity',y:[1991,2026],c:'#b89cff',ms:[['Aug 2012','Curiosity lands','Led the team behind the sky crane landing.'],['Feb 2021','Perseverance lands','Chief engineer for the Mars 2020 mission.']],dev:['curiosity','perseverance'],
  s:['Steltzner\'s team designed the sky crane, which lowered Curiosity on cables from a rocket-powered platform.','The same system landed Perseverance nine years later.'],f:'Engineers called Curiosity\'s landing "seven minutes of terror".'}
];
/* drawn portrait: spacesuit helmet or crew badge with initials (no photos of real people) */
function portrait(p,big){if(p.squad){const pics=p.mem.map(m=>m[2]&&[...ASTRO,...TEAM].find(x=>x.id===m[2])).filter(x=>x&&x.img).slice(0,3);return `<span class="pt pt-squad" aria-hidden="true">${pics.map(x=>`<img src="${x.img}" alt="">`).join('')}<em>${p.mem.length}</em></span>`}
  if(p.img)return `<img class="pt" src="${p.img}" alt="Official NASA portrait of ${p.n}" loading="lazy">`;const ini=p.n.split(' ').map(w=>w[0]).join('').slice(0,2),c=p.c;
  return p.astro?`<svg viewBox="0 0 120 120" class="pt" aria-hidden="true"><defs><radialGradient id="v${p.id}${big?1:0}" cx="40%" cy="35%"><stop offset="0" stop-color="#ffe6a3"/><stop offset=".55" stop-color="#d8a63a"/><stop offset="1" stop-color="#6b4b10"/></radialGradient></defs><rect width="120" height="120" fill="#121a2b"/><path d="M14 120c4-26 22-38 46-38s42 12 46 38z" fill="#eceae4"/><rect x="48" y="96" width="24" height="16" rx="3" fill="${c}"/><circle cx="60" cy="56" r="36" fill="#f4f3ef"/><ellipse cx="60" cy="58" rx="26" ry="22" fill="url(#v${p.id}${big?1:0})"/><path d="M42 50c6-8 18-12 30-8" stroke="#fff" stroke-width="4" opacity=".55" fill="none"/><text x="60" y="66" font-family="Unbounded,Arial Black,sans-serif" font-weight="800" font-size="18" fill="#1d1606" text-anchor="middle" opacity=".75">${ini}</text></svg>`
  :`<svg viewBox="0 0 120 120" class="pt" aria-hidden="true"><rect width="120" height="120" fill="#121a2b"/><circle cx="60" cy="60" r="44" fill="none" stroke="${c}" stroke-width="5"/><circle cx="60" cy="60" r="34" fill="${c}" opacity=".18"/><text x="60" y="70" font-family="Unbounded,Arial Black,sans-serif" font-weight="800" font-size="28" fill="${c}" text-anchor="middle">${ini}</text></svg>`}
const SQUADS_TEAM=[
 {id:'goldenrecord',squad:1,n:'Golden Record team',r:'The message on Voyager',y:[1977,1977],c:'#f7c548',
  mem:[['Carl Sagan','Chaired the committee.','sagan'],['Frank Drake','Technical director.'],['Ann Druyan','Creative director.'],['Timothy Ferris','Producer of the record.'],['Jon Lomberg','Design director.'],['Linda Salzman Sagan','Collected the spoken greetings.']],
  ms:[['Early 1977','A tight deadline','The team had only weeks to choose what would represent Earth.'],['Mid 1977','Choosing','They picked music, natural sounds, greetings and more than 100 images.'],['Aug–Sep 1977','Launch','Copies flew on Voyager 2 and Voyager 1.']],dev:['voyager1'],
  s:['A small group of scientists, writers and artists had to decide how to introduce Earth to anyone, or anything, that might find Voyager.','The record\'s cover shows how to play it, using drawings and a code based on hydrogen atoms.'],f:'The record carries greetings in 55 languages.'},
 {id:'merteam',squad:1,n:'Spirit and Opportunity science team',r:'The rover drivers and geologists',y:[2004,2019],c:'#7cc4ff',
  mem:[['Steve Squyres','Principal investigator.','squyres'],['Ray Arvidson','Deputy principal investigator.'],['Jim Bell','Led the Pancam colour camera team.']],
  ms:[['Jan 2004','Two landings','Both rovers land three weeks apart.'],['Mar 2004','Water!','The team announces that Meridiani was once soaked in water.'],['2010–2011','Spirit falls silent','The team keeps listening for over a year.'],['Feb 2019','Goodbye, Oppy','The mission ends after almost 15 years.']],dev:['spirit','opportunity'],
  s:['To drive the rovers, team members lived on "Mars time", shifting their sleep by about 40 minutes every day to match a Martian day.','Many of them worked together for 15 years, far longer than anyone had planned.'],f:'A Martian day, a sol, is about 24 hours and 40 minutes long.'},
 {id:'ingteam',squad:1,n:'Ingenuity team',r:'The first Mars flight crew',y:[2015,2024],c:'#62d9a5',
  mem:[['MiMi Aung','Project manager.','aung'],['Bob Balaram','Chief engineer.'],['Håvard Grip','Chief pilot.'],['Teddy Tzanetos','Later project manager.']],
  ms:[['Apr 2021','First flight','The team gathers to watch the first data come in.'],['2021–2023','Beyond the plan','They turn a five-flight test into a scout for Perseverance.'],['Jan 2024','Flight 72','The mission ends after rotor damage.']],dev:['ingenuity'],
  s:['The team was small, and many of its engineers had never built an aircraft before.','They tested the helicopter in a vacuum chamber filled with thin carbon dioxide to copy Mars\'s air.'],f:'Ingenuity flew 72 times in about three years.'}
];
ASTRO.push(...SQUADS_ASTRO);TEAM.push(...SQUADS_TEAM);
let asTab='astro',asSel=null,asOpener=null;
function openAstro(id,from){
  if($('#as').classList.contains('as-page')){if(id){asTab=ASTRO.some(a=>a.id===id)?'astro':'team';asSel=id}drawAstro();$('#as').scrollIntoView({behavior:'smooth'});return}
  asOpener=from||document.activeElement;const L=$('#as');L.hidden=false;document.body.style.overflow='hidden';SFX.whoosh();
  if(id){asTab=ASTRO.some(a=>a.id===id)?'astro':'team';asSel=id}
  drawAstro();$('#asClose').focus();
}
function closeAstro(){VO.stop();$('#as').hidden=true;if($('#pd').hidden&&$('#layer').hidden)document.body.style.overflow='';asOpener&&asOpener.focus&&asOpener.focus()}
function drawAstro(){
  const list=asTab==='astro'?ASTRO:TEAM;if(!asSel||!list.some(a=>a.id===asSel))asSel=list[0].id;const p=list.find(a=>a.id===asSel);
  $$('#asTabs .tab').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.t===asTab)));
  $('#asList').innerHTML=list.map(a=>`<button class="as-i" data-id="${a.id}" aria-pressed="${a.id===asSel}">${portrait(a)}<span><b>${a.n}</b><small>${a.r}</small><i>${a.squad?'Squad · '+a.mem.length+' members · ':''}${a.y[0]}${a.y[1]!==a.y[0]?'–'+(a.y[1]===2026?'today':a.y[1]):''}</i></span></button>`).join('');
  const span=a=>a.y[1]-a.y[0],min=1955,max=2026,pct=v=>((v-min)/(max-min)*100).toFixed(1);
  $('#asD').innerHTML=`<div class="as-hd">${portrait(p,1)}<div><p class="eyebrow">${p.squad?'Squad':asTab==='astro'?'Astronaut':'People behind the mission'}</p><h2 id="asTitle">${p.n}</h2><p class="as-r">${p.r}</p>
     <button class="btn ghost listen" id="asListen" type="button">🔊 Listen</button></div></div>
   ${p.squad?`<h3>Squad members · ${p.mem.length}</h3><div class="ppl">${p.mem.map(([nm,role,ref])=>{const P=ref&&[...ASTRO,...TEAM].find(x=>x.id===ref);return `<${P?'button type="button" data-goto="'+ref+'"':'div'} class="pp">${P&&P.img?`<img src="${P.img}" alt="">`:PERSON(!!(P&&P.astro))}<span><b>${nm}</b><small>${role}</small></span></${P?'button':'div'}>`}).join('')}</div>`:''}
   <h3>${p.squad?'Squad history':p.astro?'Work life at NASA':'Years on the mission'} · ${p.y[0]}${p.y[1]===p.y[0]?'':'–'+(p.y[1]===2026?'today':p.y[1])+' ('+span(p)+(p.y[1]===2026?'+':'')+' years)'}</h3>
   <div class="as-tl"><div class="as-bar" style="left:${pct(p.y[0])}%;width:${pct(p.y[1])-pct(p.y[0])}%"></div>${p.ms.map(m=>{const yy=+m[0].slice(-4);return `<i style="left:${pct(yy)}%" title="${m[1]}"></i>`}).join('')}<span style="left:0">1955</span><span style="left:50%">1990</span><span style="right:0">2026</span></div>
   <h3>${p.squad?'Their story, step by step':'Missions'}</h3><ol class="as-ms">${p.ms.map(m=>`<li><span class="y">${m[0]}</span><b>${m[1]}</b><span>${m[2]}</span></li>`).join('')}</ol>
   <h3>Their story</h3><div class="story">${p.s.map(x=>`<p>${x}</p>`).join('')}</div>
   <h3>Machines from this museum</h3><div class="as-dev">${p.dev.map(id=>`<div class="as-dv"><img alt="" data-thumb="${id}" ${PHOTOS[id]?`src="${PHOTOS[id][0]}"`:IMG[id]?`src="${IMG[id]}"`:'hidden'}><b>${byId[id].name}</b><span><button class="link" data-open="${id}">Story</button>${$('#gm')?`<button class="link" data-play="${id}">Play its journey</button>`:`<a class="link" href="index.html#play-${id}">Play its journey</a>`}</span></div>`).join('')}</div>
   <p class="as-f"><b>Did you know?</b> ${p.f}</p>
   <p class="note">${p.squad?'Squad members with a photo can be selected to see their own story.':p.img?(p.astro?'Portrait: official NASA photo.':'Photo supplied for this museum.'):'Badge is a drawn illustration.'}</p>`;
  p.dev.forEach(id=>{if(!IMG[id]&&!PHOTOS[id])setTimeout(()=>deviceImage(id),30)});
  $('#asD').scrollTop=0;
  $('#asListen').addEventListener('click',()=>VO.seq([p.n+'. '+p.r+'.',...(p.squad?['Members: '+p.mem.map(m=>m[0]).join(', ')+'.']:[]),...p.s,'Did you know? '+p.f],null,null,true));
}
function initAstro(){
  if(!$('#as'))return;
  $('#asTabs').addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(b){asTab=b.dataset.t;asSel=null;VO.stop();drawAstro()}});
  $('#asList').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b){asSel=b.dataset.id;VO.stop();drawAstro();if(matchMedia('(max-width:860px)').matches)$('#asD').scrollIntoView({behavior:'smooth'})}});
  $('#asD').addEventListener('click',e=>{const gt=e.target.closest('[data-goto]');if(gt){asSel=gt.dataset.goto;asTab=ASTRO.some(a=>a.id===asSel)?'astro':'team';VO.stop();drawAstro();return}const o=e.target.closest('[data-open]');if(o){openStory(o.dataset.open,o);return}const p=e.target.closest('[data-play]');if(p){closeAstro();openGame();startJourney(p.dataset.play)}});
  $('#asClose').addEventListener('click',closeAstro);
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#as').hidden&&$('#layer').hidden&&!$('#as').classList.contains('as-page')){closeAstro()}});
  if($('#as').classList.contains('as-page')){const h=location.hash.match(/^#astro-([a-z]+)$/);if(h){asSel=h[1];asTab=ASTRO.some(a=>a.id===h[1])?'astro':'team'}drawAstro()}
  $$('[data-astro]').forEach(x=>x.addEventListener('click',e=>{e.preventDefault();openAstro(x.dataset.astro||null,x)}));
}
const WHERE={moon:'The Moon',mars:'Mars',deep:'Interstellar space'};
const EXH={"surveyor3": {"title": "Surveyor 3", "sub": "", "type": "Moon · Mission ended; hardware remains", "intro": ["Launched 17 April 1967; landed 20 April 1967 (UTC).", "Landing site: Oceanus Procellarum (Mare Cognitum), approximately 3.0°S, 23.4°W.", "Last contact: 4 May 1967.", "Visited by Apollo 12 astronauts on 19–20 November 1969."], "c1": "Before sending astronauts, NASA needed to know whether a heavy lander could safely rest on the Moon's surface. Surveyor 3 was a robotic scout sent to land on a smooth lunar plain, photograph the surroundings and test the strength and behaviour of lunar soil.", "c2": "Surveyor 3 stood on three landing legs. Retro-rockets and small vernier engines slowed and guided its descent. A radar altimeter and Doppler velocity sensor helped determine altitude and speed. A television camera returned 6,315 photographs. A short robotic arm, the soil mechanics surface sampler, dug, scraped and trenched the ground while the camera observed. Solar power and a radio link supported operations. The lander bounced on touchdown and came to rest inside a small crater.", "c3": "The scoop tests showed that the lunar surface was firm enough to support the weight of an Apollo lunar module. The camera also photographed an eclipse of the Sun by Earth in April 1967. Apollo 12 later returned pieces of Surveyor 3 to Earth. Scientists studied how metals, paint and cables had aged after about two and a half years of exposure on the Moon.", "c4": "The mission ended in 4 May 1967 after lunar night began. On 19 November 1969, Apollo 12 astronauts Pete Conrad and Alan Bean landed about 180 metres (600 feet) away. They walked to Surveyor 3 and removed its television camera, scoop and other parts. The remaining lander is still on the Moon. The resource pack describes it as the only spacecraft on another world ever visited by humans.", "story": "I was sent to answer one question: can humans stand here? I scooped the soil, took thousands of photographs and said yes. Two years later, two astronauts walked up to me, shook off the dust and took my camera home. I am still here, but part of me made the journey back.", "why": "Its mission was completed in 1967 and there was no plan to return the whole lander. Apollo 12 recovered selected parts only.", "eng": "Scoop + camera = direct measurements of lunar soil strength. Engineers used the results to help design Apollo landing-leg footpads.", "hot": [["Landing legs", "supported the lander on the lunar surface."], ["Retro-rockets and vernier engines", "slowed and guided the descent."], ["Radar altimeter", "measured altitude during landing."], ["TV camera", "returned images of the surface."], ["Soil sampler scoop", "dug, scraped and trenched lunar soil."], ["Solar panel", "supplied electrical power."], ["Antenna", "carried communications between the lander and Earth."]], "quiz": {"q": "What did Surveyor 3's scoop help NASA learn?", "o": ["The Moon has a thick layer of air", "The ground could carry a lander", "The Moon is one giant ball of ice"], "a": 1, "e": "Soil tests showed the ground was strong enough for Apollo landers and astronauts."}, "arch": [["NASA Science – Surveyor 3", "https://science.nasa.gov/surveyor-3"], ["NASA Image Library – Surveyor 3", "https://images.nasa.gov/search?q=Surveyor%203"], ["NASA image AS12-48-7110", "https://images.nasa.gov/search?q=AS12-48-7110"]], "pic": "Use: full spacecraft on the Moon (Apollo 12 photograph); landing-leg and radar diagram; soil sampler scoop close-up; Oceanus Procellarum landing-site map; soil trench image; returned camera at the National Air and Space Museum. Verify image ID and credit. Picture plan END"}, "retro": {"title": "Apollo Lunar Laser Reflectors", "sub": "", "type": "Moon · Intentionally left; still working", "intro": ["Apollo 11: deployed 21 July 1969 at the Sea of Tranquility; 100 corner cubes.", "Apollo 14: deployed 5 February 1971 at Fra Mauro; 100 corner cubes.", "Apollo 15: deployed 31 July 1971 at Hadley–Apennine; 300 corner cubes and the strongest signal.", "No power or electronics: entirely passive instruments."], "c1": "Scientists wanted an extremely precise way to measure the distance between Earth and the Moon. They placed special reflectors on the lunar surface so observatories on Earth could send laser pulses toward them and time the returning light. Apollo 11 astronauts deployed the first array within hours of landing.", "c2": "Each reflector array contains corner-cube prisms made from fused silica (quartz glass). A corner cube sends incoming light back toward its source, even when the light arrives at an angle. A telescope on Earth fires very short laser pulses and a precise clock measures the round-trip travel time. Distance is calculated as speed of light multiplied by round-trip time, divided by two. The round trip takes about 2.5 seconds, and only a few photons return from each pulse, so sensitive detectors and repeated measurements are needed.", "c3": "Lunar laser ranging shows that the Moon is moving away from Earth by about 3.8 centimetres (1.5 inches) per year. The measurements have also been used to test Einstein's general relativity and investigate the Moon's interior. The resource pack identifies this as the only Apollo surface experiment still returning data.", "c4": "The reflectors have not been abandoned in the ordinary sense. They have no batteries or electronics, so they do not need a power supply. Earth-based observatories continue to range to them. The Apollo 15 array produces the strongest signal. The return signal has weakened over time, and future lunar missions may deploy newer arrays.", "story": "I have no battery, no computer and no voice. I only reflect. Every time a laser from Earth reaches me, I send the light home along the same path. Fifty years of those tiny flashes have shown that the Moon is slowly leaving you.", "why": "They were deliberately left on the Moon because that is where the measurements must be made. They are passive instruments and are still used.", "eng": "Corner-cube prisms + a precise timer = distance measurement at extraordinary precision. A simple passive optical design has enabled decades of lunar science.", "hot": [["Corner-cube prism", "returns light toward the direction it came from."], ["Reflector array/frame", "holds the prisms in position."], ["Incoming laser beam", "travels from an Earth-based telescope to the Moon."], ["Returning beam", "carries the timing signal back to Earth."]], "quiz": {"q": "How can the reflectors work without any power?", "o": ["Big batteries hidden inside each one", "Solar panels on the back side", "Passive mirrors, no power needed"], "a": 2, "e": "Corner-cube prisms reflect light back toward its source without electronics."}, "arch": [["JPL – The Apollo Experiment That Keeps on Giving", "https://jpl.nasa.gov/news/the-apollo-experiment-that-keeps-on-giving/"], ["NASA Goddard – Apollo 11 reflectors still provide data", "https://earth.gsfc.nasa.gov/geo/projects/sgp/updates/reflectors-placed-moon-apollo-11-astronauts-50-years-ago-continue-provide"], ["NASA CDDIS – Lunar Laser Ranging data", "https://cddis.nasa.gov/Data_and_Derived_Products/SLR/Lunar_laser_ranging_data.html"], ["NASA Earthdata – Lunar Laser Ranging", "https://www.earthdata.nasa.gov/data/space-geodesy-techniques/slr/lunar-laser-ranging-data"]], "pic": "Use: actual Apollo 11, 14 or 15 reflector on the lunar surface; corner-cube close-up; diagram of laser travelling to and returning from the Moon; Earth-based laser telescope; lunar orbiter view of an Apollo site; Earth–Moon distance chart. IMPORTANT: the current dev-alsep.jpg shows ALSEP science-station hardware, not the reflector. Replace it. Picture plan END"}, "lrv": {"title": "Lunar Roving Vehicles", "sub": "", "type": "Moon · Intentionally left behind", "intro": ["Apollo 15: 1971, Hadley–Apennine; Apollo 16: 1972, Descartes Highlands; Apollo 17: 1972, Taurus–Littrow.", "Built by Boeing with General Motors; approximately 210 kg on Earth.", "The rovers travelled about 28 km, 27 km and 36 km on the three missions respectively.", "Typical speed was about 13 km/h."], "c1": "Early Apollo astronauts could explore only as far as they could walk. The Lunar Roving Vehicle allowed crews to travel farther from the lunar module, carry tools and bring back more rock samples. The rover was developed in about 17 months.", "c2": "The rover folded inside the lunar module's descent stage. Astronauts unfolded it in about 40 minutes on Apollo 15. It had an aluminium frame, wire-mesh wheels, an electric motor in each of its four wheels and two 36-volt silver-zinc batteries. A T-shaped hand controller steered the vehicle. A gyroscope and odometer helped astronauts navigate back. A television camera and antenna transmitted images to Earth.", "c3": "The rover was not itself a scientific instrument; it expanded the area astronauts could investigate. It carried crews to different rock types, including the Apollo 17 site where orange volcanic glass was found. Rover operations also revealed practical engineering challenges: on Apollo 16 a broken fender allowed dust to cover the crew and batteries, and on Apollo 17 the crew repaired a fender using maps and tape.", "c4": "Each rover was deliberately parked on the Moon. The ascent stage had limited lifting capacity, and astronauts and collected rock samples had priority on the return trip. The rovers remain at their landing sites. NASA's Lunar Reconnaissance Orbiter has photographed Apollo tracks and hardware from orbit.", "story": "I carried two explorers farther than their legs could go. I spun through dust, climbed hills and filmed their takeoff. Then they climbed away with the rocks, and I stayed behind, parked in the quiet. My tracks are still there.", "why": "Left on purpose. The return vehicle had to carry astronauts and valuable rock samples, and every kilogram mattered.", "eng": "Four wheel motors + two batteries + simple navigation made a battery-electric vehicle that could operate in a vacuum and extreme temperatures.", "hot": [["Wheel and motor", "each wheel had its own electric drive motor."], ["Steering", "controlled by the astronaut's T-shaped hand controller."], ["Two batteries", "supplied electrical power."], ["Joystick/hand controller", "controlled direction and movement."], ["Navigation gyro", "helped maintain heading."], ["Odometer", "tracked distance travelled."], ["TV camera and antenna", "sent images to Earth."]], "quiz": {"q": "Why were the rovers left on the Moon?", "o": ["The ascent stage could carry little extra", "The crews ran out of paint to fix them", "Nobody on Earth wanted them back at all"], "a": 0, "e": "Every kilogram mattered; crew and samples had priority."}, "arch": [["NASA History – Moonport: The Moon Gets an Automobile", "https://www.hq.nasa.gov/office/pao/History/SP-4204/ch23-3.html"], ["NASA Image Library – Lunar Roving Vehicle", "https://images.nasa.gov/search?q=Lunar%20Roving%20Vehicle"], ["NASA Science", "https://science.nasa.gov/"]], "pic": "Use: rover on the Moon with astronaut; folded-rover stowage diagram; wire-mesh wheel close-up; map of the three landing sites; Lunar Reconnaissance Orbiter image of tracks; rover parked after the mission. Verify NASA image ID and credit. Picture plan END"}, "sojourner": {"title": "Sojourner", "sub": "", "type": "Mars · Mission ended; hardware remains", "intro": ["Launched 4 December 1996; landed 4 July 1997 using an airbag landing system.", "Landing site: Ares Vallis, an ancient flood plain, approximately 19.1°N, 33.2°W.", "Planned for 7 sols; operated for about 83 sols; travelled about 100 metres.", "Last lander contact: 27 September 1997."], "c1": "NASA wanted to prove that a small, relatively low-cost robot could land on Mars and drive across its surface. Sojourner and its lander, Pathfinder, tested new and less expensive ways to explore. Ares Vallis was selected because ancient floods had transported many kinds of rocks into one area.", "c2": "Sojourner was a toaster-sized, six-wheeled rover weighing about 10.6 kg. A small solar panel supplied power. It carried cameras and an Alpha Proton X-ray Spectrometer (APXS), which measured the composition of rocks. Sojourner could not communicate directly with Earth; it sent its information through the Pathfinder lander, which acted as a radio relay. Pathfinder reached Mars protected by airbags and bounced across the surface before stopping.", "c3": "Sojourner analysed the chemistry of rocks nicknamed Yogi, Chimp and others. It demonstrated that a small rover could operate on Mars and influenced later rover missions. The Pathfinder lander also returned millions of weather measurements and images of the ancient flood plain.", "c4": "Communication with the Pathfinder lander was lost on 27 September 1997 for reasons that are not fully known. Without the lander acting as a radio relay, Sojourner could no longer send its data to Earth. The rover and lander remain near one another on Mars.", "story": "I was small, slow and supposed to work for only seven days. I stayed eighty-three. I touched the rocks of an ancient flood. When my lander fell silent, I could no longer speak to Earth, but every rover after me followed my wheel tracks.", "why": "Sojourner depended on Pathfinder for communication. When contact with the lander was lost, the rover could no longer relay its data. It cannot be recovered.", "eng": "Airbag landing + a small solar-powered rover + an APXS instrument created a lower-cost method for exploring and measuring rocks on another planet.", "hot": [["Six wheels", "moved the rover over the Martian surface."], ["Rocker-bogie suspension", "helped the rover travel over uneven terrain."], ["APXS", "measured the elemental composition of rocks."], ["Front cameras", "photographed the terrain and targets."], ["Solar panel", "supplied electrical power."]], "quiz": {"q": "How long was Sojourner designed to work?", "o": ["90 sols, about three whole months", "7 sols, about one week", "15 Earth years, almost forever and ever"], "a": 1, "e": "It was planned for 7 sols but operated for about 83."}, "arch": [["JPL – Mars Pathfinder fact sheet (archived NASA facts)", "https://webarchive.library.unt.edu/web/20090813031850/http:/jpl.nasa.gov/news/fact_sheets/mpf.pdf"], ["NASA – Mars Pathfinder anniversary information", "https://www.nasa.gov/"], ["NASA Image Library – Sojourner", "https://images.nasa.gov/search?q=Sojourner%20Mars%20rover"]], "pic": "Use: Sojourner beside a rock; rover diagram showing wheels, APXS and solar panel; APXS examining a rock; Pathfinder landing-site panorama; airbag landing illustration clearly labelled as an illustration; final lander/rover images. Verify NASA image ID and credit. Picture plan END"}, "spirit": {"title": "Spirit", "sub": "", "type": "Mars · Mission ended; hardware remains", "intro": ["Launched 10 June 2003; landed 4 January 2004.", "Landing site: Gusev Crater, approximately 14.6°S, 175.5°E.", "Last communication: 22 March 2010.", "NASA ended recovery efforts on 25 May 2011."], "c1": "Spirit and its twin Opportunity were sent to investigate whether liquid water had existed on Mars. Spirit explored Gusev Crater, a place scientists suspected might once have held a lake. It examined rocks and soil for evidence of ancient water.", "c2": "Spirit was a solar-powered, six-wheeled rover with rechargeable batteries, cameras and a robotic arm. Its instruments included Mini-TES, a Mössbauer Spectrometer, an Alpha Particle X-ray Spectrometer (APXS), a Microscopic Imager and a Rock Abrasion Tool (RAT). The RAT brushed or ground the outer surface of rocks so instruments could examine fresher material underneath.", "c3": "Spirit found evidence that water had altered rocks. In 2009 its damaged right-front wheel dragged through soil near a feature called Home Plate and exposed bright, almost pure silica-rich soil. On Earth, similar silica deposits can form around hot springs or steam vents. This is evidence of water-related processes, not proof of life.", "c4": "In 2009 Spirit became trapped in soft soil. Engineers tried to free it, then continued using it as a stationary science platform. A failed wheel and the cold, dark Martian winter left its solar panels unable to generate enough power. Spirit stopped communicating in March 2010.", "story": "I was a robot geologist. My wheel was broken and I dragged it across the soil like a plough. That ‘failure’ uncovered bright silica that told scientists hot water once flowed here. When winter came my power faded, but the clue I uncovered stays.", "why": "Spirit became stuck in soft soil, could not tilt its panels toward the Sun and eventually had insufficient power to survive the winter.", "eng": "Robotic arm + Rock Abrasion Tool + spectrometers allowed Spirit to expose and analyse rock surfaces layer by layer.", "hot": [["Robotic arm", "positioned instruments against rocks and soil."], ["Rock Abrasion Tool", "brushed or ground rock surfaces."], ["Mini-TES", "examined thermal infrared properties of rocks and soil."], ["Pancam", "provided panoramic images."], ["Solar panels", "supplied electrical power and charged batteries."]], "quiz": {"q": "What did Spirit's stuck wheel uncover?", "o": ["A buried city of old Martian homes", "Bright, silica-rich soil", "Hidden metal tools left by an older rover"], "a": 1, "e": "The soil suggests hot-water processes once occurred; it is not proof of life."}, "arch": [["NASA Science – Spirit (MER-A)", "https://science.nasa.gov/mission/mer-spirit/"], ["NASA Mars – MER resource", "https://mars.nasa.gov/internal_resources/136/"], ["NASA Image Library – Spirit", "https://images.nasa.gov/search?q=Spirit%20Mars%20rover"]], "pic": "Use: real Spirit self-portrait; rover diagram; Rock Abrasion Tool close-up; Gusev Crater panorama; Home Plate silica-rich soil; final images of Spirit at Troy. The existing dev-spirit.jpg appears to be an artist's rendering; replace it with a real NASA photograph or label it clearly as artwork. Picture plan END"}, "opportunity": {"title": "Opportunity", "sub": "", "type": "Mars · Mission ended; hardware remains", "intro": ["Launched 7 July 2003; landed 25 January 2004.", "Landing site: Meridiani Planum, approximately 2°S, 354.5°E.", "Last communication: 10 June 2018; NASA declared the mission complete on 13 February 2019.", "Planned for 90 sols; operated for almost 15 Earth years; travelled about 45 km."], "c1": "Orbiting spacecraft had detected a mineral called hematite at Meridiani Planum. Hematite can form in the presence of water. Scientists sent Opportunity to investigate whether water had been present and how it had changed the Martian landscape. The planned mission duration was 90 Martian days.", "c2": "Opportunity was a solar-powered, six-wheeled rover with panoramic cameras, a robotic arm, APXS, a Mössbauer Spectrometer, Mini-TES, a Microscopic Imager and a Rock Abrasion Tool. The arm placed instruments close to rocks, while the abrasion tool exposed fresh rock surfaces for examination.", "c3": "Opportunity found small iron-rich spheres nicknamed “blueberries” that contain hematite, along with layered sedimentary rocks. Together, these observations provided evidence that liquid water had once existed at Meridiani Planum for extended periods. The water was probably salty and acidic. Opportunity later explored the rim of Endeavour Crater.", "c4": "Opportunity worked for almost 15 Earth years and travelled about 45 km. In 2018, a planet-encircling dust storm blocked sunlight and prevented its solar panels from generating enough power. Its last communication arrived on 10 June 2018. NASA declared the mission complete in February 2019.", "story": "I was built for 90 days, but I stayed for years. I crossed plains, climbed crater walls and found the signs of ancient water. Then a great dust storm covered the sky and my panels could not feed me. My last message crossed space, and then there was silence. My discoveries remain.", "why": "A global dust storm blocked sunlight. Because Opportunity relied on solar power, it could no longer generate enough electricity to continue operating.", "eng": "Solar panels + spectrometers + long-distance mobility turned Opportunity into a decade-long robotic geology field trip on another planet.", "hot": [["Solar panels", "converted sunlight into electrical power."], ["APXS and Mössbauer spectrometer", "examined rock composition and minerals."], ["Microscopic Imager", "captured close-up images of rock textures."], ["Robotic arm", "positioned instruments against targets."], ["Rock Abrasion Tool", "exposed fresh rock surfaces."]], "quiz": {"q": "What are the “blueberries” found by Opportunity?", "o": ["Tiny round fruits from Martian plants", "Iron-rich spheres with hematite", "Frozen water drops from the polar caps"], "a": 1, "e": "They are mineral concretions associated with past water."}, "arch": [["NASA Science – Opportunity (MER-B)", "https://science.nasa.gov/mission/mer-opportunity/"], ["NASA – Record-setting Opportunity mission ends", "https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/"], ["NASA Science – Meridiani Planum", "https://science.nasa.gov/resource/meridiani-planum-2/"], ["NASA Image Library – Opportunity", "https://images.nasa.gov/search?q=Opportunity"]], "pic": "Use: Opportunity self-portrait; rover diagram; blueberry close-up from the Microscopic Imager; Meridiani Planum landscape; layered rock outcrop; final panorama from Perseverance Valley. Verify image identity, NASA ID and credit. Picture plan END"}, "insight": {"title": "InSight", "sub": "", "type": "Mars · Mission ended; hardware remains", "intro": ["Launched 5 May 2018; landed 26 November 2018.", "Landing site: Elysium Planitia, approximately 4.5°N, 135.6°E.", "Mission ended in December 2022 after missed communication sessions.", "Key instruments: SEIS seismometer and HP3 heat probe."], "c1": "InSight did not travel across Mars. Its goal was to study the planet's interior — its crust, mantle, core and internal heat — to help scientists understand how rocky planets, including Earth, formed and evolved.", "c2": "The key instrument, SEIS, was a very sensitive seismometer placed on the ground and covered by a protective dome to shield it from wind. HP3, nicknamed the “mole,” was a heat-flow probe designed to hammer itself into the soil, but it could not reach its intended depth. A robotic arm placed the instruments. Solar panels powered the lander.", "c3": "InSight detected more than 1,313 marsquakes since landing in November 2018. The largest was an estimated magnitude 5 quake on 4 May 2022, the 1,222nd Martian day (sol) of the mission, the largest quake ever observed on another planet. The largest one before it was an estimated magnitude 4.2 on 25 August 2021. Seismic waves allowed scientists to make the first direct measurements of the thickness of Mars' crust and the size of its core. The resource pack states that the core was found to be liquid.", "c4": "Dust gradually accumulated on InSight's solar panels and reduced its power. NASA continued science operations for as long as possible. After two missed communication sessions in December 2022, the mission was declared over. InSight remains where it landed.", "story": "I did not need to travel; I needed to listen. For four years I heard Mars rumble, shake and ring. Dust covered my panels, and one day I could not call home any more. But the vibrations I recorded still tell the story of what is deep inside the Red Planet.", "why": "Dust on the solar panels reduced available power until the lander could no longer operate.", "eng": "A sensitive seismometer protected beneath a wind shield acted as ears for a planet. Seismic waves reveal internal layers in a way that can be compared to how ultrasound reveals structures inside a body.", "hot": [["SEIS seismometer and protective dome", "detected ground motion while shielding the instrument from wind."], ["HP3 heat probe", "designed to measure heat flow beneath the surface."], ["Robotic arm", "placed instruments on the ground."], ["Solar panels", "supplied electrical power."]], "quiz": {"q": "What did InSight listen for?", "o": ["Radio calls sent by aliens", "Marsquakes", "Music made by the Martian wind and dust"], "a": 1, "e": "Its seismometer recorded ground shaking, revealing information about Mars' interior."}, "arch": [["NASA Science – InSight", "https://science.nasa.gov/mission/insight/"], ["JPL – InSight", "https://www.jpl.nasa.gov/missions/insight/"], ["NASA – NASA retires InSight lander", "https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/"], ["NASA Planetary Data System – InSight seismic data portal", "https://pds.nasa.gov/"]], "pic": "Use: real InSight lander photograph; lander and instrument diagram; SEIS under its wind shield; Elysium Planitia map; marsquake seismogram; final dust-covered solar-panel photograph. The existing dev-insight.jpg appears to be an artist's concept; replace it or label it as artwork. Picture plan END"}, "ingenuity": {"title": "Ingenuity", "sub": "", "type": "Mars · Technology demonstration complete", "intro": ["Launched 30 July 2020 with Perseverance; reached Mars on 18 February 2021.", "First powered flight: 19 April 2021 at Jezero Crater.", "Completed 72 flights; final flight was 18 January 2024; mission ended 25 January 2024.", "Original plan: up to five flights in about 30 days."], "c1": "Ingenuity was a technology test. Mars' atmosphere is only about one percent as dense as Earth's, making flight difficult. The mission tested whether a helicopter could fly in such thin air. If successful, future aircraft could scout from above and reach places that rovers cannot easily travel.", "c2": "Ingenuity was a lightweight helicopter weighing about 1.8 kg. It used two counter-rotating rotors, with four blades in total, spinning much faster than a typical Earth helicopter to generate lift in the thin Martian atmosphere. It had solar panels, rechargeable batteries, navigation cameras, sensors and onboard computers. Because radio signals take minutes to travel between Mars and Earth, Ingenuity flew autonomously. It communicated with Earth through the Perseverance rover.", "c3": "On 19 April 2021, Ingenuity made the first powered, controlled flight on another planet. Across 72 flights it tested autonomous navigation, scouted terrain and collected engineering data about flight in the Martian atmosphere.", "c4": "During its 72nd flight on 18 January 2024, Ingenuity's rotor blades were damaged during a hard landing. NASA's investigation identified navigation difficulty over featureless terrain as a likely contributing factor. NASA ended the mission on 25 January 2024. The helicopter remains where it landed.", "story": "I was built to fly five times, and I flew seventy-two. I showed that wings can work even where the air is whisper-thin. My final landing damaged my blades, and my flying days ended, but the data I collected will help design the next aircraft.", "why": "Rotor blades were damaged during a hard landing, ending flight operations.", "eng": "Large, rapidly rotating counter-rotating blades + onboard autonomy enabled flight in thin air without a pilot continuously steering from Earth.", "hot": [["Counter-rotating rotors", "generated lift in Mars' thin atmosphere."], ["Solar panel", "recharged the helicopter's batteries."], ["Battery system", "stored energy for flight and overnight survival."], ["Flight computer", "controlled autonomous flight."], ["Navigation camera and sensors", "helped estimate position and movement."]], "quiz": {"q": "Why does Ingenuity spin its rotors much faster than Earth helicopters?", "o": ["Mars air is very thin", "Mars has no gravity at all, so it floats", "The rotors were running late that day"], "a": 0, "e": "Fast-spinning blades are needed to generate lift in thin air."}, "arch": [["NASA – Ingenuity helicopter mission ends", "https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/"], ["NASA – First aircraft accident investigation on another world", "https://www.nasa.gov/missions/mars-2020-perseverance/ingenuity-helicopter/nasa-performs-first-aircraft-accident-investigation-on-another-world/"], ["JPL – Ingenuity", "https://www.jpl.nasa.gov/missions/ingenuity/"], ["NASA Image Library – Ingenuity", "https://images.nasa.gov/search?q=Ingenuity"]], "pic": "Use: Ingenuity in flight; rotor/body diagram; rotor-blade close-up; Wright Brothers Field map; shadow-in-flight photograph; damaged-blade image from the final flight. Verify image ID and credit. Picture plan END"}, "curiosity": {"title": "Curiosity", "sub": "", "type": "Mars · Still active; not abandoned", "intro": ["Launched 26 November 2011; landed 6 August 2012 (UTC).", "Location: Gale Crater, exploring Mount Sharp; approximately 4.6°S, 137.4°E.", "Power: nuclear Multi-Mission Radioisotope Thermoelectric Generator (MMRTG), not solar panels.", "Status in the resource pack: active — check NASA's latest status on publication day."], "c1": "Curiosity investigates whether ancient Mars had environmental conditions that could have supported life. It does not set out to prove that life existed. Gale Crater contains layers of rock that preserve a record of environmental change, and Curiosity studies them as it explores Mount Sharp.", "c2": "Curiosity is a car-sized rover with six wheels, a robotic arm, a drill and cameras. ChemCam uses a laser to examine the chemistry of rocks from a distance. CheMin identifies minerals using X-ray analysis. SAM is an onboard chemistry laboratory that heats rock powder and analyses released gases. An MMRTG converts heat from radioactive decay into electricity, allowing the rover to operate day and night. A sky-crane system lowered it to the surface.", "c3": "At Yellowknife Bay, Curiosity found mudstones formed in an ancient freshwater lake and identified chemical ingredients important to life as we know it. It has also detected organic molecules and observed seasonal changes in methane. Organic molecules are not proof of life; they show that some ingredients associated with life were present.", "c4": "Curiosity remains active in Gale Crater and is not abandoned or retired. Its nuclear power source gradually produces less electrical power over time, so it is a mission continuing into its later chapters.", "story": "I carry a laboratory inside me. My laser reads rocks from across the room, my drill opens them, and my chemistry lab sniffs what is inside. I found a lake bed that could have supported life. My story is not finished; I am still climbing.", "why": "Curiosity is not left behind; it is still operating. When its mission eventually ends, the rover will remain on Mars.", "eng": "Laser + drill + onboard laboratories create a mobile geologist's field kit and chemistry laboratory on six wheels.", "hot": [["ChemCam laser", "analyses rock chemistry from a distance."], ["Drill", "collects rock powder for onboard analysis."], ["Robotic arm", "positions tools and instruments."], ["SAM laboratory", "analyses gases and chemical compounds from samples."], ["CheMin laboratory", "identifies minerals using X-ray diffraction."], ["MMRTG", "converts heat from radioactive decay into electricity."], ["Sky-crane landing system", "lowered the rover onto the Martian surface."]], "quiz": {"q": "What powers Curiosity?", "o": ["Big solar panels only, like Opportunity", "Wind turbines on its deck", "A nuclear source (MMRTG)"], "a": 2, "e": "An MMRTG converts heat from radioactive decay into electricity."}, "arch": [["NASA Science – Curiosity (MSL)", "https://science.nasa.gov/mission/msl-curiosity/"], ["JPL – Mars Science Laboratory rover", "https://www.jpl.nasa.gov/missions/mars-science-laboratory-curiosity-rover-msl/"], ["NASA Science – Curiosity science", "https://science.nasa.gov/mission/msl-curiosity/science/"], ["NASA Image Library – Curiosity", "https://images.nasa.gov/search?q=Curiosity"]], "pic": "Use: Curiosity self-portrait; instrument diagram for ChemCam, CheMin and SAM; drill-hole close-up; Gale Crater/Mount Sharp view; Yellowknife Bay mudstone; latest mission-status image. Verify NASA image ID and credit. Picture plan END"}, "perseverance": {"title": "Perseverance", "sub": "", "type": "Mars · Still active; not abandoned", "intro": ["Launched 30 July 2020; landed 18 February 2021.", "Location: Jezero Crater, an ancient river delta; approximately 18.4°N, 77.5°E.", "Power: nuclear MMRTG.", "Status in the resource pack: active; carries sealed rock samples."], "c1": "Perseverance searches for signs of ancient microbial life and collects rock samples that could potentially be studied on Earth in the future. Jezero Crater was selected because a river once flowed into a lake there, creating a delta that could preserve evidence of ancient environments.", "c2": "The rover has six wheels, a robotic arm, a rock-core drill and a sample storage and sealing system. Its instruments include Mastcam-Z cameras, SuperCam, PIXL and SHERLOC for examining rocks and chemistry, RIMFAX radar for looking below the surface, and MEDA weather sensors. Perseverance drills rock cores, seals them in sample tubes and stores them or places them at a sample depot.", "c3": "Perseverance has studied river-delta deposits and both sedimentary and igneous rocks, and has detected organic compounds. In 2024 it sampled a rock nicknamed Cheyava Falls. NASA described its “leopard spot” pattern in 2025 as a potential biosignature — a feature that could have a biological origin but requires further study. It is not proof of life.", "c4": "Perseverance remains active. Its samples have not been returned to Earth. The resource pack notes that Mars Sample Return funding and plans require a current-status check before publication. Do not present an earlier sample-return plan as a confirmed current plan.", "story": "I drill small cores from rock, seal them in tubes and keep them for the future. One rock had leopard spots that scientists called a potential sign of life. I cannot answer the question myself. I am still travelling, still collecting, still hoping someone will come for my samples.", "why": "Perseverance is not left behind; it is operating and its collected samples remain on Mars.", "eng": "A drill + sealed sample tubes + scientific instruments make Perseverance a mobile field laboratory that can preserve carefully selected rock samples for possible future analysis.", "hot": [["Sample tubes and storage", "hold and protect collected rock cores."], ["Drill", "extracts rock cores."], ["SuperCam", "studies rock targets using remote sensing and a laser."], ["PIXL", "examines elemental chemistry at small scales."], ["SHERLOC", "investigates minerals and organic compounds."], ["RIMFAX", "uses radar to examine subsurface structure."], ["MEDA", "measures Martian weather and environmental conditions."]], "quiz": {"q": "What is a “potential biosignature”?", "o": ["Clear proof that life existed on Mars", "A fossil of a Martian animal, fully formed", "A feature that may come from life"], "a": 2, "e": "A potential biosignature may have a biological explanation, but other explanations must be considered."}, "arch": [["NASA Science – Perseverance rover", "https://science.nasa.gov/mission/mars-sample-return/perseverance-rover/"], ["NASA Science – Rover components", "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/"], ["NASA – Mars rover discovered potential biosignature", "https://www.nasa.gov/news-release/nasa-says-mars-rover-discovered-potential-biosignature-last-year/"], ["NASA Science – Jezero crater delta", "https://science.nasa.gov/resource/perseverance-explores-the-jezero-crater-delta/"], ["NASA Image Library – Perseverance", "https://images.nasa.gov/search?q=Perseverance"]], "pic": "Use: Perseverance selfie with Ingenuity; instrument diagram; sample-tube close-up; Jezero Crater delta view; Cheyava Falls leopard-spot image; sample-depot image. Verify NASA image ID and credit. Picture plan END"}, "voyager1": {"title": "Voyager 1", "sub": "", "type": "Deep Space · Still operating", "intro": ["Launched 5 September 1977.", "Jupiter flyby: March 1979; Saturn flyby: November 1980.", "Crossed into interstellar space in August 2012.", "The resource pack states NASA expected Voyager 1 to reach one light-day from Earth on 18 November 2026 — verify current status and wording before publication."], "c1": "Voyager 1 was sent to explore Jupiter and Saturn and their moons, then continued outward beyond the Solar System. It carries the Golden Record, a collection of sounds and images intended as a message from Earth.", "c2": "A high-gain dish antenna communicates with NASA's Deep Space Network. Three radioisotope thermoelectric generators (RTGs) convert heat from radioactive decay into electricity. Science instruments include a magnetometer and a plasma-wave detector. The spacecraft's electrical power decreases by several watts each year, so engineers turn off instruments one by one to conserve power.", "c3": "Voyager 1 revealed active volcanoes on Jupiter's moon Io, the first active volcanoes observed beyond Earth. It mapped Jupiter, Saturn, their moons and rings. After crossing the Sun's protective bubble in 2012, it measured plasma and magnetic-field conditions in interstellar space.", "c4": "Voyager 1 is not abandoned or retired. The resource pack's April 2026 status says two science instruments remained on: the magnetometer and plasma-wave subsystem. Verify the number of operating instruments and distance from Earth using NASA's latest status page before publication.", "story": "I left Earth in 1977 to meet giant worlds. I passed Jupiter and Saturn, crossed the edge of the Sun's bubble and kept going. My power fades, so my caretakers switch me off piece by piece. Still, I whisper from interstellar space, carrying a message from the world that built me.", "why": "Voyager 1 is not on a planet and has not been abandoned. It is travelling outward through interstellar space and continues to communicate with Earth while power permits.", "eng": "Radioisotope power + a high-gain antenna + the Deep Space Network allow a spacecraft to send faint signals across enormous distances, even as its available power decreases.", "hot": [["High-gain antenna", "sends and receives radio signals over interstellar distances."], ["RTGs", "generate electricity from heat released by radioactive decay."], ["Magnetometer boom", "supports measurement of magnetic fields."], ["Plasma-wave instrument", "detects plasma-wave activity."], ["Golden Record", "carries sounds and images representing Earth."]], "quiz": {"q": "Why is Voyager 1 switching off instruments?", "o": ["To save its limited electrical power", "Because the team has lost all contact with it", "Because sunlight is far too bright out there"], "a": 0, "e": "Its nuclear power source produces less electricity each year."}, "arch": [["NASA Science – Voyager mission", "https://science.nasa.gov/mission/voyager/"], ["NASA Science – Where are Voyager 1 and 2 now?", "https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/"], ["NASA Voyager blog – instrument update, 17 April 2026", "https://science.nasa.gov/blogs/voyager/2026/04/17/nasa-shuts-off-instrument-on-voyager-1-to-keep-spacecraft-operating/"], ["JPL – Voyager 1", "https://www.jpl.nasa.gov/missions/voyager-1/"], ["NASA Image Library – Voyager 1", "https://images.nasa.gov/search?q=Voyager%201"]], "pic": "Add a NASA Voyager spacecraft illustration or a suitable NASA image such as Pale Blue Dot; include a spacecraft engineering diagram, Golden Record cover, Jupiter/Io volcano image, Saturn encounter image and heliosphere-crossing graphic. Verify each image's original credit and suitability. Picture plan END"}};
const DOC={"map": [["World", "Equipment / site", "Approximate coordinates", "Profile"], ["Moon", "Surveyor 3, Oceanus Procellarum", "3.0°S, 23.4°W", "01"], ["Moon", "Apollo 11 reflector, Sea of Tranquility", "0.67°N, 23.47°E", "02"], ["Moon", "Apollo 14 reflector and rover site, Fra Mauro", "3.65°S, 17.47°W", "02 / 03"], ["Moon", "Apollo 15 rover and reflector, Hadley–Apennine", "26.13°N, 3.63°E", "02 / 03"], ["Moon", "Apollo 16 rover, Descartes Highlands", "8.97°S, 15.50°E", "03"], ["Moon", "Apollo 17 rover, Taurus–Littrow", "20.19°N, 30.77°E", "03"], ["Mars", "Sojourner, Ares Vallis", "19.1°N, 33.2°W", "04"], ["Mars", "Spirit, Gusev Crater", "14.6°S, 175.5°E", "05"], ["Mars", "Opportunity, Meridiani Planum", "1.9°S, 354.5°E", "06"], ["Mars", "InSight, Elysium Planitia", "4.5°N, 135.6°E", "07"], ["Mars", "Curiosity, Gale Crater", "4.6°S, 137.4°E", "09"], ["Mars", "Perseverance and Ingenuity, Jezero Crater", "18.4°N, 77.5°E", "08 / 10"]], "timeline": [["Year", "Event"], ["1967", "Surveyor 3 lands in April and tests lunar soil."], ["1969", "Apollo 11 deploys the first laser reflector in July; Apollo 12 visits Surveyor 3 in November."], ["1971–1972", "Apollo 15, 16 and 17 use Lunar Roving Vehicles; Apollo 14 and 15 deploy reflectors in 1971."], ["1977", "Voyager 1 launches in September."], ["1997", "Sojourner becomes the first rover to operate on Mars in July."], ["2004", "Spirit and Opportunity land on Mars in January."], ["2010–2011", "Spirit's last communication occurs in March 2010; NASA ends recovery efforts in May 2011."], ["2012", "Curiosity lands in August; Voyager 1 enters interstellar space."], ["2018", "InSight lands in November; Opportunity's final communication occurs in June."], ["2021", "Perseverance lands in February; Ingenuity makes the first powered flight on another planet in April."], ["2022", "InSight mission ends in December."], ["2024", "Ingenuity completes its 72nd flight and its mission ends in January."], ["2026", "The resource pack forecast Voyager 1 would reach one light-day from Earth on 18 November; verify current status before publishing."]], "cmp": [["Equipment", "Power", "Movement", "Key instrument", "Status"], ["Surveyor 3", "Solar + battery", "Stationary; arm moves", "TV camera, soil scoop", "Mission ended 1967"], ["Apollo reflectors", "None; passive", "Stationary", "Corner-cube prisms", "Still working"], ["Lunar Roving Vehicle", "Silver-zinc batteries", "Crewed rover", "Navigation, TV camera", "Left on Moon"], ["Sojourner", "Solar", "Six-wheeled rover", "APXS", "Mission ended 1997"], ["Spirit", "Solar", "Six-wheeled rover", "Mini-TES, RAT, APXS", "Mission ended 2010"], ["Opportunity", "Solar", "Six-wheeled rover", "Spectrometers", "Mission ended 2018; declared complete 2019"], ["InSight", "Solar", "Stationary lander", "SEIS seismometer", "Mission ended 2022"], ["Ingenuity", "Solar + battery", "Flies", "Navigation camera", "Mission ended 2024"], ["Curiosity", "Nuclear MMRTG", "Six-wheeled rover", "ChemCam, SAM, CheMin", "Active; verify on publication day"], ["Perseverance", "Nuclear MMRTG", "Six-wheeled rover", "SuperCam, PIXL, SHERLOC", "Active; verify on publication day"], ["Voyager 1", "Radioisotope power (RTGs)", "Travels through space", "Magnetometer, plasma waves", "Active; verify on publication day"]], "interp": [["Finding or term", "What visitors must understand"], ["Organic molecules", "Their presence does not prove life existed. They show that organic chemistry is present; non-biological processes can also produce organic molecules."], ["Habitable environment", "Evidence that conditions could have supported life is not evidence that life actually existed."], ["Potential biosignature", "A feature that could have a biological origin but requires more study and alternative explanations to be considered."], ["Silica-rich soil at Spirit", "Evidence consistent with water-related processes such as hot springs or steam vents; not proof of life."], ["Hematite-rich spheres at Opportunity", "Mineral evidence associated with past water; explain how the rover examined them and why the finding matters."], ["Mars seismic waves", "Waveforms reveal information about the planet's interior; do not present a waveform without explaining what is measured."]], "refs": [["Official resource", "URL", "Use"], ["NASA 2026 challenge page", "https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/", "Challenge rules, Resources tab and updates."], ["NASA Image and Video Library", "https://images.nasa.gov/", "Original photographs, captions, image IDs and credits."], ["NASA Science", "https://science.nasa.gov/", "Mission pages and scientific discoveries."], ["NASA Open Data", "https://data.nasa.gov/", "Datasets and data catalogue."], ["NASA Jet Propulsion Laboratory", "https://www.jpl.nasa.gov/", "Mars, Voyager and lunar mission details."], ["NASA Planetary Data System", "https://pds.nasa.gov/", "Planetary science data, including InSight data."], ["NASA CDDIS", "https://cddis.nasa.gov/", "Lunar laser-ranging data."]], "audit": [["Existing file", "What it appears to show", "Required action"], ["dev-surveyor.jpg", "Astronaut at Surveyor 3 on the Moon", "Find original NASA image ID and credit."], ["dev-alsep.jpg", "Apollo science station (ALSEP) hardware", "Not the laser reflector. Replace with a correct retroreflector photograph."], ["dev-lrv.jpg", "Lunar rover with astronaut and lunar module", "Confirm mission, image ID and credit."], ["dev-sojourner.jpg", "Sojourner beside a rock", "Confirm image ID and credit."], ["dev-spirit.jpg", "MER rover with raised arm; appears to be an illustration", "Replace with real Spirit photograph or label as illustration."], ["dev-opportunity.jpg", "Rover deck and solar panels", "Confirm it is Opportunity; add image ID and credit."], ["dev-insight.jpg", "Lander with dome; appears to be an artist's concept", "Use a real Mars surface photograph or label as artwork."], ["dev-ingenuity.jpg", "Helicopter on the surface", "Confirm image ID and credit."], ["dev-curiosity.jpg", "Rover self-portrait style image", "Confirm image ID and credit."], ["dev-perseverance.jpg", "Rover self-portrait style image", "Confirm image ID and credit."], ["No Voyager image", "No image supplied in website files", "Add NASA spacecraft illustration or suitable NASA image such as Pale Blue Dot."]], "status": [["Label", "Meaning", "Use for"], ["Deliberately left behind", "The hardware was left at its destination by mission design or because returning it was not part of the mission.", "Surveyor 3, Apollo reflectors, Lunar Roving Vehicles; Sojourner and its lander remain after mission end."], ["Mission ended / no longer functioning", "The mission stopped after loss of power, communication or hardware damage.", "Spirit, Opportunity, InSight, Ingenuity."], ["Still operating / ongoing mission", "The equipment is still returning data or carrying out its mission.", "Apollo reflectors, Curiosity, Perseverance, Voyager 1."]]};

const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const vtag=s=>esc(s).replace(/VERIFY[^.;]*/g,m=>`<mark class="vf">${m}</mark>`);
const IMGID={surveyor3:'AS12-48-7110'};
const idLink=id=>IMGID[id]?`<a href="https://images.nasa.gov/search?q=${IMGID[id]}" target="_blank" rel="noopener">${IMGID[id]}</a>`:'to be confirmed (search the NASA Image and Video Library)';
function exhHTML(id){
  const X=EXH[id];if(!X)return '';
  const q=X.quiz;
  return `<div class="exh" data-exh="${id}">
  <p class="exh-status">${esc(X.type)}</p>
  <section class="eq exh-intro"><h3>Exhibit introduction</h3><ul>${X.intro.map(t=>`<li>${vtag(t)}</li>`).join('')}</ul></section>
  <section class="eq"><h3><i>1</i> Why were we sent?</h3><p>${vtag(X.c1)}</p></section>
  <section class="eq"><h3><i>2</i> How did we work?</h3><p>${vtag(X.c2)}</p></section>
  <section class="eq"><h3><i>3</i> What did we discover?</h3><p>${vtag(X.c3)}</p></section>
  <section class="eq"><h3><i>4</i> What happened to us?</h3><p>${vtag(X.c4)}</p></section>
  <section class="eq exh-story"><h3><i>5</i> My story</h3><p class="exh-drama">Dramatized narration based on real mission events — not an actual machine recording.</p><blockquote>“${esc(X.story)}”</blockquote>
    <p><b>Why am I still here?</b> ${esc(X.why)}</p><p><b>Engineering → science.</b> ${esc(X.eng.replace(/^Engineering → science\s*/,''))}</p></section>
  <section class="eq"><h3><i>6</i> Explore the engineering</h3><p class="eq-lead">Open the 3D model and tap the numbered dots, or tap a part here.</p><p><button type="button" class="btn" data-view="${id}">▶ Open the 3D model</button></p><div class="hot" role="group">${X.hot.map((h,i)=>`<button type="button" class="hot-b" data-h="${i}" aria-pressed="false">${esc(h[0])}</button>`).join('')}</div><p class="hot-t" aria-live="polite">Choose a part above.</p></section>
  <section class="eq exh-quiz" data-a="${q.a}"><h3><i>7</i> Test your knowledge</h3><p class="qq">${esc(q.q)}</p><div class="qo">${q.o.map((o,i)=>`<button type="button" class="btn ghost" data-o="${i}">${'ABC'[i]}. ${esc(o)}</button>`).join('')}</div><p class="qx" aria-live="polite"></p></section>
  <section class="eq"><h3><i>8</i> NASA archives</h3><ul class="arch">${X.arch.map(a=>`<li>${a[1]?`<a href="${a[1]}" target="_blank" rel="noopener">${esc(a[0])}</a>`:esc(a[0])}</li>`).join('')}</ul><p class="note"><b>Picture:</b> ${typeof PHOTOS!=='undefined'&&PHOTOS[id]?esc(PHOTOS[id][1]):'3D illustration'} · NASA image ID: ${idLink(id)}. All pictures are listed on the <a href="archives.html">NASA archives</a> page.</p></section>
  </div>`;
}
function exhWire(root){
  document.addEventListener('click',e=>{const v=e.target.closest('[data-view]');if(v&&typeof openViewer==='function'){e.preventDefault();openViewer(v.dataset.view)}});
  root.addEventListener('click',e=>{
    const hb=e.target.closest('.hot-b');
    if(hb){const x=hb.closest('.exh'),X=EXH[x.dataset.exh],h=X.hot[+hb.dataset.h];x.querySelectorAll('.hot-b').forEach(b=>b.setAttribute('aria-pressed',b===hb));x.querySelector('.hot-t').innerHTML='<b>'+esc(h[0])+'</b>'+(h[1]?': '+esc(h[1]):'')}
    const ob=e.target.closest('.exh-quiz [data-o]');
    if(ob){const s=ob.closest('.exh-quiz'),a=+s.dataset.a,X=EXH[s.closest('.exh').dataset.exh],ok=+ob.dataset.o===a;
      s.querySelectorAll('[data-o]').forEach(b=>{b.disabled=true;if(+b.dataset.o===a)b.classList.add('ok')});if(!ok)ob.classList.add('no');
      s.querySelector('.qx').textContent=(ok?'Correct! ':'Not quite. The answer is '+'ABC'[a]+'. ')+X.quiz.e}
  });
}

/* ---------- document-driven pages ---------- */
const PROF2ID={'01':'surveyor3','02':'retro','03':'lrv','04':'sojourner','05':'spirit','06':'opportunity','07':'insight','08':'ingenuity','09':'curiosity','10':'perseverance','11':'voyager1'};
const tbl=(rows,cls)=>`<div class="tw"><table class="dt ${cls||''}"><thead><tr>${rows[0].map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r=>`<tr>${r.map((c,i)=>`<td${i?'':' data-k="1"'}>${vtag(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function parseLL(s){const m=s.match(/([\d.]+)°([NS]),\s*([\d.]+)°([EW])/);if(!m)return null;return {lat:(m[2]==='S'?-1:1)*+m[1],lon:(m[4]==='W'?-1:1)*+m[3]}}
const MOONF=[[32,-16,15],[28,18,9],[8,31,10],[17,59,6],[-8,52,8],[-21,-16,9],[-24,-39,6],[15,-52,18],[56,0,7],[-10,-23,5]];
const MARSF=[[9,70,8,'#3a1f14'],[47,-25,13,'#4a2a1d'],[47,110,13,'#6b3b26'],[-42,70,9,'#d9a27a'],[0,-100,15,'#8a4a2f'],[-13,-70,6,'#3a1f14'],[18,-133,4,'#b9805c'],[25,147,7,'#a9663f'],[-30,-20,10,'#5a301f'],[-30,150,9,'#4a2a1d']];
function renderDisc(world,lon0,pts,label){
  const R=170,C=R+6,D=R*2+12,rad=Math.PI/180;
  const P=(lat,lon)=>{const l=(lon-lon0)*rad,f=lat*rad,cc=Math.cos(f)*Math.cos(l);return {x:C+R*Math.cos(f)*Math.sin(l),y:C-R*Math.sin(f),v:cc>0}};
  const base=world==='Moon'?'#8d8f95':'#b5663f',dark=world==='Moon'?'#4b4d54':'#4a2a1d';
  let blobs='';
  (world==='Moon'?MOONF:MARSF).forEach(f=>{const p=P(f[0],f[1]);if(!p.v)return;const l=(f[1]-lon0)*rad,fl=Math.cos(f[0]*rad)*Math.cos(l),rr=R*Math.sin(f[2]*rad)*1.0;
    blobs+=`<ellipse cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" rx="${(rr*Math.max(.35,Math.abs(Math.cos(l)))).toFixed(1)}" ry="${rr.toFixed(1)}" fill="${f[3]||dark}" opacity="${world==='Moon'?.62:.7}"/>`});
  let craters='';let seed=world==='Moon'?7:3;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
  for(let i=0;i<70;i++){const a=rnd()*6.283,d=Math.sqrt(rnd())*R*.96,r=1.5+rnd()*5;craters+=`<circle cx="${(C+Math.cos(a)*d).toFixed(1)}" cy="${(C+Math.sin(a)*d).toFixed(1)}" r="${r.toFixed(1)}" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="1"/>`}
  let grid='';for(let lo=-180;lo<180;lo+=30){let d='';for(let la=-90;la<=90;la+=5){const p=P(la,lo);if(p.v)d+=(d?'L':'M')+p.x.toFixed(1)+' '+p.y.toFixed(1)}if(d)grid+=`<path d="${d}"/>`}
  for(let la=-60;la<=60;la+=30){let d='';for(let lo=lon0-90;lo<=lon0+90;lo+=5){const p=P(la,lo);if(p.v)d+=(d?'L':'M')+p.x.toFixed(1)+' '+p.y.toFixed(1)}if(d)grid+=`<path d="${d}"/>`}
  const caps=world==='Mars'?`<ellipse cx="${C}" cy="${C-R+8}" rx="${R*.32}" ry="9" fill="#fff" opacity=".8"/><ellipse cx="${C}" cy="${C+R-8}" rx="${R*.28}" ry="8" fill="#fff" opacity=".75"/>`:'';
  const id='dk'+world+Math.round(lon0+360);
  const mk=pts.map((p,i)=>{const q=P(p.lat,p.lon);if(!q.v)return '';return `<g class="mk" tabindex="0" role="button" data-i="${p.i}" aria-label="${esc(p.name)}"><circle cx="${q.x.toFixed(1)}" cy="${q.y.toFixed(1)}" r="18" class="mk-h"/><circle cx="${q.x.toFixed(1)}" cy="${q.y.toFixed(1)}" r="8" class="mk-d"/><text x="${(q.x+(p.lon<-20&&world==='Moon'?-12:12)).toFixed(1)}" y="${(q.y-10).toFixed(1)}" text-anchor="${p.lon<-20&&world==='Moon'?'end':'start'}" class="mk-t" pointer-events="none">${esc(p.name.split(',')[0].replace(/ (reflector|rover).*$/,''))}</text></g>`}).join('');
  return `<figure class="disc"><svg viewBox="0 0 ${D} ${D}" role="group" aria-label="${label}"><defs><radialGradient id="${id}" cx="38%" cy="35%" r="75%"><stop offset="0" stop-color="${base}"/><stop offset="1" stop-color="${world==='Moon'?'#3b3d44':'#5c2f1c'}"/></radialGradient><clipPath id="c${id}"><circle cx="${C}" cy="${C}" r="${R}"/></clipPath></defs>
  <circle cx="${C}" cy="${C}" r="${R+4}" fill="none" stroke="rgba(255,255,255,.18)"/><g clip-path="url(#c${id})"><circle cx="${C}" cy="${C}" r="${R}" fill="url(#${id})"/>${blobs}${craters}${caps}<g class="mp-g" pointer-events="none">${grid}</g><circle cx="${C}" cy="${C}" r="${R}" fill="url(#sh${world})" pointer-events="none"/></g>${mk}</svg><figcaption>${label}</figcaption></figure>`;
}
function initMaps(){
  const rows=DOC.map.slice(1);
  const shade=w=>`<svg width="0" height="0" style="position:absolute"><defs><radialGradient id="sh${w}" cx="35%" cy="35%" r="80%"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient></defs></svg>`;
  ['Moon','Mars'].forEach(w=>{
    const host=document.getElementById('map'+w);if(!host)return;
    const pts=rows.map((r,i)=>({r,i})).filter(o=>o.r[0]===w).map(o=>{const ll=parseLL(o.r[2]);return {i:o.i,name:o.r[1],ll:o.r[2],prof:o.r[3],lat:ll.lat,lon:ll.lon}});
    const discs=w==='Moon'?renderDisc('Moon',0,pts,'The near side of the Moon, the side that faces Earth'):renderDisc('Mars',110,pts,'Mars · hemisphere A')+renderDisc('Mars',-20,pts,'Mars · hemisphere B');
    host.innerHTML=shade(w)+`<div class="discs">${discs}</div><div class="mp-card" aria-live="polite"><p>Select a marker to meet the machine that landed there.</p></div>`;
    const card=host.querySelector('.mp-card');
    const show=g=>{const p=pts.find(q=>q.i===+g.dataset.i);host.querySelectorAll('.mk').forEach(m=>m.classList.toggle('on',m.dataset.i===g.dataset.i));
      const ids=p.prof.split('/').map(s=>PROF2ID[s.trim()]);
      card.innerHTML=`<h4>${esc(p.name)}</h4><p class="mp-c">${esc(p.ll)} (approximate)</p>`+ids.map(id=>{const m=byId[id],ph=PHOTOS[id];return `<div class="mp-m">${ph?`<img src="${ph[0]}" alt="${esc(m.name)}">`:''}<div><b>${esc(m.name)}</b> <span class="badge" data-st="${m.status}">${ST[m.status]}</span><p>${esc(m.launch)} · ${esc(m.purpose)}</p><a class="link" href="device-journey.html#m-${id}">Open the exhibit →</a></div></div>`}).join('')};
    host.addEventListener('click',e=>{const g=e.target.closest('.mk');if(g)show(g)});
    host.addEventListener('keydown',e=>{const g=e.target.closest('.mk');if(g&&(e.key==='Enter'||e.key===' ')){e.preventDefault();show(g)}});
  });
}
function initDocPages(){
  const set=(id,h)=>{const e=document.getElementById(id);if(e)e.innerHTML=h};
  set('tlist','<ol class="tl2">'+DOC.timeline.slice(1).map(r=>`<li><b>${esc(r[0])}</b><span>${vtag(r[1])}</span></li>`).join('')+'</ol>');
  set('cmpTbl',tbl(DOC.cmp));
  set('statusTbl',tbl(DOC.status));
  set('interp','<div class="ic">'+DOC.interp.slice(1).map(r=>`<div class="ic-c"><b>${esc(r[0])}</b><p>${esc(r[1])}</p></div>`).join('')+'</div>');
  set('archRefs',tbl(DOC.refs.filter(r=>r.length===3)).replace(/<td>(https?:\/\/[^<]+)<\/td>/g,'<td><a href="$1" target="_blank" rel="noopener">$1</a></td>'));
  set('archImg',tbl([['Picture on this site','What it shows','NASA image ID','Credit']].concat(Object.keys(EXH).map(id=>{const ph=PHOTOS[id];return [ph?ph[0].replace('assets/img/',''):'(3D illustration)',ph?ph[1].replace(/^[^:]*: /,''):EXH[id].title,IMGID[id]?IMGID[id]:'To be confirmed','NASA'+(IMGID[id]?'':' (confirm on images.nasa.gov)')]}))));
  set('archEx',Object.keys(EXH).map(id=>`<div class="ax"><h4>${esc(EXH[id].title)}</h4><ul class="arch">${EXH[id].arch.map(a=>`<li>${a[1]?`<a href="${a[1]}" target="_blank" rel="noopener">${esc(a[0])}</a>`:esc(a[0])}</li>`).join('')}</ul></div>`).join(''));
  initMaps();
  set('labGrid',Object.keys(EXH).map(id=>{const m=byId[id],ph=PHOTOS[id];return `<button type="button" class="labc" data-view="${id}">${ph?`<img src="${ph[0]}" alt="">`:''}<b>${esc(m.name)}</b><span class="labw">📍 Deployed on: ${WHERE[m.world]||''}</span><span>${EXH[id].hot.length} clickable parts</span><i>▶ Open 3D model</i></button>`}).join(''));
  const L=document.getElementById('learn');
  if(L){const ids=Object.keys(EXH);let sc=0,done=0;
    L.innerHTML=ids.map((id,n)=>{const q=EXH[id].quiz;return `<section class="eq lq" data-a="${q.a}" data-n="${n}"><p class="lq-k">${esc(EXH[id].title)}</p><p class="qq">${n+1}. ${esc(q.q)}</p><div class="qo">${q.o.map((o,i)=>`<button type="button" class="btn ghost" data-o="${i}">${'ABC'[i]}. ${esc(o)}</button>`).join('')}</div><p class="qx" aria-live="polite"></p></section>`}).join('')+'<section class="eq lq-score" id="lqScore" hidden></section>';
    L.addEventListener('click',e=>{const b=e.target.closest('.lq [data-o]');if(!b)return;const s=b.closest('.lq'),a=+s.dataset.a,ok=+b.dataset.o===a;
      s.querySelectorAll('[data-o]').forEach(x=>{x.disabled=true;if(+x.dataset.o===a)x.classList.add('ok')});if(!ok)b.classList.add('no');else sc++;
      s.querySelector('.qx').textContent=(ok?'Correct! ':'Not quite. The answer is '+'ABC'[a]+'. ')+EXH[ids[+s.dataset.n]].quiz.e;done++;
      if(done===ids.length){const S=document.getElementById('lqScore');S.hidden=false;S.innerHTML=`<h3>Your score: ${sc} / ${ids.length}</h3><p>${sc>=9?'Mission expert!':sc>=6?'Great explorer!':'Keep exploring. Open each machine to learn more.'}</p><button class="btn" type="button" onclick="location.reload()">Try again</button>`;S.scrollIntoView({behavior:'smooth',block:'center'})}});
  }
  initDataLab();
}
function initDataLab(){
  const h=document.getElementById('dlab');if(!h)return;
  h.innerHTML=`<div class="dl-calc"><h3>Try the calculation</h3><p>Distance = (speed of light × round-trip travel time) ÷ 2</p>
   <label>Round-trip time (seconds) <input id="dlT" type="number" step="0.001" value="2.56" min="2.4" max="2.7"></label>
   <p class="dl-out">Earth–Moon distance ≈ <b id="dlD">384,000</b> km</p><p class="note">The measured light goes to the Moon and back, so the result is divided by two. Speed of light: 299,792 km/s.</p></div>
   <div class="dl-chart"><h3>Distance against time</h3><canvas id="dlCv" width="720" height="300" aria-label="Earth–Moon distance against date from NASA lunar laser ranging data"></canvas><p id="dlMsg" class="note">Looking for the NASA dataset file…</p></div>`;
  const T=document.getElementById('dlT'),D=document.getElementById('dlD');
  const up=()=>{const t=+T.value;D.textContent=isFinite(t)?Math.round(299792*t/2).toLocaleString('en-US'):'—'};T.addEventListener('input',up);up();
  fetch('assets/data/llr.csv').then(r=>{if(!r.ok)throw 0;return r.text()}).then(txt=>{
    const lines=txt.trim().split(/\r?\n/),src=lines.filter(l=>l.startsWith('#')).map(l=>l.replace(/^#\s*/,'')).join(' · ');const sEl=document.getElementById('dlSrc');if(sEl&&src)sEl.textContent=src;
    const rows=lines.filter(l=>!l.startsWith('#')).slice(1).map(l=>l.split(',')).map(c=>({d:new Date(c[0]),t:+c[1],r:c[2]||''})).filter(p=>isFinite(p.t)&&!isNaN(p.d));
    if(!rows.length)throw 0;rows.forEach(p=>p.km=299792.458*p.t/2);
    const cv=document.getElementById('dlCv'),c=cv.getContext('2d'),W=cv.width,H=cv.height,P=52;
    const xs=rows.map(p=>+p.d),ys=rows.map(p=>p.km),x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);
    const X=v=>P+(v-x0)/(x1-x0||1)*(W-P-14),Y=v=>H-34-(v-y0)/(y1-y0||1)*(H-60);
    c.fillStyle='#0b1019';c.fillRect(0,0,W,H);c.strokeStyle='#2a3344';c.strokeRect(P,12,W-P-14,H-46);
    c.fillStyle='#f7c548';rows.forEach(p=>{c.beginPath();c.arc(X(+p.d),Y(p.km),2.5,0,7);c.fill()});
    const n=rows.length,mx=xs.reduce((a,b)=>a+b)/n,my=ys.reduce((a,b)=>a+b)/n;let sxy=0,sxx=0;rows.forEach((p,i)=>{sxy+=(xs[i]-mx)*(ys[i]-my);sxx+=(xs[i]-mx)**2});const sl=sxy/sxx,ic=my-sl*mx;
    c.strokeStyle='#62d9a5';c.lineWidth=2;c.beginPath();c.moveTo(X(x0),Y(ic+sl*x0));c.lineTo(X(x1),Y(ic+sl*x1));c.stroke();
    c.fillStyle='#aeb6c6';c.font='12px sans-serif';c.fillText(Math.round(y1).toLocaleString('en-US')+' km',2,22);c.fillText(Math.round(y0).toLocaleString('en-US')+' km',2,H-34);c.fillText(new Date(x0).getFullYear(),P,H-14);c.fillText(new Date(x1).getFullYear(),W-50,H-14);
    document.getElementById('dlMsg').textContent=n+' laser-ranging observations plotted. Green line = straight-line trend. Fitted slope ≈ '+(sl*365.25*864e5*1e5).toFixed(1)+' cm per year (a short sample can differ from the accepted 3.8 cm per year).';
  }).catch(()=>{const m=document.getElementById('dlMsg');m.className='note vf-box';m.textContent='The NASA dataset has not been added to this website yet, so no graph is drawn. The calculator above works with any round-trip time.'});
}

/* ============ EXPLORE GAME ============ */
const G={r:null,sc:null,cam:null,raf:0,on:false,state:'pick',keys:new Set(),touch:{x:0,y:0,act:false}};
const GR_R=50;
const gq=s=>document.querySelector(s);
const TAU=Math.PI*2;
function gv(x=0,y=0,z=0){return new THREE.Vector3(x,y,z)}
const tanOf=(v,n)=>v.addScaledVector(n,-v.dot(n));
function gHash(n){return (Math.sin(n.x*7+1)+Math.sin(n.y*8)+Math.sin(n.z*6+2)+Math.sin((n.x+n.y)*13)*.4)*.3}
const gRad=n=>GR_R+gHash(n);
function textSprite(txt,sub,col='#f7c548'){
  const c=document.createElement('canvas');c.width=512;c.height=sub?190:120;const x=c.getContext('2d');
  x.fillStyle='rgba(5,7,13,.82)';const r=24;x.beginPath();x.roundRect?x.roundRect(4,4,504,c.height-8,r):x.rect(4,4,504,c.height-8);x.fill();x.strokeStyle=col;x.lineWidth=4;x.stroke();
  x.fillStyle=col;x.font='800 64px Unbounded, Arial Black, sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,256,sub?70:62);
  if(sub){x.fillStyle='#eef1f7';x.font='600 38px Inter, sans-serif';x.fillText(sub.length>22?sub.slice(0,21)+'…':sub,256,140)}
  const t=new THREE.CanvasTexture(c);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,depthTest:false,transparent:true}));s.scale.set(6,6*c.height/512,1);s.renderOrder=10;return s;
}

/* ---------- pick screen ---------- */
function openGame(){
  if(!hasGL()){alert('The game needs WebGL, which is turned off in this browser.');return}
  if(typeof endTour==='function'&&document.getElementById('tour'))endTour();G.opener=document.activeElement;gq('#gm').hidden=false;document.body.style.overflow='hidden';G.on=true;
  showPick();setTimeout(()=>{if(G.state==='pick')VO.line('Are you ready to see the tech of the galaxy? Pick a machine!')},350);
}
function showPick(){
  G.state='pick';gq('#gm').classList.remove('gm-dead','gm-play');gq('#gmEnd').hidden=true;gq('#gmCard').hidden=true;
  const order=['curiosity','perseverance','opportunity','spirit','sojourner','ingenuity','insight','lrv','surveyor3','retro','voyager1'];
  gq('#gmPick').hidden=false;
  gq('#gmPick').innerHTML=`<div class="gp-in"><p class="eyebrow">Explore with device</p><h2>Are you ready to see the tech of the galaxy?</h2><p class="lede">Pick a machine and do its real job! Drill rocks, collect samples, listen for marsquakes or bounce signals across space. Every sample you collect unlocks a real discovery.</p><label class="gp-fun"><input type="checkbox" id="gpFun" ${FUN?'checked':''}> <span><b>👽 Aliens, UFOs and space cows</b> Just for fun, not part of the real history. Watch out for tractor beams!</span></label>
   <div class="gp-grid">${order.map(id=>{const m=byId[id],j=GJ[id],mc=MECH[j.mech];return `<button class="gp-card" data-id="${id}"><img alt="" data-thumb="${id}" ${PHOTOS[id]?`src="${PHOTOS[id][0]}"`:IMG[id]?`src="${IMG[id]}"`:'hidden'}><span class="gp-w">${j.world==='galaxy'?'Deep space':j.world==='moon'?'The Moon':'Mars'}</span><b>${m.name}</b><span class="gp-m">🎯 ${MISSIONS[id]?MISSIONS[id].goal:id==='voyager1'?'Turn the dishes so Voyager’s signal reaches every area.':'Hit the Moon mirror with a laser and measure the distance.'}</span></button>`}).join('')}</div></div>`;
  gq('#gmPick').scrollTop=0;gq('#gpFun').addEventListener('change',e=>{setFun(e.target.checked);if(FUN)SFX.ufo()});
  order.forEach(id=>{if(!IMG[id]&&!PHOTOS[id])setTimeout(()=>deviceImage(id),40)});
  setTimeout(()=>{const b=gq('#gmPick .gp-card');b&&b.focus()},50);
}

/* ---------- build the world ---------- */
function gInitRenderer(){
  if(G.r)return;G.r=new THREE.WebGLRenderer({canvas:gq('#gmCv'),antialias:true});G.r.setPixelRatio(Math.min(devicePixelRatio||1,1.75));G.r.setClearColor(0x04060b,1);
  const fit=()=>{const c=gq('#gmCv'),w=c.clientWidth||800,h=c.clientHeight||500;G.r.setSize(w,h,false);if(G.cam){G.cam.aspect=w/h;G.cam.updateProjectionMatrix()}};
  new ResizeObserver(fit).observe(gq('#gmCv'));G.fit=fit;
}
function gStars(sc,n=900,R=420){const g=new THREE.BufferGeometry(),a=new Float32Array(n*3),rand=rng(31);for(let i=0;i<n;i++){const u=rand()*2-1,t=rand()*TAU,s=Math.sqrt(1-u*u);a.set([Math.cos(t)*s*R,u*R,Math.sin(t)*s*R],i*3)}
  g.setAttribute('position',new THREE.BufferAttribute(a,3));sc.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xffffff,size:1.4,sizeAttenuation:false})))}
function buildDevice(id,world){
  const m=mats(),ctx={m,sun:null};const def=MODELS[id](m,ctx);
  def.update(def.still[0],def.still[1],1.3,0);
  def.root.traverse(o=>{if(o.userData.extra)o.visible=false});
  if(def.wheels)def.wheels.forEach(w=>w.userData.spin=1);
  const box=new THREE.Box3();def.root.traverse(o=>{if(o.isMesh&&o.visible){let v=true;o.traverseAncestors(a=>{if(a.visible===false)v=false});if(v)box.expandByObject(o)}});
  const sph=box.getBoundingSphere(new THREE.Sphere()),k=(world==='galaxy'?2.4:2.25)/Math.max(.2,sph.radius);
  const holder=new THREE.Group(),inner=new THREE.Group();holder.add(inner);inner.add(def.root);inner.scale.setScalar(k);
  def.root.position.set(-sph.center.x,-box.min.y,-sph.center.z);
  if(id==='spirit')inner.rotation.y=Math.PI;
  /* everything that can rust, bend and break */
  const parts=[];def.root.traverse(o=>{if(o.isMesh&&o.material&&o.material.color&&!o.material.transparent){if(!o.material.userData.own){o.material=o.material.clone();o.material.userData.own=1}parts.push(o)}});
  parts.forEach(p=>{p.userData.c0=p.material.color.clone();p.userData.r0=p.rotation.clone();p.userData.e0=p.material.emissiveIntensity||0});
  const rand=rng(id.length*7),bend=parts.filter(()=>rand()<.22).slice(0,7).map(p=>({p,ax:rand()*3|0,s:(rand()-.5)*2}));
  return {def,holder,inner,parts,bend,k,size:sph.radius*k};
}
function ageDevice(D,age,world){
  const dust=new THREE.Color(world==='mars'?0x8a4a2c:world==='moon'?0x77756f:0x2c2622),soot=new THREE.Color(0x1d1915);
  D.parts.forEach(p=>{const c=p.userData.c0.clone().lerp(dust,Math.min(.62,age*.7));if(age>.6)c.lerp(soot,(age-.6)*.9);p.material.color.copy(c);if(p.material.emissiveIntensity!=null)p.material.emissiveIntensity=p.userData.e0*(1-age)});
  const b=Math.max(0,age-.25)/.75;D.bend.forEach(({p,ax,s})=>{const r=p.userData.r0;p.rotation.set(r.x+(ax===0?s*b*.5:0),r.y+(ax===1?s*b*.5:0),r.z+(ax===2?s*b*.5:0))});
}
function buildPlanet(world,sc){
  const geo=new THREE.IcosahedronGeometry(GR_R,40),p=geo.attributes.position,v=gv();
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).normalize();const r=gRad(v);p.setXYZ(i,v.x*r,v.y*r,v.z*r)}
  geo.computeVertexNormals();
  /* UVs that match the equirectangular texture */
  const uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).normalize();let u=Math.atan2(v.z,-v.x)/TAU;if(u<0)u+=1;uv[i*2]=u;uv[i*2+1]=.5+Math.asin(v.y)/Math.PI}
  geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));
  const tex=new THREE.CanvasTexture(eqTex(world));
  sc.add(new THREE.Mesh(geo,new THREE.MeshStandardMaterial({map:tex,roughness:1,flatShading:true})));
}
function randDir(rand){return gv(rand()-.5,rand()-.5,rand()-.5).normalize()}
function buildJourneyPlanet(J,sc,rand){
  buildPlanet(J.world,sc);gStars(sc);
  sc.add(new THREE.HemisphereLight(J.world==='mars'?0xffd9c0:0xe6ecff,J.world==='mars'?0x4a2418:0x2a2a30,.8));
  G.sun=new THREE.DirectionalLight(0xfff4e8,1);sc.add(G.sun);
  /* stops along a winding route */
  const stops=[];let n=gv(0,0,1),h=gv(0,1,0);
  J.stops.forEach((s,i)=>{if(i>0){const turn=(rand()-.5)*1.6;h.applyAxisAngle(n,turn);const a=(30+rand()*10)/GR_R;const nn=n.clone().multiplyScalar(Math.cos(a)).addScaledVector(h,Math.sin(a)).normalize();h.multiplyScalar(Math.cos(a)).addScaledVector(n,-Math.sin(a)).normalize();n=nn}stops.push({...s,n:n.clone()})});
  if(J.near)stops.forEach((s,i)=>{if(!i)return;const a=i*TAU/(stops.length-1)+.4,d=(14+(i%2)*4)/GR_R,h0=gv(Math.cos(a),Math.sin(a),0);s.n=gv(0,0,1).multiplyScalar(Math.cos(d)).addScaledVector(h0,Math.sin(d)).normalize()});
  /* rocks, kept off the route */
  const rocks=[],rm=new THREE.MeshStandardMaterial({color:J.world==='mars'?0x7a3a22:0x6e6c68,flatShading:true,roughness:1});
  for(let i=0;i<170;i++){const n2=randDir(rand),r=.6+rand()*1.3;if(n2.z>.985||stops.some(s=>s.n.angleTo(n2)*GR_R<5))continue;
    const k=new THREE.Mesh(new THREE.DodecahedronGeometry(r),rm);k.position.copy(n2).multiplyScalar(gRad(n2)+r*.25);k.quaternion.setFromUnitVectors(gv(0,1,0),n2);k.scale.y=.75;sc.add(k);rocks.push({n:n2,r})}
  /* soft sand patches for Opportunity */
  const sand=[];if(J.mech==='sand'){const sm=new THREE.MeshBasicMaterial({color:0xe3b07c,transparent:true,opacity:.55,depthWrite:false});
    for(let i=0;i<26;i++){const n2=randDir(rand);if(n2.z>.97)continue;const r=3+rand()*4;const d=new THREE.Mesh(new THREE.CircleGeometry(r,28),sm);d.position.copy(n2).multiplyScalar(gRad(n2)+.25);d.quaternion.setFromUnitVectors(gv(0,0,1),n2);sc.add(d);sand.push({n:n2,r})}}
  return {stops,rocks,sand};
}
/* galaxy for spacecraft: flat play plane, Sun, planets, asteroid belt, heliopause */
function buildGalaxy(J,sc,rand){
  gStars(sc,1500,500);
  /* a spiral galaxy glowing under the play plane */
  const N=9000,g=new THREE.BufferGeometry(),pos=new Float32Array(N*3),col=new Float32Array(N*3),c=new THREE.Color();
  for(let i=0;i<N;i++){const arm=i%3,t=Math.pow(rand(),.7),r=20+t*420,a=arm*TAU/3+t*5.2+(rand()-.5)*.45*(1-t*.4);
    pos.set([Math.cos(a)*r+(rand()-.5)*14,-26-(rand()-.5)*8,Math.sin(a)*r+(rand()-.5)*14],i*3);c.setHSL(.58+rand()*.15-(1-t)*.5,.6,.55+rand()*.3);col.set([c.r,c.g,c.b],i*3)}
  g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('color',new THREE.BufferAttribute(col,3));
  sc.add(new THREE.Points(g,new THREE.PointsMaterial({size:2,sizeAttenuation:false,vertexColors:true,transparent:true,opacity:.9,depthWrite:false})));
  const core=new THREE.Mesh(new THREE.CircleGeometry(60,48),new THREE.MeshBasicMaterial({color:0xffe2b0,transparent:true,opacity:.18,depthWrite:false}));core.rotation.x=-Math.PI/2;core.position.y=-27;sc.add(core);
  sc.add(new THREE.AmbientLight(0x8890b0,.55));G.sun=new THREE.PointLight(0xfff2d8,1.6,0,0);sc.add(G.sun);
  const sunM=new THREE.Mesh(new THREE.SphereGeometry(7,32,24),new THREE.MeshBasicMaterial({color:0xffd27a}));sc.add(sunM);
  const glow=new THREE.Mesh(new THREE.SphereGeometry(11,32,24),new THREE.MeshBasicMaterial({color:0xffb347,transparent:true,opacity:.18,depthWrite:false}));sc.add(glow);
  const P=(r,a)=>gv(Math.cos(a)*r,0,Math.sin(a)*r);
  const at=[[20,0],[30,-.18],[68,-.55],[106,-.85],[140,-1.06],[176,-1.26],[214,-1.45],[246,-1.62],[278,-1.78]];
  const stops=J.stops.map((s,i)=>({...s,p:P(...at[i])}));
  const orbit=r=>{const o=new THREE.Mesh(new THREE.RingGeometry(r-.15,r+.15,160),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.08,side:THREE.DoubleSide,depthWrite:false}));o.rotation.x=-Math.PI/2;sc.add(o)};
  const bodies=[];
  const planet=(k,r,a,size,ring)=>{orbit(r);const m=planetMesh(k==='jupiter'||k==='saturn'?'mars':k);if(k==='jupiter'||k==='saturn'){m.children[0].material.map=new THREE.CanvasTexture(bandTex(k))}m.scale.setScalar(size);m.position.copy(P(r,a));sc.add(m);
    if(ring){const rg=new THREE.Mesh(new THREE.RingGeometry(size*1.4,size*2.3,64),new THREE.MeshBasicMaterial({color:0xe8d7b0,transparent:true,opacity:.6,side:THREE.DoubleSide}));rg.rotation.x=-Math.PI/2+.35;rg.position.copy(m.position);sc.add(rg)}
    bodies.push({p:m.position.clone(),r:size*1.05,mass:size*size*9});return m};
  planet('earth',20,-.25,2);planet('mars',30,.6,1.4);planet('jupiter',68,-.73,6.5);planet('saturn',106,-.98,5.4,true);planet('uranus',150,.4,3.6);planet('neptune',190,2.3,3.5);
  /* asteroid belt */
  const rocks=[],rm=new THREE.MeshStandardMaterial({color:0x6d655e,flatShading:true,roughness:1});
  for(let i=0;i<120;i++){const r=44+rand()*12,a=rand()*TAU,s=.6+rand()*1.3;if(Math.abs(((a+TAU)%TAU)-((-.38+TAU)%TAU))<.07)continue;const k=new THREE.Mesh(new THREE.DodecahedronGeometry(s),rm);k.position.copy(P(r,a));k.rotation.set(rand()*3,rand()*3,0);sc.add(k);rocks.push({p:k.position.clone(),r:s,mesh:k})}
  /* edge of the Sun's bubble */
  {const dg=new THREE.BufferGeometry(),da=new Float32Array(500*3);for(let k=0;k<500;k++)da.set([rand()*80-40,(rand()-.5)*10,rand()*80-40],k*3);dg.setAttribute('position',new THREE.BufferAttribute(da,3));G.dust=new THREE.Points(dg,new THREE.PointsMaterial({color:0xcfe3ff,size:.18,transparent:true,opacity:.7}));sc.add(G.dust)}
  const hp=new THREE.Mesh(new THREE.TorusGeometry(214,1.2,8,200),new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.35}));hp.rotation.x=Math.PI/2;sc.add(hp);
  const hl=textSprite('HELIOPAUSE','Edge of the Sun\'s bubble','#7cc4ff');hl.position.copy(P(214,-1.2)).setY(4);hl.scale.multiplyScalar(2);sc.add(hl);
  return {stops,rocks,bodies};
}
function bandTex(k){const W=512,H=256,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
  for(let y=0;y<H;y+=2){const t=y/H,v=Math.sin(t*26+Math.sin(t*9)*1.3)*.5+.5;x.fillStyle=k==='jupiter'?mix('#e8d2b0','#a8673e',v*.85):mix('#efe0b8','#c9a86a',v*.6);x.fillRect(0,y,W,2)}
  if(k==='jupiter'){x.fillStyle='#b4553a';x.beginPath();x.ellipse(W*.6,H*.66,26,14,0,0,7);x.fill()}return c}

/* ---------- start a journey ---------- */
function startJourney(id){
  miClean();if(id==='retro'&&window.openLaserLab){openLaserLab();return}if(MINI2D[id]){miniStart(id);return}
  gInitRenderer();gTeardown();G.dust=null;G.botCd={};
  const J=missionJ(id),rand=rng(id.length*13+5);G.id=id;G.J=J;G.mech=J.mech;G.state='play';G.keys.clear();
  const sc=G.sc=new THREE.Scene();sc.background=new THREE.Color(0x04060b);
  G.cam=new THREE.PerspectiveCamera(55,1.6,.1,1500);
  G.world=J.world;
  Object.assign(G,J.world==='galaxy'?buildGalaxy(J,sc,rand):buildJourneyPlanet(J,sc,rand));
  G.D=buildDevice(id,J.world);sc.add(G.D.holder);
  /* stop beacons */
  G.stops.forEach((s,i)=>{const g=new THREE.Group();
    const beam=new THREE.Mesh(new THREE.CylinderGeometry(.35,.9,34,16,1,true),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.28,depthWrite:false,side:THREE.DoubleSide}));beam.position.y=17;g.add(beam);
    const ring=new THREE.Mesh(new THREE.RingGeometry(2.2,2.7,48),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.9,side:THREE.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.y=.3;g.add(ring);
    const lab=textSprite(s.d,s.t);lab.position.y=6.5;g.add(lab);
    if(G.world==='galaxy'){g.position.copy(s.p)}else{g.position.copy(s.n).multiplyScalar(gRad(s.n));g.quaternion.setFromUnitVectors(gv(0,1,0),s.n)}
    g.visible=false;sc.add(g);s.g=g;s.beam=beam;s.ring=ring});
  /* pointer arrow over the device */
  const ar=new THREE.Group(),sh=new THREE.Shape();sh.moveTo(0,1);sh.lineTo(.9,-.4);sh.lineTo(0,0);sh.lineTo(-.9,-.4);sh.closePath();
  G.chev=[0,1,2].map(i=>{const c=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,depthTest:false,side:THREE.DoubleSide}));c.rotation.x=Math.PI/2;c.renderOrder=6;ar.add(c);return c});
  sc.add(ar);G.arrow=ar;
  /* effects */
  G.fx=new THREE.Group();sc.add(G.fx);
  G.flame=new THREE.Mesh(new THREE.ConeGeometry(.5,1.8,16,1,true),new THREE.MeshBasicMaterial({color:0xffa040,transparent:true,opacity:.85,depthWrite:false}));G.flame.rotation.x=Math.PI;G.D.holder.add(G.flame);G.flame.visible=false;
  G.pingRing=new THREE.Mesh(new THREE.RingGeometry(.9,1,64),new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false}));G.pingRing.rotation.x=-Math.PI/2;G.D.holder.add(G.pingRing);
  /* state */
  Object.assign(G,{n:gv(0,0,1),hd:gv(0,1,0),pos:G.world==='galaxy'?G.stops[0].p.clone().add(gv(2,0,2)):null,ang:-Math.PI/2,vel:gv(),spd:0,alt:0,vy:0,air:false,charge:0,bounces:0,
    lift:0,dash:0,dcd:0,battery:1,flying:false,ping:0,pcd:0,boost:0,bcd:0,jcd:0,push:0,stall:0,next:1,hold:false,lastPing:0,age:0,t:0,flash:0,dead:0,cardOpen:false,camP:null,lastAge:-1});
  G.stops[0].done=true;funSetup();chaosSetup();
  gq('#gmPick').hidden=true;gq('#gm').classList.add('gm-play');gq('#gm').classList.remove('gm-dead');
  gq('#gmName').textContent=byId[id].name;gq('#gmMech').textContent=MECH[J.mech].name;gq('#gmKeys').textContent=MECH[J.mech].keys+' · N map';
  gq('#gmAct').textContent={hop:'Hop',dash:'Dash',fly:'Fly',ping:'Ping',space:'Burst'}[J.mech]||'Jump';gq('#gmAct').hidden=!gq('#gmAct').textContent;
  G.fit();placeDevice(0);snapCam();renderHud();
  gq('#gmBot').classList.remove('broken');botHide();SFX.start();SFX.engine.stop();SFX.engine.start(J.mech==='fly'?'fly':J.mech==='space'?'space':'rover');
  miStart();
  cancelAnimationFrame(G.raf);let last=performance.now();
  const loop=now=>{G.raf=requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;if(gq('#gm').hidden||document.hidden)return;gTick(dt)};G.raf=requestAnimationFrame(loop);
  gq('#gm').focus();
}
function gTeardown(){tutEnd();miniStop();cancelAnimationFrame(G.raf);SFX.engine.stop();VO.stop();clearInterval(G.typeT);G.cine=null;G.phase=null;G.cfx=null;clearComic();['#gmCine','#gmGain','#gmCard'].forEach(x=>{const e=gq(x);if(e)e.hidden=true});gq('#gm')&&gq('#gm').classList.remove('gm-cine','gm-side');if(G.sc){dispose3(G.sc);G.sc=null}}

/* ---------- story cards ---------- */
function condOf(age){return age<.15?'Brand new':age<.4?'Dusty':age<.6?'Worn':age<.85?'Getting weaker':'Failing'}
function showCard(i,review){
  const s=G.stops[i],n=G.stops.length,last=i===n-1,age=i/(n-1);if(!review||G.phase){G.cardOpen=true;G.keys.clear()}G.cardT=performance.now();G.review=!!review;G.cardI=i;
  const health=Math.round((1-age*.9)*100),firstWeak=!review&&age>=.6&&i>0&&(i-1)/(n-1)<.6&&!last;
  gq('#gmCard').innerHTML=`<div class="gm-ch"><span class="gm-tag">Stop ${i+1} of ${n}</span><span class="gm-tag" style="color:var(--muted)">${byId[G.id].name}</span></div>
   <p class="gm-date">${s.d}</p><h3>${s.t}</h3>
   <dl class="gm-facts"><dt>When</dt><dd>${s.d}</dd><dt>Where</dt><dd>${s.w||'—'}</dd><dt>Machine</dt><dd><span class="gm-hp"><i style="width:${health}%;background:${health>60?'var(--st-active)':health>35?'var(--accent)':'var(--st-silent)'}"></i></span> ${condOf(age)}</dd></dl>
   <p class="gm-x">${s.x}</p>${s.m?`<p class="gm-more"><b>Did you know?</b> ${s.m}</p>`:''}
   ${i===0&&!review?`<p class="gm-how"><b>${MECH[G.mech].name}.</b> ${MECH[G.mech].keys}. Follow the yellow pointer to the next stop.</p>`:''}
   ${firstWeak?'<p class="gm-warn">Warning: past 60% of its story the machine gets weaker. It is slower, stalls and is harder to steer.</p>':''}
   <div class="gm-cf"><button class="btn" id="gmGo">${review?'Close full story':last?'End of the journey':i===0?'Start the journey':'Continue'} →</button><span class="gm-space">${review?'<kbd>M</kbd> to close':`<kbd>Space</kbd> ${last?'to finish':'to close and continue'}`}</span></div>`;
  gq('#gmCard').hidden=false;gq('#gmCard').scrollTop=0;gq('#gm').classList.add('gm-side');if(!review)setTimeout(()=>gq('#gmGo')&&gq('#gmGo').focus({preventScroll:true}),30);
  gq('#gmGo').addEventListener('click',()=>closeCard(i));
  if(!review){SFX.chime();setTimeout(()=>SFX.card(),180);gq('#gmYear').textContent=s.y;renderStory();botHide()}else SFX.open();
}
function closeCard(i){
  gq('#gmCard').hidden=true;gq('#gm').classList.remove('gm-side');gq('#gm').focus({preventScroll:true});SFX.close();G.review=false;
  if(G.phase){G.cardT=performance.now();return}
  G.cardOpen=false;
}
function toggleStory(){if(G.MI)return;if(G.dead||G.state!=='play')return;if(!gq('#gmCard').hidden){closeCard(G.cardI);return}const i=G.cine?G.cine.i:Math.max(0,G.next-1);showCard(i,true)}
function advance(){if(G.MI&&G.MI.card){if(performance.now()-G.cardT>350)G.MI.card.next();return}if(!gq('#gmCard').hidden){gq('#gmGo').click();return}if(G.phase==='cine')endCine();else if(G.phase==='gain')closeGain()}

/* ---------- cutscene at every story stop ---------- */
const sentences=t=>(t||'').match(/[^.!?]+[.!?]+["')\]]*|[^.!?]+$/g)?.map(x=>x.trim()).filter(Boolean)||[];
function playCine(i){
  const s=G.stops[i],n=G.stops.length;G.cardOpen=true;G.cardT=performance.now();G.keys.clear();G.phase='cine';
  gq('#gmYear').textContent=s.y;renderStory();botHide();SFX.chime();
  const type=i===0?'build':i===n-1?'end':/launch/i.test(s.t)?'launch':/landing|lands|arrival|hole in one|sky crane/i.test(s.t+' '+s.x.slice(0,60))&&G.world!=='galaxy'?'land':'discover';
  G.cine={i,t:0,type,a0:Math.PI*.78,fx:{}};buildComic(type,s,i);
  if(G.camP&&G.camP.distanceTo(devicePos())>(G.world==='galaxy'?40:20))G.camP=null;
  gq('#gm').classList.add('gm-cine');
  const box=gq('#gmCine');box.hidden=false;
  box.innerHTML=`<div class="cn-top"><span class="gm-tag">Stop ${i+1} of ${n}</span><span class="cn-date">${s.d}</span><span class="cn-title">${s.t}</span><span class="cn-where">${s.w||''}</span></div>
   <p class="cn-cap" id="cnCap" aria-live="polite"></p>
   <div class="cn-ctl"><button class="d-close" id="cnDetails" type="button">Full story (M)</button><button class="d-close" id="cnSkip" type="button">Skip ▸</button><span class="gm-space"><kbd>Space</kbd> skip</span></div>`;
  if(G.cine.tag)box.insertAdjacentHTML('afterbegin',`<p class="fun-tag">👽 ${FUN_TAGS[G.cine.tag]}</p>`);
  gq('#cnSkip').addEventListener('click',endCine);
  gq('#cnDetails').addEventListener('click',()=>toggleStory());
  const E=EQUIP[G.id]||{},m=byId[G.id];
  const lines=[...(i===0?['Are you ready to see the tech of the galaxy? Let’s go!',`Meet ${m.name}. Its goal: ${E.goal||m.purpose}`]:[]),`${s.d}. ${s.t}.`,...sentences(s.x)];
  if(type==='end')lines.push(m.status==='active'||m.status==='passive'?`${m.name} is still at work today!`:`Thank you, ${m.name}. Mission complete.`);
  G.vstop=VO.seq(lines,(k,t)=>{typeCap(t);comicReveal(k,lines.length)},()=>{if(G.phase==='cine'&&G.cine&&G.cine.i===i)setTimeout(()=>{if(G.phase==='cine'&&G.cine&&G.cine.i===i)endCine()},600)});
}
function typeCap(t){const c=gq('#cnCap');if(!c)return;clearInterval(G.typeT);let k=0;c.textContent='';G.typeT=setInterval(()=>{k+=2;c.textContent=t.slice(0,k);if(k>=t.length)clearInterval(G.typeT)},16)}
function endCine(){
  if(G.phase!=='cine')return;VO.stop();clearInterval(G.typeT);G.phase='gain';G.cardT=performance.now();
  gq('#gmCine').hidden=true;clearComic();const i=G.cine.i,s=G.stops[i],n=G.stops.length,last=i===n-1,age=i/(n-1),[k,txt]=s.gain||['science',''];
  const firstWeak=age>=.6&&i>0&&(i-1)/(n-1)<.6&&!last;
  const g=gq('#gmGain');g.hidden=false;
  g.innerHTML=`<div class="gn-img">${gainSVG(k)}</div><div class="gn-b"><p class="gm-tag">What we gained from this moment · ${s.d}</p><h3>${GAIN[k]?GAIN[k][0]:'New science'}</h3><p class="gn-t">${txt}</p>
   ${i===0&&EQUIP[G.id]?`<div class="gn-tools"><p class="gm-tag">Meet its tools</p>${EQUIP[G.id].parts.slice(0,3).map(([ic,n,t])=>`<p><span>${ic}</span><b>${n}:</b> ${t}</p>`).join('')}</div>`:''}
   ${i===0?`<p class="gm-how"><b>${MECH[G.mech].name}.</b> ${MECH[G.mech].keys}. Follow the yellow pointer to the next stop.</p>`:''}
   ${firstWeak?'<p class="gm-warn">Warning: past 60% of its story the machine gets weaker. It is slower, stalls and is harder to steer.</p>':''}
   <div class="gm-cf"><button class="btn" id="gnGo" type="button">${last?'End of the journey':i===0?'Start the journey':'Continue'} →</button><button class="btn ghost" id="gnMore" type="button">Full story (M)</button><span class="gm-space"><kbd>Space</kbd> ${last?'to finish':'to continue'}</span></div></div>`;
  gq('#gnGo').addEventListener('click',closeGain);gq('#gnMore').addEventListener('click',()=>toggleStory());
  SFX.card();setTimeout(()=>{if(G.phase==='gain')VO.line('What we gained. '+txt)},250);
  setTimeout(()=>gq('#gnGo')&&gq('#gnGo').focus({preventScroll:true}),40);
}
function closeGain(){
  if(G.phase!=='gain')return;VO.stop();SFX.close();gq('#gmGain').hidden=true;gq('#gmCard').hidden=true;gq('#gm').classList.remove('gm-side');
  const i=G.cine.i,s=G.stops[i];clearCineFx();G.phase=null;G.cine=null;G.cardOpen=false;G.hold=false;gq('#gm').classList.remove('gm-cine');gq('#gm').focus({preventScroll:true});
  if(i===G.stops.length-1){breakdown();return}
  const nx=G.stops[i+1];
  if(i===0)setTimeout(()=>{if(G.state==='play'&&!G.cardOpen)tutStart()},350);
  else setTimeout(()=>botSay(`${s.b||'Onwards!'} Next stop: ${nx.d}.`),250);
}
function astronaut(){
  const w=new THREE.MeshStandardMaterial({color:0xeeeeea,roughness:.6}),g=new THREE.Group(),gold=new THREE.MeshStandardMaterial({color:0xd8a63a,roughness:.15,metalness:.6});
  const add=(geo,m,x,y,z)=>{const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);g.add(o);return o};
  add(new THREE.BoxGeometry(.22,.7,.26),w,0,.35,-.15);add(new THREE.BoxGeometry(.22,.7,.26),w,0,.35,.15);
  add(new THREE.BoxGeometry(.4,.75,.62),w,0,1.08,0);add(new THREE.BoxGeometry(.3,.62,.5),w,-.32,1.12,0);
  add(new THREE.SphereGeometry(.3,20,14),w,0,1.68,0);const v=add(new THREE.SphereGeometry(.22,20,14,-Math.PI/2,Math.PI,.3,1.6),gold,.12,1.68,0);v.rotation.y=Math.PI/2;
  add(new THREE.BoxGeometry(.18,.6,.18),w,0,1.05,-.42);const arm=new THREE.Group();arm.position.set(0,1.38,.42);g.add(arm);const a=new THREE.Mesh(new THREE.BoxGeometry(.18,.62,.18),w);a.position.y=-.28;arm.add(a);g.userData.arm=arm;
  return g;
}
function buildCineFx(type,s){
  clearCineFx();const f=new THREE.Group(),h=G.D.holder;f.position.copy(h.position);f.quaternion.copy(h.quaternion);G.sc.add(f);G.cfx=f;const c=G.cine;c.fx={};
  const glow=(col,o=.6)=>new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:o,depthWrite:false,side:THREE.DoubleSide});
  if(type==='build'){
    const ring=new THREE.Mesh(new THREE.RingGeometry(3.4,3.6,64),glow(0x7cc4ff,.8));ring.rotation.x=-Math.PI/2;ring.position.y=.05;f.add(ring);
    const grid=new THREE.GridHelper(8,16,0x7cc4ff,0x2a4a80);grid.position.y=.04;grid.material.transparent=true;grid.material.opacity=.45;f.add(grid);
    c.fx.arms=[-1,1].map(sg=>{const a=new THREE.Group();a.position.set(0,0,sg*3.2);f.add(a);const m=new THREE.MeshStandardMaterial({color:0xf7c548,roughness:.4});
      a.add(AT(new THREE.Mesh(new THREE.CylinderGeometry(.18,.25,2.6,12),m),0,1.3,0));const fore=new THREE.Group();fore.position.y=2.6;a.add(fore);const b=new THREE.Mesh(new THREE.BoxGeometry(.2,.2,2.2),m);b.position.z=-sg*1.1;fore.add(b);a.userData.fore=fore;a.userData.sg=sg;return a});
    [[3,0,3],[-3,0,3],[3,0,-3],[-3,0,-3]].forEach(([x,y,z])=>{const l=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,6,8),glow(0xbfe3ff,.7));l.position.set(x,3,z);f.add(l)});
  }else if(type==='launch'){
    const r=new THREE.Group(),wm=new THREE.MeshStandardMaterial({color:0xf2f2ee,roughness:.5}),dk=new THREE.MeshStandardMaterial({color:0x2c2f37});
    r.add(AT(new THREE.Mesh(new THREE.CylinderGeometry(.55,.55,6,20),wm),0,3,0));r.add(AT(new THREE.Mesh(new THREE.ConeGeometry(.55,1.4,20),wm),0,6.7,0));
    r.add(AT(new THREE.Mesh(new THREE.CylinderGeometry(.56,.56,.5,20),dk),0,4.6,0));
    for(let k=0;k<4;k++){const fin=new THREE.Mesh(new THREE.BoxGeometry(.06,1.1,.9),dk);const a=k*Math.PI/2;fin.position.set(Math.cos(a)*.6,.55,Math.sin(a)*.6);fin.rotation.y=-a;r.add(fin)}
    const fl=new THREE.Mesh(new THREE.ConeGeometry(.5,2.6,16,1,true),glow(0xffa040,.9));fl.rotation.x=Math.PI;fl.position.y=-1.2;r.add(fl);r.userData.fl=fl;
    r.position.set(-1.5,0,-5);f.add(r);c.fx.rocket=r;
    const pad=new THREE.Mesh(new THREE.CylinderGeometry(1.6,1.8,.2,24),dk);pad.position.set(-1.5,.1,-5);f.add(pad);
  }else if(type==='land'){
    c.fx.chute=new THREE.Mesh(new THREE.SphereGeometry(1.6,20,10,0,Math.PI*2,0,Math.PI/2),glow(G.world==='mars'?0xf2f2ee:0xffffff,.0));f.add(c.fx.chute);
    c.fx.dust=new THREE.Mesh(new THREE.TorusGeometry(1.5,.35,8,40),glow(G.world==='mars'?0xc9a27a:0xb8b6b0,0));c.fx.dust.rotation.x=Math.PI/2;c.fx.dust.position.y=.2;f.add(c.fx.dust);
  }else if(type==='discover'){
    const cone=new THREE.Mesh(new THREE.ConeGeometry(1.4,3.2,32,1,true),glow(0x62d9a5,.18));cone.rotation.z=Math.PI/2+.5;cone.position.set(2.4,1.4,0);f.add(cone);c.fx.cone=cone;
    const spot=new THREE.Mesh(new THREE.RingGeometry(.5,1.2,40),glow(0x62d9a5,.6));spot.rotation.x=-Math.PI/2;spot.position.set(3.6,.06,0);f.add(spot);c.fx.spot=spot;
    c.fx.bits=[];for(let k=0;k<26;k++){const b=new THREE.Mesh(new THREE.OctahedronGeometry(.06),glow(k%3?0x62d9a5:0xf7c548,.9));f.add(b);c.fx.bits.push(b)}
  }else if(type==='end'){c.fx.sun0=G.sun?G.sun.intensity:1;const w=new THREE.Mesh(new THREE.SphereGeometry(.14,12,8),glow(0xff3a2a,1));w.position.y=G.D.size+.4;f.add(w);c.fx.warn=w}
  funCine(type,f,c);
  if(s.ppl&&s.ppl.some(x=>x[2])){c.fx.astro=s.ppl.filter(x=>x[2]).slice(0,2).map((x,k)=>{const a=astronaut();a.position.set(k?-1.4:.9,0,k?2.6:2.1);a.rotation.y=k?-2.1:-2.5;f.add(a);return a})}
}
function tickCine(dt){
  const c=G.cine;if(!c)return;c.t+=dt;const t=c.t,fx=c.fx,inner=G.D.inner;
  if(G.cfx){G.cfx.position.copy(G.D.holder.position);G.cfx.quaternion.copy(G.D.holder.quaternion)}
  if(fx.arms)fx.arms.forEach((a,k)=>{a.rotation.y=Math.sin(t*.8+k)*.5;a.userData.fore.rotation.x=Math.sin(t*1.3+k)*.3;if(Math.random()<dt*4)puff('spark')});
  if(fx.rocket){const r=fx.rocket,u=Math.max(0,t-1.4);r.position.y=u*u*1.4;r.userData.fl.scale.set(1,.8+Math.random()*.5+Math.min(1.5,u*.4),1);if(Math.random()<dt*14&&u<4){const p=new THREE.Mesh(new THREE.SphereGeometry(.6,8,6),new THREE.MeshBasicMaterial({color:0xd8d4cc,transparent:true,opacity:.6,depthWrite:false}));p.position.copy(r.getWorldPosition(gv()));p.userData={t:2.4,v:gv((Math.random()-.5)*3,.5,(Math.random()-.5)*3),k:'smoke'};G.fx.add(p)}if(t>.2&&t<.3)SFX.boost()}
  if(c.type==='land'){const h=Math.max(0,7-t*1.9);inner.position.y=h;fx.chute.position.y=h+G.D.size+1.6;fx.chute.material.opacity=h>1.5?.7:Math.max(0,fx.chute.material.opacity-dt);
    G.flame.visible=h>0&&h<3;G.flame.position.set(0,h-.3,0);G.flame.rotation.set(Math.PI,0,0);G.flame.scale.set(1,.8+Math.random()*.6,1);
    if(h===0&&!c.landed){c.landed=1;SFX.land()}fx.dust.material.opacity=c.landed?Math.max(0,.6-(t-3.7)*.25):0;fx.dust.scale.setScalar(1+(c.landed?(t-3.7)*.8:0))}
  if(fx.cone){fx.cone.material.opacity=.12+.1*Math.sin(t*5);fx.spot.scale.setScalar(1+.15*Math.sin(t*4));fx.bits.forEach((b,k)=>{const q=(t*.35+k/fx.bits.length)%1;b.position.set(3.6+Math.cos(k*2.4)*.8*(1-q),q*3.4,Math.sin(k*2.4)*.8*(1-q));b.rotation.y+=dt*3;b.material.opacity=1-q})}
  if(fx.warn){fx.warn.visible=Math.sin(t*7)>0;if(G.sun)G.sun.intensity=Math.max(.15,fx.sun0*(1-t*.08))}
  if(fx.astro)fx.astro.forEach((a,k)=>{a.userData.arm.rotation.x=Math.PI*.85+Math.sin(t*5+k)*.35});
  funCineTick(c,dt)
}
function clearCineFx(){if(G.cfx){G.sc.remove(G.cfx);dispose3(G.cfx);G.cfx=null}if(G.D)G.D.inner.position.y=0;if(G.cine&&G.cine.fx&&G.cine.fx.sun0!=null&&G.sun)G.sun.intensity=G.cine.fx.sun0;if(G.flame)G.flame.visible=false}
/* storyline panel on the right */
function renderStory(){if(G.MI&&G.MI.M&&G.MI.M.t){miPanel();return}
  const L=gq('#gmLog'),J=G.J;
  const pic=devicePic(G.id);
  L.innerHTML=`<figure class="gl-img">${pic.src?`<img src="${pic.src}" alt="${byId[G.id].name}">`:''}<figcaption>${pic.cap}</figcaption></figure><div class="gl-h"><p class="gm-tag">Storyline</p><b>${byId[G.id].name}</b><span>Built by ${J.by}</span><span>${J.world==='galaxy'?'Deep space':J.world==='moon'?'The Moon':'Mars'} · ${J.stops.length} stops</span></div>
   <ol class="gl">${G.stops.map((s,i)=>{const st=s.done?'done':(i===G.next&&!G.hold)?'cur':'lock';
     return `<li class="${st}"><button type="button" data-k="${i}" ${s.done?'':'disabled'}><span class="gl-d">${s.d}</span><span class="gl-t">${s.done?s.t:(i===G.next&&!G.hold)?'Next: follow the pointer':'Locked'}</span>${s.done?`<span class="gl-x">${s.x}</span>`:''}</button></li>`}).join('')}</ol>
   <p class="gl-f">Select a stop you have reached to read it again.</p>`;
  const cur=L.querySelector('li.cur');if(cur)cur.scrollIntoView({block:'nearest'});
}
/* Rivet, the robot guide */
const BOT_TIPS=[()=>MECH[G.mech].keys,()=>G.hold?'Finish this stop first, then I will show you the next one.':G.next<G.stops.length?`The next stop is ${G.stops[G.next].d}, about ${Math.round(G.dist||0)} away. Follow my yellow arrows!`:'We made it to the end.',()=>`Condition: ${condOf(G.age)}. ${G.age>=.6?'I can hear creaking… careful!':'Still in good shape!'}`,()=>'Press M to read the full story of the current stop, and N to open the map.'];
function botSay(t,ms=5600){const b=gq('#gmBub');if(!b||!t)return;if(matchMedia('(pointer:coarse)').matches)t=t.replace(/Press W to (drive|fly forward)/g,'Push the joystick to $1').replace(/A and D/g,'the joystick').replace(/Space/g,'the yellow button');b.textContent=t;b.hidden=false;gq('#gmBot').classList.add('talk');SFX.bot();clearTimeout(G.botT);G.botT=setTimeout(botHide,ms);G.botLast=G.t}
function botHide(){const b=gq('#gmBub');if(b)b.hidden=true;gq('#gmBot')&&gq('#gmBot').classList.remove('talk')}
function botReact(key,lines,cool=6){if(G.cardOpen||G.dead)return;G.botCd=G.botCd||{};if(G.t-(G.botCd[key]??-99)<cool)return;G.botCd[key]=G.t;botSay(lines[Math.random()*lines.length|0],3800)}

/* ---------- the end: malfunction ---------- */
function breakdown(why){
  const al=why==='aliens';G.endWhy=why||'';G.dead=.001;G.lock=false;gq('#gm').classList.add('gm-dead');VO.stop();setTimeout(()=>VO.line(al?'Unexpected end. Oops, looks like the aliens are not friendly.':'Signal lost. '+(byId[G.id].status==='active'?'This is where its story is today.':'The journey of '+byId[G.id].name+' is over.')),900);SFX.engine.stop();SFX.glitch();setTimeout(()=>SFX.powerdown(),700);
  botSay('Error… error… my circuits are… fzzzt…',3000);gq('#gmBot').classList.add('broken');
  const s=al?G.stops[Math.max(0,G.next-1)]:G.stops[G.stops.length-1],m=byId[G.id];
  setTimeout(()=>{if(!G.on||G.dead===0)return;botHide();gq('#gmEnd').hidden=false;
    gq('#gmEnd').innerHTML=`<div>${al?`<p class="gm-glitch" data-t="UNEXPECTED END" style="font-size:clamp(30px,5.4vw,64px)">UNEXPECTED END</p><p class="gm-tag">${m.name} · ${s.d} · Just for fun</p><p class="gm-endx gm-oops">Oops… looks like the aliens are not friendly. 👽✋<br><small>Five slaps was too many. The real ${m.name} never met any aliens, as far as we know!</small></p>`:`<p class="gm-glitch" data-t="SIGNAL LOST">SIGNAL LOST</p><p class="gm-tag">${m.name} · ${s.d}</p><p class="gm-endx">${m.status==='active'?'This is where its story is today. Like every machine, one day it will stop for good.':m.status==='passive'?'No power, no moving parts. Just dust, slowly dimming the glass.':'Its journey is over. The hardware is still out there, exactly where it stopped.'}</p>`}<p class="gm-tag" id="gmCount">Returning to the homepage in 6</p><div class="gm-endb"><button class="btn" id="gmHome">Back to homepage</button><button class="btn ghost" id="gmAgain">Choose another machine</button></div></div>`;
    gq('#gmHome').addEventListener('click',closeGame);gq('#gmAgain').addEventListener('click',()=>{clearInterval(G.cdT);G.dead=0;gq('#gmBot').classList.remove('broken');showPick()});
    let k=6;G.cdT=setInterval(()=>{k--;SFX.tick();const c=gq('#gmCount');if(c)c.textContent=`Returning to the homepage in ${k}`;if(k<=0){clearInterval(G.cdT);if(G.dead)closeGame()}},1000);
  },3200);
}
function saveRun(){if(!G.id||!G.stops||G.state!=='play')return;const done=G.stops.filter(s=>s.done);saveRunData({id:G.id,done:done.length,total:G.stops.length,ended:!!G.dead||done.length===G.stops.length,why:G.endWhy||'',at:Date.now(),stops:done.map(s=>({d:s.d,t:s.t,x:s.x,g:s.gain?s.gain[1]:''}))})}
function closeGame(){if(/^#play/.test(location.hash))history.replaceState(null,'',location.pathname+location.search);saveRun();G.state='pick';clearInterval(G.cdT);SFX.engine.stop();botHide();G.on=false;G.dead=0;gq('#gmBot').classList.remove('broken');gq('#gm').hidden=true;gTeardown();document.body.style.overflow='';scrollTo({top:0,behavior:'smooth'});renderLastRun();const lr=gq('#lastRun');if(lr&&!lr.hidden){lr.classList.remove('pop');void lr.offsetWidth;lr.classList.add('pop')}const e=gq('#exploreBtn');e&&e.focus({preventScroll:true})}

/* ---------- placement & camera ---------- */
function upAt(){return G.world==='galaxy'?gv(0,1,0):G.n}
function devicePos(){const L=(G.lift||0)+(G.kh||0);if(G.world==='galaxy')return G.pos.clone().setY(G.alt+L);return G.n.clone().multiplyScalar(gRad(G.n)+G.alt+L)}
function headingVec(){return G.world==='galaxy'?gv(Math.cos(G.ang),0,Math.sin(G.ang)):G.hd}
function placeDevice(dt){
  const P=devicePos(),up=upAt(),hd=headingVec(),h=G.D.holder;
  h.position.copy(P);const m4=new THREE.Matrix4().makeBasis(hd,up,gv().crossVectors(hd,up));h.quaternion.setFromRotationMatrix(m4);
}
function snapCam(){G.camP=null}
function updateCam(dt){
  const P=devicePos(),up=upAt(),hd=headingVec(),gal=G.world==='galaxy';
  const far=G.cam.aspect<1?1.45:1;let want=P.clone().addScaledVector(up,(gal?13:5)*far).addScaledVector(hd,(gal?-13:-9)*far),look=null;
  if(G.cine){const c=G.cine,side=gv().crossVectors(hd,up),a=c.a0+c.t*.16,dist=((gal?13:8.5)-Math.min(1,c.t/8)*(gal?4:2.4))*far;
    want=P.clone().addScaledVector(up,gal?5:2.4).addScaledVector(hd,Math.cos(a)*dist).addScaledVector(side,Math.sin(a)*dist);
    look=P.clone().addScaledVector(up,1.1);if(c.fx&&c.fx.rocket){const r=c.fx.rocket.getWorldPosition(gv()).addScaledVector(up,3);look.lerp(r,Math.min(.85,c.t*.25))}
    if(c.type==='land')look.addScaledVector(up,Math.max(0,7-c.t*1.9)*.6)}
  if(!G.camP)G.camP=want.clone();else G.camP.lerp(want,1-Math.exp(-dt*(G.cine?1.6:5)));
  G.cam.position.copy(G.camP);if(G.dead){G.cam.position.x+=(Math.random()-.5)*.4*Math.min(1,G.dead);G.cam.position.y+=(Math.random()-.5)*.4*Math.min(1,G.dead)}
  G.cam.up.copy(up);G.cam.lookAt(look||P.clone().addScaledVector(hd,3).addScaledVector(up,1.2));
  if(G.sun&&!gal)G.sun.position.copy(G.n).multiplyScalar(GR_R+80).addScaledVector(gv().crossVectors(hd,G.n),40).addScaledVector(hd,-20);
}

/* ---------- input ---------- */
const KMAP={arrowup:'u',w:'u',arrowdown:'d',s:'d',arrowleft:'l',a:'l',arrowright:'r',d:'r',' ':'act'};
function inp(){const k=G.keys,t=G.touch;let ix=(k.has('r')?1:0)-(k.has('l')?1:0),iz=(k.has('u')?1:0)-(k.has('d')?1:0);
  if(Math.abs(t.x)>.25)ix=Math.sign(t.x)*Math.min(1,Math.abs(t.x)*1.3);if(Math.abs(t.y)>.25)iz=-Math.sign(t.y)*Math.min(1,Math.abs(t.y)*1.3);
  return {ix,iz,act:k.has('act')||t.act||!!G.tap}}

/* ---------- movement on a sphere ---------- */
function stepSphere(dist){
  if(!dist)return;const a=dist/gRad(G.n),n=G.n,h=G.hd;
  const nn=n.clone().multiplyScalar(Math.cos(a)).addScaledVector(h,Math.sin(a)).normalize();
  const nh=h.clone().multiplyScalar(Math.cos(a)).addScaledVector(n,-Math.sin(a));
  if(G.vel.lengthSq()){const q=new THREE.Quaternion().setFromUnitVectors(n,nn);G.vel.applyQuaternion(q)}
  G.n.copy(nn);G.hd.copy(tanOf(nh,nn).normalize());
}
function setN(nn){const q=new THREE.Quaternion().setFromUnitVectors(G.n,nn);G.hd.applyQuaternion(q);G.vel.applyQuaternion(q);G.n.copy(nn);tanOf(G.hd,G.n).normalize();tanOf(G.vel,G.n)}
function moveAlong(dir,dist){/* move along a tangent direction without changing heading */
  const a=dist/gRad(G.n),d=dir.clone().normalize();setN(G.n.clone().multiplyScalar(Math.cos(a)).addScaledVector(d,Math.sin(a)).normalize())}
function collide(hitR){
  let hit=false;if(G.world==='galaxy'){
    const solid=(c,mn,bounce)=>{const d=G.pos.clone().sub(c);d.y=0;const l=d.length();if(l>=mn)return;const nrm=l>1e-4?d.multiplyScalar(1/l):gv(1,0,0);
      G.pos.copy(c).setY(0).addScaledVector(nrm,mn);const vn=G.vel.dot(nrm);if(vn<0){G.vel.addScaledVector(nrm,-vn*(1+bounce));if(vn<-5)hit=true}G.touch2=.25};
    G.rocks.forEach(k=>solid(k.p,k.r+1.2,0));G.bodies.forEach(b=>solid(b.p,b.r+1.6,0));
  }else{
    if(G.air&&G.alt>1.2)return false;
    G.rocks.forEach(k=>{if(G.mech==='heavy'&&k.r<1.15)return;const c=G.n.dot(k.n),th=Math.acos(Math.min(1,c)),mn=(k.r*.9+hitR)/GR_R;if(th>=mn)return;
      const away=G.n.clone().addScaledVector(k.n,-c);if(away.lengthSq()<1e-9)away.set(1,0,0);away.normalize();
      setN(k.n.clone().multiplyScalar(Math.cos(mn)).addScaledVector(away,Math.sin(mn)).normalize());
      G.spd=Math.min(G.spd,0)*0;G.vel.set(0,0,0);G.dash=0;hit=true});
  }
  if(hit&&G.flash<=0){G.flash=.35;SFX.thud()}return hit;
}

/* ---------- per-frame ---------- */
function gTick(dt){
  G.t+=dt;G.flash-=dt;const J=G.J,D=G.D,last=G.stops.length-1;
  const prog=(G.next-1)/last;if(!G.MI)G.age+=(prog-G.age)*Math.min(1,dt*1.5);
  if(Math.abs(G.age-G.lastAge)>.01){ageDevice(D,G.age,G.world);G.lastAge=G.age}
  const weak=G.age<.6?1:1-(G.age-.6)/.4*.55,power=G.age<.6?1-G.age*.25:Math.max(.05,.85-(G.age-.6)/.4*.8);
  let {ix,iz,act}=G.cardOpen||G.dead||G.lock?{ix:0,iz:0,act:false}:inp();tutTick(dt,ix,iz,act);
  /* weaker machine: stalls and twitchy steering */
  if(G.age>=.6&&!G.dead){G.stall-=dt;if(G.stall<-2.2-Math.random()*3){G.stall=.35+Math.random()*.45*(G.age-.5)*2;SFX.stall();botReact('stall',['Power glitch! Hang on…','My motors are stalling!','Brrr… sputter… OK, go!'],7)}if(G.stall>0){ix=0;iz=0;act=false}ix+=Math.sin(G.t*3.1)*(G.age-.6)*.9}
  const sp=(J.speed||8)*weak,turn=(J.turn||1.8);
  if(G.dead){G.dead+=dt}
  else if(G.world==='galaxy'){
    /* W / up flies forward, A D rotate, S brakes, Space = thruster burst */
    G.ang+=ix*turn*dt;const hd=headingVec();G.bcd-=dt;G.boost-=dt;
    if(act&&!G.actPrev&&G.bcd<=0){G.boost=1.3;G.bcd=4;SFX.boost();botReact('burst',['Full thrust!','Wheee!'],8)}
    const mx=sp*1.5*(G.boost>0?2:1);
    if(iz>0||G.boost>0)G.vel.lerp(hd.clone().multiplyScalar(mx),Math.min(1,dt*(G.boost>0?3.5:2.6)));
    else if(iz<0)G.vel.multiplyScalar(Math.max(0,1-dt*3));else G.vel.multiplyScalar(1-dt*.3);
    G.touch2=(G.touch2||0)-dt;G.bodies.forEach(b=>{const d=b.p.clone().sub(G.pos);d.y=0;const l=d.length();if(l<b.r*5&&l>b.r+2.2&&G.touch2<=0){G.vel.addScaledVector(d.normalize(),b.mass/(l*l)*dt*2.5);if(l<b.r*3)botReact('grav',['Its gravity is pulling us in!','Slingshot time!'],12)}});
    G.pos.addScaledVector(G.vel,dt);G.pos.y=0;if(collide())botReact('hit',['Bonk! Space rocks are hard.','Asteroid! Steer around.'],5);
    const th=iz>0||G.boost>0;G.flame.visible=th;G.flame.scale.set(1,(G.boost>0?1.8:.8)+Math.random()*.6,1);G.flame.position.set(-G.D.size*.9,G.D.size*.35,0);G.flame.rotation.set(0,0,Math.PI/2);
    if(G.dust){const a=G.dust.geometry.attributes.position;for(let k=0;k<a.count;k++){let x=a.getX(k),z=a.getZ(k);const dx=x-G.pos.x,dz=z-G.pos.z;if(dx>40)x-=80;if(dx<-40)x+=80;if(dz>40)z-=80;if(dz<-40)z+=80;a.setXYZ(k,x,a.getY(k),z)}a.needsUpdate=true}
    SFX.engine.set(th?1:.25,Math.min(1.5,G.vel.length()/(sp*1.5)));
  }else{
    const mech=G.mech;G.flame.visible=false;G.jcd-=dt;
    if(mech==='hop'){
      G.hd.applyAxisAngle(G.n,-ix*turn*dt);
      if(!G.air){if(act){G.charge=Math.min(1,G.charge+dt*1.1)}else if(G.charge>0||iz>0){const c=G.charge||.25;G.air=true;G.vy=7+c*5;G.spd=(5+c*13)*weak;G.charge=0;G.bounces=2;SFX.hop()}}
      if(G.air){G.vy-=9*dt;G.alt=Math.max(0,G.alt+G.vy*dt);stepSphere(G.spd*dt);if(G.alt<=0&&G.vy<0){if(G.bounces>0){G.bounces--;G.vy=-G.vy*.42;G.spd*=.55;G.flash=.15;SFX.land()}else{G.air=false;G.alt=0;G.spd=0;SFX.land()}}}
      G.flame.visible=G.air&&G.vy>0||G.charge>0;G.flame.position.set(0,-.2,0);G.flame.rotation.set(Math.PI,0,0);G.flame.scale.set(1,.6+G.charge+Math.random()*.4,1);
      SFX.engine.set(G.flame.visible?.8:0,G.charge);
    }else if(mech==='dash'){
      G.hd.applyAxisAngle(G.n,-ix*turn*1.3*dt);G.dcd-=dt;
      if((iz>0||act)&&G.dcd<=0&&G.dash<=0){G.dash=.42;G.dcd=.75;SFX.zap()}
      if(G.dash>0){G.dash-=dt;stepSphere(34*weak*dt)}
      else if(iz<0)stepSphere(-3*dt);
      SFX.engine.set(G.dash>0?.5:0,1.2);
    }else if(mech==='buggy'){
      G.hd.applyAxisAngle(G.n,-ix*turn*dt*Math.min(1,G.vel.length()/4+.25));
      if(act&&!G.actPrev&&!G.air&&G.jcd<=0){G.air=true;G.vy=5;G.vel.addScaledVector(G.hd,6);G.jcd=1.6;SFX.jump();botReact('jump',['Big air!','Low gravity jump!'],8)}
      G.vel.addScaledVector(G.hd,iz*(iz>0?9:14)*weak*dt);
      const fwd=G.hd.clone().multiplyScalar(G.vel.dot(G.hd)),side=G.vel.clone().sub(fwd);G.vel.copy(fwd).addScaledVector(side,Math.max(0,1-dt*1.6)).multiplyScalar(1-dt*.35);
      const vl=G.vel.length(),mx=(G.air?16:13)*weak;if(vl>mx)G.vel.multiplyScalar(mx/vl);
      if(vl>.01)moveAlong(G.vel,vl*dt);
      if(!G.air&&vl>7&&Math.random()<dt*1.2){G.air=true;G.vy=2+Math.random()*2.5}
      if(G.air){G.vy-=4.5*dt;G.alt+=G.vy*dt;if(G.alt<=0){G.alt=0;G.air=false;SFX.land()}}
      SFX.engine.set(Math.min(1,.15+vl/13),vl/13);
    }else if(mech==='fly'){
      if(act&&!G.actPrev){G.flying=!G.flying;SFX.whoosh();if(G.flying)G.lowWarn=false}
      if(G.battery<=0&&G.flying){G.flying=false;botSay('Battery empty! Landing now. Stay on the ground to recharge.',4000)}
      const tgt=G.flying?4.5:0;G.alt+=(tgt-G.alt)*Math.min(1,dt*2);const wasAir=G.air;G.air=G.alt>.3;if(wasAir&&!G.air)SFX.land();
      if(G.flying){G.battery=Math.max(0,G.battery-dt/13);G.hd.applyAxisAngle(G.n,-ix*turn*dt);G.spd+=(iz*sp-G.spd)*Math.min(1,dt*3);if(G.battery<.22&&!G.lowWarn){G.lowWarn=true;botSay('Battery low! Press Space to land and recharge.',4000);SFX.warn()}}
      else{G.spd*=1-dt*4;if(G.alt<.2)G.battery=Math.min(1,G.battery+dt/3.5);if(!G.air&&(iz||ix)&&G.battery>.3)botReact('fly',['I can\'t drive! Press Space to take off.'],7)}
      if(G.alt>1)stepSphere(G.spd*dt);
      if(D.def.rotors){const s=G.alt>.05||G.flying?40:0;D.def.rotors[0].rotation.y+=dt*s;D.def.rotors[1].rotation.y-=dt*s}
      SFX.engine.set(G.flying||G.alt>.05?.9:0,.6+Math.abs(G.spd)/sp*.6);
    }else if(mech==='ping'){
      G.hd.applyAxisAngle(G.n,-ix*turn*dt);G.spd+=(iz*sp-G.spd)*Math.min(1,dt*3);stepSphere(G.spd*dt);
      G.pcd-=dt;G.ping-=dt;if(act&&G.pcd<=0){G.ping=5;G.pcd=1.5;G.lastPing=G.t;SFX.ping()}
      if(G.t-G.lastPing>14&&G.ping<=0)botReact('ping',['Lost? Press Space to send a quake ping.'],14);
      SFX.engine.set(Math.min(.6,Math.abs(G.spd)/sp*.6),Math.abs(G.spd)/sp*.4);
    }else{
      /* rovers: Space = boost jump (push forward and hop over rocks) */
      G.hd.applyAxisAngle(G.n,-ix*turn*dt);
      if(act&&!G.actPrev&&G.jcd<=0&&!G.air){const big=mech==='boost';G.air=true;G.vy=mech==='tiny'?3.6:6.2;G.push=big?1.8:.9;G.jcd=big?3.5:2.2;SFX.boost();SFX.jump();botReact('jump',['Boost jump!','Hop over that rock!','Wheee!'],7)}
      let mx=sp;if(G.push>0){G.push-=dt;mx*=mech==='boost'?2.1:1.7;iz=Math.max(iz,1);G.flame.visible=true;G.flame.position.set(-G.D.size*.75,G.D.size*.4,0);G.flame.rotation.set(0,0,Math.PI/2);G.flame.scale.set(.7,.8+Math.random()*.6,.7)}
      if(mech==='sand'&&!G.air&&G.sand.some(s=>G.n.angleTo(s.n)*GR_R<s.r)){mx*=.3;botReact('sand',['Soft sand! Jump out with Space.','We\'re sinking! Purgatory Dune all over again.'],9)}
      G.spd+=(iz*mx-G.spd)*Math.min(1,dt*(J.accel||4));stepSphere(G.spd*dt);
      if(G.air){G.vy-=11*dt;G.alt+=G.vy*dt;if(G.alt<=0){G.alt=0;G.air=false;G.vy=0;SFX.land()}}
      SFX.engine.set(Math.min(1,.12+Math.abs(G.spd)/sp*.8),Math.abs(G.spd)/sp);
    }
    if(collide(J.hit||1.05))botReact('hit',['Ouch! Watch the rocks.','Bonk! Try going around.','That rock didn\'t move. We did.'],5);
    if(D.def.wheels){const ds=(G.mech==='buggy'?G.vel.dot(G.hd):G.spd)*dt;D.def.wheels.forEach(w=>w.rotation.z-=ds*1.8)}
  }
  G.actPrev=act;G.tap=false;
  /* reached the next stop? */
  if(!G.cardOpen&&!G.dead&&G.next<=last){
    const s=G.stops[G.next],d=G.world==='galaxy'?G.pos.distanceTo(s.p):G.n.angleTo(s.n)*GR_R;G.dist=d;
    if(!G.hold&&d<3.2&&(G.alt<2.5||G.MI)&&!(G.MI&&G.MI.work)){s.done=true;G.next++;G.hold=true;G.spd=0;G.vel.set(0,0,0);G.push=0;if(G.MI)miArrive(G.next-1);else playCine(G.next-1)}
    else if(!G.hold&&d<12)botReact('near'+G.next,['Almost there!','I can see the beacon!'],999);
  }
  /* beacons */
  G.stops.forEach((s,i)=>{const cur=i===G.next&&!G.hold;s.g.visible=s.done||cur;s.beam.visible=cur;s.ring.material.opacity=cur?.55+.35*Math.sin(G.t*4):.25;s.ring.scale.setScalar(cur?1+.08*Math.sin(G.t*4):.7);s.g.children[2].visible=(cur&&(G.dist||99)>9)})
  /* device pose, aging wobble, effects */
  placeDevice(dt);funTick(dt);chaosTick(dt);tickCine(dt);miTick(dt);
  const inner=D.inner;inner.position.y=0;
  if(G.mech==='fly'||G.mech==='buggy'||G.mech==='hop'){}
  const wob=G.age>.35&&!G.dead?(G.age-.35)*.12:0;inner.rotation.z=Math.sin(G.t*9)*wob*(G.stall>0?3:1)+(G.flash>0?Math.sin(G.t*60)*.08:0);
  if(G.dead){const k=Math.min(1,G.dead/2.6);inner.rotation.z=k*1.15+Math.sin(G.t*40)*.05*(1-k);inner.rotation.x=k*.25;inner.position.y=-k*.2;D.parts.forEach(p=>{if(p.material.emissive){p.material.emissive.setHex(0xff3a1a);p.material.emissiveIntensity=Math.random()<.08?.6:0}})}
  G.pingRing.visible=G.mech==='ping';if(G.mech==='ping'){const f=G.ping>0?((5-G.ping)%1.25)/1.25:1;G.pingRing.scale.setScalar(1+f*16);G.pingRing.material.opacity=G.ping>0?(1-f)*.8:0}
  /* smoke and sparks */
  if((G.age>.6||G.dead)&&Math.random()<dt*(G.dead?30:6+G.age*8)){const k=G.dead||Math.random()<.25?'spark':'smoke';puff(k);if(k==='spark'&&Math.random()<.3)SFX.spark()}
  G.fx.children.slice().forEach(p=>{p.userData.t-=dt;if(p.userData.t<=0){G.fx.remove(p);p.geometry.dispose();p.material.dispose();return}p.position.addScaledVector(p.userData.v,dt);p.material.opacity=Math.min(.7,p.userData.t)*(p.userData.k==='spark'?1.4:.6);p.scale.multiplyScalar(p.userData.k==='spark'?1:1+dt*.8)});
  /* pointer */
  const nxt=G.stops[Math.min(G.next,last)],hid=G.mech==='ping'&&G.ping<=0;
  const P=devicePos(),up=upAt(),hd=headingVec();
  let to=G.world==='galaxy'?nxt.p.clone().sub(P).setY(0):tanOf(nxt.n.clone(),G.n);if(to.lengthSq()<1e-6)to=hd.clone();to.normalize();
  G.arrow.visible=!hid&&!G.hold&&!G.dead&&!G.lock&&G.next<=last&&!G.cardOpen&&!G.cine;G.arrow.position.copy(P).addScaledVector(up,.35);
  G.chev.forEach((c,i)=>{const f=((G.t*1.2+i/3)%1);c.position.z=2.6+f*2.6;c.material.opacity=Math.sin(f*Math.PI)*.95});
  G.arrow.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(gv().crossVectors(up,to),up,to));
  const side=gv().crossVectors(hd,up),a=Math.atan2(to.dot(side),to.dot(hd));
  gq('#gmCompass').style.setProperty('--a',a+'rad');gq('#gmCompass').classList.toggle('off',hid||G.hold||G.next>last||!!G.dead);
  gq('#gmDist').textContent=hid?'Press Space to ping':(G.hold||G.next>last)?'':`${Math.max(0,Math.round(G.dist||0))}${G.world==='galaxy'?'':' m'} to ${nxt.d}`;
  renderHud(power);
  updateCam(dt);
  if(!gq('#gmMap').hidden)gMap();
  G.r.render(G.sc,G.cam);
}
function puff(kind){
  const P=devicePos().addScaledVector(upAt(),G.D.size*(.6+Math.random()*.6)),m=new THREE.Mesh(new THREE.SphereGeometry(kind==='spark'?.09:.35,6,5),new THREE.MeshBasicMaterial({color:kind==='spark'?(Math.random()<.5?0xffd25a:0xff7a2a):0x55504a,transparent:true,depthWrite:false}));
  m.position.copy(P);const v=upAt().clone().multiplyScalar(kind==='spark'?3+Math.random()*3:1.2).add(gv((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3));m.userData={t:kind==='spark'?.5:1.6,v,k:kind};G.fx.add(m)}
function renderHud(power){
  if(power==null)power=1;const last=G.stops.length-1,prog=Math.min(1,(G.next-1)/last);
  gq('#gmProg').style.width=(prog*100)+'%';gq('#gmProgT').textContent=G.MI?`Samples ${G.MI.bag?G.MI.bag.length:0} of ${G.stops.length-1}`:`Journey ${Math.round(prog*100)}%`;
  gq('#gmPow').style.width=(power*100)+'%';gq('#gmPow').style.background=power>.6?'var(--st-active)':power>.3?'var(--accent)':'var(--st-silent)';
  const extra=G.mech==='fly'?` · Battery ${Math.round(G.battery*100)}%${G.flying?' · flying':' · landed'}`:G.mech==='hop'?(G.charge>0?` · Charge ${Math.round(G.charge*100)}%`:''):G.mech==='space'?(G.bcd>0?` · Burst in ${Math.ceil(G.bcd)}s`:' · Burst ready'):['heavy','boost','drag','sand','tiny','buggy'].includes(G.mech)?(G.jcd>0?` · Jump in ${Math.ceil(G.jcd)}s`:' · Jump ready'):'';
  gq('#gmPowT').textContent=`Power ${Math.round(power*100)}%${G.stall>0?' · STALLED':''}${extra}`;
}
function gMap(){
  const c=gq('#gmMapCv'),x=c.getContext('2d'),W=c.width,H=c.height;x.fillStyle='#0b1019';x.fillRect(0,0,W,H);
  x.font='500 13px "IBM Plex Mono",monospace';
  if(G.world==='galaxy'){const s=H/600,cx=W/2,cy=H/2,pt=p=>[cx+p.x*s,cy+p.z*s];
    x.strokeStyle='rgba(124,196,255,.4)';x.beginPath();x.arc(cx,cy,214*s,0,7);x.stroke();x.fillStyle='#ffd27a';x.beginPath();x.arc(cx,cy,5,0,7);x.fill();
    G.bodies.forEach(b=>{const [a,c2]=pt(b.p);x.fillStyle='#8a92a8';x.beginPath();x.arc(a,c2,3,0,7);x.fill()});
    G.stops.forEach((st,i)=>{const [a,b]=pt(st.p);x.fillStyle=st.done?'#62d9a5':(i===G.next&&!G.hold)?'#f7c548':'#444b5a';x.fillRect(a-5,b-5,10,10);if(i===G.next&&!G.hold){x.fillStyle='#eef1f7';x.fillText(st.d,a+9,b+4)}});
    const [a,b]=pt(G.pos);x.fillStyle='#fff';x.beginPath();x.arc(a,b,5,0,7);x.fill();x.fillText('YOU',a+9,b-6);return}
  const pt=n=>[(Math.atan2(n.x,n.z)+Math.PI)/TAU*W,(Math.PI/2-Math.asin(n.y))/Math.PI*H];
  G.stops.forEach((st,i)=>{const [a,b]=pt(st.n);x.fillStyle=st.done?'#62d9a5':(i===G.next&&!G.hold)?'#f7c548':'#444b5a';x.fillRect(a-5,b-5,10,10);if(i===G.next&&!G.hold){x.fillStyle='#eef1f7';x.fillText(st.d,a+9,b+4)}});
  funMap(x,pt);
  const [a,b]=pt(G.n);x.fillStyle='#fff';x.beginPath();x.arc(a,b,5,0,7);x.fill();x.strokeStyle='#f7c548';x.lineWidth=2;x.beginPath();x.arc(a,b,10,0,7);x.stroke();x.fillStyle='#eef1f7';x.fillText('YOU',a+13,b+4);
}
function initGame(){
addEventListener('keydown',e=>{if(gq('#gm').hidden)return;const k=e.key.toLowerCase();
  if(k==='escape'){e.preventDefault();if(!gq('#gmMap').hidden)gq('#gmMap').hidden=true;else closeGame();return}
  if(G.state==='pick'||!gq('#gmPick').hidden)return;
  if(k==='m'&&!e.repeat){e.preventDefault();toggleStory();return}
  if(k==='n'&&!e.repeat){gq('#gmMap').hidden=!gq('#gmMap').hidden;return}
  if(G.cardOpen){if(k==='enter'||k===' '){e.preventDefault();if(!e.repeat&&performance.now()-G.cardT>350)advance()}return}
  if(KMAP[k]){e.preventDefault();G.keys.add(KMAP[k]);if(KMAP[k]==='act'&&!e.repeat)G.tap=true}});
addEventListener('keyup',e=>{const k=KMAP[e.key.toLowerCase()];if(k)G.keys.delete(k)});
addEventListener('blur',()=>G.keys.clear());
(function touch(){
  const pad=gq('#gmPad'),knob=pad.querySelector('i');let id=null,cx=0,cy=0;
  pad.addEventListener('pointerdown',e=>{id=e.pointerId;const b=pad.getBoundingClientRect();cx=b.left+b.width/2;cy=b.top+b.height/2;pad.setPointerCapture(id);mv(e)});
  const mv=e=>{if(e.pointerId!==id)return;let x=(e.clientX-cx)/50,y=(e.clientY-cy)/50;const l=Math.hypot(x,y);if(l>1){x/=l;y/=l}G.touch.x=x;G.touch.y=y;knob.style.transform=`translate(${x*36}px,${y*36}px)`};
  pad.addEventListener('pointermove',mv);const up=()=>{id=null;G.touch.x=G.touch.y=0;knob.style.transform=''};pad.addEventListener('pointerup',up);pad.addEventListener('pointercancel',up);
  const act=gq('#gmAct');act.addEventListener('pointerdown',e=>{e.preventDefault();G.touch.act=true;G.tap=true});['pointerup','pointercancel','pointerleave'].forEach(t=>act.addEventListener(t,()=>G.touch.act=false));
})();
gq('#gmPick').addEventListener('click',e=>{const b=e.target.closest('.gp-card');if(b)startJourney(b.dataset.id)});
gq('#gmClose').addEventListener('click',closeGame);
gq('#gmBack').addEventListener('click',()=>{saveRun();gTeardown();SFX.engine.stop();botHide();showPick()});
gq('#exploreBtn')&&gq('#exploreBtn').addEventListener('click',openGame);
gq('#gmLog').addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(b&&!G.dead)showCard(+b.dataset.k,true)});
gq('#gmStoryBtn').addEventListener('click',()=>gq('#gm').classList.toggle('gm-story'));
gq('#gmBotBtn').addEventListener('click',()=>{if(G.state!=='play'||G.dead)return;G.tip=((G.tip??-1)+1)%BOT_TIPS.length;botSay(BOT_TIPS[G.tip]())});
{const go=()=>{const h=location.hash.match(/^#play(?:-([a-z0-9]+))?$/);if(h)setTimeout(()=>{if(gq('#gm').hidden)openGame();if(h[1]&&GJ[h[1]])startJourney(h[1])},300)};go();addEventListener('hashchange',go)}
}

/* Apollo laser game: 3 levels. After each level a real photograph is revealed with ONE hotspot, then the next level starts. */
(function(){
const IMG='assets/img/';
const L=[
{n:'Aim the laser',lede:'Aim at the Moon reflector! Drag on the picture, or use the Up and Down buttons.',
 ph:{src:IMG+'retro-1-apollo11-reflector.jpg',w:951,h:960,t:'The first laser reflector on the Moon',m:'Apollo 11 · Tranquility Base · NASA photo AS11-40-5952',
  d:'The Apollo 11 laser reflector after the astronauts set it up. The Lunar Module is in the background.',credit:'NASA',
  links:[['NASA photo on DVIDS','https://dvidshub.net/image/845702/apollo-11-mission-image-laser-ranging-retroreflector-lrrr'],['NASA Apollo 11 Lunar Surface Journal','https://www.nasa.gov/history/alsj/a11/a11LM2LWC.html']],
  hot:{x:50,y:40,box:[37,29,26,22],h:'The Apollo lunar retroreflector',a:'A special device left on the Moon by Apollo astronauts.',b:'You just aimed a laser at a device like this. Scientists send laser pulses from Earth towards reflectors like this one.'}}},
{n:'Send the laser',lede:'The laser is aimed. Press FIRE LASER and watch the light travel to the Moon!',
 ph:{src:IMG+'retro-2-apache-point-laser.jpg',w:1299,h:765,t:'A real laser beam aimed at the Moon',m:'Apache Point Observatory, New Mexico · 2014 lunar eclipse',
  d:'A green laser beam fired from Apache Point Observatory. Its target is the reflector left on the Moon by Apollo 15.',credit:'Dan Long, Apache Point Observatory',
  links:[['NIST: To the Moon and Back in 2.5 Seconds','https://www.nist.gov/node/1265386']],
  hot:{x:60,y:63,box:[28,33,72,58],h:'The laser beam',a:'A laser beam sent from Earth to the Moon by a real telescope.',b:'This is how scientists send laser pulses, just like you did. A round trip takes about 2.5 seconds.'}}},
{n:'Catch the photon',lede:'The reflector sends light back. Only a tiny amount reaches Earth. Tap each glowing photon to catch it!',
 ph:{src:IMG+'retro-3-apollo15-corner-cubes.jpg',w:904,h:909,t:'Corner cubes up close',m:'Apollo 15 · Hadley–Apennine · NASA photo AS15-85-11468',
  d:'Part of the Apollo 15 reflector. It holds 300 glass corner cubes, the largest of the Apollo arrays.',credit:'NASA · photographed by Apollo 15 astronaut David Scott',
  links:[['NASA Photojournal PIA13037','https://photojournal.jpl.nasa.gov/catalog/PIA13037']],
  hot:{x:66,y:62,box:[30,27,70,62],h:'Corner cube reflectors',a:'Each round hole holds a glass corner cube. It sends light straight back the way it came.',b:'Only a tiny amount of each laser pulse returns to Earth, so telescopes count the light one photon at a time.'}}}
];
const E={x:130,y:340},MO={x:690,y:120},RX=MO.x-27,RY=MO.y+13,BASE=Math.atan2(RY-E.y,RX-E.x);
let el,lv=0,ang=0,raf=0,tm=0,prevFocus;
const $=s=>el.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const snd=n=>{try{typeof SFX!=='undefined'&&SFX[n]&&SFX[n]()}catch(e){}};
function stop(){cancelAnimationFrame(raf);clearTimeout(tm)}
function open(){prevFocus=document.activeElement;if(!el){el=document.createElement('div');el.className='lr';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label','Apollo laser reflector game');document.body.appendChild(el);
 el.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
 el.hidden=false;document.body.style.overflow='hidden';level(0)}
function close(all){stop();el.hidden=true;document.body.style.overflow='';if(all&&typeof closeGame==='function')closeGame();else prevFocus&&prevFocus.focus&&prevFocus.focus()}
function shell(inner){stop();el.innerHTML=`<div class="lr-in"><div class="lr-top"><button class="d-close" data-b>← Machines</button><button class="d-close" data-x>Exit ✕</button></div>${inner}</div>`;$('[data-b]').onclick=()=>close();$('[data-x]').onclick=()=>close(1);el.scrollTop=0}
const head=(i,ex)=>`<p class="eyebrow">Level ${i+1} of 3</p><h2>${L[i].n}</h2><p class="lede" id="lrLede">${ex||L[i].lede}</p>`;
function sky(refl){return `<svg viewBox="0 0 800 450" id="lrSvg" role="img" aria-label="Earth at the bottom left, the Moon at the top right with a small glowing reflector"><defs><radialGradient id="lrE" cx=".35" cy=".35"><stop offset="0" stop-color="#5fb4ff"/><stop offset="1" stop-color="#0b3a7a"/></radialGradient><radialGradient id="lrM" cx=".35" cy=".35"><stop offset="0" stop-color="#e6e6ea"/><stop offset="1" stop-color="#7d7d86"/></radialGradient></defs>
 ${[...Array(40)].map((_,i)=>`<circle cx="${(i*197)%800}" cy="${(i*89)%450}" r="${i%3?1:1.6}" fill="#fff" opacity=".55"/>`).join('')}
 <circle cx="${E.x}" cy="${E.y}" r="70" fill="url(#lrE)"/><text x="${E.x}" y="${E.y+102}" fill="#a2abbd" font-size="22" text-anchor="middle">Earth</text>
 <circle cx="${MO.x}" cy="${MO.y}" r="46" fill="url(#lrM)"/><text x="${MO.x}" y="${MO.y+78}" fill="#a2abbd" font-size="22" text-anchor="middle">Moon</text>
 ${refl?`<rect id="lrRef" x="${RX-7}" y="${RY-7}" width="14" height="14" fill="#f7c548" stroke="#fff" stroke-width="2" transform="rotate(-30 ${RX} ${RY})" style="filter:drop-shadow(0 0 8px #f7c548)"><animate attributeName="opacity" values="1;.4;1" dur="1.6s" repeatCount="indefinite"/></rect>`:''}
 <line id="lrBeam" x1="${E.x}" y1="${E.y}" x2="${E.x}" y2="${E.y}" stroke="#ff3a3a" stroke-width="5" stroke-linecap="round"/><g id="lrFx"></g></svg>`}
const ns=t=>document.createElementNS('http://www.w3.org/2000/svg',t);
function done(next){shell(`<div class="lr-done"><div><h2>Level completed!</h2><p>Now let’s see something real…</p></div></div>`);snd('ping');tm=setTimeout(next,1900)}
/* ---------- level 1 ---------- */
function level(i){lv=i;[l1,l2,l3][i]()}
function l1(){shell(`${head(0)}<div class="lr-stage" id="lrSt">${sky(1)}</div><p class="lr-msg" id="lrMsg" aria-live="polite"></p><div class="lr-row"><button class="btn" data-a="-1">▲ Aim up</button><button class="btn" data-a="1">▼ Aim down</button></div>`);
 const svg=$('#lrSvg'),st=$('#lrSt');let drag=0,lock=0;
 const aim=a=>{ang=Math.max(-.6,Math.min(.6,a));const b=$('#lrBeam'),ok=Math.abs(ang)<.07;b.setAttribute('x2',E.x+Math.cos(BASE+ang)*350);b.setAttribute('y2',E.y+Math.sin(BASE+ang)*350);b.setAttribute('stroke-dasharray',ok?'none':'10 10');b.setAttribute('stroke',ok?'#7cc4ff':'#ff3a3a');
  $('#lrMsg').textContent=ok?'Locked on! Hold steady…':'Aim at the Moon reflector!';clearTimeout(lock);if(ok)lock=setTimeout(()=>done(()=>photo(0)),900)};
 const ptr=e=>{const r=svg.getBoundingClientRect();aim(Math.atan2((e.clientY-r.top)/r.height*450-E.y,(e.clientX-r.left)/r.width*800-E.x)-BASE)};
 st.onpointerdown=e=>{drag=1;ptr(e)};st.onpointermove=e=>drag&&ptr(e);st.onpointerup=st.onpointercancel=()=>drag=0;
 el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>aim(ang+ +b.dataset.a*.05));
 el.onkeydown=e=>{if(e.key==='Escape')close();if(e.key==='ArrowUp')aim(ang-.05);if(e.key==='ArrowDown')aim(ang+.05)};
 aim(.4)}
/* ---------- level 2 ---------- */
function l2(){shell(`${head(1)}<div class="lr-stage">${sky(1)}</div><p class="lr-msg" id="lrMsg" aria-live="polite">Ready!</p><div class="lr-row"><button class="btn big" id="lrFire">🔦 FIRE LASER</button></div><p class="lr-note">This is slowed down. A real round trip takes about 2.5 seconds, depending on the Earth–Moon distance.</p>`);
 const b=$('#lrBeam');b.setAttribute('x2',RX);b.setAttribute('y2',RY);b.setAttribute('stroke-dasharray','10 10');b.setAttribute('opacity','.5');
 $('#lrFire').onclick=e=>{e.target.disabled=true;snd('ping');const fx=$('#lrFx'),pt=ns('circle');pt.setAttribute('r',9);pt.setAttribute('fill','#fff');pt.setAttribute('style','filter:drop-shadow(0 0 8px #ff3a3a)');fx.appendChild(pt);b.setAttribute('stroke-dasharray','none');b.setAttribute('x2',E.x);b.setAttribute('y2',E.y);b.setAttribute('opacity','.9');
  $('#lrMsg').textContent='The laser travels to the Moon…';const T=3600,t0=performance.now();
  const f=n=>{const k=Math.min(1,(n-t0)/T),x=E.x+(RX-E.x)*k,y=E.y+(RY-E.y)*k;pt.setAttribute('cx',x);pt.setAttribute('cy',y);b.setAttribute('x2',x);b.setAttribute('y2',y);
   if(k<1)raf=requestAnimationFrame(f);else{$('#lrMsg').textContent='It reaches the reflector!';pt.setAttribute('r',22);tm=setTimeout(()=>done(()=>photo(1)),1300)}};raf=requestAnimationFrame(f)}}
/* ---------- level 3 ---------- */
function l3(){let got=0;const N=3;shell(`${head(2)}<div class="lr-stage">${sky(1)}</div><p class="lr-msg" id="lrMsg" aria-live="polite">The reflector sends the light back… Photons caught: 0 of ${N}</p><p class="lr-note">The corner cubes send light straight back towards its source.</p>`);
 const b=$('#lrBeam');b.setAttribute('x2',RX);b.setAttribute('y2',RY);b.setAttribute('stroke','#7cc4ff');b.setAttribute('stroke-dasharray','4 12');b.setAttribute('opacity','.35');
 const fx=$('#lrFx'),ph=[];
 for(let i=0;i<N;i++){const g=ns('circle');g.setAttribute('r',20);g.setAttribute('class','lr-ph1');g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label','Photon. Tap to catch it.');fx.appendChild(g);const o={g,p:i/N,w:(i-1)*60,on:1};ph.push(o);
  const hit=()=>{if(!o.on)return;o.on=0;g.remove();got++;snd('ping');$('#lrMsg').textContent=got<N?`Photons caught: ${got} of ${N}`:'You caught them all!';if(got===N)tm=setTimeout(()=>done(()=>photo(2)),1100)};
  g.onpointerdown=e=>{e.stopPropagation();hit()};g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();hit()}}}
 const f=()=>{ph.forEach(o=>{if(!o.on)return;o.p=(o.p+.0006)%1;o.g.setAttribute('cx',RX+(E.x+75-RX)*o.p);o.g.setAttribute('cy',RY+(E.y-RY)*o.p+Math.sin(o.p*9)*o.w*.5)});raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f)}
/* ---------- photo reveal + ONE hotspot ---------- */
function photo(i){const p=L[i].ph,h=p.hot,last=i===2;
 shell(`<p class="eyebrow">Real photograph · Level ${i+1}</p><div class="lr-disc"><div><div class="lr-frame"><div class="lr-fit" id="lrFit" style="--r:${p.w}/${p.h}"><img src="${p.src}" width="${p.w}" height="${p.h}" alt="${esc(p.t)}"><button class="lr-hot" style="left:${h.x}%;top:${h.y}%" aria-label="Tap to explore: ${esc(h.h)}"></button></div></div></div>
 <div class="lr-side"><h2>${esc(p.t)}</h2><p class="lede" style="font-size:16px;margin:4px 0 8px">${esc(p.m)}</p><p>${esc(p.d)}</p><p class="lr-hint" id="lrHint">👆 Tap the glowing circle on the photo.</p><div id="lrPan"></div>
 <div class="lr-cred">Credit: ${esc(p.credit)}<br>Source: ${p.links.map(k=>`<a href="${k[1]}" target="_blank" rel="noopener">${esc(k[0])}</a>`).join(' · ')}</div>
 <div class="lr-row" style="justify-content:flex-start"><button class="btn big" id="lrNext">${last?'FINISH':'CONTINUE TO NEXT LEVEL'} →</button></div></div></div>`);
 const fit=$('#lrFit');
 $('.lr-hot').onclick=()=>{snd('ping');fit.querySelector('.lr-hl')?.remove();const b=document.createElement('div');b.className='lr-hl';b.style.cssText=`left:${h.box[0]}%;top:${h.box[1]}%;width:${h.box[2]}%;height:${h.box[3]}%`;fit.appendChild(b);$('#lrHint').hidden=true;
  $('#lrPan').innerHTML=`<div class="lr-pan" role="status"><h3>${esc(h.h)}</h3><p><b>What am I looking at?</b>${esc(h.a)}</p><p><b>Why is it important?</b>${esc(h.b)}</p></div>`};
 $('#lrNext').onclick=()=>last?finish():level(i+1)}
/* ---------- final ---------- */
function finish(){shell(`<p class="eyebrow">Mission complete</p><h2>You measured the Moon!</h2><p class="lede">Here is what you learned:</p><ul class="lr-sum"><li><b>1.</b> Apollo astronauts left laser reflectors on the Moon. Scientists aim lasers at them.</li><li><b>2.</b> A laser pulse travels to the Moon and back. The round trip takes about 2.5 seconds.</li><li><b>3.</b> The reflector sends light back to where it came from. Only a tiny amount returns, and its travel time gives the Earth–Moon distance.</li></ul>
 <div class="lr-row" style="justify-content:flex-start"><button class="btn big" id="lrAgain">↻ PLAY AGAIN</button><button class="btn ghost" id="lrOther">← Other machines</button></div>
 <p class="lr-srcs">Sources: <a href="https://www.nist.gov/node/1265386" target="_blank" rel="noopener">NIST</a> · <a href="https://photojournal.jpl.nasa.gov/catalog/PIA13037" target="_blank" rel="noopener">NASA Photojournal</a> · <a href="https://www.nasa.gov/history/alsj/a11/a11LM2LWC.html" target="_blank" rel="noopener">NASA Apollo Lunar Surface Journal</a></p>`);
 $('#lrAgain').onclick=()=>level(0);$('#lrOther').onclick=()=>close()}
window.openLaserLab=open;
})();

/* Curiosity: scientific discovery experience (educational 3D reconstruction + real NASA photos). Opens after each drilled sample. */
(function(){
const NA='NASA verified image/data currently unavailable',PJ=n=>`https://photojournal.jpl.nasa.gov/catalog/${n}`,IM=p=>'assets/img/'+(p.pre||'cur-')+p.f+'.jpg',MSSS='NASA/JPL-Caltech/MSSS',SRC='NASA — full credit line on the source page';
const D={
'Mudstone':{title:'Mudstone discovered',kind:'Sedimentary rock',col:0x8d8277,model:'mud',
 info:[['What is mudstone?','Mudstone is a fine-grained sedimentary rock made from very small particles of mud.'],['How did it form?','Fine particles settled in an ancient watery environment and slowly became rock.','Scientists’ interpretation.'],['How did Curiosity collect it?','Curiosity used its robotic arm drill to bore into the John Klein rock and collect powdered material for scientific analysis.'],['Why is it important?','Mudstone can preserve evidence of ancient environments that may once have supported microbial life.','“May”: this is a possibility, not proof of life.']],
 ph:[{f:'mud-drillhole',t:'View into ‘John Klein’ Drill Hole in Martian Mudstone',id:'PIA17594',cam:'MAHLI (Mars Hand Lens Imager)',date:'May 10, 2013 (Sol 270)',loc:'John Klein, Sheepbed, Yellowknife Bay, Gale Crater',cr:MSSS,link:PJ('PIA17594'),w:'The actual drill hole made by Curiosity in the John Klein mudstone. The grey material inside is powdered rock collected during drilling.'},
  {f:'mud-readysetdrill',t:'Ready, Set, Drill',id:null,cam:'Right Front Hazard-Avoidance Camera',date:'February 8, 2013 (Sol 182)',loc:'John Klein rock',cr:'NASA/JPL-Caltech',link:null,w:'Curiosity’s first use of its drill to collect a rock sample, on the John Klein rock.'},
  {f:'mud-yellowknife',t:'View of Yellowknife Bay Formation, with Drilling Sites',id:null,cam:'Mastcam',date:'December 24, 2012 (Sol 137)',loc:'Yellowknife Bay, Gale Crater',cr:MSSS,link:null,w:'This mudstone was found in Yellowknife Bay, an area with evidence of ancient lake and stream deposits.'}]},
'Old lake bed':{title:'Old lake bed discovered',kind:'Ancient environment, not a mineral',col:0x8a6a4f,model:'lake',
 info:[['What is an old lake bed?','It is a place, not a mineral. Rocks here hold evidence of ancient lakes and streams on Mars.'],['How did the layers form?','Sediments built up in ancient water environments and became the layered rocks we see today.','Scientists’ interpretation.'],['How did Curiosity find it?','Curiosity photographed the rock layers with its Mastcam camera and drilled into the rocks at Yellowknife Bay.'],['Why is it important?','These landscapes preserve evidence of ancient lakes and streams on Mars.']],
 ph:[{f:'lake-env',t:'View of Yellowknife Bay Formation, with Drilling Sites',id:'PIA16781',cam:'Mastcam',date:'December 24, 2012',loc:'Yellowknife Bay, Gale Crater',cr:MSSS,link:PJ('PIA16781'),w:'A landscape of rock deposits that preserve evidence of ancient lakes and streams on Mars.'},
  {f:'lake-layers',t:'Rock layers of Yellowknife Bay',id:null,cam:'Mastcam',date:null,loc:'Yellowknife Bay: Sheepbed, Gillespie Lake and Point Lake layers',cr:'NASA/JPL (source: jpl.nasa.gov)',link:null,w:'The real arrangement of the different layers of sedimentary rock. This copy is low resolution.'},
  {f:'lake-location',t:'Location of John Klein Drill Site',id:null,cam:'Mars Odyssey THEMIS data',date:'March 12, 2013',loc:'Gale Crater',cr:'NASA / Mars Odyssey Thermal Emission Imaging System',link:null,w:'Where Curiosity investigated: Yellowknife Bay inside Gale Crater.'}]},
'Vein rock':{title:'Vein rock discovered',kind:'Rock with mineral veins',col:0xb39d86,model:'vein',
 info:[['What are the white lines?','White mineral veins fill cracks in the Martian rock. Scientists interpreted the mineral as calcium sulfate.','Interpretation by scientists.'],['How were the veins formed?','Water moved through cracks in the rock. Minerals were left along the cracks, forming veins.','Scientists’ interpretation. The 3D model is a teaching reconstruction.'],['How did Curiosity see them?','Curiosity photographed the veins in the Sheepbed rocks with its Mastcam camera.'],['Why is it important?','Veins show that water moved through these rocks. Some veins were only 1 to 5 millimetres wide.']],
 ph:[{f:'vein-sheepbed',t:'Veins in ‘Sheepbed’ Outcrop',id:'PIA16705',cam:'Mastcam',date:'December 13, 2012 (Sol 126)',loc:'Sheepbed, Yellowknife Bay',cr:MSSS,link:PJ('PIA16705'),w:'The actual white mineral veins in the Martian rock.'},
  {f:'vein-scale',t:'White veins in Sheepbed rocks, with a centimetre scale',id:null,cam:null,date:null,loc:null,cr:'NASA/JPL (see source)',link:null,w:'A closer look at thin, light-coloured veins. The scale is in centimetres.'},
  {f:'vein-marsearth',t:'Veins in Rocks on Mars and Earth',id:'PIA16617',cam:'ChemCam Remote Micro-Imager (Mars image, left)',date:'December 14, 2012 (Sol 126)',loc:'Mars: ‘Sheepbed rock’ (left). Earth: for comparison (right)',cr:SRC,link:PJ('PIA16617'),w:'Left is Mars. Right is Earth, shown for comparison: similar veins can form on Earth when mineral-rich water flows through cracks.'}]},
'Grey layer':{title:'Grey layer discovered',kind:'Rock layers · game name, not a NASA mineral name',col:0x77777a,model:'grey',
 info:[['What is the grey layer?','Curiosity saw bands of light and dark grey rock while exploring Mount Sharp. “Grey layer” is this game’s name, not a mineral.'],['How did the layers form?','Mount Sharp holds layers of rock laid down over time. They keep a record of Mars’ geological history.'],['How did Curiosity see them?','Its Right Navigation Camera imaged light rocks and grey rocks in a hole on Sol 3965.'],['Why do the colours differ?','Scientists are checking if it is rock make-up, chemical changes, erosion or sand cover.','NASA has not confirmed which.']],
 ph:[{f:'grey-sol3965',t:'Light Rocks on Deck, Gray Rocks in the Hole',id:null,cam:'Right Navigation Camera',date:'October 2023 (image from Sol 3965)',loc:'Mount Sharp, Gale Crater',cr:'NASA/JPL-Caltech',link:null,w:'The real grey and light-coloured rocks Curiosity observed. The black corners are part of the original image.'},
  {f:'grey-pia16104',t:'Layers at the Base of Mount Sharp',id:'PIA16104',cam:'Mastcam',date:'August 23, 2012',loc:'Base of Mount Sharp, Gale Crater',cr:SRC,link:PJ('PIA16104'),w:'The different layers of rock at the foot of Mount Sharp.'},
  {f:'grey-sharp',t:'Layered slopes of Mount Sharp',id:'PIA16105',cam:'Mastcam',date:null,loc:'Mount Sharp, Gale Crater',cr:SRC,link:PJ('PIA16105'),w:'Mount Sharp’s layered structure and its surroundings. Curiosity has been exploring these slopes.'}]}};
const $$=(s,r)=>(r||document).querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const JK=d=>d&&d.m==='per'?'bt-mars-journal-per':d&&d.m==='opp'?'bt-mars-journal-opp':d&&d.m==='spi'?'bt-mars-journal-spi':d&&d.m==='ins'?'bt-mars-journal-ins':'bt-mars-journal';
const jr=d=>{try{return JSON.parse(localStorage.getItem(JK(d)))||{e:[],p:0}}catch(e){return{e:[],p:0}}};
let el,lb,R=null;
function stop(){if(!R)return;cancelAnimationFrame(R.raf);try{R.ren.dispose()}catch(e){}R=null}
function rock(seed,col,sc){const g=new THREE.IcosahedronGeometry(1.2,4),p=g.attributes.position,v=new THREE.Vector3();
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).normalize();const r=1.2+.09*Math.sin(v.x*5+seed)+.07*Math.sin(v.y*7+seed*2)+.06*Math.sin(v.z*6+seed*3);v.multiplyScalar(r);v.y*=sc;p.setXYZ(i,v.x,v.y,v.z)}g.computeVertexNormals();return g}
const mat=c=>new THREE.MeshStandardMaterial({color:c,transparent:true,opacity:.86,roughness:.95,flatShading:true});
const edges=(m,c)=>{m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),new THREE.LineBasicMaterial({color:c||0x7cc4ff,transparent:true,opacity:.22})));return m};
function build(kind,col){if(BX[kind])return BX[kind](col);const G=new THREE.Group();let pins=[];
 if(kind==='mud'||kind==='vein'){const m=edges(new THREE.Mesh(rock(kind==='mud'?1:4,col,kind==='mud'?.75:.9),mat(col)));G.add(m);
  if(kind==='mud'){const h=new THREE.Mesh(new THREE.CylinderGeometry(.26,.26,.12,24),new THREE.MeshBasicMaterial({color:0x15110e}));h.position.set(0,.9,0);G.add(h);const rg=new THREE.Mesh(new THREE.RingGeometry(.27,.5,28),new THREE.MeshBasicMaterial({color:0xb4b4b0,side:2,transparent:true,opacity:.9}));rg.rotation.x=-Math.PI/2;rg.position.set(0,.93,0);G.add(rg);pins=[[-1.1,.5,.6],[1.1,.3,.5],[0,1.1,0],[.9,.9,-.6]]}
  else{const f=(d)=>{d.normalize();return d.multiplyScalar(1.2+.09*Math.sin(d.x*5+4)+.07*Math.sin(d.y*7+8)+.06*Math.sin(d.z*6+12)+.03).setY(0).add(new THREE.Vector3(0,0,0))};
   for(let k=0;k<3;k++){const pts=[];for(let t=0;t<=1;t+=.1){const a=k*2.1+t*1.6,b=.4+k*.35+Math.sin(t*5+k)*.15,d=new THREE.Vector3(Math.cos(a)*Math.cos(b),Math.sin(b)*.9,Math.sin(a)*Math.cos(b)).normalize(),r=1.2+.09*Math.sin(d.x*5+4)+.07*Math.sin(d.y*7+8)+.06*Math.sin(d.z*6+12)+.035;pts.push(d.clone().multiplyScalar(r).multiply(new THREE.Vector3(1,.9,1)))}
    G.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),40,.032,6),new THREE.MeshBasicMaterial({color:0xffffff})))}
   pins=[[1.1,.5,.7],[-.9,.7,.9],[.2,1.1,.7],[-1.1,0,-.5]]}}
 else{const cols=kind==='lake'?[0x4a3b30,0x9a7b5a,0x7a6a5e,0xa4806a]:[0xc8b79f,0x6f6f74,0xcfc0aa,0x5c5c61,0xbfae97,0x7b7b80];const hs=kind==='lake'?[.34,.3,.36,.3]:[.28,.22,.3,.2,.26,.22];let y=-.8;
  cols.forEach((c,i)=>{const b=edges(new THREE.Mesh(new THREE.BoxGeometry(2.6,hs[i],1.7),mat(c)));b.position.y=y+hs[i]/2;y+=hs[i];G.add(b)});
  if(kind==='lake'){const w=new THREE.Mesh(new THREE.BoxGeometry(2.6,.45,1.7),new THREE.MeshStandardMaterial({color:0x3f8fd0,transparent:true,opacity:.32}));w.position.y=y+.22;G.add(w)}
  pins=kind==='lake'?[[-1.3,.5,.9],[1.3,-.2,.9],[0,-.5,.9],[1.3,.7,.9]]:[[-1.3,0,.9],[1.3,.1,.9],[0,.55,.9],[-1.3,.45,.9]]}
 return {G,pins}}
/* ---- Perseverance: four discovery tasks (same engine, same look as Curiosity) ---- */
const PRE='per-',PM='NASA/JPL-Caltech/ASU/MSSS',NS='https://science.nasa.gov',JP='https://www.jpl.nasa.gov/images';
Object.assign(D,{
'River delta rock':{m:'per',title:'River delta rock discovered',kind:'Ancient river delta · Jezero Crater',col:0x9a7b5a,model:'delta',
 info:[['River','Scientists think a river once flowed into Jezero Crater. Rivers carry sand, mud and small stones along with them.','Scientists’ interpretation.'],
  ['Sediment','Sediment is sand, mud and pebbles carried by water. When it settles, it can build up in layers and slowly turn into rock.','The layers in the 3D model are only a teaching picture. NASA has not documented exact underground layers.'],
  ['Delta Formation','A delta forms where a river slows down as it enters a lake and drops what it carries. Jezero has a fan-shaped landform that scientists interpret as an ancient river delta.','Scientists’ interpretation.'],
  ['Ancient Lake','Scientists think Jezero Crater once held a lake. That is why Perseverance went there: to study rocks that could record that ancient place.','Interpretation. Studying these rocks is still in progress.']],
 ph:[{pre:PRE,f:'delta-pia24485',t:'Perseverance View of the Delta in Jezero Crater',id:'PIA24485',cam:'Mastcam-Z',date:'February 22, 2021 (Sol 4)',loc:'Jezero Crater, Mars',cr:PM,link:NS+'/photojournal/perseverance-view-of-the-delta-in-jezero-crater/',w:'The delta landform seen from Perseverance. The yellow bar in the picture marks 10 metres.'},
  {pre:PRE,f:'delta-front',t:'Jezero Delta Front Stratigraphy',id:null,cam:'Mastcam-Z',date:'April 16, 2022 (Sol 411)',loc:'Edge of the delta, Jezero Crater',cr:PM,link:NS+'/blog/studying-the-jezero-delta-from-a-distance/',w:'Real layered rock at the front edge of the delta. Layers are what scientists read to understand how rocks built up.'}],
 more:[['Perseverance Explores the Jezero Crater Delta (panorama)',NS+'/resource/perseverance-explores-the-jezero-crater-delta/'],['PIA25671 · Mastcam-Z views the eastern edge of Jezero’s delta (Sol 402)',JP+'/pia25671-mastcam-z-views-the-eastern-edge-of-jezeros-delta/']]},
'Crater floor rock':{m:'per',title:'Crater floor rock discovered',kind:'Igneous rock · Jezero Crater floor',col:0x55555a,model:'igneous',
 info:[['Igneous Rock','Igneous rock forms when hot melted rock cools and turns solid. The Máaz formation is made of igneous rock linked to ancient lava flows.','NASA science team interpretation.'],
  ['Olivine','Olivine is a green-ish mineral that can form in hot, melted rock. The Séítah formation is made of olivine-rich igneous rock.'],
  ['Mineral Analysis','Perseverance’s instruments study rocks up close to find out which minerals they hold. A mineral map is a scientific visualization made from data. It is not an ordinary photograph.'],
  ['Water Alteration','Water can slowly change the minerals inside a rock. The crater floor rocks show different amounts of this change, called aqueous alteration.']],
 ph:[{pre:PRE,f:'crater-pia24746',t:'Perseverance Scouts First Sampling Location',id:'PIA24746',cam:'Mastcam-Z',date:'July 8, 2021 (Sol 136)',loc:'Jezero Crater floor, “Crater Floor Fractured Rough” area',cr:PM,link:JP+'/pia24746-perseverance-scouts-first-sampling-location/',w:'The area where Perseverance looked for its first rock sample. NASA calls this region Crater Floor Fractured Rough.'},
  {pre:PRE,f:'seitah-outcrop',t:'Séítah Rock Outcrop',id:null,cam:'Left Mastcam-Z',date:'December 15, 2021 (Sol 292)',loc:'Séítah region, Jezero Crater',cr:PM,link:null,w:'A close-up of layered, cracked rock in the Séítah area. This is an ordinary photograph, not a mineral map.'},
  {pre:PRE,f:'rock-textures',t:'Martian Rock Textures in Jezero Crater',id:null,cam:'Mastcam-Z',date:'Sol 608 (calendar date not provided)',loc:'Jezero Crater',cr:null,link:'https://photojournal.jpl.nasa.gov/spacecraft/Perseverance',w:'Rocks, fragments, dust and surface textures on the ground in Jezero Crater.'}],
 more:[['PIA25023 · Two Perspectives of Séítah Rocks (photo and mineral map)',NS+'/photojournal/two-perspectives-of-seitah-rocks/'],['PIA24922 · Perseverance’s Route to the Delta (route map)',JP+'/pia24922-perseverances-route-to-the-delta/']],
 note:'Mineral maps are scientific visualizations, not ordinary photographs.'},
'Carbonate rock':{m:'per',title:'Carbonate-rich rock discovered',kind:'Silica-cemented carbonate · Bunsen Peak',col:0xc9b79c,model:'carb',
 info:[['Carbonate','Carbonate is a kind of mineral. On Earth it often forms where water and rock meet. Bunsen Peak is a silica-cemented carbonate rock.'],
  ['Silica','Silica is a hard mineral material, found in quartz for example. Here it works like glue that holds the rock together. That is what “silica-cemented” means.'],
  ['Water-Rock Interaction','Scientists think water was involved in making this kind of rock. But how Bunsen Peak formed is still being investigated.','NASA has not confirmed that it formed in a lake, and it is not evidence of life.'],
  ['Rock Core Collection','On March 12, 2024 (Sol 1088) Perseverance drilled a rock core and sealed it in a tube. The sample is named Comet Geyser, sample number 24. It is 5.78 cm tall.']],
 ph:[{pre:PRE,f:'bunsen-pia26312',t:'Perseverance’s View of Bunsen Peak',id:'PIA26312',cam:'Mastcam-Z',date:'March 12, 2024 (Sol 1088)',loc:'Bunsen Peak rock, Mars',cr:PM,link:NS+'/photojournal/perseverances-view-of-bunsen-peak/',w:'The Bunsen Peak rock with the round patch where the surface was ground away.'},
  {pre:PRE,f:'bunsen-pia26313',t:'Perseverance’s Bunsen Peak Sample',id:'PIA26313',cam:'CacheCam',date:'March 12, 2024 (Sol 1088)',loc:'Inside Perseverance, sample tube',cr:'NASA/JPL-Caltech',link:NS+'/photojournal/perseverances-bunsen-peak-sample/',w:'A close-up of the real rock core collected from Bunsen Peak.'},
  {pre:PRE,f:'bunsen-pia26314',t:'Perseverance Cores Bunsen Peak',id:'PIA26314',cam:'Front Hazard Avoidance Camera',date:'March 12, 2024 (Sol 1088)',loc:'Bunsen Peak rock, Mars',cr:null,link:NS+'/photojournal/perseverance-cores-bunsen-peak/',w:'Perseverance drilling into the Bunsen Peak rock.'}],
 more:[['Carving Into Carbonates at Old Faithful Geyser (Sol 1151)',NS+'/blog/carving-into-carbonates-at-old-faithful-geyser/'],['NASA list of Perseverance rock samples',NS+'/mission/mars-2020-perseverance/mars-rock-samples/']]},
'MOXIE test site':{m:'per',title:'MOXIE Oxygen Experiment',kind:'An instrument inside Perseverance, not a place on Mars',col:0xc9a24a,model:'moxie',sim:1,
 info:[['Mars Atmosphere','Mars air is mostly carbon dioxide, written CO₂. MOXIE takes in this air.'],
  ['Air Compressor','A compressor squeezes the thin Martian air so the instrument can work with it.'],
  ['Solid Oxide Electrolysis','Inside, electricity splits CO₂ into oxygen (O₂) and carbon monoxide. This is called solid oxide electrolysis.'],
  ['Oxygen Output','MOXIE measured the oxygen it made. In 16 runs it produced 122 grams in total, up to 12 grams an hour, at 98% purity or better. Its final run was August 7, 2023.']],
 ph:[{pre:PRE,f:'moxie-pia24203',t:'MOXIE All Tucked In',id:'PIA24203',cam:null,date:null,loc:'Installed inside Perseverance',cr:null,link:NS+'/photojournal/moxie-all-tucked-in/',w:'The real MOXIE instrument installed inside Perseverance. This is a photograph of the actual hardware.'}],
 more:[['PIA24176 · Engineers lower MOXIE into Perseverance (photo)',JP+'/pia24176-engineers-lower-moxie-into-perseverance/'],['PIA24177 · Components of MOXIE (NASA illustration, not a photograph)',NS+'/photojournal/components-of-moxie-illustration/'],['PIA26041 · The sound of MOXIE at work on Mars (SuperCam microphone, Sol 96)',NS+'/photojournal/the-sound-of-moxie-at-work-on-mars/']],
 note:'The simulation is a simplified teaching animation, not to scale. It is not a real-time NASA experiment.'}});
const BX={};
function surf(d,seed,sc,k){d=d.clone().normalize();const r=(1.2+.09*Math.sin(d.x*5+seed)+.07*Math.sin(d.y*7+seed*2)+.06*Math.sin(d.z*6+seed*3))*(k||1);const v=d.multiplyScalar(r);v.y*=sc;return v}
BX.delta=col=>{const G=new THREE.Group(),W=[2.8,2.5,2.2,1.9],C=[0x4a3b30,0xb08a5e,0x7a6a5e,0xc79a72],h=.28,gap=.03,X0=-1.4,wl=.3,D=1.7;let y=-.8;const tops=[];
 /* solid layers: separated by a thin dark gap so each layer reads as its own band */
 W.forEach((w,i)=>{const b=edges(new THREE.Mesh(new THREE.BoxGeometry(w,h,D),mat(C[i])));b.position.set(X0+w/2,y+h/2,0);G.add(b);y+=h+gap;tops.push(y-gap)});
 /* water only fills the space NOT occupied by rock (no overlap with the layers) */
 const wm=new THREE.MeshStandardMaterial({color:0x3f8fd0,transparent:true,opacity:.34,depthWrite:false});
 const cols=[[X0+W[3],X0+W[2],tops[2]],[X0+W[2],X0+W[1],tops[1]],[X0+W[1],X0+W[0],tops[0]],[X0+W[0],X0+W[0]+.45,-.8]];
 cols.forEach(([a,b,f])=>{const hh=wl-f-.02;if(hh<=0)return;const m=new THREE.Mesh(new THREE.BoxGeometry(b-a-.02,hh,D-.04),wm);m.position.set((a+b)/2,f+.01+hh/2,0);G.add(m)});
 /* river: a thin channel lying just above the land surface */
 const rv=new THREE.Mesh(new THREE.BoxGeometry(1.6,.03,.3),new THREE.MeshBasicMaterial({color:0x5db4ff}));rv.position.set(X0+.8,tops[3]+.03,.2);G.add(rv);
 G.scale.setScalar(.9);return{G,pins:[[-1.0,tops[3]+.15,.5],[-.2,-.45,.9],[X0+W[2]+.1,.15,.9],[1.3,.35,.2]]}};
BX.igneous=col=>{const G=new THREE.Group(),sc=.8;G.add(edges(new THREE.Mesh(rock(2,col,sc),mat(col))));
 let s=7;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;
 for(let i=0;i<30;i++){const d=new THREE.Vector3(rnd()-.5,rnd()*.9-.1,rnd()-.5),p=surf(d,2,sc,1.0),c=new THREE.Mesh(new THREE.IcosahedronGeometry(.05+rnd()*.04,0),new THREE.MeshStandardMaterial({color:0x9fbf4f,flatShading:true}));c.position.copy(p);G.add(c)}
 for(let i=0;i<4;i++){const d=new THREE.Vector3(Math.cos(i*1.7+.5),.5+rnd()*.3,Math.sin(i*1.7+.5)),p=surf(d,2,sc,1.0),b=new THREE.Mesh(new THREE.SphereGeometry(.17,10,6),new THREE.MeshStandardMaterial({color:0xa8613c,transparent:true,opacity:.75}));b.scale.y=.3;b.position.copy(p);G.add(b)}
 return{G,pins:[[-1.25,.3,.6],[1.1,.65,.55],[0,1.15,.2],[.2,-.25,1.25]]}};
BX.carb=col=>{const G=new THREE.Group(),slab=edges(new THREE.Mesh(rock(3,col,.5),mat(col)));slab.scale.set(1.15,1,1.05);slab.position.set(-.55,-.35,0);G.add(slab);
 const pt=new THREE.Mesh(new THREE.CylinderGeometry(.52,.52,.05,32),new THREE.MeshStandardMaterial({color:0xe3d6c0,roughness:.9}));pt.position.set(-.55,.28,.1);G.add(pt);
 const hole=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,.06,20),new THREE.MeshBasicMaterial({color:0x15110e}));hole.position.set(-.55,.32,.1);G.add(hole);
 const core=edges(new THREE.Mesh(new THREE.CylinderGeometry(.24,.24,1.2,28),mat(0xd8cbb6)));core.position.set(1.55,.1,.2);G.add(core);
 return{G,pins:[[-1.3,.4,.7],[-.2,.75,.5],[-.6,-.7,.9],[1.55,.9,.3]]}};
BX.moxie=col=>{const G=new THREE.Group(),sil=new THREE.MeshStandardMaterial({color:0xc9cdd5,metalness:.5,roughness:.4});
 const box=edges(new THREE.Mesh(new THREE.BoxGeometry(2.4,1,1.4),new THREE.MeshStandardMaterial({color:col,transparent:true,opacity:.38,roughness:.6})),0xf7c548);G.add(box);
 const comp=new THREE.Mesh(new THREE.CylinderGeometry(.34,.34,.7,24),sil);comp.rotation.z=Math.PI/2;comp.position.set(-.7,0,0);G.add(comp);
 const stack=edges(new THREE.Mesh(new THREE.BoxGeometry(.9,.6,.8),new THREE.MeshStandardMaterial({color:0xd0763c,roughness:.7})));stack.position.set(.55,0,0);G.add(stack);
 [[-2,-1.2],[2,1.2]].forEach(([x,x0])=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.11,.11,1.1,14),sil);p.rotation.z=Math.PI/2;p.position.set(x*.78+(x<0?-.15:.15),0,0);G.add(p)});
 const N=16,P=[];for(let i=0;i<N;i++){const m=new THREE.MeshBasicMaterial({color:0xb7bcc6,transparent:true,opacity:.95}),s=new THREE.Mesh(new THREE.SphereGeometry(.075,10,8),m);s.visible=false;G.add(s);P.push(s)}
 const sim={on:false};
 const upd=t=>{P.forEach((s,i)=>{if(!sim.on){s.visible=false;return}const u=(t*.1+i/N)%1,x=-2.3+4.6*u;s.visible=true;s.position.set(x,Math.sin(t*3+i*2)*.09+((i%3)-1)*.12,((i%4)-1.5)*.1);const o2=x>.45;s.material.color.setHex(o2?0x4aa8ff:0xb7bcc6);s.scale.setScalar(o2?.8:1.15)})};
 G.scale.setScalar(.85);return{G,sim,upd,pins:[[-1.9,.55,.4],[-.7,.65,.75],[.55,.55,.75],[1.95,.55,.4]]}};
/* ---- Opportunity: three discovery tasks (same engine and look) ---- */
const OP='opp-',OC='NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.',PJC=n=>`https://photojournal.jpl.nasa.gov/catalog/${n}`;
const FCT='False-colour image: colours are enhanced to show differences. They are not what the eye would see. Do not tell minerals apart by colour alone.',
 UCT='Colour processing is not confirmed here. See the NASA page. Do not tell minerals apart by colour alone.';
Object.assign(D,{
'Eagle Crater rocks':{m:'opp',n:3,title:'Eagle Crater rocks discovered',kind:'Layered rock with “blueberries” · Eagle Crater',col:0xa87555,model:'eagle',
 info:[['Hematite','Hematite is an iron oxide mineral. NASA found that the small round “blueberries” at Eagle Crater are rich in hematite.'],
  ['Blueberries','“Blueberries” is only a nickname. They are tiny round mineral lumps, called concretions. They are not berries and they are not blue.','Not every round feature on Mars is the same. The Kirkwood spherules found later are a different case.'],
  ['Rock Abrasion Tool','Opportunity used its Rock Abrasion Tool, a small grinder and brush, to remove dusty surfaces. This showed fresh rock for its instruments to study.'],
  ['Ancient Water','Sulfate minerals in the outcrop are evidence that water and rock interacted for a long time. Together with the hematite-rich blueberries, this helped show that water once played a role here.','Scientists’ interpretation of NASA data.']],
 ph:[{pre:OP,f:'eagle-pia05600',t:'Eyeing “Eagle Crater”',id:'PIA05600',cam:'Navigation Camera and Panoramic Camera',date:'Mission Sols 33, 35 and 36',loc:'Eagle Crater, Meridiani Planum',cr:'NASA/JPL/Cornell',link:NS+'/photojournal/eyeing-eagle-crater/',w:'A panorama of Eagle Crater, where Opportunity landed in January 2004. NASA records the crater as about 22 metres across. Black areas are gaps with no picture data.'},
  {pre:OP,f:'berrybowl-pia05634',t:'Discovery Served Up in a Bowl',id:'PIA05634',cam:'Panoramic Camera',date:'Sol 48',loc:'“Berry Bowl” rock, Eagle Crater',cr:'NASA/JPL/Cornell',link:NS+'/photojournal/discovery-served-up-in-a-bowl/',w:'The Berry Bowl rock with its hematite-rich spherules, the “blueberries”. The pale circle is where the Rock Abrasion Tool cleaned the surface.'},
  {pre:OP,f:'elcapitan-pia05495',t:'Evidence of a Water-Soaked Past',id:'PIA05495',cam:'Navigation Camera',date:'March 1, 2004 (Sol 36)',loc:'El Capitan outcrop, Eagle Crater',cr:'NASA/JPL',link:NS+'/photojournal/evidence-of-a-water-soaked-past/',w:'Layered El Capitan rock and the holes left by the Rock Abrasion Tool. This is a black-and-white picture.'}],
 note:'Rock facts here come from NASA mission records. The 3D rock is a teaching model, not a scan.'},
'Layered outcrop':{m:'opp',n:3,title:'Layered outcrop discovered',kind:'Sedimentary rock layers · Eagle Crater area',col:0xa4806a,model:'layered',
 info:[['Rock Layers','Sedimentary rock is built up in layers. El Capitan and nearby outcrops show fine layers in the rock.','Some outcrops here are only about 10 centimetres high.'],
  ['Sediment','Sediment is tiny particles of sand, dust or mud. They settle over time and can slowly become rock.'],
  ['Ripple Marks','Some layers have ripple-like patterns, a little like ripples in beach sand. Scientists studied them as clues to how sediment moved long ago, including by flowing water.','Scientists’ interpretation. NASA has not confirmed the origin of every pattern.'],
  ['Sulfates','NASA found sulfate minerals in these rocks. They are linked to water and rock interacting for a long time.','Opportunity used its Pancam, Microscopic Imager and spectrometers to study the rocks.']],
 ph:[{pre:OP,f:'elcapitan-pia05495',t:'Evidence of a Water-Soaked Past',id:'PIA05495',cam:'Navigation Camera',date:'March 1, 2004 (Sol 36)',loc:'El Capitan outcrop, Eagle Crater',cr:'NASA/JPL',link:NS+'/photojournal/evidence-of-a-water-soaked-past/',w:'Layered El Capitan rock and the holes left by the Rock Abrasion Tool. Tap to enlarge and look for fine layers.'},
  {pre:OP,f:'lastchance-pia05625',t:'“Last Chance”: Evidence of Ancient Water Flow',id:'PIA05625',cam:null,date:null,loc:'Eagle Crater area',cr:null,link:PJC('PIA05625'),w:'A rock target that scientists studied for evidence of ancient water flow.',fc:UCT,fcb:'COLOUR NOT CONFIRMED'},
  {pre:OP,f:'slickrock-pia05623',t:'Signs of Soft-Sediment Deformation at “Slickrock”',id:'PIA05623',cam:'Panoramic Camera',date:null,loc:'“Slickrock”, Eagle Crater outcrop',cr:null,link:PJC('PIA05623'),w:'A labelled NASA image of rock units at Slickrock: the lower and upper units are rippled, and the middle unit is planar stratified. The scale bar is 5 cm.'}]},
'Endeavour rim':{m:'opp',n:3,title:'Endeavour crater rim discovered',kind:'Impact breccia and spherules · Matijevic Hill',col:0x7e6a5c,model:'rim',
 info:[['Breccia','Breccia is rock made of broken pieces that have been cemented together. NASA interprets some breccias here as rock thrown out by an impact and later settled together.','NASA interpretation.'],
  ['Kirkwood Spherules','Kirkwood has unusual small round features, shown magnified on the right of the model. They are not the same as the hematite-rich blueberries at Eagle Crater, so they should not be assumed to form the same way.','NASA calls these spheres puzzling.'],
  ['Esperance','At Esperance, Opportunity ground the surface and measured chemical elements. The rock had relatively more aluminium and silica, and less calcium and iron, than other rocks it examined.','Preliminary interpretation: clay minerals made by strong water alteration. This is not a final mineral identification.'],
  ['Water Alteration','Water can slowly change rock chemistry. Opportunity found signs of this kind of change on the Endeavour rim, for example at Esperance.','Scientists’ interpretation.']],
 ph:[{pre:OP,f:'matijevic-pia16704',t:'Diverse Outcrops on “Matijevic Hill”',id:'PIA16704',cam:'Panoramic Camera',date:'November 19 to December 3, 2012',loc:'Matijevic Hill, Endeavour Crater rim',cr:OC,link:NS+'/resource/diverse-outcrops-on-matijevic-hill/',w:'A panorama of Matijevic Hill. NASA’s labels point to outcrops including Copper Cliff, Esperance, Whitewater Lake and Kirkwood.'},
  {pre:OP,f:'esperance-pia17074',t:'“Esperance” Target Examined by Opportunity',id:'PIA17074',cam:'Panoramic Camera',date:'February 23, 2013 (Sol 3230)',loc:'Esperance, Endeavour Crater rim',cr:OC,link:NS+'/photojournal/esperance-target-examined-by-opportunity/',w:'The light-coloured rock target Esperance. Opportunity wore away its surface, then measured its chemical elements.',fc:UCT,fcb:'COLOUR NOT CONFIRMED'},
  {pre:OP,f:'kirkwood-pia16139',t:'Puzzling Little Martian Spheres',id:'PIA16139',cam:'Microscopic Imager',date:'September 6, 2012 (Sol 3064)',loc:'Kirkwood, Matijevic Hill',cr:null,link:NS+'/resource/puzzling-little-martian-spheres-that-dont-taste-like-blueberries/',w:'A close-up of dense round spherules in the Kirkwood rock. This is a black-and-white picture. They differ from the hematite-rich blueberries at Eagle Crater.'},
  {pre:OP,f:'veneer-pia17364',t:'Mineral Detected from Orbit Found in Dark Veneers',id:'PIA17364',cam:'Panoramic Camera',date:'October 11, 2012 (Sol 3098)',loc:'Whitewater Lake rock, Matijevic Hill',cr:OC,link:NS+'/photojournal/mineral-detected-from-orbit-found-in-dark-veneers/',w:'A dark surface layer, called a veneer, that appeared after Opportunity brushed the Whitewater Lake rock.',fc:FCT,fcb:'FALSE COLOUR'},
  {pre:OP,f:'whitewater-pia16445',t:'“Whitewater Lake” Rock Viewed by Opportunity',id:'PIA16445',cam:'Panoramic Camera',date:'September 6, 2012 (Sol 3064)',loc:'Whitewater Lake, Matijevic Hill',cr:'NASA/JPL-Caltech/USGS/Cornell Univ./Arizona State Univ.',link:JP+'/pia16445-whitewater-lake-rock-viewed-by-opportunity/',w:'The Whitewater Lake rock, with a surface rind and different rock textures. NASA used false-colour Pancam images to show differences between materials.',fc:FCT,fcb:'FALSE COLOUR'}],
 note:'Pictures marked FALSE COLOUR use enhanced colours. Do not tell minerals apart by colour alone.'}});
BX.eagle=col=>{const G=new THREE.Group(),C=[0x8a5a44,0xb07a58,0x9a6a4e,0xbb8a68],H=[.34,.28,.32,.26];let y=-.8,top=0;
 H.forEach((h,i)=>{const b=edges(new THREE.Mesh(new THREE.BoxGeometry(2.6,h,1.7),mat(C[i])));b.position.y=y+h/2;y+=h+.02;G.add(b);top=y-.02});
 const sg=new THREE.SphereGeometry(.07,10,8),sm=new THREE.MeshStandardMaterial({color:0x4b4d55,roughness:.55,metalness:.25});let s=11;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;
 for(let i=0;i<34;i++){const x=-1.15+rnd()*2.3,z=-.7+rnd()*1.4;if(Math.hypot(x,z)<.42)continue;const m=new THREE.Mesh(sg,sm);m.position.set(x,top+.05,z);G.add(m)}
 const d=new THREE.Mesh(new THREE.CylinderGeometry(.4,.4,.025,32),new THREE.MeshStandardMaterial({color:0xe2c3a4,roughness:.9}));d.position.set(0,top+.012,0);G.add(d);
 return{G,pins:[[.95,top+.25,.5],[-.9,top+.25,.7],[0,top+.3,0],[-1.3,-.2,.9]]}};
BX.layered=col=>{const G=new THREE.Group(),mt=c=>mat(c);let y=-.8;
 const lo=edges(new THREE.Mesh(new THREE.BoxGeometry(2.6,.5,1.6),mt(0x8a6a56)));lo.position.y=y+.25;G.add(lo);y+=.5;
 const rip=(y0,c)=>{for(let i=0;i<13;i++){const m=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,1.6,10,1,false,0,Math.PI),new THREE.MeshStandardMaterial({color:c,roughness:.9,flatShading:true}));m.rotation.x=Math.PI/2;m.position.set(-1.2+i*.2,y0,0);G.add(m)}};
 rip(y,0x9a7a64);
 [0xb89a80,0xa88a72,0xbb9d84,0xa88a72].forEach((c,i)=>{const b=edges(new THREE.Mesh(new THREE.BoxGeometry(2.6,.14,1.6),mt(c)));b.position.y=y+.07+i*.16;G.add(b)});y+=.62;
 const up=edges(new THREE.Mesh(new THREE.BoxGeometry(2.6,.3,1.6),mt(0x8a6a56)));up.position.y=y+.15;G.add(up);y+=.3;rip(y,0x9a7a64);
 return{G,pins:[[-1.3,-.35,.85],[1.3,-.6,.85],[0,y+.1,.5],[1.3,.2,.85]]}};
BX.rim=col=>{const G=new THREE.Group(),pl=edges(new THREE.Mesh(new THREE.BoxGeometry(3.2,.14,1.7),mat(0x4a3b30)));pl.position.y=-.85;G.add(pl);
 let s=5;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;
 const br=edges(new THREE.Mesh(rock(5,0x6e5a4d,.7),mat(0x6e5a4d)));br.scale.set(.65,.65,.65);br.position.set(-1.0,-.35,0);G.add(br);
 const tones=[0x9a8878,0x4f4540,0xb5a08c,0x6a5a50];
 for(let i=0;i<16;i++){const m=new THREE.Mesh(new THREE.DodecahedronGeometry(.07+rnd()*.07,0),new THREE.MeshStandardMaterial({color:tones[i%4],flatShading:true,roughness:.9}));const a=rnd()*6.28,e=rnd()*1.1;m.position.set(-1.0+Math.cos(a)*.62*Math.cos(e),-.35+Math.sin(e)*.5,Math.sin(a)*.62*Math.cos(e));m.rotation.set(rnd()*3,rnd()*3,0);G.add(m)}
 const es=edges(new THREE.Mesh(new THREE.BoxGeometry(.9,.2,.7),mat(0xd5c3ae)));es.position.set(.1,-.68,.1);es.rotation.y=.4;G.add(es);
 const ds=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,.12,32),mat(0x5a5048));ds.position.set(1.15,-.7,0);G.add(ds);
 const sg=new THREE.SphereGeometry(.065,10,8),sm=new THREE.MeshStandardMaterial({color:0x8a8a90,roughness:.5,metalness:.2});
 for(let i=0;i<40;i++){const a=rnd()*6.28,r=Math.sqrt(rnd())*.52,m=new THREE.Mesh(sg,sm);m.position.set(1.15+Math.cos(a)*r,-.6,Math.sin(a)*r);G.add(m)}
 return{G,pins:[[-1.0,.1,.7],[1.15,-.3,.55],[.1,-.35,.7],[-.1,-.7,.95]]}};
/* ---- Spirit: three discovery tasks (same engine and look) ---- */
const SP='spi-',SC='NASA/JPL/Cornell',SCC='NASA/JPL-Caltech/Cornell',PS=s=>NS+'/photojournal/'+s+'/';
const FCW='False-colour image: colours are enhanced. They are not the rock’s natural appearance. Do not tell minerals apart by colour alone.';
Object.assign(D,{
'Adirondack':{m:'spi',n:3,title:'Adirondack rock discovered',kind:'First rock target · Gusev Crater',col:0xb28a62,model:'adiron',
 vars:['1 · Original rock','2 · Brushed surface','3 · Ground surface'],
 vinfo:['Dust covers the rock, so Spirit cannot see its true surface. (Compare the “Dirty Adirondack” photo.)','Spirit’s brush sweeps the dust away, so the rock’s own surface can be seen.','The grinder wears away the surface and shows fresh rock inside. The hole is 45.5 mm wide and 2.65 mm deep. Depth is not to scale in the model.'],
 info:[['Rock Surface','Adirondack was the first rock Spirit chose to study in Gusev Crater. NASA describes it as a basalt-type volcanic rock.'],
  ['Rock Abrasion Tool','The Rock Abrasion Tool (RAT) is a small grinder with a brush. Spirit brushed away dust, then ground into the rock. The hole was 45.5 mm wide and 2.65 mm deep.'],
  ['Inner Rock','Grinding showed fresh rock that dust had hidden. Dark grains can be seen inside. Scientists interpret some of them as olivine crystals.','Scientists’ interpretation.'],
  ['Microscopic Imager','This is Spirit’s close-up camera. It photographed the ground area, about 3 cm across, to show tiny rock details.']],
 ph:[{pre:SP,f:'adiron-pia05219',t:'Dirty Adirondack',id:'PIA05219',cam:'Panoramic Camera',date:'Released February 6, 2004 (acquisition date not given)',loc:'Adirondack, Gusev Crater',cr:SC,link:PS('dirty-adirondack'),w:'Before Cleaning: Adirondack covered in dust.'},
  {pre:SP,f:'adiron-pia05220',t:'Back in Action',id:'PIA05220',cam:'Panoramic Camera',date:'Released February 6, 2004 (acquisition date not given)',loc:'Adirondack, Gusev Crater',cr:SC,link:PS('back-in-action'),w:'Spirit’s robotic arm and brush close to Adirondack, getting ready to clean the rock.'},
  {pre:SP,f:'adiron-pia05239',t:'Spirit’s First Grinding of a Rock on Mars',id:'PIA05239',cam:'Panoramic Camera',date:'February 6, 2004 (Sol 34)',loc:'Adirondack, Gusev Crater',cr:SC,link:PS('spirits-first-grinding-of-a-rock-on-mars'),w:'The round hole ground by the RAT in Adirondack: 45.5 mm wide, 2.65 mm deep. This is a black-and-white picture.'},
  {pre:SP,f:'adiron-pia05241',t:'Inner Adirondack',id:'PIA05241',cam:'Microscopic Imager',date:'February 5, 2004 (Sol 33)',loc:'Adirondack, Gusev Crater',cr:'NASA/JPL/Cornell/USGS',link:PS('inner-adirondack'),w:'The inside of Adirondack after grinding, seen by the Microscopic Imager. The area is about 3 cm across.'},
  {pre:SP,f:'adiron-pia05278',t:'Adirondack Post-Drill (3-D)',id:'PIA05278',cam:'Microscopic Imager',date:'February 5, 2004 (Sol 33)',loc:'Adirondack, Gusev Crater',cr:'NASA/JPL/Cornell/USGS/Texas A&M',link:PS('adirondack-post-drill-3-d'),w:'A close-up of the ground area, shown in NASA’s 3-D format.',fc:'This is a NASA 3-D anaglyph. It needs red-blue 3-D glasses. It is not a model you can turn.',fcb:'3-D ANAGLYPH',fcl:'Image type'}]},
'Columbia Hills':{m:'spi',n:3,title:'Columbia Hills rocks discovered',kind:'A region of Gusev Crater, not one rock',col:0x9a7a62,model:'hills',
 vars:['Clovis','Wishstone','Peace','Watchtower'],
 vinfo:['Clovis: layered, flaky slabs. NASA saw signs of chemical alteration. Its APXS measurements showed more sulfur, bromine and chlorine than volcanic basalts studied earlier.','Wishstone: a pointed rock with unusual chemistry. NASA found relatively high phosphorus and titanium compared with rocks studied earlier.','Peace: a sulfur-rich rock. Its texture is soft, lumpy (nodular) and layered.','Watchtower: another rock type from Columbia Hills, with its own chemistry and alteration history. The NASA material supplied has no photo or numbers for it, so this shape is only a placeholder.'],
 info:[['Rock Composition','Columbia Hills is a whole region, not one rock. Its rocks differ in chemistry, so each one tells its own story.'],
  ['Water Alteration','Some rocks here show chemical changes that scientists link to water. Clovis is one example.','Scientists’ interpretation.'],
  ['Sulfur','Sulfur-bearing minerals can form when water and rock interact. Clovis had more sulfur than volcanic basalts studied earlier, and Peace is a sulfur-rich rock.','Scientists’ interpretation.'],
  ['Phosphorus','Wishstone had relatively high phosphorus compared with rocks studied earlier. Living things on Earth need phosphorus, but a rock containing it does not mean life existed.']],
 ph:[{pre:SP,f:'hills-pia06006',t:'The Columbia Hills in Color',id:'PIA06006',cam:'Panoramic Camera',date:'May 20, 2004 (Sol 135)',loc:'Husband Hill and West Spur, Columbia Hills',cr:SCC,link:PS('the-columbia-hills-in-color'),w:'Mission Background: the hills Spirit explored. Husband Hill is about 90 metres high.'},
  {pre:SP,f:'hills-pia06960',t:'True 3-D View of Columbia Hills from an Angle',id:'PIA06960',cam:'Panoramic Camera',date:'August 9 to 19, 2004 (Sols 213–223)',loc:'Columbia Hills',cr:SC,link:JP+'/pia06960-true-3-d-view-of-columbia-hills-from-an-angle/',w:'A panorama made from 188 pictures. It shows the land, not a 3D scan of one rock.'},
  {pre:SP,f:'hills-pia06772',t:'Clovis in Color',id:'PIA06772',cam:'Panoramic Camera',date:'August 13, 2004 (Sol 217)',loc:'Clovis, Columbia Hills',cr:SC,link:PS('clovis-in-color'),w:'The rock Clovis. APXS found more sulfur, bromine and chlorine inside it than in volcanic basalts studied earlier.'},
  {pre:SP,f:'hills-pia07439',t:'Sulfur-Rich Rocks and Dirt',id:'PIA07439',cam:'Panoramic Camera',date:'January 27, 2005 (Sol 381)',loc:'Columbia Hills',cr:SC,link:PS('sulfur-rich-rocks-and-dirt-true-color'),w:'Rocks and soil that NASA found rich in sulfur. The RAT ground a hole about 4.5 cm wide here, and APXS measured high sulfur.'},
  {pre:SP,f:'hills-pia07191',t:'Spirit View of Wishstone (False Color)',id:'PIA07191',cam:'Panoramic Camera, APXS and Mini-TES data',date:'Released January 3, 2005 (acquisition date not given)',loc:'Wishstone, Columbia Hills',cr:SC,link:PS('spirit-view-of-wishstone-false-color'),w:'The rock Wishstone. NASA found its chemistry differs from earlier rocks, with relatively high phosphorus and titanium.',fc:FCW,fcb:'FALSE COLOUR'}],
 note:'Click a rock name on the model to switch. Rock shapes come from the supplied NASA photos, except Watchtower (placeholder).'},
'Bright soil':{m:'spi',n:3,title:'Bright silica-rich soil discovered',kind:'Gertrude Weise soil · Columbia Hills, near Home Plate',col:0xa8553a,model:'soil',
 info:[['Bright Soil','Spirit uncovered unusually bright, pale soil near Home Plate in Columbia Hills. It was named Gertrude Weise.'],
  ['Silica','Silica is silicon dioxide, the same material as quartz and sand. NASA found Gertrude Weise is about 90% silica.','This number is only for Gertrude Weise, not for other bright soils.'],
  ['Rover Wheel','One of Spirit’s wheels no longer worked properly, so it dragged across the ground. It scraped off the red surface and showed the bright soil underneath by accident.'],
  ['APXS','APXS is an instrument that measures which chemical elements a material contains. Together with the Mini-TES infrared instrument, it showed how silica-rich this soil is.'],
  ['Ancient Hot Spring','One possible explanation is hot water, like a hot spring, long ago. Hot water can leave silica behind.','A possible explanation, not confirmed.'],
  ['Fumarole','Another possible explanation is a fumarole: a vent where volcanic steam escapes. Steam can also change rock and soil.','A possible explanation, not confirmed. NASA has not confirmed which one is right.']],
 ph:[{pre:SP,f:'soil-pia09491',t:'Silica-Rich Soil Found by Spirit',id:'PIA09491',cam:'Panoramic Camera',date:'May 6, 2007 (Sol 1187)',loc:'Gertrude Weise soil, Columbia Hills',cr:SC,link:PS('silica-rich-soil-found-by-spirit'),w:'Main photo: the bright, silica-rich soil of Gertrude Weise next to the red Martian ground.'},
  {pre:SP,f:'soil-pia11758',t:'Rover’s Wheel Churns Up Bright Martian Soil',id:'PIA11758',cam:'Panoramic Camera',date:'May 21, 2007 (Sol 1202)',loc:'Gertrude Weise soil, Columbia Hills',cr:SCC,link:PS('rovers-wheel-churns-up-bright-martian-soil'),w:'The wheel furrow and the pale silica-rich soil. Zoom in to see the contrast.'},
  {pre:SP,f:'soil-pia08012',t:'Bright Soil Near McCool',id:'PIA08012',cam:'Navigation Camera',date:'March 21, 2006 (Sol 787)',loc:'Near McCool Hill',cr:'NASA/JPL-Caltech',link:PS('bright-soil-near-mccool-salty-deja-vu'),w:'A DIFFERENT bright-soil discovery. It is not Gertrude Weise, so its chemistry should not be mixed up with it.',fc:UCT,fcb:'COLOUR NOT CONFIRMED'}],
 note:'Other bright soils are a different story. NASA records say soils such as Arad and Paso Robles are mainly iron-rich sulfates. The 90% silica figure belongs only to Gertrude Weise.'}});
const gcol=c=>new THREE.MeshStandardMaterial({color:c,roughness:.9,flatShading:true});
BX.adiron=col=>{const G=new THREE.Group(),gr=new THREE.Mesh(new THREE.BoxGeometry(3.2,.1,2.2),gcol(0x7a4a36));gr.position.y=-.47;G.add(gr);
 const rk=edges(new THREE.Mesh(new THREE.CylinderGeometry(.8,1.5,.8,4,1),mat(col)));rk.rotation.y=Math.PI/4;G.add(rk);
 const br=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.03,36),new THREE.MeshStandardMaterial({color:0x6b645e,roughness:.9}));br.position.y=.41;G.add(br);
 const gd=new THREE.Group(),rim=new THREE.Mesh(new THREE.CylinderGeometry(.52,.52,.05,36),new THREE.MeshStandardMaterial({color:0x2b2926}));rim.position.y=.42;gd.add(rim);
 const inn=new THREE.Mesh(new THREE.CylinderGeometry(.46,.46,.04,36),new THREE.MeshStandardMaterial({color:0x7d7e84,roughness:.8}));inn.position.y=.44;gd.add(inn);
 let s=3;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;for(let i=0;i<10;i++){const a=rnd()*6.28,r=Math.sqrt(rnd())*.4,m=new THREE.Mesh(new THREE.SphereGeometry(.025,6,5),new THREE.MeshBasicMaterial({color:0x1d1d20}));m.position.set(Math.cos(a)*r,.47,Math.sin(a)*r);gd.add(m)}
 G.add(gd);
 const set=i=>{br.visible=i===1;gd.visible=i===2;rk.material.color.setHex(i===0?0xb28a62:0xa88260)};
 set(0);G.scale.setScalar(1.05);return{G,set,pins:[[-1.2,.15,.8],[.1,.95,.2],[.55,.6,.5],[1.35,.8,.2]]}};
BX.hills=col=>{const G=new THREE.Group(),base=new THREE.Mesh(new THREE.BoxGeometry(3.2,.1,2.2),gcol(0x7a4a36));base.position.y=-.8;G.add(base);const R=[];
 const clo=new THREE.Group();[[1.7,.16,1.2,0],[1.4,.14,1,.17],[1.1,.14,.8,.33],[.8,.12,.6,.48]].forEach(([w,h,d,y],i)=>{const b=edges(new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(i%2?0xc07844:0xb8693a)));b.position.set(i*.05-.1,-.72+y+h/2,0);b.rotation.y=i*.12;clo.add(b)});
 const ho=new THREE.Mesh(new THREE.CylinderGeometry(.14,.14,.04,20),new THREE.MeshBasicMaterial({color:0x1d140f}));ho.position.set(.15,-.2,0);clo.add(ho);R.push(clo);
 const wis=edges(new THREE.Mesh(new THREE.ConeGeometry(1.1,1.3,4,1),mat(0x6b5f5a)));wis.position.y=-.1;wis.rotation.y=.5;const wg=new THREE.Group();wg.add(wis);R.push(wg);
 const pea=new THREE.Group();[0,1,2].forEach(l=>{const b=edges(new THREE.Mesh(new THREE.BoxGeometry(1.8-l*.25,.18,1.1),mat(0x9a8c80)));b.position.y=-.7+l*.3;pea.add(b);for(let k=0;k<7;k++){const n=new THREE.Mesh(new THREE.SphereGeometry(.11,10,8),new THREE.MeshStandardMaterial({color:0xcfc6b8,roughness:1}));n.position.set(-.7+k*.23+l*.1,-.58+l*.3,((k%3)-1)*.28);pea.add(n)}});R.push(pea);
 const wat=edges(new THREE.Mesh(rock(8,0x7a7a80,.8),mat(0x7a7a80)));wat.scale.set(.8,.8,.8);wat.position.y=-.3;const wtg=new THREE.Group();wtg.add(wat);R.push(wtg);
 R.forEach(r=>{G.add(r);r.visible=false});const set=i=>R.forEach((r,k)=>r.visible=k===i);set(0);
 return{G,set,pins:[[-1.3,.35,.7],[1.3,.2,.7],[0,.9,.3],[1.15,-.5,.9]]}};
BX.soil=col=>{const G=new THREE.Group(),red=mat(col);
 const L=edges(new THREE.Mesh(new THREE.BoxGeometry(1.05,.3,1.9),red));L.position.set(-.875,-.65,0);G.add(L);
 const Rr=edges(new THREE.Mesh(new THREE.BoxGeometry(1.05,.3,1.9),red));Rr.position.set(.875,-.65,0);G.add(Rr);
 const br=new THREE.Mesh(new THREE.BoxGeometry(.7,.18,1.9),new THREE.MeshStandardMaterial({color:0xe9dfce,roughness:.95,transparent:true,opacity:.95}));br.position.set(0,-.71,0);G.add(br);
 for(let i=0;i<6;i++){const t=new THREE.Mesh(new THREE.BoxGeometry(.6,.03,.07),new THREE.MeshStandardMaterial({color:0xcfc3b0}));t.position.set(0,-.61,-.8+i*.32);G.add(t)}
 const wh=edges(new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.3,24),new THREE.MeshStandardMaterial({color:0x9aa3b0,transparent:true,opacity:.45})),0x7cc4ff);wh.rotation.z=Math.PI/2;wh.position.set(0,-.3,-.75);G.add(wh);
 return{G,pins:[[0,-.5,.6],[.45,-.55,.1],[0,.1,-.75],[1.35,-.3,.8],[-1.3,-.3,.5],[-.9,-.3,-.7]]}};
/* ---- InSight: three discovery tasks (same engine, same look as the other missions). "Flat spot A/B/C" are game task labels, not NASA place names. ---- */
const IP='ins-',IC='NASA/JPL-Caltech',IGAL='https://photojournal.jpl.nasa.gov/feature/mars?subselect=Spacecraft:InSight+Mars+Lander:',JPI=s=>'https://www.jpl.nasa.gov/images/'+s+'/',IL='InSight lander workspace, Elysium Planitia, Mars',IDC='Instrument Deployment Camera (IDC)';
Object.assign(D,{
'Flat spot A':{m:'ins',n:3,title:'Landing workspace discovered',kind:'Game task “Flat spot A” · Landing workspace',col:0xa8694a,model:'insws',sim:1,
 done:'You explored the ground where InSight worked and why a safe, flat spot matters.',
 info:[['Landing Workspace · Where did InSight work?','InSight landed in Elysium Planitia on November 26, 2018. It could not drive. It worked on the ground just south of the lander, within reach of its robotic arm. NASA’s mosaic of this workspace is roughly 4 metres by 2 metres.'],
  ['Martian Soil · What is the surface made of?','Fine, reddish-brown dusty soil with many small pebbles and a few small rocks. In the photos the ground looks fairly flat, with no big rocks. InSight did not collect soil or rock samples.'],
  ['Robotic Arm · How did InSight work with the ground?','The arm carries a camera (IDC). It photographed the ground piece by piece to make a mosaic. Later the arm lifted instruments off the lander and set them down on the ground.'],
  ['Surface Assessment · Why was a good spot important?','The instruments need level ground with no big rocks. Scientists studied the photos first, to choose safe places before the arm put anything down.']],
 ph:[{pre:IP,f:'workspace-pia22874',t:'Mosaic of InSight’s Workspace',id:'PIA22874',cam:IDC,date:'NASA release date: December 11, 2018 (acquisition date not stated)',loc:IL,cr:IC,link:IGAL,ll:'NASA Photojournal: InSight gallery',link2:PJ('PIA22874'),l2l:'NASA Photojournal PIA22874',w:'The main reference for the 3D terrain. It shows the real working area in front of the lander. NASA says it is made from 52 images.'},
  {pre:IP,f:'panorama-pia23140',t:'InSight Sol 14 Panorama',id:'PIA23140',cam:IDC,date:'December 9, 2018 (Sol 14)',loc:IL,cr:IC,link:JPI('pia23140-insight-sol-14-panorama'),w:'A 290-degree view of the landing site. It shows the land and the horizon around InSight.'},
  {pre:IP,f:'arm-soil-pia22872',t:'InSight’s Robotic Arm Over Martian Soil',id:'PIA22872',cam:IDC,date:'December 4, 2018 (Sol 8)',loc:IL,cr:IC,link:JPI('pia22872-insights-robotic-arm-over-martian-soil'),w:'A close-up of the soil surface with the robotic arm above it. It shows how the arm and the ground are related.'}],
 note:'Flat Spot A, B and C are this game’s task labels. They are not official NASA place names.'},
'Flat spot B':{m:'ins',n:3,title:'SEIS seismometer discovered',kind:'Game task “Flat spot B” · SEIS placement area',col:0xa8694a,model:'insseis',sim:1,
 vars:['1 · Before placement','2 · Placed with shield'],
 vinfo:['The robotic arm holds SEIS above the ground and lowers it to the surface. (The yellow ring shows where it will touch down.)','SEIS rests on the ground. The Wind and Thermal Shield covers it. Press “Run simple simulation” to see vibrations travel through the ground.'],
 done:'You discovered how InSight listened for marsquakes with SEIS.',
 info:[['SEIS · What is a seismometer?','A seismometer is a very sensitive detector of ground shaking. SEIS (Seismic Experiment for Interior Structure) is InSight’s seismometer. The robotic arm placed it right on the Martian surface.'],
  ['Marsquakes · What causes earthquakes on Mars?','A marsquake is shaking of the ground. It happens when rock under stress cracks or slips. InSight recorded more than 1,300 marsquakes.'],
  ['Seismic Waves · How do vibrations travel through Mars?','A quake sends waves through the rock. Their speed and path change with what they pass through. By studying them, scientists learned about the layers inside Mars.','The animation is a teaching picture, not real data.'],
  ['Wind and Thermal Shield · Why does SEIS need protection?','SEIS is so sensitive that wind and temperature changes could disturb it. After SEIS was placed, the arm covered it with a Wind and Thermal Shield.'],
  ['Ground Contact · Why must it rest steadily?','SEIS must sit firmly on the ground so it feels the ground’s own movement, not its own wobble. The team checked the spot with images before the arm put SEIS down.']],
 ph:[{pre:IP,f:'seis-ground-pia22977',t:'Putting SEIS on the Ground',id:'PIA22977',cam:IDC,date:'December 19, 2018',loc:IL,cr:IC,link:JPI('pia22977-putting-seis-on-the-ground'),w:'The main reference for the 3D model. The robotic arm is placing the copper-coloured SEIS on the Martian surface.'},
  {pre:IP,f:'seis-deployed-pia22956',t:'SEIS Deployed on Mars',id:'PIA22956',cam:null,date:null,loc:IL,cr:IC,link:IGAL,ll:'NASA Photojournal: InSight gallery',link2:PJ('PIA22956'),l2l:'NASA Photojournal PIA22956',w:'SEIS after it was placed on the surface. It shows the finished placement.'},
  {pre:IP,f:'seis-shield-pia22959',t:'InSight Deploys Its Wind and Thermal Shield',id:'PIA22959',cam:'Instrument Context Camera (ICC)',date:null,loc:IL,cr:IC,link:IGAL,ll:'NASA Photojournal: InSight gallery',link2:PJ('PIA22959'),l2l:'NASA Photojournal PIA22959',w:'The arm putting the protective Wind and Thermal Shield over SEIS.'}],
 note:'SEIS is a scientific instrument, not a rock or soil sample.'},
'Flat spot C':{m:'ins',n:3,title:'HP³ and the Mole discovered',kind:'Game task “Flat spot C” · HP³ placement area',col:0xa8694a,model:'inshp3',
 vars:['1 · HP³ on the surface','2 · Mole tries to dig','3 · Final outcome'],
 vinfo:['The robotic arm placed HP³ on the Martian surface on February 12, 2019. The Mole starts inside its housing.','The Mole hammers itself against the soil, but it needs friction from the soil to go deeper. In this teaching animation it only makes a little progress.','On January 9, 2021, NASA ended the effort. The Mole did not reach its planned depth of about 3 to 5 metres. The underground part is an educational reconstruction, not to scale.'],
 done:'You learned what HP³ was built to do, and why the Mole did not reach its planned depth.',
 info:[['HP³ · What was it designed to study?','HP³ means Heat Flow and Physical Properties Package. It was built to study how heat flows out from inside Mars.'],
  ['Mole · How does the self-hammering probe work?','The Mole is a spike-shaped probe with a hammer inside. It was designed to hammer itself down into the ground, pulling a cable behind it. It needs friction from the soil to dig.'],
  ['Underground · Why look below the surface?','Underground temperatures cannot be measured from above. The Mole was planned to go about 3 to 5 metres down.','The underground picture is an educational reconstruction, not a NASA photo.'],
  ['Heat Flow · What can underground temperatures tell us?','Heat flows out of a planet’s interior. Measuring it shows how warm the inside of Mars is, which helps scientists study how the planet formed and changed. The Mole could not dig deep enough to finish this measurement as planned.'],
  ['Mission Result · Why did the Mole stop?','The soil clumped together and did not give the Mole enough friction. The team tried for almost two years, even pressing on the Mole with the arm’s scoop. On January 9, 2021, 500 more hammer strokes made no progress, so NASA ended the effort. The Mole did not reach its planned depth.']],
 ph:[{pre:IP,f:'hp3-surface-pia23046',t:'HP3 on the Martian Surface',id:'PIA23046',cam:IDC,date:'HP³ placed February 12, 2019. This photo is stamped Sol 83, February 20, 2019.',loc:IL,cr:IC,link:PS('hp3-on-the-martian-surface'),w:'The main reference for the 3D model. HP³ sits on the Martian surface, which shows its real size and position on the soil.'},
  {pre:IP,f:'mole-reveal-pia24098',t:'InSight’s Arm Pulls Back, Revealing the Mole',id:'PIA24098',cam:IDC,date:'October 3, 2020',loc:IL,cr:IC,link:PS('insights-arm-pulls-back-revealing-the-mole'),w:'The arm moves away and shows the place where the Mole was trying to dig into the soil.'},
  {pre:IP,f:'mole-rest-pia24263',t:'InSight’s Mole Comes to Rest',id:'PIA24263',cam:null,date:'January 9, 2021 (Sol 754). NASA published it January 14, 2021.',loc:IL,cr:IC,link:PS('insights-mole-comes-to-rest'),w:'The Mole after the team ended its efforts. This shows the real final result: the Mole did not reach its planned depth.'}],
 note:'The underground cross-section is an educational reconstruction, not an actual NASA photograph of underground Mars. Depths are not to scale. HP³ is a different instrument from SEIS.'}});
const rnd=s=>()=>(s=(s*16807)%2147483647)/2147483647,IH=(x,z,s)=>.035*Math.sin(x*2.3+s)*Math.cos(z*1.9+s*1.7)+.02*Math.sin(x*5.1+z*4.3+s*2);
function ground(w,d,seed,col,amp){const g=new THREE.PlaneGeometry(w,d,40,30);g.rotateX(-Math.PI/2);const p=g.attributes.position;for(let i=0;i<p.count;i++)p.setY(i,IH(p.getX(i),p.getZ(i),seed)*(amp||1));g.computeVertexNormals();
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:1,flatShading:true,transparent:true,opacity:.92}));m.add(new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.07})));return m}
const slab=(w,d,h,y,c)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c));b.position.y=y;return edges(b)};
function pebbles(G,n,w,d,seed,col,big){const r=rnd(seed);for(let i=0;i<n;i++){const x=(r()-.5)*(w-.2),z=(r()-.5)*(d-.2),s=i<big?.055+r()*.045:.018+r()*.03,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(col).multiplyScalar(.65+r()*.5),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(x,IH(x,z,seed)+s*.35,z);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}}
function label(txt,w,h,fs){const c=document.createElement('canvas');c.width=1024;c.height=Math.round(1024*h/w);const x=c.getContext('2d');x.fillStyle='rgba(6,10,18,.78)';x.fillRect(0,0,c.width,c.height);x.strokeStyle='rgba(124,196,255,.6)';x.lineWidth=3;x.strokeRect(2,2,c.width-4,c.height-4);x.fillStyle='#e8f4ff';x.font='600 '+fs+'px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,c.width/2,c.height/2);
 return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,side:THREE.DoubleSide,depthWrite:false}))}
const ease=x=>x*x*(3-2*x),dashed=(pts,c,dash,gap)=>{const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts.map(p=>new THREE.Vector3(...p))),new THREE.LineDashedMaterial({color:c,dashSize:dash,gapSize:gap,transparent:true,opacity:.9}));l.computeLineDistances();return l};
/* Task A: terrain patch + arm + camera-scan simulation (mosaic of photos) */
BX.insws=col=>{const G=new THREE.Group(),W=3.4,Dp=2.5;G.add(ground(W,Dp,2,col));G.add(slab(W,Dp,.28,-.16,0x6a412f));pebbles(G,80,W,Dp,5,col,8);
 const ol=dashed([[-1.25,.08,-.25],[1.25,.08,-.25],[1.25,.08,1.05],[-1.25,.08,1.05],[-1.25,.08,-.25]],0xf7c548,.12,.07);G.add(ol);
 const arm=new THREE.Group(),wh=new THREE.MeshStandardMaterial({color:0xd8d0c0,roughness:.7,transparent:true,opacity:.9}),dk=new THREE.MeshStandardMaterial({color:0x6d675f,roughness:.8});
 const fa=new THREE.Mesh(new THREE.CylinderGeometry(.15,.19,1,20),wh);fa.position.y=.5;arm.add(fa);const hub=edges(new THREE.Mesh(new THREE.DodecahedronGeometry(.2,0),dk));hub.position.y=-.02;arm.add(hub);
 for(let k=0;k<5;k++){const a=k*Math.PI*2/5,c=new THREE.Mesh(new THREE.BoxGeometry(.06,.2,.04),dk);c.position.set(Math.cos(a)*.17,-.2,Math.sin(a)*.17);c.rotation.y=-a;arm.add(c)}
 arm.position.set(-.55,.5,-.45);arm.rotation.z=.35;arm.rotation.x=-.25;G.add(arm);
 const scan=new THREE.Mesh(new THREE.PlaneGeometry(.06,Dp),new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:0,side:2,depthWrite:false}));scan.rotation.x=-Math.PI/2;scan.position.y=.1;G.add(scan);
 const sim={on:false};const upd=t=>{arm.position.y=.5+.03*Math.sin(t*1.3);if(sim.on){scan.position.x=-W/2+((t*.3)%1)*W;scan.material.opacity=.6;ol.material.opacity=.6+.4*Math.sin(t*6)}else{scan.material.opacity=0;ol.material.opacity=.9}};
 return{G,sim,upd,pins:[[0,.14,.4],[1.1,.1,-.7],[-.55,.62,-.45],[-1.25,.14,1.05]]}};
/* Task B: SEIS before / after placement, shield, tether, simple wave simulation */
BX.insseis=col=>{const G=new THREE.Group(),W=3.4,Dp=2.5;G.add(ground(W,Dp,7,col,.8));G.add(slab(W,Dp,.28,-.16,0x6a412f));pebbles(G,50,W,Dp,11,col,5);
 const S=new THREE.Group(),cu=new THREE.MeshStandardMaterial({color:0xd9825a,roughness:.55,metalness:.35,transparent:true,opacity:.92}),dk=new THREE.MeshStandardMaterial({color:0x2c2e33,roughness:.7});
 const body=edges(new THREE.Mesh(new THREE.CylinderGeometry(.62,.78,.5,6),cu),0xffd0b0);body.position.y=.25;S.add(body);
 const top=new THREE.Mesh(new THREE.CylinderGeometry(.34,.34,.04,6),new THREE.MeshStandardMaterial({color:0xf0b090,roughness:.5}));top.position.y=.52;S.add(top);
 const stem=new THREE.Group(),st=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.4,10),dk);st.position.y=.74;stem.add(st);S.add(stem);
 const A=new THREE.Group(),hub=edges(new THREE.Mesh(new THREE.DodecahedronGeometry(.17,0),dk));hub.position.y=1;A.add(hub);for(let k=0;k<3;k++){const a=k*Math.PI*2/3,c=new THREE.Mesh(new THREE.BoxGeometry(.05,.22,.03),dk);c.position.set(Math.cos(a)*.1,.86,Math.sin(a)*.1);c.rotation.y=-a;A.add(c)}
 const fa=new THREE.Mesh(new THREE.CylinderGeometry(.12,.15,.8,18),new THREE.MeshStandardMaterial({color:0xd8d0c0,roughness:.7,transparent:true,opacity:.9}));fa.position.set(.12,1.4,0);fa.rotation.z=-.2;A.add(fa);S.add(A);
 const Sh=new THREE.Group(),dome=new THREE.Mesh(new THREE.SphereGeometry(1.05,36,16,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xe4e8ee,roughness:.35,metalness:.4,transparent:true,opacity:.62}));dome.scale.y=.7;dome.add(new THREE.LineSegments(new THREE.EdgesGeometry(dome.geometry,40),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.25})));Sh.add(dome);
 const rim=new THREE.Mesh(new THREE.CylinderGeometry(1.08,1.08,.08,40),new THREE.MeshStandardMaterial({color:0xb98a5c,roughness:.6,metalness:.3}));rim.position.y=.04;Sh.add(rim);G.add(Sh);
 const tether=new THREE.Mesh(new THREE.BoxGeometry(.14,.014,.6),new THREE.MeshStandardMaterial({color:0xb9b2a0,roughness:.8}));tether.position.set(0,.03,1);G.add(tether);
 const tg=new THREE.Mesh(new THREE.RingGeometry(.8,.88,6),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.8,side:2}));tg.rotation.x=-Math.PI/2;tg.position.y=.03;G.add(tg);G.add(S);
 const P0=[-1.25,.05,-.7],rings=[0,1,2].map(i=>{const rg=new THREE.RingGeometry(.93,1,72);rg.rotateX(-Math.PI/2);const m=new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:0xffd27a,transparent:true,opacity:0,side:2,depthWrite:false}));m.position.set(...P0);G.add(m);return m});
 const src=new THREE.Mesh(new THREE.SphereGeometry(.07,12,10),new THREE.MeshBasicMaterial({color:0xffd27a,transparent:true,opacity:0}));src.position.set(...P0);G.add(src);
 let st_=0;const sim={on:false};
 const set=i=>{st_=i;A.visible=i===0;stem.visible=i===0;Sh.visible=i===1;tg.visible=i===0};
 const upd=t=>{let lift=0;if(st_===0){const u=(t%7)/7;lift=u<.15?.55:u<.6?.55*(1-ease((u-.15)/.45)):u<.8?0:.55*ease((u-.8)/.2);tg.material.opacity=.45+.45*Math.sin(t*4)}S.position.y=lift;S.position.x=0;
  rings.forEach((m,i)=>{if(!sim.on){m.material.opacity=0;return}const u=((t*.35)+i/3)%1;m.scale.set(.1+u*3,1,.1+u*3);m.material.opacity=.8*(1-u)});src.material.opacity=sim.on?.9:0;
  if(sim.on&&st_===1){const u=(t*.35)%1,d=Math.hypot(P0[0],P0[2])/3.1;S.position.x=Math.abs(u-d)<.05?.012*Math.sin(t*60):0}};
 set(0);return{G,sim,upd,set,pins:[[-.35,.62,.35],[-1.25,.14,-.7],[-.62,.12,-.35],[.65,.62,.2],[.55,.06,.85]]}};
/* Task C: HP3 housing, Mole, educational underground section, three outcome states */
BX.inshp3=col=>{const G=new THREE.Group(),H=new THREE.Group(),oy=.7,BW=3.2,BD=1.5,BH=1.9;H.position.y=oy;G.add(H);
 const blk=edges(new THREE.Mesh(new THREE.BoxGeometry(BW,BH,BD),new THREE.MeshStandardMaterial({color:0x8a5a42,roughness:1,transparent:true,opacity:.42,flatShading:true})),0x7cc4ff);blk.position.y=-BH/2-.02;H.add(blk);
 H.add(ground(BW,BD,4,col,.7));pebbles(H,26,BW,BD,9,col,3);
 const hs=new THREE.Mesh(new THREE.BoxGeometry(.8,.62,.55),new THREE.MeshStandardMaterial({color:0x2a2d32,roughness:.7,transparent:true,opacity:.5}));hs.position.y=.31;H.add(edges(hs));
 const rib=new THREE.Mesh(new THREE.BoxGeometry(.18,.012,.45),new THREE.MeshStandardMaterial({color:0xb59a82,roughness:.9}));rib.position.set(0,.03,-.52);H.add(rib);
 const M=new THREE.Group(),met=new THREE.MeshStandardMaterial({color:0xc9cdd5,metalness:.6,roughness:.35}),cy=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.27,14),met);cy.position.y=.225;M.add(cy);const tip=new THREE.Mesh(new THREE.ConeGeometry(.05,.09,14),met);tip.rotation.x=Math.PI;tip.position.y=.045;M.add(tip);H.add(M);
 const pit=new THREE.Mesh(new THREE.CircleGeometry(.2,24),new THREE.MeshBasicMaterial({color:0x2a1a12,transparent:true,opacity:.8}));pit.rotation.x=-Math.PI/2;pit.position.y=.045;H.add(pit);
 const plan=dashed([[0,0,0],[0,-1.75,0]],0xf7c548,.1,.07);H.add(plan);const done=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),new THREE.Vector3(0,-1,0)]),new THREE.LineBasicMaterial({color:0x7cffb0}));H.add(done);
 const tg=new THREE.Mesh(new THREE.RingGeometry(.1,.15,24),new THREE.MeshBasicMaterial({color:0xf7c548,side:2}));tg.position.set(0,-1.75,0);H.add(tg);
 const l1=label('Educational reconstruction · not a NASA photo · not to scale',2.6,.26,40);l1.position.set(0,-1.62,BD/2+.01);H.add(l1);
 const l2=label('Planned depth: about 3 to 5 m',1.5,.22,40);l2.position.set(.9,-1.35,.2);l2.rotation.y=0;H.add(l2);
 let st=0;const set=i=>{st=i;pit.visible=i>0;M.rotation.set(0,0,0)};
 const upd=t=>{let d=0;if(st===1){d=.07+.07*Math.max(0,Math.sin(t*5));M.position.y=-d;M.position.x=.01*Math.sin(t*40)}else if(st===2){d=.36;M.position.y=-d;M.position.x=0}else{M.position.y=0;M.position.x=0}done.scale.y=Math.max(.001,d);done.visible=d>0};
 set(0);return{G,set,upd,pins:[[-.35,.62+oy,.3],[.1,.35+oy,.3],[1.35,-.9+oy,.75],[.3,-1.6+oy,.1],[-1,-.35+oy,.75]]}};
function open3d(c,kind,col){try{const ren=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,50);cam.position.set(0,.6,5);
 sc.add(new THREE.AmbientLight(0xffffff,.7));const dl=new THREE.DirectionalLight(0xfff0dd,.9);dl.position.set(3,4,4);sc.add(dl);
 const B=build(kind,col),{G,pins}=B;G.rotation.x=.25;sc.add(G);const ring=new THREE.Mesh(new THREE.TorusGeometry(1.9,.015,6,64),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;sc.add(ring);
 const o={ren,sc,cam,G,ring,pins,drag:0,t:0,z:5,P:new Map(),auto:1,sim:B.sim,set:B.set};R=o;
 const cv=c;cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);o.P.set(e.pointerId,[e.clientX,e.clientY]);o.auto=0};
 cv.onpointermove=e=>{const p=o.P.get(e.pointerId);if(!p)return;if(o.P.size===1){G.rotation.y+=(e.clientX-p[0])*.01;G.rotation.x=Math.max(-1,Math.min(1,G.rotation.x+(e.clientY-p[1])*.01))}else{const q=[...o.P.entries()].find(k=>k[0]!==e.pointerId)[1],d0=Math.hypot(p[0]-q[0],p[1]-q[1]),d1=Math.hypot(e.clientX-q[0],e.clientY-q[1]);o.z=Math.max(3,Math.min(8,o.z*d0/d1))}o.P.set(e.pointerId,[e.clientX,e.clientY])};
 cv.onpointerup=cv.onpointercancel=e=>o.P.delete(e.pointerId);cv.onwheel=e=>{e.preventDefault();o.z=Math.max(3,Math.min(8,o.z+e.deltaY*.004))};
 const tick=()=>{o.raf=requestAnimationFrame(tick);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==w*devicePixelRatio){ren.setPixelRatio(Math.min(2,devicePixelRatio));ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
  o.t+=.016;if(o.auto)G.rotation.y+=.004;ring.position.y=Math.sin(o.t*1.3)*1.1;cam.position.z+=(o.z-cam.position.z)*.12;if(B.upd)B.upd(o.t);ren.render(sc,cam);
  el.querySelectorAll('.cu-pin').forEach((b,i)=>{const v=new THREE.Vector3(...pins[i]);G.localToWorld(v);v.project(cam);b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px'})};tick();return true}catch(e){return false}}
function lightbox(p){lb.hidden=false;const row=(k,v)=>`<dt>${k}</dt><dd>${v?esc(v):`<span class="na">${NA}</span>`}</dd>`;
 lb.innerHTML=`<div class="cu-lbi"><img src="${IM(p)}" alt="${esc(p.t)}"><h3>${esc(p.t)}</h3><p style="font-size:18px;margin:0">${esc(p.w)}</p><dl class="cu-meta">${row('NASA image ID',p.id)}${row('Camera / instrument',p.cam)}${row('Date',p.date)}${row('Mission / location',p.loc)}${row('NASA credit',p.cr)}${p.fc?`<dt>${esc(p.fcl||'Colour')}</dt><dd><b>${esc(p.fcb)}.</b> ${esc(p.fc)}</dd>`:''}<dt>Original source</dt><dd>${p.link?`<a href="${p.link}" target="_blank" rel="noopener">${p.ll?esc(p.ll):p.id?'NASA Photojournal '+esc(p.id):'NASA source page'}</a>${p.link2?` · <a href="${p.link2}" target="_blank" rel="noopener">${esc(p.l2l||'NASA Photojournal')}</a>`:''}`:`<span class="na">NASA verified source link currently unavailable</span>`}</dd></dl><div><button class="btn" id="cuLbX">Close photo</button></div></div>`;
 document.getElementById('cuLbX').onclick=()=>{lb.hidden=true;lb.innerHTML=''}}
function show(name,done){const d=D[name];if(!d){done();return}stop();
 if(!el){el=document.createElement('div');el.className='cu';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');document.body.appendChild(el);lb=document.createElement('div');lb.className='cu-lb';lb.hidden=true;lb.setAttribute('role','dialog');document.body.appendChild(lb)}
 const seen=new Set();let cur=-1,fin=0;const J=jr(d);
 el.hidden=false;el.setAttribute('aria-label',d.title);el.innerHTML=`<div class="cu-in"><div class="cu-hd"><div><p class="eyebrow">Scientific discovery · ${esc(d.kind)}</p><h2>${esc(d.title)}</h2></div><span class="cu-jr">📔 Mars Science Journal: <b>${J.e.length}</b> of ${d.n||4} entries · <b>${J.p}</b> points</span></div>
 <div class="cu-main"><div class="cu-stage" id="cuSt"><canvas id="cuCv"></canvas>${d.info.map((x,i)=>`<button class="cu-pin" data-i="${i}" aria-label="${esc(x[0])}">${i+1}</button>`).join('')}<span class="cu-tip">Drag to turn · scroll or pinch to zoom</span><span class="cu-lab">Educational 3D Reconstruction — Based on NASA Mission Imagery</span>${d.sim?'<button class="btn cu-sim" id="cuSim" type="button">▶ Run simple simulation</button>':''}${d.vars?'<div class="cu-vars" role="group" aria-label="Choose a view">'+d.vars.map((v,i)=>`<button class="cu-vb" data-v="${i}" type="button">${esc(v)}</button>`).join('')+'</div>':''}</div>
 <div><div class="cu-chips">${d.info.map((x,i)=>`<button class="cu-chip" data-i="${i}"><b>${i+1}</b>${esc(x[0])}</button>`).join('')}</div><div class="cu-info" id="cuInfo" aria-live="polite">👆 Tap a question, or a numbered circle on the model.</div>${d.vars?'<div class="cu-vinfo" id="cuVi"></div>':''}</div></div>
 <div class="cu-gal"><h3>${d.m==='per'?'NASA mission images':'Real NASA photographs'} · tap to enlarge</h3><div class="cu-row">${d.ph.map((p,i)=>`<button class="cu-th" data-p="${i}"><img src="${IM(p)}" alt="${esc(p.t)}" loading="lazy"><span><em>PHOTO 0${i+1}${p.fcb?' · '+p.fcb:''}</em><br>${esc(p.t)}</span></button>`).join('')}</div></div>
 ${d.more?`<p class="cu-more"><b>More from NASA (opens NASA):</b> ${d.more.map(x=>`<a href="${x[1]}" target="_blank" rel="noopener">${esc(x[0])}</a>`).join(' · ')}</p>`:''}${d.note?`<p class="cu-note">${esc(d.note)}</p>`:''}
 <div class="cu-foot"><div id="cuDone" style="display:contents"></div><button class="btn" id="cuGo">Continue →</button></div></div>`;
 const pick=i=>{cur=i;seen.add(i);const x=d.info[i];$$('#cuInfo').innerHTML=`<b>${esc(x[0])}</b><br>${esc(x[1])}${x[2]?`<small>${esc(x[2])}</small>`:''}`;el.querySelectorAll('.cu-chip').forEach((b,k)=>{b.classList.toggle('cur',k===i);b.classList.toggle('seen',seen.has(k))});el.querySelectorAll('.cu-pin').forEach((b,k)=>b.classList.toggle('on',seen.has(k)));
  try{typeof SFX!=='undefined'&&SFX.tick&&SFX.tick()}catch(e){}
  if(seen.size===d.info.length&&!fin){fin=1;$$('#cuDone').innerHTML=`<div class="cu-done"><b>Discovery complete!</b><p>${d.done||'You found evidence that helps scientists understand Mars’ ancient environment.'} +100 points · saved in your Mars Science Journal.</p></div>`;try{typeof SFX!=='undefined'&&SFX.chime&&SFX.chime()}catch(e){}}};
 el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>pick(+b.dataset.i));el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>lightbox(d.ph[+b.dataset.p]));
 if(!open3d($$('#cuCv'),d.model,d.col))$$('#cuSt').innerHTML='<p style="padding:30px">The 3D view needs WebGL. You can still read the facts and see the photos.</p>';
 el.querySelectorAll('.cu-pin').forEach(b=>b.addEventListener('pointerdown',e=>e.stopPropagation()));
 const setV=i=>{if(R&&R.set)R.set(i);el.querySelectorAll('.cu-vb').forEach((b,k)=>b.classList.toggle('on',k===i));const v=$$('#cuVi');if(v)v.innerHTML=`<b>${esc(d.vars[i])}</b><br>${esc(d.vinfo[i])}`};
 el.querySelectorAll('.cu-vb').forEach(b=>{b.addEventListener('pointerdown',e=>e.stopPropagation());b.onclick=()=>{setV(+b.dataset.v);try{SFX.tick()}catch(e){}}});if(d.vars)setV(0);
 const sb=$$('#cuSim');if(sb){sb.addEventListener('pointerdown',e=>e.stopPropagation());sb.onclick=()=>{if(!R||!R.sim)return;R.sim.on=!R.sim.on;sb.textContent=R.sim.on?'■ Stop simulation':'▶ Run simple simulation'}}
 $$('#cuGo').onclick=()=>{stop();el.hidden=true;lb.hidden=true;const j=jr(d);if(!j.e.includes(name))j.e.push(name);j.p+=Math.round(seen.size*100/d.info.length);try{localStorage.setItem(JK(d),JSON.stringify(j))}catch(e){}done()};$$('#cuGo').focus()}
window.curDiscover=show;
})();

/* Ingenuity: scientific discovery hologram (educational 3D reconstruction + real NASA photographs).
   Opens after each scouting photo in the Ingenuity game. Same look and behaviour as the Curiosity hologram (uses cu-* styles).
   Exactly 3 tasks x 3 NASA photographs = 9 photographs. No other photographs are used.
   NOTE: photo files live in assets/img/ing-*.jpg. To use a different copy of a NASA image, replace the file with the same name. */
(function(){
const NA='Not available from the NASA record',PJ=n=>`https://photojournal.jpl.nasa.gov/catalog/${n}`,IM=p=>'assets/img/ing-'+p.f+'.jpg';
const BY={ing:['Ingenuity','Taken by Ingenuity'],per:['Perseverance','Taken by Perseverance'],map:['NASA map','NASA map (not a camera photo)']};
const REC='Educational 3D Reconstruction — Based on NASA Mission Imagery';
const D={
'First Flight':{title:'First Flight',kind:'First powered flight on another planet',model:'heli',n:3,zr:[4.5,11],z0:8.2,
 info:[
  ['Rotor Blades','Ingenuity had two sets of blades that spin in opposite directions. Mars’ air is very thin, so the blades spin very fast, about 2,400 times a minute, to push enough air down to lift the helicopter.','Mars’ air is only about 1% as thick as the air at Earth’s surface.'],
  ['Solar Panel','The solar panel on top turns sunlight into electricity. That electricity charges the batteries which power the blades, the computer and the heaters.'],
  ['Helicopter Body','The small body is about the size of a tissue box. Inside are the batteries, the computer, the radio and the cameras. Heaters keep the parts warm on cold Mars nights.'],
  ['Landing Legs','Four light legs hold the body above the ground. When Ingenuity lands, the legs take the bump and let it settle on the dusty ground.']],
 done:'On 19 April 2021 Ingenuity made the first powered, controlled flight on another planet. It climbed about 3 metres, hovered for about 30 seconds and landed again.',
 note:'Ingenuity was a technology demonstration and an aerial scout. It did not collect rock or soil samples.',
 ph:[
  {f:'first-pia24521',t:'Perseverance’s Mastcam-Z Video of Ingenuity’s First Full Flight',id:'PIA24521',by:'per',cam:'Perseverance Mastcam-Z',date:'April 19, 2021',cr:'NASA/JPL-Caltech/ASU/MSSS',w:'Perseverance watched Ingenuity take off, hover and land. This is the main reference for the first flight.'},
  {f:'first-pia24584',t:'Ingenuity’s First Black-and-White Image From the Air',id:'PIA24584',by:'ing',cam:'Ingenuity Navigation Camera',date:'April 19, 2021',cr:'NASA/JPL-Caltech',w:'The helicopter’s own view from the air. You can see the Martian ground and the helicopter’s shadow.'},
  {f:'first-pia24550',t:'Ingenuity’s First Flight Recorded by Mastcam-Z',id:'PIA24550',by:'per',cam:'Perseverance Mastcam-Z (left) and Ingenuity Navigation Camera (right), as labelled on the image',date:'April 19, 2021',cr:'NASA/JPL-Caltech/ASU/MSSS',w:'Ingenuity seen from a distance by Perseverance. The right side of the image is labelled as Ingenuity’s own camera view.'}]},
'Raised Rocky Ridges':{title:'Raised Rocky Ridges',kind:'Rock ridges seen from the air',model:'ridge',n:3,zr:[3.2,9],z0:6.4,
 info:[
  ['Raised Ridges','These are lines of rock that stick up above the flat, sandy ground. Ingenuity looked down on them from the air in Jezero Crater and photographed their shapes.'],
  ['Surface Fractures','A fracture is a crack in rock. Rock can crack when it is pushed, pulled or shaken for a very long time. Scientists think the ridges are linked to cracks like these.','Scientists’ interpretation.'],
  ['Possible Water Pathways','On Earth, water underground can flow through cracks in rock. Scientists are asking if water or other fluids once did this here, long ago.','A scientific possibility. NASA has not confirmed that water flowed through these ridges.']],
 done:'You explored an open science question: could cracks in these rocks once have carried underground fluids? It is a possibility scientists are studying, not a confirmed discovery.',
 note:'A scientific possibility only. Flowing water has not been confirmed at this place.',
 ph:[
  {f:'ridge-pia24727',t:'Ingenuity Spots Raised Ridges During Ninth Flight',id:'PIA24727',by:'ing',cam:'Ingenuity Return to Earth (RTE) colour camera',date:'Image captured July 5, 2021 (Flight 9)',cr:'NASA/JPL-Caltech',w:'The Raised Ridges from above. Part of the helicopter and its shadow are in the picture too.'},
  {f:'ridge-pia24689',t:'Aerial View of Jezero Crater’s Raised Ridges',id:'PIA24689',by:'ing',cam:'Ingenuity Return to Earth (RTE) colour camera',date:'Image captured July 24, 2021 (Flight 10)',cr:'NASA/JPL-Caltech',w:'A wider view of the rocky ridge area and the ground around it.'},
  {f:'ridge-pia24688',t:'Jezero Crater’s Raised Ridges in 3D',id:'PIA24688',by:'ing',cam:'Ingenuity Return to Earth (RTE) colour camera',date:'Image captured July 24, 2021 (Flight 10)',cr:'NASA/JPL-Caltech',w:'NASA used two pictures taken from different places to make a 3D view of the ridges.',fcl:'Note',fcb:'3D view',fc:'The copy shown in this game is one view. The stereoscopic 3D version is on NASA’s page.'}]},
'Old River Channel — Neretva Vallis':{title:'Old River Channel · Neretva Vallis',kind:'Ancient river channel',model:'river',n:3,zr:[3.4,10],z0:7,
 info:[
  ['Ancient River Channel','Neretva Vallis is an old river channel in Jezero Crater. Billions of years ago, water flowed through it. Today it is dry and covered with sand and rocks.'],
  ['Water Flow','Billions of years ago, water flowed along this channel and into Jezero Crater. The water may have carried sand and mud into the crater.','Scientists’ interpretation. The model shows only the direction, not how deep or fast the water was.'],
  ['Sand Dunes','Wind moves sand grains across Mars. Over time it piles them into ripples and dunes, like the ones seen on the floor of the channel.'],
  ['Jezero Crater','Jezero Crater once had a river flowing into it. Scientists study it because ancient river and lake rocks could hold clues about whether life was ever possible on Mars.']],
 done:'You followed an ancient river into Jezero Crater. Ingenuity flew near Neretva Vallis, and the pictures of the channel here were taken by the Perseverance rover.',
 note:'The photographs PIA26335 and PIA26336 were taken by Perseverance, not Ingenuity. The model shows no real depth, water speed or water amount.',
 ph:[
  {f:'river-pia26311',t:'Rover, Helicopter Locations in Jezero Crater',id:'PIA26311',by:'map',cam:'None. This is a NASA map.',date:'Positions as of December 19, 2023; released March 29, 2024',cr:'NASA/JPL-Caltech',w:'A NASA map showing where Perseverance and Ingenuity have been. It shows the area where the helicopter explored around Neretva Vallis.'},
  {f:'river-pia26335',t:'Perseverance’s View of Neretva Vallis River Channel',id:'PIA26335',by:'per',cam:'Perseverance Mastcam-Z',date:'Captured May 17, 2024',cr:'NASA/JPL-Caltech/ASU/MSSS',w:'A panorama made from 56 images. It shows the ancient river channel, dunes and the land around them.'},
  {f:'river-pia26336',t:'Perseverance Views “Bright Angel”',id:'PIA26336',by:'per',cam:'Perseverance Navigation Camera (Navcam)',date:'Captured June 6, 2024',cr:'NASA/JPL-Caltech',w:'The “Bright Angel” area seen from inside Neretva Vallis.'}]}};
D['First Flight'].m=D['Raised Rocky Ridges'].m=D['Old River Channel — Neretva Vallis'].m='ing';
const $$=(s,r)=>(r||document).querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const JK='bt-mars-journal-ing';
const jr=()=>{try{return JSON.parse(localStorage.getItem(JK))||{e:[],p:0}}catch(e){return{e:[],p:0}}};
let el,lb,R=null;
function stop(){if(!R)return;cancelAnimationFrame(R.raf);try{R.ren.dispose()}catch(e){}R=null}
/* ---------- small 3D helpers ---------- */
const rnd=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sm=(a,b,x)=>{x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)},mix=(a,b,t)=>a+(b-a)*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const hmat=(c,o)=>new THREE.MeshStandardMaterial({color:c,transparent:true,opacity:o==null?.88:o,roughness:.9,flatShading:true});
const edges=(m,c,o)=>{m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),new THREE.LineBasicMaterial({color:c||0x7cc4ff,transparent:true,opacity:o==null?.22:o})));return m};
function cylBetween(a,b,r,m){const A=V(...a),B=V(...b),d=B.clone().sub(A),c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),8),m);c.position.copy(A.clone().add(B).multiplyScalar(.5));c.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());return c}
function tag(txt,w,fs){const c=document.createElement('canvas'),x0=c.getContext('2d');fs=fs||44;x0.font='600 '+fs+'px sans-serif';const tw=Math.ceil(x0.measureText(txt).width)+44,th=fs+30;c.width=tw;c.height=th;const x=c.getContext('2d');
 x.fillStyle='rgba(6,10,18,.82)';x.fillRect(0,0,tw,th);x.strokeStyle='rgba(124,196,255,.7)';x.lineWidth=3;x.strokeRect(2,2,tw-4,th-4);x.fillStyle='#e8f4ff';x.font='600 '+fs+'px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,tw/2,th/2+2);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(w,w*th/tw,1);s.renderOrder=5;return s}
function terrain(W,Dp,nx,nz,hf,cf){const g=new THREE.PlaneGeometry(W,Dp,nx,nz);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=new Float32Array(p.count*3);
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=hf(x,z);p.setY(i,y);const c=cf(x,z,y);col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2]}
 g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true,transparent:true,opacity:.94}));
 m.add(new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.06})));return m}
function skirt(W,Dp,n,hf,yb,col){const pos=[],E=[];const a=n=>n;
 for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n,x0=-W/2+W*t0,x1=-W/2+W*t1,z0=-Dp/2+Dp*t0,z1=-Dp/2+Dp*t1;
  E.push([[x0,-Dp/2],[x1,-Dp/2]],[[x0,Dp/2],[x1,Dp/2]],[[-W/2,z0],[-W/2,z1]],[[W/2,z0],[W/2,z1]])}
 E.forEach(([A,B])=>{const a0=V(A[0],hf(A[0],A[1]),A[1]),b0=V(B[0],hf(B[0],B[1]),B[1]),a1=V(A[0],yb,A[1]),b1=V(B[0],yb,B[1]);[a0,a1,b0,b0,a1,b1].forEach(v=>pos.push(v.x,v.y,v.z))});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.computeVertexNormals();return new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:1,transparent:true,opacity:.7,side:2,flatShading:true}))}
function pebbles(G,n,W,Dp,seed,hf,col,skip){const r=rnd(seed);for(let i=0;i<n;i++){const x=(r()-.5)*(W-.3),z=(r()-.5)*(Dp-.3);if(skip&&skip(x,z)){continue}const s=.02+r()*.035,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(col).multiplyScalar(.6+r()*.6),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(x,hf(x,z)+s*.3,z);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}}
const anchor=(P,x,y,z)=>{const o=new THREE.Object3D();o.position.set(x,y,z);P.add(o);return o};
/* ---------- Model 1: Ingenuity helicopter with take-off, hover, landing ---------- */
function mHeli(){const G=new THREE.Group(),GY=-1.5,LEG=1.0,HOV=1.8;
 /* landing pad */
 const pad=new THREE.Mesh(new THREE.CircleGeometry(2.3,48),new THREE.MeshStandardMaterial({color:0x8a5a3c,roughness:1,transparent:true,opacity:.55,side:2}));pad.rotation.x=-Math.PI/2;pad.position.y=GY;G.add(pad);
 const pr=new THREE.Mesh(new THREE.RingGeometry(2.2,2.3,64),new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.5,side:2}));pr.rotation.x=-Math.PI/2;pr.position.y=GY+.005;G.add(pr);
 const r=rnd(7);for(let i=0;i<26;i++){const a=r()*6.28,d=.9+r()*1.2,s=.03+r()*.05,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(0x9a6a48).multiplyScalar(.7+r()*.5),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(Math.cos(a)*d,GY+s*.3,Math.sin(a)*d);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}
 const shadow=new THREE.Mesh(new THREE.CircleGeometry(.7,32),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:.4,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=GY+.01;G.add(shadow);
 /* helicopter */
 const H=new THREE.Group();G.add(H);
 const gold=hmat(0xd8b24a,.92),dark=hmat(0x2b2f3a,.92),carbon=hmat(0x3a3f4b,.95);
 const body=edges(new THREE.Mesh(new THREE.BoxGeometry(.54,.5,.54),gold),0xfff0b0,.3);H.add(body);
 const lens=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,.08,16),new THREE.MeshBasicMaterial({color:0x0e1218}));lens.position.set(.12,-.28,.1);H.add(lens);
 const mast=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.62,10),carbon);mast.position.y=.55;H.add(mast);
 /* two counter-rotating rotors */
 const rot=(y,c,tip)=>{const g=new THREE.Group(),b=new THREE.Mesh(new THREE.BoxGeometry(3,.016,.17),hmat(c,.95));g.add(b);
  [-1.5,1.5].forEach(x=>{const t=new THREE.Mesh(new THREE.BoxGeometry(.2,.022,.18),new THREE.MeshBasicMaterial({color:tip}));t.position.x=x*.97;g.add(t)});
  const disc=new THREE.Mesh(new THREE.CircleGeometry(1.5,48),new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:0,side:2,depthWrite:false}));disc.rotation.x=-Math.PI/2;g.add(disc);g.userData.disc=disc;g.position.y=y;return g};
 const rLow=rot(.5,0x3a4152,0xf7c548),rUp=rot(.74,0x596077,0x7cffe0);rUp.rotation.y=Math.PI/2;H.add(rLow,rUp);
 /* solar panel */
 const sp=edges(new THREE.Mesh(new THREE.BoxGeometry(.9,.025,.9),hmat(0x1c3d92,.95)),0x9ec7ff,.5);sp.position.y=1.0;sp.rotation.z=.06;H.add(sp);
 const grid=new THREE.GridHelper(.86,6,0x8fb4ff,0x8fb4ff);grid.material.transparent=true;grid.material.opacity=.45;grid.position.y=.016;sp.add(grid);
 /* four landing legs */
 const legs=[[1,1],[1,-1],[-1,1],[-1,-1]].map(([sx,sz])=>{const g=new THREE.Group();g.add(cylBetween([sx*.22,-.22,sz*.22],[sx*.72,-LEG,sz*.72],.028,carbon));
  const f=new THREE.Mesh(new THREE.SphereGeometry(.06,10,8),hmat(0x8a8f9c,.95));f.position.set(sx*.72,-LEG,sz*.72);g.add(f);H.add(g);return g});
 /* height marker for the real flight */
 const hl=new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(2,GY,0),V(2,GY+LEG+HOV,0)]),new THREE.LineDashedMaterial({color:0xf7c548,dashSize:.1,gapSize:.07,transparent:true,opacity:.8}));hl.computeLineDistances();G.add(hl);
 const hlab=tag('Real first flight: about 3 metres up',2.4,40);hlab.position.set(2,GY+LEG+HOV+.3,0);G.add(hlab);
 const ph=tag('',1.7,42);ph.visible=false;
 /* info anchors */
 const aRot=anchor(H,1.15,.62,0),aSol=anchor(H,.3,1.05,.4),aBod=anchor(H,.28,-.05,.28),aLeg=anchor(H,.72,-LEG+.02,.72);
 const sim={on:false};let last='';
 const upd=(t,o)=>{const u=t%13;let y=0,sp_=0,name='On the ground';
  if(u<1.5){y=0;sp_=0;name='Ready on the ground'}else if(u<3.5){const k=(u-1.5)/2;y=sm(0,1,k)*HOV;sp_=sm(0,.4,k);name='Take-off'}
  else if(u<8){y=HOV+.07*Math.sin(t*2.4);sp_=1;name='Hovering'}else if(u<10.5){const k=(u-8)/2.5;y=(1-sm(0,1,k))*HOV;sp_=1;name='Landing'}else{y=0;sp_=Math.max(0,1-(u-10.5)/1.2);name='Rotors slowing down'}
  H.position.y=GY+LEG+y;const spin=sp_*(o&&o.paused?0:1);rLow.rotation.y+=.5*spin;rUp.rotation.y-=.5*spin;rLow.userData.disc.material.opacity=.13*sp_;rUp.userData.disc.material.opacity=.1*sp_;
  H.rotation.z=y>.1&&y<HOV-.1?.02*Math.sin(t*3):0;shadow.position.x=0;shadow.scale.setScalar(1-.35*(y/HOV));shadow.material.opacity=.42-.22*(y/HOV);
  if(name!==last){last=name;if(o&&o.onPhase)o.onPhase(name)}};
 return{G,upd,pins:[aRot,aSol,aBod,aLeg],phase:1,cy:.2,rx:.12}}
/* ---------- Model 2: raised rocky ridges with fractures ---------- */
function mRidge(){const G=new THREE.Group(),W=4.6,Dp=3.2;
 const hf=(x,z)=>.05*Math.sin(x*1.4+z*.7)+.04*Math.sin(z*2.1-x*.5+1)+.018*Math.sin(x*4.3+z*1.9);
 const rg=rnd(11);
 const cf=(x,z,y)=>{const n=.5+.5*Math.sin(x*6+z*4.5)*Math.sin(z*5-x*2);const k=.88+.22*n+(rg()-.5)*.05;return[.66*k,.37*k,.22*k]};
 G.add(terrain(W,Dp,70,50,hf,cf));G.add(skirt(W,Dp,40,hf,-.34,0x6a412f));
 pebbles(G,90,W,Dp,3,hf,0x9a6040,(x,z)=>Math.abs(z+.4)<.1||Math.abs(z-.58)<.1);
 /* three ridge bands, built from rough rock blocks */
 const bands=[{z:-.95,x0:-2,x1:1.9,s:1},{z:.15,x0:-1.8,x1:2,s:1.25},{z:1.05,x0:-2,x1:1.5,s:.95}],cols=[0xc79a6d,0xd2a574,0xbd8f64];
 bands.forEach((b,bi)=>{const N=11;for(let i=0;i<N;i++){const t=i/(N-1),x=mix(b.x0,b.x1,t)+(rg()-.5)*.12,z=b.z+(rg()-.5)*.14+.08*Math.sin(t*5+bi),arch=.55+.45*Math.sin(Math.PI*t),
   sx=.3+rg()*.2,sy=(.1+.2*arch)*b.s*(.8+rg()*.4),sz=.11+rg()*.1;
   const g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position,v=V(0,0,0);for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);const j=1+.18*Math.sin(v.x*4+i)+.14*Math.sin(v.y*5+bi)+.12*Math.sin(v.z*6+i*2);p.setXYZ(k,v.x*j,v.y*j,v.z*j)}g.computeVertexNormals();
   const m=edges(new THREE.Mesh(g,hmat(cols[bi],.9)),0xfff0d0,.16);m.scale.set(sx,sy,sz);m.position.set(x,hf(x,z)+sy*.45,z);m.rotation.y=(rg()-.5)*.5;G.add(m)}});
 /* fractures: dark cracks between the ridge bands, plus a few short cross cracks */
 const dk=new THREE.MeshBasicMaterial({color:0x22120b});const crackPts=[];
 const crack=(pts,rad)=>{const c=pts.map(p=>V(p[0],hf(p[0],p[1])+.025,p[1]));crackPts.push(c);G.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(c),60,rad||.02,5),dk))};
 const lineZ=(z,x0,x1,seed)=>{const pts=[],r=rnd(seed);for(let i=0;i<=14;i++){const t=i/14;pts.push([mix(x0,x1,t),z+(r()-.5)*.1+.04*Math.sin(t*9)])}return pts};
 const f1=lineZ(-.4,-2.1,2.05,21),f2=lineZ(.6,-2,1.9,22);crack(f1);crack(f2);
 crack([[-1.2,-.4],[-1.1,-.1],[-1.25,.18]],.014);crack([[.4,-.4],[.55,-.05],[.45,.35]],.014);crack([[1.2,.6],[1.3,.85],[1.15,1.1]],.014);
 /* possible water pathway: shown only when the visitor opens that point */
 const bl=new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.9}),path=new THREE.Group();
 [f1,f2].forEach(f=>{const c=f.map(p=>V(p[0],hf(p[0],p[1])+.17,p[1]));path.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(c),60,.016,6),bl))});
 const pl=tag('Scientists’ idea · not confirmed',1.9,38);pl.position.set(0,.55,.1);path.add(pl);path.visible=false;G.add(path);
 const aR=anchor(G,.1,.5,.15),aF=anchor(G,-.9,.12,-.4),aP=anchor(G,1.4,.22,.6);
 const upd=(t)=>{bl.opacity=.55+.4*Math.sin(t*4)};
 return{G,upd,pins:[aR,aF,aP],pick:i=>{if(i===2)path.visible=true},cy:-.25,rx:.5}}
/* ---------- Model 3: Neretva Vallis river channel ---------- */
function mRiver(){const G=new THREE.Group(),W=5.2,Dp=3.4;
 const zc=x=>.3*Math.sin(x*.8+.4),hw=x=>.7+Math.max(0,x-1.2)*.9;
 const hf=(x,z)=>{const d=Math.abs(z-zc(x)),w=hw(x),wall=sm(w,w+.55,d),basin=sm(1.5,2.4,x);
  const sur=.75+.09*Math.sin(x*3+z*2)+.07*Math.sin(z*5-x*2)+.04*Math.sin(x*9+z*7);
  const dune=(.05*(.5+.5*Math.sin(x*7+.6*Math.sin(z*3)))+.035*Math.sin(x*3+z*5))*(1-wall);
  const val=mix(.04+dune,sur,wall);return mix(val,.03+.02*Math.sin(x*6+z*3),basin)};
 const cf=(x,z,y)=>{const d=Math.abs(z-zc(x)),w=hw(x),wall=sm(w,w+.55,d),n=.5+.5*Math.sin(x*7+.6*Math.sin(z*3)),b=sm(1.5,2.4,x);
  const fl=[.8*(.9+.2*n),.58*(.9+.2*n),.38*(.9+.2*n)],su=[.47,.4,.33];const k=mix(0,1,wall*(1-b*.6));return[mix(fl[0],su[0],k),mix(fl[1],su[1],k),mix(fl[2],su[2],k)]};
 G.add(terrain(W,Dp,100,66,hf,cf));G.add(skirt(W,Dp,50,hf,-.34,0x6a412f));
 pebbles(G,70,W,Dp,5,hf,0x7a6652);
 /* flow arrows: appear when the visitor opens "Water Flow" */
 const flow=new THREE.Group(),pts=[];for(let i=0;i<=40;i++){const x=-2.3+i*.105;pts.push(V(x,hf(x,zc(x))+.14,zc(x)))}const cv=new THREE.CatmullRomCurve3(pts);
 flow.add(new THREE.Mesh(new THREE.TubeGeometry(cv,80,.012,5),new THREE.MeshBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.45})));
 const cones=[0,1,2,3,4].map(()=>{const c=new THREE.Mesh(new THREE.ConeGeometry(.07,.2,10),new THREE.MeshBasicMaterial({color:0x9fd8ff}));flow.add(c);return c});
 const fl=tag('Water flow direction · simplified',1.9,36);fl.position.set(-.4,.55,zc(-.4));flow.add(fl);flow.visible=false;G.add(flow);
 const l1=tag('Neretva Vallis',1.1,36);l1.position.set(-1.6,.5,zc(-1.6)-.1);G.add(l1);const l2=tag('Jezero Crater',1.1,36);l2.position.set(2.1,.4,0);G.add(l2);
 const A=(x,dz)=>anchor(G,x,hf(x,zc(x)+dz)+.14,zc(x)+dz);
 const aCh=A(-.5,.15),aFl=A(.7,0),aDn=A(-1.3,-.05),aCr=anchor(G,2.1,.15,.3);
 const up=t=>{if(!flow.visible)return;cones.forEach((c,i)=>{const u=((t*.07)+i/5)%1,p=cv.getPointAt(u),q=cv.getPointAt(Math.min(1,u+.01));c.position.copy(p);c.quaternion.setFromUnitVectors(V(0,1,0),q.clone().sub(p).normalize())})};
 return{G,upd:up,pins:[aCh,aFl,aDn,aCr],pick:i=>{if(i===1)flow.visible=true},cy:-.2,rx:.5}}
const BX={heli:mHeli,ridge:mRidge,river:mRiver};
/* ---------- 3D scene (same controls as the other holograms) ---------- */
function open3d(c,d){try{const ren=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,60),B=BX[d.model]();
 sc.add(new THREE.AmbientLight(0xffffff,.72));const dl=new THREE.DirectionalLight(0xfff0dd,.9);dl.position.set(3,4,4);sc.add(dl);
 const G=B.G;G.position.y=B.cy||0;G.rotation.x=B.rx||.25;sc.add(G);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(d.model==='heli'?2.4:2.9,.015,6,64),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;sc.add(ring);
 const o={ren,sc,cam,G,pins:B.pins,drag:0,t:0,z:d.z0,zr:d.zr,P:new Map(),auto:1,onPhase:null};R=o;cam.position.set(0,.6,d.z0);
 const cv=c,Z=v=>Math.max(o.zr[0],Math.min(o.zr[1],v));
 cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);o.P.set(e.pointerId,[e.clientX,e.clientY]);o.auto=0};
 cv.onpointermove=e=>{const p=o.P.get(e.pointerId);if(!p)return;if(o.P.size===1){G.rotation.y+=(e.clientX-p[0])*.01;G.rotation.x=Math.max(-.2,Math.min(1.2,G.rotation.x+(e.clientY-p[1])*.01))}else{const q=[...o.P.entries()].find(k=>k[0]!==e.pointerId)[1],d0=Math.hypot(p[0]-q[0],p[1]-q[1]),d1=Math.hypot(e.clientX-q[0],e.clientY-q[1]);o.z=Z(o.z*d0/d1)}o.P.set(e.pointerId,[e.clientX,e.clientY])};
 cv.onpointerup=cv.onpointercancel=e=>o.P.delete(e.pointerId);cv.onwheel=e=>{e.preventDefault();o.z=Z(o.z+e.deltaY*.004)};
 o.pick=B.pick;const v=new THREE.Vector3();
 const tick=()=>{o.raf=requestAnimationFrame(tick);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.round(w*Math.min(2,devicePixelRatio))){ren.setPixelRatio(Math.min(2,devicePixelRatio));ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
  o.t+=.016;if(o.auto)G.rotation.y+=.004;ring.position.y=Math.sin(o.t*1.3)*1.1;cam.position.z+=(o.z-cam.position.z)*.12;if(B.upd)B.upd(o.t,o);ren.render(sc,cam);
  el.querySelectorAll('.cu-pin').forEach((b,i)=>{o.pins[i].getWorldPosition(v);v.project(cam);b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px'})};
 tick();return true}catch(e){return false}}
/* ---------- photo viewer: ID, title, date, camera, credit, source ---------- */
function lightbox(p){lb.hidden=false;const row=(k,v)=>`<dt>${k}</dt><dd>${v?esc(v):`<span class="na">${NA}</span>`}</dd>`;
 lb.innerHTML=`<div class="cu-lbi"><img src="${IM(p)}" alt="${esc(p.t)}"><h3>${esc(p.t)}</h3><p style="font-size:18px;margin:0">${esc(p.w)}</p><dl class="cu-meta">${row('NASA image number',p.id)}${row('Original title',p.t)}<dt>Taken by</dt><dd><span class="ig-badge ig-${p.by}">${esc(BY[p.by][1])}</span></dd>${row('Camera / instrument',p.cam)}${row('Date',p.date)}${row('NASA credit',p.cr)}${p.fc?`<dt>${esc(p.fcl||'Note')}</dt><dd><b>${esc(p.fcb)}.</b> ${esc(p.fc)}</dd>`:''}<dt>Official NASA source</dt><dd><a href="${PJ(p.id)}" target="_blank" rel="noopener">NASA Photojournal ${esc(p.id)}</a></dd></dl><div><button class="btn" id="igLbX">Close photo</button></div></div>`;
 document.getElementById('igLbX').onclick=()=>{lb.hidden=true;lb.innerHTML=''};document.getElementById('igLbX').focus()}
function show(name,done){const d=D[name];if(!d){done();return}stop();
 if(!el){el=document.createElement('div');el.className='cu';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');document.body.appendChild(el);lb=document.createElement('div');lb.className='cu-lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');document.body.appendChild(lb);
  lb.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true;lb.innerHTML=''}})}
 const seen=new Set();let fin=0;const J=jr();
 el.hidden=false;el.setAttribute('aria-label',d.title);
 el.innerHTML=`<div class="cu-in"><div class="cu-hd"><div><p class="eyebrow">Scientific discovery · ${esc(d.kind)}</p><h2>${esc(d.title)}</h2></div><span class="cu-jr">📔 Mars Science Journal: <b>${J.e.length}</b> of ${d.n} entries · <b>${J.p}</b> points</span></div>
 <div class="cu-main"><div class="cu-stage" id="igSt"><canvas id="igCv"></canvas>${d.info.map((x,i)=>`<button class="cu-pin" data-i="${i}" aria-label="${esc(x[0])}">${i+1}</button>`).join('')}<span class="cu-tip">Drag to turn · scroll or pinch to zoom</span><span class="cu-lab">${REC}</span>${d.model==='heli'?'<span class="ig-phase" id="igPh" aria-live="polite"></span>':''}</div>
 <div><div class="cu-chips">${d.info.map((x,i)=>`<button class="cu-chip" data-i="${i}"><b>${i+1}</b>${esc(x[0])}</button>`).join('')}</div><div class="cu-info" id="igInfo" aria-live="polite">👆 Tap a question, or a numbered circle on the model.</div></div></div>
 <div class="cu-gal"><h3>Real NASA photographs · tap to enlarge</h3><div class="cu-row">${d.ph.map((p,i)=>`<button class="cu-th" data-p="${i}"><img src="${IM(p)}" alt="${esc(p.t)}" loading="lazy"><span><em>PHOTO 0${i+1} · ${esc(p.id)}</em><br>${esc(p.t)}<br><small class="ig-by ig-${p.by}">${esc(BY[p.by][1])}</small></span></button>`).join('')}</div></div>
 <p class="cu-note">${esc(d.note)}</p>
 <div class="cu-foot"><div id="igDone" style="display:contents"></div><button class="btn" id="igGo">Continue →</button></div></div>`;
 const pick=i=>{seen.add(i);const x=d.info[i];$$('#igInfo').innerHTML=`<b>${esc(x[0])}</b><br>${esc(x[1])}${x[2]?`<small>${esc(x[2])}</small>`:''}`;
  el.querySelectorAll('.cu-chip').forEach((b,k)=>{b.classList.toggle('cur',k===i);b.classList.toggle('seen',seen.has(k))});el.querySelectorAll('.cu-pin').forEach((b,k)=>b.classList.toggle('on',seen.has(k)));
  if(R&&R.pick)R.pick(i);try{typeof SFX!=='undefined'&&SFX.tick&&SFX.tick()}catch(e){}
  if(seen.size===d.info.length&&!fin){fin=1;$$('#igDone').innerHTML=`<div class="cu-done"><b>Discovery complete!</b><p>${esc(d.done)} +100 points · saved in your Mars Science Journal.</p></div>`;try{typeof SFX!=='undefined'&&SFX.chime&&SFX.chime()}catch(e){}}};
 el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>pick(+b.dataset.i));el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>lightbox(d.ph[+b.dataset.p]));
 if(!open3d($$('#igCv'),d))$$('#igSt').innerHTML='<p style="padding:30px">The 3D view needs WebGL. You can still read the facts and see the photos.</p>';
 else{const ph=$$('#igPh');if(ph)R.onPhase=n=>{ph.textContent='Now: '+n}}
 el.querySelectorAll('.cu-pin').forEach(b=>b.addEventListener('pointerdown',e=>e.stopPropagation()));
 $$('#igGo').onclick=()=>{stop();el.hidden=true;lb.hidden=true;const j=jr();if(!j.e.includes(name))j.e.push(name);j.p+=Math.round(seen.size*100/d.info.length);try{localStorage.setItem(JK,JSON.stringify(j))}catch(e){}done()};$$('#igGo').focus()}
window.ingDiscover=show;
})();

/* Lunar Roving Vehicle (Apollo 17): scientific discovery hologram (educational 3D reconstruction + real NASA photographs).
   Opens after each stop in the Lunar Roving Vehicle game. Same look and behaviour as the Curiosity and Ingenuity holograms
   (uses the cu-* styles from curiosity.css and the ig-* badges from ingenuity.css).
   PHOTOS: only photographs whose picture was checked against NASA's Apollo Image Atlas or that show their sample number are used.
   The other photos in the supplied document did not match their NASA image numbers and were left out on purpose.
   Photo files live in assets/img/a17-*.jpg. To use a different copy of a NASA image, replace the file with the same name. */
(function(){
const NA='Not available from the NASA record',IM=p=>'assets/img/'+p.f+'.jpg';
const BY={crew:['Apollo 17 crew','Taken on the Moon by the Apollo 17 crew'],lab:['NASA laboratory','Laboratory photo of a Moon sample on Earth']};
const BC={crew:'ig-per',lab:'ig-map'};
const REC='Educational 3D Reconstruction — Based on NASA Mission Imagery';
const ATLAS=s=>`https://www.lpi.usra.edu/lunar/samples/atlas/detail/?mission=Apollo+17&sample=${s}`;
const D={
'Station 1':{title:'Station 1 · Rake Samples',kind:'Collecting small rocks with a lunar rake',model:'rake',n:4,zr:[3.2,9],z0:6.2,
 info:[
  ['Lunar Rake','The lunar rake was an Apollo geology tool. Astronauts used it to collect small rocks and rock chips from the Moon’s surface.','NASA: it collected pieces about 1.3 to 2.5 cm across (half an inch to one inch).'],
  ['Rock Chips in the Rake','As the rake is swept through the soil, fine dust falls through the gaps. Small rocks that are big enough stay trapped between the tines and can go into a sample bag.'],
  ['Station 1','Station 1 was a stop on the first Apollo 17 moonwalk, on 11 December 1972, in the Taurus–Littrow valley. Commander Eugene Cernan took the photo of Harrison Schmitt using the rake.']],
 done:'You learned how the lunar rake collected small rock chips at Station 1 on the first Apollo 17 moonwalk.',
 note:'The 3D model shows the rake and the ground, not the astronaut. One NASA photograph is shown for this stop.',
 ph:[
  {f:'a17-rake-as17-134-20425',t:'Astronaut Harrison Schmitt collects lunar rake samples during EVA',id:'AS17-134-20425',by:'crew',cam:'70 mm Hasselblad camera, operated by Eugene Cernan',date:'11 December 1972 (first moonwalk)',cr:'NASA',
   w:'Harrison Schmitt collects rake samples at Station 1. The rake collects rocks and rock chips about 1.3 to 2.5 cm across.',src:['NASA Image and Video Library','https://images.nasa.gov/details-as17-134-20425']}]},
'Station 2':{title:'Station 2 · Boulder 1',kind:'A layered boulder and its samples',model:'boulder',n:4,zr:[3.4,9.5],z0:6.6,
 info:[
  ['Boulder 1','Boulder 1 sat at the foot of the South Massif, a big mountain at the edge of the valley. It was about 2 metres across and 1 metre high.'],
  ['Layers in the Rock','Boulder 1 had layers, a bit like a stack of pancakes. The crew saw no other boulder like it at this station.','Source: USGS Apollo 17 Professional Paper, Station 2.'],
  ['Sample 72255','Four samples were taken from Boulder 1: 72215, 72235, 72255 and 72275. Sample 72255 is an impact melt breccia: broken bits of rock glued together by rock that melted in a giant impact.','Weight before study: 461.2 grams. Its fine-grained matrix is about 3.86 billion years old.']],
 done:'You explored Boulder 1, a layered rock at the foot of the South Massif, and sample 72255, a rock made by a giant impact.',
 note:'The model shows the boulder’s size and layers in a simple way. Only the laboratory photo of sample 72255 is shown for this stop.',
 ph:[
  {f:'a17-sample-72255',t:'Lunar sample 72255',id:'S84-37180',by:'lab',cam:null,date:null,cr:'NASA',
   w:'A laboratory photo of sample 72255, a piece of rock taken from Boulder 1. The label with its sample number is in the picture.',
   fcl:'About this number',fcb:'From the supplied document',fc:'The sample number 72255 on the label matches. The photo number could not be checked against a NASA catalogue.',src:['Lunar Sample Atlas · 72255',ATLAS(72255)]}]},
'Station 3':{title:'Station 3 · Lunar Soil Trench',kind:'Digging into the Moon’s soil',model:'trench',n:4,zr:[3.2,9],z0:6.4,
 info:[
  ['The Trench','Harrison Schmitt dug a trench about 10 to 15 cm deep on the side of a small crater, about 10 metres wide. It let scientists see the soil just under the surface.'],
  ['Light and Dark Soil','Before digging, the crew saw light streaks in the soil. The colour changes came from how many tiny glassy clumps were in the soil, not from different chemicals.','Source: NASA Lunar Sample Compendium, Station 3 trench soils.'],
  ['Rock 73255','Rock 73255 was picked up near the trench. It is a rock, not soil from inside the trench. It is an impact melt breccia that weighed 394.1 grams and is about 3.88 billion years old.']],
 done:'You saw how a simple trench showed the layers of soil just under the Moon’s surface, and met rock 73255 from nearby.',
 note:'The model shows the trench and the light streaks in a simple way. Only the laboratory photo of rock 73255 is shown for this stop.',
 ph:[
  {f:'a17-sample-73255',t:'Lunar sample 73255',id:'S73-19592',by:'lab',cam:null,date:null,cr:'NASA',
   w:'A laboratory photo of rock 73255 and the smaller pieces cut from it. The sample number is written at the top.',
   fcl:'About this number',fcb:'From the supplied document',fc:'The sample number 73255 written on the photo matches. The photo number could not be checked against a NASA catalogue.',src:['Lunar Sample Atlas · 73255',ATLAS(73255)]}]},
'Lunar module':{title:'Lunar Module · Challenger',kind:'The astronauts’ landing craft',model:'lm',n:4,zr:[3.6,10],z0:7,
 info:[
  ['Challenger','The Apollo 17 Lunar Module was named Challenger. It carried Gene Cernan and Harrison Schmitt from lunar orbit down to the Moon.'],
  ['Landing Site','Challenger landed on 11 December 1972 in the Taurus–Littrow valley. The astronauts stayed on the Moon for about 75 hours.'],
  ['Going Home','The top part, the ascent stage, lifted off and carried the crew back to the Command Module in orbit. The bottom part, the descent stage, stayed on the Moon.']],
 done:'You learned how Challenger landed the crew in Taurus–Littrow and carried them back up to the Command Module.',
 note:'No photo here yet. The photos supplied for this stop did not match their NASA image numbers, so they were left out.',
 ph:[]}};
const $$=(s,r)=>(r||document).querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const JK='bt-moon-journal-lrv';
const jr=()=>{try{return JSON.parse(localStorage.getItem(JK))||{e:[],p:0}}catch(e){return{e:[],p:0}}};
let el,lb,R=null;
function stop(){if(!R)return;cancelAnimationFrame(R.raf);try{R.ren.dispose()}catch(e){}R=null}
/* ---------- small 3D helpers ---------- */
const rnd=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sm=(a,b,x)=>{x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)},mix=(a,b,t)=>a+(b-a)*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const hmat=(c,o)=>new THREE.MeshStandardMaterial({color:c,transparent:true,opacity:o==null?.88:o,roughness:.9,flatShading:true});
const edges=(m,c,o)=>{m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),new THREE.LineBasicMaterial({color:c||0x7cc4ff,transparent:true,opacity:o==null?.22:o})));return m};
function cylBetween(a,b,r,m){const A=V(...a),B=V(...b),d=B.clone().sub(A),c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),8),m);c.position.copy(A.clone().add(B).multiplyScalar(.5));c.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());return c}
function tag(txt,w,fs){const c=document.createElement('canvas'),x0=c.getContext('2d');fs=fs||44;x0.font='600 '+fs+'px sans-serif';const tw=Math.ceil(x0.measureText(txt).width)+44,th=fs+30;c.width=tw;c.height=th;const x=c.getContext('2d');
 x.fillStyle='rgba(6,10,18,.82)';x.fillRect(0,0,tw,th);x.strokeStyle='rgba(124,196,255,.7)';x.lineWidth=3;x.strokeRect(2,2,tw-4,th-4);x.fillStyle='#e8f4ff';x.font='600 '+fs+'px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,tw/2,th/2+2);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(w,w*th/tw,1);s.renderOrder=5;return s}
function terrain(W,Dp,nx,nz,hf,cf){const g=new THREE.PlaneGeometry(W,Dp,nx,nz);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=new Float32Array(p.count*3);
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=hf(x,z);p.setY(i,y);const c=cf(x,z,y);col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2]}
 g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true,transparent:true,opacity:.94}));
 m.add(new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.06})));return m}
function skirt(W,Dp,n,hf,yb,col){const pos=[],E=[];
 for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n,x0=-W/2+W*t0,x1=-W/2+W*t1,z0=-Dp/2+Dp*t0,z1=-Dp/2+Dp*t1;
  E.push([[x0,-Dp/2],[x1,-Dp/2]],[[x0,Dp/2],[x1,Dp/2]],[[-W/2,z0],[-W/2,z1]],[[W/2,z0],[W/2,z1]])}
 E.forEach(([A,B])=>{const a0=V(A[0],hf(A[0],A[1]),A[1]),b0=V(B[0],hf(B[0],B[1]),B[1]),a1=V(A[0],yb,A[1]),b1=V(B[0],yb,B[1]);[a0,a1,b0,b0,a1,b1].forEach(v=>pos.push(v.x,v.y,v.z))});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.computeVertexNormals();return new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:1,transparent:true,opacity:.7,side:2,flatShading:true}))}
function pebbles(G,n,W,Dp,seed,hf,col,skip){const r=rnd(seed);for(let i=0;i<n;i++){const x=(r()-.5)*(W-.3),z=(r()-.5)*(Dp-.3);if(skip&&skip(x,z)){continue}const s=.02+r()*.035,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(col).multiplyScalar(.6+r()*.6),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(x,hf(x,z)+s*.3,z);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}}
function lump(seed,sx,sy,sz,c,o){const r=rnd(seed),g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position,v=V(0,0,0);for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);const j=1+(r()-.5)*.28;p.setXYZ(k,v.x*j,v.y*j,v.z*j)}g.computeVertexNormals();
 const m=edges(new THREE.Mesh(g,hmat(c,o)),0xe8f4ff,.14);m.scale.set(sx,sy,sz);return m}
const anchor=(P,x,y,z)=>{const o=new THREE.Object3D();o.position.set(x,y,z);P.add(o);return o};
const grey=(k)=>[.6*k,.6*k,.62*k];
const moonHf=(a,b)=>(x,z)=>.035*Math.sin(x*1.6+z*.9+a)+.03*Math.sin(z*2.3-x*.6+b)+.012*Math.sin(x*5.1+z*3.7);
const moonCf=seed=>{const r=rnd(seed);return(x,z)=>{const n=.5+.5*Math.sin(x*5+z*4)*Math.sin(z*3.3-x*1.7);return grey(.82+.16*n+(r()-.5)*.05)}};
/* ---------- Model 1: Station 1 ground with the lunar rake ---------- */
function mRake(){const G=new THREE.Group(),W=4.4,Dp=3,hf=moonHf(.3,1.1);
 G.add(terrain(W,Dp,70,48,hf,moonCf(5)));G.add(skirt(W,Dp,40,hf,-.34,0x4a4c52));
 pebbles(G,140,W,Dp,9,hf,0x8c8d92,(x,z)=>Math.abs(x-.2)<.55&&Math.abs(z)<.3);
 /* the rake: long handle, a basket of thin tines */
 const metal=hmat(0xd6dae2,.95),R=new THREE.Group();
 R.add(cylBetween([-1.6,1.55,-.5],[.05,.12,0],.025,metal));
 const head=new THREE.Group();head.position.set(.2,.06,0);R.add(head);
 head.add(cylBetween([-.02,.06,-.28],[-.02,.06,.28],.02,metal));
 for(let i=0;i<11;i++){const z=-.25+i*.05;head.add(cylBetween([-.02,.06,z],[.3,-.02,z],.007,metal));head.add(cylBetween([.3,-.02,z],[.38,.05,z],.007,metal))}
 G.add(R);
 /* rock chips trapped in the rake */
 const r=rnd(4);for(let i=0;i<7;i++){const s=.035+r()*.025,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),hmat(0x9a9ba3,.98));m.position.set(.28+r()*.08,.02+s,-.2+r()*.4);m.rotation.set(r()*3,r()*3,0);head.add(m)}
 /* falling dust while sweeping */
 const dust=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(60*3),3)),new THREE.PointsMaterial({color:0xcfd3dc,size:.03,transparent:true,opacity:.7}));head.add(dust);
 const lab=tag('Rock chips 1.3–2.5 cm',1.6,38);lab.position.set(.3,.5,0);head.add(lab);
 const aRake=anchor(R,-.85,.85,-.27),aChip=anchor(head,.32,.08,-.05),aSta=anchor(G,-1.4,.12,.9);
 const upd=t=>{const s=Math.sin(t*1.4);R.position.x=.12*s;R.rotation.y=.06*s;const p=dust.geometry.attributes.position;for(let i=0;i<60;i++){const u=((t*.6+i/60)%1);p.setXYZ(i,.05+(i%10)*.03,-.02-u*.12,-.25+(i%6)*.1)}p.needsUpdate=true};
 return{G,upd,pins:[aRake,aChip,aSta],cy:-.2,rx:.45}}
/* ---------- Model 2: Boulder 1, layered, about 2 m across and 1 m high ---------- */
function mBoulder(){const G=new THREE.Group(),W=4.6,Dp=3.2,hf=moonHf(1.2,.4);
 G.add(terrain(W,Dp,70,48,hf,moonCf(8)));G.add(skirt(W,Dp,40,hf,-.34,0x4a4c52));
 pebbles(G,110,W,Dp,13,hf,0x8c8d92,(x,z)=>Math.hypot(x,z*1.4)<1.25);
 /* layered boulder built from flattened slabs of slightly different shades */
 const B=new THREE.Group(),cols=[0x8d8f97,0xa7a9b0,0x7c7e86,0x9c9ea6,0x878992];
 const L=[[1.05,.2,.7],[1,.2,.66],[.94,.19,.62],[.84,.18,.56],[.7,.16,.46]];
 let y=0;L.forEach((s,i)=>{const m=lump(30+i,s[0],s[1],s[2],cols[i],.93);m.position.set((i%2?.04:-.03),y+s[1]*.75,(i%2?-.02:.03));m.rotation.y=i*.18;B.add(m);y+=s[1]*1.25});
 B.position.y=hf(0,0)-.05;G.add(B);
 /* scale bar: about 2 m across */
 const bar=new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(-1.05,.03,.95),V(1.05,.03,.95)]),new THREE.LineDashedMaterial({color:0xf7c548,dashSize:.08,gapSize:.05}));bar.computeLineDistances();G.add(bar);
 const bl=tag('About 2 m across · 1 m high',1.8,38);bl.position.set(0,.22,1.05);G.add(bl);
 /* sampled spot */
 const spot=new THREE.Mesh(new THREE.RingGeometry(.07,.1,24),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.9,side:2,depthTest:false}));spot.position.set(.62,.55,.42);spot.lookAt(V(2,.8,2));G.add(spot);
 const aB=anchor(G,-.55,1.05,0),aL=anchor(G,.85,.35,.25),aS=anchor(G,.62,.55,.42);
 const upd=t=>{spot.material.opacity=.55+.4*Math.sin(t*4)};
 return{G,upd,pins:[aB,aL,aS],cy:-.45,rx:.32}}
/* ---------- Model 3: Station 3 trench on a small crater rim ---------- */
function mTrench(){const G=new THREE.Group(),W=4.6,Dp=3.2;
 const cr=(x,z)=>{const d=Math.hypot(x+1.3,z+.5);return -.32*(1-sm(.6,1.25,d))+.07*Math.exp(-((d-1.3)**2)/.08)};
 const tr=(x,z)=>(Math.abs(x-.35)<.5&&Math.abs(z-.35)<.12)?-.13*sm(.5,.4,Math.abs(x-.35))*sm(.12,.08,Math.abs(z-.35)):0;
 const hf=(x,z)=>moonHf(.8,2)(x,z)+cr(x,z)+tr(x,z);
 const streak=(x,z)=>.5+.5*Math.sin((x*.8+z*2.2)*3.1);
 const cf=(x,z,y)=>{const inT=tr(x,z)<-.02,lt=streak(x,z)>.82&&!inT;return lt?grey(1.05):inT?grey(.62):grey(.78+.1*Math.sin(x*6+z*5))};
 G.add(terrain(W,Dp,110,76,hf,cf));G.add(skirt(W,Dp,50,hf,-.5,0x4a4c52));
 pebbles(G,90,W,Dp,21,hf,0x8c8d92,(x,z)=>Math.abs(x-.35)<.6&&Math.abs(z-.35)<.25);
 /* rock 73255 nearby (shown simply) */
 const rock=lump(77,.16,.11,.13,0x6f7178,.96);rock.position.set(1.45,hf(1.45,-.55)+.08,-.55);G.add(rock);
 const rl=tag('Rock 73255 (nearby)',1.3,36);rl.position.set(1.45,.62,-.55);G.add(rl);
 const dl=tag('Trench · about 10–15 cm deep',1.8,36);dl.position.set(-.2,.8,-.05);G.add(dl);
 const aT=anchor(G,.35,-.02,.35),aS=anchor(G,-.6,.1,1),aR=anchor(G,1.45,.12,-.4);
 return{G,upd:null,pins:[aT,aS,aR],cy:-.2,rx:.5}}
/* ---------- Model 4: Lunar Module Challenger (simplified) ---------- */
function mLM(){const G=new THREE.Group(),W=4.8,Dp=3.4,hf=moonHf(2.1,.7);
 G.add(terrain(W,Dp,60,42,hf,moonCf(3)));G.add(skirt(W,Dp,40,hf,-.34,0x4a4c52));
 pebbles(G,80,W,Dp,17,hf,0x8c8d92,(x,z)=>Math.hypot(x,z)<1.2);
 const gold=hmat(0xd8a63a,.9),silver=hmat(0xc9ccd4,.9),dark=hmat(0x3a3f4b,.95),L=new THREE.Group();
 /* descent stage: octagonal gold body on four legs */
 const ds=edges(new THREE.Mesh(new THREE.CylinderGeometry(.62,.62,.5,8),gold),0xfff0b0,.3);ds.position.y=.75;ds.rotation.y=Math.PI/8;L.add(ds);
 [[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([sx,sz])=>{L.add(cylBetween([sx*.42,.7,sz*.42],[sx*1.02,.06,sz*1.02],.03,silver));L.add(cylBetween([sx*.42,.55,sz*.42],[sx*.85,.22,sz*.85],.018,silver));
  const pad=new THREE.Mesh(new THREE.CylinderGeometry(.13,.15,.04,16),silver);pad.position.set(sx*1.02,.04,sz*1.02);L.add(pad)});
 const lad=new THREE.Group();for(let i=0;i<6;i++){lad.add(cylBetween([.68,.2+i*.09,-.1],[.68,.2+i*.09,.1],.008,silver))}lad.add(cylBetween([.68,.15,-.1],[.68,.7,-.1],.01,silver));lad.add(cylBetween([.68,.15,.1],[.68,.7,.1],.01,silver));L.add(lad);
 /* ascent stage: the crew cabin on top, which flew back up */
 const AS=new THREE.Group();const cab=edges(new THREE.Mesh(new THREE.BoxGeometry(.8,.55,.75),silver),0xe8f4ff,.3);AS.add(cab);
 const nose=edges(new THREE.Mesh(new THREE.CylinderGeometry(.3,.34,.4,8),silver),0xe8f4ff,.3);nose.rotation.z=Math.PI/2;nose.position.set(.45,-.05,0);AS.add(nose);
 const win=new THREE.Mesh(new THREE.BoxGeometry(.02,.12,.18),new THREE.MeshBasicMaterial({color:0x0e1218}));win.position.set(.66,.06,0);AS.add(win);
 const ant=cylBetween([-.1,.27,0],[-.1,.55,0],.012,dark);AS.add(ant);const dish=new THREE.Mesh(new THREE.SphereGeometry(.09,12,8,0,6.3,0,1.2),silver);dish.position.set(-.1,.58,0);AS.add(dish);
 AS.position.y=1.29;L.add(AS);L.position.y=hf(0,0);G.add(L);
 const nl=tag('Challenger',1.1,40);nl.position.set(0,2.15,0);G.add(nl);
 const aCh=anchor(G,-.35,1.35,.4),aLand=anchor(G,1.02,.12,1.02),aGo=anchor(G,.1,1.6,-.3);
 const base=AS.position.y;const upd=t=>{AS.position.y=base+.02*Math.sin(t*1.2)};
 return{G,upd,pins:[aCh,aLand,aGo],cy:-.75,rx:.22}}
const BX={rake:mRake,boulder:mBoulder,trench:mTrench,lm:mLM};
/* ---------- 3D scene (same controls as the other holograms) ---------- */
function open3d(c,d){try{const ren=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,60),B=BX[d.model]();
 sc.add(new THREE.AmbientLight(0xffffff,.72));const dl=new THREE.DirectionalLight(0xfff6ea,.95);dl.position.set(3,4,4);sc.add(dl);
 const G=B.G;G.position.y=B.cy||0;G.rotation.x=B.rx||.25;sc.add(G);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.015,6,64),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;sc.add(ring);
 const o={ren,sc,cam,G,pins:B.pins,drag:0,t:0,z:d.z0,zr:d.zr,P:new Map(),auto:1};R=o;cam.position.set(0,.6,d.z0);
 const cv=c,Z=v=>Math.max(o.zr[0],Math.min(o.zr[1],v));
 cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);o.P.set(e.pointerId,[e.clientX,e.clientY]);o.auto=0};
 cv.onpointermove=e=>{const p=o.P.get(e.pointerId);if(!p)return;if(o.P.size===1){G.rotation.y+=(e.clientX-p[0])*.01;G.rotation.x=Math.max(-.2,Math.min(1.2,G.rotation.x+(e.clientY-p[1])*.01))}else{const q=[...o.P.entries()].find(k=>k[0]!==e.pointerId)[1],d0=Math.hypot(p[0]-q[0],p[1]-q[1]),d1=Math.hypot(e.clientX-q[0],e.clientY-q[1]);o.z=Z(o.z*d0/d1)}o.P.set(e.pointerId,[e.clientX,e.clientY])};
 cv.onpointerup=cv.onpointercancel=e=>o.P.delete(e.pointerId);cv.onwheel=e=>{e.preventDefault();o.z=Z(o.z+e.deltaY*.004)};
 const v=new THREE.Vector3();
 const tick=()=>{o.raf=requestAnimationFrame(tick);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.round(w*Math.min(2,devicePixelRatio))){ren.setPixelRatio(Math.min(2,devicePixelRatio));ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
  o.t+=.016;if(o.auto)G.rotation.y+=.004;ring.position.y=Math.sin(o.t*1.3)*1.1;cam.position.z+=(o.z-cam.position.z)*.12;if(B.upd)B.upd(o.t,o);ren.render(sc,cam);
  el.querySelectorAll('.cu-pin').forEach((b,i)=>{o.pins[i].getWorldPosition(v);v.project(cam);b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px'})};
 tick();return true}catch(e){return false}}
/* ---------- photo viewer: ID, title, date, camera, credit, source ---------- */
function lightbox(p){lb.hidden=false;const row=(k,v)=>`<dt>${k}</dt><dd>${v?esc(v):`<span class="na">${NA}</span>`}</dd>`;
 lb.innerHTML=`<div class="cu-lbi"><img src="${IM(p)}" alt="${esc(p.t)}"><h3>${esc(p.t)}</h3><p style="font-size:18px;margin:0">${esc(p.w)}</p><dl class="cu-meta">${row('NASA photo ID',p.id)}${row('Title',p.t)}<dt>Taken by</dt><dd><span class="ig-badge ${BC[p.by]}">${esc(BY[p.by][1])}</span></dd>${row('Camera',p.cam)}${row('Date',p.date)}${row('Credit',p.cr)}${p.fc?`<dt>${esc(p.fcl||'Note')}</dt><dd><b>${esc(p.fcb)}.</b> ${esc(p.fc)}</dd>`:''}<dt>Source</dt><dd><a href="${p.src[1]}" target="_blank" rel="noopener">${esc(p.src[0])}</a></dd></dl><div><button class="btn" id="lvLbX">Close photo</button></div></div>`;
 document.getElementById('lvLbX').onclick=()=>{lb.hidden=true;lb.innerHTML=''};document.getElementById('lvLbX').focus()}
function show(name,done){const d=D[name];if(!d){done();return}stop();
 if(!el){el=document.createElement('div');el.className='cu';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');document.body.appendChild(el);lb=document.createElement('div');lb.className='cu-lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');document.body.appendChild(lb);
  lb.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true;lb.innerHTML=''}})}
 const seen=new Set();let fin=0;const J=jr();
 el.hidden=false;el.setAttribute('aria-label',d.title);
 const gal=d.ph.length?`<div class="cu-gal"><h3>Real NASA photograph${d.ph.length>1?'s':''} · tap to enlarge</h3><div class="cu-row">${d.ph.map((p,i)=>`<button class="cu-th" data-p="${i}"><img src="${IM(p)}" alt="${esc(p.t)}" loading="lazy"><span><em>PHOTO 0${i+1} · ${esc(p.id)}</em><br>${esc(p.t)}<br><small class="ig-by ${BC[p.by]}">${esc(BY[p.by][1])}</small></span></button>`).join('')}</div></div>`:'';
 el.innerHTML=`<div class="cu-in"><div class="cu-hd"><div><p class="eyebrow">Scientific discovery · ${esc(d.kind)}</p><h2>${esc(d.title)}</h2></div><span class="cu-jr">📔 Moon Science Journal: <b>${J.e.length}</b> of ${d.n} entries · <b>${J.p}</b> points</span></div>
 <div class="cu-main"><div class="cu-stage" id="lvSt"><canvas id="lvCv"></canvas>${d.info.map((x,i)=>`<button class="cu-pin" data-i="${i}" aria-label="${esc(x[0])}">${i+1}</button>`).join('')}<span class="cu-tip">Drag to turn · scroll or pinch to zoom</span><span class="cu-lab">${REC}</span></div>
 <div><div class="cu-chips">${d.info.map((x,i)=>`<button class="cu-chip" data-i="${i}"><b>${i+1}</b>${esc(x[0])}</button>`).join('')}</div><div class="cu-info" id="lvInfo" aria-live="polite">👆 Tap a question, or a numbered circle on the model.</div></div></div>
 ${gal}
 <p class="cu-note">${esc(d.note)}</p>
 <div class="cu-foot"><div id="lvDone" style="display:contents"></div><button class="btn" id="lvGo">Continue →</button></div></div>`;
 const pick=i=>{seen.add(i);const x=d.info[i];$$('#lvInfo').innerHTML=`<b>${esc(x[0])}</b><br>${esc(x[1])}${x[2]?`<small>${esc(x[2])}</small>`:''}`;
  el.querySelectorAll('.cu-chip').forEach((b,k)=>{b.classList.toggle('cur',k===i);b.classList.toggle('seen',seen.has(k))});el.querySelectorAll('.cu-pin').forEach((b,k)=>b.classList.toggle('on',seen.has(k)));
  try{typeof SFX!=='undefined'&&SFX.tick&&SFX.tick()}catch(e){}
  if(seen.size===d.info.length&&!fin){fin=1;$$('#lvDone').innerHTML=`<div class="cu-done"><b>Discovery complete!</b><p>${esc(d.done)} +100 points · saved in your Moon Science Journal.</p></div>`;try{typeof SFX!=='undefined'&&SFX.chime&&SFX.chime()}catch(e){}}};
 el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>pick(+b.dataset.i));el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>lightbox(d.ph[+b.dataset.p]));
 if(!open3d($$('#lvCv'),d))$$('#lvSt').innerHTML='<p style="padding:30px">The 3D view needs WebGL. You can still read the facts and see the photos.</p>';
 el.querySelectorAll('.cu-pin').forEach(b=>b.addEventListener('pointerdown',e=>e.stopPropagation()));
 $$('#lvGo').onclick=()=>{stop();el.hidden=true;lb.hidden=true;const j=jr();if(!j.e.includes(name))j.e.push(name);j.p+=Math.round(seen.size*100/d.info.length);try{localStorage.setItem(JK,JSON.stringify(j))}catch(e){}done()};$$('#lvGo').focus()}
window.lrvDiscover=show;
})();

/* Surveyor 3: scientific discovery hologram (educational 3D reconstruction + real NASA photographs).
   Opens after each soil test in the Surveyor 3 game. Same look and behaviour as the other holograms (cu-* and ig-* styles).
   PHOTOS: NASA/JPL Surveyor III press photographs, as held in the Lunar and Planetary Institute's Surveyor III press image archive.
   Each picture was compared with that archive and each caption fact comes from NASA's original press caption.
   Photo files live in assets/img/sv3-*.jpg. */
(function(){
const NA='Not given in the NASA caption',IM=p=>'assets/img/'+p.f+'.jpg';
const BY={sv:['Surveyor III','Taken on the Moon by Surveyor III’s TV camera']};
const BC={sv:'ig-per'};
const REC='Educational 3D Reconstruction — Based on NASA Mission Imagery';
const LPI='https://www.lpi.usra.edu/resources/mapcatalog/Surveyor/press_releases/surveyor_III/';
const SRC=n=>['LPI · Surveyor III press photo '+n,LPI+n+'.jpg'];
const CAM='Surveyor III television camera';
const GAME='“Site A”, “Site B” and “Site C” are stops in this game, not official NASA site names.';
const D={
'Site A':{title:'Site A · Digging the First Trench',kind:'Lunar soil excavation',model:'trench',n:3,zr:[3.2,9],z0:6.2,
 info:[
  ['Surface Sampler','Surveyor III carried a small scoop on a long, motor-driven arm. It could dig, scrape, make trenches and pick things up while the TV camera watched.','Source: Smithsonian National Air and Space Museum.'],
  ['The First Trench','The scoop was pulled through the ground to dig a trench. NASA’s caption says it took “a clean bite” out of the lunar soil.','Photo 67-H-473, released 22 April 1967.'],
  ['Trench Size','After one pass the trench was 15 inches (38.1 cm) long, 2 inches (5.08 cm) wide and about 3 to 4 inches (7.6 to 10.2 cm) deep. Its far end was about 40 inches (about 1 m) from the spacecraft.','From NASA caption 67-H-481.']],
 done:'You saw how Surveyor III dug the first trench on the Moon and how big it was after one pass of the scoop.',
 note:GAME+' Two NASA photographs are shown here.',
 ph:[
  {f:'sv3-67-h-473',t:'Upper end of the first trench',id:'67-H-473',by:'sv',cam:CAM,date:'Released 22 April 1967',cr:'NASA/JPL',
   w:'A close-up of the upper end of the first trench dug by the surface sampler. The sampler has taken a clean bite out of the lunar soil.',src:SRC('67-H-473')},
  {f:'sv3-67-h-481',t:'Surface sampler and its trench (mosaic)',id:'67-H-481',by:'sv',cam:CAM+' · mosaic of four narrow-angle pictures',date:'Taken 22–23 April 1967 · released 24 April 1967',cr:'NASA/JPL',
   w:'The scoop rests at the far end (top) of the trench, ready for a second pass. After one pass the trench is 15 in (38.1 cm) long, 2 in (5.08 cm) wide and about 3–4 in (7.6–10.2 cm) deep. Marks on the drag tape are 2 in (5.08 cm) apart.',src:SRC('67-H-481')}]},
'Site B':{title:'Site B · Soil Strength and Bearing Tests',kind:'How strong is the lunar soil?',model:'bearing',n:3,zr:[3.2,9],z0:6.2,
 info:[
  ['Firm Trench Wall','On 27 April the scoop dug trench #3. After the first pass, the clear-cut head of the trench stood firm. The soil was cohesive: it held its shape. Grooves were made by screw heads on the scoop blade.','From NASA caption 67-H-837.'],
  ['Cracks in the Surface','Also on 27 April, the sampler was driven into the surface. Big cracks spread out around the spot where it pressed down.','From NASA caption 67-H-838.'],
  ['Bearing Test','In a bearing test the scoop is pushed onto the ground to see how much weight the soil can hold. This test, several feet from footpad #2, only wrinkled the soil slightly.','Why it mattered: Surveyor landers were used to help choose safe landing sites for Apollo (Smithsonian).']],
 done:'You learned how Surveyor III pressed and dug into the Moon to test how strong its soil is.',
 note:GAME,
 ph:[
  {f:'sv3-67-h-837',t:'Trench #3: the soil holds its shape',id:'67-H-837',by:'sv',cam:CAM,date:'Taken 27 April 1967 · released 23 May 1967',cr:'NASA/JPL',
   w:'The clear-cut head of trench #3 stands firm after the first pass of the scoop. Grooves at the head of the trench were made by screw heads on the scoop blade.',src:SRC('67-H-837')},
  {f:'sv3-67-h-838',t:'Cracks after the sampler pressed down',id:'67-H-838',by:'sv',cam:CAM,date:'Taken 27 April 1967 · released 23 May 1967',cr:'NASA/JPL',
   w:'Extensive cracks appeared after the surface sampler was driven into the lunar surface. They are seen at a high sun angle. The shadow of the sampler arm is at lower right.',src:SRC('67-H-838')},
  {f:'sv3-67-h-840',t:'Soil slightly wrinkled by a bearing test',id:'67-H-840',by:'sv',cam:CAM,date:'Taken shortly after landing (exact date not given) · released 23 May 1967',cr:'NASA/JPL',
   w:'A bearing test by the surface sampler wrinkled the lunar soil slightly. The test was several feet from the spacecraft’s footpad #2.',src:SRC('67-H-840')}]},
'Site C':{title:'Site C · Rock or Soil Clump?',kind:'Lunar rock and material investigation',model:'rock',n:3,zr:[3.2,9],z0:6.2,
 info:[
  ['Picking Up a Rock','On 28 April the scoop moved into position to pick up a rock. On the way it left a dark, curved trail of soil across the ground.','From NASA caption 67-H-843.'],
  ['Clod, Not a Rock','On 30 April the scoop pressed on something that looked like a small rock. It crumbled, so it was really a clod: a lump of soil stuck together.','From NASA caption 67-H-834.'],
  ['A Real Rock','Also on 30 April, the sampler dug up an object that was partly buried. When the scoop squeezed it, it stayed together: a fairly solid rock, not a clump of soil.','From NASA caption 67-H-836.']],
 done:'You saw how a simple squeeze from the scoop told scientists whether an object was a solid rock or just a lump of soil.',
 note:GAME,
 ph:[
  {f:'sv3-67-h-843',t:'Sampler moves into position to pick up a rock',id:'67-H-843',by:'sv',cam:CAM,date:'Taken 28 April 1967 · released 23 May 1967',cr:'NASA/JPL',
   w:'The bucket left a dark arcing trail of lunar soil to the right as it moved. Bearing test holes are also visible to the right of the extended sampler arm.',src:SRC('67-H-843')},
  {f:'sv3-67-h-834',t:'An apparent rock turns out to be a clod',id:'67-H-834',by:'sv',cam:CAM,date:'Taken 30 April 1967 · released 23 May 1967',cr:'NASA/JPL',
   w:'The surface sampler bears down on an apparent small rock or clod. The object crumbled, proving to be a clod.',src:SRC('67-H-834')},
  {f:'sv3-67-h-836',t:'A partly buried object is a fairly solid rock',id:'67-H-836',by:'sv',cam:CAM,date:'Taken 30 April 1967 · released 23 May 1967',cr:'NASA/JPL',
   w:'The object was partly embedded in the surface. When it was dug up and lifted, the scoop gave it a squeeze and found it was a fairly solid rock rather than a clump of soil.',src:SRC('67-H-836')}]}};
const $$=(s,r)=>(r||document).querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const JK='bt-moon-journal-sv3';
const jr=()=>{try{return JSON.parse(localStorage.getItem(JK))||{e:[],p:0}}catch(e){return{e:[],p:0}}};
let el,lb,R=null;
function stop(){if(!R)return;cancelAnimationFrame(R.raf);try{R.ren.dispose()}catch(e){}R=null}
/* ---------- small 3D helpers ---------- */
const rnd=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sm=(a,b,x)=>{x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)},mix=(a,b,t)=>a+(b-a)*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const hmat=(c,o)=>new THREE.MeshStandardMaterial({color:c,transparent:true,opacity:o==null?.88:o,roughness:.9,flatShading:true});
const edges=(m,c,o)=>{m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),new THREE.LineBasicMaterial({color:c||0x7cc4ff,transparent:true,opacity:o==null?.22:o})));return m};
function cylBetween(a,b,r,m){const A=V(...a),B=V(...b),d=B.clone().sub(A),c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),8),m);c.position.copy(A.clone().add(B).multiplyScalar(.5));c.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());return c}
function tag(txt,w,fs){const c=document.createElement('canvas'),x0=c.getContext('2d');fs=fs||44;x0.font='600 '+fs+'px sans-serif';const tw=Math.ceil(x0.measureText(txt).width)+44,th=fs+30;c.width=tw;c.height=th;const x=c.getContext('2d');
 x.fillStyle='rgba(6,10,18,.82)';x.fillRect(0,0,tw,th);x.strokeStyle='rgba(124,196,255,.7)';x.lineWidth=3;x.strokeRect(2,2,tw-4,th-4);x.fillStyle='#e8f4ff';x.font='600 '+fs+'px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,tw/2,th/2+2);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(w,w*th/tw,1);s.renderOrder=5;return s}
function terrain(W,Dp,nx,nz,hf,cf){const g=new THREE.PlaneGeometry(W,Dp,nx,nz);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=new Float32Array(p.count*3);
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=hf(x,z);p.setY(i,y);const c=cf(x,z,y);col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2]}
 g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true,transparent:true,opacity:.94}));
 m.add(new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.06})));return m}
function skirt(W,Dp,n,hf,yb,col){const pos=[],E=[];
 for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n,x0=-W/2+W*t0,x1=-W/2+W*t1,z0=-Dp/2+Dp*t0,z1=-Dp/2+Dp*t1;
  E.push([[x0,-Dp/2],[x1,-Dp/2]],[[x0,Dp/2],[x1,Dp/2]],[[-W/2,z0],[-W/2,z1]],[[W/2,z0],[W/2,z1]])}
 E.forEach(([A,B])=>{const a0=V(A[0],hf(A[0],A[1]),A[1]),b0=V(B[0],hf(B[0],B[1]),B[1]),a1=V(A[0],yb,A[1]),b1=V(B[0],yb,B[1]);[a0,a1,b0,b0,a1,b1].forEach(v=>pos.push(v.x,v.y,v.z))});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.computeVertexNormals();return new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:1,transparent:true,opacity:.7,side:2,flatShading:true}))}
function pebbles(G,n,W,Dp,seed,hf,col,skip){const r=rnd(seed);for(let i=0;i<n;i++){const x=(r()-.5)*(W-.3),z=(r()-.5)*(Dp-.3);if(skip&&skip(x,z)){continue}const s=.02+r()*.035,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(col).multiplyScalar(.6+r()*.6),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(x,hf(x,z)+s*.3,z);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}}
function lump(seed,sx,sy,sz,c,o){const r=rnd(seed),g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position,v=V(0,0,0);for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);const j=1+(r()-.5)*.28;p.setXYZ(k,v.x*j,v.y*j,v.z*j)}g.computeVertexNormals();
 const m=edges(new THREE.Mesh(g,hmat(c,o)),0xe8f4ff,.14);m.scale.set(sx,sy,sz);return m}
const anchor=(P,x,y,z)=>{const o=new THREE.Object3D();o.position.set(x,y,z);P.add(o);return o};
const grey=(k)=>[.6*k,.6*k,.62*k];
const moonHf=(a,b)=>(x,z)=>.035*Math.sin(x*1.6+z*.9+a)+.03*Math.sin(z*2.3-x*.6+b)+.012*Math.sin(x*5.1+z*3.7);
const moonCf=seed=>{const r=rnd(seed);return(x,z)=>{const n=.5+.5*Math.sin(x*5+z*4)*Math.sin(z*3.3-x*1.7);return grey(.82+.16*n+(r()-.5)*.05)}};
/* ---------- shared Surveyor scoop and arm ---------- */
function scoopArm(){const metal=hmat(0xd6dae2,.95),dark=hmat(0x3a3f4b,.95),G=new THREE.Group();
 const arm=new THREE.Group();G.add(arm);
 arm.add(cylBetween([-2.3,1.3,-.08],[0,.42,-.08],.03,metal));arm.add(cylBetween([-2.3,1.1,.08],[0,.42,.08],.03,metal));
 for(let i=1;i<6;i++){const t=i/6;arm.add(cylBetween([mix(-2.3,0,t),mix(1.3,.42,t),-.08],[mix(-2.3,0,t+.08),mix(1.1,.42,t+.08),.08],.012,metal))}
 const sc=new THREE.Group();sc.position.set(0,.3,0);G.add(sc);
 const box=edges(new THREE.Mesh(new THREE.BoxGeometry(.22,.16,.2),metal),0xe8f4ff,.35);sc.add(box);
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.03,.1,.21),dark);blade.position.set(.12,-.06,0);sc.add(blade);
 const door=new THREE.Mesh(new THREE.BoxGeometry(.2,.02,.2),metal);door.position.set(0,-.09,0);sc.add(door);
 return{G,sc,arm}}
const moonG=(seed)=>{const hf=moonHf(seed*.3,seed*.7);return{hf,cf:moonCf(seed)}};
/* ---------- Model 1: Site A, the first trench ---------- */
function mTrench(){const G=new THREE.Group(),W=4.4,Dp=3,b=moonG(5);
 /* trench: about 2 in wide, 15 in long, 3-4 in deep, shown to scale along x (1 unit = about 15 cm) */
 const L=2.54,Wd=.34,Dd=.6,x0=-1.27;
 const tr=(x,z)=>(x>x0&&x<x0+L&&Math.abs(z)<Wd/2)?-Dd*sm(0,.12,x-x0)*sm(Wd/2,Wd/2-.05,Math.abs(z)):0;
 const hf=(x,z)=>b.hf(x,z)+tr(x,z);const cf=(x,z,y)=>tr(x,z)<-.02?grey(.55):b.cf(x,z,y);
 G.add(terrain(W,Dp,120,70,hf,cf));G.add(skirt(W,Dp,40,hf,-.9,0x4a4c52));
 pebbles(G,120,W,Dp,9,hf,0x8c8d92,(x,z)=>x>x0-.1&&x<x0+L+.1&&Math.abs(z)<.3);
 const S=scoopArm();S.G.position.set(x0+L+.1,0,0);G.add(S.G);
 const ln=new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(x0,.05,.42),V(x0+L,.05,.42)]),new THREE.LineDashedMaterial({color:0xf7c548,dashSize:.08,gapSize:.05}));ln.computeLineDistances();G.add(ln);
 const lb=tag('15 in (38.1 cm) long · 2 in (5.08 cm) wide',2.1,36);lb.position.set(-.2,.85,1.05);G.add(lb);
 const aS=anchor(S.G,0,.42,0),aT=anchor(G,x0+.5,.05,0),aZ=anchor(G,x0+L*.75,-.2,.18);
 const upd=t=>{const u=(t*.12)%1;S.sc.position.x=-L*sm(0,.8,u);S.sc.position.y=.3-.32*sm(0,.1,u)*(1-sm(.8,.95,u))};
 return{G,upd,pins:[aS,aT,aZ],cy:-.1,rx:.5}}
/* ---------- Model 2: Site B, bearing test, cracks and trench #3 ---------- */
function mBearing(){const G=new THREE.Group(),W=4.4,Dp=3,b=moonG(8);
 const pit=(x,z)=>(Math.abs(x-.4)<.13&&Math.abs(z+.1)<.12)?-.06:0;
 const tr=(x,z)=>(x>-1.9&&x<-.7&&Math.abs(z-.7)<.15)?-.35*sm(-1.9,-1.8,x):0;
 const hf=(x,z)=>b.hf(x,z)+pit(x,z)+tr(x,z);const cf=(x,z,y)=>(pit(x,z)<0||tr(x,z)<-.02)?grey(.6):b.cf(x,z,y);
 G.add(terrain(W,Dp,120,80,hf,cf));G.add(skirt(W,Dp,40,hf,-.6,0x4a4c52));
 pebbles(G,110,W,Dp,13,hf,0x8c8d92,(x,z)=>Math.hypot(x-.4,z+.1)<.9||(x<-.6&&Math.abs(z-.7)<.3));
 /* cracks radiating from the bearing test spot */
 const dk=new THREE.MeshBasicMaterial({color:0x1c1d22}),r=rnd(3),cracks=new THREE.Group();
 for(let k=0;k<9;k++){const a=k/9*6.28+r()*.4,pts=[];let x=.4,z=-.1;for(let i=0;i<6;i++){x+=Math.cos(a+(r()-.5)*.8)*.13;z+=Math.sin(a+(r()-.5)*.8)*.13;pts.push(V(x,hf(x,z)+.012,z))}
  cracks.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),30,.008,4),dk))}
 G.add(cracks);
 const S=scoopArm();S.G.position.set(.4,0,-.1);G.add(S.G);
 const l1=tag('Trench #3 · head stands firm',1.6,36);l1.position.set(-1.3,.45,.7);G.add(l1);
 const aW=anchor(G,-1.85,-.1,.7),aC=anchor(G,.85,.05,.25),aB=anchor(S.G,0,.32,0);
 const upd=t=>{const u=(t*.25)%1,d=sm(.2,.4,u)*(1-sm(.7,.9,u));S.sc.position.y=.36-.36*d;cracks.visible=u>.38||u<.05};
 return{G,upd,pins:[aW,aC,aB],cy:-.1,rx:.5}}
/* ---------- Model 3: Site C, a clod that crumbles and a solid rock ---------- */
function mRock(){const G=new THREE.Group(),W=4.4,Dp=3,b=moonG(3);
 G.add(terrain(W,Dp,80,56,b.hf,(x,z,y)=>{const tr=Math.abs(Math.hypot(x+.2,z+1.6)-1.6)<.06&&z<-.3?.6:1;return b.cf(x,z,y).map(c=>c*tr)}));G.add(skirt(W,Dp,40,b.hf,-.34,0x4a4c52));
 pebbles(G,90,W,Dp,21,b.hf,0x8c8d92,(x,z)=>Math.hypot(x-.9,z-.4)<.4||Math.hypot(x+.8,z-.4)<.4);
 /* clod: several pieces that fall apart */
 const clod=new THREE.Group(),bits=[];const cr=rnd(7);
 for(let i=0;i<7;i++){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(.06+cr()*.03,0),hmat(0x8a8b90,.97));const p=V((cr()-.5)*.14,.07+(cr()-.5)*.08,(cr()-.5)*.14);m.position.copy(p);m.userData.p=p.clone();m.userData.v=V(p.x*2.5,0,p.z*2.5);clod.add(m);bits.push(m)}
 clod.position.set(-.8,b.hf(-.8,.4),.4);G.add(clod);
 const cs=new THREE.Group();cs.position.set(-.8,.6,.4);G.add(cs);const S1=scoopArm();S1.G.position.set(-.8,0,.4);
 /* solid rock: stays whole when squeezed */
 const rock=lump(41,.12,.08,.1,0x7a7c84,.97);rock.position.set(.9,b.hf(.9,.4)+.03,.4);G.add(rock);
 const l1=tag('Clod: crumbles',1.1,36);l1.position.set(-.8,.55,.4);G.add(l1);const l2=tag('Rock: stays whole',1.2,36);l2.position.set(.9,.55,.4);G.add(l2);
 const S=scoopArm();S.G.position.set(.9,0,.4);G.add(S.G);
 const aP=anchor(G,-.2,.05,-.9),aC=anchor(clod,0,.12,0),aR=anchor(G,.9,.15,.4);
 const upd=t=>{const u=(t*.2)%1,d=sm(.15,.35,u);bits.forEach(m=>{const k=sm(.35,.55,u)*(1-sm(.9,1,u));m.position.copy(m.userData.p).addScaledVector(m.userData.v,k);m.position.y=Math.max(.03,m.userData.p.y-.05*k)});
  S.sc.position.y=.3-.24*d+.4*sm(.55,.8,u)*(1-sm(.9,1,u));rock.position.y=b.hf(.9,.4)+.03+.4*sm(.55,.8,u)*(1-sm(.9,1,u))};
 return{G,upd,pins:[aP,aC,aR],cy:-.15,rx:.5}}
const BX={trench:mTrench,bearing:mBearing,rock:mRock};
/* ---------- 3D scene (same controls as the other holograms) ---------- */
function open3d(c,d){try{const ren=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,60),B=BX[d.model]();
 sc.add(new THREE.AmbientLight(0xffffff,.72));const dl=new THREE.DirectionalLight(0xfff6ea,.95);dl.position.set(3,4,4);sc.add(dl);
 const G=B.G;G.position.y=B.cy||0;G.rotation.x=B.rx||.25;sc.add(G);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.015,6,64),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;sc.add(ring);
 const o={ren,sc,cam,G,pins:B.pins,drag:0,t:0,z:d.z0,zr:d.zr,P:new Map(),auto:1};R=o;cam.position.set(0,.6,d.z0);
 const cv=c,Z=v=>Math.max(o.zr[0],Math.min(o.zr[1],v));
 cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);o.P.set(e.pointerId,[e.clientX,e.clientY]);o.auto=0};
 cv.onpointermove=e=>{const p=o.P.get(e.pointerId);if(!p)return;if(o.P.size===1){G.rotation.y+=(e.clientX-p[0])*.01;G.rotation.x=Math.max(-.2,Math.min(1.2,G.rotation.x+(e.clientY-p[1])*.01))}else{const q=[...o.P.entries()].find(k=>k[0]!==e.pointerId)[1],d0=Math.hypot(p[0]-q[0],p[1]-q[1]),d1=Math.hypot(e.clientX-q[0],e.clientY-q[1]);o.z=Z(o.z*d0/d1)}o.P.set(e.pointerId,[e.clientX,e.clientY])};
 cv.onpointerup=cv.onpointercancel=e=>o.P.delete(e.pointerId);cv.onwheel=e=>{e.preventDefault();o.z=Z(o.z+e.deltaY*.004)};
 const v=new THREE.Vector3();
 const tick=()=>{o.raf=requestAnimationFrame(tick);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.round(w*Math.min(2,devicePixelRatio))){ren.setPixelRatio(Math.min(2,devicePixelRatio));ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
  o.t+=.016;if(o.auto)G.rotation.y+=.004;ring.position.y=Math.sin(o.t*1.3)*1.1;cam.position.z+=(o.z-cam.position.z)*.12;if(B.upd)B.upd(o.t,o);ren.render(sc,cam);
  el.querySelectorAll('.cu-pin').forEach((b,i)=>{o.pins[i].getWorldPosition(v);v.project(cam);b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px'})};
 tick();return true}catch(e){return false}}
/* ---------- photo viewer: ID, title, date, camera, credit, source ---------- */
function lightbox(p){lb.hidden=false;const row=(k,v)=>`<dt>${k}</dt><dd>${v?esc(v):`<span class="na">${NA}</span>`}</dd>`;
 lb.innerHTML=`<div class="cu-lbi"><img src="${IM(p)}" alt="${esc(p.t)}"><h3>${esc(p.t)}</h3><p style="font-size:18px;margin:0">${esc(p.w)}</p><dl class="cu-meta">${row('NASA photo ID',p.id)}${row('Title',p.t)}<dt>Taken by</dt><dd><span class="ig-badge ${BC[p.by]}">${esc(BY[p.by][1])}</span></dd>${row('Camera',p.cam)}${row('Date',p.date)}${row('Credit',p.cr)}${p.fc?`<dt>${esc(p.fcl||'Note')}</dt><dd><b>${esc(p.fcb)}.</b> ${esc(p.fc)}</dd>`:''}<dt>Source</dt><dd><a href="${p.src[1]}" target="_blank" rel="noopener">${esc(p.src[0])}</a></dd></dl><div><button class="btn" id="svLbX">Close photo</button></div></div>`;
 document.getElementById('svLbX').onclick=()=>{lb.hidden=true;lb.innerHTML=''};document.getElementById('svLbX').focus()}
function show(name,done){const d=D[name];if(!d){done();return}stop();
 if(!el){el=document.createElement('div');el.className='cu';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');document.body.appendChild(el);lb=document.createElement('div');lb.className='cu-lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');document.body.appendChild(lb);
  lb.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true;lb.innerHTML=''}})}
 const seen=new Set();let fin=0;const J=jr();
 el.hidden=false;el.setAttribute('aria-label',d.title);
 const gal=d.ph.length?`<div class="cu-gal"><h3>Real NASA photograph${d.ph.length>1?'s':''} · tap to enlarge</h3><div class="cu-row">${d.ph.map((p,i)=>`<button class="cu-th" data-p="${i}"><img src="${IM(p)}" alt="${esc(p.t)}" loading="lazy"><span><em>PHOTO 0${i+1} · ${esc(p.id)}</em><br>${esc(p.t)}<br><small class="ig-by ${BC[p.by]}">${esc(BY[p.by][1])}</small></span></button>`).join('')}</div></div>`:'';
 el.innerHTML=`<div class="cu-in"><div class="cu-hd"><div><p class="eyebrow">Scientific discovery · ${esc(d.kind)}</p><h2>${esc(d.title)}</h2></div><span class="cu-jr">📔 Moon Science Journal: <b>${J.e.length}</b> of ${d.n} entries · <b>${J.p}</b> points</span></div>
 <div class="cu-main"><div class="cu-stage" id="svSt"><canvas id="svCv"></canvas>${d.info.map((x,i)=>`<button class="cu-pin" data-i="${i}" aria-label="${esc(x[0])}">${i+1}</button>`).join('')}<span class="cu-tip">Drag to turn · scroll or pinch to zoom</span><span class="cu-lab">${REC}</span></div>
 <div><div class="cu-chips">${d.info.map((x,i)=>`<button class="cu-chip" data-i="${i}"><b>${i+1}</b>${esc(x[0])}</button>`).join('')}</div><div class="cu-info" id="svInfo" aria-live="polite">👆 Tap a question, or a numbered circle on the model.</div></div></div>
 ${gal}
 <p class="cu-note">${esc(d.note)}</p>
 <div class="cu-foot"><div id="svDone" style="display:contents"></div><button class="btn" id="svGo">Continue →</button></div></div>`;
 const pick=i=>{seen.add(i);const x=d.info[i];$$('#svInfo').innerHTML=`<b>${esc(x[0])}</b><br>${esc(x[1])}${x[2]?`<small>${esc(x[2])}</small>`:''}`;
  el.querySelectorAll('.cu-chip').forEach((b,k)=>{b.classList.toggle('cur',k===i);b.classList.toggle('seen',seen.has(k))});el.querySelectorAll('.cu-pin').forEach((b,k)=>b.classList.toggle('on',seen.has(k)));
  try{typeof SFX!=='undefined'&&SFX.tick&&SFX.tick()}catch(e){}
  if(seen.size===d.info.length&&!fin){fin=1;$$('#svDone').innerHTML=`<div class="cu-done"><b>Discovery complete!</b><p>${esc(d.done)} +100 points · saved in your Moon Science Journal.</p></div>`;try{typeof SFX!=='undefined'&&SFX.chime&&SFX.chime()}catch(e){}}};
 el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>pick(+b.dataset.i));el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>lightbox(d.ph[+b.dataset.p]));
 if(!open3d($$('#svCv'),d))$$('#svSt').innerHTML='<p style="padding:30px">The 3D view needs WebGL. You can still read the facts and see the photos.</p>';
 el.querySelectorAll('.cu-pin').forEach(b=>b.addEventListener('pointerdown',e=>e.stopPropagation()));
 $$('#svGo').onclick=()=>{stop();el.hidden=true;lb.hidden=true;const j=jr();if(!j.e.includes(name))j.e.push(name);j.p+=Math.round(seen.size*100/d.info.length);try{localStorage.setItem(JK,JSON.stringify(j))}catch(e){}done()};$$('#svGo').focus()}
window.svDiscover=show;
})();

/* Sojourner (Mars Pathfinder): scientific discovery hologram for the three rocks it studied with its APXS.
   Educational 3D reconstructions + real NASA photographs. Same look and controls as the other holograms (cu-* styles).
   PHOTOS: eight NASA images, each saved from its official NASA file (science.nasa.gov Photojournal, or the NSSDC
   Mars Pathfinder archive for image 81097). Titles, dates, cameras and credits come from those NASA pages.
   Sojourner studied these rocks on Mars. It did not collect them or bring them back to Earth. */
(function(){
const NA='Not given in the NASA record',IM=p=>'assets/img/'+p.f+'.jpg';
const BY={imp:['IMP','Taken on Mars by the Pathfinder lander’s camera (IMP)'],rov:['Rover','Taken on Mars by Sojourner’s own camera']};
const BC={imp:'ig-per',rov:'ig-per'};
const REC='Educational 3D Reconstruction — Based on NASA Mission Imagery';
const PJ=s=>'https://science.nasa.gov/photojournal/'+s+'/';
const IMP='Imager for Mars Pathfinder (IMP)',ROV='Sojourner Rover Camera';
const D={
'Barnacle Bill':{title:'Barnacle Bill · The First Rock Sojourner Analysed',kind:'Rock analysis with the APXS',model:'bb',n:3,zr:[2.4,8],z0:4.3,
 info:[
  ['Rock Surface','Barnacle Bill is a small rock right next to the Pathfinder lander. Its surface is rough and full of little pits and bumps. NASA made extra-sharp “super resolution” pictures to study this texture.','From NASA PIA00820 and PIA00819.'],
  ['APXS Instrument','APXS means Alpha Proton X-ray Spectrometer. It sits on the back of Sojourner. The rover backed up and pressed it against the rock to measure which chemical elements the rock contains. The rock stayed on Mars.','PIA00644 shows parts of the APXS studying Barnacle Bill on Sol 4 (8 July 1997).'],
  ['Rock Composition','The APXS showed the rock is fairly rich in silica, like a rock on Earth called basaltic andesite. NASA said it could be a true andesite or a mix of different materials, so where it came from is not fully known.','Barnacle Bill was the first rock studied by Sojourner’s APXS.']],
 done:'You saw how Sojourner pressed its APXS sensor against Barnacle Bill to read its chemistry, right there on Mars.',
 note:'The 3D model is a simplified reconstruction. Sojourner did not collect this rock; it studied it on Mars. PIA00819 is a red-blue 3D picture: use red-blue glasses to see it in depth.',
 ph:[
  {f:'soj-bb-pia00820',t:'Super Resolution View of “Barnacle Bill”',id:'PIA00820',by:'imp',cam:IMP,date:'Frames taken on Sol 2 · added 16 March 1998',cr:'NASA/JPL',
   w:'Barnacle Bill sits just west-northwest of the lander. Several camera frames were combined to make a sharper picture of its texture. The colour was adjusted to look close to Mars’ true colour. Processed image.',src:['NASA Photojournal · PIA00820',PJ('super-resolution-view-of-barnacle-bill')]},
  {f:'soj-bb-pia00644',t:'APXS on “Barnacle Bill” – Color',id:'PIA00644',by:'rov',cam:ROV,date:'Taken 8 July 1997 (Sol 4) · added 9 July 1997',cr:'NASA/JPL',
   w:'Taken by a camera on the Sojourner rover. Parts of the rover’s Alpha Proton X-ray Spectrometer (APXS) are visible studying Barnacle Bill.',src:['NASA Photojournal · PIA00644',PJ('apxs-on-barnacle-bill-color')]},
  {f:'soj-bb-pia00819',t:'Super Resolution Anaglyph of Barnacle Bill',id:'PIA00819',by:'imp',cam:IMP,date:'Frames taken on Sol 2 · added 16 March 1998',cr:'NASA/JPL',
   w:'A red-blue 3D (anaglyph) picture of Barnacle Bill made from sharpened camera frames. You need red-blue 3D glasses to see the surface detail in depth. Processed image.',src:['NASA Photojournal · PIA00819',PJ('super-resolution-anaglyph-of-barnacle-bill')]}]},
'Yogi':{title:'Yogi · The Big Rounded Rock',kind:'Rock analysis with the APXS',model:'yogi',n:3,zr:[3.6,10],z0:6.8,
 info:[
  ['Rock Shape','Yogi is a large, rounded rock, much bigger than Sojourner. On Sol 6 the rover’s left rear wheel climbed onto it, so the rover could get as close as possible.','From NASA PIA00670 (10 July 1997).'],
  ['Weathered Surface','Much of Yogi is covered by a weathered coating, but one area looks fresher. Over a long time, wind and dust can slowly change the outside of rocks on Mars.','NASA describes large rounded rocks like Yogi as having weathered coatings (PIA00780).'],
  ['Rock Composition','After touching Yogi, Sojourner placed its APXS on the rock. NASA’s early results showed Yogi had less quartz than Barnacle Bill and was more like common basalt, a rock made from lava.','Early NASA analysis. Exact amounts are not shown here.']],
 done:'You saw how Sojourner climbed up to Yogi and found it was more like common basalt than Barnacle Bill.',
 note:'The 3D model is a simplified reconstruction. Sojourner studied Yogi on Mars; it did not collect the rock or bring it back to Earth.',
 ph:[
  {f:'soj-yogi-pia00670',t:'Sojourner Does a Wheelie on “Yogi”',id:'PIA00670',by:'imp',cam:IMP,date:'Taken 10 July 1997 (Sol 6) · added 11 July 1997',cr:'NASA/JPL',
   w:'Sojourner touches the rock Yogi. Its left rear wheel has climbed onto the rock so the rover can get as close as possible. The rover would then use its APXS to study Yogi’s chemistry.',src:['NASA Photojournal · PIA00670',PJ('sojourner-does-a-wheelie-on-yogi')]},
  {f:'soj-yogi-pia00672',t:'Sojourner at “Yogi” – Color',id:'PIA00672',by:'rov',cam:ROV+' (rear colour camera)',date:'Added 11 July 1997',cr:'NASA/JPL',
   w:'This view from the Sojourner rover’s rear colour camera shows a close-up of the large rock nicknamed Yogi.',src:['NASA Photojournal · PIA00672',PJ('sojourner-at-yogi-color')]},
  {f:'soj-yogi-pia00998',t:'Sojourner’s View of “Yogi”',id:'PIA00998',by:'rov',cam:ROV,date:'Taken on Sol 70 · added 4 November 1997',cr:'NASA/JPL',
   w:'Rocks and soil disturbed by the rover, with the cleats of Sojourner’s left front wheel at lower left. The large rock in the distance is Yogi. Much of this side of Yogi cannot be seen from the lander.',src:['NASA Photojournal · PIA00998',PJ('sojourners-view-of-yogi')]}]},
'Scooby Doo':{title:'Scooby Doo · The Flat Pinkish Rock',kind:'Rock analysis with the APXS',model:'scooby',n:3,zr:[3.2,9],z0:6,
 info:[
  ['Rock Shape','Scooby Doo is a flat, pale rock that lies low on the ground. In NASA’s colour-enhanced picture PIA00780 it is the flat white rock in the foreground, marked with a white arrow.','From NASA PIA00780. Its colours are enhanced, not natural colours.'],
  ['Surface Material','The APXS and light-reflection measurements showed that Scooby Doo’s chemistry and colour are similar to the drift soil around it.','From NASA reference PIA01154 (Rock and Soil Types at Pathfinder Landing Site).'],
  ['Possible Cemented Layer','Scientific interpretation: Scooby Doo may be soil that was glued together by chemicals into a hard layer, called a hardpan. This is a possible explanation, not a confirmed fact.','NASA reference PIA01154 suggests it may be a hardpan beneath the site.']],
 done:'You learned that Scooby Doo looks like a rock but is chemically similar to the soil around it, and why scientists think it might be a hardpan.',
 note:'The 3D model is a simplified reconstruction based on the two NASA images below. Scientific reference (not a gallery photo): PIA01154, Rock and Soil Types at Pathfinder Landing Site. Sojourner studied Scooby Doo on Mars; it did not collect it.',
 ph:[
  {f:'soj-scooby-pia00780',t:'Three Classes of Martian Rocks',id:'PIA00780',by:'imp',cam:IMP,date:'Added 22 July 1997',cr:'NASA/JPL/Johns Hopkins University',
   w:'Colours are enhanced to show differences between rocks and soil, so they are not natural colours. Red arrows: large rounded rocks like Yogi. Blue arrows: smaller angular grey rocks like Barnacle Bill. White arrows: flat white rocks, including Scooby Doo in the foreground (lower white arrow).',src:['NASA Photojournal · PIA00780',PJ('three-classes-of-martian-rocks')]},
  {f:'soj-scooby-nssdc81097',t:'Scooby-Doo and Casper — APXS Targets',id:'NASA Pathfinder Image 81097',by:'imp',cam:'',date:'',cr:'NASA / Mars Pathfinder Project',
   w:'Scooby-Doo and Casper, the light coloured patches in the middle left of this image, are prime targets for the APXS. The disturbed soil at lower right was caused by the retraction of the airbags.',src:['NASA NSSDC Mars Pathfinder Image Archive','https://nssdc.gsfc.nasa.gov/planetary/marspath_images_2.html']}]}};
const $$=(s,r)=>(r||document).querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const JK='bt-mars-journal-soj';
const jr=()=>{try{return JSON.parse(localStorage.getItem(JK))||{e:[],p:0}}catch(e){return{e:[],p:0}}};
let el,lb,R=null;
function stop(){if(!R)return;cancelAnimationFrame(R.raf);try{R.ren.dispose()}catch(e){}R=null}
/* ---------- small 3D helpers ---------- */
const rnd=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sm=(a,b,x)=>{x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)},mix=(a,b,t)=>a+(b-a)*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const hmat=(c,o)=>new THREE.MeshStandardMaterial({color:c,transparent:true,opacity:o==null?.88:o,roughness:.9,flatShading:true});
const edges=(m,c,o)=>{m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),new THREE.LineBasicMaterial({color:c||0x7cc4ff,transparent:true,opacity:o==null?.22:o})));return m};
function cylBetween(a,b,r,m){const A=V(...a),B=V(...b),d=B.clone().sub(A),c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),8),m);c.position.copy(A.clone().add(B).multiplyScalar(.5));c.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());return c}
function tag(txt,w,fs){const c=document.createElement('canvas'),x0=c.getContext('2d');fs=fs||44;x0.font='600 '+fs+'px sans-serif';const tw=Math.ceil(x0.measureText(txt).width)+44,th=fs+30;c.width=tw;c.height=th;const x=c.getContext('2d');
 x.fillStyle='rgba(6,10,18,.82)';x.fillRect(0,0,tw,th);x.strokeStyle='rgba(124,196,255,.7)';x.lineWidth=3;x.strokeRect(2,2,tw-4,th-4);x.fillStyle='#e8f4ff';x.font='600 '+fs+'px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,tw/2,th/2+2);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(w,w*th/tw,1);s.renderOrder=5;return s}
function terrain(W,Dp,nx,nz,hf,cf){const g=new THREE.PlaneGeometry(W,Dp,nx,nz);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=new Float32Array(p.count*3);
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=hf(x,z);p.setY(i,y);const c=cf(x,z,y);col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2]}
 g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true,transparent:true,opacity:.94}));
 m.add(new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.06})));return m}
function skirt(W,Dp,n,hf,yb,col){const pos=[],E=[];
 for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n,x0=-W/2+W*t0,x1=-W/2+W*t1,z0=-Dp/2+Dp*t0,z1=-Dp/2+Dp*t1;
  E.push([[x0,-Dp/2],[x1,-Dp/2]],[[x0,Dp/2],[x1,Dp/2]],[[-W/2,z0],[-W/2,z1]],[[W/2,z0],[W/2,z1]])}
 E.forEach(([A,B])=>{const a0=V(A[0],hf(A[0],A[1]),A[1]),b0=V(B[0],hf(B[0],B[1]),B[1]),a1=V(A[0],yb,A[1]),b1=V(B[0],yb,B[1]);[a0,a1,b0,b0,a1,b1].forEach(v=>pos.push(v.x,v.y,v.z))});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.computeVertexNormals();return new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:1,transparent:true,opacity:.7,side:2,flatShading:true}))}
function pebbles(G,n,W,Dp,seed,hf,col,skip){const r=rnd(seed);for(let i=0;i<n;i++){const x=(r()-.5)*(W-.3),z=(r()-.5)*(Dp-.3);if(skip&&skip(x,z)){continue}const s=.02+r()*.035,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(col).multiplyScalar(.6+r()*.6),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(x,hf(x,z)+s*.3,z);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}}
function lump(seed,sx,sy,sz,c,o){const r=rnd(seed),g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position,v=V(0,0,0);for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);const j=1+(r()-.5)*.28;p.setXYZ(k,v.x*j,v.y*j,v.z*j)}g.computeVertexNormals();
 const m=edges(new THREE.Mesh(g,hmat(c,o)),0xe8f4ff,.14);m.scale.set(sx,sy,sz);return m}
const anchor=(P,x,y,z)=>{const o=new THREE.Object3D();o.position.set(x,y,z);P.add(o);return o};
const grey=(k)=>[.6*k,.6*k,.62*k];
const _mh=(a,b)=>(x,z)=>.035*Math.sin(x*1.6+z*.9+a)+.03*Math.sin(z*2.3-x*.6+b)+.012*Math.sin(x*5.1+z*3.7);
const _mc=seed=>{const r=rnd(seed);return(x,z)=>{const n=.5+.5*Math.sin(x*5+z*4)*Math.sin(z*3.3-x*1.7);return grey(.82+.16*n+(r()-.5)*.05)}};
/* ---------- Mars ground ---------- */
const mHf=(a,b)=>(x,z)=>.04*Math.sin(x*1.4+z*.8+a)+.03*Math.sin(z*2.1-x*.7+b)+.012*Math.sin(x*4.7+z*3.3);
const mCf=seed=>{const r=rnd(seed);return(x,z)=>{const n=.5+.5*Math.sin(x*4+z*3.2)*Math.sin(z*2.7-x*1.5),k=.8+.18*n+(r()-.5)*.06;return[.72*k,.42*k,.26*k]}};
const marsG=seed=>({hf:mHf(seed*.3,seed*.7),cf:mCf(seed)});
/* rough rock: noisy sphere, optional pits */
function rock(seed,sx,sy,sz,c,amp,pits,o){const r=rnd(seed),g=new THREE.IcosahedronGeometry(1,3),p=g.attributes.position,v=V(0,0,0),P=[];
 for(let i=0;i<(pits||0);i++)P.push(V(r()-.5,r()-.5,r()-.5).normalize());
 const col=new Float32Array(p.count*3),C=new THREE.Color(c);
 for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);const n=v.clone().normalize();let j=1+amp*(Math.sin(n.x*7+seed)*Math.sin(n.y*6)*Math.sin(n.z*8)+.5*(r()-.5));let dk=1;
  P.forEach(q=>{const d=n.distanceTo(q);if(d<.11){j-=.06*(1-d/.11);dk=.65}});
  if(n.y<-.2)j*=.9+.1*sm(-1,-.2,n.y);v.multiplyScalar(j);p.setXYZ(k,v.x,v.y,v.z);col[k*3]=C.r*dk;col[k*3+1]=C.g*dk;col[k*3+2]=C.b*dk}
 g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
 const m=edges(new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,transparent:true,opacity:o==null?.9:o,roughness:.95,flatShading:true})),0xe8f4ff,.1);m.scale.set(sx,sy,sz);return m}
/* simple Sojourner: body, solar panel, six wheels, APXS at the back */
function rover(){const G=new THREE.Group(),metal=hmat(0xd6dae2,.95),dark=hmat(0x2e3340,.95),gold=hmat(0xd9b45a,.95);
 const body=edges(new THREE.Mesh(new THREE.BoxGeometry(.6,.14,.4),gold),0xe8f4ff,.3);body.position.y=.26;G.add(body);
 const pan=edges(new THREE.Mesh(new THREE.BoxGeometry(.66,.02,.46),hmat(0x26356b,.95)),0x7cc4ff,.5);pan.position.y=.35;G.add(pan);
 const wh=[];[-.26,0,.26].forEach(x=>[-.24,.24].forEach(z=>{const w=new THREE.Mesh(new THREE.CylinderGeometry(.065,.065,.07,14),dark);w.rotation.x=Math.PI/2;w.position.set(x,.065,z);G.add(w);wh.push(w);G.add(cylBetween([x,.08,z*.8],[x*.8,.22,z*.75],.012,metal))}));
 const ap=new THREE.Group();ap.position.set(-.32,.2,0);G.add(ap);
 const arm=cylBetween([0,0,0],[-.16,-.06,0],.014,metal);ap.add(arm);
 const head=edges(new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.06,12),metal),0xe8f4ff,.4);head.rotation.z=Math.PI/2;head.position.set(-.18,-.065,0);ap.add(head);
 const ant=cylBetween([.2,.35,.12],[.2,.62,.12],.006,metal);G.add(ant);
 return{G,ap,head,wh}}
/* ---------- Model 1: Barnacle Bill, small rough rock with the APXS touching it ---------- */
function mBB(){const G=new THREE.Group(),W=4.4,Dp=3,b=marsG(4);
 G.add(terrain(W,Dp,90,60,b.hf,b.cf));G.add(skirt(W,Dp,40,b.hf,-.55,0x5a3422));
 pebbles(G,110,W,Dp,11,b.hf,0x6b5a50,(x,z)=>Math.hypot(x+.4,z)<.65||Math.hypot(x-.7,z)<.5);
 const R1=rock(17,.5,.36,.44,0x6f6a68,.18,30);R1.position.set(-.4,b.hf(-.4,0)+.17,0);G.add(R1);
 const S=rover();S.G.position.set(.42,b.hf(.42,0),0);G.add(S.G);
 const l=tag('APXS sensor touches the rock',1.6,36);l.position.set(.2,.95,.2);G.add(l);
 const aS=anchor(G,-.4,.6,0),aA=anchor(S.head,0,0,0),aC=anchor(G,-.85,.22,.3);
 const upd=t=>{const u=(t*.18)%1,d=sm(.1,.35,u)*(1-sm(.8,.95,u));S.G.position.x=.42-.08*d;S.ap.rotation.z=-.15*d};
 return{G,upd,pins:[aS,aA,aC],cy:-.1,rx:.45}}
/* ---------- Model 2: Yogi, big rounded boulder with weathered coat and a fresher patch; rover wheel up on it ---------- */
function mYogi(){const G=new THREE.Group(),W=4.6,Dp=3.2,b=marsG(9);
 G.add(terrain(W,Dp,90,60,b.hf,b.cf));G.add(skirt(W,Dp,40,b.hf,-.55,0x5a3422));
 pebbles(G,100,W,Dp,7,b.hf,0x6b5a50,(x,z)=>Math.hypot(x+.3,z)<1.1||Math.hypot(x-1,z)<.5);
 const Y=rock(31,.95,.72,.8,0x8a5a40,.07,0);Y.position.set(-.3,b.hf(-.3,0)+.5,0);G.add(Y);
 /* fresher-looking patch on one side */
 const fr=new THREE.Mesh(new THREE.SphereGeometry(1,24,16,0,.9,1.1,.8),new THREE.MeshStandardMaterial({color:0x6c6e74,transparent:true,opacity:.95,roughness:.9,flatShading:true}));fr.scale.set(.97,.74,.82);fr.position.copy(Y.position);fr.rotation.y=-.2;G.add(fr);
 const S=rover();S.G.position.set(.82,b.hf(.82,0),.1);S.G.rotation.y=Math.PI;G.add(S.G);
 const l1=tag('Weathered coating',1.1,36);l1.position.set(-.6,1.45,-.3);G.add(l1);const l2=tag('Fresher-looking area',1.2,36);l2.position.set(.55,1.2,.7);G.add(l2);
 const aS=anchor(G,-.3,1.25,0),aW=anchor(G,-.9,.75,-.4),aC=anchor(G,.5,.55,.55);
 const lw=S.wh[0];const upd=t=>{const u=(t*.2)%1,k=sm(.1,.35,u)*(1-sm(.75,.95,u));S.G.rotation.z=.18*k;S.G.position.y=b.hf(.82,0)+.07*k};
 return{G,upd,pins:[aS,aW,aC],cy:-.25,rx:.42}}
/* ---------- Model 3: Scooby Doo, flat pale slab in drift soil; cut-away shows the possible cemented layer (an idea) ---------- */
function mScooby(){const G=new THREE.Group(),W=4.4,Dp=3,b=marsG(2);
 const drift=(x,z)=>.05*Math.exp(-((x-1.2)**2+(z+.6)**2)*1.2);
 const hf=(x,z)=>b.hf(x,z)+drift(x,z);
 G.add(terrain(W,Dp,90,60,hf,(x,z,y)=>{const c=b.cf(x,z,y),d=drift(x,z)*12;return[c[0]+.08*d,c[1]+.06*d,c[2]+.05*d]}));G.add(skirt(W,Dp,40,hf,-.55,0x5a3422));
 pebbles(G,90,W,Dp,5,hf,0x6b5a50,(x,z)=>Math.abs(x+.2)<1.1&&Math.abs(z)<.7);
 const slab=rock(53,1,.09,.6,0xb88a7c,.12,0,.93);slab.position.set(-.2,hf(-.2,0)+.03,0);G.add(slab);
 /* cut-away block under one edge: a thin pale cemented layer, shown dashed as an interpretation */
 const cut=new THREE.Group();cut.position.set(-.2,-.2,.62);G.add(cut);
 const lay=new THREE.Mesh(new THREE.BoxGeometry(1.6,.08,.02),new THREE.MeshBasicMaterial({color:0xe7c9b8,transparent:true,opacity:.75}));cut.add(lay);
 const ol=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.6,.08,.02)),new THREE.LineDashedMaterial({color:0xf7c548,dashSize:.05,gapSize:.04}));ol.computeLineDistances();cut.add(ol);
 const l1=tag('Possible cemented layer (an idea)',1.8,36);l1.position.set(-.2,-.05,1.05);G.add(l1);
 const l2=tag('Drift soil',.8,36);l2.position.set(1.2,.45,-.6);G.add(l2);
 const aS=anchor(G,-.2,.14,0),aM=anchor(G,1.1,.1,-.55),aL=anchor(cut,.4,0,0);
 const upd=t=>{lay.material.opacity=.45+.3*(.5+.5*Math.sin(t*2))};
 return{G,upd,pins:[aS,aM,aL],cy:-.05,rx:.55}}
const BX={bb:mBB,yogi:mYogi,scooby:mScooby};
/* ---------- 3D scene (same controls as the other holograms) ---------- */
function open3d(c,d){try{const ren=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,60),B=BX[d.model]();
 sc.add(new THREE.AmbientLight(0xffffff,.72));const dl=new THREE.DirectionalLight(0xfff6ea,.95);dl.position.set(3,4,4);sc.add(dl);
 const G=B.G;G.position.y=B.cy||0;G.rotation.x=B.rx||.25;sc.add(G);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.015,6,64),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;sc.add(ring);
 const o={ren,sc,cam,G,pins:B.pins,drag:0,t:0,z:d.z0,zr:d.zr,P:new Map(),auto:1};R=o;cam.position.set(0,.6,d.z0);
 const cv=c,Z=v=>Math.max(o.zr[0],Math.min(o.zr[1],v));
 cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);o.P.set(e.pointerId,[e.clientX,e.clientY]);o.auto=0};
 cv.onpointermove=e=>{const p=o.P.get(e.pointerId);if(!p)return;if(o.P.size===1){G.rotation.y+=(e.clientX-p[0])*.01;G.rotation.x=Math.max(-.2,Math.min(1.2,G.rotation.x+(e.clientY-p[1])*.01))}else{const q=[...o.P.entries()].find(k=>k[0]!==e.pointerId)[1],d0=Math.hypot(p[0]-q[0],p[1]-q[1]),d1=Math.hypot(e.clientX-q[0],e.clientY-q[1]);o.z=Z(o.z*d0/d1)}o.P.set(e.pointerId,[e.clientX,e.clientY])};
 cv.onpointerup=cv.onpointercancel=e=>o.P.delete(e.pointerId);cv.onwheel=e=>{e.preventDefault();o.z=Z(o.z+e.deltaY*.004)};
 const v=new THREE.Vector3();
 const tick=()=>{o.raf=requestAnimationFrame(tick);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.round(w*Math.min(2,devicePixelRatio))){ren.setPixelRatio(Math.min(2,devicePixelRatio));ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
  o.t+=.016;if(o.auto)G.rotation.y+=.004;ring.position.y=Math.sin(o.t*1.3)*1.1;cam.position.z+=(o.z-cam.position.z)*.12;if(B.upd)B.upd(o.t,o);ren.render(sc,cam);
  el.querySelectorAll('.cu-pin').forEach((b,i)=>{o.pins[i].getWorldPosition(v);v.project(cam);b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px'})};
 tick();return true}catch(e){return false}}
/* ---------- photo viewer: ID, title, date, camera, credit, source ---------- */
function lightbox(p){lb.hidden=false;const row=(k,v)=>`<dt>${k}</dt><dd>${v?esc(v):`<span class="na">${NA}</span>`}</dd>`;
 lb.innerHTML=`<div class="cu-lbi"><img src="${IM(p)}" alt="${esc(p.t)}"><h3>${esc(p.t)}</h3><p style="font-size:18px;margin:0">${esc(p.w)}</p><dl class="cu-meta">${row('NASA photo ID',p.id)}${row('Title',p.t)}<dt>Taken by</dt><dd><span class="ig-badge ${BC[p.by]}">${esc(BY[p.by][1])}</span></dd>${row('Camera',p.cam)}${row('Date',p.date)}${row('Credit',p.cr)}${p.fc?`<dt>${esc(p.fcl||'Note')}</dt><dd><b>${esc(p.fcb)}.</b> ${esc(p.fc)}</dd>`:''}<dt>Source</dt><dd><a href="${p.src[1]}" target="_blank" rel="noopener">${esc(p.src[0])}</a></dd></dl><div><button class="btn" id="sjLbX">Close photo</button></div></div>`;
 document.getElementById('sjLbX').onclick=()=>{lb.hidden=true;lb.innerHTML=''};document.getElementById('sjLbX').focus()}
function show(name,done){const d=D[name];if(!d){done();return}stop();
 if(!el){el=document.createElement('div');el.className='cu';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');document.body.appendChild(el);lb=document.createElement('div');lb.className='cu-lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');document.body.appendChild(lb);
  lb.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true;lb.innerHTML=''}})}
 const seen=new Set();let fin=0;const J=jr();
 el.hidden=false;el.setAttribute('aria-label',d.title);
 const gal=d.ph.length?`<div class="cu-gal"><h3>Real NASA photograph${d.ph.length>1?'s':''} · tap to enlarge</h3><div class="cu-row">${d.ph.map((p,i)=>`<button class="cu-th" data-p="${i}"><img src="${IM(p)}" alt="${esc(p.t)}" loading="lazy"><span><em>PHOTO 0${i+1} · ${esc(p.id)}</em><br>${esc(p.t)}<br><small class="ig-by ${BC[p.by]}">${esc(BY[p.by][1])}</small></span></button>`).join('')}</div></div>`:'';
 el.innerHTML=`<div class="cu-in"><div class="cu-hd"><div><p class="eyebrow">Scientific discovery · ${esc(d.kind)}</p><h2>${esc(d.title)}</h2></div><span class="cu-jr">📔 Mars Science Journal: <b>${J.e.length}</b> of ${d.n} entries · <b>${J.p}</b> points</span></div>
 <div class="cu-main"><div class="cu-stage" id="sjSt"><canvas id="sjCv"></canvas>${d.info.map((x,i)=>`<button class="cu-pin" data-i="${i}" aria-label="${esc(x[0])}">${i+1}</button>`).join('')}<span class="cu-tip">Drag to turn · scroll or pinch to zoom</span><span class="cu-lab">${REC}</span></div>
 <div><div class="cu-chips">${d.info.map((x,i)=>`<button class="cu-chip" data-i="${i}"><b>${i+1}</b>${esc(x[0])}</button>`).join('')}</div><div class="cu-info" id="sjInfo" aria-live="polite">👆 Tap a question, or a numbered circle on the model.</div></div></div>
 ${gal}
 <p class="cu-note">${esc(d.note)}</p>
 <div class="cu-foot"><div id="sjDone" style="display:contents"></div><button class="btn" id="sjGo">Continue →</button></div></div>`;
 const pick=i=>{seen.add(i);const x=d.info[i];$$('#sjInfo').innerHTML=`<b>${esc(x[0])}</b><br>${esc(x[1])}${x[2]?`<small>${esc(x[2])}</small>`:''}`;
  el.querySelectorAll('.cu-chip').forEach((b,k)=>{b.classList.toggle('cur',k===i);b.classList.toggle('seen',seen.has(k))});el.querySelectorAll('.cu-pin').forEach((b,k)=>b.classList.toggle('on',seen.has(k)));
  try{typeof SFX!=='undefined'&&SFX.tick&&SFX.tick()}catch(e){}
  if(seen.size===d.info.length&&!fin){fin=1;$$('#sjDone').innerHTML=`<div class="cu-done"><b>Discovery complete!</b><p>${esc(d.done)} +100 points · saved in your Mars Science Journal.</p></div>`;try{typeof SFX!=='undefined'&&SFX.chime&&SFX.chime()}catch(e){}}};
 el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>pick(+b.dataset.i));el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>lightbox(d.ph[+b.dataset.p]));
 if(!open3d($$('#sjCv'),d))$$('#sjSt').innerHTML='<p style="padding:30px">The 3D view needs WebGL. You can still read the facts and see the photos.</p>';
 el.querySelectorAll('.cu-pin').forEach(b=>b.addEventListener('pointerdown',e=>e.stopPropagation()));
 $$('#sjGo').onclick=()=>{stop();el.hidden=true;lb.hidden=true;const j=jr();if(!j.e.includes(name))j.e.push(name);j.p+=Math.round(seen.size*100/d.info.length);try{localStorage.setItem(JK,JSON.stringify(j))}catch(e){}done()};$$('#sjGo').focus()}
window.sojDiscover=show;
})();

/* Voyager 1: scientific discovery hologram after each Deep Space Network station in the dish game.
   Educational 3D reconstruction + real NASA images, each saved from its official NASA page (science.nasa.gov / jpl.nasa.gov).
   Facts come from NASA's Voyager spacecraft and Voyager 1 mission pages. */
(function(){
const NA='Not given in the NASA record',IM=p=>'assets/img/'+p.f+'.jpg';
const BY={art:['Art','NASA artist’s concept or diagram (not a photo from space)'],lab:['Lab','Archival photo taken on Earth before launch']};
const BC={art:'ig-per',lab:'ig-per'};
const REC='Educational 3D Reconstruction — Based on NASA Mission Imagery';
const PJ=s=>'https://science.nasa.gov/photojournal/'+s+'/';
const D={
'Goldstone, California':{title:'Station 1 · The Big Dish and the Signal',kind:'How Voyager talks to Earth',n:3,zr:[3.4,10],z0:6.6,hl:0,
 info:[
  ['High-Gain Antenna','Voyager’s big dish is 3.7 metres wide. All of its science data is sent to Earth through this antenna.','NASA Voyager spacecraft page.'],
  ['Pointing at Earth','The spacecraft keeps its big dish pointed at Earth. Small thrusters on its body can turn it when needed.','NASA Voyager spacecraft page · PIA04495.'],
  ['One Light-Day Away','On 18 November 2026 Voyager 1 is expected to be one light-day from Earth, more than 16 billion miles away. A radio message then takes a whole day to arrive.','NASA Voyager 1 mission page.']],
 done:'You learned how Voyager’s 3.7-metre dish carries every bit of its data home across billions of kilometres.',
 note:'The 3D model is a simplified reconstruction, not to scale. Station names in this game are Deep Space Network sites.',
 ph:[
  {f:'voy-pia04495',t:'Artist’s Concept of Voyager',id:'PIA04495',by:'art',cam:'',date:'Added 9 May 2003',cr:'NASA/JPL',
   w:'Artist’s concept of the Voyager spacecraft with its antenna pointing to Earth. The twin Voyagers keep their high-gain antennas aimed at Earth.',src:['NASA Photojournal · PIA04495',PJ('artists-concept-of-voyager')]},
  {f:'voy-diagram',t:'Voyager diagram',id:'NASA Voyager spacecraft page',by:'art',cam:'',date:'',cr:'NASA/JPL-Caltech',
   w:'A labelled drawing of the spacecraft: high-gain antenna (3.7 m), magnetometer boom, three RTG power generators, plasma wave antennas, the “bus” housing electronics and the science instruments.',src:['NASA · Voyager spacecraft','https://science.nasa.gov/mission/voyager/spacecraft/']}]},
'Madrid, Spain':{title:'Station 2 · Power from Plutonium',kind:'How Voyager stays switched on',n:3,zr:[3.4,10],z0:6.6,hl:1,
 info:[
  ['Three RTGs','Voyager has no solar panels. Three radioisotope thermoelectric generators (RTGs) on a boom turn heat from plutonium-238 into electricity.','NASA Voyager spacecraft page · PIA21477.'],
  ['Power Running Low','The RTGs give less power every year. In 2023 they gave about 225 watts. To keep going, NASA turns parts off one by one.','NASA Voyager spacecraft page.'],
  ['Instruments Switched Off','In April 2026 the team shut down another instrument to save power. NASA says Voyager 1 still has two science instruments working.','NASA Voyager 1 mission page, April 2026.']],
 done:'You learned that Voyager runs on heat from plutonium, and why NASA must switch instruments off as the power fades.',
 note:'The 3D model is a simplified reconstruction, not to scale. PIA21477 shows a test model on Earth: the white cylinders stand in for the RTGs.',
 ph:[
  {f:'voy-pia21477',t:'Voyager Proof Test Model',id:'PIA21477',by:'lab',cam:'',date:'Taken 12 January 1977 · published 5 July 2017',cr:'NASA/JPL-Caltech/KSC',
   w:'A Voyager test model during a weight and centre-of-gravity test at JPL. The stack of three white cylinders is a stand-in for the RTG power generators. Above them, a silvery canister holds the folded magnetometer.',src:['JPL · PIA21477','https://www.jpl.nasa.gov/images/pia21477-voyager-proof-test-model/']},
  {f:'voy-pia21734',t:'Voyager Test Model Configuration',id:'PIA21734',by:'lab',cam:'',date:'Taken 3 December 1976 · added 5 July 2017',cr:'NASA/JPL-Caltech',
   w:'A Voyager test model, which never flew, in JPL’s 25-foot space simulator chamber. Its scan platform with science instruments is unfolded.',src:['NASA Photojournal · PIA21734',PJ('voyager-test-model-configuration')]}]},
'Canberra, Australia':{title:'Station 3 · Instruments and the Golden Record',kind:'What Voyager carries',n:3,zr:[3.4,10],z0:6.6,hl:2,
 info:[
  ['Science Boom','A boom holds many instruments, including the cosmic ray and low-energy charged particle detectors, the cameras and the spectrometers.','NASA PIA14111 caption.'],
  ['Magnetometer Boom','A long boom stretches out to hold the magnetometer far from the spacecraft, so the spacecraft’s own magnetism does not confuse it.','NASA PIA14111 caption · PIA21477.'],
  ['The Golden Record','A gold-plated record on the side of the body carries images and sounds from Earth, in case anyone ever finds Voyager.','NASA PIA14111 caption · PIA21740.']],
 done:'You found Voyager’s science boom, its long magnetometer boom and the Golden Record message from Earth.',
 note:'The 3D model is a simplified reconstruction, not to scale.',
 ph:[
  {f:'voy-pia14111',t:'Model of Voyager (Artist Concept)',id:'PIA14111',by:'art',cam:'',date:'',cr:'NASA/JPL-Caltech',
   w:'Artist’s rendering of Voyager. Science instruments sit on the boom to the right. The Golden Record is the yellow circle on the body. The magnetometer boom stretches to the upper left and the RTGs are at lower left.',src:['NASA Photojournal · PIA14111','https://science.nasa.gov/photojournal/model-of-voyager-artist-concept']},
  {f:'voy-pia21740',t:'Voyager: Installing the Golden Record',id:'PIA21740',by:'lab',cam:'',date:'1977 (archival)',cr:'NASA/JPL-Caltech',
   w:'Engineers secure the cover over Voyager 1’s Golden Record, in an archival image from 1977.',src:['NASA Photojournal · PIA21740',PJ('voyager-installing-the-golden-record')]}]}};
const $$=(s,r)=>(r||document).querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const JK='bt-deep-journal-voy';
const jr=()=>{try{return JSON.parse(localStorage.getItem(JK))||{e:[],p:0}}catch(e){return{e:[],p:0}}};
let el,lb,R=null;
function stop(){if(!R)return;cancelAnimationFrame(R.raf);try{R.ren.dispose()}catch(e){}R=null}
/* ---------- small 3D helpers ---------- */
const rnd=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sm=(a,b,x)=>{x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)},mix=(a,b,t)=>a+(b-a)*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const hmat=(c,o)=>new THREE.MeshStandardMaterial({color:c,transparent:true,opacity:o==null?.88:o,roughness:.9,flatShading:true});
const edges=(m,c,o)=>{m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),new THREE.LineBasicMaterial({color:c||0x7cc4ff,transparent:true,opacity:o==null?.22:o})));return m};
function cylBetween(a,b,r,m){const A=V(...a),B=V(...b),d=B.clone().sub(A),c=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),8),m);c.position.copy(A.clone().add(B).multiplyScalar(.5));c.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());return c}
function tag(txt,w,fs){const c=document.createElement('canvas'),x0=c.getContext('2d');fs=fs||44;x0.font='600 '+fs+'px sans-serif';const tw=Math.ceil(x0.measureText(txt).width)+44,th=fs+30;c.width=tw;c.height=th;const x=c.getContext('2d');
 x.fillStyle='rgba(6,10,18,.82)';x.fillRect(0,0,tw,th);x.strokeStyle='rgba(124,196,255,.7)';x.lineWidth=3;x.strokeRect(2,2,tw-4,th-4);x.fillStyle='#e8f4ff';x.font='600 '+fs+'px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(txt,tw/2,th/2+2);
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthTest:false}));s.scale.set(w,w*th/tw,1);s.renderOrder=5;return s}
function terrain(W,Dp,nx,nz,hf,cf){const g=new THREE.PlaneGeometry(W,Dp,nx,nz);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=new Float32Array(p.count*3);
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=hf(x,z);p.setY(i,y);const c=cf(x,z,y);col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2]}
 g.setAttribute('color',new THREE.BufferAttribute(col,3));g.computeVertexNormals();
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true,transparent:true,opacity:.94}));
 m.add(new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x7cc4ff,transparent:true,opacity:.06})));return m}
function skirt(W,Dp,n,hf,yb,col){const pos=[],E=[];
 for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n,x0=-W/2+W*t0,x1=-W/2+W*t1,z0=-Dp/2+Dp*t0,z1=-Dp/2+Dp*t1;
  E.push([[x0,-Dp/2],[x1,-Dp/2]],[[x0,Dp/2],[x1,Dp/2]],[[-W/2,z0],[-W/2,z1]],[[W/2,z0],[W/2,z1]])}
 E.forEach(([A,B])=>{const a0=V(A[0],hf(A[0],A[1]),A[1]),b0=V(B[0],hf(B[0],B[1]),B[1]),a1=V(A[0],yb,A[1]),b1=V(B[0],yb,B[1]);[a0,a1,b0,b0,a1,b1].forEach(v=>pos.push(v.x,v.y,v.z))});
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.computeVertexNormals();return new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:1,transparent:true,opacity:.7,side:2,flatShading:true}))}
function pebbles(G,n,W,Dp,seed,hf,col,skip){const r=rnd(seed);for(let i=0;i<n;i++){const x=(r()-.5)*(W-.3),z=(r()-.5)*(Dp-.3);if(skip&&skip(x,z)){continue}const s=.02+r()*.035,m=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),new THREE.MeshStandardMaterial({color:new THREE.Color(col).multiplyScalar(.6+r()*.6),roughness:1,flatShading:true}));m.scale.y=.6;m.position.set(x,hf(x,z)+s*.3,z);m.rotation.set(r()*3,r()*3,r()*3);G.add(m)}}
function lump(seed,sx,sy,sz,c,o){const r=rnd(seed),g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position,v=V(0,0,0);for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);const j=1+(r()-.5)*.28;p.setXYZ(k,v.x*j,v.y*j,v.z*j)}g.computeVertexNormals();
 const m=edges(new THREE.Mesh(g,hmat(c,o)),0xe8f4ff,.14);m.scale.set(sx,sy,sz);return m}
const anchor=(P,x,y,z)=>{const o=new THREE.Object3D();o.position.set(x,y,z);P.add(o);return o};
const grey=(k)=>[.6*k,.6*k,.62*k];
const _mh=(a,b)=>(x,z)=>.035*Math.sin(x*1.6+z*.9+a)+.03*Math.sin(z*2.3-x*.6+b)+.012*Math.sin(x*5.1+z*3.7);
const _mc=seed=>{const r=rnd(seed);return(x,z)=>{const n=.5+.5*Math.sin(x*5+z*4)*Math.sin(z*3.3-x*1.7);return grey(.82+.16*n+(r()-.5)*.05)}};
/* ---------- Voyager model: dish, ten-sided bus, RTG boom, science boom, magnetometer boom, golden record ---------- */
function voyModel(hl){const G=new THREE.Group(),W=0xe8eef6,metal=hmat(0xcfd6e2,.95),dark=hmat(0x2b2f3a,.95),gold=hmat(0xd9a940,.97),glow=0xf7c548;
 const on=k=>k===hl;
 const dish=edges(new THREE.Mesh(new THREE.CylinderGeometry(1.05,.18,.32,40,1,true),new THREE.MeshStandardMaterial({color:on(0)?0xfff2c0:W,side:2,transparent:true,opacity:.92,roughness:.6})),on(0)?glow:0x7cc4ff,.3);
 dish.position.y=.55;G.add(dish);const feed=cylBetween([0,.4,0],[0,1.05,0],.02,metal);G.add(feed);const fh=new THREE.Mesh(new THREE.SphereGeometry(.05,10,8),metal);fh.position.y=1.06;G.add(fh);
 const bus=edges(new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.24,10),dark),0x7cc4ff,.4);bus.position.y=.24;G.add(bus);
 const rec=new THREE.Mesh(new THREE.CircleGeometry(.11,24),new THREE.MeshBasicMaterial({color:on(2)?0xffd34d:0xb8902e}));rec.position.set(0,.24,.43);G.add(rec);
 const rtg=new THREE.Group();G.add(rtg);rtg.add(cylBetween([-.35,.2,.1],[-1.25,-.15,.4],.018,metal));
 for(let i=0;i<3;i++){const t=.45+i*.2,c=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.17,14),hmat(on(1)?0xff9a4a:0x9aa2b1,.97));c.position.set(-.35+(-.9)*t,.2-.35*t,.1+.3*t);c.rotation.z=Math.PI/2.6;rtg.add(edges(c,on(1)?glow:0xe8eef6,.35))}
 const sb=new THREE.Group();G.add(sb);sb.add(cylBetween([.35,.25,-.05],[1.35,.65,-.25],.02,metal));sb.add(cylBetween([.35,.15,.05],[1.35,.55,-.15],.015,metal));
 const plat=edges(new THREE.Mesh(new THREE.BoxGeometry(.22,.16,.2),hmat(on(2)?0xffd34d:0x4b5263,.95)),on(2)?glow:0xe8eef6,.4);plat.position.set(1.42,.6,-.2);sb.add(plat);
 const cam=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.18,12),dark);cam.rotation.z=Math.PI/2;cam.position.set(1.6,.6,-.2);sb.add(cam);
 const mag=new THREE.Group();G.add(mag);const mpts=[];for(let i=0;i<=12;i++){mpts.push(V(-.2-i*.22,.5+i*.12,-.3-i*.08))}
 mag.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mpts),40,.012,4),hmat(on(2)?0xffd34d:0xb6a77a,.9)));
 G.add(cylBetween([.1,.1,.3],[.9,-1.3,1],.006,metal));G.add(cylBetween([-.1,.1,.3],[-.9,-1.3,1],.006,metal));
 const pins=[anchor(G,0,.75,.65),anchor(G,-.95,-.05,.32),anchor(G,1.42,.78,-.2)];
 const pins2=[anchor(G,-1.4,.4,.45),anchor(G,-.3,.6,-.3),anchor(G,0,.24,.48)];
 const pinsA=[anchor(G,.6,.2,.6),anchor(G,-2.4,1.2,-.9),anchor(G,0,.24,.48)];
 return{G,pins,pins2,pinsA,dish}}
function mVoy(d){const B=voyModel(d.hl),G=B.G;const P=d.hl===0?[B.pins[0],B.pins[0],B.pins[0]]:d.hl===1?[B.pins[1],B.pins2[0],B.pins2[1]]:[B.pins[2],B.pinsA[1],B.pinsA[2]];
 if(d.hl===0){P[1]=anchor(G,-.4,.24,.4);P[2]=anchor(G,0,1.15,0)}
 /* signal waves for station 1 */
 const waves=[];if(d.hl===0)for(let i=0;i<4;i++){const r=new THREE.Mesh(new THREE.TorusGeometry(.4,.012,6,40),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.6}));r.rotation.x=Math.PI/2;G.add(r);waves.push(r)}
 const upd=t=>{waves.forEach((w,i)=>{const u=(t*.4+i/4)%1;w.position.y=1.1+u*1.6;w.scale.setScalar(1+u*1.2);w.material.opacity=.6*(1-u)})};
 return{G,upd,pins:P,cy:-.2,rx:.35}}
const BX={};
/* ---------- 3D scene (same controls as the other holograms) ---------- */
function open3d(c,d){try{const ren=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,60),B=mVoy(d);
 sc.add(new THREE.AmbientLight(0xffffff,.72));const dl=new THREE.DirectionalLight(0xfff6ea,.95);dl.position.set(3,4,4);sc.add(dl);
 const G=B.G;G.position.y=B.cy||0;G.rotation.x=B.rx||.25;sc.add(G);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.015,6,64),new THREE.MeshBasicMaterial({color:0xf7c548,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;sc.add(ring);
 const o={ren,sc,cam,G,pins:B.pins,drag:0,t:0,z:d.z0,zr:d.zr,P:new Map(),auto:1};R=o;cam.position.set(0,.6,d.z0);
 const cv=c,Z=v=>Math.max(o.zr[0],Math.min(o.zr[1],v));
 cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);o.P.set(e.pointerId,[e.clientX,e.clientY]);o.auto=0};
 cv.onpointermove=e=>{const p=o.P.get(e.pointerId);if(!p)return;if(o.P.size===1){G.rotation.y+=(e.clientX-p[0])*.01;G.rotation.x=Math.max(-.2,Math.min(1.2,G.rotation.x+(e.clientY-p[1])*.01))}else{const q=[...o.P.entries()].find(k=>k[0]!==e.pointerId)[1],d0=Math.hypot(p[0]-q[0],p[1]-q[1]),d1=Math.hypot(e.clientX-q[0],e.clientY-q[1]);o.z=Z(o.z*d0/d1)}o.P.set(e.pointerId,[e.clientX,e.clientY])};
 cv.onpointerup=cv.onpointercancel=e=>o.P.delete(e.pointerId);cv.onwheel=e=>{e.preventDefault();o.z=Z(o.z+e.deltaY*.004)};
 const v=new THREE.Vector3();
 const tick=()=>{o.raf=requestAnimationFrame(tick);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.round(w*Math.min(2,devicePixelRatio))){ren.setPixelRatio(Math.min(2,devicePixelRatio));ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
  o.t+=.016;if(o.auto)G.rotation.y+=.004;ring.position.y=Math.sin(o.t*1.3)*1.1;cam.position.z+=(o.z-cam.position.z)*.12;if(B.upd)B.upd(o.t,o);ren.render(sc,cam);
  el.querySelectorAll('.cu-pin').forEach((b,i)=>{o.pins[i].getWorldPosition(v);v.project(cam);b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px'})};
 tick();return true}catch(e){return false}}
/* ---------- photo viewer: ID, title, date, camera, credit, source ---------- */
function lightbox(p){lb.hidden=false;const row=(k,v)=>`<dt>${k}</dt><dd>${v?esc(v):`<span class="na">${NA}</span>`}</dd>`;
 lb.innerHTML=`<div class="cu-lbi"><img src="${IM(p)}" alt="${esc(p.t)}"><h3>${esc(p.t)}</h3><p style="font-size:18px;margin:0">${esc(p.w)}</p><dl class="cu-meta">${row('NASA photo ID',p.id)}${row('Title',p.t)}<dt>Taken by</dt><dd><span class="ig-badge ${BC[p.by]}">${esc(BY[p.by][1])}</span></dd>${row('Camera',p.cam)}${row('Date',p.date)}${row('Credit',p.cr)}${p.fc?`<dt>${esc(p.fcl||'Note')}</dt><dd><b>${esc(p.fcb)}.</b> ${esc(p.fc)}</dd>`:''}<dt>Source</dt><dd><a href="${p.src[1]}" target="_blank" rel="noopener">${esc(p.src[0])}</a></dd></dl><div><button class="btn" id="vyLbX">Close photo</button></div></div>`;
 document.getElementById('vyLbX').onclick=()=>{lb.hidden=true;lb.innerHTML=''};document.getElementById('vyLbX').focus()}
function show(name,done){const d=D[name];if(!d){done();return}stop();
 if(!el){el=document.createElement('div');el.className='cu';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');document.body.appendChild(el);lb=document.createElement('div');lb.className='cu-lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');document.body.appendChild(lb);
  lb.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true;lb.innerHTML=''}})}
 const seen=new Set();let fin=0;const J=jr();
 el.hidden=false;el.setAttribute('aria-label',d.title);
 const gal=d.ph.length?`<div class="cu-gal"><h3>Real NASA photograph${d.ph.length>1?'s':''} · tap to enlarge</h3><div class="cu-row">${d.ph.map((p,i)=>`<button class="cu-th" data-p="${i}"><img src="${IM(p)}" alt="${esc(p.t)}" loading="lazy"><span><em>PHOTO 0${i+1} · ${esc(p.id)}</em><br>${esc(p.t)}<br><small class="ig-by ${BC[p.by]}">${esc(BY[p.by][1])}</small></span></button>`).join('')}</div></div>`:'';
 el.innerHTML=`<div class="cu-in"><div class="cu-hd"><div><p class="eyebrow">Scientific discovery · ${esc(d.kind)}</p><h2>${esc(d.title)}</h2></div><span class="cu-jr">📔 Deep Space Journal: <b>${J.e.length}</b> of ${d.n} entries · <b>${J.p}</b> points</span></div>
 <div class="cu-main"><div class="cu-stage" id="vySt"><canvas id="vyCv"></canvas>${d.info.map((x,i)=>`<button class="cu-pin" data-i="${i}" aria-label="${esc(x[0])}">${i+1}</button>`).join('')}<span class="cu-tip">Drag to turn · scroll or pinch to zoom</span><span class="cu-lab">${REC}</span></div>
 <div><div class="cu-chips">${d.info.map((x,i)=>`<button class="cu-chip" data-i="${i}"><b>${i+1}</b>${esc(x[0])}</button>`).join('')}</div><div class="cu-info" id="vyInfo" aria-live="polite">👆 Tap a question, or a numbered circle on the model.</div></div></div>
 ${gal}
 <p class="cu-note">${esc(d.note)}</p>
 <div class="cu-foot"><div id="vyDone" style="display:contents"></div><button class="btn" id="vyGo">Continue →</button></div></div>`;
 const pick=i=>{seen.add(i);const x=d.info[i];$$('#vyInfo').innerHTML=`<b>${esc(x[0])}</b><br>${esc(x[1])}${x[2]?`<small>${esc(x[2])}</small>`:''}`;
  el.querySelectorAll('.cu-chip').forEach((b,k)=>{b.classList.toggle('cur',k===i);b.classList.toggle('seen',seen.has(k))});el.querySelectorAll('.cu-pin').forEach((b,k)=>b.classList.toggle('on',seen.has(k)));
  try{typeof SFX!=='undefined'&&SFX.tick&&SFX.tick()}catch(e){}
  if(seen.size===d.info.length&&!fin){fin=1;$$('#vyDone').innerHTML=`<div class="cu-done"><b>Discovery complete!</b><p>${esc(d.done)} +100 points · saved in your Deep Space Journal.</p></div>`;try{typeof SFX!=='undefined'&&SFX.chime&&SFX.chime()}catch(e){}}};
 el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>pick(+b.dataset.i));el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>lightbox(d.ph[+b.dataset.p]));
 if(!open3d($$('#vyCv'),d))$$('#vySt').innerHTML='<p style="padding:30px">The 3D view needs WebGL. You can still read the facts and see the photos.</p>';
 el.querySelectorAll('.cu-pin').forEach(b=>b.addEventListener('pointerdown',e=>e.stopPropagation()));
 $$('#vyGo').onclick=()=>{stop();el.hidden=true;lb.hidden=true;const j=jr();if(!j.e.includes(name))j.e.push(name);j.p+=Math.round(seen.size*100/d.info.length);try{localStorage.setItem(JK,JSON.stringify(j))}catch(e){}done()};$$('#vyGo').focus()}
window.voyDiscover=show;
})();
