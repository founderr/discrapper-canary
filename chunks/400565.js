n.d(t, {
    U: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(686546),
    o = n(598077),
    s = n(865112),
    l = n(655538);
let u = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: l.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, r.jsx)('img', {
                      className: l.maskIcon,
                      alt: '',
                      src: t.icon
                  })
              });
    },
    c = i.memo(function (e) {
        let { item: t } = e,
            n = null,
            i = !1;
        if (null != t.icon_name)
            n = (0, r.jsx)('img', {
                alt: '',
                src: s.VH[(0, s.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof o.Z ? t.other_user : new o.Z(t.other_user);
            (n = (0, r.jsx)('img', {
                alt: '',
                className: l.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (i = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, r.jsx)('img', {
                          alt: '',
                          className: l.image,
                          src: t.icon_url
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: s.VH[(0, s.q7)(t)]
                      });
        let c = (0, s.Vi)(t.type);
        return (0, r.jsxs)('div', {
            className: l.container,
            children: [
                (0, r.jsx)(a.ZP, {
                    mask: null == c ? a.QS.AVATAR_DEFAULT : a.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: l.mask,
                    children: (0, r.jsx)('div', {
                        className: l.imageContainer,
                        style: i ? void 0 : { backgroundColor: (0, s.Vu)(t) },
                        children: n
                    })
                }),
                (0, r.jsx)(u, { mask: c })
            ]
        });
    });
