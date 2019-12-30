
export const UPDATE_SORT = 'UPDATE_SORT';
export const SORT_CHARACTER_ERROR = 'SORT_CHARACTER_ERROR';

export const updateSort = (characters, type) => ({
  type: UPDATE_SORT,
  payload:{ type: type}
});

export const sortChatactersError = (error) => ({
    type: SORT_CHARACTER_ERROR,
    error
})