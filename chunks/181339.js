n.d(t, {
    Z: function () {
        return R;
    },
    w: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    m = n(369994),
    h = n(162157),
    g = n(177862),
    x = n(11265),
    p = n(592125),
    f = n(984933),
    C = n(496675),
    I = n(699516),
    _ = n(594174),
    v = n(434404),
    N = n(449226),
    T = n(981631),
    b = n(388032),
    j = n(232203);
function S(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: a } = e,
        x = (0, h.BT)(t),
        f = t.canHaveRaidActivityAlerts(),
        [C, I] = r.useState(f),
        _ = (0, o.e7)([p.Z], () => p.Z.getChannel(l), [l]),
        v = (0, u.ZP)(_),
        S = async () => {
            I(!C);
            try {
                var e;
                await (0, m.f6)(t, !f);
                let n = null !== (e = null != l ? l : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: g.wR.JOIN_RAID,
                        enabled: !f,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n
                    };
                    (0, d.yw)(T.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['46Rs3t']), c.ToastType.FAILURE)), I(!f);
            }
        };
    return (0, i.jsxs)('div', {
        className: s()(j.itemWrapper, a),
        children: [
            (0, i.jsxs)('div', {
                className: j.itemContent,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: b.intl.string(b.t.Qp98s7)
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: b.intl.string(b.t.Mg843t)
                    }),
                    n || null == l
                        ? null
                        : (0, i.jsxs)(c.Text, {
                              color: 'interactive-normal',
                              variant: 'text-xs/medium',
                              className: j.valuePill,
                              children: [
                                  (0, i.jsx)(c.TextIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  ' ',
                                  v
                              ]
                          })
                ]
            }),
            (0, i.jsx)(N.Z, {
                checked: C,
                onChange: S,
                disabled: !x || null == l
            })
        ]
    });
}
function E(e) {
    var t;
    let { guild: n, selectedChannelId: r, setSelectedChannelId: l, className: m } = e,
        h = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null,
        x = (0, o.Wu)(
            [f.ZP, _.default, I.Z, C.Z],
            () => {
                let e = f.ZP.getChannels(n.id)
                    [f.sH].filter((e) => {
                        let { channel: t } = e;
                        return t.type === a.d.GUILD_TEXT && C.Z.can(T.Plq.SEND_MESSAGES, t);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return {
                            value: t.id,
                            label: (0, u.F6)(t, _.default, I.Z, !0)
                        };
                    });
                return null != h ? e : [...e];
            },
            [n.id, h]
        ),
        p = async (e) => {
            l(e);
            try {
                if ((e !== h && (await v.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }), v.Z.updateGuild({ safetyAlertsChannelId: e })), null != e)) {
                    let t = {
                        raid_alert_type: g.wR.JOIN_RAID,
                        enabled: n.canHaveRaidActivityAlerts(),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e
                    };
                    (0, d.yw)(T.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['46Rs3t']), c.ToastType.FAILURE)), l(h);
            }
        };
    return (0, i.jsx)('div', {
        className: s()(j.itemBodyContainer, m),
        children: (0, i.jsxs)('div', {
            className: j.itemBodyInner,
            children: [
                (0, i.jsx)(c.FormTitle, { children: b.intl.string(b.t.sMkYEx) }),
                (0, i.jsx)(c.SearchableSelect, {
                    wrapperClassName: j.bringToFront,
                    options: x,
                    onChange: p,
                    value: r,
                    maxVisibleItems: 5
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    children: b.intl.string(b.t['1QxN9P'])
                })
            ]
        })
    });
}
function R(e) {
    var t, n;
    let { guild: l } = e,
        [s, a] = r.useState(!1),
        o = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null,
        [c, d] = r.useState(null != o ? o : null !== (n = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== n ? n : null);
    return (0, i.jsx)(x.Z, {
        renderHeader: (0, i.jsx)(S, {
            isExpanded: s,
            guild: l,
            selectedChannelId: c
        }),
        isExpanded: s,
        onExpand: () => a(!s),
        children: (0, i.jsx)(E, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d
        })
    });
}
function y(e) {
    var t, n;
    let { guild: l } = e,
        s = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null,
        [a, o] = r.useState(null != s ? s : null !== (n = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== n ? n : null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: a,
                className: j.noPadding
            }),
            (0, i.jsx)(E, {
                guild: l,
                selectedChannelId: a,
                setSelectedChannelId: o,
                className: j.noPadding
            })
        ]
    });
}
