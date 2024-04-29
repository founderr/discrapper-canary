"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("990547"),
  i = a("399606"),
  r = a("481060"),
  o = a("232567"),
  u = a("213609"),
  d = a("23434"),
  c = a("153124"),
  f = a("981631"),
  E = a("689938"),
  h = a("573352");

function _(e) {
  let {
    transitionState: t
  } = e, _ = (0, i.useStateFromStores)([d.default], () => d.default.getAction()), [C, m] = s.useState(!1), S = (0, c.useUID)();
  async function p() {
    return m(!0), _ === f.UserRequiredActions.AGREEMENTS && m(await (0, o.acceptAgreements)()), null
  }
  return (0, u.default)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: _
    }
  }, {}, []), (0, n.jsxs)(r.ModalRoot, {
    "aria-labelledby": S,
    transitionState: t,
    children: [(0, n.jsx)("div", {
      id: S
    }), (0, n.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: E.default.Messages.NEW_TERMS_TITLE
      })
    }), (0, n.jsxs)(r.ModalContent, {
      children: [(0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        children: _ === f.UserRequiredActions.AGREEMENTS ? E.default.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
      }), (0, n.jsxs)("div", {
        className: h.container,
        children: [(0, n.jsxs)("ul", {
          className: h.links,
          children: [(0, n.jsx)("li", {
            children: E.default.Messages.TERMS_OF_SERVICE.format({
              url: f.MarketingURLs.TERMS
            })
          }), (0, n.jsx)("li", {
            children: E.default.Messages.PAID_SERVICES_TERMS.format({
              url: f.MarketingURLs.PAID_TERMS
            })
          }), (0, n.jsx)("li", {
            children: E.default.Messages.PRIVACY_POLICY.format({
              url: f.MarketingURLs.PRIVACY
            })
          }), (0, n.jsx)("li", {
            children: E.default.Messages.COMMUNITY_GUIDELINES.format({
              url: f.MarketingURLs.GUIDELINES
            })
          })]
        }), (0, n.jsx)("img", {
          className: h.image,
          alt: "",
          src: a("146714")
        })]
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        className: h.agreementDescription,
        children: E.default.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
      })]
    }), (0, n.jsx)(r.ModalFooter, {
      children: (0, n.jsx)(r.Button, {
        submitting: C,
        onClick: p,
        color: r.Button.Colors.GREEN,
        children: E.default.Messages.AGREE
      })
    })]
  })
}