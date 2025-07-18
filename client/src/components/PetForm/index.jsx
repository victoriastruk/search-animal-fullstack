import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createPetThunk, getTypesThunk } from '../../store/slices/petsSlice';

const CITIES = ['Kyiv', 'Dnipro', 'New York'];

function PetForm({ petTypes, getTypes, createPet }) {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CITIES[0],
    lostDate: '',
    petTypeId: '',
  };

  const handleSubmit = (values, formikBag) => {
    createPet(values);
    formikBag.resetForm();
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form>
          <label>
            Name:
            <Field name="name" type="text" placeholder="Pet`s name" autoFocus />
          </label>
          <br />
          <label>
            Your Name:
            <Field name="owner" type="text" placeholder="Your name" />
          </label>
          <br />
          <label>
            Your Contacts:
            <Field
              name="ownerContacts"
              type="text"
              placeholder="+XX XXX XXX XX XX"
            />
          </label>
          <label>
            Describe Your Pet:
            <Field name="description" type="text" placeholder="description" />
          </label>
          <br />
          <label>
            Lost Date:
            <Field name="lostDate" type="date" />
          </label>
          <br />
          <label>City:</label>
          <select
            name="city"
            value={formikProps.values.city}
            onChange={formikProps.handleChange}
          >
            {CITIES.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <br />
          {petTypes.length !== 0 && (
            <>
              <label>Pet`s type:</label>
              <select
                name="petTypeId"
                value={formikProps.values.petTypeId}
                onChange={formikProps.handleChange}
              >
                {petTypes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.type}
                  </option>
                ))}
              </select>
              <br />
            </>
          )}
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ petsData: { petTypes } }) => ({ petTypes });

const mapDispatchToProps = (dispatch) => ({
  getTypes: () => dispatch(getTypesThunk()),
  createPet: (values) => dispatch(createPetThunk(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
