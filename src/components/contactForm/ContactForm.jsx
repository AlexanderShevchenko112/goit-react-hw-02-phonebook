import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from 'components/contactForm/ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, onAddContact } = this.props;
    const isNameExist = contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    onAddContact(newContact);
    this.setState({ name: '', number: '' });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label htmlFor="numberInput">Number: </label>
        <input
          type="tel"
          id="numberInput"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <button type="submit" className={css.addBtn}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
};
