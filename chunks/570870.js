var r = e(200651),
    i = e(192379),
    u = e(512722),
    l = e.n(u),
    a = e(442837),
    o = e(481060),
    d = e(10718),
    c = e(667204),
    s = e(826298),
    f = e(276022),
    E = e(978983),
    _ = e(430824),
    p = e(594174),
    m = e(981631),
    N = e(689079),
    h = e(388032),
    A = e(62352);
t.Z = (n) => {
    let t,
        { commandType: e, commandTargetId: u, channel: C, guildId: T, onHeightUpdate: g, context: I } = n,
        v = (0, a.e7)([_.Z], () => _.Z.getGuild(null != T ? T : C.guild_id)),
        R = (0, a.e7)([p.default], () => p.default.getUser(u)),
        S = (0, f.Z)({
            user: R,
            guildId: null == v ? void 0 : v.id,
            context: I
        }),
        {
            commands: O,
            sectionDescriptors: P,
            loading: Z
        } = d.wi({
            channel: C,
            filters: { commandTypes: [e] },
            options: { limit: N.lr },
            allowFetch: !0
        }),
        { sections: M } = i.useMemo(() => {
            let n = {};
            return (
                P.forEach((t) => {
                    n[t.id] = t;
                }),
                { sections: n }
            );
        }, [P]),
        b = i.useRef(Z.current);
    i.useEffect(() => {
        Z.current !== b.current && ((b.current = Z.current), null == g || g());
    }, [Z, g]);
    let y = i.useCallback(
        (n) => {
            l()(null != C, 'menu item should not show if channel is null');
            let t = M[n.applicationId],
                e = null != t ? (0, s.ky)(t) : void 0;
            return (0, r.jsx)(
                o.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != e
                            ? (0, r.jsx)(e, {
                                  channel: C,
                                  section: t,
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
                                channel: C,
                                guild: v
                            },
                            commandTargetId: u
                        });
                    }
                },
                n.id
            );
        },
        [C, v, u, M]
    );
    if (
        (Z.current
            ? (t = (0, r.jsx)(
                  o.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === O.length
                      ? (0, r.jsx)(
                            o.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: h.intl.string(h.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : O.map(y)),
              null != S &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(o.MenuSeparator, {}, 'separator'), S]
                  }))),
        !m.TPd.TEXTUAL.has(C.type))
    ) {
        if (null == S) return null;
        t = S;
    }
    return (0, r.jsx)(o.MenuItem, {
        id: 'apps',
        label: h.intl.string(h.t.PHjkRE),
        listClassName: A.list,
        children: t
    });
};
