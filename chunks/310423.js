n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    m = n(603721),
    h = n(124072),
    f = n(171368),
    p = n(592125),
    g = n(430824),
    _ = n(594174),
    C = n(739566),
    E = n(981631),
    I = n(665692),
    x = n(388032),
    v = n(120584);
let N = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    T = { className: a()('mention', v.mention) };
function S(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.Text, {
            ...N,
            color: 'header-primary',
            children: e
        })
    });
}
t.Z = r.memo(function (e) {
    var t, n, l, a, b, A;
    let j,
        { channel: Z, messageId: R, interactionData: P } = e,
        { analyticsLocations: y } = (0, u.ZP)(),
        { onCopy: L, copyRef: O } = (0, d.Z)(Z, null == P ? void 0 : null === (t = P.application_command) || void 0 === t ? void 0 : t.id),
        M = (0, o.e7)([g.Z], () => g.Z.getGuild(Z.guild_id), [Z.guild_id]);
    if (
        (r.useEffect(() => {
            (null == P || (P.type === c.yU.CHAT && void 0 === P.application_command)) && m.OG(Z.id, R);
        }, [Z.id, R, P]),
        null == P)
    )
        j = (0, i.jsx)(s.Spinner, {
            type: s.Spinner.Type.SPINNING_CIRCLE,
            className: v.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (a = null === (n = P.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== a ? a : []).map((e) => [e.name, e]));
        for (let n of null !== (b = P.options) && void 0 !== b ? b : [])
            e = e.concat(
                (function e(t) {
                    var n, l, a, o, u, d, m;
                    let v,
                        { option: b, channel: A, guild: j, messageId: Z, parentOptionKey: R, commandOptionSpec: P, sourceAnalyticsLocations: y } = t,
                        L = null != R ? R + ' ' + b.name : b.name;
                    if (b.type === c.jw.SUB_COMMAND || b.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(s.Text, {
                                                ...N,
                                                children: null !== (l = null == P ? void 0 : P.name_localized) && void 0 !== l ? l : b.name
                                            })
                                        ]
                                    },
                                    L
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (a = null == P ? void 0 : P.options) && void 0 !== a ? a : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (o = b.options) && void 0 !== o ? o : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: A,
                                    guild: j,
                                    messageId: Z,
                                    parentOptionKey: L,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: y
                                })
                            );
                        return t;
                    }
                    let O = b.value;
                    if (null != b.value)
                        switch (b.type) {
                            case c.jw.USER: {
                                let e = b.value.toString(),
                                    t = _.default.getUser(e);
                                if (null != t) {
                                    let e = (0, C.ij)(t, A);
                                    v = (0, i.jsxs)(h.Z, {
                                        ...T,
                                        onClick: () =>
                                            (0, f.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: A.guild_id,
                                                channelId: A.id,
                                                messageId: Z,
                                                sourceAnalyticsLocations: y,
                                                analyticsLocation: { section: E.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                            }),
                                        children: [I.ME, e.nick]
                                    });
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = b.value.toString(),
                                    t = p.Z.getChannel(e);
                                null != t &&
                                    (v = (0, i.jsxs)(h.Z, {
                                        ...T,
                                        children: [I.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = b.value.toString(),
                                    t = null != j ? g.Z.getRole(j.id, e) : void 0;
                                null != t &&
                                    (v = (0, i.jsxs)(h.Z, {
                                        ...T,
                                        children: [I.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = b.value.toString(),
                                    t = null != j ? g.Z.getRole(j.id, e) : void 0;
                                if (null != t)
                                    v = (0, i.jsxs)(h.Z, {
                                        children: [I.ME, t.name]
                                    });
                                else {
                                    let t = _.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, C.ij)(t, A);
                                        v = (0, i.jsxs)(h.Z, {
                                            ...T,
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: A.guild_id,
                                                    analyticsLocation: { section: E.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [I.ME, e.nick]
                                        });
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                v = S(x.intl.string(x.t.nONJVV));
                                break;
                            default: {
                                let e = null == P ? void 0 : null === (u = P.choices) || void 0 === u ? void 0 : u.find((e) => e.value === b.value);
                                null != e && (O = null !== (d = e.name_localized) && void 0 !== d ? d : e.name);
                            }
                        }
                    return (
                        null == v && (v = S(null == O ? void 0 : O.toString())),
                        [
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(s.Text, {
                                            ...N,
                                            children: [' ', null !== (m = null == P ? void 0 : P.name_localized) && void 0 !== m ? m : b.name, ': ']
                                        }),
                                        v
                                    ]
                                },
                                L
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: Z,
                    guild: M,
                    messageId: R,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: y
                })
            );
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.Text, {
                    ...N,
                    children: ['/', null !== (A = null === (l = P.application_command) || void 0 === l ? void 0 : l.name_localized) && void 0 !== A ? A : P.name]
                }),
                e
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: v.container,
        onCopy: (e) => {
            var t, n, i;
            let r = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
            r.startsWith('/') && r.endsWith('\n') && L(e, P);
        },
        children: [
            (0, i.jsx)('div', {
                className: v.tooltip,
                ref: O,
                children: j
            }),
            (0, i.jsx)('div', { className: v.tooltipPointer })
        ]
    });
});
