n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(536895),
    u = n(442837),
    c = n(570140),
    d = n(166459),
    f = n(911969),
    _ = n(607070),
    p = n(209613),
    h = n(998698),
    m = n(661824),
    g = n(703558),
    E = n(117530),
    v = n(459273),
    I = n(444282),
    b = n(898463),
    S = n(981631),
    T = n(989796),
    y = n(112864);
let A = [];
function N(e) {
    let { channelId: t, type: n } = e,
        a = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        N = (0, p.Z)('attachments', l.hy.HORIZONTAL),
        C = (0, u.e7)([E.Z], () => E.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: R,
            commandOptions: O,
            commandOptionStates: D
        } = (0, u.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: A,
                    commandOptionStates: null
                };
            let n = h.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }),
        L = i.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == O
                        ? void 0
                        : O.filter((e) => {
                              var t;
                              return e.type === f.jw.ATTACHMENT && (null == D ? void 0 : null === (t = D[e.name]) || void 0 === t ? void 0 : t.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [O, D]),
        [x, w] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return c.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => c.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [t, n]);
    let M = i.useCallback(() => {
        N.focusFirstVisibleItem();
    }, [N]);
    return ((0, v.yp)({
        event: S.CkL.FOCUS_ATTACHMENT_AREA,
        handler: M
    }),
    i.useEffect(() => {
        if (R) {
            let e = [];
            x.forEach((t) => {
                !L.some((e) => t.name === e.name) && e.push(t);
            }),
                e.forEach((e) => {
                    d.Z.remove(t, e.name, n.drafts.type);
                }),
                w(L);
        }
    }, [t, L.length, n]),
    (!R && 0 === C.length) || (R && 0 === L.length))
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(o.bG, {
                      navigator: N,
                      children: (0, r.jsx)(o.SJ, {
                          children: (e) => {
                              let { ref: i, ...o } = e;
                              return (0, r.jsx)('ul', {
                                  ref: i,
                                  ...o,
                                  className: s()(T.channelAttachmentArea, y.scrollbarGhost),
                                  children: R
                                      ? L.map((e) =>
                                            (0, r.jsx)(
                                                I.Z,
                                                {
                                                    channelId: t,
                                                    keyboardModeEnabled: a,
                                                    option: e
                                                },
                                                e.name
                                            )
                                        )
                                      : C.map((e) =>
                                            (0, r.jsx)(
                                                b.Z,
                                                {
                                                    channelId: t,
                                                    draftType: n.drafts.type,
                                                    upload: e,
                                                    keyboardModeEnabled: a,
                                                    clip: e.clip
                                                },
                                                e.id
                                            )
                                        )
                              });
                          }
                      })
                  }),
                  n.drafts.type === g.d.FirstThreadMessage ? null : (0, r.jsx)(m.Z, {})
              ]
          });
}
t.Z = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i } = e;
    return i
        ? (0, r.jsx)(N, {
              channelId: t,
              type: n
          })
        : null;
});
