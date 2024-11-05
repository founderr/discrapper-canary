n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(565138),
    s = n(241559),
    c = n(527379),
    d = n(430824),
    u = n(944486),
    m = n(914010),
    h = n(626135),
    f = n(528011),
    p = n(666657),
    g = n(533244),
    _ = n(981631),
    C = n(176505),
    E = n(388032),
    I = n(900547);
function x(e) {
    var t, x;
    let { onDismiss: v } = e,
        N = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        T = (0, l.e7)([u.Z], () => (null != N ? u.Z.getChannelId(N) : null), [N]),
        S = null != N ? N : null,
        b = (0, l.e7)([d.Z], () => (null != S ? d.Z.getGuild(S) : null), [S]),
        { shouldShowIncidentActions: A, incidentData: j, isUnderLockdown: Z } = (0, f.mI)(S),
        R = (0, s.n2)(null !== (t = null == b ? void 0 : b.id) && void 0 !== t ? t : _.lds),
        P = r.useCallback(() => null != b && (0, c._X)(b.id), [b]);
    if (null == b || null == j || !A) return null;
    let y = (e) => {
            if (e && R && T !== C.oC.MEMBER_SAFETY && P()) {
                h.default.track(_.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: _.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: b.id
                });
                return;
            }
            (0, a.openModalLazy)(async () => {
                let e = {
                        source: p.Zu.NAGBAR,
                        alertType: (0, g.T1)(j)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: b.id,
                        analyticsData: e
                    });
            });
        },
        L = (0, i.jsx)(o.Z, {
            className: I.guildIcon,
            guild: b,
            size: o.Z.Sizes.MINI
        }),
        O = (0, g.OY)(j, b.name);
    if (null != (null !== (x = j.dmsDisabledUntil) && void 0 !== x ? x : j.invitesDisabledUntil) && Z)
        return (0, i.jsxs)(a.Notice, {
            className: I.notice,
            color: a.NoticeColors.NEUTRAL,
            children: [
                (0, i.jsx)(a.NoticeCloseButton, {
                    onClick: v,
                    noticeType: _.kVF.GUILD_RAID_NOTIFICATION
                }),
                L,
                O,
                (0, i.jsx)(a.NoticeButton, {
                    className: I.actionButton,
                    onClick: () => y(!1),
                    children: (0, i.jsxs)('div', {
                        className: I.actionButtonInner,
                        children: [
                            (0, i.jsx)(a.LockIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: E.intl.string(E.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let M = (0, g.CG)(j) ? E.intl.formatToPlainString(E.t.tZTx2N, { guildName: b.name }) : (0, g.kk)(j) ? E.intl.formatToPlainString(E.t['1bSmxs'], { guildName: b.name }) : E.intl.formatToPlainString(E.t.W87xDA, { guildName: b.name }),
        k = R && T === C.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(a.Notice, {
        className: I.notice,
        color: a.NoticeColors.WARNING,
        children: [
            (0, i.jsx)(a.NoticeCloseButton, {
                onClick: v,
                noticeType: _.kVF.GUILD_RAID_NOTIFICATION
            }),
            L,
            M,
            !k &&
                (0, i.jsx)(a.NoticeButton, {
                    className: I.actionButton,
                    onClick: () => y(!0),
                    children: (0, i.jsx)('div', {
                        className: I.actionButtonInner,
                        children: (0, i.jsx)('span', { children: E.intl.string(E.t.zDJDho) })
                    })
                })
        ]
    });
}
