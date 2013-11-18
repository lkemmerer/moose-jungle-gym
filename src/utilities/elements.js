exports.allTheThings = [
  {
    name: 'first_name',
    types: ['text'],
    labels: ['first-name', 'nombre', 'prénom', 'vorname']
  },
  { 
    name: 'last_name',
    types: ['text'],
    labels: ['last-name', 'nachname', 'apellido', 'nom-de-famille']
  },
  { 
    name: 'favorite_color',
    types: ['radio', 'dropdown'],
    labels: ['favorite-color', 'color-favorito', 'couleur-préférée', 'lieblingsfarbe'],
    choices: ['Blue', 'Not Red', 'Taupe', 'Go Away']
  },
  { 
    name: 'enjoys_cats',
    types: ['checkbox'],
    labels: ['do-you-like-cats', 'mögen-sie-katzen', 'te-gustan-los-gatos', 'aimez-vous-les-chats']
  },
  { 
    name: 'languages',
    types: ['checkbox-group'],
    labels: ['languages', 'langues ', 'sprachen', 'idiomas'],
    choices: ['English', 'French', 'German', 'Spanish']
  }
];
