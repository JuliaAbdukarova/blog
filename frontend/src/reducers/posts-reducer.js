import { ACTION_TYPE } from "../actions";

const inistialPostsState = {
    id: '',
    title: '',
    imageUrl: '',
    content: '',
    publishedAt: '',
    comment: []
};

export const postsReducer = (state=inistialPostsState, action ) => {
    switch (action.type) {

        default:
            return state;
    }
};
