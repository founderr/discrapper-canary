n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(727637),
    d = n(782568),
    _ = n(317632),
    E = n(174767),
    f = n(594174),
    h = n(55935),
    p = n(689938),
    m = n(575954);
function I(e) {
    let { invite: t, expired: n } = e,
        r = (0, l.e7)([f.default], () => {
            var e, n;
            return null !== (n = null === (e = f.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : '';
        }),
        o = (0, h.vc)(s()(t.created_at), 'LT'),
        d = a.useRef(null),
        _ = (0, c.Z)(d);
    return (
        a.useEffect(() => {
            !n && (0, E.Br)(t);
        }, [t, n]),
        (0, i.jsxs)('div', {
            className: m.container,
            ref: d,
            children: [
                (0, i.jsxs)('div', {
                    className: m.primaryRow,
                    children: [
                        (0, i.jsx)('img', {
                            className: m.inviteImage,
                            src: t.application_asset,
                            alt: 'Game Invite'
                        }),
                        (0, i.jsx)(u.Text, {
                            className: m.title,
                            variant: 'text-md/semibold',
                            color: 'interactive-active',
                            children: p.Z.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({ username: r })
                        }),
                        (0, i.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                (0, i.jsx)(T, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: _
                                }),
                                (0, i.jsx)(u.CircleIconButton, {
                                    className: m.deleteButton,
                                    tooltip: p.Z.Messages.DELETE,
                                    color: u.CircleIconButtonColors.SECONDARY,
                                    icon: (0, i.jsx)(u.TrashIcon, { size: 'xs' }),
                                    onClick: () => {
                                        (0, E.UF)(t);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: m.divider }),
                (0, i.jsxs)('div', {
                    className: m.secondaryRow,
                    children: [
                        (0, i.jsxs)(u.Text, {
                            variant: 'text-xs/medium',
                            className: m.subtitle,
                            color: 'text-muted',
                            children: [t.application_name, ' \xB7 ', o]
                        }),
                        n &&
                            (0, i.jsx)('div', {
                                className: m.metaContainer,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-xxs/semibold',
                                    className: m.__invalid_metaText,
                                    color: 'text-muted',
                                    children: p.Z.Messages.GAME_INVITES_EXPIRED
                                })
                            })
                    ]
                })
            ]
        })
    );
}
function T(e) {
    let { expired: t, invite: n, isHoveringInvite: r } = e,
        o = (0, l.e7)([_.Z], () => _.Z.isInviteGameInstalled(n)),
        s = (0, l.e7)([_.Z], () => _.Z.isInviteJoinable(n)),
        [c, f] = a.useState(!1),
        h = a.useCallback(async () => {
            f(!0);
            try {
                await (0, E.MH)(n);
            } catch {}
            f(!1);
        }, [n]),
        I = a.useCallback(async () => {
            f(!0);
            try {
                await (0, E.Ol)(n);
            } catch {}
            f(!1);
        }, [n]);
    if (t)
        return o && r
            ? (0, i.jsx)(u.Button, {
                  className: m.primaryButton,
                  color: u.ButtonColors.TRANSPARENT,
                  disabled: c,
                  size: u.ButtonSizes.SMALL,
                  onClick: h,
                  children: p.Z.Messages.GAME_INVITES_LAUNCH_GAME
              })
            : null;
    return o && s
        ? (0, i.jsx)(u.Button, {
              className: m.primaryButton,
              color: u.ButtonColors.GREEN,
              disabled: c,
              size: u.ButtonSizes.SMALL,
              onClick: I,
              children: p.Z.Messages.GAME_INVITES_JOIN_GAME
          })
        : null != n.fallback_url
          ? (0, i.jsx)(u.Button, {
                className: m.primaryButton,
                disabled: c,
                size: u.ButtonSizes.SMALL,
                color: u.ButtonColors.TRANSPARENT,
                onClick: () => (0, d.Z)(n.fallback_url),
                children: p.Z.Messages.GAME_INVITES_INSTALL_GAME
            })
          : (0, i.jsx)(u.Tooltip, {
                text: p.Z.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({ gameTitle: n.application_name }),
                children: (e) =>
                    (0, i.jsx)(u.Button, {
                        ...e,
                        className: m.primaryButton,
                        disabled: !0,
                        size: u.ButtonSizes.SMALL,
                        color: u.ButtonColors.TRANSPARENT,
                        onClick: () => (0, d.Z)(n.fallback_url),
                        children: (0, i.jsxs)('div', {
                            className: m.launchToJoinContainer,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xxs/medium',
                                    className: m.launchToJoinText,
                                    color: 'text-muted',
                                    children: p.Z.Messages.GAME_INVITES_LAUNCH_TO_JOIN
                                }),
                                (0, i.jsx)(u.CircleInformationIcon, {
                                    size: 'xxs',
                                    color: u.tokens.colors.TEXT_MUTED.css
                                })
                            ]
                        })
                    })
            });
}
