export const fields = {
  name: {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true,
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    label: 'Number',
    name: 'number',
    type: 'tel',
    required: true,
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};
