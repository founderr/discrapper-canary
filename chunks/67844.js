n.d(t, {
    X: function () {
        return a;
    }
});
var r = n(981631),
    i = n(388032);
function a(e) {
    let { enabled: t, join: n, channel: a, cameraUnavailable: s, hasPermission: o, channelLimit: l = -1, channelLimitReached: u = !1 } = e,
        c = t ? i.intl.string(i.t['4xAQ5+']) : i.intl.string(i.t.kgIe9f);
    return n && (c = (null == a ? void 0 : a.isManaged()) || !(null == a ? void 0 : a.isPrivate()) ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhI)), s && (c = i.intl.string(i.t['8jSzSU'])), !o && (c = i.intl.string(i.t.uQn9Bw)), u && !t && (c = (null == a ? void 0 : a.isGuildStageVoice()) ? (l >= r.RcX ? i.intl.string(i.t['j6h0//']) : i.intl.string(i.t['jlZ+0t'])) : i.intl.formatToPlainString(i.t.x9mtl5, { limit: l })), c;
}
