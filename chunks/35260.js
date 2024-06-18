"use strict";
var i = n(147913),
  r = n(31996),
  s = n(728675),
  o = n(981631);

function a(e) {
  var t;
  if ((null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) !== o.Uvt.FORWARD) return;
  let n = e.message_reference.guild_id;
  if (null != n)(0, r.Q)(n)
}
class l extends i.Z {
  constructor() {
    super(), (0, s.Z)(this, a)
  }
}
t.Z = new l