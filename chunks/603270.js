"use strict";
n.r(t), n.d(t, {
  AppStorefrontMessageEmbed: function() {
    return y
  },
  AppStorefrontSKUMessageEmbed: function() {
    return U
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
  g = n("626135"),
  A = n("572004"),
  M = n("601911"),
  R = n("381961"),
  v = n("970321"),
  O = n("680005"),
  x = n("981631"),
  L = n("272242"),
  D = n("689938"),
  P = n("513111");
let y = b(function(e) {
    let {
      appId: t,
      message: l
    } = e, r = (0, v.useAppStorefrontAvailable)(t), [o, u, f, _, T, h, S] = (0, i.useStateFromStoresArray)([E.default, N.default, p.default], () => {
      var e;
      let n = E.default.getApplication(t),
        s = null != n ? (0, M.findAppIconSrc)(n, 45) : void 0,
        a = null === (e = p.default.getBasicChannel(l.channel_id)) || void 0 === e ? void 0 : e.guild_id;
      return [n, E.default.isFetchingApplication(t), E.default.didFetchingApplicationFail(t), N.default.getStoreLayout(t), N.default.getFetchStatus(t), a, s]
    }, [t, l.channel_id]);
    a.useEffect(() => {
      T === N.ApplicationStoreDirectoryFetchStatus.NONE && (0, c.fetchStoreDirectoryLayout)(t), null == o && !u && !f && (0, m.fetchApplication)(t)
    }, [o, t, f, u, T]);
    let C = _.subscriptions.length,
      A = _.otps.length,
      R = a.useMemo(() => C > 0 && A > 0 ? D.default.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
        subCount: C,
        itemCount: A
      }) : C > 0 ? D.default.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({
        count: C
      }) : A > 0 ? D.default.Messages.STOREFRONT_ITEM_COUNT.format({
        count: A
      }) : D.default.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS, [A, C]);
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
          guildId: h
        })
      })
    };
    return (0, s.jsx)(j, {
      appName: o.name,
      title: D.default.Messages.STOREFRONT_TITLE.format({
        appName: o.name
      }),
      description: R,
      link: "".concat(location.protocol, "//").concat(location.host).concat(x.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(t, L.ApplicationDirectoryProfileSections.STORE)),
      iconSrc: S,
      onIconClick: () => {
        O(), g.default.track(x.AnalyticEvents.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
          application_id: t,
          area: "app_icon"
        })
      },
      children: (0, s.jsx)(I.default, {
        size: d.ButtonSizes.MEDIUM,
        onClick: () => {
          O(), g.default.track(x.AnalyticEvents.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
            application_id: t,
            area: "open_store_button"
          })
        },
        className: P.openStoreButton,
        children: D.default.Messages.STOREFRONT_OPEN_STORE
      })
    })
  }),
  U = b(function(e) {
    var t, r;
    let {
      skuId: c,
      message: m
    } = e, [N, A, R, y, U, b, F, B] = (0, i.useStateFromStoresArray)([S.default, C.default, h.default, p.default, E.default], () => {
      var e, t, n, s;
      let a = null === (e = p.default.getBasicChannel(m.channel_id)) || void 0 === e ? void 0 : e.guild_id,
        l = S.default.get(c),
        i = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
        r = null !== (s = null != i ? E.default.getApplication(i) : void 0) && void 0 !== s ? s : null == l ? void 0 : l.application,
        o = null != r ? (0, M.findAppIconSrc)(r, 45) : void 0,
        u = h.default.getForSKU(c);
      return [l, r, C.default.getForSKU(c), S.default.isFetching(c), S.default.didFetchingSkuFail(c), u.length > 0 ? u[0].toServerData() : null, a, o]
    }, [m.channel_id, c]), G = (0, v.useAppStorefrontAvailable)(null !== (r = null == A ? void 0 : A.id) && void 0 !== r ? r : "");
    a.useEffect(() => {
      null == N && !y && !U && (0, f.fetchStoreListingForSku)(c)
    }, [U, y, N, c]);
    let {
      subscriptionGroupListing: k
    } = (0, _.useActiveSubscriptionListingForApplication)(null == A ? void 0 : A.id, F);
    if ((0, _.useFetchListingsForApplication)(null == A ? void 0 : A.id, null == A ? void 0 : A.primarySkuId), !G || null == A || null == N) return null;
    let w = N.type === x.SKUTypes.SUBSCRIPTION,
      H = null != k && (0, T.isApplicationUserSubscription)(k.sku_flags),
      V = () => {
        (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, "7225"));
          return t => (0, s.jsx)(e, {
            transitionState: t.transitionState,
            onClose: t.onClose,
            appId: A.id,
            guildId: F
          })
        })
      },
      Y = () => {
        (0, d.openModalLazy)(async () => {
          let e = w ? (await Promise.resolve().then(n.bind(n, "519896"))).SubscriptionDetailsModal : null,
            t = w ? null : (await Promise.resolve().then(n.bind(n, "147496"))).ItemDetailsModal;
          return n => {
            let a = () => {
              n.onClose(), V()
            };
            return null != e && null != k ? (0, s.jsx)(e, {
              transitionState: n.transitionState,
              appId: A.id,
              skuId: N.id,
              groupListingId: k.id,
              groupListingType: H ? "user" : "guild",
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
      K = w ? H ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.UserIcon, {
          width: 12,
          height: 12
        }), " ", D.default.Messages.STOREFRONT_USER_SUBSCRIPTION]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.ServerIcon, {
          width: 12,
          height: 12
        }), " ", D.default.Messages.STOREFRONT_SERVER_SUBSCRIPTION]
      }) : null == R ? void 0 : null === (t = R.description) || void 0 === t ? void 0 : t.trim();
    "" === K && (K = void 0);
    let W = () => {
      g.default.track(x.AnalyticEvents.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: A.id,
        sku_id: N.id,
        area: "purchase_button"
      })
    };
    return (0, s.jsx)(j, {
      appName: A.name,
      title: N.name,
      description: K,
      link: "".concat(location.protocol, "//").concat(location.host).concat(x.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(A.id, L.ApplicationDirectoryProfileSections.STORE)),
      iconSrc: B,
      onIconClick: () => {
        V(), g.default.track(x.AnalyticEvents.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
          application_id: A.id,
          sku_id: N.id,
          area: "app_icon"
        })
      },
      children: (0, s.jsxs)("div", {
        className: P.skuPurchaseButtons,
        children: [(0, s.jsx)(d.Button, {
          color: d.ButtonColors.CUSTOM,
          onClick: () => {
            Y(), g.default.track(x.AnalyticEvents.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
              application_id: A.id,
              sku_id: N.id,
              area: "view_details"
            })
          },
          className: P.viewDetailsButton,
          children: D.default.Messages.STOREFRONT_DETAILS
        }), w ? null != b ? (0, s.jsx)(O.SubscriptionPurchaseButton, {
          appId: A.id,
          groupListingId: null == k ? void 0 : k.id,
          groupListingType: H ? "user" : "guild",
          skuId: N.id,
          subPlan: b,
          icon: (0, s.jsx)(o.ShopIcon, {
            height: 16,
            width: 16,
            color: "currentcolor"
          }),
          onHasClicked: W
        }) : (0, s.jsx)(I.default, {
          size: d.ButtonSizes.MEDIUM,
          onClick: Y,
          children: D.default.Messages.STOREFRONT_SUBSCRIBE
        }) : (0, s.jsx)(O.ItemPurchaseButton, {
          appId: A.id,
          sku: N,
          icon: (0, s.jsx)(o.ShopIcon, {
            width: 16,
            height: 16,
            color: "currentcolor"
          }),
          onHasClicked: W
        })]
      })
    })
  });

function j(e) {
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
        "aria-label": D.default.Messages.COPY_LINK,
        onClick: () => {
          (0, A.copy)(l), (0, d.showToast)((0, d.createToast)(D.default.Messages.COPIED_LINK, d.ToastType.SUCCESS))
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

function b(e) {
  return t => {
    let {
      enabled: n
    } = R.storefrontMessageEmbedExperiment.useExperiment({
      location: "AppStorefrontMessageEmbed"
    });
    return n ? (0, s.jsx)(e, {
      ...t
    }) : null
  }
}