r.d(n, {
    h: function () {
        return c;
    }
});
var i = r(177593);
var a = r(653041);
var s = r(570140),
    o = r(38618);
let l = [];
function u(e) {
    setImmediate(() => e());
}
function c(e) {
    o.Z.isConnectedOrOverlay() ? u(e) : l.push(e);
}
s.Z.subscribe('CONNECTION_OPEN', () => {
    l.forEach((e) => u(e)), (l = []);
}),
    s.Z.subscribe('CONNECTION_RESUMED', () => {
        l.forEach((e) => u(e)), (l = []);
    });
