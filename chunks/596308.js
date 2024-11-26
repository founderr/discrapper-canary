r.d(t, {
    I: function () {
        return E;
    }
});
var a = r(395848),
    n = r(383704),
    _ = r(202937),
    o = r(896247);
let E = (e, t) => {
    let r = (0, o.W)(),
        E = 'navigate';
    return (
        r && ((a.m.document && a.m.document.prerendering) || (0, _.A)() > 0 ? (E = 'prerender') : a.m.document && a.m.document.wasDiscarded ? (E = 'restore') : r.type && (E = r.type.replace(/_/g, '-'))),
        {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: 'good',
            delta: 0,
            entries: [],
            id: (0, n.f)(),
            navigationType: E
        }
    );
};
