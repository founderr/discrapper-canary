t.d(e, {
    $d: function () {
        return N;
    },
    BQ: function () {
        return I;
    },
    Cb: function () {
        return S;
    },
    Hu: function () {
        return D;
    },
    Wx: function () {
        return A;
    },
    XZ: function () {
        return h;
    },
    Y$: function () {
        return p;
    },
    Yn: function () {
        return m;
    },
    jD: function () {
        return C;
    },
    lf: function () {
        return P;
    },
    sl: function () {
        return Z;
    },
    vJ: function () {
        return O;
    },
    yJ: function () {
        return R;
    },
    ye: function () {
        return M;
    }
}),
    t(789020),
    t(627494),
    t(757143);
var r = t(668781),
    i = t(904245),
    o = t(895924),
    u = t(667204),
    c = t(957730),
    a = t(973616),
    s = t(768581),
    l = t(630388),
    E = t(541099),
    _ = t(827498),
    d = t(981631),
    f = t(689079),
    T = t(689938);
let A = { id: f.bi.BUILT_IN };
function I(n) {
    return n.id !== f.bi.BUILT_IN;
}
function N(n) {
    return I(n) ? n.name : T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function C(n) {
    return I(n) ? n.description : T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function M(n) {
    var e;
    return I(n) && (0, l.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, d.udG.EMBEDDED);
}
function O(n) {
    var e;
    return I(n) && (0, l.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, d.udG.PARTNER);
}
function P(n) {
    var e;
    return I(n) && (0, l.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, d.udG.PROMOTED);
}
function R(n) {
    return I(n) && M(n) ? (n instanceof a.Z ? n.embeddedActivityConfig : n.embedded_activity_config) : null;
}
function p(n) {
    let { command: e, optionValues: t, context: a, commandTargetId: s, maxSizeCallback: l, sectionName: _ } = n,
        { channel: d } = a,
        f = async () => {
            try {
                let r = await (0, u.Z)({
                    command: e,
                    optionValues: t,
                    context: a,
                    commandTargetId: s,
                    maxSizeCallback: l,
                    commandOrigin: o.bB.APPLICATION_LAUNCHER,
                    sectionName: _,
                    source: E.Z.entrypoint()
                });
                if (e.inputType === o.iw.BUILT_IN_TEXT && null != r) {
                    var n;
                    let e = c.ZP.parse(d, r.content);
                    (e.tts = null !== (n = r.tts) && void 0 !== n && n), i.Z.sendMessage(a.channel.id, e);
                }
            } catch (n) {
                throw (
                    (r.Z.show({
                        title: T.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: T.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: T.Z.Messages.RETRY,
                        onConfirm: () => f()
                    }),
                    n)
                );
            }
        };
    return f();
}
function Z(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: t, ...r } = e;
    return I(n)
        ? {
              iconURL: s.ZP.getApplicationIconURL({
                  ...r,
                  id: n.id,
                  icon: n.icon
              }),
              name: n.name,
              description: n.description
          }
        : {
              iconURL: null != t ? t : null,
              name: T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: T.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function S(n) {
    return !!I(n) && ('is_monetized' in n ? n.is_monetized : n.isMonetized);
}
function D(n) {
    let e = R(n);
    return null != e && e.displays_advertisements;
}
function m(n) {
    return n === _._b.TEXT;
}
function h(n) {
    return null == n ? '' : (n.charAt(0).toLocaleUpperCase() + n.slice(1)).replaceAll('_', ' ');
}
