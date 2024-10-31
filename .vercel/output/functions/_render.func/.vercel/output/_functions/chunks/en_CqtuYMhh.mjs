import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"introduction\">Introduction</h2>\n<p>At Spark Labs (“we”, “our,” or “us”), we prioritize your privacy. This Privacy Policy outlines how we handle your information when you use our product - TypeDecoration (the “App”).</p>\n<h2 id=\"information-we-collect\">Information We Collect</h2>\n<p>We do not collect, store, or process any personal information from users of our App.</p>\n<h2 id=\"data-security\">Data Security</h2>\n<p>While we do not store any user information, we implement appropriate security measures to protect any interactions within the App.</p>\n<h2 id=\"changes-to-this-privacy-policy\">Changes to This Privacy Policy</h2>\n<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.</p>\n<h2 id=\"contact-and-support\">Contact and Support</h2>\n<p>If you have any questions about this Privacy Policy or the App, please contact us via our contact form.</p>";

				const frontmatter = {"title":"Privacy Policy","description":"Review the Privacy Policy for the Patterns App by Spark Labs, detailing data security, user privacy, and support.","date":"2026-06-08T00:00:00.000Z"};
				const file = "/home/michi/dev/web/fiver/pixelthinkers/src/content/privacy/en.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introduction\n\nAt Spark Labs (\"we\", \"our,\" or \"us\"), we prioritize your privacy. This Privacy Policy outlines how we handle your information when you use our product - TypeDecoration (the \"App\").\n\n## Information We Collect\n\nWe do not collect, store, or process any personal information from users of our App.\n\n## Data Security\n\nWhile we do not store any user information, we implement appropriate security measures to protect any interactions within the App.\n\n## Changes to This Privacy Policy\n\nWe may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.\n\n## Contact and Support\n\nIf you have any questions about this Privacy Policy or the App, please contact us via our contact form.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"information-we-collect","text":"Information We Collect"},{"depth":2,"slug":"data-security","text":"Data Security"},{"depth":2,"slug":"changes-to-this-privacy-policy","text":"Changes to This Privacy Policy"},{"depth":2,"slug":"contact-and-support","text":"Contact and Support"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
