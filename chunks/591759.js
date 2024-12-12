var i = r(47120);
var a = r(315314);
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(628735),
    d = r.n(c),
    f = r(392711),
    _ = r.n(f),
    h = r(729594),
    p = r(591759),
    m = r(981631);
let g = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    E = '(?:(?:[a-z]+:)?//)',
    v = '(?:\\S+(?::\\S*)?@)?',
    I = d().v4().source,
    T = '(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+',
    b = '(?:(?:[a-z\\u00a1-\\uffff]{2,}))',
    y = '(?::\\d{2,5})?',
    S = '(?:[/?#][^\\s"]*)?',
    A = RegExp('(?:'.concat(E, '|www\\.)').concat(v, '(?:localhost|').concat(I, '|').concat(T).concat(b, ')').concat(y).concat(S), 'ig'),
    N = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]),
    C = !1;
function R(e) {
    return N.has(e.toLowerCase());
}
function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (g.test(e) || (n && R(e)));
}
function D(e, n) {
    return null != e && null != n && (window.location.host === e || !1);
}
function L(e) {
    return null != e && 'discord:' === e;
}
function x(e) {
    return null != e && h.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
}
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var r;
        let i = null === (r = p.Z.toURLSafe(e)) || void 0 === r ? void 0 : r.hostname;
        if (null != i && O(i, n)) return !0;
    }
    return !1;
}
function P(e) {
    return null != e && L(h.parse(e).protocol);
}
function M(e) {
    let n = C ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return ''.concat(location.protocol, '//').concat(n).concat(e);
}
n.Z = {
    URL_REGEX: A,
    isDiscordHostname: O,
    isDiscordLocalhost: D,
    isDiscordProtocol: L,
    isDiscordUrl: w,
    isDiscordUri: P,
    isDiscordCdnUrl: x,
    isDiscordUrlOrUri: (e) => w(e) || P(e),
    isAppRoute: (e) => {
        let n = e.toLowerCase();
        return n.startsWith('/channels/') || n.startsWith(m.Z5c.APPLICATION_STORE) || n.startsWith(m.Z5c.APPLICATION_LIBRARY) || n.startsWith(m.Z5c.MESSAGE_REQUESTS) || n.startsWith(m.Z5c.FAMILY_CENTER) || n.startsWith(m.Z5c.ACTIVITIES) || n.startsWith(m.Z5c.COLLECTIBLES_SHOP) || n.startsWith(m.Z5c.ACTIVITY);
    },
    format: (e) => h.format(e),
    formatPathWithQuery: (e, n) =>
        h.format({
            pathname: e,
            query: _().pickBy(n)
        }),
    formatSearch: (e) => h.format({ query: _().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return h.parse(e, !0);
        } catch (e) {
            return null;
        }
    },
    toURLSafe(e, n) {
        try {
            return new URL(e, n);
        } catch (e) {
            return null;
        }
    },
    makeUrl: M
};
