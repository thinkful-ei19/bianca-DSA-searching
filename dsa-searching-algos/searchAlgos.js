'use strict';

class BinarySearchTree {
    constructor(key=null, value=null, parent=null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value){
        if(this.key == null){
            this.key = key;
            this.value = value;
        }
        else if(key < this.key){
            if(this.left == null){
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if(this.right == null){
                this.right = new BinarySearchTree(key, value, this);
            }
            else{
                this.right.insert(key, value);
            }
        }
    }
    find(key) {
        if(this.key == key){
            return this.value;
        }
        else if (key < this.key && this.left){
            return this.left.find(key);
        }
        else if(key> this.key && this.right){
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node){
        if(this.parent){
            if(this == this.parent.left){
                this.parent.left = node;
            }
            else if(this == this.parent.right){
                this.parent.right = node;
            }
            if(node){
                node.parent = this.parent;
            }
        }
        else {
            if(node){
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else{
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin(){
        if(!this.left){
            return this;
        }
        return this.left._findMin();
    }
    _findMax(){
        if(!this.right){
            return this;
        }
        return this.right._findMax();
    }
    remove(key) {
        if(this.key == key){
            if(this.left && this.right){
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if(this.left){
                this._replaceWith(this.left);
            }
            else if(this.right){
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if(key < this.key && this.left){
            this.left.remove(key);
        }
        else if(key > this.key && this.right){
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

}
function preOrder(BST){
    console.log(BST.key);
    if(BST.left){
        preOrder(BST.left);
        
    }
    if(BST.right){
        preOrder(BST.right);
    }
}
function inOrder(BST){
    if(BST.left){
       inOrder(BST.left);
    }
    console.log(BST.key);
    if(BST.right){
       inOrder(BST.right);
    }
}
function postOrder(BST){
    if(BST.left){
        postOrder(BST.left);
    }
    if(BST.right){
        postOrder(BST.right);
    }
    console.log(BST.key);
}
let arr = [128, 97, 121, 123, 98, 97, 105];
function maxProfit(arr){
    let index = 0;
    let minVal = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]< minVal){
           minVal = arr[i];
            index = i;
        }
    }
    let maxVal = arr[index];
    for(let j = index; j<arr.length; j++){
        if(maxVal < arr[j]){
            maxVal = arr[j];
        }
    }
    return maxVal - minVal;
}
console.log(maxProfit(arr));
function main(){
    let BST = new BinarySearchTree();
    BST.insert('25');
    BST.insert('15');
    BST.insert('50');
    BST.insert('10');
    BST.insert('24');
    BST.insert('35');
    BST.insert('70');
    BST.insert('04');
    BST.insert('12');
    BST.insert('18');
    BST.insert('31');
    BST.insert('44');
    BST.insert('66');
    BST.insert('90');
    BST.insert('22');
    //console.log(BST);
    //preOrder(BST);
    //inOrder(BST);
    //postOrder(BST);

}
main();

