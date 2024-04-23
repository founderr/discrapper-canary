"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  l = n("470079"),
  u = n("481060"),
  i = n("493683"),
  o = n("960670"),
  s = n("933557"),
  r = n("689938");

function d(e, t) {
  let n = (0, s.default)(e),
    d = l.useCallback(() => {
      let l = r.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name: n
        }),
        s = r.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name: n
        });
      e.isManaged() && (l = r.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name: n
      }), s = r.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name: n
      }));
      let d = function(n) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        i.default.closePrivateChannel(e.id, t, a)
      };
      (0, u.openModal)(e => (0, a.jsx)(o.default, {
        header: l,
        body: s,
        onSubmit: d,
        ...e
      }))
    }, [e, n, t]);
  return (0, a.jsx)(u.MenuItem, {
    id: "leave-channel",
    label: r.default.Messages.LEAVE_GROUP_DM,
    action: d,
    color: "danger"
  })
}