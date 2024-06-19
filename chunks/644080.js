var a = l(735250),
  i = l(470079),
  s = l(120356),
  r = l.n(s),
  t = l(442837),
  d = l(692547),
  c = l(481060),
  o = l(410030),
  u = l(637853),
  h = l(434404),
  m = l(159300),
  g = l(496675),
  x = l(705600),
  Z = l(346656),
  C = l(709586),
  v = l(768581),
  f = l(981631),
  I = l(689938),
  j = l(211737),
  N = l(63190),
  p = l(102219);
let E = e => {
  let n = i.useMemo(() => null == e ? null : v.ZP.getGuildHomeHeaderURL({
    id: e.id,
    homeHeader: e.homeHeader
  }), [e]);
  return {
    homeHeaderImage: n,
    isHomeHeaderImageSet: null != n,
    homeHeaderScroll: null != n ? 200 : 0
  }
};

function _(e) {
  let {
    guild: n
  } = e, l = () => {
    h.Z.open(n.id, f.pNK.ONBOARDING, void 0, f.KsC.SERVER_GUIDE)
  };
  return n.hasFeature(f.oNc.BANNER) ? (0, a.jsxs)(c.Button, {
    className: j.editButton,
    innerClassName: j.editButtonInner,
    type: "button",
    size: c.Button.Sizes.MEDIUM,
    color: c.Button.Colors.BRAND,
    onClick: l,
    children: [(0, a.jsx)(c.ImagePlusIcon, {
      size: "xs",
      color: d.Z.unsafe_rawColors.WHITE_500.css
    }), I.Z.Messages.EDIT_IMAGE]
  }) : (0, a.jsxs)(c.ShinyButton, {
    color: c.Button.Colors.GREEN,
    className: j.editButton,
    innerClassName: j.editButtonInner,
    onClick: l,
    children: [(0, a.jsx)(C.Z, {
      height: 16,
      width: 16
    }), I.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
  })
}
let b = i.memo(function(e) {
  let {
    guild: n,
    titleClassName: i
  } = e, {
    homeHeaderImage: s,
    isHomeHeaderImageSet: d
  } = E(n), h = (0, u.b$)(n.id), C = (0, t.e7)([g.Z], () => (0, m.b)(g.Z, n)), v = (0, o.ZP)();
  return (0, a.jsxs)("div", {
    className: j.header,
    children: [(0, a.jsxs)("div", {
      className: j.headerArtWrapper,
      children: [(0, a.jsx)("div", {
        className: r()(j.headerArt, {
          [j.headerArtPlaceholder]: !d
        }),
        style: {
          backgroundImage: "url(".concat(d ? s : "dark" === v ? N : p, ")")
        }
      }), h && (0, a.jsx)(_, {
        guild: n
      })]
    }), (0, a.jsx)("div", {
      className: j.titleWrapper,
      children: (0, a.jsxs)("div", {
        className: i,
        children: [(0, a.jsx)(Z.Z, {
          className: j.headerIcon,
          guild: n,
          size: Z.Z.Sizes.XLARGE,
          active: !0
        }), (0, a.jsx)(c.HeadingLevel, {
          children: (0, a.jsxs)("div", {
            className: j.headerName,
            children: [(0, a.jsx)(c.Heading, {
              className: j.headerName,
              variant: "heading-xxl/bold",
              children: n.name
            }), (0, a.jsx)(x.Z, {
              size: 24,
              guild: n,
              tooltipPosition: "bottom",
              tooltipColor: c.Tooltip.Colors.PRIMARY
            }), C && (0, a.jsx)(c.Button, {
              className: j.inviteButton,
              size: c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.PRIMARY,
              onClick: () => (0, c.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([l.e("99387"), l.e("7654")]).then(l.bind(l, 560114));
                return l => (0, a.jsx)(e, {
                  ...l,
                  guild: n,
                  source: f.t4x.GUILD_HOME
                })
              }),
              children: I.Z.Messages.INSTANT_INVITE
            })]
          })
        })]
      })
    })]
  })
});
n.Z = b