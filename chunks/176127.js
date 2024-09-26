n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(435064),
    o = n(735807);
function c() {
    let e = (0, s.Wu)([a.Z], () => {
        var e;
        let t = null === (e = a.Z.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
        return null == t
            ? []
            : a.Z.getClips()
                  .slice(0, 4)
                  .filter((e) => t.includes(e.id));
    });
    return (0, r.jsx)('div', {
        className: l()(o.thumbnailStack, {
            [o['height-1']]: 1 === e.length,
            [o['height-2']]: 2 === e.length,
            [o['height-3']]: 3 === e.length,
            [o['height-max']]: e.length >= 4
        }),
        children: Array.from({
            ...e,
            length: 4
        })
            .map((e, t) =>
                null != e
                    ? (0, r.jsx)(
                          'img',
                          {
                              alt: '',
                              className: o.thumbnail,
                              src: e.thumbnail
                          },
                          e.id
                      )
                    : (0, r.jsx)('div', {}, 'placeholder-'.concat(t))
            )
            .reverse()
    });
}
