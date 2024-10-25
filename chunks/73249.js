var r = t(200651),
    i = t(192379),
    a = t(481060),
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
    (0, a.closeModal)(m.U);
}
function E(e) {
    let { onClick: n, tooltipText: t, children: i, ...l } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t,
        children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(a.Button, {
                ...t,
                onClick: n,
                look: a.ButtonLooks.BLANK,
                size: a.ButtonSizes.ICON,
                color: a.ButtonColors.CUSTOM,
                className: f.actionButton,
                ...l,
                children: i
            });
        }
    });
}
function x() {
    let { zoomed: e, setZoomed: n } = (0, d.Y)();
    return (0, r.jsx)(E, {
        onClick: () => n(!e),
        tooltipText: e ? _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_OUT : _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_IN,
        children: e ? (0, r.jsx)(a.XLargeIcon, {}) : (0, r.jsx)(a.MagnifyingGlassIcon, {})
    });
}
function p(e) {
    var n, t;
    let { item: u } = e,
        c = null === (n = u.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = u.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        m = i.useCallback(() => {
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
        ? (0, r.jsx)(E, {
              onClick: m,
              tooltipText: _.Z.Messages.MESSAGE_ACTION_FORWARD,
              children: (0, r.jsx)(a.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function C(e) {
    let {} = e;
    return c.isPlatformEmbedded
        ? (0, r.jsx)(E, {
              tooltipText: _.Z.Messages.DOWNLOAD,
              children: (0, r.jsx)(a.DownloadIcon, {})
          })
        : null;
}
function g(e) {
    var n;
    let { item: t } = e,
        i = null !== (n = t.original) && void 0 !== n ? n : t.url;
    return (0, r.jsx)(E, {
        onClick: () => (0, u.q)({ href: i }),
        tooltipText: _.Z.Messages.OPEN_LINK,
        children: (0, r.jsx)(a.WindowLaunchIcon, {})
    });
}
function A(e) {
    let {} = e;
    return (0, r.jsx)(E, {
        tooltipText: _.Z.Messages.MORE,
        children: (0, r.jsx)(a.MoreHorizontalIcon, {})
    });
}
n.Z = i.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (0, r.jsxs)('div', {
        className: f.actionButtons,
        children: [
            (0, r.jsx)(x, {}),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p, { item: n }), (0, r.jsx)(C, { item: n }), (0, r.jsx)(g, { item: n }), (0, r.jsx)(A, { item: n })]
                })
        ]
    });
});
