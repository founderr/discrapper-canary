var i = r(570140);
n.Z = {
    popFirstFile(e) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_POP_FILE',
            channelId: e
        });
    },
    addFiles(e) {
        let { files: n, channelId: r, showLargeMessageDialog: a, draftType: s } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: r,
            files: n,
            showLargeMessageDialog: a,
            draftType: s
        });
    },
    addFile(e) {
        let { file: n, channelId: r, showLargeMessageDialog: a, draftType: s } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_ADD_FILES',
            channelId: r,
            files: [n],
            showLargeMessageDialog: a,
            draftType: s
        });
    },
    remove(e, n, r) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILE',
            channelId: e,
            id: n,
            draftType: r
        });
    },
    removeFiles(e, n, r) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_REMOVE_FILES',
            channelId: e,
            attachmentIds: n,
            draftType: r
        });
    },
    clearAll(e, n) {
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_CLEAR_ALL_FILES',
            channelId: e,
            draftType: n
        });
    },
    update(e, n, r, a) {
        let { description: s, filename: o, spoiler: l, thumbnail: u } = a;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_UPDATE_FILE',
            channelId: e,
            id: n,
            filename: o,
            description: s,
            thumbnail: u,
            spoiler: l,
            draftType: r
        });
    },
    setUploads(e) {
        let { uploads: n, channelId: r, draftType: a, resetState: s } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_UPLOADS',
            channelId: r,
            uploads: s ? n.map((e) => e.resetState()) : n,
            draftType: a
        });
    },
    setFile(e) {
        let { file: n, channelId: r, id: a, draftType: s } = e;
        i.Z.dispatch({
            type: 'UPLOAD_ATTACHMENT_SET_FILE',
            channelId: r,
            id: a,
            file: n,
            draftType: s
        });
    }
};
