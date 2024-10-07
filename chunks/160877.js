n.d(t, {
    $: function () {
        return A;
    },
    s: function () {
        return f;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(470167),
    o = n(481060),
    c = n(572691),
    d = n(313201),
    u = n(70097),
    _ = n(406432),
    E = n(584656),
    I = n(163268),
    m = n(719548),
    T = n(689938),
    N = n(805711);
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
    C = (e) => {
        var t, n, a;
        let { embed: s } = e;
        if (!m.n2.has(s.type)) return null;
        let l = void 0 !== s.video && s.type !== r.h.GIFV ? s.video.url : null !== (a = null === (t = s.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== a ? a : null === (n = s.image) || void 0 === n ? void 0 : n.url;
        return null == l ? null : (0, i.jsx)(p, { url: l });
    },
    p = (e) => {
        let { url: t, description: n } = e,
            a = (0, _.cb)(t);
        return (0, i.jsx)('div', {
            className: N.mediaContainer,
            children: a
                ? (0, i.jsx)(u.Z, {
                      className: l()(N.video, N.media),
                      controls: !0,
                      src: t
                  })
                : (0, i.jsx)('img', {
                      className: l()(N.image, N.media),
                      src: t,
                      alt: n
                  })
        });
    };
function f(e) {
    c.Z.pop(),
        (0, E.t)({
            id: 'explicit-media-false-positive-modal',
            text: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
        }),
        e();
}
function A(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: s, analyticsContext: l, attachmentPreview: r, embedPreview: c, onConfirmPress: u, transitionState: _, onClose: E } = e,
        m = (0, d.Dt)(),
        p = a.useCallback(() => {
            (0, I.aP)({
                action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: l
            }),
                E();
        }, [t, n, l, E]),
        f = a.useCallback(() => {
            null == u || u(),
                (0, I.aP)({
                    action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: l
                });
        }, [t, n, l, u]);
    return (
        a.useEffect(() => {
            (0, I.aP)({
                action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: l
            });
        }, [t, n, l]),
        (0, i.jsxs)(o.ModalRoot, {
            transitionState: _,
            'aria-labelledby': m,
            size: o.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(o.ModalContent, {
                    children: [
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: p,
                            className: N.closeButton
                        }),
                        (0, i.jsx)(o.Heading, {
                            id: m,
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: N.header,
                            children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: N.subheader,
                            children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }),
                        null != r && (0, i.jsx)(h, { attachment: r }),
                        null != c && (0, i.jsx)(C, { embed: c })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Button, {
                            className: N.button,
                            disabled: s,
                            submitting: s,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: f,
                            children: T.Z.Messages.CONFIRM
                        }),
                        (0, i.jsx)(o.Button, {
                            className: N.button,
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
