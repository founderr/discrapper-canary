n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(481060),
    u = n(410575),
    c = n(933557),
    d = n(471445),
    h = n(318374),
    f = n(46145),
    p = n(814443),
    m = n(592125),
    v = n(430824),
    g = n(496675),
    E = n(699516),
    C = n(594174),
    x = n(979651),
    Z = n(823379),
    _ = n(981631),
    S = n(388032),
    I = n(693215);
function N(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        l = (0, d.KS)(t),
        o = t.id === (null == n ? void 0 : n.id),
        s = o ? a.tokens.colors.TEXT_POSITIVE : a.tokens.colors.INTERACTIVE_NORMAL;
    return (0, i.jsxs)('div', {
        className: I.channelNameContainer,
        children: [
            null != l
                ? (0, i.jsx)(l, {
                      color: s,
                      size: 'xs'
                  })
                : void 0,
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/semibold',
                className: r()(I.label, I.channelName),
                color: o ? 'text-positive' : 'text-normal',
                children: (0, c.F6)(t, C.default, E.Z)
            })
        ]
    });
}
function b(e) {
    let { channel: t, currentVoiceChannel: n } = e,
        l = t.getGuildId(),
        o = (0, s.e7)([v.Z], () => v.Z.getGuild(l), [l]),
        r = t.id === (null == n ? void 0 : n.id);
    return null == o
        ? null
        : (0, i.jsx)('div', {
              className: I.channelMenuSubContainer,
              children: (0, i.jsx)(a.Text, {
                  variant: 'text-xs/normal',
                  color: r ? 'text-positive' : void 0,
                  children: o.name
              })
          });
}
function O(e) {
    let { channel: t } = e,
        n = (0, s.Wu)(
            [x.Z, C.default, p.Z],
            () =>
                Object.values(x.Z.getVoiceStatesForChannel(t.id))
                    .map((e) => C.default.getUser(e.userId))
                    .filter(Z.lm)
                    .sort((e, t) => {
                        var n, i, l, o;
                        return (null !== (l = null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== l ? l : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
                    }),
            [t.id]
        ),
        l = t.getGuildId();
    return null == l
        ? null
        : (0, i.jsx)(h.Z, {
              users: n,
              guildId: l,
              maxUsers: 3,
              size: a.AvatarSizes.SIZE_20,
              overflowCountClassName: I.overflowCount,
              overflowCountVariant: 'text-xxs/semibold',
              disableUserPopout: !0
          });
}
function y(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
        r = (0, s.Wu)([E.Z, p.Z], () =>
            E.Z.getFriendIDs().sort((e, t) => {
                var n, i, l, o;
                return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (l = null === (n = p.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== l ? l : 0) - (null !== (o = null === (i = p.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0);
            })
        ),
        c = (0, s.Wu)(
            [C.default],
            () =>
                r.reduce((e, t) => {
                    let n = C.default.getUser(t);
                    return null != n && e.push(n), e;
                }, []),
            [r]
        ),
        d = (0, s.Wu)(
            [f.Z, x.Z, m.Z, g.Z],
            () => {
                let e = new Set(
                        f.Z.getChannelHistory().reduce((e, t) => {
                            let n = m.Z.getChannel(t);
                            return null != n && g.Z.can(_.Plq.CONNECT, n) && e.length < 5 && e.push(t), e;
                        }, [])
                    ),
                    t = c
                        .map((e) => x.Z.getDiscoverableVoiceStateForUser(e.id))
                        .reduce((t, n) => {
                            let i = null == n ? void 0 : n.channelId;
                            if (null == i) return t;
                            let l = m.Z.getChannel(i);
                            return null != l && g.Z.can(_.Plq.CONNECT, l) && !e.has(i) && t.size < 3 && t.add(i), t;
                        }, new Set());
                return [...Array.from(e), ...t].map((e) => m.Z.getChannel(e)).filter(Z.lm);
            },
            [c]
        ),
        h = l.useCallback(
            (e) => {
                o(e), n();
            },
            [o, n]
        );
    return (0, i.jsx)(u.Z, {
        section: _.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(a.Menu, {
            onSelect: n,
            navId: 'manage-streams',
            onClose: n,
            'aria-label': S.intl.string(S.t['+9QSnp']),
            children: (0, i.jsx)(a.MenuGroup, {
                children: d.map((e) =>
                    (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsx)(N, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            subtext: (0, i.jsx)(b, {
                                channel: e,
                                currentVoiceChannel: t
                            }),
                            icon: (0, i.jsx)('div', {
                                className: I.icon,
                                children: (0, i.jsx)(O, {
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
