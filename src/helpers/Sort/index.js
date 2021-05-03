import { ORDER_TYPE } from '../../types/sort';

const sortAscString = (object1, object2, key) => {
    const obj1 = object1[key].toUpperCase();
    const obj2 = object2[key].toUpperCase();
  
    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }

    return 0;
}

const sortDescString = (object1, object2, key) => {
    const obj1 = object1[key].toUpperCase();
    const obj2 = object2[key].toUpperCase();
  
    if (obj1 > obj2) {
      return -1;
    }
    if (obj1 < obj2) {
      return 1;
    }

    return 0;
}

const sortAscNumber = (object1, object2, key) => {
  return object1[key] - object2[key];
}

const sortDescNumber = (object1, object2, key) => {
  return object2[key] - object1[key];
}

const sortAsc = (object1, object2, key) => {
  if(isNaN(object1[key])) {
    return sortAscString(object1, object2, key);
  } else {
    return sortAscNumber(object1, object2, key);
  }
}

const sortDesc = (object1, object2, key) => {
  if(isNaN(object1[key])) {
    return sortDescString(object1, object2, key);
  } else {
    return sortDescNumber(object1, object2, key);
  }
}

export const sortGridColumn = (list, columnName, order) => {
    if(columnName && order) {
      list.sort((item1, item2) => {
          if(order === ORDER_TYPE.ASC) {
              return sortAsc(item1, item2, columnName);
          } else {
              return sortDesc(item1, item2, columnName);
          }
      })
    }
}