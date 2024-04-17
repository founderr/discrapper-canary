"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
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
  f = l("386696"),
  c = l("71619"),
  m = l("910693"),
  M = l("592125"),
  E = l("271383"),
  S = l("430824"),
  g = l("496675"),
  I = l("594174"),
  C = l("979651"),
  _ = l("630388"),
  R = l("5192"),
  N = l("813872"),
  A = l("981631"),
  v = l("590433"),
  O = l("372897"),
  b = l("689938");

function h(e, t, h, U) {
  let T = n.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    F = null != U ? [U] : [];
  (0, r.useSubscribeGuildMembers)(T), (0, u.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
  let L = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
    P = (0, u.useStateFromStores)([I.default], () => {
      var t;
      return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    p = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(t, e.id), [t, e.id]),
    x = (0, u.useStateFromStores)([M.default], () => M.default.getChannel(h), [h]),
    [, D] = (0, c.default)(e.id, t),
    G = null == x ? void 0 : x.isGuildStageVoice(),
    {
      muted: y,
      deafened: j,
      suppressed: B,
      voiceChannelId: V
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
    K = (0, N.default)({
      userId: e.id,
      guildId: t,
      channelId: h,
      location: U
    }),
    H = (0, m.useTrackModerationAction)(t, {
      location: U,
      targetUserId: e.id
    }),
    w = (0, f.default)(t, e.id),
    Y = null != V && null != h && g.default.canWithPartialContext(A.Permissions.VIEW_CHANNEL, {
      channelId: V
    }) && !p ? [(!G || G && !B) && g.default.canWithPartialContext(A.Permissions.MUTE_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(s.MenuCheckboxItem, {
      id: "voice-mute",
      label: b.default.Messages.SERVER_VOICE_MUTE,
      checked: y,
      color: "danger",
      action: () => {
        !1 === y && H(m.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !y)
      }
    }, "voice-mute") : null, (!G || G && !B) && g.default.canWithPartialContext(A.Permissions.DEAFEN_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(s.MenuCheckboxItem, {
      id: "voice-deafen",
      label: b.default.Messages.SERVER_DEAFEN,
      checked: j,
      color: "danger",
      action: () => d.default.setServerDeaf(t, e.id, !j)
    }, "voice-deafen") : null, !P && null != L && g.default.canWithPartialContext(A.Permissions.MOVE_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(s.MenuItem, {
      id: "voice-disconnect",
      label: P ? b.default.Messages.DISCONNECT_SELF : b.default.Messages.DISCONNECT_OTHER,
      color: "danger",
      action: () => d.default.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    W = async (t, l, a) => {
      if (t.ctrlKey || t.metaKey) try {
        var n;
        await i.default.setCommunicationDisabledDuration(l, a, v.DisableCommunicationDuration.DURATION_60_SEC, null, U), H(m.ModerationActionType.TIMEOUT), (0, s.showToast)((0, s.createToast)(b.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: null !== (n = R.default.getName(l, null, e)) && void 0 !== n ? n : ""
        }), s.ToastType.SUCCESS))
      } catch (e) {
        (0, s.showToast)((0, s.createToast)(b.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, s.ToastType.FAILURE))
      }
    }, z = null, q = null != L && g.default.canManageUser(A.Permissions.MODERATE_MEMBERS, e, L) && g.default.canManageUser(A.Permissions.KICK_MEMBERS, e, L) && g.default.canManageUser(A.Permissions.BAN_MEMBERS, e, L), J = null != L && (g.default.canManageUser(A.Permissions.MANAGE_GUILD, e, L) || g.default.canManageUser(A.Permissions.MANAGE_ROLES, e, L));
  if (!P && null != L && null != k && null != k.joinedAt && (q || J) && L.hasFeature(A.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var Q;
    z = (0, _.hasFlag)(null !== (Q = k.flags) && void 0 !== Q ? Q : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(s.MenuItem, {
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
  return [...Y, ...P || null == L ? [] : [K, z, w && !p ? D ? (0, a.jsx)(s.MenuItem, {
    id: "removetimeout",
    label: b.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, o.openEnableCommunication)(t, e.id, F)
    }
  }, "removetimeout") : (0, a.jsx)(s.MenuItem, {
    id: "timeout",
    label: b.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: l => {
      if (l.ctrlKey || l.metaKey) return W(l, t, e.id);
      (0, o.openDisableCommunication)(t, e.id, F)
    }
  }, "timeout") : null, g.default.canManageUser(A.Permissions.KICK_MEMBERS, e, L) && !e.isClyde() ? (0, a.jsx)(s.MenuItem, {
    id: "kick",
    label: b.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([l.e("99387"), l.e("5454")]).then(l.bind(l, "854360"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: U,
        guildId: t,
        user: e
      })
    })
  }, "kick") : null, g.default.canManageUser(A.Permissions.BAN_MEMBERS, e, L) ? (0, a.jsx)(s.MenuItem, {
    id: "ban",
    label: b.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: U,
        guildId: t,
        user: e
      })
    })
  }, "ban") : null]]
}