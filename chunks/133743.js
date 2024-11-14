n.d(t, {
    Gp: function () {
        return c;
    },
    O4: function () {
        return s;
    },
    Yp: function () {
        return a;
    },
    ph: function () {
        return o;
    }
});
var i = n(703656),
    r = n(258971),
    l = n(981631);
let a = () => {
        let e = { previousView: (0, r.Xh)() };
        (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS, { state: e });
    },
    s = (e) => {
        let { categoryId: t } = e,
            n = { previousView: (0, r.Xh)() };
        (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: n });
    },
    o = (e) => {
        let { applicationId: t } = e,
            n = { previousView: (0, r.Xh)() };
        (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: n });
    },
    c = (e) => {
        let {
            location: { state: t }
        } = (0, i.s1)();
        (0, i.dL)(e, t);
    };
