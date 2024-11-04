n.d(t, {
    _: function () {
        return r;
    }
});
var i = n(442837),
    l = n(897473),
    a = n(433355);
function r() {
    let e = (0, i.e7)([a.ZP], () => a.ZP.getSidebarState(a.uZ)),
        t = (null == e ? void 0 : e.type) === l.tI.VIEW_MESSAGE_REQUEST ? e : null,
        n = null == t ? void 0 : t.channelId;
    return {
        channelId: n,
        hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === l.Ff.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
    };
}
