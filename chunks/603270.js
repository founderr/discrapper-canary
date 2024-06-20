n.d(t, {
  F: function() {
    return Z
  },
  P: function() {
    return L
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(241159),
  o = n(558381),
  c = n(812206),
  u = n(270144),
  d = n(307643),
  E = n(171246),
  _ = n(359610),
  I = n(592125),
  T = n(509545),
  N = n(238),
  m = n(55563),
  h = n(551428),
  C = n(626135),
  S = n(572004),
  A = n(601911),
  p = n(504211),
  g = n(381961),
  f = n(970321),
  O = n(680005),
  R = n(981631),
  M = n(272242),
  x = n(689938),
  v = n(947654);
let L = D(function(e) {
    let {
      appId: t,
      message: o
    } = e, u = (0, f.R)(t), [E, T, m, h, S, g, O] = (0, l.Wu)([c.Z, N.Z, I.Z], () => {
      var e;
      let n = c.Z.getApplication(t),
        s = null != n ? (0, A.y)(n, 45) : void 0,
        i = null === (e = I.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
      return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), N.Z.getStoreLayout(t), N.Z.getFetchStatus(t), i, s]
    }, [t, o.channel_id]);
    i.useEffect(() => {
      S === N.N.NONE && (0, r.k)(t), null == E && !T && !m && (0, d.UM)(t)
    }, [E, t, m, T, S]);
    let L = h.subscriptions.length,
      Z = h.otps.length,
      D = i.useMemo(() => L > 0 && Z > 0 ? x.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
        subCount: L,
        itemCount: Z
      }) : L > 0 ? x.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({
        count: L
      }) : Z > 0 ? x.Z.Messages.STOREFRONT_ITEM_COUNT.format({
        count: Z
      }) : x.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS, [Z, L]);
    if (!u || null == E) return null;
    let j = () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, 7225));
        return n => (0, s.jsx)(e, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: t,
          guildId: g
        })
      })
    };
    return (0, s.jsx)(P, {
      appName: E.name,
      title: x.Z.Messages.STOREFRONT_TITLE.format({
        appName: E.name
      }),
      description: D,
      link: "".concat(location.protocol, "//").concat(location.host).concat(R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, M.ApplicationDirectoryProfileSections.STORE)),
      onLinkCopy: () => {
        (0, p.X)(t, p.B.STORE_EMBED)
      },
      iconSrc: O,
      onIconClick: () => {
        j(), C.default.track(R.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
          application_id: t,
          area: "app_icon"
        })
      },
      children: (0, s.jsx)(_.Z, {
        size: a.ButtonSizes.MEDIUM,
        onClick: () => {
          j(), C.default.track(R.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
            application_id: t,
            area: "open_store_button"
          })
        },
        className: v.openStoreButton,
        children: x.Z.Messages.STOREFRONT_OPEN_STORE
      })
    })
  }),
  Z = D(function(e) {
    var t, r;
    let {
      skuId: d,
      message: N
    } = e, [S, g, L, Z, D, j, U, y] = (0, l.Wu)([m.Z, h.Z, T.Z, I.Z, c.Z], () => {
      var e, t, n, s;
      let i = null === (e = I.Z.getBasicChannel(N.channel_id)) || void 0 === e ? void 0 : e.guild_id,
        l = m.Z.get(d),
        a = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
        r = null !== (s = null != a ? c.Z.getApplication(a) : void 0) && void 0 !== s ? s : null == l ? void 0 : l.application,
        o = null != r ? (0, A.y)(r, 45) : void 0,
        u = T.Z.getForSKU(d);
      return [l, r, h.Z.getForSKU(d), m.Z.isFetching(d), m.Z.didFetchingSkuFail(d), u.length > 0 ? u[0].toServerData() : null, i, o]
    }, [N.channel_id, d]), b = (0, f.R)(null !== (r = null == g ? void 0 : g.id) && void 0 !== r ? r : "");
    i.useEffect(() => {
      null == S && !Z && !D && (0, o.km)(d)
    }, [D, Z, S, d]);
    let {
      subscriptionGroupListing: B
    } = (0, u.F5)(null == g ? void 0 : g.id, U);
    if ((0, u.FE)(null == g ? void 0 : g.id, null == g ? void 0 : g.primarySkuId), !b || null == g || null == S) return null;
    let k = S.type === R.epS.SUBSCRIPTION,
      G = null != B && (0, E.KW)(B.sku_flags),
      F = () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, 7225));
          return t => (0, s.jsx)(e, {
            transitionState: t.transitionState,
            onClose: t.onClose,
            appId: g.id,
            guildId: U
          })
        })
      },
      V = () => {
        (0, a.openModalLazy)(async () => {
          let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
            t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
          return n => {
            let i = () => {
              n.onClose(), F()
            };
            return null != e && null != B ? (0, s.jsx)(e, {
              transitionState: n.transitionState,
              appId: g.id,
              skuId: S.id,
              groupListingId: B.id,
              groupListingType: G ? "user" : "guild",
              onClose: n.onClose,
              onHeaderTitleClick: i
            }) : null != t ? (0, s.jsx)(t, {
              transitionState: n.transitionState,
              appId: g.id,
              skuId: d,
              onClose: n.onClose,
              onHeaderTitleClick: i
            }) : null
          }
        })
      },
      w = k ? G ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.UserIcon, {
          size: "custom",
          width: 12,
          height: 12
        }), " ", x.Z.Messages.STOREFRONT_USER_SUBSCRIPTION]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.ServerIcon, {
          size: "custom",
          width: 12,
          height: 12
        }), " ", x.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION]
      }) : null == L ? void 0 : null === (t = L.description) || void 0 === t ? void 0 : t.trim();
    "" === w && (w = void 0);
    let H = () => {
      C.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: g.id,
        sku_id: S.id,
        area: "purchase_button"
      })
    };
    return (0, s.jsx)(P, {
      appName: g.name,
      title: S.name,
      description: w,
      link: "".concat(location.protocol, "//").concat(location.host).concat(R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(g.id, M.ApplicationDirectoryProfileSections.STORE)),
      onLinkCopy: () => {
        (0, p.X)(g.id, p.B.SKU_EMBED, d)
      },
      iconSrc: y,
      onIconClick: () => {
        F(), C.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
          application_id: g.id,
          sku_id: S.id,
          area: "app_icon"
        })
      },
      children: (0, s.jsxs)("div", {
        className: v.skuPurchaseButtons,
        children: [(0, s.jsx)(a.Button, {
          color: a.ButtonColors.CUSTOM,
          onClick: () => {
            V(), C.default.track(R.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
              application_id: g.id,
              sku_id: S.id,
              area: "view_details"
            })
          },
          className: v.viewDetailsButton,
          children: x.Z.Messages.STOREFRONT_DETAILS
        }), k ? null != j ? (0, s.jsx)(O.p, {
          appId: g.id,
          groupListingId: null == B ? void 0 : B.id,
          groupListingType: G ? "user" : "guild",
          skuId: S.id,
          subPlan: j,
          icon: (0, s.jsx)(a.ShopIcon, {
            size: "xs",
            color: "currentcolor"
          }),
          onHasClicked: H
        }) : (0, s.jsx)(_.Z, {
          size: a.ButtonSizes.MEDIUM,
          onClick: V,
          children: x.Z.Messages.STOREFRONT_SUBSCRIBE
        }) : (0, s.jsx)(O.Y, {
          appId: g.id,
          sku: S,
          icon: (0, s.jsx)(a.ShopIcon, {
            size: "xs",
            color: "currentcolor"
          }),
          onHasClicked: H
        })]
      })
    })
  });

function P(e) {
  let {
    appName: t,
    title: n,
    description: i,
    link: l,
    iconSrc: r,
    onIconClick: o,
    onLinkCopy: c,
    children: u
  } = e;
  return (0, s.jsxs)("div", {
    className: v.wrapper,
    children: [(0, s.jsxs)("div", {
      className: v.header,
      children: [(0, s.jsxs)("div", {
        className: v.headerTitle,
        children: [(0, s.jsx)(a.ShopIcon, {
          size: "xxs"
        }), (0, s.jsx)(a.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), S.wS && (0, s.jsx)(a.Button, {
        look: a.ButtonLooks.BLANK,
        size: a.ButtonSizes.ICON,
        "aria-label": x.Z.Messages.COPY_LINK,
        onClick: () => {
          (0, S.JG)(l), (0, a.showToast)((0, a.createToast)(x.Z.Messages.COPIED_LINK, a.ToastType.SUCCESS)), c()
        },
        children: (0, s.jsx)(a.LinkIcon, {
          size: "xs"
        })
      })]
    }), (0, s.jsxs)("div", {
      className: v.content,
      children: [(0, s.jsxs)("div", {
        className: v.contentTextWrapper,
        children: [null != r && (0, s.jsx)(a.Button, {
          look: a.ButtonLooks.BLANK,
          size: a.ButtonSizes.NONE,
          onClick: o,
          children: (0, s.jsx)("img", {
            src: r.href,
            alt: "",
            className: v.appIcon
          })
        }), (0, s.jsxs)("div", {
          className: v.contentText,
          style: null == i ? {
            justifyContent: "space-evenly"
          } : void 0,
          children: [(0, s.jsx)(a.Text, {
            variant: "heading-md/semibold",
            tag: "div",
            children: n
          }), null != i && (0, s.jsx)(a.Text, {
            variant: "heading-md/medium",
            color: "text-muted",
            tag: "div",
            className: v.description,
            children: i
          })]
        })]
      }), u]
    })]
  })
}

function D(e) {
  return t => {
    let {
      enabled: n
    } = g.u.useExperiment({
      location: "AppStorefrontMessageEmbed"
    });
    return n ? (0, s.jsx)(e, {
      ...t
    }) : null
  }
}