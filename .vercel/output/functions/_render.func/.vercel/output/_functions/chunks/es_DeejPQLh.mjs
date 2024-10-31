import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Aquí tienes la traducción al español con el enlace solicitado:</p>\n<h2 id=\"introducción\">Introducción</h2>\n<p>Estos Términos de Uso regulan tu utilización de la aplicación Patterns desarrollada por Spark Labs (“la App”). Al acceder y usar la App, aceptas cumplir con estos Términos de Uso. Por favor, léelos detenidamente antes de usar la App.</p>\n<h2 id=\"aceptación-de-los-términos\">Aceptación de los Términos</h2>\n<p>Al usar la App, reconoces y aceptas que: el uso de la App es voluntario, eres el único responsable del contenido que crees utilizando la App, y no debes utilizar la App para ningún propósito ilegal o dañino.</p>\n<p>No existe una relación cliente-proveedor ni obligaciones financieras entre tú y Spark Labs. El uso de la aplicación Patterns es gratuito para cualquier usuario de Canva, sujeto a los términos descritos en este acuerdo.</p>\n<h2 id=\"derechos-de-propiedad-intelectual\">Derechos de Propiedad Intelectual</h2>\n<p>La App y su contenido están protegidos por leyes de propiedad intelectual. Conservas la propiedad del contenido que creas usando la App, pero nos otorgas una licencia para usarlo, modificarlo y distribuirlo con el propósito de operar y promocionar la App.</p>\n<h2 id=\"limitación-de-responsabilidad\">Limitación de Responsabilidad</h2>\n<p>En ningún caso Spark Labs será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja de o en conexión con tu uso de la App.</p>\n<h2 id=\"cambios-en-los-términos-y-condiciones\">Cambios en los Términos y Condiciones</h2>\n<p>Nos reservamos el derecho de actualizar o modificar estos Términos en cualquier momento sin previo aviso. El uso continuado de la App tras cualquier cambio constituye tu aceptación de los nuevos Términos. Te recomendamos revisar estos Términos periódicamente.</p>\n<h2 id=\"contacto-y-soporte\">Contacto y Soporte</h2>\n<p>Si tienes alguna pregunta sobre estos Términos y Condiciones o sobre la App, por favor contáctanos a través de nuestro <a href=\"/support\">formulario de contacto</a>.</p>";

				const frontmatter = {"title":"Términos y condiciones","description":"Consulta los Términos de Uso de la aplicación Patterns de Spark Labs, que abarcan el uso de datos, propiedad intelectual y soporte.","date":"2026-06-08T00:00:00.000Z"};
				const file = "/home/michi/dev/web/fiver/pixelthinkers/src/content/terms/es.md";
				const url = undefined;
				function rawContent() {
					return "\nAquí tienes la traducción al español con el enlace solicitado:\n\n## Introducción\n\nEstos Términos de Uso regulan tu utilización de la aplicación Patterns desarrollada por Spark Labs (\"la App\"). Al acceder y usar la App, aceptas cumplir con estos Términos de Uso. Por favor, léelos detenidamente antes de usar la App.\n\n## Aceptación de los Términos\n\nAl usar la App, reconoces y aceptas que: el uso de la App es voluntario, eres el único responsable del contenido que crees utilizando la App, y no debes utilizar la App para ningún propósito ilegal o dañino.\n\nNo existe una relación cliente-proveedor ni obligaciones financieras entre tú y Spark Labs. El uso de la aplicación Patterns es gratuito para cualquier usuario de Canva, sujeto a los términos descritos en este acuerdo.\n\n## Derechos de Propiedad Intelectual\n\nLa App y su contenido están protegidos por leyes de propiedad intelectual. Conservas la propiedad del contenido que creas usando la App, pero nos otorgas una licencia para usarlo, modificarlo y distribuirlo con el propósito de operar y promocionar la App.\n\n## Limitación de Responsabilidad\n\nEn ningún caso Spark Labs será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja de o en conexión con tu uso de la App.\n\n## Cambios en los Términos y Condiciones\n\nNos reservamos el derecho de actualizar o modificar estos Términos en cualquier momento sin previo aviso. El uso continuado de la App tras cualquier cambio constituye tu aceptación de los nuevos Términos. Te recomendamos revisar estos Términos periódicamente.\n\n## Contacto y Soporte\n\nSi tienes alguna pregunta sobre estos Términos y Condiciones o sobre la App, por favor contáctanos a través de nuestro [formulario de contacto](/support).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introducción","text":"Introducción"},{"depth":2,"slug":"aceptación-de-los-términos","text":"Aceptación de los Términos"},{"depth":2,"slug":"derechos-de-propiedad-intelectual","text":"Derechos de Propiedad Intelectual"},{"depth":2,"slug":"limitación-de-responsabilidad","text":"Limitación de Responsabilidad"},{"depth":2,"slug":"cambios-en-los-términos-y-condiciones","text":"Cambios en los Términos y Condiciones"},{"depth":2,"slug":"contacto-y-soporte","text":"Contacto y Soporte"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
