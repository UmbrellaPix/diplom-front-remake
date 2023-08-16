<template>
    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="auto"
        >
            <template v-slot:activator="{ props }">
                <v-btn
                color="primary"
                v-bind="props"
                >
                Настройки
                </v-btn>
            </template>

            <v-card>
                <v-card-text>
                Настройки сайта
                </v-card-text>
                <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Сохранить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
data () {
    return {
    dialog: false,
    }
},
}
</script>