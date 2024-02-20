"use strict";
let i, a;
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var l = n("446674"),
  s = n("95410"),
  r = n("913144"),
  o = n("49111");
let u = "PictureInPictureLocation",
  d = new Map,
  c = o.PictureInPicturePositions.BOTTOM_RIGHT,
  f = {};
class E extends l.default.Store {
  initialize() {
    c = s.default.get(u, o.PictureInPicturePositions.BOTTOM_RIGHT)
  }
  get pipWindow() {
    var e;
    return null == i && null == a ? null : d.get(null !== (e = null != i ? i : a) && void 0 !== e ? e : "")
  }
  get pipVideoWindow() {
    return null == i ? null : d.get(i)
  }
  get pipActivityWindow() {
    return null == a ? null : d.get(a)
  }
  get pipWindows() {
    return d
  }
  isEmbeddedActivityHidden() {
    return null == a
  }
  getDockedRect(e) {
    return f[e]
  }
  isOpen(e) {
    return null != e && d.has(e)
  }
}
E.displayName = "PictureInPictureStore";
var h = new E(r.default, {
  PICTURE_IN_PICTURE_OPEN: function(e) {
    var t, n;
    let {
      id: l,
      component: s,
      props: r
    } = e, u = d.get(l);
    if (null != u) return;
    let f = {
      id: l,
      component: s,
      position: null !== (t = r.position) && void 0 !== t ? t : c,
      props: r,
      docked: null !== (n = r.docked) && void 0 !== n && n
    };
    d.set(l, f), s === o.PictureInPictureComponents.VIDEO ? null == i && (i = l) : s === o.PictureInPictureComponents.EMBED_IFRAME && null == a && (a = l)
  },
  PICTURE_IN_PICTURE_CLOSE: function(e) {
    let {
      id: t
    } = e;
    if (!d.has(t)) return !1;
    {
      d.delete(t);
      let e = Array.from(d.keys());
      i === t ? i = e.find(e => {
        let t = d.get(e);
        return null != t && t.component === o.PictureInPictureComponents.VIDEO
      }) : a === t && (a = e.find(e => {
        let t = d.get(e);
        return null != t && t.component === o.PictureInPictureComponents.EMBED_IFRAME
      }))
    }
  },
  PICTURE_IN_PICTURE_MOVE: function(e) {
    let {
      id: t,
      position: n
    } = e;
    if (null == t || i !== t && a !== t) return !1;
    {
      let e = new Map;
      d.forEach((t, i) => {
        e.set(i, {
          ...t,
          position: n
        })
      }), d = e, c = n, s.default.set(u, n)
    }
  },
  PICTURE_IN_PICTURE_HIDE: function(e) {
    let {
      id: t
    } = e;
    if (i !== t && a !== t) return !1;
    {
      let e = d.get(t);
      if (null == e) return !1;
      d.set(t, {
        ...e,
        hidden: !0
      })
    }
  },
  PICTURE_IN_PICTURE_SHOW: function(e) {
    let {
      id: t
    } = e;
    if (i !== t && a !== t) return !1;
    {
      let e = d.get(t);
      if (null == e) return !1;
      d.set(t, {
        ...e,
        hidden: !1
      })
    }
  },
  PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
    let {
      id: t,
      rect: n
    } = e;
    f[t] = n
  },
  PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
    let {
      id: t
    } = e, n = d.get(t);
    null != n && (n.component === o.PictureInPictureComponents.VIDEO ? i = t : n.component === o.PictureInPictureComponents.EMBED_IFRAME && (a = t))
  },
  LOGOUT: function() {
    i = null, a = null, d = new Map
  }
})