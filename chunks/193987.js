e.d(t, {
    Z: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    a = e(346479),
    l = e(665906),
    o = e(388032);
function u(n) {
    let t = (0, l.Xb)(n),
        e = n.isLockedThread();
    if (t)
        return e
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'unlock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['/OKSxs']) : o.intl.string(o.t['jeyb/f']),
                  action: () => a.Z.unlockThread(n)
              })
            : (0, i.jsx)(r.MenuItem, {
                  id: 'lock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['Ur/0NT']) : o.intl.string(o.t.HoCqm5),
                  action: () => a.Z.lockThread(n)
              });
}
