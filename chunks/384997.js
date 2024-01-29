"use strict";
l.r(t), l.d(t, {
  useSelectedDismissibleContent: function() {
    return d
  },
  default: function() {
    return c
  }
}), l("222007");
var s = l("37983"),
  i = l("884691"),
  n = l("65597"),
  u = l("901165"),
  a = l("495226"),
  o = l("235145"),
  r = l("994428");

function d(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = (0, n.default)([u.default], () => !!__OVERLAY__ && u.default.isInstanceUILocked()),
    [d, c] = (0, o.useGetDismissibleContent)(e, t, s),
    f = !l && null != d && !a.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
  return i.useEffect(() => () => {
    f && c(r.ContentDismissActionType.AUTO_DISMISS)
  }, [f, c]), [d, c]
}

function c(e) {
  let {
    contentTypes: t,
    children: l,
    groupName: i,
    bypassAutoDismiss: n
  } = e, [u, a] = d(t, i, n);
  return (0, s.jsx)(s.Fragment, {
    children: l({
      visibleContent: u,
      markAsDismissed: a
    })
  })
}