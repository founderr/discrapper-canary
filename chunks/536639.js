t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    s = t(481060),
    l = t(332148),
    r = t(257559),
    o = t(496675),
    u = t(151007),
    d = t(981631),
    c = t(689938);
function E(e, n) {
    let t = (0, a.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
    return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(s.MenuItem, {
                  id: 'pin',
                  action: function (t) {
                      t.shiftKey ? l.Z.pinMessage(n, e.id) : r.Z.confirmPin(n, e);
                  },
                  label: c.Z.Messages.PIN_MESSAGE,
                  icon: s.PinIcon
              })
            : (0, i.jsx)(s.MenuItem, {
                  id: 'unpin',
                  action: function (t) {
                      t.shiftKey ? l.Z.unpinMessage(n, e.id) : r.Z.confirmUnpin(n, e);
                  },
                  label: c.Z.Messages.UNPIN_MESSAGE,
                  icon: s.PinIcon
              })
        : null;
}
