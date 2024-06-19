a.r(e);
var _ = a(735250);
a(470079);
var t = a(392711),
  c = a.n(t),
  O = a(792986),
  S = a(780384),
  L = a(481060),
  n = a(410030),
  o = a(153124),
  E = a(689938),
  d = a(369006),
  i = a(755524),
  l = a(788572),
  r = a(262529);
let C = [a(4921), a(663416), a(838295)],
  M = [i, l, r],
  D = [() => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_01, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_02, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_03, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_04, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_05, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_06, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_07, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_08, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_09, () => E.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_10];
e.default = s => {
  let {
    transitionState: e,
    onClose: a
  } = s, t = (0, n.ZP)(), i = (0, o.Dt)(), l = (0, S.wj)(t) ? M : C, r = (0, O.Z)(() => c().sample(l), [l]), g = (0, O.Z)(() => c().sample(D), []);
  return (0, _.jsxs)(L.ModalRoot, {
    transitionState: e,
    className: d.root,
    "aria-labelledby": i,
    children: [(0, _.jsx)("img", {
      alt: "",
      src: r,
      className: d.image
    }), (0, _.jsxs)(L.ModalContent, {
      className: d.modal,
      children: [(0, _.jsx)(L.Heading, {
        variant: "heading-xl/semibold",
        className: d.followSuccessHeader,
        id: i,
        children: g()
      }), (0, _.jsx)(L.Text, {
        color: "text-muted",
        variant: "text-md/medium",
        className: d.body,
        children: E.Z.Messages.FOLLOW_SUCCESS_MODAL_BODY
      }), (0, _.jsx)(L.Button, {
        onClick: a,
        children: E.Z.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}