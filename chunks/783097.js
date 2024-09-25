n.d(t, {
    $d: function () {
        return N;
    },
    BQ: function () {
        return v;
    },
    Cb: function () {
        return M;
    },
    Hu: function () {
        return P;
    },
    L1: function () {
        return G;
    },
    Wx: function () {
        return A;
    },
    XZ: function () {
        return w;
    },
    Y$: function () {
        return L;
    },
    Yn: function () {
        return U;
    },
    jD: function () {
        return O;
    },
    lf: function () {
        return y;
    },
    pF: function () {
        return x;
    },
    sl: function () {
        return D;
    },
    vJ: function () {
        return C;
    },
    yJ: function () {
        return b;
    },
    ye: function () {
        return R;
    }
});
var r = n(789020);
var i = n(627494);
var a = n(757143);
var o = n(653041);
var s = n(47120);
var l = n(668781),
    u = n(904245),
    c = n(911969),
    d = n(895924),
    _ = n(667204),
    E = n(957730),
    f = n(973616),
    h = n(768581),
    p = n(630388),
    m = n(541099),
    I = n(827498),
    T = n(981631),
    g = n(689079),
    S = n(689938);
let A = { id: g.bi.BUILT_IN };
function v(e) {
    return e.id !== g.bi.BUILT_IN;
}
function N(e) {
    return v(e) ? e.name : S.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function O(e) {
    return v(e) ? e.description : S.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function R(e) {
    var t;
    return v(e) && (0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, T.udG.EMBEDDED);
}
function C(e) {
    var t;
    return v(e) && (0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, T.udG.PARTNER);
}
function y(e) {
    var t;
    return v(e) && (0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, T.udG.PROMOTED);
}
function b(e) {
    return v(e) && R(e) ? (e instanceof f.Z ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function L(e) {
    let { command: t, optionValues: n, context: r, commandTargetId: i, maxSizeCallback: a, sectionName: o } = e,
        { channel: s } = r,
        c = async () => {
            try {
                let l = await (0, _.Z)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: i,
                    maxSizeCallback: a,
                    commandOrigin: d.bB.APPLICATION_LAUNCHER,
                    sectionName: o,
                    source: m.Z.entrypoint()
                });
                if (t.inputType === d.iw.BUILT_IN_TEXT && null != l) {
                    var e;
                    let t = E.ZP.parse(s, l.content);
                    (t.tts = null !== (e = l.tts) && void 0 !== e && e), u.Z.sendMessage(r.channel.id, t);
                }
            } catch (e) {
                throw (
                    (l.Z.show({
                        title: S.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: S.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: S.Z.Messages.RETRY,
                        onConfirm: () => c()
                    }),
                    e)
                );
            }
        };
    return c();
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...r } = t;
    return v(e)
        ? {
              iconURL: h.ZP.getApplicationIconURL({
                  ...r,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: S.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: S.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function M(e) {
    return !!v(e) && (e instanceof f.Z ? e.isMonetized : e.is_monetized);
}
function P(e) {
    let t = b(e);
    return null != t && t.displays_advertisements;
}
function U(e) {
    return e === I._b.TEXT;
}
function w(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function x(e) {
    let t = [];
    for (let n of e) {
        let e = n.items.filter((e) => {
            var t;
            let n = e.application,
                r = null !== (t = e.commands) && void 0 !== t ? t : [];
            return R(n) && r.some((e) => e.type === c.yU.PRIMARY_ENTRY_POINT);
        });
        if (0 !== e.length)
            t.push({
                ...n,
                items: e
            });
    }
    return t;
}
function G(e) {
    return e instanceof f.Z
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config
          };
}
