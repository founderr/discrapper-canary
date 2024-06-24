n(411104), n(724458), n(653041), n(733860), n(47120), n(789020);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(846519),
  c = n(780384),
  u = n(481060),
  d = n(570140),
  E = n(659429),
  h = n(496929),
  _ = n(558381),
  I = n(410575),
  m = n(224336),
  T = n(730749),
  g = n(666743),
  p = n(115130),
  N = n(812206),
  S = n(252618),
  C = n(100159),
  A = n(646288),
  f = n(984370),
  Z = n(706454),
  L = n(210887),
  O = n(430824),
  v = n(496675),
  R = n(525395),
  P = n(558314),
  x = n(580130),
  M = n(55563),
  D = n(551428),
  b = n(695103),
  y = n(451478),
  j = n(378720),
  U = n(285952),
  G = n(760397),
  w = n(626135),
  k = n(572004),
  B = n(630388),
  H = n(937615),
  V = n(73346),
  F = n(3570),
  Y = n(689796),
  z = n(15470),
  W = n(506648),
  K = n(449275),
  q = n(445986),
  Q = n(119520),
  X = n(450233),
  J = n(726581),
  $ = n(74153),
  ee = n(125930),
  et = n(178071),
  en = n(176055),
  es = n(843445),
  ei = n(981631),
  el = n(186901),
  ea = n(689938),
  er = n(91060);

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class ec extends i.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: t,
      isFetchingEntitlements: n,
      shouldFetchStatistics: s,
      didFetchEntitlements: i,
      location: l,
      fetchStoreListing: a
    } = this.props;
    if (null != l.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = l.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = t
    } else this._analyticsSource = ei.SaU;
    (null == t || t.isSlimDirectoryVersion()) && a(), null != e && (!n && !i && (0, h.yD)(e.applicationId), s && d.Z.wait(() => (0, E.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: n,
      shouldFetchStatistics: s,
      skuId: i,
      storeListingId: l,
      slug: a,
      storeListing: r,
      fetchStoreListing: o
    } = this.props;
    if (r !== e.storeListing && null != r && (0, F.s)(el.jE.STORE_LISTING, {
        skuId: i,
        slug: a
      }), (t !== e.locale || i !== e.skuId) && o(), s && !e.shouldFetchStatistics) {
      if (null == n) throw Error("Unexpected missing sku");
      d.Z.wait(() => (0, E.$)(n.applicationId))
    }(i !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: t
      }
    } = this.props;
    null != t && w.default.track(ei.rMx.STORE_LISTING_EXITED, {
      load_id: e,
      duration_ms: Date.now() - t
    })
  }
  replaceUrlWithSlug() {}
  trackViewed() {
    let {
      sku: e,
      storeListing: t,
      hasFetchedNews: n,
      analyticsContext: s
    } = this.props;
    if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n)) return;
    let i = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    w.default.track(ei.rMx.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: s.loadId,
      has_description: null != t.description && t.description.length > 0,
      has_staff_review: null != t.staffNotes,
      carousel_image_count: i.images,
      carousel_video_count: i.videos,
      location: s.location.page,
      source: this._analyticsSource,
      ...(0, C.Z)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, t) {
    let {
      channel: n,
      isAuthenticated: l
    } = this.props;
    return (0, s.jsx)(f.Z, {
      isAuthenticated: l,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != n ? (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(f.Z.Icon, {
          icon: u.TagIcon,
          "aria-label": ea.Z.Messages.STORE_CHANNEL
        }), (0, s.jsx)(f.Z.Title, {
          children: n.name
        })]
      }) : null != t && t.premium ? (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(f.Z.Icon, {
          icon: u.NitroWheelIcon,
          "aria-label": ea.Z.Messages.PREMIUM
        }), (0, s.jsx)($.Z, {
          sku: t
        })]
      }) : null != t ? (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(f.Z.Icon, {
          icon: u.TagIcon,
          "aria-label": ea.Z.Messages.STORE_CHANNEL
        }), (0, s.jsx)(f.Z.Title, {
          children: t.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, t, n) {
    let {
      assetId: s,
      youtubeVideoId: i
    } = t;
    if (null != s) {
      let t = n.find(e => e.id === s);
      if (null != t) {
        let {
          width: n,
          height: s
        } = t;
        if (null == n || null == s) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
        return t.mimeType.startsWith("video/") ? {
          type: ei.s9s.VIDEO,
          thumbnailSrc: (0, V._W)(e.id, t, 1024, "webp"),
          src: (0, V._W)(e.id, t),
          height: s,
          width: n
        } : {
          type: ei.s9s.IMG,
          src: (0, V._W)(e.id, t, 1024),
          height: s,
          width: n
        }
      }
    }
    if (null != i) return {
      type: ei.s9s.YOUTUBE_VIDEO,
      youtubeVideoId: i
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, n) {
    let {
      theme: i
    } = this.props, l = t.headerBackground, a = (0, c.ap)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == l || null == a ? (0, s.jsx)("div", {
      className: er.noHeaderSpacer
    }) : (0, s.jsxs)("div", {
      className: er.headerAssets,
      children: [(0, s.jsx)("div", {
        className: er.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, V._W)(e.id, l, 1024, "png"), ")")
        }
      }), (0, s.jsx)("img", {
        className: er.headerLogo,
        src: (0, V._W)(e.id, a, 1024, "png"),
        alt: n.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, s.jsx)(J.Z, {
      sku: e,
      storeListing: t,
      className: er.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: n,
      pageSize: i
    } = this.props;
    return (0, s.jsx)(en.Z, {
      skuId: t.id,
      guild: e.guild,
      className: er.guildInvite,
      inChannel: null != n,
      pageSize: i
    })
  }
  renderFeatures(e) {
    return (0, s.jsx)(W.Z, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, s.jsx)(ee.Z, {
      className: er.systemRequirements,
      systemRequirements: e.systemRequirements,
      pageSize: this.props.pageSize
    })
  }
  renderDescription(e, t, n) {
    let {
      description: l
    } = t;
    if (null == l) throw Error("Rendering ApplicationStoreListing without description");
    return (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(j.Z, {
        tag: "h1",
        children: ea.Z.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: n.name
        })
      }), (0, s.jsx)(m.Z, {}), (0, s.jsx)(z.Z, {
        applicationId: e.id,
        blurb: t.summary,
        description: l,
        className: er.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, s.jsx)(Y.Z, {
      sku: e,
      className: er.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, s.jsx)(K.Z, {
      sku: e,
      className: er.legalInfo
    })
  }
  renderJsonLD() {
    let {
      sku: e,
      storeListing: t,
      application: n
    } = this.props;
    if (null == e || null == t || null == n) return null;
    let i = [],
      l = n.getSplashURL(1024);
    null != l && i.push(l), null != t.headerLogoLightTheme && i.unshift((0, V._W)(n.id, t.headerLogoLightTheme, 1024, "jpg"));
    let a = G.Z.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
        image: G.Z.Product.Image(i),
        sku: e.id
      }),
      r = e.getPrice();
    if (null != r) {
      let {
        amount: e,
        currency: t
      } = r;
      a.offers = G.Z.Offer({
        priceCurrency: t.toUpperCase(),
        price: (0, H.T4)(e, t, {
          style: "decimal"
        })
      })
    }
    let o = G.Z.ItemPage({
      mainEntity: a
    });
    return (0, s.jsx)(G.Z, {
      data: o
    })
  }
  renderSmall(e, t, n) {
    return (0, s.jsxs)("div", {
      className: a()(er.listing, er.listingSmall),
      children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
    })
  }
  renderLarge(e, t, n) {
    return (0, s.jsxs)("div", {
      className: er.listing,
      children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), (0, s.jsx)("div", {
        className: er.listingLarge,
        children: (0, s.jsxs)("div", {
          className: er.body,
          children: [(0, s.jsxs)("div", {
            className: er.leftColumn,
            children: [this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
          }), (0, s.jsxs)("div", {
            className: er.rightColumn,
            children: [this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n)]
          })]
        })
      })]
    })
  }
  render() {
    let {
      application: e,
      sku: t,
      storeListing: n,
      matureAgree: l,
      isAuthenticated: a
    } = this.props;
    if (null == e || null == t || null == n || n.isSlimDirectoryVersion()) return (0, s.jsxs)(i.Fragment, {
      children: [this.renderHeader(e, t), (0, s.jsx)(U.Z, {
        align: U.Z.Align.CENTER,
        justify: U.Z.Justify.CENTER,
        children: (0, s.jsx)(u.Spinner, {
          className: er.spinner
        })
      })]
    });
    if (!l && t.showAgeGate) {
      let n = a ? null : (0, s.jsx)("div", {
        className: er.gatedListing,
        children: this.renderListing()
      });
      return (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(S.yY, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, t), (0, s.jsx)(Q.Z, {
          game: e
        }), n]
      })
    }
    return a ? (0, s.jsxs)("div", {
      className: er.listingWrapper,
      children: [(0, s.jsx)(S.yY, {
        location: e.name
      }), this.renderJsonLD(), (0, s.jsx)(I.Z, {
        section: ei.jXE.NAVIGATION,
        children: this.renderHeader(e, t)
      }), (0, s.jsx)(I.Z, {
        section: ei.jXE.BODY,
        children: this.renderListing()
      })]
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsx)(S.yY, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), eo(this, "showCopyLinkTextTimeout", new o.V7), eo(this, "_trackedViewed", !1), eo(this, "_analyticsSource", null), eo(this, "_extraAnalyticsProperties", null), eo(this, "state", {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }), eo(this, "trackCarouselScroll", (e, t, n) => {
      let {
        sku: s
      } = this.props;
      null != s && w.default.track(ei.rMx.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, C.Z)(s),
        card_index: n,
        card_type: e.type === ei.s9s.IMG ? "image" : "video"
      })
    }), eo(this, "copyCurrentUrl", () => {
      var e;
      let {
        location: t
      } = this.props;
      (0, k.JG)((e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
        showLinkCopied: !0
      }, () => {
        this.showCopyLinkTextTimeout.start(1500, () => {
          this.setState({
            showLinkCopied: !1
          })
        })
      })
    }), eo(this, "handleCreateInstantInvite", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, u.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, 560114));
        return n => (0, s.jsx)(i, {
          ...n,
          guild: t,
          channel: e,
          source: ei.t4x.GUILD_CHANNELS
        })
      })
    }), eo(this, "renderInviteLink", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (v.Z.can(ei.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, s.jsx)(u.Button, {
        "aria-label": ea.Z.Messages.CREATE_INSTANT_INVITE,
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: er.link,
        children: (0, s.jsx)(u.LinkIcon, {
          size: "md",
          color: "currentColor",
          className: er.linkIcon
        })
      }) : null
    }), eo(this, "renderCopyLink", () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, s.jsx)(u.Tooltip, {
        text: e ? ea.Z.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: t => {
          let {
            onMouseEnter: n,
            onMouseLeave: i
          } = t;
          return (0, s.jsx)(u.Button, {
            "aria-label": e ? ea.Z.Messages.APPLICATION_STORE_LINK_COPIED : ea.Z.Messages.COPY_LINK,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: n,
            onMouseLeave: i,
            className: er.link,
            children: (0, s.jsx)(u.LinkIcon, {
              size: "md",
              color: "currentColor",
              className: er.linkIcon
            })
          })
        }
      })
    }), eo(this, "renderHeaderToolbar", (e, t) => {
      let {
        isInTestMode: n,
        slug: i,
        storeListing: l,
        analyticsContext: {
          location: r
        }
      } = this.props, {
        showHeaderPurchaseUnit: o
      } = this.state;
      return (0, s.jsxs)("div", {
        className: er.headerBarListing,
        children: [(0, s.jsx)("div", {
          className: er.headerSection,
          children: n && null != t ? (0, s.jsx)(et.Z, {
            size: et.y.Sizes.MIN,
            dropdownSize: et.y.DropdownSizes.MEDIUM,
            look: et.y.Looks.OUTLINED,
            color: et.y.Colors.RED,
            skuId: t.id,
            className: er.testModeSelectButton,
            currentStoreListingId: null != l ? l.id : null,
            onStoreListingSelect: e => {
              null != t && (0, _.yt)(t.id, {
                slug: i,
                analyticsSource: {
                  page: r.page,
                  section: ei.jXE.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, s.jsx)("div", {
          className: er.headerSection,
          children: (0, s.jsxs)("div", {
            className: a()(er.headerPurchase, {
              [er.active]: o
            }),
            children: [null != t ? (0, A.Z)(t) : null, null != e && null != t ? (0, s.jsx)("div", {
              children: "deprecated!"
            }) : null, (0, s.jsx)(X.Z, {
              messageStyle: X.G.SHORT,
              className: er.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }), eo(this, "renderCarousel", (e, t) => {
      if (0 === t.carouselItems.length) return null;
      let {
        pageSize: n,
        isFocused: i
      } = this.props;
      return (0, s.jsx)(I.Z, {
        section: ei.jXE.HERO,
        children: (0, s.jsx)(q.Z, {
          pageSize: n,
          items: t.carouselItems.map(n => this.parseMediaItems(e, n, t.assets)),
          autoplayInterval: 8e3,
          paused: !i,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }), eo(this, "renderListing", () => {
      let {
        application: e,
        storeListing: t,
        sku: n,
        pageSize: i
      } = this.props;
      return null == e || null == n || null == t || t.isSlimDirectoryVersion() ? (0, s.jsx)(U.Z, {
        align: U.Z.Align.CENTER,
        justify: U.Z.Justify.CENTER,
        children: (0, s.jsx)(u.Spinner, {})
      }) : i === es.b.SMALL ? this.renderSmall(e, t, n) : this.renderLarge(e, t, n)
    })
  }
}
t.Z = (0, T.Z)((0, g.Z)(r.ZP.connectStores([P.Z, L.Z, Z.default, y.Z, D.Z, M.Z, b.Z, p.Z, N.Z, R.Z, O.Z, x.Z], e => {
  let t, n, s, {
    inputSkuId: i,
    applicationId: l,
    storeListingId: a,
    isAuthenticated: r,
    channel: o
  } = e;
  if (null == l) {
    if (null == i) throw Error("Needs applicationId or skuId");
    t = i, null != (l = null != (n = M.Z.get(i)) ? n.applicationId : null) && (s = N.Z.getApplication(l))
  } else if (null == i) {
    if (null == l) throw Error("Needs applicationId or skuId");
    null != (s = N.Z.getApplication(l)) && (t = s.destinationSkuId), n = null != t ? M.Z.get(t) : null
  }(null == n ? void 0 : n.flags) != null && (0, B.yE)(n.flags, ei.l4R.STICKER_PACK) && (n = null);
  let c = null != l && (b.Z.inTestModeForApplication(l) || p.Z.inDevModeForApplication(l));
  return {
    skuId: t,
    application: null != l ? N.Z.getApplication(l) : null,
    isFetchingEntitlements: null != l && x.Z.applicationIdsFetching.has(l),
    didFetchEntitlements: null != l && x.Z.applicationIdsFetched.has(l),
    shouldFetchStatistics: r && null != l && R.Z.shouldFetchStatisticsForApplication(l),
    sku: n,
    isFocused: y.Z.isFocused(),
    storeListing: D.Z.getStoreListing({
      storeListingId: a,
      skuId: t,
      channelId: null != o ? o.id : null,
      isTestMode: c
    }),
    isInTestMode: null != l && c,
    matureAgree: P.Z.didMatureAgree,
    theme: L.Z.theme,
    locale: Z.default.locale,
    guild: null != o ? O.Z.getGuild(o.getGuildId()) : null
  }
})(ec)))