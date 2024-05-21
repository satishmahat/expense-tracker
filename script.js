let count = 0;
let totalexpense = 0;
document.getElementById("lasttotal").innerHTML = `No Expenses`;


const addexp = () => {
    let name = document.getElementById("input1").value;
    let date = document.getElementById("input2").value;
    let amount = Number(document.getElementById("input3").value);

    totalexpense += amount;

    count++;

    let template = `
        <tr>
            <td>${count}</td>
            <td>${name}</td>
            <td>${date}</td>
            <td>${amount}</td>
            <td><button onclick="deleteRow(this)" id="del">X</button></td>
        </tr>`
        ;

    document.getElementById("inputs").innerHTML += template;

    
    document.getElementById("lasttotal").innerHTML = `Total : ${totalexpense}`;
    
};

const deleteRow = (button) => {
    
    let row = button.parentNode.parentNode;

    let amount = Number(row.cells[3].textContent);

    totalexpense -= amount;

    row.parentNode.removeChild(row);

    let rows = document.getElementById("inputs").getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[0].textContent = i;
    }
    count--;

    if (count === 0) {
        document.getElementById("lasttotal").innerHTML = `No Expenses`;
    } else {
        document.getElementById("lasttotal").innerHTML = `Total : ${totalexpense}`;
    }
};