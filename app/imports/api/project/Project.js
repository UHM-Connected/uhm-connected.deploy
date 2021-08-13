import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The ProjectsCollection. It encapsulates state and variable values for stuff.
 */
class ProjectsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProjectsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      projectName: String,
      image: String,
      faculty: String,
      department: String,
      goal: String,
      studentRequirements: String,
      description: String,
      researchArea: Array,
      'researchArea.$': String,
      email: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.listPublicationName = `${this.name}.publication.list`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ProjectsCollection.
 * @type {ProjectsCollection}
 */
export const Projects = new ProjectsCollection();
