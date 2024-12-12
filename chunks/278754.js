r.d(n, {
    AW: function () {
        return s;
    },
    Ju: function () {
        return o;
    },
    pR: function () {
        return l;
    }
});
var i = r(695346),
    a = r(990266);
function s(e) {
    i.up.updateSetting(e);
}
function o() {
    let { disabled: e } = a.Z.useExperiment({ location: 'ExpressionSuggestions' });
    return e;
}
function l() {
    let e = i.up.useSetting();
    return !o() && e;
}
