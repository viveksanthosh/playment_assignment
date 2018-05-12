
class HttpCall {
    constructor() {
        this.folderTree = {}
    }
    addNewFolder(name, pathToAdd) {
        return new Promise((resolve, reject) => {
            try {
                let path = pathToAdd.split('/').filter(p => (p !== '' && p !== '.'));
                let subTree = path.length === 0 ? this.folderTree : path.reduce((result, node) => result[node], this.folderTree);
                subTree[name] = {};
                console.log("pathToAdd", pathToAdd)
                resolve({ path: pathToAdd });
            } catch (e) {
                console.warn('error, path does not exist')
                reject();
            }
        })
    }

    getFolders(pathToGet) {
        return new Promise((resolve, reject) => {
            try {
                let path = pathToGet.split('/').filter(p => (p !== '' && p !== '.'));
                let subTree = path.length === 0 ? this.folderTree : path.reduce((result, node) => result[node], this.folderTree);
                resolve({
                    path: pathToGet,
                    folders: Object.keys(subTree)
                });
            } catch (e) {
                console.warn('error, path does not exist')
                reject();
            }
        })
    }

}

let httpcall = new HttpCall();

export default httpcall;

