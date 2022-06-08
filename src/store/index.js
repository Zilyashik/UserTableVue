import Vue from 'vue';
import Vuex from 'vuex';
import rows from './modules/rows';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        rows
    }
})