n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(699581);
function o() {
    let [, e] = (0, i.useState)(0);
    return (0, i.useCallback)(() => (0, a.flushSync)(() => e((e) => e + 1)), []);
}
