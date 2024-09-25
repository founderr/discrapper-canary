n.d(t, {
    BC: function () {
        return z;
    },
    ZP: function () {
        return Q;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(892814),
    d = n(481060),
    _ = n(399654),
    E = n(370298),
    f = n(95398),
    h = n(947849),
    p = n(624195),
    m = n(44824),
    I = n(124347),
    T = n(283756),
    g = n(169525),
    S = n(780088),
    A = n(785992),
    v = n(400266),
    N = n(592125),
    O = n(52824),
    R = n(626135),
    C = n(585483),
    y = n(55935),
    b = n(408433),
    L = n(956664),
    D = n(468846),
    M = n(401419),
    P = n(249458),
    U = n(981631),
    w = n(217702),
    x = n(689938),
    G = n(269625),
    k = n(275703),
    B = n(554034),
    F = n(287847);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let V = 32,
    H = 12,
    Y = 150,
    j = 144,
    W = 520;
function K(e, t) {
    let n = H / t,
        r = e * n;
    return ''.concat(r + 1, ' / ').concat(r + n + 1);
}
function z(e) {
    let { className: t, iframeWrapperClassName: n, maxWidth: r, maxHeight: i, thumbnail: a, video: l, provider: c, allowFullScreen: d = !0, responsive: _ = !1, renderImageComponent: E, renderVideoComponent: f, renderLinkComponent: h, renderForwardComponent: p = U.VqG, playable: m = !0, autoPlay: I = !1, autoMute: g, volume: S, onPlay: A, onPause: v, onEnded: N, onControlsHide: R, onControlsShow: y, onVolumeChange: b, onMute: M, href: P, messageId: w, channelId: x, placeholder: k, placeholderVersion: B } = e,
        [F, Z] = s.useState(I),
        V = null != l && null == l.proxyURL,
        H = s.useCallback(() => Z(!1), [Z]),
        W = (e) => {
            e.preventDefault(), e.stopPropagation(), null == A || A(!1), Z(!0), V && (C.S.dispatch(U.CkL.VIDEO_EMBED_PLAYBACK_STARTED), C.S.subscribeOnce(U.CkL.VIDEO_EMBED_PLAYBACK_STARTED, H));
        };
    s.useEffect(
        () => () => {
            V && C.S.unsubscribe(U.CkL.VIDEO_EMBED_PLAYBACK_STARTED, H);
        },
        [V, H]
    );
    let { width: K, height: z } = a;
    null != l && ((K = l.width), (z = l.height));
    let q = (0, L.Tj)({
        width: K,
        height: z,
        maxWidth: r,
        maxHeight: i
    });
    (K = Math.max(q.width, Y)), (z = Math.max(q.height, j));
    let Q = (0, O.q)(a);
    if (null != l && null != l.proxyURL)
        return (0, o.jsx)('div', {
            className: u()(G.embedVideo, t),
            children: f({
                poster: Q,
                src: l.proxyURL,
                placeholder: k,
                placeholderVersion: B,
                width: K,
                height: z,
                responsive: _,
                autoPlay: I,
                onEnded: N,
                naturalWidth: l.width,
                naturalHeight: l.height,
                onVolumeChange: b,
                playable: m,
                autoMute: g,
                volume: S,
                onPlay: A,
                onPause: v,
                onMute: M,
                onControlsHide: R,
                onControlsShow: y,
                renderForwardComponent: p
            })
        });
    if (F && null != l) {
        let e;
        let a = !0 === g || ('function' == typeof g && g()),
            s = {
                width: K,
                height: z
            },
            E = {
                width: K,
                height: z
            };
        if (_) {
            let t = 0 !== K ? z / K : 1;
            (s = {
                maxWidth: r,
                maxHeight: i,
                width: void 0,
                height: void 0
            }),
                (E = {
                    paddingBottom: ''.concat(100 * t, '%'),
                    maxWidth: K
                }),
                (e = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    maxWidth: K,
                    maxHeight: z
                });
        }
        return (0, o.jsx)('div', {
            className: t,
            style: s,
            children: (0, o.jsx)('div', {
                className: u()(G.embedVideo, n),
                style: E,
                children: (0, o.jsx)(D.ZP, {
                    provider: c,
                    src: l.url,
                    style: e,
                    width: K,
                    height: z,
                    allowFullScreen: d,
                    autoMute: a
                })
            })
        });
    }
    return (0, o.jsxs)('div', {
        className: u()(G.embedVideo, t),
        style: _
            ? { maxWidth: K }
            : {
                  width: K,
                  height: z
              },
        children: [
            E({
                src: Q,
                width: K,
                height: z,
                maxWidth: K,
                maxHeight: z,
                responsive: _,
                containerClassName: G.embedVideoImageComponent,
                imageClassName: G.embedVideoImageComponentInner,
                placeholder: k,
                placeholderVersion: B,
                onClick: m && null != l ? W : null,
                renderForwardComponent: p
            }),
            (0, o.jsx)('div', {
                className: G.embedVideoActions,
                children: (0, o.jsx)('div', {
                    className: G.centerContent,
                    children: m
                        ? (0, o.jsx)(T.Z, {
                              onPlay: null != l ? W : null,
                              externalURL: P,
                              renderLinkComponent: h,
                              messageId: w,
                              channelId: x
                          })
                        : null
                })
            })
        ]
    });
}
function q(e) {
    let { className: t, href: n, autoPlay: r, maxWidth: i, maxHeight: a, thumbnail: s, video: l, renderImageComponent: c, renderForwardComponent: d, responsive: _, alt: E, disableAltTextDisplay: f = !1, playable: h = !0, hiddenSpoilers: p, placeholder: I, placeholderVersion: T } = e;
    return (0, o.jsx)(m.Z, {
        className: u()(G.embedVideo, t),
        original: n,
        poster: (0, O.q)(s),
        src: (0, O.q)(l),
        alt: E,
        width: s.width,
        height: s.height,
        naturalHeight: l.height,
        naturalWidth: l.width,
        maxWidth: i,
        maxHeight: a,
        responsive: _,
        autoPlay: r,
        playable: h,
        renderImageComponent: c,
        renderForwardComponent: d,
        hiddenSpoilers: p,
        disableAltTextDisplay: f,
        placeholder: I,
        placeholderVersion: T
    });
}
class Q extends (r = s.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: n,
                messageId: r,
                channelId: i
            } = this.props;
        return null == t
            ? null
            : (0, o.jsx)('div', {
                  className: u()(G.embedProvider, G.embedMargin),
                  children:
                      null != t.url
                          ? n({
                                className: G.embedLink,
                                href: t.url,
                                tabIndex: e ? 0 : -1,
                                children: t.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: r,
                                channelId: i
                            })
                          : (0, o.jsx)('span', { children: t.name })
              });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: n,
                messageId: r,
                channelId: i
            } = this.props;
        return null == t
            ? null
            : (0, o.jsxs)('div', {
                  className: u()(G.embedAuthor, G.embedMargin),
                  children: [
                      null != t.iconProxyURL
                          ? (0, o.jsx)('img', {
                                alt: '',
                                className: G.embedAuthorIcon,
                                src: t.iconProxyURL
                            })
                          : null,
                      null != t.url
                          ? n({
                                className: G.embedAuthorNameLink,
                                href: t.url,
                                tabIndex: e ? 0 : -1,
                                children: t.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: r,
                                channelId: i
                            })
                          : (0, o.jsx)('span', {
                                className: G.embedAuthorName,
                                children: t.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: n, renderTitle: r, messageId: i, channelId: a } = this.props,
            { rawTitle: s, url: l } = t;
        return null == s
            ? null
            : (0, o.jsx)('div', {
                  className: u()(G.embedTitle, G.embedMargin),
                  children:
                      null != l
                          ? n({
                                className: G.embedTitleLink,
                                href: l,
                                tabIndex: e ? 0 : -1,
                                children: r(t, s),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: i,
                                channelId: a
                            })
                          : r(t, s)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
        return null == n
            ? null
            : (0, o.jsx)('div', {
                  className: u()(G.embedDescription, G.embedMargin),
                  children: t(e, n, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: n,
                maxThumbnailHeight: r,
                renderImageComponent: i,
                renderForwardComponent: a,
                autoPlayGif: s
            } = this.props;
        return null == t
            ? null
            : (0, o.jsx)(P.G.Consumer, {
                  children: (o) => {
                      let { disableAnimations: l } = o;
                      return i({
                          containerClassName: G.embedThumbnail,
                          src: (0, O.q)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: n,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: s && !l,
                          renderForwardComponent: a
                      });
                  }
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: t } = e;
        if (null == t || 0 === t.length) return null;
        let n = [],
            r = null;
        return (
            t.forEach((t) => {
                let { rawName: i, rawValue: a, inline: o } = t;
                !o && null != r && (n.push(r), (r = null)), null == r && (r = []), r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, !0)]), (3 === r.length || !o) && (n.push(r), (r = null));
            }),
            null != r && n.push(r),
            (0, o.jsx)('div', {
                className: G.embedFields,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let [i, a] = e;
                        return (0, o.jsxs)(
                            'div',
                            {
                                className: G.embedField,
                                style: { gridColumn: K(r, n) },
                                children: [
                                    (0, o.jsx)('div', {
                                        className: G.embedFieldName,
                                        children: i
                                    }),
                                    (0, o.jsx)('div', {
                                        className: G.embedFieldValue,
                                        children: a
                                    })
                                ]
                            },
                            ''.concat(t, '-').concat(r)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: n } = this.props,
            { maxMediaHeight: r } = this.state;
        if (null == n.images) return null;
        let [i, a, s, l] = n.images.map((r) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: t,
                image: r,
                isGalleryImage: !0,
                allImages: n.images
            })
        );
        return null == i && null == a && null == s && null == l
            ? null
            : (0, o.jsxs)('div', {
                  className: G.embedGalleryImagesWrapper,
                  style: { height: r },
                  children: [
                      (0, o.jsxs)('div', {
                          className: G.embedGallerySide,
                          children: [i, null != l && s]
                      }),
                      (0, o.jsxs)('div', {
                          className: G.embedGallerySide,
                          children: [a, null == l && null != s && s, null != l && l]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: t, downloadURL: n, isVisualMediaType: r, channelId: i } = e,
            a = () => {
                this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
            };
        return (0, o.jsx)('div', {
            className: u()(k.hoverButtonGroup, {
                [k.nonMediaMosaicItem]: !r,
                [k.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, o.jsx)(E.Z, {
                toggleShowMenu: a,
                showMenu: this.state.showImageAppMenu,
                channelId: i,
                className: u()(k.hoverButton, { [k.selected]: this.state.showImageAppMenu }),
                imageUrl: n,
                mimeType: t
            })
        });
    }
    handleImageHover(e, t, n) {
        if (n) {
            if (e && !this.state.isImageHovered) {
                this.setState({ isImageHovered: !0 });
                let e = N.Z.getChannel(this.props.channelId);
                if (this.props.showImageRecs) {
                    var r;
                    (0, _.a)({
                        channelId: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : '',
                        location: c.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    });
                }
                R.default.track(U.rMx.IMAGE_HOVERED, {
                    guild_id: null == e ? void 0 : e.guild_id,
                    channel_id: null == e ? void 0 : e.id,
                    image_recommendations_shown: this.props.showImageRecs
                });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, t;
        let { hiddenSpoiler: n = !1, isVisible: r = !0, image: i, isGalleryImage: a = !1, alt: s = x.Z.Messages.IMAGE, allImages: l = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: c, className: d, autoPlayGif: _, renderForwardComponent: E } = this.props,
            { maxMediaWidth: f, maxMediaHeight: p } = this.state;
        if (null == i) return null;
        let m = (0, O.q)(i),
            T = null == l ? {} : (0, S.Cx)(l.map((e) => (0, S.nP)(e, E))),
            g = I.Z.isAnimated({
                src: (0, O.q)(i),
                original: i.url,
                animated: !1
            }),
            A = {
                containerClassName: u()(d, {
                    [G.embedMedia]: !a,
                    [G.embedImage]: !a,
                    [G.galleryImage]: a
                }),
                imageContainerClassName: a ? G.galleryImageContainer : void 0,
                imageClassName: a ? G.embedGalleryImageElement : void 0,
                src: (0, O.q)(i),
                alt: s,
                responsive: !0,
                limitResponsiveWidth: !a,
                width: i.width,
                height: i.height,
                maxWidth: f,
                maxHeight: p,
                original: i.url,
                shouldLink: r,
                disableAltTextDisplay: !0,
                hiddenSpoilers: n,
                placeholder: i.placeholder,
                placeholderVersion: i.placeholderVersion,
                renderForwardComponent: E
            };
        m in T && (A.onClick = T[m]);
        let v = null !== (t = null === (e = i.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== t ? t : '';
        'jpg' === v && (v = 'jpeg');
        let N = null != i && !I.W.test(null == i ? void 0 : i.url),
            R = !0 !== this.props.isSearchResult && r && null != this.props.channelId && void 0 !== this.props.channelId && N && !X(i) && null != v;
        return (0, o.jsx)(h.h.Consumer, {
            children: (e) =>
                (0, o.jsx)(
                    P.G.Consumer,
                    {
                        children: (t) => {
                            let { disableAnimations: r } = t;
                            return c({
                                ...A,
                                autoPlay: _ && !r && !n,
                                renderAccessory: g ? e : null,
                                onMouseEnter: () => this.handleImageHover(!0, i, R),
                                onMouseLeave: () => this.handleImageHover(!1, i, R),
                                renderAdjacentContent: () => {
                                    var e;
                                    return !0 === this.props.showImageRecs && R
                                        ? this.renderImageHoverButtons({
                                              mimeType: ['image', v],
                                              downloadURL: null !== (e = i.proxyURL) && void 0 !== e ? e : i.url,
                                              isVisualMediaType: null != i,
                                              channelId: this.props.channelId
                                          })
                                        : null;
                                }
                            });
                        }
                    },
                    i.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: t = !0, hiddenSpoiler: n = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: i, video: a, provider: s },
                renderVideoComponent: l,
                renderImageComponent: u,
                renderLinkComponent: c,
                renderForwardComponent: d,
                allowFullScreen: _,
                autoPlayGif: E,
                messageId: f,
                channelId: h,
                obscureReason: p
            } = this.props,
            { maxMediaWidth: m, maxMediaHeight: I } = this.state;
        if (null == r || null == i) return null;
        if (e)
            return null == a
                ? null
                : (0, o.jsx)(P.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: s } = e;
                          return (0, o.jsx)(q, {
                              className: G.embedMedia,
                              href: r,
                              thumbnail: i,
                              video: a,
                              maxWidth: m,
                              maxHeight: I,
                              responsive: !0,
                              autoPlay: !n && E && !s && t,
                              renderImageComponent: u,
                              renderForwardComponent: d,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != p,
                              placeholder: a.placeholder,
                              placeholderVersion: a.placeholderVersion
                          });
                      }
                  });
        let T = () => {
                this.setState({ videoControlsShown: !0 });
            },
            g = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, o.jsx)(z, {
            className: G.embedMedia,
            href: r,
            allowFullScreen: _,
            thumbnail: i,
            video: a,
            provider: null == s ? void 0 : s.name,
            maxWidth: m,
            maxHeight: I,
            responsive: !0,
            renderImageComponent: u,
            renderVideoComponent: l,
            renderLinkComponent: c,
            renderForwardComponent: d,
            onControlsShow: T,
            onControlsHide: g,
            playable: t && !n,
            messageId: f,
            channelId: h,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion
        });
    }
    renderFooter() {
        let { footer: e, timestamp: t } = this.props.embed;
        if (null != e) {
            let n = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, o.jsxs)('div', {
                className: u()(G.embedFooter, G.embedMargin),
                children: [
                    null != n
                        ? (0, o.jsx)('img', {
                              alt: '',
                              className: G.embedFooterIcon,
                              src: n
                          })
                        : null,
                    (0, o.jsxs)('span', {
                        className: G.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != t
                                ? (0, o.jsx)('span', {
                                      className: G.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != t ? (0, y.Y4)(t) : null
                        ]
                    })
                ]
            });
        }
        if (null != t)
            return (0, o.jsx)('div', {
                className: u()(G.embedFooter, G.embedMargin),
                children: (0, o.jsx)('span', {
                    className: G.embedFooterText,
                    children: (0, y.Y4)(t)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: n } = this.state;
        switch (t.type) {
            case U.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: n
                });
            case U.hBH.VIDEO:
            default:
                if (null != t.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: n
                    });
                if (null != t.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: n
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: n,
                    image: t.image,
                    alt: t.rawTitle
                });
        }
    }
    renderAll() {
        let e, t;
        let { embed: n, hideMedia: r } = this.props,
            { isVisible: i } = this.state,
            a = this.renderProvider(i),
            o = this.renderAuthor(i),
            s = this.renderTitle(i);
        switch (n.type) {
            case U.hBH.IMAGE:
            case U.hBH.VIDEO:
            case U.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let l = this.renderFields();
        !r && (t = this.renderMedia(!i));
        let u = this.renderFooter(),
            c = null == t;
        return (
            n.type === U.hBH.RICH && (c = null == n.video),
            {
                provider: a,
                author: o,
                title: s,
                description: e,
                thumbnail: !r && c ? this.renderThumbnail(i) : null,
                fields: l,
                media: t,
                footer: u
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: t, images: n, video: r, type: i, thumbnail: a }
            } = this.props,
            { maxMediaWidth: o, maxMediaHeight: s } = this.state,
            l = null != t ? t : r;
        if (null == l) return;
        let { width: u } = (0, L.Tj)({
            width: l.width,
            height: l.height,
            maxWidth: o,
            maxHeight: s
        });
        if (!e && (i === U.hBH.VIDEO || u >= 300)) return u + V;
        if (i === U.hBH.RICH && void 0 !== n) return W;
        if (i === U.hBH.GIFV) {
            var c, d, _, E;
            let { width: e } = (0, L.Tj)({
                width: Math.max(null !== (c = null == a ? void 0 : a.width) && void 0 !== c ? c : 0, null !== (d = null == r ? void 0 : r.width) && void 0 !== d ? d : 0),
                height: Math.max(null !== (_ = null == a ? void 0 : a.height) && void 0 !== _ ? _ : 0, null !== (E = null == r ? void 0 : r.height) && void 0 !== E ? E : 0),
                maxWidth: o,
                maxHeight: s
            });
            return e;
        }
    }
    isInline() {
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, b.dY)(t);
    }
    renderSuppressButton(e) {
        return (0, o.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: G.embedSuppressButton,
            onClick: e,
            'aria-label': x.Z.Messages.SUPPRESS_ALL_EMBEDS,
            children: (0, o.jsx)(d.XSmallIcon, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === U.hBH.IMAGE || e.type === U.hBH.VIDEO || e.type === U.hBH.GIFV || ((e.type === U.hBH.RICH || e.type === U.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && '#ffffff' === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: t, images: n, video: r, type: i }
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: o } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let s = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === s && void 0 === n && i !== U.hBH.RICH) {
            let e = null != t ? t : r;
            if (void 0 !== e) {
                let { width: t } = (0, L.Tj)({
                    width: e.width,
                    height: e.height,
                    maxWidth: a,
                    maxHeight: o
                });
                s = t;
            }
        }
        return {
            maxWidth: void 0 === s ? 'max-content' : s,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: t, obscureReason: n, className: r } = this.props;
        return null != t.provider && M.j.includes(t.provider.name)
            ? (0, o.jsx)(M.Z, {
                  embed: t,
                  className: r
              })
            : (0, A.Z)(t)
              ? (0, o.jsx)(v.Z, {
                    embed: t,
                    className: r
                })
              : (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && t.type === U.hBH.RICH
                ? (0, o.jsx)(p.Z, {
                      embed: t,
                      className: r
                  })
                : this.isInline()
                  ? null != n
                      ? (0, o.jsx)(f.Z, {
                            type: f.Z.Types.ATTACHMENT,
                            reason: n,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!0),
                            obscurityControlClassName: u()({ [G.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                            children: this.renderInlineMediaEmbed
                        })
                      : this.renderInlineMediaEmbed()
                  : null != n
                    ? (0, o.jsx)(f.Z, {
                          type: f.Z.Types.EMBED,
                          onReveal: this.onReveal,
                          onToggleObscurity: this.onToggleObscurity,
                          reason: n,
                          isSingleMosaicItem: !0,
                          containerStyles: this.getSpoilerStyles(!1),
                          children: this.renderEmbedContent
                      })
                    : this.renderEmbedContent();
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            Z(this, 'state', {
                isVisible: null == this.props.obscureReason,
                videoControlsShown: !1,
                isImageHovered: !1,
                showImageAppMenu: !1,
                ...(0, b.vP)(this.props.embed)
            }),
            Z(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            Z(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            Z(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: n, className: r } = t.props,
                    i = t.getMaxWidth(!0);
                return (0, o.jsx)('div', {
                    'aria-hidden': e,
                    className: u()(G.inlineMediaEmbed, r, {
                        [G.spoilerAttachment]: n === g.wk.SPOILER,
                        [G.hiddenExplicitAttachment]: null != n && [g.wk.EXPLICIT_CONTENT, g.wk.POTENTIAL_EXPLICIT_CONTENT].includes(n),
                        [G.isHidden]: e,
                        [G.justifyAuto]: t.usesJustifiedAutoStyle(),
                        [F.embedFlexGrow]: null != i
                    }),
                    style: { maxWidth: i },
                    children: t.renderMedia(e)
                });
            }),
            Z(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: n, onSuppressEmbed: r, obscureReason: i } = t.props,
                    { provider: a, author: s, title: l, description: c, fields: d, thumbnail: _, media: E, footer: f } = t.renderAll();
                return (0, o.jsx)('article', {
                    className: u()(n, F.embedFlexGrow, G.embedFull, B.markup, {
                        [G.isHidden]: e,
                        [G.spoilerEmbed]: i === g.wk.SPOILER,
                        [G.hiddenExplicitEmbed]: null != i && [g.wk.EXPLICIT_CONTENT, g.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
                        [G.justifyAuto]: t.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1)
                    },
                    children: (0, o.jsx)('div', {
                        className: G.gridContainer,
                        children: (0, o.jsxs)('div', {
                            className: u()({
                                [G.grid]: !0,
                                [G.hasThumbnail]: null != _
                            }),
                            children: [null != r ? t.renderSuppressButton(r) : null, a, s, l, c, d, E, _, f]
                        })
                    })
                });
            });
    }
}
function X(e) {
    return null != e && (e.width <= w.OF || e.height <= w.OF);
}
Z(Q, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80
});
