var r = n(302454),
    i = n.n(r),
    a = n(914216);
let s = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop#itemSkuId=(\\d+)?'),
    o = {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match(e) {
            let t = s.exec(e);
            return null == t || (0, a.Z)('MarkupShopLinkRule') ? t : null;
        },
        parse(e, t, n) {
            let r = e[0],
                i = e[1];
            return {
                type: 'shopLink',
                content: [
                    {
                        type: 'text',
                        content: i
                    }
                ],
                shopLink: r,
                skuId: i
            };
        }
    };
t.Z = { shopLink: o };
