import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {employeeApi} from './src/features/employee/employeeAPI';

const App = () => {
  const [trigger, result] = employeeApi.endpoints.fetchEmployees.useLazyQuery();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let renderedList =
    result.isLoading || result.error !== undefined ? (
      <Text>
        {result.error === undefined
          ? 'Loading...'
          : JSON.stringify(result.error)}
      </Text>
    ) : (
      result.data !== undefined &&
      result.data.data.map(employee => (
        <View style={styles.employeeWrapper} key={employee.id}>
          <Text style={styles.textCenter}>Employee_id : {employee.id}</Text>
          <Text style={styles.textCenter}>
            Employee Name : {employee.employee_name}
          </Text>
          <Text style={styles.textCenter}>
            Employee Salary : {employee.employee_salary}
          </Text>
          <Text style={styles.textCenter}>
            Employee Age : {employee.employee_age}
          </Text>
        </View>
      ))
    );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        title="Get Employees"
        onPress={() => {
          trigger();
        }}
      />
      {renderedList}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default App;
