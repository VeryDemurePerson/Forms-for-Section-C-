import { addDoc, collection } from "firebase/firestore";
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { db } from './firebaseConfig';

interface EmployeeFormValues {
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
}

const EmployeeSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  department: Yup.string().required('Department is required'),
  position: Yup.string().required('Position is required'),
});

const EmployeeForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Information</Text>
      <Formik<EmployeeFormValues>
        initialValues={{
          name: '',
          email: '',
          phone: '',
          department: '',
          position: '',
        }}
        validationSchema={EmployeeSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addDoc(collection(db, "employees"), values);
            alert('Form submitted & saved to Firebase!');
            resetForm();
          } catch (error) {
            console.error("Error saving data: ", error);
            alert('Error saving data');
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Department"
              onChangeText={handleChange('department')}
              onBlur={handleBlur('department')}
              value={values.department}
            />
            {touched.department && errors.department && <Text style={styles.error}>{errors.department}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Position"
              onChangeText={handleChange('position')}
              onBlur={handleBlur('position')}
              value={values.position}
            />
            {touched.position && errors.position && <Text style={styles.error}>{errors.position}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EmployeeForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center', 
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
