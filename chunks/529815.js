"use strict";
l.r(t), l.d(t, {
  EmbedVideo: function() {
    return R
  },
  default: function() {
    return V
  }
}), l("47120"), l("653041");
var n, r = l("735250"),
  s = l("470079"),
  i = l("120356"),
  a = l.n(i),
  o = l("481060"),
  d = l("169525"),
  u = l("585483"),
  c = l("55935"),
  m = l("408433"),
  h = l("956664"),
  p = l("156054"),
  g = l("250496"),
  f = l("817929"),
  b = l("351093"),
  x = l("261922"),
  y = l("68588"),
  v = l("268642"),
  E = l("259773"),
  I = l("941797"),
  C = l("278297"),
  w = l("465670"),
  M = l("52824"),
  T = l("592256"),
  S = l("981631"),
  j = l("689938"),
  N = l("946278"),
  A = l("214607");

function _(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}

function R(e) {
  let {
    className: t,
    iframeWrapperClassName: l,
    maxWidth: n,
    maxHeight: i,
    thumbnail: o,
    video: d,
    provider: c,
    allowFullScreen: m = !0,
    responsive: p = !1,
    renderImageComponent: f,
    renderVideoComponent: b,
    renderLinkComponent: x,
    playable: y = !0,
    autoPlay: v = !1,
    autoMute: I,
    volume: C,
    onPlay: w,
    onPause: T,
    onEnded: j,
    onControlsHide: N,
    onControlsShow: _,
    onVolumeChange: R,
    onMute: O,
    href: V,
    messageId: k,
    channelId: L,
    placeholder: D,
    placeholderVersion: P
  } = e, [F, U] = s.useState(v), H = null != d && null == d.proxyURL, W = s.useCallback(() => U(!1), [U]), B = e => {
    e.preventDefault(), e.stopPropagation(), null == w || w(!1), U(!0), H && (u.ComponentDispatch.dispatch(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), u.ComponentDispatch.subscribeOnce(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, W))
  };
  s.useEffect(() => () => {
    H && u.ComponentDispatch.unsubscribe(S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, W)
  }, [H, W]);
  let {
    width: G,
    height: X
  } = o;
  null != d && (G = d.width, X = d.height);
  let z = (0, h.fit)({
    width: G,
    height: X,
    maxWidth: n,
    maxHeight: i
  });
  G = Math.max(z.width, 150), X = Math.max(z.height, 144);
  let Y = (0, M.getBestEffortSrcUrl)(o);
  if (null != d && null != d.proxyURL) return (0, r.jsx)("div", {
    className: a()(A.embedVideo, t),
    children: b({
      poster: Y,
      src: d.proxyURL,
      placeholder: D,
      placeholderVersion: P,
      width: G,
      height: X,
      responsive: p,
      autoPlay: v,
      onEnded: j,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: R,
      playable: y,
      autoMute: I,
      volume: C,
      onPlay: w,
      onPause: T,
      onMute: O,
      onControlsHide: N,
      onControlsShow: _
    })
  });
  if (F && null != d) {
    let e;
    let s = !0 === I || "function" == typeof I && I(),
      o = {
        width: G,
        height: X
      },
      u = {
        width: G,
        height: X
      };
    if (p) {
      let t = 0 !== G ? X / G : 1;
      o = {
        maxWidth: n,
        maxHeight: i,
        width: void 0,
        height: void 0
      }, u = {
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
        className: a()(A.embedVideo, l),
        style: u,
        children: (0, r.jsx)(g.default, {
          provider: c,
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
    className: a()(A.embedVideo, t),
    style: p ? {
      maxWidth: G
    } : {
      width: G,
      height: X
    },
    children: [f({
      src: Y,
      width: G,
      height: X,
      maxWidth: G,
      maxHeight: X,
      responsive: p,
      containerClassName: A.embedVideoImageComponent,
      imageClassName: A.embedVideoImageComponentInner,
      placeholder: D,
      placeholderVersion: P,
      onClick: y && null != d ? B : null
    }), (0, r.jsx)("div", {
      className: A.embedVideoActions,
      children: (0, r.jsx)("div", {
        className: A.centerContent,
        children: y ? (0, r.jsx)(E.default, {
          onPlay: null != d ? B : null,
          externalURL: V,
          renderLinkComponent: x,
          messageId: k,
          channelId: L
        }) : null
      })
    })]
  })
}

function O(e) {
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
    hiddenSpoilers: g,
    placeholder: f,
    placeholderVersion: x
  } = e;
  return (0, r.jsx)(b.default, {
    className: a()(A.embedVideo, t),
    original: l,
    poster: (0, M.getBestEffortSrcUrl)(o),
    src: (0, M.getBestEffortSrcUrl)(d),
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
    hiddenSpoilers: g,
    disableAltTextDisplay: h,
    placeholder: f,
    placeholderVersion: x
  })
}
class V extends(n = s.PureComponent) {
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
      className: a()(A.embedProvider, A.embedMargin),
      children: null != t.url ? l({
        className: A.embedLink,
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
      className: a()(A.embedAuthor, A.embedMargin),
      children: [null != t.iconProxyURL ? (0, r.jsx)("img", {
        alt: "",
        className: A.embedAuthorIcon,
        src: t.iconProxyURL
      }) : null, null != t.url ? l({
        className: A.embedAuthorNameLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
        channelId: s
      }) : (0, r.jsx)("span", {
        className: A.embedAuthorName,
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
      className: a()(A.embedTitle, A.embedMargin),
      children: null != d ? l({
        className: A.embedTitleLink,
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
      className: a()(A.embedDescription, A.embedMargin),
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
    return null == t ? null : (0, r.jsx)(C.MessagesInteractionContext.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return s({
          containerClassName: A.embedThumbnail,
          src: (0, M.getBestEffortSrcUrl)(t),
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
      className: A.embedFields,
      children: l.map((e, t) => {
        let {
          length: l
        } = e;
        return e.map((e, n) => {
          let [s, i] = e;
          return (0, r.jsxs)("div", {
            className: A.embedField,
            style: {
              gridColumn: function(e, t) {
                let l = 12 / t,
                  n = e * l;
                return "".concat(n + 1, " / ").concat(n + l + 1)
              }(n, l)
            },
            children: [(0, r.jsx)("div", {
              className: A.embedFieldName,
              children: s
            }), (0, r.jsx)("div", {
              className: A.embedFieldValue,
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
      className: A.embedGalleryImagesWrapper,
      style: {
        height: n
      },
      children: [(0, r.jsxs)("div", {
        className: A.embedGallerySide,
        children: [s, null != o && a]
      }), (0, r.jsxs)("div", {
        className: A.embedGallerySide,
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
    let h = (0, M.getBestEffortSrcUrl)(l),
      p = null == i ? {} : (0, T.createMediaOnClickOverrides)(i.map(T.carouselAssetFromImageEmbed)),
      g = x.default.isAnimated({
        src: (0, M.getBestEffortSrcUrl)(l),
        original: l.url,
        animated: !1
      }),
      f = {
        containerClassName: a()(d, {
          [A.embedMedia]: !n,
          [A.embedImage]: !n,
          [A.galleryImage]: n
        }),
        imageContainerClassName: n ? A.galleryImageContainer : void 0,
        imageClassName: n ? A.embedGalleryImageElement : void 0,
        src: (0, M.getBestEffortSrcUrl)(l),
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
    return h in p && (f.onClick = p[h]), (0, r.jsx)(I.GIFAccessoryContext.Consumer, {
      children: t => (0, r.jsx)(C.MessagesInteractionContext.Consumer, {
        children: l => {
          let {
            disableAnimations: n
          } = l;
          return o({
            ...f,
            autoPlay: u && !n && !e,
            renderAccessory: g ? t : null
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
      obscureReason: g
    } = this.props, {
      maxMediaWidth: f,
      maxMediaHeight: b
    } = this.state;
    if (null == n || null == s) return null;
    if (e) return null == i ? null : (0, r.jsx)(C.MessagesInteractionContext.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, r.jsx)(O, {
          className: A.embedMedia,
          href: n,
          thumbnail: s,
          video: i,
          maxWidth: f,
          maxHeight: b,
          responsive: !0,
          autoPlay: !l && m && !a && t,
          renderImageComponent: d,
          playable: t,
          hiddenSpoilers: l,
          disableAltTextDisplay: null != g,
          placeholder: i.placeholder,
          placeholderVersion: i.placeholderVersion
        })
      }
    });
    return (0, r.jsx)(R, {
      className: A.embedMedia,
      href: n,
      allowFullScreen: c,
      thumbnail: s,
      video: i,
      provider: null == a ? void 0 : a.name,
      maxWidth: f,
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
        className: a()(A.embedFooter, A.embedMargin),
        children: [null != l ? (0, r.jsx)("img", {
          alt: "",
          className: A.embedFooterIcon,
          src: l
        }) : null, (0, r.jsxs)("span", {
          className: A.embedFooterText,
          children: [e.text, null != e.text && null != t ? (0, r.jsx)("span", {
            className: A.embedFooterSeparator,
            children: "•"
          }) : null, null != t ? (0, c.calendarFormat)(t) : null]
        })]
      })
    }
    if (null != t) return (0, r.jsx)("div", {
      className: a()(A.embedFooter, A.embedMargin),
      children: (0, r.jsx)("span", {
        className: A.embedFooterText,
        children: (0, c.calendarFormat)(t)
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
      case S.MessageEmbedTypes.GIFV:
        return this.renderVideo({
          gifv: !0,
          hiddenSpoiler: e,
          isVisible: l
        });
      case S.MessageEmbedTypes.VIDEO:
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
      case S.MessageEmbedTypes.IMAGE:
      case S.MessageEmbedTypes.VIDEO:
      case S.MessageEmbedTypes.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    !n && (t = this.renderMedia(!r));
    let d = this.renderFooter(),
      u = null == t;
    return l.type === S.MessageEmbedTypes.RICH && (u = null == l.video), {
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
    } = (0, h.fit)({
      width: i.width,
      height: i.height,
      maxWidth: r,
      maxHeight: s
    });
    return n === S.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : n === S.MessageEmbedTypes.RICH && void 0 !== t ? 520 : void 0
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !e && (0, m.isEmbedInline)(t)
  }
  renderSuppressButton(e) {
    return (0, r.jsx)(o.Clickable, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: A.embedSuppressButton,
      onClick: e,
      "aria-label": j.default.Messages.SUPPRESS_ALL_EMBEDS,
      children: (0, r.jsx)(w.default, {
        width: 16,
        height: 16
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === S.MessageEmbedTypes.IMAGE || e.type === S.MessageEmbedTypes.VIDEO || e.type === S.MessageEmbedTypes.GIFV || (e.type === S.MessageEmbedTypes.RICH || e.type === S.MessageEmbedTypes.ARTICLE) && (null != e.video || null != e.image)
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
    if (void 0 === a && void 0 === l && r !== S.MessageEmbedTypes.RICH) {
      let e = null != t ? t : n;
      if (void 0 !== e) {
        let {
          width: t
        } = (0, h.fit)({
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
    var e, t;
    let {
      embed: l,
      obscureReason: n,
      className: s
    } = this.props;
    return null != l.provider && f.IFRAME_EMBED_PROVIDERS.includes(l.provider.name) ? (0, r.jsx)(f.default, {
      embed: l,
      className: s
    }) : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === "Spotify" ? (0, r.jsx)(v.default, {
      embed: l,
      className: s
    }) : (null === (t = l.provider) || void 0 === t ? void 0 : t.name) === "Amazon Music" && l.type === S.MessageEmbedTypes.RICH ? (0, r.jsx)(p.default, {
      embed: l,
      className: s
    }) : this.isInline() ? null != n ? (0, r.jsx)(y.default, {
      type: y.default.Types.ATTACHMENT,
      reason: n,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!0),
      obscurityControlClassName: a()({
        [A.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != n ? (0, r.jsx)(y.default, {
      type: y.default.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: n,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!1),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var t;
    super(...e), t = this, _(this, "state", {
      isVisible: null == this.props.obscureReason,
      videoControlsShown: !1,
      ...(0, m.getMaxEmbedMediaSize)(this.props.embed)
    }), _(this, "onReveal", () => {
      this.setState({
        isVisible: !0
      })
    }), _(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), _(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          obscureReason: l,
          className: n
        } = t.props;
      return (0, r.jsx)("div", {
        "aria-hidden": e,
        className: a()(A.inlineMediaEmbed, n, {
          [A.spoilerAttachment]: l === d.ObscureReason.SPOILER,
          [A.hiddenExplicitAttachment]: null != l && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
          [A.isHidden]: e,
          [A.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        children: t.renderMedia(e)
      })
    }), _(this, "renderEmbedContent", function() {
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
          footer: g
        } = t.renderAll();
      return (0, r.jsx)("article", {
        className: a()(l, A.embedFull, N.markup, {
          [A.isHidden]: e,
          [A.spoilerEmbed]: s === d.ObscureReason.SPOILER,
          [A.hiddenExplicitEmbed]: null != s && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s),
          [A.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth()
        },
        children: (0, r.jsx)("div", {
          className: A.gridContainer,
          children: (0, r.jsxs)("div", {
            className: a()({
              [A.grid]: !0,
              [A.hasThumbnail]: null != h
            }),
            children: [null != n ? t.renderSuppressButton(n) : null, i, o, u, c, m, p, h, g]
          })
        })
      })
    })
  }
}
_(V, "defaultProps", {
  hideMedia: !1,
  allowFullScreen: !0,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80
})