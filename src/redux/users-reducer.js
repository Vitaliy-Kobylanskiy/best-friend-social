const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING-IN-PROGRESS';


let initialState = {
    users: [],
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };

        case DELETE_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default:
            return state;
    }
};


export const addFriend = (userId) => {
    return {
        type: ADD_FRIEND,
        userId: userId
    };
};

export const deleteFriend = (userId) => {
    return {
        type: DELETE_FRIEND,
        userId: userId
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        count: totalUsersCount
    };
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    };
};

export const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    };
};

export const getUsersThunkAC = (currentPage, pageSize, getUsersAPI) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        getUsersAPI(currentPage, pageSize)
            .then(response => response.data)
            .then(data => {
                dispatch(setCurrentPage(currentPage));
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    };
};

export const followThunkAC = (userId, addNewFriend) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));

        const response = await addNewFriend(userId);
        if (response.data.resultCode === 0) {
            dispatch(addFriend(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
    };
};

export const unfollowThunkAC = (userId, remoteFriend) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        const response = await remoteFriend(userId);

        if (response.data.resultCode === 0) {
            dispatch(deleteFriend(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId));
    };
};