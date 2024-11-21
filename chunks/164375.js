n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var a = n(200651),
    i = n(192379),
    o = n(481060),
    s = n(493683),
    r = n(594174),
    l = n(626135),
    d = n(799352),
    c = n(343544),
    u = n(110223),
    _ = n(981631),
    m = n(388032);
function x(e) {
    var t;
    let { channelId: n, blockedUserIds: x, transitionState: h, onClose: g } = e,
        f = x.map((e) => r.default.getUser(e));
    i.useEffect(() => {
        l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: x
        });
    }, [n, x]);
    let j = f.length > 1,
        p = [
            {
                icon: j ? (0, a.jsx)(o.GroupIcon, {}) : (0, a.jsx)(o.UserIcon, {}),
                text: j ? m.intl.formatToPlainString(m.t.Zqlt5e, { blockedUserCount: f.length }) : m.intl.formatToPlainString(m.t.V0aCFx, { userName: null === (t = f[0]) || void 0 === t ? void 0 : t.username })
            },
            {
                icon: (0, a.jsx)(o.BellSlashIcon, {}),
                text: m.intl.string(m.t['RIMw5+'])
            },
            {
                icon: (0, a.jsx)(o.EnvelopeIcon, {}),
                text: m.intl.string(m.t.bejNWF)
            }
        ];
    return (0, a.jsx)(c.Z, {
        headerText: j ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
        secondaryHeaderText: m.intl.string(m.t['mwJJ+f']),
        infoRows: p,
        onDismissAndStay: () => {
            g(),
                (0, d.O)(n),
                l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_STAY,
                    channel_id: n,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: x
                });
        },
        onDismissAndLeave: () => {
            g(),
                (0, d.O)(n),
                s.Z.closePrivateChannel(n, !0, !0),
                l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    warning_medium: u.WR.MODAL,
                    blocked_user_ids: x
                });
        },
        leaveButtonText: m.intl.string(m.t.I4q1kJ),
        stayButtonText: m.intl.string(m.t.DRJhmZ),
        transitionState: h,
        onClose: g
    });
}
