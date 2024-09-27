var i = n(470079),
    s = n(904245),
    a = n(346610),
    l = n(868643),
    r = n(912332),
    o = n(41776),
    c = n(280845),
    u = n(665906),
    d = n(488131),
    h = n(695346),
    m = n(314897),
    p = n(592125),
    _ = n(323873),
    f = n(271383),
    E = n(607744),
    g = n(375954),
    C = n(496675),
    I = n(572004),
    T = n(585483),
    x = n(358085),
    S = n(709054),
    v = n(418476),
    N = n(901461),
    A = n(432376),
    Z = n(996861),
    M = n(981631);
function b(e) {
    return C.Z.can(M.Plq.MANAGE_MESSAGES, e);
}
t.Z = function (e, t, n) {
    let R = i.useRef(n);
    return (
        (R.current = n),
        i.useCallback(
            (n) => {
                var i, L, j, O, P;
                if (!R.current || n.target !== n.currentTarget) return;
                let y = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    D = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    U = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    k = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    w = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    B = g.Z.getMessage(t, e),
                    H = p.Z.getChannel(t);
                if (null == B || null == H) return;
                let G = m.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        y && (b(H) || B.canDeleteOwnMessage(G)) && (n.preventDefault(), (0, Z.$Z)(H, B, n));
                        break;
                    case 'c':
                        ((0, x.isMac)() ? k : U) && I.wS && (n.preventDefault(), (0, I.JG)(B.content));
                        break;
                    case 'e':
                        if (y) {
                            if (((i = G), (L = H), (j = B), !L.isSystemDM() && (0, v.Z)(j, i))) n.preventDefault(), (0, Z.Hd)(H, B);
                        }
                        break;
                    case 'p':
                        if (y || w) {
                            if (((O = H), (P = B), !O.isSystemDM() && !(0, N.Z)(P) && (b(O) || O.isPrivate()))) n.preventDefault(), (0, Z.rY)(H, B, n);
                        }
                        break;
                    case '+':
                        (y || w) &&
                            (function (e) {
                                let t = null == e.guild_id || E.Z.canChatInGuild(e.guild_id),
                                    n = h.nc.getSetting(),
                                    { disableReactionCreates: i } = (0, A.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && C.Z.can(M.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && f.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, u.RG)(e)
                                    });
                                return !i && n;
                            })(H) &&
                            (n.preventDefault(), T.S.dispatchKeyed(M.LPv.TOGGLE_REACTION_POPOUT, B.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (y || w) && (0, c.o)(H, B) && (n.preventDefault(), (0, Z.HH)(H, B, n));
                        break;
                    case 'f':
                        (y || w) &&
                            (0, a.WT)({ location: 'keyboard-shortcut' }, { autoTrackExposure: !1 }).canForwardMessages &&
                            (0, l.h)(B) &&
                            (n.preventDefault(),
                            (0, r.l8)({
                                messageId: B.id,
                                channelId: H.id,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (y && (0, u.ki)(H, B)) n.preventDefault(), (0, d.R6)(H, B, 'Message Shortcut');
                        else if (B.hasFlag(M.iLy.HAS_THREAD)) {
                            let e = p.Z.getChannel(S.default.castMessageIdAsChannelId(B.id));
                            null != e && (y || w) && (n.preventDefault(), (0, d.ok)(e, w));
                        }
                        break;
                    case 'enter':
                        D && (n.preventDefault(), (0, Z.B8)(H, B));
                        break;
                    case 'escape':
                        _.Z.isEditing(H.id, B.id) ? s.Z.endEditMessage(H.id) : T.S.dispatch(M.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
