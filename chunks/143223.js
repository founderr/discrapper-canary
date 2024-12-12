var i = r(302454),
    a = r.n(i),
    s = r(914216);
let o = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop#itemSkuId=(\\d+)?'),
    l = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match(e) {
            let n = o.exec(e);
            return null == n || (0, s.Z)('MarkupShopLinkRule') ? n : null;
        },
        parse(e, n, r) {
            let i = e[0],
                a = e[1];
            return {
                type: 'shopLink',
                content: [
                    {
                        type: 'text',
                        content: a
                    }
                ],
                shopLink: i,
                skuId: a
            };
        }
    };
n.Z = { shopLink: l };
