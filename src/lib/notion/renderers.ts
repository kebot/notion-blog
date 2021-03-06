import React from 'react'
import components from '../../components/dynamic'

function applyTags(tags = [], children, noPTag = false, key) {
  let child = children

  for (const tag of tags) {
    const props: { [key: string]: any } = { key }
    let tagName = tag[0]

    if (noPTag && tagName === 'p') tagName = React.Fragment
    if (tagName === 'c') tagName = 'code'

    if (tagName === 'a') {
      props.href = tag[1]
    }

    child = React.createElement(components[tagName] || tagName, props, child)
  }
  return child
}

// const P_CLS = ['abstract', 'author', 'theorem', 'definition', 'lemma', 'proof']
// Add supports for .class
export function textBlock(text = [], noPTag = false, mainKey) {
  const children = []
  let key = 0

  const firstWord = text[0][0].split(' ')[0]
  let className

  if (firstWord[0] === '.') {
    // text[0][0] = text[0][0].slice(firstWord.length + 1)
    className = firstWord.slice(1)
  }

  for (const textItem of text) {
    key++
    if (textItem.length === 1) {
      if (key === 1 && className) {
        children.push(textItem[0].slice(firstWord.length + 1))
      } else {
        children.push(textItem)
      }
      continue
    }
    children.push(applyTags(textItem[1], textItem[0], noPTag, key))
  }

  if (className) {
    return React.createElement(
      'div',
      { key: mainKey, className: className },
      ...children
    )
  }

  return React.createElement(
    noPTag ? React.Fragment : components.p,
    { key: mainKey },
    ...children,
    noPTag
  )
}
