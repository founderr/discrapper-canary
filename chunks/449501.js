"use strict";
let t, o;
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007");
var n = E("446674"),
  a = E("95410"),
  i = E("913144"),
  r = E("49111");
let I = "PictureInPictureLocation",
  T = new Map,
  s = r.PictureInPicturePositions.BOTTOM_RIGHT,
  S = {};
class N extends n.default.Store {
  initialize() {
    s = a.default.get(I, r.PictureInPicturePositions.BOTTOM_RIGHT)
  }
  get pipWindow() {
    var e;
    return null == t && null == o ? null : T.get(null !== (e = null != t ? t : o) && void 0 !== e ? e : "")
  }
  get pipVideoWindow() {
    return null == t ? null : T.get(t)
  }
  get pipActivityWindow() {
    return null == o ? null : T.get(o)
  }
  get pipWindows() {
    return T
  }
  isEmbeddedActivityHidden() {
    return null == o
  }
  getDockedRect(e) {
    return S[e]
  }
  isOpen(e) {
    return null != e && T.has(e)
  }
}
N.displayName = "PictureInPictureStore";
var O = new N(i.default, {
  PICTURE_IN_PICTURE_OPEN: function(e) {
    var _, E;
    let {
      id: n,
      component: a,
      props: i
    } = e, I = T.get(n);
    if (null != I) return;
    let S = {
      id: n,
      component: a,
      position: null !== (_ = i.position) && void 0 !== _ ? _ : s,
      props: i,
      docked: null !== (E = i.docked) && void 0 !== E && E
    };
    T.set(n, S), a === r.PictureInPictureComponents.VIDEO ? null == t && (t = n) : a === r.PictureInPictureComponents.EMBED_IFRAME && null == o && (o = n)
  },
  PICTURE_IN_PICTURE_CLOSE: function(e) {
    let {
      id: _
    } = e;
    if (!T.has(_)) return !1;
    {
      T.delete(_);
      let e = Array.from(T.keys());
      t === _ ? t = e.find(e => {
        let _ = T.get(e);
        return null != _ && _.component === r.PictureInPictureComponents.VIDEO
      }) : o === _ && (o = e.find(e => {
        let _ = T.get(e);
        return null != _ && _.component === r.PictureInPictureComponents.EMBED_IFRAME
      }))
    }
  },
  PICTURE_IN_PICTURE_MOVE: function(e) {
    let {
      id: _,
      position: E
    } = e;
    if (null == _ || t !== _ && o !== _) return !1;
    {
      let e = new Map;
      T.forEach((_, t) => {
        e.set(t, {
          ..._,
          position: E
        })
      }), T = e, s = E, a.default.set(I, E)
    }
  },
  PICTURE_IN_PICTURE_HIDE: function(e) {
    let {
      id: _
    } = e;
    if (t !== _ && o !== _) return !1;
    {
      let e = T.get(_);
      if (null == e) return !1;
      T.set(_, {
        ...e,
        hidden: !0
      })
    }
  },
  PICTURE_IN_PICTURE_SHOW: function(e) {
    let {
      id: _
    } = e;
    if (t !== _ && o !== _) return !1;
    {
      let e = T.get(_);
      if (null == e) return !1;
      T.set(_, {
        ...e,
        hidden: !1
      })
    }
  },
  PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
    let {
      id: _,
      rect: E
    } = e;
    S[_] = E
  },
  PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
    let {
      id: _
    } = e, E = T.get(_);
    null != E && (E.component === r.PictureInPictureComponents.VIDEO ? t = _ : E.component === r.PictureInPictureComponents.EMBED_IFRAME && (o = _))
  },
  LOGOUT: function() {
    t = null, o = null, T = new Map
  }
})