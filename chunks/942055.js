"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var s = n("37983");
n("884691");
var a = n("759843"),
  l = n("872717"),
  i = n("77078"),
  r = n("363396"),
  d = n("79798"),
  u = n("145131"),
  o = n("701909"),
  c = n("49111"),
  f = n("988268"),
  E = n("782340"),
  g = n("25170"),
  m = n("348044");

function M(e) {
  let {
    transitionState: t,
    onClose: n,
    channel: M,
    message: h
  } = e;
  return (0, s.jsxs)(i.ModalRoot, {
    transitionState: t,
    "aria-labelledby": "clyde-authorize-modal",
    size: i.ModalSize.DYNAMIC,
    impression: {
      impressionName: a.ImpressionNames.USER_CLYDE_AI_CONSENT_MODAL
    },
    children: [(0, s.jsxs)(i.ModalHeader, {
      direction: u.default.Direction.HORIZONTAL,
      className: g.header,
      separator: !1,
      children: [(0, s.jsx)("img", {
        src: m,
        className: g.clydeIcon,
        alt: ""
      }), (0, s.jsx)(i.Text, {
        variant: "text-lg/bold",
        children: E.default.Messages.CLYDE_MODAL_TITLE
      }), (0, s.jsx)(d.default, {
        type: f.BotTagTypes.AI
      })]
    }), (0, s.jsxs)(i.ModalContent, {
      className: g.container,
      children: [(0, s.jsx)("div", {
        className: g.divider
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: g.subheading,
        children: E.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: E.default.Messages.CLYDE_MODAL_ABOUT_SECTION
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: g.subheading,
        children: E.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: E.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
          guidelinesURL: c.MarketingURLs.GUIDELINES,
          privacyPolicyURL: c.MarketingURLs.PRIVACY
        })
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: g.subheading,
        children: E.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: E.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: g.subheading,
        children: E.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
          learnMoreURL: o.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
        })
      })]
    }), (0, s.jsxs)(i.ModalFooter, {
      direction: u.default.Direction.HORIZONTAL,
      className: g.footer,
      children: [(0, s.jsx)(i.Button, {
        size: i.ButtonSizes.MEDIUM,
        look: i.ButtonLooks.BLANK,
        className: g.cancelButton,
        onClick: n,
        children: E.default.Messages.CANCEL
      }), (0, s.jsx)(i.Button, {
        size: i.ButtonSizes.MEDIUM,
        onClick: () => {
          l.default.put({
            url: c.Endpoints.USER_CLYDE_CONSENT,
            body: {
              consent: !0
            }
          }).then(() => {
            (0, r.retrySendMessage)(M, h), n()
          }).catch(() => {
            n()
          })
        },
        children: E.default.Messages.CONTINUE
      })]
    })]
  })
}