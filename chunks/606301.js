r.d(n, {
    Tk: function () {
        return h;
    },
    kT: function () {
        return f;
    },
    wN: function () {
        return _;
    }
});
var i = r(757143);
var a = r(299608),
    s = r.n(a),
    o = r(626135),
    l = r(549058),
    u = r(981631);
let c = /(!|\.|;|,|-|—|–|\?|"|')/g,
    d = /(\n|\t|\s)/g,
    f = (e) => e.replace(c, '').replace(d, ' '),
    _ = (e) => (null == e ? [] : f(e).trim().split(' ')),
    h = s()(
        (e) => {
            o.default.track(u.rMx.AUTO_SUGGEST_DISPLAYED, { suggestion_trigger: e });
        },
        l.xv,
        {
            leading: !0,
            trailing: !1
        }
    );
