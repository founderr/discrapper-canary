    "use strict";
    t.r(a), t.d(a, {
      getInitialStreamTarget: function() {
        return c
      },
      getStreamTarget: function() {
        return i
      }
    }), t("47120");
    var d = t("823379");

    function c(e, a) {
      let t = e.find(e => e.processId === a);
      return null == t ? null : i(e, t)
    }
    let n = "356869127241072640";

    function i(e, a) {
      var t;
      if (null == a) return null;
      if (a.applicationId === n) return function(e, a) {
        let t = a.processPath.length > 1 ? a.processPath[a.processPath.length - 2] : 0,
          d = e.filter(e => e.applicationId === n && e.processPath.includes(t)),
          c = d.find(e => "league of legends.exe" === e.executableName);
        return void 0 !== c ? c : d.length > 0 ? d[0] : null
      }(e, a);
      let c = new Map(e.map(e => [e.processId, e])),
        i = a.processPath.map(e => c.get(e)).find(e => null != e);
      if (null == i) return null;
      let o = e.map(e => {
        let a = e.processPath.findIndex(e => c.has(e));
        return -1 === a ? null : {
          application: e,
          rootedPath: e.processPath.slice(a)
        }
      }).filter(d.isNotNullish).filter(e => e.rootedPath[0] === i.processId);
      o.sort((e, a) => {
        let t = e.rootedPath.map(e => c.get(e)).filter(e => null != e && null != e.windowHandle),
          d = f(a.rootedPath.map(e => c.get(e)).filter(e => null != e && null != e.windowHandle), t);
        return 0 !== d ? d : f(a.rootedPath, e.rootedPath)
      });
      let r = null !== (t = o.find(e => null != e.application.windowHandle)) && void 0 !== t ? t : o[0];
      return null == r ? null : r.application
    }

    function f(e, a) {
      return e.length - a.length
    }