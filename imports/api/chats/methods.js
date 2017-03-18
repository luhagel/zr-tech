import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Chats from './chats';

export const getChat = new ValidatedMethod({
  // TODO: Do smth in here
  name: 'Chats.getChat',
  validate: new SimpleSchema({
    chatId: String,
  }).validator(),
  run({ chatId }) {
    return Chats.findOne({
      _id: chatId,
    });
  },
});

export const addMessageToChat = new ValidatedMethod({
  // TODO: Do smth in here
  name: 'Chats.addMessageToChat',
  validate: new SimpleSchema({
    chatId: String,
    message: String,
  }).validator(),
  run({ chatId, message }) {
    const chat = Chats.findOne({
      _id: chatId,
    });

    chat.messages.append(message);
  },
});
