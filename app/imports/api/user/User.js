import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The UsersCollection. It encapsulates state and variable values for users.
 */
class UsersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UsersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      image: {
        type: String,
        defaultValue: 'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
      },
      title: { type: String, optional: true },
      firstName: String,
      lastName: { type: String },
      email: { type: String, unique: true },
      status: { type: String, optional: true },
      major: { type: String, optional: true },
      department: { type: String, optional: true },
      classStanding: { type: String, optional: true },
      interests: { type: String, optional: true },
      skills: { type: String, optional: true },
      bio: { type: String, optional: true },
      recentPublications: { type: String, optional: true },
      courses: { type: String, optional: true },
      education: { type: String, optional: true },
      work: { type: String, optional: true },
      references: { type: String, optional: true },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UsersCollection.
 * @type {UsersCollection}
 */
export const Users = new UsersCollection();
