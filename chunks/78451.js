e.d(n, {
    IF: function () {
        return u;
    },
    LJ: function () {
        return d;
    },
    MF: function () {
        return g;
    },
    X7: function () {
        return E;
    },
    c7: function () {
        return f;
    }
});
var i = e(524437);
e(376345);
var r = e(692547),
    a = e(2150),
    l = e(187819),
    o = e(981631),
    s = e(973005),
    c = e(388032);
function d(t) {
    return t.map((t) => ({
        title: t.name,
        description: t.desc,
        highlightColor: (function (t) {
            switch (t) {
                case m('PRIMARY_400'):
                    return a.q.ACCENT;
                case m('GREEN_360'):
                    return a.q.GREEN;
                case m('YELLOW_360'):
                    return a.q.YELLOW;
                case m('ORANGE_345'):
                    return a.q.ORANGE;
                case m('RED_400'):
                    return a.q.RED;
                default:
                    return a.q.NONE;
            }
        })(t.color),
        value: t.value,
        disabled: t.disabled
    }));
}
function u() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: c.intl.string(c.t.PEzffn),
            desc: c.intl.string(c.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null
        },
        {
            name: c.intl.string(c.t.SsCK8P),
            desc: c.intl.string(c.t['8GCOX1']),
            value: o.sFg.LOW,
            color: n ? void 0 : m('GREEN_360')
        },
        {
            name: c.intl.string(c.t.WwNoR0),
            desc: c.intl.formatToPlainString(c.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: n ? void 0 : m('YELLOW_360')
        },
        {
            name: c.intl.string(c.t.I2jMUF),
            desc: c.intl.formatToPlainString(c.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: n ? void 0 : m('ORANGE_345')
        },
        {
            name: c.intl.string(c.t.cJY8w8),
            desc: c.intl.string(c.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: n ? void 0 : m('RED_400')
        }
    ];
}
function g() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: c.intl.string(c.t.iHuPEx),
            desc: c.intl.string(c.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: m('RED_400')
        },
        {
            name: c.intl.string(c.t.ynfFaG),
            desc: c.intl.string(c.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: m('YELLOW_360')
        },
        {
            name: c.intl.string(c.t.VbSyAw),
            desc: c.intl.string(c.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: m('PRIMARY_400')
        }
    ];
}
function f() {
    let t = (0, l.sp)({ location: 'generate-dm-spam-options' });
    return [
        {
            name: t ? c.intl.string(c.t['4IaoCA']) : c.intl.string(c.t['DY6/Fx']),
            desc: t ? c.intl.string(c.t.TgipjI) : c.intl.string(c.t.p5t0h4),
            value: i.Xr.FRIENDS_AND_NON_FRIENDS,
            color: m('GREEN_360')
        },
        {
            name: t ? c.intl.string(c.t['6NnX6O']) : c.intl.string(c.t.IUO82t),
            desc: t ? c.intl.string(c.t['+dw1qq']) : c.intl.string(c.t['Fo/jub']),
            value: i.Xr.NON_FRIENDS,
            color: m('YELLOW_360')
        },
        {
            name: t ? c.intl.string(c.t['1tiAFx']) : c.intl.string(c.t.XV5TIi),
            desc: t ? c.intl.string(c.t.LKTyeH) : c.intl.string(c.t.Ykdtoq),
            value: i.Xr.DISABLED,
            color: m('RED_400')
        }
    ];
}
function E() {
    return [
        {
            name: c.intl.string(c.t.PhNlh4),
            desc: c.intl.string(c.t['Fw+Lvr']),
            value: s.TI.FRIENDS_AND_NON_FRIENDS,
            color: m('GREEN_360')
        },
        {
            name: c.intl.string(c.t['8ioJ4e']),
            desc: c.intl.string(c.t.z4l4Cg),
            value: s.TI.NON_FRIENDS,
            color: m('YELLOW_360')
        },
        {
            name: c.intl.string(c.t.FLfuhI),
            desc: c.intl.string(c.t.MoZlaG),
            value: s.TI.DISABLED,
            color: m('RED_400')
        }
    ];
}
function m(t) {
    return r.Z.unsafe_rawColors[t].css;
}
