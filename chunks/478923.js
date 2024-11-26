n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(200651);
n(192379);
var i = n(990547),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(843931),
    u = n(1596),
    c = n(681678),
    d = n(138201),
    f = n(699516),
    _ = n(626135),
    p = n(63063),
    h = n(5192),
    m = n(922611),
    g = n(240515),
    E = n(981631),
    v = n(388032),
    I = n(294794);
function T(e) {
    let { user: t, onBlock: n, onIgnore: i, location: o, disallowIgnore: c, guildId: _, channelId: T } = e,
        b = (0, m.Do)({ location: 'confirm_block_modal_body' }),
        S = (0, a.e7)([f.Z], () => f.Z.isIgnored(t.id));
    return b
        ? (0, r.jsxs)('div', {
              className: I.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: I.confirmationHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: I.iconContainer,
                              children: [
                                  (0, r.jsx)(s.Avatar, {
                                      size: s.AvatarSizes.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, r.jsx)('div', {
                                      className: I.icon,
                                      children: (0, r.jsx)(s.DenyIcon, { size: 'sm' })
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(s.Heading, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: v.intl.format(v.t.CIbzHR, { username: h.ZP.getName(_, T, t) })
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: v.intl.string(v.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(u.Z, {}),
                  c || S
                      ? null
                      : (0, r.jsxs)('div', {
                            className: I.otherOptions,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-secondary',
                                    children: v.intl.string(v.t['+BJTcH'])
                                }),
                                (0, r.jsx)('div', {
                                    className: I.row,
                                    children: (0, r.jsx)(d.Z, {
                                        title: v.intl.string(v.t.hC8tcX),
                                        description: v.intl.string(v.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: v.intl.string(v.t.mxJOd3),
                                        buttonColor: s.ButtonColors.PRIMARY,
                                        onButtonPress: () => {
                                            (0, s.closeAllModals)(),
                                                (0, s.openModal)((e) =>
                                                    (0, r.jsx)(g.Z, {
                                                        ...e,
                                                        user: t,
                                                        guildId: _,
                                                        channelId: T,
                                                        onIgnore: i,
                                                        onBlock: n,
                                                        location: o
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    className: I.featureGuide,
                                    children: v.intl.format(v.t.DJN6eX, { articleLink: p.Z.getArticleURL(E.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, l.cC)({ location: 'confirm_block_modal' })
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: v.intl.format(v.t.pegItL, { name: t.username })
            });
}
function b(e) {
    let { user: t, onBlock: n, onCancel: a, onIgnore: l, location: u = 'ContextMenu', disallowIgnore: d, guildId: f, channelId: p, ...h } = e,
        g = (0, m.Do)({ location: 'block-confirm-modal' });
    return (0, r.jsx)(s.ConfirmModal, {
        header: g ? null : v.intl.formatToPlainString(v.t.x5pOn5, { name: t.username }),
        confirmText: v.intl.string(v.t.l4EmaW),
        cancelText: g ? v.intl.string(v.t['ETE/oK']) : v.intl.string(v.t['eN6+rK']),
        onCancel: a,
        onConfirm: () => {
            null == n || n(),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: u },
                    type: E.OGo.BLOCKED
                }),
                _.default.track(E.rMx.BLOCK_USER_CONFIRMED),
                c.Z.showBlockSuccessToast(t.id, null != p ? p : void 0);
        },
        impression: { impressionName: i.ImpressionNames.BLOCK_USER_CONFIRMATION },
        ...h,
        children: (0, r.jsx)(T, {
            user: t,
            guildId: f,
            channelId: p,
            onBlock: n,
            onIgnore: l,
            disallowIgnore: d
        })
    });
}
