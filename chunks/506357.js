n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(565138),
    o = n(241559),
    c = n(527379),
    u = n(430824),
    d = n(944486),
    _ = n(914010),
    E = n(626135),
    I = n(528011),
    m = n(666657),
    f = n(533244),
    T = n(981631),
    h = n(176505),
    N = n(689938),
    p = n(900547);
function C(e) {
    var t, C;
    let { onDismiss: g } = e,
        S = (0, s.e7)([_.Z], () => _.Z.getGuildId()),
        A = (0, s.e7)([d.Z], () => (null != S ? d.Z.getChannelId(S) : null), [S]),
        x = null != S ? S : null,
        R = (0, s.e7)([u.Z], () => (null != x ? u.Z.getGuild(x) : null), [x]),
        { shouldShowIncidentActions: v, incidentData: O, isUnderLockdown: M } = (0, I.mI)(x),
        L = (0, o.n2)(null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : T.lds),
        Z = a.useCallback(() => null != R && (0, c._X)(R.id), [R]);
    if (null == R || null == O || !v) return null;
    let b = (e) => {
            if (e && L && A !== h.oC.MEMBER_SAFETY && Z()) {
                E.default.track(T.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: T.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: R.id
                });
                return;
            }
            (0, r.openModalLazy)(async () => {
                let e = {
                        source: m.Zu.NAGBAR,
                        alertType: (0, f.T1)(O)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: R.id,
                        analyticsData: e
                    });
            });
        },
        P = (0, i.jsx)(l.Z, {
            className: p.guildIcon,
            guild: R,
            size: l.Z.Sizes.MINI
        }),
        D = (0, f.OY)(O, R.name);
    if (null != (null !== (C = O.dmsDisabledUntil) && void 0 !== C ? C : O.invitesDisabledUntil) && M)
        return (0, i.jsxs)(r.Notice, {
            className: p.notice,
            color: r.NoticeColors.NEUTRAL,
            children: [
                (0, i.jsx)(r.NoticeCloseButton, {
                    onClick: g,
                    noticeType: T.kVF.GUILD_RAID_NOTIFICATION
                }),
                P,
                D,
                (0, i.jsx)(r.NoticeButton, {
                    className: p.actionButton,
                    onClick: () => b(!1),
                    children: (0, i.jsxs)('div', {
                        className: p.actionButtonInner,
                        children: [
                            (0, i.jsx)(r.LockIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: N.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION })
                        ]
                    })
                })
            ]
        });
    let j = (0, f.CG)(O) ? N.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({ guildName: R.name }) : (0, f.kk)(O) ? N.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({ guildName: R.name }) : N.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({ guildName: R.name }),
        U = L && A === h.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(r.Notice, {
        className: p.notice,
        color: r.NoticeColors.WARNING,
        children: [
            (0, i.jsx)(r.NoticeCloseButton, {
                onClick: g,
                noticeType: T.kVF.GUILD_RAID_NOTIFICATION
            }),
            P,
            j,
            !U &&
                (0, i.jsx)(r.NoticeButton, {
                    className: p.actionButton,
                    onClick: () => b(!0),
                    children: (0, i.jsx)('div', {
                        className: p.actionButtonInner,
                        children: (0, i.jsx)('span', { children: N.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW })
                    })
                })
        ]
    });
}
