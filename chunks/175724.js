e.d(t, {
    f: function () {
        return R;
    }
});
var i = e(374470),
    l = e(475179),
    o = e(904245),
    r = e(45114),
    u = e(40851),
    a = e(358221),
    d = e(623292),
    E = e(807092),
    s = e(6025),
    c = e(897473),
    _ = e(913663),
    C = e(268350),
    A = e(433355),
    S = e(592125),
    I = e(703558),
    T = e(323873),
    L = e(375954),
    h = e(306680),
    g = e(944486),
    f = e(914010),
    p = e(574254),
    O = e(451478),
    N = e(585483),
    b = e(981631);
let R = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(n) {
        if (O.Z.isElementFullScreen()) return !1;
        if (N.S.hasSubscribers(b.CkL.CALL_DECLINE)) return N.S.dispatch(b.CkL.CALL_DECLINE), !1;
        if (p.Z.close()) return !1;
        if (N.S.hasSubscribers(b.CkL.MEDIA_MODAL_CLOSE)) return N.S.dispatch(b.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(n.target)) {
            let t = (0, u.J5)(n.target);
            if (null == t ? void 0 : t.hasSubscribers(b.CkL.POPOUT_CLOSE)) return t.dispatch(b.CkL.POPOUT_CLOSE), !1;
        }
        if (N.S.hasSubscribers(b.CkL.CLOSE_GIF_PICKER)) return N.S.dispatch(b.CkL.CLOSE_GIF_PICKER), !1;
        if (N.S.hasSubscribers(b.CkL.MODAL_CLOSE)) return N.S.dispatch(b.CkL.MODAL_CLOSE), !1;
        if (N.S.hasSubscribers(b.CkL.SEARCH_RESULTS_CLOSE)) return N.S.dispatch(b.CkL.SEARCH_RESULTS_CLOSE), !1;
        let t = f.Z.getGuildId(),
            e = g.Z.getChannelId(t),
            o = S.Z.getChannel(e),
            r = A.ZP.getSection(e, null == o ? void 0 : o.isDM()) === b.ULH.SIDEBAR_CHAT ? A.ZP.getSidebarState(e) : null,
            d = (null == r ? void 0 : r.type) === c.tI.VIEW_THREAD || (null == r ? void 0 : r.type) === c.tI.VIEW_CHANNEL ? r.channelId : null;
        if (!1 === G(e) || !1 === G(d)) return !1;
        if (null != e && (null == r ? void 0 : r.type) === c.tI.CREATE_THREAD) return s.Z.closeChannelSidebar(e), !1;
        let E = Z(e),
            _ = Z(d);
        return null == e || E || _ || null == r ? (null != e && !E && a.Z.getChatOpen(e) ? (l.Z.updateChatOpen(e, !1), !1) : (N.S.dispatch(b.CkL.SCROLLTO_PRESENT), !1)) : (s.Z.closeChannelSidebar(e), !1);
    }
};
function G(n) {
    if (null != n) {
        if (T.Z.isEditingAny(n)) return o.Z.endEditMessage(n), !1;
        if (null != E.Z.getPendingReply(n)) return (0, d.A6)(n), !1;
        if (null != _.Z.getStickerPreview(n, I.d.ChannelMessage)) return (0, C.qB)(n, I.d.ChannelMessage), !1;
    }
}
function Z(n) {
    if (null == n) return !1;
    let t = !1;
    return L.Z.getMessages(n).hasMoreAfter && (o.Z.jumpToPresent(n, b.AQB), (t = !0)), h.ZP.hasUnread(n) && ((0, r.In)(n), (t = !0)), (0, r.iV)(n), t;
}
