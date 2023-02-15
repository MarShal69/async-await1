
import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';


// function read() {
//   return new Promise((resolve, reject) => {
//     // эмуляция чтения файла
//     setTimeout(() => {
//
// eslint-disable-next-line max-len
//       const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
//       return ((input) => {
//         const buffer = new ArrayBuffer(input.length * 2);
//         const bufferView = new Uint16Array(buffer);
//         // eslint-disable-next-line no-plusplus
//         for (let i = 0; i < input.length; i++) {
//           bufferView[i] = input.charCodeAt(i);
//         }
//         resolve(buffer);
//       })(data);
//     }, 1000);
//   });
// }


// function json(data) {
//   return new Promise((resolve, reject) => {
//     // эмуляция обработки ArrayBuffer
//     setTimeout(() => {
//       resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
//     }, 500);
//   });
// }

// class GameSaving {
//   constructor(id, created, userInfo) {
//     this.id = id;
//     this.created = created;
//     this.userInfo = userInfo;
//   }
// }


export default class GameSavingLoader {
// class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  load() {
    return read()
      .then((result) =>
      // console.log(result);
        // eslint-disable-next-line implicit-arrow-linebreak
        json(result))
      .then((result) => {
        // console.log(result);
        const saving = JSON.parse(result);
        return saving;
      })
      .then((saving) => {
        const savingObject = new GameSaving(saving.id, saving.created, saving.userInfo);
        return savingObject;
      })
      .catch((error) => {
        throw error;
      });
  }
}

// const sav = new GameSavingLoader();
// console.log(sav.load());

// sav.load().then((saving) => {
//   console.log(saving);
// });


// class GameSavingLoader {
//     // eslint-disable-next-line class-methods-use-this
//     async load() {
//       try {
//             const result_1 = await read();
//             const result_2 = await
//                 // console.log(result);
//                 // eslint-disable-next-line implicit-arrow-linebreak
//                 json(result_1);
//             // console.log(result);
//             const saving = JSON.parse(result_2);
//             const saving_1 = saving;
// eslint-disable-next-line max-len
//             const savingObject = new GameSaving(saving_1.id, saving_1.created, saving_1.userInfo);
//             return savingObject;
//         } catch (error) {
//             throw error;
//         }
//     }
//   }
