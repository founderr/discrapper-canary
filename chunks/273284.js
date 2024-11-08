n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(657305),
    i = n(841784),
    a = n(833858),
    s = n(981631),
    o = n(388032);
function l(e) {
    switch (e.type) {
        case s.IIU.STREAMING:
            let t = null != e.details && '' !== e.details ? e.details : e.name;
            return o.intl.formatToPlainString(o.t['0wJXSk'], { name: t });
        case s.IIU.LISTENING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return o.intl.formatToPlainString(o.t.Vnuxub, { name: n });
        case s.IIU.WATCHING:
            let l = null != e.details && '' !== e.details ? e.details : e.name;
            return o.intl.formatToPlainString(o.t.pW3Ip6, { name: l });
        case s.IIU.COMPETING:
            return o.intl.formatToPlainString(o.t.QQ2wVF, { name: e.name });
        case s.IIU.HANG_STATUS:
            return (0, a.O8)(e);
        case s.IIU.PLAYING:
        default:
            if ((0, i.Z)(e)) return (0, r.Z)(e.name);
            return o.intl.formatToPlainString(o.t.lFApm5, { game: e.name });
    }
}
