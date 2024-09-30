t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var s = t(735250),
    a = t(470079),
    o = t(481060),
    r = t(493683),
    i = t(594174),
    _ = t(626135),
    l = t(799352),
    d = t(343544),
    c = t(110223),
    u = t(981631),
    E = t(689938);
function N(e) {
    var n;
    let { channelId: t, blockedUserIds: N, transitionState: M, onClose: D } = e,
        G = N.map((e) => i.default.getUser(e));
    a.useEffect(() => {
        _.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: c.X.MODAL,
            blocked_user_ids: N
        });
    }, [t, N]);
    let R = G.length > 1,
        x = [
            {
                icon: R ? (0, s.jsx)(o.GroupIcon, {}) : (0, s.jsx)(o.UserIcon, {}),
                text: R ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: G.length }) : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null === (n = G[0]) || void 0 === n ? void 0 : n.username })
            },
            {
                icon: (0, s.jsx)(o.BellSlashIcon, {}),
                text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
            },
            {
                icon: (0, s.jsx)(o.EnvelopeIcon, {}),
                text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED
            }
        ];
    return (0, s.jsx)(d.Z, {
        headerText: R ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
        secondaryHeaderText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
        infoRows: x,
        onDismissAndStay: () => {
            D(),
                (0, l.O)(t),
                _.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: c.q.CLICK_TO_STAY,
                    channel_id: t,
                    warning_medium: c.X.MODAL,
                    blocked_user_ids: N
                });
        },
        onDismissAndLeave: () => {
            D(),
                (0, l.O)(t),
                r.Z.closePrivateChannel(t, !0, !0),
                _.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: c.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    warning_medium: c.X.MODAL,
                    blocked_user_ids: N
                });
        },
        leaveButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
        transitionState: M,
        onClose: D
    });
}
