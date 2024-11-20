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
    h = n(888496),
    g = n(706454),
    p = n(553795),
    x = n(63063),
    S = n(981631),
    T = n(856651),
    C = n(388032),
    E = n(417809);
function _(e) {
    var t;
    let { account: n, refreshed: l, handleRefresh: o } = e,
        [c, d] = s.useState(!1),
        m = null !== (t = n.metadata) && void 0 !== t ? t : {},
        p = (0, r.e7)([g.default], () => g.default.locale),
        _ = s.useCallback(async () => {
            d(!0);
            try {
                await o(n);
            } finally {
                d(!1);
            }
        }, [n, o]),
        f = null;
    switch (n.type) {
        case S.ABu.REDDIT:
            f = (0, h.oP)(m, E.metadataItem);
            break;
        case S.ABu.STEAM:
            f = (0, h.Dq)(m, E.metadataItem);
            break;
        case S.ABu.TWITTER:
            f = (0, h.rJ)(m, E.metadataItem);
            break;
        case S.ABu.EBAY:
            f = (0, h.ul)(m, E.metadataItem);
            break;
        case S.ABu.PAYPAL:
            f = (0, h.li)(m, E.metadataItem);
            break;
        case S.ABu.TIKTOK:
            f = (0, h.hf)(m, E.metadataItem);
    }
    let I = (0, u.FI)(m[T.PC.CREATED_AT], p),
        N = null,
        A = C.intl.string(C.t.wzzjk5);
    return (
        (null == f || 0 === f.length) &&
            null == I &&
            ((N = (0, i.jsx)(
                a.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: C.intl.format(C.t.Up2ni4, { helpdeskUrl: x.Z.getArticleURL(S.BhN.CONNECTION_DETAILS) })
                },
                'label'
            )),
            (A = C.intl.string(C.t['LVh3//']))),
        l && (A = C.intl.string(C.t.i4jeWV)),
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
                              children: C.intl.format(C.t['9rfonp'], { date: I })
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
                        'aria-label': C.intl.string(C.t.sCkLYG),
                        onClick: l ? void 0 : _,
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
        [u, h] = s.useState(t.visibility),
        [g, p] = s.useState(t.metadataVisibility),
        x = (0, c.ZP)();
    s.useEffect(() => {
        h(t.visibility), p(t.metadataVisibility);
    }, [t]);
    let S = d.Z.get(t.type),
        T = !0 === S.hasMetadata;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.activityRow,
                children: [
                    (0, i.jsx)('img', {
                        alt: S.name,
                        className: E.connectionIcon,
                        src: (0, l.wj)(x) ? S.icon.darkSVG : S.icon.lightSVG
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
                                        h(i),
                                            (0, m.Z)({
                                                platformType: t.type,
                                                location: 'User Settings'
                                            });
                                        return;
                                    }
                                    h(i), o.Z.setVisibility(t.type, t.id, i);
                                },
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: S.name
                                    }),
                                    T &&
                                        (0, i.jsx)(_, {
                                            account: t,
                                            refreshed: r.includes(t.id),
                                            handleRefresh: n
                                        })
                                ]
                            }),
                            T &&
                                (0, i.jsx)(a.FormSwitch, {
                                    className: E.additionalDetailsSwitch,
                                    hideBorder: !0,
                                    disabled: 1 !== u || null == t.metadata,
                                    value: 1 === g,
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
                                        children: C.intl.string(C.t['3l78ws'])
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
                      children: C.intl.string(C.t.aw0GVV)
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
