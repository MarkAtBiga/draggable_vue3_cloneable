<template>
  <Modal name="modalTest" :animation="true" v-model:visible="isVisible">
    <input v-model="message" placeholder="edit me" />
  </Modal>
</template>

<script lang="ts">