import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"introduction\">Introduction</h2>\n<p>Chez Spark Labs (“nous”, “notre” ou “nos”), nous accordons une grande importance à votre vie privée. Cette Politique de Confidentialité décrit comment nous gérons vos informations lorsque vous utilisez notre produit : TypeGradient (l’ “App”).</p>\n<h2 id=\"informations-que-nous-collectons\">Informations que Nous Collectons</h2>\n<p>Nous ne collectons, ne stockons, ni ne traitons aucune information personnelle des utilisateurs de notre App.</p>\n<h2 id=\"sécurité-des-données\">Sécurité des Données</h2>\n<p>Bien que nous ne stockions aucune information des utilisateurs, nous mettons en œuvre des mesures de sécurité appropriées pour protéger toutes les interactions au sein de l’App.</p>\n<h2 id=\"modifications-de-cette-politique-de-confidentialité\">Modifications de cette Politique de Confidentialité</h2>\n<p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date d’entrée en vigueur actualisée. Nous vous encourageons à consulter régulièrement cette Politique de Confidentialité.</p>\n<h2 id=\"contact-et-support\">Contact et Support</h2>\n<p>Si vous avez des questions concernant cette Politique de Confidentialité ou l’App, veuillez nous contacter via notre formulaire de contact.</p>";

				const frontmatter = {"title":"Politique de Confidentialité","description":"Consultez la Politique de Confidentialité de l'application Patterns par Spark Labs, détaillant la sécurité des données, la confidentialité des utilisateurs et l'assistance.","date":"2026-06-08T00:00:00.000Z"};
				const file = "/home/michi/dev/web/fiver/pixelthinkers/src/content/privacy/fr.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introduction\n\nChez Spark Labs (\"nous\", \"notre\" ou \"nos\"), nous accordons une grande importance à votre vie privée. Cette Politique de Confidentialité décrit comment nous gérons vos informations lorsque vous utilisez notre produit : TypeGradient (l' \"App\").\n\n## Informations que Nous Collectons\n\nNous ne collectons, ne stockons, ni ne traitons aucune information personnelle des utilisateurs de notre App.\n\n## Sécurité des Données\n\nBien que nous ne stockions aucune information des utilisateurs, nous mettons en œuvre des mesures de sécurité appropriées pour protéger toutes les interactions au sein de l'App.\n\n## Modifications de cette Politique de Confidentialité\n\nNous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date d'entrée en vigueur actualisée. Nous vous encourageons à consulter régulièrement cette Politique de Confidentialité.\n\n## Contact et Support\n\nSi vous avez des questions concernant cette Politique de Confidentialité ou l'App, veuillez nous contacter via notre formulaire de contact.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"informations-que-nous-collectons","text":"Informations que Nous Collectons"},{"depth":2,"slug":"sécurité-des-données","text":"Sécurité des Données"},{"depth":2,"slug":"modifications-de-cette-politique-de-confidentialité","text":"Modifications de cette Politique de Confidentialité"},{"depth":2,"slug":"contact-et-support","text":"Contact et Support"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
