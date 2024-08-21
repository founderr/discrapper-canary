var r = n(735250),
    i = n(470079),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    d = n(10718),
    u = n(667204),
    c = n(826298),
    I = n(276022),
    E = n(978983),
    f = n(430824),
    p = n(594174),
    T = n(981631),
    N = n(689079),
    h = n(689938),
    _ = n(359522);
t.Z = (e) => {
    let t,
        { commandType: n, commandTargetId: a, channel: S, guildId: A, onHeightUpdate: g, context: m } = e,
        Z = (0, s.e7)([f.Z], () => f.Z.getGuild(null != A ? A : S.guild_id)),
        O = (0, s.e7)([p.default], () => p.default.getUser(a)),
        y = (0, I.Z)({
            user: O,
            guildId: null == Z ? void 0 : Z.id,
            channel: S,
            context: m
        }),
        { commands: M, sectionDescriptors: v, loading: R } = d.wi(S, { commandTypes: [n] }, { limit: N.lr }),
        { sections: G } = i.useMemo(() => {
            let e = {};
            return (
                v.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [v]),
        b = i.useRef(R.current);
    i.useEffect(() => {
        R.current !== b.current && ((b.current = R.current), null == g || g());
    }, [R, g]);
    let C = i.useCallback(
        (e) => {
            o()(null != S, 'menu item should not show if channel is null');
            let t = G[e.applicationId],
                n = null != t ? (0, c.ky)(t) : void 0;
            return (0, r.jsx)(
                l.MenuItem,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
                                  channel: S,
                                  section: t,
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
                                channel: S,
                                guild: Z
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [S, Z, a, G]
    );
    if (
        (R.current
            ? (t = (0, r.jsx)(
                  l.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === M.length
                      ? (0, r.jsx)(
                            l.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: h.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : M.map(C)),
              null != y &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(l.MenuSeparator, {}, 'separator'), y]
                  }))),
        !T.TPd.TEXTUAL.has(S.type))
    ) {
        if (null == y) return null;
        t = y;
    }
    return (0, r.jsx)(l.MenuItem, {
        id: 'apps',
        label: h.Z.Messages.APPS,
        listClassName: _.list,
        children: t
    });
};
