"use strict";
s.r(t), s.d(t, {
  useSelectedTeenUser: function() {
    return r
  },
  useTeenUserForId: function() {
    return u
  }
});
var a = s("399606"),
  n = s("594174"),
  l = s("914788"),
  i = s("880257");
let r = () => {
    let e = (0, i.default)();
    return (0, a.useStateFromStores)([l.default, n.default], () => {
      if (!e) return n.default.getCurrentUser();
      let t = l.default.getSelectedTeenId();
      if (null !== t) return n.default.getUser(t)
    })
  },
  u = e => (0, a.useStateFromStores)([n.default], () => {
    let t = n.default.getUser(e);
    if (null != t) return t
  })