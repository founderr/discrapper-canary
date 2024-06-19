s.r(a), s.d(a, {
  default: function() {
    return N
  }
});
var t = s(735250),
  n = s(470079),
  r = s(481060),
  c = s(153124),
  l = s(626135),
  o = s(981631),
  i = s(689938),
  d = s(776953),
  C = s(963705);

function N(e) {
  let {
    source: a,
    onClose: s,
    transitionState: N
  } = e;
  n.useEffect(() => {
    l.default.track(o.rMx.OPEN_MODAL, {
      type: o.jXE.CONTACT_SYNC_NC_MODAL,
      source: {
        location: a
      }
    })
  }, [a]);
  let u = (0, c.Dt)();
  return (0, t.jsxs)(r.ModalRoot, {
    className: d.contactSync,
    transitionState: N,
    "aria-labelledby": u,
    children: [(0, t.jsx)(r.ModalCloseButton, {
      onClick: s,
      className: d.modalCloseButton
    }), (0, t.jsxs)("div", {
      className: d.inner,
      children: [(0, t.jsx)(r.Heading, {
        variant: "heading-xl/extrabold",
        color: "header-primary",
        className: d.header,
        children: i.Z.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_TITLE
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: i.Z.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_BODY
      })]
    }), (0, t.jsx)("div", {
      className: d.container,
      children: (0, t.jsx)("img", {
        alt: "",
        src: C
      })
    })]
  })
}