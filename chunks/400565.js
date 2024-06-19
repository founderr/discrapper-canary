n.d(t, {
  U: function() {
    return u
  }
});
var s = n(735250),
  i = n(470079),
  l = n(598077),
  a = n(806519),
  r = n(865112),
  o = n(261985);
let c = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : (0, s.jsx)("div", {
      className: o.maskBackground,
      style: {
        backgroundColor: t.color.css
      },
      children: (0, s.jsx)("img", {
        className: o.maskIcon,
        alt: "",
        src: t.icon
      })
    })
  },
  u = i.memo(function(e) {
    let {
      item: t
    } = e, n = null, i = !1;
    if (null != t.icon_name) n = (0, s.jsx)("img", {
      alt: "",
      src: r.VH[(0, r.RB)(t.icon_name)]
    });
    else if (null != t.other_user) {
      let e = t.other_user instanceof l.Z ? t.other_user : new l.Z(t.other_user);
      n = (0, s.jsx)("img", {
        alt: "",
        className: o.image,
        src: e.getAvatarURL(void 0, 40)
      }), i = !0
    } else n = null != t.icon_url ? (0, s.jsx)("img", {
      alt: "",
      className: o.image,
      src: t.icon_url
    }) : (0, s.jsx)("img", {
      alt: "",
      src: r.VH[(0, r.q7)(t)]
    });
    let u = (0, r.Vi)(t.type);
    return (0, s.jsxs)(a.ZP, {
      mask: null == u ? a.QS.AVATAR_DEFAULT : a.QS.AVATAR_STATUS_ROUND_16,
      width: 40,
      height: 40,
      rightOverhang: 3,
      bottomOverhang: 3,
      className: o.mask,
      children: [(0, s.jsx)("div", {
        className: o.container,
        style: i ? void 0 : {
          backgroundColor: (0, r.Vu)(t)
        },
        children: n
      }), (0, s.jsx)(c, {
        mask: u
      })]
    })
  })