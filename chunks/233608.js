"use strict";
e.r(s), e("47120");
var S = e("253923"),
  i = e("230711"),
  n = e("797610"),
  _ = e("200876"),
  t = e("456269"),
  r = e("228392"),
  I = e("676317"),
  o = e("467138"),
  N = e("434404"),
  R = e("71275"),
  O = e("60222"),
  A = e("665906"),
  P = e("854536"),
  a = e("131704"),
  M = e("430824"),
  T = e("63063"),
  l = e("981631"),
  C = e("71080"),
  m = e("689938");

function D(E) {
  let s = (0, O.isGuildEligibleForStageChannels)(E),
    e = (0, t.getEnableForumPermissions)(E),
    S = (0, o.isMemberVerificationManualApproval)(E),
    r = M.default.getGuild(E),
    I = null != r && (0, _.isCreatorMonetizationEnabledGuild)(r),
    N = (0, n.getClydeExperimentEnabled)(r),
    R = P.default.getCurrentConfig({
      guildId: E,
      location: "getPermissionOptions"
    }).enabled;
  return {
    PRIORITY_SPEAKER_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(l.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: T.default.getArticleURL(l.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: s,
    showExperimental: !0,
    showForumPermissions: e,
    showMembershipManualApprovalPermissions: S,
    showCreatorMonetizationAnalyticsPermission: I,
    showClydeAIPermissions: N,
    inVoiceBgExperiment: R
  }
}

function c(E, s) {
  return E ? [s()] : []
}
s.default = {
  generateChannelPermissionSpec: function(E, s, e, i) {
    var _, o, O, P, T, c;
    let L = (0, t.getEnableForumPermissions)(E),
      u = (0, C.getChannelPermissionSpecMap)(s, e, L, i),
      d = D(E),
      g = A.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && a.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
      f = (0, R.isStageVideoEnabled)(E),
      G = (0, I.canCurrentUserManageMessageFilters)(E),
      p = s.isMediaChannel(),
      U = M.default.getGuild(E),
      h = (0, n.getClydeExperimentEnabled)(U);
    switch (s.type) {
      case l.ChannelTypes.GUILD_CATEGORY:
        ;
        return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(_ = d.showStageChannelPermissions, o = () => S.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), _ ? [o()] : []), S.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case l.ChannelTypes.GUILD_VOICE:
        return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), S.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: G ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              N.default.open(E, l.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), S.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case l.ChannelTypes.GUILD_STAGE_VOICE:
        return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelStageVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, f), S.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), S.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), S.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: G ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              N.default.open(E, l.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case l.ChannelTypes.GUILD_FORUM:
      case l.ChannelTypes.GUILD_MEDIA:
        ;
        let V = p ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = p ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelTextSection(u, V, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: G ? H.format({
            setUpAutomod: () => {
              !p && (0, r.trackForumEnableAutomodClicked)(), N.default.open(E, l.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: h
        }), ...(O = g, P = () => S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), O ? [P()] : [])];
      default:
        ;
        return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: s.type !== l.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), ...(T = g, c = () => S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), T ? [c()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var s, e;
    let i = new Set;
    return !E.hasFeature(l.GuildFeatures.COMMUNITY) && i.add(l.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = S.generateGuildPermissionSpec(m.default.Messages, D(E.id)), 0 === (e = i).size ? s : s.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !e.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return S.getGuildPermissionSpec(m.default.Messages, D(E.id))
  }
}