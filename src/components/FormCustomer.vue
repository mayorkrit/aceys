<template>
<div class="formUser">
    <div class="input-group">
        <input
        required=""
        autocomplete="off"
        v-model="email"
        type="text"
        class="input"
        >
        <label class="user-label">email</label>
    </div>
    <div class="input-group">
        <input
        required=""
        autocomplete="off"
        v-model="name"
        type="text"
        class="input"
        >
        <label class="user-label">name</label>
    </div>
    <button class="button" @click="persist()">
        sign up
    </button>
</div>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            email: ''
        }
    },
    mounted() {
        if (localStorage.name) {
            this.name = localStorage.name;
        }
        if (localStorage.email) {
            this.age = localStorage.email;
        }
    },
    methods: {
        persist() {
            localStorage.name = this.name;
            localStorage.email = this.email;
            this.name = '';
            this.email = '';
        }
        
    }
}
</script>

<style>

.formUser {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.input-group {
    margin: auto;
    position: relative;
}

.input {
    border: solid 1.5px #9e9e9e;
    margin-top: 20px;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    color: #d839d4;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

input:focus, input:valid {
    outline: none;
    border: 1.5px solid #d839d4;
}

input:focus ~ label, input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: white;
    padding: 0 .2em;
    color: #d839d4;
}

.user-label {
    font-family: 'Sequel Sans';
    position: absolute;
    left: 15px;
    margin-top: 20px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.button {
    font-family: 'Sequel Sans';
    appearance: none;
    border: 0;
    max-width: 100px;
    border-radius: 5px;
    background: #d839d4;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    margin: 20px auto;
}

.button:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
}
/* #d839d4 */
.button:hover {
    background: #46dc87;
}
</style>
