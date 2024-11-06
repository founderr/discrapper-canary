var i = t(200651),
    r = t(192379),
    l = t(512722),
    u = t.n(l),
    a = t(442837),
    o = t(481060),
    d = t(10718),
    s = t(667204),
    c = t(826298),
    f = t(276022),
    _ = t(978983),
    E = t(430824),
    p = t(594174),
    v = t(981631),
    m = t(689079),
    h = t(388032),
    g = t(62352);
e.Z = (n) => {
    let e,
        { commandType: t, commandTargetId: l, channel: C, guildId: A, onHeightUpdate: T, context: I } = n,
        N = (0, a.e7)([E.Z], () => E.Z.getGuild(null != A ? A : C.guild_id)),
        b = (0, a.e7)([p.default], () => p.default.getUser(l)),
        S = (0, f.Z)({
            user: b,
            guildId: null == N ? void 0 : N.id,
            context: I
        }),
        {
            commands: P,
            sectionDescriptors: y,
            loading: O
        } = d.wi({
            channel: C,
            filters: { commandTypes: [t] },
            options: { limit: m.lr },
            allowFetch: !0
        }),
        { sections: R } = r.useMemo(() => {
            let n = {};
            return (
                y.forEach((e) => {
                    n[e.id] = e;
                }),
                { sections: n }
            );
        }, [y]),
        Z = r.useRef(O.current);
    r.useEffect(() => {
        O.current !== Z.current && ((Z.current = O.current), null == T || T());
    }, [O, T]);
    let M = r.useCallback(
        (n) => {
            u()(null != C, 'menu item should not show if channel is null');
            let e = R[n.applicationId],
                t = null != e ? (0, c.ky)(e) : void 0;
            return (0, i.jsx)(
                o.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: C,
                                  section: e,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: n,
                            optionValues: {},
                            context: {
                                channel: C,
                                guild: N
                            },
                            commandTargetId: l
                        });
                    }
                },
                n.id
            );
        },
        [C, N, l, R]
    );
    if (
        (O.current
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
                  0 === P.length
                      ? (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: h.intl.string(h.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : P.map(M)),
              null != S &&
                  (e = (0, i.jsxs)(i.Fragment, {
                      children: [e, (0, i.jsx)(o.MenuSeparator, {}, 'separator'), S]
                  }))),
        !v.TPd.TEXTUAL.has(C.type))
    ) {
        if (null == S) return null;
        e = S;
    }
    return (0, i.jsx)(o.MenuItem, {
        id: 'apps',
        label: h.intl.string(h.t.PHjkRE),
        listClassName: g.list,
        children: e
    });
};
