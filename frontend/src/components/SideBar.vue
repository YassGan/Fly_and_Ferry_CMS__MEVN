   <template>
  <div :style="{ width: elementWidth + '%' }" class="Sidebar">
    <div class="SidebarHeader">
      <h3>Sidebar</h3>
    </div>
    <div class="SidebarContent">
      <ul v-if="elementWidth" style="margin-top: 50px" class="listContainer">
        <router-link to="/DahboardAdminCMS">
          <li style="padding-left: 40px" class="sidebarelementli">
            <img
              src="../assets/AdminCMS_Sidebar_Icons/footer.png"
              class="sidbarIcon"
            />

            <p style="margin-left: 20px">Menu</p>
          </li>
        </router-link>
        <router-link to="/AproposAdminCMS">
          <li style="padding-left: 40px" class="sidebarelementli">
            <img
              src="../assets/AdminCMS_Sidebar_Icons/footer.png"
              class="sidbarIcon"
            />
            <p style="margin-left: 20px">A propos</p>
          </li>
        </router-link>

        <router-link to="/AproposAdminCMS">
          <li style="padding-left: 40px" class="sidebarelementli">
            <img
              src="../assets/AdminCMS_Sidebar_Icons/footer.png"
              class="sidbarIcon"
            />
            <p style="margin-left: 20px">Footer</p>
          </li>
        </router-link>

        <router-link to="/AproposAdminCMS">
          <li style="padding-left: 40px" class="sidebarelementli">
            <img
              src="../assets/AdminCMS_Sidebar_Icons/footer.png"
              class="sidbarIcon"
            />
            <p style="margin-left: 20px">Best Seller</p>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
    

<script>
export default {
  props: {
    elementWidth: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style scoped>
.SidebarContent a {
  font-weight: 100;
}

.sidebarelementli {
  margin-top: -10px;
}
</style>