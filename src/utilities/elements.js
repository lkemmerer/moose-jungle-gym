exports.allTheThings = [
  {
    label: 'first_name',
    types: ['text'],
    names: ['first-name', 'nombre', 'prénom', 'vorname']
  },
  { 
    label: 'last_name',
    types: ['text'],
    names: ['last-name', 'nachname', 'apellido', 'nom-de-famille']
  },
  { 
    label: 'favorite_color',
    types: ['radio', 'dropdown'],
    names: ['favorite-color', 'color-favorito', 'couleur-préférée', 'lieblingsfarbe'],
    choices: ['Blue', 'Not Red', 'Taupe', 'Go Away']
  },
  { 
    label: 'enjoys_cats',
    types: ['checkbox'],
    names: ['do-you-like-cats', 'mögen-sie-katzen', 'te-gustan-los-gatos', 'aimez-vous-les-chats']
  },
  { 
    label: 'languages',
    types: ['checkbox-group'],
    names: ['languages', 'langues ', 'sprachen', 'idiomas'],
    choices: ['English', 'French', 'German', 'Spanish']
  }
];
