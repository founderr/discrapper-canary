n.d(t, {
    h: function () {
        return u;
    }
});
var r = n(177593);
var i = n(653041);
var a = n(570140),
    o = n(38618);
let s = [];
function l(e) {
    setImmediate(() => e());
}
function u(e) {
    o.Z.isConnectedOrOverlay() ? l(e) : s.push(e);
}
a.Z.subscribe('CONNECTION_OPEN', () => {
    s.forEach((e) => l(e)), (s = []);
}),
    a.Z.subscribe('CONNECTION_RESUMED', () => {
        s.forEach((e) => l(e)), (s = []);
    });
