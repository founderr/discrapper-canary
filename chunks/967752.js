r.d(t, {
    RA: function () {
        return o;
    },
    U4: function () {
        return E;
    },
    vK: function () {
        return c;
    }
});
var a = r(176984),
    n = r(622916);
let _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(e, t = !1) {
    let { host: r, path: a, pass: n, port: _, projectId: o, protocol: E, publicKey: i } = e;
    return `${E}://${i}${t && n ? `:${n}` : ''}@${r}${_ ? `:${_}` : ''}/${a ? `${a}/` : a}${o}`;
}
function E(e) {
    let t = _.exec(e);
    if (!t) {
        (0, n.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${e}`);
        });
        return;
    }
    let [r, a, o = '', E = '', c = '', s = ''] = t.slice(1),
        l = '',
        I = s,
        u = I.split('/');
    if ((u.length > 1 && ((l = u.slice(0, -1).join('/')), (I = u.pop())), I)) {
        let e = I.match(/^\d+/);
        e && (I = e[0]);
    }
    return i({
        host: E,
        pass: o,
        path: l,
        projectId: I,
        port: c,
        protocol: r,
        publicKey: a
    });
}
function i(e) {
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
    let t = 'string' == typeof e ? E(e) : i(e);
    if (
        !!t &&
        !!(function (e) {
            var t;
            if (!a.X) return !0;
            let { port: r, projectId: _, protocol: o } = e;
            if (['protocol', 'publicKey', 'host', 'projectId'].find((t) => !e[t] && (n.kg.error(`Invalid Sentry Dsn: ${t} missing`), !0))) return !1;
            if (!_.match(/^\d+$/)) return n.kg.error(`Invalid Sentry Dsn: Invalid projectId ${_}`), !1;
            return 'http' === (t = o) || 'https' === t ? !(r && isNaN(parseInt(r, 10))) || (n.kg.error(`Invalid Sentry Dsn: Invalid port ${r}`), !1) : (n.kg.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), !1);
        })(t)
    )
        return t;
}
