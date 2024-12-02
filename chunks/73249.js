t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(346610),
    u = t(868643),
    c = t(912332),
    d = t(378409),
    h = t(49012),
    m = t(358085),
    f = t(998502),
    p = t(212459),
    g = t(701865),
    x = t(388032),
    _ = t(197736);
function C() {
    (0, o.closeModal)(g.U);
}
function S(e) {
    let { onClick: n, tooltipText: t, children: r, selected: a, ...s } = e;
    return (0, i.jsx)(o.Tooltip, {
        text: t,
        children: (e) => {
            let { ...t } = e;
            return (0, i.jsx)(o.Button, {
                ...t,
                onClick: n,
                look: o.ButtonLooks.BLANK,
                size: o.ButtonSizes.ICON,
                color: o.ButtonColors.CUSTOM,
                className: l()(_.actionButton, { [_.selected]: a }),
                innerClassName: _.actionButtonInner,
                ...s,
                children: r
            });
        }
    });
}
function v() {
    let { zoomed: e, setZoomed: n } = (0, p.Y)();
    return (0, i.jsx)(S, {
        onClick: () => n(!e),
        tooltipText: e ? x.intl.string(x.t.vOFof3) : x.intl.string(x.t.Kt4gZ2),
        children: e ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {}) : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {})
    });
}
function y(e) {
    var n, t;
    let { item: a } = e,
        l = null === (n = a.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = a.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        h = r.useCallback(() => {
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
        { canForwardMessages: m } = (0, s.yk)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return null != l && m && (0, u.h)(l)
        ? (0, i.jsx)(S, {
              onClick: h,
              tooltipText: x.intl.string(x.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function E(e) {
    let { item: n } = e;
    if (!('VIDEO' === n.type || (m.isPlatformEmbedded && null == n.children && 'IMAGE' === n.type && (0, d.gS)(n.url)))) return null;
    let t = (0, d.s$)(n.url);
    async function r() {
        if (('VIDEO' === n.type && (0, h.q)({ href: t }), 'IMAGE' === n.type))
            try {
                await f.ZP.saveImage(t), (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.cqpdJS), o.ToastType.SUCCESS));
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(x.intl.string(x.t['8Ve/S0']), o.ToastType.FAILURE));
            }
    }
    return (0, i.jsx)(S, {
        onClick: r,
        tooltipText: x.intl.string('VIDEO' === n.type ? x.t.JVuuz8 : x.t['S/xNKS']),
        children: (0, i.jsx)(o.DownloadIcon, {})
    });
}
function I(e) {
    var n;
    let { item: t } = e;
    if (!(0, d.Jj)(t.url)) return null;
    let r = (0, d.s$)(null !== (n = t.original) && void 0 !== n ? n : t.url);
    return (0, i.jsx)(S, {
        onClick: () => (0, h.q)({ href: r }),
        tooltipText: x.intl.string(x.t.q5jLJC),
        children: (0, i.jsx)(o.WindowLaunchIcon, {})
    });
}
function b(e) {
    let { item: n, canCopyImage: t, canCopyLink: r, onClose: a, onSelect: l } = e;
    async function s() {
        let e = (0, d.s$)(n.url);
        try {
            await f.ZP.copyImage(e), (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.bhUpvL), o.ToastType.SUCCESS));
        } catch (e) {
            (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.PTPbj4), o.ToastType.FAILURE));
        }
    }
    return (0, i.jsx)(o.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: a,
        onSelect: l,
        children: (0, i.jsxs)(o.MenuGroup, {
            children: [
                t &&
                    (0, i.jsx)(
                        o.MenuItem,
                        {
                            label: x.intl.string(x.t.tvUqWl),
                            id: 'media-viewer-copy-image',
                            action: s
                        },
                        'media-viewer-copy-image'
                    ),
                r &&
                    (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'media-viewer-copy-link',
                            label: x.intl.string(x.t.WqhZsr),
                            action: function () {
                                var e;
                                let t = (0, d.s$)(null !== (e = n.original) && void 0 !== e ? e : n.url);
                                m.isPlatformEmbedded ? f.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, o.showToast)((0, o.createToast)(x.intl.string(x.t['L/PwZW']), o.ToastType.SUCCESS));
                            }
                        },
                        'media-viewer-copy-link'
                    )
            ]
        })
    });
}
function L(e) {
    let { item: n } = e,
        [t, a] = r.useState(!1),
        l = 'IMAGE' === n.type && m.isPlatformEmbedded && null == n.children && f.ZP.canCopyImage() && (0, d.Lz)(n.url),
        s = (0, d.Jj)(n.url);
    return l || s
        ? (0, i.jsx)(o.Popout, {
              shouldShow: t,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, i.jsx)(b, {
                      item: n,
                      canCopyImage: l,
                      canCopyLink: s,
                      onClose: () => a(!1)
                  }),
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(S, {
                      tooltipText: x.intl.string(x.t.UKOtz8),
                      onClick: () => a(!t),
                      selected: t,
                      children: (0, i.jsx)(o.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
n.Z = r.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (
        ('IMAGE' === n.type || !t) &&
        (0, i.jsxs)('div', {
            className: _.actionButtons,
            onClick: (e) => e.stopPropagation(),
            children: [
                'IMAGE' === n.type && (0, i.jsx)(v, {}),
                !t &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(y, { item: n }), (0, i.jsx)(E, { item: n }), (0, i.jsx)(I, { item: n }), (0, i.jsx)(L, { item: n })]
                    })
            ]
        })
    );
});
