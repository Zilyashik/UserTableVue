export default {
    actions: {
        async fetchRows({commit}, limit = 1000) {
            const response = await fetch(`http://www.filltext.com/?rows=${limit}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
            const rows = await response.json();

            commit('updateRows', rows);
        }
    },
    mutations: {
        updateRows(state, rows) {
            state.rows = rows;
        },
        createRow(state, newRow) {
            state.rows.unshift(newRow);
        },
        sortPage(state, sortParams) {
            console.log(sortParams.field)
            if (sortParams.direction === 'ASC') {
                state.rows.sort(function (a, b) {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }
                    return 0;
                });
            }

            if (sortParams.direction === 'DESC') {
                state.rows.sort(function (a, b) {
                    if (a.id < b.id) {
                        return 1;
                    }
                    if (a.id > b.id) {
                        return -1;
                    }
                    return 0;
                });
            }
        }
    },
    state: {
        rows: []
    },
    getters: {
        allRows(state) {
            return state.rows;
        }
    }
}