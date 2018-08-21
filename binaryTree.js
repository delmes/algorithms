var trees = [8,3,10,1,6,14,4,7,13];
// 前序遍历生成树，树节点中元素按照大小排序
var generTree = function(treeArr) {
    var TreeNode = function(rootValue) {
        this.root = rootValue;
        this.left = null;
        this.right = null;
    };
    var treeRoot = null;
    var insertNode = function(node, newNode) {
        if (newNode.root < node.root) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
              insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
              insertNode(node.right, newNode);
            }
        }
    };
    var initInsert = function(rootValue) {
        var newNode = new TreeNode(rootValue);
        if (!treeRoot) {
            treeRoot = newNode;
        }
        else {
            insertNode(treeRoot, newNode);
        }
    };
    treeArr.forEach(function(val) {
        initInsert(val);
    });
    return treeRoot;
};
console.log(generTree(trees));
