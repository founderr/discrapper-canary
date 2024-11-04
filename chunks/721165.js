n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(789020);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(131388),
    l = n(171246),
    c = n(689011),
    s = n(931905),
    d = n(430824),
    u = n(563132),
    p = n(409813),
    f = n(586585),
    m = n(614277),
    b = n(750143),
    h = n(388032);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: g, selectedSku: x, selectedStoreListing: _, application: v } = (0, u.usePaymentContext)(),
        C = (0, a.Z)(b.i),
        S = (0, o.e7)([d.Z], () => d.Z.getGuild(null == g ? void 0 : g.guild_id)),
        k = r.useCallback(() => t(p.h8.REVIEW), [t]);
    if (null == x) return null;
    let y = (0, l.KW)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: C
                    ? (0, i.jsx)(s.h, {
                          confirmCta: h.intl.string(h.t.PBHFSk),
                          onConfirm: k,
                          onCancel: n,
                          title: h.intl.format(h.t['6n6oXF'], { tier: x.name }),
                          subtitle: y ? h.intl.string(h.t.lzAoKC) : h.intl.formatToPlainString(h.t['GqaY/v'], { guildName: null == S ? void 0 : S.name }),
                          showOpenDiscord: !1
                      })
                    : (0, i.jsx)(c.Oc, {
                          icon: null == _ ? void 0 : _.thumbnail,
                          storeListingBenefits: null == _ ? void 0 : _.benefits,
                          application: null != v ? v : void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: x.name }),
                          subtitle: y ? h.intl.string(h.t.RvtbPz) : h.intl.string(h.t.zY39Zm),
                          description: y ? h.intl.formatToPlainString(h.t.QCe4ra, { applicationName: null == v ? void 0 : v.name }) : h.intl.string(h.t.n1Pu8P)
                      })
            }),
            !C &&
                (0, i.jsx)(m.O3, {
                    children: (0, i.jsx)(f.Z, {
                        onBack: n,
                        backText: h.intl.string(h.t.TQBY1N),
                        onPrimary: k,
                        primaryCTA: f.g.CONTINUE,
                        primaryText: h.intl.string(h.t['gZhF+/'])
                    })
                })
        ]
    });
}
