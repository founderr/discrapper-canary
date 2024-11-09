n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(921801),
    l = n(430824),
    a = n(63063),
    o = n(358085),
    c = n(709054),
    d = n(695346),
    u = n(726985),
    m = n(981631),
    h = n(388032),
    g = n(113207);
function p() {
    let e = d.G6.useSetting(),
        t = d.Wz.useSetting(),
        n = o.isPlatformEmbedded ? h.intl.string(h.t.MznbeH) : h.intl.string(h.t.oKqC4u),
        p = (e) => {
            d.Wz.updateSetting(e),
                !(function (e) {
                    let t = () => {
                        d.SE.updateSetting(e ? c.default.keys(l.Z.getGuilds()) : []);
                    };
                    (0, s.openModal)((e) =>
                        (0, i.jsx)(s.ConfirmModal, {
                            header: h.intl.string(h.t['uUr+GR']),
                            confirmText: h.intl.string(h.t.gm1Ven),
                            cancelText: h.intl.string(h.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: s.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: h.intl.string(h.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsx)(r.F, {
        setting: u.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(s.FormSection, {
            className: g.marginBottom40,
            children: [
                (0, i.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H5,
                    className: g.marginBottom8,
                    children: h.intl.string(h.t['8ka8lp'])
                }),
                (0, i.jsx)(s.FormSwitch, {
                    value: e,
                    onChange: (e) => d.G6.updateSetting(e),
                    note: n,
                    children: h.intl.string(h.t['4q/Ewc'])
                }),
                (0, i.jsx)(s.FormSwitch, {
                    value: !t,
                    note: h.intl.format(h.t['+5/xu7'], { helpdeskArticle: a.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) }),
                    onChange: (e) => p(!e),
                    children: h.intl.string(h.t.D5GXTU)
                })
            ]
        })
    });
}
function x() {
    let e = d.cP.useSetting(),
        t = d.Ou.useSetting();
    return (0, i.jsx)(r.F, {
        setting: u.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(s.FormSection, {
            className: g.marginBottom40,
            children: [
                (0, i.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H5,
                    className: g.marginBottom8,
                    children: h.intl.string(h.t.VOszPD)
                }),
                (0, i.jsx)(s.FormSwitch, {
                    value: e,
                    note: h.intl.string(h.t.Hdh7sb),
                    onChange: (e) => d.cP.updateSetting(e),
                    children: h.intl.string(h.t.WEWQQk)
                }),
                (0, i.jsx)(s.FormSwitch, {
                    value: t,
                    note: h.intl.string(h.t.Czr3Bg),
                    onChange: (e) => d.Ou.updateSetting(e),
                    children: h.intl.string(h.t.UUvJVl)
                })
            ]
        })
    });
}
function S() {
    return (0, i.jsx)(r.F, {
        setting: u.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(s.FormSection, {
            className: g.marginBottom40,
            children: (0, i.jsx)(s.FormNotice, {
                type: s.FormNotice.Types.PRIMARY,
                body: h.intl.format(h.t.xvCsx8, {
                    termsLink: m.EYA.TERMS,
                    privacyLink: m.EYA.PRIVACY
                })
            })
        })
    });
}
function T(e) {
    let { className: t, showHeader: n = !0 } = e;
    return (0, i.jsxs)(s.FormSection, {
        className: t,
        tag: s.FormTitleTags.H1,
        title: n ? h.intl.string(h.t.Cq98yM) : null,
        children: [(0, i.jsx)(p, {}), (0, i.jsx)(x, {}), (0, i.jsx)(S, {})]
    });
}
