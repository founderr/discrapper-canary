n.d(t, {
    Tk: function () {
        return E;
    },
    kT: function () {
        return d;
    },
    wN: function () {
        return _;
    }
});
var r = n(757143);
var i = n(299608),
    a = n.n(i),
    o = n(626135),
    s = n(549058),
    l = n(981631);
let u = /(!|\.|;|,|-|—|–|\?|"|')/g,
    c = /(\n|\t|\s)/g,
    d = (e) => e.replace(u, '').replace(c, ' '),
    _ = (e) => (null == e ? [] : d(e).trim().split(' ')),
    E = a()(
        (e) => {
            o.default.track(l.rMx.AUTO_SUGGEST_DISPLAYED, { suggestion_trigger: e });
        },
        s.xv,
        {
            leading: !0,
            trailing: !1
        }
    );
