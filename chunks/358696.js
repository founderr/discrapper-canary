n.d(t, {
    E: function () {
        return m;
    },
    J: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(686546),
    c = n(442550),
    d = n(388032),
    f = n(684033);
let _ = {
    none: void 0,
    default: f.aspectRatio,
    crunchyroll: o()(f.aspectRatio, f.crunchyroll)
};
((r = i || (i = {})).SIZE_60 = 'size-60'), (r.SIZE_72 = 'size-72');
let p = {
    'size-60': {
        imageSize: 60,
        smallImageSize: 24,
        mask: u.QS.CONTENT_IMAGE_60
    },
    'size-72': {
        imageSize: 72,
        smallImageSize: 32,
        mask: u.QS.CONTENT_IMAGE_72
    }
};
function h(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, a.jsx)(a.Fragment, { children: t })
        : (0, a.jsx)(l.Clickable, {
              onClick: n,
              className: f.clickable,
              children: t
          });
}
function m(e) {
    var t, n;
    let { image: r, smallImage: i, aspectRatio: s, onClick: m, size: g, className: E } = e,
        { imageSize: v, smallImageSize: I, mask: T } = p[g];
    if (null == r)
        return (0, a.jsx)(c.f, {
            src: void 0,
            alt: d.intl.string(d.t['2B/phI']),
            size: v,
            className: o()(f.contentImage, _[null != s ? s : 'default'], E),
            constrain: 'width'
        });
    let b = (0, a.jsx)(c.f, {
        src: r.src,
        alt: null !== (n = null !== (t = r.alt) && void 0 !== t ? t : r.text) && void 0 !== n ? n : d.intl.string(d.t['2B/phI']),
        size: v,
        className: o()(f.contentImage, _[null != s ? s : 'default']),
        constrain: 'width'
    });
    return (0, a.jsxs)('div', {
        className: o()(f.imagePosition, E),
        children: [
            (0, a.jsx)(l.Tooltip, {
                text: r.text,
                children: (e) =>
                    (0, a.jsx)(h, {
                        onClick: m,
                        children:
                            null != i
                                ? (0, a.jsx)(u.ZP, {
                                      ...e,
                                      className: f.imageContainer,
                                      mask: T,
                                      width: v,
                                      height: v,
                                      children: b
                                  })
                                : (0, a.jsx)('div', {
                                      ...e,
                                      className: f.imageContainer,
                                      children: b
                                  })
                    })
            }),
            null != i &&
                (0, a.jsx)(l.Tooltip, {
                    text: i.text,
                    children: (e) => {
                        var t;
                        return (0, a.jsx)('div', {
                            ...e,
                            className: f.smallImageContainer,
                            children: (0, a.jsx)(c.f, {
                                src: i.src,
                                alt: null !== (t = i.alt) && void 0 !== t ? t : i.text,
                                size: I,
                                className: f.contentImage,
                                constrain: 'width'
                            })
                        });
                    }
                })
        ]
    });
}
