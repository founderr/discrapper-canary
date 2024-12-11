n.d(t, {
    Z: function () {
        return x;
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
    f = n(409813),
    p = n(586585),
    m = n(614277),
    b = n(750143),
    _ = n(388032);
function x(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: x, selectedSku: g, selectedStoreListing: h, application: C } = (0, u.usePaymentContext)(),
        v = (0, a.Z)(b.i),
        S = (0, o.e7)([d.Z], () => d.Z.getGuild(null == x ? void 0 : x.guild_id)),
        j = r.useCallback(() => t(f.h8.REVIEW), [t]);
    if (null == g) return null;
    let k = (0, l.KW)(g.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: v
                    ? (0, i.jsx)(s.h, {
                          confirmCta: _.intl.string(_.t.PBHFSk),
                          onConfirm: j,
                          onCancel: n,
                          title: _.intl.format(_.t['6n6oXF'], { tier: g.name }),
                          subtitle: k ? _.intl.string(_.t.lzAoKC) : _.intl.formatToPlainString(_.t['GqaY/v'], { guildName: null == S ? void 0 : S.name }),
                          showOpenDiscord: !1
                      })
                    : (0, i.jsx)(c.Oc, {
                          icon: null == h ? void 0 : h.thumbnail,
                          storeListingBenefits: null == h ? void 0 : h.benefits,
                          application: null != C ? C : void 0,
                          title: _.intl.format(_.t.haiCxc, { tier: g.name }),
                          subtitle: k ? _.intl.string(_.t.RvtbPz) : _.intl.string(_.t.zY39Zm),
                          description: k ? _.intl.formatToPlainString(_.t.QCe4ra, { applicationName: null == C ? void 0 : C.name }) : _.intl.string(_.t.n1Pu8P)
                      })
            }),
            !v &&
                (0, i.jsx)(m.O3, {
                    children: (0, i.jsx)(p.Z, {
                        onBack: n,
                        backText: _.intl.string(_.t.TQBY1N),
                        onPrimary: j,
                        primaryCTA: p.g.CONTINUE,
                        primaryText: _.intl.string(_.t['gZhF+/'])
                    })
                })
        ]
    });
}
