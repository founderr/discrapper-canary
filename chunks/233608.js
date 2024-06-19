S(47120);
var _ = S(253923),
  t = S(230711),
  n = S(581364),
  i = S(797610),
  l = S(200876),
  I = S(456269),
  r = S(228392),
  s = S(676317),
  N = S(467138),
  o = S(434404),
  A = S(71275),
  R = S(60222),
  O = S(665906),
  u = S(131704),
  a = S(430824),
  P = S(63063),
  M = S(981631),
  T = S(71080),
  C = S(689938);

function L(E) {
  let e = (0, R.A)(E),
    S = (0, I.Eg)(E),
    _ = (0, N.P)(E),
    r = a.Z.getGuild(E),
    s = null != r && (0, l.l)(r),
    o = (0, i.M9)(r),
    A = (0, n.vC)(E, {
      location: "get_permission_options"
    });
  return {
    PRIORITY_SPEAKER_DESCRIPTION: C.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: C.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        t.Z.open(M.oAB.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: C.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: P.Z.getArticleURL(M.BhN.SOUNDBOARD)
    }),
    showStageChannelPermissions: e,
    showExperimental: !0,
    showForumPermissions: S,
    showMembershipManualApprovalPermissions: _,
    showCreatorMonetizationAnalyticsPermission: s,
    showClydeAIPermissions: o,
    externalAppsEnabled: A
  }
}

function c(E, e) {
  return E ? [e()] : []
}
e.Z = {
  generateChannelPermissionSpec: function(E, e, S, t) {
    var n, l, N, R, P, c;
    let D = (0, I.Eg)(E),
      d = (0, T.IG)(e, S, D, t),
      f = L(E),
      g = O.tM.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && u.Um.has(e.type),
      U = (0, A.tu)(E),
      p = (0, s.ze)(E),
      G = e.isMediaChannel(),
      m = a.Z.getGuild(E),
      v = (0, i.M9)(m);
    switch (e.type) {
      case M.d4z.GUILD_CATEGORY:
        ;
        return [_.zO(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), _.Ny(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), _.vq(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: v
        }), _.WV(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE), _.xU(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(n = f.showStageChannelPermissions, l = () => _.kv(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [l()] : []), _.uu(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case M.d4z.GUILD_VOICE:
        return [_.zO(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), _.Ny(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), _.WV(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE), _.aW(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: p ? C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.Z.open(E, M.pNK.GUILD_AUTOMOD)
            }
          }) : void 0
        }), _.uu(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), _.xU(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS)];
      case M.d4z.GUILD_STAGE_VOICE:
        return [_.zO(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), _.Ny(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), _.FX(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE, U), _.kv(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE), _.uu(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), _.aW(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: p ? C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.Z.open(E, M.pNK.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case M.d4z.GUILD_FORUM:
      case M.d4z.GUILD_MEDIA:
        ;
        let Z = G ? C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : C.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          h = G ? C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : C.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [_.zO(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), _.Ny(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), _.vq(d, Z, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: p ? h.format({
            setUpAutomod: () => {
              !G && (0, r.MO)(), o.Z.open(E, M.pNK.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: v
        }), _.xU(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(N = g, R = () => _.WV(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE), N ? [R()] : [])];
      default:
        ;
        return [_.zO(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), _.Ny(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), _.vq(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: e.type !== M.d4z.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: v
        }), _.xU(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS), ...(P = g, c = () => _.WV(d, C.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE), P ? [c()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var e, S;
    let t = new Set;
    return !E.hasFeature(M.oNc.COMMUNITY) && t.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()), e = _.s4(C.Z.Messages, L(E.id)), 0 === (S = t).size ? e : e.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !S.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return _.WW(C.Z.Messages, L(E.id))
  }
}