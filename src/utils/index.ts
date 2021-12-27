import { v1 as uuidv4 } from 'uuid';

const createRandomUUID = ():string => {
  return uuidv4()
}

export {
  createRandomUUID,
}