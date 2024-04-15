"use strict";
n.r(t);
var l = n("481060"),
  u = n("40851"),
  a = n("334877"),
  d = n("981631");
let s = "guild-event-modal";
t.default = () => {
  let e = (0, u.useAppContext)() === d.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: s,
    contextKey: e,
    onCloseRequest: () => {
      a.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(s, e)
    }
  }
}