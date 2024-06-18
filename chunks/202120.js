"use strict";
n.d(t, {
  H: function() {
    return a
  }
});
var i = n(457330),
  r = n(358085),
  s = n(856651),
  o = n(981631);
async function a(e) {
  let {
    location: t,
    twoWayLinkType: n,
    successRedirect: a
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 ? arguments[2] : void 0, u = Math.round(screen.width / 2 - 350), _ = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, c = null;
  !(0, r.isDesktop)() && (c = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(o.Z5c.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(_, ",left=").concat(u, ",width=").concat(700, ",height=").concat(640)));
  let d = l;
  if (null == d && e !== s.Kt) {
    let {
      body: r
    } = await i.Z.authorize(e, {
      location: t,
      twoWayLinkType: n,
      successRedirect: a
    });
    d = r.url
  }
  if (null != d) return null != c ? c.location.href = d : window.open(d), d
}