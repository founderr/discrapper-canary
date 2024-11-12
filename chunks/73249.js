t(47120);
var r = t(200651),
    i = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(346610),
    u = t(868643),
    c = t(912332),
    d = t(378409),
    m = t(49012),
    h = t(358085),
    f = t(998502),
    p = t(212459),
    g = t(701865),
    _ = t(388032),
    x = t(92718);
function C() {
    (0, o.closeModal)(g.U);
}
function S(e) {
    let { onClick: n, tooltipText: t, children: i, selected: a, ...s } = e;
    return (0, r.jsx)(o.Tooltip, {
        text: t,
        children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(o.Button, {
                ...t,
                onClick: n,
                look: o.ButtonLooks.BLANK,
                size: o.ButtonSizes.ICON,
                color: o.ButtonColors.CUSTOM,
                className: l()(x.actionButton, { [x.selected]: a }),
                ...s,
                children: i
            });
        }
    });
}
function v() {
    let { zoomed: e, setZoomed: n } = (0, p.Y)();
    return (0, r.jsx)(S, {
        onClick: () => n(!e),
        tooltipText: e ? _.intl.string(_.t.vOFof3) : _.intl.string(_.t.Kt4gZ2),
        children: e ? (0, r.jsx)(o.MagnifyingGlassMinusIcon, {}) : (0, r.jsx)(o.MagnifyingGlassPlusIcon, {})
    });
}
function E(e) {
    var n, t;
    let { item: a } = e,
        l = null === (n = a.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = a.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        m = i.useCallback(() => {
            if (null != l && null != d) {
                if ('embed' === d.type) {
                    (0, c.l8)({
                        messageId: l.id,
                        channelId: l.channel_id,
                        message: l,
                        source: 'media-viewer',
                        forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                        onRequestSent: C
                    });
                    return;
                }
                (0, c.l8)({
                    messageId: l.id,
                    channelId: l.channel_id,
                    message: l,
                    source: 'media-viewer',
                    forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                    onRequestSent: C
                });
            }
        }, [l, d]),
        { canForwardMessages: h } = (0, s.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != l && h && (0, u.h)(l)
        ? (0, r.jsx)(S, {
              onClick: m,
              tooltipText: _.intl.string(_.t.I3ltXF),
              children: (0, r.jsx)(o.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function L(e) {
    let { item: n } = e;
    if (!('VIDEO' === n.type || (h.isPlatformEmbedded && null == n.children && 'IMAGE' === n.type && (0, d.gS)(n.url)))) return null;
    let t = (0, d.s$)(n.url);
    async function i() {
        if (('VIDEO' === n.type && (0, m.q)({ href: t }), 'IMAGE' === n.type))
            try {
                await f.ZP.saveImage(t);
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.R0RpRU), o.ToastType.FAILURE));
            }
    }
    return (0, r.jsx)(S, {
        onClick: i,
        tooltipText: _.intl.string(_.t['1WjMbG']),
        children: (0, r.jsx)(o.DownloadIcon, {})
    });
}
function y(e) {
    var n;
    let { item: t } = e;
    if (!(0, d.Jj)(t.url)) return null;
    let i = (0, d.s$)(null !== (n = t.original) && void 0 !== n ? n : t.url);
    return (0, r.jsx)(S, {
        onClick: () => (0, m.q)({ href: i }),
        tooltipText: _.intl.string(_.t.wuRE8P),
        children: (0, r.jsx)(o.WindowLaunchIcon, {})
    });
}
function I(e) {
    let { item: n, canCopyImage: t, canCopyLink: i, onClose: a, onSelect: l } = e;
    async function s() {
        let e = (0, d.s$)(n.url);
        try {
            await f.ZP.copyImage(e), (0, o.showToast)((0, o.createToast)(_.intl.string(_.t['t5VZ8/']), o.ToastType.SUCCESS));
        } catch (e) {
            (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.R0RpRU), o.ToastType.FAILURE));
        }
    }
    return (0, r.jsx)(o.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: a,
        onSelect: l,
        children: (0, r.jsxs)(o.MenuGroup, {
            children: [
                t &&
                    (0, r.jsx)(
                        o.MenuItem,
                        {
                            label: _.intl.string(_.t.tvUqWl),
                            id: 'media-viewer-copy-image',
                            action: s
                        },
                        'media-viewer-copy-image'
                    ),
                i &&
                    (0, r.jsx)(
                        o.MenuItem,
                        {
                            id: 'media-viewer-copy-link',
                            label: _.intl.string(_.t.WqhZsr),
                            action: function () {
                                var e;
                                let t = (0, d.s$)(null !== (e = n.original) && void 0 !== e ? e : n.url);
                                try {
                                    h.isPlatformEmbedded ? f.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, o.showToast)((0, o.createToast)(_.intl.string(_.t['L/PwZW']), o.ToastType.SUCCESS));
                                } catch (e) {
                                    (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.R0RpRU), o.ToastType.FAILURE));
                                }
                            }
                        },
                        'media-viewer-copy-link'
                    )
            ]
        })
    });
}
function A(e) {
    let { item: n } = e,
        [t, a] = i.useState(!1),
        l = 'IMAGE' === n.type && h.isPlatformEmbedded && null == n.children && f.ZP.canCopyImage() && (0, d.Lz)(n.url),
        s = (0, d.Jj)(n.url);
    return l || s
        ? (0, r.jsx)(o.Popout, {
              shouldShow: t,
              align: 'left',
              position: 'top',
              spacing: 18,
              renderPopout: () =>
                  (0, r.jsx)(I, {
                      item: n,
                      canCopyImage: l,
                      canCopyLink: s,
                      onClose: () => a(!1)
                  }),
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, r.jsx)(S, {
                      tooltipText: _.intl.string(_.t.UKOtz8),
                      onClick: () => a(!t),
                      selected: t,
                      children: (0, r.jsx)(o.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
n.Z = i.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (0, r.jsxs)('div', {
        className: x.actionButtons,
        children: [
            (0, r.jsx)(v, {}),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E, { item: n }), (0, r.jsx)(L, { item: n }), (0, r.jsx)(y, { item: n }), (0, r.jsx)(A, { item: n })]
                })
        ]
    });
});
