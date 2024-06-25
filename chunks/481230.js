n.d(t, {
  R$: function() {
    return g
  },
  ZP: function() {
    return f
  }
});
var r = n(913527),
  s = n.n(r),
  i = n(990547),
  a = n(570140),
  o = n(479531),
  l = n(771308),
  c = n(314897),
  u = n(626135),
  d = n(573261),
  h = n(959776),
  _ = n(981631),
  p = n(723359);

function f(e) {
  let {
    invite: t = null,
    giftCodeSKUId: n = null,
    ...r
  } = e;
  return g({
    ...r,
    invite: t,
    giftCodeSKUId: n
  })
}

function g(e) {
  let {
    email: t,
    phoneToken: n,
    username: r,
    globalName: f,
    consent: g,
    password: E,
    guildTemplateCode: m,
    birthday: I,
    invite: A = null,
    giftCodeSKUId: N = null,
    multiStep: C = !1,
    promoEmailConsent: T = null,
    usedUsernameSuggestion: R = null
  } = e;
  return a.Z.dispatch({
    type: "REGISTER",
    birthday: C ? I : null
  }), null != I && ((0, h.Z)(I, _.jXE.REGISTER), u.default.track(_.rMx.AGE_GATE_ACTION, {
    source: p.L0.REGISTER,
    action: p.Al.AGE_GATE_SUBMITTED
  }), ! function(e) {
    let t;
    let n = s()().diff(e, "years");
    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", u.default.track(_.rMx.USER_AGE_SUBMITTED, {
      age_bucket: t
    }))
  }(I)), d.Z.post({
    url: _.ANM.REGISTER,
    body: {
      fingerprint: c.default.getFingerprint(),
      email: t,
      username: r,
      global_name: f,
      password: E,
      invite: A,
      consent: g,
      phone_token: n,
      date_of_birth: null == I ? void 0 : I.format("YYYY-MM-DD"),
      gift_code_sku_id: N,
      guild_template_code: m,
      promotional_email_opt_in: null == T ? void 0 : T.checked
    },
    trackedActionData: {
      event: i.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: A,
        used_username_suggestion: R,
        promotional_email_opt_in: null == T ? void 0 : T.checked,
        promotional_email_pre_checked: null == T ? void 0 : T.preChecked,
        was_unique_username: !0
      }
    }
  }).then(e => {
    a.Z.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), u.default.track(_.rMx.AGE_GATE_ACTION, {
      source: p.L0.REGISTER,
      action: p.Al.AGE_GATE_SUCCESS
    })
  }, e => {
    let t = new o.Z(e);
    throw a.Z.dispatch({
      type: "REGISTER_FAILURE",
      error: t
    }), null != t.getFieldErrors("date_of_birth") && l.wE(p.L0.REGISTER), u.default.track(_.rMx.REGISTER_SUBMIT_ERRORED, {
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