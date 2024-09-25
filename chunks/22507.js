n.d(t, {
    l: function () {
        return i;
    }
});
var r = n(882932);
function i(e = {}) {
    let { isReadOnly: t } = e,
        [n, i] = (0, r.zk)(e.isSelected, e.defaultSelected || !1, e.onChange);
    function a() {
        !t && i(!n);
    }
    return {
        isSelected: n,
        setSelected: function e(e) {
            !t && i(e);
        },
        toggle: a
    };
}
