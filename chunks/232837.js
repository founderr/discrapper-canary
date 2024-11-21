t.r(n),
    t.d(n, {
        default: function () {
            return E;
        }
    }),
    t(627341);
var i = t(200651);
t(192379);
var s = t(278074),
    a = t(990547),
    r = t(442837),
    o = t(481060),
    l = t(287734),
    d = t(922611),
    c = t(592125),
    u = t(699516),
    _ = t(594174),
    h = t(626135),
    m = t(5192),
    g = t(33194),
    x = t(807031),
    N = t(343544),
    f = t(110223),
    p = t(981631),
    j = t(388032),
    v = t(724076);
function E(e) {
    let { channelId: n, userId: t, transitionState: E, onClose: C } = e,
        I = (0, x.KR)({ location: 'warning_modal' }),
        A = (0, r.e7)([u.Z], () => u.Z.isBlocked(t)),
        w = (0, d.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        R = (0, r.e7)([c.Z], () => c.Z.getChannel(n));
    if (!I) return null;
    let O = _.default.getUser(t),
        T = [
            {
                icon: w
                    ? (0, i.jsx)('div', {
                          className: v.icon,
                          children: (0, i.jsx)(o.Avatar, {
                              size: o.AvatarSizes.SIZE_32,
                              src: null == O ? void 0 : O.getAvatarURL(null == R ? void 0 : R.guild_id, 32),
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(o.UserIcon, {}),
                text: w ? j.intl.formatToPlainString(j.t.V5mxhY, { username: m.ZP.getName(null == R ? void 0 : R.guild_id, n, O) }) : j.intl.formatToPlainString(j.t.w0YvUl, { userName: null == O ? void 0 : O.username }),
                className: w ? v.row : void 0
            },
            {
                icon: w
                    ? (0, i.jsx)('div', {
                          className: v.icon,
                          children: (0, i.jsx)(o.WarningIcon, {})
                      })
                    : (0, i.jsx)(o.MicrophoneIcon, {}),
                text: j.intl.string(j.t['+4O9nZ']),
                className: w ? v.row : void 0
            }
        ],
        b = (0, s.EQ)({
            stealthRemediationEnabled: w,
            isBlocked: A
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [j.intl.string(j.t.cpgfFh), (0, i.jsx)('br', {}), j.intl.string(j.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [j.intl.string(j.t['xj3j4+']), (0, i.jsx)('br', {}), j.intl.string(j.t.wWueRU)]
                    })
            )
            .otherwise(() => j.intl.string(j.t.K8YIgY));
    return (0, i.jsx)(N.Z, {
        headerText: w ? j.intl.string(j.t['1/gpFh']) : j.intl.string(j.t.LGnmpa),
        secondaryHeaderText: w ? void 0 : j.intl.string(j.t['1/gpFh']),
        descriptionText: b,
        infoRows: T,
        onDismissAndStay: () => {
            C(),
                (0, g.g6)(n),
                h.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: f.q.CLICK_TO_STAY,
                    channel_id: n,
                    blocked_user_ids: A ? [t] : [],
                    ignored_user_ids: A ? [] : [t],
                    warning_surface: f.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            C(),
                l.default.disconnect(),
                h.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: f.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: A ? [t] : [],
                    ignored_user_ids: A ? [] : [t],
                    warning_surface: f.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: j.intl.string(j.t['Y56/oK']),
        stayButtonText: j.intl.string(j.t['Z+/hfX']),
        transitionState: E,
        onClose: C,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: A ? [t] : [],
                ignored_user_ids: A ? [] : [t],
                warning_surface: f.fz.POST_JOIN_MODAL
            }
        }
    });
}
