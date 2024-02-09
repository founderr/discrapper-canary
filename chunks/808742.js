"use strict";
l.r(t), l.d(t, {
  getHangStatusOptions: function() {
    return f
  },
  getHangStatusDetails: function() {
    return T
  },
  getHangStatusText: function() {
    return p
  }
});
var r = l("49111"),
  a = l("782340"),
  n = l("65833"),
  s = l("270664"),
  i = l("763388"),
  o = l("708206"),
  u = l("787795"),
  d = l("908332"),
  c = l("850390");
let f = () => ({
    [r.HangStatusTypes.CHILLING]: {
      title: a.default.Messages.STATUS_CHILLING,
      icon: s,
      color: "#567C7E"
    },
    [r.HangStatusTypes.GAMING]: {
      title: a.default.Messages.STATUS_GAMING,
      icon: i,
      color: "#685F8C"
    },
    [r.HangStatusTypes.FOCUSING]: {
      title: a.default.Messages.STATUS_FOCUSING,
      icon: u,
      color: "#7F6956"
    },
    [r.HangStatusTypes.BRB]: {
      title: a.default.Messages.STATUS_BRB,
      icon: n,
      color: "#76567E"
    },
    [r.HangStatusTypes.EATING]: {
      title: a.default.Messages.STATUS_EATING,
      icon: o,
      color: "#717B54"
    },
    [r.HangStatusTypes.IN_TRANSIT]: {
      title: a.default.Messages.STATUS_IN_TRANSIT,
      icon: d,
      color: "#56697F"
    },
    [r.HangStatusTypes.WATCHING]: {
      title: a.default.Messages.STATUS_WATCHING,
      icon: c,
      color: "#7C5571"
    }
  }),
  T = e => {
    if ((null == e ? void 0 : e.type) !== r.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === r.HangStatusTypes.CUSTOM ? null : f()[t]
  },
  p = e => {
    var t;
    let l = (null == e ? void 0 : e.state) != null ? e.state : null;
    return l === r.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
  }