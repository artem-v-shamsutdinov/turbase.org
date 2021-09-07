import { createWriteStream } from "fs";

console.log(__dirname + '/allActions.log')
export var all_actions_file = createWriteStream(__dirname + '/allActions.log', {flags : 'a'});