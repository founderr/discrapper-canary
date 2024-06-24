t(47120);
var a, r, s, i, l = t(392711),
  o = t.n(l),
  c = t(906280),
  d = t.n(c),
  u = t(442837),
  m = t(570140),
  h = t(944163),
  C = t(116175),
  x = t(308083);
let f = () => ({
    gameApplicationIds: new Set,
    playstyle: x.zv.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [x.U6, x.U6, x.U6],
    tag: "",
    verificationForm: {
      ...h.t
    },
    badgeKind: C.ZD.SWORD,
    badgePrimaryColor: C.sg["0"].primary,
    badgeSecondaryColor: C.sg["0"].secondary,
    banner: x.qC.NIGHT_SKY,
    brandPrimaryColor: x.ym["0"].primary,
    brandSecondaryColor: x.ym["0"].secondary
  }),
  E = f(),
  T = d()(E),
  _ = !1,
  I = !1,
  g = {};
class p extends(a = u.ZP.Store) {
  getState() {
    return {
      initialSettings: E,
      settings: T,
      dirty: _,
      errors: g,
      submitting: I
    }
  }
}
i = "ClanSettingsStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = i, n.Z = new p(m.Z, {
  CLAN_SETTINGS_FETCH_START: function() {
    I = !1, E = f(), T = d()(E), _ = !1, g = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: n
    } = e;
    E = {
      ...f(),
      ...n
    }, T = d()(E), _ = !1
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: n
    } = e;
    for (let e in T = {
        ...T,
        ...d()(n)
      }, n) delete g[e], g = {
      ...g
    };
    _ = !o().isEqual(o().omit(T, "verificationForm"), o().omit(E, "verificationForm"))
  },
  CLAN_SETTINGS_SUBMIT: function() {
    I = !0, g = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    I = !1, E = d()(T), _ = !1, g = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: n
    } = e;
    I = !1, g = {
      gameApplicationIds: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: n.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag"),
      verificationForm: n.getFirstFieldErrorMessage(["verification_form", "form_fields"])
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: n,
      isLocalUpdate: t
    } = e;
    if (null == T.verificationForm) return !1;
    if (T = {
        ...T,
        verificationForm: {
          ...T.verificationForm,
          ...n
        }
      }, t) {
      var a;
      _ = !o().isEqual(T.verificationForm.formFields, null === (a = E.verificationForm) || void 0 === a ? void 0 : a.formFields)
    } else _ = !1
  }
})