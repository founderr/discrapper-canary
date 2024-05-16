"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250"),
  i = n("470079"),
  l = n("481060"),
  u = n("493683"),
  s = n("960670"),
  d = n("933557"),
  o = n("689938");

function r(e, t) {
  let n = (0, d.default)(e),
    r = i.useCallback(() => {
      let i = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name: n
        }),
        d = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name: n
        });
      e.isManaged() && (i = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name: n
      }), d = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name: n
      }));
      let r = function(n) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        u.default.closePrivateChannel(e.id, t, a)
      };
      (0, l.openModal)(e => (0, a.jsx)(s.default, {
        header: i,
        body: d,
        onSubmit: r,
        ...e
      }))
    }, [e, n, t]);
  return (0, a.jsx)(l.MenuItem, {
    id: "leave-channel",
    label: o.default.Messages.LEAVE_GROUP_DM,
    action: r,
    color: "danger"
  })
}