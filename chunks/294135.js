"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eE
  }
}), s("70102"), s("808653"), s("424973"), s("843762"), s("222007"), s("702976");
var a = s("37983"),
  i = s("884691"),
  r = s("414456"),
  n = s.n(r),
  l = s("446674"),
  o = s("862337"),
  u = s("819855"),
  d = s("77078"),
  c = s("913144"),
  _ = s("599560"),
  E = s("316718"),
  I = s("55620"),
  T = s("901582"),
  f = s("790219"),
  S = s("151540"),
  R = s("86621"),
  m = s("984376"),
  A = s("84460"),
  p = s("299285"),
  N = s("69927"),
  g = s("791160"),
  C = s("661579"),
  P = s("539938"),
  O = s("915639"),
  M = s("161778"),
  h = s("305961"),
  L = s("957255"),
  x = s("71010"),
  v = s("290877"),
  D = s("437712"),
  b = s("552712"),
  U = s("698041"),
  j = s("167726"),
  G = s("471671"),
  k = s("895530"),
  B = s("145131"),
  y = s("519311"),
  H = s("83900"),
  K = s("216422"),
  F = s("547896"),
  W = s("599110"),
  w = s("306160"),
  V = s("568734"),
  Y = s("153160"),
  z = s("271560"),
  Q = s("778043"),
  X = s("128430"),
  Z = s("824021"),
  J = s("542480"),
  q = s("308518"),
  $ = s("590177"),
  ee = s("704861"),
  et = s("503278"),
  es = s("23985"),
  ea = s("572158"),
  ei = s("374266"),
  er = s("951765"),
  en = s("729199"),
  el = s("75576"),
  eo = s("49111"),
  eu = s("492249"),
  ed = s("782340"),
  ec = s("434576");
class e_ extends i.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: t,
      isFetchingEntitlements: s,
      shouldFetchStatistics: a,
      didFetchEntitlements: i,
      location: r,
      fetchStoreListing: n
    } = this.props;
    if (null != r.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = r.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = t
    } else this._analyticsSource = eo.DIRECT_ANALYTICS_LOCATION;
    (null == t || t.isSlimDirectoryVersion()) && n(), null != e && (!s && !i && (0, E.fetchUserEntitlementsForApplication)(e.applicationId), a && c.default.wait(() => (0, _.fetchStatisticsForApplication)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: s,
      shouldFetchStatistics: a,
      skuId: i,
      storeListingId: r,
      slug: n,
      storeListing: l,
      fetchStoreListing: o
    } = this.props;
    if (l !== e.storeListing && null != l && (0, Q.deepLinkRouteIfLandedAndNotAuthed)(eu.RPCDeepLinks.STORE_LISTING, {
        skuId: i,
        slug: n
      }), (t !== e.locale || i !== e.skuId) && o(), a && !e.shouldFetchStatistics) {
      if (null == s) throw Error("Unexpected missing sku");
      c.default.wait(() => (0, _.fetchStatisticsForApplication)(s.applicationId))
    }(i !== e.skuId || r !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: t
      }
    } = this.props;
    null != t && W.default.track(eo.AnalyticEvents.STORE_LISTING_EXITED, {
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
    let i = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    W.default.track(eo.AnalyticEvents.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: a.loadId,
      has_description: null != t.description && t.description.length > 0,
      has_staff_review: null != t.staffNotes,
      carousel_image_count: i.images,
      carousel_video_count: i.videos,
      location: a.location.page,
      source: this._analyticsSource,
      ...(0, g.default)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: s,
      isAuthenticated: r
    } = this.props;
    return (0, a.jsx)(P.default, {
      isAuthenticated: r,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != s ? (0, a.jsxs)(i.Fragment, {
        children: [(0, a.jsx)(P.default.Icon, {
          icon: F.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(P.default.Title, {
          children: s.name
        })]
      }) : null != t && t.premium ? (0, a.jsxs)(i.Fragment, {
        children: [(0, a.jsx)(P.default.Icon, {
          icon: K.default,
          "aria-label": ed.default.Messages.PREMIUM
        }), (0, a.jsx)(ea.default, {
          sku: t
        })]
      }) : null != t ? (0, a.jsxs)(i.Fragment, {
        children: [(0, a.jsx)(P.default.Icon, {
          icon: F.default,
          "aria-label": ed.default.Messages.STORE_CHANNEL
        }), (0, a.jsx)(P.default.Title, {
          children: t.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, t, s) {
    let {
      assetId: a,
      youtubeVideoId: i
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
          type: eo.CarouselMediaTypes.VIDEO,
          thumbnailSrc: (0, z.getAssetURL)(e.id, t, 1024, "webp"),
          src: (0, z.getAssetURL)(e.id, t),
          height: a,
          width: s
        } : {
          type: eo.CarouselMediaTypes.IMG,
          src: (0, z.getAssetURL)(e.id, t, 1024),
          height: a,
          width: s
        }
      }
    }
    if (null != i) return {
      type: eo.CarouselMediaTypes.YOUTUBE_VIDEO,
      youtubeVideoId: i
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, s) {
    let {
      theme: i
    } = this.props, r = t.headerBackground, n = (0, u.isThemeLight)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == r || null == n ? (0, a.jsx)("div", {
      className: ec.noHeaderSpacer
    }) : (0, a.jsxs)("div", {
      className: ec.headerAssets,
      children: [(0, a.jsx)("div", {
        className: ec.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, z.getAssetURL)(e.id, r, 1024, "png"), ")")
        }
      }), (0, a.jsx)("img", {
        className: ec.headerLogo,
        src: (0, z.getAssetURL)(e.id, n, 1024, "png"),
        alt: s.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, a.jsx)(es.default, {
      sku: e,
      storeListing: t,
      className: ec.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: s,
      pageSize: i
    } = this.props;
    return (0, a.jsx)(en.default, {
      skuId: t.id,
      guild: e.guild,
      className: ec.guildInvite,
      inChannel: null != s,
      pageSize: i
    })
  }
  renderFeatures(e) {
    return (0, a.jsx)(J.default, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, a.jsx)(ei.default, {
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
    return (0, a.jsxs)(i.Fragment, {
      children: [(0, a.jsx)(k.default, {
        tag: "h1",
        children: ed.default.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: s.name
        })
      }), (0, a.jsx)(S.default, {}), (0, a.jsx)(Z.default, {
        applicationId: e.id,
        blurb: t.summary,
        description: r,
        className: ec.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, a.jsx)(X.default, {
      sku: e,
      className: ec.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, a.jsx)(q.default, {
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
    let i = [],
      r = s.getSplashURL(1024);
    null != r && i.push(r), null != t.headerLogoLightTheme && i.unshift((0, z.getAssetURL)(s.id, t.headerLogoLightTheme, 1024, "jpg"));
    let n = y.default.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
        image: y.default.Product.Image(i),
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
        price: (0, Y.formatPrice)(e, t, {
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
      className: n(ec.listing, ec.listingSmall),
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderVerifiedGuildInvite(t, s), this.renderFeatures(s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
    })
  }
  renderLarge(e, t, s) {
    return (0, a.jsxs)("div", {
      className: ec.listing,
      children: [this.renderHeaderAssets(e, t, s), this.renderCarousel(e, t), (0, a.jsx)("div", {
        className: ec.listingLarge,
        children: (0, a.jsxs)("div", {
          className: ec.body,
          children: [(0, a.jsxs)("div", {
            className: ec.leftColumn,
            children: [this.renderWhyYouMightLikeThis(s, t), this.renderDescription(e, t, s), this.renderSystemRequirements(s), this.renderApplicationContentRating(s), this.renderApplicationLegalInfo(s)]
          }), (0, a.jsxs)("div", {
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
      isAuthenticated: n
    } = this.props;
    if (null == e || null == t || null == s || s.isSlimDirectoryVersion()) return (0, a.jsxs)(i.Fragment, {
      children: [this.renderHeader(e, t), (0, a.jsx)(B.default, {
        align: B.default.Align.CENTER,
        justify: B.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {
          className: ec.spinner
        })
      })]
    });
    if (!r && t.showAgeGate) {
      let s = n ? null : (0, a.jsx)("div", {
        className: ec.gatedListing,
        children: this.renderListing()
      });
      return (0, a.jsxs)(i.Fragment, {
        children: [(0, a.jsx)(N.AppPageTitle, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, t), (0, a.jsx)(ee.default, {
          game: e
        }), s]
      })
    }
    return n ? (0, a.jsxs)("div", {
      className: ec.listingWrapper,
      children: [(0, a.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), (0, a.jsx)(T.default, {
        section: eo.AnalyticsSections.NAVIGATION,
        children: this.renderHeader(e, t)
      }), (0, a.jsx)(T.default, {
        section: eo.AnalyticsSections.BODY,
        children: this.renderListing()
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(N.AppPageTitle, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), this.showCopyLinkTextTimeout = new o.Timeout, this._trackedViewed = !1, this._analyticsSource = null, this._extraAnalyticsProperties = null, this.state = {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }, this.trackCarouselScroll = (e, t, s) => {
      let {
        sku: a
      } = this.props;
      null != a && W.default.track(eo.AnalyticEvents.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, g.default)(a),
        card_index: s,
        card_type: e.type === eo.CarouselMediaTypes.IMG ? "image" : "video"
      })
    }, this.copyCurrentUrl = () => {
      var e;
      let {
        location: t
      } = this.props;
      (0, w.copy)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
        showLinkCopied: !0
      }, () => {
        this.showCopyLinkTextTimeout.start(1500, () => {
          this.setState({
            showLinkCopied: !1
          })
        })
      })
    }, this.handleCreateInstantInvite = () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, d.openModalLazy)(async () => {
        let {
          default: i
        } = await s.el("310688").then(s.bind(s, "310688"));
        return s => (0, a.jsx)(i, {
          ...s,
          guild: t,
          channel: e,
          source: eo.InstantInviteSources.GUILD_CHANNELS
        })
      })
    }, this.renderInviteLink = () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (L.default.can(eo.Permissions.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, a.jsx)(d.Button, {
        "aria-label": ed.default.Messages.CREATE_INSTANT_INVITE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: ec.link,
        children: (0, a.jsx)(H.default, {
          className: ec.linkIcon
        })
      }) : null
    }, this.renderCopyLink = () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, a.jsx)(d.Tooltip, {
        text: e ? ed.default.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: t => {
          let {
            onMouseEnter: s,
            onMouseLeave: i
          } = t;
          return (0, a.jsx)(d.Button, {
            "aria-label": e ? ed.default.Messages.APPLICATION_STORE_LINK_COPIED : ed.default.Messages.COPY_LINK,
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: s,
            onMouseLeave: i,
            className: ec.link,
            children: (0, a.jsx)(H.default, {
              className: ec.linkIcon
            })
          })
        }
      })
    }, this.renderHeaderToolbar = (e, t) => {
      let {
        isInTestMode: s,
        slug: i,
        storeListing: r,
        channel: l,
        analyticsContext: {
          location: o
        }
      } = this.props, {
        showHeaderPurchaseUnit: u
      } = this.state;
      return (0, a.jsxs)("div", {
        className: ec.headerBarListing,
        children: [(0, a.jsx)("div", {
          className: ec.headerSection,
          children: s && null != t ? (0, a.jsx)(er.default, {
            size: er.TestModeStoreListingButtonEnums.Sizes.MIN,
            dropdownSize: er.TestModeStoreListingButtonEnums.DropdownSizes.MEDIUM,
            look: er.TestModeStoreListingButtonEnums.Looks.OUTLINED,
            color: er.TestModeStoreListingButtonEnums.Colors.YELLOW,
            skuId: t.id,
            className: ec.testModeSelectButton,
            currentStoreListingId: null != r ? r.id : null,
            onStoreListingSelect: e => {
              null != t && (0, I.goToSKUStoreListing)(t.id, {
                slug: i,
                analyticsSource: {
                  page: o.page,
                  section: eo.AnalyticsSections.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, a.jsx)("div", {
          className: ec.headerSection,
          children: (0, a.jsxs)("div", {
            className: n(ec.headerPurchase, {
              [ec.active]: u
            }),
            children: [null != t ? (0, C.default)(t) : null, null != e && null != t ? (0, a.jsx)(f.default, {
              wrapperClassName: ec.headerActionButton,
              applicationId: e.id,
              skuId: t.id,
              color: d.Button.Colors.GREEN,
              size: d.Button.Sizes.SMALL,
              tooltipPosition: "bottom",
              entitlementBranchId: null != r ? r.entitlementBranchId : null,
              channelId: null != l ? l.id : null,
              onStoreListing: !0
            }) : null, (0, a.jsx)(et.default, {
              messageStyle: et.MessageStyles.SHORT,
              className: ec.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }, this.renderCarousel = (e, t) => {
      if (0 === t.carouselItems.length) return null;
      let {
        pageSize: s,
        isFocused: i
      } = this.props;
      return (0, a.jsx)(T.default, {
        section: eo.AnalyticsSections.HERO,
        children: (0, a.jsx)($.default, {
          pageSize: s,
          items: t.carouselItems.map(s => this.parseMediaItems(e, s, t.assets)),
          autoplayInterval: 8e3,
          paused: !i,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }, this.renderListing = () => {
      let {
        application: e,
        storeListing: t,
        sku: s,
        pageSize: i
      } = this.props;
      return null == e || null == s || null == t || t.isSlimDirectoryVersion() ? (0, a.jsx)(B.default, {
        align: B.default.Align.CENTER,
        justify: B.default.Justify.CENTER,
        children: (0, a.jsx)(d.Spinner, {})
      }) : i === el.PageSizes.SMALL ? this.renderSmall(e, t, s) : this.renderLarge(e, t, s)
    }
  }
}
var eE = (0, R.default)((0, m.default)(l.default.connectStores([v.default, M.default, O.default, G.default, U.default, b.default, j.default, A.default, p.default, x.default, h.default, D.default], e => {
  let t, s, a, {
    inputSkuId: i,
    applicationId: r,
    storeListingId: n,
    isAuthenticated: l,
    channel: o
  } = e;
  if (null == r) {
    if (null == i) throw Error("Needs applicationId or skuId");
    t = i, null != (r = null != (s = b.default.get(i)) ? s.applicationId : null) && (a = p.default.getApplication(r))
  } else if (null == i) {
    if (null == r) throw Error("Needs applicationId or skuId");
    null != (a = p.default.getApplication(r)) && (t = a.destinationSkuId), s = null != t ? b.default.get(t) : null
  }(null == s ? void 0 : s.flags) != null && (0, V.hasFlag)(s.flags, eo.SKUFlags.STICKER_PACK) && (s = null);
  let u = null != r && (j.default.inTestModeForApplication(r) || A.default.inDevModeForApplication(r));
  return {
    skuId: t,
    application: null != r ? p.default.getApplication(r) : null,
    isFetchingEntitlements: null != r && D.default.applicationIdsFetching.has(r),
    didFetchEntitlements: null != r && D.default.applicationIdsFetched.has(r),
    shouldFetchStatistics: l && null != r && x.default.shouldFetchStatisticsForApplication(r),
    sku: s,
    isFocused: G.default.isFocused(),
    storeListing: U.default.getStoreListing({
      storeListingId: n,
      skuId: t,
      channelId: null != o ? o.id : null,
      isTestMode: u
    }),
    isInTestMode: null != r && u,
    matureAgree: v.default.didMatureAgree,
    theme: M.default.theme,
    locale: O.default.locale,
    guild: null != o ? h.default.getGuild(o.getGuildId()) : null
  }
})(e_)))