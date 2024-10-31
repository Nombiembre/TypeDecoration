import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"introduction\">Introduction</h2>\n<p>These Terms of Use govern your utilization of the Patterns App developed by Spark Labs (“the App”). By accessing and using the App, you agree to abide by these Terms of Use. Please read them carefully before using the App.</p>\n<h2 id=\"acceptance-of-terms\">Acceptance of Terms</h2>\n<p>By using the App you acknowledge and agree that: your use of the Apps is voluntary, uou are solely responsible for the content you create using the App and you must not use the App for any unlawful or harmful purposes.</p>\n<p>There is no client-provider relationship or any financial obligations between you and Spark Labs. The use of Pattern App is free for any Canva user, subject to the terms outlined in this agreement.</p>\n<h2 id=\"intellectual-property-rights\">Intellectual Property Rights</h2>\n<p>The App and its content are protected by intellectual property laws. You retain ownership of the content you create using the App, but grant us a license to use, modify, and distribute it for the purpose of operating and promoting the App.</p>\n<h2 id=\"limitation-of-liability\">Limitation of Liability</h2>\n<p>In no event shall Spark Labs be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.</p>\n<h2 id=\"changes-to-this-terms-and-conditions\">Changes to This Terms and Conditions</h2>\n<p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the App following any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.</p>\n<h2 id=\"contact-and-support\">Contact and Support</h2>\n<p>If you have any questions about this Terms and Conditions or the App, please contact us via <a href=\"/support\">our contact form</a>.</p>";

				const frontmatter = {"title":"Terms and Conditions","description":"Explore the Terms of Use for the Patterns App by Spark Labs, covering data use, intellectual property, and support.","date":"2026-06-08T00:00:00.000Z"};
				const file = "/home/michi/dev/web/fiver/pixelthinkers/src/content/terms/en.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introduction\n\nThese Terms of Use govern your utilization of the Patterns App developed by Spark Labs (\"the App\"). By accessing and using the App, you agree to abide by these Terms of Use. Please read them carefully before using the App.\n\n## Acceptance of Terms\n\nBy using the App you acknowledge and agree that: your use of the Apps is voluntary, uou are solely responsible for the content you create using the App and you must not use the App for any unlawful or harmful purposes.\n\nThere is no client-provider relationship or any financial obligations between you and Spark Labs. The use of Pattern App is free for any Canva user, subject to the terms outlined in this agreement.\n\n## Intellectual Property Rights\n\nThe App and its content are protected by intellectual property laws. You retain ownership of the content you create using the App, but grant us a license to use, modify, and distribute it for the purpose of operating and promoting the App.\n\n## Limitation of Liability\n\nIn no event shall Spark Labs be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.\n\n## Changes to This Terms and Conditions\n\nWe reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the App following any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.\n\n## Contact and Support\n\nIf you have any questions about this Terms and Conditions or the App, please contact us via [our contact form](/support).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"acceptance-of-terms","text":"Acceptance of Terms"},{"depth":2,"slug":"intellectual-property-rights","text":"Intellectual Property Rights"},{"depth":2,"slug":"limitation-of-liability","text":"Limitation of Liability"},{"depth":2,"slug":"changes-to-this-terms-and-conditions","text":"Changes to This Terms and Conditions"},{"depth":2,"slug":"contact-and-support","text":"Contact and Support"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
