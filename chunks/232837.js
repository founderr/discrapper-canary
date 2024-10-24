n.r(s),
    n.d(s, {
        default: function () {
            return C;
        }
    });
var t = n(200651);
n(192379);
var a = n(990547),
    o = n(481060),
    r = n(287734),
    i = n(594174),
    _ = n(626135),
    c = n(33194),
    d = n(807031),
    l = n(343544),
    E = n(110223),
    N = n(981631),
    u = n(689938);
function C(e) {
    let { channelId: s, blockedUserId: n, transitionState: C, onClose: A } = e;
    if (!(0, d.KR)({ location: 'warning_modal' })) return null;
    let x = i.default.getUser(n),
        I = [
            {
                icon: (0, t.jsx)(o.UserIcon, {}),
                text: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null == x ? void 0 : x.username })
            },
            {
                icon: (0, t.jsx)(o.MicrophoneIcon, {}),
                text: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE
            }
        ];
    return (0, t.jsx)(l.Z, {
        headerText: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT_V2,
        secondaryHeaderText: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE_MODAL,
        descriptionText: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: I,
        onDismissAndStay: () => {
            A(),
                (0, c.g6)(s),
                _.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: E.q.CLICK_TO_STAY,
                    channel_id: s,
                    blocked_user_ids: [n],
                    warning_surface: E.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            A(),
                r.default.disconnect(),
                _.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: E.q.CLICK_TO_LEAVE,
                    channel_id: s,
                    blocked_user_ids: [n],
                    warning_surface: E.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: u.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
        transitionState: C,
        onClose: A,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: s,
                blocked_user_ids: [n],
                warning_surface: E.fz.POST_JOIN_MODAL
            }
        }
    });
}
