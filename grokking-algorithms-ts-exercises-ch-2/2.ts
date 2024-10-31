class OrderNode {
    order: string;
    next: OrderNode | null = null;

    constructor(order: string) {
        this.order = order;
    }
}

class OrderQueue {
    front: OrderNode | null = null;
    back: OrderNode | null = null;


    enqueue(order: string): void {
        const newNode = new OrderNode(order);
        if (!this.back) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }


    dequeue(): string | null {
        if (!this.front) { 
            return null;
        }
        const orderToCook = this.front.order;
        this.front = this.front.next;
        if (!this.front) {
            this.back = null;
        }
        return orderToCook;
    }
}

const orders = new OrderQueue();
orders.enqueue("Ravioli");
orders.enqueue("Lasagna");
orders.enqueue("Caprese");
orders.enqueue("Scorfano");
orders.enqueue("Ossobuco");

console.log(orders.dequeue());
console.log(orders.dequeue());
console.log(orders.dequeue());
console.log(orders.dequeue());
console.log(orders.dequeue());
