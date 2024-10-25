n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    _ = n(603721),
    E = n(124072),
    I = n(171368),
    m = n(592125),
    f = n(430824),
    T = n(594174),
    h = n(739566),
    N = n(981631),
    p = n(665692),
    C = n(689938),
    g = n(120584);
let S = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    A = { className: r()('mention', g.mention) };
function x(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.Text, {
            ...S,
            color: 'header-primary',
            children: e
        })
    });
}
t.Z = a.memo(function (e) {
    var t, n, s, r, R, v;
    let O,
        { channel: M, messageId: L, interactionData: Z } = e,
        { analyticsLocations: b } = (0, u.ZP)(),
        { onCopy: P, copyRef: D } = (0, d.Z)(M, null == Z ? void 0 : null === (t = Z.application_command) || void 0 === t ? void 0 : t.id),
        j = (0, l.e7)([f.Z], () => f.Z.getGuild(M.guild_id), [M.guild_id]);
    if (
        (a.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && _.OG(M.id, L);
        }, [M.id, L, Z]),
        null == Z)
    )
        O = (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
            className: g.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (r = null === (n = Z.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== r ? r : []).map((e) => [e.name, e]));
        for (let n of null !== (R = Z.options) && void 0 !== R ? R : [])
            e = e.concat(
                (function e(t) {
                    var n, s, r, l, u, d, _;
                    let g,
                        { option: R, channel: v, guild: O, messageId: M, parentOptionKey: L, commandOptionSpec: Z, sourceAnalyticsLocations: b } = t,
                        P = null != L ? L + ' ' + R.name : R.name;
                    if (R.type === c.jw.SUB_COMMAND || R.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(o.Text, {
                                                ...S,
                                                children: null !== (s = null == Z ? void 0 : Z.name_localized) && void 0 !== s ? s : R.name
                                            })
                                        ]
                                    },
                                    P
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (r = null == Z ? void 0 : Z.options) && void 0 !== r ? r : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (l = R.options) && void 0 !== l ? l : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: v,
                                    guild: O,
                                    messageId: M,
                                    parentOptionKey: P,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: b
                                })
                            );
                        return t;
                    }
                    let D = R.value;
                    if (null != R.value)
                        switch (R.type) {
                            case c.jw.USER: {
                                let e = R.value.toString(),
                                    t = T.default.getUser(e);
                                if (null != t) {
                                    let e = (0, h.ij)(t, v);
                                    g = (0, i.jsxs)(E.Z, {
                                        ...A,
                                        onClick: () =>
                                            (0, I.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: v.guild_id,
                                                channelId: v.id,
                                                messageId: M,
                                                sourceAnalyticsLocations: b,
                                                analyticsLocation: { section: N.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                            }),
                                        children: [p.ME, e.nick]
                                    });
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = R.value.toString(),
                                    t = m.Z.getChannel(e);
                                null != t &&
                                    (g = (0, i.jsxs)(E.Z, {
                                        ...A,
                                        children: [p.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = R.value.toString(),
                                    t = null != O ? f.Z.getRole(O.id, e) : void 0;
                                null != t &&
                                    (g = (0, i.jsxs)(E.Z, {
                                        ...A,
                                        children: [p.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = R.value.toString(),
                                    t = null != O ? f.Z.getRole(O.id, e) : void 0;
                                if (null != t)
                                    g = (0, i.jsxs)(E.Z, {
                                        children: [p.ME, t.name]
                                    });
                                else {
                                    let t = T.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, h.ij)(t, v);
                                        g = (0, i.jsxs)(E.Z, {
                                            ...A,
                                            onClick: () =>
                                                (0, I.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: v.guild_id,
                                                    analyticsLocation: { section: N.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [p.ME, e.nick]
                                        });
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                g = x(C.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
                                break;
                            default: {
                                let e = null == Z ? void 0 : null === (u = Z.choices) || void 0 === u ? void 0 : u.find((e) => e.value === R.value);
                                null != e && (D = null !== (d = e.name_localized) && void 0 !== d ? d : e.name);
                            }
                        }
                    return (
                        null == g && (g = x(null == D ? void 0 : D.toString())),
                        [
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...S,
                                            children: [' ', null !== (_ = null == Z ? void 0 : Z.name_localized) && void 0 !== _ ? _ : R.name, ': ']
                                        }),
                                        g
                                    ]
                                },
                                P
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: M,
                    guild: j,
                    messageId: L,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: b
                })
            );
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, {
                    ...S,
                    children: ['/', null !== (v = null === (s = Z.application_command) || void 0 === s ? void 0 : s.name_localized) && void 0 !== v ? v : Z.name]
                }),
                e
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: g.container,
        onCopy: (e) => {
            var t, n, i;
            let a = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
            a.startsWith('/') && a.endsWith('\n') && P(e, Z);
        },
        children: [
            (0, i.jsx)('div', {
                className: g.tooltip,
                ref: D,
                children: O
            }),
            (0, i.jsx)('div', { className: g.tooltipPointer })
        ]
    });
});
