n.r(t),
    n.d(t, {
        UPLOAD_ERROR_MODAL_KEY: function () {
            return p;
        },
        default: function () {
            return _;
        },
        openUploadError: function () {
            return h;
        }
    });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(952265),
    o = n(466377),
    l = n(313201),
    u = n(355314),
    c = n(310752),
    d = n(731994),
    f = n(55720);
function _(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: s, icons: _, fileSize: p, onClose: h } = e,
        m = (0, l.Dt)(),
        g = null != _ ? _ : d.J6;
    return i
        ? (0, r.jsx)(u.Z, {
              transitionState: s,
              onClose: h,
              fileSize: p
          })
        : (0, r.jsx)(o.Y0, {
              size: o.Cg.DYNAMIC,
              'aria-labelledby': m,
              transitionState: s,
              children: (0, r.jsx)('div', {
                  className: a()(f.uploadDropModal, f.error),
                  children: (0, r.jsxs)('div', {
                      className: f.inner,
                      children: [
                          (0, r.jsx)(c.Z, { icons: g }),
                          (0, r.jsx)('div', {
                              id: m,
                              className: f.title,
                              children: t
                          }),
                          (0, r.jsx)('div', {
                              className: f.instructions,
                              children: n
                          })
                      ]
                  })
              })
          });
}
let p = 'UPLOAD_ERROR_MODAL_KEY';
function h(e) {
    (0, s.h7)(
        (t) =>
            (0, r.jsx)(_, {
                ...t,
                ...e
            }),
        { modalKey: p }
    );
}
