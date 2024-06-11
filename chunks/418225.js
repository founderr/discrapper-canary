"use strict";
t.r(s), t.d(s, {
  default: function() {
    return T
  }
}), t("47120");
var a = t("735250");
t("470079");
var r = t("481060"),
  l = t("935369"),
  i = t("53365"),
  n = t("689938"),
  c = t("929160"),
  o = t("490962"),
  _ = t("221870");

function d(e) {
  let {
    header: s,
    body: t
  } = e;
  return (0, a.jsxs)("div", {
    className: c.bulletItem,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: c.bulletImage,
      src: o
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-sm/semibold",
        color: "text-normal",
        children: s
      }), (0, a.jsx)(r.Spacer, {
        size: 4
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: t
      })]
    })]
  })
}

function T(e) {
  let {
    guildId: s,
    demonetized: t,
    transitionState: o,
    onClose: T
  } = e, [E, {
    loading: u,
    error: x
  }] = (0, l.default)(t ? i.acceptNewTermsDemonetized : i.acceptNewTerms), C = async () => {
    try {
      let e = await E(s);
      null != e && (null == T || T())
    } catch (e) {}
  };
  return (0, a.jsxs)(r.ModalRoot, {
    className: c.__invalid_container,
    size: r.ModalSize.SMALL,
    transitionState: o,
    "aria-label": n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
    children: [(0, a.jsx)(r.ModalHeader, {
      separator: !1,
      className: c.header,
      children: (0, a.jsx)("div", {
        className: c.imageContainer,
        children: (0, a.jsx)("img", {
          alt: "",
          className: c.__invalid_image,
          src: _
        })
      })
    }), (0, a.jsx)(r.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: c.content,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE
        }), (0, a.jsx)(r.Spacer, {
          size: 12
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY.format({
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
          })
        }), (0, a.jsx)(r.Spacer, {
          size: 24
        }), (0, a.jsx)(d, {
          header: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_HEADER,
          body: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_BODY
        }), (0, a.jsx)(r.Spacer, {
          size: 16
        }), (0, a.jsx)(d, {
          header: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_HEADER,
          body: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_BODY
        })]
      })
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsxs)("div", {
        className: c.footer,
        children: [(0, a.jsx)(r.Button, {
          fullWidth: !0,
          onClick: C,
          submitting: u,
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_CTA
        }), (0, a.jsx)(r.Spacer, {
          size: 4
        }), (0, a.jsx)(r.Button, {
          color: r.Button.Colors.CUSTOM,
          innerClassName: c.remindMeLater,
          look: r.Button.Looks.LINK,
          fullWidth: !0,
          onClick: T,
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_REMIND_ME_LATER
        }), null == x ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Spacer, {
            size: 8
          }), (0, a.jsxs)(r.Text, {
            variant: "text-xs/normal",
            color: "status-danger",
            children: ["Error: ", x.message]
          })]
        }), (0, a.jsx)(r.Spacer, {
          size: 10
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_DISCLAIMER.format({
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
          })
        })]
      })
    })]
  })
}