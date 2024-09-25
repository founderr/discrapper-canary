var n = a(481060),
    l = a(40851),
    o = a(334877),
    r = a(981631);
let u = 'guild-event-modal';
t.Z = () => {
    let e = (0, l.bp)() === r.IlC.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: u,
        contextKey: e,
        onCloseRequest: () => {
            o.l.getState().canCloseModal && (0, n.closeModal)(u, e);
        }
    };
};
