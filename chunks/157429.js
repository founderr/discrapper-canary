"use strict";
a.r(s), a.d(s, {
  default: function() {
    return E
  }
}), a("47120");
var n = a("735250");
a("470079");
var t = a("512722"),
  l = a.n(t),
  o = a("481060"),
  i = a("935369"),
  r = a("53365"),
  d = a("153124"),
  c = a("981631"),
  u = a("689938"),
  _ = a("616765");

function E(e) {
  let {
    transitionState: s,
    guild: a,
    onClose: t
  } = e, E = (0, d.useUID)(), [T, {
    loading: M,
    error: N
  }] = (0, i.default)(r.removeMonetization), O = async () => {
    l()(null != a, "no guild"), null != await T(a.id) && t()
  };
  return (0, n.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-labelledby": E,
    children: [(0, n.jsxs)(o.ModalHeader, {
      children: [(0, n.jsx)(o.Heading, {
        id: E,
        variant: "heading-md/semibold",
        children: u.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER
      }), (0, n.jsx)(o.ModalCloseButton, {
        className: _.closeButton,
        onClick: t
      })]
    }), (0, n.jsxs)(o.ModalContent, {
      className: _.content,
      children: [null != N ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.FormErrorBlock, {
          children: N.message
        }), (0, n.jsx)(o.Spacer, {
          size: 24
        })]
      }) : null, (0, n.jsx)(o.FormText, {
        type: o.FormText.Types.ERROR,
        children: u.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format({
          guildName: a.toString(),
          url: c.MarketingURLs.DEVELOPER_PORTAL_TEAMS
        })
      }), (0, n.jsx)(o.Spacer, {
        size: 16
      })]
    }), (0, n.jsx)(o.ModalFooter, {
      className: _.__invalid_footer,
      children: (0, n.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        className: _.__invalid_goBackButton,
        submitting: M,
        onClick: O,
        children: u.default.Messages.SAVE
      })
    })]
  })
}