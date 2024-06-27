"use strict";
n.d(t, {
  L9: function() {
    return u
  },
  sE: function() {
    return _
  }
});
var i = n(544891),
  r = n(570140),
  s = n(686478),
  o = n(802463),
  a = n(981631);

function l(e) {
  r.Z.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}
async function u(e, t) {
  if (0 !== e.length || 0 !== t.length) l((await i.tn.post({
    url: a.ANM.SAVED_MESSAGES,
    body: {
      added: e.map(s.cu),
      removed: t.map(s.cu)
    }
  })).body.saved_messages.map(s.lY))
}
async function _() {
  if (o.Z.recentlyFetched()) return Promise.resolve();
  let e = await i.tn.get({
    url: a.ANM.SAVED_MESSAGES
  });
  return l(e.body.saved_messages.map(s.lY)), e
}