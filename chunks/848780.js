n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651),
    i = n(442837),
    a = n(481060),
    s = n(695346),
    o = n(699516),
    l = n(388032);
function u(e) {
    let { userId: t, onClick: n } = e;
    return (0, i.e7)([o.Z], () => o.Z.isIgnored(t))
        ? (0, r.jsx)(a.Button, {
              look: a.ButtonLooks.LINK,
              size: a.ButtonSizes.MIN,
              onClick: () => {
                  s.Rt.updateSetting(!0), n();
              },
              color: a.ButtonColors.LINK,
              children: l.intl.string(l.t.QbcRCA)
          })
        : null;
}
