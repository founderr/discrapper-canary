var i = n(481060),
    a = n(40851),
    l = n(334877),
    u = n(981631);
let o = 'guild-event-modal';
t.Z = () => {
    let e = (0, a.bp)() === u.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: o,
        contextKey: e,
        onCloseRequest: () => {
            l.l.getState().canCloseModal && (0, i.closeModal)(o, e);
        }
    };
};
