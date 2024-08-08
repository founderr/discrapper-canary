t.d(n, {
  Z: function() {
return E;
  }
});
var l = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(392711),
  o = t(481060),
  s = t(239091),
  c = t(596454),
  u = t(911969),
  d = t(574399),
  m = t(572004),
  f = t(49012),
  _ = t(970184),
  p = t(280501),
  C = t(689938),
  v = t(433562);

function h(e) {
  let {
url: n,
onSelect: t
  } = e;
  return m.wS && null != n ? (0, l.jsx)(o.Menu, {
navId: 'component-button',
onClose: s.Zy,
'aria-label': C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
onSelect: t,
children: (0, l.jsx)(o.MenuGroup, {
  children: (0, l.jsx)(o.MenuItem, {
    id: 'copy',
    label: C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
    action: () => (0, m.JG)(n)
  })
})
  }) : null;
}

function E(e) {
  let n;
  let {
label: t,
style: r,
disabled: m,
emoji: C,
url: E,
skuId: x
  } = e, {
executeStateUpdate: I,
visualState: T,
isDisabled: g
  } = (0, _.Ee)(e), N = (0, d.I)(x), S = null != x && r === u.ZJ.PREMIUM, b = S && (null == N ? void 0 : N.disabled), O = S ? null == N ? void 0 : N.label : t, M = null != C, Z = null != O && O.length > 0, L = r === u.ZJ.LINK && null != E && E.length > 0, y = T === p.gH.LOADING || S && null == N;
  return n = L ? () => {
(0, f.q)({
  href: null != E ? E : '',
  shouldConfirm: !0
});
  } : S ? null != N && !1 === N.disabled ? N.onClick : a.noop : () => I(), (0, l.jsxs)(o.Button, {
color: function(e) {
  switch (e) {
    case u.ZJ.PRIMARY:
    case u.ZJ.PREMIUM:
      return o.Button.Colors.BRAND;
    case u.ZJ.SUCCESS:
      return o.Button.Colors.GREEN;
    case u.ZJ.DESTRUCTIVE:
      return o.Button.Colors.RED;
    default:
      return o.Button.Colors.PRIMARY;
  }
}(r),
size: o.Button.Sizes.SMALL,
disabled: m || T === p.gH.DISABLED || g || b,
onClick: n,
onContextMenu: e => {
  L && (0, s.vq)(e, e => (0, l.jsx)(h, {
    ...e,
    url: E
  }));
},
role: L ? 'link' : 'button',
children: [
  (0, l.jsxs)('div', {
    className: i()(v.content, {
      [v.hidden]: y,
      [v.premium]: S
    }),
    'aria-hidden': y,
    children: [
      S ? (0, l.jsx)('div', {
        className: v.shopIcon,
        children: (0, l.jsx)(o.ShopIcon, {
          size: 'xs',
          color: 'white'
        })
      }) : null,
      M ? (0, l.jsx)(c.Z, {
        className: i()({
          [v.textEmoji]: Z
        }),
        src: C.src,
        emojiId: C.id,
        emojiName: C.name,
        animated: C.animated
      }) : null,
      Z ? (0, l.jsx)('div', {
        className: v.label,
        children: O
      }) : null,
      L ? (0, l.jsx)(o.WindowLaunchIcon, {
        size: 'xs',
        color: 'currentColor',
        className: v.launchIcon
      }) : null
    ]
  }),
  y ? (0, l.jsx)('div', {
    className: v.loading,
    children: (0, l.jsx)(o.Dots, {
      dotRadius: 3.5,
      themed: !0
    })
  }) : null
]
  });
}