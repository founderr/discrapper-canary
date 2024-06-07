    "use strict";
    t.r(a), t.d(a, {
      getInitialStreamTarget: function() {
        return n
      },
      getStreamTarget: function() {
        return i
      }
    }), t("47120");
    var d = t("823379");

    function n(e, a) {
      let t = e.find(e => e.processId === a);
      return null == t ? null : i(e, t)
    }
    let c = "356869127241072640";

    function i(e, a) {
      var t;
      if (null == a) return null;
      if (a.applicationId === c) return function(e, a) {
        let t = a.processPath.length > 1 ? a.processPath[a.processPath.length - 2] : 0,
          d = e.filter(e => e.applicationId === c && e.processPath.includes(t)),
          n = d.find(e => "league of legends.exe" === e.executableName);
        return void 0 !== n ? n : d.length > 0 ? d[0] : null
      }(e, a);
      let n = new Map(e.map(e => [e.processId, e])),
        i = a.processPath.map(e => n.get(e)).find(e => null != e);
      if (null == i) return null;
      let o = e.map(e => {
        let a = e.processPath.findIndex(e => n.has(e));
        return -1 === a ? null : {
          application: e,
          rootedPath: e.processPath.slice(a)
        }
      }).filter(d.isNotNullish).filter(e => e.rootedPath[0] === i.processId);
      o.sort((e, a) => {
        let t = e.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle),
          d = f(a.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle), t);
        return 0 !== d ? d : f(a.rootedPath, e.rootedPath)
      });
      let r = null !== (t = o.find(e => null != e.application.windowHandle)) && void 0 !== t ? t : o[0];
      return null == r ? null : r.application
    }

    function f(e, a) {
      return e.length - a.length
    }