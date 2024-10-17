n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var s = n(735250);
n(470079);
var a = n(481060),
    o = n(287734),
    r = n(594174),
    i = n(33194),
    l = n(807031),
    c = n(343544),
    d = n(689938);
function u(e) {
    let { channelId: t, blockedUserId: n, transitionState: u, onClose: _ } = e;
    if (!(0, l.w)({ location: 'warning_modal' })) return null;
    let E = r.default.getUser(n),
        N = [
            {
                icon: (0, s.jsx)(a.UserIcon, {}),
                text: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null == E ? void 0 : E.username })
            },
            {
                icon: (0, s.jsx)(a.MicrophoneIcon, {}),
                text: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE
            }
        ];
    return (0, s.jsx)(c.Z, {
        headerText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
        descriptionText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: N,
        onDismissAndStay: () => {
            _(), (0, i.g6)(t);
        },
        onDismissAndLeave: () => {
            _(), o.default.disconnect();
        },
        leaveButtonText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
        transitionState: u,
        onClose: _
    });
}
