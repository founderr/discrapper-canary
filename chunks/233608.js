"use strict";
s.r(S), s("47120");
var e = s("253923"),
  i = s("230711"),
  _ = s("797610"),
  n = s("200876"),
  I = s("456269"),
  t = s("228392"),
  r = s("676317"),
  N = s("467138"),
  R = s("434404"),
  o = s("71275"),
  A = s("60222"),
  O = s("665906"),
  P = s("131704"),
  T = s("430824"),
  M = s("63063"),
  C = s("981631"),
  a = s("71080"),
  m = s("689938");

function l(E) {
  let S = (0, A.isGuildEligibleForStageChannels)(E),
    s = (0, I.getEnableForumPermissions)(E),
    e = (0, N.isMemberVerificationManualApproval)(E),
    t = T.default.getGuild(E),
    r = null != t && (0, n.isCreatorMonetizationEnabledGuild)(t),
    R = (0, _.getClydeExperimentEnabled)(t);
  return {
    PRIORITY_SPEAKER_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(C.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: M.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: S,
    showExperimental: !0,
    showForumPermissions: s,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: r,
    showClydeAIPermissions: R
  }
}

function D(E, S) {
  return E ? [S()] : []
}
S.default = {
  generateChannelPermissionSpec: function(E, S, s, i) {
    var n, N, A, M, D, L;
    let g = (0, I.getEnableForumPermissions)(E),
      u = (0, a.getChannelPermissionSpecMap)(S, s, g, i),
      c = l(E),
      G = O.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && P.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(S.type),
      d = (0, o.isStageVideoEnabled)(E),
      U = (0, r.canCurrentUserManageMessageFilters)(E),
      f = S.isMediaChannel(),
      p = T.default.getGuild(E),
      h = (0, _.getClydeExperimentEnabled)(p);
    switch (S.type) {
      case C.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(n = c.showStageChannelPermissions, N = () => e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [N()] : []), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              R.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, d), e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              R.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case C.ChannelTypes.GUILD_FORUM:
      case C.ChannelTypes.GUILD_MEDIA:
        ;
        let V = f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, V, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: U ? H.format({
            setUpAutomod: () => {
              !f && (0, t.trackForumEnableAutomodClicked)(), R.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: h
        }), ...(A = G, M = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), A ? [M()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: S.type !== C.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), ...(D = G, L = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), D ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var S, s;
    let i = new Set;
    return !E.hasFeature(C.GuildFeatures.COMMUNITY) && i.add(C.Permissions.VIEW_GUILD_ANALYTICS.toString()), S = e.generateGuildPermissionSpec(m.default.Messages, l(E.id)), 0 === (s = i).size ? S : S.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !s.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(m.default.Messages, l(E.id))
  }
}