n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    r = n(816988),
    l = n(331541),
    a = n(288914);
function o(e) {
    let { currentUser: t, onClose: n, setPopoutRef: o } = e,
        { permanentEntryPointsEnabled: s } = (0, r.u)({ location: 'AccountProfilePopout' });
    return s
        ? (0, i.jsx)(a.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: o
          })
        : (0, i.jsx)(l.Z, {
              currentUser: t,
              onClose: n,
              setPopoutRef: o
          });
}
