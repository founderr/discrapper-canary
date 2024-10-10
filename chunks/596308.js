r.d(t, {
    I: function () {
        return i;
    }
});
var n = r(395848),
    a = r(383704),
    _ = r(202937),
    o = r(896247);
let i = (e, t) => {
    let r = (0, o.W)(),
        i = 'navigate';
    return (
        r && ((n.m.document && n.m.document.prerendering) || (0, _.A)() > 0 ? (i = 'prerender') : n.m.document && n.m.document.wasDiscarded ? (i = 'restore') : r.type && (i = r.type.replace(/_/g, '-'))),
        {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: 'good',
            delta: 0,
            entries: [],
            id: (0, a.f)(),
            navigationType: i
        }
    );
};
