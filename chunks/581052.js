t.d(e, {
    V: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(823162),
    a = t(594174),
    o = t(388032);
function d(n) {
    let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return (null == e ? void 0 : e.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !n.isMessageRequest &&
                      (0, i.jsx)(l.MenuItem, {
                          id: 'mark-as-message-request',
                          label: o.intl.string(o.t.L6623t),
                          action: () => (0, u.Xy)(n.id)
                      }),
                  (0, i.jsx)(l.MenuItem, {
                      id: 'clear-message-request',
                      label: o.intl.string(o.t['85YWlZ']),
                      action: () => (0, u.qR)(n.id)
                  })
              ]
          });
}
