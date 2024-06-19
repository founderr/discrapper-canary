t.r(s), t(47120);
var l = t(735250),
  n = t(470079),
  o = t(435935),
  a = t(481060),
  i = t(570140),
  r = t(960359),
  d = t(853197),
  u = t(430492),
  c = t(689938),
  M = t(461720);
s.default = function(e) {
  let {
    transitionState: s,
    closeParentModal: t,
    onClose: h,
    dropsQuestId: C,
    platform: x,
    code: j,
    singlePlatformClaim: N
  } = e, [f, m] = n.useState(null), [p, E] = n.useState(null != j ? j : null), I = (0, d.EW)(C);
  if (n.useEffect(() => {
      null == p && N && O(C, x)
    }, [p, N, C, x]), null == I) return null;
  let O = (e, s) => {
      (0, r.Nw)(e, s).then(e => E(e)).catch(e => {
        var s;
        return m(null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.code)
      }).then(() => {
        i.Z.wait(async () => {
          await (0, r.R5)()
        })
      })
    },
    R = () => {
      t(), (0, a.closeAllModals)()
    };
  return (0, l.jsx)(a.ModalRoot, {
    transitionState: s,
    children: null != f ? (0, l.jsx)(u.L1, {
      onClose: () => {
        R()
      },
      errorCode: f
    }) : null !== p ? (0, l.jsx)(u.o1, {
      bodyText: I.messages.claimTip(),
      onClose: R,
      copyInputTitle: c.Z.Messages.REDEMPTION_CODE,
      code: p
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(a.ModalHeader, {
        separator: !1,
        justify: o.k.Justify.BETWEEN,
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-md/medium",
          children: c.Z.Messages.DROPS_MODAL_PLATFORM_CONFIRMATION_TITLE.format({
            platform: (0, d.Un)(x)
          })
        }), (0, l.jsx)(a.ModalCloseButton, {
          onClick: R
        })]
      }), (0, l.jsx)(a.ModalContent, {
        className: M.modalContent,
        children: (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: c.Z.Messages.DROPS_MODAL_CONFIRMATION_WARNING
        })
      }), (0, l.jsxs)(a.ModalFooter, {
        justify: o.k.Justify.BETWEEN,
        children: [(0, l.jsx)(a.Button, {
          onClick: () => {
            O(C, x)
          },
          children: c.Z.Messages.CONFIRM
        }), (0, l.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          size: a.Button.Sizes.MIN,
          color: a.Button.Colors.PRIMARY,
          onClick: h,
          children: c.Z.Messages.BACK
        })]
      })]
    })
  })
}