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
    p = n(5192),
    h = n(922611),
    m = n(240515),
    g = n(981631),
    E = n(388032),
    v = n(294794);
function I(e) {
    let { user: t, onBlock: n, onIgnore: i, location: o, disallowIgnore: c, guildId: _, channelId: g } = e,
        I = (0, h.Do)({ location: 'confirm_block_modal_body' }),
        b = (0, a.e7)([f.Z], () => f.Z.isIgnored(t.id));
    return I
        ? (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: v.confirmationHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: v.iconContainer,
                              children: [
                                  (0, r.jsx)(s.Avatar, {
                                      size: s.AvatarSizes.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, r.jsx)('div', {
                                      className: v.icon,
                                      children: (0, r.jsx)(s.DenyIcon, { size: 'sm' })
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(s.Heading, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: E.intl.format(E.t.CIbzHR, { username: p.ZP.getName(_, g, t) })
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: E.intl.string(E.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(u.Z, {}),
                  c || b
                      ? null
                      : (0, r.jsxs)('div', {
                            className: v.otherOptions,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-secondary',
                                    children: E.intl.string(E.t['+BJTcH'])
                                }),
                                (0, r.jsx)('div', {
                                    className: v.row,
                                    children: (0, r.jsx)(d.Z, {
                                        title: E.intl.string(E.t.hC8tcX),
                                        description: E.intl.string(E.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: E.intl.string(E.t.mxJOd3),
                                        buttonColor: s.ButtonColors.PRIMARY,
                                        onButtonPress: () => {
                                            (0, s.closeAllModals)(),
                                                (0, s.openModal)((e) =>
                                                    (0, r.jsx)(m.Z, {
                                                        ...e,
                                                        user: t,
                                                        guildId: _,
                                                        channelId: g,
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
                                    className: v.featureGuide,
                                    children: E.intl.format(E.t.DJN6eX, { articleLink: '' })
                                })
                            ]
                        })
              ]
          })
        : (0, l.cC)({ location: 'confirm_block_modal' })
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: E.intl.format(E.t.pegItL, { name: t.username })
            });
}
function b(e) {
    let { user: t, onBlock: n, onCancel: a, onIgnore: l, location: u = 'ContextMenu', disallowIgnore: d, guildId: f, channelId: p, ...m } = e,
        v = (0, h.Do)({ location: 'block-confirm-modal' });
    return (0, r.jsx)(s.ConfirmModal, {
        header: v ? null : E.intl.formatToPlainString(E.t.x5pOn5, { name: t.username }),
        confirmText: E.intl.string(E.t.l4EmaW),
        cancelText: v ? E.intl.string(E.t['ETE/oK']) : E.intl.string(E.t['eN6+rK']),
        onCancel: a,
        onConfirm: () => {
            null == n || n(),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: u },
                    type: g.OGo.BLOCKED
                }),
                _.default.track(g.rMx.BLOCK_USER_CONFIRMED),
                c.Z.showBlockSuccessToast(t.id, null != p ? p : void 0);
        },
        impression: { impressionName: i.ImpressionNames.BLOCK_USER_CONFIRMATION },
        ...m,
        children: (0, r.jsx)(I, {
            user: t,
            guildId: f,
            channelId: p,
            onBlock: n,
            onIgnore: l,
            disallowIgnore: d
        })
    });
}
