"use strict";
a.r(t), a.d(t, {
  useSelectedTeenUser: function() {
    return r
  },
  useTeenUserForId: function() {
    return o
  }
});
var n = a("399606"),
  s = a("594174"),
  l = a("914788"),
  i = a("880257");
let r = () => {
    let e = (0, i.default)();
    return (0, n.useStateFromStores)([l.default, s.default], () => {
      if (!e) return s.default.getCurrentUser();
      let t = l.default.getSelectedTeenId();
      if (null !== t) return s.default.getUser(t)
    })
  },
  o = e => (0, n.useStateFromStores)([s.default], () => {
    let t = s.default.getUser(e);
    if (null != t) return t
  })