t.d(e, {
    $d: function () {
        return C;
    },
    BQ: function () {
        return N;
    },
    Cb: function () {
        return S;
    },
    Hu: function () {
        return h;
    },
    Wx: function () {
        return I;
    },
    XZ: function () {
        return g;
    },
    Y$: function () {
        return m;
    },
    Yn: function () {
        return D;
    },
    jD: function () {
        return M;
    },
    lf: function () {
        return R;
    },
    pF: function () {
        return L;
    },
    sl: function () {
        return Z;
    },
    vJ: function () {
        return P;
    },
    yJ: function () {
        return p;
    },
    ye: function () {
        return O;
    }
}),
    t(789020),
    t(627494),
    t(757143),
    t(653041),
    t(47120);
var r = t(668781),
    i = t(904245),
    o = t(911969),
    u = t(895924),
    c = t(667204),
    a = t(957730),
    l = t(973616),
    s = t(768581),
    E = t(630388),
    _ = t(541099),
    d = t(827498),
    f = t(981631),
    T = t(689079),
    A = t(689938);
let I = { id: T.bi.BUILT_IN };
function N(n) {
    return n.id !== T.bi.BUILT_IN;
}
function C(n) {
    return N(n) ? n.name : A.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}
function M(n) {
    return N(n) ? n.description : A.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}
function O(n) {
    var e;
    return N(n) && (0, E.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, f.udG.EMBEDDED);
}
function P(n) {
    var e;
    return N(n) && (0, E.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, f.udG.PARTNER);
}
function R(n) {
    var e;
    return N(n) && (0, E.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, f.udG.PROMOTED);
}
function p(n) {
    return N(n) && O(n) ? (n instanceof l.Z ? n.embeddedActivityConfig : n.embedded_activity_config) : null;
}
function m(n) {
    let { command: e, optionValues: t, context: o, commandTargetId: l, maxSizeCallback: s, sectionName: E } = n,
        { channel: d } = o,
        f = async () => {
            try {
                let r = await (0, c.Z)({
                    command: e,
                    optionValues: t,
                    context: o,
                    commandTargetId: l,
                    maxSizeCallback: s,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER,
                    sectionName: E,
                    source: _.Z.entrypoint()
                });
                if (e.inputType === u.iw.BUILT_IN_TEXT && null != r) {
                    var n;
                    let e = a.ZP.parse(d, r.content);
                    (e.tts = null !== (n = r.tts) && void 0 !== n && n), i.Z.sendMessage(o.channel.id, e);
                }
            } catch (n) {
                throw (
                    (r.Z.show({
                        title: A.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                        body: A.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                        confirmText: A.Z.Messages.RETRY,
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
    return N(n)
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
              name: A.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description: A.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
          };
}
function S(n) {
    return !!N(n) && ('is_monetized' in n ? n.is_monetized : n.isMonetized);
}
function h(n) {
    let e = p(n);
    return null != e && e.displays_advertisements;
}
function D(n) {
    return n === d._b.TEXT;
}
function g(n) {
    return null == n ? '' : (n.charAt(0).toLocaleUpperCase() + n.slice(1)).replaceAll('_', ' ');
}
function L(n) {
    let e = [];
    for (let t of n) {
        let n = t.items.filter((n) => {
            var e;
            let t = n.application,
                r = null !== (e = n.commands) && void 0 !== e ? e : [];
            return O(t) && r.some((n) => n.type === o.yU.PRIMARY_ENTRY_POINT);
        });
        if (0 !== n.length)
            e.push({
                ...t,
                items: n
            });
    }
    return e;
}
