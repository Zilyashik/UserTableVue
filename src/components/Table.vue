<template>
  <div>
    <table>
      <tr>
        <th>Id <div class="arrow-4" v-bind:class="{open: sort}" @click="sortRows('id')">
          <span class="arrow-4-left"></span>
          <span class="arrow-4-right"></span>
        </div></th>
        <th>Firstname <div class="arrow-4" v-bind:class="{open: sort}" @click="sortRows('firstname')">
          <span class="arrow-4-left"></span>
          <span class="arrow-4-right"></span>
        </div></th>
        <th>Lastname <div class="arrow-4" v-bind:class="{open: sort}" @click="sortRows('lastname')">
          <span class="arrow-4-left"></span>
          <span class="arrow-4-right"></span>
        </div></th>
        <th>Email <div class="arrow-4" v-bind:class="{open: sort}" @click="sortRows('email')">
          <span class="arrow-4-left"></span>
          <span class="arrow-4-right"></span>
        </div></th>
        <th>Phone <div class="arrow-4" v-bind:class="{open: sort}" @click="sortRows('phone')">
          <span class="arrow-4-left"></span>
          <span class="arrow-4-right"></span>
        </div></th>
      </tr>
      <tr
          v-for="row in allRows"
          :key="row.email"
          @click="chooseRow(row)"
      >
        <td>{{ row.id }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.phone }}</td>
      </tr>
    </table>
    <RowInfo
        v-if="rowEnable"
        v-bind:row="row"
    />
  </div>
</template>

<script>
import TableRow from "@/components/TableRow";
import RowInfo from "@/components/RowInfo";
import {mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: "Table",
  components: {
    TableRow, RowInfo
  },
  computed: mapGetters(['allRows']),
  data() {
    return {
      row: {},
      rowEnable: false,
      sort: false
    }
  },
  mounted() {
    this.fetchRows(50);
  },
  methods: {
    chooseRow(row) {
      this.row = row;
      this.rowEnable = true;
    },
    sortRows(field) {
      this.sort = !this.sort;
      let sortObj = {
        direction: this.sort ? 'ASC' : 'DESC',
        field: field
      };
      this.sortPage(sortObj);
    },
    ...mapActions(['fetchRows']),
    ...mapMutations(['sortPage'])
  }
}
</script>

<style scoped>
  table {
    border: 2px solid black;
    margin: 0 auto;
  }
  table tr {
    cursor: pointer;
  }


  .arrow-4 {
    position: relative;
    cursor: pointer;
    margin:20px;
    width: 66px;
    height: 30px;
  }
  .arrow-4-left {
    position: absolute;
    background-color: transparent;
    top: 10px;
    left: 0;
    width: 40px;
    height: 10px;
    display: block;
    transform: rotate(35deg);
    float: right;
    border-radius: 2px;
  }
  .arrow-4-left:after {
    content: "";
    background-color: #337AB7;
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    border-radius: 6px 10px 10px 6px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }

  .arrow-4-right {
    position: absolute;
    background-color: transparent;
    top: 10px;
    left: 26px;
    width: 40px;
    height: 10px;
    display: block;
    transform: rotate(-35deg);
    float: right;
    border-radius: 2px;
  }
  .arrow-4-right:after {
    content: "";
    background-color: #337AB7;
    width: 40px;
    height: 10px;
    display: block;
    float: right;
    border-radius: 10px 6px 6px 10px;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }
  .open .arrow-4-left:after {
    transform-origin: center center;
    transform: rotate(-70deg);
  }
  .open .arrow-4-right:after {
    transform-origin: center center;
    transform: rotate(70deg);
  }
</style>