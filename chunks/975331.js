"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("481060"),
  o = s("153124"),
  d = s("584825"),
  u = s("723047"),
  c = s("727843"),
  E = s("290348"),
  _ = s("518470"),
  I = s("22902"),
  T = s("783454"),
  S = s("689938"),
  f = s("169769");

function m() {
  var e;
  let {
    editStateId: t
  } = (0, c.useEditStateContext)(), [s, n] = E.useTrialInterval(t), [m, N] = E.useTrialLimit(t), g = (0, d.useSubscriptionTrial)(t), {
    options: h
  } = (0, I.default)(null !== (e = null == g ? void 0 : g.active_trial) && void 0 !== e ? e : null), C = (0, _.default)(), R = null != s, x = l.useCallback(e => {
    let t = h.find(e => e.isDefault);
    i()(null != t, "Missing default trial duartion option"), n(e ? t.value : null)
  }, [n, h]), L = (0, u.useRoleSubscriptionSettingsDisabled)(), O = (0, o.useUID)(), p = (0, o.useUID)();
  return (0, a.jsxs)(T.default, {
    title: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
    description: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DESCRIPTION,
    children: [(0, a.jsx)(r.FormSwitch, {
      onChange: (e, t) => x(e),
      value: R,
      disabled: L,
      hideBorder: !0,
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_ENABLE_FREE_TRIAL_CTA
    }), (0, a.jsxs)(r.FormSection, {
      title: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_TITLE,
      titleId: O,
      disabled: !R || L,
      children: [(0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: f.formDescription,
        disabled: !R || L,
        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_DESCRIPTION
      }), (0, a.jsx)(r.Spacer, {
        size: 8
      }), (0, a.jsx)(r.SingleSelect, {
        "aria-labelledby": O,
        options: h,
        className: f.formInput,
        placeholder: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DISABLED,
        value: s,
        onChange: n,
        maxVisibleItems: 5,
        isDisabled: !R || L,
        look: r.SelectLooks.CUSTOM
      })]
    }), (0, a.jsx)(r.Spacer, {
      size: 24
    }), (0, a.jsxs)(r.FormSection, {
      title: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_TITLE,
      titleId: p,
      disabled: !R || L,
      children: [(0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: f.formDescription,
        disabled: !R || L,
        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_DESCRIPTION
      }), (0, a.jsx)(r.SingleSelect, {
        "aria-labelledby": p,
        options: C,
        className: f.formInput,
        value: m,
        onChange: N,
        maxVisibleItems: 5,
        isDisabled: !R || L,
        look: r.SelectLooks.CUSTOM
      })]
    })]
  })
}