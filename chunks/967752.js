r.d(t, {
    RA: function () {
        return o;
    },
    U4: function () {
        return i;
    },
    vK: function () {
        return c;
    }
});
var n = r(309544),
    a = r(622916);
let _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(e, t = !1) {
    let { host: r, path: n, pass: a, port: _, projectId: o, protocol: i, publicKey: E } = e;
    return `${i}://${E}${t && a ? `:${a}` : ''}@${r}${_ ? `:${_}` : ''}/${n ? `${n}/` : n}${o}`;
}
function i(e) {
    let t = _.exec(e);
    if (!t) {
        (0, a.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${e}`);
        });
        return;
    }
    let [r, n, o = '', i = '', c = '', s = ''] = t.slice(1),
        I = '',
        u = s,
        l = u.split('/');
    if ((l.length > 1 && ((I = l.slice(0, -1).join('/')), (u = l.pop())), u)) {
        let e = u.match(/^\d+/);
        e && (u = e[0]);
    }
    return E({
        host: i,
        pass: o,
        path: I,
        projectId: u,
        port: c,
        protocol: r,
        publicKey: n
    });
}
function E(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || '',
        pass: e.pass || '',
        host: e.host,
        port: e.port || '',
        path: e.path || '',
        projectId: e.projectId
    };
}
function c(e) {
    let t = 'string' == typeof e ? i(e) : E(e);
    if (
        !!t &&
        !!(function (e) {
            var t;
            if (!n.X) return !0;
            let { port: r, projectId: _, protocol: o } = e;
            if (['protocol', 'publicKey', 'host', 'projectId'].find((t) => !e[t] && (a.kg.error(`Invalid Sentry Dsn: ${t} missing`), !0))) return !1;
            if (!_.match(/^\d+$/)) return a.kg.error(`Invalid Sentry Dsn: Invalid projectId ${_}`), !1;
            return 'http' === (t = o) || 'https' === t ? !(r && isNaN(parseInt(r, 10))) || (a.kg.error(`Invalid Sentry Dsn: Invalid port ${r}`), !1) : (a.kg.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), !1);
        })(t)
    )
        return t;
}
