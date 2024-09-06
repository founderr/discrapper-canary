n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(699516),
    r = n(697451),
    o = n(348238);
let c = s.memo(function (e) {
    var t;
    let { message: n, channel: c, compact: u = !1, interactionUsernameProfile: d, interactionAvatarProfile: h, interactionData: m, setPopout: p } = e,
        _ = (0, a.e7)([l.Z], () => l.Z.isBlockedForMessage(n), [n]),
        f = (0, o.wq)(null === (t = n.interaction) || void 0 === t ? void 0 : t.user.id, c.id),
        E = (0, o.Nk)(n.interaction, c, d, p),
        g = (0, o.NU)(h, p),
        C = (0, o.Xn)(m, p),
        I = s.useCallback(
            () =>
                p({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1
                }),
            [p]
        );
    return (0, i.jsx)(r.Z, {
        message: n,
        channel: c,
        compact: u,
        isInteractionUserBlocked: _,
        showAvatarPopout: h,
        showUsernamePopout: d,
        showDataPopout: m,
        onClickAvatar: g,
        onClickUsername: E,
        onClickCommand: C,
        onUserContextMenu: f,
        onPopoutRequestClose: I
    });
});
function u(e, t, n) {
    let { message: s, channel: a, compact: l } = e,
        { interactionUsernameProfile: r, interactionAvatarProfile: o, interactionData: u } = n;
    return null != s.interaction && '' !== s.interaction.displayName
        ? (0, i.jsx)(c, {
              message: s,
              channel: a,
              compact: l,
              setPopout: t,
              interactionUsernameProfile: r,
              interactionAvatarProfile: o,
              interactionData: u
          })
        : null;
}
