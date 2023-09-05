<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field :counter="10" label="Заголовок" required hide-details variant="outlined"></v-text-field>
          <v-autocomplete 
            v-model="friends" 
            :items="people" 
            chips closable-chips 
            color="blue-grey-lighten-2"
            item-title="name" 
            item-value="name" 
            label="Исполнитель"
            multiple variant="outlined">
            <template v-slot:chip="{ props, item }">
              <v-chip v-bind="props" :prepend-avatar="item.raw.avatar" :text="item.raw.name"></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item v-bind="props" :prepend-avatar="item?.raw?.avatar" :title="item?.raw?.name"
                :subtitle="item?.raw?.group"></v-list-item>
            </template>
          </v-autocomplete>
          <v-text-field
          label="Дедлайн"
          variant="outlined"
          type="date"
          suffix="date"
        >
      </v-text-field>
      
        </v-col>
      </v-row>
    </v-container>
    <v-layout class="overflow-visible" style="
        height: 56px;
        position:fixed;
        bottom:0;
        left:0;
        width:100%;">
      <v-bottom-navigation color="primary" horizontal>
        <v-btn>
          <v-icon>mdi-history</v-icon>

          Очистить форму
        </v-btn>

        <v-btn>
          <v-icon>mdi-content-save-all</v-icon>

          Создать задачу
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'CreateTaskPage',
  components: {
  },
  data: () => {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }
    return {
      name: "Создать задачу",
      selectedDate: null,
      textForSelectDate: 'Выполнить до',
      friends: ['Sandra Adams', 'Britta Holt'],
      people: [
        { name: 'Sandra Adams', group: 'Подразделение 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Подразделение 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Подразделение 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Подразделение 1', avatar: srcs[2] },
        { name: 'Britta Holt', group: 'Подразделение 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Подразделение 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Подразделение 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Подразделение 2', avatar: srcs[3] },
      ],
    }
  },
  methods: {
    ...mapMutations(['setPageName']),
    init() {
      this.setPageName(this.name)
    },
    test(){
      console.log('click!');
    }
  },
  mounted() {
    this.init()
  },
})
</script>

<style></style>