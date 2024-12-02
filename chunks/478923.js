n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(990547),
    s = n(442837),
    o = n(481060),
    l = n(194359),
    u = n(843931),
    c = n(1596),
    d = n(681678),
    f = n(138201),
    _ = n(699516),
    p = n(626135),
    h = n(63063),
    m = n(5192),
    g = n(922611),
    E = n(240515),
    v = n(858380),
    I = n(981631),
    T = n(388032),
    b = n(294794);
function S(e) {
    let { user: t, onBlock: n, onIgnore: i, location: a, disallowIgnore: l, guildId: d, channelId: S } = e,
        y = (0, g.Do)({ location: 'confirm_block_modal_body' }),
        A = (0, s.e7)([_.Z], () => _.Z.isIgnored(t.id));
    return y
        ? (0, r.jsxs)('div', {
              className: b.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: b.confirmationHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: b.iconContainer,
                              children: [
                                  (0, r.jsx)(o.Avatar, {
                                      size: o.AvatarSizes.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, r.jsx)('div', {
                                      className: b.icon,
                                      children: (0, r.jsx)(o.DenyIcon, {})
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(o.Heading, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: T.intl.format(T.t.CIbzHR, { username: m.ZP.getName(d, S, t) })
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: T.intl.string(T.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(c.Z, {}),
                  l || A
                      ? null
                      : (0, r.jsxs)('div', {
                            className: b.otherOptions,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-secondary',
                                    children: T.intl.string(T.t['+BJTcH'])
                                }),
                                (0, r.jsx)('div', {
                                    className: b.row,
                                    children: (0, r.jsx)(f.Z, {
                                        title: T.intl.string(T.t.hC8tcX),
                                        description: T.intl.string(T.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: T.intl.string(T.t.mxJOd3),
                                        buttonColor: o.ButtonColors.PRIMARY,
                                        onButtonPress: () => {
                                            p.default.track(I.rMx.USER_REMEDIATION_ACTION, {
                                                action: v.l.GOTO_IGNORE,
                                                location: a
                                            }),
                                                (0, o.closeAllModals)(),
                                                (0, o.openModal)((e) =>
                                                    (0, r.jsx)(E.Z, {
                                                        ...e,
                                                        user: t,
                                                        guildId: d,
                                                        channelId: S,
                                                        onIgnore: i,
                                                        onBlock: n,
                                                        location: a
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    className: b.featureGuide,
                                    children: T.intl.format(T.t.DJN6eX, { articleLink: h.Z.getArticleURL(I.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, u.cC)({ location: 'confirm_block_modal' })
          ? (0, r.jsx)(c.Z, {})
          : (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                children: T.intl.format(T.t.pegItL, { name: t.username })
            });
}
function y(e) {
    let { user: t, onBlock: n, onCancel: s, onIgnore: u, location: c = 'ContextMenu', disallowIgnore: f, guildId: _, channelId: h, ...m } = e,
        E = (0, g.Do)({ location: 'block-confirm-modal' });
    return (
        i.useLayoutEffect(
            () => () => {
                p.default.track(I.rMx.USER_REMEDIATION_ACTION, {
                    action: v.l.DISMISS_BLOCK,
                    location: c
                });
            },
            [c]
        ),
        (0, r.jsx)(o.ConfirmModal, {
            header: E ? null : T.intl.formatToPlainString(T.t.x5pOn5, { name: t.username }),
            confirmText: T.intl.string(T.t.l4EmaW),
            cancelText: E ? T.intl.string(T.t['ETE/oK']) : T.intl.string(T.t['eN6+rK']),
            onCancel: () => {
                p.default.track(I.rMx.USER_REMEDIATION_ACTION, {
                    action: v.l.CANCEL_BLOCK,
                    location: c
                }),
                    null == s || s();
            },
            onConfirm: () => {
                null == n || n(),
                    l.Z.addRelationship({
                        userId: t.id,
                        context: { location: c },
                        type: I.OGo.BLOCKED
                    }),
                    p.default.track(I.rMx.BLOCK_USER_CONFIRMED),
                    d.Z.showBlockSuccessToast(t.id, null != h ? h : void 0);
            },
            impression: { impressionName: a.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...m,
            children: (0, r.jsx)(S, {
                user: t,
                guildId: _,
                channelId: h,
                onBlock: n,
                onIgnore: u,
                disallowIgnore: f
            })
        })
    );
}
