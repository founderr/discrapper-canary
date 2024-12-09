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
    m = n(540059),
    g = n(661824),
    E = n(703558),
    v = n(117530),
    I = n(459273),
    T = n(444282),
    b = n(898463),
    S = n(981631),
    y = n(995987),
    A = n(763971);
let N = [];
function C(e) {
    let { channelId: t, type: n } = e,
        a = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        C = (0, p.Z)('attachments', l.hy.HORIZONTAL),
        R = (0, u.e7)([v.Z], () => v.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: O,
            commandOptions: D,
            commandOptionStates: L
        } = (0, u.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: N,
                    commandOptionStates: null
                };
            let n = h.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }),
        x = i.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == D
                        ? void 0
                        : D.filter((e) => {
                              var t;
                              return e.type === f.jw.ATTACHMENT && (null == L ? void 0 : null === (t = L[e.name]) || void 0 === t ? void 0 : t.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [D, L]),
        [w, P] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return c.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => c.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [t, n]);
    let M = i.useCallback(() => {
        C.focusFirstVisibleItem();
    }, [C]);
    (0, I.yp)({
        event: S.CkL.FOCUS_ATTACHMENT_AREA,
        handler: M
    }),
        i.useEffect(() => {
            if (O) {
                let e = [];
                w.forEach((t) => {
                    !x.some((e) => t.name === e.name) && e.push(t);
                }),
                    e.forEach((e) => {
                        d.Z.remove(t, e.name, n.drafts.type);
                    }),
                    P(x);
            }
        }, [t, x.length, n]);
    let k = (0, m.Q3)('ChannelAttachmentArea');
    return (!O && 0 === R.length) || (O && 0 === x.length)
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(o.bG, {
                      navigator: C,
                      children: (0, r.jsx)(o.SJ, {
                          children: (e) => {
                              let { ref: i, ...o } = e;
                              return (0, r.jsx)('ul', {
                                  ref: i,
                                  ...o,
                                  className: s()(y.channelAttachmentArea, A.scrollbarGhost),
                                  children: O
                                      ? x.map((e) =>
                                            (0, r.jsx)(
                                                T.Z,
                                                {
                                                    channelId: t,
                                                    keyboardModeEnabled: a,
                                                    option: e
                                                },
                                                e.name
                                            )
                                        )
                                      : R.map((e) =>
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
                  n.drafts.type === E.d.FirstThreadMessage || k ? null : (0, r.jsx)(g.Z, {})
              ]
          });
}
t.Z = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i } = e;
    return i
        ? (0, r.jsx)(C, {
              channelId: t,
              type: n
          })
        : null;
});
