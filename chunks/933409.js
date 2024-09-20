n.d(l, {
    Z: function () {
        return N;
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
    R = n(630388),
    v = n(5192),
    f = n(813872),
    S = n(981631),
    O = n(590433),
    P = n(372897),
    h = n(689938);
function N(e, l, N, A) {
    let U = a.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
        T = null != A ? [A] : [];
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
        j = (0, i.e7)([Z.Z], () => Z.Z.getChannel(N), [N]),
        [, p] = (0, E.ZP)(e.id, l),
        D = null == j ? void 0 : j.isGuildStageVoice(),
        {
            muted: B,
            deafened: q,
            suppressed: V,
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
        k = (0, i.e7)([I.ZP], () => I.ZP.getMember(l, e.id)),
        G = (0, f.Z)({
            userId: e.id,
            guildId: l,
            channelId: N,
            location: A
        }),
        F = (0, M.sE)(l, {
            location: A,
            targetUserId: e.id
        }),
        w = (0, c.Z)(l, e.id),
        K =
            null != y && null != N && m.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: y }) && !x
                ? [
                      (!D || (D && !V)) && m.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, { channelId: N })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-mute',
                                    label: h.Z.Messages.SERVER_VOICE_MUTE,
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && F(M.jQ.MUTE), u.Z.setServerMute(l, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!D || (D && !V)) && m.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, { channelId: N })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-deafen',
                                    label: h.Z.Messages.SERVER_DEAFEN,
                                    checked: q,
                                    color: 'danger',
                                    action: () => u.Z.setServerDeaf(l, e.id, !q)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !L && null != b && m.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, { channelId: N })
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'voice-disconnect',
                                    label: L ? h.Z.Messages.DISCONNECT_SELF : h.Z.Messages.DISCONNECT_OTHER,
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
                    await s.Z.setCommunicationDisabledDuration(n, t, O.UK.DURATION_60_SEC, null, A), F(M.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(h.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({ user: null !== (a = v.ZP.getName(n, null, e)) && void 0 !== a ? a : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(h.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, r.ToastType.FAILURE));
                }
        },
        W = null,
        H = null != b && m.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, b) && m.Z.canManageUser(S.Plq.KICK_MEMBERS, e, b) && m.Z.canManageUser(S.Plq.BAN_MEMBERS, e, b),
        Q = null != b && (m.Z.canManageUser(S.Plq.MANAGE_GUILD, e, b) || m.Z.canManageUser(S.Plq.MANAGE_ROLES, e, b));
    if (!L && null != b && null != k && null != k.joinedAt && (H || Q) && b.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var z;
        W = (0, R.yE)(null !== (z = k.flags) && void 0 !== z ? z : 0, P.q.BYPASSES_VERIFICATION)
            ? (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: h.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                      action: () => {
                          var l;
                          return u.Z.setMemberFlags(b.id, e.id, (0, R.mB)(null !== (l = k.flags) && void 0 !== l ? l : 0, P.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: h.Z.Messages.MANUALLY_VERIFY_MEMBER,
                      action: () => {
                          var l;
                          return u.Z.setMemberFlags(b.id, e.id, (0, R.mB)(null !== (l = k.flags) && void 0 !== l ? l : 0, P.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...K,
        ...(L || null == b
            ? []
            : [
                  G,
                  W,
                  w && !x
                      ? p
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'removetimeout',
                                    label: h.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({ user: e.username }),
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
                                    label: h.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({ user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return Y(n, l, e.id);
                                        (0, o.z)(l, e.id, T);
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  m.Z.canManageUser(S.Plq.KICK_MEMBERS, e, b) && !e.isClyde()
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'kick',
                                label: h.Z.Messages.KICK_USER.format({ user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: a } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, t.jsx)(a, {
                                                ...n,
                                                location: A,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  m.Z.canManageUser(S.Plq.BAN_MEMBERS, e, b)
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'ban',
                                label: h.Z.Messages.BAN_USER.format({ user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: a } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, t.jsx)(a, {
                                                ...n,
                                                location: A,
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
