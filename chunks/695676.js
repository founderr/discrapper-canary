t.d(n, {
    gc: function () {
        return l;
    },
    hH: function () {
        return s;
    },
    uX: function () {
        return a;
    }
});
var i, l, r = t(470079);
(i = l || (l = {})).HOME = 'home', i.LIST = 'list', i.APPLICATION = 'application';
let a = r.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {
    },
    goBack: () => {
    },
    getMostRecentHistoryItemByType: () => void 0
});
function s() {
    return r.useContext(a);
}
