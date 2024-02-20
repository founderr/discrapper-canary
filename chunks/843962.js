"use strict";
n.r(t), n.d(t, {
  getChannelIconURL: function() {
    return a
  }
}), n("222007");
var i = n("697218"),
  r = n("315102"),
  l = n("449008"),
  u = n("49111");

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    n = arguments.length > 2 ? arguments[2] : void 0;
  switch (e.type) {
    case u.ChannelTypes.DM:
      let [a] = e.recipients.map(i.default.getUser).filter(l.isNotNullish);
      if (null == a) return null;
      return a.getAvatarURL(void 0, t, n);
    case u.ChannelTypes.GROUP_DM:
      return r.default.getChannelIconURL({
        id: e.id,
        icon: e.icon,
        applicationId: e.getApplicationId(),
        size: t
      })
  }
}