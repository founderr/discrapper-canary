n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250),
  i = n(470079),
  l = n(704215),
  a = n(481060),
  r = n(785697),
  o = n(626135),
  c = n(700785),
  u = n(645041),
  d = n(981631),
  E = n(921944),
  h = n(647086),
  _ = n(135899);

function I(e) {
  var t;
  let I = (0, r.SE)(e),
    m = _.$X.some(t => (null == e ? void 0 : e.id) !== h._ && c.oz(t, e)),
    T = (null == e ? void 0 : e.defaultMessageNotifications) === d.bL.ALL_MESSAGES,
    g = (0, u.FT)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.lds),
    p = I && (m || T) && !g,
    N = i.useCallback(() => {
      var t;
      (0, u.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.lds, !0, E.L.DISMISS)
    }, [e]),
    S = i.useRef(!1);
  i.useEffect(() => {
    if (p && !S.current) {
      var t;
      (0, a.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("54597")]).then(n.bind(n, 29022));
        return n => (0, s.jsx)(t, {
          guild: e,
          canEveryoneModerate: m,
          isDefaultNotificationsAllMessages: T,
          ...n
        })
      }, {
        onCloseCallback: N
      }), o.default.track(d.rMx.DISMISSIBLE_CONTENT_SHOWN, {
        type: l.C[l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.lds
      }), S.current = !0
    }
  }, [m, e, N, T, p])
}