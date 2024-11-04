n.d(t, {
    _: function () {
        return s;
    }
});
var i = n(442837),
    l = n(897473),
    r = n(433355);
function s() {
    let e = (0, i.e7)([r.ZP], () => r.ZP.getSidebarState(r.uZ)),
        t = (null == e ? void 0 : e.type) === l.tI.VIEW_MESSAGE_REQUEST ? e : null,
        n = null == t ? void 0 : t.channelId;
    return {
        channelId: n,
        hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === l.Ff.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
    };
}
