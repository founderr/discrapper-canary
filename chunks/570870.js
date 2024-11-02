var i = e(200651),
    r = e(192379),
    o = e(512722),
    a = e.n(o),
    u = e(442837),
    l = e(481060),
    d = e(10718),
    s = e(667204),
    c = e(826298),
    E = e(276022),
    f = e(978983),
    I = e(430824),
    T = e(594174),
    p = e(981631),
    _ = e(689079),
    N = e(388032),
    A = e(62352);
n.Z = (t) => {
    let n,
        { commandType: e, commandTargetId: o, channel: S, guildId: h, onHeightUpdate: C, context: v } = t,
        m = (0, u.e7)([I.Z], () => I.Z.getGuild(null != h ? h : S.guild_id)),
        O = (0, u.e7)([T.default], () => T.default.getUser(o)),
        R = (0, E.Z)({
            user: O,
            guildId: null == m ? void 0 : m.id,
            channel: S,
            context: v
        }),
        {
            commands: y,
            sectionDescriptors: Z,
            loading: g
        } = d.wi({
            channel: S,
            filters: { commandTypes: [e] },
            options: { limit: _.lr },
            allowFetch: !0
        }),
        { sections: G } = r.useMemo(() => {
            let t = {};
            return (
                Z.forEach((n) => {
                    t[n.id] = n;
                }),
                { sections: t }
            );
        }, [Z]),
        P = r.useRef(g.current);
    r.useEffect(() => {
        g.current !== P.current && ((P.current = g.current), null == C || C());
    }, [g, C]);
    let M = r.useCallback(
        (t) => {
            a()(null != S, 'menu item should not show if channel is null');
            let n = G[t.applicationId],
                e = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                l.MenuItem,
                {
                    id: t.id,
                    label: t.displayName,
                    iconLeft: () =>
                        null != e
                            ? (0, i.jsx)(e, {
                                  channel: S,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: t,
                            optionValues: {},
                            context: {
                                channel: S,
                                guild: m
                            },
                            commandTargetId: o
                        });
                    }
                },
                t.id
            );
        },
        [S, m, o, G]
    );
    if (
        (g.current
            ? (n = (0, i.jsx)(
                  l.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(f.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === y.length
                      ? (0, i.jsx)(
                            l.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: N.intl.string(N.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : y.map(M)),
              null != R &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(l.MenuSeparator, {}, 'separator'), R]
                  }))),
        !p.TPd.TEXTUAL.has(S.type))
    ) {
        if (null == R) return null;
        n = R;
    }
    return (0, i.jsx)(l.MenuItem, {
        id: 'apps',
        label: N.intl.string(N.t.PHjkRE),
        listClassName: A.list,
        children: n
    });
};
