const quotes = [
	{
		quote: "Early bird catches the worm.",
		author: "Nayun Ki",
	},
	{
		quote: "connecting dots.. blahblah",
		author: "Steve Jobs",
	},
	{
		quote: "Samsung gelaxy S",
		author: "Jaeyong Lee",
	},
	{
		quote: "A cup of Soju",
		author: "Changjeong Lim",
	},
	{
		quote: "Baby Sha sha sha oh my Shanghai love",
		author: "Orange Caramel",
	},
	{
		quote: "Just do it",
		author: "nike",
	},
	{
		quote: "Don't wake me up please!",
		author: "naki",
	},
	{
		quote: "Lucky day!",
		author: "god",
	},
	{
		quote: "Happy day!",
		author: "you",
	},
	{
		quote: "you can be anything",
		author: "Sincerely,",
	},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomQuote() {
	randomNum = Math.floor(Math.random() * quotes.length);
	quote.innerText = quotes[randomNum].quote;
	author.innerText = "\nby.. " + quotes[randomNum].author;
}

randomQuote();