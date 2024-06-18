"use strict";
var i = n(147913),
  r = n(31996),
  s = n(728675),
  o = n(981631);

function a(e) {
  var t, n, i;
  if ((null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) !== o.Uvt.FORWARD) return;
  let s = null === (n = e.message_snapshots) || void 0 === n ? void 0 : n[0];
  if (null != s && (null === (i = s.guild) || void 0 === i ? void 0 : i.id) != null)(0, r.Q)(s.guild.id)
}
class l extends i.Z {
  constructor() {
    super(), (0, s.Z)(this, a)
  }
}
t.Z = new l