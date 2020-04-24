$('#footer-main').append("<style>body{margin:0}#footer-main{margin-top:20px;font-size:14px;width:100%;padding:30px;background-color:#262626;border-top:5px solid #222;font-family:'Asap',sans-serif;color:#CCC;text-align:center;visibility:visible;z-index:999;bottom:0;left:0}.footer-column{display:inline-block;margin-top:0;margin-left:30px;margin-right:30px;vertical-align:top}#footer-main p{font-size:18px}#footer-main h3{font-size:20px;font-weight:700}#footer-main a{color:#2D6AA5;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;transition:.3s}#footer-main a:hover{color:#5788B7;margin-left:7px;border-bottom:2px solid #5788B7}.footer-bottom{margin-left:auto;margin-right:auto;margin-top:20px;width:90%;padding-top:20px;border-top:2px solid #2F2F2F;color:#B2B2B2;max-width:930px}</style>");
$('#footer-main').append(
	"<div class='footer-column'>"+
		"<h3>Author</h3>"+
		"<p>Site created by MrGarretto</p>"+
		"<h3>Donate</h3>"+
		'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>'+
	"</div>"+
	"<div class='footer-column'>"+
		"<h3>Twitter</h3>"+
		"<p><img src='https://mrgarretto.com/images/twitter.png' height='15px' width='15px' style='margin-right: 8px;'/><a href='https://twitter.com/JustMrGarretto'>@JustMrGarretto</a></p>"+
		"<h3>Patreon</h3>"+
		"<p><img src='https://mrgarretto.com/images/patreon.png' height='15px' width='15px' style='margin-right: 8px;'/><a href='https://mrgarretto.com/php/patreonlink'>MrGarretto</a></p>"+
	"</div>"+
	"<div class='footer-column'>"+
		"<h3>Youtube</h3>"+
		"<p><img src='https://mrgarretto.com/images/youtube.png' height='10px' width='14px' style='margin-right: 8px;'/><a href='https://youtube.com/user/JustMrGarretto'>+MrGarretto</a></p>"+
		"<h3>Reddit</h3>"+
		"<p><img src='https://mrgarretto.com/images/reddit.png' height='15px' width='15px' style='margin-right: 8px;'/><a href='https://reddit.com/u/MrGarretto'>MrGarretto</a></p>"+
	"</div>"+
	"<div class='footer-bottom'>"+
		"<h3>About</h3>"+
		"<p>This website is the home of all things created by MrGarretto. I make things for Minecraft, the limitless sandbox game, created by Mojang AB. Everything I make is completely free for anyone to use. Since everything is free, if you plan on using and publicly releasing anything that includes something I created, you must credit me somewhere! As long as I am credited, I am fine with you releasing it. More instructions and information about this website can be found at the <a href='https://mrgarretto.com/?sub=info'>info</a> page.</p>"+
		"<p style='color:white'>&copy; MrGarretto 2020. All rights reserved.</p>"+
	"</div>"+
	"<div class='footer-bottom'>"+
		"<p>I created this website by myself (I recommend <a href='http://www.sublimetext.com/'>Sublime Text</a> to anyone who wants to do the same!), and it is currently being hosted by Digital Ocean.</p>"+
		"<p>Host website: <a href='https://www.digitalocean.com/?refcode=3c042562c7eb'>digitalocean.com</a> (Get $10 in credit for free by using this link!)</p>" +
	"</div>" +
	"<div class='footer-bottom'>"+
		"<p>This website is not endorsed, associated or affiliated with Mojang AB</p>"+
	"</div>"
	);