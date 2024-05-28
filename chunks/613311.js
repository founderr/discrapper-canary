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
  _ = s("404133"),
  S = s("224336"),
  A = s("730749"),
  R = s("666743"),
  O = s("115130"),
  h = s("812206"),
  N = s("252618"),
  p = s("100159"),
  g = s("646288"),
  P = s("984370"),
  L = s("706454"),
  C = s("210887"),
  m = s("430824"),
  M = s("496675"),
  x = s("525395"),
  v = s("558314"),
  j = s("580130"),
  y = s("55563"),
  D = s("551428"),
  G = s("695103"),
  U = s("451478"),
  b = s("378720"),
  k = s("285952"),
  B = s("760397"),
  w = s("757698"),
  F = s("466111"),
  V = s("548420"),
  H = s("626135"),
  Y = s("572004"),
  z = s("630388"),
  K = s("937615"),
  W = s("73346"),
  q = s("3570"),
  X = s("689796"),
  J = s("15470"),
  Z = s("506648"),
  Q = s("449275"),
  $ = s("445986"),
  ee = s("119520"),
  et = s("450233"),
  es = s("726581"),
  en = s("74153"),
  ea = s("125930"),
  er = s("178071"),
  el = s("176055"),
  ei = s("843445"),
  eu = s("981631"),
  eo = s("186901"),
  ed = s("689938"),
  ec = s("725945");

function eI(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class eT extends a.PureComponent {
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
    } else this._analyticsSource = eu.DIRECT_ANALYTICS_LOCATION;
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
    if (i !== e.storeListing && null != i && (0, q.deepLinkRouteIfLandedAndNotAuthed)(eo.RPCDeepLinks.STORE_LISTING, {
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
    null != t && H.default.track(eu.AnalyticEvents.STORE_LISTING_EXITED, {
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
    H.default.track(eu.AnalyticEvents.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: n.loadId,
      has_description: null != t.description && t.description.length > 0,
      has_staff_review: null != t.staffNotes,
      carousel_image_count: a.images,
      carousel_video_count: a.videos,
      location: n.location.page,
      source: this._analyticsSource,
      ...(0, p.default)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: s,
      isAuthenticated: r
    } = this.props;
    return (0, n.jsx)(P.default, {
      isAuthenticated: r,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != s ? (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(P.default.Icon, {
          icon: V.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, n.jsx)(P.default.Title, {
          children: s.name
        })]
      }) : null != t && t.premium ? (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(P.default.Icon, {
          icon: F.default,
          "aria-label": ed.default.Messages.PREMIUM
        }), (0, n.jsx)(en.default, {
          sku: t
        })]
      }) : null != t ? (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(P.default.Icon, {
          icon: V.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, n.jsx)(P.default.Title, {
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
          type: eu.CarouselMediaTypes.VIDEO,
          thumbnailSrc: (0, W.getAssetURL)(e.id, t, 1024, "webp"),
          src: (0, W.getAssetURL)(e.id, t),
          height: n,
          width: s
        } : {
          type: eu.CarouselMediaTypes.IMG,
          src: (0, W.getAssetURL)(e.id, t, 1024),
          height: n,
          width: s
        }
      }
    }
    if (null != a) return {
      type: eu.CarouselMediaTypes.YOUTUBE_VIDEO,
      youtubeVideoId: a
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, s) {
    let {
      theme: a
    } = this.props, r = t.headerBackground, l = (0, o.isThemeLight)(a) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == r || null == l ? (0, n.jsx)("div", {
      className: ec.noHeaderSpacer
    }) : (0, n.jsxs)("div", {
      className: ec.headerAssets,
      children: [(0, n.jsx)("div", {
        className: ec.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, W.getAssetURL)(e.id, r, 1024, "png"), ")")
        }
      }), (0, n.jsx)("img", {
        className: ec.headerLogo,
        src: (0, W.getAssetURL)(e.id, l, 1024, "png"),
        alt: s.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, n.jsx)(es.default, {
      sku: e,
      storeListing: t,
      className: ec.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: s,
      pageSize: a
    } = this.props;
    return (0, n.jsx)(el.default, {
      skuId: t.id,
      guild: e.guild,
      className: ec.guildInvite,
      inChannel: null != s,
      pageSize: a
    })
  }
  renderFeatures(e) {
    return (0, n.jsx)(Z.default, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, n.jsx)(ea.default, {
      className: ec.systemRequirements,
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
      children: [(0, n.jsx)(b.default, {
        tag: "h1",
        children: ed.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: s.name
        })
      }), (0, n.jsx)(S.default, {}), (0, n.jsx)(J.default, {
        applicationId: e.id,
        blurb: t.summary,
        description: r,
        className: ec.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, n.jsx)(X.default, {
      sku: e,
      className: ec.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, n.jsx)(Q.default, {
      sku: e,
      className: ec.legalInfo
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
    null != r && a.push(r), null != t.headerLogoLightTheme && a.unshift((0, W.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
    let l = B.default.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
        image: B.default.Product.Image(a),
        sku: e.id
      }),
      i = e.getPrice();
    if (null != i) {
      let {
        amount: e,
        currency: t
      } = i;
      l.offers = B.default.Offer({
        priceCurrency: t.toUpperCase(),
        price: (0, K.formatPrice)(e, t, {
          style: "decimal"
        })
      })
    }
    let u = B.default.ItemPage({
      mainEntity: l
    });
    return (0, n.jsx)(B.default, {
      data: u
    })
  }
  renderSmall(e, t, s) {
    return (0, n.jsxs)("div", {
      className: l()(ec.listing, ec.listingSmall),
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
    })
  }
  renderLarge(e, t, s) {
    return (0, n.jsxs)("div", {
      className: ec.listing,
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), (0, n.jsx)("div", {
        className: ec.listingLarge,
        children: (0, n.jsxs)("div", {
          className: ec.body,
          children: [(0, n.jsxs)("div", {
            className: ec.leftColumn,
            children: [this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
          }), (0, n.jsxs)("div", {
            className: ec.rightColumn,
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
      children: [this.renderHeader(e, t), (0, n.jsx)(k.default, {
        align: k.default.Align.CENTER,
        justify: k.default.Justify.CENTER,
        children: (0, n.jsx)(d.Spinner, {
          className: ec.spinner
        })
      })]
    });
    if (!r && t.showAgeGate) {
      let s = l ? null : (0, n.jsx)("div", {
        className: ec.gatedListing,
        children: this.renderListing()
      });
      return (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(N.AppPageTitle, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, t), (0, n.jsx)(ee.default, {
          game: e
        }), s]
      })
    }
    return l ? (0, n.jsxs)("div", {
      className: ec.listingWrapper,
      children: [(0, n.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), (0, n.jsx)(f.default, {
        section: eu.AnalyticsSections.NAVIGATION,
        children: this.renderHeader(e, t)
      }), (0, n.jsx)(f.default, {
        section: eu.AnalyticsSections.BODY,
        children: this.renderListing()
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), eI(this, "showCopyLinkTextTimeout", new u.Timeout), eI(this, "_trackedViewed", !1), eI(this, "_analyticsSource", null), eI(this, "_extraAnalyticsProperties", null), eI(this, "state", {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }), eI(this, "trackCarouselScroll", (e, t, s) => {
      let {
        sku: n
      } = this.props;
      null != n && H.default.track(eu.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, p.default)(n),
        card_index: s,
        card_type: e.type === eu.CarouselMediaTypes.IMG ? "image" : "video"
      })
    }), eI(this, "copyCurrentUrl", () => {
      var e;
      let {
        location: t
      } = this.props;
      (0, Y.copy)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
        showLinkCopied: !0
      }, () => {
        this.showCopyLinkTextTimeout.start(1500, () => {
          this.setState({
            showLinkCopied: !1
          })
        })
      })
    }), eI(this, "handleCreateInstantInvite", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, d.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("43643"), s.e("7654"), s.e("61939")]).then(s.bind(s, "560114"));
        return s => (0, n.jsx)(a, {
          ...s,
          guild: t,
          channel: e,
          source: eu.InstantInviteSources.GUILD_CHANNELS
        })
      })
    }), eI(this, "renderInviteLink", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (M.default.can(eu.Permissions.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, n.jsx)(d.Button, {
        "aria-label": ed.default.Messages.CREATE_INSTANT_INVITE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: ec.link,
        children: (0, n.jsx)(w.default, {
          className: ec.linkIcon
        })
      }) : null
    }), eI(this, "renderCopyLink", () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, n.jsx)(d.Tooltip, {
        text: e ? ed.default.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: t => {
          let {
            onMouseEnter: s,
            onMouseLeave: a
          } = t;
          return (0, n.jsx)(d.Button, {
            "aria-label": e ? ed.default.Messages.APPLICATION_STORE_LINK_COPIED : ed.default.Messages.COPY_LINK,
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: s,
            onMouseLeave: a,
            className: ec.link,
            children: (0, n.jsx)(w.default, {
              className: ec.linkIcon
            })
          })
        }
      })
    }), eI(this, "renderHeaderToolbar", (e, t) => {
      let {
        isInTestMode: s,
        slug: a,
        storeListing: r,
        channel: i,
        analyticsContext: {
          location: u
        }
      } = this.props, {
        showHeaderPurchaseUnit: o
      } = this.state;
      return (0, n.jsxs)("div", {
        className: ec.headerBarListing,
        children: [(0, n.jsx)("div", {
          className: ec.headerSection,
          children: s && null != t ? (0, n.jsx)(er.default, {
            size: er.TestModeStoreListingButtonEnums.Sizes.MIN,
            dropdownSize: er.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
            look: er.TestModeStoreListingButtonEnums.Looks.OUTLINED,
            color: er.TestModeStoreListingButtonEnums.Colors.RED,
            skuId: t.id,
            className: ec.testModeSelectButton,
            currentStoreListingId: null != r ? r.id : null,
            onStoreListingSelect: e => {
              null != t && (0, E.goToSKUStoreListing)(t.id, {
                slug: a,
                analyticsSource: {
                  page: u.page,
                  section: eu.AnalyticsSections.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, n.jsx)("div", {
          className: ec.headerSection,
          children: (0, n.jsxs)("div", {
            className: l()(ec.headerPurchase, {
              [ec.active]: o
            }),
            children: [null != t ? (0, g.default)(t) : null, null != e && null != t ? (0, n.jsx)(_.default, {
              wrapperClassName: ec.headerActionButton,
              applicationId: e.id,
              skuId: t.id,
              color: d.Button.Colors.GREEN,
              size: d.Button.Sizes.SMALL,
              tooltipPosition: "bottom",
              entitlementBranchId: null != r ? r.entitlementBranchId : null,
              channelId: null != i ? i.id : null,
              onStoreListing: !0
            }) : null, (0, n.jsx)(et.default, {
              messageStyle: et.MessageStyles.SHORT,
              className: ec.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }), eI(this, "renderCarousel", (e, t) => {
      if (0 === t.carouselItems.length) return null;
      let {
        pageSize: s,
        isFocused: a
      } = this.props;
      return (0, n.jsx)(f.default, {
        section: eu.AnalyticsSections.HERO,
        children: (0, n.jsx)($.default, {
          pageSize: s,
          items: t.carouselItems.map(s => this.parseMediaItems(e, s, t.assets)),
          autoplayInterval: 8e3,
          paused: !a,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }), eI(this, "renderListing", () => {
      let {
        application: e,
        storeListing: t,
        sku: s,
        pageSize: a
      } = this.props;
      return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, n.jsx)(k.default, {
        align: k.default.Align.CENTER,
        justify: k.default.Justify.CENTER,
        children: (0, n.jsx)(d.Spinner, {})
      }) : a === ei.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
    })
  }
}
t.default = (0, A.default)((0, R.default)(i.default.connectStores([v.default, C.default, L.default, U.default, D.default, y.default, G.default, O.default, h.default, x.default, m.default, j.default], e => {
  let t, s, n, {
    inputSkuId: a,
    applicationId: r,
    storeListingId: l,
    isAuthenticated: i,
    channel: u
  } = e;
  if (null == r) {
    if (null == a) throw Error("Needs applicationId or skuId");
    t = a, null != (r = null != (s = y.default.get(a)) ? s.applicationId : null) && (n = h.default.getApplication(r))
  } else if (null == a) {
    if (null == r) throw Error("Needs applicationId or skuId");
    null != (n = h.default.getApplication(r)) && (t = n.destinationSkuId), s = null != t ? y.default.get(t) : null
  }(null == s ? void 0 : s.flags) != null && (0, z.hasFlag)(s.flags, eu.SKUFlags.STICKER_PACK) && (s = null);
  let o = null != r && (G.default.inTestModeForApplication(r) || O.default.inDevModeForApplication(r));
  return {
    skuId: t,
    application: null != r ? h.default.getApplication(r) : null,
    isFetchingEntitlements: null != r && j.default.applicationIdsFetching.has(r),
    didFetchEntitlements: null != r && j.default.applicationIdsFetched.has(r),
    shouldFetchStatistics: i && null != r && x.default.shouldFetchStatisticsForApplication(r),
    sku: s,
    isFocused: U.default.isFocused(),
    storeListing: D.default.getStoreListing({
      storeListingId: l,
      skuId: t,
      channelId: null != u ? u.id : null,
      isTestMode: o
    }),
    isInTestMode: null != r && o,
    matureAgree: v.default.didMatureAgree,
    theme: C.default.theme,
    locale: L.default.locale,
    guild: null != u ? m.default.getGuild(u.getGuildId()) : null
  }
})(eT)))