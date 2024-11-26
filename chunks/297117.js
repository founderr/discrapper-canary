r.d(t, {
    $3: function () {
        return i;
    },
    $Q: function () {
        return l;
    },
    Dt: function () {
        return f;
    },
    HH: function () {
        return N;
    },
    NP: function () {
        return A;
    },
    R2: function () {
        return u;
    },
    d8: function () {
        return d;
    }
});
var a = r(688838);
function n(e, t, r, n) {
    let _ = {
        filename: e,
        function: '<anonymous>' === t ? a.Fi : t,
        in_app: !0
    };
    return void 0 !== r && (_.lineno = r), void 0 !== n && (_.colno = n), _;
}
let _ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    o = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    E = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    i = [
        30,
        (e) => {
            let t = _.exec(e);
            if (t) {
                let [, e, r, _] = t;
                return n(e, a.Fi, +r, +_);
            }
            let r = o.exec(e);
            if (r) {
                if (r[2] && 0 === r[2].indexOf('eval')) {
                    let e = E.exec(r[2]);
                    e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
                }
                let [e, t] = O(r[1] || a.Fi, r[2]);
                return n(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
            }
        }
    ],
    c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    l = [
        50,
        (e) => {
            let t = c.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(' > eval') > -1) {
                    let e = s.exec(t[3]);
                    e && ((t[1] = t[1] || 'eval'), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ''));
                }
                let e = t[3],
                    r = t[1] || a.Fi;
                return ([r, e] = O(r, e)), n(e, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
            }
        }
    ],
    I = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    u = [
        40,
        (e) => {
            let t = I.exec(e);
            return t ? n(t[2], t[1] || a.Fi, +t[3], t[4] ? +t[4] : void 0) : void 0;
        }
    ],
    R = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    A = [
        10,
        (e) => {
            let t = R.exec(e);
            return t ? n(t[2], t[3] || a.Fi, +t[1]) : void 0;
        }
    ],
    T = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    N = [
        20,
        (e) => {
            let t = T.exec(e);
            return t ? n(t[5], t[3] || t[4] || a.Fi, +t[1], +t[2]) : void 0;
        }
    ],
    d = [i, l],
    f = (0, a.pE)(...d),
    O = (e, t) => {
        let r = -1 !== e.indexOf('safari-extension'),
            n = -1 !== e.indexOf('safari-web-extension');
        return r || n ? [-1 !== e.indexOf('@') ? e.split('@')[0] : a.Fi, r ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
    };
