"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("689988"),
  a = n("945956"),
  l = n("191145");
class s extends i.default {
  handleFocusParticipant() {
    let e = a.default.getChannelId();
    if (null != e) {
      var t, n;
      let i = l.default.getSelectedParticipantId(e),
        s = l.default.getVideoParticipants(e);
      null === (n = a.default.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = s.find(e => e.id === i && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id)
    }
  }
  constructor(...e) {
    super(...e), this.stores = new Map().set(l.default, this.handleFocusParticipant)
  }
}
var r = new s