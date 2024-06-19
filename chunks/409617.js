n.d(s, {
  Z: function() {
    return S
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  t = n(120356),
  i = n.n(t),
  o = n(442837),
  r = n(481060),
  c = n(570140),
  d = n(285952),
  _ = n(236289),
  E = n(788080),
  N = n(613734),
  x = n(800530),
  A = n(689938),
  u = n(649828),
  I = n(298196);

function S(e) {
  let {
    isDsaEligible: s = !1,
    className: n,
    onClose: t,
    onNext: S,
    onBack: T
  } = e, C = (0, N.U0)(), h = (0, o.e7)([_.Z], () => _.Z.getFreeTextAppealReason()), [L, m] = l.useState(""), [M, g] = l.useState(!1);
  l.useEffect(() => {
    m(null != h ? h : ""), g(C === x.bK.SOMETHING_ELSE)
  }, [h, C]);
  let O = e => {
      g(e === x.bK.SOMETHING_ELSE), e !== x.bK.SOMETHING_ELSE && (m(""), c.Z.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
        userInput: ""
      })), c.Z.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
        signal: e
      })
    },
    j = x.RY.map(e => ({
      value: e,
      name: (0, E.ox)(e)
    }));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(r.ModalHeader, {
      direction: d.Z.Direction.VERTICAL,
      className: I.header,
      separator: !1,
      children: [(0, a.jsx)(r.Heading, {
        className: I.title,
        variant: "heading-xl/semibold",
        children: A.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, a.jsx)(r.Text, {
        className: I.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }), null != t && (0, a.jsx)(r.ModalCloseButton, {
        className: I.closeButton,
        onClick: t
      })]
    }), (0, a.jsxs)(r.ModalContent, {
      className: i()(u.modalContent, n),
      paddingFix: !1,
      children: [(0, a.jsx)(r.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: I.radioItem,
        size: r.RadioGroup.Sizes.NOT_SET,
        value: C,
        options: j,
        onChange: e => {
          let {
            value: s
          } = e;
          return O(s)
        }
      }), M && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.TextArea, {
          rows: 4,
          maxLength: 1024,
          placeholder: A.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
          value: L,
          onChange: m,
          autoFocus: !0
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: A.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
        })]
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: u.disclaimer,
        children: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format()
      })]
    }), (0, a.jsxs)(r.ModalFooter, {
      children: [(0, a.jsx)(r.Button, {
        onClick: () => {
          c.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: L
          }), null == S || S()
        },
        color: r.Button.Colors.BRAND,
        children: A.Z.Messages.NEXT
      }), s && (0, a.jsx)(r.Button, {
        onClick: () => {
          c.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: L
          }), null == T || T()
        },
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: A.Z.Messages.BACK
      })]
    })]
  })
}