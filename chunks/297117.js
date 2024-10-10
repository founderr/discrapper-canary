r.d(t, {
    $3: function () {
        return E;
    },
    $Q: function () {
        return I;
    },
    Dt: function () {
        return O;
    },
    HH: function () {
        return N;
    },
    NP: function () {
        return A;
    },
    R2: function () {
        return l;
    },
    d8: function () {
        return d;
    }
});
var n = r(688838);
function a(e, t, r, a) {
    let _ = {
        filename: e,
        function: '<anonymous>' === t ? n.Fi : t,
        in_app: !0
    };
    return void 0 !== r && (_.lineno = r), void 0 !== a && (_.colno = a), _;
}
let _ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    o = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    i = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    E = [
        30,
        (e) => {
            let t = _.exec(e);
            if (t) {
                let [, e, r, _] = t;
                return a(e, n.Fi, +r, +_);
            }
            let r = o.exec(e);
            if (r) {
                if (r[2] && 0 === r[2].indexOf('eval')) {
                    let e = i.exec(r[2]);
                    e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
                }
                let [e, t] = p(r[1] || n.Fi, r[2]);
                return a(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
            }
        }
    ],
    c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    I = [
        50,
        (e) => {
            let t = c.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(' > eval') > -1) {
                    let e = s.exec(t[3]);
                    e && ((t[1] = t[1] || 'eval'), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ''));
                }
                let e = t[3],
                    r = t[1] || n.Fi;
                return ([r, e] = p(r, e)), a(e, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
            }
        }
    ],
    u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    l = [
        40,
        (e) => {
            let t = u.exec(e);
            return t ? a(t[2], t[1] || n.Fi, +t[3], t[4] ? +t[4] : void 0) : void 0;
        }
    ],
    R = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    A = [
        10,
        (e) => {
            let t = R.exec(e);
            return t ? a(t[2], t[3] || n.Fi, +t[1]) : void 0;
        }
    ],
    T = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    N = [
        20,
        (e) => {
            let t = T.exec(e);
            return t ? a(t[5], t[3] || t[4] || n.Fi, +t[1], +t[2]) : void 0;
        }
    ],
    d = [E, I],
    O = (0, n.pE)(...d),
    p = (e, t) => {
        let r = -1 !== e.indexOf('safari-extension'),
            a = -1 !== e.indexOf('safari-web-extension');
        return r || a ? [-1 !== e.indexOf('@') ? e.split('@')[0] : n.Fi, r ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
    };
