class ListNode {
    name: string;
    value: number;
    next: ListNode | null = null;

    constructor(name: string, value: number) {
        this.value = value;
        this.name = name;
    }
}


class LinkedList{
    head: ListNode | null = null;


    addExpense(name: string, amount: number): void {
        const newNode = new ListNode(name, amount);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode
        }
    }


    calculateTotalExpenses(): number {
        let total = 0;
        let current = this.head;
        while (current) {
            total += current.value;
            current = current.next;
        }
        return total
    }
}


const expenses = new LinkedList();
expenses.addExpense("groceries",60); 
expenses.addExpense("movie",20); 
expenses.addExpense("sfbcMemebrship",5);  

console.log(expenses.calculateTotalExpenses());
