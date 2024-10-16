n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250),
    a = n(816988),
    s = n(331541),
    r = n(288914);
function l(e) {
    let { currentUser: t, onClose: n, setPopoutRef: l } = e,
        { permanentEntryPointsEnabled: o } = (0, a.u)({ location: 'AccountProfilePopout' });
    return o
        ? (0, i.jsx)(r.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: l
          })
        : (0, i.jsx)(s.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: l
          });
}
