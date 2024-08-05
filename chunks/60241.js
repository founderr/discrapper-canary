n.d(t, {
  Bp: function() {
return d;
  },
  WQ: function() {
return c;
  },
  ZP: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(43205),
  l = n(689938),
  u = n(692184);
let c = 60,
  d = 24;

function _(e) {
  let {
image: t,
richImage: n,
onClick: i
  } = e;
  return (0, r.jsxs)('div', {
className: u.imagePosition,
children: [
  (0, r.jsx)(s.Tooltip, {
    text: t.text,
    children: e => {
      var n, d;
      return (0, r.jsx)(s.Clickable, {
        ...e,
        className: a()(u.imageContainer, {
          [u.clickable]: null != i
        }),
        onClick: i,
        children: (0, r.jsx)(o.f, {
          src: t.src,
          alt: null !== (d = null !== (n = t.alt) && void 0 !== n ? n : t.text) && void 0 !== d ? d : l.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
          size: c,
          className: u.contentImage,
          constrain: 'width'
        })
      });
    }
  }),
  null != n && (0, r.jsx)(s.Tooltip, {
    text: n.text,
    children: e => {
      var t;
      return (0, r.jsx)('div', {
        ...e,
        className: u.richImageContainer,
        children: (0, r.jsx)(o.f, {
          src: n.src,
          alt: null !== (t = n.alt) && void 0 !== t ? t : n.text,
          size: d,
          className: u.contentImage,
          constrain: 'width'
        })
      });
    }
  })
]
  });
}