

import { SORT_CHARACTER, SORT_CHARACTER_ERROR } from '../../constants';


export const sortArgsForFilter = sortArg => ({
  type: SORT_CHARACTER,
  sortArg
});

export const sortChatactersError = (error) => ({
  type: SORT_CHARACTER_ERROR,
  error
})