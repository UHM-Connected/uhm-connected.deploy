import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Users } from '../../api/user/User';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

// Initialize the database with a default profile document.
function addProfiles(user) {
  console.log(`  Adding: ${user.email})`);
  Users.collection.insert(user);
}

if (Users.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfile) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfile.map(user => addProfiles(user));
  }
}
