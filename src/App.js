import { Component } from 'react';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ListPage from './pages/ListPage/ListPage.component';
import PostPage from './pages/PostPage/PostPage.component';
import SettingsIcon from './assets/letter-a1.png';
import SettingsIcon1 from './assets/letter-a2.png';
import LinkedInIcon from './assets/linkedin.png';
import LinkedInIcon1 from './assets/linkedin1.png';
import TwitterIcon from './assets/twitter-sign.png';
import TwitterIcon1 from './assets/twitter.png';
import Logo from './components/Logo/Logo.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuBarsClass: 'menu-bars',
      overlayClass: 'overlay overlay-slide-left',
      overlayElements: [['Home', '/'], ['All Posts', '/list/Posts'], ['Resources', '/list/Nothing Yet!'], ['Who Am I?', '/post/Who am I?']],
      slideInOrOut: 'out',
      posts: [
              ["What if countries could just print more money to solve all problems?", ["History", "Economy"] , [
                "Once upon a time, for a short while at least, an entire sackful of banknotes were required to buy a loaf of bread in Germany. Not kidding. That is what today’s tale is about.",
                "",
                "It all began with the first world war. The war touted to be the war to end all wars.",
                "It didn’t end sh*t. It was only the first of two world wars, which were followed by the decades-long cold war, wars in Afghanistan, Yugoslavia, and Afghanistan again. Yeah, didn’t work out well.",
                "The one thing it did end, however, was the Paper mark, Germany’s currency at that time.",
                "",
                "Fact: Wars are a costly business. Nations usually do not have enough in their coffers to carry out an entire war without borrowing. The same happened during this one. Germany borrowed heavily.",
                "",
                "Their game plan was to defeat the enemy nations, occupy their resource-rich land and impose cash payments to Germany.",
                "Sounds harsh? Overconfident? Germany had already done it in 1870 when they defeated France.",
                "",
                "France, on the other hand, knew the consequences of borrowed money in the event of a defeat. So, they imposed an income tax on the citizens for the first time.",
                "France figured that in case things go sideways again, at least there won’t be any debt to repay. Smart.",
                "The rest is, quite literally, history. France and the gang won the war, and Germany tasted dirt.",
                "",
                "Before we get any further, we need to discuss just how bad Germany’s debt situation was.",
                "",
                "By the end of the war, the Weimar Republic, which is what Germany was known as then, had 132 billion marks in war debts. Troublesome, extremely so. But okay, could have been worse.",
                "…Then France and Belgium demanded another 132 billion as reparations in the Treaty of Versailles.",
                "",
                "Why? Well, the war was fought mostly in France and Belgium. So although Germany lost the war, it was France and Belgium whose infrastructure had been destroyed.",
                "This meant that Germany broke into their house, started a fight, and then lost. Naturally, they had to cough up some money in the form of reparations.",
                "",
                "Germany’s plan to impose cash payments had backfired on them. Literally. It was France and Belgium who imposed the cash payments on them.",
                "At least Germany’s territory wasn’t annexed.",
                "",
                "Germany’s response?",
                "Well, Germany had started to print more money even before the war had ended (countries can print as much of their currency as they wish), to repay some debts till the war was won. Hmm.",
                "",
                "This increase in the number of banknotes in the economy reduced the value of the currency with respect to foreign currencies and the Paper Mark devalued from 4.2 marks for one dollar to 7.9 marks for one dollar.",
                "The war ended in 1918 and it became clear that Germany would have to repay the war debts by itself. So, Germany just printed more notes.",
                "After all, loans are to be paid in a specific amount of money. Germany paid what it could and just created the rest.",
                "I just said that the marks to dollar ratio went from 1: 4.2 to 1: 7.9, didn’t I?",
                "",
                "By the end of 1919, this ratio was 1: 48. The Paper mark fell to just one-sixth of its value within a year after the war.",
                "Let’s continue.",
                "",
                "In the first half of 1921, the value of marks was stable at 90 units for 1 dollar (it had halved again in the meantime).",
                "All this time, Germany was only focusing on the war debts.",
                "What about the reparations demanded by France and Belgium, you say?",
                "One might be tempted to say that they printed that sum as well. Germany couldn’t.",
                "The reparations were only valued at 132 billion marks in 1919. That is to say, they were not meant to be paid in marks.",
                "Germany was supposed to pay in hard currency, which is jargon for gold, silver, coal, timber and stable currencies of the world (safe to say, the paper mark was not among them).",
                "Care to think how much the reparations were worth after the devaluation?",
                "",
                "The first instalment of the reparations was to be paid in June 1921. Ok, paid.",
                "Germany then had to get the hard currency for the next instalments. They did what they had done best. They printed notes to buy the hard currency at any price.",
                "Where were we in the devaluation of the currency? 90 marks for 1 dollar. Hmm.",
                "By the end of 1921, 330 Paper marks were required to buy 1 dollar.",
                "",
                "The mark stabilised at about 320 per dollar in the first half of 1922. Sure, the currency devalued, but the reparations have all been paid so far. It could’ve been worse. Which it did.",
                "The Paper mark fell to 7,400 per dollar by December 1922.",
                "",
                "It fell by 20 times in less than 6 months. As for the total since the beginning?",
                "If this had happened in today’s time, the cost of an apple would have become 2000 dollars. An Apple iPhone, on the other hand, would cost us… yep, 2 million dollars.",
                "",
                "What happened in this six-month time frame?",
                "",
                "Germany printed notes and bought foreign currency at whatever price it could. Now, the more desperate you get, the lesser people value you. The same thing happened here. The other countries kept valuing the Paper mark less and less.",
                "",
                "And rightfully so. Remember, Germany was still printing notes like crazy.",
                "Another principle of common sense — the more of a certain commodity there is, the lesser is its value.",
                "And finally, by late 1922, the other countries decided the Paper mark was practically worthless, which meant that no one was willing to exchange marks for hard currency anymore.",
                "This caused Germany to default (fail to pay) by the end of 1922.",
                "",
                "France did not take kindly to this. It didn’t take kindly to Germany in the first place (2 wars within 40 years). So France along with Belgium, the other country Germany invaded in the war, sent their troops and occupied the Ruhr valley.",
                "What was the Ruhr valley?",
                "This valley contained most of the forests, mines and industries of Germany.",
                "France said fine, if you won’t cough up the money, we’ll take it at gunpoint.",
                "",
                "I can almost hear some of you asking, what the hell were the Germans doing? They just let the French and Belgian troops march right into their economic lifeblood?",
                "",
                "You see, after the war, Germany disbanded the army and the soldiers became workers in the industry to increase production. Did the allies (France and gang) not do the same?",
                "No. Remember, Germany invaded and destroyed their infrastructure. They didn’t have enough jobs for all the soldiers.",
                "Basically, Germany had the industries and workers and France had the army. It was like a wolf pouncing on a fat sheep. They had no chance.",
                "",
                "This was the scenario so far.",
                "Germany’s currency was worthless. Their industrial area had been occupied by the French.",
                "No money and no way to make any. They were screwed.",
                "",
                "Germany called for passive resistance against the French occupation. This meant that the government told the workers to do absolutely nothing. Produce no goods, mine no metals, cut no trees. Just sit on their asses.",
                "In exchange, the protesters had to be given support to sustain them in absence of their livelihood.",
                "Germany had to give them money, something Germany was already short of.",
                "So they again printed more money. Much more money.",
                "",
                "Germany said, f*ck it. The currency was worthless outside the country anyway. There was no difference between printing money and paper at this point. So they printed as if their lives depended on it.",
                "",
                "How much exactly, you might ask?",
                "",
                "Let me give you an example. The cost of bread in late 1922 was 160 Paper marks, and this is when the currency was worth 1/2000th of its value before the war.",
                "By the end of 1923, a loaf of bread cost, prepare yourself…",
                "",
                "…200,000,000,000 Paper marks.",
                "",
                "Count the zeros. Wrap your mind around this ridiculous figure.",
                "",
                "You might be wondering — HOW?!",
                "How did they print this much money? How did it all fit in one sack?",
                "The money had to be carried in sacks to buy bread. But still, 200 billion?",
                "Even if the notes were worth 100,000 marks each, you’d need, like, 2 million notes.",
                "",
                "I wasn’t kidding when I said the Germans went crazy printing notes.",
                "They are hard-working people in ordinary times, and this was when they had the license to print as much money as they could. The sky was the limit.",
                "",
                "Remember when I said there was no longer any difference between printing money and paper? Well, that meant you could print not just however much, but also, whatever you wanted to on the banknote.",
                "",
                "Yep. Why print 2 million notes of 100,000 marks each, when you could just print 2 notes worth 100 billion marks.",
                "I am not even going to tell you to process this ridiculousness before proceeding further. Let me just tell you all of it.",
                "",
                "By then, 1 dollar was worth 4,210,500,000,000 Paper marks. Don’t bother counting, that’s 4.21 trillion marks. There’s a 50 trillion-mark-note shown on Wikipedia. There might be an even bigger denomination out there.",
                "There were 1.2 sextillion marks in circulation by July 1924. Too many zeros.",
                "Wanna see? Go ahead: 1,200,000,000,000,000,000,000",
                "That’s the gist of it.(Phew)",
                "If, somewhere in between, you stopped associating the figures above with money, that makes two of us.",
                "",
                '',
                "#ComingBackFromTheDead: [solving the trillion dollar bread problem]",
                '',
                '',
                "The situation went from bad to… just ridiculous.",
                "What happened afterwards? Did Germany get the Ruhr Valley back? How did the currency stabilise?",
                "", 
                "You see, at that time, currencies were usually banknotes that could be exchanged for a fixed amount of gold from the banks. This was called the Gold standard.",
                "Nowadays the currencies are usually backed by the authority of the countries. It has value because they say so. The dollar to currency value depends on trade and mutual understanding. Quite similar to Weimar Germany.",
                "", 
                "Does this mean that the Germany of that time was a misunderstood visionary? Hell, no.",
                "Most countries needed to print banknotes to afford the war. Many broke the gold standard (no more exchanging notes for gold). It wasn’t just Germany.",
                "Germany got the shorter end of the stick because they lost.",
                "",
                "Do you think they should’ve gone back to the gold standard?",
                "Hmm, did you say yes? Not so fast. Remember, the reparations had to be paid in hard currency. They didn’t have any gold. They had paid all the gold to France and Belgium.",
                "",
                "The thing with currencies like the Paper mark and ours is that once people stop believing in it, there’s no way back. They have no inherent value like the gold standard. If there was, countries wouldn’t be able to print notes in the first place. To print notes, you would have needed the corresponding amount of gold.", 
                "If countries print it regardless of whether they have the gold or not, and more people wish to exchange the notes for gold than the amount of gold the country has… There goes the currency, gold and the economy of the country with it.",
                "",
                "So, Germany created a new currency, the Renten mark. A specific amount of Renten marks represented some agricultural land or business the government owned. Basically, Agricultural land replaced gold.", 
                "However, the Renten marks could not be exchanged for land. This was done to ensure that the people didn’t exchange the currency for land and collapse this currency as well.",
                "The use of the land standard (I’ll just call it that) was that only a limited amount of Renten marks could be printed since only a limited amount of land existed in Germany.",
                "",
                "After this, one dollar could once again be exchanged for 4.2 Renten marks, the same as the paper mark’s value before the inflation.", 
                "They flushed out the paper marks from the economy by proposing an initial exchange rate of 1 Renten mark for 1 trillion paper marks.",
                "",
                "What about the Ruhr valley, you say?",
                "Well, France and Belgium occupied it till 1925, when USA and Britain agreed to give loans to Germany so they could begin paying the reparations again.",
                "",
                "Seems like everything turned out to be okay in the end, right?",
                "",
                "Um, not really. The US stock market crashed in 1929, which caused the US to take back the loans, plunging Germany into an unemployment crisis since they couldn’t print notes this time.", 
                "The crisis was so bad that by 1932, one-third of the German population was unemployed.",
                "The Germans got so sick and tired of the reparations, economic crises, and poverty in general that they made Hitler their chancellor in 1933.",
                "",
                "But that's a tale for another time."
              ], 'https://encyclopedia.ushmm.org/images/large/634a1702-6650-4fe4-9d21-9ebcef440245.jpg'],
              ["What about the Janitor who made $8 million by investing in stocks?", ["Investing"] , [
                'In 2014, a former janitor at JCPenney (a large supermarket chain in the US), made the headlines when he died.',
                'News channels reported that he donated 6 million dollars to his town hospital alone. These were followed by list of inheritors including friends and family.',
                '',
                'The guy was loaded; and nobody knew about it. (Except his lawyer, of course, since he made the will.)',
                '',
                'How did he make that much money as a janitor? What sources of income did he use to amass that much money, people wondered.',
                'The answer being, exactly what he said: A janitor’s wages.',
                'Ok, you might say, what the hell did he do with his wages?',
                '',
                'Well, he saved whatever he could and bought shares of big, established companies. These companies are market leaders in their fields, which means there is a very slim chance that one of these would go bankrupt. These are what you’d call Blue-chip stocks in investing jargon.',
                '',
                'Since these companies do not have room for growth, the managers don’t invest in the growth of the company and just distribute the profits to the owners. AKA, dividends.',
                '',
                'Read used these dividends to buy even more shares.',
                'This strategy gave stable growth in share prices as well as more shares acquired with the dividends received.',
                '',
                'Now, most articles on this guy mention just this one point and praise it all the way to the high heavens. They make it look like this is the be-all and end-all of Ronald Read’s investing journey, the layman’s guide to sure-shot investing. I beg to differ.',
                '',
                'It isn’t nearly as simple as it looks. There are three caveats to this approach, as far as I can tell: The Caveat of Knowledge, The Caveat of Discipline & The Caveat of Frugality. Allow me to elaborate.',
                '',
                'The Caveat of Knowledge:',
                '',
                'Ronald Read read The Wall Street Journal daily. He had knowledge that enabled him to gauge which companies gave ample dividends.', 
                'You need to know how stable the company is, and if the dividends given are better than its competitors.',
                'This is the easiest one. Knowledge may be time-consuming to acquire, but if you allow yourself to take a few wrong turns and keep going, you’ll get there eventually.',
                '',
                'The Caveat of Discipline:',
                '',
                'Ronald Read was a superhuman as far as discipline was concerned. And I am not taking about saving money. Saving money, according to me, has more to do with habits than discipline.',
                'No, I am referring to holding these stocks for decades.',
                '',
                'Do you know how hard it is to invest in a boring Blue-chip stock and hold on to it, knowing people out there are multiplying their money by ten times investing in the latest tech stocks? This used to happen in the late 1990’s.',
                'At that time mutual funds managed by extremely educated people switched to owning tech stocks only, and earned big bucks. They used to say that if you weren’t doing the same, you ought to get your head checked.',
                '',
                'Amidst all this chatter, Read kept a clear head, keeping in mind the advice of, arguably, the greatest investor of our times: Warren Buffet.',
                'Buffet always said (still does), that you should invest only in the businesses you understand.',
                'Read didn’t understand how a startup which hadn’t sold anything yet could go up 10 times in value overnight. So he stayed clear of them.',
                '',
                'This doesn’t mean that those fund managers knew what was going on. They didn’t know shit. They smelled stupid money coming into the tech sector and flocked there.',
                'Over time, investors began to see it for what it was: unjustifiable mania.',
                '',
                'The rest is history; Most of these stocks went to zero, the entire industry tanked for a few years and managers came to their senses, battered and bruised from the experience.',
                'Ronald Read, a former janitor, might have had a good laugh at their expense.',
                '',
                'The Caveat of Frugality:',
                '',
                'This is the easiest in theory, and the hardest in practice.',
                'Knowledge is difficult to acquire and discipline requires resolve and clear guiding principles. Frugality, on the other hand, is something everybody is accustomed to; that is, as long as they don’t have money.',
                'You see, having money gets to your head. It gives you the power to project what you want into the real world. The more you exercise this power, the lesser it remains; until you exhaust it.',
                '',
                '',
                '"The first rule of compounding: Never interrupt it unnecessarily." — Charlie Munger',
                '',
                '',
                'Simple enough. But the caveat of frugality is on full display here. If the compounding is never to be interrupted, money can never be taken out. Once you put money into the stocks, it is never going to touch your hands again.',
                '',
                'Ronald Read had millions of dollars in stocks because he had been putting whatever he could into the market for more than fifty years. And he never took it out.',
                'You might be thinking that this is more of a caveat of discipline than frugality, but I assure you its not. If you can make do with what you earn, you’ll never need to take out money in the first place.',
                '',
                'Ronald Read saved what he could from his salary, and managed his expenses with the remaining. This habit was reinforced over the years as he made a living working as a gas attendant and janitor for a cumulative four decades.',
                'Even when he became a millionaire, he showed no traits of being one. He used safety pins to hold together his denim jacket, drove a used Toyota and made sure to park the car somewhere with no parking meters.',
                'No wonder nobody knew the guy was a millionaire.',
                '',
                'Does this mean your goal in life should be to pinch more pennies than anyone ever born?',
                '',
                'Well, no. This caveat does not mean that your spending should hit rock bottom. It means that you should have a well defined upper-limit of spending.',
                '',
                'If someone asked you what would you so if they gave you $100,000 , $1,000,000 , $10,000,000 respectively, and you answer that you would buy a something worth a hundred thousand if given a hundred thousand, and something worth 1 million if given that much; you don’t have an upper limit.',
                '',
                'No matter how much you get, it won’t be enough. You will never experience having more money than you know what to do with.',
                '',
                'Okay, fine, you might say. But what’s a good limit?',
                'Good question. And the answer depends. If you’ve been roaming around in a Mercedes all your life, you won’t be content with a Toyota.',
                '',
                'Someone used to a silver spoon will find it hard to get used to a bronze one.',
                'Just beware that you don’t get into an upward spiral of going from a silver spoon to gold, gold to platinum and so on. It will be near impossible to get used to a silver spoon again.',
                '',
                'I can’t tell you what your limit should be. Ronald Read was the first person to pass high school in his family, and never went to a university. He was compelled by circumstances to keep a low limit.',
                'It might not be the case for you.',
                '',
                '',
                '#SkillsWithoutDisciplineOrFrugalityIsRecipeForDisaster (…or so they say)',
                '',
                '',
                'Richard Fuscone, is the mascot for the above statement. Any blog that mentions Read also mentions Richard Fuscone as a cautionary tale.',
                'Fuscone attended Harvard Business School, did an MBA from the University of Chicago, and went on to become a top executive at Merrill Lynch, a world renowned investment management company.', 
                '',
                'Fuscone retired in 2000, at the age of 49, with multiple times the fortune Read would accumulate by 2014. It is said that he retired to “pursue personal and charitable interests”.',
                'Which he did. I don’t know about charitable, but when he declared bankruptcy in 2010, he was fighting to keep his homes (read: mansions) worth millions of dollars. As a matter of fact, he had to sell one for $8 million, and that was considered a bargain.',
                '',
                'Fuscone is a good example of having no frugality; he stretched his top limit as far as he could. There is no need to talk about discipline; He was paying interest on the loans he purchased his mansions with, when you’re supposed to be earning it.',
                'He is the bad guy of the story; the satanic counterpart to Read’s saintly visage.',
                '',
                'But Fuscone’s story doesn’t end here.',
                '',
                'He has been working as a financial consultant since 2013. He is, after all, the man who became a top executive at a world renowned firm before the age of 50. I won’t be surprised if he has worked his way to being a multi-millionaire again. His living standards were ridiculously better than Read’s when he declared bankruptcy, and although his fortunes took a hit, they are still better, I’d wager.', 
                '',
                'As far as money is considered, Fuscone has it better.',
                '',
                'On one is the man who had the best education you could possibly ask for; not just in college, but all the way to the top of the corporate ladder.',
                'Read, on the other hand, never went to college.',
                '',
                'Although Read had the best passive qualities you could ask for, skills are the foundation. Skills get you money in the capitalist world; this money is what you compound.',
                'Fuscone could just earn what took Read decades of compounding.',
                '',
                'Why then, did I right a blog about Read and not Fuscone?',
                'Fuscone had way more money than Read ever had, he could spend way more Read ever could and earn a million dollars that took Read decades to accumulate.',
                '',
                'But what use is all the money in the world, if it isn’t enough?',
                'Read, it would seem, never had enough money;',
                '',
                'But the fact that his entire fortune was given away in the will, means he never intended to spend it in the first place.',
                'This was a man pleased enough with he family and friends that he left a quarter of his fortune to them; he was pleased enough with his hospital and library that he left 6 million dollars to them.',
                '',
                'Read collected stamps, chopped wood, read the Wall Street Journal and spent time with his friends and family. He did what he liked; and did it to the very end.',
                '',
                'Fuscone, due to his vastly superior education, may be ahead of Read financially. But, should a man’s success be gauged only by the shimmering robes he wears; or also by the shine he carries within?',
                '',
                'You could say that the shimmering robes contribute to the shine, and I won’t be able to argue. A certain worldly shimmer is necessary to keep the soul bright.',
                '',
                'How much exactly? That is entirely up to you.',
                '',
                'I have endeavoured to provide food for your thought with this blog; not to declare a way of life.',
                'My own way of life is a work in progress, so it would be presumptuous of me to dictate one for you.'
              ], 'https://pbs.twimg.com/media/CApJZXfVEAAO0Es.jpg'],
              ["Why don’t people invest in Diamond or Platinum over Gold?", ["Economy", "Investing"] , [
                'Someone asked me recently, why don’t people invest in Diamond or Platinum? They are more valuable than Gold.',
                'I had never given this much thought before.', 
                '',
                'My perception was that we should invest in gold because it is valuable, because it is rare.',
                'Silver isn’t as rare, hence, not as valuable and nowhere as good an investment as Gold.',
                '',
                'To me, Diamond and Platinum looked like even better alternatives to Gold, instinctually.',
                'I was stoked, I thought I had had an epiphany, stumbled upon a revelation.',
                '',
                'Before you get too excited; I didn’t  stumble upon a goldmine (or a diamond mine rather). There’s good reason why investing in Diamond and Platinum isn’t as popular as investing in Gold and Silver. I just didn’t know it then.',
                'If you don’t either, and are wondering: What’s wrong with investing in Diamonds? Read along.',
                '',
                '',
                'Firstly, let me get one misconception out of the way. Gold is not an excellent investment. In fact, I’ll go as far as to argue that gold is not an investment at all. Period.',
                '',
                'I can almost see y’all furrowing your eyebrows staring at the screen while you read this.',
                'Let me explain.',
                '',
                'You see, an investment is something that you do to get better returns. How do investments do that? Well, you get your money to work for you in all sorts of ways.',
                'An extremely simple and old example is a cowherd. Suppose you purchased a cowherd, and reared the cows for a couple of years. The cows will reproduce in the meantime. The herd will thus increase in size.',
                '',
                'Do you see it now, an investment is something that increases itself over time. A business expands, cows reproduce, land produces revenue infinitely till the end of time through farming or rent.',
                'Gold doesn’t do anything remotely similar. It will sit around looking pretty for all eternity.',
                '',
                'It’s about time I clear something before you curse me out. I am not telling you to boycott Gold or something. Of course it is useful; it wouldn’t be around for so long in such high demand if this was not the case.',
                '(Readers: Hypocrite!)',
                '',
                'Let’s discuss the uses to soothe some of you troubled souls.',
                'Most of the things in nature reproduce, being organic and all. This comes with a disadvantage in the realm of economics. The more of a thing there is and the more easily it is available, the lesser its value.', 
                '',
                'Hence, if cows reproduce at such a pace that surpasses all things in existence, nobody will trade in cows anymore. Everybody would have them already.',
                'Of course if cows gain intelligence and band together to subdue all existence, the above hypothesis falls apart. Safe to say, however, it’s unlikely to occur.',
                '',
                'Okay, you’re getting impatient with all this sophistry, I’ll come to the point.',
                'You see, money also keeps on increasing in the economy. Countries keep printing more and more over time.',
                'Suppose that you had 100 dollars at one point of time, and the total number of dollars doubled in the following 10 years. If you held onto your 100 dollars over this period of time, they would then be worth only half as much, equivalent to having 50 dollars a decade ago.',
                '',
                'So, you see, investing in Gold via money seems to imply that you’re jumping form a slow ship to a fast one.', 
                'What you’re actually doing is to abandon a sinking ship and saving your hide by boarding a slow one.',
                '',
                'I hope I have sparked a flicker of understanding within your eyes. Although I am sure you took some offence to gold being referred to as a slow ship.',
                '',
                'But it’s true. The big ships expand like hot balloons. Microsoft stock gained almost 30 percent compounded annually from 2000 to 2020, from $40 per share to $6500 per share.',
                'Gold compounded at roughly 7 percent annually during the same.',
                'Don’t make the mistake of thinking that gold was only four times slower.',
                'If Gold was worth $40 in 2000. It would be worth only $155 by 2020.',
                '',
                'Yes. $6500 v/s $155. That’s compound interest for you.',
                '',
                'By the way, if you’re wondering what the hell Microsoft did to earn so much, they only created an operating system that every other computer uses. And they did it at a time when computers became so common as to be present in every home.',
                'In short, great investments are usually things that can scale and take a very important place in the society in the coming years.',
                '',
                'I digressed there a little bit, I hope I haven’t lost you yet.',
                '',
                'Let’s find fault with diamonds first, then I’ll tell you why I think Platinum is no good either.',
                '',
                'Gold is a great store of value because it is finite in the world, and although more is mined everyday, the gold already above ground is so great that the mined quantity doesn’t change the total amount of gold in the world significantly.',
                'Diamonds check the first box okay, it’s rare, doesn’t increase much. Or so you’d think.',
                'You might already know that diamonds can be produced in labs. The production is not significant as to change the total amount of diamond in the world.',
                'But the artificial production is the main problem.',
                'This means that there is no longer a limit to how much diamond there can be in the world. Diamond will keep on being artificially made in labs forever, hence they are not as good a store of value as gold.',
                'Additionally, the value of a diamond is tricky to evaluate. The cut of the diamond makes more of an impact than its size. Diamonds are comparable to art pieces rather than Gold in this regard.',
                '',
                'Okay, you might say, but Platinum is just like Gold and even rarer. True.',
                'Platinum doesn’t have the same pitfalls as Diamond. It is an element like Gold, cannot be artificially produced, in mass.',
                'Although nuclear reactors can get Platinum as a byproduct but the quantity is very less and the process is not commercially viable.',
                '',
                'However, Platinum is an even worse store of value than diamond!',
                'The value of one ounce of platinum was $2000 in 2008. If you’d bought it then, you’d have made a profit of -55% by sept 2022. Yes, at the time of writing, the price of Platinum is a mere $900.',
                'This is because Platinum is valuable not because of its rarity, beauty or a currency. It is valued mostly for its industrial applications.',
                'So the price of Platinum increases with industrial demand, sometimes unreasonably so when every company wants some and drive the prices sky high as they did in 2008.',
                '',
                'And if one day industries find a substitute for Platinum? Bye-bye investment.',
                'So my advice, don’t. But what do I know.',
                'People might find even more applications and Platinum might go up 10 fold in the coming 10 years. I’ll leave that up to you.'
              ], 'https://images.unsplash.com/photo-1624365168987-9b8c0ff8333f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
              ["Who am I?", ["Who Am I"], [
                'Hello! I am the Wurdy of WurdyWrites.',
                'I won’t bore you with the minute details about me; you can find everything here.',
                'I am an Indian College student, an enthusiast of (almost) all things; Trying to become the proverbial Jack of all trades, and hopefully, master of some.',
                'I created this blogging site as a testament of my web development skills (Proud developer of this website, yours truly), and as a mode of expression for my take on things from a multi-disciplinary perspective, employing multiple points of viewing problems, or mental models as some like to call them.',
                '(For more on mental models, see: Farnam Street)',
                'So, who am I to tell you how or why things happen?',
                'Just a curious soul with some exposure to a wide range of topics. That’s it. I am not an authority, and nor are my sources always correct. In things like history or economics, people seldom are 100% correct, whoever they might be.',
                'The only thing I can tell you is that whatever you find on this site, it’s written with good conscience and some thought.',
                'So, feel free to click on any category you feel interested in, or see all posts through the menu and go through whichever one catches your fancy.',
                'I look forward to reading your thoughts, critique, and any requests for future posts (except philosophy, especially ancient greek) in the comments section.'
              ]]
      ],
      dropDownHidden: true,
      postFontSize: 20,
      postFontFamily: 'Verdana',
      fontFamilySelectOpen: false,
      fontFamilyOptionSelected: 'Verdana',
      postLineHeight: 25,
      postFontWeight: 'lighter',
      mode: 'light'
    };
  }

  ToggleOverlay = () => {this.state.overlayClass==='overlay overlay-slide-left' ? (this.setState({overlayClass: 'overlay overlay-slide-right', slideInOrOut: 'in'})) : (this.setState({overlayClass: 'overlay overlay-slide-left', slideInOrOut: 'out'}))}
  ToggleDropDownHidden = () => {this.state.dropDownHidden ? this.setState({dropDownHidden: false}) : this.setState({dropDownHidden: true}); window.scrollTo({top: 0, behavior: 'smooth'})}

  render() {
    return (
      <div className={`App ${this.state.mode==='dark' ? 'dark' : ''}`}>
        <Header mode={this.state.mode}/>
        {/* Overlay */}
        <div className={`${this.state.overlayClass} ${this.state.mode==='dark' ? 'dark' : ''}`}>
          <nav>
            <ul>
              {
                this.state.overlayElements.map((element, iteration) => (
                  <li key={`nav-${iteration}`} className={`slide-${this.state.slideInOrOut}-${iteration}`}><Link to={element[1]} onClick={this.ToggleOverlay}>{element[0]}</Link></li>
                ))
              }
            </ul>
          </nav>
        </div>
        {/* Menu bars */}
        <div className={`menu-bars ${this.state.slideInOrOut==='in' ? 'change' : ''}`} title='Menu' onClick={this.ToggleOverlay}>
          <div className={`bar1 ${this.state.mode==='dark' ? 'dark' : ''}`}></div>
          <div className={`bar2 ${this.state.mode==='dark' ? 'dark' : ''}`}></div>
          <div className={`bar3 ${this.state.mode==='dark' ? 'dark' : ''}`}></div>
        </div>
        {/* Settings */}
        <img alt='Post-Font-Settings' src={this.state.mode==='dark' ? SettingsIcon1 : SettingsIcon} className='settings-icon' title='Font-settings' onClick={this.ToggleDropDownHidden}/>
        <div className={`dropdown ${this.state.dropDownHidden ? 'hidden' : ''}`}>
          <p className='note'>Note: Only affects Post content</p>
          <div className="select-font-setting">
            <p className="setting">Font-Size:</p>
            <div className="options">
              <p onClick={() => this.setState({postFontSize: 15})} className={`option ${this.state.postFontSize===15 ? ('button') : ('')}`}>15</p>
              <p onClick={() => this.setState({postFontSize: 20})} className={`option ${this.state.postFontSize===20 ? ('button') : ('')}`}>20</p>
              <p onClick={() => this.setState({postFontSize: 25})} className={`option ${this.state.postFontSize===25 ? ('button') : ('')}`}>25</p>
              <p onClick={() => this.setState({postFontSize: 30})} className={`option ${this.state.postFontSize===30 ? ('button') : ('')}`}>30</p>
            </div>
          </div>
          <div className='select-font-setting'>
            <p className='setting'>Font-Weight:</p>
            <div className='options'>
              <p onClick={() => (this.setState({postFontWeight: 'lighter'}))} className='option'>Light</p>
              <p onClick={() => (this.setState({postFontWeight: 'bold'}))} className='option'>Bold</p>
            </div>
          </div>
          <div className='select-font-setting'>
            <p className='setting'>Font-Family:</p>
            <div className="select-wrapper">
              <div className={`select ${this.state.fontFamilySelectOpen ? 'open' : ''}`}>
                <div className={`select__trigger ${this.state.fontFamilySelectOpen ? 'open' : ''}`}>
                  <span>{this.state.fontFamilyOptionSelected}</span>
                  <div className="arrow" onClick={() => {this.state.fontFamilySelectOpen ? (this.setState({fontFamilySelectOpen: false})) : (this.setState({fontFamilySelectOpen: true}))}}></div>
                </div>
                <div className="custom-options">
                  <span onClick={() => {this.setState({postFontFamily: 'Berkshire Swash', fontFamilyOptionSelected: 'Berkshire Swash'})}} className={`custom-option ${this.state.fontFamilyOptionSelected==='Berkshire Swash' ? 'selected' : ''}`} data-value="Berkshire Swash">Berkshire Swash</span>
                  <span onClick={() => {this.setState({postFontFamily: 'Verdana', fontFamilyOptionSelected: 'Verdana'})}} className={`custom-option ${this.state.fontFamilyOptionSelected==='Arial' ? 'selected' : ''}`} data-value="Verdana">Verdana</span>
                  <span onClick={() => {this.setState({postFontFamily: 'Times New Roman', fontFamilyOptionSelected: 'Times New Roman'})}} className={`custom-option ${this.state.fontFamilyOptionSelected==='Times New Roman' ? 'selected' : ''}`} data-value="Times New Roman">Times New Roman</span>
                </div>
              </div>
            </div>
          </div>
          <div className='select-font-setting'>
            <p className='setting'>Line-Height:</p>
            <div className='options'>
              <p onClick={() => {this.setState({postLineHeight: this.state.postLineHeight-2}); console.log(this.state.postLineHeight)}} className='option'>Lh-</p>
              <p onClick={() => {this.setState({postLineHeight: this.state.postLineHeight+2}); console.log(this.state.postLineHeight)}} className='option'>Lh+</p>
            </div>
          </div>
        </div>
        {/* Dark-Light Mode Switch */}
        <div className="theme-switch-wrapper">
          {/* <span id="toggle-icon">
            <i className="fas fa-sun"></i>
          </span> */}
          <label className="theme-switch" >
            <input type="checkbox" onClick={() => {this.state.mode==='light' ? (this.setState({mode: 'dark'})) : (this.setState({mode: 'light'})); console.log(this.state.mode)}}/>
            <div className={`slider round ${this.state.mode==='dark' ? 'dark' : ''}`}></div>
          </label>
        </div>
        {/* Routes */}
        <Routes>
          <Route path='' element={<HomePage mode={this.state.mode}/>} />
          <Route path='/post/:id' element={<PostPage prop={this.state.posts} postFontSize={this.state.postFontSize} postFontFamily={this.state.postFontFamily} postLineHeight={this.state.postLineHeight} postFontWeight={this.state.postFontWeight} mode={this.state.mode}/>} />
          <Route path='/list/:id' element={<ListPage prop={this.state.posts} mode={this.state.mode}/>} />
        </Routes>
        {/* Footer */}
        <div className={`footer ${this.state.mode==='dark' ? 'dark' : ''}`}> 
          <span className='footer-text'>
            <p className='contact-line'>{'Contact Me At:'}</p>
          </span>
          <div className='contact-icons'>
            <img alt='LinkedIn' src={this.state.mode==='dark' ? LinkedInIcon1 : LinkedInIcon} className='contact-icon'></img>
            <img alt='Twitter' src={this.state.mode==='dark' ? TwitterIcon1 : TwitterIcon} className='contact-icon'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
