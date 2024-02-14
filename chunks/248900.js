"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("37983");
l("884691");
var a = l("77078"),
  u = l("306160"),
  s = l("598639"),
  d = l("49111"),
  r = l("782340");

function i(e, t, l) {
  let i = null != l,
    {
      isMember: o
    } = (0, s.default)(t, e);
  if (!o) return null;

  function c() {
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (0, u.copy)("".concat(location.protocol, "//").concat(location.host).concat(d.Routes.GUILD_EVENT_DETAILS(t, e, n ? null : l))), (0, a.showToast)((0, a.createToast)(r.default.Messages.COPIED_LINK, a.ToastType.SUCCESS))
  }
  return (0, n.jsx)(a.MenuItem, {
    id: r.default.Messages.COPY_EVENT_LINK,
    label: r.default.Messages.COPY_EVENT_LINK,
    action: i ? void 0 : () => c(!0),
    children: i && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.MenuItem, {
        id: r.default.Messages.COPY_RECURRENCE_LINK,
        label: r.default.Messages.COPY_RECURRENCE_LINK,
        action: () => c(!1)
      }), (0, n.jsx)(a.MenuItem, {
        id: r.default.Messages.COPY_SERIES_LINK,
        label: r.default.Messages.COPY_SERIES_LINK,
        action: () => c(!0)
      })]
    })
  })
}