a.r(s), a.d(s, {
  default: function() {
    return p
  }
});
var t = a(735250),
  r = a(470079),
  n = a(442837),
  l = a(481060),
  i = a(277390),
  o = a(639351),
  d = a(63063),
  c = a(258609),
  u = a(259408),
  m = a(893387),
  f = a(927923),
  x = a(981631),
  h = a(689938),
  N = a(879008);

function g(e) {
  let {
    step: s,
    instructions: a
  } = e;
  return (0, t.jsxs)("div", {
    className: N.cardRow,
    children: [(0, t.jsx)("div", {
      className: N.stepNumberContainer,
      children: (0, t.jsx)(l.Text, {
        variant: "text-sm/semibold",
        className: N.stepNumber,
        children: s
      })
    }), (0, t.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      className: N.instructions,
      children: a
    })]
  })
}

function p(e) {
  let {
    channel: s,
    transitionState: a,
    onClose: p
  } = e, j = (0, n.e7)([c.Z], () => null != c.Z.getRemoteSessionId()), Z = (0, u.Z)(s, {
    forQRCode: !0
  });
  return r.useEffect(() => {
    j && p()
  }, [j, p]), r.useEffect(() => {
    (0, m.Z)(s.id, f.YE.XBOX)
  }, [s.id]), (0, t.jsxs)(l.ModalRoot, {
    size: l.ModalSize.DYNAMIC,
    className: N.modalRoot,
    transitionState: a,
    children: [(0, t.jsxs)(l.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, t.jsx)(l.Heading, {
        className: N.modalHeader,
        variant: "heading-xl/extrabold",
        children: h.Z.Messages.TRANSFER_VOICE_TO_XBOX
      }), (0, t.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.Z.Messages.XBOX_APP_REQUIRED_SUBHEADER
      })]
    }), (0, t.jsx)(l.ModalContent, {
      className: N.content,
      children: (0, t.jsxs)("div", {
        className: N.card,
        children: [(0, t.jsxs)("div", {
          className: N.cardText,
          children: [(0, t.jsxs)(l.Text, {
            variant: "text-lg/semibold",
            color: "header-primary",
            className: N.cardRow,
            children: [(0, t.jsx)(o.Z, {
              className: N.cardHeaderIcon
            }), h.Z.Messages.XBOX_APP_FOR_MOBILE]
          }), (0, t.jsx)(g, {
            step: 1,
            instructions: h.Z.Messages.XBOX_APP_STEP_ONE
          }), (0, t.jsx)(g, {
            step: 2,
            instructions: h.Z.Messages.XBOX_APP_STEP_TWO
          }), (0, t.jsx)(l.Text, {
            variant: "text-sm/medium",
            children: (0, t.jsx)(l.Anchor, {
              className: N.learnMore,
              href: d.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
              children: h.Z.Messages.LEARN_MORE
            })
          })]
        }), (0, t.jsx)(i.ZP, {
          className: N.qrCode,
          size: 120,
          text: Z
        })]
      })
    }), (0, t.jsx)(l.ModalCloseButton, {
      className: N.closeButton,
      onClick: p
    })]
  })
}