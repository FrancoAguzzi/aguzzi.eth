<template>
  <div>
    <TheHeader :backToLunarSection="true" :isProjects="true"></TheHeader>
    <ProjectsList></ProjectsList>
  </div>
</template>

<script>
import ProjectsList from '../../components/ProjectsList.vue'
export default {
  name: 'ProjectsPage',
  components: { ProjectsList },
}
</script>
