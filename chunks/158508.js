n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(194359),
    l = n(377171),
    u = n(243778),
    c = n(922611),
    d = n(240515),
    f = n(699516),
    _ = n(594174),
    p = n(921944),
    h = n(388032),
    m = n(469619);
function g() {
    return (0, r.jsx)(s.TextBadge, {
        color: l.Z.BG_BRAND,
        text: h.intl.string(h.t.y2b7CA)
    });
}
function E(e) {
    let { user: t, guildId: n, channelId: l, onBlock: E, onIgnore: v, onUnignore: I, location: b = 'ContextMenu' } = e,
        { id: T } = t,
        S = (0, i.e7)(
            [_.default],
            () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === T;
            },
            [T]
        ),
        { isIgnored: y, isBlocked: A } = (0, i.cj)(
            [f.Z],
            () => ({
                isIgnored: f.Z.isIgnored(T),
                isBlocked: f.Z.isBlocked(T)
            }),
            [T]
        ),
        N = (0, c.Do)({ location: 'use-block-user-item-web' }),
        C = N ? [a.z.IGNORE_USER_NEW_BADGE] : [],
        [R, O] = (0, u.US)(C),
        D = R === a.z.IGNORE_USER_NEW_BADGE;
    return !N || S || A
        ? null
        : (0, r.jsx)(s.MenuItem, {
              id: 'ignore',
              color: 'default',
              label: y
                  ? h.intl.string(h.t['8wXU9P'])
                  : (0, r.jsxs)('div', {
                        className: m.label,
                        children: [h.intl.string(h.t.ytCpKi), D ? (0, r.jsx)(g, {}) : null]
                    }),
              action: y
                  ? () => {
                        null == I || I(), o.Z.unignoreUser(T, null != b ? b : 'use-ignore-user-item-web', null != l ? l : void 0);
                    }
                  : () => {
                        D && O(p.L.TAKE_ACTION),
                            (0, s.openModal)((e) =>
                                (0, r.jsx)(d.Z, {
                                    ...e,
                                    guildId: n,
                                    channelId: l,
                                    user: t,
                                    onIgnore: v,
                                    onBlock: E,
                                    location: b
                                })
                            );
                    }
          });
}
