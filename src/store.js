import { createStore, combineReducers } from "redux";

const initialFormState = {
  name: "",
  email: "",
  uid: "",
  phoneNumber: "",
  description: "",
  category: "default",
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case "UPDATE_FORM_FIELD":
      return { ...state, [action.field]: action.value };
    case "UPDATE_FORM_CATEGORY":
      return { ...state, category: action.category };
    case "CLEAR_FORM":
      return initialFormState;
    default:
      return state;
  }
};

const initialCategoryState = {
  categories: [
    { id: "default", icon: "", name: "Default", description: "" },
  ],
};

const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case "UPDATE_CATEGORY":
      const updatedCategories = state.categories.map((category) =>
        category.id === action.category.id ? action.category : category
      );
      return { ...state, categories: updatedCategories };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  category: categoryReducer,
});

const store = createStore(rootReducer);

export default store;
