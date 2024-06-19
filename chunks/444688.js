n.r(t);
var s = n(735250);
n(470079);
var o = n(442837),
  i = n(481060),
  l = n(418632),
  r = n(594174),
  a = n(285952),
  c = n(689938),
  d = n(214521);

function u(e) {
  let {
    onClose: t
  } = e, a = (0, o.e7)([r.default], () => r.default.getCurrentUser());

  function d() {
    null == t || t()
  }

  function u() {
    d(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("9343"), n.e("81247")]).then(n.bind(n, 642298));
      return t => (0, s.jsx)(e, {
        ...t
      })
    })
  }
  return (null == a ? void 0 : a.email) == null ? (0, s.jsx)(i.Button, {
    onClick: u,
    color: i.Button.Colors.BRAND,
    look: i.Button.Looks.FILLED,
    children: c.Z.Messages.ADD_EMAIL_SHORT
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(i.Button, {
      onClick: u,
      color: i.Button.Colors.PRIMARY,
      look: i.Button.Looks.LINK,
      children: c.Z.Messages.CHANGE_EMAIL_SHORT
    }), (0, s.jsx)(l.Z, {
      color: i.Button.Colors.BRAND,
      onClick: d
    })]
  })
}
t.default = function(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, s.jsxs)(i.ModalRoot, {
    transitionState: n,
    children: [(0, s.jsx)(i.ModalHeader, {
      children: (0, s.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H4,
        children: c.Z.Messages.PREMIUM_NOT_VERIFIED
      })
    }), (0, s.jsxs)(i.ModalContent, {
      children: [(0, s.jsx)("div", {
        className: d.imageUnverified
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        className: d.message,
        children: c.Z.Messages.PREMIUM_NOT_VERIFIED_BODY
      })]
    }), (0, s.jsx)(i.ModalFooter, {
      children: (0, s.jsx)(a.Z, {
        justify: a.Z.Justify.END,
        children: (0, s.jsx)(u, {
          onClose: t
        })
      })
    })]
  })
}