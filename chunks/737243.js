n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(911969),
    r = n(581364),
    o = n(869765),
    c = n(699516),
    u = n(697451),
    d = n(348238),
    h = n(614584);
let m = s.memo(function (e) {
    var t, n;
    let { message: m, channel: p, compact: _ = !1, interactionUsernameProfile: f, interactionAvatarProfile: E, interactionData: g, referencedUsernameProfile: C, referencedAvatarProfile: I, setPopout: T } = e,
        x = (0, a.e7)([c.Z], () => c.Z.isBlockedForMessage(m), [m]),
        v = (0, a.e7)([o.Z], () => o.Z.getMessageByReference(null == m ? void 0 : m.messageReference)),
        S = (0, d.wq)(null === (t = m.interaction) || void 0 === t ? void 0 : t.user.id, p.id),
        N = (0, d.Nk)(m.interaction, p, f, T),
        A = (0, d.NU)(E, T),
        Z = (0, r.t0)(m),
        M = (null == Z ? void 0 : Z.type) === l.B8.APPLICATION_COMMAND ? (null === (n = Z.target_user) || void 0 === n ? void 0 : n.id) : void 0,
        b = (0, d.wq)(M, p.id),
        R = (0, d.JC)(M, p, C, T),
        L = (0, d.rY)(I, T),
        j = (0, d.Xn)(g, T),
        P = s.useCallback(
            () =>
                T({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1,
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }),
            [T]
        ),
        O = s.useCallback(
            () =>
                (0, h.Z)(
                    {
                        message: m,
                        channel: p,
                        compact: _
                    },
                    T,
                    {
                        referencedUsernameProfile: C,
                        referencedAvatarProfile: I
                    },
                    m.messageReference,
                    v
                ),
            [p, _, m, I, v, C, T]
        );
    return (0, i.jsx)(u.Z, {
        message: m,
        channel: p,
        compact: _,
        isInteractionUserBlocked: x,
        showAvatarPopout: E,
        showUsernamePopout: f,
        showDataPopout: g,
        showTargetAvatarPopout: I,
        showTargetUsernamePopout: C,
        onClickAvatar: A,
        onClickUsername: N,
        onClickCommand: j,
        onUserContextMenu: S,
        onClickTargetAvatar: L,
        onClickTargetUsername: R,
        onTargetUserContextMenu: b,
        onPopoutRequestClose: P,
        renderTargetMessage: O
    });
});
function p(e, t, n) {
    let { message: s, channel: a, compact: l } = e;
    return null != s.interaction && '' !== s.interaction.displayName
        ? (0, i.jsx)(m, {
              message: s,
              channel: a,
              compact: l,
              setPopout: t,
              ...n
          })
        : null;
}
