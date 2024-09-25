n.d(t, {
    B: function () {
        return o;
    },
    W: function () {
        return s;
    }
});
var r = n(544891),
    i = n(881052),
    a = n(981631);
async function o(e) {
    let { channelId: t, messageId: n, answerIds: o } = e;
    try {
        let e = { answer_ids: o };
        await r.tn.put({
            url: a.ANM.POLL_ANSWERS(t, n),
            body: e
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
async function s(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await r.tn.post({ url: a.ANM.POLL_EXPIRE(t, n) });
    } catch (e) {
        throw new i.Hx(e);
    }
}
