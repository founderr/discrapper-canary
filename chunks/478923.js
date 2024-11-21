n.d(t, {
    Z: function () {
        return T;
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
    c = n(138201),
    d = n(699516),
    f = n(626135),
    _ = n(5192),
    p = n(51144),
    h = n(760030),
    m = n(922611),
    g = n(240515),
    E = n(981631),
    v = n(388032),
    I = n(973230);
function b(e) {
    let { user: t, onBlock: n, onIgnore: i, location: o, disallowIgnore: f, guildId: p, channelId: h } = e,
        E = (0, m.Do)({ location: 'confirm_block_modal_body' }),
        b = (0, a.e7)([d.Z], () => d.Z.isIgnored(t.id));
    return E
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
                                      children: v.intl.format(v.t.CIbzHR, { username: _.ZP.getName(p, h, t) })
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
                  f || b
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
                                    children: (0, r.jsx)(c.Z, {
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
                                                        guildId: p,
                                                        channelId: h,
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
                                    children: v.intl.format(v.t.SHvsn5, { articleLink: '' })
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
function T(e) {
    let { user: t, onBlock: n, onCancel: a, onIgnore: l, location: u = 'ContextMenu', disallowIgnore: c, guildId: d, channelId: _, ...g } = e,
        I = (0, m.Do)({ location: 'block-confirm-modal' });
    return (0, r.jsx)(s.ConfirmModal, {
        header: I ? null : v.intl.formatToPlainString(v.t.x5pOn5, { name: t.username }),
        confirmText: v.intl.string(v.t.l4EmaW),
        cancelText: I ? v.intl.string(v.t['ETE/oK']) : v.intl.string(v.t['eN6+rK']),
        onCancel: a,
        onConfirm: () => {
            null == n || n(),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: u },
                    type: E.OGo.BLOCKED
                }),
                f.default.track(E.rMx.BLOCK_USER_CONFIRMED),
                h.Z.showBlockSuccessToast(p.ZP.getUserTag(t));
        },
        impression: { impressionName: i.ImpressionNames.BLOCK_USER_CONFIRMATION },
        ...g,
        children: (0, r.jsx)(b, {
            user: t,
            guildId: d,
            channelId: _,
            onBlock: n,
            onIgnore: l,
            disallowIgnore: c
        })
    });
}
