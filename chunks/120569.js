n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(695346),
    i = n(687158);
function a(e, t) {
    if ('undefined' == typeof Image) return;
    let n = (0, i.Of)(e.user.id, t);
    if (null == n) return;
    let a = r.QK.getSetting(),
        s = n.getBannerURL({
            canAnimate: a,
            size: 480
        });
    if (null != s) new Image().src = s;
}
