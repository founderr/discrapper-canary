var i = t(200651),
    r = t(192379),
    l = t(512722),
    u = t.n(l),
    a = t(442837),
    o = t(481060),
    d = t(10718),
    c = t(667204),
    s = t(826298),
    f = t(276022),
    _ = t(978983),
    E = t(430824),
    p = t(594174),
    g = t(981631),
    h = t(689079),
    A = t(388032),
    m = t(418776);
e.Z = (n) => {
    let e,
        { commandType: t, commandTargetId: l, channel: M, guildId: I, onHeightUpdate: Z, context: T } = n,
        v = (0, a.e7)([E.Z], () => E.Z.getGuild(null != I ? I : M.guild_id)),
        b = (0, a.e7)([p.default], () => p.default.getUser(l)),
        C = (0, f.Z)({
            user: b,
            guildId: null == v ? void 0 : v.id,
            context: T
        }),
        {
            commands: S,
            sectionDescriptors: x,
            loading: N
        } = d.wi({
            channel: M,
            filters: { commandTypes: [t] },
            options: { limit: h.lr },
            allowFetch: !0
        }),
        { sections: y } = r.useMemo(() => {
            let n = {};
            return (
                x.forEach((e) => {
                    n[e.id] = e;
                }),
                { sections: n }
            );
        }, [x]),
        O = r.useRef(N.current);
    r.useEffect(() => {
        N.current !== O.current && ((O.current = N.current), null == Z || Z());
    }, [N, Z]);
    let P = r.useCallback(
        (n) => {
            u()(null != M, 'menu item should not show if channel is null');
            let e = y[n.applicationId],
                t = null != e ? (0, s.ky)(e) : void 0;
            return (0, i.jsx)(
                o.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: M,
                                  section: e,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, c.Z)({
                            command: n,
                            optionValues: {},
                            context: {
                                channel: M,
                                guild: v
                            },
                            commandTargetId: l
                        });
                    }
                },
                n.id
            );
        },
        [M, v, l, y]
    );
    if (
        (N.current
            ? (e = (0, i.jsx)(
                  o.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(_.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((e =
                  0 === S.length
                      ? (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: A.intl.string(A.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : S.map(P)),
              null != C &&
                  (e = (0, i.jsxs)(i.Fragment, {
                      children: [e, (0, i.jsx)(o.MenuSeparator, {}, 'separator'), C]
                  }))),
        !g.TPd.TEXTUAL.has(M.type))
    ) {
        if (null == C) return null;
        e = C;
    }
    return (0, i.jsx)(o.MenuItem, {
        id: 'apps',
        label: A.intl.string(A.t.PHjkRE),
        listClassName: m.list,
        children: e
    });
};
