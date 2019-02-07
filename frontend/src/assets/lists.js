const lists = {
  // type: 'container',
  props: {
    // orientation: 'horizontal'
  },
  // children: generateItems(4, i => ({
  //   id: `column${i}`,
  //   type: 'container',
  //   name: columnNames[i],
  //   props: {
  //     orientation: 'vertical',
  //     className: 'card-container'
  //   },
  //   children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
  //     type: 'draggable',
  //     id: `${i}${j}`,
  //     props: {
  //       className: 'card',
  //       style: {backgroundColor: pickColor()}
  //     },
  //     data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
  //   }))
  // })),
  children:[
    //첫 번째 리스트
    {
      id:'0',
      type: 'container',
      name: '할일',
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      footerFlag: true,
      newCardName: '',
      children:[
        //첫 번째 카드
        {
          type: 'draggable',
          id: '00',
          props: {
            className: 'card',
            style: {backgroundColor: 'black'}
          },
          data: 'testA',
        },
         //두 번째 카드
        {
          type: 'draggable',
          id: '01',
          props: {
            className: 'card',
            style: {backgroundColor: 'red'}
          },
          data: 'testB'
        }
      ]
    },
  ]
}

module.exports = lists