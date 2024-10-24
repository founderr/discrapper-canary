n.r(s),
    n.d(s, {
        default: function () {
            return u;
        }
    }),
    n(47120);
var t = n(200651);
n(192379);
var a = n(990547),
    r = n(481060),
    o = n(594174),
    _ = n(626135),
    i = n(33194),
    E = n(807031),
    c = n(343544),
    N = n(110223),
    d = n(981631),
    l = n(689938);
function u(e) {
    let { channelId: s, blockedUserIds: n, transitionState: u, onClose: I, onJoin: C } = e;
    if (!(0, E.KR)({ location: 'warning_modal' })) return null;
    let A = n.size > 1,
        R = [
            {
                icon: A ? (0, t.jsx)(r.GroupIcon, {}) : (0, t.jsx)(r.UserIcon, {}),
                text: A ? l.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: n.size }) : l.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: o.default.getUser([...n][0]) })
            },
            {
                icon: (0, t.jsx)(r.MicrophoneIcon, {}),
                text: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WILL_BEAUDIBLE
            }
        ];
    return (0, t.jsx)(c.Z, {
        headerText: A ? l.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : l.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
        secondaryHeaderText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_MODAL,
        descriptionText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: R,
        onDismissAndStay: () => {
            C(),
                I(),
                (0, i.g6)(s),
                _.default.track(d.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.q.CLICK_TO_JOIN,
                    channel_id: s,
                    blocked_user_ids: Array.from(n),
                    warning_surface: N.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            I(),
                _.default.track(d.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.q.CLICK_TO_LEAVE,
                    channel_id: s,
                    blocked_user_ids: Array.from(n),
                    warning_surface: N.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DONT_JOIN,
        stayButtonText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_ANYWAY,
        transitionState: u,
        onClose: I,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: s,
                blocked_user_ids: Array.from(n),
                warning_surface: N.fz.PRE_JOIN_MODAL
            }
        }
    });
}
