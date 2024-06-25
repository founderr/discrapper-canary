o.r(t), o.d(t, {
  default: function() {
    return h
  }
});
var l = o(735250),
  n = o(470079),
  s = o(481060),
  a = o(782568),
  r = o(499150),
  i = o(557177),
  d = o(689938),
  c = o(865685);
let u = [{
  preBold: "That's pretty...",
  bold: "fly!"
}, {
  preBold: "On Point will make sure to",
  bold: " tick ",
  postBold: "a look at it!"
}, {
  preBold: "You're...un",
  bold: "bee ",
  postBold: "lievable!"
}];

function p(e) {
  let {
    punConfig: t
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [t.preBold, (0, l.jsx)("b", {
      children: (0, l.jsx)("i", {
        children: t.bold
      })
    }), t.postBold]
  })
}

function h(e) {
  let {
    transitionState: t,
    onClose: o,
    asanaTask: h
  } = e;
  n.useEffect(() => {
    (0, i.GN)("success", .1)
  }, []);
  let b = n.useRef(u[Math.floor(Math.random() * u.length)]).current;
  return (0, l.jsx)(s.ModalRoot, {
    className: c.bugReporterSubmitModalRoot,
    transitionState: t,
    "aria-label": d.Z.Messages.SUBMIT_BUG,
    children: (0, l.jsxs)(s.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      className: c.modalContent,
      paddingFix: !1,
      children: [(0, l.jsx)(s.ModalCloseButton, {
        onClick: () => {
          null == o || o()
        },
        className: c.closeButton
      }), (0, l.jsxs)(s.Text, {
        className: c.submitText,
        variant: "text-sm/normal",
        children: ["Thanks for submitting a ", (0, l.jsx)(r.Z, {
          onClick: () => (0, a.Z)(h.permalink_url),
          children: "bug"
        }), "!", (0, l.jsx)("br", {}), (0, l.jsx)(p, {
          punConfig: b
        })]
      })]
    })
  })
}