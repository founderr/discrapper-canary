n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(724458),
    n(653041);
var r = n(979554),
    i = n(778787),
    a = n(803358);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends a.Z {
    static fromServer(e) {
        let { products: t, logo: n, hero_ranking: a, pdp_bg: s, mobile_bg: l, success_modal_bg: u, mobile_banner: c, hero_banner: d, featured_block: f, hero_logo: _, ...h } = e;
        return new o({
            ...super.fromServer(h),
            products: t.reduce((e, t) => {
                let n = i.Z.fromServer(t);
                return 0 === (n.type !== r.Z.VARIANTS_GROUP && n.items.length) ? e : (e.push(n), e);
            }, []),
            logo: n,
            heroRanking: a,
            pdpBg: s,
            mobileBg: l,
            successModalBg: u,
            mobileBanner: c,
            heroBanner: d,
            featuredBlock: f,
            heroLogo: _
        });
    }
    constructor(e) {
        super(e), s(this, 'products', void 0), s(this, 'logo', void 0), s(this, 'heroRanking', void 0), s(this, 'pdpBg', void 0), s(this, 'mobileBg', void 0), s(this, 'successModalBg', void 0), s(this, 'mobileBanner', void 0), s(this, 'heroBanner', void 0), s(this, 'featuredBlock', void 0), s(this, 'heroLogo', void 0), (this.products = e.products), (this.logo = e.logo), (this.heroRanking = e.heroRanking), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner), (this.heroBanner = e.heroBanner), (this.featuredBlock = e.featuredBlock), (this.heroLogo = e.heroLogo);
    }
}
