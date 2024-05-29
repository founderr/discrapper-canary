"use strict";
S.r(s), S("47120");
var e = S("253923"),
  i = S("230711"),
  _ = S("797610"),
  n = S("200876"),
  I = S("456269"),
  t = S("228392"),
  r = S("676317"),
  N = S("467138"),
  o = S("434404"),
  R = S("71275"),
  O = S("60222"),
  A = S("665906"),
  P = S("131704"),
  T = S("430824"),
  M = S("63063"),
  C = S("981631"),
  a = S("71080"),
  l = S("689938");

function D(E) {
  let s = (0, O.isGuildEligibleForStageChannels)(E),
    S = (0, I.getEnableForumPermissions)(E),
    e = (0, N.isMemberVerificationManualApproval)(E),
    t = T.default.getGuild(E),
    r = null != t && (0, n.isCreatorMonetizationEnabledGuild)(t),
    o = (0, _.getClydeExperimentEnabled)(t);
  return {
    PRIORITY_SPEAKER_DESCRIPTION: l.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: l.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(C.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: l.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: M.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: s,
    showExperimental: !0,
    showForumPermissions: S,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: r,
    showClydeAIPermissions: o
  }
}

function m(E, s) {
  return E ? [s()] : []
}
s.default = {
  generateChannelPermissionSpec: function(E, s, S, i) {
    var n, N, O, M, m, L;
    let g = (0, I.getEnableForumPermissions)(E),
      u = (0, a.getChannelPermissionSpecMap)(s, S, g, i),
      c = D(E),
      d = A.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && P.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
      f = (0, R.isStageVideoEnabled)(E),
      G = (0, r.canCurrentUserManageMessageFilters)(E),
      U = s.isMediaChannel(),
      p = T.default.getGuild(E),
      h = (0, _.getClydeExperimentEnabled)(p);
    switch (s.type) {
      case C.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(n = c.showStageChannelPermissions, N = () => e.generateChannelStageSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [N()] : []), e.generateChannelEventsSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: G ? l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, f), e.generateChannelStageSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: G ? l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case C.ChannelTypes.GUILD_FORUM:
      case C.ChannelTypes.GUILD_MEDIA:
        ;
        let V = U ? l.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : l.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = U ? l.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : l.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, V, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: G ? H.format({
            setUpAutomod: () => {
              !U && (0, t.trackForumEnableAutomodClicked)(), o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: h
        }), ...(O = d, M = () => e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), O ? [M()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: s.type !== C.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), ...(m = d, L = () => e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), m ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var s, S;
    let i = new Set;
    return !E.hasFeature(C.GuildFeatures.COMMUNITY) && i.add(C.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = e.generateGuildPermissionSpec(l.default.Messages, D(E.id)), 0 === (S = i).size ? s : s.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !S.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(l.default.Messages, D(E.id))
  }
}