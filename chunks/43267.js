"use strict";
n.r(t), n.d(t, {
  getChannelIconURL: function() {
    return o
  }
}), n("47120");
var i = n("594174"),
  r = n("768581"),
  s = n("823379"),
  a = n("981631");

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    n = arguments.length > 2 ? arguments[2] : void 0;
  switch (e.type) {
    case a.ChannelTypes.DM:
      let [o] = e.recipients.map(i.default.getUser).filter(s.isNotNullish);
      if (null == o) return null;
      return o.getAvatarURL(void 0, t, n);
    case a.ChannelTypes.GROUP_DM:
      return r.default.getChannelIconURL({
        id: e.id,
        icon: e.icon,
        applicationId: e.getApplicationId(),
        size: t
      })
  }
}