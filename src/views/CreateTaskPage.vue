<template>
    <v-form v-model="valid">
    <v-container>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Заголовок"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col
        >
          <v-autocomplete
            v-model="friends"
            :disabled="isUpdating"
            :items="people"
            chips
            closable-chips
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Исполнитель"
            multiple
          >
            <template v-slot:chip="{ props, item }">
              <v-chip
                v-bind="props"
                :prepend-avatar="item.raw.avatar"
                :text="item.raw.name"
              ></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="item?.raw?.avatar"
                :title="item?.raw?.name"
                :subtitle="item?.raw?.group"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col
        cols="12"
        md="4">
          <v-date-picker
          v-model="selectedDate"
          :title="textForSelectDate">
          </v-date-picker>
        </v-col>
        <v-col>
          <v-textarea
            v-model="title"
            counter
            label="Описание"
            maxlength="120"
            single-line
            >
          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';
import { VDatePicker } from 'vuetify/labs/VDatePicker'

export default defineComponent({
  name: 'CreateTaskPage',
  components:{
    VDatePicker,
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
    }
  },
  mounted() {
    this.init()
  },
})
</script>