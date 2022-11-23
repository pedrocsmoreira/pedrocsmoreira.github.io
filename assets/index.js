import { createApp } from 'https://unpkg.com/petite-vue?module'

function projects(){
    return {
        items: [
            {
                "icon": "./assets/img/black-transparent-logo.png",
                "name": "project1",
                "description": "description of project one",
                "link": "./components/projects.html"
            },
            {
                "icon": "./assets/img/black-transparent-logo.png",
                "name": "project2",
                "description": "description of project two",
                "link": "./components/projects.html"
            },
            {
                "icon": "./assets/img/black-transparent-logo.png",
                "name": "project3",
                "description": "description of project three",
                "link": "./components/projects.html"
            }
        ]
    }
}

function cardBuilder(props){
    return{
        $template: '#card-component',
        icon: props.icon,
        name: props.name,
        description: props.description,
        link: props.link
    }
}

createApp({projects, cardBuilder}).mount()

<template id="card-component">
    <div class="card text-dark card-space">
        <img v-bind:src="`${item.icon}`" class="card-img-top" alt="projectIcon">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-justify">{{ item.description }}</p>
            <div class="d-flex flex-column align-items-center">
                <a v-bind:href="`${item.link}`" class="btn btn-secondary">See More...</a>
            </div>
        </div>
    </div>
</template>