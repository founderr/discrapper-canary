n.d(t, {
    Y: function () {
        return S;
    },
    c: function () {
        return T;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(772848),
    l = n(481060),
    u = n(596454),
    c = n(367907),
    d = n(130402),
    _ = n(626135),
    E = n(183023),
    f = n(524444),
    h = n(981631),
    p = n(185923),
    I = n(474936),
    m = n(659932);
let T = (e) => {
        var t;
        let { node: n, tooltipPosition: a = f.b_.position, enableClick: o = !0, channelId: c, messageId: d } = e,
            _ = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            h = null != _ ? _ : n.name,
            [p, I] = i.useState(!1),
            T = (e) =>
                (0, r.jsx)(u.Z, {
                    ...e,
                    emojiName: n.name,
                    size: n.jumboable ? 'jumbo' : 'default',
                    src: n.src,
                    alt: _,
                    animated: !1,
                    channelId: c,
                    messageId: d
                }),
            S = (e) =>
                (0, r.jsx)(l.Tooltip, {
                    text: (0, f.Y)(n.name, o),
                    'aria-label': h,
                    ...f.b_,
                    position: a,
                    shouldShow: !p,
                    onTooltipShow: () => {
                        o &&
                            g({
                                emojiNode: n,
                                isCustomEmoji: !1
                            });
                    },
                    children: (t) =>
                        (0, r.jsx)(l.Clickable, {
                            ...e,
                            tag: 'span',
                            onClick: (t) => {
                                var n;
                                I(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                            },
                            className: s()(m.emojiContainer, { [m.emojiContainerClickable]: o }),
                            children: T(t)
                        })
                });
        return o
            ? (0, r.jsx)(l.Popout, {
                  animation: l.Popout.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'right',
                  onRequestClose: () => {
                      I(!1);
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(E.Az, {
                          ...e,
                          node: n
                      }),
                  children: S
              })
            : S();
    },
    S = (e) => {
        let { node: t, isInteracting: n, tooltipPosition: a = f.b_.position, enableClick: c = !0, channelId: I, messageId: T } = e,
            [S, A] = i.useState(String(Date.now())),
            [N, R] = i.useState(!1),
            [O, v] = i.useState(!1),
            C = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.jsx)(u.Z, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? 'jumbo' : 'default',
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n,
                    channelId: I,
                    messageId: T
                });
            },
            L = (0, o.Z)(),
            D = (e) =>
                (0, r.jsx)(l.Tooltip, {
                    text: (0, f.Y)(t.name, c),
                    'aria-label': t.name,
                    ...f.b_,
                    position: a,
                    shouldShow: !O,
                    onTooltipShow: () => {
                        R(!0),
                            c &&
                                (g({
                                    emojiNode: t,
                                    isCustomEmoji: !0,
                                    nonce: L
                                }),
                                (0, d.x)(p.qR.CustomEmojiTooltipShown));
                    },
                    children: (t) =>
                        (0, r.jsx)(l.Clickable, {
                            ...e,
                            onMouseEnter: () => {
                                var t;
                                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                            },
                            onClick: c
                                ? (t) => {
                                      var n;
                                      R(!1), v(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                  }
                                : void 0,
                            onMouseLeave: () => {
                                N && (_.default.track(h.rMx.CLOSE_POPOUT, { nonce: L }), R(!1));
                            },
                            tag: 'span',
                            className: s()(m.emojiContainer, { [m.emojiContainerClickable]: c }),
                            children: C(t)
                        })
                });
        return c
            ? (0, r.jsx)(l.Popout, {
                  animation: l.Popout.Animation.FADE,
                  align: 'center',
                  onRequestClose: () => {
                      _.default.track(h.rMx.CLOSE_POPOUT, { nonce: L }), R(!1), v(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'right',
                  renderPopout: (e) =>
                      (0, r.jsx)(E.vk, {
                          ...e,
                          node: t,
                          refreshPositionKey: () => A(String(Date.now())),
                          nonce: L
                      }),
                  positionKey: S,
                  children: D
              })
            : D();
    },
    g = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        c.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: I.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r
        });
    };
