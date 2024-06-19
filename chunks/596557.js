n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250),
  s = n(470079),
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
    g = (null == e ? void 0 : e.defaultMessageNotifications) === d.bL.ALL_MESSAGES,
    p = (0, u.FT)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.lds),
    T = I && (m || g) && !p,
    N = s.useCallback(() => {
      var t;
      (0, u.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.lds, !0, E.L.DISMISS)
    }, [e]),
    S = s.useRef(!1);
  s.useEffect(() => {
    if (T && !S.current) {
      var t;
      (0, a.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("54597")]).then(n.bind(n, 29022));
        return n => (0, i.jsx)(t, {
          guild: e,
          canEveryoneModerate: m,
          isDefaultNotificationsAllMessages: g,
          ...n
        })
      }, {
        onCloseCallback: N
      }), o.default.track(d.rMx.DISMISSIBLE_CONTENT_SHOWN, {
        type: l.C[l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.lds
      }), S.current = !0
    }
  }, [m, e, N, g, T])
}