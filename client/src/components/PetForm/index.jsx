import { Formik, Form, Field, ErrorMessage } from 'formik';

const CITIES = ['Kyiv', 'Dnipro', 'New York'];

function PetList() {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CITIES[0],
    lostDate: '',
    petTypeId: '1',
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };
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
          Add comment More actions
          <label>Pet`s type:</label>
          <select
            name="petTypeId"
            value={formikProps.values.petTypeId}
            onChange={formikProps.handleChange}
          >
            {[
              { id: '1', type: 'parrot' },

              { id: '2', type: 'cat' },
            ].map((t) => (
              <option key={t.id} value={t.id}>
                {t.type}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
}

export default PetList;
