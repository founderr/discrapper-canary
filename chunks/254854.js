var i = r(570140);
n.Z = {
    show(e, n, r, a, s) {
        i.Z.dispatch({
            type: 'NOTICE_SHOW',
            notice: {
                id: s,
                type: e,
                message: n,
                buttonText: r,
                callback: a
            }
        });
    },
    dismiss(e) {
        i.Z.dispatch({
            type: 'NOTICE_DISMISS',
            ...e
        });
    }
};
