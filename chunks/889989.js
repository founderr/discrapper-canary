t.d(n, {
    n: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(187753),
    l = t(596454),
    a = t(73346);
function s(e, n) {
    if (null != n)
        switch (n.type) {
            case r.T.STORE_ASSET:
                let t = (0, a._W)(e, n.store_asset_id);
                return (0, i.jsx)('img', {
                    src: t,
                    alt: '',
                    className: 'emoji'
                });
            case r.T.EMOJI:
                return (0, i.jsx)(l.Z, { emojiName: n.emoji });
        }
}
