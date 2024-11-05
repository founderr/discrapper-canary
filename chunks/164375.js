n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var a = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(493683),
    o = n(594174),
    l = n(626135),
    d = n(799352),
    c = n(343544),
    u = n(110223),
    x = n(981631),
    _ = n(388032);
function m(e) {
    var t;
    let { channelId: n, blockedUserIds: m, transitionState: h, onClose: f } = e,
        g = m.map((e) => o.default.getUser(e));
    i.useEffect(() => {
        l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: m
        });
    }, [n, m]);
    let j = g.length > 1,
        p = [
            {
                icon: j ? (0, a.jsx)(s.GroupIcon, {}) : (0, a.jsx)(s.UserIcon, {}),
                text: j ? _.intl.formatToPlainString(_.t.Zqlt5e, { blockedUserCount: g.length }) : _.intl.formatToPlainString(_.t.V0aCFx, { userName: null === (t = g[0]) || void 0 === t ? void 0 : t.username })
            },
            {
                icon: (0, a.jsx)(s.BellSlashIcon, {}),
                text: _.intl.string(_.t['RIMw5+'])
            },
            {
                icon: (0, a.jsx)(s.EnvelopeIcon, {}),
                text: _.intl.string(_.t.bejNWF)
            }
        ];
    return (0, a.jsx)(c.Z, {
        headerText: j ? _.intl.string(_.t.aJRlSU) : _.intl.string(_.t.rlBMub),
        secondaryHeaderText: _.intl.string(_.t['mwJJ+f']),
        infoRows: p,
        onDismissAndStay: () => {
            f(),
                (0, d.O)(n),
                l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_STAY,
                    channel_id: n,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: m
                });
        },
        onDismissAndLeave: () => {
            f(),
                (0, d.O)(n),
                r.Z.closePrivateChannel(n, !0, !0),
                l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: m
                });
        },
        leaveButtonText: _.intl.string(_.t.I4q1kJ),
        stayButtonText: _.intl.string(_.t.DRJhmZ),
        transitionState: h,
        onClose: f
    });
}
