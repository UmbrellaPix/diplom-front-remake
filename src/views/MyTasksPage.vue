<template>
    <div>
      <h1>This is an my tasks page</h1>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyTasksPage',
  data: () => {
    return {
      name: "Мои поручения"
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