var i = n(481060),
    s = n(40851),
    a = n(334877),
    l = n(981631);
let r = 'guild-event-modal';
t.Z = () => {
    let e = (0, s.bp)() === l.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: r,
        contextKey: e,
        onCloseRequest: () => {
            a.l.getState().canCloseModal && (0, i.closeModal)(r, e);
        }
    };
};
