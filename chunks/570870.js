var i = t(200651),
    r = t(192379),
    o = t(512722),
    a = t.n(o),
    u = t(442837),
    s = t(481060),
    l = t(10718),
    d = t(667204),
    E = t(826298),
    c = t(276022),
    _ = t(978983),
    I = t(430824),
    T = t(594174),
    N = t(981631),
    f = t(689079),
    S = t(689938),
    p = t(62352);
n.Z = (e) => {
    let n,
        { commandType: t, commandTargetId: o, channel: A, guildId: O, onHeightUpdate: C, context: h } = e,
        R = (0, u.e7)([I.Z], () => I.Z.getGuild(null != O ? O : A.guild_id)),
        v = (0, u.e7)([T.default], () => T.default.getUser(o)),
        m = (0, c.Z)({
            user: v,
            guildId: null == R ? void 0 : R.id,
            channel: A,
            context: h
        }),
        {
            commands: M,
            sectionDescriptors: Z,
            loading: G
        } = l.wi({
            channel: A,
            filters: { commandTypes: [t] },
            options: { limit: f.lr },
            allowFetch: !0
        }),
        { sections: g } = r.useMemo(() => {
            let e = {};
            return (
                Z.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [Z]),
        P = r.useRef(G.current);
    r.useEffect(() => {
        G.current !== P.current && ((P.current = G.current), null == C || C());
    }, [G, C]);
    let y = r.useCallback(
        (e) => {
            a()(null != A, 'menu item should not show if channel is null');
            let n = g[e.applicationId],
                t = null != n ? (0, E.ky)(n) : void 0;
            return (0, i.jsx)(
                s.MenuItem,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: A,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, d.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: A,
                                guild: R
                            },
                            commandTargetId: o
                        });
                    }
                },
                e.id
            );
        },
        [A, R, o, g]
    );
    if (
        (G.current
            ? (n = (0, i.jsx)(
                  s.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(_.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === M.length
                      ? (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : M.map(y)),
              null != m &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(s.MenuSeparator, {}, 'separator'), m]
                  }))),
        !N.TPd.TEXTUAL.has(A.type))
    ) {
        if (null == m) return null;
        n = m;
    }
    return (0, i.jsx)(s.MenuItem, {
        id: 'apps',
        label: S.Z.Messages.APPS,
        listClassName: p.list,
        children: n
    });
};
