n.d(t, {
    O: function () {
        return m;
    }
});
var l = n(735250),
    a = n(470079),
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
            hasContent: I,
            contentMessage: A
        } = (0, f.c)({
            message: t,
            channel: s,
            forwardOptions: n
        }),
        p = a.useMemo(
            () =>
                I
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: A
                      }).content
                    : null,
            [A, I, t]
        ),
        C = m.length,
        N = null,
        v = null,
        L = null;
    if (C > 0 || S.length > 0) {
        var b, T, x, Z;
        let e = (0, r.countBy)(m, (e) => (0, d.aw)(e, !0)),
            t = null !== (x = e.IMAGE) && void 0 !== x ? x : 0,
            n = null !== (Z = e.VIDEO) && void 0 !== Z ? Z : 0;
        t > 0 && n > 0
            ? ((N = E.Z.Messages.NUM_IMAGES_VIDEOS.format({
                  image_count: t,
                  video_count: n
              })),
              (v = o.ImagesIcon))
            : n > 0
              ? ((N = E.Z.Messages.NUM_VIDEOS.format({ count: n })), (v = o.CirclePlayIcon))
              : t > 0
                ? ((N = E.Z.Messages.NUM_IMAGES.format({ count: t })), (v = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((N = E.Z.Messages.NUM_ATTACHMENTS.format({ count: C })), (v = o.AttachmentIcon)),
            n > 0 && C === n
                ? (L = (0, l.jsxs)('div', {
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
                  ? (L = (0, l.jsx)('div', {
                        className: g.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: m[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (T = S[0]) || void 0 === T ? void 0 : null === (b = T.thumbnail) || void 0 === b ? void 0 : b.proxyURL) != null &&
                    (L = (0, l.jsx)('div', {
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
            null != L &&
            (L = (0, l.jsxs)('div', {
                className: g.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: L
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
                        I &&
                            (0, l.jsx)(_.ZP, {
                                className: i()(g.forwardPreviewMessage, C > 0 && g.hasAttachments),
                                message: t,
                                content: p
                            }),
                        C > 0 &&
                            (0, l.jsxs)('div', {
                                className: g.attachmentRow,
                                children: [
                                    null != v &&
                                        (0, l.jsx)(v, {
                                            size: 'custom',
                                            width: I ? 18 : 20,
                                            color: o.tokens.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != N &&
                                        (0, l.jsx)(o.Text, {
                                            variant: I ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: N
                                        })
                                ]
                            })
                    ]
                }),
                L
            ]
        })
    );
}
