r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(695346),
    a = r(687158);
function s(e, n) {
    if ('undefined' == typeof Image) return;
    let r = (0, a.Of)(e.user.id, n);
    if (null == r) return;
    let s = i.QK.getSetting(),
        o = r.getBannerURL({
            canAnimate: s,
            size: 480
        });
    if (null != o) new Image().src = o;
}
