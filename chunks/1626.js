t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(111618),
    l = t(730954),
    r = t(981631),
    o = t(689938);
function u(e, n) {
    return e.state !== r.yb.SEND_FAILED
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'resend',
              label: o.Z.Messages.RESEND_MESSAGE,
              action: () => (0, l.Z)(n, e, void 0, s.Z.getOptions(e.id))
          });
}
