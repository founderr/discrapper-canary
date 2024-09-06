n.d(t, {
    I: function () {
        return s;
    },
    T: function () {
        return a;
    }
});
var i = n(673125);
function s(e, t, n, i, s) {
    e.save(), e.beginPath(), (e.fillStyle = i), e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + s, 0, 2 * Math.PI), e.fill(), e.restore();
}
function a(e, t, n, s) {
    e.save();
    let a = i.Z.getAvatarImage(s);
    if (null == a) return;
    let l = 20 * window.devicePixelRatio;
    e.beginPath(), e.arc(t, n, l / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(a, t - l / 2, n - l / 2, l, l), e.restore();
}
