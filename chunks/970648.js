"use strict";
t(411104);
var n = t(772848),
  i = t(544891),
  l = t(981631);
async function a(e) {
  let {
    body: {
      handoff_token: s
    }
  } = await i.tn.post({
    url: l.ANM.HANDOFF,
    body: {
      key: e
    },
    oldFormErrors: !0,
    retries: 1
  });
  if (null != s) return s;
  throw Error("Missing handoff token!")
}
s.Z = {
  generateNonce: function() {
    return (0, n.Z)()
  },
  createHandoffToken: a
}