t.d(n, {
    gc: function () {
        return l;
    },
    hH: function () {
        return r;
    },
    uX: function () {
        return s;
    }
});
var i, l, a = t(470079);
(i = l || (l = {})).HOME = 'home', i.LIST = 'list', i.APPLICATION = 'application';
let s = a.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {
    },
    goBack: () => {
    },
    getMostRecentHistoryItemByType: () => void 0
});
function r() {
    return a.useContext(s);
}
