var r = n(570140);
let i = {
    disableFalsePositiveButton: function e(e, t) {
        r.Z.dispatch({
            type: 'MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT',
            messageId: t,
            channelId: e
        });
    }
};
t.Z = i;
