const catalogProduct = [
    {
        id: 'id1',
        name: 'IMPASSNE МС138',
        img: './images/fire1.jpg',
        price: 150  
    },
    {
        id: 'id2',
        name: 'SKY CITY GW218-95',
        img: './images/fire2.jpg',
        price: 13  
    },
    {
        id: 'id3',
        name: 'Dark worlock GW218-90',
        img: './images/fire3.jpg',
        price: 10  
    },
    {
        id: 'id4',
        name: 'Салют GWM-5033',
        img: './images/fire4.jpg',
        price: 45
    }
]
const catalogProductOwn = [
    {
        id: 'id5',
        name: 'Злой тигр GP475',
        img: './images/fire5.jpg',
        price: 32  
    },
    {
        id: 'id6',
        name: 'Word GP-493',
        img: './images/fire6.jpg',
        price: 23  
    },
    {
        id: 'id7',
        name: 'Прикосновение рая FP-B317',
        img: './images/fire7.jpg',
        price: 75  
    },
    {
        id: 'id8',
        name: 'Триумф TKB331',
        img: './images/fire8.jpg',
        price: 50
    },
    {
        id: 'id9',
        name: 'Sexy blue MC139',
        img: './images/fire9.jpg',
        price: 70  
    },
    {
        id: 'id10',
        name: 'ВВС TKB001',
        img: './images/fire10.jpg',
        price: 1000  
    },
    {
        id: 'id11',
        name: 'Супер шоу TKB503',
        img: './images/fire11.png',
        price: 210  
    },
    {
        id: 'id12',
        name: 'Багровый закат FP-B102',
        img: './images/fire12.png',
        price: 50
    }
    
]
const catalogProductFont = [
    {
        id: 'id13',
        name: 'Фонтан MF001-100',
        img: './images/font1.png',
        price: 12  
    },
    {
        id: 'id14',
        name: 'Кракатау TKF-821',
        img: './images/font2.jpg',
        price: 40  
    } 
]
const catalogProductSmoke = [
    {
        id: 'id15',
        name: 'Цветной дым FPS035',
        img: './images/smoke1.jpg',
        price: 25  
    },
    {
        id: 'id16',
        name: 'Цветной дым FPS025',
        img: './images/smoke2.jpg',
        price: 30  
    }, 
    {
        id: 'id17',
        name: 'Флары FFS-04',
        img: './images/smoke3.jpg',
        price: 39  
    },
]
const catalogProductPiu = [
    {
        id: 'id18',
        name: 'Мега пиратка P2000',
        img: './images/piu1.jpg',
        price: 10  
    },
    {
        id: 'id19',
        name: 'Биг Джамбо FPC222',
        img: './images/piu2.jpg',
        price: 10  
    } 
]

const allProductcatalog1 = catalogProduct.concat(catalogProductOwn);
const allProductcatalog2 = allProductcatalog1.concat(catalogProductFont);
const allProductcatalog3 = allProductcatalog2.concat(catalogProductSmoke);
const allProductcatalog = allProductcatalog3.concat(catalogProductPiu);

