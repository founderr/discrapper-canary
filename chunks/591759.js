var r = n(47120);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(628735),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(729594),
    f = n(981631);
let h = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    p = '(?:(?:[a-z]+:)?//)',
    m = '(?:\\S+(?::\\S*)?@)?',
    I = c().v4().source,
    T = '(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+',
    g = '(?:(?:[a-z\\u00a1-\\uffff]{2,}))',
    S = '(?::\\d{2,5})?',
    A = '(?:[/?#][^\\s"]*)?',
    v = RegExp('(?:'.concat(p, '|www\\.)').concat(m, '(?:localhost|').concat(I, '|').concat(T).concat(g, ')').concat(S).concat(A), 'ig'),
    N = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]),
    O = !1;
function R(e) {
    return N.has(e.toLowerCase());
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (h.test(e) || (t && R(e)));
}
function y(e, t) {
    return null != e && null != t && (window.location.host === e || !1);
}
function L(e) {
    return null != e && 'discord:' === e;
}
function b(e) {
    return null != e && E.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && C(E.parse(e).hostname, t);
}
function M(e) {
    return null != e && L(E.parse(e).protocol);
}
function P(e) {
    let t = O ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return ''.concat(location.protocol, '//').concat(t).concat(e);
}
t.Z = {
    URL_REGEX: v,
    isDiscordHostname: C,
    isDiscordLocalhost: y,
    isDiscordProtocol: L,
    isDiscordUrl: D,
    isDiscordUri: M,
    isDiscordCdnUrl: b,
    isDiscordUrlOrUri: (e) => D(e) || M(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return t.startsWith('/channels/') || t.startsWith(f.Z5c.APPLICATION_STORE) || t.startsWith(f.Z5c.APPLICATION_LIBRARY) || t.startsWith(f.Z5c.MESSAGE_REQUESTS) || t.startsWith(f.Z5c.FAMILY_CENTER) || t.startsWith(f.Z5c.ACTIVITIES) || t.startsWith(f.Z5c.COLLECTIBLES_SHOP) || t.startsWith(f.Z5c.ACTIVITY);
    },
    format: (e) => E.format(e),
    formatPathWithQuery: (e, t) =>
        E.format({
            pathname: e,
            query: _().pickBy(t)
        }),
    formatSearch: (e) => E.format({ query: _().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return E.parse(e, !0);
        } catch (e) {
            return null;
        }
    },
    toURLSafe(e, t) {
        try {
            return new URL(e, t);
        } catch (e) {
            return null;
        }
    },
    makeUrl: P
};
