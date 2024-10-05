n.d(t, {
    U: function () {
        return d;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(686546),
    l = n(598077),
    r = n(865112),
    o = n(655538);
let c = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: o.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)('img', {
                      className: o.maskIcon,
                      alt: '',
                      src: t.icon
                  })
              });
    },
    d = a.memo(function (e) {
        let { item: t } = e,
            n = null,
            a = !1;
        if (null != t.icon_name)
            n = (0, i.jsx)('img', {
                alt: '',
                src: r.VH[(0, r.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof l.Z ? t.other_user : new l.Z(t.other_user);
            (n = (0, i.jsx)('img', {
                alt: '',
                className: o.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (a = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, i.jsx)('img', {
                          alt: '',
                          className: o.image,
                          src: t.icon_url
                      })
                    : (0, i.jsx)('img', {
                          alt: '',
                          src: r.VH[(0, r.q7)(t)]
                      });
        let d = (0, r.Vi)(t.type);
        return (0, i.jsxs)('div', {
            className: o.container,
            children: [
                (0, i.jsx)(s.ZP, {
                    mask: null == d ? s.QS.AVATAR_DEFAULT : s.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: o.mask,
                    children: (0, i.jsx)('div', {
                        className: o.imageContainer,
                        style: a ? void 0 : { backgroundColor: (0, r.Vu)(t) },
                        children: n
                    })
                }),
                (0, i.jsx)(c, { mask: d })
            ]
        });
    });
