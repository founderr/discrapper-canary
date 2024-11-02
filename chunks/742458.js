var s, r;
n.d(t, {
    Nz: function () {
        return s;
    },
    o9: function () {
        return l;
    }
}),
    ((r = s || (s = {})).PHONE = 'phone'),
    (r.EMAIL = 'email');
let i = /^[-() \d]+$/,
    o = (e) => e.startsWith('+');
function l(e, t) {
    return 'phone' === e ? !o(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
