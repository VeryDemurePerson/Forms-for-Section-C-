import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { db } from "./firebaseConfig";

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
}

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "employees"));
        const list: Employee[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Employee, "id">),
        }));
        setEmployees(list);
      } catch (error) {
        console.error("Error fetching employees: ", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {employees.map(emp => (
        <View key={emp.id} style={styles.card}>
          <Text style={styles.name}>{emp.name}</Text>
          <Text>Email: {emp.email}</Text>
          <Text>Phone: {emp.phone}</Text>
          <Text>Department: {emp.department}</Text>
          <Text>Position: {emp.position}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  name: { fontWeight: "bold", fontSize: 16 },
});
