n.d(l, {
    Z: function () {
        return P;
    }
}),
    n(47120),
    n(789020);
var t = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(91176),
    u = n(749210),
    d = n(58540),
    o = n(251794),
    c = n(386696),
    E = n(71619),
    M = n(910693),
    Z = n(592125),
    I = n(271383),
    g = n(430824),
    m = n(496675),
    _ = n(594174),
    C = n(979651),
    f = n(630388),
    O = n(5192),
    R = n(813872),
    v = n(981631),
    N = n(590433),
    S = n(372897),
    A = n(689938);
function P(e, l, P, h) {
    let U = a.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
        T = null != h ? [h] : [];
    (0, d.$)(U), (0, i.e7)([m.Z], () => m.Z.getGuildVersion(l), [l]);
    let b = (0, i.e7)([g.Z], () => g.Z.getGuild(l), [l]),
        L = (0, i.e7)(
            [_.default],
            () => {
                var l;
                return (null === (l = _.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === e.id;
            },
            [e.id]
        ),
        x = (0, i.e7)([I.ZP], () => I.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
        j = (0, i.e7)([Z.Z], () => Z.Z.getChannel(P), [P]),
        [, p] = (0, E.ZP)(e.id, l),
        D = null == j ? void 0 : j.isGuildStageVoice(),
        {
            muted: B,
            deafened: G,
            suppressed: q,
            voiceChannelId: y
        } = (0, i.cj)([C.Z], () => {
            var n, t, a;
            let i = C.Z.getVoiceState(l, e.id);
            return {
                muted: null !== (n = null == i ? void 0 : i.mute) && void 0 !== n && n,
                deafened: null !== (t = null == i ? void 0 : i.deaf) && void 0 !== t && t,
                suppressed: null !== (a = null == i ? void 0 : i.suppress) && void 0 !== a && a,
                voiceChannelId: null == i ? void 0 : i.channelId
            };
        }),
        V = (0, i.e7)([I.ZP], () => I.ZP.getMember(l, e.id)),
        k = (0, R.Z)({
            userId: e.id,
            guildId: l,
            channelId: P,
            location: h
        }),
        F = (0, M.sE)(l, {
            location: h,
            targetUserId: e.id
        }),
        K = (0, c.Z)(l, e.id),
        w =
            null != y && null != P && m.Z.canWithPartialContext(v.Plq.VIEW_CHANNEL, { channelId: y }) && !x
                ? [
                      (!D || (D && !q)) && m.Z.canWithPartialContext(v.Plq.MUTE_MEMBERS, { channelId: P })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-mute',
                                    label: A.Z.Messages.SERVER_VOICE_MUTE,
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && F(M.jQ.MUTE), u.Z.setServerMute(l, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!D || (D && !q)) && m.Z.canWithPartialContext(v.Plq.DEAFEN_MEMBERS, { channelId: P })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-deafen',
                                    label: A.Z.Messages.SERVER_DEAFEN,
                                    checked: G,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(l, e.id, !G)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != b && m.Z.canWithPartialContext(v.Plq.MOVE_MEMBERS, { channelId: P })
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? A.Z.Messages.DISCONNECT_SELF : A.Z.Messages.DISCONNECT_OTHER,
                                    color: 'danger',
                                    action: () => u.Z.setChannel(l, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        Y = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
                try {
                    var a;
                    await s.Z.setCommunicationDisabledDuration(n, t, N.UK.DURATION_60_SEC, null, h), F(M.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(A.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({ user: null !== (a = O.ZP.getName(n, null, e)) && void 0 !== a ? a : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(A.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, r.ToastType.FAILURE));
                }
        },
        H = null,
        W = null != b && m.Z.canManageUser(v.Plq.MODERATE_MEMBERS, e, b) && m.Z.canManageUser(v.Plq.KICK_MEMBERS, e, b) && m.Z.canManageUser(v.Plq.BAN_MEMBERS, e, b),
        z = null != b && (m.Z.canManageUser(v.Plq.MANAGE_GUILD, e, b) || m.Z.canManageUser(v.Plq.MANAGE_ROLES, e, b));
    if (!L && null != b && null != V && null != V.joinedAt && (W || z) && b.hasFeature(v.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var Q;
        H = (0, f.yE)(null !== (Q = V.flags) && void 0 !== Q ? Q : 0, S.q.BYPASSES_VERIFICATION)
            ? (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: A.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                      action: () => {
                          var l;
                          return u.Z.setMemberFlags(b.id, e.id, (0, f.mB)(null !== (l = V.flags) && void 0 !== l ? l : 0, S.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: A.Z.Messages.MANUALLY_VERIFY_MEMBER,
                      action: () => {
                          var l;
                          return u.Z.setMemberFlags(b.id, e.id, (0, f.mB)(null !== (l = V.flags) && void 0 !== l ? l : 0, S.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...w,
        ...(L || null == b
            ? []
            : [
                  k,
                  H,
                  K && !x
                      ? p
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'removetimeout',
                                    label: A.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({ user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, o.q)(l, e.id, T);
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'timeout',
                                    label: A.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({ user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return Y(n, l, e.id);
                                        (0, o.z)(l, e.id, T);
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  m.Z.canManageUser(v.Plq.KICK_MEMBERS, e, b) && !e.isClyde()
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'kick',
                                label: A.Z.Messages.KICK_USER.format({ user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: a } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, t.jsx)(a, {
                                                ...n,
                                                location: h,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  m.Z.canManageUser(v.Plq.BAN_MEMBERS, e, b)
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'ban',
                                label: A.Z.Messages.BAN_USER.format({ user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: a } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, t.jsx)(a, {
                                                ...n,
                                                location: h,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'ban'
                        )
                      : null
              ])
    ];
}
