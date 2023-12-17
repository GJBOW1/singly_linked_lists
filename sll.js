// Add a method contains(value) to your SLL class, which is given a value as a parameter.Return a boolean(true / false); true, if the list possesses a node that contains the provided value.

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor(head = null, tail = null) {
        this.head = head
        this.tail = tail
    }
    push(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return;
        }
        else {
            let pointer = this.head
            while (pointer.next != null) {
                pointer = pointer.next
            }
            pointer.next = new Node(value);
            return;
        }
    }
    pop(){
        if(this.head == null){
            this.head = new Node(value)
            return;
        }
        else {
            let pointer = this.head
            while(pointer.next.next = null){
                pointer = pointer.next
            }
            pointer.next = null;
            return;
        }
    } 
    push_to_front(value){ 
        if(this.head == null){
            this.head = new Node(value)
        return
        }
    }
    pop_from_front(){
        if(this.head == null){
            return;
        }
        else if (this.head.next == null){
            this.head = null
            return;
        }
        else{
            this.head = this.head.next
        }
    }
    log(){
        return
    }
    contains(value){
        let pointer = this.head
        for (var i = pointer; pointer.next != null; pointer.next){
        // while(pointer.next != null){
            if(pointer.data == value){
                return true 
            }
            else{
            return false
            }
        }
    }
    length(){
        let pointer = this.head
        let node_sum = 0
        while(pointer.next != null){
            node_sum++;
            pointer = pointer.next;
        }
        return node_sum;
    }
    display(){
        let pointer = this.head
        let values = []
        while(pointer.next != null){
            values.push(pointer.data)
            pointer = pointer.next;
        }
        return values
    }
}


var new_list = new SLL()
console.log(new_list)
new_list.push(7)
console.log(new_list)
new_list.push(7)
console.log(new_list)
new_list.push(9)
console.log(new_list)
new_list.push(9)
console.log(new_list)
contains_value = new_list.contains(9)
console.log("The SLL contains this value: ", contains_value)
length = new_list.length()
console.log("Number of nodes =", length)
display = new_list.display()
console.log("Here are the values in the SLL: ", display)
