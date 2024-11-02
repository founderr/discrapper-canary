var r = t(200651),
    i = t(192379),
    l = t(481060),
    o = t(346610),
    a = t(868643),
    s = t(912332),
    u = t(49012),
    c = t(358085),
    d = t(212459),
    m = t(701865),
    f = t(388032),
    h = t(92718);
function _() {
    (0, l.closeModal)(m.U);
}
function x(n) {
    let { onClick: e, tooltipText: t, children: i, ...o } = n;
    return (0, r.jsx)(l.Tooltip, {
        text: t,
        children: (n) => {
            let { ...t } = n;
            return (0, r.jsx)(l.Button, {
                ...t,
                onClick: e,
                look: l.ButtonLooks.BLANK,
                size: l.ButtonSizes.ICON,
                color: l.ButtonColors.CUSTOM,
                className: h.actionButton,
                ...o,
                children: i
            });
        }
    });
}
function p() {
    let { zoomed: n, setZoomed: e } = (0, d.Y)();
    return (0, r.jsx)(x, {
        onClick: () => e(!n),
        tooltipText: n ? f.intl.string(f.t.vOFof3) : f.intl.string(f.t.Kt4gZ2),
        children: n ? (0, r.jsx)(l.XLargeIcon, {}) : (0, r.jsx)(l.MagnifyingGlassIcon, {})
    });
}
function C(n) {
    var e, t;
    let { item: u } = n,
        c = null === (e = u.sourceMetadata) || void 0 === e ? void 0 : e.message,
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
                        onRequestSent: _
                    });
                    return;
                }
                (0, s.l8)({
                    messageId: c.id,
                    channelId: c.channel_id,
                    message: c,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                    onRequestSent: _
                });
            }
        }, [c, d]),
        { canForwardMessages: h } = (0, o.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != c && h && (0, a.h)(c)
        ? (0, r.jsx)(x, {
              onClick: m,
              tooltipText: f.intl.string(f.t.I3ltXF),
              children: (0, r.jsx)(l.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function g(n) {
    let {} = n;
    return c.isPlatformEmbedded
        ? (0, r.jsx)(x, {
              tooltipText: f.intl.string(f.t['1WjMbG']),
              children: (0, r.jsx)(l.DownloadIcon, {})
          })
        : null;
}
function S(n) {
    var e;
    let { item: t } = n,
        i = null !== (e = t.original) && void 0 !== e ? e : t.url;
    return (0, r.jsx)(x, {
        onClick: () => (0, u.q)({ href: i }),
        tooltipText: f.intl.string(f.t.wuRE8P),
        children: (0, r.jsx)(l.WindowLaunchIcon, {})
    });
}
function E(n) {
    let {} = n;
    return (0, r.jsx)(x, {
        tooltipText: f.intl.string(f.t.UKOtz8),
        children: (0, r.jsx)(l.MoreHorizontalIcon, {})
    });
}
e.Z = i.memo(function (n) {
    let { item: e, hideMediaOptions: t } = n;
    return (0, r.jsxs)('div', {
        className: h.actionButtons,
        children: [
            (0, r.jsx)(p, {}),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(C, { item: e }), (0, r.jsx)(g, { item: e }), (0, r.jsx)(S, { item: e }), (0, r.jsx)(E, { item: e })]
                })
        ]
    });
});
