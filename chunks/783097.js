t.d(n, {
    $d: function () {
        return f;
    },
    BQ: function () {
        return C;
    },
    Cb: function () {
        return g;
    },
    Hu: function () {
        return P;
    },
    Wx: function () {
        return _;
    },
    Y$: function () {
        return v;
    },
    jD: function () {
        return h;
    },
    lf: function () {
        return N;
    },
    sl: function () {
        return I;
    },
    vJ: function () {
        return A;
    },
    yJ: function () {
        return x;
    },
    ye: function () {
        return E;
    }
}),
    t(789020);
var i = t(668781),
    a = t(904245),
    l = t(895924),
    o = t(667204),
    r = t(957730),
    s = t(973616),
    c = t(768581),
    d = t(630388),
    u = t(981631),
    m = t(689079),
    p = t(689938);
let _ = { id: m.bi.BUILT_IN };
function C(e) {
    return e.id !== m.bi.BUILT_IN;
}
function f(e) {
    return C(e) ? e.name : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function h(e) {
    return C(e) ? e.description : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function E(e) {
    var n;
    return C(e) && (0, d.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, u.udG.EMBEDDED);
}
function A(e) {
    var n;
    return C(e) && (0, d.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, u.udG.PARTNER);
}
function N(e) {
    var n;
    return C(e) && (0, d.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, u.udG.PROMOTED);
}
function x(e) {
    return C(e) && E(e) ? (e instanceof s.Z ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function v(e) {
    let { command: n, optionValues: t, context: s, commandTargetId: c, maxSizeCallback: d, sectionName: u } = e,
        { channel: m } = s,
        _ = async () => {
            try {
                let i = await (0, o.Z)({
                    command: n,
                    optionValues: t,
                    context: s,
                    commandTargetId: c,
                    maxSizeCallback: d,
                    commandOrigin: l.bB.APPLICATION_LAUNCHER,
                    sectionName: u
                });
                if (n.inputType === l.iw.BUILT_IN_TEXT && null != i) {
                    var e;
                    let n = r.ZP.parse(m, i.content);
                    (n.tts = null !== (e = i.tts) && void 0 !== e && e), a.Z.sendMessage(s.channel.id, n);
                }
            } catch (e) {
                throw (
                    (i.Z.show({
                        title: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: p.Z.Messages.RETRY,
                        onConfirm: () => _()
                    }),
                    e)
                );
            }
        };
    return _();
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: t, ...i } = n;
    return C(e)
        ? {
              iconURL: c.ZP.getApplicationIconURL({
                  ...i,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != t ? t : null,
              name: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function g(e) {
    return !!C(e) && ('is_monetized' in e ? e.is_monetized : e.isMonetized);
}
function P(e) {
    let n = x(e);
    return null != n && n.displays_advertisements;
}
