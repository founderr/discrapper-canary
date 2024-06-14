"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("47120"), l("789020");
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  s = l("481060"),
  i = l("91176"),
  d = l("749210"),
  r = l("58540"),
  o = l("251794"),
  c = l("386696"),
  f = l("71619"),
  M = l("910693"),
  m = l("592125"),
  E = l("271383"),
  S = l("430824"),
  g = l("496675"),
  I = l("594174"),
  C = l("979651"),
  _ = l("630388"),
  A = l("5192"),
  O = l("813872"),
  R = l("981631"),
  N = l("590433"),
  v = l("372897"),
  h = l("689938");

function b(e, t, b, T) {
  let U = n.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    L = null != T ? [T] : [];
  (0, r.useSubscribeGuildMembers)(U), (0, u.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
  let F = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
    p = (0, u.useStateFromStores)([I.default], () => {
      var t;
      return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    P = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(t, e.id), [t, e.id]),
    x = (0, u.useStateFromStores)([m.default], () => m.default.getChannel(b), [b]),
    [, D] = (0, f.default)(e.id, t),
    G = null == x ? void 0 : x.isGuildStageVoice(),
    {
      muted: y,
      deafened: j,
      suppressed: V,
      voiceChannelId: B
    } = (0, u.useStateFromStoresObject)([C.default], () => {
      var l, a, n;
      let u = C.default.getVoiceState(t, e.id);
      return {
        muted: null !== (l = null == u ? void 0 : u.mute) && void 0 !== l && l,
        deafened: null !== (a = null == u ? void 0 : u.deaf) && void 0 !== a && a,
        suppressed: null !== (n = null == u ? void 0 : u.suppress) && void 0 !== n && n,
        voiceChannelId: null == u ? void 0 : u.channelId
      }
    }),
    k = (0, u.useStateFromStores)([E.default], () => E.default.getMember(t, e.id)),
    w = (0, O.default)({
      userId: e.id,
      guildId: t,
      channelId: b,
      location: T
    }),
    K = (0, M.useTrackModerationAction)(t, {
      location: T,
      targetUserId: e.id
    }),
    H = (0, c.default)(t, e.id),
    Y = null != B && null != b && g.default.canWithPartialContext(R.Permissions.VIEW_CHANNEL, {
      channelId: B
    }) && !P ? [(!G || G && !V) && g.default.canWithPartialContext(R.Permissions.MUTE_MEMBERS, {
      channelId: b
    }) ? (0, a.jsx)(s.MenuCheckboxItem, {
      id: "voice-mute",
      label: h.default.Messages.SERVER_VOICE_MUTE,
      checked: y,
      color: "danger",
      action: () => {
        !1 === y && K(M.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !y)
      }
    }, "voice-mute") : null, (!G || G && !V) && g.default.canWithPartialContext(R.Permissions.DEAFEN_MEMBERS, {
      channelId: b
    }) ? (0, a.jsx)(s.MenuCheckboxItem, {
      id: "voice-deafen",
      label: h.default.Messages.SERVER_DEAFEN,
      checked: j,
      color: "danger",
      action: () => d.default.setServerDeaf(t, e.id, !j)
    }, "voice-deafen") : null, !p && null != F && g.default.canWithPartialContext(R.Permissions.MOVE_MEMBERS, {
      channelId: b
    }) ? (0, a.jsx)(s.MenuItem, {
      id: "voice-disconnect",
      label: p ? h.default.Messages.DISCONNECT_SELF : h.default.Messages.DISCONNECT_OTHER,
      color: "danger",
      action: () => d.default.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    W = async (t, l, a) => {
      if (t.ctrlKey || t.metaKey) try {
        var n;
        await i.default.setCommunicationDisabledDuration(l, a, N.DisableCommunicationDuration.DURATION_60_SEC, null, T), K(M.ModerationActionType.TIMEOUT), (0, s.showToast)((0, s.createToast)(h.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: null !== (n = A.default.getName(l, null, e)) && void 0 !== n ? n : ""
        }), s.ToastType.SUCCESS))
      } catch (e) {
        (0, s.showToast)((0, s.createToast)(h.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, s.ToastType.FAILURE))
      }
    }, z = null, q = null != F && g.default.canManageUser(R.Permissions.MODERATE_MEMBERS, e, F) && g.default.canManageUser(R.Permissions.KICK_MEMBERS, e, F) && g.default.canManageUser(R.Permissions.BAN_MEMBERS, e, F), J = null != F && (g.default.canManageUser(R.Permissions.MANAGE_GUILD, e, F) || g.default.canManageUser(R.Permissions.MANAGE_ROLES, e, F));
  if (!p && null != F && null != k && null != k.joinedAt && (q || J) && F.hasFeature(R.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var Q;
    z = (0, _.hasFlag)(null !== (Q = k.flags) && void 0 !== Q ? Q : 0, v.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(s.MenuItem, {
      id: "verify",
      label: h.default.Messages.MANUALLY_UNVERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(F.id, e.id, (0, _.setFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, v.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
      }
    }, "verify") : (0, a.jsx)(s.MenuItem, {
      id: "verify",
      label: h.default.Messages.MANUALLY_VERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(F.id, e.id, (0, _.setFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, v.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
      }
    }, "verify")
  }
  return [...Y, ...p || null == F ? [] : [w, z, H && !P ? D ? (0, a.jsx)(s.MenuItem, {
    id: "removetimeout",
    label: h.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, o.openEnableCommunication)(t, e.id, L)
    }
  }, "removetimeout") : (0, a.jsx)(s.MenuItem, {
    id: "timeout",
    label: h.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: l => {
      if (l.ctrlKey || l.metaKey) return W(l, t, e.id);
      (0, o.openDisableCommunication)(t, e.id, L)
    }
  }, "timeout") : null, g.default.canManageUser(R.Permissions.KICK_MEMBERS, e, F) && !e.isClyde() ? (0, a.jsx)(s.MenuItem, {
    id: "kick",
    label: h.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([l.e("99387"), l.e("5454")]).then(l.bind(l, "854360"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: T,
        guildId: t,
        user: e
      })
    })
  }, "kick") : null, g.default.canManageUser(R.Permissions.BAN_MEMBERS, e, F) ? (0, a.jsx)(s.MenuItem, {
    id: "ban",
    label: h.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: T,
        guildId: t,
        user: e
      })
    })
  }, "ban") : null]]
}