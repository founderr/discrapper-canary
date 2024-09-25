n.d(t, {
    R: function () {
        return o;
    },
    W: function () {
        return a;
    }
});
var r = n(411104);
var i = n(356659);
function a(e) {
    let t = document.createElement('canvas');
    (t.width = e.width), (t.height = e.height);
    let n = t.getContext('2d');
    if (null == n) throw Error('Could not create canvas context');
    return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL('image/jpeg', 0.9);
}
async function o(e, t) {
    let n = document.createElement('video');
    (n.muted = !0), (n.src = e), (n.currentTime = t), await n.play(), n.pause();
    let r = i.f_ / n.videoWidth,
        a = Math.min(r, i.wD / n.videoHeight),
        o = n.videoWidth * a,
        s = n.videoHeight * a,
        l = document.createElement('canvas');
    (l.width = o), (l.height = s);
    let u = l.getContext('2d');
    if (null == u) throw Error('Could not create canvas context');
    return u.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, o, s), l.toDataURL('image/jpeg', 0.9);
}
