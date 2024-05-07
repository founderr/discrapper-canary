"use strict";
n.r(t), n.d(t, {
  useSelectedTeenUser: function() {
    return r
  },
  useTeenUserForId: function() {
    return o
  }
});
var a = n("399606"),
  s = n("594174"),
  i = n("914788"),
  l = n("880257");
let r = () => {
    let e = (0, l.default)();
    return (0, a.useStateFromStores)([i.default, s.default], () => {
      if (!e) return s.default.getCurrentUser();
      let t = i.default.getSelectedTeenId();
      if (null !== t) return s.default.getUser(t)
    })
  },
  o = e => (0, a.useStateFromStores)([s.default], () => {
    let t = s.default.getUser(e);
    if (null != t) return t
  })