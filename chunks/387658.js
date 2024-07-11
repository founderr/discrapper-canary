t.d(n, {
    Z: function () {
        return S;
    }
}), t(47120);
var i = t(735250), l = t(470079), r = t(140835), a = t(246521), s = t(481060), o = t(911969), c = t(555573), u = t(10718), d = t(895924), m = t(585483), p = t(499254), _ = t(541099), E = t(827498), h = t(496158), A = t(676161), N = t(660090), f = t(783097), C = t(870205), I = t(981631), v = t(689079), P = t(689938), x = t(763963);
function T(e) {
    var n, t;
    let {
            channel: a,
            command: o,
            section: u,
            sectionName: h
        } = e, A = l.useCallback(() => {
            let e = _.Z.entrypoint();
            p.y(E.ti.COMMAND), c.Po({
                channelId: a.id,
                command: o,
                section: u,
                location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                sectionName: h,
                source: e,
                commandOrigin: d.bB.APPLICATION_LAUNCHER
            }), m.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
        }, [
            a.id,
            o,
            u,
            h
        ]), N = (null !== (t = null === (n = o.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, f = l.useMemo(() => (0, i.jsxs)('div', {
            className: x.commandTextContainer,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: o.displayName
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    lineClamp: 1,
                    children: o.displayDescription
                })
            ]
        }), [
            o.displayDescription,
            o.displayName
        ]);
    return N ? (0, i.jsxs)(s.Clickable, {
        className: x.command,
        onClick: A,
        children: [
            f,
            (0, i.jsx)(r.F, {})
        ]
    }) : (0, i.jsxs)('div', {
        className: x.command,
        children: [
            (0, i.jsx)(s.Clickable, {
                onClick: A,
                children: f
            }),
            (0, i.jsx)(g, {
                channel: a,
                command: o,
                sectionName: h
            })
        ]
    });
}
function g(e) {
    let {
            channel: n,
            command: t,
            sectionName: r
        } = e, o = (0, h.D)(n), [c, u] = l.useState(!1), d = l.useCallback(async e => {
            e.stopPropagation();
            try {
                await (0, f.Y$)({
                    command: t,
                    optionValues: {},
                    context: o,
                    sectionName: r
                }), p.y(E.ti.COMMAND);
            } finally {
                u(!1);
            }
        }, [
            t,
            o,
            r
        ]);
    return (0, i.jsxs)(s.Button, {
        type: 'submit',
        onClick: d,
        disabled: c,
        size: s.ButtonSizes.ICON,
        color: s.Button.Colors.PRIMARY,
        className: x.commandSentCTAButton,
        innerClassName: x.commandSentCTAButtonInner,
        'aria-label': P.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({ commandName: t.name }),
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'redesign-button-primary-text',
                children: P.Z.Messages.SEND
            }),
            (0, i.jsx)(a.U, {
                size: 'xs',
                color: s.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
            })
        ]
    });
}
function R(e) {
    let {
        channel: n,
        commands: t,
        section: l,
        headerName: r,
        sectionName: a,
        children: o
    } = e;
    return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: x.commandListHeader,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-sm/semibold',
                        children: r
                    }),
                    o
                ]
            }),
            (0, i.jsx)('ul', {
                className: x.commandContainer,
                'aria-label': r,
                children: t.map(e => (0, i.jsx)(T, {
                    channel: n,
                    command: e,
                    section: l,
                    sectionName: a
                }, e.id))
            })
        ]
    });
}
function S(e) {
    var n;
    let {
            channel: t,
            application: r,
            sectionName: a
        } = e, {
            filterSection: s,
            commandsByActiveSection: c,
            sectionDescriptors: d
        } = u.wi(t, { commandType: o.yU.CHAT }, {
            placeholderCount: 0,
            limit: v.tn,
            includeFrecency: !0
        }), m = null !== (n = d.find(e => e.id === r.id)) && void 0 !== n ? n : null, {
            sortOrder: p,
            setSortOrder: _,
            commands: E,
            canSort: h
        } = (0, N.Z)({
            sectionId: r.id,
            commandsByActiveSection: c
        });
    l.useEffect(() => {
        s(r.id);
    }, [
        r.id,
        s
    ]);
    let f = (0, A.Z)({
        channel: t,
        commands: E,
        limit: 5
    });
    return (0, i.jsxs)('ul', {
        className: x.contentContainer,
        children: [
            (0, i.jsx)(R, {
                channel: t,
                section: m,
                commands: f,
                headerName: P.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
                sectionName: a
            }),
            (0, i.jsx)(R, {
                channel: t,
                section: m,
                commands: E,
                headerName: P.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
                sectionName: a,
                children: h && (0, i.jsx)(C.Z, {
                    sortOrder: p,
                    onSortOptionClick: _
                })
            })
        ]
    });
}
