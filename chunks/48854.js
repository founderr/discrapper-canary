r.d(n, {
    r: function () {
        return o;
    }
});
var i = r(709054);
let a = 0,
    s = new i.SnowflakeSequence();
function o() {
    let e = Date.now();
    return a !== e && (s.reset(), (a = e)), i.default.fromTimestampWithSequence(e, s);
}
