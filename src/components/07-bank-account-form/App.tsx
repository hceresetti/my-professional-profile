import React, { useState } from "react";
import { View, Text, TextInput, Picker, Switch, Slider, Button } from "react-native";

export default App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Male");
  const [education, setEducation] = useState("Higher Education");
  const [accountLimit, setAccountLimit] = useState(2000);
  const [isBrazilian, setIsBrazilian] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  function submit() {
    const formData = {
      Name: String = name,
      Age: Number = age,
      Sex: String = sex,
      Education: String = education,
      'Account Limit': Number = accountLimit,
      Brazilian: isBrazilian ? 'Yes' : 'No',
    };
    setSubmittedData(formData);
  };

  return (
    <View style={styles.tile}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <Picker
        style={styles.input}
        selectedValue={sex}
        onValueChange={(itemValue) => setSex(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <Picker
        style={styles.input}
        selectedValue={education}
        onValueChange={(itemValue) => setEducation(itemValue)}
      >
        <Picker.Item label="High School" value="High School" />
        <Picker.Item label="Bachelor's Degree" value="Bachelor's Degree" />
        <Picker.Item label="Master's Degree" value="Master's Degree" />
        <Picker.Item label="Ph.D." value="Ph.D." />
      </Picker.Item>
      <Slider
        style={styles.input}
        value={accountLimit}
        onValueChange={(value) => setAccountLimit(value)}
        minimumValue={0}
        maximumValue={5000}
        step={100}
      />
      <Text style={styles.sliderText}>Account Limit: {accountLimit}</Text>
      <View style={styles.switchtile}>
        <Text style={styles.switchLabel}>Is Brazilian:</Text>
        <Switch
          style={styles.switch}
          value={isBrazilian}
          onValueChange={(value) => setIsBrazilian(value)}
        />
        <Text style={styles.switchText}>{isBrazilian ? 'Yes' : 'No'}</Text>
      </View>
      <Button title="Forward" onPress={submit} />

      {submittedData && (
        <View style={styles.submittedData}>
          <Text style={styles.submittedDataHeader}>Submitted Data:</Text>
          {Object.entries(submittedData).map(([key, value]) => (
            <Text key={key} style={styles.submittedDataText}>
              {key}: {value}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

export default { App }
