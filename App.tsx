import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


interface Task {
  text: string;
  id: string;
}

const App = () => {

  const [getText, setText] = useState('');
  const [getTask, setTask] = useState<Task[]>([]);
  const [getModal, setModal] = useState(false)

  const onSubmit = () => {
    if (getText.length === 0) {
      console.warn('Please enter the text');
    } else {
      const newTask: Task = { text: getText, id: Math.random().toString() };
      setTask((currentTasks) => [...currentTasks, newTask]);
      setText('');
      setModal(false)
    }
  };



  const onDelete = (id: string) => {
    setTask((getTask) => (
      getTask.filter((list) => list.id !== id)
    ))
  }

  const onCancel = () => {
    setModal(false)
  }


  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>


        {/* <View > */}


        {/* to  give multiple style */}

        {/* <Text style={[styles.textBack, { borderRadius: 20, backgroundColor: 'red', color: 'white' }]}>Hello World!</Text> */}
        {/* </View> */}


        {/* <View > */}
        {/* <Text style={[styles.textBack]}>Hello World!</Text> */}
        {/* </View> */}


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 50, padding: 10 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Task Tracker</Text>
          <Button title='Add Task' color='#8D3DAF' onPress={() => setModal(true)} />
        </View>

        {getModal && <TaskInput isVisible={getModal} setText={setText} getText={getText} onSubmit={onSubmit} onCancel={onCancel} />}

        <View style={{ flex: 3 }}>

          {/* static list but in this case styles will not apply to iphone
          due to text style(border radius) in react is not same for android and ios
          to solve it wrap the text into view and apply style into view */}

          {/* {getTask.map((task) => (
          <Text style={styles.listText}>{task}</Text>
        ))} */}



          <FlatList
            style={{ paddingVertical: 20, paddingHorizontal: 10 }}
            data={getTask}
            //if item is wrapped into {item} like this than it will directly return the text no the object
            renderItem={(item) =>  //in this case it will return the objects 
              <TaskList onDelete={onDelete} text={item.item.text} id={item.item.id} /> // Pass the id
            }
          />



          {/* always write scrolls inside a view to resolve the spacing issue */}
          {/* <ScrollView alwaysBounceVertical={true}>


          {getTask.map((task) => (
            <View style={styles.listText}>
              <Text style={{ color: 'white' }} >{task}</Text>
            </View>
          ))}
        </ScrollView> */}

        </View>

      </View >
    </>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#120E43'
  },

  header: {
    flex: 1,  //allows the view to cover particular area
    flexDirection: 'row',
    //its stretches the view based on the direction of the flex
    alignItems: 'center',   //used to change the alignment on the cross-axis ,its default value is "stretched s"
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 7,
    padding: 10,
  },

  listText: {

    backgroundColor: '#8D3DAF',
    marginVertical: 20,
    color: 'white',
    padding: 15,
    borderRadius: 10
    // textAlign: 'center', // Center horizontally
    // textAlignVertical: 'center', // Center vertically
  }

})

export default App