"use strict";
i.r(s), i("47120");
var n = i("253923"),
  t = i("230711"),
  E = i("581364"),
  r = i("797610"),
  S = i("200876"),
  o = i("456269"),
  _ = i("228392"),
  l = i("676317"),
  a = i("467138"),
  I = i("434404"),
  u = i("71275"),
  N = i("60222"),
  A = i("665906"),
  R = i("131704"),
  O = i("430824"),
  T = i("63063"),
  d = i("981631"),
  P = i("71080"),
  M = i("689938");

function c(e) {
  let s = (0, N.isGuildEligibleForStageChannels)(e),
    i = (0, o.getEnableForumPermissions)(e),
    n = (0, a.isMemberVerificationManualApproval)(e),
    _ = O.default.getGuild(e),
    l = null != _ && (0, S.isCreatorMonetizationEnabledGuild)(_),
    I = (0, r.getClydeExperimentEnabled)(_),
    u = (0, E.isGuildInUserAppExperiment)(e, {
      location: "get_permission_options"
    });
  return {
    PRIORITY_SPEAKER_DESCRIPTION: M.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: M.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        t.default.open(d.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: M.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: T.default.getArticleURL(d.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: s,
    showExperimental: !0,
    showForumPermissions: i,
    showMembershipManualApprovalPermissions: n,
    showCreatorMonetizationAnalyticsPermission: l,
    showClydeAIPermissions: I,
    externalAppsEnabled: u
  }
}

function C(e, s) {
  return e ? [s()] : []
}
s.default = {
  generateChannelPermissionSpec: function(e, s, i, t) {
    var E, S, a, N, T, C;
    let f = (0, o.getEnableForumPermissions)(e),
      m = (0, P.getChannelPermissionSpecMap)(s, i, f, t),
      L = c(e),
      D = A.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: e,
        location: "3ad37d_1"
      }).enabled && R.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
      g = (0, u.isStageVideoEnabled)(e),
      p = (0, l.canCurrentUserManageMessageFilters)(e),
      U = s.isMediaChannel(),
      h = O.default.getGuild(e),
      G = (0, r.getClydeExperimentEnabled)(h);
    switch (s.type) {
      case d.ChannelTypes.GUILD_CATEGORY:
        ;
        return [n.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), n.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelTextSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: G
        }), n.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), n.generateChannelAppsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(E = L.showStageChannelPermissions, S = () => n.generateChannelStageSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), E ? [S()] : []), n.generateChannelEventsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case d.ChannelTypes.GUILD_VOICE:
        return [n.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), n.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), n.generateChannelVoiceChatSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: p ? M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              I.default.open(e, d.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), n.generateChannelEventsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), n.generateChannelAppsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_APPS)];
      case d.ChannelTypes.GUILD_STAGE_VOICE:
        return [n.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), n.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelStageVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, g), n.generateChannelStageSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n.generateChannelEventsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), n.generateChannelVoiceChatSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: p ? M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              I.default.open(e, d.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case d.ChannelTypes.GUILD_FORUM:
      case d.ChannelTypes.GUILD_MEDIA:
        ;
        let v = U ? M.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : M.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          B = U ? M.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : M.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [n.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), n.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelTextSection(m, v, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: p ? B.format({
            setUpAutomod: () => {
              !U && (0, _.trackForumEnableAutomodClicked)(), I.default.open(e, d.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: G
        }), n.generateChannelAppsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(a = D, N = () => n.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), a ? [N()] : [])];
      default:
        ;
        return [n.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), n.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelTextSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: s.type !== d.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: G
        }), n.generateChannelAppsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(T = D, C = () => n.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), T ? [C()] : [])]
    }
  },
  generateGuildPermissionSpec: function(e) {
    var s, i;
    let t = new Set;
    return !e.hasFeature(d.GuildFeatures.COMMUNITY) && t.add(d.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = n.generateGuildPermissionSpec(M.default.Messages, c(e.id)), 0 === (i = t).size ? s : s.map(e => ({
      ...e,
      permissions: e.permissions.filter(e => !i.has(e.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(e) {
    return n.getGuildPermissionSpec(M.default.Messages, c(e.id))
  }
}