t.d(l, {
  BC: function() {
    return A
  },
  ZP: function() {
    return H
  }
}), t(47120), t(653041);
var n, r = t(735250),
  i = t(470079),
  s = t(120356),
  a = t.n(s),
  o = t(481060),
  d = t(169525),
  u = t(785992),
  h = t(585483),
  c = t(55935),
  m = t(408433),
  p = t(956664),
  g = t(156054),
  f = t(250496),
  b = t(817929),
  x = t(351093),
  v = t(261922),
  y = t(68588),
  w = t(268642),
  C = t(259773),
  I = t(941797),
  j = t(278297),
  E = t(52824),
  N = t(592256),
  T = t(981631),
  S = t(689938),
  M = t(622322),
  k = t(140061),
  L = t(928959);

function P(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = t, e
}

function A(e) {
  let {
    className: l,
    iframeWrapperClassName: t,
    maxWidth: n,
    maxHeight: s,
    thumbnail: o,
    video: d,
    provider: u,
    allowFullScreen: c = !0,
    responsive: m = !1,
    renderImageComponent: g,
    renderVideoComponent: b,
    renderLinkComponent: x,
    renderForwardComponent: v = T.VqG,
    playable: y = !0,
    autoPlay: w = !1,
    autoMute: I,
    volume: j,
    onPlay: N,
    onPause: S,
    onEnded: M,
    onControlsHide: L,
    onControlsShow: P,
    onVolumeChange: A,
    onMute: _,
    href: H,
    messageId: V,
    channelId: R,
    placeholder: B,
    placeholderVersion: F
  } = e, [O, W] = i.useState(w), D = null != d && null == d.proxyURL, Z = i.useCallback(() => W(!1), [W]), G = e => {
    e.preventDefault(), e.stopPropagation(), null == N || N(!1), W(!0), D && (h.S.dispatch(T.CkL.VIDEO_EMBED_PLAYBACK_STARTED), h.S.subscribeOnce(T.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z))
  };
  i.useEffect(() => () => {
    D && h.S.unsubscribe(T.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z)
  }, [D, Z]);
  let {
    width: U,
    height: q
  } = o;
  null != d && (U = d.width, q = d.height);
  let K = (0, p.Tj)({
    width: U,
    height: q,
    maxWidth: n,
    maxHeight: s
  });
  U = Math.max(K.width, 150), q = Math.max(K.height, 144);
  let Y = (0, E.q)(o);
  if (null != d && null != d.proxyURL) return (0, r.jsx)("div", {
    className: a()(k.embedVideo, l),
    children: b({
      poster: Y,
      src: d.proxyURL,
      placeholder: B,
      placeholderVersion: F,
      width: U,
      height: q,
      responsive: m,
      autoPlay: w,
      onEnded: M,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: A,
      playable: y,
      autoMute: I,
      volume: j,
      onPlay: N,
      onPause: S,
      onMute: _,
      onControlsHide: L,
      onControlsShow: P,
      renderForwardComponent: v
    })
  });
  if (O && null != d) {
    let e;
    let i = !0 === I || "function" == typeof I && I(),
      o = {
        width: U,
        height: q
      },
      h = {
        width: U,
        height: q
      };
    if (m) {
      let l = 0 !== U ? q / U : 1;
      o = {
        maxWidth: n,
        maxHeight: s,
        width: void 0,
        height: void 0
      }, h = {
        paddingBottom: "".concat(100 * l, "%"),
        maxWidth: U
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: U,
        maxHeight: q
      }
    }
    return (0, r.jsx)("div", {
      className: l,
      style: o,
      children: (0, r.jsx)("div", {
        className: a()(k.embedVideo, t),
        style: h,
        children: (0, r.jsx)(f.ZP, {
          provider: u,
          src: d.url,
          style: e,
          width: U,
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
      maxWidth: U
    } : {
      width: U,
      height: q
    },
    children: [g({
      src: Y,
      width: U,
      height: q,
      maxWidth: U,
      maxHeight: q,
      responsive: m,
      containerClassName: k.embedVideoImageComponent,
      imageClassName: k.embedVideoImageComponentInner,
      placeholder: B,
      placeholderVersion: F,
      onClick: y && null != d ? G : null,
      renderForwardComponent: v
    }), (0, r.jsx)("div", {
      className: k.embedVideoActions,
      children: (0, r.jsx)("div", {
        className: k.centerContent,
        children: y ? (0, r.jsx)(C.Z, {
          onPlay: null != d ? G : null,
          externalURL: H,
          renderLinkComponent: x,
          messageId: V,
          channelId: R
        }) : null
      })
    })]
  })
}

function _(e) {
  let {
    className: l,
    href: t,
    autoPlay: n,
    maxWidth: i,
    maxHeight: s,
    thumbnail: o,
    video: d,
    renderImageComponent: u,
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
    original: t,
    poster: (0, E.q)(o),
    src: (0, E.q)(d),
    alt: m,
    width: o.width,
    height: o.height,
    naturalHeight: d.height,
    naturalWidth: d.width,
    maxWidth: i,
    maxHeight: s,
    responsive: c,
    autoPlay: n,
    playable: g,
    renderImageComponent: u,
    renderForwardComponent: h,
    hiddenSpoilers: f,
    disableAltTextDisplay: p,
    placeholder: b,
    placeholderVersion: v
  })
}
class H extends(n = i.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          provider: l
        },
        renderLinkComponent: t,
        messageId: n,
        channelId: i
      } = this.props;
    return null == l ? null : (0, r.jsx)("div", {
      className: a()(k.embedProvider, k.embedMargin),
      children: null != l.url ? t({
        className: k.embedLink,
        href: l.url,
        tabIndex: e ? 0 : -1,
        children: l.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
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
        renderLinkComponent: t,
        messageId: n,
        channelId: i
      } = this.props;
    return null == l ? null : (0, r.jsxs)("div", {
      className: a()(k.embedAuthor, k.embedMargin),
      children: [null != l.iconProxyURL ? (0, r.jsx)("img", {
        alt: "",
        className: k.embedAuthorIcon,
        src: l.iconProxyURL
      }) : null, null != l.url ? t({
        className: k.embedAuthorNameLink,
        href: l.url,
        tabIndex: e ? 0 : -1,
        children: l.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
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
        renderLinkComponent: t,
        renderTitle: n,
        messageId: i,
        channelId: s
      } = this.props,
      {
        rawTitle: o,
        url: d
      } = l;
    return null == o ? null : (0, r.jsx)("div", {
      className: a()(k.embedTitle, k.embedMargin),
      children: null != d ? t({
        className: k.embedTitleLink,
        href: d,
        tabIndex: e ? 0 : -1,
        children: n(l, o),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: i,
        channelId: s
      }) : n(l, o)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: l
    } = this.props, {
      rawDescription: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: a()(k.embedDescription, k.embedMargin),
      children: l(e, t, !1)
    })
  }
  renderThumbnail() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          thumbnail: l
        },
        maxThumbnailWidth: t,
        maxThumbnailHeight: n,
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
          maxWidth: t,
          maxHeight: n,
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
    let t = [],
      n = null;
    return l.forEach(l => {
      let {
        rawName: r,
        rawValue: i,
        inline: s
      } = l;
      !s && null != n && (t.push(n), n = null), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 === n.length || !s) && (t.push(n), n = null)
    }), null != n && t.push(n), (0, r.jsx)("div", {
      className: k.embedFields,
      children: t.map((e, l) => {
        let {
          length: t
        } = e;
        return e.map((e, n) => {
          let [i, s] = e;
          return (0, r.jsxs)("div", {
            className: k.embedField,
            style: {
              gridColumn: function(e, l) {
                let t = 12 / l,
                  n = e * t;
                return "".concat(n + 1, " / ").concat(n + t + 1)
              }(n, t)
            },
            children: [(0, r.jsx)("div", {
              className: k.embedFieldName,
              children: i
            }), (0, r.jsx)("div", {
              className: k.embedFieldValue,
              children: s
            })]
          }, "".concat(l, "-").concat(n))
        })
      })
    })
  }
  renderImages() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: l = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: t
    } = this.props, {
      maxMediaHeight: n
    } = this.state;
    if (null == t.images) return null;
    let [i, s, a, o] = t.images.map(n => this.renderImage({
      hiddenSpoiler: e,
      isVisible: l,
      image: n,
      isGalleryImage: !0,
      allImages: t.images
    }));
    return null == i && null == s && null == a && null == o ? null : (0, r.jsxs)("div", {
      className: k.embedGalleryImagesWrapper,
      style: {
        height: n
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
      image: t,
      isGalleryImage: n = !1,
      alt: i = S.Z.Messages.IMAGE,
      allImages: s = null
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: o,
      className: d,
      autoPlayGif: u,
      renderForwardComponent: h
    } = this.props, {
      maxMediaWidth: c,
      maxMediaHeight: m
    } = this.state;
    if (null == t) return null;
    let p = (0, E.q)(t),
      g = null == s ? {} : (0, N.Cx)(s.map(e => (0, N.nP)(e, h))),
      f = v.Z.isAnimated({
        src: (0, E.q)(t),
        original: t.url,
        animated: !1
      }),
      b = {
        containerClassName: a()(d, {
          [k.embedMedia]: !n,
          [k.embedImage]: !n,
          [k.galleryImage]: n
        }),
        imageContainerClassName: n ? k.galleryImageContainer : void 0,
        imageClassName: n ? k.embedGalleryImageElement : void 0,
        src: (0, E.q)(t),
        alt: i,
        responsive: !0,
        limitResponsiveWidth: !n,
        width: t.width,
        height: t.height,
        maxWidth: c,
        maxHeight: m,
        original: t.url,
        shouldLink: l,
        disableAltTextDisplay: !0,
        hiddenSpoilers: e,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholderVersion,
        renderForwardComponent: h
      };
    return p in g && (b.onClick = g[p]), (0, r.jsx)(I.h.Consumer, {
      children: l => (0, r.jsx)(j.G.Consumer, {
        children: t => {
          let {
            disableAnimations: n
          } = t;
          return o({
            ...b,
            autoPlay: u && !n && !e,
            renderAccessory: f ? l : null
          })
        }
      }, t.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = !1,
      isVisible: l = !0,
      hiddenSpoiler: t = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: n,
        thumbnail: i,
        video: s,
        provider: a
      },
      renderVideoComponent: o,
      renderImageComponent: d,
      renderLinkComponent: u,
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
    if (null == n || null == i) return null;
    if (e) return null == s ? null : (0, r.jsx)(j.G.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, r.jsx)(_, {
          className: k.embedMedia,
          href: n,
          thumbnail: i,
          video: s,
          maxWidth: b,
          maxHeight: x,
          responsive: !0,
          autoPlay: !t && m && !a && l,
          renderImageComponent: d,
          renderForwardComponent: h,
          playable: l,
          hiddenSpoilers: t,
          disableAltTextDisplay: null != f,
          placeholder: s.placeholder,
          placeholderVersion: s.placeholderVersion
        })
      }
    });
    return (0, r.jsx)(A, {
      className: k.embedMedia,
      href: n,
      allowFullScreen: c,
      thumbnail: i,
      video: s,
      provider: null == a ? void 0 : a.name,
      maxWidth: b,
      maxHeight: x,
      responsive: !0,
      renderImageComponent: d,
      renderVideoComponent: o,
      renderLinkComponent: u,
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
      playable: l && !t,
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
      let t = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
      return (0, r.jsxs)("div", {
        className: a()(k.embedFooter, k.embedMargin),
        children: [null != t ? (0, r.jsx)("img", {
          alt: "",
          className: k.embedFooterIcon,
          src: t
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
        isVisible: t
      } = this.state;
    switch (l.type) {
      case T.hBH.GIFV:
        return this.renderVideo({
          gifv: !0,
          hiddenSpoiler: e,
          isVisible: t
        });
      case T.hBH.VIDEO:
      default:
        if (null != l.video) return this.renderVideo({
          gifv: !1,
          hiddenSpoiler: e,
          isVisible: t
        });
        if (null != l.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: t
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: t,
          image: l.image,
          alt: l.rawTitle
        })
    }
  }
  renderAll() {
    let e, l;
    let {
      embed: t,
      hideMedia: n
    } = this.props, {
      isVisible: r
    } = this.state, i = this.renderProvider(r), s = this.renderAuthor(r), a = this.renderTitle(r);
    switch (t.type) {
      case T.hBH.IMAGE:
      case T.hBH.VIDEO:
      case T.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    !n && (l = this.renderMedia(!r));
    let d = this.renderFooter(),
      u = null == l;
    return t.type === T.hBH.RICH && (u = null == t.video), {
      provider: i,
      author: s,
      title: a,
      description: e,
      thumbnail: !n && u ? this.renderThumbnail(r) : null,
      fields: o,
      media: l,
      footer: d
    }
  }
  getMaxWidth() {
    let {
      embed: {
        image: e,
        images: l,
        video: t,
        type: n,
        thumbnail: r
      }
    } = this.props, {
      maxMediaWidth: i,
      maxMediaHeight: s
    } = this.state, a = null != e ? e : t;
    if (null == a) return;
    let {
      width: o
    } = (0, p.Tj)({
      width: a.width,
      height: a.height,
      maxWidth: i,
      maxHeight: s
    });
    if (n === T.hBH.VIDEO || o >= 300) return o + 32;
    if (n === T.hBH.RICH && void 0 !== l) return 520;
    if (n === T.hBH.GIFV) {
      var d, u, h, c;
      let {
        width: e
      } = (0, p.Tj)({
        width: Math.max(null !== (d = null == r ? void 0 : r.width) && void 0 !== d ? d : 0, null !== (u = null == t ? void 0 : t.width) && void 0 !== u ? u : 0),
        height: Math.max(null !== (h = null == r ? void 0 : r.height) && void 0 !== h ? h : 0, null !== (c = null == t ? void 0 : t.height) && void 0 !== c ? c : 0),
        maxWidth: i,
        maxHeight: s
      });
      return e
    }
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
      "aria-label": S.Z.Messages.SUPPRESS_ALL_EMBEDS,
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
    return e.type === T.hBH.IMAGE || e.type === T.hBH.VIDEO || e.type === T.hBH.GIFV || (e.type === T.hBH.RICH || e.type === T.hBH.ARTICLE) && (null != e.video || null != e.image)
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
        images: t,
        video: n,
        type: r
      }
    } = this.props, {
      maxMediaWidth: i,
      maxMediaHeight: s
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let a = e ? void 0 : this.getMaxWidth();
    if (void 0 === a && void 0 === t && r !== T.hBH.RICH) {
      let e = null != l ? l : n;
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
      obscureReason: t,
      className: n
    } = this.props;
    return null != l.provider && b.j.includes(l.provider.name) ? (0, r.jsx)(b.Z, {
      embed: l,
      className: n
    }) : (0, u.Z)(l) ? (0, r.jsx)(w.Z, {
      embed: l,
      className: n
    }) : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === "Amazon Music" && l.type === T.hBH.RICH ? (0, r.jsx)(g.Z, {
      embed: l,
      className: n
    }) : this.isInline() ? null != t ? (0, r.jsx)(y.Z, {
      type: y.Z.Types.ATTACHMENT,
      reason: t,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!0),
      obscurityControlClassName: a()({
        [k.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != t ? (0, r.jsx)(y.Z, {
      type: y.Z.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: t,
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
          obscureReason: t,
          className: n
        } = l.props,
        i = l.getMaxWidth();
      return (0, r.jsx)("div", {
        "aria-hidden": e,
        className: a()(k.inlineMediaEmbed, n, {
          [k.spoilerAttachment]: t === d.wk.SPOILER,
          [k.hiddenExplicitAttachment]: null != t && [d.wk.EXPLICIT_CONTENT, d.wk.POTENTIAL_EXPLICIT_CONTENT].includes(t),
          [k.isHidden]: e,
          [k.justifyAuto]: l.usesJustifiedAutoStyle(),
          [L.embedFlexGrow]: null != i
        }),
        style: {
          maxWidth: i
        },
        children: l.renderMedia(e)
      })
    }), P(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          className: t,
          onSuppressEmbed: n,
          obscureReason: i
        } = l.props,
        {
          provider: s,
          author: o,
          title: u,
          description: h,
          fields: c,
          thumbnail: m,
          media: p,
          footer: g
        } = l.renderAll();
      return (0, r.jsx)("article", {
        className: a()(t, L.embedFlexGrow, k.embedFull, M.markup, {
          [k.isHidden]: e,
          [k.spoilerEmbed]: i === d.wk.SPOILER,
          [k.hiddenExplicitEmbed]: null != i && [d.wk.EXPLICIT_CONTENT, d.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
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
            children: [null != n ? l.renderSuppressButton(n) : null, s, o, u, h, c, p, m, g]
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