n.d(t, {
    $d: function () {
        return T;
    },
    BQ: function () {
        return m;
    },
    Cb: function () {
        return C;
    },
    Hu: function () {
        return L;
    },
    L1: function () {
        return M;
    },
    Wx: function () {
        return I;
    },
    XZ: function () {
        return D;
    },
    Y$: function () {
        return O;
    },
    Yn: function () {
        return y;
    },
    jD: function () {
        return S;
    },
    lf: function () {
        return N;
    },
    pF: function () {
        return b;
    },
    sl: function () {
        return v;
    },
    vJ: function () {
        return A;
    },
    yJ: function () {
        return R;
    },
    ye: function () {
        return g;
    }
}),
    n(789020),
    n(627494),
    n(757143),
    n(653041),
    n(47120);
var r = n(668781),
    i = n(904245),
    a = n(911969),
    s = n(895924),
    o = n(667204),
    l = n(957730),
    u = n(973616),
    c = n(768581),
    d = n(630388),
    _ = n(541099),
    E = n(827498),
    f = n(981631),
    h = n(689079),
    p = n(689938);
let I = { id: h.bi.BUILT_IN };
function m(e) {
    return e.id !== h.bi.BUILT_IN;
}
function T(e) {
    return m(e) ? e.name : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function S(e) {
    return m(e) ? e.description : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function g(e) {
    var t;
    return m(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, f.udG.EMBEDDED);
}
function A(e) {
    var t;
    return m(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, f.udG.PARTNER);
}
function N(e) {
    var t;
    return m(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, f.udG.PROMOTED);
}
function R(e) {
    return m(e) && g(e) ? (e instanceof u.Z ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function O(e) {
    let { command: t, optionValues: n, context: a, commandTargetId: u, maxSizeCallback: c, sectionName: d, commandOrigin: E = s.bB.APPLICATION_LAUNCHER } = e,
        { channel: f } = a,
        h = async () => {
            try {
                let r = await (0, o.Z)({
                    command: t,
                    optionValues: n,
                    context: a,
                    commandTargetId: u,
                    maxSizeCallback: c,
                    commandOrigin: E,
                    sectionName: d,
                    source: _.Z.entrypoint()
                });
                if (t.inputType === s.iw.BUILT_IN_TEXT && null != r) {
                    var e;
                    let t = l.ZP.parse(f, r.content);
                    (t.tts = null !== (e = r.tts) && void 0 !== e && e), i.Z.sendMessage(a.channel.id, t);
                }
            } catch (e) {
                throw (
                    (r.Z.show({
                        title: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: p.Z.Messages.RETRY,
                        onConfirm: () => h()
                    }),
                    e)
                );
            }
        };
    return h();
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...r } = t;
    return m(e)
        ? {
              iconURL: c.ZP.getApplicationIconURL({
                  ...r,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function C(e) {
    return !!m(e) && (e instanceof u.Z, e.storefront_available);
}
function L(e) {
    let t = R(e);
    return null != t && t.displays_advertisements;
}
function y(e) {
    return e === E._b.TEXT;
}
function D(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function b(e) {
    let t = [];
    for (let n of e) {
        let e = n.items.filter((e) => {
            var t;
            let n = e.application,
                r = null !== (t = e.commands) && void 0 !== t ? t : [];
            return g(n) && r.some((e) => e.type === a.yU.PRIMARY_ENTRY_POINT);
        });
        if (0 !== e.length)
            t.push({
                ...n,
                items: e
            });
    }
    return t;
}
function M(e) {
    return e instanceof u.Z
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
