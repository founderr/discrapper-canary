e.d(_, {
  Wg: function() {
    return M
  }
}), e(47120);
var T, s = e(470079),
  I = e(392711),
  A = e.n(I),
  n = e(442837),
  N = e(570140),
  t = e(944163),
  r = e(709054),
  a = e(116175),
  L = e(308083);

function D(E, _, e) {
  return _ in E ? Object.defineProperty(E, _, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : E[_] = e, E
}
let S = new Map,
  U = new Map,
  l = !1,
  O = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: L.zv.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [L.U6, L.U6, L.U6],
    tag: "",
    verificationForm: {
      ...t.t
    },
    badgeKind: a.ZD.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: L.qC.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: L.Wy.GAMES,
    furthestStep: L.Wy.GAMES,
    requiredGameId: void 0
  });

function G() {
  let E = A().cloneDeep(O);
  return E.badgeKind = (0, a.lP)(), E.banner = (0, L.i1)(), E
}

function M() {
  return s.useState(() => G())[0]
}

function R(E) {
  var _;
  return null !== (_ = S.get(E)) && void 0 !== _ ? _ : G()
}

function u(E, _) {
  let e = R(E);
  S.set(E, {
    ...e,
    ..._
  });
  let T = U.get(E);
  if (null != T) {
    let e = {
      ...T
    };
    Object.keys(_).forEach(E => {
      delete e[E]
    }), U.set(E, e)
  }
}
class i extends(T = n.ZP.PersistedStore) {
  initialize(E) {
    null != E && r.default.keys(E.progressByGuild).forEach(_ => {
      var e, T, s, I, A;
      S.set(_, {
        gameApplicationIds: new Set((e = E.progressByGuild[_]).gameApplicationIds),
        playstyle: e.playstyle,
        interests: new Set(e.interests),
        description: e.description,
        wildcardDescriptors: null !== (T = e.wildcardDescriptors) && void 0 !== T ? T : [L.U6, L.U6, L.U6],
        tag: e.tag,
        verificationForm: null !== (s = e.verificationForm) && void 0 !== s ? s : {
          ...t.t
        },
        badgeKind: null !== (I = e.badgeKind) && void 0 !== I ? I : a.ZD.SWORD,
        badgePrimaryColor: e.badgePrimaryColor,
        badgeSecondaryColor: e.badgeSecondaryColor,
        banner: null !== (A = e.banner) && void 0 !== A ? A : L.qC.NIGHT_SKY,
        brandPrimaryColor: e.brandPrimaryColor,
        brandSecondaryColor: e.brandSecondaryColor,
        currentStep: e.currentStep,
        furthestStep: e.furthestStep,
        requiredGameId: e.requiredGameId
      })
    })
  }
  getState() {
    let E = {};
    return S.forEach((_, e) => {
      var T;
      E[e] = {
        gameApplicationIds: Array.from((T = _).gameApplicationIds),
        playstyle: T.playstyle,
        interests: Array.from(T.interests),
        description: T.description,
        wildcardDescriptors: T.wildcardDescriptors,
        tag: T.tag,
        verificationForm: T.verificationForm,
        badgeKind: T.badgeKind,
        badgePrimaryColor: T.badgePrimaryColor,
        badgeSecondaryColor: T.badgeSecondaryColor,
        banner: T.banner,
        brandPrimaryColor: T.brandPrimaryColor,
        brandSecondaryColor: T.brandSecondaryColor,
        currentStep: T.currentStep,
        furthestStep: T.furthestStep,
        requiredGameId: T.requiredGameId
      }
    }), {
      progressByGuild: E
    }
  }
  getStateForGuild(E) {
    return {
      progress: S.get(E),
      errors: U.get(E),
      submitting: l
    }
  }
  getGuildIds() {
    return [...S.keys()]
  }
}
D(i, "displayName", "ClanSetupStore"), D(i, "persistKey", "ClanSetupStore"), _.ZP = new i(N.Z, {
  CLAN_SETUP_RESET: function() {
    S.clear(), U.clear()
  },
  CLAN_SETUP_UPDATE: function(E) {
    let {
      guildId: _,
      updates: e
    } = E;
    u(_, e)
  },
  CLAN_SETUP_SUBMIT: function(E) {
    let {
      guildId: _
    } = E;
    l = !0, U.delete(_)
  },
  CLAN_SETUP_SUCCESS: function(E) {
    let {
      guildId: _
    } = E;
    l = !1, S.delete(_), U.delete(_)
  },
  CLAN_SETUP_ERROR: function(E) {
    let {
      guildId: _,
      error: e
    } = E;
    l = !1, U.set(_, {
      gameApplicationIds: e.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: e.getFirstFieldErrorMessage("play_style"),
      description: e.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: e.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: e.getFirstFieldErrorMessage("search_terms"),
      tag: e.getFirstFieldErrorMessage("tag"),
      verificationForm: e.getFirstFieldErrorMessage(["verification_form", "form_fields"])
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(E) {
    let _;
    let {
      form: e,
      guildId: T,
      isLocalUpdate: s
    } = E;
    s && (_ = null == e ? t.t : {
      ...R(T).verificationForm,
      ...e
    }, u(T, {
      verificationForm: _
    }))
  }
})