l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l(735250),
  o = l(470079),
  s = l(481060),
  a = l(782568),
  r = l(499150),
  i = l(557177),
  u = l(689938),
  c = l(865685);
let d = [{
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
  return (0, n.jsxs)(n.Fragment, {
    children: [t.preBold, (0, n.jsx)("b", {
      children: (0, n.jsx)("i", {
        children: t.bold
      })
    }), t.postBold]
  })
}

function f(e) {
  let {
    transitionState: t,
    onClose: l,
    asanaTask: f
  } = e;
  o.useEffect(() => {
    (0, i.GN)("success", .1)
  }, []);
  let h = o.useRef(d[Math.floor(Math.random() * d.length)]).current;
  return (0, n.jsx)(s.ModalRoot, {
    className: c.bugReporterSubmitModalRoot,
    transitionState: t,
    "aria-label": u.Z.Messages.SUBMIT_BUG,
    children: (0, n.jsxs)(s.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      className: c.modalContent,
      paddingFix: !1,
      children: [(0, n.jsx)(s.ModalCloseButton, {
        onClick: () => {
          null == l || l()
        },
        className: c.closeButton
      }), (0, n.jsxs)(s.Text, {
        className: c.submitText,
        variant: "text-sm/normal",
        children: ["Thanks for submitting a ", (0, n.jsx)(r.Z, {
          onClick: () => (0, a.Z)(f.permalink_url),
          children: "bug"
        }), "!", (0, n.jsx)("br", {}), (0, n.jsx)(p, {
          punConfig: h
        })]
      })]
    })
  })
}