n.d(t, {
    B: function () {
        return a;
    },
    W: function () {
        return o;
    }
});
var i = n(544891),
    r = n(881052),
    l = n(981631);
async function a(e) {
    let { channelId: t, messageId: n, answerIds: a } = e;
    try {
        await i.tn.put({
            url: l.ANM.POLL_ANSWERS(t, n),
            body: { answer_ids: a }
        });
    } catch (e) {
        throw new r.Hx(e);
    }
}
async function o(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await i.tn.post({ url: l.ANM.POLL_EXPIRE(t, n) });
    } catch (e) {
        throw new r.Hx(e);
    }
}
