<script setup lang="ts">
import type { Repo } from '@/types'

defineProps<{
  repo: Repo
}>()
</script>

<template>
  <div class="project-card">
    <h3>
      <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
        {{ repo.name }}
      </a>
    </h3>

    <p v-if="repo.description" class="description">
      {{ repo.description }}
    </p>

    <div v-if="repo.language || repo.stargazers_count" class="meta">
      <span v-if="repo.language">{{ repo.language }}</span>
      <span v-if="repo.stargazers_count">⭐ {{ repo.stargazers_count }}</span>
    </div>

    <div v-if="repo.topics && repo.topics.length > 0" class="topics">
      <span v-for="topic in repo.topics" :key="topic" class="topic">
        {{ topic }}
      </span>
    </div>
  </div>
</template>
