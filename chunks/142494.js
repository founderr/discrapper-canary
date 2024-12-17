let i, a;
r.d(n, {
    FC: function () {
        return v;
    },
    _H: function () {
        return p;
    },
    yR: function () {
        return E;
    }
});
var s = r(47120);
var o = r(757143);
var l = r(400053),
    u = r.n(l),
    c = r(477660),
    d = r.n(c),
    f = r(20970),
    _ = r(959525);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class p {
    format(e) {
        if (!this.hasMarkdown) return this.intlMessage.format(e);
        let [n, r] = this.getContext(e);
        return i(this.intlMessage.format(n), n, r);
    }
    astFormat(e) {
        let [n, r] = this.getContext(e);
        return a(this.intlMessage.format(n), n, r);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let n = e,
            r = _.yF.test(this.message),
            i = {};
        if (r) {
            let e = 0;
            for (let [r, a] of Object.entries(n)) this.message.includes('!!{'.concat(r, '}!!')) && ((i[++e] = a), (n[r] = e));
        }
        return [n, i];
    }
    constructor(e, n, r) {
        h(this, 'message', void 0), h(this, 'hasMarkdown', void 0), h(this, 'intlMessage', void 0), (this.message = r ? e : e.replace(_.hN, '')), (this.hasMarkdown = r), (this.intlMessage = new (u())(this.message, n));
    }
}
function m(e, n) {
    let r = d().parserFor(n(e)),
        i = d().reactFor(d().ruleOutput(e, 'react'));
    return (e, n, a) => {
        let s = !e.includes('\n\n');
        return (
            !s && (e += '\n\n'),
            i(
                r(e, {
                    inline: s,
                    context: n,
                    unsafeContext: a
                })
            )
        );
    };
}
function g(e) {
    let n = d().parserFor(e);
    return (e, r, i) =>
        n(e + '\n\n', {
            inline: !1,
            context: r,
            unsafeContext: i
        });
}
function E(e) {
    (i = m(f.j, e)), (a = g(f.j));
}
function v(e, n) {
    if (null == e) return '';
    null == i && E(r(281071).Z), (e = e.replace(/^\n+|\n+$/g, ''));
    let a = _.aT.test(e),
        s = _.b9.test(e);
    return a || s ? new p(e, n, s) : e;
}
