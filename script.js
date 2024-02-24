class Node {
    constructor(key, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class HashMap {
    constructor() {
        this.HashMap = new Array(16).fill(null);
        this.capacity = this.HashMap.length;
        this.loadFactor = 0.75;
    }
    
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }
    
    set(key, value) {
        let newNode = new Node(key, value);
        let position = this.hash(key) % this.HashMap.length;

        if (position < 0 || position >= this.HashMap.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (this.HashMap[position] === null) {
            this.HashMap[position] = newNode;
        } else if (this.HashMap[position].key === key) {
            this.HashMap[position].value = value;
        } else {
            let current = this.HashMap[position];

            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            current = newNode;
        }
    }

    get(key) {
        let position = this.hash(key) % this.HashMap.length;
        let value = '';

        if (position < 0 || position >= this.HashMap.length) {
            throw new Error("Trying to access index out of bound");
        } else if (this.HashMap[position] === null) return null;

        if (this.HashMap[position].key === key) {
            return this.HashMap[position].value;
        } else {
            let current = this.HashMap[position].nextNode;

            while (current !== null) {
                if (current.key === key) return current.value
                current = current.nextNode;
            }
        }
    
    }
    
    has(key) {
        let position = this.hash(key) % this.HashMap.length;

        if (position < 0 || position >= this.HashMap.length) {
            throw new Error("Trying to access index out of bound");
        } else if (this.HashMap[position] === null) return false;

        if (this.HashMap[position].key === key) {
            return true;
        } else {
            let current = this.HashMap[position].nextNode;

            while (current !== null) {
                if (current.key === key) return true;
                current = current.nextNode;
            }
        }

    }

    remove(key) {
        let position = this.hash(key) & this.HashMap.length;

        if (position < 0 || position >= this.HashMap.length) {
            throw new Error("Trying to access index out of bound");
        } else if (this.HashMap[position] === null) return 'Key non existent';

        if (this.HashMap[position].key === key) {
            if (this.HashMap[position].nextNode !== null) {
                this.HashMap[position] === this.HashMap[position].nextNode;
                
                return true;
            }
            this.HashMap[position] === null;
            
            return true;
        } else {
            let current =  this.HashMap[position].nextNode;

            while (current !== null) {
                if (current.key === key) {
                    current === null;
                    
                    return true;
                }

                current = current.nextNode;
            }
        }

        return false;
    }

    clear() {
        for (let i = 0; i < this.HashMap.length; i++) {
            this.HashMap[i] = null;
        }
    }

    keys() {
        const keys = [];

        for (let i = 0; i < this.HashMap.length; i++)  {
            if (this.HashMap[i] === null) continue;
            let current = this.HashMap[i];

            keys.push(current.key);

            while (current.nextNode !== null) {
                keys.push(current.key);
                current = current.nextNode;
            }
        }

        return keys;
    }

    values() {
        const values = [];

        for (let i = 0; i < this.HashMap.length; i++)  {
            if (this.HashMap[i] === null) continue;
            let current = this.HashMap[i];

            values.push(current.value);

            while (current.nextNode !== null) {
                values.push(current.value);
                current = current.nextNode;
            }
        }

        return values;
    }

    entries() {
        const entries = [];

        for (let i = 0; i < this.HashMap.length; i++)  {
            if (this.HashMap[i] === null) continue;
            let current = this.HashMap[i];

            entries.push([current.key, current.value]);

            while (current.nextNode !== null) {
                entries.push([current.key, current.value]);
                current = current.nextNode;
            }
        }

        return entries;
    }
}



