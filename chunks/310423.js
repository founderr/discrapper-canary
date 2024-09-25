var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(911969),
    d = n(906732),
    _ = n(778087),
    E = n(603721),
    f = n(124072),
    h = n(171368),
    p = n(592125),
    m = n(430824),
    I = n(594174),
    T = n(739566),
    g = n(981631),
    S = n(665692),
    A = n(689938),
    v = n(120584);
let N = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    O = { className: s()('mention', v.mention) };
function R(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(u.Text, {
            ...N,
            color: 'header-primary',
            children: e
        })
    });
}
function C(e) {
    var t, n, r, o, s, l, d;
    let _,
        { option: E, channel: v, guild: y, messageId: b, parentOptionKey: L, commandOptionSpec: D, sourceAnalyticsLocations: M } = e,
        P = null != L ? L + ' ' + E.name : E.name;
    if (E.type === c.jw.SUB_COMMAND || E.type === c.jw.SUB_COMMAND_GROUP) {
        let e = [
                (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            ' ',
                            (0, i.jsx)(u.Text, {
                                ...N,
                                children: null !== (n = null == D ? void 0 : D.name_localized) && void 0 !== n ? n : E.name
                            })
                        ]
                    },
                    P
                )
            ],
            s = Object.fromEntries(null === (t = null !== (r = null == D ? void 0 : D.options) && void 0 !== r ? r : []) || void 0 === t ? void 0 : t.map((e) => [e.name, e]));
        for (let t of null !== (o = E.options) && void 0 !== o ? o : [])
            e = e.concat(
                C({
                    option: t,
                    channel: v,
                    guild: y,
                    messageId: b,
                    parentOptionKey: P,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: M
                })
            );
        return e;
    }
    let U = E.value;
    if (null != E.value)
        switch (E.type) {
            case c.jw.USER: {
                let e = E.value.toString(),
                    t = I.default.getUser(e);
                if (null != t) {
                    let e = (0, T.ij)(t, v);
                    _ = (0, i.jsxs)(f.Z, {
                        ...O,
                        onClick: () =>
                            (0, h.openUserProfileModal)({
                                userId: t.id,
                                guildId: v.guild_id,
                                channelId: v.id,
                                messageId: b,
                                sourceAnalyticsLocations: M,
                                analyticsLocation: { section: g.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                            }),
                        children: [S.ME, e.nick]
                    });
                }
                break;
            }
            case c.jw.CHANNEL: {
                let e = E.value.toString(),
                    t = p.Z.getChannel(e);
                null != t &&
                    (_ = (0, i.jsxs)(f.Z, {
                        ...O,
                        children: [S.zy, t.name]
                    }));
                break;
            }
            case c.jw.ROLE: {
                let e = E.value.toString(),
                    t = null != y ? m.Z.getRole(y.id, e) : void 0;
                null != t &&
                    (_ = (0, i.jsxs)(f.Z, {
                        ...O,
                        children: [S.ME, t.name]
                    }));
                break;
            }
            case c.jw.MENTIONABLE: {
                let e = E.value.toString(),
                    t = null != y ? m.Z.getRole(y.id, e) : void 0;
                if (null != t)
                    _ = (0, i.jsxs)(f.Z, {
                        children: [S.ME, t.name]
                    });
                else {
                    let t = I.default.getUser(e);
                    if (null != t) {
                        let e = (0, T.ij)(t, v);
                        _ = (0, i.jsxs)(f.Z, {
                            ...O,
                            onClick: () =>
                                (0, h.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: v.guild_id,
                                    analyticsLocation: { section: g.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                }),
                            children: [S.ME, e.nick]
                        });
                    }
                }
                break;
            }
            case c.jw.ATTACHMENT:
                _ = R(A.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
                break;
            default: {
                let e = null == D ? void 0 : null === (s = D.choices) || void 0 === s ? void 0 : s.find((e) => e.value === E.value);
                null != e && (U = null !== (l = e.name_localized) && void 0 !== l ? l : e.name);
            }
        }
    return (
        null == _ && (_ = R(null == U ? void 0 : U.toString())),
        [
            (0, i.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, i.jsxs)(u.Text, {
                            ...N,
                            children: [' ', null !== (d = null == D ? void 0 : D.name_localized) && void 0 !== d ? d : E.name, ': ']
                        }),
                        _
                    ]
                },
                P
            )
        ]
    );
}
function y(e) {
    var t, n, r, o, s, f;
    let h,
        { channel: p, messageId: I, interactionData: T } = e,
        { analyticsLocations: g } = (0, d.ZP)(),
        { onCopy: S, copyRef: A } = (0, _.Z)(p, null == T ? void 0 : null === (t = T.application_command) || void 0 === t ? void 0 : t.id),
        O = (0, l.e7)([m.Z], () => m.Z.getGuild(p.guild_id), [p.guild_id]);
    if (
        (a.useEffect(() => {
            (null == T || (T.type === c.yU.CHAT && void 0 === T.application_command)) && E.OG(p.id, I);
        }, [p.id, I, T]),
        null == T)
    )
        h = (0, i.jsx)(u.Spinner, {
            type: u.Spinner.Type.SPINNING_CIRCLE,
            className: v.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (o = null === (n = T.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== o ? o : []).map((e) => [e.name, e]));
        for (let n of null !== (s = T.options) && void 0 !== s ? s : [])
            e = e.concat(
                C({
                    option: n,
                    channel: p,
                    guild: O,
                    messageId: I,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: g
                })
            );
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.Text, {
                    ...N,
                    children: ['/', null !== (f = null === (r = T.application_command) || void 0 === r ? void 0 : r.name_localized) && void 0 !== f ? f : T.name]
                }),
                e
            ]
        });
    }
    let R = (e) => {
        var t, n, r;
        let i = null !== (r = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== r ? r : '';
        i.startsWith('/') && i.endsWith('\n') && S(e, T);
    };
    return (0, i.jsxs)('div', {
        className: v.container,
        onCopy: R,
        children: [
            (0, i.jsx)('div', {
                className: v.tooltip,
                ref: A,
                children: h
            }),
            (0, i.jsx)('div', { className: v.tooltipPointer })
        ]
    });
}
t.Z = a.memo(y);
