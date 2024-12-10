n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(503438),
    l = n(802856),
    r = n(420660),
    o = n(789407),
    a = n(974543),
    s = n(250889);
function c(e) {
    return (0, l.Z)(e) ? s.H + e.name : (0, i.Z)(e) && null != e.party && null != e.party.id ? o.r9.id : (0, r.Z)(e) && null != e.url ? a._ + e.url : null != e.application_id ? e.application_id : null;
}
