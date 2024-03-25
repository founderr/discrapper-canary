"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  },
  registerFull: function() {
    return _
  }
});
var s = n("866227"),
  a = n.n(s),
  r = n("759843"),
  i = n("913144"),
  l = n("599417"),
  o = n("731109"),
  u = n("271938"),
  d = n("599110"),
  c = n("840707"),
  f = n("395724"),
  E = n("49111"),
  h = n("586391");

function g(e) {
  let {
    invite: t = null,
    giftCodeSKUId: n = null,
    ...s
  } = e;
  return _({
    ...s,
    invite: t,
    giftCodeSKUId: n
  })
}

function _(e) {
  let {
    email: t,
    phoneToken: n,
    username: s,
    globalName: g,
    consent: _,
    password: m,
    guildTemplateCode: p,
    birthday: T,
    invite: I = null,
    giftCodeSKUId: N = null,
    multiStep: A = !1,
    promoEmailConsent: S = null,
    usedUsernameSuggestion: R = null
  } = e;
  return i.default.dispatch({
    type: "REGISTER",
    birthday: A ? T : null
  }), null != T && ((0, f.default)(T, E.AnalyticsSections.REGISTER), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
    source: h.AgeGateSource.REGISTER,
    action: h.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
  }), ! function(e) {
    let t;
    let n = a().diff(e, "years");
    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(E.AnalyticEvents.USER_AGE_SUBMITTED, {
      age_bucket: t
    }))
  }(T)), c.default.post({
    url: E.Endpoints.REGISTER,
    body: {
      fingerprint: u.default.getFingerprint(),
      email: t,
      username: s,
      global_name: g,
      password: m,
      invite: I,
      consent: _,
      phone_token: n,
      date_of_birth: null == T ? void 0 : T.format("YYYY-MM-DD"),
      gift_code_sku_id: N,
      guild_template_code: p,
      promotional_email_opt_in: null == S ? void 0 : S.checked
    },
    trackedActionData: {
      event: r.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: I,
        used_username_suggestion: R,
        promotional_email_opt_in: null == S ? void 0 : S.checked,
        promotional_email_pre_checked: null == S ? void 0 : S.preChecked,
        was_unique_username: !0
      }
    }
  }).then(e => {
    i.default.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
      source: h.AgeGateSource.REGISTER,
      action: h.AgeGateAnalyticAction.AGE_GATE_SUCCESS
    })
  }, e => {
    let t = new l.default(e);
    throw i.default.dispatch({
      type: "REGISTER_FAILURE",
      error: t
    }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(h.AgeGateSource.REGISTER), d.default.track(E.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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