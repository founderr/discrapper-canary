let r, i;
n.d(t, {
    FC: function () {
        return I;
    },
    _H: function () {
        return f;
    },
    yR: function () {
        return m;
    }
});
var a = n(47120);
var o = n(757143);
var s = n(400053),
    l = n.n(s),
    u = n(302454),
    c = n.n(u),
    d = n(20970),
    _ = n(959525);
function E(e, t, n) {
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
class f {
    format(e) {
        if (!this.hasMarkdown) return this.intlMessage.format(e);
        let [t, n] = this.getContext(e);
        return r(this.intlMessage.format(t), t, n);
    }
    astFormat(e) {
        let [t, n] = this.getContext(e);
        return i(this.intlMessage.format(t), t, n);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let t = e,
            n = _.yF.test(this.message),
            r = {};
        if (n) {
            let e = 0;
            for (let [n, i] of Object.entries(t)) this.message.includes('!!{'.concat(n, '}!!')) && ((r[++e] = i), (t[n] = e));
        }
        return [t, r];
    }
    constructor(e, t, n) {
        E(this, 'message', void 0), E(this, 'hasMarkdown', void 0), E(this, 'intlMessage', void 0), (this.message = n ? e : e.replace(_.hN, '')), (this.hasMarkdown = n), (this.intlMessage = new (l())(this.message, t));
    }
}
function h(e, t) {
    let n = c().parserFor(t(e)),
        r = c().reactFor(c().ruleOutput(e, 'react'));
    return (e, t, i) => {
        let a = !e.includes('\n\n');
        return (
            !a && (e += '\n\n'),
            r(
                n(e, {
                    inline: a,
                    context: t,
                    unsafeContext: i
                })
            )
        );
    };
}
function p(e) {
    let t = c().parserFor(e);
    return (e, n, r) =>
        t(e + '\n\n', {
            inline: !1,
            context: n,
            unsafeContext: r
        });
}
function m(e) {
    (r = h(d.j, e)), (i = p(d.j));
}
function I(e, t) {
    if (null == e) return '';
    null == r && m(n(281071).Z), (e = e.replace(/^\n+|\n+$/g, ''));
    let i = _.aT.test(e),
        a = _.b9.test(e);
    return i || a ? new f(e, t, a) : e;
}
