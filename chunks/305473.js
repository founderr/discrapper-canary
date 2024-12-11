n.d(t, {
    Z: function () {
        return r;
    }
});
var l = n(200651);
n(192379);
var o = n(528011),
    i = n(533244),
    a = n(596482);
function r(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: n, incidentData: r, isUnderLockdown: s } = (0, o.mI)(t.id),
        c = !1;
    return (null != r && (c = (0, i.i9)(r) && n), c || s)
        ? (0, l.jsx)(a.Z, {
              guild: t,
              incidentData: r,
              isUnderLockdown: s,
              isRaidDetected: c
          })
        : null;
}
