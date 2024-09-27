var a = n(481060),
    l = n(40851),
    o = n(334877),
    r = n(981631);
let u = 'guild-event-modal';
t.Z = () => {
    let e = (0, l.bp)() === r.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: u,
        contextKey: e,
        onCloseRequest: () => {
            o.l.getState().canCloseModal && (0, a.closeModal)(u, e);
        }
    };
};
