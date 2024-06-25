var i = n(481060),
  a = n(40851),
  l = n(334877),
  s = n(981631);
let r = "guild-event-modal";
t.Z = () => {
  let e = (0, a.bp)() === s.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: r,
    contextKey: e,
    onCloseRequest: () => {
      l.l.getState().canCloseModal && (0, i.closeModal)(r, e)
    }
  }
}