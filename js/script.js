// Helper function to return dom elements
const $ = (id) => document.getElementById(id)

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let table = $('employees')
let empCounter = $('empCount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let empName = $('name').value
    let extension = $('extension').value
    let email = $('email').value
    let department = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell = row.insertCell()
    let nameCell = row.insertCell()
    let extCell = row.insertCell()
    let emailCell = row.insertCell()
    let deptCell = row.insertCell()
    let delCell = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idText = document.createTextNode(id)
    let empNameText = document.createTextNode(empName)
    let extText = document.createTextNode(extension)
    let emailText = document.createTextNode(email)
    let deptText = document.createTextNode(department)

    idCell.appendChild(idText)
    nameCell.appendChild(empNameText)
    extCell.appendChild(extText)
    emailCell.appendChild(emailText)
    deptCell.appendChild(deptText)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    let deleteText = document.createTextNode('X')
    delCell.appendChild(deleteBtn)
    deleteBtn.appendChild(deleteText)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++
    empCounter.value = empCount

})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        table.deleteRow(e.target.parentElement.parentElement.rowIndex)
        empCount--
        empCounter.value = empCount
    }
})