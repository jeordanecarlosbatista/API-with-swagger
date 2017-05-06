'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/books' path has an operationId named 'books'.  Here,
  we specify that in the exports of this module that 'books' maps to the function named 'books'
 */
module.exports = {
  getByTitle: getByTitle,
  getByKeyword: getByKeyword,
  getDataByISBN: getDataByISBN,
  getReviewsByISBN: getReviewsByISBN,
  addBook: addBook
};

/*
  Functions in a127 controllers used for operations should take two parameters:
  Descrição: consulta de livros por título

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getByTitle(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var title = req.swagger.params.name.originalValue || 'stranger';
  var response = `O livro é ${title}`;
  // this sends back a JSON response which is a single string
  res.json(response);
}
/*
  Functions in a127 controllers used for operations should take two parameters:
  Descrição: consulta de livros palavra chave

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getByKeyword(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var codISBN = req.swagger.params.name.value || 'stranger';
  var response = `Livro com a palavra chave ${codISBN}`;
  // this sends back a JSON response which is a single string
  res.json(response);
}
/*
  Functions in a127 controllers used for operations should take two parameters:
  Descrição: consulta dos dados de livro por ISBN

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getDataByISBN(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var codISBN = req.swagger.params.isbn.originalValue || 'stranger';
  var response = `Dados do livro do código ISBN ${codISBN}`;
  // this sends back a JSON response which is a single string
  res.json(response);
}
/*
  Functions in a127 controllers used for operations should take two parameters:
  Descrição: consulta de críticas de um livro por ISBN

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getReviewsByISBN(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var codISBN = req.swagger.params.isbn.originalValue || 'stranger';
  var response = `Críticas do livro do código ISBN ${codISBN}`;
  // this sends back a JSON response which is a single string
  res.json(response);
}
/*
  Functions in a127 controllers used for operations should take two parameters:
  Descrição: consulta de críticas de um livro por ISBN

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function addBook(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // var keyword = req.swagger.params.name.value || 'stranger';
  // var response = `Reviews book ${keyword} are: `;
  // this sends back a JSON response which is a single string
  res.json("JEORNDAE");
}

