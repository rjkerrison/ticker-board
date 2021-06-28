const path = window.location.href
const baseUrl = path.substring(0, path.lastIndexOf('/'))
const currentYear = new Date().getFullYear()
const replacements = {
  baseUrl,
  currentYear,
}

const replaceTextForNode = (text) => {
  for (let [key, value] of Object.entries(replacements)) {
    text = text.replace(`{{${key}}}`, value)
  }
  return text
}

const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)

let node
while ((node = walk.nextNode())) {
  let text = node.textContent
  if (!text) {
    continue
  }
  node.nodeValue = replaceTextForNode(text)
}
