t.d(n, {
    O: function () {
        return E;
    }
});
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(392711),
    o = t(481060),
    u = t(686546),
    c = t(124347),
    d = t(499376),
    h = t(937889),
    f = t(930282),
    m = t(318616),
    g = t(689938),
    _ = t(228895);
function E(e) {
    let { message: n, forwardOptions: t } = e,
        {
            attachments: a,
            embeds: E,
            hasContent: S,
            contentMessage: M
        } = (0, m.c)({
            message: n,
            forwardOptions: t
        }),
        v = s.useMemo(
            () =>
                S
                    ? (0, h.ZP)(n, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: M
                      }).content
                    : null,
            [M, S, n]
        ),
        p = a.length,
        x = null,
        N = null,
        C = null;
    if (p > 0 || E.length > 0) {
        var Z, A, b, L;
        let e = (0, i.countBy)(a, (e) => (0, d.aw)(e, !0)),
            n = null !== (b = e.IMAGE) && void 0 !== b ? b : 0,
            t = null !== (L = e.VIDEO) && void 0 !== L ? L : 0;
        n > 0 && t > 0
            ? ((x = g.Z.Messages.NUM_IMAGES_VIDEOS.format({
                  image_count: n,
                  video_count: t
              })),
              (N = o.ImagesIcon))
            : t > 0
              ? ((x = g.Z.Messages.NUM_VIDEOS.format({ count: t })), (N = o.CirclePlayIcon))
              : n > 0
                ? ((x = g.Z.Messages.NUM_IMAGES.format({ count: n })), (N = 1 === n ? o.ImageIcon : o.ImagesIcon))
                : ((x = g.Z.Messages.NUM_ATTACHMENTS.format({ count: p })), (N = o.AttachmentIcon)),
            t > 0 && p === t
                ? (C = (0, l.jsxs)('div', {
                      className: r()(_.attachmentPreview, _.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(c.Z, {
                              className: _.thumbnail,
                              src: a[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, l.jsx)(o.CirclePlayIcon, {
                              className: _.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : p > 0
                  ? (C = (0, l.jsx)('div', {
                        className: _.attachmentPreview,
                        children: (0, l.jsx)(c.Z, {
                            src: a[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (A = E[0]) || void 0 === A ? void 0 : null === (Z = A.thumbnail) || void 0 === Z ? void 0 : Z.proxyURL) != null &&
                    (C = (0, l.jsx)('div', {
                        className: _.attachmentPreview,
                        children: (0, l.jsx)(c.Z, {
                            src: E[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        p > 1 &&
            null != C &&
            (C = (0, l.jsxs)('div', {
                className: _.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(u.ZP, {
                        mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: C
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: _.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', p - 1]
                    })
                ]
            })),
        (0, l.jsxs)('div', {
            className: _.forwardPreview,
            children: [
                (0, l.jsx)('div', { className: _.quote }),
                (0, l.jsxs)('div', {
                    className: _.contentWrapper,
                    children: [
                        S &&
                            (0, l.jsx)(f.ZP, {
                                className: r()(_.forwardPreviewMessage, p > 0 && _.hasAttachments),
                                message: n,
                                content: v
                            }),
                        p > 0 &&
                            (0, l.jsxs)('div', {
                                className: _.attachmentRow,
                                children: [
                                    null != N &&
                                        (0, l.jsx)(N, {
                                            size: 'custom',
                                            width: S ? 18 : 20,
                                            color: o.tokens.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != x &&
                                        (0, l.jsx)(o.Text, {
                                            variant: S ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: x
                                        })
                                ]
                            })
                    ]
                }),
                C
            ]
        })
    );
}
