export let stadiums: any = [
  { id: 1, name: "Bardo", capacity: 86000, country: "Tunis" },
  { id: 2, name: "Rades", capacity: 45000, country: "Tunis" },
  
];

export function newID(obj: string) {
  let tab: any = JSON.parse(localStorage.getItem(obj)) || [];

  let max: any;
  if (tab.length != 0) {
    max = tab[0].id;
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].id > max) {
        max = tab[i].id;
      }
    }
    return max + 1;
  } else return 1;
}
