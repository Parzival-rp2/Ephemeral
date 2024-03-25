import { Helmet } from "react-helmet";
// todo - add fake meta tags
export default function Meta() {
	const url = "https://ephemeral.incognitotgt.me";
	return (
		<Helmet>
			<meta name="googlebot" content="index, follow, snippet" />
			<link rel="canonical" href={url} />
			<meta
				name="keywords"
				content="proxy, web proxy, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, z1g, chromebooks, titanium network, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked"
			/>
			<meta
				name="description"
				content="Ephemeral is a web proxy that allows you to bypass internet restrictions such as firewalls, filters, and parental controls. It has a simple and clean UI, and has powerful features such as userscripts, userstyles, and a browser like UI"
			/>
			<meta property="og:site_name" content="Ephemeral" />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={`${url}/ephemeral-sm.webp`} />
			<meta
				property="og:image:secure_url"
				content={`${url}/ephemeral-sm.webp`}
			/>
			<meta property="og:title" content="Ephemeral" />
			<meta property="og:type" content="website" />
			<meta
				property="og:description"
				content="Ephemeral is a web proxy that allows you to bypass internet restrictions such as firewalls, filters, and parental controls. It has a simple and clean UI, and has powerful features such as userscripts, userstyles, and a browser like UI"
			/>
			<script type="application/ld+json">
				{`
            {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ephemeral",
            "url": "${url}",
            "sameAs": [
                "https://github.com/z1g-project",
                "${url}"
            ]
        }
            `}
			</script>
			<script type="application/ld+json">
				{`
           {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is Ephemeral?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ephemeral is a web proxy that allows you to bypass internet restrictions such as firewalls, filters, and parental controls. It has a simple and clean UI, and has powerful features such as userscripts, userstyles, and a browser like UI"
                }
            }, {
                "@type": "Question",
                "name": "How do I unblock websites at school?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Using Ephemeral, a powerful web proxy that circumvents network and extension filters. It is also open-source and free to use."
                }
            }, {
                "@type": "Question",
                "name": "What sites can I unblock with Ephemeral?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With Ephemeral you can access sites such as Discord, Spotify, YouTube and other game sites!"
                }
            },  {
                "@type": "Question",
                "name": "Does Ephemeral hide my search history?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Change your Tab appearance in Settings and make the tab look like another site!."
                }
            }, {
                "@type": "Question",
                "name": "Is Ephemeral open-source?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Check out our GitHub where you can deploy or host your own instance of Ephemeral."
                }
            }]
           }
            `}
			</script>
		</Helmet>
	);
}
