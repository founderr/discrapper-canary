"use strict";
var i = n(990547),
  r = n(544891),
  s = n(570140),
  o = n(37234),
  a = n(710845),
  l = n(655006),
  u = n(408987),
  _ = n(962086),
  c = n(160404),
  d = n(41776),
  E = n(314897),
  I = n(271383),
  T = n(430824),
  h = n(546796),
  f = n(573261),
  S = n(999382),
  A = n(981631),
  N = n(308083),
  m = n(689938);
let O = new a.Z("GuildSettingsActionCreators"),
  p = {
    init(e, t, n, i) {
      s.Z.dispatch({
        type: "GUILD_SETTINGS_INIT",
        guildId: e,
        section: t,
        subsection: i,
        location: n
      })
    },
    async open(e, t, i, r) {
      var s;
      await Promise.all([n.e("96427"), n.e("23755"), n.e("89350"), n.e("11751"), n.e("29549"), n.e("33053"), n.e("50654"), n.e("7654"), n.e("31605"), n.e("65840"), n.e("41662"), n.e("44156"), n.e("90508"), n.e("33009"), n.e("85552"), n.e("58227"), n.e("3084"), n.e("65392"), n.e("75291"), n.e("62993"), n.e("1187"), n.e("24420"), n.e("92557"), n.e("36439"), n.e("32966")]).then(n.bind(n, 994763)), (null === (s = T.Z.getGuild(e)) || void 0 === s ? void 0 : s.hasFeature(A.oNc.COMMUNITY)) && (t === A.pNK.GUILD_AUTOMOD && (t = A.pNK.SAFETY, r = A.KsC.SAFETY_AUTOMOD), t === A.pNK.MEMBER_VERIFICATION && (t = A.pNK.SAFETY, r = A.KsC.SAFETY_DM_AND_SPAM_PROTECTION)), p.init(e, t, i, r);
      (0, o.jN)(A.S9g.GUILD_SETTINGS)
    },
    close() {
      s.Z.dispatch({
        type: "GUILD_SETTINGS_CLOSE"
      })
    },
    saveRouteStack(e) {
      s.Z.dispatch({
        type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
        state: e
      })
    },
    setSection(e, t) {
      var n;
      let i = S.Z.getGuildId();
      null != i && ((null === (n = T.Z.getGuild(i)) || void 0 === n ? void 0 : n.hasFeature(A.oNc.COMMUNITY)) && (e === A.pNK.GUILD_AUTOMOD && (e = A.pNK.SAFETY, t = A.KsC.SAFETY_AUTOMOD), e === A.pNK.MEMBER_VERIFICATION && (e = A.pNK.SAFETY, t = A.KsC.SAFETY_DM_AND_SPAM_PROTECTION)), s.Z.dispatch({
        type: "GUILD_SETTINGS_SET_SECTION",
        section: e,
        subsection: t
      }))
    },
    setSearchQuery(e) {
      s.Z.dispatch({
        type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
        searchQuery: e
      })
    },
    selectRole: (e, t) => s.Z.dispatch({
      type: "GUILD_SETTINGS_ROLE_SELECT",
      roleId: e,
      searchQuery: t
    }),
    updateEmbed(e, t, n) {
      r.tn.patch({
        url: A.ANM.GUILD_WIDGET(e),
        body: {
          enabled: t,
          channel_id: n
        },
        oldFormErrors: !0
      }).then(t => {
        s.Z.dispatch({
          type: "GUILD_SETTINGS_SET_WIDGET",
          guildId: e,
          enabled: t.body.enabled,
          channelId: t.body.channel_id
        })
      })
    },
    updateMFALevel(e) {
      let {
        guildId: t,
        level: n,
        isEnabled: i
      } = e;
      return (0, h.Z)(e => r.tn.post({
        url: A.ANM.GUILD_MFA(t),
        body: {
          level: n,
          ...e
        },
        oldFormErrors: !0
      }), {
        modalProps: {
          title: m.Z.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
          actionText: i ? m.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : m.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
        },
        checkEnabled: !1
      }).then(e => s.Z.dispatch({
        type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
        level: e.body.level
      }))
    },
    updateIcon(e, t) {
      r.tn.patch({
        url: A.ANM.GUILD(e),
        body: {
          icon: t
        },
        oldFormErrors: !0
      }).then(() => {
        s.Z.dispatch({
          type: "GUILD_SETTINGS_UPDATE",
          icon: t
        }), u.Z.checkGuildTemplateDirty(e)
      }, e => s.Z.dispatch({
        type: "GUILD_SETTINGS_SUBMIT_FAILURE",
        errors: e.body
      }))
    },
    cancelChanges(e) {
      s.Z.dispatch({
        type: "GUILD_SETTINGS_CANCEL_CHANGES",
        guildId: e
      })
    },
    updateGuild(e) {
      var t, n;
      let {
        safetyAlertsChannelId: i,
        clan: r,
        ...o
      } = e, a = {
        ...o
      };
      null != r && (a.clan = {
        ...null !== (t = a.clan) && void 0 !== t ? t : {},
        ...r
      });
      let u = S.Z.getGuildId();
      null != u && (null === (n = l.l.getCurrentConfig({
        guildId: u,
        location: "be0372_1"
      })) || void 0 === n ? void 0 : n.enableRaidAlerts) && null != i && (a.safetyAlertsChannelId = i), s.Z.dispatch({
        type: "GUILD_SETTINGS_UPDATE",
        ...a
      })
    },
    saveGuild(e, t) {
      let {
        name: n,
        description: i,
        icon: o,
        splash: a,
        banner: l,
        homeHeader: _,
        afkChannelId: c,
        afkTimeout: d,
        systemChannelId: E,
        verificationLevel: I,
        defaultMessageNotifications: T,
        explicitContentFilter: h,
        features: f,
        systemChannelFlags: S,
        preferredLocale: m,
        rulesChannelId: p,
        safetyAlertsChannelId: R,
        discoverySplash: g,
        publicUpdatesChannelId: C,
        premiumProgressBarEnabled: v,
        clan: L
      } = t, D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, M = {
        name: n,
        description: i,
        icon: o,
        splash: a,
        banner: l,
        home_header: _,
        features: f,
        preferred_locale: m,
        afk_channel_id: c,
        afk_timeout: d,
        system_channel_id: E,
        verification_level: I,
        default_message_notifications: T,
        explicit_content_filter: h,
        system_channel_flags: S,
        rules_channel_id: p,
        discovery_splash: g,
        public_updates_channel_id: C,
        safety_alerts_channel_id: R,
        ...null != v ? {
          premium_progress_bar_enabled: v
        } : null,
        clan: null != L ? (0, N.A9)(L) : L
      };
      return s.Z.dispatch({
        type: "GUILD_SETTINGS_SUBMIT"
      }), r.tn.patch({
        url: A.ANM.GUILD(e),
        query: {
          for_discovery: D.isForDiscovery
        },
        body: M,
        oldFormErrors: !0
      }).then(t => {
        s.Z.dispatch({
          type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
          guild: t.body
        }), u.Z.checkGuildTemplateDirty(e)
      }, e => {
        if (s.Z.dispatch({
            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
            errors: e.body
          }), O.error("Failed to save guild settings", {
            errors: e.body
          }), D.throwErr) throw e.body
      })
    },
    updateGuildModeration: (e, t) => r.tn.patch({
      url: A.ANM.GUILD(e),
      body: {
        verification_level: t.verificationLevel,
        explicit_content_filter: t.explicitContentFilter
      },
      oldFormErrors: !0
    }).then(t => (u.Z.checkGuildTemplateDirty(e), t)),
    transferOwnership(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return (0, h.Z)(s => f.Z.patch({
        url: A.ANM.GUILD(e),
        body: {
          owner_id: t,
          code: r,
          ...s
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
          properties: {
            guild_id: e,
            verification_type: n
          }
        }
      }), {
        modalProps: {
          title: m.Z.Messages.TRANSFER_OWNERSHIP,
          actionText: m.Z.Messages.TRANSFER_OWNERSHIP
        },
        checkEnabled: !1
      })
    },
    sendTransferOwnershipPincode(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return f.Z.put({
        url: A.ANM.GUILD_PINCODE(e),
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
          properties: {
            guild_id: e,
            is_resend: t
          }
        }
      })
    },
    deleteGuild: (e, t) => (0, h.Z)(t => r.tn.post({
      url: A.ANM.GUILD_DELETE(e),
      body: t,
      oldFormErrors: !0
    }), {
      modalProps: {
        title: m.Z.Messages.DELETE_SERVER_TITLE.format({
          name: t
        }),
        actionText: m.Z.Messages.DELETE_SERVER,
        disallowBackupCodes: !0
      },
      checkEnabled: !1
    }).then(() => {
      p.close()
    }),
    async leaveGuild(e) {
      await r.tn.del({
        url: A.ANM.GUILD_LEAVE(e),
        body: {
          lurking: d.Z.isLurking(e) || I.ZP.isCurrentUserGuest(e)
        },
        oldFormErrors: !0
      }), p.close()
    },
    async updateMemberRoles(e, t, n, i, o) {
      if (c.Z.isFullServerPreview(e) && t === E.default.getId()) {
        (0, _.og)(e, n);
        return
      }
      await r.tn.patch({
        url: A.ANM.GUILD_MEMBER(e, t),
        body: {
          roles: n
        },
        oldFormErrors: !0
      }), i.forEach(n => s.Z.dispatch({
        type: "GUILD_ROLE_MEMBER_ADD",
        guildId: e,
        roleId: n,
        userId: t
      })), o.forEach(n => s.Z.dispatch({
        type: "GUILD_ROLE_MEMBER_REMOVE",
        guildId: e,
        roleId: n,
        userId: t
      }))
    },
    bulkAddMemberRoles: (e, t, n) => r.tn.patch({
      url: A.ANM.GUILD_ROLE_MEMBERS(e, t),
      body: {
        member_ids: n
      }
    }).then(n => {
      s.Z.dispatch({
        type: "GUILD_ROLE_MEMBER_BULK_ADD",
        guildId: e,
        roleId: t,
        added: n.body
      })
    }),
    updateRolesEditSection(e) {
      s.Z.dispatch({
        type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
        section: e
      })
    },
    enableIntegration: (e, t, n) => r.tn.post({
      url: A.ANM.GUILD_INTEGRATIONS(e),
      body: {
        type: t,
        id: n
      },
      oldFormErrors: !0
    }),
    disableIntegration: (e, t) => r.tn.del({
      url: A.ANM.GUILD_INTEGRATION(e, t),
      oldFormErrors: !0
    }),
    updateIntegration: (e, t, n, i, s) => r.tn.patch({
      url: A.ANM.GUILD_INTEGRATION(e, t),
      body: {
        expire_behavior: n,
        expire_grace_period: i,
        enable_emoticons: s
      },
      oldFormErrors: !0
    }),
    syncIntegration(e, t) {
      r.tn.post({
        url: A.ANM.GUILD_INTEGRATION_SYNC(e, t),
        oldFormErrors: !0
      })
    }
  };
t.Z = p