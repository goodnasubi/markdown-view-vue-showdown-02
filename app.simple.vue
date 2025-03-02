<template>
  <v-app>
    <v-container>
      <v-sheet v-for="message in messages" :key="message.id" class="my-16 d-flex" :style="{
        position: 'relative',
      }">
        <v-avatar :color="message.role === 'user' ? 'primary' : 'secondary'" class="mr-2">
          <v-icon>{{ message.role === 'user' ? 'mdi-account' : 'mdi-robot' }}</v-icon>
        </v-avatar>
        <v-card :class="message.role === 'user' ? 'user-message' : 'ai-message'" class="pa-4 mb-4" :color="message.role === 'user' ? 'primary' : 'secondary'" :style="{
          borderRadius: '10px',
        }">
          {{ message.role === 'user' ? '私: ' : 'AI: ' }}
          {{ message.content }}
        </v-card>
      </v-sheet>
      <v-form @submit="handleSubmit" :style="{ position: 'fixed', bottom: '20px', width: '80%' }">
        <v-text-field v-model="text" hide-details variant="solo" label="メッセージを送信">
          <template #append-inner>
            <v-icon :color="input ? 'primary' : ''" @click="handleSubmit" :disabled="!input">mdi-send</v-icon>
          </template>
        </v-text-field>
      </v-form>
    </v-container>
  </v-app>
</template>

<script setup>
// import { useChat } from 'ai/vue'
import { useChat } from '@ai-sdk/vue';

const { messages, input, handleSubmit } = useChat({
  headers: { 'Content-Type': 'application/json' },
})
</script>
