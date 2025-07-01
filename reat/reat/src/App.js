import React, { useState } from 'react';

// 1. TapCounter
function TapCounter() {
  const [taps, setTaps] = useState(0);
  return (
    <section>
      <h3>1. Tap Counter</h3>
      <button onClick={() => setTaps(t => t + 1)}>Tap Here</button>
      <p>You tapped: {taps} times</p>
    </section>
  );
}

// 2. ToggleMessage
function ToggleMessage() {
  const [visible, setVisible] = useState(true);
  return (
    <section>
      <h3>2. Toggle Greeting</h3>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hello, World!' : 'Goodbye, Friend!'}
      </button>
    </section>
  );
}

// 3. TextDisplay
function TextDisplay() {
  return (
    <section>
      <h3>3. Message Displayer</h3>
      <Message content="Stay positive and keep learning!" />
    </section>
  );
}
function Message({ content }) {
  return <p>{content}</p>;
}

// 4. CascadeMessage
function Sender({ data }) {
  return (
    <section>
      <h3>4. Message Relay</h3>
      <Forward data={data} />
    </section>
  );
}
function Forward({ data }) {
  return <Message content={data} />;
}

// 5. NamesViewer
function NamesViewer() {
  const names = ['Anita', 'Rahul', 'Zara'];
  return (
    <section>
      <h3>5. Friends List</h3>
      <ul>
        {names.map((n, idx) => (
          <li key={idx}>{n}</li>
        ))}
      </ul>
    </section>
  );
}

// 6. CheckboxAlert
function CheckboxAlert() {
  const [checked, setChecked] = useState(false);
  return (
    <section>
      <h3>6. Confirmation Box</h3>
      <label>
        <input type="checkbox" onChange={e => setChecked(e.target.checked)} />
        Confirm
      </label>
      {checked && <p>Confirmed ✅</p>}
    </section>
  );
}

// 7. RealTimeInput
function RealTimeInput() {
  const [text, setText] = useState('');
  return (
    <section>
      <h3>7. Live Feedback</h3>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Current input: {text}</p>
    </section>
  );
}

// 8. InputField
function InputField({ label, name, placeholder, onUpdate }) {
  return (
    <div style={{ margin: '8px 0' }}>
      <label>{label}: </label>
      <input name={name} placeholder={placeholder} onChange={onUpdate} />
    </div>
  );
}

// 9. LoginBox
function LoginBox() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInput = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const canLogin = credentials.username && credentials.password;

  return (
    <section>
      <h3>9. Secure Login</h3>
      <InputField label="Username" name="username" placeholder="Enter ID" onUpdate={handleInput} />
      <InputField label="Password" name="password" placeholder="Enter Secret" onUpdate={handleInput} />
      <button disabled={!canLogin}>Login</button>
    </section>
  );
}

// 10. ModifiableList
function ModifiableList() {
  const [items, setItems] = useState(['Sun', 'Moon', 'Stars']);

  const deleteItem = index => {
    setItems(prev => prev.filter((_, idx) => idx !== index));
  };

  return (
    <section>
      <h3>10. Editable List</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item} <button onClick={() => deleteItem(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 11. ToDoManager
function ToDoManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addNewTask = () => {
    if (taskInput.trim()) {
      setTasks(prev => [...prev, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const removeTask = index => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h3>11. To-Do List</h3>
      <input value={taskInput} onChange={e => setTaskInput(e.target.value)} />
      <button onClick={addNewTask}>Add</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task} <button onClick={() => removeTask(idx)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 12. LoopCounter
function LoopCounter() {
  const [num, setNum] = useState(0);

  const update = () => {
    setNum(prev => (prev >= 10 ? 0 : prev + 1));
  };

  return (
    <section>
      <h3>12. Loop Counter</h3>
      <button onClick={update}>Current: {num}</button>
    </section>
  );
}

// Main App Wrapper
function UpdatedInterface() {
  return (
    <main style={{ padding: '20px' }}>
      <TapCounter />
      <ToggleMessage />
      <TextDisplay />
      <Sender data="Message sent from sender component!" />
      <NamesViewer />
      <CheckboxAlert />
      <RealTimeInput />
      <LoginBox />
      <ModifiableList />
      <ToDoManager />
      <LoopCounter />
    </main>
  );
}

export default UpdatedInterface;
