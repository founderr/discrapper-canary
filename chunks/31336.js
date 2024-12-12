r.d(n, {
    Qh: function () {
        return s;
    },
    SO: function () {
        return o;
    },
    Zw: function () {
        return l;
    }
});
var i = r(570140),
    a = r(19759);
function s(e) {
    i.Z.dispatch({
        type: 'DEV_TOOLS_SETTINGS_UPDATE',
        settings: e
    });
}
function o() {
    s({ displayTools: !a.Z.displayTools });
}
function l() {
    i.Z.dispatch({ type: 'ANALYTICS_LOG_CLEAR' });
}
