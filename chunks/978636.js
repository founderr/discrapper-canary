r.d(n, {
    JL: function () {
        return o;
    },
    i9: function () {
        return s;
    }
});
var i = r(47120);
let a = (0, r(15729).U)(() => ({ hasFiredFromMessage: new Set() }));
function s(e) {
    let { hasFiredFromMessage: n } = a.getState();
    n.add(e), a.setState({ hasFiredFromMessage: n });
}
function o(e) {
    let { hasFiredFromMessage: n } = a.getState();
    return n.has(e);
}
