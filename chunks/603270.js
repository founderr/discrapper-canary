"use strict";
n.r(t), n.d(t, {
  AppStorefrontMessageEmbed: function() {
    return P
  },
  AppStorefrontSKUMessageEmbed: function() {
    return y
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("628028"),
  i = n("442837"),
  r = n("117447"),
  o = n("393586"),
  u = n("252440"),
  d = n("481060"),
  c = n("241159"),
  f = n("558381"),
  E = n("812206"),
  _ = n("270144"),
  m = n("307643"),
  T = n("171246"),
  I = n("359610"),
  p = n("592125"),
  h = n("509545"),
  N = n("238"),
  S = n("55563"),
  C = n("551428"),
  g = n("572004"),
  A = n("601911"),
  M = n("381961"),
  R = n("970321"),
  v = n("680005"),
  O = n("981631"),
  x = n("272242"),
  L = n("689938"),
  D = n("513111");
let P = j(function(e) {
    let {
      appId: t,
      message: l
    } = e, r = (0, R.useAppStorefrontAvailable)(t), [o, u, f, _, T, h, S] = (0, i.useStateFromStoresArray)([E.default, N.default, p.default], () => {
      var e;
      let n = E.default.getApplication(t),
        s = null != n ? (0, A.findAppIconSrc)(n, 45) : void 0,
        a = null === (e = p.default.getBasicChannel(l.channel_id)) || void 0 === e ? void 0 : e.guild_id;
      return [n, E.default.isFetchingApplication(t), E.default.didFetchingApplicationFail(t), N.default.getStoreLayout(t), N.default.getFetchStatus(t), a, s]
    }, [t, l.channel_id]);
    a.useEffect(() => {
      T === N.ApplicationStoreDirectoryFetchStatus.NONE && (0, c.fetchStoreDirectoryLayout)(t), null == o && !u && !f && (0, m.fetchApplication)(t)
    }, [o, t, f, u, T]);
    let C = _.subscriptions.length,
      g = _.otps.length,
      M = a.useMemo(() => C > 0 && g > 0 ? L.default.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
        subCount: C,
        itemCount: g
      }) : C > 0 ? L.default.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({
        count: C
      }) : g > 0 ? L.default.Messages.STOREFRONT_ITEM_COUNT.format({
        count: g
      }) : L.default.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS, [g, C]);
    if (!r || null == o) return null;
    let v = () => {
      (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, "7225"));
        return n => (0, s.jsx)(e, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: t,
          guildId: h
        })
      })
    };
    return (0, s.jsx)(U, {
      appName: o.name,
      title: L.default.Messages.STOREFRONT_TITLE.format({
        appName: o.name
      }),
      description: M,
      link: "".concat(location.protocol, "//").concat(location.host).concat(O.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(t, x.ApplicationDirectoryProfileSections.STORE)),
      iconSrc: S,
      onIconClick: v,
      children: (0, s.jsx)(I.default, {
        size: d.ButtonSizes.MEDIUM,
        onClick: v,
        className: D.openStoreButton,
        children: L.default.Messages.STOREFRONT_OPEN_STORE
      })
    })
  }),
  y = j(function(e) {
    var t, r;
    let {
      skuId: c,
      message: m
    } = e, [N, g, M, P, y, j, b, F] = (0, i.useStateFromStoresArray)([S.default, C.default, h.default, p.default, E.default], () => {
      var e, t, n, s;
      let a = null === (e = p.default.getBasicChannel(m.channel_id)) || void 0 === e ? void 0 : e.guild_id,
        l = S.default.get(c),
        i = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
        r = null !== (s = null != i ? E.default.getApplication(i) : void 0) && void 0 !== s ? s : null == l ? void 0 : l.application,
        o = null != r ? (0, A.findAppIconSrc)(r, 45) : void 0,
        u = h.default.getForSKU(c);
      return [l, r, C.default.getForSKU(c), S.default.isFetching(c), S.default.didFetchingSkuFail(c), u.length > 0 ? u[0].toServerData() : null, a, o]
    }, [m.channel_id, c]), B = (0, R.useAppStorefrontAvailable)(null !== (r = null == g ? void 0 : g.id) && void 0 !== r ? r : "");
    a.useEffect(() => {
      null == N && !P && !y && (0, f.fetchStoreListingForSku)(c)
    }, [y, P, N, c]);
    let {
      subscriptionGroupListing: G
    } = (0, _.useActiveSubscriptionListingForApplication)(null == g ? void 0 : g.id, b);
    if ((0, _.useFetchListingsForApplication)(null == g ? void 0 : g.id, null == g ? void 0 : g.primarySkuId), !B || null == g || null == N) return null;
    let k = N.type === O.SKUTypes.SUBSCRIPTION,
      w = null != G && (0, T.isApplicationUserSubscription)(G.sku_flags),
      H = () => {
        (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, "7225"));
          return t => (0, s.jsx)(e, {
            transitionState: t.transitionState,
            onClose: t.onClose,
            appId: g.id,
            guildId: b
          })
        })
      },
      V = () => {
        (0, d.openModalLazy)(async () => {
          let e = k ? (await Promise.resolve().then(n.bind(n, "519896"))).SubscriptionDetailsModal : null,
            t = k ? null : (await Promise.resolve().then(n.bind(n, "147496"))).ItemDetailsModal;
          return n => {
            let a = () => {
              n.onClose(), H()
            };
            return null != e && null != G ? (0, s.jsx)(e, {
              transitionState: n.transitionState,
              appId: g.id,
              skuId: N.id,
              groupListingId: G.id,
              groupListingType: w ? "user" : "guild",
              onClose: n.onClose,
              onHeaderTitleClick: a
            }) : null != t ? (0, s.jsx)(t, {
              transitionState: n.transitionState,
              appId: g.id,
              skuId: c,
              onClose: n.onClose,
              onHeaderTitleClick: a
            }) : null
          }
        })
      },
      Y = k ? w ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.UserIcon, {
          width: 12,
          height: 12
        }), " ", L.default.Messages.STOREFRONT_USER_SUBSCRIPTION]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.ServerIcon, {
          width: 12,
          height: 12
        }), " ", L.default.Messages.STOREFRONT_SERVER_SUBSCRIPTION]
      }) : null == M ? void 0 : null === (t = M.description) || void 0 === t ? void 0 : t.trim();
    return "" === Y && (Y = void 0), (0, s.jsx)(U, {
      appName: g.name,
      title: N.name,
      description: Y,
      link: "".concat(location.protocol, "//").concat(location.host).concat(O.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(g.id, x.ApplicationDirectoryProfileSections.STORE)),
      iconSrc: F,
      onIconClick: H,
      children: (0, s.jsxs)("div", {
        className: D.skuPurchaseButtons,
        children: [(0, s.jsx)(d.Button, {
          color: d.ButtonColors.CUSTOM,
          onClick: V,
          className: D.viewDetailsButton,
          children: L.default.Messages.STOREFRONT_DETAILS
        }), k ? null != j ? (0, s.jsx)(v.SubscriptionPurchaseButton, {
          appId: g.id,
          groupListingId: null == G ? void 0 : G.id,
          groupListingType: w ? "user" : "guild",
          skuId: N.id,
          subPlan: j,
          icon: (0, s.jsx)(o.ShopIcon, {
            height: 16,
            width: 16,
            color: "currentcolor"
          })
        }) : (0, s.jsx)(I.default, {
          size: d.ButtonSizes.MEDIUM,
          onClick: V,
          children: L.default.Messages.STOREFRONT_SUBSCRIBE
        }) : (0, s.jsx)(v.ItemPurchaseButton, {
          appId: g.id,
          sku: N,
          icon: (0, s.jsx)(o.ShopIcon, {
            width: 16,
            height: 16,
            color: "currentcolor"
          })
        })]
      })
    })
  });

function U(e) {
  let {
    appName: t,
    title: n,
    description: a,
    link: l,
    iconSrc: i,
    onIconClick: u,
    children: c
  } = e;
  return (0, s.jsxs)("div", {
    className: D.wrapper,
    children: [(0, s.jsxs)("div", {
      className: D.header,
      children: [(0, s.jsxs)("div", {
        className: D.headerTitle,
        children: [(0, s.jsx)(o.ShopIcon, {
          width: 12,
          height: 12
        }), (0, s.jsx)(d.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), g.SUPPORTS_COPY && (0, s.jsx)(d.Button, {
        look: d.ButtonLooks.BLANK,
        size: d.ButtonSizes.ICON,
        "aria-label": L.default.Messages.COPY_LINK,
        onClick: () => {
          (0, g.copy)(l), (0, d.showToast)((0, d.createToast)(L.default.Messages.COPIED_LINK, d.ToastType.SUCCESS))
        },
        children: (0, s.jsx)(r.LinkIcon, {
          width: 16,
          height: 16
        })
      })]
    }), (0, s.jsxs)("div", {
      className: D.content,
      children: [(0, s.jsxs)("div", {
        className: D.contentTextWrapper,
        children: [null != i && (0, s.jsx)(d.Button, {
          look: d.ButtonLooks.BLANK,
          size: d.ButtonSizes.NONE,
          onClick: u,
          children: (0, s.jsx)("img", {
            src: i.href,
            alt: "",
            className: D.appIcon
          })
        }), (0, s.jsxs)("div", {
          className: D.contentText,
          style: null == a ? {
            justifyContent: "space-evenly"
          } : void 0,
          children: [(0, s.jsx)(d.Text, {
            variant: "heading-md/semibold",
            tag: "div",
            children: n
          }), null != a && (0, s.jsx)(d.Text, {
            variant: "heading-md/medium",
            color: "text-muted",
            tag: "div",
            className: D.description,
            children: a
          })]
        })]
      }), c]
    })]
  })
}

function j(e) {
  return t => {
    let {
      enabled: n
    } = M.storefrontMessageEmbedExperiment.useExperiment({
      location: "AppStorefrontMessageEmbed"
    });
    return n ? (0, s.jsx)(e, {
      ...t
    }) : null
  }
}