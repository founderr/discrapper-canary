t.d(n, {
    $d: function () {
        return h;
    },
    BQ: function () {
        return f;
    },
    Cb: function () {
        return P;
    },
    Hu: function () {
        return L;
    },
    Wx: function () {
        return C;
    },
    Y$: function () {
        return I;
    },
    Yn: function () {
        return b;
    },
    jD: function () {
        return E;
    },
    lf: function () {
        return x;
    },
    sl: function () {
        return g;
    },
    vJ: function () {
        return N;
    },
    yJ: function () {
        return v;
    },
    ye: function () {
        return A;
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
    u = t(827498),
    m = t(981631),
    p = t(689079),
    _ = t(689938);
let C = { id: p.bi.BUILT_IN };
function f(e) {
    return e.id !== p.bi.BUILT_IN;
}
function h(e) {
    return f(e) ? e.name : _.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function E(e) {
    return f(e) ? e.description : _.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function A(e) {
    var n;
    return f(e) && (0, d.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, m.udG.EMBEDDED);
}
function N(e) {
    var n;
    return f(e) && (0, d.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, m.udG.PARTNER);
}
function x(e) {
    var n;
    return f(e) && (0, d.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, m.udG.PROMOTED);
}
function v(e) {
    return f(e) && A(e) ? (e instanceof s.Z ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function I(e) {
    let { command: n, optionValues: t, context: s, commandTargetId: c, maxSizeCallback: d, sectionName: u } = e,
        { channel: m } = s,
        p = async () => {
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
                        title: _.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: _.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: _.Z.Messages.RETRY,
                        onConfirm: () => p()
                    }),
                    e)
                );
            }
        };
    return p();
}
function g(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: t, ...i } = n;
    return f(e)
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
              name: _.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: _.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function P(e) {
    return !!f(e) && ('is_monetized' in e ? e.is_monetized : e.isMonetized);
}
function L(e) {
    let n = v(e);
    return null != n && n.displays_advertisements;
}
function b(e) {
    return e === u._b.TEXT;
}
