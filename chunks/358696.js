n.d(t, {
    E: function () {
        return p;
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
    d = n(689938),
    _ = n(262967);
let E = {
    default: void 0,
    crunchyroll: _.aspectRatioCrunchyroll
};
((r = i || (i = {})).SIZE_60 = 'size-60'), (r.SIZE_72 = 'size-72');
let f = {
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
              className: _.clickable,
              children: t
          });
}
function p(e) {
    var t, n;
    let { image: r, smallImage: i, aspectRatio: s, onClick: p, size: I } = e,
        { imageSize: m, smallImageSize: T, mask: S } = f[I],
        g = (0, a.jsx)(c.f, {
            src: null == r ? void 0 : r.src,
            alt: null !== (n = null !== (t = null == r ? void 0 : r.alt) && void 0 !== t ? t : null == r ? void 0 : r.text) && void 0 !== n ? n : d.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
            size: m,
            className: _.contentImage,
            constrain: 'width'
        });
    return null == r
        ? g
        : (0, a.jsxs)('div', {
              className: o()(_.imagePosition, E[null != s ? s : 'default']),
              children: [
                  (0, a.jsx)(l.Tooltip, {
                      text: r.text,
                      children: (e) =>
                          (0, a.jsx)(h, {
                              onClick: p,
                              children:
                                  null != i
                                      ? (0, a.jsx)(u.ZP, {
                                            ...e,
                                            className: _.imageContainer,
                                            mask: S,
                                            width: m,
                                            height: m,
                                            children: g
                                        })
                                      : (0, a.jsx)('div', {
                                            ...e,
                                            className: _.imageContainer,
                                            children: g
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
                                  className: _.smallImageContainer,
                                  children: (0, a.jsx)(c.f, {
                                      src: i.src,
                                      alt: null !== (t = i.alt) && void 0 !== t ? t : i.text,
                                      size: T,
                                      className: _.contentImage,
                                      constrain: 'width'
                                  })
                              });
                          }
                      })
              ]
          });
}
