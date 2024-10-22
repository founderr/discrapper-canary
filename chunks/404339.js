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
    i = n(626135),
    _ = n(33194),
    c = n(807031),
    N = n(343544),
    d = n(110223),
    E = n(981631),
    l = n(689938);
function u(e) {
    let { channelId: s, blockedUserIds: n, transitionState: u, onClose: C, onJoin: I } = e;
    if (!(0, c.w)({ location: 'warning_modal' })) return null;
    let m = n.size > 1,
        x = [
            {
                icon: m ? (0, t.jsx)(r.GroupIcon, {}) : (0, t.jsx)(r.UserIcon, {}),
                text: m ? l.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: n.size }) : l.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: o.default.getUser([...n][0]) })
            },
            {
                icon: (0, t.jsx)(r.MicrophoneIcon, {}),
                text: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WILL_BEAUDIBLE
            }
        ];
    return (0, t.jsx)(N.Z, {
        headerText: l.Z.Messages.VOICE_PANEL_BLOCKED_PEOPLE_WARNING.format({ n: n.size }),
        secondaryHeaderText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_MODAL,
        descriptionText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: x,
        onDismissAndStay: () => {
            I(),
                C(),
                (0, _.g6)(s),
                i.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: d.q.CLICK_TO_JOIN,
                    channel_id: s,
                    blocked_user_ids: Array.from(n),
                    warning_surface: d.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            C(),
                i.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: d.q.CLICK_TO_LEAVE,
                    channel_id: s,
                    blocked_user_ids: Array.from(n),
                    warning_surface: d.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DONT_JOIN,
        stayButtonText: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_ANYWAY,
        transitionState: u,
        onClose: C,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: s,
                blocked_user_ids: Array.from(n),
                warning_surface: d.fz.PRE_JOIN_MODAL
            }
        }
    });
}
