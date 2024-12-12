r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(47120);
var a = r(594174),
    s = r(768581),
    o = r(823379),
    l = r(981631);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        r = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
        case l.d4z.DM:
            let [i] = e.recipients.map(a.default.getUser).filter(o.lm);
            if (null == i) return null;
            return i.getAvatarURL(void 0, n, r);
        case l.d4z.GROUP_DM:
            return s.ZP.getChannelIconURL({
                id: e.id,
                icon: e.icon,
                applicationId: e.getApplicationId(),
                size: n
            });
    }
}
