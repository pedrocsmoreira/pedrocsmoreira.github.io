<template>
    <div id="products">
        <div class="productsItemContainer" v-for="product in products">
            <div class="productsItem">
        
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'Projects',

        data() {
            return {
                products: []
            }
        },

        mounted() {
            axios
                .get("./assets/projects.json")
                .then(response => {
                    this.projects = response.data.projects;
                });
        }
    }
</script>