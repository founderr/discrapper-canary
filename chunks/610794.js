n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(457330),
    c = n(410030),
    d = n(726542),
    u = n(275759),
    m = n(231757),
    g = n(888496),
    h = n(706454),
    p = n(553795),
    x = n(63063),
    T = n(981631),
    S = n(856651),
    _ = n(388032),
    E = n(429779);
function C(e) {
    var t;
    let { account: n, refreshed: l, handleRefresh: o } = e,
        [c, d] = s.useState(!1),
        m = null !== (t = n.metadata) && void 0 !== t ? t : {},
        p = (0, r.e7)([h.default], () => h.default.locale),
        C = s.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        f = null;
    switch (n.type) {
        case T.ABu.REDDIT:
            f = (0, g.oP)(m, E.metadataItem);
            break;
        case T.ABu.STEAM:
            f = (0, g.Dq)(m, E.metadataItem);
            break;
        case T.ABu.TWITTER:
            f = (0, g.rJ)(m, E.metadataItem);
            break;
        case T.ABu.EBAY:
            f = (0, g.ul)(m, E.metadataItem);
            break;
        case T.ABu.PAYPAL:
            f = (0, g.li)(m, E.metadataItem);
            break;
        case T.ABu.TIKTOK:
            f = (0, g.hf)(m, E.metadataItem);
    }
    let I = (0, u.FI)(m[S.PC.CREATED_AT], p),
        N = null,
        A = _.intl.string(_.t.wzzjk5);
    return (
        (null == f || 0 === f.length) &&
            null == I &&
            ((N = (0, i.jsx)(
                a.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: _.intl.format(_.t.Up2ni4, { helpdeskUrl: x.Z.getArticleURL(T.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (A = _.intl.string(_.t['LVh3//']))),
        l && (A = _.intl.string(_.t.i4jeWV)),
        (0, i.jsxs)('div', {
            className: E.metadataContainer,
            children: [
                N,
                null == f
                    ? void 0
                    : f.map((e, t) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [e, t < f.length - 1 ? (0, i.jsx)('span', { className: E.dot }) : null]
                          })
                      ),
                null != f && f.length > 0 && null != I ? (0, i.jsx)('div', { className: E.dot }) : null,
                null != I
                    ? (0, i.jsx)(
                          a.Text,
                          {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              children: _.intl.format(_.t['9rfonp'], { date: I })
                          },
                          'member-since'
                      )
                    : null,
                (0, i.jsx)(
                    a.Button,
                    {
                        className: E.metadataRefreshButton,
                        look: a.Button.Looks.OUTLINED,
                        color: l ? a.Button.Colors.GREEN : a.Button.Colors.PRIMARY,
                        size: a.Button.Sizes.MIN,
                        submitting: c,
                        disabled: l,
                        'aria-label': _.intl.string(_.t.sCkLYG),
                        onClick: l ? void 0 : C,
                        children: A
                    },
                    'refresh-button'
                )
            ]
        })
    );
}
function f(e) {
    let { account: t, handleRefresh: n, refreshedAccountIds: r } = e,
        [u, g] = s.useState(t.visibility),
        [h, p] = s.useState(t.metadataVisibility),
        x = (0, c.ZP)();
    s.useEffect(() => {
        g(t.visibility), p(t.metadataVisibility);
    }, [t]);
    let T = d.Z.get(t.type),
        S = !0 === T.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: T.name,
                        className: E.connectionIcon,
                        src: (0, l.wj)(x) ? T.icon.darkSVG : T.icon.lightSVG
                    }),
                    (0, i.jsxs)('div', {
                        className: E.activitySettings,
                        children: [
                            (0, i.jsxs)(a.FormSwitch, {
                                className: E.visibilitySwitch,
                                hideBorder: !0,
                                value: 1 === u,
                                onChange: function (e) {
                                    let { verified: n } = t,
                                        i = e ? 1 : 0;
                                    if (e && !n) {
                                        g(i),
                                            (0, m.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            });
                                        return;
                                    }
                                    g(i), o.Z.setVisibility(t.type, t.id, i);
                                },
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: T.name
                                    }),
                                    S &&
                                        (0, i.jsx)(C, {
                                            account: t,
                                            refreshed: r.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            S &&
                                (0, i.jsx)(a.FormSwitch, {
                                    className: E.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== u || null == t.metadata,
                                    value: 1 === h,
                                    onChange: function (e) {
                                        let { verified: n } = t,
                                            i = e ? 1 : 0;
                                        if (e && !n) {
                                            p(i),
                                                (0, m.Z)({
                                                    platformType: t.type,
                                                    location: 'User Settings'
                                                });
                                            return;
                                        }
                                        p(i), o.Z.setMetadataVisibility(t.type, t.id, i);
                                    },
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: _.intl.string(_.t['3l78ws'])
                                    })
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: E.divider })
        ]
    });
}
function I() {
    let e = (0, r.e7)([p.Z], () => p.Z.getAccounts()),
        t = s.useMemo(() => e.filter((e) => d.Z.isSupported(e.type)), [e]),
        [n, l] = s.useState([]),
        c = s.useCallback(
            (e) =>
                o.Z.refresh(e.type, e.id).finally(() => {
                    l((t) => [...t, e.id]);
                }),
            []
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)(a.FormSection, {
              className: E.container,
              children: [
                  (0, i.jsx)(a.FormTitle, {
                      tag: a.FormTitleTags.H5,
                      className: E.title,
                      children: _.intl.string(_.t.aw0GVV)
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          f,
                          {
                              account: e,
                              handleRefresh: c,
                              refreshedAccountIds: n
                          },
                          e.id
                      )
                  )
              ]
          });
}
