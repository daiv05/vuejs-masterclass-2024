export const usePageStore = defineStore('page', () => {
  const pageData = ref({
    title: '',
  })

  function setTitle(newTitle: string) {
    pageData.value.title = newTitle
  }

  return { pageData, setTitle }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
