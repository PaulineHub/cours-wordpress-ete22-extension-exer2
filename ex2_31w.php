<?php
/**
 * Plugin Name: exercice2
 * Plugin URI: http://wordpress.org/plugins/exercice2/
 * Description: 
 * Author: Pauline Huby
 * Author URI: http://github.com/paulinehub/cours-wordpress-ete22-extension2
 */

function sh2_31w_enqueue()
{
   $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
   $version_js = filemtime(plugin_dir_path(__FILE__) . "script/message.js");

   wp_enqueue_style('sh2_31w_css', plugin_dir_url(__FILE__) . "/style.css", array(), $version_css);
   wp_enqueue_script('sh2_31w_js', plugin_dir_url(__FILE__) .  "script/message.js", array(), $version_js, true);
}

add_action('wp_enqueue_scripts', 'sh2_31w_enqueue');

function genere_adresse()
{
   ///////////////////////////////////// HTML
   $contenu .= "<code class='code_adresse'>";
   $contenu .= "3800 Rue Sherbrooke E, Montréal, QC H1X 2A2";
   $contenu .= "</code>";
   $contenu .= "<button id='mon_bouton'>OK</button>";

   return $contenu;
}

add_shortcode('adr', 'genere_adresse');