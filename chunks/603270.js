"use strict";
n.r(t), n.d(t, {
  AppStorefrontMessageEmbed: function() {
    return D
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
  T = n("307643"),
  m = n("171246"),
  I = n("359610"),
  N = n("592125"),
  p = n("509545"),
  h = n("238"),
  S = n("55563"),
  C = n("551428"),
  A = n("572004"),
  g = n("601911"),
  M = n("381961"),
  R = n("970321"),
  O = n("680005"),
  v = n("981631"),
  x = n("272242"),
  L = n("689938"),
  P = n("513111");
let D = j(function(e) {
    let {
      appId: t,
      message: l
    } = e, r = (0, R.useAppStorefrontAvailable)(t), [o, u, f, _, m, p, S] = (0, i.useStateFromStoresArray)([E.default, h.default, N.default], () => {
      var e;
      let n = E.default.getApplication(t),
        s = null != n ? (0, g.findAppIconSrc)(n, 45) : void 0,
        a = null === (e = N.default.getBasicChannel(l.channel_id)) || void 0 === e ? void 0 : e.guild_id;
      return [n, E.default.isFetchingApplication(t), E.default.didFetchingApplicationFail(t), h.default.getStoreLayout(t), h.default.getFetchStatus(t), a, s]
    }, [t, l.channel_id]);
    a.useEffect(() => {
      m === h.ApplicationStoreDirectoryFetchStatus.NONE && (0, c.fetchStoreDirectoryLayout)(t), null == o && !u && !f && (0, T.fetchApplication)(t)
    }, [o, t, f, u, m]);
    let C = _.subscriptions.length,
      A = _.otps.length,
      M = a.useMemo(() => C > 0 && A > 0 ? L.default.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
        subCount: C,
        itemCount: A
      }) : C > 0 ? L.default.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({
        count: C
      }) : A > 0 ? L.default.Messages.STOREFRONT_ITEM_COUNT.format({
        count: A
      }) : L.default.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS, [A, C]);
    if (!r || null == o) return null;
    let O = () => {
      (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, "7225"));
        return n => (0, s.jsx)(e, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: t,
          guildId: p
        })
      })
    };
    return (0, s.jsx)(U, {
      appName: o.name,
      title: L.default.Messages.STOREFRONT_TITLE.format({
        appName: o.name
      }),
      description: M,
      link: "".concat(location.protocol, "//").concat(location.host).concat(v.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(t, x.ApplicationDirectoryProfileSections.STORE)),
      iconSrc: S,
      onIconClick: O,
      children: (0, s.jsx)(I.default, {
        size: d.ButtonSizes.MEDIUM,
        onClick: O,
        className: P.openStoreButton,
        children: L.default.Messages.STOREFRONT_OPEN_STORE
      })
    })
  }),
  y = j(function(e) {
    var t, r;
    let {
      skuId: c,
      message: T
    } = e, [h, A, M, D, y, j, b, G] = (0, i.useStateFromStoresArray)([S.default, C.default, p.default, N.default, E.default], () => {
      var e, t, n, s;
      let a = null === (e = N.default.getBasicChannel(T.channel_id)) || void 0 === e ? void 0 : e.guild_id,
        l = S.default.get(c),
        i = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
        r = null !== (s = null != i ? E.default.getApplication(i) : void 0) && void 0 !== s ? s : null == l ? void 0 : l.application,
        o = null != r ? (0, g.findAppIconSrc)(r, 45) : void 0,
        u = p.default.getForSKU(c);
      return [l, r, C.default.getForSKU(c), S.default.isFetching(c), S.default.didFetchingSkuFail(c), u.length > 0 ? u[0].toServerData() : null, a, o]
    }, [T.channel_id, c]), F = (0, R.useAppStorefrontAvailable)(null !== (r = null == A ? void 0 : A.id) && void 0 !== r ? r : "");
    a.useEffect(() => {
      null == h && !D && !y && (0, f.fetchStoreListingForSku)(c)
    }, [y, D, h, c]);
    let {
      subscriptionGroupListing: B
    } = (0, _.useActiveSubscriptionListingForApplication)(null == A ? void 0 : A.id, b);
    if ((0, _.useFetchListingsForApplication)(null == A ? void 0 : A.id, null == A ? void 0 : A.primarySkuId), !F || null == A || null == h) return null;
    let k = h.type === v.SKUTypes.SUBSCRIPTION,
      w = null != B && (0, m.isApplicationUserSubscription)(B.sku_flags),
      H = () => {
        (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, "7225"));
          return t => (0, s.jsx)(e, {
            transitionState: t.transitionState,
            onClose: t.onClose,
            appId: A.id,
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
            return null != e && null != B ? (0, s.jsx)(e, {
              transitionState: n.transitionState,
              appId: A.id,
              skuId: h.id,
              groupListingId: B.id,
              groupListingType: w ? "user" : "guild",
              onClose: n.onClose,
              onHeaderTitleClick: a
            }) : null != t ? (0, s.jsx)(t, {
              transitionState: n.transitionState,
              appId: A.id,
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
      appName: A.name,
      title: h.name,
      description: Y,
      link: "".concat(location.protocol, "//").concat(location.host).concat(v.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(A.id, x.ApplicationDirectoryProfileSections.STORE)),
      iconSrc: G,
      onIconClick: H,
      children: (0, s.jsxs)("div", {
        className: P.skuPurchaseButtons,
        children: [(0, s.jsx)(d.Button, {
          color: d.ButtonColors.CUSTOM,
          onClick: V,
          className: P.viewDetailsButton,
          children: L.default.Messages.STOREFRONT_DETAILS
        }), k ? null != j ? (0, s.jsx)(O.SubscriptionPurchaseButton, {
          appId: A.id,
          groupListingId: null == B ? void 0 : B.id,
          groupListingType: w ? "user" : "guild",
          skuId: h.id,
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
        }) : (0, s.jsx)(O.ItemPurchaseButton, {
          appId: A.id,
          sku: h,
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
    className: P.wrapper,
    children: [(0, s.jsxs)("div", {
      className: P.header,
      children: [(0, s.jsxs)("div", {
        className: P.headerTitle,
        children: [(0, s.jsx)(o.ShopIcon, {
          width: 12,
          height: 12
        }), (0, s.jsx)(d.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), A.SUPPORTS_COPY && (0, s.jsx)(d.Button, {
        look: d.ButtonLooks.BLANK,
        size: d.ButtonSizes.ICON,
        "aria-label": L.default.Messages.COPY_LINK,
        onClick: () => {
          (0, A.copy)(l), (0, d.showToast)((0, d.createToast)(L.default.Messages.COPIED_LINK, d.ToastType.SUCCESS))
        },
        children: (0, s.jsx)(r.LinkIcon, {
          width: 16,
          height: 16
        })
      })]
    }), (0, s.jsxs)("div", {
      className: P.content,
      children: [(0, s.jsxs)("div", {
        className: P.contentTextWrapper,
        children: [null != i && (0, s.jsx)(d.Button, {
          look: d.ButtonLooks.BLANK,
          size: d.ButtonSizes.NONE,
          onClick: u,
          children: (0, s.jsx)("img", {
            src: i.href,
            alt: "",
            className: P.appIcon
          })
        }), (0, s.jsxs)("div", {
          className: P.contentText,
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
            className: P.description,
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