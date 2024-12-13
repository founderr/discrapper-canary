t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    s = t(346610),
    u = t(868643),
    c = t(912332),
    d = t(378409),
    h = t(49012),
    m = t(358085),
    p = t(998502),
    f = t(212459),
    g = t(701865),
    _ = t(388032),
    x = t(197736);
function C() {
    (0, o.closeModal)(g.U);
}
function S(e) {
    let { onClick: n, tooltipText: t, children: a, selected: r, ...s } = e;
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
                className: l()(x.actionButton, { [x.selected]: r }),
                innerClassName: x.actionButtonInner,
                ...s,
                children: a
            });
        }
    });
}
function v() {
    let { zoomed: e, setZoomed: n } = (0, f.Y)();
    return (0, i.jsx)(S, {
        onClick: () => n(!e),
        tooltipText: e ? _.intl.string(_.t.vOFof3) : _.intl.string(_.t.Kt4gZ2),
        children: e ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {}) : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {})
    });
}
function E(e) {
    var n, t;
    let { item: r } = e,
        l = null === (n = r.sourceMetadata) || void 0 === n ? void 0 : n.message,
        d = null === (t = r.sourceMetadata) || void 0 === t ? void 0 : t.identifier,
        h = a.useCallback(() => {
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
              tooltipText: _.intl.string(_.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {})
          })
        : null;
}
function I(e) {
    let { item: n } = e,
        [t, r] = a.useState(!1);
    if (!('VIDEO' === n.type || (m.isPlatformEmbedded && null == n.children && 'IMAGE' === n.type && (0, d.gS)(n.url)))) return null;
    let l = (0, d.s$)(n.url);
    async function s() {
        if (('VIDEO' === n.type && (0, h.q)({ href: l }), 'IMAGE' === n.type)) {
            r(!0);
            try {
                await p.ZP.saveImage(l), (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.cqpdJS), o.ToastType.SUCCESS));
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(_.intl.string(_.t['8Ve/S0']), o.ToastType.FAILURE));
            } finally {
                r(!1);
            }
        }
    }
    return (0, i.jsx)(S, {
        onClick: s,
        tooltipText: _.intl.string('VIDEO' === n.type ? _.t.JVuuz8 : _.t['S/xNKS']),
        submitting: t,
        children: (0, i.jsx)(o.DownloadIcon, {})
    });
}
function y(e) {
    var n;
    let { item: t } = e;
    if (!(0, d.Jj)(t.url)) return null;
    let a = (0, d.s$)(null !== (n = t.original) && void 0 !== n ? n : t.url);
    return (0, i.jsx)(S, {
        onClick: () => (0, h.q)({ href: a }),
        tooltipText: _.intl.string(_.t.q5jLJC),
        children: (0, i.jsx)(o.WindowLaunchIcon, {})
    });
}
function b(e) {
    let { item: n, canCopyImage: t, canCopyLink: a, onClose: r, onSelect: l } = e;
    async function s() {
        let e = (0, d.s$)(n.url);
        try {
            await p.ZP.copyImage(e), (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.bhUpvL), o.ToastType.SUCCESS));
        } catch (e) {
            (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.PTPbj4), o.ToastType.FAILURE));
        }
    }
    return (0, i.jsx)(o.Menu, {
        navId: 'image-menu',
        'aria-label': 'placeholder',
        onClose: r,
        onSelect: l,
        children: (0, i.jsxs)(o.MenuGroup, {
            children: [
                t &&
                    (0, i.jsx)(
                        o.MenuItem,
                        {
                            label: _.intl.string(_.t.tvUqWl),
                            id: 'media-viewer-copy-image',
                            action: s
                        },
                        'media-viewer-copy-image'
                    ),
                a &&
                    (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'media-viewer-copy-link',
                            label: _.intl.string(_.t.WqhZsr),
                            action: function () {
                                var e;
                                let t = (0, d.s$)(null !== (e = n.original) && void 0 !== e ? e : n.url);
                                m.isPlatformEmbedded ? p.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, o.showToast)((0, o.createToast)(_.intl.string(_.t['L/PwZW']), o.ToastType.SUCCESS));
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
        [t, r] = a.useState(!1),
        l = 'IMAGE' === n.type && m.isPlatformEmbedded && null == n.children && p.ZP.canCopyImage() && (0, d.Lz)(n.url),
        s = (0, d.Jj)(n.url);
    return l || s
        ? (0, i.jsx)(o.Popout, {
              shouldShow: t,
              align: 'left',
              position: 'top',
              spacing: 18,
              onRequestClose: () => r(!1),
              renderPopout: () =>
                  (0, i.jsx)(b, {
                      item: n,
                      canCopyImage: l,
                      canCopyLink: s,
                      onClose: () => r(!1)
                  }),
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(S, {
                      tooltipText: _.intl.string(_.t.UKOtz8),
                      onClick: () => r(!t),
                      selected: t,
                      children: (0, i.jsx)(o.MoreHorizontalIcon, {})
                  });
              }
          })
        : null;
}
n.Z = a.memo(function (e) {
    let { item: n, hideMediaOptions: t } = e;
    return (
        ('IMAGE' === n.type || !t) &&
        (0, i.jsxs)('div', {
            className: x.actionButtons,
            onClick: (e) => e.stopPropagation(),
            children: [
                'IMAGE' === n.type && (0, i.jsx)(v, {}),
                !t &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(E, { item: n }), (0, i.jsx)(I, { item: n }), (0, i.jsx)(y, { item: n }), (0, i.jsx)(L, { item: n })]
                    })
            ]
        })
    );
});
