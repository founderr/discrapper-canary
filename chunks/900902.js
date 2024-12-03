n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(901461),
    a = n(453687),
    s = n(464891),
    o = n(318713),
    c = n(507418),
    d = n(348238),
    u = n(981631);
let h = l.memo(function (e) {
        let { message: t, channel: n, compact: r = !1, groupId: a, isGroupStart: o, usernameProfile: h, avatarProfile: p, setPopout: m, author: f, repliedMessage: g, roleIcon: C } = e,
            x = (0, d.wq)(t.author.id, n.id),
            v = (0, d.XO)(t, n, h, m),
            _ = (0, d.R9)(p, m),
            I = l.useCallback(
                () =>
                    m({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }),
                [m]
            );
        return (0, i.jsx)(s.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: f,
            compact: r,
            subscribeToGroupId: a,
            showTimestampOnHover: !o && r && t.type !== u.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: p,
            showUsernamePopout: h,
            onClickAvatar: _,
            onClickUsername: v,
            onContextMenu: x,
            onPopoutRequestClose: I,
            roleIcon: C
        });
    }),
    p = l.memo(o.Z);
function m(e) {
    let { messageProps: t, setPopout: n, messagePopouts: l, replyReference: s, author: o, repliedMessage: c, roleIcon: d } = e,
        { message: u, compact: m, channel: f, groupId: g } = t,
        { usernameProfile: C, avatarProfile: x } = l;
    if ((0, r.Z)(u)) return null;
    let v = u.id === g;
    return v || m || null != s
        ? (0, i.jsx)(h, {
              message: u,
              channel: f,
              compact: m,
              subscribeToGroupId: g,
              isGroupStart: v,
              groupId: g,
              setPopout: n,
              usernameProfile: C,
              avatarProfile: x,
              author: o,
              repliedMessage: c,
              roleIcon: d
          })
        : (0, i.jsx)(p, {
              compact: !0,
              timestamp: u.timestamp,
              isInline: !1,
              id: (0, a.Dv)(u),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
