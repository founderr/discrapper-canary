"use strict";
l.r(t), l.d(t, {
  useRecipientsLabel: function() {
    return o
  }
});
var s = l("470079"),
  a = l("442837"),
  n = l("594174"),
  i = l("823379"),
  u = l("51144"),
  r = l("689938");

function o(e) {
  let t = (0, a.useStateFromStoresArray)([n.default], () => e.recipients.map(e => n.default.getUser(e)).filter(i.isNotNullish).map(e => u.default.getName(e)));
  return s.useMemo(() => "" === e.name ? null : function(e) {
    if (0 === e.length) return null;
    if (1 === e.length) return r.default.Messages.USER_SUMMARY_ONE.format({
      first: e[0]
    });
    if (2 === e.length) return r.default.Messages.USER_SUMMARY_TWO.format({
      first: e[0],
      second: e[1]
    });
    if (3 === e.length) return r.default.Messages.USER_SUMMARY_THREE.format({
      first: e[0],
      second: e[1],
      third: e[2]
    });
    let t = e.length - 3;
    return r.default.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
      first: e[0],
      second: e[1],
      third: e[2],
      count: t
    })
  }(t), [e, t])
}