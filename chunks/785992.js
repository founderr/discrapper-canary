l.d(t, {
    E: function () {
        return r;
    },
    Z: function () {
        return a;
    }
});
var n = l(729594),
    i = l(981631);
function r(e) {
    return null != e && 'open.spotify.com' === e;
}
function a(e) {
    var t;
    if (null == e.url || (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !== 'Spotify' || e.type !== i.hBH.LINK) return !1;
    try {
        let t = n.parse(e.url, !0).host;
        return r(t);
    } catch (e) {
        return !1;
    }
}
