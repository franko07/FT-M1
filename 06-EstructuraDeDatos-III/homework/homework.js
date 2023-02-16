'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}



BinarySearchTree.prototype.insert = function (value){
   if (value < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(value);
      } else {
         this.left.insert(value);
      }
   } 
   if (value > this.value){
      if (this.right === null){
         this.right = new BinarySearchTree(value);
      } else {
         this.right.insert(value);
      }
   } return this;
}

BinarySearchTree.prototype.size = function() {
   if (this.left === null && this.right === null){
         return 1
   } if (this.left && !this.right) {
      return 1 + this.left.size();
    } if (!this.left && this.right) {
      return 1 + this.right.size();
    }  if (this.left && this.right) {
      return 1 + this.left.size() + this.right.size();
    } if (this.left && this.right) {
      return 1 + this.left.size() + this.right.size();
    }     
   } 
 

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true;

  if (value > this.value){
   if (!this.right){
      return false;
   } else {
      return this.right.contains(value)
   }
  } else {
   if (!this.left){
      return false;
   } else {
      return this.left.contains(value);
   }

  }
} 

BinarySearchTree.prototype.depthFirstForEach = function(cd, order){
   if (!order ||order === 'in-order'){
      this.left && this.left.depthFirstForEach(cd, order);
      cd (this.value);
      this.right && this.right.depthFirstForEach(cd, order);
   } else if (order == 'pre-order'){
      cd(this.value);
      this.left && this.left.depthFirstForEach(cd, order);
      this.right && this.right.depthFirstForEach(cd,order);
   } else {
      this.left && this.left.depthFirstForEach(cd,order);
      this.right && this.right.depthFirstForEach(cd,order);
      cd (this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cd, array=[]){
   cd(this.value);
   if (this.left) array.push(this.left);
   if (this.right) array.push(this.right);

   array.length && array.shift().breadthFirstForEach(cd, array);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
