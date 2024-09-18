t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    s = t(346610),
    l = t(868643),
    r = t(245216),
    o = t(996861),
    u = t(689938);
function d(e, n) {
    let t = (0, l.a)(e),
        { canForwardMessages: d } = (0, s.yk)({ location: 'MessageActionsMenu' }, { autoTrackExposure: !1 });
    return t && d
        ? (0, i.jsx)(a.MenuItem, {
              id: 'forward',
              label: u.Z.Messages.MESSAGE_ACTION_FORWARD,
              icon: r.Z,
              action: () => {
                  (0, o.ts)(n, e);
              }
          })
        : null;
}
