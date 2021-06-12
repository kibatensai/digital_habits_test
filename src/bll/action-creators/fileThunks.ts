import { Dispatch } from "redux";
import { RootState } from "../store";
import { fileAPI } from "../../dal/fileAPI";
import {
  FileActions,
  IElementStructureItem,
} from "../../interfaces/interfaces";

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await fileAPI.getData();
    dispatch({ type: FileActions.FETCH_DATA, payload: data });
  } catch (e) {
    console.log(e);
  }
};

let recursiveDataImport = (
  obj: IElementStructureItem,
  data: IElementStructureItem,
  neededId: number
) => {
  if (!obj.children) {
    return;
  }
  if (obj.id === neededId) {
    obj.children = data.children;
    return;
  }
  for (let i = 0; i < obj.children.length; i++) {
    recursiveDataImport(obj.children[i], data, neededId);
  }
};

export const fetchDataById =
  (id: number) => async (dispatch: Dispatch, getState: () => RootState) => {
    const files = getState().files;
    try {
      const { data } = await fileAPI.getDataById(id);
      recursiveDataImport(files, data, id);
      dispatch({ type: FileActions.FETCH_DATA_BY_ID, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
