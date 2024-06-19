t(47120);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  n = t.n(i),
  o = t(481060),
  r = t(153124),
  c = t(689938),
  d = t(574264);
let E = e => {
  let {
    index: s,
    title: t,
    selected: a
  } = e;
  return (0, l.jsxs)("div", {
    className: n()(d.overviewStep, {
      [d.selected]: a
    }),
    children: [(0, l.jsx)(o.Text, {
      className: d.stepIndex,
      variant: "text-sm/normal",
      children: s + 1
    }), (0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      className: d.stepTitle,
      children: t
    })]
  })
};
s.Z = e => {
  let {
    className: s,
    title: t,
    stepData: i,
    transitionState: _,
    onClose: N,
    completeButtonText: I,
    overviewFooter: M,
    onNextPressed: T,
    onPrevPressed: L,
    onComplete: x,
    sequencerClassName: m,
    initialStep: u = 0,
    forceStep: O,
    submitting: C = !1,
    autoCloseOnComplete: h = !0
  } = e, [A, S] = a.useState([]), [p, g] = a.useState(u), v = (0, r.Dt)();
  a.useEffect(() => {
    S([...Array(i.length).keys()])
  }, [i.length]);
  let f = null != O ? O : p,
    j = i[f],
    D = 0 === f,
    b = f === i.length - 1,
    R = null != I ? I : c.Z.Messages.DONE,
    U = a.useCallback(() => {
      null == L || L(), g(f - 1)
    }, [L, f, g]);
  return (0, l.jsxs)(o.ModalRoot, {
    size: o.ModalSize.MEDIUM,
    className: n()(d.container, s),
    transitionState: _,
    "aria-labelledby": v,
    children: [(0, l.jsxs)("div", {
      className: d.overviewSidebar,
      children: [(0, l.jsx)(o.Heading, {
        id: v,
        variant: "heading-xl/semibold",
        className: d.header,
        children: t
      }), (0, l.jsx)("div", {
        className: d.overviewSteps,
        children: i.map((e, s) => (0, l.jsx)(E, {
          index: s,
          title: e.overviewTitle,
          selected: s === f
        }, s))
      }), M]
    }), (0, l.jsxs)("div", {
      className: d.modal,
      children: [(0, l.jsxs)(o.ModalContent, {
        children: [(0, l.jsx)(o.ModalCloseButton, {
          focusProps: {
            offset: {
              top: 4,
              right: 4,
              left: 4
            }
          },
          onClick: N,
          className: d.closeButton
        }), (0, l.jsx)(o.Sequencer, {
          step: f,
          steps: A,
          sideMargin: 24,
          verticalMargin: 24,
          className: n()(d.sequencer, m),
          innerClassName: d.innerSequencer,
          children: j.modalContent
        })]
      }), (0, l.jsxs)(o.ModalFooter, {
        className: d.footer,
        children: [(0, l.jsx)(o.Button, {
          type: "submit",
          submitting: C,
          onClick: () => {
            b ? (x(), h && N()) : (null == T || T(), g(f + 1))
          },
          color: o.Button.Colors.GREEN,
          disabled: j.disableNextStep,
          children: b ? R : c.Z.Messages.NEXT
        }), D ? null : (0, l.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.MIN,
          onClick: U,
          children: c.Z.Messages.BACK
        })]
      })]
    })]
  })
}