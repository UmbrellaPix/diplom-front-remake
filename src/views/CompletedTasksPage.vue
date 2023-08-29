<template>
  <div class="about">
    <h1>This is an completed tasks page</h1>
    <v-date-picker></v-date-picker>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompletedTasksPage',
  data: () => {
    return {
      name: "Завершенные задачи"
    }
  },
  methods: {
    ...mapMutations(['setPageName']),
    init() {
      this.setPageName(this.name)
    }
  },
  mounted() {
    this.init()
  },
})
</script>

