n.d(t, {
    x: function () {
        return l;
    }
});
var r = n(47120);
var i = n(594174),
    a = n(768581),
    o = n(823379),
    s = n(981631);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
        case s.d4z.DM:
            let [r] = e.recipients.map(i.default.getUser).filter(o.lm);
            if (null == r) return null;
            return r.getAvatarURL(void 0, t, n);
        case s.d4z.GROUP_DM:
            return a.ZP.getChannelIconURL({
                id: e.id,
                icon: e.icon,
                applicationId: e.getApplicationId(),
                size: t
            });
    }
}
