n.d(t, {
    O: function () {
        return m;
    }
});
var l = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    r = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    h = n(937889),
    _ = n(930282),
    f = n(318616),
    E = n(689938),
    g = n(228895);
function m(e) {
    let { message: t, forwardOptions: n, channel: s } = e,
        {
            attachments: m,
            embeds: S,
            hasContent: A,
            contentMessage: I
        } = (0, f.c)({
            message: t,
            channel: s,
            forwardOptions: n
        }),
        p = a.useMemo(
            () =>
                A
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: I
                      }).content
                    : null,
            [I, A, t]
        ),
        C = m.length,
        N = null,
        L = null,
        v = null;
    if (C > 0 || S.length > 0) {
        var T, b, x, Z;
        let e = (0, r.countBy)(m, (e) => (0, d.aw)(e, !0)),
            t = null !== (x = e.IMAGE) && void 0 !== x ? x : 0,
            n = null !== (Z = e.VIDEO) && void 0 !== Z ? Z : 0;
        t > 0 && n > 0
            ? ((N = E.Z.Messages.NUM_IMAGES_VIDEOS.format({
                  image_count: t,
                  video_count: n
              })),
              (L = o.ImagesIcon))
            : n > 0
              ? ((N = E.Z.Messages.NUM_VIDEOS.format({ count: n })), (L = o.CirclePlayIcon))
              : t > 0
                ? ((N = E.Z.Messages.NUM_IMAGES.format({ count: t })), (L = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((N = E.Z.Messages.NUM_ATTACHMENTS.format({ count: C })), (L = o.AttachmentIcon)),
            n > 0 && C === n
                ? (v = (0, l.jsxs)('div', {
                      className: i()(g.attachmentPreview, g.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: g.thumbnail,
                              src: m[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, l.jsx)(o.CirclePlayIcon, {
                              className: g.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : C > 0
                  ? (v = (0, l.jsx)('div', {
                        className: g.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: m[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (b = S[0]) || void 0 === b ? void 0 : null === (T = b.thumbnail) || void 0 === T ? void 0 : T.proxyURL) != null &&
                    (v = (0, l.jsx)('div', {
                        className: g.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: S[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        C > 1 &&
            null != v &&
            (v = (0, l.jsxs)('div', {
                className: g.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: v
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: g.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', C - 1]
                    })
                ]
            })),
        (0, l.jsxs)('div', {
            className: g.forwardPreview,
            children: [
                (0, l.jsx)('div', { className: g.quote }),
                (0, l.jsxs)('div', {
                    className: g.contentWrapper,
                    children: [
                        A &&
                            (0, l.jsx)(_.ZP, {
                                className: i()(g.forwardPreviewMessage, C > 0 && g.hasAttachments),
                                message: t,
                                content: p
                            }),
                        C > 0 &&
                            (0, l.jsxs)('div', {
                                className: g.attachmentRow,
                                children: [
                                    null != L &&
                                        (0, l.jsx)(L, {
                                            size: 'custom',
                                            width: A ? 18 : 20,
                                            color: o.tokens.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != N &&
                                        (0, l.jsx)(o.Text, {
                                            variant: A ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: N
                                        })
                                ]
                            })
                    ]
                }),
                v
            ]
        })
    );
}
