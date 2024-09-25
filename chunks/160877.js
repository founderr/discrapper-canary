n.d(t, {
    $: function () {
        return A;
    },
    s: function () {
        return S;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(470167),
    l = n(481060),
    u = n(572691),
    c = n(313201),
    d = n(70097),
    _ = n(406432),
    E = n(584656),
    f = n(163268),
    h = n(719548),
    p = n(689938),
    m = n(805711);
let I = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(g, {
                  url: n,
                  description: i
              });
    },
    T = (e) => {
        var t, n, i;
        let { embed: a } = e;
        if (!h.n2.has(a.type)) return null;
        let o = void 0 !== a.video && a.type !== s.h.GIFV ? a.video.url : null !== (i = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (n = a.image) || void 0 === n ? void 0 : n.url;
        return null == o ? null : (0, r.jsx)(g, { url: o });
    },
    g = (e) => {
        let { url: t, description: n } = e,
            i = (0, _.cb)(t);
        return (0, r.jsx)('div', {
            className: m.mediaContainer,
            children: i
                ? (0, r.jsx)(d.Z, {
                      className: o()(m.video, m.media),
                      controls: !0,
                      src: t
                  })
                : (0, r.jsx)('img', {
                      className: o()(m.image, m.media),
                      src: t,
                      alt: n
                  })
        });
    };
function S(e) {
    u.Z.pop(),
        (0, E.t)({
            id: 'explicit-media-false-positive-modal',
            text: p.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
        }),
        e();
}
function A(e) {
    let { channelId: t, messageId: n, isReportFalsePositiveLoading: a, analyticsContext: o, attachmentPreview: s, embedPreview: u, onConfirmPress: d, transitionState: _, onClose: E } = e,
        h = (0, c.Dt)(),
        g = i.useCallback(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: o
            }),
                E();
        }, [t, n, o, E]),
        S = i.useCallback(() => {
            null == d || d(),
                (0, f.aP)({
                    action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: o
                });
        }, [t, n, o, d]);
    return (
        i.useEffect(() => {
            (0, f.aP)({
                action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: o
            });
        }, [t, n, o]),
        (0, r.jsxs)(l.ModalRoot, {
            transitionState: _,
            'aria-labelledby': h,
            size: l.ModalSize.SMALL,
            children: [
                (0, r.jsxs)(l.ModalContent, {
                    children: [
                        (0, r.jsx)(l.ModalCloseButton, {
                            onClick: g,
                            className: m.closeButton
                        }),
                        (0, r.jsx)(l.Heading, {
                            id: h,
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: m.header,
                            children: p.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: m.subheader,
                            children: p.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }),
                        null != s && (0, r.jsx)(I, { attachment: s }),
                        null != u && (0, r.jsx)(T, { embed: u })
                    ]
                }),
                (0, r.jsxs)(l.ModalFooter, {
                    children: [
                        (0, r.jsx)(l.Button, {
                            className: m.button,
                            disabled: a,
                            submitting: a,
                            size: l.Button.Sizes.MEDIUM,
                            color: l.Button.Colors.BRAND,
                            onClick: S,
                            children: p.Z.Messages.CONFIRM
                        }),
                        (0, r.jsx)(l.Button, {
                            className: m.button,
                            disabled: a,
                            color: l.Button.Colors.TRANSPARENT,
                            size: l.Button.Sizes.MEDIUM,
                            onClick: g,
                            children: p.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}
