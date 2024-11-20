n.d(t, {
    Z: function () {
        return I;
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
    p = n(922611),
    h = n(240515),
    m = n(981631),
    g = n(388032),
    E = n(336565);
function v(e) {
    let { user: t, onBlock: n, onIgnore: i, location: o, disallowIgnore: f, guildId: m, channelId: v } = e,
        I = (0, p.Do)({ location: 'confirm_block_modal_body' }),
        b = (0, a.e7)([d.Z], () => d.Z.isIgnored(t.id));
    return I
        ? (0, r.jsxs)('div', {
              className: E.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: E.confirmationHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: E.iconContainer,
                              children: [
                                  (0, r.jsx)(s.Avatar, {
                                      size: s.AvatarSizes.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, r.jsx)('div', {
                                      className: E.icon,
                                      children: (0, r.jsx)(s.DenyIcon, { size: 'sm' })
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(s.Heading, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: g.intl.format(g.t.CIbzHR, { username: _.ZP.getName(m, v, t) })
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: g.intl.string(g.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(u.Z, {}),
                  f || b
                      ? null
                      : (0, r.jsxs)('div', {
                            className: E.otherOptions,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-secondary',
                                    children: g.intl.string(g.t['+BJTcH'])
                                }),
                                (0, r.jsx)('div', {
                                    className: E.row,
                                    children: (0, r.jsx)(c.Z, {
                                        title: g.intl.string(g.t.hC8tcX),
                                        description: g.intl.string(g.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: g.intl.string(g.t.mxJOd3),
                                        buttonColor: s.ButtonColors.PRIMARY,
                                        onButtonPress: () => {
                                            (0, s.closeAllModals)(),
                                                (0, s.openModal)((e) =>
                                                    (0, r.jsx)(h.Z, {
                                                        ...e,
                                                        user: t,
                                                        guildId: m,
                                                        channelId: v,
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
                                    className: E.featureGuide,
                                    children: g.intl.format(g.t.SHvsn5, { articleLink: '' })
                                })
                            ]
                        })
              ]
          })
        : (0, l.cC)({ location: 'confirm_block_modal' })
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: g.intl.format(g.t.pegItL, { name: t.username })
            });
}
function I(e) {
    let { user: t, onBlock: n, onCancel: a, onIgnore: l, location: u = 'ContextMenu', disallowIgnore: c, guildId: d, channelId: _, ...h } = e,
        E = (0, p.Do)({ location: 'block-confirm-modal' });
    return (0, r.jsx)(s.ConfirmModal, {
        header: E ? null : g.intl.formatToPlainString(g.t.x5pOn5, { name: t.username }),
        confirmText: g.intl.string(g.t.l4EmaW),
        cancelText: E ? g.intl.string(g.t['ETE/oK']) : g.intl.string(g.t['eN6+rK']),
        onCancel: a,
        onConfirm: () => {
            null == n || n(),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: u },
                    type: m.OGo.BLOCKED
                }),
                f.default.track(m.rMx.BLOCK_USER_CONFIRMED);
        },
        impression: { impressionName: i.ImpressionNames.BLOCK_USER_CONFIRMATION },
        ...h,
        children: (0, r.jsx)(v, {
            user: t,
            guildId: d,
            channelId: _,
            onBlock: n,
            onIgnore: l,
            disallowIgnore: c
        })
    });
}
