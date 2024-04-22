"use strict";
n.r(t);
var u = n("481060"),
  l = n("40851"),
  i = n("334877"),
  r = n("981631");
let d = "guild-event-modal";
t.default = () => {
  let e = (0, l.useAppContext)() === r.AppContext.POPOUT ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: d,
    contextKey: e,
    onCloseRequest: () => {
      i.useGuildEventModalStore.getState().canCloseModal && (0, u.closeModal)(d, e)
    }
  }
}