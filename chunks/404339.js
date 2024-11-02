e.r(n),
    e.d(n, {
        default: function () {
            return x;
        }
    }),
    e(47120);
var r = e(200651);
e(192379);
var i = e(990547),
    s = e(481060),
    a = e(594174),
    o = e(626135),
    l = e(33194),
    c = e(807031),
    d = e(343544),
    u = e(110223),
    _ = e(981631),
    m = e(388032);
function x(t) {
    let { channelId: n, blockedUserIds: e, transitionState: x, onClose: f, onJoin: h } = t;
    if (!(0, c.KR)({ location: 'warning_modal' })) return null;
    let N = e.size > 1,
        g = [
            {
                icon: N ? (0, r.jsx)(s.GroupIcon, {}) : (0, r.jsx)(s.UserIcon, {}),
                text: N ? m.intl.formatToPlainString(m.t.Zqlt5e, { blockedUserCount: e.size }) : m.intl.formatToPlainString(m.t.V0aCFx, { userName: a.default.getUser([...e][0]) })
            },
            {
                icon: (0, r.jsx)(s.MicrophoneIcon, {}),
                text: m.intl.string(m.t['7jN3FB'])
            }
        ];
    return (0, r.jsx)(d.Z, {
        headerText: N ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
        secondaryHeaderText: m.intl.string(m.t.zPUmzc),
        descriptionText: m.intl.string(m.t.K8YIgY),
        infoRows: g,
        onDismissAndStay: () => {
            h(),
                f(),
                (0, l.g6)(n),
                o.default.track(_.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_JOIN,
                    channel_id: n,
                    blocked_user_ids: Array.from(e),
                    warning_surface: u.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            f(),
                o.default.track(_.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: Array.from(e),
                    warning_surface: u.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: m.intl.string(m.t.Trz9Ji),
        stayButtonText: m.intl.string(m.t.kiODyM),
        transitionState: x,
        onClose: f,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: Array.from(e),
                warning_surface: u.fz.PRE_JOIN_MODAL
            }
        }
    });
}
