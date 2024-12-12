r.d(n, {
    Ig: function () {
        return s;
    },
    UU: function () {
        return o;
    },
    ZY: function () {
        return a;
    }
});
var i = r(392711);
function a(e) {
    return e.__DISCORD_WINDOW_ID;
}
function s(e) {
    let n = (0, i.uniqueId)('window-');
    return (e.__DISCORD_WINDOW_ID = n), n;
}
function o() {
    return a(window);
}
