$(document).ready(function () {
    generateQuote();
    $("#next-quote").on("click", function () {
        generateQuote();
    });

    $("#tweet").on("click", function () {
        tweet();
    });
});

function generateQuote() {
    var quoteNumber = Math.floor(Math.random() * (quotes.length));
    var quote = quotes[quoteNumber];
    $("#quote-text").text(quote.text);
    $("#quote-author").text(quote.author);
}

function tweet() {
    var text = $("#quote-text").text();
    var author = $("#quote-author").text();
    var url = "https://twitter.com/intent/tweet?text=" + text + " — " + author + "&hashtags=business,quotes";
    window.open(url, "_blank");
}

var quotes = [{
        "text": "Leadership is a potent combination of strategy and character. But if you must be without one, be without the strategy.",
        "author": "Norman Schwarzkopf"
    },
    {
        "text": "A meeting is an event at which the minutes are kept and the hours are lost.",
        "author": "Unknown"
    },
    {
        "text": "You are not your resume, you are your work.",
        "author": "Seth Godin"
    },
    {
        "text": "Beware of any enterprise requiring new clothes.",
        "author": "Henry Thoreau"
    },
    {
        "text": "One finds limits by pushing them.",
        "author": "Herbert Simon"
    },
    {
        "text": "If you see a bandwagon, it’s too late.",
        "author": "James Goldsmith"
    },
    {
        "text": "Business opportunities are like buses, there’s always another one coming.",
        "author": "Richard Branson"
    },
    {
        "text": "You must be the change you wish to see in the world.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "You only have to do a very few things right in your life so long as you don’t do too many things wrong.",
        "author": "Warren Buffett"
    },
    {
        "text": "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves strong. The amount of work is the same.",
        "author": "Carlos Castaneda"
    },
    {
        "text": "There’s no shortage of remarkable ideas, what’s missing is the will to execute them.",
        "author": "Seth Godin"
    },
    {
        "text": "The great accomplishments of man have resulted from the transmission of ideas of enthusiasm.",
        "author": "Thomas J. Watson"
    },
    {
        "text": "Everything should be made as simple as possible, but not simpler.",
        "author": "Albert Einstein"
    },
    {
        "text": "Far and away the best prize that life offers is the chance to work hard at work worth doing.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "Change is not a threat, it’s an opportunity. Survival is not the goal, transformative success is.",
        "author": "Seth Godin"
    },
    {
        "text": "Even if you are on the right track, You’ll get run over if you just sit there.",
        "author": "Will Rogers"
    },
    {
        "text": "You must either modify your dreams or magnify your skills.",
        "author": "Jim Rohn"
    },
    {
        "text": "Look well to this day. Yesterday is but a dream and tomorrow is only a vision. But today well lived makes every yesterday a dream of happiness and every tomorrow a vision of hope. Look well therefore to this day.",
        "author": "Francis Gray"
    },
    {
        "text": "Imagination is everything. It is the preview of life’s coming attractions.",
        "author": "Albert Einstein"
    },
    {
        "text": "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
        "author": "Dwight Eisenhower"
    },
    {
        "text": "Never interrupt your enemy when he is making a mistake.",
        "author": "Napoleon Bonaparte"
    },
    {
        "text": "To be successful, you have to have your heart in your business, and your business in your heart.",
        "author": "Sr. Thomas Watson"
    },
    {
        "text": "Every accomplishment starts with a decision to try.",
        "author": "Unknown"
    },
    {
        "text": "The first one gets the oyster the second gets the shell.",
        "author": "Andrew Carnegie"
    },
    {
        "text": "Whether you think you can or whether you think you can’t, you’re right!",
        "author": "Henry Ford"
    },
    {
        "text": "A business has to be involving, it has to be fun, and it has to exercise your creative instincts.",
        "author": "Richard Branson"
    },
    {
        "text": "We generate fears while we sit. We over come them by action. Fear is natures way of warning us to get busy.",
        "author": "Dr. Henry Link"
    },
    {
        "text": "People rarely buy what they need. They buy what they want.",
        "author": "Seth Godin"
    },
    {
        "text": "Live daringly, boldly, fearlessly. Taste the relish to be found in competition",
        "author": "in having put forth the best within you.",
        "author": "Henry J. Kaiser"
    },
    {
        "text": "Success is often achieved by those who don’t know that failure is inevitable.",
        "author": "Coco Chanel"
    },
    {
        "text": "A man should never neglect his family for business.",
        "author": "Walt Disney"
    },
    {
        "text": "Sometimes when you innovate, you make mistakes. It is best to admit them quickly and get on with improving your other innovations.",
        "author": "Steve Jobs"
    },
    {
        "text": "The successful man is the one who finds out what is the matter with his business before his competitors do.",
        "author": "Roy L. Smith"
    },
    {
        "text": "Business is more exciting than any game.",
        "author": "Lord Beaverbrook"
    },
    {
        "text": "The winners in life think constantly in terms of I can, I will, and I am. Losers, on the other hand, concentrate their waking thoughts on what they should have or would have done, or what they can’t do.",
        "author": "Dennis Waitley"
    },
    {
        "text": "Work expands so as to fill the time available for its completion.",
        "author": "Cyril Northcote Parkinson/Parkinson’s Law."
    },
    {
        "text": "I feel that luck is preparation meeting opportunity.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Ideas in secret die. They need light and air or they starve to death.",
        "author": "Seth Godin"
    },
    {
        "text": "The true entrepreneur is a doer, not a dreamer.",
        "author": "Unknown"
    },
    {
        "text": "My son is now an ‘entrepreneur’. That’s what you’re called when you don’t have a job.",
        "author": "Ted Turner"
    },
    {
        "text": "The man who will use his skill and constructive imagination to see how much he can give for a dollar, instead of how little he can give for a dollar, is bound to succeed.",
        "author": "Henry Ford"
    },
    {
        "text": "For all of its faults, it gives most hardworking people a chance to improve themselves economically, even as the deck is stacked in favor of the privileged few. Here are the choices most of us face in such a system: Get bitter or get busy.",
        "author": "Bill O’ Reilly"
    },
    {
        "text": "Please think about your legacy, because you’re writing it every day.",
        "author": "Gary Vaynerchuck"
    },
    {
        "text": "Victory goes to the player who makes the next–to–last mistake.",
        "author": "Savielly Grigorievitch Tartakower"
    },
    {
        "text": "I like thinking big. If you’re going to be thinking anything, you might as well think big.",
        "author": "Donald Trump"
    },
    {
        "text": "Surviving a failure gives you more self–confidence. Failures are great learning tools… but they must be kept to a minimum.",
        "author": "Jeffrey Immelt"
    },
    {
        "text": "To think is easy. To act is difficult. To act as one thinks is the most difficult.",
        "author": "Johann Wolfgang Von Goeth"
    },
    {
        "text": "Yesterday’s home runs don’t win today’s games.",
        "author": "Babe Ruth"
    },
    {
        "text": "The only way around is through.",
        "author": "Robert Frost"
    },
    {
        "text": "The new source of power is not money in the hands of a few, but information in the hands of many.",
        "author": "John Naisbitt"
    },
    {
        "text": "The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer, not a dreamer.",
        "author": "Nolan Bushnell"
    },
    {
        "text": "You miss 100 percent of the shots you don’t take",
        "author": "Wayne Gretzky"
    },
    {
        "text": "Successful people are the ones who are breaking the rules.",
        "author": "Seth Godin"
    },
    {
        "text": "To the degree we’re not living our dreams; our comfort zone has more control of us than we have over ourselves.",
        "author": "Peter McWilliams"
    },
    {
        "text": "Saying no to loud people gives you the resources to say yes to important opportunities.",
        "author": "Seth Godin"
    },
    {
        "text": "To think creatively, we must be able to look afresh at what we normally take for granted.",
        "author": "George Kneller"
    },
    {
        "text": "Business in a combination of War and sport. ",
        "author": "Andre Maurois"
    },
    {
        "text": "To succeed… You need to find something to hold on to, something to motivate you, something to inspire you.",
        "author": "Tony Dorsett"
    },
    {
        "text": "Always forgive your enemies. Nothing annoys them more.",
        "author": "Oscar Wilde"
    },
    {
        "text": "All paid jobs absorb and degrade the mind.",
        "author": "Aristotle"
    },
    {
        "text": "Winning is not a sometime thing; it’s an all time thing. You don’t win once in a while, you don’t do things right once in a while, you do them right all the time. Winning is habit. Unfortunately, so is losing.",
        "author": "Vince Lombardi"
    },
    {
        "text": "There is no security on the earth, there is only opportunity.",
        "author": "General Douglas MacArthur"
    },
    {
        "text": "Never put off until tomorrow what you can avoid altogether.",
        "author": "Unknown"
    },
    {
        "text": "Hire character. Train skill.",
        "author": "Peter Schutz"
    },
    {
        "text": "For maximum attention, nothing beats a good mistake.",
        "author": "Unknown"
    },
    {
        "text": "Early to bed and early to rise probably indicates unskilled labor.",
        "author": "John Ciardi"
    },
    {
        "text": "Don’t worry about people stealing your ideas. If your ideas are any good, you’ll have to ram them down people’s throats.",
        "author": "Howard Aiken"
    },
    {
        "text": "It takes more than capital to swing business. You’ve got to have the A. I. D. degree to get by — Advertising, Initiative, and Dynamics.",
        "author": "Ren Mulford Jr."
    },
    {
        "text": "A calm sea does not make a skilled sailor.",
        "author": "Unknown"
    },
    {
        "text": "The worst part of success is to try to find someone who is happy for you.",
        "author": "Bette Midler"
    },
    {
        "text": "Your time is precious, so don’t waste it living someone else’s life.",
        "author": "Steve Jobs"
    },
    {
        "text": "Only when the tide goes out do you discover who’s been swimming naked.",
        "author": "Warren Buffett"
    },
    {
        "text": "Your income is directly related to your philosophy, NOT the economy.",
        "author": "Jim Rohn"
    },
    {
        "text": "The NBA is never just a business. It’s always business. It’s always personal. All good businesses are personal. The best businesses are very personal.",
        "author": "Mark Cuban"
    },
    {
        "text": "Fire the committee. No great website in history has been conceived of by more than three people. Not one. This is a deal breaker.",
        "author": "Seth Godin"
    },
    {
        "text": "Once you free yourself from the need for perfect acceptance, it’s a lot easier to launch work that matters.",
        "author": "Seth Godin"
    },
    {
        "text": "You have brains in your head. You have feet in your shoes. You can steer yourself, any direction you choose.",
        "author": "Dr. Seuss"
    },
    {
        "text": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        "author": "Charles Darwin"
    },
    {
        "text": "The golden rule for every business man is this: Put yourself in your customer’s place.",
        "author": "Orison Swett Marden"
    },
    {
        "text": "To win without risk is to triumph without glory.",
        "author": "Pierre Corneille"
    },
    {
        "text": "People don’t believe what you tell them. They rarely believe what you show them. They often believe what their friends tell them. They always believe what they tell themselves.",
        "author": "Seth Godin"
    },
    {
        "text": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        "author": "David Brinkley"
    },
    {
        "text": "Instead of wondering when your next vacation is, you ought to set up a life you don’t need to escape from.",
        "author": "Seth Godin"
    },
    {
        "text": "I had to make my own living and my own opportunity! But I made it! Don’t sit down and wait for the opportunities to come. Get up and make them!",
        "author": "C.J. Walker"
    },
    {
        "text": "People are best convinced by things they themselves discover.",
        "author": "Ben Franklin"
    },
    {
        "text": "I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.",
        "author": "Robert Bosch"
    },
    {
        "text": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        "author": "Thomas Edison"
    },
    {
        "text": "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing it is stupid",
        "author": "Einstein"
    },
    {
        "text": "Do or do not. There is no try.",
        "author": "Yoda"
    },
    {
        "text": "Your most unhappy customers are your greatest source of learning.",
        "author": "Bill Gates"
    },
    {
        "text": "Leadership is doing what is right when no one is watching.",
        "author": "George Van Valkenburg"
    },
    {
        "text": "In the business world, everyone is paid in two coins: cash and experience. Take the experience first; the cash will come later.",
        "author": "Harold Geneen"
    },
    {
        "text": "Those who say it can not be done, should not interrupt those doing it.",
        "author": "Chinese Proverb"
    },
    {
        "text": "Whatever the mind of man can conceive and believe, it can achieve. Thoughts are things! And powerful things at that, when mixed with definiteness of purpose, and burning desire, can be translated into riches.",
        "author": "Napoleon Hill"
    },
    {
        "text": "To succeed in business, to reach the top, an individual must know all it is possible to know about that business.",
        "author": "J. Paul Getty"
    },
    {
        "text": "A consultant is someone who takes the watch off your wrist and tells you the time.",
        "author": "Unknown"
    },
    {
        "text": "The absolute fundamental aim is to make money out of satisfying customers.",
        "author": "John Egan"
    },
    {
        "text": "If you would like to know the value of money, try to borrow some.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "If it really was a no–brainer to make it on your own in business there’d be millions of no–brained, harebrained, and otherwise dubiously brained individuals quitting their day jobs and hanging out their own shingles. Nobody would be left to round out the workforce and execute the business plan.",
        "author": "Bill Rancic"
    },
    {
        "text": "Get busy living or get busy dying.",
        "author": "from the “The Shawshank Redemption”"
    },
    {
        "text": "Winners take time to relish their work, knowing that scaling the mountain is what makes the view from the top so exhilarating.",
        "author": "Denis Waitley"
    },
    {
        "text": "Statistics suggest that when customers complain, business owners and managers ought to get excited about it. The complaining customer represents a huge opportunity for more business.",
        "author": "Zig Ziglar"
    },
    {
        "text": "The only place success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
    },
    {
        "text": "Speak the truth, but leave immediately after.",
        "author": "Unknown"
    },
    {
        "text": "The important thing is not being afraid to take a chance. Remember, the greatest failure is to not try. Once you find something you love to do, be the best at doing it.",
        "author": "Debbi Fields"
    },
    {
        "text": "Are you a serial idea–starting person? The goal is to be an idea–shipping person.",
        "author": "Seth Godin"
    },
    {
        "text": "The problem with the rat race is that even if you win, you’re still a rat.",
        "author": "Lilly Tomlin"
    },
    {
        "text": "Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were.",
        "author": "David Rockefeller"
    },
    {
        "text": "If you work just for money, you’ll never make it, but if you love what you’re doing and you always put the customer first, success will be yours.",
        "author": "Ray Kroc"
    },
    {
        "text": "Long–range planning works best in the short term.",
        "author": "Doug Evelyn"
    },
    {
        "text": "Genius is one percent inspiration and ninety–nine percent perspiration.",
        "author": "Thomas A. Edison"
    }];
