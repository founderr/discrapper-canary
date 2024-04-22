"use strict";
a.r(t), a.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return S
  }
}), a("47120");
var n, s = a("392711"),
  l = a.n(s),
  i = a("153832"),
  r = a("442837"),
  o = a("570140"),
  u = a("944163"),
  d = a("709054"),
  c = a("227120"),
  f = a("116175"),
  E = a("308083");

function h(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
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
  let a = I(e);
  _.set(e, {
    ...a,
    ...t
  });
  let n = C.get(e);
  if (null != n) {
    let a = {
      ...n
    };
    Object.keys(t).forEach(e => {
      delete a[e]
    }), C.set(e, a)
  }
}
class T extends(n = r.default.PersistedStore) {
  initialize(e) {
    null != e && d.default.keys(e.progressByGuild).forEach(t => {
      _.set(t, function(e) {
        var t, a, n, s, l, r, o, d;
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
          verificationForm: null !== (a = e.verificationForm) && void 0 !== a ? a : {
            ...u.NO_MEMBER_VERIFICATION_FORM
          },
          badgeKind: null !== (n = e.badgeKind) && void 0 !== n ? n : f.ClanBadgeKind.SWORD,
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
    return _.forEach((t, a) => {
      var n;
      e[a] = {
        gameApplicationIds: Array.from((n = t).gameApplicationIds),
        playstyle: n.playstyle,
        interests: Array.from(n.interests),
        description: n.description,
        wildcardDescriptors: n.wildcardDescriptors,
        tag: n.tag,
        primetime: n.primetime,
        verificationForm: n.verificationForm,
        badgeKind: n.badgeKind,
        badgePrimaryColor: n.badgePrimaryColor,
        badgeSecondaryColor: n.badgeSecondaryColor,
        banner: n.banner,
        brandPrimaryColor: n.brandPrimaryColor,
        brandSecondaryColor: n.brandSecondaryColor,
        currentStep: n.currentStep,
        furthestStep: n.furthestStep,
        requiredGameId: n.requiredGameId,
        badgeImage: n.badgeImage
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
      updates: a
    } = e;
    p(t, a)
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
      error: a
    } = e;
    m = !1, C.set(t, {
      gameApplicationIds: a.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: a.getFirstFieldErrorMessage("play_style"),
      description: a.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: a.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: a.getFirstFieldErrorMessage("search_terms"),
      tag: a.getFirstFieldErrorMessage("tag"),
      primetime: a.getFirstFieldErrorMessage("prime_time")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: a,
      guildId: n,
      isLocalUpdate: s
    } = e;
    s && (t = null == a ? u.NO_MEMBER_VERIFICATION_FORM : {
      ...I(n).verificationForm,
      ...a
    }, p(n, {
      verificationForm: t
    }))
  }
})