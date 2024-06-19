t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var r = t(735250),
  l = t(470079),
  a = t(442837),
  s = t(481060),
  o = t(668274),
  i = t(807693),
  u = t(285952),
  c = t(729035),
  d = t(689938),
  h = t(648668);

function f(e) {
  var n;
  let {
    eulaId: t,
    transitionState: f,
    onClose: g
  } = e, p = (0, a.e7)([i.Z], () => i.Z.getEULA(t));
  l.useEffect(() => {
    (0, o.N)(t)
  }, [t]);
  let m = null !== (n = null == p ? void 0 : p.name) && void 0 !== n ? n : d.Z.Messages.LOADING,
    b = null != p ? (0, r.jsx)(c.Z, {
      children: p.content,
      className: h.markdown
    }) : (0, r.jsx)(s.Spinner, {
      className: h.spinner
    });
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: f,
    size: s.ModalSize.SMALL,
    "aria-label": m,
    children: [(0, r.jsxs)(s.ModalHeader, {
      justify: u.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: m
      }), (0, r.jsx)(s.ModalCloseButton, {
        onClick: g
      })]
    }), (0, r.jsx)(s.ModalContent, {
      children: b
    })]
  })
}