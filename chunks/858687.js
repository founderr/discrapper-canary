"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var a = t("735250"),
  l = t("470079"),
  u = t("481060"),
  i = t("493683"),
  s = t("960670"),
  r = t("933557"),
  o = t("689938");

function d(e, n) {
  let t = (0, r.default)(e),
    d = l.useCallback(() => {
      let l = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name: t
        }),
        r = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name: t
        });
      e.isManaged() && (l = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name: t
      }), r = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name: t
      }));
      let d = function(t) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        i.default.closePrivateChannel(e.id, n, a)
      };
      (0, u.openModal)(e => (0, a.jsx)(s.default, {
        header: l,
        body: r,
        onSubmit: d,
        ...e
      }))
    }, [e, t, n]);
  return (0, a.jsx)(u.MenuItem, {
    id: "leave-channel",
    label: o.default.Messages.LEAVE_GROUP_DM,
    action: d,
    color: "danger"
  })
}