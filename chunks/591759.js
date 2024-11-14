n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var r = n(628735),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(729594),
    l = n(591759),
    u = n(981631);
let c = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    d = i().v4().source,
    f = RegExp('(?:'.concat('(?:(?:[a-z]+:)?//)', '|www\\.)').concat('(?:\\S+(?::\\S*)?@)?', '(?:localhost|').concat(d, '|').concat('(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+').concat('(?:(?:[a-z\\u00a1-\\uffff]{2,}))', ')').concat('(?::\\d{2,5})?').concat('(?:[/?#][^\\s"]*)?'), 'ig'),
    _ = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);
function p(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return !1;
    return c.test(e) || (n && ((t = e), _.has(t.toLowerCase())));
}
function h(e) {
    return null != e && 'discord:' === e;
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var n;
        let r = null === (n = l.Z.toURLSafe(e)) || void 0 === n ? void 0 : n.hostname;
        if (null != r && p(r, t)) return !0;
    }
    return !1;
}
function g(e) {
    return null != e && h(o.parse(e).protocol);
}
t.Z = {
    URL_REGEX: f,
    isDiscordHostname: p,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && (window.location.host === e || !1);
    },
    isDiscordProtocol: h,
    isDiscordUrl: m,
    isDiscordUri: g,
    isDiscordCdnUrl: function (e) {
        return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordUrlOrUri: (e) => m(e) || g(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return t.startsWith('/channels/') || t.startsWith(u.Z5c.APPLICATION_STORE) || t.startsWith(u.Z5c.APPLICATION_LIBRARY) || t.startsWith(u.Z5c.MESSAGE_REQUESTS) || t.startsWith(u.Z5c.FAMILY_CENTER) || t.startsWith(u.Z5c.ACTIVITIES) || t.startsWith(u.Z5c.COLLECTIBLES_SHOP) || t.startsWith(u.Z5c.ACTIVITY);
    },
    format: (e) => o.format(e),
    formatPathWithQuery: (e, t) =>
        o.format({
            pathname: e,
            query: s().pickBy(t)
        }),
    formatSearch: (e) => o.format({ query: s().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return o.parse(e, !0);
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
    makeUrl: function (e) {
        let t = (0, location.host);
        return ''.concat(location.protocol, '//').concat(t).concat(e);
    }
};
