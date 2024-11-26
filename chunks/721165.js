t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(442837),
    a = t(131388),
    l = t(171246),
    c = t(689011),
    d = t(931905),
    s = t(430824),
    u = t(563132),
    f = t(409813),
    p = t(586585),
    m = t(614277),
    b = t(750143),
    _ = t(388032);
function x(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { subscriptionMetadataRequest: x, selectedSku: g, selectedStoreListing: h, application: C } = (0, u.usePaymentContext)(),
        v = (0, a.Z)(b.i),
        S = (0, o.e7)([s.Z], () => s.Z.getGuild(null == x ? void 0 : x.guild_id)),
        j = r.useCallback(() => n(f.h8.REVIEW), [n]);
    if (null == g) return null;
    let k = (0, l.KW)(g.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: v
                    ? (0, i.jsx)(d.h, {
                          confirmCta: _.intl.string(_.t.PBHFSk),
                          onConfirm: j,
                          onCancel: t,
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
                        onBack: t,
                        backText: _.intl.string(_.t.TQBY1N),
                        onPrimary: j,
                        primaryCTA: p.g.CONTINUE,
                        primaryText: _.intl.string(_.t['gZhF+/'])
                    })
                })
        ]
    });
}
