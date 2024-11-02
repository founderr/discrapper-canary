t.r(e),
    t.d(e, {
        default: function () {
            return h;
        }
    });
var i = t(200651);
t(192379);
var s = t(990547),
    r = t(481060),
    a = t(287734),
    o = t(594174),
    l = t(626135),
    c = t(33194),
    d = t(807031),
    u = t(343544),
    _ = t(110223),
    m = t(981631),
    x = t(388032);
function h(n) {
    let { channelId: e, blockedUserId: t, transitionState: h, onClose: f } = n;
    if (!(0, d.KR)({ location: 'warning_modal' })) return null;
    let N = o.default.getUser(t),
        p = [
            {
                icon: (0, i.jsx)(r.UserIcon, {}),
                text: x.intl.formatToPlainString(x.t.w0YvUl, { userName: null == N ? void 0 : N.username })
            },
            {
                icon: (0, i.jsx)(r.MicrophoneIcon, {}),
                text: x.intl.string(x.t['+4O9nZ'])
            }
        ];
    return (0, i.jsx)(u.Z, {
        headerText: x.intl.string(x.t.LGnmpa),
        secondaryHeaderText: x.intl.string(x.t['1/gpFh']),
        descriptionText: x.intl.string(x.t.K8YIgY),
        infoRows: p,
        onDismissAndStay: () => {
            f(),
                (0, c.g6)(e),
                l.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: _.q.CLICK_TO_STAY,
                    channel_id: e,
                    blocked_user_ids: [t],
                    warning_surface: _.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            f(),
                a.default.disconnect(),
                l.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: _.q.CLICK_TO_LEAVE,
                    channel_id: e,
                    blocked_user_ids: [t],
                    warning_surface: _.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: x.intl.string(x.t['Y56/oK']),
        stayButtonText: x.intl.string(x.t['Z+/hfX']),
        transitionState: h,
        onClose: f,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: e,
                blocked_user_ids: [t],
                warning_surface: _.fz.POST_JOIN_MODAL
            }
        }
    });
}
