n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(911969),
    d = n(906732),
    u = n(778087),
    _ = n(603721),
    E = n(124072),
    I = n(171368),
    m = n(592125),
    T = n(430824),
    N = n(594174),
    h = n(739566),
    C = n(981631),
    p = n(665692),
    f = n(689938),
    A = n(120584);
let g = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    S = { className: l()('mention', A.mention) };
function M(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.Text, {
            ...g,
            color: 'header-primary',
            children: e
        })
    });
}
t.Z = a.memo(function (e) {
    var t, n, s, l, O, x;
    let R,
        { channel: v, messageId: L, interactionData: Z } = e,
        { analyticsLocations: P } = (0, d.ZP)(),
        { onCopy: D, copyRef: b } = (0, u.Z)(v, null == Z ? void 0 : null === (t = Z.application_command) || void 0 === t ? void 0 : t.id),
        j = (0, r.e7)([T.Z], () => T.Z.getGuild(v.guild_id), [v.guild_id]);
    if (
        (a.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && _.OG(v.id, L);
        }, [v.id, L, Z]),
        null == Z)
    )
        R = (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
            className: A.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (l = null === (n = Z.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== l ? l : []).map((e) => [e.name, e]));
        for (let n of null !== (O = Z.options) && void 0 !== O ? O : [])
            e = e.concat(
                (function e(t) {
                    var n, s, l, r, d, u, _;
                    let A,
                        { option: O, channel: x, guild: R, messageId: v, parentOptionKey: L, commandOptionSpec: Z, sourceAnalyticsLocations: P } = t,
                        D = null != L ? L + ' ' + O.name : O.name;
                    if (O.type === c.jw.SUB_COMMAND || O.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(o.Text, {
                                                ...g,
                                                children: null !== (s = null == Z ? void 0 : Z.name_localized) && void 0 !== s ? s : O.name
                                            })
                                        ]
                                    },
                                    D
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (l = null == Z ? void 0 : Z.options) && void 0 !== l ? l : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (r = O.options) && void 0 !== r ? r : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: x,
                                    guild: R,
                                    messageId: v,
                                    parentOptionKey: D,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: P
                                })
                            );
                        return t;
                    }
                    let b = O.value;
                    if (null != O.value)
                        switch (O.type) {
                            case c.jw.USER: {
                                let e = O.value.toString(),
                                    t = N.default.getUser(e);
                                if (null != t) {
                                    let e = (0, h.ij)(t, x);
                                    A = (0, i.jsxs)(E.Z, {
                                        ...S,
                                        onClick: () =>
                                            (0, I.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: x.guild_id,
                                                channelId: x.id,
                                                messageId: v,
                                                sourceAnalyticsLocations: P,
                                                analyticsLocation: { section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                            }),
                                        children: [p.ME, e.nick]
                                    });
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = O.value.toString(),
                                    t = m.Z.getChannel(e);
                                null != t &&
                                    (A = (0, i.jsxs)(E.Z, {
                                        ...S,
                                        children: [p.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = O.value.toString(),
                                    t = null != R ? T.Z.getRole(R.id, e) : void 0;
                                null != t &&
                                    (A = (0, i.jsxs)(E.Z, {
                                        ...S,
                                        children: [p.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = O.value.toString(),
                                    t = null != R ? T.Z.getRole(R.id, e) : void 0;
                                if (null != t)
                                    A = (0, i.jsxs)(E.Z, {
                                        children: [p.ME, t.name]
                                    });
                                else {
                                    let t = N.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, h.ij)(t, x);
                                        A = (0, i.jsxs)(E.Z, {
                                            ...S,
                                            onClick: () =>
                                                (0, I.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: x.guild_id,
                                                    analyticsLocation: { section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [p.ME, e.nick]
                                        });
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                A = M(f.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
                                break;
                            default: {
                                let e = null == Z ? void 0 : null === (d = Z.choices) || void 0 === d ? void 0 : d.find((e) => e.value === O.value);
                                null != e && (b = null !== (u = e.name_localized) && void 0 !== u ? u : e.name);
                            }
                        }
                    return (
                        null == A && (A = M(null == b ? void 0 : b.toString())),
                        [
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...g,
                                            children: [' ', null !== (_ = null == Z ? void 0 : Z.name_localized) && void 0 !== _ ? _ : O.name, ': ']
                                        }),
                                        A
                                    ]
                                },
                                D
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: v,
                    guild: j,
                    messageId: L,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: P
                })
            );
        R = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, {
                    ...g,
                    children: ['/', null !== (x = null === (s = Z.application_command) || void 0 === s ? void 0 : s.name_localized) && void 0 !== x ? x : Z.name]
                }),
                e
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: A.container,
        onCopy: (e) => {
            var t, n, i;
            let a = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
            a.startsWith('/') && a.endsWith('\n') && D(e, Z);
        },
        children: [
            (0, i.jsx)('div', {
                className: A.tooltip,
                ref: b,
                children: R
            }),
            (0, i.jsx)('div', { className: A.tooltipPointer })
        ]
    });
});
