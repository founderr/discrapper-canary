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
    g = n(120584);
let A = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    S = { className: l()('mention', g.mention) };
function M(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.Text, {
            ...A,
            color: 'header-primary',
            children: e
        })
    });
}
t.Z = a.memo(function (e) {
    var t, n, s, l, O, x;
    let R,
        { channel: v, messageId: Z, interactionData: L } = e,
        { analyticsLocations: P } = (0, d.ZP)(),
        { onCopy: b, copyRef: D } = (0, u.Z)(v, null == L ? void 0 : null === (t = L.application_command) || void 0 === t ? void 0 : t.id),
        j = (0, r.e7)([T.Z], () => T.Z.getGuild(v.guild_id), [v.guild_id]);
    if (
        (a.useEffect(() => {
            (null == L || (L.type === c.yU.CHAT && void 0 === L.application_command)) && _.OG(v.id, Z);
        }, [v.id, Z, L]),
        null == L)
    )
        R = (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
            className: g.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (l = null === (n = L.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== l ? l : []).map((e) => [e.name, e]));
        for (let n of null !== (O = L.options) && void 0 !== O ? O : [])
            e = e.concat(
                (function e(t) {
                    var n, s, l, r, d, u, _;
                    let g,
                        { option: O, channel: x, guild: R, messageId: v, parentOptionKey: Z, commandOptionSpec: L, sourceAnalyticsLocations: P } = t,
                        b = null != Z ? Z + ' ' + O.name : O.name;
                    if (O.type === c.jw.SUB_COMMAND || O.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(o.Text, {
                                                ...A,
                                                children: null !== (s = null == L ? void 0 : L.name_localized) && void 0 !== s ? s : O.name
                                            })
                                        ]
                                    },
                                    b
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (l = null == L ? void 0 : L.options) && void 0 !== l ? l : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (r = O.options) && void 0 !== r ? r : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: x,
                                    guild: R,
                                    messageId: v,
                                    parentOptionKey: b,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: P
                                })
                            );
                        return t;
                    }
                    let D = O.value;
                    if (null != O.value)
                        switch (O.type) {
                            case c.jw.USER: {
                                let e = O.value.toString(),
                                    t = N.default.getUser(e);
                                if (null != t) {
                                    let e = (0, h.ij)(t, x);
                                    g = (0, i.jsxs)(E.Z, {
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
                                    (g = (0, i.jsxs)(E.Z, {
                                        ...S,
                                        children: [p.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = O.value.toString(),
                                    t = null != R ? T.Z.getRole(R.id, e) : void 0;
                                null != t &&
                                    (g = (0, i.jsxs)(E.Z, {
                                        ...S,
                                        children: [p.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = O.value.toString(),
                                    t = null != R ? T.Z.getRole(R.id, e) : void 0;
                                if (null != t)
                                    g = (0, i.jsxs)(E.Z, {
                                        children: [p.ME, t.name]
                                    });
                                else {
                                    let t = N.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, h.ij)(t, x);
                                        g = (0, i.jsxs)(E.Z, {
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
                                g = M(f.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
                                break;
                            default: {
                                let e = null == L ? void 0 : null === (d = L.choices) || void 0 === d ? void 0 : d.find((e) => e.value === O.value);
                                null != e && (D = null !== (u = e.name_localized) && void 0 !== u ? u : e.name);
                            }
                        }
                    return (
                        null == g && (g = M(null == D ? void 0 : D.toString())),
                        [
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...A,
                                            children: [' ', null !== (_ = null == L ? void 0 : L.name_localized) && void 0 !== _ ? _ : O.name, ': ']
                                        }),
                                        g
                                    ]
                                },
                                b
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: v,
                    guild: j,
                    messageId: Z,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: P
                })
            );
        R = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, {
                    ...A,
                    children: ['/', null !== (x = null === (s = L.application_command) || void 0 === s ? void 0 : s.name_localized) && void 0 !== x ? x : L.name]
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
            a.startsWith('/') && a.endsWith('\n') && b(e, L);
        },
        children: [
            (0, i.jsx)('div', {
                className: g.tooltip,
                ref: D,
                children: R
            }),
            (0, i.jsx)('div', { className: g.tooltipPointer })
        ]
    });
});
