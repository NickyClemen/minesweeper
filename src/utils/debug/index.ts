import Debug from 'debug';

export default function debug(moduleName: string, strMessage: string): void {
  const debug: Debug.Debugger = Debug(`minesweeper:${ moduleName }`);

  return debug(strMessage);
}