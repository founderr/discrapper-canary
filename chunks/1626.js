t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(111618),
    a = t(730954),
    o = t(981631),
    s = t(388032);
function u(e, n) {
    return e.state !== o.yb.SEND_FAILED
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'resend',
              label: s.intl.string(s.t.lXHojo),
              action: () => (0, a.Z)(n, e, void 0, r.Z.getOptions(e.id))
          });
}
