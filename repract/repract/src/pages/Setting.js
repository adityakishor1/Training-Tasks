import React from 'react';

const Setting = () => {
  return (
    <div>
      <h2>Notification Settings</h2>
      <label><input type="radio" name="notif" /> Email</label><br />
      <label><input type="radio" name="notif" /> SMS</label><br />
      <label><input type="radio" name="notif" /> None</label>
    </div>
  );
};

export default Setting;
