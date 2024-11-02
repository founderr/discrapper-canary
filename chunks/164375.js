e.r(n),
    e.d(n, {
        default: function () {
            return m;
        }
    });
var i = e(200651),
    r = e(192379),
    a = e(481060),
    s = e(493683),
    o = e(594174),
    l = e(626135),
    c = e(799352),
    d = e(343544),
    u = e(110223),
    _ = e(981631),
    x = e(388032);
function m(t) {
    var n;
    let { channelId: e, blockedUserIds: m, transitionState: h, onClose: f } = t,
        g = m.map((t) => o.default.getUser(t));
    r.useEffect(() => {
        l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: e,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: m
        });
    }, [e, m]);
    let N = g.length > 1,
        p = [
            {
                icon: N ? (0, i.jsx)(a.GroupIcon, {}) : (0, i.jsx)(a.UserIcon, {}),
                text: N ? x.intl.formatToPlainString(x.t.Zqlt5e, { blockedUserCount: g.length }) : x.intl.formatToPlainString(x.t.V0aCFx, { userName: null === (n = g[0]) || void 0 === n ? void 0 : n.username })
            },
            {
                icon: (0, i.jsx)(a.BellSlashIcon, {}),
                text: x.intl.string(x.t['RIMw5+'])
            },
            {
                icon: (0, i.jsx)(a.EnvelopeIcon, {}),
                text: x.intl.string(x.t.bejNWF)
            }
        ];
    return (0, i.jsx)(d.Z, {
        headerText: N ? x.intl.string(x.t.aJRlSU) : x.intl.string(x.t.rlBMub),
        secondaryHeaderText: x.intl.string(x.t['mwJJ+f']),
        infoRows: p,
        onDismissAndStay: () => {
            f(),
                (0, c.O)(e),
                l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_STAY,
                    channel_id: e,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: m
                });
        },
        onDismissAndLeave: () => {
            f(),
                (0, c.O)(e),
                s.Z.closePrivateChannel(e, !0, !0),
                l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_LEAVE,
                    channel_id: e,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: m
                });
        },
        leaveButtonText: x.intl.string(x.t.I4q1kJ),
        stayButtonText: x.intl.string(x.t.DRJhmZ),
        transitionState: h,
        onClose: f
    });
}
