t.d(n, {
    $d: function () {
        return E;
    },
    BQ: function () {
        return p;
    },
    Wx: function () {
        return _;
    },
    Y$: function () {
        return h;
    },
    jD: function () {
        return A;
    },
    sl: function () {
        return C;
    },
    ye: function () {
        return N;
    }
}), t(789020);
var i = t(668781), l = t(904245), a = t(895924), r = t(667204), s = t(957730), o = t(768581), c = t(630388), u = t(981631), d = t(689079), m = t(689938);
let _ = { id: d.bi.BUILT_IN };
function p(e) {
    return e.id !== d.bi.BUILT_IN;
}
function E(e) {
    return p(e) ? e.name : m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function A(e) {
    return p(e) ? e.description : m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function N(e) {
    var n;
    let {application: t} = e;
    return p(t) && (0, c.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, u.udG.EMBEDDED);
}
function h(e) {
    let {
            command: n,
            optionValues: t,
            context: o,
            commandTargetId: c,
            maxSizeCallback: u,
            sectionName: d
        } = e, {channel: _} = o, p = async () => {
            try {
                let i = await (0, r.Z)({
                    command: n,
                    optionValues: t,
                    context: o,
                    commandTargetId: c,
                    maxSizeCallback: u,
                    commandOrigin: a.bB.APPLICATION_LAUNCHER,
                    sectionName: d
                });
                if (n.inputType === a.iw.BUILT_IN_TEXT && null != i) {
                    var e;
                    let n = s.ZP.parse(_, i.content);
                    n.tts = null !== (e = i.tts) && void 0 !== e && e, l.Z.sendMessage(o.channel.id, n);
                }
            } catch (e) {
                throw i.Z.show({
                    title: m.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                    body: m.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                    confirmText: m.Z.Messages.RETRY,
                    onConfirm: () => p()
                }), e;
            }
        };
    return p();
}
function C(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            fakeAppIconURL: t,
            ...i
        } = n;
    return p(e) ? {
        iconURL: o.ZP.getApplicationIconURL({
            ...i,
            id: e.id,
            icon: e.icon,
            bot: e.bot
        }),
        name: e.name,
        description: e.description
    } : {
        iconURL: null != t ? t : null,
        name: m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
        description: m.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
    };
}
