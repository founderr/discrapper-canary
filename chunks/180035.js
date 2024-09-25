n.d(t, {
    d: function () {
        return s;
    }
});
var r = n(399606),
    i = n(410030),
    a = n(607070),
    o = n(540059);
function s(e, t) {
    let n = (0, i.ZP)(),
        s = (0, r.e7)([a.Z], () => a.Z.saturation),
        l = (0, o.Q)('useToken') ? ['visual-refresh'] : void 0;
    return e.resolve({
        theme: null != t ? t : n,
        saturation: s,
        enabledExperiments: l
    });
}
