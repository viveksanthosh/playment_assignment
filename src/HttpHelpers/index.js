
 class HttpCall {
    constructor() {
        this.folderTree = {}
    }
    addNewFolder(name, path) {
        path = path.split('/').filter(p => (p !== '' && p !== '.'));
        console.log("path ", path)
        let subTree = path.length === 0 ? this.folderTree: path.reduce((result, node)=> result[node], this.folderTree);
        console.log("subTree ", subTree)
        subTree[name] = {}
    }

    
}

let call = new HttpCall();

