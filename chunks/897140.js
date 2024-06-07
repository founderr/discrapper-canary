"use strict";
a.r(s);
var t = a("735250");
a("470079");
var _ = a("392711"),
  d = a.n(_),
  l = a("207561"),
  c = a("780384"),
  u = a("481060"),
  S = a("410030"),
  i = a("153124"),
  O = a("689938"),
  L = a("213770"),
  o = a("755524"),
  r = a("788572"),
  n = a("262529");
let E = [a("4921"), a("663416"), a("838295")],
  C = [o, r, n],
  M = [() => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_01, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_02, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_03, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_04, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_05, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_06, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_07, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_08, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_09, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_10];
s.default = e => {
  let {
    transitionState: s,
    onClose: a
  } = e, _ = (0, S.default)(), o = (0, i.useUID)(), r = (0, c.isThemeDark)(_) ? C : E, n = (0, l.useStableMemo)(() => d().sample(r), [r]), f = (0, l.useStableMemo)(() => d().sample(M), []);
  return (0, t.jsxs)(u.ModalRoot, {
    transitionState: s,
    className: L.root,
    "aria-labelledby": o,
    children: [(0, t.jsx)("img", {
      alt: "",
      src: n,
      className: L.image
    }), (0, t.jsxs)(u.ModalContent, {
      className: L.modal,
      children: [(0, t.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: L.followSuccessHeader,
        id: o,
        children: f()
      }), (0, t.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-md/medium",
        className: L.body,
        children: O.default.Messages.FOLLOW_SUCCESS_MODAL_BODY
      }), (0, t.jsx)(u.Button, {
        onClick: a,
        children: O.default.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}