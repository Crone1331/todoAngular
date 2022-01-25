import { Injectable } from '@angular/core';

export interface ITodoElem {
  id: number,
  date: string,
  title: string,
  succes: Array<{
    numSucces: number,
    textSucces: string,
  }>
  fails: Array<{
    numFail: number,
    textFail: string,
  }>
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  constructor() {
   }

   elements: ITodoElem[] = [
     {
      id: 1,
      date: '25.01.2022',
      title: 'Заголовок',
      succes: [
        {
          numSucces: 1,
          textSucces: 'успех'

        },
        {
          numSucces: 2,
          textSucces: 'успех успех'
        }
      ],
      fails: [
        {
          numFail: 1,
          textFail: 'неудача',
        },
        {
          numFail: 2,
          textFail: 'неудача неудача',
        }
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vero.',
     },

     {
      id: 1,
      date: '24.01.2022',
      title: 'Заголовок',
      succes: [
        {
          numSucces: 1,
          textSucces: 'успех'

        },
        {
          numSucces: 2,
          textSucces: 'успех успех'
        }
      ],
      fails: [
        {
          numFail: 1,
          textFail: 'неудача',
        },
        {
          numFail: 2,
          textFail: 'неудача неудача',
        }
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vero. Lorem ipsum dolor sit amet consectetur.',
     },
   ]
}
