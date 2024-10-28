t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(442837),
    a = t(131388),
    s = t(171246),
    l = t(689011),
    c = t(931905),
    d = t(430824),
    u = t(598),
    _ = t(409813),
    p = t(586585),
    f = t(614277),
    I = t(750143),
    C = t(689938);
function m(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { subscriptionMetadataRequest: m, selectedSku: b, selectedStoreListing: S, application: h } = (0, u.usePaymentContext)(),
        T = (0, a.Z)(I.i),
        g = (0, o.e7)([d.Z], () => d.Z.getGuild(null == m ? void 0 : m.guild_id)),
        x = r.useCallback(() => n(_.h8.REVIEW), [n]);
    if (null == b) return null;
    let O = (0, s.KW)(b.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.C3, {
                children: T
                    ? (0, i.jsx)(c.h, {
                          confirmCta: C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                          onConfirm: x,
                          onCancel: t,
                          title: C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({ tier: b.name }),
                          subtitle: O ? C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({ guildName: null == g ? void 0 : g.name }),
                          showOpenDiscord: !1
                      })
                    : (0, i.jsx)(l.Oc, {
                          icon: null == S ? void 0 : S.thumbnail,
                          storeListingBenefits: null == S ? void 0 : S.benefits,
                          application: null != h ? h : void 0,
                          title: C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({ tier: b.name }),
                          subtitle: O ? C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : C.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                          description: O ? C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({ applicationName: null == h ? void 0 : h.name }) : C.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                      })
            }),
            !T &&
                (0, i.jsx)(f.O3, {
                    children: (0, i.jsx)(p.Z, {
                        onBack: t,
                        backText: C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                        onPrimary: x,
                        primaryCTA: p.g.CONTINUE,
                        primaryText: C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                    })
                })
        ]
    });
}
