"use strict";
a.r(t), a.d(t, {
  getHangStatusOptions: function() {
    return f
  },
  getHangStatusDetails: function() {
    return T
  },
  getHangStatusText: function() {
    return E
  }
});
var l = a("49111"),
  n = a("782340"),
  s = a("65833"),
  i = a("270664"),
  r = a("763388"),
  u = a("708206"),
  o = a("787795"),
  c = a("908332"),
  d = a("850390");
let f = () => ({
    [l.HangStatusTypes.CHILLING]: {
      title: n.default.Messages.STATUS_CHILLING,
      icon: i,
      color: "#567C7E"
    },
    [l.HangStatusTypes.GAMING]: {
      title: n.default.Messages.STATUS_GAMING,
      icon: r,
      color: "#685F8C"
    },
    [l.HangStatusTypes.FOCUSING]: {
      title: n.default.Messages.STATUS_FOCUSING,
      icon: o,
      color: "#7F6956"
    },
    [l.HangStatusTypes.BRB]: {
      title: n.default.Messages.STATUS_BRB,
      icon: s,
      color: "#76567E"
    },
    [l.HangStatusTypes.EATING]: {
      title: n.default.Messages.STATUS_EATING,
      icon: u,
      color: "#717B54"
    },
    [l.HangStatusTypes.IN_TRANSIT]: {
      title: n.default.Messages.STATUS_IN_TRANSIT,
      icon: c,
      color: "#56697F"
    },
    [l.HangStatusTypes.WATCHING]: {
      title: n.default.Messages.STATUS_WATCHING,
      icon: d,
      color: "#7C5571"
    }
  }),
  T = e => {
    if ((null == e ? void 0 : e.type) !== l.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === l.HangStatusTypes.CUSTOM ? null : f()[t]
  },
  E = e => {
    var t;
    let a = (null == e ? void 0 : e.state) != null ? e.state : null;
    return a === l.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
  }