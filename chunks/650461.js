"use strict";
a.r(t), a.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return C
  }
}), a("47120");
var n, s = a("392711"),
  l = a.n(s),
  i = a("442837"),
  r = a("570140"),
  o = a("944163"),
  u = a("709054"),
  d = a("116175"),
  c = a("308083");

function f(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let E = new Map,
  h = new Map,
  _ = !1,
  C = Object.freeze({
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

function m(e) {
  var t;
  return null !== (t = E.get(e)) && void 0 !== t ? t : l().cloneDeep(C)
}

function S(e, t) {
  let a = m(e);
  E.set(e, {
    ...a,
    ...t
  });
  let n = h.get(e);
  if (null != n) {
    let a = {
      ...n
    };
    Object.keys(t).forEach(e => {
      delete a[e]
    }), h.set(e, a)
  }
}
class p extends(n = i.default.PersistedStore) {
  initialize(e) {
    null != e && u.default.keys(e.progressByGuild).forEach(t => {
      var a, n, s, l, i, r, u, f, h;
      E.set(t, (a = e.progressByGuild[t], {
        gameApplicationIds: new Set(a.gameApplicationIds),
        playstyle: a.playstyle,
        interests: new Set(a.interests),
        description: a.description,
        wildcardDescriptors: null !== (n = a.wildcardDescriptors) && void 0 !== n ? n : [c.EMPTY_WILDCARD, c.EMPTY_WILDCARD, c.EMPTY_WILDCARD],
        tag: a.tag,
        verificationForm: null !== (s = a.verificationForm) && void 0 !== s ? s : {
          ...o.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (l = a.badgeKind) && void 0 !== l ? l : d.ClanBadgeKind.SWORD,
        badgePrimaryColor: null !== (i = a.badgePrimaryColor) && void 0 !== i ? i : d.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
        badgeSecondaryColor: null !== (r = a.badgeSecondaryColor) && void 0 !== r ? r : d.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
        banner: null !== (u = a.banner) && void 0 !== u ? u : c.ClanBannerKind.NIGHT_SKY,
        brandPrimaryColor: null !== (f = a.brandPrimaryColor) && void 0 !== f ? f : c.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
        brandSecondaryColor: null !== (h = a.brandSecondaryColor) && void 0 !== h ? h : c.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
        currentStep: a.currentStep,
        furthestStep: a.furthestStep,
        requiredGameId: a.requiredGameId,
        badgeImage: a.badgeImage
      }))
    })
  }
  getState() {
    let e = {};
    return E.forEach((t, a) => {
      var n;
      e[a] = {
        gameApplicationIds: Array.from((n = t).gameApplicationIds),
        playstyle: n.playstyle,
        interests: Array.from(n.interests),
        description: n.description,
        wildcardDescriptors: n.wildcardDescriptors,
        tag: n.tag,
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
      progress: E.get(e),
      errors: h.get(e),
      submitting: _
    }
  }
  getGuildIds() {
    return [...E.keys()]
  }
}
f(p, "displayName", "ClanSetupStore"), f(p, "persistKey", "ClanSetupStore"), t.default = new p(r.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: a
    } = e;
    S(t, a)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    _ = !0, h.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    _ = !1, E.delete(t), h.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: a
    } = e;
    _ = !1, h.set(t, {
      gameApplicationIds: a.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: a.getFirstFieldErrorMessage("play_style"),
      description: a.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: a.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: a.getFirstFieldErrorMessage("search_terms"),
      tag: a.getFirstFieldErrorMessage("tag")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: a,
      guildId: n,
      isLocalUpdate: s
    } = e;
    s && (t = null == a ? o.NO_MEMBER_VERIFICATION_FORM : {
      ...m(n).verificationForm,
      ...a
    }, S(n, {
      verificationForm: t
    }))
  }
})