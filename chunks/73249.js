var r = t(200651),
    a = t(192379),
    i = t(481060),
    l = t(346610),
    o = t(868643),
    s = t(912332),
    u = t(49012),
    c = t(358085),
    d = t(212459),
    m = t(701865),
    _ = t(689938),
    f = t(92718);
function h() {
    (0, i.closeModal)(m.U);
}
function x(e) {
    let { onClick: n, tooltipText: t, children: a, ...l } = e;
    return (0, r.jsx)(i.Tooltip, {
        text: t,
        children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(i.Button, {
                ...t,
                onClick: n,
                look: i.ButtonLooks.BLANK,
                size: i.ButtonSizes.ICON,
                color: i.ButtonColors.CUSTOM,
                className: f.actionButton,
                ...l,
                children: a
            });
        }
    });
}
function E() {
    let { zoomed: e, setZoomed: n } = (0, d.Y)();
    return (0, r.jsx)(x, {
        onClick: () => n(!e),
        tooltipText: e ? _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_OUT : _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_IN,
        children: e ? (0, r.jsx)(i.XLargeIcon, {}) : (0, r.jsx)(i.MagnifyingGlassIcon, {})
    });
}
function p(e) {
    var n, t;
    let { item: u } = e,
        c = null === (n = u.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = u.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        m = a.useCallback(() => {
            if (null != c && null != d) {
                if ('embed' === d.type) {
                    (0, s.l8)({
                        messageId: c.id,
                        channelId: c.channel_id,
                        message: c,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                        onRequestSent: h
                    });
                    return;
                }
                (0, s.l8)({
                    messageId: c.id,
                    channelId: c.channel_id,
                    message: c,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                    onRequestSent: h
                });
            }
        }, [c, d]),
        { canForwardMessages: f } = (0, l.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != c && f && (0, o.h)(c)
        ? (0, r.jsx)(x, {
              onClick: m,
              tooltipText: _.Z.Messages.MESSAGE_ACTION_FORWARD,
              children: (0, r.jsx)(i.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function C(e) {
    let {} = e;
    return c.isPlatformEmbedded
        ? (0, r.jsx)(x, {
              tooltipText: _.Z.Messages.DOWNLOAD,
              children: (0, r.jsx)(i.DownloadIcon, {})
          })
        : null;
}
function A(e) {
    var n;
    let { item: t } = e,
        a = null !== (n = t.original) && void 0 !== n ? n : t.url;
    return (0, r.jsx)(x, {
        onClick: () => (0, u.q)({ href: a }),
        tooltipText: _.Z.Messages.OPEN_LINK,
        children: (0, r.jsx)(i.WindowLaunchIcon, {})
    });
}
function g(e) {
    let {} = e;
    return (0, r.jsx)(x, {
        tooltipText: _.Z.Messages.MORE,
        children: (0, r.jsx)(i.MoreHorizontalIcon, {})
    });
}
n.Z = a.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (0, r.jsxs)('div', {
        className: f.actionButtons,
        children: [
            (0, r.jsx)(E, {}),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p, { item: n }), (0, r.jsx)(C, { item: n }), (0, r.jsx)(A, { item: n }), (0, r.jsx)(g, { item: n })]
                })
        ]
    });
});
