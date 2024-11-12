var i = e(200651),
    r = e(192379),
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
    A = e(388032),
    h = e(62352);
t.Z = (n) => {
    let t,
        { commandType: e, commandTargetId: u, channel: C, guildId: T, onHeightUpdate: I, context: g } = n,
        v = (0, a.e7)([_.Z], () => _.Z.getGuild(null != T ? T : C.guild_id)),
        O = (0, a.e7)([p.default], () => p.default.getUser(u)),
        R = (0, f.Z)({
            user: O,
            guildId: null == v ? void 0 : v.id,
            context: g
        }),
        {
            commands: S,
            sectionDescriptors: P,
            loading: Z
        } = d.wi({
            channel: C,
            filters: { commandTypes: [e] },
            options: { limit: N.lr },
            allowFetch: !0
        }),
        { sections: M } = r.useMemo(() => {
            let n = {};
            return (
                P.forEach((t) => {
                    n[t.id] = t;
                }),
                { sections: n }
            );
        }, [P]),
        b = r.useRef(Z.current);
    r.useEffect(() => {
        Z.current !== b.current && ((b.current = Z.current), null == I || I());
    }, [Z, I]);
    let y = r.useCallback(
        (n) => {
            l()(null != C, 'menu item should not show if channel is null');
            let t = M[n.applicationId],
                e = null != t ? (0, s.ky)(t) : void 0;
            return (0, i.jsx)(
                o.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != e
                            ? (0, i.jsx)(e, {
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
            ? (t = (0, i.jsx)(
                  o.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
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
                      : S.map(y)),
              null != R &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [t, (0, i.jsx)(o.MenuSeparator, {}, 'separator'), R]
                  }))),
        !m.TPd.TEXTUAL.has(C.type))
    ) {
        if (null == R) return null;
        t = R;
    }
    return (0, i.jsx)(o.MenuItem, {
        id: 'apps',
        label: A.intl.string(A.t.PHjkRE),
        listClassName: h.list,
        children: t
    });
};
