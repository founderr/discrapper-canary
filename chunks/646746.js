n.d(t, {
    O: function () {
        return E;
    }
});
var l = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    i = n(392711),
    o = n(481060),
    u = n(686546),
    c = n(124347),
    d = n(499376),
    h = n(937889),
    m = n(930282),
    f = n(318616),
    g = n(689938),
    _ = n(228895);
function E(e) {
    let { message: t, forwardOptions: n } = e,
        {
            attachments: a,
            embeds: E,
            hasContent: S,
            contentMessage: M
        } = (0, f.c)({
            message: t,
            forwardOptions: n
        }),
        v = s.useMemo(
            () =>
                S
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: M
                      }).content
                    : null,
            [M, S, t]
        ),
        x = a.length,
        p = null,
        N = null,
        C = null;
    if (x > 0 || E.length > 0) {
        var Z, A, b, L;
        let e = (0, i.countBy)(a, (e) => (0, d.aw)(e, !0)),
            t = null !== (b = e.IMAGE) && void 0 !== b ? b : 0,
            n = null !== (L = e.VIDEO) && void 0 !== L ? L : 0;
        t > 0 && n > 0
            ? ((p = g.Z.Messages.NUM_IMAGES_VIDEOS.format({
                  image_count: t,
                  video_count: n
              })),
              (N = o.ImagesIcon))
            : n > 0
              ? ((p = g.Z.Messages.NUM_VIDEOS.format({ count: n })), (N = o.CirclePlayIcon))
              : t > 0
                ? ((p = g.Z.Messages.NUM_IMAGES.format({ count: t })), (N = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((p = g.Z.Messages.NUM_ATTACHMENTS.format({ count: x })), (N = o.AttachmentIcon)),
            n > 0 && x === n
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
                : x > 0
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
        x > 1 &&
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
                        children: ['+', x - 1]
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
                            (0, l.jsx)(m.ZP, {
                                className: r()(_.forwardPreviewMessage, x > 0 && _.hasAttachments),
                                message: t,
                                content: v
                            }),
                        x > 0 &&
                            (0, l.jsxs)('div', {
                                className: _.attachmentRow,
                                children: [
                                    null != N &&
                                        (0, l.jsx)(N, {
                                            size: 'custom',
                                            width: S ? 18 : 20,
                                            color: o.tokens.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != p &&
                                        (0, l.jsx)(o.Text, {
                                            variant: S ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: p
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
