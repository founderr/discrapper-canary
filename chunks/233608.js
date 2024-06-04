"use strict";
S.r(s), S("47120");
var e = S("253923"),
  i = S("230711"),
  _ = S("581364"),
  n = S("797610"),
  I = S("200876"),
  t = S("456269"),
  r = S("228392"),
  N = S("676317"),
  o = S("467138"),
  R = S("434404"),
  O = S("71275"),
  A = S("60222"),
  P = S("665906"),
  T = S("131704"),
  M = S("430824"),
  a = S("63063"),
  C = S("981631"),
  l = S("71080"),
  D = S("689938");

function m(E) {
  let s = (0, A.isGuildEligibleForStageChannels)(E),
    S = (0, t.getEnableForumPermissions)(E),
    e = (0, o.isMemberVerificationManualApproval)(E),
    r = M.default.getGuild(E),
    N = null != r && (0, I.isCreatorMonetizationEnabledGuild)(r),
    R = (0, n.getClydeExperimentEnabled)(r),
    O = (0, _.isGuildInUserAppExperiment)(E, {
      location: "get_permission_options"
    });
  return {
    PRIORITY_SPEAKER_DESCRIPTION: D.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: D.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(C.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: D.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: a.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: s,
    showExperimental: !0,
    showForumPermissions: S,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: N,
    showClydeAIPermissions: R,
    externalAppsEnabled: O
  }
}

function L(E, s) {
  return E ? [s()] : []
}
s.default = {
  generateChannelPermissionSpec: function(E, s, S, i) {
    var _, I, o, A, a, L;
    let g = (0, t.getEnableForumPermissions)(E),
      u = (0, l.getChannelPermissionSpecMap)(s, S, g, i),
      c = m(E),
      d = P.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && T.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
      f = (0, O.isStageVideoEnabled)(E),
      U = (0, N.canCurrentUserManageMessageFilters)(E),
      G = s.isMediaChannel(),
      p = M.default.getGuild(E),
      h = (0, n.getClydeExperimentEnabled)(p);
    switch (s.type) {
      case C.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelAppsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(_ = c.showStageChannelPermissions, I = () => e.generateChannelStageSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), _ ? [I()] : []), e.generateChannelEventsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              R.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelAppsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_APPS)];
      case C.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, f), e.generateChannelStageSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              R.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case C.ChannelTypes.GUILD_FORUM:
      case C.ChannelTypes.GUILD_MEDIA:
        ;
        let V = G ? D.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : D.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = G ? D.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : D.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, V, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: U ? H.format({
            setUpAutomod: () => {
              !G && (0, r.trackForumEnableAutomodClicked)(), R.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: h
        }), e.generateChannelAppsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(o = d, A = () => e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), o ? [A()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: s.type !== C.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: h
        }), e.generateChannelAppsSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(a = d, L = () => e.generateChannelVoiceSection(u, D.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), a ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var s, S;
    let i = new Set;
    return !E.hasFeature(C.GuildFeatures.COMMUNITY) && i.add(C.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = e.generateGuildPermissionSpec(D.default.Messages, m(E.id)), 0 === (S = i).size ? s : s.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !S.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(D.default.Messages, m(E.id))
  }
}