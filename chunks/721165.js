t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(442837),
    a = t(131388),
    l = t(171246),
    c = t(689011),
    s = t(931905),
    d = t(430824),
    u = t(563132),
    p = t(409813),
    f = t(586585),
    m = t(614277),
    b = t(750143),
    h = t(388032);
function g(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { subscriptionMetadataRequest: g, selectedSku: x, selectedStoreListing: _, application: v } = (0, u.usePaymentContext)(),
        C = (0, a.Z)(b.i),
        S = (0, o.e7)([d.Z], () => d.Z.getGuild(null == g ? void 0 : g.guild_id)),
        k = r.useCallback(() => n(p.h8.REVIEW), [n]);
    if (null == x) return null;
    let j = (0, l.KW)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: C
                    ? (0, i.jsx)(s.h, {
                          confirmCta: h.intl.string(h.t.PBHFSk),
                          onConfirm: k,
                          onCancel: t,
                          title: h.intl.format(h.t['6n6oXF'], { tier: x.name }),
                          subtitle: j ? h.intl.string(h.t.lzAoKC) : h.intl.formatToPlainString(h.t['GqaY/v'], { guildName: null == S ? void 0 : S.name }),
                          showOpenDiscord: !1
                      })
                    : (0, i.jsx)(c.Oc, {
                          icon: null == _ ? void 0 : _.thumbnail,
                          storeListingBenefits: null == _ ? void 0 : _.benefits,
                          application: null != v ? v : void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: x.name }),
                          subtitle: j ? h.intl.string(h.t.RvtbPz) : h.intl.string(h.t.zY39Zm),
                          description: j ? h.intl.formatToPlainString(h.t.QCe4ra, { applicationName: null == v ? void 0 : v.name }) : h.intl.string(h.t.n1Pu8P)
                      })
            }),
            !C &&
                (0, i.jsx)(m.O3, {
                    children: (0, i.jsx)(f.Z, {
                        onBack: t,
                        backText: h.intl.string(h.t.TQBY1N),
                        onPrimary: k,
                        primaryCTA: f.g.CONTINUE,
                        primaryText: h.intl.string(h.t['gZhF+/'])
                    })
                })
        ]
    });
}
