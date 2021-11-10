const setData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
const getData = JSON.parse(localStorage.getItem("user"));

const accounts = [
  {
    id: 0,
    name: "Евгений",
    surname: "Заверзин",
    token: "qwe",
    login: "123",
    password: "123",
  },
  {
    id: 1,
    name: "Александр",
    surname: "Восторов",
    token: "asd",
    login: "1234",
    password: "1234",
  },
  {
    id: 2,
    name: "Егор",
    token: "zxc",
    surname: "Иванов",
    login: "12345",
    password: "12345",
  },
];

const usersData = [
  {
    dialogs: [
      {
        id: 0,
        name: "Александр",
        surname: "Восторов",
        token: "asd",
        messages: [
          {
            id: 0,
            user: true,
            checked: false,
            message:
              "Mы дадим рекомендации по ремонту автомобиля. Вы можете сразу доверить нам",
            date: new Date("2021-10-28 9:15"),
          },
          {
            id: 1,
            checked: false,
            message: "ими произошел конфликт на бытовой почве, в ходе которого",
            date: new Date("2021-10-28 9:20"),
          },
          {
            id: 2,
            checked: false,
            message:
              "Напомним, что ранее редактор Bloomberg Марк Гурман заявил, что Apple представит Apple M1X уже",
            date: new Date("2021-10-28 9:37"),
          },
          {
            id: 3,
            user: true,
            checked: false,
            message: "Новые абоненты оператора могут подключить тариф",
            date: new Date("2021-10-28 10:33"),
          },
        ],
      },
      {
        id: 1,
        name: "Егор",
        surname: "Иванов",
        token: "zxc",
        messages: [],
      },
    ],
  },
  {
    dialogs: [
      {
        id: 0,
        name: "Евгений",
        surname: "Заверзин",
        token: "qwe",
        messages: [
          {
            id: 0,
            checked: false,
            message:
              "Mы дадим рекомендации по ремонту автомобиля. Вы можете сразу доверить нам",
            date: new Date("2021-10-28 9:15"),
          },
          {
            id: 1,
            user: true,
            checked: false,
            message: "ими произошел конфликт на бытовой почве, в ходе которого",
            date: new Date("2021-10-28 9:20"),
          },
          {
            id: 2,
            user: true,
            checked: false,
            message:
              "Напомним, что ранее редактор Bloomberg Марк Гурман заявил, что Apple представит Apple M1X уже",
            date: new Date("2021-10-28 9:37"),
          },
          {
            id: 3,
            checked: false,
            message: "Новые абоненты оператора могут подключить тариф",
            date: new Date("2021-10-28 10:33"),
          },
        ],
      },
      {
        id: 1,
        name: "Егор",
        surname: "Иванов",
        token: "zxc",
        messages: [],
      },
    ],
  },
  {
    dialogs: [
      {
        id: 0,
        name: "Александр",
        surname: "Восторов",
        token: "asd",
        messages: [],
      },
      {
        id: 1,
        name: "Евгений",
        surname: "Заверзин",
        token: "qwe",
        messages: [],
      },
    ],
  },
];

export { accounts, getData, setData, usersData };
