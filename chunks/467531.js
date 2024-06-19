n.d(t, {
  B: function() {
    return a
  },
  W: function() {
    return r
  }
});
var s = n(544891),
  i = n(881052),
  l = n(981631);
async function a(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: a
  } = e;
  try {
    await s.tn.put({
      url: l.ANM.POLL_ANSWERS(t, n),
      body: {
        answer_ids: a
      }
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}
async function r(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await s.tn.post({
      url: l.ANM.POLL_EXPIRE(t, n)
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}