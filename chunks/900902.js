n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(901461),
    a = n(453687),
    s = n(464891),
    o = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let h = l.memo(function (e) {
        let { message: t, channel: n, compact: r = !1, groupId: a, isGroupStart: o, usernameProfile: h, avatarProfile: m, setPopout: p, author: f, repliedMessage: g, roleIcon: C } = e,
            x = (0, u.wq)(t.author.id, n.id),
            v = (0, u.XO)(t, n, h, p),
            _ = (0, u.R9)(m, p),
            I = l.useCallback(
                () =>
                    p({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }),
                [p]
            );
        return (0, i.jsx)(s.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: f,
            compact: r,
            subscribeToGroupId: a,
            showTimestampOnHover: !o && r && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: m,
            showUsernamePopout: h,
            onClickAvatar: _,
            onClickUsername: v,
            onContextMenu: x,
            onPopoutRequestClose: I,
            roleIcon: C
        });
    }),
    m = l.memo(o.Z);
function p(e) {
    let { messageProps: t, setPopout: n, messagePopouts: l, replyReference: s, author: o, repliedMessage: c, roleIcon: u } = e,
        { message: d, compact: p, channel: f, groupId: g } = t,
        { usernameProfile: C, avatarProfile: x } = l;
    if ((0, r.Z)(d)) return null;
    let v = d.id === g;
    return v || p || null != s
        ? (0, i.jsx)(h, {
              message: d,
              channel: f,
              compact: p,
              subscribeToGroupId: g,
              isGroupStart: v,
              groupId: g,
              setPopout: n,
              usernameProfile: C,
              avatarProfile: x,
              author: o,
              repliedMessage: c,
              roleIcon: u
          })
        : (0, i.jsx)(m, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, a.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
