export default function getPathname(path, lang) {
  const pathArray = path.split('/');
  const position = pathArray.indexOf(lang) + 1;
  const pathname = pathArray.slice(position, pathArray.length).join('/');
  if (pathArray[position]) return pathname;
  return '';
}
