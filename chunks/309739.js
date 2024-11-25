n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(658722),
    l = n.n(r),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(457330),
    u = n(410030),
    m = n(726542),
    h = n(921801),
    g = n(553795),
    p = n(430824),
    x = n(63063),
    S = n(358085),
    T = n(709054),
    C = n(413182),
    _ = n(695346),
    E = n(726985),
    f = n(981631),
    I = n(388032),
    N = n(457796),
    A = n(232186);
function b() {
    let e = _.G6.useSetting(),
        t = _.Wz.useSetting(),
        n = S.isPlatformEmbedded ? I.intl.string(I.t.MznbeH) : I.intl.string(I.t.oKqC4u),
        s = (e) => {
            _.Wz.updateSetting(e),
                !(function (e) {
                    let t = () => {
                        _.SE.updateSetting(e ? T.default.keys(p.Z.getGuilds()) : []);
                    };
                    (0, c.openModal)((e) =>
                        (0, i.jsx)(c.ConfirmModal, {
                            header: I.intl.string(I.t['uUr+GR']),
                            confirmText: I.intl.string(I.t.gm1Ven),
                            cancelText: I.intl.string(I.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: c.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: I.intl.string(I.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsx)(h.F, {
        setting: E.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(c.FormSection, {
            className: A.marginBottom40,
            children: [
                (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    className: A.marginBottom8,
                    children: I.intl.string(I.t['8ka8lp'])
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: e,
                    onChange: (e) => _.G6.updateSetting(e),
                    note: n,
                    children: I.intl.string(I.t['4q/Ewc'])
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: !t,
                    note: I.intl.format(I.t['+5/xu7'], { helpdeskArticle: x.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) }),
                    onChange: (e) => s(!e),
                    children: I.intl.string(I.t.D5GXTU)
                })
            ]
        })
    });
}
function v() {
    let e = _.cP.useSetting(),
        t = _.Ou.useSetting();
    return (0, i.jsx)(h.F, {
        setting: E.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(c.FormSection, {
            className: A.marginBottom40,
            children: [
                (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    className: A.marginBottom8,
                    children: I.intl.string(I.t.VOszPD)
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: e,
                    note: I.intl.string(I.t.Hdh7sb),
                    onChange: (e) => _.cP.updateSetting(e),
                    children: I.intl.string(I.t.WEWQQk)
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: t,
                    note: I.intl.string(I.t.Czr3Bg),
                    onChange: (e) => _.Ou.updateSetting(e),
                    children: I.intl.string(I.t.UUvJVl)
                })
            ]
        })
    });
}
function j() {
    return (0, i.jsx)(h.F, {
        setting: E.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(c.FormSection, {
            className: A.marginBottom40,
            children: (0, i.jsx)(c.FormNotice, {
                type: c.FormNotice.Types.PRIMARY,
                body: I.intl.format(I.t.xvCsx8, {
                    termsLink: f.EYA.TERMS,
                    privacyLink: f.EYA.PRIVACY
                })
            })
        })
    });
}
let O = (e) => {
    switch (e.type) {
        case f.ABu.SPOTIFY:
            return I.intl.format(I.t['5sYPnp'], { name: e.name });
        case f.ABu.CRUNCHYROLL:
            return I.intl.format(I.t.Ge29Z2, { name: e.name });
        default:
            return I.intl.format(I.t.nmMsys, { game: e.name });
    }
};
function R(e) {
    let { account: t } = e,
        [n, r] = s.useState(t.showActivity),
        l = (0, u.ZP)();
    s.useEffect(() => {
        r(t.showActivity);
    }, [t]);
    let a = m.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.FormSwitch, {
                className: N.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    r(e), d.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: N.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: a.name,
                            className: N.connectionIcon,
                            src: (0, o.wj)(l) ? a.icon.darkSVG : a.icon.lightSVG
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    children: a.name
                                }),
                                (0, i.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', O(a), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: N.divider })
        ]
    });
}
function P() {
    let e = (0, a.e7)([g.Z], () => g.Z.getAccounts()),
        t = s.useMemo(() => e.filter((e) => m.Z.isSupported(e.type) && f.vbS.has(e.type)), [e]),
        [n, r] = s.useState(''),
        o = s.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => l()(e, m.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(h.F, {
              setting: E.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(c.FormSection, {
                  className: A.marginBottom40,
                  children: [
                      (0, i.jsx)(c.FormTitle, {
                          tag: c.FormTitleTags.H5,
                          className: A.marginBottom8,
                          children: I.intl.string(I.t['4F2KoK'])
                      }),
                      (0, i.jsx)(c.TextInput, {
                          className: N.searchInput,
                          value: n,
                          onChange: r,
                          placeholder: I.intl.string(I.t.WPrtoa)
                      }),
                      o.map((e) => (0, i.jsx)(R, { account: e }, e.id))
                  ]
              })
          });
}
function D(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: s } = C.b.useExperiment({ location: 'activity privacy tab' });
    return (0, i.jsxs)(c.FormSection, {
        className: t,
        tag: c.FormTitleTags.H1,
        title: n ? I.intl.string(I.t.Cq98yM) : null,
        children: [(0, i.jsx)(b, {}), (0, i.jsx)(v, {}), (0, i.jsx)(j, {}), s && (0, i.jsx)(P, {})]
    });
}
