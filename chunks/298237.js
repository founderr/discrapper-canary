"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var n = a("735250"),
  l = a("470079"),
  s = a("990547"),
  r = a("442837"),
  u = a("481060"),
  i = a("390885"),
  o = a("594174"),
  c = a("626135"),
  d = a("63063"),
  A = a("771308"),
  f = a("13430"),
  E = a("723359"),
  _ = a("981631"),
  m = a("630724"),
  G = a("689938"),
  p = a("291582");

function T(e) {
  let {
    transitionState: t,
    onClose: a
  } = e, [T, h] = l.useState(null), [y, g] = l.useState(null), [v, D] = l.useState(!1), M = l.createRef(), N = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()), b = l.createRef();
  l.useEffect(() => {
    i.default.flowStep(m.FlowType.ANY, m.AgeGateSteps.AGE_GATE), c.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), l.useEffect(() => {
    (null == N ? void 0 : N.nsfwAllowed) != null && a()
  }, [N, a]);
  let R = async e => {
    if (e.preventDefault(), null != T) {
      D(!0);
      try {
        await A.submitDateOfBirth(T, _.AnalyticsSections.CLAIM_ACCOUNT_MODAL)
      } catch (e) {
        if (null != e.body && null != e.body.date_of_birth) i.default.flowStep(m.FlowType.ANY, m.AgeGateSteps.AGE_GATE_UNDERAGE), A.preventUnderageRegistration(E.AgeGateSource.CLAIM_ACCOUNT), A.logoutUnderageNewUser(E.AgeGateSource.CLAIM_ACCOUNT), a();
        else {
          var t;
          (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? g(G.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : g(null == e ? void 0 : e.body.message)
        }
      }
      D(!1)
    }
  }, x = l.useCallback(() => {
    var e;
    null === (e = b.current) || void 0 === e || e.focus()
  }, [b]);
  return (0, n.jsx)(u.ModalRoot, {
    transitionState: t,
    size: u.ModalSize.DYNAMIC,
    "aria-label": G.default.Messages.AGE_GATE_HEADER,
    className: p.modal,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !1
      }
    },
    children: (0, n.jsxs)(u.ModalContent, {
      className: p.content,
      children: [(0, n.jsx)("div", {
        className: p.image
      }), (0, n.jsxs)("form", {
        onSubmit: R,
        children: [(0, n.jsx)(u.Heading, {
          className: p.title,
          variant: "heading-xl/semibold",
          children: G.default.Messages.AGE_GATE_HEADER
        }), (0, n.jsx)(u.Text, {
          color: "header-secondary",
          className: p.description,
          variant: "text-md/normal",
          children: G.default.Messages.AGE_GATE_BODY.format({
            helpURL: d.default.getArticleURL(_.HelpdeskArticles.AGE_GATE)
          })
        }), (0, n.jsx)(f.default, {
          required: !0,
          autoFocus: !0,
          wrapperClassName: p.formItem,
          label: G.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
          name: "birthday",
          onChange: e => h(e),
          onPopulated: x,
          error: y,
          value: T,
          ref: M
        }), (0, n.jsx)(u.Button, {
          buttonRef: b,
          type: "submit",
          size: u.Button.Sizes.LARGE,
          submitting: v,
          disabled: null == T,
          fullWidth: !0,
          children: G.default.Messages.DONE
        })]
      })]
    })
  })
}