n.d(l, {
    Z: function () {
        return j;
    }
}),
    n(47120),
    n(789020);
var t = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    u = n(91176),
    o = n(749210),
    d = n(616780),
    s = n(251794),
    c = n(386696),
    m = n(71619),
    Z = n(946273),
    g = n(910693),
    M = n(592125),
    E = n(271383),
    v = n(430824),
    f = n(496675),
    I = n(594174),
    h = n(979651),
    C = n(630388),
    P = n(5192),
    S = n(813872),
    b = n(981631),
    O = n(590433),
    R = n(372897),
    x = n(388032);
function j(e, l, j, p) {
    let T = i.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
        A = null != p ? [p] : [];
    (0, d.$)(T), (0, a.e7)([f.Z], () => f.Z.getGuildVersion(l), [l]);
    let _ = (0, a.e7)([v.Z], () => v.Z.getGuild(l), [l]),
        N = (0, a.e7)(
            [I.default],
            () => {
                var l;
                return (null === (l = I.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === e.id;
            },
            [e.id]
        ),
        U = (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
        y = (0, a.e7)([M.Z], () => M.Z.getChannel(j), [j]),
        [, q] = (0, m.ZP)(e.id, l),
        k = null == y ? void 0 : y.isGuildStageVoice(),
        {
            muted: B,
            deafened: L,
            suppressed: D,
            voiceChannelId: V
        } = (0, a.cj)([h.Z], () => {
            var n, t, i;
            let a = h.Z.getVoiceState(l, e.id);
            return {
                muted: null !== (n = null == a ? void 0 : a.mute) && void 0 !== n && n,
                deafened: null !== (t = null == a ? void 0 : a.deaf) && void 0 !== t && t,
                suppressed: null !== (i = null == a ? void 0 : a.suppress) && void 0 !== i && i,
                voiceChannelId: null == a ? void 0 : a.channelId
            };
        }),
        G = (0, a.e7)([E.ZP], () => E.ZP.getMember(l, e.id)),
        F = (0, S.Z)({
            userId: e.id,
            guildId: l,
            channelId: j,
            location: p
        }),
        w = (0, g.sE)(l, {
            location: p,
            targetUserId: e.id
        }),
        K = (0, c.Z)(l, e.id),
        Y =
            null != V && null != j && f.Z.canWithPartialContext(b.Plq.VIEW_CHANNEL, { channelId: V }) && !U
                ? [
                      (!k || (k && !D)) && f.Z.canWithPartialContext(b.Plq.MUTE_MEMBERS, { channelId: j })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-mute',
                                    label: x.intl.string(x.t.e9e9UV),
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && w(g.jQ.MUTE), o.Z.setServerMute(l, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!k || (k && !D)) && f.Z.canWithPartialContext(b.Plq.DEAFEN_MEMBERS, { channelId: j })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-deafen',
                                    label: x.intl.string(x.t.hMA2GB),
                                    checked: L,
                                    color: 'danger',
                                    action: () => o.Z.setServerDeaf(l, e.id, !L)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !N && null != _ && f.Z.canWithPartialContext(b.Plq.MOVE_MEMBERS, { channelId: j })
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'voice-disconnect',
                                    label: N ? x.intl.string(x.t['6vrfgo']) : x.intl.string(x.t['/jERiI']),
                                    color: 'danger',
                                    action: () => o.Z.setChannel(l, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        Q = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
                try {
                    var i;
                    await u.Z.setCommunicationDisabledDuration(n, t, O.UK.DURATION_60_SEC, null, p), w(g.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(x.intl.formatToPlainString(x.t.O9C3Nj, { user: null !== (i = P.ZP.getName(n, null, e)) && void 0 !== i ? i : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(x.intl.string(x.t.epyCur), r.ToastType.FAILURE));
                }
        },
        W = null,
        z = null != _ && f.Z.canManageUser(b.Plq.MODERATE_MEMBERS, e, _) && f.Z.canManageUser(b.Plq.KICK_MEMBERS, e, _) && f.Z.canManageUser(b.Plq.BAN_MEMBERS, e, _),
        H = null != _ && (f.Z.canManageUser(b.Plq.MANAGE_GUILD, e, _) || f.Z.canManageUser(b.Plq.MANAGE_ROLES, e, _));
    if (!N && null != _ && null != G && null != G.joinedAt && (z || H) && _.hasFeature(b.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var J;
        W = (0, C.yE)(null !== (J = G.flags) && void 0 !== J ? J : 0, R.q.BYPASSES_VERIFICATION)
            ? (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: x.intl.string(x.t.NbhSIy),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(_.id, e.id, (0, C.mB)(null !== (l = G.flags) && void 0 !== l ? l : 0, R.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: x.intl.string(x.t['6QlTeH']),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(_.id, e.id, (0, C.mB)(null !== (l = G.flags) && void 0 !== l ? l : 0, R.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...Y,
        ...(N || null == _
            ? []
            : [
                  F,
                  W,
                  K && !U
                      ? q
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'removetimeout',
                                    label: x.intl.formatToPlainString(x.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, s.q)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: A
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'timeout',
                                    label: x.intl.formatToPlainString(x.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return Q(n, l, e.id);
                                        (0, s.z)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: A
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  (0, Z.BK)(e, _)
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'kick',
                                label: x.intl.formatToPlainString(x.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, t.jsx)(i, {
                                                ...n,
                                                location: p,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  (0, Z.mm)(e, _)
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'ban',
                                label: x.intl.formatToPlainString(x.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: i } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, t.jsx)(i, {
                                                ...n,
                                                location: p,
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
