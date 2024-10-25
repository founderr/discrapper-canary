n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(901461),
    l = n(453687),
    r = n(464891),
    o = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let h = s.memo(function (e) {
        let { message: t, channel: n, compact: a = !1, groupId: l, isGroupStart: o, usernameProfile: h, avatarProfile: m, setPopout: p, author: _, repliedMessage: f, roleIcon: E } = e,
            g = (0, u.wq)(t.author.id, n.id),
            C = (0, u.XO)(t, n, h, p),
            I = (0, u.R9)(m, p),
            T = s.useCallback(
                () =>
                    p({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }),
                [p]
            );
        return (0, i.jsx)(r.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: f,
            author: _,
            compact: a,
            subscribeToGroupId: l,
            showTimestampOnHover: !o && a && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: m,
            showUsernamePopout: h,
            onClickAvatar: I,
            onClickUsername: C,
            onContextMenu: g,
            onPopoutRequestClose: T,
            roleIcon: E
        });
    }),
    m = s.memo(o.Z);
function p(e) {
    let { messageProps: t, setPopout: n, messagePopouts: s, replyReference: r, author: o, repliedMessage: c, roleIcon: u } = e,
        { message: d, compact: p, channel: _, groupId: f } = t,
        { usernameProfile: E, avatarProfile: g } = s;
    if ((0, a.Z)(d)) return null;
    let C = d.id === f;
    return C || p || null != r
        ? (0, i.jsx)(h, {
              message: d,
              channel: _,
              compact: p,
              subscribeToGroupId: f,
              isGroupStart: C,
              groupId: f,
              setPopout: n,
              usernameProfile: E,
              avatarProfile: g,
              author: o,
              repliedMessage: c,
              roleIcon: u
          })
        : (0, i.jsx)(m, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, l.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
