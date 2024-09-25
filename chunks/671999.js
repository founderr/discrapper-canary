n.d(t, {
    B: function () {
        return i;
    },
    J: function () {
        return a;
    }
});
var r = n(411104);
function i(e, t, n) {
    return new MouseEvent(e, {
        screenX: t,
        screenY: n,
        clientX: t,
        clientY: n,
        bubbles: !0,
        view: window
    });
}
function a(e, t, n) {
    let r = document.elementFromPoint(t, n);
    if (null == r) throw Error();
    r.dispatchEvent(e);
}
