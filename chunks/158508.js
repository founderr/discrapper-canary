n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(922611),
    l = n(240515),
    u = n(699516),
    c = n(594174),
    d = n(388032);
function f(e) {
    let { user: t, guildId: n, channelId: f, onBlock: _, onIgnore: p, onUnignore: h, location: m = 'ContextMenu' } = e,
        { id: g } = t,
        E = (0, i.e7)(
            [c.default],
            () => {
                var e;
                return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === g;
            },
            [g]
        ),
        { isIgnored: v, isBlocked: I } = (0, i.cj)(
            [u.Z],
            () => ({
                isIgnored: u.Z.isIgnored(g),
                isBlocked: u.Z.isBlocked(g)
            }),
            [g]
        );
    return !(0, o.Do)({ location: 'use-block-user-item-web' }) || E || I
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'ignore',
              color: 'default',
              label: v ? d.intl.string(d.t['8wXU9P']) : d.intl.string(d.t.ytCpKi),
              action: v
                  ? () => {
                        null == h || h(), s.Z.unignoreUser(g, null != m ? m : 'use-ignore-user-item-web', null != f ? f : void 0);
                    }
                  : () => {
                        (0, a.openModal)((e) =>
                            (0, r.jsx)(l.Z, {
                                ...e,
                                guildId: n,
                                channelId: f,
                                user: t,
                                onIgnore: p,
                                onBlock: _,
                                location: m
                            })
                        );
                    }
          });
}
