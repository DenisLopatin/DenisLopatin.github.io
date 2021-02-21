const USERS = [
    {
        position: 3,
        name: 'Denis',
        surname: 'Lopatin',
        age: 29,
        country: 'Russia',
        id: 1,
    },
    {
        position: 1,
        name: 'Anna',
        surname: 'Ann',
        age: 20,
        country: 'Russia',
        id: 3,
    },
    {
        position: 2,
        name: 'Alex',
        surname: 'Doo',
        age: 25,
        country: 'USA',
        id: 2,
    },
    {
        position: 5,
        name: 'Wael',
        surname: 'Shraen',
        age: 27,
        country: 'Germany',
        id: 5,
    },
    {
        position: 4,
        name: 'John',
        surname: 'Smit',
        age: 37,
        country: 'USA',
        id: 4,
    },
    {
        position: 10,
        name: 'Svetlana',
        surname: 'Suhareva',
        age: 22,
        country: 'Russia',
        id: 7,
    },
    {
        position: 8,
        name: 'Ivan',
        surname: 'Ivanov',
        age: 18,
        country: 'Russia',
        id: 9,
    },
    {
        position: 6,
        name: 'Jacques',
        surname: 'jacI',
        age: 48,
        country: 'France',
        id: 8,
    },
    {
        position: 9,
        name: 'Mark',
        surname: 'Ton',
        age: 15,
        country: 'USA',
        id: 10,
    },
    {
        position: 7,
        name: 'Kate',
        surname: 'Sany',
        age: 16,
        country: 'USA',
        id: 6,
    },
    {
        position: 11,
        name: 'Jane',
        surname: 'Roun',
        age: 38,
        country: 'England',
        id: 12,
    },
    {
        position: 13,
        name: 'Mark',
        surname: 'Tonson',
        age: 15,
        country: 'Poland',
        id: 11,
    },
    {
        position: 12,
        name: 'Steven',
        surname: 'Son',
        age: 16,
        country: 'England',
        id: 13,
    }
];

class TableComponent {
    static table = document.createElement('table');
    static tbody = null;
    static rows = TableComponent.table.rows;
    static container = document.querySelector('.container');
    static menu = document.querySelector(".menu");
    static inputLine = document.querySelector('[data-change="line"]');
    static inputOldValue = document.querySelector('[data-change="old-value"]');
    static inputNewValue = document.querySelector('[data-change="new-value"]');
    static buttonForGetTable = document.querySelector('[data-get="table"]');
    static buttonForFillTable = document.querySelector('[data-fill="table"]');
    static buttonForMenu = document.querySelector('[data-show="menu"]');

    static createTable() {
        TableComponent.table.insertAdjacentHTML('afterbegin', 
        `
        <thead>
            <tr>
                <th data-sort="0" onclick="TableComponent.sort.call(this)"># <span class="sort"></span> </th>
                <th data-sort="1" onclick="TableComponent.sort.call(this)">Name <span class="sort"></span> </th>
                <th data-sort="2" onclick="TableComponent.sort.call(this)">Surname <span class="sort"></span> </th>
                <th data-sort="3" onclick="TableComponent.sort.call(this)">Age <span class="sort"></span> </th>
                <th data-sort="4" onclick="TableComponent.sort.call(this)">Country <span class="sort"></span> </th>
                <th data-sort="5" onclick="TableComponent.sort.call(this)">ID <span class="sort"></span> </th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        `
        );
        TableComponent.container.append(TableComponent.table);
        TableComponent.container.insertAdjacentHTML('beforeend',
            `
            <button class="button" data-navigation="prev">Предыдущие</button>
            <button class="button" data-navigation="next">Следующие</button>
            `
        );
        TableComponent.buttonForFillTable.disabled = false;
        TableComponent.table.classList.add('table');
        TableComponent.tbody = TableComponent.table.tBodies[0];
        TableComponent.btnPrev = document.querySelector('[data-navigation="prev"]');
        TableComponent.btnNext = document.querySelector('[data-navigation="next"]');
        TableComponent.btnPrev.addEventListener('click', TableComponent.hiddenRows.bind(this, 4, 'prev'));
        TableComponent.btnNext.addEventListener('click', TableComponent.hiddenRows.bind(this, 4, 'next'));
    }

    static fillInTable() {
        USERS.reduce((acc, user) => {
            acc.insertAdjacentHTML('beforeend', 
            `
            <tr>
                <td> ${user.position} </td>
                <td> ${user.name} </td>
                <td> ${user.surname} </td>
                <td> ${user.age} </td>
                <td> ${user.country} </td>
                <td> ${user.id} </td>
            </tr>
            `
        );
        return acc;
        }, TableComponent.tbody);
        TableComponent.buttonForMenu.disabled = false;
        TableComponent.hiddenRows();
    }

    static hiddenRows(step = 4, shift) {
        const rows = [...TableComponent.rows];
        rows.shift();
        if (shift === 'next') {
            const splice = rows.splice(0, step + 1);
            splice.map((row) => row.hidden = true);
            rows.map((row, index) => index > step ? row.hidden = true : row.hidden = false);
            rows.push(...splice);
            TableComponent.tbody.innerHTML = '';
            TableComponent.tbody.append(...rows);
        } else if (shift === 'prev') {
            const splice = rows.splice(rows.length - 5, step + 1);
            splice.map((row) => row.hidden = false);
            rows.map((row) => row.hidden = true);
            rows.unshift(...splice);
            TableComponent.tbody.innerHTML = '';
            TableComponent.tbody.append(...rows);
        } else {
            rows.map((row, index) => index > step ? row.hidden = true : row.hidden = false);
        }
    }

    static sort() {
        const th = this;
        const span = th.querySelector('.sort');
        const sortByColumn = th.getAttribute('data-sort');
        const rows = [...TableComponent.rows];
        rows.shift();
        if (span.classList.contains('sort-top')) {
            TableComponent.sortInDescendingOrder(rows, sortByColumn, span);
        } else {
            TableComponent.sortInAscendingOrder(rows, sortByColumn, span);
        }

        TableComponent.tbody.innerHTML = '';
        TableComponent.tbody.append(...rows);
        TableComponent.table.querySelectorAll('.sort')
            .forEach((element) => element.parentElement !== th ? element.className = 'sort' : '');
        TableComponent.hiddenRows();
    }

    static sortInDescendingOrder(rows, sortByColumn, span) {
        rows.sort((a, b) => {
            const prev = Number(a.children[sortByColumn].textContent) 
                || a.children[sortByColumn].textContent;
            const next = Number(b.children[sortByColumn].textContent) 
                || b.children[sortByColumn].textContent;
            if (prev > next) return -1;
            if (prev < next) return 1;
            else return 0;
        });
        span.classList.remove('sort-top');
        span.classList.add('sort-bottom');
    }

    static sortInAscendingOrder(rows, sortByColumn, span) {
        rows.sort((a, b) => {
            const prev = Number(a.children[sortByColumn].textContent) 
                || a.children[sortByColumn].textContent;
            const next = Number(b.children[sortByColumn].textContent) 
                || b.children[sortByColumn].textContent;
            if (prev > next) return 1;
            if (prev < next) return -1;
            else return 0;
        });
        span.classList.remove('sort-bottom');
        span.classList.add('sort-top');
    }

    static showMenu() {
        TableComponent.menu.classList.toggle('is-menu-open');
    }

    static validate(event) {
        const target = event.target;
        const value = target.value;
        const type = target.getAttribute('data-change');
        if (type === 'line') TableComponent.inputLineValidation(target, value);
        if (type === 'old-value') TableComponent.inputOldLineValidation(target, value);
        if (type === 'new-value') TableComponent.inputNewLineValidation(target, value);
    }

    static inputLineValidation(target, value) {
        const rows = [...TableComponent.rows];
        rows.shift();
        const length = rows.length;
        if (!value || +value === 0 || length < value) {
            target.classList.add('input-error');
            target.value = '';
            target.placeholder = `Не может быть пустым полем, 0, или превышать длину строк: ${length}`;
        } else {
            target.className = 'input-success';
            TableComponent.change();
        } 
    }

    static inputOldLineValidation(target, value) {
        TableComponent.inputNewValue.value = '';
        TableComponent.inputNewValue.placeholder = 'Напрмер: Alex для поля Name или 4 для ID';
        TableComponent.inputNewValue.className = '';
        value = value.toLowerCase();
        if (value !== 'name' && value !== 'surname' && value !== 'age'
            && value !== 'country' && value !== 'id') {
                target.classList.add('input-error');
                target.value = '';
                target.placeholder = `Значениями могут быть только: name, surname, age, country или id`;
            } else {
                target.className = 'input-success';
                TableComponent.change();
                TableComponent.inputNewValue.disabled = false;
            }
    }

    static inputNewLineValidation(target, value) {
        const changeFor = TableComponent.inputOldValue.value.toLowerCase();
        const allID = TableComponent.getAllID();
        value = value.toLowerCase();
        if (changeFor === 'id') {
            TableComponent.isInputNewLineId(value, target, allID);
        } else if (changeFor === 'age') {
            TableComponent.isInputNewLineAge(value, target);
        } else {
            TableComponent.isInputNewLineOtherValue(value, target);
        }
    }

    static isInputNewLineId(value, target, allID) {
        const length = value.trim().length;
        const notIsNan = !isNaN(Number(value));
        const unikId = !allID.includes(Number(value));
        if (notIsNan && unikId && length > 1) {
            target.className = 'input-success';
            TableComponent.change();
        } else {
            target.classList.add('input-error');
            target.value = '';
            target.placeholder = `Значение ${value} для поля ID должно быть уникальным числом. Минимальная длина - 1 символ`;
        }
    }

    static isInputNewLineAge(value, target) {
        const length = value.trim().length;
        const notIsNan = !isNaN(Number(value));
        if (notIsNan && length >= 1 && length < 4) {
            target.className = 'input-success';
            TableComponent.change();
        } else {
            target.classList.add('input-error');
            target.value = '';
            target.placeholder = `Значение ${value} для поля Age должно быть числом. От одного до четырех символов.`;
        }
    }

    static isInputNewLineOtherValue(value, target) {
        const match = value.match(/[a-zа-я]+/g)?.join();
        if (match !== value || value.length < 2) {
            target.classList.add('input-error');
            target.value = '';
            target.placeholder = `Значение ${value} должно содержать только буквы латиницы или кирилицы`;
        } else {
            target.className = 'input-success';
            TableComponent.change();
        }
    }

    static change() {
        const isSuccess = [TableComponent.inputLine, TableComponent.inputOldValue, TableComponent.inputNewValue]
            .every((input) => input.classList.contains('input-success'));
        if (isSuccess) {
            const lineValue = TableComponent.inputLine.value;
            const oldValue = TableComponent.inputOldValue.value;
            const newValue = TableComponent.inputNewValue.value;
            const rows = [...TableComponent.rows];
            rows.shift();
            rows.filter((row) => row.cells[0].textContent.trim() === lineValue)
                .map((row) => {
                    if (oldValue === 'name') {
                        row.cells[1].textContent = newValue;
                        const th = TableComponent.rows[0].cells[1];
                        TableComponent.sort.call(th);
                    }
                    if (oldValue === 'surname') {
                        row.cells[2].textContent = newValue;
                        const th = TableComponent.rows[0].cells[2];
                        TableComponent.sort.call(th);
                    }
                    if (oldValue === 'age') {
                        row.cells[3].textContent = newValue;
                        const th = TableComponent.rows[0].cells[3];
                        TableComponent.sort.call(th);
                    }
                    if (oldValue === 'country') {
                        row.cells[4].textContent = newValue;
                        const th = TableComponent.rows[0].cells[4];
                        TableComponent.sort.call(th);
                    }
                    if (oldValue === 'id') {
                        row.cells[5].textContent = newValue;
                        const th = TableComponent.rows[0].cells[5];
                        TableComponent.sort.call(th);
                    } 
                });
        }
    }

    static getAllID() {
        const rows = [...TableComponent.rows];
        rows.shift();
        return rows.map((row) => Number(row.children[5].textContent));
    }
}

TableComponent.buttonForGetTable.addEventListener('click', TableComponent.createTable, {once: true});
TableComponent.buttonForFillTable.addEventListener('click', TableComponent.fillInTable, {once: true});
TableComponent.buttonForMenu.addEventListener('click', TableComponent.showMenu);
TableComponent.menu.addEventListener('focusout', TableComponent.validate);