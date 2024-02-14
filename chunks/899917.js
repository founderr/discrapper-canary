"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
});
var o = n("37983");
n("884691");
var r = n("446674"),
  u = n("77078"),
  i = n("387225"),
  s = n("697218"),
  a = n("145131"),
  l = n("782340"),
  c = n("253230");

function d(t) {
  let {
    onClose: e
  } = t, a = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser());

  function c() {
    null == e || e()
  }

  function d() {
    c(), (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("867693").then(n.bind(n, "867693"));
      return e => (0, o.jsx)(t, {
        ...e
      })
    })
  }
  return (null == a ? void 0 : a.email) == null ? (0, o.jsx)(u.Button, {
    onClick: d,
    color: u.Button.Colors.BRAND,
    look: u.Button.Looks.FILLED,
    children: l.default.Messages.ADD_EMAIL_SHORT
  }) : (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(u.Button, {
      onClick: d,
      color: u.Button.Colors.PRIMARY,
      look: u.Button.Looks.LINK,
      children: l.default.Messages.CHANGE_EMAIL_SHORT
    }), (0, o.jsx)(i.default, {
      color: u.Button.Colors.BRAND,
      onClick: c
    })]
  })
}
var f = function(t) {
  let {
    onClose: e,
    transitionState: n
  } = t;
  return (0, o.jsxs)(u.ModalRoot, {
    transitionState: n,
    children: [(0, o.jsx)(u.ModalHeader, {
      children: (0, o.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H4,
        children: l.default.Messages.PREMIUM_NOT_VERIFIED
      })
    }), (0, o.jsxs)(u.ModalContent, {
      children: [(0, o.jsx)("div", {
        className: c.imageUnverified
      }), (0, o.jsx)(u.Text, {
        variant: "text-md/normal",
        className: c.message,
        children: l.default.Messages.PREMIUM_NOT_VERIFIED_BODY
      })]
    }), (0, o.jsx)(u.ModalFooter, {
      children: (0, o.jsx)(a.default, {
        justify: a.default.Justify.END,
        children: (0, o.jsx)(d, {
          onClose: e
        })
      })
    })]
  })
}