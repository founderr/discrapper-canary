"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(285952),
  a = n(689938),
  l = n(510092);
t.Z = e => {
  let t, {
      button: n,
      submitting: u,
      disableNext: _,
      onClick: c,
      canNavigateBack: d,
      onBackClicked: E
    } = e,
    I = r.useRef(null),
    T = null != n && "cancel" !== n.type,
    h = d && (null == n ? void 0 : n.type) !== "done",
    f = T || h;
  if (r.useEffect(() => {
      if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
        var e;
        null === (e = I.current) || void 0 === e || e.focus()
      }
    }, [null == n ? void 0 : n.type]), !f) return null;
  let S = a.Z.Messages.DONE;
  return (null == n ? void 0 : n.type) === "submit" ? (S = a.Z.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = s.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? S = a.Z.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (S = a.Z.Messages.CANCEL, t = s.Button.Colors.TRANSPARENT), (0, i.jsxs)(s.ModalFooter, {
    direction: o.Z.Direction.HORIZONTAL,
    children: [h && (0, i.jsx)(s.Button, {
      onClick: E,
      color: s.Button.Colors.TRANSPARENT,
      disabled: u,
      children: a.Z.Messages.BACK
    }), T && (0, i.jsx)(s.Button, {
      onClick: () => {
        if (null != n) c(n)
      },
      color: t,
      className: l.actionButton,
      disabled: u || _,
      buttonRef: I,
      children: S
    })]
  })
}