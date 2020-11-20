import uuid from "uuid";
import {Todo} from './type'

// constants
const CREATE_TODO = 'CREATE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECT_TODO = 'SELECT_TODO'

// actions & Action Type

interface CreateTodoActionType {
	type: typeof CREATE_TODO
	payload: Todo
}

export const createTodoActionCreator = ({desc}: {
	desc: string;
}): CreateTodoActionType => {
	//const {desc} = data;
	return {
		type: CREATE_TODO,
		payload: {
			id: uuid(),
			desc,
			isComplete: false
		}
	}
}

interface EditTodoActionType {
	type: typeof EDIT_TODO;
	payload: { id: string, desc: string }
}

export const editTodoActionCreator = ({id, desc}: {
	id: string, desc: string
}): EditTodoActionType => {
	//const {id, desc} = data;
	return {
		type: EDIT_TODO,
		payload: {id, desc}
	}
}

interface ToggleActionType {
	type: typeof TOGGLE_TODO;
	payload: {id: string; isComplete: boolean}
}

export const toggleTodoActionCreator = ({
	id, isComplete
}: {
	id: string;
	isComplete: boolean;
}): ToggleActionType => {
	return {
		type: TOGGLE_TODO,
		payload: { id, isComplete }
	}
}

