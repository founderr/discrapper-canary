var i = n(481060),
    l = n(40851),
    u = n(334877),
    a = n(981631);
let r = 'guild-event-modal';
t.Z = () => {
    let e = (0, l.bp)() === a.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: r,
        contextKey: e,
        onCloseRequest: () => {
            u.l.getState().canCloseModal && (0, i.closeModal)(r, e);
        }
    };
};
