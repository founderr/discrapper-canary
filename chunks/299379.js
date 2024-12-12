r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(388032);
function a(e) {
    let n = i.intl.currentLocale.toLowerCase();
    return n in e ? e[n] : e.default;
}
