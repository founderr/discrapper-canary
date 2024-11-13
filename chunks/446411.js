t.d(l, {
    BC: function () {
        return D;
    },
    ZP: function () {
        return Z;
    }
}),
    t(47120),
    t(653041);
var n,
    i = t(200651),
    r = t(192379),
    a = t(120356),
    s = t.n(a),
    o = t(892814),
    d = t(481060),
    u = t(399654),
    m = t(370298),
    h = t(95398),
    c = t(947849),
    p = t(768494),
    b = t(982330),
    g = t(624195),
    v = t(44824),
    f = t(124347),
    x = t(283756),
    I = t(587906),
    _ = t(169525),
    y = t(94396),
    w = t(785992),
    C = t(400266),
    E = t(592125),
    T = t(52824),
    S = t(626135),
    A = t(585483),
    N = t(55935),
    M = t(408433),
    j = t(956664),
    k = t(468846),
    H = t(401419),
    F = t(249458),
    L = t(981631),
    V = t(217702),
    B = t(388032),
    R = t(269625),
    P = t(275703),
    W = t(554034),
    O = t(287847);
function G(e, l, t) {
    return (
        l in e
            ? Object.defineProperty(e, l, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[l] = t),
        e
    );
}
function D(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: a, maxWidth: o, maxHeight: d, thumbnail: u, video: m, provider: h, allowFullScreen: c = !0, responsive: p = !1, renderImageComponent: b, renderVideoComponent: g, renderLinkComponent: v, playable: f = !0, autoPlay: I = !1, autoMute: _, volume: y, onPlay: w, onPause: C, onEnded: E, onControlsHide: S, onControlsShow: N, onVolumeChange: M, onMute: H, href: F, placeholder: V, placeholderVersion: B, sourceMetadata: P } = e,
        [W, O] = r.useState(I),
        G = null != m && null == m.proxyURL,
        D = r.useCallback(() => O(!1), [O]),
        U = (e) => {
            e.preventDefault(), e.stopPropagation(), null == w || w(!1), O(!0), G && (A.S.dispatch(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED), A.S.subscribeOnce(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D));
        };
    r.useEffect(
        () => () => {
            G && A.S.unsubscribe(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D);
        },
        [G, D]
    );
    let { width: Z, height: q } = u;
    null != m && ((Z = m.width), (q = m.height));
    let z = (0, j.Tj)({
        width: Z,
        height: q,
        maxWidth: o,
        maxHeight: d
    });
    (Z = Math.max(z.width, 150)), (q = Math.max(z.height, 144));
    let X = (0, T.q)(u);
    if (null != m && null != m.proxyURL)
        return (0, i.jsx)('div', {
            className: s()(R.embedVideo, n),
            children: g({
                poster: X,
                src: m.proxyURL,
                placeholder: V,
                placeholderVersion: B,
                width: Z,
                height: q,
                responsive: p,
                autoPlay: I,
                onEnded: E,
                naturalWidth: m.width,
                naturalHeight: m.height,
                onVolumeChange: M,
                playable: f,
                autoMute: _,
                volume: y,
                onPlay: w,
                onPause: C,
                onMute: H,
                onControlsHide: S,
                onControlsShow: N,
                sourceMetadata: P
            })
        });
    if (W && null != m) {
        let e;
        let l = !0 === _ || ('function' == typeof _ && _()),
            t = {
                width: Z,
                height: q
            },
            r = {
                width: Z,
                height: q
            };
        if (p) {
            let l = 0 !== Z ? q / Z : 1;
            (t = {
                maxWidth: o,
                maxHeight: d,
                width: void 0,
                height: void 0
            }),
                (r = {
                    paddingBottom: ''.concat(100 * l, '%'),
                    maxWidth: Z
                }),
                (e = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    maxWidth: Z,
                    maxHeight: q
                });
        }
        return (0, i.jsx)('div', {
            className: n,
            style: t,
            children: (0, i.jsx)('div', {
                className: s()(R.embedVideo, a),
                style: r,
                children: (0, i.jsx)(k.ZP, {
                    provider: h,
                    src: m.url,
                    style: e,
                    width: Z,
                    height: q,
                    allowFullScreen: c,
                    autoMute: l
                })
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(R.embedVideo, n),
        style: p
            ? { maxWidth: Z }
            : {
                  width: Z,
                  height: q
              },
        children: [
            b({
                src: X,
                width: Z,
                height: q,
                maxWidth: Z,
                maxHeight: q,
                responsive: p,
                containerClassName: R.embedVideoImageComponent,
                imageClassName: R.embedVideoImageComponentInner,
                placeholder: V,
                placeholderVersion: B,
                onClick: f && null != m ? U : null,
                sourceMetadata: P
            }),
            (0, i.jsx)('div', {
                className: R.embedVideoActions,
                children: (0, i.jsx)('div', {
                    className: R.centerContent,
                    children: f
                        ? (0, i.jsx)(x.Z, {
                              onPlay: null != m ? U : null,
                              externalURL: F,
                              renderLinkComponent: v,
                              messageId: null == P ? void 0 : null === (l = P.message) || void 0 === l ? void 0 : l.id,
                              channelId: null == P ? void 0 : null === (t = P.message) || void 0 === t ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function U(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: r, maxHeight: a, thumbnail: o, video: d, renderImageComponent: u, responsive: m, alt: h, disableAltTextDisplay: c = !1, playable: p = !0, hiddenSpoilers: b, placeholder: g, placeholderVersion: f, sourceMetadata: x } = e;
    return (0, i.jsx)(v.Z, {
        className: s()(R.embedVideo, l),
        original: t,
        poster: (0, T.q)(o),
        src: (0, T.q)(d),
        alt: h,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: r,
        maxHeight: a,
        responsive: m,
        autoPlay: n,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: b,
        disableAltTextDisplay: c,
        placeholder: g,
        placeholderVersion: f,
        sourceMetadata: x
    });
}
class Z extends (n = r.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, i.jsx)('div', {
                  className: s()(R.embedProvider, R.embedMargin),
                  children:
                      null != l.url
                          ? t({
                                className: R.embedLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, i.jsx)('span', { children: l.name })
              });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, i.jsxs)('div', {
                  className: s()(R.embedAuthor, R.embedMargin),
                  children: [
                      null != l.iconProxyURL
                          ? (0, i.jsx)('img', {
                                alt: '',
                                className: R.embedAuthorIcon,
                                src: l.iconProxyURL
                            })
                          : null,
                      null != l.url
                          ? t({
                                className: R.embedAuthorNameLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, i.jsx)('span', {
                                className: R.embedAuthorName,
                                children: l.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: n, message: r } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : (0, i.jsx)('div', {
                  className: s()(R.embedTitle, R.embedMargin),
                  children:
                      null != o
                          ? t({
                                className: R.embedTitleLink,
                                href: o,
                                tabIndex: e ? 0 : -1,
                                children: n(l, a),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == r ? void 0 : r.id,
                                channelId: null == r ? void 0 : r.channel_id
                            })
                          : n(l, a)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: s()(R.embedDescription, R.embedMargin),
                  children: l(e, t, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: n,
                renderImageComponent: r,
                autoPlayGif: a
            } = this.props,
            { sourceMetadata: s } = this.state;
        return null == l
            ? null
            : (0, i.jsx)(F.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: o } = i;
                      return r({
                          containerClassName: R.embedThumbnail,
                          src: (0, T.q)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: n,
                          shouldLink: e,
                          autoPlay: a && !o,
                          sourceMetadata: s
                      });
                  }
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            n = null;
        return (
            l.forEach((l) => {
                let { rawName: i, rawValue: r, inline: a } = l;
                !a && null != n && (t.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, i), this.props.renderDescription(e, r, !0)]), (3 === n.length || !a) && (t.push(n), (n = null));
            }),
            null != n && t.push(n),
            (0, i.jsx)('div', {
                className: R.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [r, a] = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                className: R.embedField,
                                style: {
                                    gridColumn: (function (e, l) {
                                        let t = 12 / l,
                                            n = e * t;
                                        return ''.concat(n + 1, ' / ').concat(n + t + 1);
                                    })(n, t)
                                },
                                children: [
                                    (0, i.jsx)('div', {
                                        className: R.embedFieldName,
                                        children: r
                                    }),
                                    (0, i.jsx)('div', {
                                        className: R.embedFieldValue,
                                        children: a
                                    })
                                ]
                            },
                            ''.concat(l, '-').concat(n)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: l = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: t } = this.props,
            { maxMediaHeight: n } = this.state;
        if (null == t.images) return null;
        let [r, a, s, o] = t.images.map((n) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: n,
                isGalleryImage: !0,
                allImages: t.images
            })
        );
        return null == r && null == a && null == s && null == o
            ? null
            : (0, i.jsxs)('div', {
                  className: R.embedGalleryImagesWrapper,
                  style: { height: n },
                  children: [
                      (0, i.jsxs)('div', {
                          className: R.embedGallerySide,
                          children: [r, null != o && s]
                      }),
                      (0, i.jsxs)('div', {
                          className: R.embedGallerySide,
                          children: [a, null == o && null != s && s, null != o && o]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: l, downloadURL: t, isVisualMediaType: n, channelId: r, onView: a, showImageRecs: o } = e;
        return (0, i.jsxs)('div', {
            className: s()(P.hoverButtonGroup, {
                [P.nonMediaMosaicItem]: !n,
                [P.forceShowHover]: this.state.showImageAppMenu
            }),
            children: [
                null != a &&
                    (0, i.jsx)(I.Z, {
                        className: P.hoverButton,
                        onClick: a
                    }),
                o &&
                    null != r &&
                    (0, i.jsx)(m.Z, {
                        toggleShowMenu: () => {
                            this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                        },
                        showMenu: this.state.showImageAppMenu,
                        channelId: r,
                        className: s()(P.hoverButton, { [P.selected]: this.state.showImageAppMenu }),
                        imageUrl: t,
                        mimeType: l
                    })
            ]
        });
    }
    handleImageHover(e, l, t) {
        if (t) {
            if (e && !this.state.isImageHovered) {
                var n, i;
                this.setState({ isImageHovered: !0 });
                let e = E.Z.getChannel(null === (n = this.props.message) || void 0 === n ? void 0 : n.channel_id);
                this.props.showImageRecs &&
                    (0, u.a)({
                        channelId: null !== (i = null == e ? void 0 : e.id) && void 0 !== i ? i : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    S.default.track(L.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, l, t, n;
        let { hiddenSpoiler: r = !1, isVisible: a = !0, image: o, isGalleryImage: d = !1, alt: u = B.intl.string(B.t.X4IxWF), allImages: m = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: h, className: g, autoPlayGif: v } = this.props,
            { maxMediaWidth: x, maxMediaHeight: I, sourceMetadata: _ } = this.state;
        if (null == o) return null;
        let w = (0, T.q)(o),
            C =
                null == m
                    ? (0, y._)([
                          {
                              ...(0, p.Hv)(o, _, 'IMAGE'),
                              original: o.url,
                              srcIsAnimated: o.srcIsAnimated
                          }
                      ])
                    : (0, y._)(
                          m.map((e) => ({
                              ...(0, p.Hv)(e, _, 'IMAGE'),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated
                          }))
                      ),
            E = null != m,
            S = f.ZP.isAnimated({
                src: (0, T.q)(o),
                original: o.url,
                animated: !1,
                srcIsAnimated: o.srcIsAnimated
            }),
            A = {
                containerClassName: s()(g, {
                    [R.embedMedia]: !d,
                    [R.embedImage]: !d,
                    [R.galleryImage]: d
                }),
                imageContainerClassName: d ? R.galleryImageContainer : void 0,
                imageClassName: d ? R.embedGalleryImageElement : void 0,
                src: (0, T.q)(o),
                alt: u,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: o.width,
                height: o.height,
                maxWidth: x,
                maxHeight: I,
                original: o.url,
                shouldLink: a,
                disableAltTextDisplay: !0,
                hiddenSpoilers: r,
                placeholder: o.placeholder,
                placeholderVersion: o.placeholderVersion,
                srcIsAnimated: o.srcIsAnimated
            };
        w in C && E && (A.onClick = C[w]);
        let N = null !== (n = null === (e = o.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== n ? n : '';
        'jpg' === N && (N = 'jpeg');
        let M = null != o && !f.uo.test(null == o ? void 0 : o.url) && !(o.srcIsAnimated && f.YG.test(null == o ? void 0 : o.url)),
            j =
                null != this.props.showImageRecs &&
                this.props.showImageRecs &&
                !0 !== this.props.isSearchResult &&
                a &&
                (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) != null &&
                (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) !== void 0 &&
                M &&
                !(function (e) {
                    return null != e && (e.width <= V.OF || e.height <= V.OF);
                })(o) &&
                null != N,
            k = (0, b.cS)('Embed'),
            H = j || k;
        return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
                (0, i.jsx)(
                    F.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return h({
                                ...A,
                                autoPlay: v && !t && !r,
                                renderAccessory: S ? e : null,
                                onMouseEnter: () => this.handleImageHover(!0, o, H),
                                onMouseLeave: () => this.handleImageHover(!1, o, H),
                                renderAdjacentContent: () => {
                                    var e, l;
                                    return H
                                        ? this.renderImageHoverButtons({
                                              onView: k ? C[w] : void 0,
                                              mimeType: ['image', N],
                                              downloadURL: null !== (l = o.proxyURL) && void 0 !== l ? l : o.url,
                                              isVisualMediaType: null != o,
                                              channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id,
                                              showImageRecs: j
                                          })
                                        : null;
                                },
                                sourceMetadata: _
                            });
                        }
                    },
                    o.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: l = !0, hiddenSpoiler: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: n, thumbnail: r, video: a, provider: s },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: m,
                autoPlayGif: h,
                obscureReason: c
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: b, sourceMetadata: g } = this.state;
        if (null == n || null == r) return null;
        if (e)
            return null == a
                ? null
                : (0, i.jsx)(F.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: s } = e;
                          return (0, i.jsx)(U, {
                              className: R.embedMedia,
                              href: n,
                              thumbnail: r,
                              video: a,
                              maxWidth: p,
                              maxHeight: b,
                              responsive: !0,
                              autoPlay: !t && h && !s && l,
                              renderImageComponent: d,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != c,
                              placeholder: a.placeholder,
                              placeholderVersion: a.placeholderVersion,
                              sourceMetadata: g
                          });
                      }
                  });
        return (0, i.jsx)(D, {
            className: R.embedMedia,
            href: n,
            allowFullScreen: m,
            thumbnail: r,
            video: a,
            provider: null == s ? void 0 : s.name,
            maxWidth: p,
            maxHeight: b,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            onControlsShow: () => {
                this.setState({ videoControlsShown: !0 });
            },
            onControlsHide: () => {
                this.setState({ videoControlsShown: !1 });
            },
            playable: l && !t,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
            sourceMetadata: g
        });
    }
    renderFooter() {
        let { footer: e, timestamp: l } = this.props.embed;
        if (null != e) {
            let t = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, i.jsxs)('div', {
                className: s()(R.embedFooter, R.embedMargin),
                children: [
                    null != t
                        ? (0, i.jsx)('img', {
                              alt: '',
                              className: R.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, i.jsxs)('span', {
                        className: R.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, i.jsx)('span', {
                                      className: R.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, N.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, i.jsx)('div', {
                className: s()(R.embedFooter, R.embedMargin),
                children: (0, i.jsx)('span', {
                    className: R.embedFooterText,
                    children: (0, N.Y4)(l)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        switch (l.type) {
            case L.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case L.hBH.VIDEO:
            default:
                if (null != l.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: t
                    });
                if (null != l.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: t
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: t,
                    image: l.image,
                    alt: l.rawTitle
                });
        }
    }
    renderAll() {
        let e, l;
        let { embed: t, hideMedia: n } = this.props,
            { isVisible: i } = this.state,
            r = this.renderProvider(i),
            a = this.renderAuthor(i),
            s = this.renderTitle(i);
        switch (t.type) {
            case L.hBH.IMAGE:
            case L.hBH.VIDEO:
            case L.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        !n && (l = this.renderMedia(!i));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === L.hBH.RICH && (u = null == t.video),
            {
                provider: r,
                author: a,
                title: s,
                description: e,
                thumbnail: !n && u ? this.renderThumbnail(i) : null,
                fields: o,
                media: l,
                footer: d
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: n, type: i, thumbnail: r }
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: s } = this.state,
            o = null != l ? l : n;
        if (null == o) return;
        let { width: d } = (0, j.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: a,
            maxHeight: s
        });
        if (!e && (i === L.hBH.VIDEO || d >= 300)) return d + 32;
        if (i === L.hBH.RICH && void 0 !== t) return 520;
        if (i === L.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, j.Tj)({
                width: null !== (m = null !== (u = null == n ? void 0 : n.width) && void 0 !== u ? u : null == r ? void 0 : r.width) && void 0 !== m ? m : 0,
                height: null !== (c = null !== (h = null == n ? void 0 : n.height) && void 0 !== h ? h : null == r ? void 0 : r.height) && void 0 !== c ? c : 0,
                maxWidth: a,
                maxHeight: s
            });
            return e;
        }
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, M.dY)(l);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: R.embedSuppressButton,
            onClick: e,
            'aria-label': B.intl.string(B.t.GT3fNz),
            children: (0, i.jsx)(d.XSmallIcon, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === L.hBH.IMAGE || e.type === L.hBH.VIDEO || e.type === L.hBH.GIFV || ((e.type === L.hBH.RICH || e.type === L.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && '#ffffff' === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: n, type: i }
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let s = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === s && void 0 === t && i !== L.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
                let { width: l } = (0, j.Tj)({
                    width: e.width,
                    height: e.height,
                    maxWidth: r,
                    maxHeight: a
                });
                s = l;
            }
        }
        return {
            maxWidth: void 0 === s ? 'max-content' : s,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: n } = this.props;
        return null != l.provider && H.j.includes(l.provider.name)
            ? (0, i.jsx)(H.Z, {
                  embed: l,
                  className: n
              })
            : (0, w.Z)(l)
              ? (0, i.jsx)(C.Z, {
                    embed: l,
                    className: n
                })
              : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && l.type === L.hBH.RICH
                ? (0, i.jsx)(g.Z, {
                      embed: l,
                      className: n
                  })
                : this.isInline()
                  ? null != t
                      ? (0, i.jsx)(h.Z, {
                            type: h.Z.Types.ATTACHMENT,
                            reason: t,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!0),
                            obscurityControlClassName: s()({ [R.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                            children: this.renderInlineMediaEmbed
                        })
                      : this.renderInlineMediaEmbed()
                  : null != t
                    ? (0, i.jsx)(h.Z, {
                          type: h.Z.Types.EMBED,
                          onReveal: this.onReveal,
                          onToggleObscurity: this.onToggleObscurity,
                          reason: t,
                          isSingleMosaicItem: !0,
                          containerStyles: this.getSpoilerStyles(!1),
                          children: this.renderEmbedContent
                      })
                    : this.renderEmbedContent();
    }
    constructor(...e) {
        var l;
        super(...e),
            (l = this),
            G(this, 'state', {
                isVisible: null == this.props.obscureReason,
                videoControlsShown: !1,
                isImageHovered: !1,
                showImageAppMenu: !1,
                sourceMetadata: {
                    message: this.props.message,
                    identifier: {
                        type: 'embed',
                        embedIndex: this.props.embedIndex
                    }
                },
                ...(0, M.vP)(this.props.embed)
            }),
            G(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            G(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            G(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: n } = l.props,
                    r = l.getMaxWidth(!0);
                return (0, i.jsx)('div', {
                    'aria-hidden': e,
                    className: s()(R.inlineMediaEmbed, n, {
                        [R.spoilerAttachment]: t === _.wk.SPOILER,
                        [R.hiddenExplicitAttachment]: null != t && [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(t),
                        [R.isHidden]: e,
                        [R.justifyAuto]: l.usesJustifiedAutoStyle(),
                        [O.embedFlexGrow]: null != r
                    }),
                    style: { maxWidth: r },
                    children: l.renderMedia(e)
                });
            }),
            G(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: r } = l.props,
                    { provider: a, author: o, title: d, description: u, fields: m, thumbnail: h, media: c, footer: p } = l.renderAll();
                return (0, i.jsx)('article', {
                    className: s()(t, O.embedFlexGrow, R.embedFull, W.markup, {
                        [R.isHidden]: e,
                        [R.spoilerEmbed]: r === _.wk.SPOILER,
                        [R.hiddenExplicitEmbed]: null != r && [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(r),
                        [R.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, i.jsx)('div', {
                        className: R.gridContainer,
                        children: (0, i.jsxs)('div', {
                            className: s()({
                                [R.grid]: !0,
                                [R.hasThumbnail]: null != h
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, a, o, d, u, m, c, h, p]
                        })
                    })
                });
            });
    }
}
G(Z, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
