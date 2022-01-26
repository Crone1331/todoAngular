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
      title: 'Первый день',
      succes: [
        {
          numSucces: 1,
          textSucces: 'посмотрел урок'

        },
        {
          numSucces: 2,
          textSucces: 'выспался'
        },
        {
          numSucces: 3,
          textSucces: 'сходил в качалку'
        }
      ],
      fails: [
        {
          numFail: 1,
          textFail: 'опоздал на автобус',
        },
        {
          numFail: 2,
          textFail: 'потерял 100 рублей',
        }
      ],
      description: 'Так себе день, ленился.',
     },

     {
      id: 1,
      date: '26.01.2022',
      title: 'Второй день. Делаем что-то другое',
      succes: [
        {
          numSucces: 1,
          textSucces: 'сделал кнопку'

        },
        {
          numSucces: 2,
          textSucces: 'добавил слайдер'
        }
      ],
      fails: [
        {
          numFail: 1,
          textFail: 'не смог добавить картинку',
        },
      ],
      description: 'В целом неплохо, можно было лучше. Бла-бла-бла-бла-бла.',
     },
   ]
}
