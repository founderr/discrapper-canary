n.d(t, {
    o: function () {
        return _;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(593473),
    c = n(591759);
let d = (e) => {
        if (null == e || '' === e) return null;
        try {
            let t = new URL(e);
            return c.Z.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
        } catch (e) {
            return null;
        }
    },
    _ = (e) => {
        let t = (0, u.parse)(e);
        return {
            desktop: d(t.desktop_link),
            mobile: d(t.mobile_link)
        };
    };
