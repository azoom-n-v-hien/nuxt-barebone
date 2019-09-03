module.exports = function rsmdcNuxtModule(moduleOptions) {
  this.addPlugin(__dirname + '/plugin.js')
}

function createElm(tag, attrs, parent) {
  return {
    type: 1,
    attrsList: [],
    attrsMap: {},
    attrs: Object.keys(attrs).map(name => ({
      name,
      value: `"${attrs[name]}"`
    })),
    tag: tag,
    parent: parent,
    children: []
  }
}

function findChildrenByClass(el, className) {
  if (!el.children) return
  return el.children.find(child => {
    return child.attrsMap.class
      .trim()
      .split(/\s+/)
      .includes(className)
  })
}

function processCheckbox(el) {
  const background = createElm('div', { class: 'background' }, el)
  const checkmark = createElm(
    'svg',
    { class: 'checkmark', viewBox: '0 0 24 24' },
    background
  )

  const checkmarkPath = createElm(
    'path',
    {
      class: 'path',
      fill: 'none',
      d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
    },
    checkmark
  )

  const mixedmark = createElm('div', { class: 'mixedmark' }, background)

  background.children.push(checkmark)
  checkmark.children.push(checkmarkPath)
  background.children.push(mixedmark)
  el.children.push(background)
}

function processChip(el) {
  const checkmark = findChildrenByClass('checkmark')
  if (!checkmark) return

  const svg = createElm(
    'svg',
    { class: 'svg', viewBox: '-2 -3 30 30' },
    checkmark
  )
  checkmark.children.push(svg)

  const path = createElm(
    'path',
    {
      class: 'path',
      fill: 'none',
      stroke: 'black',
      d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
    },
    svg
  )
  svg.children.push(path)
}

function processSwitch(el) {
  const nativecontrol = findChildrenByClass(el, 'nativecontrol')
  if (!nativecontrol) return

  const track = createElm('div', { class: 'track' }, el)
  const underlay = createElm('div', { class: 'underlay' }, el)
  el.children = [track, underlay]

  const thumb = createElm('div', { class: 'thumb' }, underlay)
  nativecontrol.parent = thumb
  underlay.children.push(thumb)
  thumb.children.push(nativecontrol)
}

function processRadio(el) {
  const background = createElm('div', { class: 'background' }, el)
  const outer = createElm('div', { class: 'outer' }, background)
  const inner = createElm('div', { class: 'inner' }, background)
  background.children = [outer, inner]
  el.children.push(background)
}

function processLinearProgress(el) {
  const dots = createElm('div', { class: 'dots' }, el)
  const buffer = createElm('div', { class: 'buffer' }, el)
  const primary = createElm('div', { class: 'bar -primary' }, el)
  const primaryInner = createElm('span', { class: 'inner' }, primary)
  const secondary = createElm('div', { class: 'bar -secondary' }, el)
  const secondaryInner = createElm('span', { class: 'inner' }, secondary)
  el.children.push(dots)
  el.children.push(buffer)
  el.children.push(primary)
  el.children.push(secondary)
  primary.children.push(primaryInner)
  secondary.children.push(secondaryInner)
}

function processShape(el, classes) {
  const variants = ['topleft', 'topright', 'bottomleft', 'bottomright']
  const createCorner = variant => {
    return createElm('div', { class: 'corner -' + variant }, el)
  }

  const children = variants.reduce((children, variant) => {
    if (classes.includes('-' + variant)) {
      children.push(createCorner(variant))
    }
    return children
  }, [])
  if (!children.length) {
    variants.forEach(variant => {
      el.children.push(createCorner(variant))
    })
  } else {
    el.children = el.children.concat(children)
  }
}

function processLineRipple(el) {
  const lineRipple = createElm('div', { class: 'mdc-line-ripple' }, el)
  el.children.push(lineRipple)
}

function processNotchedOutline(el) {
  const notched = createElm('div', { class: 'mdc-notched-outline' }, el)
  const svg = createElm('svg', { class: 'svg' }, notched)
  const path = createElm('path', { class: 'path' }, svg)
  const idle = createElm('div', { class: 'mdc-notched-outline-idle' }, el)
  el.children.push(notched)
  notched.children.push(svg)
  svg.children.push(path)
  el.children.push(idle)
}

function processSlider(el) {
  const trackContainer = createElm('div', { class: 'trackcontainer' }, el)
  const track = createElm('div', { class: 'track' }, trackContainer)
  const thumbContainer = createElm('div', { class: 'thumbcontainer' }, el)
  const pin = createElm('div', { class: 'pin' }, thumbContainer)
  const pinValueMaker = createElm('div', { class: 'pinvaluemarker' }, pin)
  const thumb = createElm(
    'svg',
    { class: 'thumb', width: '21', height: '21' },
    thumbContainer
  )
  const circle = createElm(
    'circle',
    { cx: '10.5', cy: '10.5', r: '7.875' },
    thumb
  )
  const focusring = createElm('div', { class: 'focusring' }, thumbContainer)

  el.children.push(trackContainer)
  trackContainer.children.push(track)
  el.children.push(thumbContainer)
  thumbContainer.children.push(pin)
  pin.children.push(pinValueMaker)
  thumbContainer.children.push(thumb)
  thumb.children.push(circle)
  thumbContainer.children.push(focusring)
}

function processTab(el) {
  const content = el.firstChild
  const indicator = createElm('div', { class: 'indicator' }, content)
  const indicatorContent = createElm(
    'div',
    { class: 'content -underline' },
    indicator
  )
  const tabripple = createElm('div', { class: 'tabripple' }, el)
  el.children.push(tabripple)
  indicator.children.push(indicatorContent)
  el.children[0].children.push(indicator)
}

module.exports.rsmdcCompilerModule = {
  postTransformNode(el) {
    if (!el.attrsMap.class) return
    const classes = el.attrsMap.class.trim().split(/\s+/)
    if (classes.includes('mdc-checkbox')) {
      return processCheckbox(el)
    }
    if (classes.includes('mdc-chip')) {
      return processChip(el)
    }
    if (classes.includes('mdc-switch')) {
      return processSwitch(el)
    }
    if (classes.includes('mdc-radio')) {
      return processRadio(el)
    }
    if (classes.includes('mdc-linear-progress')) {
      return processLinearProgress(el)
    }
    if (classes.includes('mdc-text-field')) {
      if (classes.includes('-ripple')) {
        return processLineRipple(el)
      }
      if (classes.includes('-outlined')) {
        return processNotchedOutline(el)
      }
      return
    }
    if (classes.includes('mdc-select')) {
      if (classes.includes('-ripple')) {
        return processLineRipple(el)
      }
      if (classes.includes('-outlined')) {
        return processNotchedOutline(el)
      }
      return
    }
    if (classes.includes('mdc-shape-container')) {
      return processShape(el, classes)
    }
    if (classes.includes('mdc-slider')) {
      return processSlider(el)
    }
    if (classes.includes('mdc-tab')) {
      return processTab(el)
    }
  }
}

module.exports.meta = require('./package.json')
