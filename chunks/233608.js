"use strict";
i.r(s), i("47120");
var t = i("253923"),
  n = i("230711"),
  E = i("797610"),
  r = i("200876"),
  S = i("456269"),
  o = i("228392"),
  _ = i("676317"),
  l = i("467138"),
  a = i("434404"),
  I = i("71275"),
  u = i("60222"),
  N = i("665906"),
  A = i("131704"),
  R = i("430824"),
  O = i("63063"),
  T = i("981631"),
  d = i("71080"),
  M = i("689938");

function c(e) {
  let s = (0, u.isGuildEligibleForStageChannels)(e),
    i = (0, S.getEnableForumPermissions)(e),
    t = (0, l.isMemberVerificationManualApproval)(e),
    o = R.default.getGuild(e),
    _ = null != o && (0, r.isCreatorMonetizationEnabledGuild)(o),
    a = (0, E.getClydeExperimentEnabled)(o);
  return {
    PRIORITY_SPEAKER_DESCRIPTION: M.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: M.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        n.default.open(T.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: M.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: O.default.getArticleURL(T.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: s,
    showExperimental: !0,
    showForumPermissions: i,
    showMembershipManualApprovalPermissions: t,
    showCreatorMonetizationAnalyticsPermission: _,
    showClydeAIPermissions: a
  }
}

function P(e, s) {
  return e ? [s()] : []
}
s.default = {
  generateChannelPermissionSpec: function(e, s, i, n) {
    var r, l, u, O, P, C;
    let f = (0, S.getEnableForumPermissions)(e),
      m = (0, d.getChannelPermissionSpecMap)(s, i, f, n),
      L = c(e),
      D = N.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: e,
        location: "3ad37d_1"
      }).enabled && A.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
      g = (0, I.isStageVideoEnabled)(e),
      p = (0, _.canCurrentUserManageMessageFilters)(e),
      U = s.isMediaChannel(),
      h = R.default.getGuild(e),
      G = (0, E.getClydeExperimentEnabled)(h);
    switch (s.type) {
      case T.ChannelTypes.GUILD_CATEGORY:
        ;
        return [t.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), t.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), t.generateChannelTextSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: G
        }), t.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(r = L.showStageChannelPermissions, l = () => t.generateChannelStageSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), r ? [l()] : []), t.generateChannelEventsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case T.ChannelTypes.GUILD_VOICE:
        return [t.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), t.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), t.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), t.generateChannelVoiceChatSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: p ? M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              a.default.open(e, T.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), t.generateChannelEventsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case T.ChannelTypes.GUILD_STAGE_VOICE:
        return [t.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), t.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), t.generateChannelStageVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, g), t.generateChannelStageSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), t.generateChannelEventsSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), t.generateChannelVoiceChatSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: p ? M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              a.default.open(e, T.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case T.ChannelTypes.GUILD_FORUM:
      case T.ChannelTypes.GUILD_MEDIA:
        ;
        let v = U ? M.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : M.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          B = U ? M.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : M.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [t.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), t.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), t.generateChannelTextSection(m, v, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: p ? B.format({
            setUpAutomod: () => {
              !U && (0, o.trackForumEnableAutomodClicked)(), a.default.open(e, T.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: G
        }), ...(u = D, O = () => t.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), u ? [O()] : [])];
      default:
        ;
        return [t.generateChannelGeneralSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), t.generateChannelMembershipSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), t.generateChannelTextSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: s.type !== T.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: G
        }), ...(P = D, C = () => t.generateChannelVoiceSection(m, M.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), P ? [C()] : [])]
    }
  },
  generateGuildPermissionSpec: function(e) {
    var s, i;
    let n = new Set;
    return !e.hasFeature(T.GuildFeatures.COMMUNITY) && n.add(T.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = t.generateGuildPermissionSpec(M.default.Messages, c(e.id)), 0 === (i = n).size ? s : s.map(e => ({
      ...e,
      permissions: e.permissions.filter(e => !i.has(e.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(e) {
    return t.getGuildPermissionSpec(M.default.Messages, c(e.id))
  }
}