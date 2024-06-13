"use strict";
l.r(t), l.d(t, {
  EmbedVideo: function() {
    return O
  },
  default: function() {
    return L
  }
}), l("47120"), l("653041");
var n, r = l("735250"),
  s = l("470079"),
  i = l("120356"),
  a = l.n(i),
  o = l("481060"),
  d = l("169525"),
  u = l("785992"),
  c = l("585483"),
  m = l("55935"),
  h = l("408433"),
  p = l("956664"),
  f = l("156054"),
  g = l("250496"),
  b = l("817929"),
  y = l("351093"),
  x = l("261922"),
  v = l("68588"),
  E = l("268642"),
  I = l("259773"),
  C = l("941797"),
  w = l("278297"),
  M = l("465670"),
  T = l("52824"),
  S = l("592256"),
  N = l("981631"),
  j = l("689938"),
  A = l("946278"),
  _ = l("214607");

function R(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}

function O(e) {
  let {
    className: t,
    iframeWrapperClassName: l,
    maxWidth: n,
    maxHeight: i,
    thumbnail: o,
    video: d,
    provider: u,
    allowFullScreen: m = !0,
    responsive: h = !1,
    renderImageComponent: f,
    renderVideoComponent: b,
    renderLinkComponent: y,
    playable: x = !0,
    autoPlay: v = !1,
    autoMute: E,
    volume: C,
    onPlay: w,
    onPause: M,
    onEnded: S,
    onControlsHide: j,
    onControlsShow: A,
    onVolumeChange: R,
    onMute: O,
    href: V,
    messageId: L,
    channelId: k,
    placeholder: D,
    placeholderVersion: P
  } = e, [F, H] = s.useState(v), U = null != d && null == d.proxyURL, W = s.useCallback(() => H(!1), [H]), B = e => {
    e.preventDefault(), e.stopPropagation(), null == w || w(!1), H(!0), U && (c.ComponentDispatch.dispatch(N.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), c.ComponentDispatch.subscribeOnce(N.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, W))
  };
  s.useEffect(() => () => {
    U && c.ComponentDispatch.unsubscribe(N.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, W)
  }, [U, W]);
  let {
    width: G,
    height: X
  } = o;
  null != d && (G = d.width, X = d.height);
  let z = (0, p.fit)({
    width: G,
    height: X,
    maxWidth: n,
    maxHeight: i
  });
  G = Math.max(z.width, 150), X = Math.max(z.height, 144);
  let K = (0, T.getBestEffortSrcUrl)(o);
  if (null != d && null != d.proxyURL) return (0, r.jsx)("div", {
    className: a()(_.embedVideo, t),
    children: b({
      poster: K,
      src: d.proxyURL,
      placeholder: D,
      placeholderVersion: P,
      width: G,
      height: X,
      responsive: h,
      autoPlay: v,
      onEnded: S,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: R,
      playable: x,
      autoMute: E,
      volume: C,
      onPlay: w,
      onPause: M,
      onMute: O,
      onControlsHide: j,
      onControlsShow: A
    })
  });
  if (F && null != d) {
    let e;
    let s = !0 === E || "function" == typeof E && E(),
      o = {
        width: G,
        height: X
      },
      c = {
        width: G,
        height: X
      };
    if (h) {
      let t = 0 !== G ? X / G : 1;
      o = {
        maxWidth: n,
        maxHeight: i,
        width: void 0,
        height: void 0
      }, c = {
        paddingBottom: "".concat(100 * t, "%"),
        maxWidth: G
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: G,
        maxHeight: X
      }
    }
    return (0, r.jsx)("div", {
      className: t,
      style: o,
      children: (0, r.jsx)("div", {
        className: a()(_.embedVideo, l),
        style: c,
        children: (0, r.jsx)(g.default, {
          provider: u,
          src: d.url,
          style: e,
          width: G,
          height: X,
          allowFullScreen: m,
          autoMute: s
        })
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(_.embedVideo, t),
    style: h ? {
      maxWidth: G
    } : {
      width: G,
      height: X
    },
    children: [f({
      src: K,
      width: G,
      height: X,
      maxWidth: G,
      maxHeight: X,
      responsive: h,
      containerClassName: _.embedVideoImageComponent,
      imageClassName: _.embedVideoImageComponentInner,
      placeholder: D,
      placeholderVersion: P,
      onClick: x && null != d ? B : null
    }), (0, r.jsx)("div", {
      className: _.embedVideoActions,
      children: (0, r.jsx)("div", {
        className: _.centerContent,
        children: x ? (0, r.jsx)(I.default, {
          onPlay: null != d ? B : null,
          externalURL: V,
          renderLinkComponent: y,
          messageId: L,
          channelId: k
        }) : null
      })
    })]
  })
}

function V(e) {
  let {
    className: t,
    href: l,
    autoPlay: n,
    maxWidth: s,
    maxHeight: i,
    thumbnail: o,
    video: d,
    renderImageComponent: u,
    responsive: c,
    alt: m,
    disableAltTextDisplay: h = !1,
    playable: p = !0,
    hiddenSpoilers: f,
    placeholder: g,
    placeholderVersion: b
  } = e;
  return (0, r.jsx)(y.default, {
    className: a()(_.embedVideo, t),
    original: l,
    poster: (0, T.getBestEffortSrcUrl)(o),
    src: (0, T.getBestEffortSrcUrl)(d),
    alt: m,
    width: o.width,
    height: o.height,
    naturalHeight: d.height,
    naturalWidth: d.width,
    maxWidth: s,
    maxHeight: i,
    responsive: c,
    autoPlay: n,
    playable: p,
    renderImageComponent: u,
    hiddenSpoilers: f,
    disableAltTextDisplay: h,
    placeholder: g,
    placeholderVersion: b
  })
}
class L extends(n = s.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          provider: t
        },
        renderLinkComponent: l,
        messageId: n,
        channelId: s
      } = this.props;
    return null == t ? null : (0, r.jsx)("div", {
      className: a()(_.embedProvider, _.embedMargin),
      children: null != t.url ? l({
        className: _.embedLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
        channelId: s
      }) : (0, r.jsx)("span", {
        children: t.name
      })
    })
  }
  renderAuthor() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          author: t
        },
        renderLinkComponent: l,
        messageId: n,
        channelId: s
      } = this.props;
    return null == t ? null : (0, r.jsxs)("div", {
      className: a()(_.embedAuthor, _.embedMargin),
      children: [null != t.iconProxyURL ? (0, r.jsx)("img", {
        alt: "",
        className: _.embedAuthorIcon,
        src: t.iconProxyURL
      }) : null, null != t.url ? l({
        className: _.embedAuthorNameLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
        channelId: s
      }) : (0, r.jsx)("span", {
        className: _.embedAuthorName,
        children: t.name
      })]
    })
  }
  renderTitle() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: t,
        renderLinkComponent: l,
        renderTitle: n,
        messageId: s,
        channelId: i
      } = this.props,
      {
        rawTitle: o,
        url: d
      } = t;
    return null == o ? null : (0, r.jsx)("div", {
      className: a()(_.embedTitle, _.embedMargin),
      children: null != d ? l({
        className: _.embedTitleLink,
        href: d,
        tabIndex: e ? 0 : -1,
        children: n(t, o),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: s,
        channelId: i
      }) : n(t, o)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: t
    } = this.props, {
      rawDescription: l
    } = e;
    return null == l ? null : (0, r.jsx)("div", {
      className: a()(_.embedDescription, _.embedMargin),
      children: t(e, l, !1)
    })
  }
  renderThumbnail() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          thumbnail: t
        },
        maxThumbnailWidth: l,
        maxThumbnailHeight: n,
        renderImageComponent: s,
        autoPlayGif: i
      } = this.props;
    return null == t ? null : (0, r.jsx)(w.MessagesInteractionContext.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return s({
          containerClassName: _.embedThumbnail,
          src: (0, T.getBestEffortSrcUrl)(t),
          original: t.url,
          width: t.width,
          height: t.height,
          maxWidth: l,
          maxHeight: n,
          shouldLink: e,
          autoPlay: i && !a
        })
      }
    })
  }
  renderFields() {
    let {
      embed: e
    } = this.props, {
      fields: t
    } = e;
    if (null == t || 0 === t.length) return null;
    let l = [],
      n = null;
    return t.forEach(t => {
      let {
        rawName: r,
        rawValue: s,
        inline: i
      } = t;
      !i && null != n && (l.push(n), n = null), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, s, !0)]), (3 === n.length || !i) && (l.push(n), n = null)
    }), null != n && l.push(n), (0, r.jsx)("div", {
      className: _.embedFields,
      children: l.map((e, t) => {
        let {
          length: l
        } = e;
        return e.map((e, n) => {
          let [s, i] = e;
          return (0, r.jsxs)("div", {
            className: _.embedField,
            style: {
              gridColumn: function(e, t) {
                let l = 12 / t,
                  n = e * l;
                return "".concat(n + 1, " / ").concat(n + l + 1)
              }(n, l)
            },
            children: [(0, r.jsx)("div", {
              className: _.embedFieldName,
              children: s
            }), (0, r.jsx)("div", {
              className: _.embedFieldValue,
              children: i
            })]
          }, "".concat(t, "-").concat(n))
        })
      })
    })
  }
  renderImages() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: l
    } = this.props, {
      maxMediaHeight: n
    } = this.state;
    if (null == l.images) return null;
    let [s, i, a, o] = l.images.map(n => this.renderImage({
      hiddenSpoiler: e,
      isVisible: t,
      image: n,
      isGalleryImage: !0,
      allImages: l.images
    }));
    return null == s && null == i && null == a && null == o ? null : (0, r.jsxs)("div", {
      className: _.embedGalleryImagesWrapper,
      style: {
        height: n
      },
      children: [(0, r.jsxs)("div", {
        className: _.embedGallerySide,
        children: [s, null != o && a]
      }), (0, r.jsxs)("div", {
        className: _.embedGallerySide,
        children: [i, null == o && null != a && a, null != o && o]
      })]
    })
  }
  renderImage() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: t = !0,
      image: l,
      isGalleryImage: n = !1,
      alt: s = j.default.Messages.IMAGE,
      allImages: i = null
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: o,
      className: d,
      autoPlayGif: u
    } = this.props, {
      maxMediaWidth: c,
      maxMediaHeight: m
    } = this.state;
    if (null == l) return null;
    let h = (0, T.getBestEffortSrcUrl)(l),
      p = null == i ? {} : (0, S.createMediaOnClickOverrides)(i.map(S.carouselAssetFromImageEmbed)),
      f = x.default.isAnimated({
        src: (0, T.getBestEffortSrcUrl)(l),
        original: l.url,
        animated: !1
      }),
      g = {
        containerClassName: a()(d, {
          [_.embedMedia]: !n,
          [_.embedImage]: !n,
          [_.galleryImage]: n
        }),
        imageContainerClassName: n ? _.galleryImageContainer : void 0,
        imageClassName: n ? _.embedGalleryImageElement : void 0,
        src: (0, T.getBestEffortSrcUrl)(l),
        alt: s,
        responsive: !0,
        limitResponsiveWidth: !n,
        width: l.width,
        height: l.height,
        maxWidth: c,
        maxHeight: m,
        original: l.url,
        shouldLink: t,
        disableAltTextDisplay: !0,
        hiddenSpoilers: e,
        placeholder: l.placeholder,
        placeholderVersion: l.placeholderVersion
      };
    return h in p && (g.onClick = p[h]), (0, r.jsx)(C.GIFAccessoryContext.Consumer, {
      children: t => (0, r.jsx)(w.MessagesInteractionContext.Consumer, {
        children: l => {
          let {
            disableAnimations: n
          } = l;
          return o({
            ...g,
            autoPlay: u && !n && !e,
            renderAccessory: f ? t : null
          })
        }
      }, l.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = !1,
      isVisible: t = !0,
      hiddenSpoiler: l = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: n,
        thumbnail: s,
        video: i,
        provider: a
      },
      renderVideoComponent: o,
      renderImageComponent: d,
      renderLinkComponent: u,
      allowFullScreen: c,
      autoPlayGif: m,
      messageId: h,
      channelId: p,
      obscureReason: f
    } = this.props, {
      maxMediaWidth: g,
      maxMediaHeight: b
    } = this.state;
    if (null == n || null == s) return null;
    if (e) return null == i ? null : (0, r.jsx)(w.MessagesInteractionContext.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, r.jsx)(V, {
          className: _.embedMedia,
          href: n,
          thumbnail: s,
          video: i,
          maxWidth: g,
          maxHeight: b,
          responsive: !0,
          autoPlay: !l && m && !a && t,
          renderImageComponent: d,
          playable: t,
          hiddenSpoilers: l,
          disableAltTextDisplay: null != f,
          placeholder: i.placeholder,
          placeholderVersion: i.placeholderVersion
        })
      }
    });
    return (0, r.jsx)(O, {
      className: _.embedMedia,
      href: n,
      allowFullScreen: c,
      thumbnail: s,
      video: i,
      provider: null == a ? void 0 : a.name,
      maxWidth: g,
      maxHeight: b,
      responsive: !0,
      renderImageComponent: d,
      renderVideoComponent: o,
      renderLinkComponent: u,
      onControlsShow: () => {
        this.setState({
          videoControlsShown: !0
        })
      },
      onControlsHide: () => {
        this.setState({
          videoControlsShown: !1
        })
      },
      playable: t && !l,
      messageId: h,
      channelId: p,
      placeholder: null == i ? void 0 : i.placeholder,
      placeholderVersion: null == i ? void 0 : i.placeholderVersion
    })
  }
  renderFooter() {
    let {
      footer: e,
      timestamp: t
    } = this.props.embed;
    if (null != e) {
      let l = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
      return (0, r.jsxs)("div", {
        className: a()(_.embedFooter, _.embedMargin),
        children: [null != l ? (0, r.jsx)("img", {
          alt: "",
          className: _.embedFooterIcon,
          src: l
        }) : null, (0, r.jsxs)("span", {
          className: _.embedFooterText,
          children: [e.text, null != e.text && null != t ? (0, r.jsx)("span", {
            className: _.embedFooterSeparator,
            children: "•"
          }) : null, null != t ? (0, m.calendarFormat)(t) : null]
        })]
      })
    }
    if (null != t) return (0, r.jsx)("div", {
      className: a()(_.embedFooter, _.embedMargin),
      children: (0, r.jsx)("span", {
        className: _.embedFooterText,
        children: (0, m.calendarFormat)(t)
      })
    })
  }
  renderMedia() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        embed: t
      } = this.props,
      {
        isVisible: l
      } = this.state;
    switch (t.type) {
      case N.MessageEmbedTypes.GIFV:
        return this.renderVideo({
          gifv: !0,
          hiddenSpoiler: e,
          isVisible: l
        });
      case N.MessageEmbedTypes.VIDEO:
      default:
        if (null != t.video) return this.renderVideo({
          gifv: !1,
          hiddenSpoiler: e,
          isVisible: l
        });
        if (null != t.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: l
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: l,
          image: t.image,
          alt: t.rawTitle
        })
    }
  }
  renderAll() {
    let e, t;
    let {
      embed: l,
      hideMedia: n
    } = this.props, {
      isVisible: r
    } = this.state, s = this.renderProvider(r), i = this.renderAuthor(r), a = this.renderTitle(r);
    switch (l.type) {
      case N.MessageEmbedTypes.IMAGE:
      case N.MessageEmbedTypes.VIDEO:
      case N.MessageEmbedTypes.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    !n && (t = this.renderMedia(!r));
    let d = this.renderFooter(),
      u = null == t;
    return l.type === N.MessageEmbedTypes.RICH && (u = null == l.video), {
      provider: s,
      author: i,
      title: a,
      description: e,
      thumbnail: !n && u ? this.renderThumbnail(r) : null,
      fields: o,
      media: t,
      footer: d
    }
  }
  getMaxWidth() {
    let {
      embed: {
        image: e,
        images: t,
        video: l,
        type: n
      }
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: s
    } = this.state, i = null != e ? e : l;
    if (null == i) return;
    let {
      width: a
    } = (0, p.fit)({
      width: i.width,
      height: i.height,
      maxWidth: r,
      maxHeight: s
    });
    return n === N.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : n === N.MessageEmbedTypes.RICH && void 0 !== t ? 520 : void 0
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !e && (0, h.isEmbedInline)(t)
  }
  renderSuppressButton(e) {
    return (0, r.jsx)(o.Clickable, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: _.embedSuppressButton,
      onClick: e,
      "aria-label": j.default.Messages.SUPPRESS_ALL_EMBEDS,
      children: (0, r.jsx)(M.default, {
        width: 16,
        height: 16
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === N.MessageEmbedTypes.IMAGE || e.type === N.MessageEmbedTypes.VIDEO || e.type === N.MessageEmbedTypes.GIFV || (e.type === N.MessageEmbedTypes.RICH || e.type === N.MessageEmbedTypes.ARTICLE) && (null != e.video || null != e.image)
  }
  getEmbedColor(e) {
    let {
      color: t
    } = this.props.embed;
    return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
  }
  getSpoilerStyles(e) {
    let {
      embed: {
        image: t,
        images: l,
        video: n,
        type: r
      }
    } = this.props, {
      maxMediaWidth: s,
      maxMediaHeight: i
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let a = e ? void 0 : this.getMaxWidth();
    if (void 0 === a && void 0 === l && r !== N.MessageEmbedTypes.RICH) {
      let e = null != t ? t : n;
      if (void 0 !== e) {
        let {
          width: t
        } = (0, p.fit)({
          width: e.width,
          height: e.height,
          maxWidth: s,
          maxHeight: i
        });
        a = t
      }
    }
    return {
      maxWidth: void 0 === a ? "max-content" : a,
      justifySelf: "auto"
    }
  }
  render() {
    var e;
    let {
      embed: t,
      obscureReason: l,
      className: n
    } = this.props;
    return null != t.provider && b.IFRAME_EMBED_PROVIDERS.includes(t.provider.name) ? (0, r.jsx)(b.default, {
      embed: t,
      className: n
    }) : (0, u.default)(t) ? (0, r.jsx)(E.default, {
      embed: t,
      className: n
    }) : (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === "Amazon Music" && t.type === N.MessageEmbedTypes.RICH ? (0, r.jsx)(f.default, {
      embed: t,
      className: n
    }) : this.isInline() ? null != l ? (0, r.jsx)(v.default, {
      type: v.default.Types.ATTACHMENT,
      reason: l,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!0),
      obscurityControlClassName: a()({
        [_.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != l ? (0, r.jsx)(v.default, {
      type: v.default.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: l,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!1),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var t;
    super(...e), t = this, R(this, "state", {
      isVisible: null == this.props.obscureReason,
      videoControlsShown: !1,
      ...(0, h.getMaxEmbedMediaSize)(this.props.embed)
    }), R(this, "onReveal", () => {
      this.setState({
        isVisible: !0
      })
    }), R(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), R(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          obscureReason: l,
          className: n
        } = t.props;
      return (0, r.jsx)("div", {
        "aria-hidden": e,
        className: a()(_.inlineMediaEmbed, n, {
          [_.spoilerAttachment]: l === d.ObscureReason.SPOILER,
          [_.hiddenExplicitAttachment]: null != l && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
          [_.isHidden]: e,
          [_.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        children: t.renderMedia(e)
      })
    }), R(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          className: l,
          onSuppressEmbed: n,
          obscureReason: s
        } = t.props,
        {
          provider: i,
          author: o,
          title: u,
          description: c,
          fields: m,
          thumbnail: h,
          media: p,
          footer: f
        } = t.renderAll();
      return (0, r.jsx)("article", {
        className: a()(l, _.embedFull, A.markup, {
          [_.isHidden]: e,
          [_.spoilerEmbed]: s === d.ObscureReason.SPOILER,
          [_.hiddenExplicitEmbed]: null != s && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s),
          [_.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth()
        },
        children: (0, r.jsx)("div", {
          className: _.gridContainer,
          children: (0, r.jsxs)("div", {
            className: a()({
              [_.grid]: !0,
              [_.hasThumbnail]: null != h
            }),
            children: [null != n ? t.renderSuppressButton(n) : null, i, o, u, c, m, p, h, f]
          })
        })
      })
    })
  }
}
R(L, "defaultProps", {
  hideMedia: !1,
  allowFullScreen: !0,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80
})