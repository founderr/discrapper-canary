"use strict";
E.r(_), E.d(_, {
  MainWindowDispatch: function() {
    return n
  },
  getWindowDispatchForElement: function() {
    return s
  },
  getAppWindowContextValue: function() {
    return R
  },
  getCurrentlyInteractingAppContext: function() {
    return N
  },
  AppWindowContextProvider: function() {
    return O
  },
  useAppContext: function() {
    return S
  },
  useWindowDispatch: function() {
    return L
  },
  default: function() {
    return l
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  I = E("659500"),
  T = E("816454"),
  r = E("421804"),
  a = E("49111");
let n = new I.ComponentDispatcher,
  i = o.createContext({
    appContext: a.AppContext.APP,
    renderWindow: window,
    windowDispatch: n,
    windowId: (0, T.getMainWindowId)()
  }),
  A = new Map;

function s(e) {
  var _;
  let E = e.ownerDocument.defaultView;
  if (null == E) return;
  let t = (0, T.getWindowId)(E);
  return null === (_ = A.get(t)) || void 0 === _ ? void 0 : _.windowDispatch
}

function R(e) {
  return A.get(e)
}

function N() {
  let e = function() {
    var e;
    let _ = (0, r.getCurrentlyInteractingWindowId)();
    return null == _ ? null : null !== (e = A.get(_)) && void 0 !== e ? e : null
  }();
  return null != e ? e.appContext : null
}

function O(e) {
  let {
    appContext: _,
    renderWindow: E,
    children: o
  } = e, r = function(e, _) {
    let E = (0, T.getWindowId)(_),
      t = A.get(E);
    if (null == t) {
      let o = new I.ComponentDispatcher;
      t = {
        appContext: e,
        renderWindow: _,
        windowDispatch: o,
        windowId: E
      }, A.set(E, t), _.addEventListener("unload", () => {
        A.delete(E)
      })
    }
    return t
  }(_, E);
  return (0, t.jsx)(i.Provider, {
    value: r,
    children: o
  })
}

function S() {
  return o.useContext(i).appContext
}

function L() {
  return o.useContext(i).windowDispatch
}
var l = i