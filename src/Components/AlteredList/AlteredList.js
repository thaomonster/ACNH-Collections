const AlteredList = {
  filterVillagers(villagers, searchQuery) {
    return villagers.filter(villager => {
      const name = villager.name['name-USen'].toLowerCase();
      const search = searchQuery.toLowerCase();
      return name.includes(search);
    })
  }
}

export default AlteredList;