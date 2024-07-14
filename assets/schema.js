const schema = 
{
	"@context": "http://schema.org",
	"@type": "LocalBusiness",
	"name": "Nina Carducci",
	"address": 
     {"@type": "PostalAddress",
	  "streetAddress": "68 avenue Alsace-Lorraine",
	  "addressLocality": "Bordeaux",
	  "postalCode": "33200",
	  "addressCountry": "France"},
	"telephone": "+33556677889",
	"openingHoursSpecification": [
	  {"@type": "OpeningHoursSpecification",
		"dayOfWeek": 
         ["Monday",
		  "Tuesday",
		  "Wednesday",
		  "Thursday",
		  "Friday"],
		"opens": "10:00",
		"closes": "19:00"}],
	"description": "Photographe professionnelle"
}
let script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.getElementsByTagName('head')[0].appendChild(script);