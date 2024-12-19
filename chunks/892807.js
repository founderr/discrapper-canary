n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(410575),
    u = n(933557),
    d = n(471445),
    h = n(318374),
    f = n(46145),
    m = n(814443),
    v = n(592125),
    p = n(430824),
    x = n(496675),
    g = n(699516),
    C = n(594174),
    Z = n(979651),
    I = n(823379),
    _ = n(981631),
    j = n(388032),
    E = n(693215);
function b(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = (0, d.KS)(t),
        l = t.id === (null == n ? void 0 : n.id),
        a = l ? s.tokens.colors.TEXT_POSITIVE : s.tokens.colors.INTERACTIVE_NORMAL;
    return (0, i.jsxs)('div', {
        className: E.channelNameContainer,
        children: [
            null != r
                ? (0, i.jsx)(r, {
                      color: a,
                      size: 'xs'
                  })
                : void 0,
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                className: o()(E.label, E.channelName),
                color: l ? 'text-positive' : 'text-normal',
                children: (0, u.F6)(t, C.default, g.Z)
            })
        ]
    });
}
function w(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        r = t.getGuildId(),
        l = (0, a.e7)([p.Z], () => p.Z.getGuild(r), [r]),
        o = t.id === (null == n ? void 0 : n.id);
    return null == l
        ? null
        : (0, i.jsx)('div', {
              className: E.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/normal',
                  color: o ? 'text-positive' : void 0,
                  children: l.name
              })
          });
}
function N(e) {
    let { channel: t } = e,
        n = (0, a.Wu)(
            [Z.Z, C.default, m.Z],
            () =>
                Object.values(Z.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => C.default.getUser(e.userId))
                    .filter(I.lm)
                    .sort((e, t) => {
                        var n, i, r, l;
                        return (null !== (r = null === (n = m.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (l = null === (i = m.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== l ? l : 0);
                    }),
            [t.id]
        ),
        r = t.getGuildId();
    return null == r
        ? null
        : (0, i.jsx)(h.Z, {
              users: n,
              guildId: r,
              maxUsers: 3,
              size: s.AvatarSizes.SIZE_20,
              overflowCountClassName: E.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function k(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: l } = e,
        o = (0, a.Wu)([g.Z, m.Z], () =>
            g.Z.getFriendIDs().sort((e, t) => {
                var n, i, r, l;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = m.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (l = null === (i = m.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== l ? l : 0);
            })
        ),
        u = (0, a.Wu)(
            [C.default],
            () =>
                o.reduce((e, t) => {
                    let n = C.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [o]
        ),
        d = (0, a.Wu)(
            [f.Z, Z.Z, v.Z, x.Z],
            () => {
                let e = new Set(
                        f.Z.getChannelHistory().reduce((e, t) => {
                            let n = v.Z.getChannel(t);
                            return null != n && x.Z.can(_.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = u
                        .map((e) => Z.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let r = v.Z.getChannel(i);
                            return null != r && x.Z.can(_.Plq.CONNECT, r) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => v.Z.getChannel(e)).filter(I.lm);
            },
            [u]
        ),
        h = r.useCallback(
            (e) => {
                l(e), n();
            },
            [l, n]
        );
    return (0, i.jsx)(c.Z, {
        section: _.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(s.Menu, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': j.intl.string(j.t['+9QSnp']),
            children: (0, i.jsx)(s.MenuGroup, {
                children: d.map((e) =>
                    (0, i.jsx)(
                        s.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsx)(b, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(w, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: E.icon,
                                children: (0, i.jsx)(N, {
                                    channel: e,
                                    currentVoiceChannel: t
                                })
                            }),
                            subtextLineClamp: 1,
                            action: () => h(e)
                        },
                        e.id
                    )
                )
            })
        })
    });
}
