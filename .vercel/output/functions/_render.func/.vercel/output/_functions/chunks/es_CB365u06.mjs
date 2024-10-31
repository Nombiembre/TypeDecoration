import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B4sksaN4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"introducción\">Introducción</h2>\n<p>En Spark Labs (“nosotros”, “nuestro” o “nos”), priorizamos tu privacidad. Esta Política de Privacidad describe cómo manejamos tu información cuando utilizas nuestro producto: la aplicación TypeDecoration (la “App”).</p>\n<h2 id=\"información-que-recopilamos\">Información que Recopilamos</h2>\n<p>No recopilamos, almacenamos ni procesamos ninguna información personal de los usuarios de nuestra App.</p>\n<h2 id=\"seguridad-de-los-datos\">Seguridad de los Datos</h2>\n<p>Aunque no almacenamos ninguna información de los usuarios, implementamos medidas de seguridad adecuadas para proteger cualquier interacción dentro de la App.</p>\n<h2 id=\"cambios-a-esta-política-de-privacidad\">Cambios a esta Política de Privacidad</h2>\n<p>Podemos actualizar esta Política de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con una fecha de vigencia actualizada. Te recomendamos revisar esta Política de Privacidad periódicamente.</p>\n<h2 id=\"contacto-y-soporte\">Contacto y Soporte</h2>\n<p>Si tienes alguna pregunta sobre esta Política de Privacidad o sobre la App, por favor contáctanos a través de nuestro formulario de contacto.</p>";

				const frontmatter = {"title":"Política de Privacidad","description":"Consulta la Política de Privacidad de la aplicación Patterns de Spark Labs, que detalla la seguridad de datos, privacidad del usuario y soporte.","date":"2026-06-08T00:00:00.000Z"};
				const file = "/home/michi/dev/web/fiver/pixelthinkers/src/content/privacy/es.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introducción\n\nEn Spark Labs (\"nosotros\", \"nuestro\" o \"nos\"), priorizamos tu privacidad. Esta Política de Privacidad describe cómo manejamos tu información cuando utilizas nuestro producto: la aplicación TypeDecoration (la \"App\").\n\n## Información que Recopilamos\n\nNo recopilamos, almacenamos ni procesamos ninguna información personal de los usuarios de nuestra App.\n\n## Seguridad de los Datos\n\nAunque no almacenamos ninguna información de los usuarios, implementamos medidas de seguridad adecuadas para proteger cualquier interacción dentro de la App.\n\n## Cambios a esta Política de Privacidad\n\nPodemos actualizar esta Política de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con una fecha de vigencia actualizada. Te recomendamos revisar esta Política de Privacidad periódicamente.\n\n## Contacto y Soporte\n\nSi tienes alguna pregunta sobre esta Política de Privacidad o sobre la App, por favor contáctanos a través de nuestro formulario de contacto.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introducción","text":"Introducción"},{"depth":2,"slug":"información-que-recopilamos","text":"Información que Recopilamos"},{"depth":2,"slug":"seguridad-de-los-datos","text":"Seguridad de los Datos"},{"depth":2,"slug":"cambios-a-esta-política-de-privacidad","text":"Cambios a esta Política de Privacidad"},{"depth":2,"slug":"contacto-y-soporte","text":"Contacto y Soporte"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
