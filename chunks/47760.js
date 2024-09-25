n.d(t, {
    VK: function () {
        return s;
    },
    qu: function () {
        return l;
    }
});
var r = n(47120);
var i = n(44315);
n(469115);
var a = n(231338);
let o = 0.3;
function s(e) {
    let { angle: t, colors: n } = e;
    return 'linear-gradient('.concat(t, 'deg, ').concat(
        n
            .map((e) => {
                let { token: t, stop: n } = e;
                return ''.concat((0, i.Lq)(t), ' ').concat(n, '%');
            })
            .join(', '),
        ')'
    );
}
function l(e, t) {
    return e === t || (e === a.BR.DARK && t === a.BR.DARKER) || (e === a.BR.DARKER && t === a.BR.DARK) || !1;
}
