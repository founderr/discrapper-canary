n.d(t, {
  R$: function() {
    return f
  },
  ZP: function() {
    return g
  }
});
var s = n(913527),
  r = n.n(s),
  i = n(990547),
  a = n(570140),
  o = n(479531),
  l = n(771308),
  c = n(314897),
  u = n(626135),
  d = n(573261),
  h = n(959776),
  E = n(981631),
  _ = n(723359);

function g(e) {
  let {
    invite: t = null,
    giftCodeSKUId: n = null,
    ...s
  } = e;
  return f({
    ...s,
    invite: t,
    giftCodeSKUId: n
  })
}

function f(e) {
  let {
    email: t,
    phoneToken: n,
    username: s,
    globalName: g,
    consent: f,
    password: p,
    guildTemplateCode: m,
    birthday: N,
    invite: I = null,
    giftCodeSKUId: A = null,
    multiStep: R = !1,
    promoEmailConsent: T = null,
    usedUsernameSuggestion: C = null
  } = e;
  return a.Z.dispatch({
    type: "REGISTER",
    birthday: R ? N : null
  }), null != N && ((0, h.Z)(N, E.jXE.REGISTER), u.default.track(E.rMx.AGE_GATE_ACTION, {
    source: _.L0.REGISTER,
    action: _.Al.AGE_GATE_SUBMITTED
  }), ! function(e) {
    let t;
    let n = r()().diff(e, "years");
    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", u.default.track(E.rMx.USER_AGE_SUBMITTED, {
      age_bucket: t
    }))
  }(N)), d.Z.post({
    url: E.ANM.REGISTER,
    body: {
      fingerprint: c.default.getFingerprint(),
      email: t,
      username: s,
      global_name: g,
      password: p,
      invite: I,
      consent: f,
      phone_token: n,
      date_of_birth: null == N ? void 0 : N.format("YYYY-MM-DD"),
      gift_code_sku_id: A,
      guild_template_code: m,
      promotional_email_opt_in: null == T ? void 0 : T.checked
    },
    trackedActionData: {
      event: i.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: I,
        used_username_suggestion: C,
        promotional_email_opt_in: null == T ? void 0 : T.checked,
        promotional_email_pre_checked: null == T ? void 0 : T.preChecked,
        was_unique_username: !0
      }
    }
  }).then(e => {
    a.Z.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), u.default.track(E.rMx.AGE_GATE_ACTION, {
      source: _.L0.REGISTER,
      action: _.Al.AGE_GATE_SUCCESS
    })
  }, e => {
    let t = new o.Z(e);
    throw a.Z.dispatch({
      type: "REGISTER_FAILURE",
      error: t
    }), null != t.getFieldErrors("date_of_birth") && l.wE(_.L0.REGISTER), u.default.track(E.rMx.REGISTER_SUBMIT_ERRORED, {
      is_unique_username_registration: !0,
      email_error_reason: t.getFirstFieldErrorMessage("email"),
      phone_error_reason: t.getFirstFieldErrorMessage("phone"),
      password_error_reason: t.getFirstFieldErrorMessage("password"),
      username_error_reason: t.getFirstFieldErrorMessage("username"),
      global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
      date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
    }), e
  })
}