var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(91192),
    c = n(536895),
    d = n(442837),
    _ = n(570140),
    E = n(166459),
    f = n(911969),
    h = n(607070),
    p = n(209613),
    m = n(998698),
    I = n(661824),
    T = n(703558),
    g = n(117530),
    S = n(459273),
    A = n(444282),
    v = n(898463),
    N = n(981631),
    O = n(989796),
    R = n(112864);
let C = [];
function y(e) {
    let { channelId: t, type: n } = e,
        r = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        i = (0, p.Z)('attachments', c.hy.HORIZONTAL),
        s = (0, d.e7)([g.Z], () => g.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: y,
            commandOptions: L,
            commandOptionStates: b
        } = (0, d.cj)([m.Z], () => {
            let e = m.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: C,
                    commandOptionStates: null
                };
            let n = m.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }),
        D = o.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == L
                        ? void 0
                        : L.filter((e) => {
                              var t;
                              return e.type === f.jw.ATTACHMENT && (null == b ? void 0 : null === (t = b[e.name]) || void 0 === t ? void 0 : t.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [L, b]),
        [M, P] = o.useState([]);
    o.useEffect(() => {
        let e = () => {
            E.Z.clearAll(t, n.drafts.type);
        };
        return _.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => _.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [t, n]);
    let U = o.useCallback(() => {
        i.focusFirstVisibleItem();
    }, [i]);
    return ((0, S.yp)({
        event: N.CkL.FOCUS_ATTACHMENT_AREA,
        handler: U
    }),
    o.useEffect(() => {
        if (y) {
            let e = [];
            M.forEach((t) => {
                !D.some((e) => t.name === e.name) && e.push(t);
            }),
                e.forEach((e) => {
                    E.Z.remove(t, e.name, n.drafts.type);
                }),
                P(D);
        }
    }, [t, D.length, n]),
    (!y && 0 === s.length) || (y && 0 === D.length))
        ? null
        : (0, a.jsxs)(o.Fragment, {
              children: [
                  (0, a.jsx)(u.bG, {
                      navigator: i,
                      children: (0, a.jsx)(u.SJ, {
                          children: (e) => {
                              let { ref: i, ...o } = e;
                              return (0, a.jsx)('ul', {
                                  ref: i,
                                  ...o,
                                  className: l()(O.channelAttachmentArea, R.scrollbarGhost),
                                  children: y
                                      ? D.map((e) =>
                                            (0, a.jsx)(
                                                A.Z,
                                                {
                                                    channelId: t,
                                                    keyboardModeEnabled: r,
                                                    option: e
                                                },
                                                e.name
                                            )
                                        )
                                      : s.map((e) =>
                                            (0, a.jsx)(
                                                v.Z,
                                                {
                                                    channelId: t,
                                                    draftType: n.drafts.type,
                                                    upload: e,
                                                    keyboardModeEnabled: r,
                                                    clip: e.clip
                                                },
                                                e.id
                                            )
                                        )
                              });
                          }
                      })
                  }),
                  n.drafts.type === T.d.FirstThreadMessage ? null : (0, a.jsx)(I.Z, {})
              ]
          });
}
function L(e) {
    let { channelId: t, type: n, canAttachFiles: r } = e;
    return r
        ? (0, a.jsx)(y, {
              channelId: t,
              type: n
          })
        : null;
}
t.Z = o.memo(L);
