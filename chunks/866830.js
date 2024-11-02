n.d(e, {
    U5: function () {
        return l;
    },
    qR: function () {
        return i;
    }
});
var r = n(273504);
function i(t) {
    let e = l();
    return Array.from(t.defaultActionTypes).map((t) => e[t]);
}
function l() {
    return {
        [r.jj.BLOCK_MESSAGE]: {
            type: r.jj.BLOCK_MESSAGE,
            metadata: { customMessage: void 0 }
        },
        [r.jj.FLAG_TO_CHANNEL]: {
            type: r.jj.FLAG_TO_CHANNEL,
            metadata: { channelId: void 0 }
        },
        [r.jj.USER_COMMUNICATION_DISABLED]: {
            type: r.jj.USER_COMMUNICATION_DISABLED,
            metadata: { durationSeconds: 60 }
        },
        [r.jj.QUARANTINE_USER]: {
            type: r.jj.QUARANTINE_USER,
            metadata: {}
        }
    };
}
