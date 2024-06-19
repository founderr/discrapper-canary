var l = n(481060),
  i = n(40851),
  s = n(334877),
  a = n(981631);
let r = "guild-event-modal";
t.Z = () => {
  let e = (0, i.bp)() === a.IlC.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: r,
    contextKey: e,
    onCloseRequest: () => {
      s.l.getState().canCloseModal && (0, l.closeModal)(r, e)
    }
  }
}