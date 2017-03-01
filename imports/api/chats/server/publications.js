import { Meteor } from 'meteor/meteor';
import { Chats } from '../chats';

Meteor.publish('Chats.pub.details', ({ chatId }) => Chats.find({ _id: chatId }));
