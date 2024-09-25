var i = t(735250),
    r = t(470079),
    a = t(512722),
    s = t.n(a),
    o = t(442837),
    d = t(481060),
    l = t(10718),
    u = t(667204),
    c = t(826298),
    I = t(276022),
    E = t(978983),
    T = t(430824),
    _ = t(594174),
    N = t(981631),
    p = t(689079),
    S = t(689938),
    Z = t(62352);
n.Z = (e) => {
    let n,
        { commandType: t, commandTargetId: a, channel: O, guildId: A, onHeightUpdate: f, context: h } = e,
        m = (0, o.e7)([T.Z], () => T.Z.getGuild(null != A ? A : O.guild_id)),
        M = (0, o.e7)([_.default], () => _.default.getUser(a)),
        g = (0, I.Z)({
            user: M,
            guildId: null == m ? void 0 : m.id,
            channel: O,
            context: h
        }),
        { commands: G, sectionDescriptors: v, loading: R } = l.wi(O, { commandTypes: [t] }, { limit: p.lr }),
        { sections: C } = r.useMemo(() => {
            let e = {};
            return (
                v.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [v]),
        y = r.useRef(R.current);
    r.useEffect(() => {
        R.current !== y.current && ((y.current = R.current), null == f || f());
    }, [R, f]);
    let x = r.useCallback(
        (e) => {
            s()(null != O, 'menu item should not show if channel is null');
            let n = C[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                d.MenuItem,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: O,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, u.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: O,
                                guild: m
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [O, m, a, C]
    );
    if (
        (R.current
            ? (n = (0, i.jsx)(
                  d.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === G.length
                      ? (0, i.jsx)(
                            d.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : G.map(x)),
              null != g &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(d.MenuSeparator, {}, 'separator'), g]
                  }))),
        !N.TPd.TEXTUAL.has(O.type))
    ) {
        if (null == g) return null;
        n = g;
    }
    return (0, i.jsx)(d.MenuItem, {
        id: 'apps',
        label: S.Z.Messages.APPS,
        listClassName: Z.list,
        children: n
    });
};
