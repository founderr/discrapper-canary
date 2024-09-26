n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(565138),
    l = n(241559),
    u = n(527379),
    c = n(430824),
    d = n(944486),
    _ = n(914010),
    E = n(626135),
    f = n(528011),
    h = n(666657),
    p = n(533244),
    m = n(981631),
    I = n(176505),
    T = n(689938),
    g = n(900547);
function S(e) {
    var t, S;
    let { onDismiss: A } = e,
        v = (0, a.e7)([_.Z], () => _.Z.getGuildId()),
        N = (0, a.e7)([d.Z], () => (null != v ? d.Z.getChannelId(v) : null), [v]),
        O = null != v ? v : null,
        R = (0, a.e7)([c.Z], () => (null != O ? c.Z.getGuild(O) : null), [O]),
        { shouldShowIncidentActions: C, incidentData: y, isUnderLockdown: L } = (0, f.mI)(O),
        b = (0, l.n2)(null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : m.lds),
        D = i.useCallback(() => null != R && (0, u._X)(R.id), [R]);
    if (null == R || null == y || !C) return null;
    let M = (e) => {
            if (e && b && N !== I.oC.MEMBER_SAFETY && D()) {
                E.default.track(m.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: m.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: R.id
                });
                return;
            }
            (0, o.openModalLazy)(async () => {
                let e = {
                        source: h.Zu.NAGBAR,
                        alertType: (0, p.T1)(y)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) =>
                    (0, r.jsx)(t, {
                        ...n,
                        guildId: R.id,
                        analyticsData: e
                    });
            });
        },
        P = (0, r.jsx)(s.Z, {
            className: g.guildIcon,
            guild: R,
            size: s.Z.Sizes.MINI
        }),
        U = (0, p.OY)(y, R.name);
    if (null != (null !== (S = y.dmsDisabledUntil) && void 0 !== S ? S : y.invitesDisabledUntil) && L)
        return (0, r.jsxs)(o.Notice, {
            className: g.notice,
            color: o.NoticeColors.NEUTRAL,
            children: [
                (0, r.jsx)(o.NoticeCloseButton, {
                    onClick: A,
                    noticeType: m.kVF.GUILD_RAID_NOTIFICATION
                }),
                P,
                U,
                (0, r.jsx)(o.NoticeButton, {
                    className: g.actionButton,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)('div', {
                        className: g.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.LockIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: T.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION })
                        ]
                    })
                })
            ]
        });
    let w = (0, p.CG)(y) ? T.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({ guildName: R.name }) : (0, p.kk)(y) ? T.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({ guildName: R.name }) : T.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({ guildName: R.name }),
        x = b && N === I.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.Notice, {
        className: g.notice,
        color: o.NoticeColors.WARNING,
        children: [
            (0, r.jsx)(o.NoticeCloseButton, {
                onClick: A,
                noticeType: m.kVF.GUILD_RAID_NOTIFICATION
            }),
            P,
            w,
            !x &&
                (0, r.jsx)(o.NoticeButton, {
                    className: g.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)('div', {
                        className: g.actionButtonInner,
                        children: (0, r.jsx)('span', { children: T.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW })
                    })
                })
        ]
    });
}
