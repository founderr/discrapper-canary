t.d(e, {
    $d: function () {
        return I;
    },
    BQ: function () {
        return A;
    },
    Cb: function () {
        return S;
    },
    Hu: function () {
        return Z;
    },
    Wx: function () {
        return T;
    },
    XZ: function () {
        return m;
    },
    Y$: function () {
        return R;
    },
    Yn: function () {
        return D;
    },
    jD: function () {
        return N;
    },
    lf: function () {
        return O;
    },
    sl: function () {
        return p;
    },
    vJ: function () {
        return M;
    },
    yJ: function () {
        return P;
    },
    ye: function () {
        return C;
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
    E = t(827498),
    _ = t(981631),
    d = t(689079),
    f = t(689938);
let T = { id: d.bi.BUILT_IN };
function A(n) {
    return n.id !== d.bi.BUILT_IN;
}
function I(n) {
    return A(n) ? n.name : f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function N(n) {
    return A(n) ? n.description : f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function C(n) {
    var e;
    return A(n) && (0, l.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, _.udG.EMBEDDED);
}
function M(n) {
    var e;
    return A(n) && (0, l.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, _.udG.PARTNER);
}
function O(n) {
    var e;
    return A(n) && (0, l.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, _.udG.PROMOTED);
}
function P(n) {
    return A(n) && C(n) ? (n instanceof a.Z ? n.embeddedActivityConfig : n.embedded_activity_config) : null;
}
function R(n) {
    let { command: e, optionValues: t, context: a, commandTargetId: s, maxSizeCallback: l, sectionName: E } = n,
        { channel: _ } = a,
        d = async () => {
            try {
                let r = await (0, u.Z)({
                    command: e,
                    optionValues: t,
                    context: a,
                    commandTargetId: s,
                    maxSizeCallback: l,
                    commandOrigin: o.bB.APPLICATION_LAUNCHER,
                    sectionName: E
                });
                if (e.inputType === o.iw.BUILT_IN_TEXT && null != r) {
                    var n;
                    let e = c.ZP.parse(_, r.content);
                    (e.tts = null !== (n = r.tts) && void 0 !== n && n), i.Z.sendMessage(a.channel.id, e);
                }
            } catch (n) {
                throw (
                    (r.Z.show({
                        title: f.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: f.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: f.Z.Messages.RETRY,
                        onConfirm: () => d()
                    }),
                    n)
                );
            }
        };
    return d();
}
function p(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: t, ...r } = e;
    return A(n)
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
              name: f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function S(n) {
    return !!A(n) && ('is_monetized' in n ? n.is_monetized : n.isMonetized);
}
function Z(n) {
    let e = P(n);
    return null != e && e.displays_advertisements;
}
function D(n) {
    return n === E._b.TEXT;
}
function m(n) {
    return null == n ? '' : (n.charAt(0).toLocaleUpperCase() + n.slice(1)).replaceAll('_', ' ');
}
