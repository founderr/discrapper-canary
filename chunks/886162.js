n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(990547),
  a = n(399606),
  r = n(481060),
  o = n(232567),
  c = n(213609),
  u = n(23434),
  d = n(153124),
  E = n(981631),
  h = n(689938),
  _ = n(90054);

function I(e) {
  let {
    transitionState: t
  } = e, I = (0, a.e7)([u.Z], () => u.Z.getAction()), [m, g] = s.useState(!1), p = (0, d.Dt)();
  async function T() {
    return g(!0), I === E.c2C.AGREEMENTS && g(await (0, o.Lr)()), null
  }
  return (0, c.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: I
    }
  }, {}, []), (0, i.jsxs)(r.ModalRoot, {
    "aria-labelledby": p,
    transitionState: t,
    children: [(0, i.jsx)("div", {
      id: p
    }), (0, i.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: h.Z.Messages.NEW_TERMS_TITLE
      })
    }), (0, i.jsxs)(r.ModalContent, {
      children: [(0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        children: I === E.c2C.AGREEMENTS ? h.Z.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
      }), (0, i.jsxs)("div", {
        className: _.container,
        children: [(0, i.jsxs)("ul", {
          className: _.links,
          children: [(0, i.jsx)("li", {
            children: h.Z.Messages.TERMS_OF_SERVICE.format({
              url: E.EYA.TERMS
            })
          }), (0, i.jsx)("li", {
            children: h.Z.Messages.PAID_SERVICES_TERMS.format({
              url: E.EYA.PAID_TERMS
            })
          }), (0, i.jsx)("li", {
            children: h.Z.Messages.PRIVACY_POLICY.format({
              url: E.EYA.PRIVACY
            })
          }), (0, i.jsx)("li", {
            children: h.Z.Messages.COMMUNITY_GUIDELINES.format({
              url: E.EYA.GUIDELINES
            })
          })]
        }), (0, i.jsx)("img", {
          className: _.image,
          alt: "",
          src: n(146714)
        })]
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        className: _.agreementDescription,
        children: h.Z.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
      })]
    }), (0, i.jsx)(r.ModalFooter, {
      children: (0, i.jsx)(r.Button, {
        submitting: m,
        onClick: T,
        color: r.Button.Colors.GREEN,
        children: h.Z.Messages.AGREE
      })
    })]
  })
}