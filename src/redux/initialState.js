const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  feedbacks: [
    {
      id: 'quote-1',
      clientName: 'John Smith',
      clientText:
        'Vestibulum eu ante non enim malesuada vestibulum quis ac nisl. Nullam eget lacus iaculis, blandit augue in, pulvinar ipsum. Curabitur quis ligula tempus, tristique sapien pulvinar, dictum enim. Etiam tempor mollis tellus, id interdum ipsum condimentum id.',
      clientImage:
        'https://i.pinimg.com/originals/75/8b/70/758b70c854cfc2bd1c3a0fbc903fb7bb.png',
    },
    {
      id: 'quote-2',
      clientName: 'Mary Shelley',
      clientText:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis tellus est. Sed sapien mi. Mauris diam quam, consequat vitae neque in, pretium efficitur mauris. Donec vulputate consectetur ipsum non dictum. Aenean enim dui.',
      clientImage:
        'https://i.pinimg.com/originals/75/8b/70/758b70c854cfc2bd1c3a0fbc903fb7bb.png',
    },
    {
      id: 'quote-3',
      clientName: 'Jane Doe',
      clientText:
        'Etiam accumsan dui a lacus pulvinar gravida. Duis eu congue urna. Pellentesque facilisis justo vitae enim viverra dictum. Proin non lacus. Phasellus in blandit leo, a maximus magna. Phasellus cursus eros sit amet lacus fermentum ultrices. Etiam eget sapien at erat.',
      clientImage:
        'https://i.pinimg.com/originals/75/8b/70/758b70c854cfc2bd1c3a0fbc903fb7bb.png',
    },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 4,
      isStarred: true,
      oldPrice: 35,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6538933/pexels-photo-6538933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6782476/pexels-photo-6782476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/7088273/pexels-photo-7088273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: 18,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/6947272/pexels-photo-6947272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: 60,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6969834/pexels-photo-6969834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
