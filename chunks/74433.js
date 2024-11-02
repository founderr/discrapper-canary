n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(833858),
    i = n(657305),
    a = n(841784),
    s = n(420660),
    o = n(981631),
    l = n(388032);
function u(e) {
    return {
        [o.IIU.STREAMING]: e ? l.t['4CQq9f'] : l.t['0wJXSk'],
        [o.IIU.LISTENING]: e ? l.t['b+lA5+'] : l.t.Vnuxub,
        [o.IIU.WATCHING]: e ? l.t.mqdfDQ : l.t.pW3Ip6,
        [o.IIU.COMPETING]: e ? l.t.oHF7Cg : l.t.QQ2wVF
    };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = arguments.length > 3 ? arguments[3] : void 0;
    if (null != e && e.type === o.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== o.IIU.PLAYING ? l.intl.string(l.t.eXan7O) : l.intl.format(u(n)[o.IIU.STREAMING], { name: e.name });
    if (c && null != e && e.type === o.IIU.HANG_STATUS) return (0, r.O8)(e);
    if (null == e || null == e.name) return null;
    if ((0, s.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return l.intl.format(u(n)[o.IIU.STREAMING], { name: t });
    }
    return (0, a.Z)(e)
        ? (0, i.Z)(e.name)
        : (function (e, t, n) {
              let r = u(n);
              switch (e) {
                  case o.IIU.LISTENING:
                  case o.IIU.WATCHING:
                  case o.IIU.COMPETING:
                      return l.intl.format(r[e], { name: t });
                  case o.IIU.CUSTOM_STATUS:
                  case o.IIU.HANG_STATUS:
                      return null;
                  case o.IIU.PLAYING:
                  default:
                      return n ? l.intl.formatToPlainString(l.t.Sq9xJy, { game: t }) : l.intl.format(l.t.lFApm5, { game: t });
              }
          })(e.type, e.name, n);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0;
    if (Array.isArray(e)) {
        let a = e;
        null != t && (!i || !1 !== t.discoverable) && (a = [...a, null]);
        let s = null;
        for (let e of a) {
            let i = c(e, t, n, r);
            if (null != i)
                return {
                    activity: e,
                    activityText: i
                };
            (null == e ? void 0 : e.type) === o.IIU.CUSTOM_STATUS && null != e.emoji && (s = e);
        }
        return (null == s ? void 0 : s.emoji) != null
            ? {
                  activity: s,
                  activityText: null
              }
            : null;
    }
    return c(e, t, n, r);
}
