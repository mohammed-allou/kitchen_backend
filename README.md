# Example fullstack application (kitchen : list of products)

## Technologies

- Node.js/express
- VueJs (Vue Router, VueX, Vuetify)
- Axios (call API)
- MySql
- Jest

## How to deploy on local

1. Create a data base whith MySql

```
 CREATE DATABASE `kitchen`;

 CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(55) NOT NULL,
  `quanttity` int(10) NOT NULL,
  `unite` varchar(55) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),

) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

INSERT INTO `products` (`name`, `quanttity`, `unite`,`img`) VALUES
('Pomme', 4, 'Piece', 'https://www.senioractu.com/photo/art/default/9122512-14519887.jpg?v=1458042015')
```

2. Start backend :

**NB:** You can configure the database address and credentiels in the file : `constants.js`

```
npm install
```
```
npm start
```

3. Start frontend.
To start the frontend, please get source code from the following repository : https://github.com/mohammed-allou/kitchen-frontend.git

**NB :** You can change the backend address in the file :  `src/constants.js`
```
export const URL_API_PRODUCT = "http://localhost:xxxx" 
```

Then, start the frontend :
```
yarn install
```
```
yarn serve
```

4. Start test.

```
npm test
```