"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("990547"),
  i = n("399606"),
  r = n("481060"),
  o = n("232567"),
  u = n("213609"),
  d = n("23434"),
  c = n("153124"),
  f = n("981631"),
  E = n("689938"),
  _ = n("861929");

function h(e) {
  let {
    transitionState: t
  } = e, h = (0, i.useStateFromStores)([d.default], () => d.default.getAction()), [C, S] = s.useState(!1), m = (0, c.useUID)();
  async function I() {
    return S(!0), h === f.UserRequiredActions.AGREEMENTS && S(await (0, o.acceptAgreements)()), null
  }
  return (0, u.default)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: h
    }
  }, {}, []), (0, a.jsxs)(r.ModalRoot, {
    "aria-labelledby": m,
    transitionState: t,
    children: [(0, a.jsx)("div", {
      id: m
    }), (0, a.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: E.default.Messages.NEW_TERMS_TITLE
      })
    }), (0, a.jsxs)(r.ModalContent, {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: h === f.UserRequiredActions.AGREEMENTS ? E.default.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
      }), (0, a.jsxs)("div", {
        className: _.container,
        children: [(0, a.jsxs)("ul", {
          className: _.links,
          children: [(0, a.jsx)("li", {
            children: E.default.Messages.TERMS_OF_SERVICE.format({
              url: f.MarketingURLs.TERMS
            })
          }), (0, a.jsx)("li", {
            children: E.default.Messages.PAID_SERVICES_TERMS.format({
              url: f.MarketingURLs.PAID_TERMS
            })
          }), (0, a.jsx)("li", {
            children: E.default.Messages.PRIVACY_POLICY.format({
              url: f.MarketingURLs.PRIVACY
            })
          }), (0, a.jsx)("li", {
            children: E.default.Messages.COMMUNITY_GUIDELINES.format({
              url: f.MarketingURLs.GUIDELINES
            })
          })]
        }), (0, a.jsx)("img", {
          className: _.image,
          alt: "",
          src: n("146714")
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        className: _.agreementDescription,
        children: E.default.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
      })]
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsx)(r.Button, {
        submitting: C,
        onClick: I,
        color: r.Button.Colors.GREEN,
        children: E.default.Messages.AGREE
      })
    })]
  })
}