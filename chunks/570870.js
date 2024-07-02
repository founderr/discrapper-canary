var t = s(735250), l = s(470079), i = s(512722), a = s.n(i), r = s(442837), o = s(481060), d = s(10718), u = s(667204), c = s(826298), E = s(17165), g = s(276022), m = s(430824), M = s(594174), f = s(689079), _ = s(689938), N = s(768075);
n.Z = e => {
    let n, {
            commandType: s,
            commandTargetId: i,
            channel: h,
            guildId: I,
            onHeightUpdate: Z,
            context: A
        } = e, p = (0, r.e7)([m.Z], () => m.Z.getGuild(null != I ? I : h.guild_id)), S = (0, r.e7)([M.default], () => M.default.getUser(i)), v = (0, g.Z)({
            user: S,
            guildId: null == p ? void 0 : p.id,
            channel: h,
            context: A
        }), {
            commands: C,
            sectionDescriptors: T,
            loading: O
        } = d.wi(h, { commandType: s }, { limit: f.lr }), {sections: P} = l.useMemo(() => {
            let e = {};
            return T.forEach(n => {
                e[n.id] = n;
            }), { sections: e };
        }, [T]), x = l.useRef(O.current);
    l.useEffect(() => {
        O.current !== x.current && (x.current = O.current, null == Z || Z());
    }, [
        O,
        Z
    ]);
    let D = l.useCallback(e => {
        a()(null != h, 'menu item should not show if channel is null');
        let n = P[e.applicationId], s = null != n ? (0, c.ky)(n) : void 0;
        return (0, t.jsx)(o.MenuItem, {
            id: e.id,
            label: e.displayName,
            showIconFirst: !0,
            icon: () => null != s ? (0, t.jsx)(s, {
                channel: h,
                section: n,
                width: 18,
                height: 18,
                selectable: !1
            }) : null,
            action: () => {
                (0, u.Z)({
                    command: e,
                    optionValues: {},
                    context: {
                        channel: h,
                        guild: p
                    },
                    commandTargetId: i
                });
            }
        }, e.id);
    }, [
        h,
        p,
        i,
        P
    ]);
    return O.current ? n = (0, t.jsx)(o.MenuItem, {
        id: 'menu-commands-placeholder',
        render: () => (0, t.jsx)(E.Z, {}),
        disabled: !0
    }, 'menu-commands-placeholder') : (n = 0 === C.length ? (0, t.jsx)(o.MenuItem, {
        id: 'menu-commands-empty',
        label: _.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
        disabled: !0
    }, 'menu-commands-empty') : C.map(D), null != v && (n = (0, t.jsxs)(t.Fragment, {
        children: [
            n,
            (0, t.jsx)(o.MenuSeparator, {}, 'separator'),
            v
        ]
    }))), (0, t.jsx)(o.MenuItem, {
        id: 'apps',
        label: _.Z.Messages.APPS,
        listClassName: N.list,
        children: n
    });
};
