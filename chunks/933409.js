"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("47120"), l("789020");
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  s = l("481060"),
  i = l("91176"),
  d = l("749210"),
  r = l("58540"),
  o = l("251794"),
  f = l("386696"),
  c = l("71619"),
  m = l("910693"),
  E = l("592125"),
  M = l("271383"),
  S = l("430824"),
  g = l("496675"),
  I = l("594174"),
  C = l("979651"),
  _ = l("630388"),
  R = l("5192"),
  v = l("813872"),
  N = l("981631"),
  A = l("590433"),
  O = l("372897"),
  b = l("689938");

function h(e, t, h, T) {
  let F = u.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    U = null != T ? [T] : [];
  (0, r.useSubscribeGuildMembers)(F), (0, n.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
  let L = (0, n.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
    p = (0, n.useStateFromStores)([I.default], () => {
      var t;
      return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    x = (0, n.useStateFromStores)([M.default], () => M.default.isGuestOrLurker(t, e.id), [t, e.id]),
    P = (0, n.useStateFromStores)([E.default], () => E.default.getChannel(h), [h]),
    [, D] = (0, c.default)(e.id, t),
    G = null == P ? void 0 : P.isGuildStageVoice(),
    {
      muted: y,
      deafened: j,
      suppressed: V,
      voiceChannelId: B
    } = (0, n.useStateFromStoresObject)([C.default], () => {
      var l, a, u;
      let n = C.default.getVoiceState(t, e.id);
      return {
        muted: null !== (l = null == n ? void 0 : n.mute) && void 0 !== l && l,
        deafened: null !== (a = null == n ? void 0 : n.deaf) && void 0 !== a && a,
        suppressed: null !== (u = null == n ? void 0 : n.suppress) && void 0 !== u && u,
        voiceChannelId: null == n ? void 0 : n.channelId
      }
    }),
    k = (0, n.useStateFromStores)([M.default], () => M.default.getMember(t, e.id)),
    K = (0, v.default)({
      userId: e.id,
      guildId: t,
      channelId: h,
      location: T
    }),
    H = (0, m.useTrackModerationAction)(t, {
      location: T,
      targetUserId: e.id
    }),
    w = (0, f.default)(t, e.id),
    Y = null != B && null != h && g.default.canWithPartialContext(N.Permissions.VIEW_CHANNEL, {
      channelId: B
    }) && !x ? [(!G || G && !V) && g.default.canWithPartialContext(N.Permissions.MUTE_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(s.MenuCheckboxItem, {
      id: "voice-mute",
      label: b.default.Messages.SERVER_VOICE_MUTE,
      checked: y,
      color: "danger",
      action: () => {
        !1 === y && H(m.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !y)
      }
    }, "voice-mute") : null, (!G || G && !V) && g.default.canWithPartialContext(N.Permissions.DEAFEN_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(s.MenuCheckboxItem, {
      id: "voice-deafen",
      label: b.default.Messages.SERVER_DEAFEN,
      checked: j,
      color: "danger",
      action: () => d.default.setServerDeaf(t, e.id, !j)
    }, "voice-deafen") : null, !p && null != L && g.default.canWithPartialContext(N.Permissions.MOVE_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(s.MenuItem, {
      id: "voice-disconnect",
      label: p ? b.default.Messages.DISCONNECT_SELF : b.default.Messages.DISCONNECT_OTHER,
      color: "danger",
      action: () => d.default.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    W = async (t, l, a) => {
      if (t.ctrlKey || t.metaKey) try {
        var u;
        await i.default.setCommunicationDisabledDuration(l, a, A.DisableCommunicationDuration.DURATION_60_SEC, null, T), H(m.ModerationActionType.TIMEOUT), (0, s.showToast)((0, s.createToast)(b.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: null !== (u = R.default.getName(l, null, e)) && void 0 !== u ? u : ""
        }), s.ToastType.SUCCESS))
      } catch (e) {
        (0, s.showToast)((0, s.createToast)(b.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, s.ToastType.FAILURE))
      }
    }, z = null;
  if (!p && null != L && null != k && null != k.joinedAt && (g.default.canManageUser(N.Permissions.MODERATE_MEMBERS, e, L) || g.default.canManageUser(N.Permissions.MANAGE_ROLES, e, L)) && L.hasFeature(N.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var q;
    z = (0, _.hasFlag)(null !== (q = k.flags) && void 0 !== q ? q : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(s.MenuItem, {
      id: "verify",
      label: b.default.Messages.MANUALLY_UNVERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(L.id, e.id, (0, _.setFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
      }
    }, "verify") : (0, a.jsx)(s.MenuItem, {
      id: "verify",
      label: b.default.Messages.MANUALLY_VERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(L.id, e.id, (0, _.setFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
      }
    }, "verify")
  }
  return [...Y, ...p || null == L ? [] : [K, z, w && !x ? D ? (0, a.jsx)(s.MenuItem, {
    id: "removetimeout",
    label: b.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, o.openEnableCommunication)(t, e.id, U)
    }
  }, "removetimeout") : (0, a.jsx)(s.MenuItem, {
    id: "timeout",
    label: b.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: l => {
      if (l.ctrlKey || l.metaKey) return W(l, t, e.id);
      (0, o.openDisableCommunication)(t, e.id, U)
    }
  }, "timeout") : null, g.default.canManageUser(N.Permissions.KICK_MEMBERS, e, L) && !e.isClyde() ? (0, a.jsx)(s.MenuItem, {
    id: "kick",
    label: b.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: u
      } = await Promise.all([l.e("99387"), l.e("5454")]).then(l.bind(l, "854360"));
      return l => (0, a.jsx)(u, {
        ...l,
        location: T,
        guildId: t,
        user: e
      })
    })
  }, "kick") : null, g.default.canManageUser(N.Permissions.BAN_MEMBERS, e, L) ? (0, a.jsx)(s.MenuItem, {
    id: "ban",
    label: b.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: u
      } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
      return l => (0, a.jsx)(u, {
        ...l,
        location: T,
        guildId: t,
        user: e
      })
    })
  }, "ban") : null]]
}