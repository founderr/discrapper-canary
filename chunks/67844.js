r.d(n, {
    X: function () {
        return s;
    }
});
var i = r(981631),
    a = r(388032);
function s(e) {
    let { enabled: n, join: r, channel: s, cameraUnavailable: o, hasPermission: l, channelLimit: u = -1, channelLimitReached: c = !1 } = e,
        d = n ? a.intl.string(a.t['4xAQ5+']) : a.intl.string(a.t.kgIe9f);
    return r && (d = (null == s ? void 0 : s.isManaged()) || !(null == s ? void 0 : s.isPrivate()) ? a.intl.string(a.t.clqrYm) : a.intl.string(a.t.W68MhI)), o && (d = a.intl.string(a.t['8jSzSU'])), !l && (d = a.intl.string(a.t.uQn9Bw)), c && !n && (d = (null == s ? void 0 : s.isGuildStageVoice()) ? (u >= i.RcX ? a.intl.string(a.t['j6h0//']) : a.intl.string(a.t['jlZ+0t'])) : a.intl.formatToPlainString(a.t.x9mtl5, { limit: u })), d;
}
