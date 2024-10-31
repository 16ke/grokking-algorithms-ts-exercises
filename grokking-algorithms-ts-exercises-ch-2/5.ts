class ListNode {
    name: string;
    next: ListNode | null = null;

    constructor(name: string) {
        this.name = name;
    }
}


class LinkedList {
    head: ListNode | null = null;

    
    addName(name: string): void {
        const newNode = new ListNode(name);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    
    searchName(name: string): { found: boolean, index: number | null } {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.name === name) {
                return { found: true, index: index };
            }
            current = current.next;
            index++;
        }
        return { found: false, index: null };
    }
}


class UserDirectory {
    slots: LinkedList[] = Array.from({ length: 26 }, () => new LinkedList());

    
    getSlotIndex(name: string): number {
        return name.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    }

    
    addUser(name: string): void {
        const index = this.getSlotIndex(name);
        this.slots[index].addName(name);
    }

   
    searchUser(name: string): { found: boolean, slot: number | null, index: number | null } {
        const slotIndex = this.getSlotIndex(name);
        const searchResult = this.slots[slotIndex].searchName(name);

        return { 
            found: searchResult.found, 
            slot: searchResult.found ? slotIndex : null, 
            index: searchResult.index 
        };
    }
}


const directory = new UserDirectory();
directory.addUser("Adit B");
directory.addUser("Alice C");
directory.addUser("Zakhir H");



console.log(directory.searchUser("Adit B"));      
console.log(directory.searchUser("Alice C"));     
console.log(directory.searchUser("Zakhir H"));     
console.log(directory.searchUser("None"));  
