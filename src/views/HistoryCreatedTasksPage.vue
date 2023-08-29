<template>
    <div>
      <h1>This is an history i created tasks page</h1>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HistoryCreatedTasksPage',
  data: () => {
    return {
      name: "История"
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