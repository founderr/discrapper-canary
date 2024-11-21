n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var a = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(493683),
    o = n(594174),
    l = n(626135),
    c = n(799352),
    d = n(343544),
    u = n(110223),
    x = n(981631),
    m = n(388032);
function _(e) {
    var t;
    let { channelId: n, blockedUserIds: _, transitionState: h, onClose: f } = e,
        g = _.map((e) => o.default.getUser(e));
    i.useEffect(() => {
        l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: _
        });
    }, [n, _]);
    let j = g.length > 1,
        N = [
            {
                icon: j ? (0, a.jsx)(s.GroupIcon, {}) : (0, a.jsx)(s.UserIcon, {}),
                text: j ? m.intl.formatToPlainString(m.t.Zqlt5e, { blockedUserCount: g.length }) : m.intl.formatToPlainString(m.t.V0aCFx, { userName: null === (t = g[0]) || void 0 === t ? void 0 : t.username })
            },
            {
                icon: (0, a.jsx)(s.BellSlashIcon, {}),
                text: m.intl.string(m.t['RIMw5+'])
            },
            {
                icon: (0, a.jsx)(s.EnvelopeIcon, {}),
                text: m.intl.string(m.t.bejNWF)
            }
        ];
    return (0, a.jsx)(d.Z, {
        headerText: j ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
        secondaryHeaderText: m.intl.string(m.t['mwJJ+f']),
        infoRows: N,
        onDismissAndStay: () => {
            f(),
                (0, c.O)(n),
                l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_STAY,
                    channel_id: n,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: _
                });
        },
        onDismissAndLeave: () => {
            f(),
                (0, c.O)(n),
                r.Z.closePrivateChannel(n, !0, !0),
                l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: _
                });
        },
        leaveButtonText: m.intl.string(m.t.I4q1kJ),
        stayButtonText: m.intl.string(m.t.DRJhmZ),
        transitionState: h,
        onClose: f
    });
}
