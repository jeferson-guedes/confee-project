<script>
import Left from './left'
import Brand from './brand'

export default {
  name: 'confee-header',
  components: { Left, Brand },
  data () {
    return { isOpen: false }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }

}

</script>

<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <Brand @toggle="onToggleMenu" />
          <div id="navbar" class="navbar-collapse collapse" :class="{ in: isOpen }">
            <Left />
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>
</template>
