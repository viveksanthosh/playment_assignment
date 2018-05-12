
class HttpCall {
    constructor() {
        this.folderTree = {}
    }
    addNewFolder(name, path) {
        return new Promise((resolve, reject) => {
            try {
                path = path.split('/').filter(p => (p !== '' && p !== '.'));
                let subTree = path.length === 0 ? this.folderTree : path.reduce((result, node) => result[node], this.folderTree);
                subTree[name] = {};
                resolve();
            } catch (e) {
                console.warn('error, path does not exist')
                reject();
            }
        })
    }

    getFolders(path){
        return new Promise((resolve, reject) => {
            try {
                path = path.split('/').filter(p => (p !== '' && p !== '.'));
                let subTree = path.length === 0 ? this.folderTree : path.reduce((result, node) => result[node], this.folderTree);
                resolve(Object.keys(subTree));
            } catch (e) {
                console.warn('error, path does not exist')
                reject();
            }
        })
    }

}

let call = new HttpCall();

