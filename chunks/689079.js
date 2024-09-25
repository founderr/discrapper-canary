n.d(t, {
    Fu: function () {
        return p;
    },
    Lu: function () {
        return s;
    },
    Vd: function () {
        return f;
    },
    WO: function () {
        return o;
    },
    _n: function () {
        return E;
    },
    ak: function () {
        return l;
    },
    al: function () {
        return I;
    },
    bi: function () {
        return r;
    },
    hz: function () {
        return d;
    },
    lr: function () {
        return h;
    },
    oQ: function () {
        return _;
    },
    tn: function () {
        return c;
    },
    um: function () {
        return m;
    }
});
var r,
    i = n(911969),
    a = n(689938);
let o = 'True',
    s = 'False',
    l = [
        {
            name: o,
            displayName: o,
            value: 'true'
        },
        {
            name: s,
            displayName: s,
            value: 'false'
        }
    ];
!(function (e) {
    (e.BUILT_IN = '-1'), (e.FRECENCY = '-2');
})(r || (r = {}));
let u = 10,
    c = u,
    d = 5,
    _ = '\0',
    E = 100,
    f = 3,
    h = 10,
    p = 500;
Object.freeze([]), Object.freeze([]);
let m = 200;
function I(e) {
    if (null != e.choices) return a.Z.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
    switch (e.type) {
        case i.jw.BOOLEAN:
            return a.Z.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
        case i.jw.CHANNEL:
            return a.Z.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
        case i.jw.INTEGER:
            return a.Z.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
        case i.jw.NUMBER:
            return a.Z.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
        case i.jw.ROLE:
            return a.Z.Messages.COMMAND_VALIDATION_ROLE_ERROR;
        case i.jw.USER:
            return a.Z.Messages.COMMAND_VALIDATION_USER_ERROR;
        case i.jw.MENTIONABLE:
            return a.Z.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
        default:
            return a.Z.Messages.COMMAND_VALIDATION_GENERAL_ERROR;
    }
}
