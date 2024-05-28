"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  r = n("990547"),
  u = n("442837"),
  s = n("481060"),
  i = n("390885"),
  o = n("594174"),
  c = n("626135"),
  d = n("63063"),
  f = n("771308"),
  A = n("13430"),
  _ = n("723359"),
  E = n("981631"),
  p = n("630724"),
  T = n("689938"),
  m = n("291582");

function G(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [G, g] = l.useState(null), [y, N] = l.useState(null), [S, h] = l.useState(!1), v = l.createRef(), O = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser()), C = l.createRef();
  l.useEffect(() => {
    i.default.flowStep(p.FlowType.ANY, p.AgeGateSteps.AGE_GATE), c.default.track(E.AnalyticEvents.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), l.useEffect(() => {
    (null == O ? void 0 : O.nsfwAllowed) != null && n()
  }, [O, n]);
  let D = async e => {
    if (e.preventDefault(), null != G) {
      h(!0);
      try {
        await f.submitDateOfBirth(G, E.AnalyticsSections.CLAIM_ACCOUNT_MODAL)
      } catch (e) {
        if (null != e.body && null != e.body.date_of_birth) i.default.flowStep(p.FlowType.ANY, p.AgeGateSteps.AGE_GATE_UNDERAGE), f.preventUnderageRegistration(_.AgeGateSource.CLAIM_ACCOUNT), f.logoutUnderageNewUser(_.AgeGateSource.CLAIM_ACCOUNT), n();
        else {
          var t;
          (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? N(T.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : N(null == e ? void 0 : e.body.message)
        }
      }
      h(!1)
    }
  }, R = l.useCallback(() => {
    var e;
    null === (e = C.current) || void 0 === e || e.focus()
  }, [C]);
  return (0, a.jsx)(s.ModalRoot, {
    transitionState: t,
    size: s.ModalSize.DYNAMIC,
    "aria-label": T.default.Messages.AGE_GATE_HEADER,
    className: m.modal,
    impression: {
      impressionName: r.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !1
      }
    },
    children: (0, a.jsxs)(s.ModalContent, {
      className: m.content,
      children: [(0, a.jsx)("div", {
        className: m.image
      }), (0, a.jsxs)("form", {
        onSubmit: D,
        children: [(0, a.jsx)(s.Heading, {
          className: m.title,
          variant: "heading-xl/semibold",
          children: T.default.Messages.AGE_GATE_HEADER
        }), (0, a.jsx)(s.Text, {
          color: "header-secondary",
          className: m.description,
          variant: "text-md/normal",
          children: T.default.Messages.AGE_GATE_BODY.format({
            helpURL: d.default.getArticleURL(E.HelpdeskArticles.AGE_GATE)
          })
        }), (0, a.jsx)(A.default, {
          required: !0,
          autoFocus: !0,
          wrapperClassName: m.formItem,
          label: T.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
          name: "birthday",
          onChange: e => g(e),
          onPopulated: R,
          error: y,
          value: G,
          ref: v
        }), (0, a.jsx)(s.Button, {
          buttonRef: C,
          type: "submit",
          size: s.Button.Sizes.LARGE,
          submitting: S,
          disabled: null == G,
          fullWidth: !0,
          children: T.default.Messages.DONE
        })]
      })]
    })
  })
}