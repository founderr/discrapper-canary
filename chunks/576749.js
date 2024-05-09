"use strict";
n.r(t);
var l = n("481060"),
  u = n("40851"),
  i = n("334877"),
  r = n("981631");
let s = "guild-event-modal";
t.default = () => {
  let e = (0, u.useAppContext)() === r.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: s,
    contextKey: e,
    onCloseRequest: () => {
      i.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(s, e)
    }
  }
}