n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(998698),
    r = n(933557),
    o = n(703558),
    c = n(731290),
    u = n(607744),
    d = n(819640),
    h = n(496675),
    m = n(699516),
    p = n(594174),
    _ = n(585483),
    f = n(127654),
    E = n(205822),
    g = n(731994),
    C = n(981631),
    I = n(689938);
t.Z = function (e) {
    let { className: t, style: n, channel: T, draftType: x } = e,
        [v, S] = s.useState(!0),
        N = (0, a.e7)([d.Z], () => d.Z.hasLayers()),
        A = (0, a.e7)([h.Z], () => null != T && h.Z.can(C.Plq.ATTACH_FILES, T), [T]),
        Z = null != (0, a.e7)([l.Z], () => l.Z.getActiveCommand(T.id)),
        M = T.getGuildId(),
        b = x === o.d.FirstThreadMessage,
        R = (0, a.e7)([p.default], () => {
            var e;
            return !0 == !(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
        }),
        L = (0, a.e7)([c.Z], () => c.Z.didAgree(M)) && !R,
        j = s.useMemo(() => !N && ((T.isPrivate() && !T.isManaged()) || (null != M && (!T.isNSFW() || L) && A && u.Z.canChatInGuild(M))), [A, L, T, M, N]),
        O = b ? (C.TPd.GUILD_THREADS_ONLY.has(T.type) ? I.Z.Messages.UPLOAD_TO_NEW_POST : I.Z.Messages.UPLOAD_TO_NEW_THREAD) : v ? I.Z.Messages.UPLOAD_TO.format({ destination: (0, r.F6)(T, p.default, m.Z, !0) }) : I.Z.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
    return Z || !j
        ? null
        : (0, i.jsx)(E.Z, {
              className: t,
              style: n,
              title: O,
              description: b ? I.Z.Messages.UPLOAD_AREA_NEW_THREAD_HELP : I.Z.Messages.UPLOAD_AREA_HELP,
              icons: g.J6,
              onDrop: (e) => {
                  if (Z) return !1;
                  j &&
                      null != T &&
                      ((0, f.d)(e, T, x, {
                          requireConfirm: v,
                          showLargeMessageDialog: !1
                      }),
                      _.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => S(!0),
              onDragOver: (e) => {
                  if (Z) return !1;
                  !b && e.shiftKey === v && S(!e.shiftKey);
              }
          });
};
