n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(911969),
    s = n(581364),
    o = n(869765),
    c = n(699516),
    d = n(697451),
    u = n(348238),
    h = n(614584);
let p = l.memo(function (e) {
    var t, n;
    let { message: p, channel: m, compact: f = !1, interactionUsernameProfile: g, interactionAvatarProfile: C, interactionData: x, referencedUsernameProfile: v, referencedAvatarProfile: _, setPopout: I } = e,
        E = (0, a.e7)([c.Z], () => c.Z.isBlockedForMessage(p), [p]),
        b = (0, a.e7)([o.Z], () => o.Z.getMessageByReference(null == p ? void 0 : p.messageReference)),
        N = (0, u.wq)(null === (t = p.interaction) || void 0 === t ? void 0 : t.user.id, m.id),
        Z = (0, u.Nk)(p.interaction, m, g, I),
        T = (0, u.NU)(C, I),
        S = (0, s.t0)(p),
        j = (null == S ? void 0 : S.type) === r.B8.APPLICATION_COMMAND ? (null === (n = S.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        A = (0, u.wq)(j, m.id),
        y = (0, u.JC)(j, m, v, I),
        P = (0, u.rY)(_, I),
        M = (0, u.Xn)(x, I),
        R = l.useCallback(
            () =>
                I({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1,
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [I]
        ),
        L = l.useCallback(
            () =>
                (0, h.Z)({
                    message: p,
                    channel: m,
                    compact: f,
                    setPopout: I,
                    referencedAvatarProfile: _,
                    referencedUsernameProfile: v,
                    replyReference: p.messageReference,
                    replyMessage: b,
                    isReplySpineClickable: !1,
                    showReplySpine: !1
                }),
            [m, f, p, _, b, v, I]
        );
    return (0, i.jsx)(d.Z, {
        message: p,
        channel: m,
        compact: f,
        isInteractionUserBlocked: E,
        showAvatarPopout: C,
        showUsernamePopout: g,
        showDataPopout: x,
        showTargetAvatarPopout: _,
        showTargetUsernamePopout: v,
        onClickAvatar: T,
        onClickUsername: Z,
        onClickCommand: M,
        onUserContextMenu: N,
        onClickTargetAvatar: P,
        onClickTargetUsername: y,
        onTargetUserContextMenu: A,
        onPopoutRequestClose: R,
        renderTargetMessage: L
    });
});
function m(e, t, n) {
    let { message: l, channel: a, compact: r } = e;
    return null != l.interaction && '' !== l.interaction.displayName
        ? (0, i.jsx)(p, {
              message: l,
              channel: a,
              compact: r,
              setPopout: t,
              ...n
          })
        : null;
}
