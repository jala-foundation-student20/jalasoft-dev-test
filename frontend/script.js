// CATS LIST

window.addEventListener('load', () => {
    const form = document.querySelector("#new-cat-form");
    const input = document.querySelector("#new-cat-input");
    const list_el = document.querySelector("#cats");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const cat = input.value;

        const cat_el = document.createElement('div');
        cat_el.classList.add('cat');

        const cat_content_el = document.createElement('div');
        cat_content_el.classList.add('content');

        cat_el.appendChild(cat_content_el);

        const cat_input_el = document.createElement('input');
        cat_input_el.classList.add('text');
        cat_input_el.type = 'text';
        cat_input_el.value = cat;
        cat_input_el.setAttribute('readonly', 'readonly');

        cat_content_el.appendChild(cat_input_el);

        const cat_actions_el = document.createElement('div');
        cat_actions_el.classList.add('actions');

        const cat_edit_el = document.createElement('button');
        cat_edit_el.classList.add('edit');
        cat_edit_el.innerText = 'Edit';

        const cat_delete_el = document.createElement('button');
        cat_delete_el.classList.add('delete');
        cat_delete_el.innerText = 'Delete';

        cat_actions_el.appendChild(cat_edit_el);
        cat_actions_el.appendChild(cat_delete_el);

        cat_el.appendChild(cat_actions_el);

        list_el.appendChild(cat_el);

        input.value = '';

        cat_edit_el.addEventListener('click', (e) => {
            if (cat_edit_el.innerText.toLowerCase() == "edit") {
                cat_edit_el.innerText = "Save";
                cat_input_el.removeAttribute("readonly");
                cat_input_el.focus();
            } else {
                cat_edit_el.innerText = "Edit";
                cat_input_el.setAttribute("readonly", "readonly");
            }
        });

        cat_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(cat_el);
        });
    });
});

// CHAT POPOUT

// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
    let line = textarea.value.split('\n').length

    if (textarea.rows < 6 || line < 6) {
        textarea.rows = line
    }

    if (textarea.rows > 1) {
        chatboxForm.style.alignItems = 'flex-end'
    } else {
        chatboxForm.style.alignItems = 'center'
    }
})



// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show')
})



// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
    if (!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
        dropdownMenu.classList.remove('show')
    }
})







// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function (e) {
    e.preventDefault()

    if (isValid(textarea.value)) {
        writeMessage()
        setTimeout(autoReply, 1000)
    }
})



function addZero(num) {
    return num < 10 ? '0' + num : num
}

function writeMessage() {
    const today = new Date()
    let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
    chatboxForm.style.alignItems = 'center'
    textarea.rows = 1
    textarea.focus()
    textarea.value = ''
    chatboxNoMessage.style.display = 'none'
    scrollBottom()
}

function autoReply() {
    const today = new Date()
    let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Can I meow you out?
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
    scrollBottom()
}

function scrollBottom() {
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
    let text = value.replace(/\n/g, '')
    text = text.replace(/\s/g, '')

    return text.length > 0
}