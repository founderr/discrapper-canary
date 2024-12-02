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
    h = e(689079),
    N = e(388032),
    A = e(148562);
t.Z = (n) => {
    let t,
        { commandType: e, commandTargetId: u, channel: C, guildId: T, onHeightUpdate: g, context: I } = n,
        v = (0, a.e7)([_.Z], () => _.Z.getGuild(null != T ? T : C.guild_id)),
        O = (0, a.e7)([p.default], () => p.default.getUser(u)),
        R = (0, f.Z)({
            user: O,
            guildId: null == v ? void 0 : v.id,
            context: I
        }),
        {
            commands: S,
            sectionDescriptors: P,
            loading: Z
        } = d.wi({
            channel: C,
            filters: { commandTypes: [e] },
            options: { limit: h.lr },
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
                  0 === S.length
                      ? (0, r.jsx)(
                            o.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: N.intl.string(N.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : S.map(y)),
              null != R &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(o.MenuSeparator, {}, 'separator'), R]
                  }))),
        !m.TPd.TEXTUAL.has(C.type))
    ) {
        if (null == R) return null;
        t = R;
    }
    return (0, r.jsx)(o.MenuItem, {
        id: 'apps',
        label: N.intl.string(N.t.PHjkRE),
        listClassName: A.list,
        children: t
    });
};
