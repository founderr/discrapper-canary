"use strict";
s.r(t), s.d(t, {
  useSelectedTeenUser: function() {
    return r
  },
  useTeenUserForId: function() {
    return o
  }
});
var n = s("399606"),
  a = s("594174"),
  l = s("914788"),
  i = s("880257");
let r = () => {
    let e = (0, i.default)();
    return (0, n.useStateFromStores)([l.default, a.default], () => {
      if (!e) return a.default.getCurrentUser();
      let t = l.default.getSelectedTeenId();
      if (null !== t) return a.default.getUser(t)
    })
  },
  o = e => (0, n.useStateFromStores)([a.default], () => {
    let t = a.default.getUser(e);
    if (null != t) return t
  })