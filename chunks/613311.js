t(411104), t(724458), t(653041), t(733860), t(47120), t(789020);
var n = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(442837),
  o = t(846519),
  c = t(780384),
  u = t(481060),
  I = t(570140),
  T = t(659429),
  d = t(496929),
  _ = t(558381),
  E = t(410575),
  S = t(224336),
  O = t(730749),
  A = t(666743),
  N = t(115130),
  R = t(812206),
  h = t(252618),
  P = t(100159),
  p = t(646288),
  g = t(984370),
  C = t(706454),
  L = t(210887),
  m = t(430824),
  Z = t(496675),
  f = t(525395),
  M = t(558314),
  x = t(580130),
  j = t(55563),
  v = t(551428),
  D = t(695103),
  G = t(451478),
  y = t(378720),
  b = t(285952),
  U = t(760397),
  k = t(626135),
  B = t(572004),
  w = t(630388),
  V = t(937615),
  H = t(73346),
  F = t(3570),
  Y = t(689796),
  W = t(15470),
  z = t(506648),
  K = t(449275),
  X = t(445986),
  q = t(119520),
  Q = t(450233),
  J = t(726581),
  $ = t(74153),
  ee = t(125930),
  es = t(178071),
  et = t(176055),
  en = t(843445),
  er = t(981631),
  ei = t(186901),
  ea = t(689938),
  el = t(91060);

function eo(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class ec extends r.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: s,
      isFetchingEntitlements: t,
      shouldFetchStatistics: n,
      didFetchEntitlements: r,
      location: i,
      fetchStoreListing: a
    } = this.props;
    if (null != i.state) {
      let {
        analyticsSource: e,
        analyticsProperties: s
      } = i.state;
      this._analyticsSource = e, this._extraAnalyticsProperties = s
    } else this._analyticsSource = er.SaU;
    (null == s || s.isSlimDirectoryVersion()) && a(), null != e && (!t && !r && (0, d.yD)(e.applicationId), n && I.Z.wait(() => (0, T.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: s,
      sku: t,
      shouldFetchStatistics: n,
      skuId: r,
      storeListingId: i,
      slug: a,
      storeListing: l,
      fetchStoreListing: o
    } = this.props;
    if (l !== e.storeListing && null != l && (0, F.s)(ei.jE.STORE_LISTING, {
        skuId: r,
        slug: a
      }), (s !== e.locale || r !== e.skuId) && o(), n && !e.shouldFetchStatistics) {
      if (null == t) throw Error("Unexpected missing sku");
      I.Z.wait(() => (0, T.$)(t.applicationId))
    }(r !== e.skuId || i !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: s
      }
    } = this.props;
    null != s && k.default.track(er.rMx.STORE_LISTING_EXITED, {
      load_id: e,
      duration_ms: Date.now() - s
    })
  }
  replaceUrlWithSlug() {}
  trackViewed() {
    let {
      sku: e,
      storeListing: s,
      hasFetchedNews: t,
      analyticsContext: n
    } = this.props;
    if (this._trackedViewed || null == e || null == s || null == s.description || !(this.isChannelType || t)) return;
    let r = s.carouselItems.reduce((e, s) => (null != s.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    k.default.track(er.rMx.STORE_LISTING_VIEWED, {
      ...this._extraAnalyticsProperties,
      load_id: n.loadId,
      has_description: null != s.description && s.description.length > 0,
      has_staff_review: null != s.staffNotes,
      carousel_image_count: r.images,
      carousel_video_count: r.videos,
      location: n.location.page,
      source: this._analyticsSource,
      ...(0, P.Z)(e, !0)
    }), this._trackedViewed = !0
  }
  renderHeader(e, s) {
    let {
      channel: t,
      isAuthenticated: i
    } = this.props;
    return (0, n.jsx)(g.Z, {
      isAuthenticated: i,
      toolbar: this.renderHeaderToolbar(e, s),
      children: null != t ? (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(g.Z.Icon, {
          icon: u.TagIcon,
          "aria-label": ea.Z.Messages.STORE_CHANNEL
        }), (0, n.jsx)(g.Z.Title, {
          children: t.name
        })]
      }) : null != s && s.premium ? (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(g.Z.Icon, {
          icon: u.NitroWheelIcon,
          "aria-label": ea.Z.Messages.PREMIUM
        }), (0, n.jsx)($.Z, {
          sku: s
        })]
      }) : null != s ? (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(g.Z.Icon, {
          icon: u.TagIcon,
          "aria-label": ea.Z.Messages.STORE_CHANNEL
        }), (0, n.jsx)(g.Z.Title, {
          children: s.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, s, t) {
    let {
      assetId: n,
      youtubeVideoId: r
    } = s;
    if (null != n) {
      let s = t.find(e => e.id === n);
      if (null != s) {
        let {
          width: t,
          height: n
        } = s;
        if (null == t || null == n) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
        return s.mimeType.startsWith("video/") ? {
          type: er.s9s.VIDEO,
          thumbnailSrc: (0, H._W)(e.id, s, 1024, "webp"),
          src: (0, H._W)(e.id, s),
          height: n,
          width: t
        } : {
          type: er.s9s.IMG,
          src: (0, H._W)(e.id, s, 1024),
          height: n,
          width: t
        }
      }
    }
    if (null != r) return {
      type: er.s9s.YOUTUBE_VIDEO,
      youtubeVideoId: r
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, s, t) {
    let {
      theme: r
    } = this.props, i = s.headerBackground, a = (0, c.ap)(r) ? s.headerLogoLightTheme : s.headerLogoDarkTheme;
    return null == i || null == a ? (0, n.jsx)("div", {
      className: el.noHeaderSpacer
    }) : (0, n.jsxs)("div", {
      className: el.headerAssets,
      children: [(0, n.jsx)("div", {
        className: el.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, H._W)(e.id, i, 1024, "png"), ")")
        }
      }), (0, n.jsx)("img", {
        className: el.headerLogo,
        src: (0, H._W)(e.id, a, 1024, "png"),
        alt: t.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, s) {
    return (0, n.jsx)(J.Z, {
      sku: e,
      storeListing: s,
      className: el.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, s) {
    if (null == e.guild) return null;
    let {
      channel: t,
      pageSize: r
    } = this.props;
    return (0, n.jsx)(et.Z, {
      skuId: s.id,
      guild: e.guild,
      className: el.guildInvite,
      inChannel: null != t,
      pageSize: r
    })
  }
  renderFeatures(e) {
    return (0, n.jsx)(z.Z, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, n.jsx)(ee.Z, {
      className: el.systemRequirements,
      systemRequirements: e.systemRequirements,
      pageSize: this.props.pageSize
    })
  }
  renderDescription(e, s, t) {
    let {
      description: i
    } = s;
    if (null == i) throw Error("Rendering ApplicationStoreListing without description");
    return (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(y.Z, {
        tag: "h1",
        children: ea.Z.Messages.APPLICATION_STORE_ABOUT_HEADER.format({
          name: t.name
        })
      }), (0, n.jsx)(S.Z, {}), (0, n.jsx)(W.Z, {
        applicationId: e.id,
        blurb: s.summary,
        description: i,
        className: el.description,
        assets: s.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, n.jsx)(Y.Z, {
      sku: e,
      className: el.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, n.jsx)(K.Z, {
      sku: e,
      className: el.legalInfo
    })
  }
  renderJsonLD() {
    let {
      sku: e,
      storeListing: s,
      application: t
    } = this.props;
    if (null == e || null == s || null == t) return null;
    let r = [],
      i = t.getSplashURL(1024);
    null != i && r.push(i), null != s.headerLogoLightTheme && r.unshift((0, H._W)(t.id, s.headerLogoLightTheme, 1024, "jpg"));
    let a = U.Z.Product({
        name: e.name,
        description: null != e.summary && "" !== e.summary ? e.summary : s.tagline,
        image: U.Z.Product.Image(r),
        sku: e.id
      }),
      l = e.getPrice();
    if (null != l) {
      let {
        amount: e,
        currency: s
      } = l;
      a.offers = U.Z.Offer({
        priceCurrency: s.toUpperCase(),
        price: (0, V.T4)(e, s, {
          style: "decimal"
        })
      })
    }
    let o = U.Z.ItemPage({
      mainEntity: a
    });
    return (0, n.jsx)(U.Z, {
      data: o
    })
  }
  renderSmall(e, s, t) {
    return (0, n.jsxs)("div", {
      className: a()(el.listing, el.listingSmall),
      children: [this.renderHeaderAssets(e, s, t), this.renderCarousel(e, s), this.renderWhyYouMightLikeThis(t, s), this.renderDescription(e, s, t), this.renderVerifiedGuildInvite(s, t), this.renderFeatures(t), this.renderSystemRequirements(t), this.renderApplicationContentRating(t), this.renderApplicationLegalInfo(t)]
    })
  }
  renderLarge(e, s, t) {
    return (0, n.jsxs)("div", {
      className: el.listing,
      children: [this.renderHeaderAssets(e, s, t), this.renderCarousel(e, s), (0, n.jsx)("div", {
        className: el.listingLarge,
        children: (0, n.jsxs)("div", {
          className: el.body,
          children: [(0, n.jsxs)("div", {
            className: el.leftColumn,
            children: [this.renderWhyYouMightLikeThis(t, s), this.renderDescription(e, s, t), this.renderSystemRequirements(t), this.renderApplicationContentRating(t), this.renderApplicationLegalInfo(t)]
          }), (0, n.jsxs)("div", {
            className: el.rightColumn,
            children: [this.renderVerifiedGuildInvite(s, t), this.renderFeatures(t)]
          })]
        })
      })]
    })
  }
  render() {
    let {
      application: e,
      sku: s,
      storeListing: t,
      matureAgree: i,
      isAuthenticated: a
    } = this.props;
    if (null == e || null == s || null == t || t.isSlimDirectoryVersion()) return (0, n.jsxs)(r.Fragment, {
      children: [this.renderHeader(e, s), (0, n.jsx)(b.Z, {
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.CENTER,
        children: (0, n.jsx)(u.Spinner, {
          className: el.spinner
        })
      })]
    });
    if (!i && s.showAgeGate) {
      let t = a ? null : (0, n.jsx)("div", {
        className: el.gatedListing,
        children: this.renderListing()
      });
      return (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(h.yY, {
          location: e.name
        }), this.renderJsonLD(), this.renderHeader(e, s), (0, n.jsx)(q.Z, {
          game: e
        }), t]
      })
    }
    return a ? (0, n.jsxs)("div", {
      className: el.listingWrapper,
      children: [(0, n.jsx)(h.yY, {
        location: e.name
      }), this.renderJsonLD(), (0, n.jsx)(E.Z, {
        section: er.jXE.NAVIGATION,
        children: this.renderHeader(e, s)
      }), (0, n.jsx)(E.Z, {
        section: er.jXE.BODY,
        children: this.renderListing()
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(h.yY, {
        location: e.name
      }), this.renderJsonLD(), this.renderHeader(e, s), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), eo(this, "showCopyLinkTextTimeout", new o.V7), eo(this, "_trackedViewed", !1), eo(this, "_analyticsSource", null), eo(this, "_extraAnalyticsProperties", null), eo(this, "state", {
      showHeaderPurchaseUnit: !1,
      showLinkCopied: !1
    }), eo(this, "trackCarouselScroll", (e, s, t) => {
      let {
        sku: n
      } = this.props;
      null != n && k.default.track(er.rMx.STORE_LISTING_MEDIA_SCROLLED, {
        ...(0, P.Z)(n),
        card_index: t,
        card_type: e.type === er.s9s.IMG ? "image" : "video"
      })
    }), eo(this, "copyCurrentUrl", () => {
      var e;
      let {
        location: s
      } = this.props;
      (0, B.JG)((e = s.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e))), this.setState({
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
        guild: s
      } = this.props;
      null != e && null != s && (0, u.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([t.e("49237"), t.e("99387"), t.e("7654"), t.e("1187"), t.e("57742")]).then(t.bind(t, 560114));
        return t => (0, n.jsx)(r, {
          ...t,
          guild: s,
          channel: e,
          source: er.t4x.GUILD_CHANNELS
        })
      })
    }), eo(this, "renderInviteLink", () => {
      let {
        channel: e,
        guild: s
      } = this.props;
      return null != e && null != s && (Z.Z.can(er.Plq.CREATE_INSTANT_INVITE, s) || null != s.vanityURLCode) ? (0, n.jsx)(u.Button, {
        "aria-label": ea.Z.Messages.CREATE_INSTANT_INVITE,
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: el.link,
        children: (0, n.jsx)(u.LinkIcon, {
          size: "md",
          color: "currentColor",
          className: el.linkIcon
        })
      }) : null
    }), eo(this, "renderCopyLink", () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, n.jsx)(u.Tooltip, {
        text: e ? ea.Z.Messages.APPLICATION_STORE_LINK_COPIED : null,
        position: "left",
        forceOpen: e,
        children: s => {
          let {
            onMouseEnter: t,
            onMouseLeave: r
          } = s;
          return (0, n.jsx)(u.Button, {
            "aria-label": e ? ea.Z.Messages.APPLICATION_STORE_LINK_COPIED : ea.Z.Messages.COPY_LINK,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            onClick: this.copyCurrentUrl,
            onMouseEnter: t,
            onMouseLeave: r,
            className: el.link,
            children: (0, n.jsx)(u.LinkIcon, {
              size: "md",
              color: "currentColor",
              className: el.linkIcon
            })
          })
        }
      })
    }), eo(this, "renderHeaderToolbar", (e, s) => {
      let {
        isInTestMode: t,
        slug: r,
        storeListing: i,
        analyticsContext: {
          location: l
        }
      } = this.props, {
        showHeaderPurchaseUnit: o
      } = this.state;
      return (0, n.jsxs)("div", {
        className: el.headerBarListing,
        children: [(0, n.jsx)("div", {
          className: el.headerSection,
          children: t && null != s ? (0, n.jsx)(es.Z, {
            size: es.y.Sizes.MIN,
            dropdownSize: es.y.DropdownSizes.MEDIUM,
            look: es.y.Looks.OUTLINED,
            color: es.y.Colors.RED,
            skuId: s.id,
            className: el.testModeSelectButton,
            currentStoreListingId: null != i ? i.id : null,
            onStoreListingSelect: e => {
              null != s && (0, _.yt)(s.id, {
                slug: r,
                analyticsSource: {
                  page: l.page,
                  section: er.jXE.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, n.jsx)("div", {
          className: el.headerSection,
          children: (0, n.jsxs)("div", {
            className: a()(el.headerPurchase, {
              [el.active]: o
            }),
            children: [null != s ? (0, p.Z)(s) : null, null != e && null != s ? (0, n.jsx)("div", {
              children: "deprecated!"
            }) : null, (0, n.jsx)(Q.Z, {
              messageStyle: Q.G.SHORT,
              className: el.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }), eo(this, "renderCarousel", (e, s) => {
      if (0 === s.carouselItems.length) return null;
      let {
        pageSize: t,
        isFocused: r
      } = this.props;
      return (0, n.jsx)(E.Z, {
        section: er.jXE.HERO,
        children: (0, n.jsx)(X.Z, {
          pageSize: t,
          items: s.carouselItems.map(t => this.parseMediaItems(e, t, s.assets)),
          autoplayInterval: 8e3,
          paused: !r,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }), eo(this, "renderListing", () => {
      let {
        application: e,
        storeListing: s,
        sku: t,
        pageSize: r
      } = this.props;
      return null == e || null == t || null == s || s.isSlimDirectoryVersion() ? (0, n.jsx)(b.Z, {
        align: b.Z.Align.CENTER,
        justify: b.Z.Justify.CENTER,
        children: (0, n.jsx)(u.Spinner, {})
      }) : r === en.b.SMALL ? this.renderSmall(e, s, t) : this.renderLarge(e, s, t)
    })
  }
}
s.Z = (0, O.Z)((0, A.Z)(l.ZP.connectStores([M.Z, L.Z, C.default, G.Z, v.Z, j.Z, D.Z, N.Z, R.Z, f.Z, m.Z, x.Z], e => {
  let s, t, n, {
    inputSkuId: r,
    applicationId: i,
    storeListingId: a,
    isAuthenticated: l,
    channel: o
  } = e;
  if (null == i) {
    if (null == r) throw Error("Needs applicationId or skuId");
    s = r, null != (i = null != (t = j.Z.get(r)) ? t.applicationId : null) && (n = R.Z.getApplication(i))
  } else if (null == r) {
    if (null == i) throw Error("Needs applicationId or skuId");
    null != (n = R.Z.getApplication(i)) && (s = n.destinationSkuId), t = null != s ? j.Z.get(s) : null
  }(null == t ? void 0 : t.flags) != null && (0, w.yE)(t.flags, er.l4R.STICKER_PACK) && (t = null);
  let c = null != i && (D.Z.inTestModeForApplication(i) || N.Z.inDevModeForApplication(i));
  return {
    skuId: s,
    application: null != i ? R.Z.getApplication(i) : null,
    isFetchingEntitlements: null != i && x.Z.applicationIdsFetching.has(i),
    didFetchEntitlements: null != i && x.Z.applicationIdsFetched.has(i),
    shouldFetchStatistics: l && null != i && f.Z.shouldFetchStatisticsForApplication(i),
    sku: t,
    isFocused: G.Z.isFocused(),
    storeListing: v.Z.getStoreListing({
      storeListingId: a,
      skuId: s,
      channelId: null != o ? o.id : null,
      isTestMode: c
    }),
    isInTestMode: null != i && c,
    matureAgree: M.Z.didMatureAgree,
    theme: L.Z.theme,
    locale: C.default.locale,
    guild: null != o ? m.Z.getGuild(o.getGuildId()) : null
  }
})(ec)))