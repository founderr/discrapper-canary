"use strict";
n.r(t), n.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return S
  }
}), n("47120");
var a, s = n("392711"),
  l = n.n(s),
  i = n("153832"),
  r = n("442837"),
  o = n("570140"),
  u = n("944163"),
  d = n("709054"),
  c = n("227120"),
  f = n("116175"),
  E = n("308083");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new Map,
  C = new Map,
  m = !1,
  S = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: E.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [E.EMPTY_WILDCARD, E.EMPTY_WILDCARD, E.EMPTY_WILDCARD],
    tag: "",
    primetime: [{
      id: (0, i.v4)(),
      day: void 0,
      time: c.ExtendedTimeOptions.MORNING
    }],
    verificationForm: {
      ...u.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: f.ClanBadgeKind.SWORD,
    badgePrimaryColor: f.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: f.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: E.ClanBannerKind.PIXEL_RUSH,
    brandPrimaryColor: E.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: E.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
    currentStep: E.ClanSetupSteps.GAMES,
    furthestStep: E.ClanSetupSteps.GAMES,
    badgeImage: "",
    requiredGameId: void 0
  });

function I(e) {
  var t;
  return null !== (t = _.get(e)) && void 0 !== t ? t : l().cloneDeep(S)
}

function p(e, t) {
  let n = I(e);
  _.set(e, {
    ...n,
    ...t
  });
  let a = C.get(e);
  if (null != a) {
    let n = {
      ...a
    };
    Object.keys(t).forEach(e => {
      delete n[e]
    }), C.set(e, n)
  }
}
class T extends(a = r.default.PersistedStore) {
  initialize(e) {
    null != e && d.default.keys(e.progressByGuild).forEach(t => {
      _.set(t, function(e) {
        var t, n, a, s, l, r, o, d;
        let c = e.primetime.map(e => {
          var t;
          return {
            ...e,
            id: null !== (t = e.id) && void 0 !== t ? t : (0, i.v4)()
          }
        });
        return {
          gameApplicationIds: new Set(e.gameApplicationIds),
          playstyle: e.playstyle,
          interests: new Set(e.interests),
          description: e.description,
          wildcardDescriptors: null !== (t = e.wildcardDescriptors) && void 0 !== t ? t : [E.EMPTY_WILDCARD, E.EMPTY_WILDCARD, E.EMPTY_WILDCARD],
          tag: e.tag,
          primetime: c,
          verificationForm: null !== (n = e.verificationForm) && void 0 !== n ? n : {
            ...u.NO_MEMBER_VERIFICATION_FORM
          },
          badgeKind: null !== (a = e.badgeKind) && void 0 !== a ? a : f.ClanBadgeKind.SWORD,
          badgePrimaryColor: null !== (s = e.badgePrimaryColor) && void 0 !== s ? s : f.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
          badgeSecondaryColor: null !== (l = e.badgeSecondaryColor) && void 0 !== l ? l : f.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
          banner: null !== (r = e.banner) && void 0 !== r ? r : E.ClanBannerKind.PIXEL_RUSH,
          brandPrimaryColor: null !== (o = e.brandPrimaryColor) && void 0 !== o ? o : E.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
          brandSecondaryColor: null !== (d = e.brandSecondaryColor) && void 0 !== d ? d : E.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
          currentStep: e.currentStep,
          furthestStep: e.furthestStep,
          requiredGameId: e.requiredGameId,
          badgeImage: e.badgeImage
        }
      }(e.progressByGuild[t]))
    })
  }
  getState() {
    let e = {};
    return _.forEach((t, n) => {
      var a;
      e[n] = {
        gameApplicationIds: Array.from((a = t).gameApplicationIds),
        playstyle: a.playstyle,
        interests: Array.from(a.interests),
        description: a.description,
        wildcardDescriptors: a.wildcardDescriptors,
        tag: a.tag,
        primetime: a.primetime,
        verificationForm: a.verificationForm,
        badgeKind: a.badgeKind,
        badgePrimaryColor: a.badgePrimaryColor,
        badgeSecondaryColor: a.badgeSecondaryColor,
        banner: a.banner,
        brandPrimaryColor: a.brandPrimaryColor,
        brandSecondaryColor: a.brandSecondaryColor,
        currentStep: a.currentStep,
        furthestStep: a.furthestStep,
        requiredGameId: a.requiredGameId,
        badgeImage: a.badgeImage
      }
    }), {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: _.get(e),
      errors: C.get(e),
      submitting: m
    }
  }
}
h(T, "displayName", "ClanSetupStore"), h(T, "persistKey", "ClanSetupStore"), t.default = new T(o.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    p(t, n)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    m = !0, C.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    m = !1, _.delete(t), C.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    m = !1, C.set(t, {
      gameApplicationIds: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: n.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag"),
      primetime: n.getFirstFieldErrorMessage("prime_time")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: n,
      guildId: a,
      isLocalUpdate: s
    } = e;
    s && (t = null == n ? u.NO_MEMBER_VERIFICATION_FORM : {
      ...I(a).verificationForm,
      ...n
    }, p(a, {
      verificationForm: t
    }))
  }
})