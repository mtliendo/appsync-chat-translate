/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const translateMessage = /* GraphQL */ `mutation TranslateMessage($input: translateMessageInput!) {
  translateMessage(input: $input) {
    id
    content {
      text
      language
      __typename
    }
    translatedContent {
      text
      language
      __typename
    }
    createdAt
    updatedAt
    conversationMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.TranslateMessageMutationVariables,
  APITypes.TranslateMessageMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    owner
    email
    preferredLanguage
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    owner
    email
    preferredLanguage
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createConversation = /* GraphQL */ `mutation CreateConversation(
  $input: CreateConversationInput!
  $condition: ModelConversationConditionInput
) {
  createConversation(input: $input, condition: $condition) {
    id
    name
    participants
    messages {
      items {
        id
        content {
          text
          language
          __typename
        }
        translatedContent {
          text
          language
          __typename
        }
        createdAt
        updatedAt
        conversationMessagesId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const updateConversation = /* GraphQL */ `mutation UpdateConversation(
  $input: UpdateConversationInput!
  $condition: ModelConversationConditionInput
) {
  updateConversation(input: $input, condition: $condition) {
    id
    name
    participants
    messages {
      items {
        id
        content {
          text
          language
          __typename
        }
        translatedContent {
          text
          language
          __typename
        }
        createdAt
        updatedAt
        conversationMessagesId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateConversationMutationVariables,
  APITypes.UpdateConversationMutation
>;
export const deleteConversation = /* GraphQL */ `mutation DeleteConversation(
  $input: DeleteConversationInput!
  $condition: ModelConversationConditionInput
) {
  deleteConversation(input: $input, condition: $condition) {
    id
    name
    participants
    messages {
      items {
        id
        content {
          text
          language
          __typename
        }
        translatedContent {
          text
          language
          __typename
        }
        createdAt
        updatedAt
        conversationMessagesId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteConversationMutationVariables,
  APITypes.DeleteConversationMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    content {
      text
      language
      __typename
    }
    translatedContent {
      text
      language
      __typename
    }
    createdAt
    updatedAt
    conversationMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    content {
      text
      language
      __typename
    }
    translatedContent {
      text
      language
      __typename
    }
    createdAt
    updatedAt
    conversationMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    content {
      text
      language
      __typename
    }
    translatedContent {
      text
      language
      __typename
    }
    createdAt
    updatedAt
    conversationMessagesId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    owner
    email
    preferredLanguage
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
