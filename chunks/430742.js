var i = r(570140);
n.Z = {
    clearDraft(e, n) {
        i.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: n
        });
    },
    saveDraft(e, n, r) {
        i.Z.dispatch({
            type: 'DRAFT_SAVE',
            channelId: e,
            draft: n,
            draftType: r
        });
    },
    changeDraft(e, n, r) {
        i.Z.dispatch({
            type: 'DRAFT_CHANGE',
            channelId: e,
            draft: n,
            draftType: r
        });
    },
    changeThreadSettings(e, n) {
        i.Z.dispatch({
            type: 'THREAD_SETTINGS_DRAFT_CHANGE',
            channelId: e,
            draft: n
        });
    }
};
