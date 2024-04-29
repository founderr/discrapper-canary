"use strict";
n.r(t), n.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return C
  }
}), n("47120");
var a, s = n("392711"),
  l = n.n(s),
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
    banner: c.ClanBannerKind.PIXEL_RUSH,
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
  let n = m(e);
  E.set(e, {
    ...n,
    ...t
  });
  let a = h.get(e);
  if (null != a) {
    let n = {
      ...a
    };
    Object.keys(t).forEach(e => {
      delete n[e]
    }), h.set(e, n)
  }
}
class p extends(a = i.default.PersistedStore) {
  initialize(e) {
    null != e && u.default.keys(e.progressByGuild).forEach(t => {
      var n, a, s, l, i, r, u, f, h;
      E.set(t, (n = e.progressByGuild[t], {
        gameApplicationIds: new Set(n.gameApplicationIds),
        playstyle: n.playstyle,
        interests: new Set(n.interests),
        description: n.description,
        wildcardDescriptors: null !== (a = n.wildcardDescriptors) && void 0 !== a ? a : [c.EMPTY_WILDCARD, c.EMPTY_WILDCARD, c.EMPTY_WILDCARD],
        tag: n.tag,
        verificationForm: null !== (s = n.verificationForm) && void 0 !== s ? s : {
          ...o.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (l = n.badgeKind) && void 0 !== l ? l : d.ClanBadgeKind.SWORD,
        badgePrimaryColor: null !== (i = n.badgePrimaryColor) && void 0 !== i ? i : d.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
        badgeSecondaryColor: null !== (r = n.badgeSecondaryColor) && void 0 !== r ? r : d.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
        banner: null !== (u = n.banner) && void 0 !== u ? u : c.ClanBannerKind.PIXEL_RUSH,
        brandPrimaryColor: null !== (f = n.brandPrimaryColor) && void 0 !== f ? f : c.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
        brandSecondaryColor: null !== (h = n.brandSecondaryColor) && void 0 !== h ? h : c.CLAN_BRAND_PALETTE_PRESETS["0"].secondary,
        currentStep: n.currentStep,
        furthestStep: n.furthestStep,
        requiredGameId: n.requiredGameId,
        badgeImage: n.badgeImage
      }))
    })
  }
  getState() {
    let e = {};
    return E.forEach((t, n) => {
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
      progress: E.get(e),
      errors: h.get(e),
      submitting: _
    }
  }
}
f(p, "displayName", "ClanSetupStore"), f(p, "persistKey", "ClanSetupStore"), t.default = new p(r.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    S(t, n)
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
      error: n
    } = e;
    _ = !1, h.set(t, {
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
      isLocalUpdate: s
    } = e;
    s && (t = null == n ? o.NO_MEMBER_VERIFICATION_FORM : {
      ...m(a).verificationForm,
      ...n
    }, S(a, {
      verificationForm: t
    }))
  }
})