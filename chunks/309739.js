t.d(s, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(787740),
    r = t(134598),
    o = t(921801),
    l = t(430824),
    c = t(63063),
    d = t(358085),
    _ = t(709054),
    u = t(695346),
    E = t(726985),
    T = t(981631),
    S = t(689938),
    I = t(313612),
    N = t(113207);
function m() {
    let e = u.G6.useSetting(),
        s = u.Wz.useSetting(),
        t = d.isPlatformEmbedded ? S.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED : S.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC,
        i = (e) => {
            u.Wz.updateSetting(e),
                !(function (e) {
                    let s = () => {
                        u.SE.updateSetting(e ? _.default.keys(l.Z.getGuilds()) : []);
                    };
                    (0, a.openModal)((e) =>
                        (0, n.jsx)(a.ConfirmModal, {
                            header: S.Z.Messages.USER_DM_SETTINGS_TITLE,
                            confirmText: S.Z.Messages.NO_TEXT,
                            cancelText: S.Z.Messages.YES_TEXT,
                            onCancel: s,
                            confirmButtonColor: a.Button.Colors.BRAND,
                            ...e,
                            children: (0, n.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: S.Z.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
                            })
                        })
                    );
                })(e);
        };
    return (0, n.jsx)(o.F, {
        setting: E.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, n.jsxs)(a.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: S.Z.Messages.ACTIVITY_STATUS
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: e,
                    onChange: (e) => u.G6.updateSetting(e),
                    note: t,
                    children: S.Z.Messages.SHOW_CURRENT_ACTIVITY
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: !s,
                    note: S.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({ helpdeskArticle: c.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS) }),
                    onChange: (e) => i(!e),
                    children: S.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT
                })
            ]
        })
    });
}
function C() {
    let e = u.cP.useSetting(),
        s = u.Ou.useSetting();
    return (0, n.jsx)(o.F, {
        setting: E.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, n.jsxs)(a.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: S.Z.Messages.ACTIVITY_PARTY_PRIVACY
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: e,
                    note: S.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
                    onChange: (e) => u.cP.updateSetting(e),
                    children: S.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
                }),
                (0, n.jsx)(a.FormSwitch, {
                    value: s,
                    note: S.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
                    onChange: (e) => u.Ou.updateSetting(e),
                    children: S.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
                })
            ]
        })
    });
}
function A() {
    return (0, n.jsx)(o.F, {
        setting: E.s6.ACTIVITY_PRIVACY_BROADCASTING,
        children: (0, n.jsxs)(a.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, n.jsxs)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: [S.Z.Messages.BROADCASTING_SETTINGS, (0, n.jsx)(i.Z, { className: I.betaTag })]
                }),
                (0, n.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    className: N.marginBottom20,
                    children: S.Z.Messages.BROADCASTING_SETTINGS_DESCRIPTION
                }),
                (0, n.jsx)(a.FormItem, {
                    children: (0, n.jsx)(a.Button, {
                        onClick: () => (0, r.X)(),
                        size: a.ButtonSizes.SMALL,
                        children: S.Z.Messages.BROADCASTING_SETTINGS_CTA
                    })
                })
            ]
        })
    });
}
function g() {
    return (0, n.jsx)(o.F, {
        setting: E.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, n.jsx)(a.FormSection, {
            className: N.marginBottom40,
            children: (0, n.jsx)(a.FormNotice, {
                type: a.FormNotice.Types.PRIMARY,
                body: S.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
                    termsLink: T.EYA.TERMS,
                    privacyLink: T.EYA.PRIVACY
                })
            })
        })
    });
}
function h(e) {
    let { className: s, showHeader: t = !0 } = e;
    return (0, n.jsxs)(a.FormSection, {
        className: s,
        tag: a.FormTitleTags.H1,
        title: t ? S.Z.Messages.ACTIVITY_PRIVACY : null,
        children: [(0, n.jsx)(m, {}), (0, n.jsx)(C, {}), (0, n.jsx)(A, {}), (0, n.jsx)(g, {})]
    });
}
