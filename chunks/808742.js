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
var n = a("49111"),
  l = a("782340"),
  s = a("65833"),
  i = a("270664"),
  r = a("763388"),
  u = a("708206"),
  o = a("787795"),
  c = a("908332"),
  d = a("850390");
let f = () => ({
    [n.HangStatusTypes.CHILLING]: {
      title: l.default.Messages.STATUS_CHILLING,
      icon: i,
      color: "#567C7E"
    },
    [n.HangStatusTypes.GAMING]: {
      title: l.default.Messages.STATUS_GAMING,
      icon: r,
      color: "#685F8C"
    },
    [n.HangStatusTypes.FOCUSING]: {
      title: l.default.Messages.STATUS_FOCUSING,
      icon: o,
      color: "#7F6956"
    },
    [n.HangStatusTypes.BRB]: {
      title: l.default.Messages.STATUS_BRB,
      icon: s,
      color: "#76567E"
    },
    [n.HangStatusTypes.EATING]: {
      title: l.default.Messages.STATUS_EATING,
      icon: u,
      color: "#717B54"
    },
    [n.HangStatusTypes.IN_TRANSIT]: {
      title: l.default.Messages.STATUS_IN_TRANSIT,
      icon: c,
      color: "#56697F"
    },
    [n.HangStatusTypes.WATCHING]: {
      title: l.default.Messages.STATUS_WATCHING,
      icon: d,
      color: "#7C5571"
    }
  }),
  T = e => {
    if ((null == e ? void 0 : e.type) !== n.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === n.HangStatusTypes.CUSTOM ? null : f()[t]
  },
  E = e => {
    var t;
    let a = (null == e ? void 0 : e.state) != null ? e.state : null;
    return a === n.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
  }