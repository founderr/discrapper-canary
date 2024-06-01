    "use strict";
    e.r(t), e("47120"), e("312677");
    var n = e("8048"),
      i = e("647425");
    let o = new Map,
      u = r => {
        let {
          canvas: t,
          canvasId: e,
          animationId: u,
          assetUrl: c,
          assetData: s,
          isVisible: a,
          shouldAnimate: f
        } = r, l = new n.default({
          canvas: t,
          id: u,
          assetUrl: c,
          assetData: s,
          isVisible: a,
          shouldAnimate: f,
          onInitialDraw: () => {
            self.postMessage({
              type: i.MessageTypes.FIRST_DRAW,
              canvasId: e
            })
          },
          onError: () => {
            self.postMessage({
              type: i.MessageTypes.ERROR,
              canvasId: e
            })
          }
        });
        o.set(e, l)
      },
      c = r => {
        var t;
        let {
          canvasId: e
        } = r;
        null === (t = o.get(e)) || void 0 === t || t.drop(), o.delete(e)
      },
      s = r => {
        var t;
        let {
          canvasId: e,
          isVisible: n
        } = r;
        null === (t = o.get(e)) || void 0 === t || t.setVisibility(n)
      },
      a = r => {
        var t;
        let {
          canvasId: e,
          shouldAnimate: n,
          nextFrame: i
        } = r;
        null === (t = o.get(e)) || void 0 === t || t.setState(n, i)
      };
    self.addEventListener("message", r => {
      let {
        data: t
      } = r;
      switch (t.type) {
        case i.MessageTypes.INITIALIZE:
          u(t);
          break;
        case i.MessageTypes.DROP:
          c(t);
          break;
        case i.MessageTypes.VISIBILITY_CHANGE:
          s(t);
          break;
        case i.MessageTypes.STATE_CHANGE:
          a(t)
      }
    })