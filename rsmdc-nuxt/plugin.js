import Vue from 'vue'
import { MDCSwitch } from '@rsmdc/switch'
import { MDCFormField } from '@rsmdc/form-field'
import { MDCCheckbox } from '@rsmdc/checkbox'
import { MDCRipple } from '@rsmdc/ripple'
import { MDCChipSet } from '@rsmdc/chips'
import { MDCDrawer } from '@rsmdc/drawer'
import { MDCFloatingLabel } from '@rsmdc/floating-label'
import { MDCMenuSurface } from '@rsmdc/menu-surface'
import { MDCMenu } from '@rsmdc/menu'
import { MDCNotchedOutline } from '@rsmdc/notched-outline'
import { MDCRadio } from '@rsmdc/radio'
import { MDCSelect } from '@rsmdc/select'
import { MDCTabBar } from '@rsmdc/tab-bar'
import { MDCTabIndicator } from '@rsmdc/tab-indicator'
import { MDCTabScroller } from '@rsmdc/tab-scroller'
import { MDCTab } from '@rsmdc/tab'
import { MDCTextField } from '@rsmdc/textfield'
import { MDCTopAppBar } from '@rsmdc/top-app-bar'
import { MDCLinearProgress } from '@rsmdc/linear-progress'
import { MDCSnackbar } from '@rsmdc/snackbar'
import { MDCSlider } from '@rsmdc/slider'

const classMap = {
  'mdc-button': MDCRipple,
  'mdc-switch': MDCSwitch,
  'mdc-form-field': MDCFormField,
  'mdc-chipset': MDCChipSet,
  'mdc-fab': MDCRipple,
  'mdc-floating-label': MDCFloatingLabel,
  'mdc-line-ripple': MDCRipple,
  'mdc-menu-surface': MDCMenuSurface,
  'mdc-menu': MDCMenu,
  'mdc-notched-outline': MDCNotchedOutline,
  'mdc-select': MDCSelect,
  'mdc-tab-bar': MDCTabBar,
  'mdc-tab-indicator': MDCTabIndicator,
  'mdc-tab-scroller': MDCTabScroller,
  'mdc-tab': MDCTab,
  'mdc-text-field': MDCTextField,
  'mdc-top-app-bar': MDCTopAppBar,
  'mdc-linear-progress': MDCLinearProgress,
  'mdc-snackbar': MDCSnackbar,
  'mdc-slider': MDCSlider,
  'mdc-icon-button': el => {
    el.$mdc = new MDCRipple(el)
    el.$mdc.unbounded = true
  },
  'mdc-drawer': el => {
    el.$mdc = MDCDrawer.attachTo(el)
  },
  'mdc-radio': el => {
    el.$mdc = new MDCRadio(el)
    const formField = el.closest('.mdc-form-field')
    if (!formField) {
      return
    }
    if (formField.$mdc) {
      formField.$mdc.input = el.$mdc
      return
    }
    formField.$mdc = new MDCFormField(formField)
    formField.$mdc.input = el.$mdc
  },
  'mdc-checkbox': el => {
    el.$mdc = new MDCCheckbox(el)
    const formField = el.closest('.mdc-form-field')
    if (!formField) {
      return
    }
    if (formField.$mdc) {
      formField.$mdc.input = el.$mdc
      return
    }
    formField.$mdc = new MDCFormField(formField)
    formField.$mdc.input = el.$mdc
  }
}

Vue.mixin({
  mounted() {
    if (this === this.$root) {
      // Apply rscss for added element
      this.applyRscssForAddedElements()

      // Apply rscss for remaining elements
      Object.keys(classMap).forEach(attrClass => {
        const klass = classMap[attrClass]
        this.$el.querySelectorAll(`.${attrClass}`).forEach(node => {
          if (node.$mdc) {
            return
          }
          node.$mdc = klass.constructor ? new klass(node) : klass(node)
        })
      })
    }
  },
  updated() {
    this.applyRscssForAddedElements()
  },
  methods: {
    applyRscssForAddedElements() {
      const observer = new MutationObserver(records => {
        records.forEach(record => {
          record.addedNodes.forEach(node => {
            // Return immediatly if added node is not html tagged node
            if (!node.querySelectorAll) {
              return
            }

            Object.keys(classMap).forEach(attrClass => {
              const klass = classMap[attrClass]
              // Check and apply rsmdc to added node
              if (node.classList.contains(attrClass)) {
                node.$mdc = klass.constructor ? new klass(node) : klass(node)
              }

              // Check and apply rsmdc to added node 's children
              const childrenElements = node.querySelectorAll(`.${attrClass}`)
              if (childrenElements.length === 0) {
                return
              }
              childrenElements.forEach(childNode => {
                childNode.$mdc = klass.constructor
                  ? new klass(childNode)
                  : klass(childNode)
              })
            })
          })
        })
      })
      observer.observe(this.$el, {
        childList: true,
        attributes: false,
        subtree: true
      })
    }
  }
})
