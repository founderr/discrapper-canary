n.d(t, {
    $: function () {
        return N;
    },
    s: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(470167),
    s = n(481060),
    c = n(572691),
    u = n(313201),
    d = n(70097),
    m = n(406432),
    h = n(584656),
    f = n(247206),
    p = n(719548),
    g = n(388032),
    _ = n(320534);
let E = (e) => {
        let { attachment: t } = e,
            { url: n, description: r } = t;
        return null == n
            ? null
            : (0, i.jsx)(I, {
                  url: n,
                  description: r
              });
    },
    C = (e) => {
        var t, n, r;
        let { embed: l } = e;
        if (!p.n2.has(l.type)) return null;
        let a = void 0 !== l.video && l.type !== o.h.GIFV ? l.video.url : null !== (r = null === (t = l.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== r ? r : null === (n = l.image) || void 0 === n ? void 0 : n.url;
        return null == a ? null : (0, i.jsx)(I, { url: a });
    },
    I = (e) => {
        let { url: t, description: n } = e,
            r = (0, m.cb)(t);
        return (0, i.jsx)('div', {
            className: _.mediaContainer,
            children: r
                ? (0, i.jsx)(d.Z, {
                      className: a()(_.video, _.media),
                      controls: !0,
                      src: t
                  })
                : (0, i.jsx)('img', {
                      className: a()(_.image, _.media),
                      src: t,
                      alt: n
                  })
        });
    };
function x(e) {
    c.Z.pop(),
        (0, h.t)({
            id: 'explicit-media-false-positive-modal',
            text: g.intl.string(g.t.gFsTKi)
        }),
        e();
}
function N(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: l, analyticsContext: a, attachmentPreview: o, embedPreview: c, onConfirmPress: d, transitionState: m, onClose: h } = e,
        p = (0, u.Dt)(),
        I = r.useCallback(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: a
            }),
                h();
        }, [t, n, a, h]),
        x = r.useCallback(() => {
            null == d || d(),
                (0, f.aP)({
                    action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: a
                });
        }, [t, n, a, d]);
    return (
        r.useEffect(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: a
            });
        }, [t, n, a]),
        (0, i.jsxs)(s.ModalRoot, {
            transitionState: m,
            'aria-labelledby': p,
            size: s.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(s.ModalContent, {
                    children: [
                        (0, i.jsx)(s.ModalCloseButton, {
                            onClick: I,
                            className: _.closeButton
                        }),
                        (0, i.jsx)(s.Heading, {
                            id: p,
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: _.header,
                            children: g.intl.string(g.t.TPpVkJ)
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: _.subheader,
                            children: g.intl.string(g.t.gg5Dp6)
                        }),
                        null != o && (0, i.jsx)(E, { attachment: o }),
                        null != c && (0, i.jsx)(C, { embed: c })
                    ]
                }),
                (0, i.jsxs)(s.ModalFooter, {
                    children: [
                        (0, i.jsx)(s.Button, {
                            className: _.button,
                            disabled: l,
                            submitting: l,
                            size: s.Button.Sizes.MEDIUM,
                            color: s.Button.Colors.BRAND,
                            onClick: x,
                            children: g.intl.string(g.t['cY+Ooa'])
                        }),
                        (0, i.jsx)(s.Button, {
                            className: _.button,
                            disabled: l,
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.MEDIUM,
                            onClick: I,
                            children: g.intl.string(g.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
