i.r(n),
    i.d(n, {
        default: function () {
            return E;
        }
    }),
    i(627341);
var t = i(200651);
i(192379);
var s = i(278074),
    a = i(990547),
    r = i(442837),
    o = i(481060),
    l = i(287734),
    d = i(922611),
    c = i(592125),
    u = i(699516),
    _ = i(594174),
    h = i(626135),
    m = i(5192),
    g = i(33194),
    x = i(807031),
    N = i(343544),
    f = i(110223),
    p = i(981631),
    j = i(388032),
    v = i(724076);
function E(e) {
    let { channelId: n, userId: i, transitionState: E, onClose: C } = e,
        I = (0, x.KR)({ location: 'warning_modal' }),
        w = (0, r.e7)([u.Z], () => u.Z.isBlocked(i)),
        A = (0, d.Do)({ location: 'BlockedUserJoinedVoiceChannelModal' }),
        R = (0, r.e7)([c.Z], () => c.Z.getChannel(n));
    if (!I) return null;
    let O = _.default.getUser(i),
        b = [
            {
                icon: A
                    ? (0, t.jsx)('div', {
                          className: v.icon,
                          children: (0, t.jsx)(o.Avatar, {
                              size: o.AvatarSizes.SIZE_32,
                              src: null == O ? void 0 : O.getAvatarURL(null == R ? void 0 : R.guild_id, 32),
                              'aria-hidden': !0
                          })
                      })
                    : (0, t.jsx)(o.UserIcon, {}),
                text: A ? j.intl.formatToPlainString(j.t.V5mxhY, { username: m.ZP.getName(null == R ? void 0 : R.guild_id, n, O) }) : j.intl.formatToPlainString(j.t.w0YvUl, { userName: null == O ? void 0 : O.username }),
                className: A ? v.row : void 0
            },
            {
                icon: A
                    ? (0, t.jsx)('div', {
                          className: v.icon,
                          children: (0, t.jsx)(o.WarningIcon, {})
                      })
                    : (0, t.jsx)(o.MicrophoneIcon, {}),
                text: j.intl.string(j.t['+4O9nZ']),
                className: A ? v.row : void 0
            }
        ],
        T = (0, s.EQ)({
            stealthRemediationEnabled: A,
            isBlocked: w
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () =>
                    (0, t.jsxs)(t.Fragment, {
                        children: [j.intl.string(j.t.cpgfFh), (0, t.jsx)('br', {}), j.intl.string(j.t.UKQ4Cg)]
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () =>
                    (0, t.jsxs)(t.Fragment, {
                        children: [j.intl.string(j.t['xj3j4+']), (0, t.jsx)('br', {}), j.intl.string(j.t.wWueRU)]
                    })
            )
            .otherwise(() => j.intl.string(j.t.K8YIgY));
    return (0, t.jsx)(N.Z, {
        headerText: A ? j.intl.string(j.t['1/gpFh']) : j.intl.string(j.t.LGnmpa),
        secondaryHeaderText: A ? void 0 : j.intl.string(j.t['1/gpFh']),
        descriptionText: T,
        infoRows: b,
        onDismissAndStay: () => {
            C(),
                (0, g.g6)(n),
                h.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: f.q.CLICK_TO_STAY,
                    channel_id: n,
                    blocked_user_ids: w ? [i] : [],
                    ignored_user_ids: w ? [] : [i],
                    warning_surface: f.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            C(),
                l.default.disconnect(),
                h.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: f.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: w ? [i] : [],
                    ignored_user_ids: w ? [] : [i],
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
                blocked_user_ids: w ? [i] : [],
                ignored_user_ids: w ? [] : [i],
                warning_surface: f.fz.POST_JOIN_MODAL
            }
        }
    });
}
