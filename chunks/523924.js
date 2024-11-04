var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(565138),
    o = n(693546),
    c = n(937111),
    d = n(388032),
    u = n(27471),
    h = n(364632);
t.Z = (e) => {
    let { headerId: t, reapplyText: n, onReapply: m, confirmText: p, onWithdrawApplication: g, rejectionReason: f = null, guild: _ = null } = e,
        E = (0, a.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null !== (e = null == _ ? void 0 : _.id) && void 0 !== e ? e : '0');
        });
    r.useEffect(() => {
        null == E && null != _ && o.Z.fetchJoinRequestCooldown(_.id);
    }, [E, _]);
    let I = (null != E ? E : 0) > 0,
        C = I && null != E ? Math.ceil((1000 * E - Date.now()) / 86400000) : 0;
    return (0, i.jsxs)('div', {
        className: u.confirmation,
        children: [
            (0, i.jsxs)('div', {
                className: u.confirmationContent,
                children: [
                    null !== _
                        ? (0, i.jsx)(s.Z, {
                              size: s.Z.Sizes.LARGER,
                              guild: _,
                              className: u.guildIcon
                          })
                        : (0, i.jsx)('img', {
                              alt: d.intl.string(d.t.bFPqMj),
                              src: h,
                              className: u.__invalid_verificationStateIcon
                          }),
                    (0, i.jsx)(l.Heading, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        className: u.header,
                        children: (null == _ ? void 0 : _.name) != null ? d.intl.formatToPlainString(d.t['P+/gzM'], { guildName: _.name }) : d.intl.string(d.t.gBPcuL)
                    }),
                    null != f && '' !== f
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsxs)(l.Text, {
                                  variant: 'text-sm/normal',
                                  children: [
                                      (0, i.jsx)('span', {
                                          className: u.rejectionReasonLabel,
                                          children: d.intl.string(d.t.cf1psb)
                                      }),
                                      (0, i.jsx)('span', {
                                          className: u.rejectionReason,
                                          children: f
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
                    (0, i.jsx)(l.TooltipContainer, {
                        className: u.confirmationButton,
                        text: I ? d.intl.formatToPlainString(d.t.A0f0Pz, { days: C }) : null,
                        'aria-label': I ? d.intl.formatToPlainString(d.t.A0f0Pz, { days: C }) : void 0,
                        children: (0, i.jsx)(l.Button, {
                            className: u.confirmationTooltipContents,
                            onClick: m,
                            color: l.Button.Colors.PRIMARY,
                            submitting: null == E,
                            disabled: I,
                            children: n
                        })
                    }),
                    (0, i.jsx)(l.Button, {
                        onClick: g,
                        color: l.Button.Colors.RED,
                        className: u.confirmationButton,
                        children: p
                    })
                ]
            })
        ]
    });
};
