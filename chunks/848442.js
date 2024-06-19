n.d(t, {
  Z: function() {
    return M
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(399606),
  a = n(704215),
  o = n(433517),
  u = n(481060),
  c = n(239091),
  d = n(607070),
  h = n(367907),
  g = n(357352),
  p = n(652515),
  m = n(550951),
  C = n(886176),
  E = n(605236),
  f = n(703656),
  _ = n(984933),
  I = n(430824),
  N = n(626135),
  Z = n(434479),
  S = n(981631),
  x = n(176505),
  T = n(629481),
  L = n(689938),
  v = n(274732);

function A(e) {
  let {
    guildId: t,
    selected: n,
    handleClick: i
  } = e, c = (0, p.RF)(t, "guild_shop_channel_row"), m = (0, r.e7)([I.Z], () => I.Z.getGuild(t)), x = (null == m ? void 0 : m.hasFeature(S.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0, A = "false" === o.K.get(T.tM, "false"), M = (0, r.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, l.jsx)(Z.m, {
    id: "shop-".concat(t),
    className: s()(v.previewChannelRow, {
      [v.selected]: n,
      [v.phantomPreview]: A
    }),
    innerClassName: v.previewChannelRowContent,
    renderIcon: e => (0, l.jsx)(C.Z, {
      width: 20,
      height: 20,
      className: s()([e, v.shopIcon])
    }),
    text: L.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
    selected: n,
    onClick: i,
    trailing: (0, l.jsxs)("div", {
      className: v.gifSection,
      children: [M ? (0, l.jsx)(u.TextBadge, {
        color: u.tokens.unsafe_rawColors.BRAND_260.css,
        text: L.Z.Messages.NEW,
        className: v.newBadge
      }) : (0, l.jsx)("img", {
        src: (0, g.b)("server_products/storefront/money.gif"),
        className: v.money,
        alt: ""
      }), n && (0, l.jsx)(u.Clickable, {
        className: v.closeButton,
        onClick: e => {
          if (e.stopPropagation(), (0, E.EW)(a.z.SERVER_SHOP_PHANTOM_PREVIEW), N.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, {
              ...(0, h.hH)(t),
              action_taken: T.mz.DISMISS_CHANNEL_ROW
            }), !c || !x) {
            var n;
            (0, f.dL)(S.Z5c.CHANNEL(t, null === (n = _.ZP.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id))
          }
        },
        "aria-label": L.Z.Messages.CLOSE,
        children: (0, l.jsx)(u.CircleXIcon, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  })
}

function M(e) {
  let {
    guild: t,
    selected: i
  } = e, s = (0, m.g)(t, "guild_shop_channel_row"), r = () => {
    o.K.set(T.tM, "true"), (0, f.uL)(S.Z5c.CHANNEL(t.id, x.oC.GUILD_SHOP))
  };
  return s ? (0, l.jsx)(A, {
    guildId: t.id,
    selected: i,
    handleClick: r
  }) : (0, l.jsx)(Z.m, {
    id: "shop-".concat(t.id),
    renderIcon: e => (0, l.jsx)(C.Z, {
      width: 20,
      height: 20,
      className: e
    }),
    text: L.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
    selected: i,
    onClick: r,
    onContextMenu: e => {
      null != t && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("66050").then(n.bind(n, 376573));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
  })
}