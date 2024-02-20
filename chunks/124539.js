"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  i = a.n(n),
  o = a("446674"),
  d = a("77078"),
  r = a("913144"),
  c = a("145131"),
  u = a("646356"),
  E = a("736393"),
  A = a("698609"),
  _ = a("170213"),
  S = a("782340"),
  N = a("836092"),
  x = a("221389");

function I(e) {
  let {
    isDsaEligible: t = !1,
    className: a,
    onClose: n,
    onNext: I,
    onBack: f
  } = e, T = (0, A.useSafetyHubAppealSignal)(), g = (0, o.useStateFromStores)([u.default], () => u.default.getFreeTextAppealReason()), [p, m] = s.useState(""), [C, h] = s.useState(!1);
  s.useEffect(() => {
    m(null != g ? g : ""), h(T === _.AppealIngestionSignal.SOMETHING_ELSE)
  }, [g, T]);
  let L = e => {
      h(e === _.AppealIngestionSignal.SOMETHING_ELSE), e !== _.AppealIngestionSignal.SOMETHING_ELSE && (m(""), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
        userInput: ""
      })), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
        signal: e
      })
    },
    M = _.AppealIngestionSignalOrder.map(e => ({
      value: e,
      name: (0, E.getAppealSignalDisplayText)(e)
    }));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(d.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }), null != n && (0, l.jsx)(d.ModalCloseButton, {
        className: x.closeButton,
        onClick: n
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: i(N.modalContent, a),
      paddingFix: !1,
      children: [(0, l.jsx)(d.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: x.radioItem,
        size: d.RadioGroup.Sizes.NOT_SET,
        value: T,
        options: M,
        onChange: e => {
          let {
            value: t
          } = e;
          return L(t)
        }
      }), C && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.TextArea, {
          rows: 4,
          maxLength: 1024,
          placeholder: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
          value: p,
          onChange: m,
          autoFocus: !0
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
        })]
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: N.disclaimer,
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format()
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: p
          }), null == I || I()
        },
        color: d.Button.Colors.BRAND,
        children: S.default.Messages.NEXT
      }), t && (0, l.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: p
          }), null == f || f()
        },
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        children: S.default.Messages.BACK
      })]
    })]
  })
}