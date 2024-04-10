"use strict";
s.r(t), s.d(t, {
  QuestsRewardCodeModalUnverified: function() {
    return m
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("442837"),
  r = s("481060"),
  o = s("893776"),
  i = s("594174"),
  d = s("41542"),
  u = s("918701"),
  c = s("689938"),
  f = s("334644"),
  C = s("800010");

function m(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, m = (0, n.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
  }), [h, R] = a.useState({
    status: "unknown"
  });
  a.useEffect(() => {
    R({
      status: "loading"
    }), o.default.verifyResend().then(() => R({
      status: "success"
    }), e => {
      R({
        status: "error"
      }), (0, u.captureQuestsException)(e, {
        tags: {
          location: "QuestsRewardCodeModalUnverified"
        }
      })
    })
  }, []);
  let E = () => (0, l.jsx)(r.ModalFooter, {
    className: f.modalFooter,
    children: (0, l.jsx)(r.Button, {
      color: r.Button.Colors.BRAND,
      size: r.Button.Sizes.MEDIUM,
      onClick: s,
      children: c.default.Messages.CLOSE
    })
  });
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: t,
    disableTrack: !0,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: f.headerImage,
      src: C
    }), (0, l.jsxs)(r.ModalHeader, {
      separator: !1,
      className: f.header,
      children: [(0, l.jsx)(r.Heading, {
        className: f.title,
        variant: "heading-xl/bold",
        children: c.default.Messages.QUESTS_REWARD_VERIFICATION_TITLE
      }), (0, l.jsx)(r.ModalCloseButton, {
        onClick: s,
        className: f.modalCloseButton
      })]
    }), "loading" === h.status && (0, l.jsx)(r.ModalContent, {
      className: f.content,
      children: (0, l.jsx)(r.Spinner, {})
    }), "error" === h.status && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.QUESTS_REWARD_VERIFICATION_ERROR
        })
      }), E()]
    }), "success" === h.status && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
            emailAddress: m,
            emailAddressLink: "mailto:".concat(m)
          })
        })
      }), (0, l.jsx)(r.ModalContent, {
        className: f.content,
        children: (0, l.jsxs)("div", {
          className: f.tooltip,
          children: [(0, l.jsx)(d.default, {
            className: f.infoFilledIcon
          }), (0, l.jsx)(r.Text, {
            className: f.tooltipText,
            variant: "text-sm/normal",
            children: c.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
          })]
        })
      }), E()]
    })]
  })
}