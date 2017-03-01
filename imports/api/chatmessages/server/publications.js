import { Meteor } from 'meteor/meteor';
import { ChatMessages } from '../activity';

Meteor.publish('ChatMessages.pub.list', ({ chatId }) => ChatMessages.find({ chatId }, { limit: 40, sort: { createdAt: 1 } }));
