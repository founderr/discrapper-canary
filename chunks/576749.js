var i = n(481060),
    l = n(40851),
    u = n(334877),
    a = n(981631);
let r = 'guild-event-modal';
e.Z = () => {
    let t = (0, l.bp)() === a.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: r,
        contextKey: t,
        onCloseRequest: () => {
            u.l.getState().canCloseModal && (0, i.closeModal)(r, t);
        }
    };
};
