function Node(key, value) {
    this.key = key;
    this.value = value;

    this.left = null;
    this.right = null;
}

function BinarySearchTree() {

    this._root = new Node();

    this.root = function () {
        return this._root.value;
    };

    this.insert = function(key, value){

        let currentNode = this._root,
            newNode = new Node(key, value);

        if (currentNode.key === undefined) {
            this._root = new Node(key, value);
            return this;
        }

        while (currentNode){
            if (currentNode.key > key){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    break;
                }else {
                    currentNode = currentNode.left;
                }
            } else if (currentNode.key < key){
                if (!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }else {
                    currentNode = currentNode.right;
                }
            }else{
                break;
            }
        }

        return this;
    };

    this.search = function (key) {
        let currentNode = this._root;

        while (currentNode){
            if (currentNode.key === key){
                return currentNode.value;
            }else if(currentNode.key > key){
                currentNode = currentNode.left;
            }else if(currentNode.key < key){
                currentNode = currentNode.right;
            }else {
                break;
            }
        }
    };

    this.contains = function (value) {
        let currentNode = this._root,
            length = currentNode.key;

        while (currentNode.right){
            currentNode = currentNode.right;
            length = currentNode.key;
        }

        for(let i = 1; i <= length; i++){
            if (this.search(i) === value)
                return true;
        }

        return false;
    };

    this.traverse = function (order) {

        let currentNode = this._root,
            length = currentNode.key,
            array = [];

        while (currentNode.right){
            currentNode = currentNode.right;
            length = currentNode.key;
        }

        for (let i = length; i >= 1; i--){
            let value = this.search(i);

            if (value)
                array.push(value);
        }

        if (order){
            array = array.reverse()
        }

        return array;
    };

    this.verify = function () {

        function isBST(node){
            if(!node){
                return true;
            }

            if(node.left !== null && node.left.key > node.key){
                return false;
            }

            if(node.right !== null && node.right.key < node.key) {
                return false;
            }

            return !(!isBST(node.left) || !isBST(node.right));

        }

        return isBST(this._root)
    };


}

module.exports = {
  BinarySearchTree,

  //WARNING!!!
  //PROVIDE BST STRUCTURE FOR TESTS {STRING}
  root: '_root',
  left: 'left',
  right: 'right',
  //NAME FOR REPORTS
  student: 'DENIS SIDORENKO'
};
