n.d(t, {
    AW: function () {
        return a;
    },
    Ju: function () {
        return s;
    },
    pR: function () {
        return o;
    }
});
var r = n(695346),
    i = n(990266);
function a(e) {
    r.up.updateSetting(e);
}
function s() {
    let { disabled: e } = i.Z.useExperiment({ location: 'ExpressionSuggestions' });
    return e;
}
function o() {
    let e = r.up.useSetting();
    return !s() && e;
}
