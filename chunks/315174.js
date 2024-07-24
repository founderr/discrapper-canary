n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(338545),
  o = n(873546),
  c = n(481060),
  u = n(666188),
  d = n(695346),
  h = n(768581),
  p = n(792125),
  _ = n(358555),
  f = n(981631),
  m = n(647086),
  g = n(689938),
  C = n(204157);

function I(e) {
  var t;
  let {
guild: n,
controller: l,
guildBanner: r,
animate: c
  } = e, {
value: u
  } = l.springs, p = d.QK.getSetting();
  return (0, i.jsx)(s.animated.div, {
className: C.animatedContainer,
style: {
  opacity: u,
  transform: u.to(e => 'translateY(-'.concat((1 - e) * 90, 'px)'))
},
children: (0, i.jsx)(s.animated.div, {
  className: a()(C.bannerImage, {
    [C.bannerImgFullWidth]: o.tq
  }),
  style: {
    transform: u.to(e => p ? 'translateY('.concat((1 - e) * 60, 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * 90, 'px)'))
  },
  children: (0, i.jsx)('img', {
    className: a()(C.bannerImg, {
      [C.bannerImgFullWidth]: o.tq
    }),
    src: null !== (t = h.ZP.getGuildBannerURL({
      id: n.id,
      banner: r
    }, c)) && void 0 !== t ? t : '',
    alt: '',
    height: 135,
    width: 240,
    'aria-hidden': !0
  })
})
  });
}

function E(e) {
  let {
guild: t,
controller: n,
hasBanner: l,
hasSubheader: r
  } = e, {
value: o
  } = n.springs, u = t.hasFeature(f.oNc.DISCOVERABLE), d = (0, i.jsx)('div', {
className: C.communityInfo,
children: u && (0, i.jsx)(c.Tooltip, {
  text: g.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
  position: 'right',
  children: e => (0, i.jsxs)('div', {
    className: C.communityInfoPill,
    ...e,
    children: [
      (0, i.jsx)(c.GlobeEarthIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 12,
        height: 12,
        className: C.communityIcon
      }),
      (0, i.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'none',
        children: g.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
      })
    ]
  })
})
  });
  return r ? (0, i.jsx)('div', {
className: a()(C.communityInfoContainer, C.hasSubheader),
children: d
  }) : (0, i.jsx)(s.animated.div, {
className: C.communityInfoContainer,
style: l ? {
  opacity: o
} : {
  height: o.to(e => ''.concat(20 * e, 'px'))
},
children: d
  });
}

function N() {
  return (0, i.jsx)(c.StarIcon, {
size: 'custom',
color: 'currentColor',
className: C.favoritesIcon,
height: 20,
width: 20
  });
}
t.ZP = l.memo(function(e) {
  var t;
  let {
bannerVisible: n,
controller: r,
className: s,
onClick: x,
onContextMenu: S,
onMouseDown: v,
disableBannerAnimation: Z,
'aria-expanded': T,
'aria-controls': L,
guild: A,
guildBanner: b,
animationOverlayHeight: M,
children: R,
headerClassName: O,
communityInfoVisible: y,
hasSubheader: P
  } = e, j = A.hasFeature(f.oNc.ANIMATED_BANNER), D = (0, u.Z)(A), U = !D && A.hasCommunityInfoSubheader(), G = (0, h.xR)(b) && j && !Z, [w, k] = l.useState(!1), B = l.useRef(), V = l.useRef(null), H = l.useRef(), F = d.QK.getSetting();
  l.useEffect(() => {
if (G && n && !B.current && F)
  return k(!0), H.current = setTimeout(() => {
    k(!1);
  }, 5000), () => {
    clearTimeout(H.current);
  };
  }, [
G,
n,
F
  ]), l.useEffect(() => {
B.current = n;
  }, [n]);
  let W = () => {
let {
  renderBanner: t,
  guildBanner: n
} = e;
return null != n && !t;
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    ref: V,
    className: a()(s, {
      [C.container]: !0,
      [C.clickable]: null != x,
      [C.selected]: null != x && T,
      [C.hasBanner]: W(),
      [C.bannerVisible]: n,
      [(0, p.Q)(f.BRd.DARK)]: n,
      [C.communityInfoVisible]: !D && y || P && U
    }),
    onMouseDown: v,
    onContextMenu: S,
    onClick: x,
    children: [
      (0, i.jsxs)('header', {
        className: a()(C.header, O, {
          [C.themedHeaderMobile]: o.tq
        }),
        children: [
          (0, i.jsxs)('div', {
            className: a()(C.headerContent, C.primaryInfo),
            children: [
              (0, i.jsx)(_.Z, {
                guild: A,
                isBannerVisible: n
              }),
              A.id === m._ && (0, i.jsx)(N, {}),
              (0, i.jsx)(c.Heading, {
                variant: 'text-md/semibold',
                lineClamp: 1,
                className: C.name,
                children: A.toString()
              }),
              null != x && (0, i.jsx)(c.Clickable, {
                className: C.headerButton,
                'aria-controls': L,
                'aria-expanded': T,
                focusProps: {
                  ringTarget: V,
                  offset: 4
                },
                onClick: x,
                onContextMenu: S,
                'aria-label': g.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
                  guildName: null !== (t = null == A ? void 0 : A.toString()) && void 0 !== t ? t : ''
                })
              }),
              (0, i.jsx)('div', {
                className: C.headerChildren,
                children: R
              })
            ]
          }),
          U && (0, i.jsx)(E, {
            guild: A,
            controller: r,
            hasBanner: null != b,
            hasSubheader: null != P && P
          })
        ]
      }),
      null != b ? (0, i.jsx)(I, {
        guild: A,
        controller: r,
        guildBanner: b,
        animate: w
      }) : null
    ]
  }),
  G && W() ? (0, i.jsx)('div', {
    className: C.animatedBannerHoverLayer,
    onMouseEnter: () => {
      k(!0), clearTimeout(H.current);
    },
    onMouseLeave: () => k(!1),
    style: {
      height: M
    }
  }) : null
]
  });
});