"use strict";
s.r(t), s("411104"), s("724458"), s("653041"), s("733860"), s("47120"), s("789020");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("846519"),
  u = s("780384"),
  d = s("481060"),
  c = s("570140"),
  _ = s("659429"),
  E = s("496929"),
  T = s("558381"),
  I = s("410575"),
  R = s("224336"),
  f = s("730749"),
  S = s("666743"),
  A = s("115130"),
  m = s("812206"),
  N = s("252618"),
  p = s("100159"),
  g = s("646288"),
  C = s("984370"),
  P = s("706454"),
  O = s("210887"),
  M = s("430824"),
  h = s("496675"),
  L = s("525395"),
  x = s("558314"),
  v = s("580130"),
  D = s("55563"),
  b = s("551428"),
  U = s("695103"),
  j = s("451478"),
  G = s("378720"),
  B = s("285952"),
  y = s("760397"),
  k = s("757698"),
  H = s("466111"),
  F = s("548420"),
  w = s("626135"),
  W = s("572004"),
  K = s("630388"),
  V = s("937615"),
  Y = s("73346"),
  z = s("3570"),
  X = s("689796"),
  Q = s("15470"),
  J = s("506648"),
  Z = s("449275"),
  q = s("445986"),
  $ = s("119520"),
  ee = s("450233"),
  et = s("726581"),
  es = s("74153"),
  ea = s("125930"),
  er = s("178071"),
  ei = s("176055"),
  en = s("843445"),
  el = s("981631"),
  eo = s("186901"),
  eu = s("689938"),
  ed = s("725945");

function ec(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class e_ extends r.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: t,
      isFetchingEntitlements: s,
      shouldFetchStatistics: a,
      didFetchEntitlements: r,
      location: i,
      fetchStoreListing: n
    } = this.props;
    if (null != i.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = i.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = t
    } else this._analyticsSource = el.DIRECT_ANALYTICS_LOCATION;
    (null == t || t.isSlimDirectoryVersion()) && n(), null != e && (!s && !r && (0, E.fetchUserEntitlementsForApplication)(e.applicationId), a && c.default.wait(() => (0, _.fetchStatisticsForApplication)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: s,
      shouldFetchStatistics: a,
      skuId: r,
      storeListingId: i,
      slug: n,
      storeListing: l,
      fetchStoreListing: o
    } = this.props;
    if (l !== e.storeListing && null != l && (0, z.deepLinkRouteIfLandedAndNotAuthed)(eo.RPCDeepLinks.STORE_LISTING, {
        skuId: r,
        slug: n
      }), (t !== e.locale || r !== e.skuId) && o(), a && !e.shouldFetchStatistics) {
      if (null == s) throw Error("Unexpected missing sku");
      c.default.wait(() => (0, _.fetchStatisticsForApplication)(s.applicationId))
    }(r !== e.skuId || i !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: t
      }
    } = this.props;
    null != t && w.default.track(el.AnalyticEvents.STORE_LISTING_EXITED, {
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
      analyticsContext: a
    } = this.props;
    if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || s)) return;
    let r = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    w.default.track(el.AnalyticEvents.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: a.loadId,
      has_description: null != t.description && t.description.length > 0,
      has_staff_review: null != t.staffNotes,
      carousel_image_count: r.images,
      carousel_video_count: r.videos,
      location: a.location.page,
      source: this._analyticsSource,
      ...(0, p.default)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: s,
      isAuthenticated: i
    } = this.props;
    return (0, a.jsx)(C.default, {
      isAuthenticated: i,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != s ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(C.default.Icon, {
          icon: F.default,
          "aria-label": eu.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(C.default.Title, {
          children: s.name
        })]
      }) : null != t && t.premium ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(C.default.Icon, {
          icon: H.default,
          "aria-label": eu.default.Messages.PREMIUM
        }), (0, a.jsx)(es.default, {
          sku: t
        })]
      }) : null != t ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(C.default.Icon, {
          icon: F.default,
          "aria-label": eu.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(C.default.Title, {
          children: t.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, t, s) {
    let {
      assetId: a,
      youtubeVideoId: r
    } = t;
    if (null != a) {
      let t = s.find(e => e.id === a);
      if (null != t) {
        let {
          width: s,
          height: a
        } = t;
        if (null == s || null == a) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
        return t.mimeType.startsWith("video/") ? {
          type: el.CarouselMediaTypes.VIDEO,
          thumbnailSrc: (0, Y.getAssetURL)(e.id, t, 1024, "webp"),
          src: (0, Y.getAssetURL)(e.id, t),
          height: a,
          width: s
        } : {
          type: el.CarouselMediaTypes.IMG,
          src: (0, Y.getAssetURL)(e.id, t, 1024),
          height: a,
          width: s
        }
      }
    }
    if (null != r) return {
      type: el.CarouselMediaTypes.YOUTUBE_VIDEO,
      youtubeVideoId: r
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, s) {
    let {
      theme: r
    } = this.props, i = t.headerBackground, n = (0, u.isThemeLight)(r) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == i || null == n ? (0, a.jsx)("div", {
      className: ed.noHeaderSpacer
    }) : (0, a.jsxs)("div", {
      className: ed.headerAssets,
      children: [(0, a.jsx)("div", {
        className: ed.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, Y.getAssetURL)(e.id, i, 1024, "png"), ")")
        }
      }), (0, a.jsx)("img", {
        className: ed.headerLogo,
        src: (0, Y.getAssetURL)(e.id, n, 1024, "png"),
        alt: s.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, a.jsx)(et.default, {
      sku: e,
      storeListing: t,
      className: ed.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: s,
      pageSize: r
    } = this.props;
    return (0, a.jsx)(ei.default, {
      skuId: t.id,
      guild: e.guild,
      className: ed.guildInvite,
      inChannel: null != s,
      pageSize: r
    })
  }
  renderFeatures(e) {
    return (0, a.jsx)(J.default, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, a.jsx)(ea.default, {
      className: ed.systemRequirements,
      systemRequirements: e.systemRequirements,
      pageSize: this.props.pageSize
    })
  }
  renderDescription(e, t, s) {
    let {
      description: i
    } = t;
    if (null == i) throw Error("Rendering ApplicationStoreListing without description");
    return (0, a.jsxs)(r.Fragment, {
      children: [(0, a.jsx)(G.default, {
        tag: "h1",
        children: eu.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: s.name
        })
      }), (0, a.jsx)(R.default, {}), (0, a.jsx)(Q.default, {
        applicationId: e.id,
        blurb: t.summary,
        description: i,
        className: ed.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, a.jsx)(X.default, {
      sku: e,
      className: ed.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, a.jsx)(Z.default, {
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
    let r = [],
      i = s.getSplashURL(1024);
    null != i && r.push(i), null != t.headerLogoLightTheme && r.unshift((0, Y.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
    let n = y.default.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
        image: y.default.Product.Image(r),
        sku: e.id
      }),
      l = e.getPrice();
    if (null != l) {
      let {
        amount: e,
        currency: t
      } = l;
      n.offers = y.default.Offer({
        priceCurrency: t.toUpperCase(),
        price: (0, V.formatPrice)(e, t, {
          style: "decimal"
        })
      })
    }
    let o = y.default.ItemPage({
      mainEntity: n
    });
    return (0, a.jsx)(y.default, {
      data: o
    })
  }
  renderSmall(e, t, s) {
    return (0, a.jsxs)("div", {
      className: n()(ed.listing, ed.listingSmall),
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
    })
  }
  renderLarge(e, t, s) {
    return (0, a.jsxs)("div", {
      className: ed.listing,
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), (0, a.jsx)("div", {
        className: ed.listingLarge,
        children: (0, a.jsxs)("div", {
          className: ed.body,
          children: [(0, a.jsxs)("div", {
            className: ed.leftColumn,
            children: [this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
          }), (0, a.jsxs)("div", {
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
      matureAgree: i,
      isAuthenticated: n
    } = this.props;
    if (null == e || null == t || null == s || s.isSlimDirectoryVersion()) return (0, a.jsxs)(r.Fragment, {
      children: [this.renderHeader(e, t), (0, a.jsx)(B.default, {
        align: B.default.Align.CENTER,
        justify: B.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {
          className: ed.spinner
        })
      })]
    });
    if (!i && t.showAgeGate) {
      let s = n ? null : (0, a.jsx)("div", {
        className: ed.gatedListing,
        children: this.renderListing()
      });
      return (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(N.AppPageTitle, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, t), (0, a.jsx)($.default, {
          game: e
        }), s]
      })
    }
    return n ? (0, a.jsxs)("div", {
      className: ed.listingWrapper,
      children: [(0, a.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), (0, a.jsx)(I.default, {
        section: el.AnalyticsSections.NAVIGATION,
        children: this.renderHeader(e, t)
      }), (0, a.jsx)(I.default, {
        section: el.AnalyticsSections.BODY,
        children: this.renderListing()
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), ec(this, "showCopyLinkTextTimeout", new o.Timeout), ec(this, "_trackedViewed", !1), ec(this, "_analyticsSource", null), ec(this, "_extraAnalyticsProperties", null), ec(this, "state", {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }), ec(this, "trackCarouselScroll", (e, t, s) => {
      let {
        sku: a
      } = this.props;
      null != a && w.default.track(el.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, p.default)(a),
        card_index: s,
        card_type: e.type === el.CarouselMediaTypes.IMG ? "image" : "video"
      })
    }), ec(this, "copyCurrentUrl", () => {
      var e;
      let {
        location: t
      } = this.props;
      (0, W.copy)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
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
          default: r
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("43643"), s.e("7654"), s.e("92893")]).then(s.bind(s, "560114"));
        return s => (0, a.jsx)(r, {
          ...s,
          guild: t,
          channel: e,
          source: el.InstantInviteSources.GUILD_CHANNELS
        })
      })
    }), ec(this, "renderInviteLink", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (h.default.can(el.Permissions.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, a.jsx)(d.Button, {
        "aria-label": eu.default.Messages.CREATE_INSTANT_INVITE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: ed.link,
        children: (0, a.jsx)(k.default, {
          className: ed.linkIcon
        })
      }) : null
    }), ec(this, "renderCopyLink", () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, a.jsx)(d.Tooltip, {
        text: e ? eu.default.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: t => {
          let {
            onMouseEnter: s,
            onMouseLeave: r
          } = t;
          return (0, a.jsx)(d.Button, {
            "aria-label": e ? eu.default.Messages.APPLICATION_STORE_LINK_COPIED : eu.default.Messages.COPY_LINK,
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: s,
            onMouseLeave: r,
            className: ed.link,
            children: (0, a.jsx)(k.default, {
              className: ed.linkIcon
            })
          })
        }
      })
    }), ec(this, "renderHeaderToolbar", (e, t) => {
      let {
        isInTestMode: s,
        slug: r,
        storeListing: i,
        analyticsContext: {
          location: l
        }
      } = this.props, {
        showHeaderPurchaseUnit: o
      } = this.state;
      return (0, a.jsxs)("div", {
        className: ed.headerBarListing,
        children: [(0, a.jsx)("div", {
          className: ed.headerSection,
          children: s && null != t ? (0, a.jsx)(er.default, {
            size: er.TestModeStoreListingButtonEnums.Sizes.MIN,
            dropdownSize: er.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
            look: er.TestModeStoreListingButtonEnums.Looks.OUTLINED,
            color: er.TestModeStoreListingButtonEnums.Colors.RED,
            skuId: t.id,
            className: ed.testModeSelectButton,
            currentStoreListingId: null != i ? i.id : null,
            onStoreListingSelect: e => {
              null != t && (0, T.goToSKUStoreListing)(t.id, {
                slug: r,
                analyticsSource: {
                  page: l.page,
                  section: el.AnalyticsSections.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, a.jsx)("div", {
          className: ed.headerSection,
          children: (0, a.jsxs)("div", {
            className: n()(ed.headerPurchase, {
              [ed.active]: o
            }),
            children: [null != t ? (0, g.default)(t) : null, null != e && null != t ? (0, a.jsx)("div", {
              children: "deprecated!"
            }) : null, (0, a.jsx)(ee.default, {
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
        isFocused: r
      } = this.props;
      return (0, a.jsx)(I.default, {
        section: el.AnalyticsSections.HERO,
        children: (0, a.jsx)(q.default, {
          pageSize: s,
          items: t.carouselItems.map(s => this.parseMediaItems(e, s, t.assets)),
          autoplayInterval: 8e3,
          paused: !r,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }), ec(this, "renderListing", () => {
      let {
        application: e,
        storeListing: t,
        sku: s,
        pageSize: r
      } = this.props;
      return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, a.jsx)(B.default, {
        align: B.default.Align.CENTER,
        justify: B.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {})
      }) : r === en.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
    })
  }
}
t.default = (0, f.default)((0, S.default)(l.default.connectStores([x.default, O.default, P.default, j.default, b.default, D.default, U.default, A.default, m.default, L.default, M.default, v.default], e => {
  let t, s, a, {
    inputSkuId: r,
    applicationId: i,
    storeListingId: n,
    isAuthenticated: l,
    channel: o
  } = e;
  if (null == i) {
    if (null == r) throw Error("Needs applicationId or skuId");
    t = r, null != (i = null != (s = D.default.get(r)) ? s.applicationId : null) && (a = m.default.getApplication(i))
  } else if (null == r) {
    if (null == i) throw Error("Needs applicationId or skuId");
    null != (a = m.default.getApplication(i)) && (t = a.destinationSkuId), s = null != t ? D.default.get(t) : null
  }(null == s ? void 0 : s.flags) != null && (0, K.hasFlag)(s.flags, el.SKUFlags.STICKER_PACK) && (s = null);
  let u = null != i && (U.default.inTestModeForApplication(i) || A.default.inDevModeForApplication(i));
  return {
    skuId: t,
    application: null != i ? m.default.getApplication(i) : null,
    isFetchingEntitlements: null != i && v.default.applicationIdsFetching.has(i),
    didFetchEntitlements: null != i && v.default.applicationIdsFetched.has(i),
    shouldFetchStatistics: l && null != i && L.default.shouldFetchStatisticsForApplication(i),
    sku: s,
    isFocused: j.default.isFocused(),
    storeListing: b.default.getStoreListing({
      storeListingId: n,
      skuId: t,
      channelId: null != o ? o.id : null,
      isTestMode: u
    }),
    isInTestMode: null != i && u,
    matureAgree: x.default.didMatureAgree,
    theme: O.default.theme,
    locale: P.default.locale,
    guild: null != o ? M.default.getGuild(o.getGuildId()) : null
  }
})(e_)))