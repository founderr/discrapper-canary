t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(789020);
var r = t(735250),
    i = t(470079),
    a = t(442837),
    s = t(131388),
    o = t(171246),
    l = t(689011),
    c = t(931905),
    u = t(430824),
    d = t(598),
    I = t(409813),
    _ = t(586585),
    m = t(614277),
    f = t(750143),
    p = t(689938);
function T(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { subscriptionMetadataRequest: T, selectedSku: h, selectedStoreListing: N, application: E } = (0, d.usePaymentContext)(),
        C = (0, s.Z)(f.i),
        S = (0, a.e7)([u.Z], () => u.Z.getGuild(null == T ? void 0 : T.guild_id)),
        P = i.useCallback(() => n(I.h8.REVIEW), [n]);
    if (null == h) return null;
    let g = (0, o.KW)(h.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.C3, {
                children: C
                    ? (0, r.jsx)(c.h, {
                          confirmCta: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                          onConfirm: P,
                          onCancel: t,
                          title: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({ tier: h.name }),
                          subtitle: g ? p.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({ guildName: null == S ? void 0 : S.name }),
                          showOpenDiscord: !1
                      })
                    : (0, r.jsx)(l.Oc, {
                          icon: null == N ? void 0 : N.thumbnail,
                          storeListingBenefits: null == N ? void 0 : N.benefits,
                          application: null != E ? E : void 0,
                          title: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({ tier: h.name }),
                          subtitle: g ? p.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : p.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                          description: g ? p.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({ applicationName: null == E ? void 0 : E.name }) : p.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                      })
            }),
            !C &&
                (0, r.jsx)(m.O3, {
                    children: (0, r.jsx)(_.Z, {
                        onBack: t,
                        backText: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                        onPrimary: P,
                        primaryCTA: _.g.CONTINUE,
                        primaryText: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                    })
                })
        ]
    });
}
