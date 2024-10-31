import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Aquí tienes la traducción al francés con el enlace solicitado:</p>\n<h2 id=\"introduction\">Introduction</h2>\n<p>Ces Conditions d’Utilisation régissent votre utilisation de l’application Patterns développée par Spark Labs (“l’App”). En accédant et en utilisant l’App, vous acceptez de respecter ces Conditions d’Utilisation. Veuillez les lire attentivement avant d’utiliser l’App.</p>\n<h2 id=\"acceptation-des-conditions\">Acceptation des Conditions</h2>\n<p>En utilisant l’App, vous reconnaissez et acceptez que : l’utilisation de l’App est volontaire, vous êtes seul responsable du contenu que vous créez avec l’App, et vous ne devez pas utiliser l’App à des fins illégales ou nuisibles.</p>\n<p>Il n’existe aucune relation client-fournisseur ni d’obligations financières entre vous et Spark Labs. L’utilisation de l’application Patterns est gratuite pour tout utilisateur de Canva, sous réserve des termes décrits dans cet accord.</p>\n<h2 id=\"droits-de-propriété-intellectuelle\">Droits de Propriété Intellectuelle</h2>\n<p>L’App et son contenu sont protégés par des lois de propriété intellectuelle. Vous conservez la propriété du contenu que vous créez avec l’App, mais nous accordez une licence pour l’utiliser, le modifier et le distribuer dans le but de faire fonctionner et de promouvoir l’App.</p>\n<h2 id=\"limitation-de-responsabilité\">Limitation de Responsabilité</h2>\n<p>En aucun cas, Spark Labs ne sera responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de ou en relation avec votre utilisation de l’App.</p>\n<h2 id=\"modifications-des-conditions\">Modifications des Conditions</h2>\n<p>Nous nous réservons le droit de mettre à jour ou de modifier ces Conditions à tout moment sans préavis. Votre utilisation continue de l’App après tout changement constitue votre acceptation des nouvelles Conditions. Nous vous encourageons à consulter ces Conditions périodiquement.</p>\n<h2 id=\"contact-et-support\">Contact et Support</h2>\n<p>Si vous avez des questions sur ces Conditions ou sur l’App, veuillez nous contacter via notre <a href=\"/support\">formulaire de contact</a>.</p>";

				const frontmatter = {"title":"Termes et conditions","description":"Consultez les Conditions d'Utilisation de l'application Patterns par Spark Labs, couvrant l'utilisation des données, la propriété intellectuelle et l'assistance","date":"2026-06-08T00:00:00.000Z"};
				const file = "/home/michi/dev/web/fiver/pixelthinkers/src/content/terms/fr.md";
				const url = undefined;
				function rawContent() {
					return "\nAquí tienes la traducción al francés con el enlace solicitado:\n\n## Introduction\n\nCes Conditions d'Utilisation régissent votre utilisation de l'application Patterns développée par Spark Labs (\"l'App\"). En accédant et en utilisant l'App, vous acceptez de respecter ces Conditions d'Utilisation. Veuillez les lire attentivement avant d'utiliser l'App.\n\n## Acceptation des Conditions\n\nEn utilisant l'App, vous reconnaissez et acceptez que : l'utilisation de l'App est volontaire, vous êtes seul responsable du contenu que vous créez avec l'App, et vous ne devez pas utiliser l'App à des fins illégales ou nuisibles.\n\nIl n'existe aucune relation client-fournisseur ni d'obligations financières entre vous et Spark Labs. L'utilisation de l'application Patterns est gratuite pour tout utilisateur de Canva, sous réserve des termes décrits dans cet accord.\n\n## Droits de Propriété Intellectuelle\n\nL'App et son contenu sont protégés par des lois de propriété intellectuelle. Vous conservez la propriété du contenu que vous créez avec l'App, mais nous accordez une licence pour l'utiliser, le modifier et le distribuer dans le but de faire fonctionner et de promouvoir l'App.\n\n## Limitation de Responsabilité\n\nEn aucun cas, Spark Labs ne sera responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de ou en relation avec votre utilisation de l'App.\n\n## Modifications des Conditions\n\nNous nous réservons le droit de mettre à jour ou de modifier ces Conditions à tout moment sans préavis. Votre utilisation continue de l'App après tout changement constitue votre acceptation des nouvelles Conditions. Nous vous encourageons à consulter ces Conditions périodiquement.\n\n## Contact et Support\n\nSi vous avez des questions sur ces Conditions ou sur l'App, veuillez nous contacter via notre [formulaire de contact](/support).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"acceptation-des-conditions","text":"Acceptation des Conditions"},{"depth":2,"slug":"droits-de-propriété-intellectuelle","text":"Droits de Propriété Intellectuelle"},{"depth":2,"slug":"limitation-de-responsabilité","text":"Limitation de Responsabilité"},{"depth":2,"slug":"modifications-des-conditions","text":"Modifications des Conditions"},{"depth":2,"slug":"contact-et-support","text":"Contact et Support"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
