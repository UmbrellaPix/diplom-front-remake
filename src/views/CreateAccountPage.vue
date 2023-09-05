<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field :counter="10" label="Логин" required hide-details variant="outlined"></v-text-field>
          <v-text-field :counter="10" label="Пароль" required hide-details variant="outlined"></v-text-field>
          <v-text-field :counter="10" label="Имя" required hide-details variant="outlined"></v-text-field>
          <v-text-field :counter="10" label="Фамилия" required hide-details variant="outlined"></v-text-field>
          <v-text-field :counter="10" label="Отчество" required hide-details variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete :counter="10" label="Отдел"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            variant="outlined"></v-autocomplete>
          <br />
          <v-file-input :counter="10" :rules="rules" accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar" prepend-icon="mdi-camera" label="Фотография" variant="outlined" required
            hide-details></v-file-input>
          <br />
          <v-switch label="Администратор" inset color="red"></v-switch>
          <br />
          <br />
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

          Создать аккаунт
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreateAccountPage',
  data: () => {
    return {
      name: "Создать аккаунт"
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

<style></style>