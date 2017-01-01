const types = {
  OPEN_SEARCH: 'OPEN_SEARCH',
  CLOSE_SEARCH: 'CLOSE_SEARCH'
}

const openSearch = () => ({
  type: types.OPEN_SEARCH,
})

const closeSearch = () => ({
  type: types.CLOSE_SEARCH,
})


export const globalActionCreators = {
  openSearch,
  closeSearch,
}

const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco'},
    {id: 1, icon: 'recent', title: 'Zynga HQ', subtitle: '699 8th St, San Francisco'},
    {id: 2, icon: 'recent', title: 'Facebook HQ', subtitle: '888 Brannan St, San Francisco, CA'},
    {id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA'},
    {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
  ],
  searchIsOpen: false,
}


export default global = (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_SEARCH:
      return Object.assign({}, state, {
        searchIsOpen: true
      })
    case types.CLOSE_SEARCH:
      return Object.assign({}, state, {
        searchIsOpen: false
      })
    default:
      return state
  }
}
