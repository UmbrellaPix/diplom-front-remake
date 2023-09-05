<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Название
        </th>
        <th class="text-left">
          Исполнитель
        </th>
        <th class="text-left">
          Дедлайн
        </th>
        <th class="text-left">
          Выполнен
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-layout class="overflow-visible" style="
        height: 56px;
        position:fixed;
        bottom:0;
        left:0;
        width:100%;">
      <v-bottom-navigation color="primary" horizontal>
        <v-btn>
          <v-icon>mdi-history</v-icon>

          Обновить таблицу
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
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

