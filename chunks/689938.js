var r = n(47120);
var i = n(653041);
var a = n(913527),
    o = n.n(a),
    s = n(627420),
    l = n(375964),
    u = n.n(l),
    c = n(924658),
    d = n.n(c),
    _ = n(539590),
    E = n.n(_);
let f = (e) => ({
        ...d(),
        ...E(),
        ...e
    }),
    h = new s.ZP({
        getMessages: (e) => {
            if ('en-US' === e) return f(u());
            return n(385007)('./'.concat(e, '.jsona'))
                .then((e) => {
                    let { default: t } = e;
                    return t;
                })
                .then(f);
        },
        getLanguages: () => n(515297)
    });
function p(e) {
    n(763747)
        .q[e]()
        .then((t) => {
            let { default: r } = t;
            {
                let { registerLocale: t } = n(578807);
                t(e, r);
            }
        });
}
function m(e, t) {
    let n = [],
        r = ('no' === e ? 'nb' : e).split('-');
    for (; r.length > 0; ) n.push(r.join('-')), r.pop();
    n.push(t), o().locale(n);
}
h.addListener('locale', (e) => {
    m(e, 'en-US');
    let { setTags: t } = n(960048).Z;
    t({ locale: e });
});
h.addListener('locale', p), p(h.getLocale()), (t.Z = h);
