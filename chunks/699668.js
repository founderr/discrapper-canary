"use strict";
n.r(t), n.d(t, {
  useGuildMigrationSteps: function() {
    return D
  },
  hasGoodCandidateServers: function() {
    return G
  },
  autoMigrateToNewSystem: function() {
    return x
  },
  useSaveSettings: function() {
    return L
  },
  revertToOldSystem: function() {
    return H
  },
  transformUsageData: function() {
    return B
  }
}), n("222007"), n("702976"), n("808653"), n("70102");
var i = n("884691"),
  a = n("917351"),
  s = n.n(a),
  l = n("446674"),
  r = n("95410"),
  o = n("913144"),
  u = n("404118"),
  d = n("519705"),
  c = n("542827"),
  f = n("679428"),
  m = n("42507"),
  h = n("350522"),
  g = n("525065"),
  _ = n("952451"),
  S = n("305961"),
  p = n("677099"),
  T = n("282109"),
  E = n("599110"),
  v = n("568734"),
  I = n("449008"),
  N = n("286235"),
  y = n("649649"),
  O = n("845868"),
  C = n("287223"),
  A = n("76618"),
  M = n("380353"),
  P = n("49111"),
  b = n("133335"),
  R = n("397336"),
  w = n("782340");

function D(e, t) {
  let [n, a] = i.useState(M.defaultThresholds), [r, o] = i.useState({});
  (0, m.useFrecencySettings)();
  let u = (0, l.useStateFromStoresArray)([S.default], () => Object.values(S.default.getGuilds())),
    d = i.useCallback(() => {
      let i = {};
      for (let a of u) i[a.id] = function(e, t, n, i, a) {
        var s;
        let [l, r, o] = h.default.hasConsented(P.Consents.PERSONALIZATION) ? (0, C.guessGuildModeWithRemoteData)(e, t, n, i, !0) : (0, C.guessGuildModeWithLocalData)(e, n), u = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, O.default)(e, null != a ? a : l, u, i, t);
        return {
          guildId: e.id,
          mode: l,
          debugReason: o,
          actions: d,
          overrideMode: a,
          messagePain: u.messages === M.PainLevel.High,
          visitsALot: r,
          muted: T.default.isMuted(e.id) && !T.default.isTemporarilyMuted(e.id)
        }
      }(a, n, e, t, r[a.id]);
      return i
    }, [u, n, e, t, r]),
    [c, f] = i.useState(() => d());
  i.useEffect(() => f(d()), [d]);
  let g = i.useCallback((e, t) => {
    o(n => ({
      ...n,
      [e]: t
    }))
  }, []);
  return {
    guildPlans: c,
    overrideGuild: g,
    setThresholds: a,
    getDebug: () => (function(e, t) {
      let n = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
        }, 0),
        i = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
        }, 0),
        a = p.default.getFlattenedGuildIds(),
        l = s.sortBy(Object.values(e), e => {
          let t = a.indexOf(e.guildId);
          return -1 === t ? a.length : t
        }),
        r = [
          ["Use Grey Dot", new Set([M.Mode.UseGreyDot])],
          ["Keep As Is", new Set([M.Mode.KeepAsIs])]
        ].map(e => {
          let [t, n] = e, i = l.filter(e => {
            var t;
            return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
          }), a = i.map(e => {
            let t = S.default.getGuild(e.guildId),
              n = e.actions.map(e => {
                var t;
                return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
              }).join("\n");
            return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
          });
          return "# ".concat(t, "\n\n").concat(a.join("\n\n"))
        });
      return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(r.join("\n\n"))
    })(Object.values(c), t)
  }
}

function G(e, t) {
  return Object.values(S.default.getGuilds()).some(n => {
    let [i] = h.default.hasConsented(P.Consents.PERSONALIZATION) ? (0, C.guessGuildModeWithRemoteData)(n, M.defaultThresholds, e, t, !1) : (0, C.guessGuildModeWithLocalData)(n, e);
    return i === M.Mode.UseGreyDot
  })
}

function x() {
  let e = Object.values(S.default.getGuilds()),
    t = {};
  for (let a of e) {
    var n, i;
    let e = null !== (n = T.default.getAllSettings().userGuildSettings[a.id]) && void 0 !== n ? n : {},
      s = null !== (i = e.flags) && void 0 !== i ? i : 0;
    s = (0, v.setFlag)(s, R.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), s = (0, v.setFlag)(s, R.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[a.id] = {
      flags: s
    }
  }
  j(t), E.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
    auto_migrated: !0,
    num_unread_guids_after: e.filter(e => _.default.hasUnread(e.id)).length
  })
}

function L(e) {
  let [t, n] = i.useState(!1), [a, s] = i.useState(!1), l = i.useCallback(async t => {
    if (a) throw Error("Already submitted notifications migration");
    n(!0);
    try {
      await U(t, e), s(!0)
    } finally {
      n(!1)
    }
  }, [a, e]);
  return {
    submitting: t,
    submitted: a,
    saveSettings: l
  }
}
async function U(e, t) {
  if (T.default.useNewNotifications) {
    u.default.show({
      title: "Info",
      body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
    });
    return
  }
  let n = function(e) {
    let t = Object.values(e).filter(e => {
        var t;
        return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === M.Mode.UseGreyDot
      }).map(e => {
        var t;
        return {
          plan: e,
          memberCount: null !== (t = g.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
        }
      }),
      n = {
        num_unread_guilds_before: Object.keys(e).filter(e => _.default.hasUnread(e)).length,
        unmuted_server_ids: t.filter(e => T.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
      };
    return () => {
      E.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
        ...n,
        auto_migrated: !0,
        pre_selected_server_ids: Object.values(e).filter(e => e.mode === M.Mode.UseGreyDot).map(e => e.guildId),
        final_selected_server_ids: t.map(e => e.plan.guildId),
        num_unread_guids_after: Object.keys(e).filter(e => _.default.hasUnread(e)).length,
        num_tiny_servers_selected: t.filter(e => e.memberCount <= 20).length,
        num_small_servers_selected: t.filter(e => e.memberCount > 20 && e.memberCount <= 200).length,
        num_medium_servers_selected: t.filter(e => e.memberCount > 200 && e.memberCount <= 1e3).length,
        num_large_servers_selected: t.filter(e => e.memberCount > 1e3).length,
        num_quiet_servers_selected: t.filter(e => !e.plan.messagePain).length,
        num_busy_servers_selected: t.filter(e => e.plan.messagePain).length,
        num_frequent_visited_servers_selected: t.filter(e => e.plan.visitsALot).length,
        num_infrequent_visited_servers_selected: t.filter(e => !e.plan.visitsALot).length
      })
    }
  }(e);
  try {
    let t = {};
    for (let n of Object.values(e)) {
      var i, a;
      let e = null !== (i = T.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
        s = {};
      for (let t of n.actions) null === (a = t.apply) || void 0 === a || a.call(t, s, e);
      t[n.guildId] = s
    }
    await j(t);
    let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
    if (s.length > 0) {
      let e = setTimeout(n, 5e3);
      (0, c.default)(s, void 0, () => {
        o.default.dispatch({
          type: "RECOMPUTE_READ_STATES"
        }), clearTimeout(e), n()
      })
    } else n()
  } catch (e) {
    N.default.captureException(e), u.default.show({
      title: w.default.Messages.ERROR,
      body: w.default.Messages.NOTIF_MIGRATION_ERROR,
      onConfirm: t
    })
  }
}
async function j(e) {
  await k(() => F()), await k(() => d.default.setAccountFlag(A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
  let t = await k(() => f.default.saveUserGuildSettingsBulk(e));
  o.default.dispatch({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: t
  }), o.default.dispatch({
    type: "RECOMPUTE_READ_STATES"
  })
}
async function k(e) {
  for (let e = 0; e < 3; e++) try {
    break
  } catch (t) {
    await new Promise(t => setTimeout(t, 1e3 * (e + 1)))
  }
  return await e()
}
async function F() {
  let e = await (0, y.listSnapshots)();
  if (e.length > 0) {
    let t = await

    function() {
      return new Promise(e => {
        u.default.show({
          title: "Create new Backup?",
          body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
          confirmText: "Take New Backup",
          cancelText: "Skip Backup",
          onConfirm: () => e(!0),
          onCancel: () => e(!1)
        })
      })
    }();
    t && (0, y.backupSettings)(e)
  } else(0, y.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
}
async function H() {
  r.default.set("turnedOffNewNotifications", !0), E.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: Object.values(S.default.getGuilds()).filter(e => T.default.resolveGuildUnreadSetting(e) === b.UnreadSetting.ONLY_MENTIONS).length
  });
  let e = await (0, y.listSnapshots)(),
    t = s.sortBy(e, e => new Date(e.recorded_at).getTime());
  if (t.length > 0) {
    let e = t[t.length - 1];
    await new Promise(t => u.default.show({
      title: "Please Confirm",
      body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
      onConfirm: t,
      cancelText: "Cancel",
      onCancel: () => {}
    })), await (0, y.restoreSnapshot)(e.id), await d.default.setAccountFlag(A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
  } else await d.default.setAccountFlag(A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
}

function B(e) {
  var t, n, i;
  if (null == e) return [];
  let a = s.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
    l = s.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
  return (null !== (i = e.channel_opens) && void 0 !== i ? i : []).map(e => {
    var t, n, i, s, r, o, u, d, c, f, m;
    let h = null !== (t = a[e.channel_id]) && void 0 !== t ? t : {},
      g = null !== (n = l[e.channel_id]) && void 0 !== n ? n : {};
    return {
      channel_id: e.channel_id,
      num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
      num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
      num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
      num_six_month_opens: Number(null !== (o = e.six_month_opens) && void 0 !== o ? o : 0),
      num_messages: Number(null !== (u = null == g ? void 0 : g.num_messages) && void 0 !== u ? u : 0),
      num_year_voice_joins: Number(null !== (d = null == h ? void 0 : h.year_opens) && void 0 !== d ? d : 0),
      num_month_voice_joins: Number(null !== (c = null == h ? void 0 : h.one_month_opens) && void 0 !== c ? c : 0),
      num_three_month_voice_joins: Number(null !== (f = null == h ? void 0 : h.three_month_opens) && void 0 !== f ? f : 0),
      num_six_month_voice_joins: Number(null !== (m = null == h ? void 0 : h.six_month_opens) && void 0 !== m ? m : 0)
    }
  }).filter(I.isNotNullish)
}