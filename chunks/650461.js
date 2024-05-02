"use strict";
n.r(t), n.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return E
  }
}), n("47120");
var a, l = n("392711"),
  s = n.n(l),
  i = n("442837"),
  r = n("570140"),
  o = n("944163"),
  u = n("709054"),
  d = n("116175"),
  c = n("308083");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = new Map,
  m = new Map,
  p = !1,
  E = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: c.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [c.EMPTY_WILDCARD, c.EMPTY_WILDCARD, c.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...o.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: d.ClanBadgeKind.SWORD,
    badgePrimaryColor: d.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: d.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: c.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: c.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: c.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
    currentStep: c.ClanSetupSteps.GAMES,
    furthestStep: c.ClanSetupSteps.GAMES,
    badgeImage: "",
    requiredGameId: void 0
  });

function C(e) {
  var t;
  return null !== (t = h.get(e)) && void 0 !== t ? t : s().cloneDeep(E)
}

function g(e, t) {
  let n = C(e);
  h.set(e, {
    ...n,
    ...t
  });
  let a = m.get(e);
  if (null != a) {
    let n = {
      ...a
    };
    Object.keys(t).forEach(e => {
      delete n[e]
    }), m.set(e, n)
  }
}
class S extends(a = i.default.PersistedStore) {
  initialize(e) {
    null != e && u.default.keys(e.progressByGuild).forEach(t => {
      var n, a, l, s, i, r, u, f, m;
      h.set(t, (n = e.progressByGuild[t], {
        gameApplicationIds: new Set(n.gameApplicationIds),
        playstyle: n.playstyle,
        interests: new Set(n.interests),
        description: n.description,
        wildcardDescriptors: null !== (a = n.wildcardDescriptors) && void 0 !== a ? a : [c.EMPTY_WILDCARD, c.EMPTY_WILDCARD, c.EMPTY_WILDCARD],
        tag: n.tag,
        verificationForm: null !== (l = n.verificationForm) && void 0 !== l ? l : {
          ...o.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (s = n.badgeKind) && void 0 !== s ? s : d.ClanBadgeKind.SWORD,
        badgePrimaryColor: null !== (i = n.badgePrimaryColor) && void 0 !== i ? i : d.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
        badgeSecondaryColor: null !== (r = n.badgeSecondaryColor) && void 0 !== r ? r : d.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
        banner: null !== (u = n.banner) && void 0 !== u ? u : c.ClanBannerKind.NIGHT_SKY,
        brandPrimaryColor: null !== (f = n.brandPrimaryColor) && void 0 !== f ? f : c.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
        brandSecondaryColor: null !== (m = n.brandSecondaryColor) && void 0 !== m ? m : c.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
        currentStep: n.currentStep,
        furthestStep: n.furthestStep,
        requiredGameId: n.requiredGameId,
        badgeImage: n.badgeImage
      }))
    })
  }
  getState() {
    let e = {};
    return h.forEach((t, n) => {
      var a;
      e[n] = {
        gameApplicationIds: Array.from((a = t).gameApplicationIds),
        playstyle: a.playstyle,
        interests: Array.from(a.interests),
        description: a.description,
        wildcardDescriptors: a.wildcardDescriptors,
        tag: a.tag,
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
      progress: h.get(e),
      errors: m.get(e),
      submitting: p
    }
  }
  getGuildIds() {
    return [...h.keys()]
  }
}
f(S, "displayName", "ClanSetupStore"), f(S, "persistKey", "ClanSetupStore"), t.default = new S(r.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    g(t, n)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    p = !0, m.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    p = !1, h.delete(t), m.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    p = !1, m.set(t, {
      gameApplicationIds: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: n.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: n,
      guildId: a,
      isLocalUpdate: l
    } = e;
    l && (t = null == n ? o.NO_MEMBER_VERIFICATION_FORM : {
      ...C(a).verificationForm,
      ...n
    }, g(a, {
      verificationForm: t
    }))
  }
})