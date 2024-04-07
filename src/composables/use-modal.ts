import { inject, provide, ref, type InjectionKey, type Ref, watch } from 'vue'

type ModalConfig = {
  isOpen: Ref<boolean>,
  open: () => void,
  close: () => void
}

const modalSymbol: InjectionKey<ModalConfig> = Symbol('modal')

export function provideModal() {
  const isOpen = ref(false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  watch(isOpen,  (open) => {
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    if (html && body) {
      html.style.overflow = open ? 'hidden' : 'visible'
      body.style.overflow = open ? 'hidden' : 'visible'
    }
  })

  provide(modalSymbol, {
    isOpen,
    open,
    close
  })
}

export function useModal() {
  const modal = inject(modalSymbol)
  if (!modal) {
    throw new Error('anything setup error (modal)')
  }
  return modal
}