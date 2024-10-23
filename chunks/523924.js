var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(565138),
    o = n(693546),
    c = n(937111),
    d = n(689938),
    u = n(27471),
    _ = n(364632);
t.Z = (e) => {
    let { headerId: t, reapplyText: n, onReapply: E, confirmText: h, onWithdrawApplication: m, rejectionReason: I = null, guild: p = null } = e,
        g = (0, s.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null !== (e = null == p ? void 0 : p.id) && void 0 !== e ? e : '0');
        });
    a.useEffect(() => {
        null == g && null != p && o.Z.fetchJoinRequestCooldown(p.id);
    }, [g, p]);
    let T = (null != g ? g : 0) > 0,
        C = T && null != g ? Math.ceil((1000 * g - Date.now()) / 86400000) : 0;
    return (0, i.jsxs)('div', {
        className: u.confirmation,
        children: [
            (0, i.jsxs)('div', {
                className: u.confirmationContent,
                children: [
                    null !== p
                        ? (0, i.jsx)(l.Z, {
                              size: l.Z.Sizes.LARGER,
                              guild: p,
                              className: u.guildIcon
                          })
                        : (0, i.jsx)('img', {
                              alt: d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                              src: _,
                              className: u.__invalid_verificationStateIcon
                          }),
                    (0, i.jsx)(r.Heading, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        className: u.header,
                        children: (null == p ? void 0 : p.name) != null ? d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({ guildName: p.name }) : d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
                    }),
                    null != I && '' !== I
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsxs)(r.Text, {
                                  variant: 'text-sm/normal',
                                  children: [
                                      (0, i.jsx)('span', {
                                          className: u.rejectionReasonLabel,
                                          children: d.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
                                      }),
                                      (0, i.jsx)('span', {
                                          className: u.rejectionReason,
                                          children: I
                                      })
                                  ]
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: u.confirmationButtonRow,
                children: [
                    (0, i.jsx)(r.TooltipContainer, {
                        className: u.confirmationButton,
                        text: T ? d.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY_COOLDOWN.format({ days: C }) : null,
                        'aria-label': T ? d.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY_COOLDOWN.format({ days: C }) : void 0,
                        children: (0, i.jsx)(r.Button, {
                            className: u.confirmationTooltipContents,
                            onClick: E,
                            color: r.Button.Colors.PRIMARY,
                            submitting: null == g,
                            disabled: T,
                            children: n
                        })
                    }),
                    (0, i.jsx)(r.Button, {
                        onClick: m,
                        color: r.Button.Colors.RED,
                        className: u.confirmationButton,
                        children: h
                    })
                ]
            })
        ]
    });
};
