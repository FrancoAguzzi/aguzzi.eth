<template>
  <div>
    <TheHeader :isProjects="true" :isStar="true"></TheHeader>
    <ProjectsList></ProjectsList>
  </div>
</template>

<script>
import ProjectsList from '../../components/ProjectsList.vue'
export default {
  name: 'ProjectsPage',
  components: { ProjectsList },
  mounted() {
    window.href.location = "https://app.usebraintrust.com/talent/1469757/"
  }
}
</script>
