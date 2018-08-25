<template>
<div>

      <table> 
          <thead>   
          <tr>
          <td>Id</td><td>Title</td><td>Description</td><td>Opened</td><td>Owner</td>
          </tr>
          </thead>
         <tbody>      
        <tr v-for="item in bugList" :key="item.id">
            <td>{{item.id}}</td><td>{{item.title}}</td>
            <td>{{item.description}}</td><td>{{item.dateOpened}}</td>
            <td>{{item.assignedToUser.name}}</td>
        </tr>   
    </tbody>          
      </table>
</div>
</template>
<script>
import appService from "../app.service.js";
export default {
  props: {
    list: []
  },
  data: function() {
    return {
      fields: [
        {
          key: "id",
          sortable: true
        },
        {
          key: "title",
          sortable: false
        },
        {
          key: "description",
          sortable: false
        },
        {
          key: "dateOpened",
          sortable: false
        },
        {
          key: "assignedToUser.name",
          sortable: false
        }
      ],
      bugList: this.list
    };
  },

  methods: {
    closeBug(item) {
      item.isActive = false;
      console.log("remove called" + item.id + " " + item.isActive);
    },

    loadBugs() {
      appService.getBugs().then(data => {
        this.bugList = data;
      });
    }
  },
  created() {
    this.loadBugs();
  }
};
</script>
<style scoped>
#buglist {
  display: block;
}
#list {
  display: block;
  padding: 5px;
}
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(25, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

thead {
  background-color: #17ca8e;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>
