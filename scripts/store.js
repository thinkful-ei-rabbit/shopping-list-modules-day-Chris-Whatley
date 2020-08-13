import item from './item.js';

let items = []
let hideCheckedItems = false

function findById(id) {
    let item = items.find((item) => item.id === id)
    return item
}

function addItem(itemName) {
    try {
        item.validateName(itemName)
        let newItem = item.create(itemName)
        this.items.push(newItem)
    } catch (error) {
        console.log(`Cannot add item:${error.message}`)
    }
}

function findAndToggleChecked(id){
    let foundItem = this.findById(id)
    foundItem.checked = !foundItem.checked
}

function findAndUpdateName(id, newName){
    try{
        item.validateName(newName)
        let updatedItem= findById(id)
        updatedItem.name= newName
    } catch(error){
        console.log(`Cannot update name:${error.message}`)
    }
}

function findAndDelete(id){
    const index = items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}

function toggleCheckedFilter(){
    this.hideCheckedItems= !this.hideCheckedItems
}

export default {
    items,
    hideCheckedItems,
    findAndUpdateName,
    findById,
    addItem,
    findAndToggleChecked,
    findAndDelete,
    toggleCheckedFilter
};