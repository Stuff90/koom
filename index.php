<?php include_once('import/header.html'); ?>

		
<div id="main">
	<div id="last-actions-wrapper">
		<h2>Les dernières <strong>actions</strong></h2>				
			<div id="action-types-wrapper">
				<p><a href="actions.php" class="ui-button">Voir toutes les actions</a></p>
				<ul id="action-types">
					<li class="active icon-bicycle"></li>
					<li class="icon-food"></li>
					<li class="icon-dollar"></li>
					<li class="icon-flash"></li>
					<li class="icon-trash"></li>
				</ul>
				<div id="action-selector-triangle"></div>
			</div>

			<div id="action-details-wrapper" class="ui-content-emphasizer">
				<h4 id="action-name">Me déplacer à vélo quand celà est possible</h4>
				<div id="action-counter-wrapper">
					<div id="action-scale-wrapper"></div>
					<p id="action-score" goal="300">150</p>
				</div>
				<p>Nous économisions ainsi la consommation en électricité de 40 panneaux publicitaires dans une ville comme Nantes</p>
				<p id="action-linkto">
					<a href="actions.php" class="ui-button-warning">Voir l'action</a>
				</p>
			</div>
	</div>

	<hr />

	<!-- Vous n'agissez pas seul -->
	<div id="not-alone-wrapper">
		<h2>Vous n'agissez <strong>pas seul</strong></h2>
		<div id="map-wrapper" zoom="6"></div>
		<div id="member-wrapper" class="ui-content-emphasizer">
			<div id="member-details">
				<img src="style/img/profil.jpg" />
				<p id="member-name"><span>Horlaville</span><br /><strong>Grégory</strong></p>
				<p id="member-score"><strong>1250</strong> pts</p>
			</div><!--
			--><div id="member-involvedin">
				<ul id="involvedin-list-actions">
					<li><a href="profil.php"><img src="style/img/profil-small.jpg"></a></li>
					<li><a href="profil.php"><img src="style/img/profil-small.jpg"></a></li>
					<li><a href="profil.php"><img src="style/img/profil-small.jpg"></a></li>
					<li><a href="profil.php"><img src="style/img/profil-small.jpg"></a></li>
					<li><a href="profil.php"><img src="style/img/profil-small.jpg"></a></li>
					<li><a href="profil.php"><img src="style/img/profil-small.jpg"></a></li>
					<li id="involvedin-actions-more"><a href="#">+</a></li>
				</ul>
			</div><!--
			--><div id="member-contact">
				<p><a href="#" class="ui-button">Envoyer un message</a></p>
			</div>
		</div>
	</div>

	<hr />

	<!-- Les Coups de Pouce -->
	<div id="partners-wrapper">
		<h2>Les <strong>coups de pouce</strong></h2>
		<ul id="partners">
			<li>
				<span class="ui-content-emphasizer"><a href="#"><img src="style/img/logo_sncf.png" alt="Nom du partenaire"></a></span>
				<p>-10%</p>
			</li><!--
			--><li>
				<span class="ui-content-emphasizer"><a href="#"><img src="style/img/logo_sncf.png" alt="Nom du partenaire"></a></span>
				<p>-10%</p>
			</li><!--
			--><li>
				<span class="ui-content-emphasizer"><a href="#"><img src="style/img/logo_sncf.png" alt="Nom du partenaire"></a></span>
				<p>-10%</p>
			</li><!--
			--><li>
				<span class="ui-content-emphasizer"><a href="#"><img src="style/img/logo_sncf.png" alt="Nom du partenaire"></a></span>
				<p>-10%</p>
			</li><!--
			--><li>
				<span class="ui-content-emphasizer"><a href="#"><img src="style/img/logo_sncf.png" alt="Nom du partenaire"></a></span>
				<p>-10%</p>
			</li><!--
			--><li>
				<span class="ui-content-emphasizer"><a href="#"><img src="style/img/logo_sncf.png" alt="Nom du partenaire"></a></span>
				<p>-10%</p>
			</li>
		</ul>
	</div>

	<hr />
	
	<!-- Les actualités -->
	<div id="news-wrapper">
		<h2>Les <strong>actualités</strong></h2>
		<ul id="news">
			<li class="ui-content-emphasizer">
				<a href="actualites.php"><img src="style/img/actu.jpg" alt="Actu Image"></a>
				<h5>Apéro Koom à la Vilette</h5>
				<p class="news-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna nisi, pellentesque ac ornare at, cursus ut leo. Donec rutrum erat id nunc ornare auctor</p>
				<p><a href="#" class="ui-button">Lire le sujet</a></p>
			</li><!--
			--><li class="ui-content-emphasizer">
				<a href="actualites.php"><img src="style/img/actu.jpg" alt="Actu Image"></a>
				<h5>notre nouveau site réalisé par les étudiants d'HéTIC</h5>
				<p class="news-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna nisi, pellentesque ac ornare at, cursus ut leo. Donec rutrum erat id nunc ornare auctor</p>
				<p><a href="#" class="ui-button">Lire le sujet</a></p>
			</li><!--
			--><li class="ui-content-emphasizer">
				<a href="actualites.php"><img src="style/img/actu.jpg" alt="Actu Image"></a>
				<h5>La Californie dis non  à l'étiquettage OGM</h5>
				<p class="news-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna nisi, pellentesque ac ornare at, cursus ut leo. Donec rutrum erat id nunc ornare auctor</p>
				<p><a href="#" class="ui-button">Lire le sujet</a></p>
			</li>
		</ul>

		<p><a href="actualites.php" class="ui-button">Voir toutes les actus</a></p>
	</div>
</div><!--


--><div id="sidebar">
	<!-- Les dernières discussions -->
	<div id="lastest-discussions-wrapper">
		<h2>Les dernières <strong>actions</strong></h2>
		<dl id="lastest-discussions">
			<dt>
				<p class="ui-gradient-red">0</p>
			</dt>
			<dd class="ui-content-emphasizer">
				<p>Utiliser les transports en commun le plus souvent possible</p>
				<p><a href="#" class="ui-button">+</a></p>
			</dd>
			<dt>
				<p class="ui-gradient-yellow">12</p>
			</dt>
			<dd class="ui-content-emphasizer">
				<p>Manger 10 fruits et légumes par jours</p>
				<p><a href="#" class="ui-button">+</a></p>
			</dd>
			<dt>
				<p class="ui-gradient-blue">0</p>
			</dt>
			<dd class="ui-content-emphasizer">
				<p>Utiliser les transports en commun le plus souvent possible</p>
				<p><a href="#" class="ui-button">+</a></p>
			</dd>
			<dt>
				<p class="ui-gradient-green">12</p>
			</dt>
			<dd class="ui-content-emphasizer">
				<p>Utiliser les transports en commun le plus souvent possible</p>
				<p><a href="#" class="ui-button">+</a></p>
			</dd>
		</dl>
		<p><a href="empty.php" class="ui-button">Voir toutes les actions</a></p>
	</div>

	<hr />

	<!-- Les Rékoompenses -->
	<div id="rewards-wrapper">
		<h2>Les <strong>Rékoompenses</strong></h2>
		<div id="rewards">
			<ul>
				<li class="active ui-button-tab">Où en êtes vous ?</li><!--
				--><li class="ui-button-tab">Le koomeur du mois</li>
			</ul>

			<div class="ui-content-emphasizer"></div>
			<div id="rank" class="ui-content-emphasizer">
				<ul>
					<li>
						<p>1er</p>
						<img src="style/img/profil.jpg" alt="Nom du Koomeur">
					</li><!--
					--><li>
						<p>2e</p>
						<img src="style/img/profil.jpg" alt="Nom du Koomeur">
					</li><!--
					--><li>
						<p >33e</p>
						<img src="style/img/profil.jpg" alt="Nom du Koomeur">
					</li>
				</ul>
				<p id="rank-legend">Plus que <strong><span>1300</span> points</strong> pour gagner la tête du classement !</p>
				<p><strong>Tentez de gagner le cadeau<br /> du meilleur koomeur du mois</strong></p>
				<p><a href="#" class="ui-button">Devenir le Koomeur du mois</a></p>
			</div>
		</div>
	</div>
	<!-- Facebook -->
	<div id="facebook"></div>
	<!-- Publicité -->
	<a href="#"><div id="ad"><img src="style/img/pub.jpg"></div></a>


</div>

<?php include_once('import/footer.html'); ?>
