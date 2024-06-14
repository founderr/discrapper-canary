"use strict";
n.r(t), n.d(t, {
  AppStorefrontMessageEmbed: function() {
    return U
  },
  AppStorefrontSKUMessageEmbed: function() {
    return j
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
  R = n("504211"),
  v = n("381961"),
  O = n("970321"),
  x = n("680005"),
  L = n("981631"),
  D = n("272242"),
  P = n("689938"),
  y = n("513111");
let U = F(function(e) {
    let {
      appId: t,
      message: l
    } = e, r = (0, O.useAppStorefrontAvailable)(t), [o, u, f, _, T, h, S] = (0, i.useStateFromStoresArray)([E.default, N.default, p.default], () => {
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
      v = a.useMemo(() => C > 0 && A > 0 ? P.default.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
        subCount: C,
        itemCount: A
      }) : C > 0 ? P.default.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({
        count: C
      }) : A > 0 ? P.default.Messages.STOREFRONT_ITEM_COUNT.format({
        count: A
      }) : P.default.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS, [A, C]);
    if (!r || null == o) return null;
    let x = () => {
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
    return (0, s.jsx)(b, {
      appName: o.name,
      title: P.default.Messages.STOREFRONT_TITLE.format({
        appName: o.name
      }),
      description: v,
      link: "".concat(location.protocol, "//").concat(location.host).concat(L.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(t, D.ApplicationDirectoryProfileSections.STORE)),
      onLinkCopy: () => {
        (0, R.trackStorefrontLinkCopiedEvent)(t, R.StorefrontLinkCopiedArea.STORE_EMBED)
      },
      iconSrc: S,
      onIconClick: () => {
        x(), g.default.track(L.AnalyticEvents.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
          application_id: t,
          area: "app_icon"
        })
      },
      children: (0, s.jsx)(I.default, {
        size: d.ButtonSizes.MEDIUM,
        onClick: () => {
          x(), g.default.track(L.AnalyticEvents.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
            application_id: t,
            area: "open_store_button"
          })
        },
        className: y.openStoreButton,
        children: P.default.Messages.STOREFRONT_OPEN_STORE
      })
    })
  }),
  j = F(function(e) {
    var t, r;
    let {
      skuId: c,
      message: m
    } = e, [N, A, v, U, j, F, B, G] = (0, i.useStateFromStoresArray)([S.default, C.default, h.default, p.default, E.default], () => {
      var e, t, n, s;
      let a = null === (e = p.default.getBasicChannel(m.channel_id)) || void 0 === e ? void 0 : e.guild_id,
        l = S.default.get(c),
        i = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
        r = null !== (s = null != i ? E.default.getApplication(i) : void 0) && void 0 !== s ? s : null == l ? void 0 : l.application,
        o = null != r ? (0, M.findAppIconSrc)(r, 45) : void 0,
        u = h.default.getForSKU(c);
      return [l, r, C.default.getForSKU(c), S.default.isFetching(c), S.default.didFetchingSkuFail(c), u.length > 0 ? u[0].toServerData() : null, a, o]
    }, [m.channel_id, c]), k = (0, O.useAppStorefrontAvailable)(null !== (r = null == A ? void 0 : A.id) && void 0 !== r ? r : "");
    a.useEffect(() => {
      null == N && !U && !j && (0, f.fetchStoreListingForSku)(c)
    }, [j, U, N, c]);
    let {
      subscriptionGroupListing: w
    } = (0, _.useActiveSubscriptionListingForApplication)(null == A ? void 0 : A.id, B);
    if ((0, _.useFetchListingsForApplication)(null == A ? void 0 : A.id, null == A ? void 0 : A.primarySkuId), !k || null == A || null == N) return null;
    let H = N.type === L.SKUTypes.SUBSCRIPTION,
      V = null != w && (0, T.isApplicationUserSubscription)(w.sku_flags),
      Y = () => {
        (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89131"), n.e("98538")]).then(n.bind(n, "7225"));
          return t => (0, s.jsx)(e, {
            transitionState: t.transitionState,
            onClose: t.onClose,
            appId: A.id,
            guildId: B
          })
        })
      },
      K = () => {
        (0, d.openModalLazy)(async () => {
          let e = H ? (await Promise.resolve().then(n.bind(n, "519896"))).SubscriptionDetailsModal : null,
            t = H ? null : (await Promise.resolve().then(n.bind(n, "147496"))).ItemDetailsModal;
          return n => {
            let a = () => {
              n.onClose(), Y()
            };
            return null != e && null != w ? (0, s.jsx)(e, {
              transitionState: n.transitionState,
              appId: A.id,
              skuId: N.id,
              groupListingId: w.id,
              groupListingType: V ? "user" : "guild",
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
      W = H ? V ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.UserIcon, {
          width: 12,
          height: 12
        }), " ", P.default.Messages.STOREFRONT_USER_SUBSCRIPTION]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.ServerIcon, {
          width: 12,
          height: 12
        }), " ", P.default.Messages.STOREFRONT_SERVER_SUBSCRIPTION]
      }) : null == v ? void 0 : null === (t = v.description) || void 0 === t ? void 0 : t.trim();
    "" === W && (W = void 0);
    let z = () => {
      g.default.track(L.AnalyticEvents.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: A.id,
        sku_id: N.id,
        area: "purchase_button"
      })
    };
    return (0, s.jsx)(b, {
      appName: A.name,
      title: N.name,
      description: W,
      link: "".concat(location.protocol, "//").concat(location.host).concat(L.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(A.id, D.ApplicationDirectoryProfileSections.STORE)),
      onLinkCopy: () => {
        (0, R.trackStorefrontLinkCopiedEvent)(A.id, R.StorefrontLinkCopiedArea.SKU_EMBED, c)
      },
      iconSrc: G,
      onIconClick: () => {
        Y(), g.default.track(L.AnalyticEvents.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
          application_id: A.id,
          sku_id: N.id,
          area: "app_icon"
        })
      },
      children: (0, s.jsxs)("div", {
        className: y.skuPurchaseButtons,
        children: [(0, s.jsx)(d.Button, {
          color: d.ButtonColors.CUSTOM,
          onClick: () => {
            K(), g.default.track(L.AnalyticEvents.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
              application_id: A.id,
              sku_id: N.id,
              area: "view_details"
            })
          },
          className: y.viewDetailsButton,
          children: P.default.Messages.STOREFRONT_DETAILS
        }), H ? null != F ? (0, s.jsx)(x.SubscriptionPurchaseButton, {
          appId: A.id,
          groupListingId: null == w ? void 0 : w.id,
          groupListingType: V ? "user" : "guild",
          skuId: N.id,
          subPlan: F,
          icon: (0, s.jsx)(o.ShopIcon, {
            height: 16,
            width: 16,
            color: "currentcolor"
          }),
          onHasClicked: z
        }) : (0, s.jsx)(I.default, {
          size: d.ButtonSizes.MEDIUM,
          onClick: K,
          children: P.default.Messages.STOREFRONT_SUBSCRIBE
        }) : (0, s.jsx)(x.ItemPurchaseButton, {
          appId: A.id,
          sku: N,
          icon: (0, s.jsx)(o.ShopIcon, {
            width: 16,
            height: 16,
            color: "currentcolor"
          }),
          onHasClicked: z
        })]
      })
    })
  });

function b(e) {
  let {
    appName: t,
    title: n,
    description: a,
    link: l,
    iconSrc: i,
    onIconClick: u,
    onLinkCopy: c,
    children: f
  } = e;
  return (0, s.jsxs)("div", {
    className: y.wrapper,
    children: [(0, s.jsxs)("div", {
      className: y.header,
      children: [(0, s.jsxs)("div", {
        className: y.headerTitle,
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
        "aria-label": P.default.Messages.COPY_LINK,
        onClick: () => {
          (0, A.copy)(l), (0, d.showToast)((0, d.createToast)(P.default.Messages.COPIED_LINK, d.ToastType.SUCCESS)), c()
        },
        children: (0, s.jsx)(r.LinkIcon, {
          width: 16,
          height: 16
        })
      })]
    }), (0, s.jsxs)("div", {
      className: y.content,
      children: [(0, s.jsxs)("div", {
        className: y.contentTextWrapper,
        children: [null != i && (0, s.jsx)(d.Button, {
          look: d.ButtonLooks.BLANK,
          size: d.ButtonSizes.NONE,
          onClick: u,
          children: (0, s.jsx)("img", {
            src: i.href,
            alt: "",
            className: y.appIcon
          })
        }), (0, s.jsxs)("div", {
          className: y.contentText,
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
            className: y.description,
            children: a
          })]
        })]
      }), f]
    })]
  })
}

function F(e) {
  return t => {
    let {
      enabled: n
    } = v.storefrontMessageEmbedExperiment.useExperiment({
      location: "AppStorefrontMessageEmbed"
    });
    return n ? (0, s.jsx)(e, {
      ...t
    }) : null
  }
}