import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Users } from '../../api/user/User';
import { Projects } from '../../api/project/Project';
import { Connects } from '../../api/connect/Connects';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addProject(data) {
  console.log(`  Adding: ${data.projectName} (${data.email})`);
  Projects.collection.insert(data);
}

function addConnect(data) {
  console.log(`  Adding: ${data.lastName} (${data.email})`);
  Connects.collection.insert(data);
}

if (Connects.collection.find().count() === 0) {
  if (Meteor.settings.defaultConnects) {
    console.log('Creating default data.');
    Meteor.settings.defaultConnects.map(data => addConnect(data));
  }
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

// Initialize the ProjectsCollection if empty.
if (Projects.collection.find().count() === 0) {
  if (Meteor.settings.defaultProjects) {
    console.log('Creating default projects.');
    Meteor.settings.defaultProjects.map(data => addProject(data));
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
