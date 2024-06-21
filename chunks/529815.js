n.d(l, {
  BC: function() {
    return A
  },
  ZP: function() {
    return H
  }
}), n(47120), n(653041);
var t, r = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  o = n(481060),
  u = n(169525),
  d = n(785992),
  h = n(585483),
  c = n(55935),
  m = n(408433),
  p = n(956664),
  g = n(156054),
  f = n(250496),
  b = n(817929),
  x = n(351093),
  v = n(261922),
  y = n(68588),
  w = n(268642),
  C = n(259773),
  I = n(941797),
  j = n(278297),
  E = n(52824),
  N = n(592256),
  S = n(981631),
  T = n(689938),
  M = n(622322),
  k = n(140061),
  L = n(928959);

function P(e, l, n) {
  return l in e ? Object.defineProperty(e, l, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = n, e
}

function A(e) {
  let {
    className: l,
    iframeWrapperClassName: n,
    maxWidth: t,
    maxHeight: s,
    thumbnail: o,
    video: u,
    provider: d,
    allowFullScreen: c = !0,
    responsive: m = !1,
    renderImageComponent: g,
    renderVideoComponent: b,
    renderLinkComponent: x,
    renderForwardComponent: v = S.VqG,
    playable: y = !0,
    autoPlay: w = !1,
    autoMute: I,
    volume: j,
    onPlay: N,
    onPause: T,
    onEnded: M,
    onControlsHide: L,
    onControlsShow: P,
    onVolumeChange: A,
    onMute: _,
    href: H,
    messageId: R,
    channelId: V,
    placeholder: B,
    placeholderVersion: O
  } = e, [F, D] = i.useState(w), W = null != u && null == u.proxyURL, Z = i.useCallback(() => D(!1), [D]), U = e => {
    e.preventDefault(), e.stopPropagation(), null == N || N(!1), D(!0), W && (h.S.dispatch(S.CkL.VIDEO_EMBED_PLAYBACK_STARTED), h.S.subscribeOnce(S.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z))
  };
  i.useEffect(() => () => {
    W && h.S.unsubscribe(S.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z)
  }, [W, Z]);
  let {
    width: G,
    height: q
  } = o;
  null != u && (G = u.width, q = u.height);
  let K = (0, p.Tj)({
    width: G,
    height: q,
    maxWidth: t,
    maxHeight: s
  });
  G = Math.max(K.width, 150), q = Math.max(K.height, 144);
  let Y = (0, E.q)(o);
  if (null != u && null != u.proxyURL) return (0, r.jsx)("div", {
    className: a()(k.embedVideo, l),
    children: b({
      poster: Y,
      src: u.proxyURL,
      placeholder: B,
      placeholderVersion: O,
      width: G,
      height: q,
      responsive: m,
      autoPlay: w,
      onEnded: M,
      naturalWidth: u.width,
      naturalHeight: u.height,
      onVolumeChange: A,
      playable: y,
      autoMute: I,
      volume: j,
      onPlay: N,
      onPause: T,
      onMute: _,
      onControlsHide: L,
      onControlsShow: P,
      renderForwardComponent: v
    })
  });
  if (F && null != u) {
    let e;
    let i = !0 === I || "function" == typeof I && I(),
      o = {
        width: G,
        height: q
      },
      h = {
        width: G,
        height: q
      };
    if (m) {
      let l = 0 !== G ? q / G : 1;
      o = {
        maxWidth: t,
        maxHeight: s,
        width: void 0,
        height: void 0
      }, h = {
        paddingBottom: "".concat(100 * l, "%"),
        maxWidth: G
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: G,
        maxHeight: q
      }
    }
    return (0, r.jsx)("div", {
      className: l,
      style: o,
      children: (0, r.jsx)("div", {
        className: a()(k.embedVideo, n),
        style: h,
        children: (0, r.jsx)(f.ZP, {
          provider: d,
          src: u.url,
          style: e,
          width: G,
          height: q,
          allowFullScreen: c,
          autoMute: i
        })
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(k.embedVideo, l),
    style: m ? {
      maxWidth: G
    } : {
      width: G,
      height: q
    },
    children: [g({
      src: Y,
      width: G,
      height: q,
      maxWidth: G,
      maxHeight: q,
      responsive: m,
      containerClassName: k.embedVideoImageComponent,
      imageClassName: k.embedVideoImageComponentInner,
      placeholder: B,
      placeholderVersion: O,
      onClick: y && null != u ? U : null,
      renderForwardComponent: v
    }), (0, r.jsx)("div", {
      className: k.embedVideoActions,
      children: (0, r.jsx)("div", {
        className: k.centerContent,
        children: y ? (0, r.jsx)(C.Z, {
          onPlay: null != u ? U : null,
          externalURL: H,
          renderLinkComponent: x,
          messageId: R,
          channelId: V
        }) : null
      })
    })]
  })
}

function _(e) {
  let {
    className: l,
    href: n,
    autoPlay: t,
    maxWidth: i,
    maxHeight: s,
    thumbnail: o,
    video: u,
    renderImageComponent: d,
    renderForwardComponent: h,
    responsive: c,
    alt: m,
    disableAltTextDisplay: p = !1,
    playable: g = !0,
    hiddenSpoilers: f,
    placeholder: b,
    placeholderVersion: v
  } = e;
  return (0, r.jsx)(x.Z, {
    className: a()(k.embedVideo, l),
    original: n,
    poster: (0, E.q)(o),
    src: (0, E.q)(u),
    alt: m,
    width: o.width,
    height: o.height,
    naturalHeight: u.height,
    naturalWidth: u.width,
    maxWidth: i,
    maxHeight: s,
    responsive: c,
    autoPlay: t,
    playable: g,
    renderImageComponent: d,
    renderForwardComponent: h,
    hiddenSpoilers: f,
    disableAltTextDisplay: p,
    placeholder: b,
    placeholderVersion: v
  })
}
class H extends(t = i.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          provider: l
        },
        renderLinkComponent: n,
        messageId: t,
        channelId: i
      } = this.props;
    return null == l ? null : (0, r.jsx)("div", {
      className: a()(k.embedProvider, k.embedMargin),
      children: null != l.url ? n({
        className: k.embedLink,
        href: l.url,
        tabIndex: e ? 0 : -1,
        children: l.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: t,
        channelId: i
      }) : (0, r.jsx)("span", {
        children: l.name
      })
    })
  }
  renderAuthor() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          author: l
        },
        renderLinkComponent: n,
        messageId: t,
        channelId: i
      } = this.props;
    return null == l ? null : (0, r.jsxs)("div", {
      className: a()(k.embedAuthor, k.embedMargin),
      children: [null != l.iconProxyURL ? (0, r.jsx)("img", {
        alt: "",
        className: k.embedAuthorIcon,
        src: l.iconProxyURL
      }) : null, null != l.url ? n({
        className: k.embedAuthorNameLink,
        href: l.url,
        tabIndex: e ? 0 : -1,
        children: l.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: t,
        channelId: i
      }) : (0, r.jsx)("span", {
        className: k.embedAuthorName,
        children: l.name
      })]
    })
  }
  renderTitle() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: l,
        renderLinkComponent: n,
        renderTitle: t,
        messageId: i,
        channelId: s
      } = this.props,
      {
        rawTitle: o,
        url: u
      } = l;
    return null == o ? null : (0, r.jsx)("div", {
      className: a()(k.embedTitle, k.embedMargin),
      children: null != u ? n({
        className: k.embedTitleLink,
        href: u,
        tabIndex: e ? 0 : -1,
        children: t(l, o),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: i,
        channelId: s
      }) : t(l, o)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: l
    } = this.props, {
      rawDescription: n
    } = e;
    return null == n ? null : (0, r.jsx)("div", {
      className: a()(k.embedDescription, k.embedMargin),
      children: l(e, n, !1)
    })
  }
  renderThumbnail() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          thumbnail: l
        },
        maxThumbnailWidth: n,
        maxThumbnailHeight: t,
        renderImageComponent: i,
        renderForwardComponent: s,
        autoPlayGif: a
      } = this.props;
    return null == l ? null : (0, r.jsx)(j.G.Consumer, {
      children: r => {
        let {
          disableAnimations: o
        } = r;
        return i({
          containerClassName: k.embedThumbnail,
          src: (0, E.q)(l),
          original: l.url,
          width: l.width,
          height: l.height,
          maxWidth: n,
          maxHeight: t,
          shouldLink: e,
          autoPlay: a && !o,
          renderForwardComponent: s
        })
      }
    })
  }
  renderFields() {
    let {
      embed: e
    } = this.props, {
      fields: l
    } = e;
    if (null == l || 0 === l.length) return null;
    let n = [],
      t = null;
    return l.forEach(l => {
      let {
        rawName: r,
        rawValue: i,
        inline: s
      } = l;
      !s && null != t && (n.push(t), t = null), null == t && (t = []), t.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 === t.length || !s) && (n.push(t), t = null)
    }), null != t && n.push(t), (0, r.jsx)("div", {
      className: k.embedFields,
      children: n.map((e, l) => {
        let {
          length: n
        } = e;
        return e.map((e, t) => {
          let [i, s] = e;
          return (0, r.jsxs)("div", {
            className: k.embedField,
            style: {
              gridColumn: function(e, l) {
                let n = 12 / l,
                  t = e * n;
                return "".concat(t + 1, " / ").concat(t + n + 1)
              }(t, n)
            },
            children: [(0, r.jsx)("div", {
              className: k.embedFieldName,
              children: i
            }), (0, r.jsx)("div", {
              className: k.embedFieldValue,
              children: s
            })]
          }, "".concat(l, "-").concat(t))
        })
      })
    })
  }
  renderImages() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: l = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: n
    } = this.props, {
      maxMediaHeight: t
    } = this.state;
    if (null == n.images) return null;
    let [i, s, a, o] = n.images.map(t => this.renderImage({
      hiddenSpoiler: e,
      isVisible: l,
      image: t,
      isGalleryImage: !0,
      allImages: n.images
    }));
    return null == i && null == s && null == a && null == o ? null : (0, r.jsxs)("div", {
      className: k.embedGalleryImagesWrapper,
      style: {
        height: t
      },
      children: [(0, r.jsxs)("div", {
        className: k.embedGallerySide,
        children: [i, null != o && a]
      }), (0, r.jsxs)("div", {
        className: k.embedGallerySide,
        children: [s, null == o && null != a && a, null != o && o]
      })]
    })
  }
  renderImage() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: l = !0,
      image: n,
      isGalleryImage: t = !1,
      alt: i = T.Z.Messages.IMAGE,
      allImages: s = null
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: o,
      className: u,
      autoPlayGif: d,
      renderForwardComponent: h
    } = this.props, {
      maxMediaWidth: c,
      maxMediaHeight: m
    } = this.state;
    if (null == n) return null;
    let p = (0, E.q)(n),
      g = null == s ? {} : (0, N.Cx)(s.map(e => (0, N.nP)(e, h))),
      f = v.Z.isAnimated({
        src: (0, E.q)(n),
        original: n.url,
        animated: !1
      }),
      b = {
        containerClassName: a()(u, {
          [k.embedMedia]: !t,
          [k.embedImage]: !t,
          [k.galleryImage]: t
        }),
        imageContainerClassName: t ? k.galleryImageContainer : void 0,
        imageClassName: t ? k.embedGalleryImageElement : void 0,
        src: (0, E.q)(n),
        alt: i,
        responsive: !0,
        limitResponsiveWidth: !t,
        width: n.width,
        height: n.height,
        maxWidth: c,
        maxHeight: m,
        original: n.url,
        shouldLink: l,
        disableAltTextDisplay: !0,
        hiddenSpoilers: e,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        renderForwardComponent: h
      };
    return p in g && (b.onClick = g[p]), (0, r.jsx)(I.h.Consumer, {
      children: l => (0, r.jsx)(j.G.Consumer, {
        children: n => {
          let {
            disableAnimations: t
          } = n;
          return o({
            ...b,
            autoPlay: d && !t && !e,
            renderAccessory: f ? l : null
          })
        }
      }, n.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = !1,
      isVisible: l = !0,
      hiddenSpoiler: n = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: t,
        thumbnail: i,
        video: s,
        provider: a
      },
      renderVideoComponent: o,
      renderImageComponent: u,
      renderLinkComponent: d,
      renderForwardComponent: h,
      allowFullScreen: c,
      autoPlayGif: m,
      messageId: p,
      channelId: g,
      obscureReason: f
    } = this.props, {
      maxMediaWidth: b,
      maxMediaHeight: x
    } = this.state;
    if (null == t || null == i) return null;
    if (e) return null == s ? null : (0, r.jsx)(j.G.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, r.jsx)(_, {
          className: k.embedMedia,
          href: t,
          thumbnail: i,
          video: s,
          maxWidth: b,
          maxHeight: x,
          responsive: !0,
          autoPlay: !n && m && !a && l,
          renderImageComponent: u,
          renderForwardComponent: h,
          playable: l,
          hiddenSpoilers: n,
          disableAltTextDisplay: null != f,
          placeholder: s.placeholder,
          placeholderVersion: s.placeholderVersion
        })
      }
    });
    return (0, r.jsx)(A, {
      className: k.embedMedia,
      href: t,
      allowFullScreen: c,
      thumbnail: i,
      video: s,
      provider: null == a ? void 0 : a.name,
      maxWidth: b,
      maxHeight: x,
      responsive: !0,
      renderImageComponent: u,
      renderVideoComponent: o,
      renderLinkComponent: d,
      renderForwardComponent: h,
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
      playable: l && !n,
      messageId: p,
      channelId: g,
      placeholder: null == s ? void 0 : s.placeholder,
      placeholderVersion: null == s ? void 0 : s.placeholderVersion
    })
  }
  renderFooter() {
    let {
      footer: e,
      timestamp: l
    } = this.props.embed;
    if (null != e) {
      let n = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
      return (0, r.jsxs)("div", {
        className: a()(k.embedFooter, k.embedMargin),
        children: [null != n ? (0, r.jsx)("img", {
          alt: "",
          className: k.embedFooterIcon,
          src: n
        }) : null, (0, r.jsxs)("span", {
          className: k.embedFooterText,
          children: [e.text, null != e.text && null != l ? (0, r.jsx)("span", {
            className: k.embedFooterSeparator,
            children: "•"
          }) : null, null != l ? (0, c.Y4)(l) : null]
        })]
      })
    }
    if (null != l) return (0, r.jsx)("div", {
      className: a()(k.embedFooter, k.embedMargin),
      children: (0, r.jsx)("span", {
        className: k.embedFooterText,
        children: (0, c.Y4)(l)
      })
    })
  }
  renderMedia() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        embed: l
      } = this.props,
      {
        isVisible: n
      } = this.state;
    switch (l.type) {
      case S.hBH.GIFV:
        return this.renderVideo({
          gifv: !0,
          hiddenSpoiler: e,
          isVisible: n
        });
      case S.hBH.VIDEO:
      default:
        if (null != l.video) return this.renderVideo({
          gifv: !1,
          hiddenSpoiler: e,
          isVisible: n
        });
        if (null != l.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: n
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: n,
          image: l.image,
          alt: l.rawTitle
        })
    }
  }
  renderAll() {
    let e, l;
    let {
      embed: n,
      hideMedia: t
    } = this.props, {
      isVisible: r
    } = this.state, i = this.renderProvider(r), s = this.renderAuthor(r), a = this.renderTitle(r);
    switch (n.type) {
      case S.hBH.IMAGE:
      case S.hBH.VIDEO:
      case S.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    !t && (l = this.renderMedia(!r));
    let u = this.renderFooter(),
      d = null == l;
    return n.type === S.hBH.RICH && (d = null == n.video), {
      provider: i,
      author: s,
      title: a,
      description: e,
      thumbnail: !t && d ? this.renderThumbnail(r) : null,
      fields: o,
      media: l,
      footer: u
    }
  }
  getMaxWidth() {
    let {
      embed: {
        image: e,
        images: l,
        video: n,
        type: t
      }
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: i
    } = this.state, s = null != e ? e : n;
    if (null == s) return;
    let {
      width: a
    } = (0, p.Tj)({
      width: s.width,
      height: s.height,
      maxWidth: r,
      maxHeight: i
    });
    return t === S.hBH.VIDEO || a >= 300 ? a + 32 : t === S.hBH.RICH && void 0 !== l ? 520 : void 0
  }
  isInline() {
    let {
      hideMedia: e,
      embed: l
    } = this.props;
    return !e && (0, m.dY)(l)
  }
  renderSuppressButton(e) {
    return (0, r.jsx)(o.Clickable, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: k.embedSuppressButton,
      onClick: e,
      "aria-label": T.Z.Messages.SUPPRESS_ALL_EMBEDS,
      children: (0, r.jsx)(o.CloseSmallIcon, {
        size: "xs",
        color: "currentColor"
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === S.hBH.IMAGE || e.type === S.hBH.VIDEO || e.type === S.hBH.GIFV || (e.type === S.hBH.RICH || e.type === S.hBH.ARTICLE) && (null != e.video || null != e.image)
  }
  getEmbedColor(e) {
    let {
      color: l
    } = this.props.embed;
    return null != l && "#ffffff" === l.toLowerCase() || e ? void 0 : l
  }
  getSpoilerStyles(e) {
    let {
      embed: {
        image: l,
        images: n,
        video: t,
        type: r
      }
    } = this.props, {
      maxMediaWidth: i,
      maxMediaHeight: s
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let a = e ? void 0 : this.getMaxWidth();
    if (void 0 === a && void 0 === n && r !== S.hBH.RICH) {
      let e = null != l ? l : t;
      if (void 0 !== e) {
        let {
          width: l
        } = (0, p.Tj)({
          width: e.width,
          height: e.height,
          maxWidth: i,
          maxHeight: s
        });
        a = l
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
      embed: l,
      obscureReason: n,
      className: t
    } = this.props;
    return null != l.provider && b.j.includes(l.provider.name) ? (0, r.jsx)(b.Z, {
      embed: l,
      className: t
    }) : (0, d.Z)(l) ? (0, r.jsx)(w.Z, {
      embed: l,
      className: t
    }) : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === "Amazon Music" && l.type === S.hBH.RICH ? (0, r.jsx)(g.Z, {
      embed: l,
      className: t
    }) : this.isInline() ? null != n ? (0, r.jsx)(y.Z, {
      type: y.Z.Types.ATTACHMENT,
      reason: n,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!0),
      obscurityControlClassName: a()({
        [k.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != n ? (0, r.jsx)(y.Z, {
      type: y.Z.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: n,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!1),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var l;
    super(...e), l = this, P(this, "state", {
      isVisible: null == this.props.obscureReason,
      videoControlsShown: !1,
      ...(0, m.vP)(this.props.embed)
    }), P(this, "onReveal", () => {
      this.setState({
        isVisible: !0
      })
    }), P(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), P(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          obscureReason: n,
          className: t
        } = l.props;
      return (0, r.jsx)("div", {
        "aria-hidden": e,
        className: a()(k.inlineMediaEmbed, t, {
          [k.spoilerAttachment]: n === u.wk.SPOILER,
          [k.hiddenExplicitAttachment]: null != n && [u.wk.EXPLICIT_CONTENT, u.wk.POTENTIAL_EXPLICIT_CONTENT].includes(n),
          [k.isHidden]: e,
          [k.justifyAuto]: l.usesJustifiedAutoStyle()
        }),
        children: l.renderMedia(e)
      })
    }), P(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          className: n,
          onSuppressEmbed: t,
          obscureReason: i
        } = l.props,
        {
          provider: s,
          author: o,
          title: d,
          description: h,
          fields: c,
          thumbnail: m,
          media: p,
          footer: g
        } = l.renderAll();
      return (0, r.jsx)("article", {
        className: a()(n, L.richEmbedWrapper, k.embedFull, M.markup, {
          [k.isHidden]: e,
          [k.spoilerEmbed]: i === u.wk.SPOILER,
          [k.hiddenExplicitEmbed]: null != i && [u.wk.EXPLICIT_CONTENT, u.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
          [k.justifyAuto]: l.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderColor: l.getEmbedColor(e),
          maxWidth: l.getMaxWidth()
        },
        children: (0, r.jsx)("div", {
          className: k.gridContainer,
          children: (0, r.jsxs)("div", {
            className: a()({
              [k.grid]: !0,
              [k.hasThumbnail]: null != m
            }),
            children: [null != t ? l.renderSuppressButton(t) : null, s, o, d, h, c, p, m, g]
          })
        })
      })
    })
  }
}
P(H, "defaultProps", {
  hideMedia: !1,
  allowFullScreen: !0,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80
})