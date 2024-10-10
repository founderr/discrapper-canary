n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(565138),
    o = n(241559),
    c = n(527379),
    d = n(430824),
    u = n(944486),
    _ = n(914010),
    E = n(626135),
    I = n(528011),
    m = n(666657),
    T = n(533244),
    N = n(981631),
    h = n(176505),
    C = n(689938),
    f = n(900547);
function p(e) {
    var t, p;
    let { onDismiss: g } = e,
        A = (0, s.e7)([_.Z], () => _.Z.getGuildId()),
        S = (0, s.e7)([u.Z], () => (null != A ? u.Z.getChannelId(A) : null), [A]),
        M = null != A ? A : null,
        O = (0, s.e7)([d.Z], () => (null != M ? d.Z.getGuild(M) : null), [M]),
        { shouldShowIncidentActions: x, incidentData: R, isUnderLockdown: v } = (0, I.mI)(M),
        L = (0, o.n2)(null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : N.lds),
        Z = a.useCallback(() => null != O && (0, c._X)(O.id), [O]);
    if (null == O || null == R || !x) return null;
    let P = (e) => {
            if (e && L && S !== h.oC.MEMBER_SAFETY && Z()) {
                E.default.track(N.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: N.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: O.id
                });
                return;
            }
            (0, l.openModalLazy)(async () => {
                let e = {
                        source: m.Zu.NAGBAR,
                        alertType: (0, T.T1)(R)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: O.id,
                        analyticsData: e
                    });
            });
        },
        b = (0, i.jsx)(r.Z, {
            className: f.guildIcon,
            guild: O,
            size: r.Z.Sizes.MINI
        }),
        D = (0, T.OY)(R, O.name);
    if (null != (null !== (p = R.dmsDisabledUntil) && void 0 !== p ? p : R.invitesDisabledUntil) && v)
        return (0, i.jsxs)(l.Notice, {
            className: f.notice,
            color: l.NoticeColors.NEUTRAL,
            children: [
                (0, i.jsx)(l.NoticeCloseButton, {
                    onClick: g,
                    noticeType: N.kVF.GUILD_RAID_NOTIFICATION
                }),
                b,
                D,
                (0, i.jsx)(l.NoticeButton, {
                    className: f.actionButton,
                    onClick: () => P(!1),
                    children: (0, i.jsxs)('div', {
                        className: f.actionButtonInner,
                        children: [
                            (0, i.jsx)(l.LockIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: C.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION })
                        ]
                    })
                })
            ]
        });
    let j = (0, T.CG)(R) ? C.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({ guildName: O.name }) : (0, T.kk)(R) ? C.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({ guildName: O.name }) : C.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({ guildName: O.name }),
        U = L && S === h.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(l.Notice, {
        className: f.notice,
        color: l.NoticeColors.WARNING,
        children: [
            (0, i.jsx)(l.NoticeCloseButton, {
                onClick: g,
                noticeType: N.kVF.GUILD_RAID_NOTIFICATION
            }),
            b,
            j,
            !U &&
                (0, i.jsx)(l.NoticeButton, {
                    className: f.actionButton,
                    onClick: () => P(!0),
                    children: (0, i.jsx)('div', {
                        className: f.actionButtonInner,
                        children: (0, i.jsx)('span', { children: C.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW })
                    })
                })
        ]
    });
}
