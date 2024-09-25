n.d(t, {
    E: function () {
        return f;
    },
    J: function () {
        return r;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(686546),
    u = n(442550),
    c = n(689938),
    d = n(262967);
let _ = {
    default: void 0,
    crunchyroll: d.aspectRatioCrunchyroll
};
!(function (e) {
    (e.SIZE_60 = 'size-60'), (e.SIZE_72 = 'size-72');
})(r || (r = {}));
let E = {
    'size-60': {
        imageSize: 60,
        smallImageSize: 24,
        mask: l.QS.CONTENT_IMAGE_60
    },
    'size-72': {
        imageSize: 72,
        smallImageSize: 32,
        mask: l.QS.CONTENT_IMAGE_72
    }
};
function f(e) {
    var t, n;
    let { image: r, smallImage: a, aspectRatio: f, onClick: h, size: p } = e,
        { imageSize: m, smallImageSize: I, mask: T } = E[p],
        g = (0, i.jsx)(u.f, {
            src: null == r ? void 0 : r.src,
            alt: null !== (n = null !== (t = null == r ? void 0 : r.alt) && void 0 !== t ? t : null == r ? void 0 : r.text) && void 0 !== n ? n : c.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
            size: m,
            className: d.contentImage,
            constrain: 'width'
        });
    return null == r
        ? g
        : (0, i.jsxs)('div', {
              className: o()(d.imagePosition, _[null != f ? f : 'default']),
              children: [
                  (0, i.jsx)(s.Tooltip, {
                      text: r.text,
                      children: (e) =>
                          (0, i.jsx)(s.Clickable, {
                              className: o()({ [d.clickable]: null != h }),
                              onClick: h,
                              children:
                                  null != a
                                      ? (0, i.jsx)(l.ZP, {
                                            ...e,
                                            className: d.imageContainer,
                                            mask: T,
                                            width: m,
                                            height: m,
                                            children: g
                                        })
                                      : (0, i.jsx)('div', {
                                            ...e,
                                            className: d.imageContainer,
                                            children: g
                                        })
                          })
                  }),
                  null != a &&
                      (0, i.jsx)(s.Tooltip, {
                          text: a.text,
                          children: (e) => {
                              var t;
                              return (0, i.jsx)('div', {
                                  ...e,
                                  className: d.smallImageContainer,
                                  children: (0, i.jsx)(u.f, {
                                      src: a.src,
                                      alt: null !== (t = a.alt) && void 0 !== t ? t : a.text,
                                      size: I,
                                      className: d.contentImage,
                                      constrain: 'width'
                                  })
                              });
                          }
                      })
              ]
          });
}
