"use strict";
s.r(t), s("411104"), s("724458"), s("653041"), s("733860"), s("47120"), s("789020");
var n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  l = s.n(r),
  i = s("442837"),
  u = s("846519"),
  o = s("780384"),
  d = s("481060"),
  c = s("570140"),
  I = s("659429"),
  T = s("496929"),
  E = s("558381"),
  f = s("410575"),
  _ = s("224336"),
  S = s("730749"),
  A = s("666743"),
  O = s("115130"),
  R = s("812206"),
  N = s("252618"),
  h = s("100159"),
  p = s("646288"),
  g = s("984370"),
  P = s("706454"),
  L = s("210887"),
  C = s("430824"),
  m = s("496675"),
  M = s("525395"),
  x = s("558314"),
  v = s("580130"),
  j = s("55563"),
  y = s("551428"),
  D = s("695103"),
  G = s("451478"),
  U = s("378720"),
  b = s("285952"),
  k = s("760397"),
  B = s("757698"),
  w = s("466111"),
  F = s("548420"),
  V = s("626135"),
  H = s("572004"),
  Y = s("630388"),
  z = s("937615"),
  K = s("73346"),
  W = s("3570"),
  q = s("689796"),
  X = s("15470"),
  J = s("506648"),
  Z = s("449275"),
  Q = s("445986"),
  $ = s("119520"),
  ee = s("450233"),
  et = s("726581"),
  es = s("74153"),
  en = s("125930"),
  ea = s("178071"),
  er = s("176055"),
  el = s("843445"),
  ei = s("981631"),
  eu = s("186901"),
  eo = s("689938"),
  ed = s("725945");

function ec(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class eI extends a.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: t,
      isFetchingEntitlements: s,
      shouldFetchStatistics: n,
      didFetchEntitlements: a,
      location: r,
      fetchStoreListing: l
    } = this.props;
    if (null != r.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = r.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = t
    } else this._analyticsSource = ei.DIRECT_ANALYTICS_LOCATION;
    (null == t || t.isSlimDirectoryVersion()) && l(), null != e && (!s && !a && (0, T.fetchUserEntitlementsForApplication)(e.applicationId), n && c.default.wait(() => (0, I.fetchStatisticsForApplication)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: s,
      shouldFetchStatistics: n,
      skuId: a,
      storeListingId: r,
      slug: l,
      storeListing: i,
      fetchStoreListing: u
    } = this.props;
    if (i !== e.storeListing && null != i && (0, W.deepLinkRouteIfLandedAndNotAuthed)(eu.RPCDeepLinks.STORE_LISTING, {
        skuId: a,
        slug: l
      }), (t !== e.locale || a !== e.skuId) && u(), n && !e.shouldFetchStatistics) {
      if (null == s) throw Error("Unexpected missing sku");
      c.default.wait(() => (0, I.fetchStatisticsForApplication)(s.applicationId))
    }(a !== e.skuId || r !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: t
      }
    } = this.props;
    null != t && V.default.track(ei.AnalyticEvents.STORE_LISTING_EXITED, {
      load_id: e,
      duration_ms: Date.now() - t
    })
  }
  replaceUrlWithSlug() {}
  trackViewed() {
    let {
      sku: e,
      storeListing: t,
      hasFetchedNews: s,
      analyticsContext: n
    } = this.props;
    if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || s)) return;
    let a = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    V.default.track(ei.AnalyticEvents.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: n.loadId,
      has_description: null != t.description && t.description.length > 0,
      has_staff_review: null != t.staffNotes,
      carousel_image_count: a.images,
      carousel_video_count: a.videos,
      location: n.location.page,
      source: this._analyticsSource,
      ...(0, h.default)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: s,
      isAuthenticated: r
    } = this.props;
    return (0, n.jsx)(g.default, {
      isAuthenticated: r,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != s ? (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(g.default.Icon, {
          icon: F.default,
          "aria-label": eo.default.Messages.STORE_CHANNEL
        }), (0, n.jsx)(g.default.Title, {
          children: s.name
        })]
      }) : null != t && t.premium ? (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(g.default.Icon, {
          icon: w.default,
          "aria-label": eo.default.Messages.PREMIUM
        }), (0, n.jsx)(es.default, {
          sku: t
        })]
      }) : null != t ? (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(g.default.Icon, {
          icon: F.default,
          "aria-label": eo.default.Messages.STORE_CHANNEL
        }), (0, n.jsx)(g.default.Title, {
          children: t.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, t, s) {
    let {
      assetId: n,
      youtubeVideoId: a
    } = t;
    if (null != n) {
      let t = s.find(e => e.id === n);
      if (null != t) {
        let {
          width: s,
          height: n
        } = t;
        if (null == s || null == n) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
        return t.mimeType.startsWith("video/") ? {
          type: ei.CarouselMediaTypes.VIDEO,
          thumbnailSrc: (0, K.getAssetURL)(e.id, t, 1024, "webp"),
          src: (0, K.getAssetURL)(e.id, t),
          height: n,
          width: s
        } : {
          type: ei.CarouselMediaTypes.IMG,
          src: (0, K.getAssetURL)(e.id, t, 1024),
          height: n,
          width: s
        }
      }
    }
    if (null != a) return {
      type: ei.CarouselMediaTypes.YOUTUBE_VIDEO,
      youtubeVideoId: a
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, s) {
    let {
      theme: a
    } = this.props, r = t.headerBackground, l = (0, o.isThemeLight)(a) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == r || null == l ? (0, n.jsx)("div", {
      className: ed.noHeaderSpacer
    }) : (0, n.jsxs)("div", {
      className: ed.headerAssets,
      children: [(0, n.jsx)("div", {
        className: ed.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, K.getAssetURL)(e.id, r, 1024, "png"), ")")
        }
      }), (0, n.jsx)("img", {
        className: ed.headerLogo,
        src: (0, K.getAssetURL)(e.id, l, 1024, "png"),
        alt: s.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, n.jsx)(et.default, {
      sku: e,
      storeListing: t,
      className: ed.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: s,
      pageSize: a
    } = this.props;
    return (0, n.jsx)(er.default, {
      skuId: t.id,
      guild: e.guild,
      className: ed.guildInvite,
      inChannel: null != s,
      pageSize: a
    })
  }
  renderFeatures(e) {
    return (0, n.jsx)(J.default, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, n.jsx)(en.default, {
      className: ed.systemRequirements,
      systemRequirements: e.systemRequirements,
      pageSize: this.props.pageSize
    })
  }
  renderDescription(e, t, s) {
    let {
      description: r
    } = t;
    if (null == r) throw Error("Rendering ApplicationStoreListing without description");
    return (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(U.default, {
        tag: "h1",
        children: eo.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: s.name
        })
      }), (0, n.jsx)(_.default, {}), (0, n.jsx)(X.default, {
        applicationId: e.id,
        blurb: t.summary,
        description: r,
        className: ed.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, n.jsx)(q.default, {
      sku: e,
      className: ed.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, n.jsx)(Z.default, {
      sku: e,
      className: ed.legalInfo
    })
  }
  renderJsonLD() {
    let {
      sku: e,
      storeListing: t,
      application: s
    } = this.props;
    if (null == e || null == t || null == s) return null;
    let a = [],
      r = s.getSplashURL(1024);
    null != r && a.push(r), null != t.headerLogoLightTheme && a.unshift((0, K.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
    let l = k.default.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
        image: k.default.Product.Image(a),
        sku: e.id
      }),
      i = e.getPrice();
    if (null != i) {
      let {
        amount: e,
        currency: t
      } = i;
      l.offers = k.default.Offer({
        priceCurrency: t.toUpperCase(),
        price: (0, z.formatPrice)(e, t, {
          style: "decimal"
        })
      })
    }
    let u = k.default.ItemPage({
      mainEntity: l
    });
    return (0, n.jsx)(k.default, {
      data: u
    })
  }
  renderSmall(e, t, s) {
    return (0, n.jsxs)("div", {
      className: l()(ed.listing, ed.listingSmall),
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
    })
  }
  renderLarge(e, t, s) {
    return (0, n.jsxs)("div", {
      className: ed.listing,
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), (0, n.jsx)("div", {
        className: ed.listingLarge,
        children: (0, n.jsxs)("div", {
          className: ed.body,
          children: [(0, n.jsxs)("div", {
            className: ed.leftColumn,
            children: [this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
          }), (0, n.jsxs)("div", {
            className: ed.rightColumn,
            children: [this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s)]
          })]
        })
      })]
    })
  }
  render() {
    let {
      application: e,
      sku: t,
      storeListing: s,
      matureAgree: r,
      isAuthenticated: l
    } = this.props;
    if (null == e || null == t || null == s || s.isSlimDirectoryVersion()) return (0, n.jsxs)(a.Fragment, {
      children: [this.renderHeader(e, t), (0, n.jsx)(b.default, {
        align: b.default.Align.CENTER,
        justify: b.default.Justify.CENTER,
        children: (0, n.jsx)(d.Spinner, {
          className: ed.spinner
        })
      })]
    });
    if (!r && t.showAgeGate) {
      let s = l ? null : (0, n.jsx)("div", {
        className: ed.gatedListing,
        children: this.renderListing()
      });
      return (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(N.AppPageTitle, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, t), (0, n.jsx)($.default, {
          game: e
        }), s]
      })
    }
    return l ? (0, n.jsxs)("div", {
      className: ed.listingWrapper,
      children: [(0, n.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), (0, n.jsx)(f.default, {
        section: ei.AnalyticsSections.NAVIGATION,
        children: this.renderHeader(e, t)
      }), (0, n.jsx)(f.default, {
        section: ei.AnalyticsSections.BODY,
        children: this.renderListing()
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), ec(this, "showCopyLinkTextTimeout", new u.Timeout), ec(this, "_trackedViewed", !1), ec(this, "_analyticsSource", null), ec(this, "_extraAnalyticsProperties", null), ec(this, "state", {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }), ec(this, "trackCarouselScroll", (e, t, s) => {
      let {
        sku: n
      } = this.props;
      null != n && V.default.track(ei.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, h.default)(n),
        card_index: s,
        card_type: e.type === ei.CarouselMediaTypes.IMG ? "image" : "video"
      })
    }), ec(this, "copyCurrentUrl", () => {
      var e;
      let {
        location: t
      } = this.props;
      (0, H.copy)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
        showLinkCopied: !0
      }, () => {
        this.showCopyLinkTextTimeout.start(1500, () => {
          this.setState({
            showLinkCopied: !1
          })
        })
      })
    }), ec(this, "handleCreateInstantInvite", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, d.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("43643"), s.e("7654"), s.e("92893")]).then(s.bind(s, "560114"));
        return s => (0, n.jsx)(a, {
          ...s,
          guild: t,
          channel: e,
          source: ei.InstantInviteSources.GUILD_CHANNELS
        })
      })
    }), ec(this, "renderInviteLink", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (m.default.can(ei.Permissions.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, n.jsx)(d.Button, {
        "aria-label": eo.default.Messages.CREATE_INSTANT_INVITE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: ed.link,
        children: (0, n.jsx)(B.default, {
          className: ed.linkIcon
        })
      }) : null
    }), ec(this, "renderCopyLink", () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, n.jsx)(d.Tooltip, {
        text: e ? eo.default.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: t => {
          let {
            onMouseEnter: s,
            onMouseLeave: a
          } = t;
          return (0, n.jsx)(d.Button, {
            "aria-label": e ? eo.default.Messages.APPLICATION_STORE_LINK_COPIED : eo.default.Messages.COPY_LINK,
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: s,
            onMouseLeave: a,
            className: ed.link,
            children: (0, n.jsx)(B.default, {
              className: ed.linkIcon
            })
          })
        }
      })
    }), ec(this, "renderHeaderToolbar", (e, t) => {
      let {
        isInTestMode: s,
        slug: a,
        storeListing: r,
        analyticsContext: {
          location: i
        }
      } = this.props, {
        showHeaderPurchaseUnit: u
      } = this.state;
      return (0, n.jsxs)("div", {
        className: ed.headerBarListing,
        children: [(0, n.jsx)("div", {
          className: ed.headerSection,
          children: s && null != t ? (0, n.jsx)(ea.default, {
            size: ea.TestModeStoreListingButtonEnums.Sizes.MIN,
            dropdownSize: ea.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
            look: ea.TestModeStoreListingButtonEnums.Looks.OUTLINED,
            color: ea.TestModeStoreListingButtonEnums.Colors.RED,
            skuId: t.id,
            className: ed.testModeSelectButton,
            currentStoreListingId: null != r ? r.id : null,
            onStoreListingSelect: e => {
              null != t && (0, E.goToSKUStoreListing)(t.id, {
                slug: a,
                analyticsSource: {
                  page: i.page,
                  section: ei.AnalyticsSections.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, n.jsx)("div", {
          className: ed.headerSection,
          children: (0, n.jsxs)("div", {
            className: l()(ed.headerPurchase, {
              [ed.active]: u
            }),
            children: [null != t ? (0, p.default)(t) : null, null != e && null != t ? (0, n.jsx)("div", {
              children: "deprecated!"
            }) : null, (0, n.jsx)(ee.default, {
              messageStyle: ee.MessageStyles.SHORT,
              className: ed.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }), ec(this, "renderCarousel", (e, t) => {
      if (0 === t.carouselItems.length) return null;
      let {
        pageSize: s,
        isFocused: a
      } = this.props;
      return (0, n.jsx)(f.default, {
        section: ei.AnalyticsSections.HERO,
        children: (0, n.jsx)(Q.default, {
          pageSize: s,
          items: t.carouselItems.map(s => this.parseMediaItems(e, s, t.assets)),
          autoplayInterval: 8e3,
          paused: !a,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }), ec(this, "renderListing", () => {
      let {
        application: e,
        storeListing: t,
        sku: s,
        pageSize: a
      } = this.props;
      return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, n.jsx)(b.default, {
        align: b.default.Align.CENTER,
        justify: b.default.Justify.CENTER,
        children: (0, n.jsx)(d.Spinner, {})
      }) : a === el.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
    })
  }
}
t.default = (0, S.default)((0, A.default)(i.default.connectStores([x.default, L.default, P.default, G.default, y.default, j.default, D.default, O.default, R.default, M.default, C.default, v.default], e => {
  let t, s, n, {
    inputSkuId: a,
    applicationId: r,
    storeListingId: l,
    isAuthenticated: i,
    channel: u
  } = e;
  if (null == r) {
    if (null == a) throw Error("Needs applicationId or skuId");
    t = a, null != (r = null != (s = j.default.get(a)) ? s.applicationId : null) && (n = R.default.getApplication(r))
  } else if (null == a) {
    if (null == r) throw Error("Needs applicationId or skuId");
    null != (n = R.default.getApplication(r)) && (t = n.destinationSkuId), s = null != t ? j.default.get(t) : null
  }(null == s ? void 0 : s.flags) != null && (0, Y.hasFlag)(s.flags, ei.SKUFlags.STICKER_PACK) && (s = null);
  let o = null != r && (D.default.inTestModeForApplication(r) || O.default.inDevModeForApplication(r));
  return {
    skuId: t,
    application: null != r ? R.default.getApplication(r) : null,
    isFetchingEntitlements: null != r && v.default.applicationIdsFetching.has(r),
    didFetchEntitlements: null != r && v.default.applicationIdsFetched.has(r),
    shouldFetchStatistics: i && null != r && M.default.shouldFetchStatisticsForApplication(r),
    sku: s,
    isFocused: G.default.isFocused(),
    storeListing: y.default.getStoreListing({
      storeListingId: l,
      skuId: t,
      channelId: null != u ? u.id : null,
      isTestMode: o
    }),
    isInTestMode: null != r && o,
    matureAgree: x.default.didMatureAgree,
    theme: L.default.theme,
    locale: P.default.locale,
    guild: null != u ? C.default.getGuild(u.getGuildId()) : null
  }
})(eI)))