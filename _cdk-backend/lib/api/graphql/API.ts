/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type translateMessageInput = {
  text: string,
  sourceLanguage: string,
  destinationLanguage?: string | null,
  conversationMessagesId: string,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: MessageContent,
  translatedContent?: MessageContent | null,
  createdAt: string,
  updatedAt: string,
  conversationMessagesId: string,
  owner?: string | null,
};

export type MessageContent = {
  __typename: "MessageContent",
  text: string,
  language: string,
};

export type UpdateUserInput = {
  id: string,
  owner?: string | null,
  email?: string | null,
  preferredLanguage?: string | null,
};

export type ModelUserConditionInput = {
  owner?: ModelStringInput | null,
  email?: ModelStringInput | null,
  preferredLanguage?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  owner: string,
  email: string,
  preferredLanguage: string,
  createdAt: string,
  updatedAt: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateConversationInput = {
  id?: string | null,
  name: string,
  participants: Array< string | null >,
};

export type ModelConversationConditionInput = {
  name?: ModelStringInput | null,
  participants?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  name: string,
  participants: Array< string | null >,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type UpdateConversationInput = {
  id: string,
  name?: string | null,
  participants?: Array< string | null > | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: MessageContentInput,
  translatedContent?: MessageContentInput | null,
  conversationMessagesId: string,
};

export type MessageContentInput = {
  text: string,
  language: string,
};

export type ModelMessageConditionInput = {
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  conversationMessagesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: MessageContentInput | null,
  translatedContent?: MessageContentInput | null,
  conversationMessagesId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  owner: string,
  email: string,
  preferredLanguage: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  email?: ModelStringInput | null,
  preferredLanguage?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  participants?: ModelStringInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  conversationMessagesId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  preferredLanguage?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionConversationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  participants?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type TranslateMessageMutationVariables = {
  input: translateMessageInput,
};

export type TranslateMessageMutation = {
  translateMessage:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  },
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      owner: string,
      email: string,
      preferredLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      name: string,
      participants: Array< string | null >,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          updatedAt: string,
          conversationMessagesId: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content:  {
        __typename: "MessageContent",
        text: string,
        language: string,
      },
      translatedContent?:  {
        __typename: "MessageContent",
        text: string,
        language: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      conversationMessagesId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnTranslateMessageSubscriptionVariables = {
  conversationId: string,
};

export type OnTranslateMessageSubscription = {
  onTranslateMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    owner: string,
    email: string,
    preferredLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    participants: Array< string | null >,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        },
        translatedContent?:  {
          __typename: "MessageContent",
          text: string,
          language: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    },
    translatedContent?:  {
      __typename: "MessageContent",
      text: string,
      language: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    conversationMessagesId: string,
    owner?: string | null,
  } | null,
};
