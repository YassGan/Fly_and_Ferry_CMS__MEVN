<template>
  <div class="PageContainer">
    <!-- Sidebar -->
      <!-- Sidebar -->
    <SideBar :elementWidth="elementWidth"></SideBar>

     

    <!-- Main Content -->
    <div class="MainContent">
      <div class="form-content">
        <div style="display: flex; margin-bottom: -50px" @click="toggleWidth">
          <img
            src="../assets/AdminCMS_Sidebar_Icons/ThreeBars.png"
            class="sidbarIcon"
          />
        </div>

        <h2>Dashboard</h2>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';

export default {
      components: {
    SideBar,
  },
 
  data() {
    return {
      elementWidth: 17,
      expandedWidth: 0,
    };
  },

  methods: {
    toggleWidth() {
      this.isExpanded = !this.isExpanded;
      this.elementWidth = this.isExpanded ? this.expandedWidth : 17;
    },
  },
};
</script>

<style >

.listContainer a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  position: relative;
}

.sidbarIcon {
  width: 30px;
  height: 30px;
}

.sidbarIcon:hover {
  cursor: pointer;
  width: 35px;
}

.PageContainer {
  display: flex;
  height: 100vh;
  width: 100%;
}

.Sidebar {
  width: 17%;
  background-color: #333;
  color: #fff;
  transition: 150ms;
}

.SidebarHeader {
  text-align: center;
  margin-bottom: 20px;
}

.sidebarelementli {
  margin-top: 10px;
}

.sidebarelementli:hover {
  background: #f5f7fa;
  border-radius: 20px 0 0 20px; /* Top-left and bottom-left corners are rounded */
  cursor: pointer;
  color: black;
  margin-left: 10px;
  transition: 50ms;
}

.SidebarContent ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.SidebarContent li {
  padding: 0;
  display: flex;
  align-items: center;
}

.MainContent {
  background-color: #f5f7fa;
  padding: 20px;
  flex: 1;
}
</style>
