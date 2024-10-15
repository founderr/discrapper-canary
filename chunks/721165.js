n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(789020);
var r = n(735250),
    a = n(470079),
    i = n(442837),
    l = n(131388),
    s = n(171246),
    o = n(689011),
    u = n(931905),
    c = n(430824),
    d = n(598),
    h = n(409813),
    I = n(586585),
    _ = n(614277),
    f = n(750143),
    m = n(689938);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: E, selectedSku: S, selectedStoreListing: p, application: T } = (0, d.usePaymentContext)(),
        C = (0, l.Z)(f.i),
        N = (0, i.e7)([c.Z], () => c.Z.getGuild(null == E ? void 0 : E.guild_id)),
        A = a.useCallback(() => t(h.h8.REVIEW), [t]);
    if (null == S) return null;
    let O = (0, s.KW)(S.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.C3, {
                children: C
                    ? (0, r.jsx)(u.h, {
                          confirmCta: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                          onConfirm: A,
                          onCancel: n,
                          title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({ tier: S.name }),
                          subtitle: O ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({ guildName: null == N ? void 0 : N.name }),
                          showOpenDiscord: !1
                      })
                    : (0, r.jsx)(o.Oc, {
                          icon: null == p ? void 0 : p.thumbnail,
                          storeListingBenefits: null == p ? void 0 : p.benefits,
                          application: null != T ? T : void 0,
                          title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({ tier: S.name }),
                          subtitle: O ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                          description: O ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({ applicationName: null == T ? void 0 : T.name }) : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                      })
            }),
            !C &&
                (0, r.jsx)(_.O3, {
                    children: (0, r.jsx)(I.Z, {
                        onBack: n,
                        backText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                        onPrimary: A,
                        primaryCTA: I.g.CONTINUE,
                        primaryText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                    })
                })
        ]
    });
}
