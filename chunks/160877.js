n.d(t, {
    $: function () {
        return g;
    },
    s: function () {
        return C;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(470167),
    o = n(481060),
    c = n(572691),
    u = n(313201),
    d = n(70097),
    _ = n(406432),
    E = n(584656),
    I = n(163268),
    m = n(719548),
    T = n(689938),
    f = n(614092);
let h = (e) => {
        let { attachment: t } = e,
            { url: n, description: a } = t;
        return null == n
            ? null
            : (0, i.jsx)(p, {
                  url: n,
                  description: a
              });
    },
    N = (e) => {
        var t, n, a;
        let { embed: s } = e;
        if (!m.n2.has(s.type)) return null;
        let r = void 0 !== s.video && s.type !== l.h.GIFV ? s.video.url : null !== (a = null === (t = s.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== a ? a : null === (n = s.image) || void 0 === n ? void 0 : n.url;
        return null == r ? null : (0, i.jsx)(p, { url: r });
    },
    p = (e) => {
        let { url: t, description: n } = e,
            a = (0, _.cb)(t);
        return (0, i.jsx)('div', {
            className: f.mediaContainer,
            children: a
                ? (0, i.jsx)(d.Z, {
                      className: r()(f.video, f.media),
                      controls: !0,
                      src: t
                  })
                : (0, i.jsx)('img', {
                      className: r()(f.image, f.media),
                      src: t,
                      alt: n
                  })
        });
    };
function C(e) {
    c.Z.pop(),
        (0, E.t)({
            id: 'explicit-media-false-positive-modal',
            text: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
        }),
        e();
}
function g(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: s, analyticsContext: r, attachmentPreview: l, embedPreview: c, onConfirmPress: d, transitionState: _, onClose: E } = e,
        m = (0, u.Dt)(),
        p = a.useCallback(() => {
            (0, I.aP)({
                action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: r
            }),
                E();
        }, [t, n, r, E]),
        C = a.useCallback(() => {
            null == d || d(),
                (0, I.aP)({
                    action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: r
                });
        }, [t, n, r, d]);
    return (
        a.useEffect(() => {
            (0, I.aP)({
                action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: r
            });
        }, [t, n, r]),
        (0, i.jsxs)(o.ModalRoot, {
            transitionState: _,
            'aria-labelledby': m,
            size: o.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(o.ModalContent, {
                    children: [
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: p,
                            className: f.closeButton
                        }),
                        (0, i.jsx)(o.Heading, {
                            id: m,
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: f.header,
                            children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: f.subheader,
                            children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }),
                        null != l && (0, i.jsx)(h, { attachment: l }),
                        null != c && (0, i.jsx)(N, { embed: c })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Button, {
                            className: f.button,
                            disabled: s,
                            submitting: s,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: C,
                            children: T.Z.Messages.CONFIRM
                        }),
                        (0, i.jsx)(o.Button, {
                            className: f.button,
                            disabled: s,
                            color: o.Button.Colors.TRANSPARENT,
                            size: o.Button.Sizes.MEDIUM,
                            onClick: p,
                            children: T.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}
