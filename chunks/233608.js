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
  o = s("434404"),
  R = s("71275"),
  O = s("60222"),
  A = s("665906"),
  P = s("854536"),
  T = s("131704"),
  M = s("430824"),
  C = s("63063"),
  a = s("981631"),
  l = s("71080"),
  m = s("689938");

function D(E) {
  let S = (0, O.isGuildEligibleForStageChannels)(E),
    s = (0, I.getEnableForumPermissions)(E),
    e = (0, N.isMemberVerificationManualApproval)(E),
    t = M.default.getGuild(E),
    r = null != t && (0, n.isCreatorMonetizationEnabledGuild)(t),
    o = (0, _.getClydeExperimentEnabled)(t),
    R = P.default.getCurrentConfig({
      guildId: E,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(a.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: C.default.getArticleURL(a.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: S,
    showExperimental: !0,
    showForumPermissions: s,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: r,
    showClydeAIPermissions: o,
    inVoiceBgExperiment: R
  }
}

function L(E, S) {
  return E ? [S()] : []
}
S.default = {
  generateChannelPermissionSpec: function(E, S, s, i) {
    var n, N, O, P, C, L;
    let g = (0, I.getEnableForumPermissions)(E),
      u = (0, l.getChannelPermissionSpecMap)(S, s, g, i),
      c = D(E),
      d = A.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && T.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(S.type),
      G = (0, R.isStageVideoEnabled)(E),
      f = (0, r.canCurrentUserManageMessageFilters)(E),
      U = S.isMediaChannel(),
      p = M.default.getGuild(E),
      V = (0, _.getClydeExperimentEnabled)(p);
    switch (S.type) {
      case a.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(n = c.showStageChannelPermissions, N = () => e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [N()] : []), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case a.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case a.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, G), e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case a.ChannelTypes.GUILD_FORUM:
      case a.ChannelTypes.GUILD_MEDIA:
        ;
        let h = U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, h, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: f ? H.format({
            setUpAutomod: () => {
              !U && (0, t.trackForumEnableAutomodClicked)(), o.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: V
        }), ...(O = d, P = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), O ? [P()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: S.type !== a.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), ...(C = d, L = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), C ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var S, s;
    let i = new Set;
    return !E.hasFeature(a.GuildFeatures.COMMUNITY) && i.add(a.Permissions.VIEW_GUILD_ANALYTICS.toString()), S = e.generateGuildPermissionSpec(m.default.Messages, D(E.id)), 0 === (s = i).size ? S : S.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !s.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(m.default.Messages, D(E.id))
  }
}